## Summary

<!-- What does this change and why? -->

## Checks

- [ ] `node tests/smoke.mjs` passes
- [ ] No secrets or machine-specific paths added
- [ ] All changes scoped to `@media (max-width: 820px)` (desktop layout untouched)
- [ ] README updated if the public contract (install, features, breakpoint) changed

## UI notes

This is a client-only UI plugin. If the change touches layout or selectors, describe the viewport / breakpoint behavior and note any upgrade-resistance considerations (hashed class names are not allowed).
