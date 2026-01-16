# Risk Protocol

- Identify: map features/endpoints to risk levels using `docs/risk-rubric.md` (data sensitivity, blast radius, churn).
- State mitigations: auth/roles, rate limits, idempotency, input validation, observability hooks.
- Classify tests: higher risk -> more negative/edge/contract/idempotency coverage and stricter reviews.
- Document assumptions and residual risks in ADRs and PRs.
- Reassess after incidents, schema changes, or dependency changes.
