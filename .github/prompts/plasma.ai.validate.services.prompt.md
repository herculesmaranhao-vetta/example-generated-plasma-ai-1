---
description: "Compares specs/services.md against packages/*-persistence-service|*-business-service|*-api and produces a PASS/WARN/FAIL report, appended to the active feature's brief.md."
agent: agent
argument-hint: "[optional: focus validation on one package]"
---

> See `.github/prompts/_shared.md` for `workspaceRoot` and server-read instructions.

Before calling, read `specs/services.md` (pass as `existingServices`) and list what exists under
`packages/*-persistence-service`, `packages/*-business-service`, and `packages/*-api` (pass as
`generatedPackages`, a short description per package) yourself. This server may be hosted remotely
and cannot read your local disk.

Call the `plasma_ai_validate_services` tool. If the user provided extra scope below, pass it as `context`;
otherwise call it with an empty context to validate the full services layer.

Then follow the instructions returned by the tool exactly, appending the PASS/WARN/FAIL report to
the active feature's `brief.md`. If any `FAIL` is found, recommend running `/plasma.ai.plan` (or the
relevant `plan_*` prompt) again for a corrective plan.

## Request (optional)
