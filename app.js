const storageKey = "tax-desk-draft-v1";
const languageKey = "tax-desk-language-v1";

const languageMeta = {
  en: { htmlLang: "en" },
  "zh-TW": { htmlLang: "zh-Hant-TW" },
  ja: { htmlLang: "ja" }
};

const messages = {
  en: {
    "app.title": "Tax Return Desk",
    "app.eyebrow": "Local draft tool",
    "app.name": "Tax Return Desk",
    "language.label": "Language",
    "topbar.eyebrow": "Guided interview",
    "readiness.label": "Draft readiness",
    "readiness.start": "Start with the intake.",
    "readiness.ready": "Nearly ready for review.",
    "readiness.keepGoing": "Keep completing the guided sections.",
    "action.reset": "Reset draft",
    "action.export": "Export JSON",
    "action.print": "Print draft",
    "action.resetConfirm": "Reset this local draft?",
    "step.profile": "Profile",
    "step.income": "Income",
    "step.deductions": "Deductions",
    "step.taxes": "Taxes",
    "step.documents": "Checklist",
    "step.review": "Review",
    "step.scenario": "Scenario",
    "preview.title": "Draft return package",
    "preview.yearSet": "Tax year {year}",
    "preview.yearUnset": "Tax year not set",
    "preview.income": "Income sections",
    "preview.deductions": "Deduction sections",
    "preview.taxes": "Tax areas",
    "preview.docs": "Documents ready",
    "preview.note": "This is a preparation draft, not a filed return.",
    "preview.jpNote": "Estimated income tax etc. {amount}. Review before filing.",
    "issues.title": "Open items",
    "issue.taxYear": "Choose a tax year.",
    "issue.jurisdiction": "Choose a country or tax system.",
    "issue.taxpayerType": "Choose taxpayer type.",
    "issue.goal": "Choose the main goal.",
    "issue.noIncome": "No income section selected yet.",
    "profile.kicker": "Start here",
    "profile.title": "You do not need to know the form yet.",
    "profile.copy": "Answer normal questions first. The system turns them into a document checklist and a draft package.",
    "profile.taxYear": "Tax year",
    "profile.country": "Country / system",
    "profile.taxpayerType": "Taxpayer type",
    "profile.goal": "Main goal",
    "option.choose": "Choose one",
    "option.individual": "Individual",
    "option.sole": "Sole proprietor",
    "option.company": "Company",
    "option.learn": "Understand what I need",
    "option.draft": "Prepare a draft return",
    "option.estimate": "Estimate tax only",
    "income.kicker": "Income",
    "income.title": "Tell the system where money came from.",
    "deductions.kicker": "Deductions",
    "deductions.title": "Pick anything that might reduce taxable income.",
    "deductions.copy": "Furusato and simple income deductions are estimated for Japan 2025. Complex credits stay marked for review.",
    "documents.kicker": "Checklist",
    "documents.title": "Gather documents before worrying about the form.",
    "documents.copy": "Mark items as ready, not applicable, or unresolved. The review page will use this.",
    "taxes.kicker": "Tax coverage",
    "taxes.title": "Choose every tax or insurance area that might apply.",
    "taxes.copy": "Some areas can be estimated here. Others need a notice, payslip, municipality number, or official filing result.",
    "review.kicker": "Review",
    "review.title": "Check the draft before export.",
    "review.copy": "This page shows what is complete, what is missing, and what still needs human judgment.",
    "scenario.kicker": "Scenario",
    "scenario.title": "Salary change under the same tax settings.",
    "scenario.copy": "Only salary changes. Place, selected taxes, deductions, furusato settings, and insurance assumptions stay the same.",
    "scenario.range": "Salary range",
    "scenario.min": "Minimum salary",
    "scenario.max": "Maximum salary",
    "scenario.step": "Step",
    "scenario.curve": "Usable money curve",
    "scenario.split": "Salary split",
    "scenario.table.salary": "Salary",
    "scenario.table.usable": "Usable",
    "scenario.table.tax": "Tax/ins.",
    "scenario.table.rate": "Keep rate",
    "scenario.table.month": "Pay/mo.",
    "scenario.currentUsable": "Current-like usable",
    "scenario.salaryPoint": "{salary} salary point",
    "scenario.bestUsable": "Best usable point",
    "scenario.salary": "{salary} salary",
    "scenario.bestRate": "Best keep rate",
    "scenario.monthView": "{months} month view",
    "scenario.lineTitle": "Annual yen after selected taxes",
    "scenario.usable": "usable",
    "scenario.taxInsurance": "tax / insurance",
    "scenario.currentLike": "current-like",
    "scenario.barTitle": "Each bar splits gross salary into usable money and selected burden"
  },
  "zh-TW": {
    "app.title": "申告書 Desk",
    "app.eyebrow": "本機草稿工具",
    "app.name": "申告書 Desk",
    "language.label": "語言",
    "topbar.eyebrow": "引導式填寫",
    "readiness.label": "草稿完成度",
    "readiness.start": "先從基本資料開始。",
    "readiness.ready": "接近可檢查。",
    "readiness.keepGoing": "繼續完成引導項目。",
    "action.reset": "重設草稿",
    "action.export": "匯出 JSON",
    "action.print": "列印草稿",
    "action.resetConfirm": "要重設這份本機草稿嗎？",
    "step.profile": "基本資料",
    "step.income": "收入",
    "step.deductions": "扣除",
    "step.taxes": "稅費",
    "step.documents": "文件清單",
    "step.review": "檢查",
    "step.scenario": "情境",
    "preview.title": "申報草稿包",
    "preview.yearSet": "{year} 年度",
    "preview.yearUnset": "尚未設定年度",
    "preview.income": "收入項目",
    "preview.deductions": "扣除項目",
    "preview.taxes": "稅費項目",
    "preview.docs": "文件完成",
    "preview.note": "這是準備用草稿，不是已提交的申報。",
    "preview.jpNote": "估算所得稅等：{amount}。提交前請再檢查。",
    "issues.title": "待處理項目",
    "issue.taxYear": "請選擇稅務年度。",
    "issue.jurisdiction": "請選擇國家或稅務制度。",
    "issue.taxpayerType": "請選擇納稅人類型。",
    "issue.goal": "請選擇主要目標。",
    "issue.noIncome": "尚未選擇收入項目。",
    "profile.kicker": "從這裡開始",
    "profile.title": "你不需要先懂申報表。",
    "profile.copy": "先回答一般問題，系統會整理成文件清單和申報草稿。",
    "profile.taxYear": "稅務年度",
    "profile.country": "國家 / 制度",
    "profile.taxpayerType": "納稅人類型",
    "profile.goal": "主要目標",
    "option.choose": "請選擇",
    "option.individual": "個人",
    "option.sole": "個人事業主",
    "option.company": "公司",
    "option.learn": "了解需要準備什麼",
    "option.draft": "準備申報草稿",
    "option.estimate": "只估算稅額",
    "income.kicker": "收入",
    "income.title": "告訴系統收入從哪裡來。",
    "deductions.kicker": "扣除",
    "deductions.title": "選擇可能降低課稅所得的項目。",
    "deductions.copy": "日本 2025 的故鄉納稅和基本扣除會先估算，複雜稅額扣除會標記為需檢查。",
    "documents.kicker": "文件清單",
    "documents.title": "先準備文件，再處理表格。",
    "documents.copy": "把項目標成已備妥、不適用或未解決；檢查頁會使用這些狀態。",
    "taxes.kicker": "稅費範圍",
    "taxes.title": "選擇可能適用的稅金或保險。",
    "taxes.copy": "有些項目可以在這裡估算，有些需要通知書、薪資單、市區町村資料或正式申報結果。",
    "review.kicker": "檢查",
    "review.title": "匯出前檢查草稿。",
    "review.copy": "這裡會顯示已完成、缺少、以及仍需人工判斷的項目。",
    "scenario.kicker": "情境",
    "scenario.title": "在相同稅務設定下比較薪資變化。",
    "scenario.copy": "只改變薪資。居住地、已選稅費、扣除、故鄉納稅和保險假設都保持不變。",
    "scenario.range": "薪資範圍",
    "scenario.min": "最低薪資",
    "scenario.max": "最高薪資",
    "scenario.step": "間距",
    "scenario.curve": "可用金額曲線",
    "scenario.split": "薪資拆分",
    "scenario.table.salary": "薪資",
    "scenario.table.usable": "可用",
    "scenario.table.tax": "稅/保",
    "scenario.table.rate": "保留率",
    "scenario.table.month": "月繳",
    "scenario.currentUsable": "接近目前可用金額",
    "scenario.salaryPoint": "{salary} 薪資點",
    "scenario.bestUsable": "最高可用金額",
    "scenario.salary": "{salary} 薪資",
    "scenario.bestRate": "最高保留率",
    "scenario.monthView": "{months} 個月視圖",
    "scenario.lineTitle": "扣除已選稅費後的年度日圓",
    "scenario.usable": "可用",
    "scenario.taxInsurance": "稅 / 保險",
    "scenario.currentLike": "接近目前",
    "scenario.barTitle": "每個長條把總薪資拆成可用金額與已選負擔"
  },
  ja: {
    "app.title": "申告書 Desk",
    "app.eyebrow": "ローカル下書きツール",
    "app.name": "申告書 Desk",
    "language.label": "言語",
    "topbar.eyebrow": "ガイド入力",
    "readiness.label": "下書き準備度",
    "readiness.start": "まず基本情報から始めてください。",
    "readiness.ready": "確認まであと少し。",
    "readiness.keepGoing": "ガイド項目を続けて入力してください。",
    "action.reset": "下書きをリセット",
    "action.export": "JSONを書き出す",
    "action.print": "下書きを印刷",
    "action.resetConfirm": "このローカル下書きをリセットしますか？",
    "step.profile": "基本情報",
    "step.income": "収入",
    "step.deductions": "控除",
    "step.taxes": "税・保険",
    "step.documents": "書類リスト",
    "step.review": "確認",
    "step.scenario": "シナリオ",
    "preview.title": "申告下書きパッケージ",
    "preview.yearSet": "{year}年分",
    "preview.yearUnset": "年分未設定",
    "preview.income": "収入項目",
    "preview.deductions": "控除項目",
    "preview.taxes": "税・保険項目",
    "preview.docs": "書類準備",
    "preview.note": "これは準備用の下書きで、提出済み申告ではありません。",
    "preview.jpNote": "所得税等の見積り：{amount}。提出前に確認してください。",
    "issues.title": "未対応項目",
    "issue.taxYear": "税務年度を選んでください。",
    "issue.jurisdiction": "国または税制を選んでください。",
    "issue.taxpayerType": "納税者区分を選んでください。",
    "issue.goal": "主な目的を選んでください。",
    "issue.noIncome": "収入項目がまだ選択されていません。",
    "profile.kicker": "ここから開始",
    "profile.title": "申告書の形式を先に知る必要はありません。",
    "profile.copy": "通常の質問に答えると、必要書類リストと申告下書きに整理されます。",
    "profile.taxYear": "税務年度",
    "profile.country": "国 / 制度",
    "profile.taxpayerType": "納税者区分",
    "profile.goal": "主な目的",
    "option.choose": "選択してください",
    "option.individual": "個人",
    "option.sole": "個人事業主",
    "option.company": "法人",
    "option.learn": "必要なものを理解する",
    "option.draft": "申告下書きを作る",
    "option.estimate": "税額だけ見積もる",
    "income.kicker": "収入",
    "income.title": "収入の種類を入力します。",
    "deductions.kicker": "控除",
    "deductions.title": "課税所得を減らす可能性がある項目を選びます。",
    "deductions.copy": "日本2025年のふるさと納税と簡易控除は見積り、複雑な税額控除は確認項目として扱います。",
    "documents.kicker": "書類リスト",
    "documents.title": "フォームより先に必要書類を集めます。",
    "documents.copy": "準備済み、対象外、未解決を選んでください。確認ページで使います。",
    "taxes.kicker": "税・保険の範囲",
    "taxes.title": "該当する可能性のある税金や保険を選びます。",
    "taxes.copy": "ここで見積もれる項目もあります。通知書、給与明細、市区町村の数値、正式な申告結果が必要な項目もあります。",
    "review.kicker": "確認",
    "review.title": "書き出し前に下書きを確認します。",
    "review.copy": "完了、未入力、判断が必要な項目を表示します。",
    "scenario.kicker": "シナリオ",
    "scenario.title": "同じ税設定で給与変化を比較します。",
    "scenario.copy": "変えるのは給与だけです。住所地、選択した税・保険、控除、ふるさと納税、保険の仮定はそのままです。",
    "scenario.range": "給与範囲",
    "scenario.min": "最低給与",
    "scenario.max": "最高給与",
    "scenario.step": "刻み",
    "scenario.curve": "使えるお金の曲線",
    "scenario.split": "給与の内訳",
    "scenario.table.salary": "給与",
    "scenario.table.usable": "使える額",
    "scenario.table.tax": "税/保険",
    "scenario.table.rate": "残る率",
    "scenario.table.month": "月額",
    "scenario.currentUsable": "現在に近い使える額",
    "scenario.salaryPoint": "{salary} の給与点",
    "scenario.bestUsable": "使える額が最大",
    "scenario.salary": "{salary} の給与",
    "scenario.bestRate": "残る率が最大",
    "scenario.monthView": "{months}か月表示",
    "scenario.lineTitle": "選択した税・保険後の年間円",
    "scenario.usable": "使える額",
    "scenario.taxInsurance": "税 / 保険",
    "scenario.currentLike": "現在に近い",
    "scenario.barTitle": "各棒は給与総額を使える額と選択済み負担に分けています"
  }
};

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

