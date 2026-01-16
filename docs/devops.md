# DevOps & CI

- CI pipeline: lint, type, tests, link checks, secret scanning (see `.github/workflows/ci.yml`).
- Artifacts: store test reports/logs/screenshots; sanitize before upload.
- Environments: use dev/stage with synthetic data; never run against prod without approval.
- Config: supply env vars via CI secrets; keep defaults to placeholders in code.
- Branch policy: PRs require checklists (`CHECKLISTS/pr-checklist.md`), evidence links, and green CI.
- Observability: enable logs/traces/metrics for API calls triggered by tests; add IDs for correlation.
