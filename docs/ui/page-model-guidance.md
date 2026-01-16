# Page Model Guidance

- Keep it minimal: only create page objects/helpers for stable, reused flows; avoid over-abstracting single-use steps.
- Favor lean helpers: small functions that wrap selectors and assertions with clear inputs/outputs.
- Encapsulate selectors per page/feature; centralize `data-testid` map to reduce churn.
- Avoid deep inheritance; prefer composition and plain modules.
- Expose explicit actions (e.g., `submitPayment(payload)`) and clear return values (response/locator).
- Keep tests readable: avoid hiding assertions inside helpers unless reused; make waits explicit.