const incomeOptions = [
  {
    id: "salary",
    title: "Salary / 給与",
    copy: "Regular employment income, usually supported by a withholding slip.",
    doc: "Withholding slip / 源泉徴収票"
  },
  {
    id: "side",
    title: "Side income",
    copy: "Freelance, small jobs, online sales, or miscellaneous income.",
    doc: "Side income records"
  },
  {
    id: "business",
    title: "Business income",
    copy: "Sole proprietor work with revenue, expenses, and bookkeeping.",
    doc: "Business revenue and expense summary"
  },
  {
    id: "investment",
    title: "Investments",
    copy: "Dividends, capital gains, or securities account documents.",
    doc: "Brokerage annual statement"
  }
];

const deductionOptions = [
  {
    id: "medical",
    title: "Medical expenses",
    copy: "Hospital, prescription, or eligible medical payment records.",
    doc: "Medical expense receipts",
    amountLabel: "Deduction amount to claim, if known"
  },
  {
    id: "insurance",
    title: "Insurance premiums",
    copy: "Life, pension, earthquake, or similar certificates.",
    doc: "Insurance deduction certificate",
    amountLabel: "Deduction amount from certificate, if known"
  },
  {
    id: "donation",
    title: "Other donations",
    copy: "Donation deductions other than furusato tax.",
    doc: "Donation receipts",
    amountLabel: "Donation amount"
  },
  {
    id: "furusato",
    title: "Furusato tax / ふるさと納税",
    copy: "Municipality donations. If you file a return, include one-stop applications too.",
    doc: "Furusato tax receipt or annual deduction certificate",
    amountLabel: "Total furusato donation amount"
  },
  {
    id: "family",
    title: "Spouse / dependents",
    copy: "Family details that may affect return preparation.",
    doc: "Family/dependent details",
    amountLabel: "Manual deduction amount, if known"
  },
  {
    id: "mortgage",
    title: "Housing loan",
    copy: "Mortgage-related documents if claiming a housing loan deduction.",
    doc: "Housing loan certificate",
    amountLabel: "Tax credit amount, if known"
  }
];

const baseDocuments = [
  {
    id: "identity",
    title: "Identity and address details",
    copy: "Name, address, ID number, and contact details for the return."
  },
  {
    id: "bank",
    title: "Refund bank account",
    copy: "Needed if the draft expects a refund."
  }
];

const taxModuleOptions = [
  {
    id: "incomeTax",
    title: "所得税",
    copy: "National income tax calculated from taxable income. This is the main 確定申告 tax."
  },
  {
    id: "reconstructionTax",
    title: "復興特別所得税",
    copy: "Added to income tax as 2.1% of income tax after credits."
  },
  {
    id: "residentTax",
    title: "住民税",
    copy: "Municipality/prefecture tax. Estimated here, finalized by your city/ward."
  },
  {
    id: "employeeHealth",
    title: "会社の健康保険",
    copy: "Payroll health insurance. Rate depends on insurer, prefecture, age, and standard monthly remuneration."
  },
  {
    id: "employeePension",
    title: "厚生年金",
    copy: "Employee pension insurance. Employee share is based on standard monthly remuneration."
  },
  {
    id: "employmentInsurance",
    title: "雇用保険",
    copy: "Payroll employment insurance. Estimate from salary paid."
  },
  {
    id: "nationalPension",
    title: "国民年金",
    copy: "Applies for months you were not covered by 厚生年金, unless exempted."
  },
  {
    id: "nationalHealth",
    title: "国民健康保険",
    copy: "Municipality health insurance after leaving employer coverage. Usually notice-based."
  },
  {
    id: "personalBusinessTax",
    title: "個人事業税",
    copy: "For certain business income types. Rate and eligibility depend on business category."
  },
  {
    id: "consumptionTax",
    title: "消費税",
    copy: "For taxable business sales, invoice registration, or 10M yen threshold cases."
  },
  {
    id: "propertyTax",
    title: "固定資産税",
    copy: "If you own land/building/depreciable assets. Usually notice-based."
  },
  {
    id: "vehicleTax",
    title: "自動車税",
    copy: "If you own a car or light vehicle. Usually notice-based."
  }
];

const residentPlaceOptions = [
  { value: "", label: "選択してください" },
  { value: "tokyo-23", label: "東京都23区" },
  { value: "tokyo-city", label: "東京都市部" },
  { value: "yokohama", label: "横浜市（神奈川県）" },
  { value: "kawasaki", label: "川崎市（神奈川県）" },
  { value: "saitama", label: "さいたま市（埼玉県）" },
  { value: "chiba", label: "千葉市（千葉県）" },
  { value: "sapporo", label: "札幌市（北海道）" },
  { value: "sendai", label: "仙台市（宮城県）" },
  { value: "nagoya", label: "名古屋市（愛知県）" },
  { value: "osaka", label: "大阪市（大阪府）" },
  { value: "kyoto", label: "京都市（京都府）" },
  { value: "kobe", label: "神戸市（兵庫県）" },
  { value: "hiroshima", label: "広島市（広島県）" },
  { value: "fukuoka", label: "福岡市（福岡県）" },
  { value: "naha", label: "那覇市（沖縄県）" },
  { value: "hokkaido", label: "北海道" },
  { value: "aomori", label: "青森県" },
  { value: "iwate", label: "岩手県" },
  { value: "miyagi", label: "宮城県" },
  { value: "akita", label: "秋田県" },
  { value: "yamagata", label: "山形県" },
  { value: "fukushima", label: "福島県" },
  { value: "ibaraki", label: "茨城県" },
  { value: "tochigi", label: "栃木県" },
  { value: "gunma", label: "群馬県" },
  { value: "saitama-pref", label: "埼玉県" },
  { value: "chiba-pref", label: "千葉県" },
  { value: "tokyo-pref", label: "東京都" },
  { value: "kanagawa", label: "神奈川県" },
  { value: "niigata", label: "新潟県" },
  { value: "toyama", label: "富山県" },
  { value: "ishikawa", label: "石川県" },
  { value: "fukui", label: "福井県" },
  { value: "yamanashi", label: "山梨県" },
  { value: "nagano", label: "長野県" },
  { value: "gifu", label: "岐阜県" },
  { value: "shizuoka", label: "静岡県" },
  { value: "aichi", label: "愛知県" },
  { value: "mie", label: "三重県" },
  { value: "shiga", label: "滋賀県" },
  { value: "kyoto-pref", label: "京都府" },
  { value: "osaka-pref", label: "大阪府" },
  { value: "hyogo", label: "兵庫県" },
  { value: "nara", label: "奈良県" },
  { value: "wakayama", label: "和歌山県" },
  { value: "tottori", label: "鳥取県" },
  { value: "shimane", label: "島根県" },
  { value: "okayama", label: "岡山県" },
  { value: "hiroshima-pref", label: "広島県" },
  { value: "yamaguchi", label: "山口県" },
  { value: "tokushima", label: "徳島県" },
  { value: "kagawa", label: "香川県" },
  { value: "ehime", label: "愛媛県" },
  { value: "kochi", label: "高知県" },
  { value: "fukuoka-pref", label: "福岡県" },
  { value: "saga", label: "佐賀県" },
  { value: "nagasaki", label: "長崎県" },
  { value: "kumamoto", label: "熊本県" },
  { value: "oita", label: "大分県" },
  { value: "miyazaki", label: "宮崎県" },
  { value: "kagoshima", label: "鹿児島県" },
  { value: "okinawa", label: "沖縄県" },
  { value: "other", label: "その他（市区町村を入力）" }
];

