# Workflow: Regression Hardening

1) Review recent incidents/bugs and map to scenarios/edges not covered.
2) Prioritize by risk (see `docs/risk-rubric.md`): data sensitivity, blast radius, churn.
3) Add/upgrade tests: negative, boundary, idempotency, auth expiry, contract drift cases.
4) Improve determinism: data factories, cleanup, stable selectors, time control.
5) Strengthen observability: trace/log markers, assertion on side effects/events.
6) Run suite in parallel and stress modes; capture flakes and feed into `EVALS/flake-triage.md`.
7) Document additions in `PROMPTS/` or ADRs; update PR with evidence.
