# Playbook: Release Smoke

1) Scope: cover highest-risk endpoints/flows per `docs/risk-rubric.md` and recent changes.
2) Prepare data: synthetic and idempotent; pre-create fixtures if needed.
3) Run smoke set: happy + critical negative/idempotency/auth checks; keep runtime short.
4) Validate contracts and critical headers/status codes; assert side effects (events/logs) where available.
5) Record results and artifacts; flag any flake to `EVALS/flake-triage.md`.
6) Block release on failures; document deviations and follow-ups.
