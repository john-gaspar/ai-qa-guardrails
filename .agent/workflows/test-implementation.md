# Workflow: Test Implementation

1) Reuse plans/cases: pull from `PROMPTS/20-test-cases.md` and risk tags in `docs/risk-rubric.md`.
2) Build fixtures/helpers: auth, data factories, cleanup hooks (synthetic, deterministic).
3) Write tests: follow `CHECKLISTS/qa-automation-definition-of-done.md` for selectors, retries, reporting.
4) Contracts: validate against OpenAPI/JSON Schema/Pact; align with `EVALS/contract-checks.md`.
5) Run checks: lint/format/type/tests; capture logs for evidence with secrets redacted.
6) Record evidence: save prompt/output/edits in `examples/`; note commands in PR per `CHECKLISTS/pr-checklist.md`.
