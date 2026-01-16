# ai-qa-guardrails
[![CI](https://github.com/john-gaspar/ai-qa-guardrails/actions/workflows/ci.yml/badge.svg)](https://github.com/john-gaspar/ai-qa-guardrails/actions/workflows/ci.yml)

Ready-to-use template for AI-assisted QA, API/integration coverage, and Playwright-style UI automation. Everything here is placeholder-friendly and assumes synthetic data only.

## Quick start
1) Use this template: clone/fork and keep `SECURITY.md` rules in force (no secrets/PII).
2) Fill docs: set your stack in `docs/stack.md`, strategy in `docs/test-strategy.md`, risks in `docs/risk-rubric.md`, and evidence expectations in `docs/evidence-bundles.md`.
3) Plan work: use `PROMPTS/00-system.md`, `PROMPTS/10-test-plan.md`, `PROMPTS/20-test-cases.md`, `PROMPTS/60-test-data.md`; log issues in `docs/planning/issue-map.md`.
4) Automate: build API/UI tests with `ui/` harness and `CHECKLISTS/qa-automation-definition-of-done.md`; follow `docs/ui/selector-policy.md` and `docs/ui/waits-and-flake-policy.md`.
5) Verify & ship: run CI, score with `EVALS/output-quality-rubric.md`, capture evidence per `docs/evidence-bundles.md`, then bundle prompts/outputs/edits in `examples/`.

## Structure
- `.agent/` — rules and workflows (AI, data, evidence, flake, risk, ADRs) to keep projects consistent.
- `docs/` — overview, stack, devops, strategy, quality bar, risk rubric, evidence bundles, planning map; UI guidance in `docs/ui/`.
- `PROMPTS/` — templates for system context, plans, cases, automation, locators, RCA, and data.
- `CHECKLISTS/` — AI usage, PR checks, automation definition of done.
- `EVALS/` — evaluation playbook, rubric, contract checks, unit-test verification, flake triage.
- `examples/` — end-to-end sample with prompt, AI output, human edits, final plan, and verification notes.
- `ui/` — Playwright + TypeScript harness with smoke test, config, lint/type scripts.
- `scratchpad/` — local notes (`scratchpad/TEMPLATE.md`); keep secrets out.
- `SECURITY.md` — AI usage and data-handling rules (must-read).

## Workflows (CI)
| Job | Purpose |
| --- | --- |
| link-check | Markdown link validation via lychee. |
| secret-scan | Gitleaks secret scanning. |
| ui-tests | Lint, typecheck, and run Playwright tests (if `ui/package.json` exists), upload artifacts. |

## UI automation
- Harness: see `ui/README.md`, `ui/playwright.config.ts`, `ui/tests/smoke.spec.ts`.
- Policies: selectors (`docs/ui/selector-policy.md`), waits/flake (`docs/ui/waits-and-flake-policy.md`), data (`docs/ui/test-accounts-and-data.md`), artifacts (`docs/ui/artifacts-and-evidence.md`), page models (`docs/ui/page-model-guidance.md`).
- Strategy: integrate UI scope with API plans in `docs/test-strategy.md` and `CHECKLISTS/qa-automation-definition-of-done.md`.

## Evidence & risk
- Evidence bundle expectations: `docs/evidence-bundles.md` (attach prompts, AI outputs, edits, tests, artifacts).
- Risk rubric: `docs/risk-rubric.md` guides coverage depth, review rigor, and test types.
- Example trail: `examples/example-01-api-integration/` shows prompt discipline + human verification.

## Security
- Follow `SECURITY.md` for all prompts, code, tests, and artifacts: no secrets/PII/real hostnames; use placeholders; redact headers/URLs; store secrets only in ignored local configs.

## Contributing
- Use `CHECKLISTS/pr-checklist.md`, capture AI evidence in `examples/`, and keep assumptions explicit. PR template lives in `.github/PULL_REQUEST_TEMPLATE.md`.