const residentPlacePresets = {
  tochigi: {
    residentFlatLevy: "5700",
    sourceNote: "栃木県ページ: 県民税1,700円（とちぎの元気な森づくり県民税700円を含む）+ 市町村民税3,000円 = 4,700円。令和6年度以降の森林環境税1,000円を合わせて入力欄は5,700円にしています。"
  }
};

const stepTitles = {
  profile: "step.profile",
  income: "step.income",
  deductions: "step.deductions",
  taxes: "step.taxes",
  documents: "step.documents",
  review: "step.review",
  scenario: "step.scenario"
};

let activeLanguage = loadLanguage();
let state = loadState();
let activeStep = "profile";

const stepContent = document.querySelector("#stepContent");
const stepTitle = document.querySelector("#stepTitle");
const languageSelect = document.querySelector("#languageSelect");

document.querySelectorAll(".step-button").forEach((button) => {
  button.addEventListener("click", () => renderStep(button.dataset.step));
});

document.querySelector("#resetButton").addEventListener("click", () => {
  if (!confirm(t("action.resetConfirm"))) return;
  state = defaultState();
  saveState();
  renderStep("profile");
});

document.querySelector("#exportButton").addEventListener("click", exportDraft);
document.querySelector("#printButton").addEventListener("click", () => window.print());

if (languageSelect) {
  languageSelect.value = activeLanguage;
  languageSelect.addEventListener("change", () => {
    activeLanguage = languageSelect.value;
    saveLanguage();
    renderStep(activeStep);
  });
}

renderStep(activeStep);

function defaultState() {
  return {
    profile: {
      taxYear: "",
      jurisdiction: "",
      taxpayerType: "",
      goal: ""
    },
    income: {},
    deductions: {},
    taxModules: {
      incomeTax: true,
      reconstructionTax: true,
      residentTax: true,
      employmentInsurance: true
    },
    amounts: {},
    details: {
      salaryRevenue: "",
      salaryIncomeAfterDeduction: "",
      withholdingTax: "",
      socialInsuranceDeduction: "",
      residentTaxIncomeLevy: "",
      manualTaxCredits: "",
      employmentStart: "",
      employmentEnd: "",
      yearEndAdjusted: ""
    },
    taxDetails: {
      residentPlace: "",
      residentMunicipality: "",
      residentBasicDeduction: "430000",
      residentFlatLevy: "5000",
      paymentMonths: "12",
      employeeHealthRate: "",
      employeeHealthMonthlyBase: "",
      employeePensionMonthlyBase: "",
      payrollMonths: "",
      employmentInsuranceRate: "0.55",
      nationalPensionMonths: "",
      nationalPensionMonthly: "17510",
      nationalHealthManual: "",
      businessTaxRate: "5",
      businessActiveMonths: "12",
      taxableSalesPrior2Years: "",
      taxableSalesSpecificPeriod: "",
      taxableSalesCurrent: "",
      invoiceRegistered: "",
      propertyTaxManual: "",
      vehicleTaxManual: ""
    },
    scenario: {
      minSalary: "",
      maxSalary: "",
      salaryStep: "250000"
    },
    documents: {}
  };
}

function loadState() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return defaultState();
    const parsed = JSON.parse(saved);
    const defaults = defaultState();
    return {
      ...defaults,
      ...parsed,
      profile: { ...defaults.profile, ...(parsed.profile || {}) },
      income: { ...defaults.income, ...(parsed.income || {}) },
      deductions: { ...defaults.deductions, ...(parsed.deductions || {}) },
      taxModules: { ...defaults.taxModules, ...(parsed.taxModules || {}) },
      amounts: { ...defaults.amounts, ...(parsed.amounts || {}) },
      details: { ...defaults.details, ...(parsed.details || {}) },
      taxDetails: { ...defaults.taxDetails, ...(parsed.taxDetails || {}) },
      scenario: { ...defaults.scenario, ...(parsed.scenario || {}) },
      documents: { ...defaults.documents, ...(parsed.documents || {}) }
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state, null, 2));
  renderChrome();
}

function loadLanguage() {
  const saved = localStorage.getItem(languageKey);
  return messages[saved] ? saved : "en";
}

function saveLanguage() {
  localStorage.setItem(languageKey, activeLanguage);
}

function t(key, values = {}) {
  const dictionary = messages[activeLanguage] || messages.en;
  const template = dictionary[key] || messages.en[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function applyTranslations(root = document) {
  document.documentElement.lang = languageMeta[activeLanguage]?.htmlLang || "en";
  document.title = t("app.title");
  const brandTitle = document.querySelector(".brand-block h1");
  if (brandTitle) brandTitle.textContent = t("app.name");
  document.querySelectorAll("[data-step-label]").forEach((label) => {
    label.textContent = t(stepTitles[label.dataset.stepLabel]);
  });
  root.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  root.querySelectorAll("[data-i18n-title]").forEach((node) => {
    node.title = t(node.dataset.i18nTitle);
  });
  root.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
  });
  if (languageSelect) {
    languageSelect.value = activeLanguage;
    languageSelect.setAttribute("aria-label", t("language.label"));
  }
}

function renderStep(step) {
  activeStep = step;
  stepTitle.textContent = t(stepTitles[step]);
  document.querySelectorAll(".step-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.step === step);
  });

  const template = document.querySelector(`#${step}Template`);
  stepContent.replaceChildren(template.content.cloneNode(true));
  applyTranslations(stepContent);

  if (step === "profile") bindProfile();
  if (step === "income") {
    renderChoices("income", incomeOptions, "#incomeAmounts");
    renderIncomeDetails();
  }
  if (step === "deductions") {
    renderChoices("deductions", deductionOptions, "#deductionAmounts");
    renderDeductionDetails();
  }
  if (step === "taxes") renderTaxModules();
  if (step === "documents") renderDocuments();
  if (step === "review") renderReview();
  if (step === "scenario") renderScenario();

  renderChrome();
}

function bindProfile() {
  const form = document.querySelector('[data-form="profile"]');
  Object.entries(state.profile).forEach(([key, value]) => {
    const input = form.elements[key];
    if (input) input.value = value;
  });

  form.addEventListener("input", (event) => {
    state.profile[event.target.name] = event.target.value;
    saveState();
  });
}

function renderChoices(group, options, amountTarget) {
  const container = document.querySelector(`[data-group="${group}"]`);
  const amountBox = document.querySelector(amountTarget);

  options.forEach((option) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "choice-card";
    card.classList.toggle("is-selected", Boolean(state[group][option.id]));
    card.innerHTML = `<strong>${option.title}</strong><span>${option.copy}</span>`;
    card.addEventListener("click", () => {
      state[group][option.id] = !state[group][option.id];
      if (!state[group][option.id]) {
        delete state.amounts[option.id];
      }
      saveState();
      renderStep(group);
    });
    container.appendChild(card);
  });

  const selected = options.filter((option) => state[group][option.id]);
  if (!selected.length) {
    amountBox.innerHTML = '<div class="final-item" data-level="warning">Select at least one section if it applies.</div>';
    return;
  }

  selected.forEach((option) => {
    const row = document.createElement("div");
    row.className = "amount-row";
    row.innerHTML = `
      <label>
        ${option.amountLabel || `${option.title} amount`}
        <input name="${option.id}" inputmode="decimal" placeholder="0" value="${state.amounts[option.id] || ""}" />
      </label>
      <small>${amountHint(option)}</small>
    `;
    row.querySelector("input").addEventListener("input", (event) => {
      state.amounts[option.id] = event.target.value;
      saveState();
    });
    amountBox.appendChild(row);
  });
}

function amountHint(option) {
  if (option.id === "furusato") return "Used for 寄附金控除 and furusato estimate.";
  if (option.id === "mortgage") return "Housing loan is a tax credit; review certificate before filing.";
  if (["medical", "insurance", "family"].includes(option.id)) return "Enter the deduction amount if you already know it.";
  return "Used in the draft estimate.";
}

function renderIncomeDetails() {
  const amountBox = document.querySelector("#incomeAmounts");
  if (!amountBox) return;

  const detail = document.createElement("div");
  detail.className = "detail-panel";
  detail.innerHTML = `
    <div class="section-heading">
      <h3>Salary slip fields</h3>
      <span>源</span>
    </div>
    <p class="helper-copy">If you have a 源泉徴収票, enter these boxes. The app uses the official value when 給与所得控除後の金額 is filled; otherwise it estimates from salary revenue.</p>
    <div class="field-grid">
      <label>
        Work start date
        <input name="employmentStart" type="date" value="${state.details.employmentStart}" />
      </label>
      <label>
        Quit / final work date
        <input name="employmentEnd" type="date" value="${state.details.employmentEnd}" />
      </label>
      <label>
        年末調整 status
        <select name="yearEndAdjusted">
          <option value="">Unknown</option>
          <option value="yes">Already year-end adjusted</option>
          <option value="no">Not year-end adjusted</option>
        </select>
      </label>
      <label>
        支払金額 / salary revenue
        <input name="salaryRevenue" inputmode="decimal" placeholder="5,000,000" value="${state.details.salaryRevenue}" />
      </label>
      <label>
        給与所得控除後の金額
        <input name="salaryIncomeAfterDeduction" inputmode="decimal" placeholder="Optional if unknown" value="${state.details.salaryIncomeAfterDeduction}" />
      </label>
      <label>
        源泉徴収税額 / withheld income tax
        <input name="withholdingTax" inputmode="decimal" placeholder="120,000" value="${state.details.withholdingTax}" />
      </label>
      <label>
        社会保険料等の金額
        <input name="socialInsuranceDeduction" inputmode="decimal" placeholder="750,000" value="${state.details.socialInsuranceDeduction}" />
      </label>
    </div>
  `;
  const select = detail.querySelector('select[name="yearEndAdjusted"]');
  select.value = state.details.yearEndAdjusted;
  bindDetailInputs(detail);
  amountBox.prepend(detail);
}

function renderDeductionDetails() {
  const amountBox = document.querySelector("#deductionAmounts");
  if (!amountBox) return;

  const detail = document.createElement("div");
  detail.className = "detail-panel";
  detail.innerHTML = `
    <div class="section-heading">
      <h3>Optional calculation fields</h3>
      <span>税</span>
    </div>
    <p class="helper-copy">住民税所得割額 lets the app check the furusato special-credit cap. If you do not know it, the app shows an uncapped estimate and a warning.</p>
    <div class="field-grid">
      <label>
        住民税所得割額, optional
        <input name="residentTaxIncomeLevy" inputmode="decimal" placeholder="Optional" value="${state.details.residentTaxIncomeLevy}" />
      </label>
      <label>
        Other known tax credits
        <input name="manualTaxCredits" inputmode="decimal" placeholder="0" value="${state.details.manualTaxCredits}" />
      </label>
    </div>
  `;
  bindDetailInputs(detail);
  amountBox.prepend(detail);
}

