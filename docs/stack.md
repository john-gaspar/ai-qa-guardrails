# Stack

Keep tool choices explicit and minimal. Replace placeholders with your selections.

- Languages/runtimes: `<language>`, `<version>`.
- Test runners: `<runner>` (e.g., Playwright test, pytest) with HTTP client or APIRequestContext.
- Contract validation: OpenAPI/JSON Schema/Pact (tool of choice).
- CI: GitHub Actions (see `.github/workflows/ci.yml`) or `<ci>`.
- Reporting: `<reporter>` (JUnit/HTML) saved as artifacts; redact secrets.
- Secrets/config: environment variables loaded locally; `.mcp/local.json` ignored; no secrets in repo.
