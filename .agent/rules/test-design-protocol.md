# Test Design Protocol

- Start from requirement/contract: cover happy, negative, edge, contract, idempotency, and auth.
- Derive data: use synthetic fixtures, placeholders, and cleanup rules; ensure determinism.
- Assertions: status, body fields, headers, side effects (logs/metrics/events); avoid brittle text/visual checks.
- Observability: add markers/ids for tracing; prefer stable selectors/roles for UI-triggered APIs.
- Maintainability: small, tagged tests; shared helpers for auth/data/cleanup; avoid hard-coded sleeps.
