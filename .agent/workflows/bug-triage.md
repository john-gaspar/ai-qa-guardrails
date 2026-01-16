# Workflow: Bug Triage

1) Capture report: repro steps, env, logs (sanitized), failing test IDs.
2) Classify severity/risk using `docs/risk-rubric.md`; link to requirement/contract.
3) Reproduce in controlled env with fixed data/seed; confirm scope.
4) Generate hypotheses; use `PROMPTS/50-rca-debug.md` for structured RCA; avoid guessing.
5) Collect evidence: traces/logs/requests (redacted), contract deltas, feature flags.
6) Decide action: fix, quarantine (if flake per `EVALS/flake-triage.md`), or reclassify; update ADR/issue.
7) Add verification notes and tests to prevent regression; attach to PR.
