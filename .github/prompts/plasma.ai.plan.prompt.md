---
description: "Entry point for any new feature or module increment. Decides scope, writes specs/overview.md, and creates the feature record (brief.md + work-items/)."
agent: agent
argument-hint: "<feature or module request>"
---

> See `.github/prompts/_shared.md` for `workspaceRoot` and server-read instructions.

Before calling, read the project yourself and pass what you find (omit any that don't exist yet).
This server may be hosted remotely and cannot read your local disk:

- Every file under `specs/*.md` — concatenate as `existingSpecs`, labeled with each file's path.
- Every folder under `plan/features/` — summarize as `activeFeatures`: one line per slug with its
  status and pending work-item count (read each `brief.md` and `work-items/*.md` to determine this).

Call the `plasma_ai_plan` tool with `context` set to the user's request below. Then follow the
instructions returned by the tool exactly:

- Apply the Architecture gate: if `specs/architecture.md` is missing or lacks tech for the
  in-scope layers, recommend `/plasma.ai.define.architecture` first.
- Clarify ambiguities before finalizing.
- Present the scope decision and ordered task list to the user.
- Do not call any `plan_*`/`build_*`/`validate_*` tool yourself until the user confirms.

## Request
