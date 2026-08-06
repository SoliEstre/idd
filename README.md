# IDD: Implementation-Driven Development

[한국어](README.ko.md)

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
- [Project status](docs/status.md)
- [Hosting plan](docs/hosting.md)
- [Dense specification for AI systems and expert readers](ai/idd-spec.md)
- [Korean documentation](docs/ko/README.md)

The introduction site source is in [`site/`](site/). The site is ready for a static host, but the public deployment target has not been approved yet.

## Current limits

IDD is a research-stage method. The project has not yet shown that IDD is faster, safer, or better than established methods across real teams. Those are questions for controlled pilots, not marketing claims.

The final word represented by the last letter in the proposed three-part name is also unresolved. Public documents therefore describe the actions instead of presenting either draft name as settled.

No open-source license has been selected yet. Public access does not by itself grant permission to copy, modify, or redistribute this work.
