---
description: "Implements business-service components (non-persistence logic) from the Business Services section of specs/services.md."
agent: agent
argument-hint: "[optional extra scope/instructions]"
---

> See `.github/prompts/_shared.md` for `workspaceRoot` and server-read instructions.

Before calling, read `specs/services.md` yourself and pass its content as `existingServices` — this
is required in practice; without it the tool cannot verify the services spec. This server may be
hosted remotely and cannot read your local disk.

Call the `plasma_ai_build_business_service` tool. If the user provided extra scope or instructions below,
pass them as `context`; otherwise call it with an empty context to implement the full Business
Services section.

Then follow the instructions returned by the tool exactly, creating all generated files under
`packages/<prefix>-business-service/`. If the tool reports an error (missing `specs/services.md`),
tell the user to run `/plan_services` first.

## Request (optional)
