# Prompt: Test Data Strategy (API/Integration)

## Goal
Define synthetic test data required for API/integration tests, with generation, masking, and cleanup rules that avoid real data.

## Inputs required (redact secrets)
- Entities/flows under test and required fields (types, constraints, enums).
- Relationships (e.g., user -> order -> payment), referential rules, and uniqueness constraints.
- Data volume and variability needed (positive/negative/boundary), idempotency/cleanup expectations.
- Forbidden data classes (PII/PHI/financial) and approved synthetic patterns/placeholders.
- Environments allowed for data creation and any seeding/mocking policy.
- Retention/rotation expectations and observability needs (logs/metrics) without real IDs.

## Output required
- Minimum viable (table):
  - `entity`, `fields`, `generation rule`, `sample placeholder`, `validation`, `cleanup/expiry`.
- Expanded:
  - Relationship map (which entities reference others and how).
  - Negative/boundary data set ideas (missing fields, bad types, limits, concurrency).
  - Masking/redaction rules for any captured outputs.
  - Rotation/refresh schedule and ownership placeholders.

## Rules
- Do not use real PII/secrets; use placeholders like `<EMAIL>`, `<TOKEN>`, `<ID>`.
- Do not invent domain fields; ask for missing ones.
- Mark assumptions and keep samples obviously synthetic.
- Ensure generation rules consider idempotency and cleanup to avoid polluting environments.

## Verification steps (human)
- Confirm all samples are synthetic and use placeholders only.
- Check constraints/relationships are accurate and complete.
- Validate cleanup/expiry is defined to keep environments tidy.
- Ensure negative/boundary cases align with API validation rules.
