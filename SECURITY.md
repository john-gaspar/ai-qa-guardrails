# AI Usage Security & Data Handling Rules

Strict guidance for using AI with this repository. Applies to prompts, chat history, model inputs/outputs, examples, and attachments.

## Allowed inputs to AI
- Synthetic data that cannot map back to real people, customers, or systems.
- Publicly documented API shapes (resource names, fields, allowed values) without secrets.
- Generic architecture patterns and non-sensitive code scaffolding.
- Non-sensitive test data you have explicit approval to share.

## Forbidden inputs to AI
- Any production or customer data: PII/PHI, names, emails, phone numbers, addresses, invoices.
- Secrets of any kind: API keys, access tokens, passwords, cookies, session IDs, SSH keys, JWTs, client secrets, private certs.
- Internal hostnames, VPN details, network diagrams, or IPs tied to internal environments.
- Proprietary identifiers: customer IDs, account numbers, order IDs, correlation IDs, device IDs, telemetry IDs.
- Logs or stack traces containing real data, headers, or tokens.
- URLs with query params containing user data or tokens.
- Source code or configs containing credentials, secrets, or prod-only settings.
- Anything under legal or contractual restriction to keep confidential.

## Redaction rules (apply before pasting)
- Emails → replace with `<EMAIL>` (e.g., `user@example.com` → `<EMAIL>`).
- Tokens / API keys / cookies / session IDs → `<TOKEN>`; do not partially mask.
- IDs (user/customer/order/device/log correlation) → `<ID>` (e.g., `cust_123` → `<ID>`).
- Logs → strip or replace any value-like substrings with `<REDACTED>`; remove Authorization/Set-Cookie headers entirely.
- URLs with query params → drop the params or replace values with `<VALUE>` (e.g., `?user_id=123` → `?user_id=<VALUE>`).
- Headers: remove `Authorization`, `Cookie`, `Set-Cookie`; redact any header carrying secrets or IDs to `<REDACTED>`.

## Safe substitutes
- Use placeholders with angle brackets: `<EMAIL>`, `<TOKEN>`, `<ID>`, `<URL>`, `<PHONE>`, `<ADDR>`.
- Synthetic users: `user+testNN@example.test`, `acct_test_001`, `order_test_001`.
- Synthetic tokens: `tok_test_abcdefghijklmnopqrstuvwxyz`, `sess_test_abcdef`.
- Timestamps/dates: `2026-01-02T03:04:05Z`, `2026-02-15`.
- Dummy payloads: lorem-style text, small integer ranges, obviously fake product/user records.

## Pre-flight checklist (run before any AI prompt)
- Remove/replace all secrets, tokens, cookies, and environment-specific URLs.
- Remove real user/customer identifiers and any logs containing them.
- Confirm data is synthetic or approved for external processing.
- Ensure prompts describe behaviors, not confidential architectures or internal systems.
- Keep only the minimum context needed; avoid dumping entire files or configs.
- Record what you shared and where in case you need to audit later.

## If you accidentally pasted sensitive data
- Revoke/rotate immediately: API keys, tokens, passwords, certificates, SSH keys, cookies.
- Invalidate affected accounts/sessions if possible.
- Replace exposed secrets in configs and redeploy with new values.
- Rewrite git history if data landed in commits (e.g., filter the secret and force-push per your org’s policy).
- Notify stakeholders/owners promptly with what was exposed, where, and remediation steps taken.
- Document the incident and update guardrails to prevent recurrence.
