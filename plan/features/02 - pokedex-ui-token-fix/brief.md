---
date: 2026-08-26
featureSlug: pokedex-ui-token-fix
featureTitle: Pokedex UI - Design Token Compliance Fix
status: in_progress
---

# Pokedex UI - Design Token Compliance Fix

## Context

The validate_ui tool identified design token compliance issues in the Pokedex UI implementation. Components were implemented functionally but the SMS DS token layer (antdTheme.ts component overrides, tokens.css gap classes, dark theme support) was incomplete.

## Work Items

| #   | ID     | Phase | Description                                                            |
| --- | ------ | ----- | ---------------------------------------------------------------------- |
| 1   | wi-001 | A0    | Theme/Scaffold audit: verify antdTheme.ts, tokens.css, .npmrc, barrels |
| 2   | wi-002 | A     | Atom wrappers design fix: ds-\* classes, token usage, FA Pro only      |
| 3   | wi-003 | A     | Molecule wrappers design fix: ds-\* classes, token usage               |
| 4   | wi-004 | B     | Pages design fix: remove hex literals, use tokens, dark theme          |
| 5   | wi-005 | B     | Dark theme CSS: [data-theme="dark"] overrides in tokens.css            |
