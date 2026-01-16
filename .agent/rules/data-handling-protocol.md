# Data Handling Protocol

- Default to synthetic data; never include PII/secrets/tokens/real hostnames (see `SECURITY.md`).
- Redact inputs/outputs: replace emails/IDs/tokens/headers/URL params with placeholders (`<EMAIL>`, `<ID>`, `<TOKEN>`, `<VALUE>`).
- Approved patterns: `user+testNN@example.test`, `acct_test_001`, `tok_test_abc`, ISO dates.
- No raw logs with headers; strip `Authorization/Cookie/Set-Cookie` before sharing.
- Store sanitized prompts/outputs in `examples/`; do not commit real credentials. Keep secrets in `.mcp/local.json` (ignored).
