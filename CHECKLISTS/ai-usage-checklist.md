# AI Usage Checklist

Use this before prompting and after receiving AI output. Attach evidence in your PR.

## Pre-prompt
- [ ] All inputs sanitized: no PII, secrets, tokens, cookies, internal hostnames (see `SECURITY.md`).
- [ ] Use placeholders for hosts, auth, IDs, emails (`<BASE_URL>`, `<TOKEN>`, `<ID>`, `<EMAIL>`).
- [ ] Provide only minimal context needed (endpoints/fields, rules, constraints); avoid full files unless needed.
- [ ] Note forbidden data types and approved synthetic patterns in the prompt.
- [ ] State assumptions and desired output format (minimal vs expanded) clearly.

## Post-output verification
- [ ] Scan output for secrets/PII/real hostnames; replace with placeholders or remove.
- [ ] Check no endpoints/fields were invented; mark or correct assumptions.
- [ ] Validate outputs follow requested structure and include negative/edge coverage where applicable.
- [ ] Confirm alignment with `SECURITY.md` and test data rules; apply redaction examples as needed.
- [ ] If code/snippets are present, ensure they are dependency-light and use placeholders only.

## Evidence to attach in PR
- [ ] Prompt(s) and sanitized AI output(s) saved under `examples/` (e.g., `examples/.../02-ai-output-raw.md`).
- [ ] Notes on human edits and verification (e.g., `examples/.../03-human-review-edits.md`, `05-verification-notes.md`).
- [ ] Checklist results recorded in the PR description (copy/paste these checks with status).
