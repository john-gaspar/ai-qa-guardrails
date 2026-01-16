# Prompt: Locator Strategy (API-triggered UI, Playwright)

## Goal
Define reliable locator and interaction strategy for UI that triggers API calls, optimized for Playwright (or similar) without brittleness.

## Inputs required (redact secrets)
- Page/flow description and key widgets tied to API calls (forms, tables, toasts).
- Stable attributes available (data-testid/data-qa, roles, labels, ARIA), plus any that are off-limits.
- Dynamic behaviors (loading states, debounce, async calls) and timing constraints.
- Anti-patterns to avoid (text match, index-based selectors).
- Accessibility and localization considerations.

## Output required
- Minimum viable:
  - Recommended selectors per element using stable attributes/roles.
  - Avoid list (what not to use) and basic wait strategy for async API-driven UI.
- Expanded:
  - Locator fallback order (preferred -> acceptable -> avoid).
  - Interaction notes (debounce handling, retries, timeouts, network idle vs UI signals).
  - Example snippets (Playwright-style) using placeholders and data-testid/data-qa.
  - Observability hooks (how to assert API requests/responses triggered by UI actions).

## Rules
- Do not rely on text/index/xpath unless explicitly allowed.
- No guessing selectors; ask if stable attributes are missing.
- Keep selectors future-proof and resilient to layout/text changes.
- Use placeholders and avoid real hostnames or secrets in example requests.

## Verification steps (human)
- Confirm selectors reference stable attributes or roles and avoid brittle patterns.
- Check waits align with actual async signals (network calls, spinners, toasts).
- Ensure snippets are tool-aligned (Playwright or equivalent) and free of secrets/PII.
- Validate observability hooks tie UI actions to API assertions.