function renderTaxModules() {
  const container = document.querySelector('[data-group="taxModules"]');
  const fields = document.querySelector("#taxModuleFields");
  container.replaceChildren();
  fields.replaceChildren();

  taxModuleOptions.forEach((option) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "choice-card";
    card.classList.toggle("is-selected", Boolean(state.taxModules[option.id]));
    card.innerHTML = `<strong>${option.title}</strong><span>${option.copy}</span>`;
    card.addEventListener("click", () => {
      state.taxModules[option.id] = !state.taxModules[option.id];
      saveState();
      renderTaxModules();
    });
    container.appendChild(card);
  });

  const selected = taxModuleOptions.filter((option) => state.taxModules[option.id]);
  if (!selected.length) {
    fields.innerHTML = '<div class="final-item" data-level="warning">Select at least one tax area to track.</div>';
    return;
  }

  fields.appendChild(paymentPlanPanel());
  selected.forEach((option) => {
    const panel = taxModulePanel(option.id);
    if (panel) fields.appendChild(panel);
  });
}

function paymentPlanPanel() {
  const panel = document.createElement("div");
  panel.className = "detail-panel tax-panel";
  panel.innerHTML = `
    <div class="section-heading">
      <h3>支払い見通し</h3>
      <span>月</span>
    </div>
    <p class="helper-copy">Reviewの「月あたり estimate」は、まだ払う estimate をこの月数で割ったものです。実際の支払月は通知書や納付書で確認してください。</p>
    <div class="field-grid">
      <label>
        何か月で見るか
        <input name="paymentMonths" inputmode="decimal" value="${state.taxDetails.paymentMonths}" />
      </label>
    </div>
  `;
  bindTaxDetailInputs(panel);
  return panel;
}

function taxModulePanel(id) {
  const panel = document.createElement("div");
  panel.className = "detail-panel tax-panel";
  panel.innerHTML = taxModulePanelHtml(id);
  bindTaxDetailInputs(panel);
  return panel;
}

function taxModulePanelHtml(id) {
  const d = state.taxDetails;
  const header = (title, mark, copy, fields = "") => `
    <div class="section-heading">
      <h3>${title}</h3>
      <span>${mark}</span>
    </div>
    <p class="helper-copy">${copy}</p>
    ${fields}
  `;

  if (id === "incomeTax") {
    return header("所得税", "国", "Calculated from the existing salary/income/deduction fields on the review page.");
  }

  if (id === "reconstructionTax") {
    return header("復興特別所得税", "2.1", "Calculated as 2.1% of income tax after credits when 所得税 applies.");
  }

  if (id === "residentTax") {
    return header("住民税", "市", "1月1日時点の住所地で課税されます。ここでは場所を選べますが、最終額は市区町村の通知で確認してください。", `
      <div class="field-grid">
        <label>
          1月1日時点の住所地
          <select name="residentPlace">
            ${residentPlaceOptions.map((place) => `<option value="${place.value}">${place.label}</option>`).join("")}
          </select>
        </label>
        <label>
          市区町村名, optional
          <input name="residentMunicipality" placeholder="例: 新宿区 / 横浜市" value="${d.residentMunicipality}" />
        </label>
        <label>
          住民税の基礎控除（所得から引く額）
          <input name="residentBasicDeduction" inputmode="decimal" value="${d.residentBasicDeduction}" />
        </label>
        <label>
          均等割 + 森林環境税など（定額部分）
          <input name="residentFlatLevy" inputmode="decimal" value="${d.residentFlatLevy}" />
        </label>
      </div>
      <p class="helper-copy">基礎控除は所得割の計算前に所得から引く額です。均等割・森林環境税は所得割とは別の定額部分で、市区町村の通知額が一番確実です。</p>
      <p class="helper-copy">${residentPresetNote()}</p>
    `);
  }

  if (id === "employeeHealth") {
    return header("会社の健康保険", "健", "Use payslip/insurer numbers when possible. Rate varies by insurer, prefecture, age, and standard monthly remuneration.", `
      <div class="field-grid">
        <label>
          Monthly standard remuneration
          <input name="employeeHealthMonthlyBase" inputmode="decimal" placeholder="300,000" value="${d.employeeHealthMonthlyBase}" />
        </label>
        <label>
          Employee health rate %
          <input name="employeeHealthRate" inputmode="decimal" placeholder="Example: 5.0" value="${d.employeeHealthRate}" />
        </label>
        <label>
          Covered payroll months
          <input name="payrollMonths" inputmode="decimal" placeholder="3" value="${d.payrollMonths}" />
        </label>
      </div>
    `);
  }

  if (id === "employeePension") {
    return header("厚生年金", "年", "Employee share is estimated at 9.15% of standard monthly remuneration. Use payslip numbers when possible.", `
      <div class="field-grid">
        <label>
          Monthly standard remuneration
          <input name="employeePensionMonthlyBase" inputmode="decimal" placeholder="300,000" value="${d.employeePensionMonthlyBase}" />
        </label>
        <label>
          Covered payroll months
          <input name="payrollMonths" inputmode="decimal" placeholder="3" value="${d.payrollMonths}" />
        </label>
      </div>
    `);
  }

  if (id === "employmentInsurance") {
    return header("雇用保険", "雇", "Estimate from salary paid. 2025 general employee burden defaults to 0.55%.", `
      <div class="field-grid">
        <label>
          Worker rate %
          <input name="employmentInsuranceRate" inputmode="decimal" value="${d.employmentInsuranceRate}" />
        </label>
      </div>
    `);
  }

  if (id === "nationalPension") {
    return header("国民年金", "国", "Applies for uncovered months after leaving 厚生年金 unless exempted or covered another way.", `
      <div class="field-grid">
        <label>
          Months to pay
          <input name="nationalPensionMonths" inputmode="decimal" placeholder="0" value="${d.nationalPensionMonths}" />
        </label>
        <label>
          Monthly premium
          <input name="nationalPensionMonthly" inputmode="decimal" value="${d.nationalPensionMonthly}" />
        </label>
      </div>
    `);
  }

  if (id === "nationalHealth") {
    return header("国民健康保険", "保", "Municipality-specific. Enter the city notice amount when you receive it.", `
      <div class="field-grid">
        <label>
          Notice/manual amount
          <input name="nationalHealthManual" inputmode="decimal" placeholder="0" value="${d.nationalHealthManual}" />
        </label>
      </div>
    `);
  }

  if (id === "personalBusinessTax") {
    return header("個人事業税", "事", "Only certain business categories apply. This rough estimate uses business income, months, and selected rate.", `
      <div class="field-grid">
        <label>
          Business tax rate %
          <input name="businessTaxRate" inputmode="decimal" value="${d.businessTaxRate}" />
        </label>
        <label>
          Business active months
          <input name="businessActiveMonths" inputmode="decimal" value="${d.businessActiveMonths}" />
        </label>
      </div>
    `);
  }

  if (id === "consumptionTax") {
    return header("消費税", "消", "Eligibility depends on taxable sales, specific-period sales, and invoice registration. This is a trigger check, not a final consumption-tax return.", `
      <div class="field-grid">
        <label>
          Taxable sales two years ago
          <input name="taxableSalesPrior2Years" inputmode="decimal" placeholder="0" value="${d.taxableSalesPrior2Years}" />
        </label>
        <label>
          Specific-period taxable sales
          <input name="taxableSalesSpecificPeriod" inputmode="decimal" placeholder="0" value="${d.taxableSalesSpecificPeriod}" />
        </label>
        <label>
          Current taxable sales
          <input name="taxableSalesCurrent" inputmode="decimal" placeholder="0" value="${d.taxableSalesCurrent}" />
        </label>
        <label>
          Invoice registration
          <select name="invoiceRegistered">
            <option value="">Unknown</option>
            <option value="yes">Registered</option>
            <option value="no">Not registered</option>
          </select>
        </label>
      </div>
    `);
  }

  if (id === "propertyTax") {
    return header("固定資産税", "固", "Use the official notice amount if you own land, buildings, or depreciable assets.", `
      <div class="field-grid">
        <label>
          Notice/manual amount
          <input name="propertyTaxManual" inputmode="decimal" placeholder="0" value="${d.propertyTaxManual}" />
        </label>
      </div>
    `);
  }

  if (id === "vehicleTax") {
    return header("自動車税", "車", "Use the official vehicle or light vehicle tax notice amount if you own one.", `
      <div class="field-grid">
        <label>
          Notice/manual amount
          <input name="vehicleTaxManual" inputmode="decimal" placeholder="0" value="${d.vehicleTaxManual}" />
        </label>
      </div>
    `);
  }

  return "";
}

function bindTaxDetailInputs(container) {
  container.querySelectorAll("input, select").forEach((field) => {
    if (field.tagName === "SELECT") field.value = state.taxDetails[field.name] || "";
    const eventName = field.tagName === "SELECT" ? "change" : "input";
    field.addEventListener(eventName, () => {
      state.taxDetails[field.name] = field.value;
      if (field.name === "residentPlace") {
        applyResidentPlacePreset(field.value);
        saveState();
        renderTaxModules();
        return;
      }
      saveState();
    });
  });
}

function applyResidentPlacePreset(place) {
  const preset = residentPlacePresets[place];
  if (!preset) return;
  state.taxDetails.residentFlatLevy = preset.residentFlatLevy;
}

function bindDetailInputs(container) {
  container.querySelectorAll("input, select").forEach((field) => {
    field.addEventListener("input", () => {
      state.details[field.name] = field.value;
      saveState();
    });
  });
}

