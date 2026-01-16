# Output Quality Rubric

Score each criterion 0-2. Sum for overall quality. Document rationale in verification notes.

| Criterion | 0 | 1 | 2 |
| --- | --- | --- | --- |
| Correctness | Wrong or invented facts/fields/endpoints. | Mostly correct with minor fixes needed. | Factually correct; fields/endpoints match contracts. |
| Completeness | Major gaps; missing required sections/cases. | Partially complete; some coverage missing. | Covers required scope, including negative/edge where relevant. |
| Testability | Not actionable; unclear steps/assertions; missing data. | Actionable but needs clarification or data tweaks. | Immediately actionable with clear steps, data, and assertions. |
| Safety | Contains or prompts for secrets/PII; ignores redaction rules. | Mostly safe; minor redaction/placeholder fixes needed. | Fully sanitized; placeholders used; follows `SECURITY.md`. |
| Maintainability | Brittle patterns (e.g., text selectors, hard-coded sleeps); no structure. | Some structure but includes brittle or noisy elements. | Structured, lean, uses stable patterns; easy to update. |
| Assumptions | Hidden assumptions or unchecked guesses. | Assumptions present but not fully flagged. | Assumptions explicitly stated; asks for missing info. |
