# Quality Bar

- Safety: no secrets/PII; placeholders everywhere; align with `SECURITY.md`.
- Correctness: matches requirements/contracts; no invented fields/endpoints.
- Completeness: covers happy, negative, edge, and idempotency where applicable.
- Reliability: deterministic data, bounded retries/timeouts, stable selectors/roles, cleanup in place.
- Observability: asserts payloads/headers/side effects; logs/traces/metrics available for RCA.
- Maintainability: small focused tests, shared helpers, clear tags, minimal dependencies.

## UI-specific gates
- Selectors follow `docs/ui/selector-policy.md`; no XPath/text-only/index selectors.
- Waits follow `docs/ui/waits-and-flake-policy.md`; no fixed sleeps; explicit condition-based waits.
- Data uses non-sensitive accounts with reset strategy per `docs/ui/test-accounts-and-data.md`.
- Artifacts captured for failures (trace/screenshot/video/logs) and linked in evidence bundles.
- Page models/helpers stay minimal and explicit per `docs/ui/page-model-guidance.md`.
