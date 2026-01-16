# Risk Rubric

Assess risk to prioritize coverage and reviews.

- Data sensitivity: none -> synthetic -> user-like -> regulated (highest).
- Blast radius: isolated component -> single service -> multi-service -> cross-tenant.
- Change frequency: stable -> occasional -> high churn.
- Customer impact: internal-only -> limited users -> broad user base.
- Dependency criticality: optional -> degraded -> hard dependency.

Guidance:
- Higher risk: require contract validation, negative/edge/idempotency tests, stricter reviews, and observability.
- Lower risk: lighter checks but still follow `SECURITY.md` and placeholders.
