<p align="center">
  <a href="https://idd.estre.so/">
    <img src="assets/idd-readme-banner.png" alt="An abstract IDD probe moving through evidence checkpoints toward a protected decision" width="100%">
  </a>
</p>

<h1 align="center">IDD: Implementation-Driven Development</h1>

<p align="center">
  <a href="https://idd.estre.so/"><img alt="Introduction site on GitHub Pages" src="https://img.shields.io/badge/site-GitHub%20Pages-7447FF?style=flat-square&amp;labelColor=12131A"></a>
  <a href="https://github.com/SoliEstre/idd/actions/workflows/validate.yml"><img alt="Public surface validation" src="https://github.com/SoliEstre/idd/actions/workflows/validate.yml/badge.svg?branch=main"></a>
  <a href="docs/status.md"><img alt="Project status: research stage" src="https://img.shields.io/badge/status-research%20stage-FF826E?style=flat-square&amp;labelColor=12131A"></a>
  <a href="docs/skills.md"><img alt="Agent skill version 0.1.0 draft" src="https://img.shields.io/badge/agent%20skill-0.1.0--draft-F2D06B?style=flat-square&amp;labelColor=12131A"></a>
  <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-AEF5D8?style=flat-square&amp;labelColor=12131A"></a>
  <a href="README.ko.md"><img alt="Read in Korean" src="https://img.shields.io/badge/read-KO-F3F0E8?style=flat-square&amp;labelColor=12131A"></a>
</p>

IDD is an experimental software development method for learning from small implementations without treating the first implementation as the final answer.

You build a small, isolated probe. You observe what it teaches you. A person decides what the product should mean. Only then do you protect the approved behavior with tests, contracts, evaluations, and an independent check.

> An implementation is a probe before it is a promise.

## The short version

```text
State the intent and safety limits
  → Build one isolated probe
  → Collect evidence
  → Make a human decision
  → Write tests, contracts, or evaluations
  → Write or revise the official implementation
  → Verify independently
  → Consider delivery
```

Working code does not pass automatically. It moves through four states:

```text
Probe → Candidate → Contracted → Shippable
```

- A **Probe** explores one important question in isolation.
- A **Candidate** is worth comparing or refining, but is not yet a product promise.
- **Contracted** behavior has an explicit human decision and a matching test, contract, or evaluation.
- A **Shippable** change has also passed security, operations, rollback, and independent verification checks that apply to it.

## Why this project exists

AI coding agents can create a working implementation before a team understands the problem well enough to write a complete specification. That speed can help learning. It can also turn accidents in the first implementation into permanent product behavior.

IDD separates those two outcomes. It uses implementation to discover evidence, then requires an explicit decision before the evidence becomes a promise.

IDD does not replace test-driven development. It is a route for work where the important behavior is still uncertain. When the behavior is already known, use tests or contracts first.

## Start here

- [What IDD is](docs/what-is-idd.md)
- [The working method](docs/method.md)
- [Safety boundaries](docs/safety.md)
- [Agent skill and plugin support](docs/skills.md)
- [Project status](docs/status.md)
- [Hosting decision](docs/hosting.md)
- [Dense specification for AI systems and expert readers](ai/idd-spec.md)
- [Korean documentation](docs/ko/README.md)

The introduction site is published at [idd.estre.so](https://idd.estre.so/). Its host-neutral source remains in [`site/`](site/).

## Use it with an agent

The canonical [`skills/idd/SKILL.md`](skills/idd/SKILL.md) is packaged for Codex, Claude Code, and Gemini CLI. Claude Code can install it directly from this repository:

```text
/plugin marketplace add SoliEstre/idd
/plugin install idd@idd
```

Then invoke `/idd:idd` or let Claude match an ambiguous product or integration task. See [agent skill and plugin support](docs/skills.md) for Codex, Gemini CLI, GitHub Copilot, validation, and current distribution limits.

## Current limits and terms

IDD is a research-stage method. The project has not yet shown that IDD is faster, safer, or better than established methods across real teams. Those are questions for controlled pilots, not marketing claims.

The final word represented by the last letter in the proposed three-part name is also unresolved. Public documents therefore describe the actions instead of presenting either draft name as settled.

This repository is available under the [MIT License](LICENSE). IDD's claimed benefits remain research questions; the license permits use of the material but does not validate those claims.
