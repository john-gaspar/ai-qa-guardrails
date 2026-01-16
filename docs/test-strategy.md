# Test Strategy

- Scope: API and integration coverage for services and UI-triggered APIs; prioritize high-risk flows.
- Types: happy, negative, edge, contract, idempotency, auth/permission, error propagation.
- Data: synthetic, deterministic, with cleanup; align with `PROMPTS/60-test-data.md`.
- Automation: use stable selectors/roles for UI; prefer API-level assertions; keep retries bounded.
- Contracts: validate against OpenAPI/JSON Schema/Pact; detect drift quickly.
- Evidence: follow `docs/evidence-bundles.md` and `CHECKLISTS/qa-automation-definition-of-done.md`.
