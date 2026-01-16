# Unit Test Verification (AI-Generated Code)

Process to validate AI-produced code/snippets for API or Playwright-style automation.

## Steps
- Static checks: run formatter, linter, and type checker (e.g., `npm test -- --list`, `npm run lint`, `npm run typecheck`, `pytest --maxfail=1 --disable-warnings`, adjust to stack).
- Unit/integration tests: execute targeted suites covering the new/changed code; add focused tests if coverage is thin.
- Contract alignment: assert requests/responses match OpenAPI/JSON Schema/Pact expectations (paths, methods, status codes, required fields).
- Safety pass: ensure placeholders for hosts/auth/data; no secrets/PII in code, fixtures, or recordings.
- Flake guard: avoid masking failures with retries; if non-deterministic, triage via `EVALS/flake-triage.md`.

## Evidence to capture
- Commands run with pass/fail output (copy logs or summarize).
- Test files or cases added/updated (paths).
- Noted assumptions or test gaps requiring follow-up.
- Any contract or schema validation results.
- Sanitized snippets if AI suggested code changes.
