# Shared Instructions for MCP Client Prompts

## workspaceRoot

Always call the tool with `workspaceRoot` set to the absolute path of the current workspace folder
(you already know this from your own context) — never ask the user for it. This server may be
hosted remotely and cannot read your local disk.
