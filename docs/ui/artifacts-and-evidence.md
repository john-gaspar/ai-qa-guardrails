# Artifacts & Evidence (UI)

- Capture on failure: trace, network logs, console logs, screenshot, and video (if enabled).
- Capture on success (smoke/critical): at least trace or screenshot of final state for release smoke runs.
- Naming: include test file, test title, and timestamp or run id (e.g., `payments.spec/submit-card__run123.trace.zip`).
- Storage: attach artifacts to CI job; link in PR evidence bundle per `docs/evidence-bundles.md`.
- Redaction: ensure artifacts contain no secrets/PII; mask tokens/IDs in logs and traces.
