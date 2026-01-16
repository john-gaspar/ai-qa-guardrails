# Selector Policy

- Preferred: stable attributes (`data-testid`, `data-qa`, ARIA roles/names). Request devs add these for key elements.
- Acceptable fallbacks: accessible labels/roles when stable; limited use of CSS by attribute/class only if stable and versioned.
- Forbidden: XPath, positional selectors (nth-child), text-only matches for dynamic content, brittle CSS (auto-generated classes).
- Conventions: kebab-case `data-testid` values; unique per element purpose; avoid reusing across pages.
- Examples:
  - Good: `[data-testid="payment-submit"]`, `button[aria-label="Close dialog"]`.
  - Avoid: `button:has-text("Pay")`, `.btn.primary:nth-child(3)`.
- Changes: when a stable selector must change, update tests and selector map together; log in PR.
