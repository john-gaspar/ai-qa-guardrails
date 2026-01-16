# Flake Triage Playbook

Rules for handling flaky tests. Goal: fix or quarantine with a clear owner; do not hide via retries.

## Detection
- Watch for intermittent failures in CI/local runs without code changes.
- Tag failures with test name, seed/data used, environment, and logs/screens as evidence.
- Reproduce with the same seed/data and environment settings when possible.

## Classification
- Data flake: non-deterministic fixtures, missing cleanup, shared state collisions.
- Timing flake: brittle waits, race conditions, async/network variability.
- Environment flake: external dependency issues, rate limits, env drift.
- Test logic flake: assertions too strict/loose, hidden assumptions.

## Policy
- Do not mask with blanket retries. If a retry is needed for triage, record it and treat as a failure until fixed.
- Quarantine: move failing tests to a quarantine tag/skip with tracking issue; block release criteria as needed.
- Ownership: assign an owner and due date for remediation.

## Triage steps
- Gather artifacts: logs, traces, screenshots, request/response (sanitized), seeds/data used.
- Minimize variables: run with fixed seeds, isolated data, and controlled network conditions.
- Inspect waits/selectors (for UI/API-triggered flows); replace brittle patterns with stable waits/selectors.
- Check contracts/config: confirm endpoints, auth, and feature flags match expectations.
- Run under stress/parallel and serial modes to isolate race conditions.

## Remediation loop
- Fix root cause (data determinism, wait strategy, error handling, contract drift).
- Add or tighten assertions to detect the issue sooner.
- Remove quarantine once the test passes consistently in CI (multiple runs without retries).
- Document the fix and update related prompts/checklists to prevent regression.
