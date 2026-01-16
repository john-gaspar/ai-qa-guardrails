# Playbook: Incident Regression

1) Capture incident details: trigger, impact, scope, env, timelines.
2) Identify root cause and guardrails that failed (data, contract, observability, auth).
3) Add targeted tests: regression case + negative/edge/idempotency as applicable.
4) Strengthen detection: contract checks, alerts, logs/traces around the failing path.
5) Harden data/fixtures to be deterministic; fix flake vectors.
6) Verify fixes in CI/local; attach evidence (tests, logs) to PR.
7) Update ADRs, risk ratings, and documentation if risk changes.
