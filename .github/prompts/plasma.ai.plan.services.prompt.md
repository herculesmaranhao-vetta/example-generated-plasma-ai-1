---
description: "Writes or updates specs/services.md (Persistence + Business Services) for the entities in specs/domain.md. Ends with a complexity Recommendation."
agent: agent
argument-hint: "<requirements for the service(s) to specify>"
---

> See `.github/prompts/_shared.md` for `workspaceRoot` and server-read instructions.

Before calling, read `specs/architecture.md` yourself and pass it as `architecture`. Also read
`specs/domain.md` and pass it as `existingDomain` (required — this is the prerequisite spec). Also
read `specs/services.md` (pass as `existingServices`) and the active feature's `brief.md` (pass as
`activeBrief`) if they exist. This server may be hosted remotely and cannot read your local disk.

Call the `plasma_ai_plan_services` tool with `context` set to the user's request below. Then follow the
instructions returned by the tool exactly. If the tool stops on the Architecture gate, recommend
`/plasma.ai.define.architecture` first and do not write `specs/services.md` yet.

Show the `## Recommendation` block to the user. If `next_action: proceed`, tell them you can run
`/build_persistence_service`, `/build_business_service`, or `/build_http_api` next. If
`next_action: wait-for-approval`, stop and wait for explicit confirmation first.

## Request
