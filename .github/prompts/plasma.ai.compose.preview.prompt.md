---
description: "Async preview of composeFromManifest for an agent key (truncated). Experimental MCP tasks capability."
agent: agent
argument-hint: "<manifest agent key, e.g. plasma.ai.build.ui>"
---

> See `.github/prompts/_shared.md` for `workspaceRoot` and server-read instructions.

Call the `plasma_ai_compose_preview` tool with `agentKey` set to a valid key from
`.agents/manifest.yaml` (e.g. `plasma.ai.plan.ui`, `plasma.ai.build.ui`). Optionally pass
`maxChars` to truncate the preview.

This is an experimental async task — poll the task until completed, then read the result.
It does not replace synchronous `plasma_ai_plan_*` / `plasma_ai_build_*` tools.

## Agent key
