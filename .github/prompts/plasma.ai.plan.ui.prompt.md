---
description: "Produces a UI plan (journeys/flows — no wireframes) then writes specs/ui/*.yaml. Asks which design system to use when architecture omits one (sms-ds is one option) and optional interactive data-source mocks."
agent: agent
argument-hint: "<screen(s) or flow requirements>"
---

> See `.github/prompts/_shared.md` for `workspaceRoot` and server-read instructions.

Before calling, read `specs/architecture.md` yourself (pass as `architecture`), `specs/services.md`
(pass as `existingServices`), every file under `specs/ui/*.yaml` (pass as `existingScreens`, an array
of `{file, content}`), and the active feature's `brief.md` (pass as `activeBrief`), if they exist.
This server may be hosted remotely and cannot read your local disk.

The tool embeds the **DSL component schemas scoped by atomic level** based on your request
context (pages, organisms, molecules, atoms — whichever are predicted relevant), plus the full
catalog manifest of every available `$type` name across all levels. If you need a schema from a
level that was not embedded, call `plan_ui` again with more specific context keywords.

**CRITICAL — Read the DSL Guardrails section in the tool output carefully.** Common mistakes that
will cause validation failures:

- Inventing `$type` names not in the catalog (there is no `Page`, no `Text`)
- Adding top-level sections like `dataSources`, `rowActions`, `dataTestIds`, `acceptanceCriteria`
  — these are NOT valid DSL attributes
- Using strings where arrays are expected (e.g. `Select.options` must be `{label, value}[]`)
- Adding framework attributes like `data-testid` or `route` to component instances
- Producing wireframes — they are out of scope

Call the `plasma_ai_plan_ui` tool with `context` set to the user's request below. Then follow the
instructions returned by the tool exactly. If the tool stops on the Architecture gate, recommend
`/plasma.ai.define.architecture` first and do not write UI plan/spec files yet:

1. If architecture already declares a design system, use it. Otherwise ask which DS to use (**sms-ds**, **none**, or another) — do not force sms-ds as the only default.
2. Ask whether to **plan mock data sources** for an interactive UI; if yes, clarify until mocks are fully specified.
3. Produce the UI plan (brief + work-items + Mermaid journeys/flows — **no wireframes**).
4. Present the plan and **wait for explicit approval**.
5. **Only after approval**: create/update `specs/ui/*.yaml` files.

> **If called from `run`:** `architecture`, `existingServices`, `existingScreens`, and `activeBrief` are
> already provided by the dispatcher — use them directly instead of re-reading from disk.

Show the `## Recommendation` block to the user. If `next_action: proceed`, tell them you can run
`/plasma.ai.build.ui` next. If `next_action: wait-for-approval`, stop and wait for explicit confirmation
before suggesting build.

## Request
