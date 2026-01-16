# AI Assistant Rules

- Purpose: keep AI use safe, structured, and reviewable for QA automation and integration testing.
- Follow `SECURITY.md`: never share secrets/PII/real hostnames; use placeholders (`<BASE_URL>`, `<TOKEN>`, `<ID>`, `<EMAIL>`).
- Inputs must be minimal: only the endpoints/fields/contracts needed; redact logs/headers/URLs.
- Never invent endpoints, fields, or auth flows. If missing, ask for them and mark assumptions.
- Always request structured outputs (tables/checklists/code blocks) aligned with `PROMPTS/`.
- Capture prompt + raw output + human edits in `examples/`; apply `EVALS/` checks and `CHECKLISTS/ai-usage-checklist.md`.
- Keep code snippets dependency-light, using placeholders and synthetic data; no package installs unless requested.
