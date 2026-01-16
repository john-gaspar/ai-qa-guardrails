# Prompt: Automation Plan & Snippets (API/Playwright)

## Goal
Provide an automation approach and starter code snippets for API and integration tests (API harness or Playwright hitting APIs/UX), ready to adapt without exposing secrets.

## Inputs required (redact secrets)
- Language/runtime and test framework (e.g., JS/TS + Playwright/test, pytest + requests/httpx).
- Base URL placeholder, auth pattern (bearer/API key/cookie/mTLS) — no real tokens or certs.
- Target endpoints/flows with methods and required fields.
- Fixture/mocking policy (what to stub vs hit live), idempotency expectations, rate-limit constraints.
- Data strategy (synthetic patterns, placeholders, cleanup expectations).
- CI constraints (parallelism, time budget) and observability hooks (logs/metrics/traces).

## Output required
- Minimum viable:
  - Coverage list of scenarios to automate now vs later.
  - Skeleton test example using placeholders (auth, base URL, sample request/expectations).
  - Notes on fixtures/mocks, retries/timeouts, and idempotency safeguards.
- Expanded:
  - Helpers/fixtures outline (auth setup, data factory, cleanup hooks).
  - Assertion plan (status, body fields, headers, side effects).
  - Suggested folder/filename pattern and tagging for CI.
  - Tips for Playwright APIRequestContext or equivalent HTTP client usage with placeholders.

## Rules
- Do not output real credentials or hostnames; use placeholders only.
- Do not invent fields/values; ask if missing.
- Mark assumptions and offer parameterized snippets that are safe to paste.
- Keep code minimal and dependency-light; avoid installing new tools in the prompt.

## Verification steps (human)
- Ensure snippets use placeholders and synthetic data only.
- Check coverage list matches the plan and requirements.
- Validate retries/timeouts/idempotency choices fit the target services.
- Confirm assertions include payload + headers + side effects and are feasible in your stack.