function getRequiredDocuments() {
  const docs = [...baseDocuments];

  incomeOptions.forEach((option) => {
    if (state.income[option.id]) {
      docs.push({ id: `income-${option.id}`, title: option.doc, copy: option.copy });
    }
  });

  if (state.income.salary && state.details.employmentEnd) {
    docs.push({
      id: "salary-midyear-withholding-slip",
      title: "退職時の給与所得の源泉徴収票",
      copy: "Ask the employer for the withholding slip for the salary actually paid before you quit."
    });
  }

  deductionOptions.forEach((option) => {
    if (state.deductions[option.id]) {
      docs.push({ id: `deduction-${option.id}`, title: option.doc, copy: option.copy });
    }
  });

  if (state.deductions.furusato) {
    docs.push({
      id: "furusato-onestop",
      title: "One-stop特例 status",
      copy: "If you file 確定申告, one-stop applications for that year must also be included in the return."
    });
  }

  if (state.taxModules.residentTax) {
    docs.push({
      id: "tax-resident",
      title: "1月1日時点の住所地 / 住民税通知",
      copy: state.taxDetails.residentPlace === "tochigi"
        ? "栃木県ページの均等割を参考にしています。最終額は市区町村の住民税通知で確認してください。"
        : "住民税は1月1日に住んでいた市区町村が計算します。最終額は通知で確認してください。"
    });
  }

  if (state.taxModules.employeeHealth || state.taxModules.employeePension || state.taxModules.employmentInsurance) {
    docs.push({
      id: "tax-payroll-insurance",
      title: "Payslips / payroll insurance deductions",
      copy: "Needed for 健康保険, 厚生年金, 雇用保険, and social-insurance deduction review."
    });
  }

  if (state.taxModules.nationalPension) {
    docs.push({
      id: "tax-national-pension",
      title: "国民年金 payment notice or receipt",
      copy: "Needed for uncovered months after leaving employer pension coverage."
    });
  }

  if (state.taxModules.nationalHealth) {
    docs.push({
      id: "tax-national-health",
      title: "国民健康保険 notice",
      copy: "Municipality-specific amount after leaving employer health insurance."
    });
  }

  if (state.taxModules.personalBusinessTax) {
    docs.push({
      id: "tax-personal-business",
      title: "Business income and category records",
      copy: "Needed to judge 個人事業税 category, rate, and 290万円 deduction."
    });
  }

  if (state.taxModules.consumptionTax) {
    docs.push({
      id: "tax-consumption",
      title: "Consumption-tax sales and invoice status",
      copy: "Prior two-year sales, specific-period sales, current taxable sales, and invoice registration status."
    });
  }

  if (state.taxModules.propertyTax) {
    docs.push({
      id: "tax-property",
      title: "固定資産税 notice",
      copy: "Use the official property tax notice amount."
    });
  }

  if (state.taxModules.vehicleTax) {
    docs.push({
      id: "tax-vehicle",
      title: "自動車税 notice",
      copy: "Use the official car or light vehicle tax notice amount."
    });
  }

  return docs;
}

function renderDocuments() {
  const container = document.querySelector("#documentList");
  const docs = getRequiredDocuments();
  container.replaceChildren();

  if (!docs.length) {
    container.innerHTML = '<div class="final-item" data-level="warning">Complete the profile and select income or deduction sections first.</div>';
    return;
  }

  docs.forEach((doc) => {
    const item = document.createElement("div");
    item.className = "doc-item";
    item.innerHTML = `
      <div>
        <strong>${doc.title}</strong>
        <p>${doc.copy}</p>
      </div>
      <select class="status-select" aria-label="${doc.title} status">
        <option value="missing">Missing</option>
        <option value="ready">Ready</option>
        <option value="na">Not applicable</option>
        <option value="review">Review later</option>
      </select>
    `;
    const select = item.querySelector("select");
    select.value = state.documents[doc.id] || "missing";
    select.addEventListener("change", () => {
      state.documents[doc.id] = select.value;
      saveState();
      renderDocuments();
    });
    container.appendChild(item);
  });
}

function renderReview() {
  const calc = calculateDraft();
  const taxCoverage = calculateTaxCoverage(calc);
  const paymentSummary = calculatePaymentSummary(calc);
  document.querySelector("#reviewSalaryIncome").textContent = yen(calc.salaryIncome);
  document.querySelector("#reviewDeductionTotal").textContent = yen(calc.totalDeductions);
  document.querySelector("#reviewTaxableIncome").textContent = yen(calc.taxableIncomeForDisplay);
  document.querySelector("#reviewIncomeTax").textContent = yen(calc.incomeTaxWithReconstruction);
  document.querySelector("#reviewSettlement").textContent = paymentStatusLabel(calc);
  document.querySelector("#reviewFurusatoBenefit").textContent = yen(calc.furusato.totalBenefit);
  document.querySelector("#reviewTotalToPay").textContent = yen(paymentSummary.totalToPay);
  document.querySelector("#reviewPerMonth").textContent = yen(paymentSummary.perMonth);
  document.querySelector("#reviewAlreadyDeducted").textContent = yen(paymentSummary.alreadyDeducted);
  document.querySelector("#reviewExplanation").textContent = reviewExplanation(calc, paymentSummary);

  const taxCoverageList = document.querySelector("#taxCoverageList");
  taxCoverageList.replaceChildren();
  taxCoverage.forEach((item) => {
    const row = document.createElement("div");
    row.className = "tax-coverage-item";
    row.dataset.status = item.status;
    row.innerHTML = `
      <div>
        <strong>${item.title}</strong>
        <p>${item.note}</p>
      </div>
      <b>${item.amountLabel}</b>
    `;
    taxCoverageList.appendChild(row);
  });

  const traceList = document.querySelector("#traceList");
  traceList.replaceChildren();
  calc.trace.forEach((line) => {
    const item = document.createElement("div");
    item.className = "trace-item";
    item.textContent = line;
    traceList.appendChild(item);
  });

  const finalList = document.querySelector("#finalList");
  finalList.replaceChildren();
  buildIssues().forEach((issue) => {
    const item = document.createElement("div");
    item.className = "final-item";
    item.dataset.level = issue.level;
    item.textContent = issue.text;
    finalList.appendChild(item);
  });
}

function renderScenario() {
  const defaults = scenarioDefaults();
  document.querySelectorAll("[data-scenario-field]").forEach((input) => {
    input.value = state.scenario[input.name] || defaults[input.name];
    input.addEventListener("input", () => {
      state.scenario[input.name] = input.value;
      saveState();
      drawScenario();
    });
  });

  drawScenario();
}

function drawScenario() {
  const rows = buildScenarioRows();
  renderScenarioSummary(rows);
  renderScenarioLineChart(rows);
  renderScenarioBarChart(rows);
  renderScenarioTable(rows);
}

function scenarioDefaults() {
  const currentSalary = moneyValue(state.details.salaryRevenue || state.amounts.salary);
  const maxSalary = Math.max(2000000, currentSalary ? currentSalary * 2 : 2000000);
  return {
    minSalary: "0",
    maxSalary: String(Math.ceil(maxSalary / 100000) * 100000),
    salaryStep: "250000"
  };
}

function buildScenarioRows() {
  const defaults = scenarioDefaults();
  let minSalary = Math.max(0, moneyValue(state.scenario.minSalary || defaults.minSalary));
  let maxSalary = Math.max(minSalary, moneyValue(state.scenario.maxSalary || defaults.maxSalary));
  let step = Math.max(10000, moneyValue(state.scenario.salaryStep || defaults.salaryStep));
  const rows = [];

  if ((maxSalary - minSalary) / step > 24) {
    step = Math.ceil((maxSalary - minSalary) / 24 / 10000) * 10000;
  }

  for (let salary = minSalary; salary <= maxSalary; salary += step) {
    rows.push(calculateScenarioPoint(salary));
  }

  if (!rows.length || rows[rows.length - 1].salary !== maxSalary) {
    rows.push(calculateScenarioPoint(maxSalary));
  }

  return rows;
}

function calculateScenarioPoint(salary) {
  const originalIncome = { ...state.income };
  const originalAmounts = { ...state.amounts };
  const originalDetails = { ...state.details };

  state.income.salary = true;
  state.amounts.salary = String(salary);
  state.details.salaryRevenue = String(salary);
  state.details.salaryIncomeAfterDeduction = "";
  state.details.withholdingTax = "0";

  const calc = calculateDraft();
  const burden = calculateScenarioBurden(calc);
  const usable = Math.max(0, salary - burden.total);
  const months = Math.max(1, moneyValue(state.taxDetails.paymentMonths || "12"));

  state.income = originalIncome;
  state.amounts = originalAmounts;
  state.details = originalDetails;

  return {
    salary,
    usable,
    totalPay: burden.total,
    takeHomeRate: salary ? usable / salary : 0,
    usePerMonth: Math.floor(usable / months),
    payPerMonth: Math.ceil(burden.total / months),
    burden,
    calc
  };
}

function calculateScenarioBurden(calc) {
  const incomeTax = selectedIncomeTaxAmount(calc);
  const residentTax = state.taxModules.residentTax ? residentTaxEstimate(calc).total : 0;
  const employeeHealth = state.taxModules.employeeHealth ? scenarioEmployeeHealth(calc.salaryRevenue) : 0;
  const employeePension = state.taxModules.employeePension ? scenarioEmployeePension(calc.salaryRevenue) : 0;
  const employmentInsurance = state.taxModules.employmentInsurance ? employmentInsuranceEstimate(calc) : 0;
  const nationalPension = state.taxModules.nationalPension ? nationalPensionEstimate() : 0;
  const nationalHealth = state.taxModules.nationalHealth ? moneyValue(state.taxDetails.nationalHealthManual) : 0;
  const businessTax = state.taxModules.personalBusinessTax ? personalBusinessTaxEstimate(calc) : 0;
  const propertyTax = state.taxModules.propertyTax ? moneyValue(state.taxDetails.propertyTaxManual) : 0;
  const vehicleTax = state.taxModules.vehicleTax ? moneyValue(state.taxDetails.vehicleTaxManual) : 0;
  const other = nationalPension + nationalHealth + businessTax + propertyTax + vehicleTax;

  return {
    incomeTax,
    residentTax,
    employeeHealth,
    employeePension,
    employmentInsurance,
    other,
    total: incomeTax + residentTax + employeeHealth + employeePension + employmentInsurance + other
  };
}

function scenarioEmployeeHealth(salary) {
  const rate = moneyValue(state.taxDetails.employeeHealthRate) / 100;
  if (!rate) return 0;
  const months = payrollMonths() || Math.max(1, moneyValue(state.taxDetails.paymentMonths || "12"));
  const monthlyBase = moneyValue(state.taxDetails.employeeHealthMonthlyBase) || salary / months;
  return Math.round(monthlyBase * rate * months);
}

function scenarioEmployeePension(salary) {
  const months = payrollMonths() || Math.max(1, moneyValue(state.taxDetails.paymentMonths || "12"));
  const monthlyBase = moneyValue(state.taxDetails.employeePensionMonthlyBase) || salary / months;
  return Math.round(monthlyBase * 0.0915 * months);
}

