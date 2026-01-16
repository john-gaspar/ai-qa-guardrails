# Test Strategy

- Scope: API and integration coverage for services and UI-triggered APIs; prioritize high-risk flows.
- Types: happy, negative, edge, contract, idempotency, auth/permission, error propagation.
- Data: synthetic, deterministic, with cleanup; align with `PROMPTS/60-test-data.md`.
- Automation: use stable selectors/roles for UI; prefer API-level assertions; keep retries bounded.
- Contracts: validate against OpenAPI/JSON Schema/Pact; detect drift quickly.
- Evidence: follow `docs/evidence-bundles.md` and `CHECKLISTS/qa-automation-definition-of-done.md`.

## UI layer guidance
- Scope UI tests to critical paths and wiring; avoid low-value visual checks (see `docs/ui/overview.md`).
- Selectors: follow `docs/ui/selector-policy.md` (`data-testid`/ARIA first; no XPath/text/index).
- Waits/flake: follow `docs/ui/waits-and-flake-policy.md` (explicit waits, bounded retries, traces).
- Data/accounts: use synthetic accounts and reset strategy per `docs/ui/test-accounts-and-data.md`.
- Artifacts: capture trace/screenshot/video per `docs/ui/artifacts-and-evidence.md`; link in evidence bundles.
- Structure: keep page models/helpers minimal per `docs/ui/page-model-guidance.md`.
