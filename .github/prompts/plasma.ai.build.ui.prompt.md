---
description: "Implements React screens from specs/v<N>/ui/*.yaml using architecture Stack (pass architecture for remote MCP). phase A=wrappers; phase B=pages with uiPackagePaths."
agent: agent
argument-hint: "[optional extra scope/instructions]"
---

> See `.github/prompts/_shared.md` for `workspaceRoot` and server-read instructions.

Before calling, read **locally** and pass:

1. Every file under `specs/v<N>/ui/*.yaml` as `screens` (array of `{file, content}`) — **required**.
2. Content of `specs/v<N>/architecture.md` as `architecture` — **required for remote MCP** (this server cannot read your disk; without it tokens/mappings will not embed and the tool may STOP).
3. For **Phase B** (pages): also pass `phase: "B"` and `uiPackagePaths` (list of paths under `packages/*-ui/src/components/**` proving Phase A wrappers exist). Default `phase` is `"A"` (wrappers only — do not create pages).

The tool returns:

1. **Generic rules** (general-rules-ui, component-ui, atomic-ui-reuse, react core, declared framework
   tech) — plus `component-ui-ds` / SMS DS tokens / FontAwesome / ThemeConfig mapping / generate-component-tokens **only when architecture declares sms-ds**.
2. **Only the DSL schemas and framework mappings** for the specific `$type` names referenced in the
   screen YAML — never the full ~53-file catalog. Icon mapping is always included when sms-ds+antd.
3. **Required DSL wrapper inventory** (ordered Atom→…→Page). With `uiPackagePaths`, Status is
   server-computed EXISTS/MISSING.

If architecture declares a UI framework without `plasma/technologies/<fw>/tech-<fw>.md`, the tool
errors and **STOP**s — do not invent shadcn/mui mappings or fall back to antd.

Call the `plasma_ai_build_ui` tool. If the user provided extra scope or instructions below, pass them as
`context`; otherwise call it with an empty context.

> **If called from `run`:** `screens` / `architecture` / `uiPackagePaths` may already be provided by
> the dispatcher — use them directly instead of re-reading from disk.

Then follow the instructions returned by the tool exactly, creating all generated files under
`packages/<prefix>-ui/`. If the tool reports an error (missing screens, unsupported stack, or Phase B
blocked by MISSING wrappers), tell the user to fix architecture / run Phase A first as appropriate.

## Request (optional)
