# Test Accounts & Data

- Accounts: use non-sensitive, test-only accounts; no real user data. Document fixtures and reset cadence.
- Isolation: unique identifiers per test run (`user+ts@example.test`, `acct_test_<runId>`); avoid shared mutable state.
- Reset strategy: prefer idempotent setup/teardown via APIs; scheduled resets for shared test accounts; document known side effects.
- Data sources: synthetic payloads only; no production data; mask tokens and identifiers in logs/traces.
- Secrets: keep auth tokens/creds outside repo (env vars, `.mcp/local.json` ignored). Never commit secrets.
