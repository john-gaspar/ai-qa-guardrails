# Workflow: CI Failure Debug

1) Identify failing job/test and commit range; grab logs/artifacts (sanitize).
2) Classify failure: infra, contract drift, data flake, timing flake, test logic, dependency.
3) Reproduce locally with same command/seed/env; if not reproducible, increase logging.
4) Check recent changes to contracts/config/flags; validate endpoints against specs.
5) Apply `EVALS/flake-triage.md` if intermittent; quarantine only with owner/issue.
6) Fix root cause; add/assertions/tests; run full or targeted CI command locally.
7) Update PR with cause, fix, evidence (logs/test outputs), and any ADR/change notes.
