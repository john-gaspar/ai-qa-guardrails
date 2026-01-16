# UI Harness (Playwright + TypeScript)

Minimal Playwright setup for UI smoke and integration checks.

## Prerequisites
- Node 18+ (LTS recommended).

## Install
```bash
cd ui
npm install
# install browsers if not already present
npx playwright install
```

## Scripts
- `npm test` — run headless smoke/tests.
- `npm run test:headed` — run in headed mode.
- `npm run test:ui` — interactive UI mode.
- `npm run lint` — ESLint over TypeScript sources.
- `npm run typecheck` — TypeScript `--noEmit`.

## Configuration
- `BASE_URL` env var controls target (default: `https://example.com`). Override per run: `BASE_URL=https://your-app.example npm test`.
- Artifacts: screenshots/videos/traces captured on failure under `test-results/` and `playwright-report/`.
- Playwright config: `ui/playwright.config.ts` — sets baseURL, timeouts, artifacts, projects (Chromium default).

## Sample test
- `tests/smoke.spec.ts` opens `/` on `BASE_URL` and asserts the page title and heading.

## Notes
- Keep credentials out of this repo; supply tokens/creds via env or secrets managers.
- Prefer stable selectors (`data-testid`/ARIA) and explicit waits if adding more tests.
