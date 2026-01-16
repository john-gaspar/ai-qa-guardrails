# ai-qa-guardrails
[![CI](https://github.com/john-gaspar/ai-qa-guardrails/actions/workflows/ci.yml/badge.svg)](https://github.com/john-gaspar/ai-qa-guardrails/actions/workflows/ci.yml)

Guardrails and templates for QA engineers and SDETs using AI to plan, automate, and review API and integration tests. Files ship as editable blanks; fill them with your team's specifics before use.

## What this is
- Practical scaffolding to keep AI-assisted testing safe, reviewable, and repeatable.
- Lightweight markdown prompts, checklists, and evaluation stubs instead of tooling lock-in.

## What it's for
- Designing prompts and plans that constrain AI output for service-level and integration testing.
- Recording decisions, reviewing AI responses, and proving coverage for automation.
- Sharing reusable patterns (examples) without leaking customer or production data.

## Forbidden
- No PII, secrets, access tokens, customer identifiers, or production data in prompts, outputs, or examples.
- No blind copy/paste from AI into test code or configs; review and adapt before committing.
- No storing vendor-specific credentials or internal system names in this repo.

## 5-step workflow
1) Frame scope and risks: capture non-negotiables, data rules, and threat model in `SECURITY.md` and `PROMPTS/00-system.md`.
2) Plan coverage: outline strategy in `PROMPTS/10-test-plan.md`, enumerate cases in `PROMPTS/20-test-cases.md`, and define data in `PROMPTS/60-test-data.md`.
3) Build automation: draft prompts for harness/SDK usage in `PROMPTS/30-test-automation.md` and locator guidance in `PROMPTS/40-locator-strategy.md`; gate code with `CHECKLISTS/qa-automation-definition-of-done.md`.
4) Run + review: log AI outputs (`examples/example-01-api-integration/02-ai-output-raw.md`), capture human edits and verification notes (`examples/example-01-api-integration/03-human-review-edits.md`, `examples/example-01-api-integration/05-verification-notes.md`).
5) Evaluate + ship: score outputs using `EVALS/evaluation-playbook.md` and `EVALS/output-quality-rubric.md`; enforce `CHECKLISTS/pr-checklist.md` and `CHECKLISTS/ai-usage-checklist.md` before merging.

## Repo map
- `PROMPTS/` — blank prompt templates for system context, planning, cases, automation, locators, and data (e.g., `PROMPTS/10-test-plan.md`, `PROMPTS/30-test-automation.md`).
- `CHECKLISTS/` — review gates for AI usage and QA automation (`CHECKLISTS/pr-checklist.md`, `CHECKLISTS/ai-usage-checklist.md`, `CHECKLISTS/qa-automation-definition-of-done.md`).
- `EVALS/` — evaluation stubs for scoring AI outputs and running playbooks (`EVALS/evaluation-playbook.md`, `EVALS/output-quality-rubric.md`).
- `examples/` — worked example skeleton for an API integration showing prompts, outputs, edits, final solution, and verification (`examples/example-01-api-integration/04-final-solution/README.md`).
- `SECURITY.md` — team-specific data-handling rules and prohibited content.
- `CONTRIBUTING.md` — add your contribution rules; currently a placeholder.
- `LICENSE` — MIT license.

## Quickstart
- Clone: `git clone https://github.com/john-gaspar/ai-qa-guardrails.git && cd ai-qa-guardrails`.
- Fill the blanks: edit the markdown templates under `PROMPTS/`, `CHECKLISTS/`, and `EVALS/` with your team's guardrails and prompts.
- Use with AI: paste relevant prompt templates into your AI session, then capture raw outputs and edits in `examples/example-01-api-integration/`.
- Review before commit: scrub for secrets and production identifiers, apply the checklists, and document verification notes.
- Automate checks: connect the CI workflow at `.github/workflows/ci.yml` (badge above) once defined to run linting/tests for your automation code.

## Philosophy
- Safety first: default to least-privilege data, pre-approve datasets, and never store secrets in prompts or examples.
- Human-in-the-loop: AI suggestions are drafts; humans own correctness, coverage, and ethics.
- Observable outputs: keep prompts, raw responses, edits, and scores in version control for traceability.
- Small, composable prompts: keep prompts modular so they are easy to audit and reuse across services.

## Contributing
- Open an issue or PR and document changes in the relevant prompt/checklist/eval files; see `CONTRIBUTING.md` to add team-specific rules.
- Follow the forbidden list and scrub for secrets before pushing.

## License
- MIT — see `LICENSE`.
