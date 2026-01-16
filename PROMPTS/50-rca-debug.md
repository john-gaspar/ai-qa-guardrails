# Prompt: RCA & Debug Plan for Failing API/Integration Tests

## Goal
Diagnose failing API/integration tests and propose targeted experiments to isolate the cause, without exposing sensitive data.

## Inputs required (redact secrets)
- Failing test IDs/names and brief intent.
- Error output: status codes, sanitized response bodies, stack traces/log lines with secrets/IDs removed.
- Recent code/config changes (summary, not full diff) and feature flags toggled.
- Environment and dependencies involved (services, mocks, data stores) with placeholders.
- Data/fixtures used (synthetic patterns only) and whether tests are idempotent.
- Observability clues (metrics/spans/log markers) without real identifiers.

## Output required
- Minimum viable:
  - Hypotheses list (likely causes) ranked by plausibility.
  - Evidence pointers supporting/refuting each hypothesis.
  - Next investigative steps with expected signals.
- Expanded:
  - Experiment plan (what to change, how to measure, rollback criteria).
  - Isolation matrix (env vs dependency vs data vs code) with suggested toggles/mocks.
  - Remediation options (code, config, data) and verification steps to confirm fix.

## Rules
- Do not invent internal endpoints/configs; ask if missing.
- Keep all data placeholders/synthetic; do not echo secrets or PII.
- Mark assumptions clearly and keep steps minimal and reversible.
- Prefer low-cost checks first (logs/metrics toggles) before invasive changes.

## Verification steps (human)
- Validate no sensitive data is echoed back.
- Ensure hypotheses map to provided evidence and recent changes.
- Confirm experiments are small, observable, and reversible.
- Verify remediation steps include post-fix assertions and monitoring.
