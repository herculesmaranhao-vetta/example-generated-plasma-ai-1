---
date: 2026-08-26
featureSlug: pokedex-ui
featureTitle: Pokedex UI
status: in_progress
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
