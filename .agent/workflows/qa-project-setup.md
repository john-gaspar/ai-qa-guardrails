# Workflow: QA Project Setup

1) Read `README.md`, `SECURITY.md`, and `docs/overview.md` to understand scope and data rules.
2) Capture requirements and risks in `docs/planning/issue-map.md`; create ADRs for key choices.
3) Define strategy: fill `PROMPTS/00-system.md`, `10-test-plan.md`, `20-test-cases.md`, `60-test-data.md`.
4) Set tooling: document stack in `docs/stack.md` and CI expectations in `docs/devops.md`.
5) Configure env: create `.mcp/local.json` (ignored) for secrets; keep repo placeholders only.
6) Plan evidence: set up `examples/` path for prompts/outputs/verification per feature.
