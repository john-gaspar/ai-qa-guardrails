# Prompt: API/Integration Test Plan

## Goal
Produce a concise test plan for API and integration coverage, suitable for automation (API harness or Playwright for API/UX flows).

## Inputs required (redact secrets)
- Service/feature summary, user journeys, and primary APIs (paths without hostnames; placeholders OK).
- Target environment (dev/stage), base URL placeholder, auth scheme (e.g., bearer, mTLS) — no real credentials.
- Non-functional constraints (latency, throughput, rate limits, idempotency expectations).
- Dependencies/mocks allowed, data contracts, and known risks/edge cases.
- Acceptance criteria and out-of-scope items.
- Observability hooks available (logs/metrics/traces) with sensitive values removed.

## Output required
- Minimum viable:
  - Scope summary, in-scope vs out-of-scope bullets.
  - Risk list with proposed mitigations.
  - Environment + auth placeholders and dependencies/mocks to use.
  - Test types to cover (happy, negative, edge, contract, idempotency).
- Expanded:
  - Traceability table (requirement -> scenarios -> automation note).
  - Data strategy (synthetic patterns, fixtures, cleanup).
  - Observability/verification plan (what to assert in payloads, headers, events).
  - Timeline/ownership placeholders.

## Rules
- Do not invent endpoints, payload fields, or SLAs; ask for them if missing.
- Mark every assumption clearly.
- Use placeholders for hosts, tokens, and IDs; never include real data.
- Keep actionable and specific to API/integration (avoid UI-only fluff).

## Verification steps (human)
- Check all endpoints/fields are provided or explicitly assumed.
- Ensure no secrets/PII are present; placeholders are used consistently.
- Confirm risks align with the service and have mitigations.
- Validate that planned test types map to requirements and constraints.
