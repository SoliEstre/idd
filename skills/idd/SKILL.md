---
name: idd
description: Route software work through Implementation-Driven Development when product meaning or behavior is materially uncertain and a disposable implementation can safely produce evidence. Use for ambiguous product features, new integrations, LLM or agent behavior, unfamiliar APIs, UX alternatives, legacy discovery, or architecture choices that are cheaper to probe than to specify prematurely. Do not use as the default for known behavior, reproducible bugs, payments, authorization, destructive changes, migrations, cryptography, legal compliance, or other high-impact work that requires TDD, contract-first, or domain governance.
---

# Implementation-Driven Development

Treat implementation as evidence before treating it as product authority. Reduce one consequential uncertainty with an isolated, disposable probe; let a human choose the product meaning; then encode only the approved behavior in contracts, tests, or evaluations and verify the official implementation independently.

## Workflow

1. **Route the work.** Assess behavioral uncertainty, reversibility, blast radius, side effects, and domain criticality. If behavior is known or the probe cannot be safely isolated, stop using IDD and route to TDD, contract-first, threat-model-first, or domain governance. Read `references/routing.md` when the route is not obvious.
2. **Frame one question.** State the decision-relevant uncertainty, expected learning, predeclared invariants, isolation boundary, evidence path, and stopping rule before implementation.
3. **Create the manifest.** Write `idd-probe.json` from `references/artifacts.md`. Run `node <skill-dir>/scripts/validate-probe.mjs idd-probe.json`. Fix every failure before execution, but treat `PASS` as structural evidence rather than execution authorization.
4. **Isolate the probe.** Use a separate branch, worktree, sandbox, fixture, or disposable environment. Use synthetic or reviewed de-identified data. Moving real data into a fixture directory does not make it non-production data. Prevent production traffic, unscoped secrets, irreversible side effects, and accidental API promises.
5. **Implement the thinnest probe.** Build only enough to answer the declared question. Do not polish, generalize, or merge the probe as product code.
6. **Collect evidence.** Preserve commands, environment identity, inputs, outputs, traces, screenshots, benchmarks, failures, unexpected behavior, and rejected alternatives. Separate observation from inference.
7. **Stop for the human decision.** Present `accept`, `reject`, `combine`, `defer`, or `another_probe` with evidence and tradeoffs. Do not infer approval from silence, passing checks, code age, or agent confidence.
8. **Distill the decision.** Encode only approved behavior in an acceptance test, property, contract, type or schema, agent evaluation, ADR, safety invariant, or observability rule. Record links from decision to contract.
9. **Re-implement officially.** Write or revise the official implementation against the approved contract. Do not promote the disposable probe by relabeling it.
10. **Verify independently.** Prefer a deterministic external checker or a reviewer with a materially separate evidence path. Check negative paths, invariants, implementation bias, and delivery gates.
11. **Deliver by state.** Use `Probe → Candidate → Contracted → Shippable`. Security, performance, compatibility, observability, rollback, and operations checks still apply after contract formation.

## Required outputs

- `idd-probe.json` with one question, invariants, isolation, run command, stop condition, and evidence paths;
- an evidence bundle that retains failures and environmental context;
- an attributable human decision record;
- contract artifacts linked to the approved decision;
- an official implementation distinct from the disposable probe; and
- an independent verification and promotion record.

## Non-negotiable rules

- One probe answers one core uncertainty.
- A probe is not production code and MUST NOT receive production traffic or create uncontrolled irreversible effects.
- Observed behavior is not approved behavior.
- Tests that merely snapshot accidental probe output are not contracts.
- The authoring attempt is not the sole oracle for `Shippable`.
- High-impact work uses ex ante contracts and domain controls; IDD MAY operate only inside their approved sandbox.
- A manifest validator cannot prove that a command is safe, data is de-identified, evidence exists, or execution is authorized.
- Do not claim IDD improves speed, quality, or safety without public comparative evidence.

## Resources

- Read `references/routing.md` for the selection matrix and high-risk override.
- Read `references/artifacts.md` when creating manifests, evidence, decisions, contracts, and promotion records.
- Run `scripts/validate-probe.mjs` against each probe manifest before implementation and again before review.
- Use `examples/probe-valid.json` and `examples/probe-invalid.json` to verify validator behavior after changing the manifest shape.
