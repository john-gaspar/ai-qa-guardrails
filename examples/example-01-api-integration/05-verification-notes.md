# Verification Notes

## What to run
- Contract/schema validation: compare requests/responses to OpenAPI/JSON Schema for `POST /accounts/{accountId}/payments` (status codes, required fields, types, header requirements).
- Lint/format/type: `npm run lint`, `npm run typecheck` (or equivalents).
- Tests:
  - Targeted API tests for payment scenarios (happy, negative, idempotency, ledger failure, auth).
  - Ledger stub test to assert single call under idempotent repeat.
  - Unauthorized and validation edge cases (amount zero, missing invoiceId).
- Flake check: re-run critical tests with fixed seeds; if intermittent, follow `EVALS/flake-triage.md`.

## Evidence to attach in PR
- Command outputs (pass/fail) for lint/type/tests (sanitized logs).
- Contract check results (spec version/path used, mismatches if any).
- Links/paths to test files and cases touched (e.g., `tests/payments.spec.ts`).
- AI artifacts: prompt (`01-prompt-used.md`), raw output (`02-ai-output-raw.md`), human edits (`03-human-review-edits.md`).
- Notes on assumptions and remaining gaps (if any) copied into PR description.
