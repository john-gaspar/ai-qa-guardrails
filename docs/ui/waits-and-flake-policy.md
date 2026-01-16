# Waits & Flake Policy

- No arbitrary sleeps. Use explicit waits for observable conditions (network idle for specific calls, locator visibility/enabled, text/value updates).
- Retries: only for known transient operations; cap attempts and log attempts. Do not mask deterministic failures.
- Timeouts: set per-step and per-test bounds; prefer shorter, explicit timeouts over global long ones.
- Trace-first debugging: collect traces/screens/video for failures; inspect network events and console logs before retrying.
- Async UI/API coupling: wait on UI signals tied to API completion (toast, table row update) or network interception, not fixed delays.
- Parallel runs: ensure data isolation and unique ids to avoid cross-test interference.
