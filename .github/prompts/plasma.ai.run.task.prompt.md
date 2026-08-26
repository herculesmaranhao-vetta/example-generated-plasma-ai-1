---
description: "Dispatches the next eligible pending task from plan/features/<slug>/work-items/ to the matching plan_*/build_*/validate_* tool."
agent: agent
argument-hint: "[taskId] [featureSlug] [extra context]"
---

> See `.github/prompts/_shared.md` for `workspaceRoot` and server-read instructions.

Before calling, read the project yourself and pass what you find. This server may be hosted
remotely and cannot read your local disk:

- Resolve the active feature slug (ask only if genuinely ambiguous across multiple features), then
  read every file under `plan/features/<slug>/work-items/` and pass them as `workItems` (array of
  `{file, content}`) — this is required in practice; without it the dispatcher cannot find the next
  eligible task. Also read and pass `plan/features/<slug>/brief.md` as `brief`.
- Also read, if they exist, and pass along so whichever dispatched tool needs them has what it
  needs: `specs/architecture.md` as `architecture`, `specs/domain.md` as `existingDomain`,
  `specs/services.md` as `existingServices`, every file under `specs/ui/*.yaml` as `existingScreens`
  (array of `{file, content}`). Omit any that don't exist yet — irrelevant ones are ignored by
  whichever tool ends up being dispatched.
  **These values will be forwarded to whichever tool is dispatched, avoiding re-reads.**

Call the `plasma_ai_run_task` tool. If the user specified a task id, feature slug, or extra context below,
pass them as `taskId`, `featureSlug`, and `context` respectively — otherwise call it with no
other arguments to dispatch the next eligible pending task. Pass `includeSampleData: true` only if
the user already asked for sample data in their message below — never ask them about it; if they
did not mention it, omit it (defaults to `false`). It only has any effect when the dispatched task
turns out to be `db-schema`; it is ignored for every other task type.

Then follow the instructions returned by the tool exactly. If the response is a Complexity Gate
message asking for approval, stop and present it to the user — do not call `plasma_ai_run_task` again for
the same task until the user explicitly approves. After any generated/updated files are approved,
check the task off per the track-execution conventions referenced in the tool's response.

## Request (optional taskId / featureSlug / context)
