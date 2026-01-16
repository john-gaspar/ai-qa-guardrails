# Requirement: POST /accounts/{accountId}/payments

Add a new API to record a payment on an account and forward it to the ledger service.

## Functional details
- Method/path: `POST /accounts/{accountId}/payments` (no hostname; uses `<BASE_URL>`).
- Auth: bearer token in `Authorization: Bearer <TOKEN>`; reject missing/invalid auth with 401.
- Request body:
  - `amount` (integer, cents) > 0.
  - `currency` (ISO 4217 uppercase) limited to `USD`, `EUR`, `GBP`.
  - `source` object: `{ type: "card" | "bank", token: "<TOKEN_PLACEHOLDER>" }` (opaque token, not stored).
  - `metadata.invoiceId` (string, required).
- Headers:
  - `Idempotency-Key` (required). Duplicate key should return 409 with the original payment payload echoed.
- Behavior:
  - Validate input; return 400 on missing/invalid fields.
  - Call ledger service to create entry; map `confirmation_code` -> `confirmationCode`, `posted_at` -> `postedAt` (ISO8601).
  - On ledger failure/timeouts, return 502 with `errorCode: "LEDGER_UNAVAILABLE"`.
- Responses:
  - 201 with payment representation and mapped ledger fields on success.
  - 400 for validation errors; 401 for auth failures; 409 for idempotency duplicates; 502 for ledger failure.

## Non-functional
- Idempotent via header; safe to retry if 502.
- Rate limit friendly; avoid duplicate ledger calls on retried requests with same idempotency key.
- No PII persisted beyond required fields; never log tokens.
