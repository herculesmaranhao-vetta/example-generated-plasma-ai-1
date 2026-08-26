---
description: "Compares specs/ui/*.yaml against packages/*-ui and produces a PASS/WARN/FAIL report, appended to the active feature's brief.md."
agent: agent
argument-hint: "[optional: focus validation on one package]"
---

> See `.github/prompts/_shared.md` for `workspaceRoot` and server-read instructions.

Before calling, read every file under `specs/ui/*.yaml` (pass as `screens`, an array of
`{file, content}`) and list what exists under `packages/*-ui` (pass as `generatedPackages`) yourself.
This server may be hosted remotely and cannot read your local disk.

Call the `plasma_ai_validate_ui` tool. If the user provided extra scope below, pass it as `context`;
otherwise call it with an empty context to validate the full UI layer.

> **If called from `run`:** `screens` and `generatedPackages` are already provided by the
> dispatcher — use them directly instead of re-reading from disk.

Then follow the instructions returned by the tool exactly, appending the PASS/WARN/FAIL report to
the active feature's `brief.md`. If any `FAIL` is found, recommend running `/plasma.ai.plan` (or the
relevant `plan_*` prompt) again for a corrective plan.

## Request (optional)
