# Contract Checks (API/Integration)

Guidance to validate schemas and contracts against OpenAPI/JSON Schema/Pact (conceptual; no tooling lock-in).

## Inputs
- API definition or contract source (OpenAPI spec, JSON Schema, Pact file) with no secrets/PII.
- Target endpoints/flows, expected status codes, and required/optional fields.
- Sample requests/responses (sanitized) and header requirements.

## Steps
- Match coverage: confirm every in-scope endpoint/method has tests or cases referencing the contract.
- Validate requests: fields, types, enums, formats, required/optional, auth headers; reject invented fields.
- Validate responses: status codes, body schemas, headers; include error shapes for negative cases.
- Backward compatibility: note breaking vs non-breaking changes; ensure consumers/providers are aligned.
- Example data: use synthetic values adhering to schema constraints (lengths, patterns); no real data.
- Drift detection: highlight any divergence between observed behavior and spec; flag for fix or spec update.

## Evidence to capture
- Contract source path/version used.
- List of endpoints/methods verified and any gaps.
- Notes on mismatches or assumptions, with proposed fixes.
- Screens/logs of validation runs if tools were used (sanitized).
