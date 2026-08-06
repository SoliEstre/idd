# The working method

[한국어](ko/method.md)

IDD uses a short learning loop followed by a strict promotion path.

## 1. State the intent

Write the question the work must answer. Also write the safety limits that may not be crossed.

Good question: “Which data shape makes these three user actions easiest to explain?”

Weak question: “Build the feature.”

The first question can be answered by evidence. The second hides many decisions inside implementation.

## 2. Build one isolated probe

Create the smallest implementation that can answer the question. Keep it away from production traffic, real secrets, and permanent data. Mark it as temporary.

One probe should test one core uncertainty. If it answers several unrelated questions, split it.

## 3. Collect evidence

Record what happened in a form another person can inspect. Evidence may include:

- example inputs and outputs;
- measurements;
- failed cases;
- screenshots or traces;
- assumptions discovered during implementation;
- differences between competing probes.

Working code alone is not enough. The evidence must connect back to the original question.

## 4. Make a human decision

A person decides which behavior, if any, should become part of the product. The decision may accept, reject, combine, or request another probe.

This step separates discovery from authority. The agent may recommend. The person decides the product meaning.

## 5. Protect the approved behavior

Express the decision as one or more durable checks:

- a test for deterministic behavior;
- a contract or schema for an interface;
- an evaluation for behavior that needs scored examples;
- an invariant for a safety or business rule.

Then write or revise the official implementation to satisfy those checks. Do not silently promote the exploratory code.

## 6. Verify independently

Use a check that is independent from the implementation attempt. This can be a different reviewer, a separate agent with fresh context, a deterministic checker, or a combination.

The verifier checks the approved contract, not the author’s intention.

## 7. Apply delivery gates

Before calling the change shippable, apply the gates that matter for its risk: security, performance, privacy, rollback, observation, migration, operations, and documentation.

## State model

| State | Meaning | What is still missing |
|---|---|---|
| Probe | Temporary implementation for one question | Evidence and a product decision |
| Candidate | Worth comparing or refining | Approved behavior and durable checks |
| Contracted | Human decision is expressed in tests, contracts, or evaluations | Applicable delivery gates and independent verification |
| Shippable | The contracted change passed its required gates | Release remains a separate operational action |

State changes should be explicit and traceable. A probe does not become shippable because it stayed in the codebase for a long time.
