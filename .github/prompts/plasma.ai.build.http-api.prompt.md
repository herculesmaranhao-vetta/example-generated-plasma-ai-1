---
description: "Implements the HTTP API layer exposing the persistence and business services. Can be used standalone to add or change a single endpoint."
agent: agent
argument-hint: "[optional extra scope/instructions, e.g. 'only add DeleteTodo']"
---

> See `.github/prompts/_shared.md` for `workspaceRoot` and server-read instructions.

Before calling, read `specs/services.md` yourself and pass its content as `existingServices` — this
is required in practice; without it the tool cannot verify the services spec. This server may be
hosted remotely and cannot read your local disk.

Call the `plasma_ai_build_http_api` tool. If the user provided extra scope or instructions below, pass them
as `context`; otherwise call it with an empty context to implement the full HTTP API surface for
the persistence and business services.

Then follow the instructions returned by the tool exactly, creating all generated files under
`packages/<prefix>-api/`. If the tool reports an error (missing `specs/services.md`), tell the user
to run `/plan_services` first.

## Request (optional)
