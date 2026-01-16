# Prompt: API/Integration Test Cases

## Goal
Generate test cases for API and integration flows that can be automated (API harness or Playwright hitting APIs), emphasizing correctness, negative paths, and observability.

## Inputs required (redact secrets)
- API list with methods and paths (no hosts), key request/response fields, status codes, and contracts.
- Auth mechanism placeholder and required headers (no real tokens or cookies).
- Business rules, edge cases, and failure modes to exercise (rate limits, timeouts, retries).
- State prerequisites (fixtures, seed data patterns) using placeholders/synthetic data.
- Dependencies and external services; indicate which can be mocked.
- Logging/metrics fields that can be asserted (redacted).

## Output required
- Minimum viable (table):
  - `id`, `title`, `type` (happy/negative/edge/contract/idempotency), `preconditions`, `steps`, `expected result`.
- Expanded (add columns/sections):
  - `data` (synthetic example or placeholder), `mocks/stubs`, `validation` (payload + headers + status + side effects), `observability` (logs/metrics/traces to check), `cleanup/idempotency notes`.
  - Group by endpoint/flow; include pagination, sorting, filtering, auth expiry, and concurrency where applicable.

## Rules
- Do not guess field names or magic values; ask for missing details.
- Use placeholders for IDs/tokens/emails (`<ID>`, `<TOKEN>`, `<EMAIL>`).
- Mark assumptions explicitly and keep them minimal.
- Include at least one negative and one edge case per endpoint/flow when inputs allow.
- Avoid UI-only steps; focus on API interactions even if triggered via UI.

## Verification steps (human)
- Confirm every test case ties to a known requirement/endpoint.
- Check placeholders are used and no PII/secrets are present.
- Validate negative/edge coverage is included and feasible.
- Ensure expected results specify status, body fields, and side effects to assert.
