(function attachTaxMath(global) {
  const jp2025Rules = {
    sourceLabel: "Japan 2025 / 令和7年",
    reconstructionRate: 0.021,
    incomeTaxBrackets: [
      { min: 1000, max: 1949000, rate: 0.05, deduction: 0 },
      { min: 1950000, max: 3299000, rate: 0.1, deduction: 97500 },
      { min: 3300000, max: 6949000, rate: 0.2, deduction: 427500 },
      { min: 6950000, max: 8999000, rate: 0.23, deduction: 636000 },
      { min: 9000000, max: 17999000, rate: 0.33, deduction: 1536000 },
      { min: 18000000, max: 39999000, rate: 0.4, deduction: 2796000 },
      { min: 40000000, max: Infinity, rate: 0.45, deduction: 4796000 }
    ],
    sources: [
      "NTA No.2260 income tax rate table",
      "NTA No.1199 basic deduction",
      "NTA No.1150 donation deduction",
      "NTA No.1155 furusato tax"
    ]
  };

  function calculateDraftFromState(state) {
    const trace = [];
    const salaryRevenue = moneyValue(state.details.salaryRevenue || state.amounts.salary);
    const salaryFromSlip = moneyValue(state.details.salaryIncomeAfterDeduction);
    const salaryEstimate = estimateSalaryIncome(salaryRevenue);
    const salaryIncome = salaryFromSlip || salaryEstimate;
    const sideIncome = moneyValue(state.amounts.side);
    const businessIncome = moneyValue(state.amounts.business);
    const investmentIncome = moneyValue(state.amounts.investment);
    const totalIncome = salaryIncome + sideIncome + businessIncome + investmentIncome;
    const basicDeduction = basicDeduction2025(totalIncome);
    const socialInsurance = moneyValue(state.details.socialInsuranceDeduction);
    const medicalDeduction = moneyValue(state.amounts.medical);
    const insuranceDeduction = moneyValue(state.amounts.insurance);
    const familyDeduction = moneyValue(state.amounts.family);
    const donationAmount = moneyValue(state.amounts.donation) + moneyValue(state.amounts.furusato);
    const donationLimit = Math.floor(totalIncome * 0.4);
    const donationDeduction = Math.max(0, Math.min(donationAmount, donationLimit) - 2000);
    const incomeDeductions = basicDeduction + socialInsurance + medicalDeduction + insuranceDeduction + familyDeduction + donationDeduction;
    const taxableIncomeForDisplay = Math.max(0, totalIncome - incomeDeductions);
    const taxableIncomeForTax = floorTo(taxableIncomeForDisplay, 1000);
    const incomeTaxBeforeCredits = incomeTax(taxableIncomeForTax);
    const manualTaxCredits = moneyValue(state.details.manualTaxCredits);
    const mortgageCredit = state.deductions.mortgage ? moneyValue(state.amounts.mortgage) : 0;
    const taxCredits = manualTaxCredits + mortgageCredit;
    const baseIncomeTaxAfterCredits = Math.max(0, incomeTaxBeforeCredits - taxCredits);
    const incomeTaxWithReconstruction = floorTo(baseIncomeTaxAfterCredits * (1 + jp2025Rules.reconstructionRate), 100);
    const withheld = moneyValue(state.details.withholdingTax);
    const settlement = withheld - incomeTaxWithReconstruction;
    const bracket = bracketFor(taxableIncomeForTax);
    const furusato = furusatoEstimate({
      donation: moneyValue(state.amounts.furusato),
      totalIncome,
      marginalRate: bracket.rate,
      residentTaxIncomeLevy: moneyValue(state.details.residentTaxIncomeLevy)
    });

    if (salaryFromSlip) {
      trace.push(`給与所得: using 源泉徴収票 value ${yen(salaryFromSlip)}.`);
    } else if (salaryRevenue) {
      trace.push(`給与所得: estimated from salary revenue ${yen(salaryRevenue)} using the 2025 salary-income deduction bands.`);
    } else {
      trace.push("給与所得: enter 支払金額 or 給与所得控除後の金額 to calculate salary income.");
    }

    if (state.details.employmentStart || state.details.employmentEnd) {
      trace.push(`Employment period: ${state.details.employmentStart || "unknown"} to ${state.details.employmentEnd || "unknown"}. Use actual paid salary totals; do not multiply short employment by 12.`);
    }

    trace.push(`基礎控除: ${yen(basicDeduction)} based on total income ${yen(totalIncome)}.`);
    trace.push(`寄附金控除: ${yen(donationDeduction)} from donations ${yen(donationAmount)}; income-tax donation limit uses 40% of total income.`);
    trace.push("所得税: taxable income is rounded down to the nearest 1,000 yen before applying the NTA quick table.");
    trace.push("復興特別所得税: income tax after credits is multiplied by 102.1%, then rounded down to the nearest 100 yen.");

    return {
      salaryRevenue,
      salaryIncome,
      sideIncome,
      businessIncome,
      investmentIncome,
      totalIncome,
      basicDeduction,
      socialInsurance,
      donationDeduction,
      totalDeductions: incomeDeductions,
      taxableIncomeForDisplay,
      taxableIncomeForTax,
      incomeTaxBeforeCredits,
      taxCredits,
      incomeTaxWithReconstruction,
      withheld,
      settlement,
      furusato,
      trace
    };
  }

  function estimateSalaryIncome(revenue) {
    if (!revenue) return 0;
    const deduction = salaryIncomeDeduction2025(revenue);
    return Math.max(0, Math.floor(revenue - deduction));
  }

  function salaryIncomeDeduction2025(revenue) {
    if (revenue <= 1900000) return 650000;
    if (revenue <= 3600000) return revenue * 0.3 + 80000;
    if (revenue <= 6600000) return revenue * 0.2 + 440000;
    if (revenue <= 8500000) return revenue * 0.1 + 1100000;
    return 1950000;
  }

  function basicDeduction2025(totalIncome) {
    if (totalIncome <= 1320000) return 950000;
    if (totalIncome <= 3360000) return 880000;
    if (totalIncome <= 4890000) return 680000;
    if (totalIncome <= 6550000) return 630000;
    if (totalIncome <= 23500000) return 580000;
    if (totalIncome <= 24000000) return 480000;
    if (totalIncome <= 24500000) return 320000;
    if (totalIncome <= 25000000) return 160000;
    return 0;
  }

  function incomeTax(taxableIncome) {
    if (taxableIncome < 1000) return 0;
    const bracket = bracketFor(taxableIncome);
    return Math.max(0, Math.floor(taxableIncome * bracket.rate - bracket.deduction));
  }

  function bracketFor(taxableIncome) {
    return jp2025Rules.incomeTaxBrackets.find((bracket) => taxableIncome >= bracket.min && taxableIncome <= bracket.max) || {
      rate: 0,
      deduction: 0
    };
  }

  function furusatoEstimate({ donation, totalIncome, marginalRate, residentTaxIncomeLevy }) {
    if (!donation || donation <= 2000) {
      return {
        incomeTaxPart: 0,
        residentBasicPart: 0,
        residentSpecialPart: 0,
        totalBenefit: 0,
        selfBurdenEstimate: donation || 0,
        capApplied: false,
        needsResidentTax: donation > 0
      };
    }

    const donationBase = Math.max(0, Math.min(donation, totalIncome * 0.4) - 2000);
    const rateWithReconstruction = marginalRate ? marginalRate * (1 + jp2025Rules.reconstructionRate) : 0;
    const incomeTaxPart = Math.floor(donationBase * rateWithReconstruction);
    const residentBasicPart = Math.floor((donation - 2000) * 0.1);
    const uncappedSpecialPart = Math.max(0, Math.floor((donation - 2000) * (0.9 - rateWithReconstruction)));
    const specialCap = residentTaxIncomeLevy ? Math.floor(residentTaxIncomeLevy * 0.2) : Infinity;
    const residentSpecialPart = Math.min(uncappedSpecialPart, specialCap);
    const totalBenefit = incomeTaxPart + residentBasicPart + residentSpecialPart;

    return {
      incomeTaxPart,
      residentBasicPart,
      residentSpecialPart,
      totalBenefit,
      selfBurdenEstimate: Math.max(0, donation - totalBenefit),
      capApplied: residentTaxIncomeLevy ? residentSpecialPart < uncappedSpecialPart : false,
      needsResidentTax: !residentTaxIncomeLevy
    };
  }

  function floorTo(value, unit) {
    return Math.floor(Number(value || 0) / unit) * unit;
  }

  function moneyValue(value) {
    const normalized = String(value || "").replace(/[^\d.-]/g, "");
    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function formatMoney(value) {
    return new Intl.NumberFormat("ja-JP").format(value);
  }

  function yen(value) {
    return `${formatMoney(Math.round(Number(value || 0)))} yen`;
  }

  function settlementLabel(calc) {
    if (!calc.withheld) return "No withholding";
    if (calc.settlement > 0) return `Refund est. ${yen(calc.settlement)}`;
    if (calc.settlement < 0) return `Pay est. ${yen(Math.abs(calc.settlement))}`;
    return "Even";
  }

  const api = {
    basicDeduction2025,
    bracketFor,
    calculateDraftFromState,
    estimateSalaryIncome,
    floorTo,
    formatMoney,
    furusatoEstimate,
    incomeTax,
    jp2025Rules,
    moneyValue,
    salaryIncomeDeduction2025,
    settlementLabel,
    yen
  };

  global.TaxMath = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
