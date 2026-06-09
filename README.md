# 申告書 Desk

Local-first web prototype for preparing a Japan individual 確定申告 draft.

## What Works

- Guided profile, income, deduction, checklist, and review flow
- Salary-style entry using 源泉徴収票 fields
- Mid-year quit / no-year-end-adjustment reminders
- Japan 2025 / 令和7年 v1 income-tax estimate
- Basic deduction calculation
- Salary-income deduction estimate
- 寄附金控除 / ふるさと納税 estimate
- One-stop特例 reminder
- Selectable tax coverage step for 所得税, 復興特別所得税, 住民税, payroll insurance, 国民年金, 国民健康保険, 個人事業税, 消費税, 固定資産税, and 自動車税
- Japanese 住民税 place selector for 1月1日時点の住所地
- 栃木県 resident-tax flat-part preset based on the prefecture page
- Review rows that mark each selected area as calculated, estimate, manual, or notice-needed
- Payment summary for まだ払う estimate, 月あたり estimate, and 給与から控除済み
- Step 07 scenario charts for salary changes under the same tax settings
- Document checklist statuses
- Local browser draft saving
- JSON export and print

## Current Boundary

This app is not a certified tax filing system.

It does not submit to e-Tax, validate every eligibility rule, or replace the National Tax Agency 確定申告書等作成コーナー. Use it as a local preparation and understanding tool.

Supported v1 path:

- Japan
- 2025 / 令和7年
- Individual taxpayer
- Salary income first
- Mid-year quit supported when actual paid salary totals are entered
- Simple manual deductions
- ふるさと納税 review and estimate

Advanced items such as business expenses, separated taxation, housing-loan eligibility, medical-expense details, dependent rules, and exact resident-tax settlement still need official review.

Some selected tax areas are not final calculations:

- 住民税 is estimated; choose the 1月1日時点の住所地, and the city/ward sends the final amount.
- 健康保険 and 厚生年金 depend on insurer/employer standard monthly remuneration.
- 国民健康保険 depends on municipality.
- 消費税 is only a trigger check, not a consumption-tax return.
- 固定資産税 and 自動車税 use official notices.

The review payment summary separates future/outstanding bills from amounts already deducted from salary. Company health insurance, 厚生年金, 雇用保険, and 源泉徴収税額 may appear as already deducted rather than new bills.

Step 07 keeps the current tax condition and changes only salary. It plots usable money and tax/insurance burden with native SVG charts and exports the scenario rows in JSON.

## Run

```powershell
npm start
```

Then open:

```text
http://localhost:5179
```

## Test

```powershell
npm test
npm run check
```

## Official Sources Used

- 国税庁 No.2260 所得税の税率
- 国税庁 No.1199 基礎控除
- 国税庁 No.1150 一定の寄附金を支払ったとき
- 国税庁 No.1155 ふるさと納税(寄附金控除)
- 国税庁 暮らしの税情報 令和7年分給与所得控除額
- 総務省 / local-tax guidance for individual resident tax concepts
- 栃木県 県民税 page for 栃木県均等割 preset
- 日本年金機構 国民年金保険料
- 厚生労働省 雇用保険料率
- 日本年金機構 / 厚生労働省 厚生年金保険料率
- 協会けんぽ health-insurance rate tables
- 国税庁 消費税 taxpayer threshold guidance
- 東京都主税局 個人事業税 reference for business-tax structure
