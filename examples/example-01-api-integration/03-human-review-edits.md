# Human Review & Edits

Findings vs raw AI output:
- Amount type wrong (TC-01): used decimal; requirement says integer cents. Fixed to integer (e.g., 12050).
- Missing auth coverage: added 401 case for missing/invalid bearer token.
- Idempotency behavior incorrect (TC-04): expected 201; requirement says 409 with original payload echoed and no duplicate ledger call. Updated.
- Validation gaps: added boundary test for `amount = 0` (400) and missing `metadata.invoiceId`.
- Contract checks missing: added assertions for `confirmationCode` format and `postedAt` ISO8601; ensure ledger fields mapped (snake -> camel).
- Observability gaps: ensure logs/metrics confirm single ledger call on idempotent repeat; include header echo for `Idempotency-Key`.
- Safety: replaced any sample tokens with placeholders; kept base path placeholder (no hostname).

Edited/added cases (summary):
- TC-01: amount integer, assert `confirmationCode` and `postedAt` format, ensure `Idempotency-Key` echoed.
- TC-02: invalid currency 400 (unchanged).
- TC-03: missing `Idempotency-Key` 400 (unchanged).
- TC-04: duplicate idempotency returns 409 with original body; assert no new ledger call.
- TC-05: ledger timeout 502 with `errorCode: "LEDGER_UNAVAILABLE"`.
- TC-06 (new): unauthorized request returns 401 when `Authorization` header missing/invalid.
- TC-07 (new): amount zero rejected with 400.
- TC-08 (new): missing `metadata.invoiceId` rejected with 400.
