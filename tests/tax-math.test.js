const assert = require("assert");
const TaxMath = require("../tax-math.js");

function state(overrides = {}) {
  return {
    profile: {
      taxYear: "2025",
      jurisdiction: "jp",
      taxpayerType: "individual",
      goal: "draft"
    },
    income: { salary: true },
    deductions: { furusato: true },
    amounts: { furusato: "50000" },
    details: {
      salaryRevenue: "5000000",
      salaryIncomeAfterDeduction: "",
      withholdingTax: "120000",
      socialInsuranceDeduction: "750000",
      residentTaxIncomeLevy: "250000",
      manualTaxCredits: ""
    },
    documents: {},
    ...overrides
  };
}

assert.strictEqual(TaxMath.incomeTax(7000000), 974000, "NTA quick-table 7,000,000 yen example");
assert.strictEqual(TaxMath.salaryIncomeDeduction2025(5000000), 1440000, "2025 salary deduction for 5,000,000 yen");
assert.strictEqual(TaxMath.estimateSalaryIncome(5000000), 3560000, "2025 salary income for 5,000,000 yen");
assert.strictEqual(TaxMath.basicDeduction2025(3560000), 680000, "2025 basic deduction band");

const calc = TaxMath.calculateDraftFromState(state());
assert.strictEqual(calc.salaryIncome, 3560000, "calculated salary income");
assert.strictEqual(calc.donationDeduction, 48000, "furusato donation deduction");
assert.strictEqual(calc.taxableIncomeForTax, 2082000, "taxable income rounded to 1,000 yen");
assert.strictEqual(calc.incomeTaxBeforeCredits, 110700, "base income tax");
assert.strictEqual(calc.incomeTaxWithReconstruction, 113000, "income tax plus reconstruction tax rounded to 100 yen");
assert.strictEqual(calc.settlement, 7000, "withholding settlement estimate");
assert.strictEqual(calc.furusato.totalBenefit, 47999, "furusato benefit estimate");

console.log("tax-math tests passed");
