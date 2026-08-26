---
description: "Derives or updates the domain model and writes specs/domain.md. Ends with a complexity Recommendation."
agent: agent
argument-hint: "<requirements / entities to model>"
---

> See `.github/prompts/_shared.md` for `workspaceRoot` and server-read instructions.

Before calling, read `specs/architecture.md` (pass as `architecture`), `specs/domain.md` (pass as
`existingDomain`), and the active feature's `brief.md` (pass as `activeBrief`) yourself, if they
exist — omit any that don't. This server may be hosted remotely and cannot read your local disk.

Call the `plasma_ai_plan_domain` tool with `context` set to the user's request below. Then follow the
instructions returned by the tool exactly. If the tool stops on the Architecture gate, recommend
`/plasma.ai.define.architecture` first and do not write `specs/domain.md` yet.

Show the `## Recommendation` block to the user. If `next_action: proceed`, tell them you can run
`/build_db_schema` next. If `next_action: wait-for-approval`, stop and wait for explicit
confirmation before suggesting `/build_db_schema`.

## Request
