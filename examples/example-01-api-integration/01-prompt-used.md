# Prompt Used (based on PROMPTS/20-test-cases.md)

Goal: Generate API/integration test cases for `POST /accounts/{accountId}/payments` that can be automated (API harness or Playwright APIRequestContext).

Context:
- Requirement summary: `POST /accounts/{accountId}/payments` to record payments and forward to ledger.
- Auth: bearer token in `Authorization: Bearer <TOKEN>`.
- Request: `amount` (int cents > 0), `currency` (`USD`|`EUR`|`GBP`), `source` object `{ type: "card" | "bank", token: "<TOKEN_PLACEHOLDER>" }`, `metadata.invoiceId` (string).
- Header: `Idempotency-Key` required; duplicate should return 409 and echo prior payment.
- Responses: 201 success with mapped ledger fields (`confirmationCode`, `postedAt` ISO), 400 validation, 401 auth, 409 idempotency dup, 502 ledger failure with `errorCode: "LEDGER_UNAVAILABLE"`.
- Data rules: synthetic only; use placeholders (`<BASE_URL>`, `<TOKEN>`, `<ID>`, `<EMAIL>`); no PII or real tokens.
- Dependencies: ledger service (may fail/time out); avoid duplicate ledger calls on retries.

Output required:
- Minimum viable table columns: `id`, `title`, `type`, `preconditions`, `steps`, `expected result`.
- Expanded columns: `data`, `mocks/stubs`, `validation` (status/body/headers/side effects), `observability`, `cleanup/idempotency notes`.
- Include happy, negative, edge, contract, and idempotency coverage.

Rules:
- Do not invent endpoints/fields; stick to given ones. Use placeholders for auth/hosts/tokens.
- Mark assumptions explicitly.
- Focus on API flows (no UI-only steps). Keep actions automatable.

Verification reminders:
- Ensure no secrets/PII. Confirm expected results include status, body fields, headers, and side effects.
