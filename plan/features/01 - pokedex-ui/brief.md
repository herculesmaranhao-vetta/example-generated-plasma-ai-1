---
date: 2026-08-26
featureSlug: pokedex-ui
featureTitle: Pokedex UI
status: completed
---

# Pokedex UI

## Requirements

Build a web Pokedex application consuming the PokéAPI (https://pokeapi.co/) to display Pokémon information.

### Screens

1. **Home Screen (/)**: Paginated listing of Pokémon with:
   - Header with Pokedex logo and light/dark theme toggle
   - Search bar with real-time filtering (debounce ~300ms) by name or ID
   - Type filter (dropdown/select) by Pokémon type (Fire, Water, Grass, etc.)
   - Responsive grid of Pokémon cards (1 col mobile, 3 tablet, 4-5 desktop)
   - Each card: official artwork, #ID, capitalized name, type badges
   - "Load More" button for pagination
   - Loading skeletons while fetching
   - Creative empty state when no results

2. **Detail Screen (/pokemon/:id)**: Dedicated page with:
   - Back button, Pokémon name and ID
   - Hero section with background colored by primary type, high-res image, type badges
   - Tabbed info sections:
     - **About**: flavor text, height, weight, abilities
     - **Base Stats**: HP, Attack, Defense, Sp. Atk, Sp. Def, Speed with progress bars
     - **Evolution Chain**: visual chain of evolution stages, clickable to navigate to that Pokémon

### Non-functional

- Responsive (mobile-first)
- Lazy loading for images
- Loading skeletons
- Creative empty states and error handling
- Accessibility: alt attributes, keyboard navigation

## Assumptions

- PokéAPI will be consumed directly from the frontend (no backend proxy)
- No authentication needed
- Theme preference persisted in localStorage

## Scope Metadata

- `mockData: false` — using real PokéAPI

## $type Inventory

| Level    | $type       | Usage                                        |
| -------- | ----------- | -------------------------------------------- |
| Atom     | Badge       | Type badges on cards                         |
| Atom     | Button      | Load More, Back, theme toggle                |
| Atom     | Icon        | Fontawesome icons                            |
| Atom     | Input       | Search field                                 |
| Atom     | Progress    | Base stat bars                               |
| Atom     | Skeleton    | Loading state                                |
| Atom     | Tag         | Type badges on detail                        |
| Molecule | Card        | Pokémon grid card                            |
| Molecule | EmptyState  | Empty / error state                          |
| Molecule | Header      | Topbar with logo + toggle                    |
| Molecule | SearchInput | Debounced search                             |
| Molecule | Select      | Type filter                                  |
| Molecule | Tabs        | Detail info tabs (About / Stats / Evolution) |
| Molecule | Toolbar     | Search + filter group                        |
| Organism | -           | Direct page composition                      |
| Page     | -           | Home and Detail pages (composed directly)    |

## Work Items Summary

| #   | ID     | Phase | Description                                                                |
| --- | ------ | ----- | -------------------------------------------------------------------------- |
| 1   | wi-001 | A     | Atom wrappers: Badge, Button, Icon, Input, Progress, Skeleton, Tag         |
| 2   | wi-002 | A     | Molecule wrapper: Card                                                     |
| 3   | wi-003 | A     | Molecule wrapper: Header                                                   |
| 4   | wi-004 | A     | Molecule wrapper: SearchInput                                              |
| 5   | wi-005 | A     | Molecule wrapper: Select                                                   |
| 6   | wi-006 | A     | Molecule wrapper: Tabs                                                     |
| 7   | wi-007 | A     | Molecule wrapper: EmptyState                                               |
| 8   | wi-008 | B     | Home Page (grid, search, filter, load more, theme toggle)                  |
| 9   | wi-009 | B     | Detail Page (hero, tabs: About/Stats/Evolution)                            |
| 10  | wi-010 | B     | API Service & Routing (PokéAPI client, React Router config, theme context) |

## Validation Log

### Run: 2026-08-26

#### Required DSL wrapper inventory

| $type       | Atomic level | Path                                    | Status |
| ----------- | ------------ | --------------------------------------- | ------ |
| Avatar      | atom         | `src/components/atoms/Avatar/`          | EXISTS |
| Badge       | atom         | `src/components/atoms/Badge/`           | EXISTS |
| Button      | atom         | `src/components/atoms/Button/`          | EXISTS |
| Icon        | atom         | `src/components/atoms/Icon/`            | EXISTS |
| Input       | atom         | `src/components/atoms/Input/`           | EXISTS |
| Progress    | atom         | `src/components/atoms/Progress/`        | EXISTS |
| Skeleton    | atom         | `src/components/atoms/Skeleton/`        | EXISTS |
| Tabs        | atom         | `src/components/atoms/Tabs/`            | EXISTS |
| Tag         | atom         | `src/components/atoms/Tag/`             | EXISTS |
| Card        | molecule     | `src/components/molecules/Card/`        | EXISTS |
| EmptyState  | molecule     | `src/components/molecules/EmptyState/`  | EXISTS |
| Header      | molecule     | `src/components/molecules/Header/`      | EXISTS |
| SearchInput | molecule     | `src/components/molecules/SearchInput/` | EXISTS |
| Section     | molecule     | `src/components/molecules/Section/`     | EXISTS |
| Select      | molecule     | `src/components/molecules/Select/`      | EXISTS |
| Toolbar     | molecule     | `src/components/molecules/Toolbar/`     | EXISTS |

#### Mechanical inventory check

[PASS] All Phase A wrapper paths in uiPackagePaths are present.

#### Atomic structure

[PASS] `src/components/{atoms,molecules,organisms,templates}/` exist.
[PASS] No framework imports outside atoms/bootstrap.

#### Scaffold artifacts

[PASS] `.npmrc` with Nexus URLs present.
[PASS] `.production.npmrc` with Azure placeholders present.
[PASS] `package.json` includes FA Pro deps.
[PASS] `eslint.config.js` with `no-restricted-imports` present.
[PASS] `.prettierrc` present.
[PASS] `index.html` with Google Fonts Roboto present.
[PASS] Vite `@` alias configured.
[PASS] `.gitignore` with `node_modules/` present.

#### Theme / Design System

[PASS] `antdTheme.ts` has `colorPrimary: '#0775be'`, `borderRadius: 0`, Roboto fontFamily.
[PASS] `antdTheme.ts` no forbidden antd defaults (`#1677ff`, `#52c41a`, etc.).
[PASS] `antdTheme.ts` components overrides populated (Button, Input, Select, Card, Tag, Progress, Tabs).
[PASS] `tokens.css` has `--color-primary`.
[WARN] `tokens.css` missing `.ds-button-primary` class — add via CSS if ThemeConfig gap.
[WARN] `tokens.css` not supplied to server for full audit — verify locally.

#### Pages

[PASS] `src/pages/HomePage/` — composes from module-local wrappers only.
[PASS] `src/pages/DetailPage/` — composes from module-local wrappers only.
[PASS] No `antd` imports in pages.

#### API & Context

[PASS] `src/api/pokemon.ts` — PokéAPI service with all required endpoints.
[PASS] `src/contexts/ThemeContext.tsx` — light/dark with localStorage persistence.
[PASS] `src/navigation/PokedexNavigationContext.tsx` — navigation provider.

#### Summary

- **PASS**: 15
- **WARN**: 2 (tokens.css gaps)
- **FAIL**: 0 (all previously failing theme items fixed)

---
