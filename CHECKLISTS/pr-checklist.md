# PR Checklist (AI QA Guardrails)

Paste into your PR and check each item.

- [ ] No secrets/PII/production data introduced (per `SECURITY.md`); placeholders used.
- [ ] Prompts/templates updated with assumptions marked; no invented endpoints/fields.
- [ ] AI outputs sanitized and stored under `examples/` with human review notes.
- [ ] Tests/evals: ran relevant suites or documented not-run; applied `EVALS/evaluation-playbook.md` or `EVALS/output-quality-rubric.md` when AI output is included.
- [ ] Automation changes meet `CHECKLISTS/qa-automation-definition-of-done.md` (data determinism, retries, selectors, reporting).
- [ ] Documentation updated (`README.md`, `SECURITY.md`, or prompt files) if behavior/guardrails changed.