function renderScenarioSummary(rows) {
  const container = document.querySelector("#scenarioSummary");
  const currentSalary = moneyValue(state.details.salaryRevenue || state.amounts.salary);
  const closest = rows.reduce((best, row) => {
    if (!best) return row;
    return Math.abs(row.salary - currentSalary) < Math.abs(best.salary - currentSalary) ? row : best;
  }, null);
  const bestUsable = rows.reduce((best, row) => {
    if (!best) return row;
    return row.usable > best.usable ? row : best;
  }, null);
  const bestRate = rows.reduce((best, row) => {
    if (!best) return row;
    return row.takeHomeRate > best.takeHomeRate ? row : best;
  }, null);

  container.innerHTML = `
    <div class="review-card review-card-total">
      <span>${t("scenario.currentUsable")}</span>
      <strong>${yen(closest ? closest.usable : 0)}</strong>
      <small>${t("scenario.salaryPoint", { salary: closest ? compactYen(closest.salary) : "0" })}</small>
    </div>
    <div class="review-card">
      <span>${t("scenario.bestUsable")}</span>
      <strong>${bestUsable ? yen(bestUsable.usable) : yen(0)}</strong>
      <small>${t("scenario.salary", { salary: bestUsable ? compactYen(bestUsable.salary) : "0" })}</small>
    </div>
    <div class="review-card">
      <span>${t("scenario.bestRate")}</span>
      <strong>${percent(bestRate ? bestRate.takeHomeRate : 0)}</strong>
      <small>${t("scenario.monthView", { months: Math.max(1, moneyValue(state.taxDetails.paymentMonths || "12")) })}</small>
    </div>
  `;
}

function renderScenarioLineChart(rows) {
  const container = document.querySelector("#scenarioLineChart");
  container.innerHTML = scenarioLineSvg(rows);
}

function renderScenarioBarChart(rows) {
  const container = document.querySelector("#scenarioBarChart");
  container.innerHTML = scenarioBarSvg(rows);
}

