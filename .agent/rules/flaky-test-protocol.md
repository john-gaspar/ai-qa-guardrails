# Flaky Test Protocol

- Detect: intermittent failures without code changes; capture test name, seed/data, env, logs.
- Classify: data vs timing vs environment vs test-logic flake (see `EVALS/flake-triage.md`).
- Policy: no masking via retries; quarantine with tag/skip + tracking issue; assign owner and due date.
- Triage steps: fixed seed run, isolate data, check waits/selectors, verify contracts/config/flags, run serial vs parallel, inspect external deps.
- Remediate: fix root cause, tighten assertions, stabilize data, remove brittle waits, then remove quarantine after consistent CI passes.
