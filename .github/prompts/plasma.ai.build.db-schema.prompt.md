---
description: "Implements database migrations (Flyway) from an existing, approved specs/domain.md. Never modifies the specification."
agent: agent
argument-hint: "[optional extra scope/instructions]"
---

> See `.github/prompts/_shared.md` for `workspaceRoot` and server-read instructions.

Before calling, read `specs/domain.md` yourself and pass its content as `existingDomain` — this is
required in practice; without it the tool cannot verify the domain model. This server may be hosted
remotely and cannot read your local disk.

Call the `plasma_ai_build_db_schema` tool. If the user provided extra scope or instructions below, pass them
as `context`; otherwise call it with an empty context to implement the full domain model. Set
`includeSampleData: true` only if the user asked for sample data.

Then follow the instructions returned by the tool exactly, creating all generated files under
`packages/<prefix>-db/`. If the tool reports an error (missing/empty `specs/domain.md`), tell the
user to run `/plan_domain` first.

## Request (optional)