function renderScenarioTable(rows) {
  const tbody = document.querySelector("#scenarioTableBody");
  const currentSalary = moneyValue(state.details.salaryRevenue || state.amounts.salary);
  tbody.replaceChildren();
  rows.forEach((row) => {
    const tr = document.createElement("tr");
    if (currentSalary && row.salary === currentSalary) tr.className = "is-current";
    tr.innerHTML = `
      <td>${yen(row.salary)}</td>
      <td>${yen(row.usable)}</td>
      <td>${yen(row.totalPay)}</td>
      <td>${percent(row.takeHomeRate)}</td>
      <td>${yen(row.payPerMonth)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function scenarioLineSvg(rows) {
  if (!rows.length) return "";
  const width = 760;
  const height = 360;
  const pad = { top: 44, right: 112, bottom: 58, left: 72 };
  const plotWidth = width - pad.left - pad.right;
  const plotHeight = height - pad.top - pad.bottom;
  const minSalary = Math.min(...rows.map((row) => row.salary));
  const maxSalary = Math.max(...rows.map((row) => row.salary), minSalary + 1);
  const maxValue = niceCeil(Math.max(...rows.map((row) => Math.max(row.usable, row.totalPay)), 1));
  const x = (salary) => pad.left + ((salary - minSalary) / (maxSalary - minSalary || 1)) * plotWidth;
  const y = (value) => pad.top + plotHeight - (value / maxValue) * plotHeight;
  const usablePath = rows.map((row, index) => `${index ? "L" : "M"} ${x(row.salary).toFixed(1)} ${y(row.usable).toFixed(1)}`).join(" ");
  const payPath = rows.map((row, index) => `${index ? "L" : "M"} ${x(row.salary).toFixed(1)} ${y(row.totalPay).toFixed(1)}`).join(" ");
  const currentSalary = moneyValue(state.details.salaryRevenue || state.amounts.salary);
  const current = currentSalary ? rows.reduce((best, row) => {
    if (!best) return row;
    return Math.abs(row.salary - currentSalary) < Math.abs(best.salary - currentSalary) ? row : best;
  }, null) : null;
  const yTicks = [0, maxValue / 2, maxValue];
  const grid = yTicks.map((tick) => `
    <line x1="${pad.left}" y1="${y(tick).toFixed(1)}" x2="${width - pad.right}" y2="${y(tick).toFixed(1)}" class="chart-grid" />
    <text x="${pad.left - 10}" y="${(y(tick) + 4).toFixed(1)}" class="chart-label chart-axis-label" text-anchor="end">${compactYen(tick)}</text>
  `).join("");
  const xTicks = [minSalary, (minSalary + maxSalary) / 2, maxSalary];
  const xLabels = xTicks.map((tick) => `
    <text x="${x(tick).toFixed(1)}" y="${height - 24}" class="chart-label chart-axis-label" text-anchor="middle">${compactYen(tick)}</text>
  `).join("");
  const endRow = rows[rows.length - 1];
  const currentMarker = current ? `
    <line x1="${x(current.salary).toFixed(1)}" y1="${pad.top}" x2="${x(current.salary).toFixed(1)}" y2="${height - pad.bottom}" class="chart-current-line" />
    <circle cx="${x(current.salary).toFixed(1)}" cy="${y(current.usable).toFixed(1)}" r="5" class="chart-dot chart-dot-current" />
    <text x="${Math.min(width - pad.right + 8, x(current.salary) + 8).toFixed(1)}" y="${Math.max(pad.top + 14, y(current.usable) - 10).toFixed(1)}" class="chart-callout">${t("scenario.currentLike")}</text>
  ` : "";

  return `
    <svg class="scenario-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${t("scenario.curve")}">
      <rect x="${pad.left}" y="${pad.top}" width="${plotWidth}" height="${plotHeight}" class="chart-plot-bg" />
      ${grid}
      <line x1="${pad.left}" y1="${height - pad.bottom}" x2="${width - pad.right}" y2="${height - pad.bottom}" class="chart-axis" />
      <line x1="${pad.left}" y1="${pad.top}" x2="${pad.left}" y2="${height - pad.bottom}" class="chart-axis" />
      ${xLabels}
      <text x="${pad.left}" y="24" class="chart-title">${t("scenario.lineTitle")}</text>
      <path d="${usablePath}" class="chart-line chart-line-use" />
      <path d="${payPath}" class="chart-line chart-line-pay" />
      ${currentMarker}
      <circle cx="${x(endRow.salary).toFixed(1)}" cy="${y(endRow.usable).toFixed(1)}" r="4" class="chart-dot chart-dot-use" />
      <circle cx="${x(endRow.salary).toFixed(1)}" cy="${y(endRow.totalPay).toFixed(1)}" r="4" class="chart-dot chart-dot-pay" />
      <text x="${width - pad.right + 12}" y="${(y(endRow.usable) + 4).toFixed(1)}" class="chart-direct-label chart-use-label">${t("scenario.usable")}</text>
      <text x="${width - pad.right + 12}" y="${(y(endRow.totalPay) + 4).toFixed(1)}" class="chart-direct-label chart-pay-label">${t("scenario.taxInsurance")}</text>
    </svg>
  `;
}

function scenarioBarSvg(rows) {
  if (!rows.length) return "";
  const width = 760;
  const height = 340;
  const pad = { top: 42, right: 28, bottom: 68, left: 44 };
  const gap = 8;
  const limitedRows = sampleScenarioRows(rows, 12);
  const plotWidth = width - pad.left - pad.right;
  const plotHeight = height - pad.top - pad.bottom;
  const barWidth = Math.max(16, (plotWidth - gap * (limitedRows.length - 1)) / limitedRows.length);
  const maxSalary = Math.max(...limitedRows.map((row) => row.salary), 1);
  const bars = limitedRows.map((row, index) => {
    const x = pad.left + index * (barWidth + gap);
    const totalHeight = (row.salary / maxSalary) * plotHeight;
    const usableHeight = row.salary ? (row.usable / row.salary) * totalHeight : 0;
    const payHeight = Math.max(0, totalHeight - usableHeight);
    const yUsable = height - pad.bottom - usableHeight;
    const yPay = yUsable - payHeight;
    const label = compactYen(row.salary);
    return `
      <rect x="${x.toFixed(1)}" y="${yPay.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${payHeight.toFixed(1)}" class="bar-pay" />
      <rect x="${x.toFixed(1)}" y="${yUsable.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${usableHeight.toFixed(1)}" class="bar-use" />
      <text x="${(x + barWidth / 2).toFixed(1)}" y="${height - 38}" class="bar-label" text-anchor="middle">${label}</text>
      <text x="${(x + barWidth / 2).toFixed(1)}" y="${height - 20}" class="bar-rate-label" text-anchor="middle">${percent(row.takeHomeRate)}</text>
    `;
  }).join("");

  return `
    <svg class="scenario-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${t("scenario.split")}">
      <text x="${pad.left}" y="24" class="chart-title">${t("scenario.barTitle")}</text>
      <line x1="${pad.left}" y1="${height - pad.bottom}" x2="${width - pad.right}" y2="${height - pad.bottom}" class="chart-axis" />
      ${bars}
      <g class="chart-legend">
        <rect x="${width - 210}" y="13" width="12" height="12" class="legend-use" />
        <text x="${width - 192}" y="24">${t("scenario.usable")}</text>
        <rect x="${width - 120}" y="13" width="12" height="12" class="legend-pay" />
        <text x="${width - 102}" y="24">${t("scenario.taxInsurance")}</text>
      </g>
    </svg>
  `;
}

function sampleScenarioRows(rows, limit) {
  if (rows.length <= limit) return rows;
  const step = (rows.length - 1) / (limit - 1);
  const sampled = [];
  for (let index = 0; index < limit; index += 1) {
    sampled.push(rows[Math.round(index * step)]);
  }
  return sampled;
}

function niceCeil(value) {
  const magnitude = 10 ** Math.floor(Math.log10(value));
  return Math.ceil(value / magnitude) * magnitude;
}

function percent(value) {
  return `${Math.round(value * 100)}%`;
}

function compactYen(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(value % 1000000 ? 1 : 0)}M`;
  if (value >= 1000) return `${Math.round(value / 1000)}k`;
  return String(Math.round(value));
}

function calculateDraft() {
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
    residentTaxIncomeLevy: moneyValue(state.details.residentTaxIncomeLevy),
    incomeTaxBeforeDonation: incomeTaxWithReconstruction
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
  trace.push(`所得税: taxable income is rounded down to the nearest 1,000 yen before applying the NTA quick table.`);
  trace.push(`復興特別所得税: income tax after credits is multiplied by 102.1%, then rounded down to the nearest 100 yen.`);

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

function yen(value) {
  return `${formatMoney(Math.round(Number(value || 0)))} yen`;
}

function settlementLabel(calc) {
  if (!calc.withheld) return "No withholding";
  if (calc.settlement > 0) return `Refund est. ${yen(calc.settlement)}`;
  if (calc.settlement < 0) return `Pay est. ${yen(Math.abs(calc.settlement))}`;
  return "Even";
}

function paymentStatusLabel(calc) {
  if (calc.incomeTaxWithReconstruction === 0 && calc.withheld === 0) return "Pay 0 yen";
  return settlementLabel(calc);
}

function reviewExplanation(calc, paymentSummary) {
  if (calc.totalIncome === 0) {
    return `The 950,000 yen shown under 所得控除合計 is a deduction, not money to pay. Because income is 0 yen, estimated tax is also 0 yen. The current still-to-pay estimate is ${yen(paymentSummary.totalToPay)}.`;
  }

  return `まだ払う estimate adds selected future/outstanding bills and extra income tax due. It excludes company payroll deductions already taken from salary. Per-month estimate divides it by ${paymentSummary.paymentMonths} month(s).`;
}

function calculateTaxCoverage(calc) {
  const items = [];
  const selected = (id) => Boolean(state.taxModules[id]);
  const detail = state.taxDetails;
  const baseIncomeTaxAfterCredits = Math.max(0, calc.incomeTaxBeforeCredits - calc.taxCredits);

  if (selected("incomeTax")) {
    items.push({
      title: "所得税",
      amount: baseIncomeTaxAfterCredits,
      amountLabel: yen(baseIncomeTaxAfterCredits),
      status: "calculated",
      note: "Calculated from taxable income using the NTA quick table."
    });
  }

  if (selected("reconstructionTax")) {
    const reconstruction = calc.incomeTaxWithReconstruction - baseIncomeTaxAfterCredits;
    items.push({
      title: "復興特別所得税",
      amount: reconstruction,
      amountLabel: yen(reconstruction),
      status: "calculated",
      note: "Estimated as 2.1% of income tax after credits, rounded in the combined estimate."
    });
  }

  if (selected("residentTax")) {
    const resident = residentTaxEstimate(calc);
    const place = residentPlaceLabel();
    const preset = residentPlacePresets[state.taxDetails.residentPlace];
    items.push({
      title: "住民税",
      amount: resident.total,
      amountLabel: yen(resident.total),
      status: "estimate",
      note: `1月1日時点の住所地: ${place}. 概算: 所得割 ${yen(resident.incomeLevy)} + 均等割等 ${yen(resident.flatLevy)}. ${preset ? "栃木県プリセット適用中。" : ""}最終額は市区町村の通知で確認。`
    });
  }

  if (selected("employeeHealth")) {
    const amount = employeeHealthEstimate();
    items.push({
      title: "会社の健康保険",
      amount,
      amountLabel: amount ? yen(amount) : "Needs rate/base",
      status: amount ? "estimate" : "manual",
      note: "Estimate requires insurer rate, standard monthly remuneration, and covered months. Payslip is best."
    });
  }

  if (selected("employeePension")) {
    const amount = employeePensionEstimate();
    items.push({
      title: "厚生年金",
      amount,
      amountLabel: amount ? yen(amount) : "Needs monthly base",
      status: amount ? "estimate" : "manual",
      note: "Employee share estimated at 9.15% of standard monthly remuneration."
    });
  }

  if (selected("employmentInsurance")) {
    const amount = employmentInsuranceEstimate(calc);
    items.push({
      title: "雇用保険",
      amount,
      amountLabel: yen(amount),
      status: "estimate",
      note: `Estimated from salary revenue using ${detail.employmentInsuranceRate || "0.55"}% worker rate.`
    });
  }

  if (selected("nationalPension")) {
    const amount = nationalPensionEstimate();
    items.push({
      title: "国民年金",
      amount,
      amountLabel: amount ? yen(amount) : "Choose months",
      status: amount ? "estimate" : "manual",
      note: "Estimate for uncovered months after leaving employer pension coverage."
    });
  }

  if (selected("nationalHealth")) {
    const amount = moneyValue(detail.nationalHealthManual);
    items.push({
      title: "国民健康保険",
      amount,
      amountLabel: amount ? yen(amount) : "Notice needed",
      status: amount ? "manual" : "notice",
      note: "Municipality-specific. Enter the amount from city/ward notice when available."
    });
  }

  if (selected("personalBusinessTax")) {
    const amount = personalBusinessTaxEstimate(calc);
    items.push({
      title: "個人事業税",
      amount,
      amountLabel: yen(amount),
      status: "estimate",
      note: "Rough estimate only; applies to certain business categories and rates."
    });
  }

  if (selected("consumptionTax")) {
    const result = consumptionTaxTrigger();
    items.push({
      title: "消費税",
      amount: 0,
      amountLabel: result.label,
      status: result.status,
      note: result.note
    });
  }

  if (selected("propertyTax")) {
    const amount = moneyValue(detail.propertyTaxManual);
    items.push({
      title: "固定資産税",
      amount,
      amountLabel: amount ? yen(amount) : "Notice needed",
      status: amount ? "manual" : "notice",
      note: "Use the official property tax notice if you own taxable property."
    });
  }

  if (selected("vehicleTax")) {
    const amount = moneyValue(detail.vehicleTaxManual);
    items.push({
      title: "自動車税",
      amount,
      amountLabel: amount ? yen(amount) : "Notice needed",
      status: amount ? "manual" : "notice",
      note: "Use the official vehicle tax notice if you own a vehicle."
    });
  }

  return items;
}

function calculatePaymentSummary(calc) {
  const incomeTaxSelected = state.taxModules.incomeTax || state.taxModules.reconstructionTax;
  const selectedIncomeTaxTotal = selectedIncomeTaxAmount(calc);
  const selectedWithholdingOffset = incomeTaxSelected ? calc.withheld : 0;
  const incomeTaxDue = Math.max(0, selectedIncomeTaxTotal - selectedWithholdingOffset);
  const residentDue = state.taxModules.residentTax ? residentTaxEstimate(calc).total : 0;
  const nationalPensionDue = state.taxModules.nationalPension ? nationalPensionEstimate() : 0;
  const nationalHealthDue = state.taxModules.nationalHealth ? moneyValue(state.taxDetails.nationalHealthManual) : 0;
  const businessTaxDue = state.taxModules.personalBusinessTax ? personalBusinessTaxEstimate(calc) : 0;
  const propertyTaxDue = state.taxModules.propertyTax ? moneyValue(state.taxDetails.propertyTaxManual) : 0;
  const vehicleTaxDue = state.taxModules.vehicleTax ? moneyValue(state.taxDetails.vehicleTaxManual) : 0;
  const paymentMonthsValue = Math.max(1, moneyValue(state.taxDetails.paymentMonths || "12"));
  const alreadyDeducted =
    calc.withheld +
    (state.taxModules.employeeHealth ? employeeHealthEstimate() : 0) +
    (state.taxModules.employeePension ? employeePensionEstimate() : 0) +
    (state.taxModules.employmentInsurance ? employmentInsuranceEstimate(calc) : 0);
  const totalToPay =
    incomeTaxDue +
    residentDue +
    nationalPensionDue +
    nationalHealthDue +
    businessTaxDue +
    propertyTaxDue +
    vehicleTaxDue;

  return {
    incomeTaxDue,
    residentDue,
    nationalPensionDue,
    nationalHealthDue,
    businessTaxDue,
    propertyTaxDue,
    vehicleTaxDue,
    totalToPay,
    paymentMonths: paymentMonthsValue,
    perMonth: Math.ceil(totalToPay / paymentMonthsValue),
    alreadyDeducted,
    refundEstimate: incomeTaxSelected ? Math.max(0, selectedWithholdingOffset - selectedIncomeTaxTotal) : 0
  };
}

function selectedIncomeTaxAmount(calc) {
  const baseIncomeTaxAfterCredits = Math.max(0, calc.incomeTaxBeforeCredits - calc.taxCredits);
  const reconstruction = Math.max(0, calc.incomeTaxWithReconstruction - baseIncomeTaxAfterCredits);
  return (state.taxModules.incomeTax ? baseIncomeTaxAfterCredits : 0) + (state.taxModules.reconstructionTax ? reconstruction : 0);
}

function residentTaxEstimate(calc) {
  const residentBasicDeduction = moneyValue(state.taxDetails.residentBasicDeduction);
  const flatLevy = moneyValue(state.taxDetails.residentFlatLevy);
  const residentDeductions = Math.max(0, calc.totalDeductions - calc.basicDeduction + residentBasicDeduction);
  const taxable = floorTo(Math.max(0, calc.totalIncome - residentDeductions), 1000);
  const incomeLevy = Math.floor(taxable * 0.1);
  return {
    residentDeductions,
    taxable,
    incomeLevy,
    flatLevy,
    total: incomeLevy + flatLevy
  };
}

function residentPlaceLabel() {
  if (state.taxDetails.residentMunicipality) return state.taxDetails.residentMunicipality;
  const option = residentPlaceOptions.find((place) => place.value === state.taxDetails.residentPlace);
  return option && option.value ? option.label : "未選択";
}

function residentPresetNote() {
  const preset = residentPlacePresets[state.taxDetails.residentPlace];
  return preset ? preset.sourceNote : "場所別の定額部分が分かる場合は、市区町村・都道府県のページや通知書の金額に合わせて入力してください。";
}

function payrollMonths() {
  const explicit = moneyValue(state.taxDetails.payrollMonths);
  if (explicit) return explicit;
  if (state.details.employmentStart && state.details.employmentEnd) {
    return Math.max(1, inclusiveMonthCount(state.details.employmentStart, state.details.employmentEnd));
  }
  return 0;
}

function inclusiveMonthCount(start, end) {
  const startDate = new Date(`${start}T00:00:00`);
  const endDate = new Date(`${end}T00:00:00`);
  if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) return 0;
  return (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth() + 1;
}

function employeeHealthEstimate() {
  const monthlyBase = moneyValue(state.taxDetails.employeeHealthMonthlyBase);
  const rate = moneyValue(state.taxDetails.employeeHealthRate) / 100;
  const months = payrollMonths();
  if (!monthlyBase || !rate || !months) return 0;
  return Math.round(monthlyBase * rate * months);
}

function employeePensionEstimate() {
  const monthlyBase = moneyValue(state.taxDetails.employeePensionMonthlyBase);
  const months = payrollMonths();
  if (!monthlyBase || !months) return 0;
  return Math.round(monthlyBase * 0.0915 * months);
}

function employmentInsuranceEstimate(calc) {
  const rate = moneyValue(state.taxDetails.employmentInsuranceRate || "0.55") / 100;
  return Math.round(calc.salaryRevenue * rate);
}

function nationalPensionEstimate() {
  const months = moneyValue(state.taxDetails.nationalPensionMonths);
  const monthly = moneyValue(state.taxDetails.nationalPensionMonthly);
  if (!months || !monthly) return 0;
  return Math.round(months * monthly);
}

function personalBusinessTaxEstimate(calc) {
  const months = Math.max(0, Math.min(12, moneyValue(state.taxDetails.businessActiveMonths || "12")));
  const annualDeduction = 2900000 * (months ? months / 12 : 1);
  const rate = moneyValue(state.taxDetails.businessTaxRate || "5") / 100;
  return Math.round(Math.max(0, calc.businessIncome - annualDeduction) * rate);
}

function consumptionTaxTrigger() {
  const prior = moneyValue(state.taxDetails.taxableSalesPrior2Years);
  const specific = moneyValue(state.taxDetails.taxableSalesSpecificPeriod);
  const current = moneyValue(state.taxDetails.taxableSalesCurrent);
  const registered = state.taxDetails.invoiceRegistered;

  if (registered === "yes") {
    return {
      label: "Likely applies",
      status: "notice",
      note: "Invoice registration usually means consumption-tax filing duties may apply; final return is not calculated here."
    };
  }

  if (prior > 10000000 || specific > 10000000) {
    return {
      label: "Threshold hit",
      status: "notice",
      note: "Taxable sales threshold exceeds 10M yen in a tested period. Check official consumption-tax filing duties."
    };
  }

  if (current > 0) {
    return {
      label: "Track sales",
      status: "manual",
      note: "Current taxable sales entered. Check prior-year and invoice-registration status before filing."
    };
  }

  return {
    label: "No trigger data",
    status: "manual",
    note: "Enter taxable sales or invoice status if you had business sales."
  };
}

function renderChrome() {
  applyTranslations(document);
  const docs = getRequiredDocuments();
  const calc = calculateDraft();
  const readyDocs = docs.filter((doc) => ["ready", "na"].includes(state.documents[doc.id])).length;
  const incomeCount = Object.values(state.income).filter(Boolean).length;
  const deductionCount = Object.values(state.deductions).filter(Boolean).length;
  const taxCount = selectedTaxCount();
  const issues = buildIssues();
  const blocking = issues.filter((issue) => issue.level === "error").length;
  const completedProfile = Object.values(state.profile).filter(Boolean).length;
  const rawScore = completedProfile * 8 + incomeCount * 10 + deductionCount * 5 + taxCount * 3 + readyDocs * 8 - blocking * 10;
  const score = Math.max(0, Math.min(100, rawScore));

  document.querySelector("#readinessScore").textContent = `${score}%`;
  document.querySelector("#readinessRing").style.background = `conic-gradient(var(--leaf) ${score * 3.6}deg, #ddd7cc 0deg)`;
  document.querySelector("#readinessText").textContent = score >= 80 ? t("readiness.ready") : t("readiness.keepGoing");
  document.querySelector("#previewYear").textContent = state.profile.taxYear ? t("preview.yearSet", { year: state.profile.taxYear }) : t("preview.yearUnset");
  document.querySelector("#previewType").textContent = profileLabel();
  document.querySelector("#previewIncome").textContent = incomeCount;
  document.querySelector("#previewDeduction").textContent = deductionCount;
  document.querySelector("#previewTaxes").textContent = taxCount;
  document.querySelector("#previewDocs").textContent = `${readyDocs} / ${docs.length}`;
  document.querySelector("#previewNote").textContent = state.profile.jurisdiction === "jp"
    ? `Estimated 所得税等: ${yen(calc.incomeTaxWithReconstruction)}. Review before filing.`
    : "This is a preparation draft, not a filed return.";
  document.querySelector("#previewNote").textContent = state.profile.jurisdiction === "jp"
    ? t("preview.jpNote", { amount: yen(calc.incomeTaxWithReconstruction) })
    : t("preview.note");

  const issueList = document.querySelector("#issueList");
  issueList.replaceChildren();
  issues.slice(0, 5).forEach((issue) => {
    const item = document.createElement("li");
    item.textContent = issue.text;
    issueList.appendChild(item);
  });
  document.querySelector("#issueCount").textContent = issues.length;
}

function selectedTaxCount() {
  return taxModuleOptions.filter((option) => state.taxModules[option.id]).length;
}

function buildIssues() {
  const issues = [];
  const calc = calculateDraft();
  const profileNames = {
    taxYear: t("issue.taxYear"),
    jurisdiction: t("issue.jurisdiction"),
    taxpayerType: t("issue.taxpayerType"),
    goal: t("issue.goal")
  };

  Object.entries(profileNames).forEach(([key, text]) => {
    if (!state.profile[key]) issues.push({ level: "error", text });
  });

  if (!Object.values(state.income).some(Boolean)) {
    issues.push({ level: "warning", text: t("issue.noIncome") });
  }

  if (state.profile.jurisdiction === "jp" && state.profile.taxYear && state.profile.taxYear !== "2025") {
    issues.push({ level: "warning", text: "Installed Japan calculation rules are for 2025 / 令和7年 only." });
  }

  if (state.income.salary && !calc.salaryRevenue && !moneyValue(state.details.salaryIncomeAfterDeduction)) {
    issues.push({ level: "error", text: "Salary selected: enter 支払金額 or 給与所得控除後の金額." });
  }

  if (state.income.salary && state.details.employmentEnd) {
    issues.push({
      level: "warning",
      text: "You quit during the year: use actual paid salary from 源泉徴収票/last payslips, not a 12-month salary estimate."
    });

    if (state.details.yearEndAdjusted !== "yes") {
      issues.push({
        level: "warning",
        text: "If no 年末調整 was done after quitting, 確定申告 may refund over-withheld income tax."
      });
    }
  }

  if (calc.salaryRevenue && !moneyValue(state.details.salaryIncomeAfterDeduction) && calc.salaryRevenue <= 6600000) {
    issues.push({ level: "warning", text: "For salary revenue up to 6.6M yen, official calculation may use the detailed NTA table; enter 給与所得控除後の金額 from 源泉徴収票 for best accuracy." });
  }

  getRequiredDocuments().forEach((doc) => {
    const status = state.documents[doc.id] || "missing";
    if (status === "missing") issues.push({ level: "error", text: `${doc.title} is still missing.` });
    if (status === "review") issues.push({ level: "warning", text: `${doc.title} is marked for later review.` });
  });

  if (state.profile.jurisdiction === "jp") {
    issues.push({
      level: "ok",
      text: "Japan 2025 v1 rules loaded: income tax table, basic deduction, salary-income deduction estimate, and donation deduction."
    });
  }

  if (!selectedTaxCount()) {
    issues.push({ level: "warning", text: "No tax areas selected. Choose applicable taxes in the Taxes step." });
  }

  if (state.taxModules.residentTax) {
    issues.push({
      level: "warning",
      text: "住民税 is only estimated; the city/ward calculates the final notice amount."
    });

    if (!state.taxDetails.residentPlace && !state.taxDetails.residentMunicipality) {
      issues.push({
        level: "warning",
        text: "住民税 selected: choose your 1月1日時点の住所地 or enter 市区町村名."
      });
    }
  }

  if (state.taxModules.employeeHealth && (!moneyValue(state.taxDetails.employeeHealthMonthlyBase) || !moneyValue(state.taxDetails.employeeHealthRate))) {
    issues.push({
      level: "warning",
      text: "会社の健康保険 selected: enter insurer rate and standard monthly remuneration, or use payslip/notice amount."
    });
  }

  if (state.taxModules.employeePension && !moneyValue(state.taxDetails.employeePensionMonthlyBase)) {
    issues.push({
      level: "warning",
      text: "厚生年金 selected: enter standard monthly remuneration or use payslip amount."
    });
  }

  if (state.taxModules.nationalPension && !moneyValue(state.taxDetails.nationalPensionMonths)) {
    issues.push({
      level: "warning",
      text: "国民年金 selected: enter uncovered months after quitting, or mark not applicable."
    });
  }

  if (state.taxModules.nationalHealth && !moneyValue(state.taxDetails.nationalHealthManual)) {
    issues.push({
      level: "warning",
      text: "国民健康保険 selected: final amount is municipality-specific; enter notice amount when available."
    });
  }

  if (state.taxModules.consumptionTax) {
    issues.push({
      level: "warning",
      text: "消費税 selected: app checks triggers only; it does not prepare a consumption-tax return."
    });
  }

  if (state.taxModules.personalBusinessTax && !state.income.business) {
    issues.push({
      level: "warning",
      text: "個人事業税 selected but business income is not selected."
    });
  }

  if (state.profile.jurisdiction === "jp" && state.deductions.furusato) {
    issues.push({
      level: "warning",
      text: "For ふるさと納税, confirm whether you used one-stop特例; if you file 確定申告, include those donations too."
    });

    if (calc.furusato.needsResidentTax) {
      issues.push({
        level: "warning",
        text: "Furusato resident-tax special credit cap is not checked until 住民税所得割額 is entered."
      });
    }

    if (calc.furusato.capApplied) {
      issues.push({
        level: "warning",
        text: "Furusato estimate hit the resident-tax special-credit cap; self-burden may exceed 2,000 yen."
      });
    }
  }

  if (state.income.business || state.income.side || state.income.investment) {
    issues.push({
      level: "warning",
      text: "Side/business/investment amounts are treated as simple income inputs; expense rules and separate taxation are not implemented."
    });
  }

  if (state.deductions.mortgage) {
    issues.push({
      level: "warning",
      text: "Housing loan deduction is treated as a manually entered tax credit; official eligibility is not validated."
    });
  }

  if (!issues.length) {
    issues.push({ level: "ok", text: "No blocking review items in this draft." });
  }

  return issues;
}

function totalFor(options) {
  return options.reduce((sum, option) => {
    if (!state.income[option.id] && !state.deductions[option.id]) return sum;
    const value = Number(String(state.amounts[option.id] || "0").replace(/,/g, ""));
    return sum + (Number.isFinite(value) ? value : 0);
  }, 0);
}

function formatMoney(value) {
  return new Intl.NumberFormat("ja-JP").format(value);
}

function profileLabel() {
  const jurisdiction = state.profile.jurisdiction || "未選択";
  const type = state.profile.taxpayerType || "未選択";
  return `${jurisdiction} / ${type}`;
}

function exportDraft() {
  const calculation = calculateDraft();
  const taxCoverage = calculateTaxCoverage(calculation);
  const paymentSummary = calculatePaymentSummary(calculation);
  const scenarioRows = buildScenarioRows().map((row) => ({
    salary: row.salary,
    usable: row.usable,
    totalPay: row.totalPay,
    usePerMonth: row.usePerMonth,
    payPerMonth: row.payPerMonth,
    burden: row.burden
  }));
  const payload = {
    exportedAt: new Date().toISOString(),
    note: "Preparation draft only. Not a filed tax return.",
    calculationRules: jp2025Rules,
    state,
    calculation,
    taxCoverage,
    paymentSummary,
    scenarioRows,
    requiredDocuments: getRequiredDocuments(),
    issues: buildIssues()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `tax-draft-${state.profile.taxYear || "untitled"}.json`;
  link.click();
  URL.revokeObjectURL(url);
}
