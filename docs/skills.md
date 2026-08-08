# Agent skill and plugin support

IDD 0.1.0-draft ships one canonical skill at `skills/idd/`. Codex, Claude Code, and Gemini CLI package that source to reduce copy drift; runtime triggering, context, and tool behavior remain platform-dependent and unvalidated.

## Support matrix

| Agent | Distribution surface | Status |
|---|---|---|
| Codex | `.codex-plugin/plugin.json` + `skills/idd/` | Plugin manifest and UI metadata included; public directory listing is not yet submitted. |
| Claude Code | `.claude-plugin/plugin.json`, marketplace manifest, shared skill | Installable from this GitHub repository; skill command is `/idd:idd`. |
| Gemini CLI | `gemini-extension.json` + shared skill | Installable as a GitHub extension. |
| GitHub Copilot | Agent Skills-compatible `skills/idd/` | Copy the complete skill folder into a supported project or personal skills directory. |

The plugin contains instructions and a deterministic structural manifest validator. It has no external app, MCP server, credential, or implicit permission grant.

## Claude Code

Inside Claude Code, add this repository as a marketplace and install the plugin:

```text
/plugin marketplace add SoliEstre/idd
/plugin install idd@idd
```

Invoke it explicitly with `/idd:idd`, or describe an ambiguous product or integration task and let Claude match the skill description. For local plugin development:

```powershell
claude --plugin-dir .
```

Official format reference: [Claude Code plugins](https://code.claude.com/docs/en/plugins).

## Gemini CLI

Run this command outside Gemini CLI’s interactive mode:

```powershell
gemini extensions install https://github.com/SoliEstre/idd
```

Gemini discovers `skills/idd/SKILL.md` from the extension. Official format reference: [Gemini CLI extension reference](https://github.com/google-gemini/gemini-cli/blob/main/docs/extensions/reference.md).

## Codex

The repository includes the Codex plugin manifest, skill UI metadata, and shared skill. Import or test the repository through the plugin development surface available to your Codex workspace. Availability can depend on plan, rollout, workspace policy, and role. The plugin requests no app or external tool dependency.

Official product reference: [Plugins in Codex](https://help.openai.com/en/articles/20001256-plugins-in-codex/).

## GitHub Copilot

Copy the complete `skills/idd` directory into `.agents/skills/idd`, `.github/skills/idd`, or another supported Agent Skills location. Keep the `references/`, `scripts/`, and `agents/` subdirectories together with `SKILL.md`.

Official format reference: [Adding agent skills for GitHub Copilot](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills).

## What the skill enforces

1. Route by uncertainty and risk before implementation.
2. Use one isolated probe for one decision-relevant question.
3. Validate `idd-probe.json` before execution; `PASS` checks structure and does not authorize the probe.
4. Preserve evidence and stop for an attributable human decision.
5. Distill only approved behavior into contracts and tests.
6. Re-implement officially and verify through an independent evidence path.

The skill is a research draft. It does not turn a prompt into a deterministic policy engine, verify that data is truly de-identified, establish that a command is safe, or prove that IDD improves delivery outcomes.

[한국어](ko/skills.md) · [Skill source](../skills/idd/SKILL.md)
