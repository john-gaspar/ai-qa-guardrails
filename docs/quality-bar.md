# Quality Bar

- Safety: no secrets/PII; placeholders everywhere; align with `SECURITY.md`.
- Correctness: matches requirements/contracts; no invented fields/endpoints.
- Completeness: covers happy, negative, edge, and idempotency where applicable.
- Reliability: deterministic data, bounded retries/timeouts, stable selectors/roles, cleanup in place.
- Observability: asserts payloads/headers/side effects; logs/traces/metrics available for RCA.
- Maintainability: small focused tests, shared helpers, clear tags, minimal dependencies.
