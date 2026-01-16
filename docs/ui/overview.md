# UI Automation Overview

- Scope: critical end-to-end flows that exercise APIs via UI, high-risk paths (auth, payments, account changes), and regression-prone surfaces. Prefer API-level tests for logic; use UI to validate wiring and UX-critical behaviors.
- Out of scope: purely visual/layout checks, low-value navigations, and flows covered better via API or contract tests. Avoid automating unstable prototypes.
- Principles: minimize UI steps, assert via API/state where possible, keep data synthetic and resettable, and prioritize resilience (selectors, waits, idempotent data).
