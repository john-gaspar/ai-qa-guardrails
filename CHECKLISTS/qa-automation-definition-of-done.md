# QA Automation Definition of Done

## Must
- Deterministic data: use synthetic fixtures/placeholders; ensure idempotent setup/cleanup and avoid shared mutable state.
- Selector policy: prefer stable attributes/roles (`data-testid`/`data-qa`/ARIA); no text/index/xpath unless approved.
- Retries/timeouts: explicit timeouts; retries only for known transient conditions with max attempts and backoff; no silent infinite retries.
- Assertions: check status, payload fields, headers, and side effects (logs/events) as defined in plans.
- Reporting: emit clear failure messages, attach request/response artifacts with secrets redacted, and tag tests by area/priority.
- CI readiness: tests runnable headless/isolated with documented env vars and defaults; no external, unauthenticated dependencies.
- Flake handling: detect and quarantine flaky tests with tracking issue; do not mask by retrying without investigation.

## Should
- Data reuse: prefer factories/builders to reduce duplication; centralize placeholder patterns.
- Observability: include log/trace/metric hooks for faster RCA.
- Parallel safety: ensure fixtures and data do not collide under parallel runs.
- Performance: keep tests lean; avoid long sleeps—use condition-based waits.
- Documentation: link scenarios back to `PROMPTS/` and `examples/` for traceability.
