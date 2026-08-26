---
description: "Establishes or updates specs/v<N>/architecture.md (latest N) with the technology Stack table only (no ADRs)."
agent: agent
argument-hint: "<stack decisions / layers to record>"
---

> See `.github/prompts/_shared.md` for `workspaceRoot` and server-read instructions.

Before calling, read `specs/v<N>/architecture.md` (highest N, or `v1` if none) yourself if it exists, and pass its content as
`existingArchitecture`. If the project still has legacy flat `specs/*.md` with no `v*` folder, prefer migrating into `specs/v1/` first. This server may be hosted remotely and cannot read your local disk.

Call the `plasma_ai_define_architecture` tool with `context` set to the user's request below. Then follow the
instructions returned by the tool exactly, including creating/updating `specs/v<N>/architecture.md` with the
**Stack table only** — do not create ADRs. Update the latest version in place; do not bump to `vN+1` unless the user asks.

## Request
