# Evaluation Playbook (AI Outputs)

Step-by-step process to validate AI-generated test plans, test cases, and code before use.

## 1) Intake
- Collect prompt, AI output (raw), and any human edits. Ensure all are sanitized (no secrets/PII; see `SECURITY.md`).
- Identify deliverable type: plan, cases, automation code/snippets.
- Note required depth (minimum viable vs expanded) and constraints from `PROMPTS/`.

## 2) Structure check
- Confirm the output follows the requested format (sections, tables, required columns).
- Flag missing inputs/assumptions; require the AI to restate assumptions explicitly.

## 3) Content review
- Plans: verify scope, risks, in/out of scope, data strategy, observability, and dependencies match the request.
- Test cases: ensure coverage includes happy, negative, edge, contract, idempotency; check expected results include status, body fields, headers, side effects.
- Code/snippets: ensure placeholders for hosts/auth/data; no invented endpoints/fields; minimal dependencies.

## 4) Safety and contract checks
- Redact any lingering sensitive data; replace with placeholders.
- Validate API contracts: compare against OpenAPI/JSON Schema/Pact expectations (paths, methods, status codes, required/optional fields, types).
- Confirm data rules: synthetic patterns only; cleanup/idempotency called out.

## 5) Executable checks (for code)
- Run formatter/linter/type checks as applicable.
- Run unit/integration tests that exercise the generated code or scaffolds.
- Capture command outputs (pass/fail) for evidence.

## 6) Score against rubric
- Use `EVALS/output-quality-rubric.md` to assign scores per criterion (correctness, completeness, testability, safety, maintainability, assumptions).
- Document the score and rationale in verification notes.

## 7) Feedback and iteration
- If gaps: revise the prompt or add missing inputs; request regenerated sections instead of full rewrites.
- Record human edits in `examples/.../03-human-review-edits.md` and verification in `05-verification-notes.md`.

## 8) Finalize
- Store sanitized prompt/output and notes under `examples/`.
- Update PR description with checklist status and evidence links.
