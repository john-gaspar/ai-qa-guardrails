# Playbook: Debugging

1) Reproduce with minimal inputs, fixed seed/data, and correct env.
2) Gather artifacts: logs/traces/requests/responses (sanitized), failing test IDs.
3) Check contracts/configs/flags for drift; validate against specs.
4) Inspect waits/selectors (for UI/API flows); replace brittle waits with condition-based waits.
5) Form hypotheses and rank; run smallest experiments first.
6) Capture findings and fixes; add/adjust tests; link evidence in PR.
