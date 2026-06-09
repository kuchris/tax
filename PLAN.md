# Tax Return System Plan

## Current Assumptions

- Target use case: help prepare a tax return / 申告書, probably for Japanese 確定申告, but the jurisdiction and tax year still need confirmation.
- First version should prepare and validate return data. It should not directly submit to e-Tax, IRS, or any government filing endpoint.
- Tax rules must be versioned by country, tax year, and form type. Do not bake current rules into code without checking official sources.
- The system should produce explainable outputs: every calculated number should show which inputs and rule produced it.
- This is software assistance, not tax advice. Users remain responsible for final review.

## Key Questions Before Implementation

1. Jurisdiction: Japan, US, Hong Kong, or another country?
2. Taxpayer type: individual, sole proprietor, company, or mixed?
3. Output goal: printable申告書, CSV/import file, internal estimate, or direct electronic filing later?
4. Data sources: manual entry, CSV bank/card import, accounting software export, invoices/receipts, payroll slips, 源泉徴収票?
5. Scope for v1: income tax only, or also consumption tax / 住民税 / business accounting?

## Recommended V1 Scope

Build a local-first form preparation system for one jurisdiction and one tax year.

V1 should include:

- User profile and tax-year setup
- Income entry
- Deduction entry
- Dependent / spouse information if relevant
- Calculation preview with audit trail
- Validation warnings for missing or inconsistent fields
- Draft return export as PDF or structured JSON
- Admin-maintained rule files per tax year

V1 should exclude:

- Direct government submission
- Multi-country support
- Automatic tax optimization
- AI-only classification without human review
- Complex business bookkeeping unless that is the main goal

## User-Centered Improvements

For a user preparing their own return, the system should optimize for confidence, not feature count.

The most useful improvements are:

- Start with a checklist of documents to gather before data entry.
- Show progress by tax return section, not by database entity.
- Keep every calculated number clickable or expandable so the user can see the source inputs.
- Save drafts automatically and make export/import simple.
- Separate "missing required data" from "worth reviewing" so warnings do not feel like failures.
- Let the user mark an item as reviewed, unresolved, or not applicable.
- Provide a final review page that reads like a human checklist before export.
- Keep all personal tax data local by default.

Good first workflow:

1. Choose tax year and taxpayer type.
2. Answer a short intake questionnaire.
3. Get a personalized checklist of needed documents.
4. Enter income and deduction data section by section.
5. Review calculated totals with explanations.
6. Resolve blocking issues.
7. Export a draft return package.

Avoid for early versions:

- Chatbot-first data entry.
- Automatic filing.
- Too many optimization suggestions.
- Asking for receipts or attachments before the core return flow works.
- Hiding official source/rule references behind vague explanations.

## Architecture

### 1. Data Model

Core entities:

- `TaxYear`
- `Taxpayer`
- `IncomeItem`
- `DeductionItem`
- `Dependent`
- `WithholdingItem`
- `ReturnDraft`
- `CalculationResult`
- `ValidationIssue`

Keep raw user inputs separate from calculated fields.

### 2. Rule Layer

Rules should live outside application code, for example:

- `rules/jp/2025/income-tax.json`
- `rules/jp/2025/deductions.json`
- `rules/jp/2025/forms.json`

Each rule should include:

- Stable rule id
- Effective tax year
- Source citation
- Formula or threshold
- Human-readable explanation

Success criterion: changing a tax-year rule should not require editing UI code.

### 3. Calculation Engine

The calculation engine should:

- Accept normalized inputs
- Apply versioned rules
- Return calculated amounts plus a trace
- Avoid hidden global state
- Be covered by small examples/tests

Success criterion: a user can click a calculated value and see why it exists.

### 4. Validation Engine

Validation should catch:

- Required fields missing
- Impossible dates or negative values
- Deduction entries without required evidence
- Totals that do not match imported source data
- Form sections that cannot be completed from current inputs

Validation should distinguish:

- Blocking errors
- Warnings
- Review notes

### 5. UI Flow

Recommended screens:

1. Tax year / profile
2. Income
3. Deductions
4. Family / dependents
5. Review
6. Export

Keep the UI form-driven and boring in a good way. Tax software should be clear, dense, and auditable, not decorative.

### 6. Storage

For an initial local app:

- SQLite for structured data
- Local encrypted file storage for attachments, if attachments are included
- JSON export/import for backup and debugging

Do not upload sensitive tax data unless the hosting/security model is explicitly designed.

## Suggested Tech Stack

If this is a web app:

- Frontend: Next.js or React
- Backend: FastAPI, Express, or Next.js API routes
- Database: SQLite first, PostgreSQL later if multi-user
- PDF generation: HTML-to-PDF or form-fill library depending on target forms
- Tests: unit tests for calculations, integration tests for one complete sample return

If this is a desktop/local-first tool:

- Python + SQLite + simple web UI is probably the fastest maintainable route.

## Verification Plan

1. Create sample taxpayer fixtures.
   - Verify: one known simple return calculates exactly as expected.

2. Add rule files for one tax year.
   - Verify: each formula has an official-source citation and unit test.

3. Build calculation engine.
   - Verify: test output includes both final numbers and trace details.

4. Build entry/review UI.
   - Verify: user can complete a simple return without editing raw JSON.

5. Add export.
   - Verify: exported draft matches calculation result and preserves all entered fields.

## Implementation Phases

### Phase 0: Decide Scope

Answer the key questions above. Pick one country, one tax year, one taxpayer type, and one output format.

### Phase 1: Calculation Prototype

Implement data schema, rule loading, and calculation tests without a full UI.

### Phase 2: Form UI

Build the screens needed to enter data and review calculations.

### Phase 3: Export

Generate a draft申告書-style output or structured export file.

### Phase 4: Attachments and Imports

Add CSV/import workflows only after manual entry is solid.

### Phase 5: Filing Integration

Consider e-filing only after the return data model, validation, exports, security, and audit trail are reliable.

## Immediate Next Step

Decide the v1 target:

> "Japan individual 確定申告 for tax year YYYY, manual entry first, PDF draft export."

That is the cleanest starting point unless the real target is business accounting or direct electronic filing.

## Implemented V1 Status

The first local web version now targets:

- Japan individual 確定申告
- 2025 / 令和7年
- Salary-first entry using 源泉徴収票-style fields
- Mid-year quit handling that reminds the user not to annualize short employment
- Basic income-tax estimate
- Basic deduction calculation
- Salary-income deduction estimate
- ふるさと納税 / 寄附金控除 estimate
- One-stop特例 reminder
- Selectable tax coverage for 所得税, 復興特別所得税, 住民税, payroll insurance, 国民年金, 国民健康保険, 個人事業税, 消費税, 固定資産税, and 自動車税
- Japanese 住民税 location selector based on 1月1日時点の住所地
- 栃木県 住民税均等割 preset with source note
- Tax review rows labeled calculated, estimate, manual, or notice-needed
- Payment summary showing still-to-pay estimate, per-month estimate, and payroll-deducted amounts separately
- Step 07 salary-change scenario charts showing usable money, payment burden, and per-month estimates
- Document checklist
- Local browser saving
- JSON export and print

Still out of scope:

- Direct e-Tax submission
- Official PDF form fill
- Full business accounting
- Separate taxation
- Full resident-tax final calculation
- Municipality-specific insurance/tax notices
- Eligibility validation for every deduction and credit
- Replacement for the National Tax Agency 確定申告書等作成コーナー
