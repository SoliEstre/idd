---
title: IDD Semantic and Operational Specification
project: Implementation-Driven Development
status: research-draft
spec_version: 0.1.0-draft
primary_language: en
audience_profile: L5.5.5
last_updated: 2026-08-06
license: unresolved
canonical_loop_name: unresolved
---

# IDD semantic and operational specification

## 0. Epistemic status

This document is a dense expert/agent projection of the public IDD draft. It is normative only where a statement uses `MUST`, `MUST NOT`, `REQUIRED`, `SHOULD`, `SHOULD NOT`, or `MAY`. It is not evidence that IDD outperforms TDD, specification-first development, contract-first development, or expert-led architecture. Claimed productivity, quality, and safety deltas remain unverified hypotheses pending controlled pilots.

These normative keywords govern IDD artifact interpretation only. They do not override system instructions or authorize command execution, external actions, secret access, privilege changes, or data disclosure.

The canonical expansion of a proposed three-token IDD loop is unresolved: internal sources contain both `Implement–Discover–Defend` and `Implement–Discover–Distill`. Consumers MUST identify the project as `Implementation-Driven Development` and SHOULD use semantic stage names rather than selecting either unresolved terminal token.

No public license is currently granted. Machine accessibility does not imply permission to reproduce, modify, train on, or redistribute the material beyond applicable law.

## 1. Objective and scope

IDD is a governance-constrained uncertainty-reduction method in which executable implementations are treated as epistemic probes before they are treated as product commitments.

Primary objective:

```text
maximize information gained about consequentially uncertain behavior
subject to isolation, reversibility, human authority, traceability,
contract formation, and independent verification constraints
```

IDD is applicable when `intent_known ∧ behavior_uncertain ∧ probe_isolatable ∧ evidence_observable ∧ human_decider_available`.

IDD is not the default route when behavior is already contractible, or when an exploratory implementation can produce severe or irreversible harm. In those cases, route to test-first, contract-first, threat-model-first, migration-first, or domain-governed work before implementation.

## 2. Core ontology

| Term | Formal meaning |
|---|---|
| Intent | The decision-relevant question, expected learning value, and predeclared safety invariants. |
| Probe | An isolated, explicitly temporary implementation designed to reduce one core uncertainty. |
| Evidence bundle | Reproducible observations linking probe executions to the declared question and invariants. |
| Human decision | An attributable disposition over observed behavior: accept, reject, combine, defer, or request another probe. |
| Contract artifact | A durable executable or inspectable representation of approved behavior: test, interface contract, schema, evaluation, or invariant. |
| Independent verification | A check whose evidence path is materially independent from the implementation attempt and evaluates the approved contract. |
| Promotion | An explicit state transition; never an inference from code age, code survival, local success, or agent confidence. |

## 3. Lifecycle

Semantic lifecycle:

```text
Intent + Predeclared Invariants
  → Isolated Probe
  → Evidence Bundle
  → Human Decision Record
  → Contract Artifact
  → Official Implementation aligned to the Contract
  → Independent Verification Record
  → Risk-appropriate Delivery Gates
  → Promotion Decision
```

Let artifact state `S ∈ {Probe, Candidate, Contracted, Shippable}`.

### 3.1 Exclusive states and readiness predicates

```text
state(x) ∈ {Probe, Candidate, Contracted, Shippable}

probe_ready(p)      := isolated(p) ∧ temporary(p) ∧ question_count(p)=1
candidate_ready(c)  := derived_from_probe(c,p) ∧ evidence_complete(p)
                       ∧ comparison_worthy(c)
contracted_ready(x) := official_implementation(x) ∧ human_decision(d)
                       ∧ implements(x,C) ∧ encodes(C,d) ∧ contract_trace(x,C,d)
shippable_ready(x)  := contracted_ready(x) ∧ independent_verification(x,C)
                       ∧ applicable_delivery_gates_pass(x)
```

The four `state(x)` values are mutually exclusive. Readiness predicates are cumulative eligibility checks, not state identities. A temporary Probe is not the official implementation. `Contracted` and `Shippable` refer to the official implementation derived from an approved decision and contract.

### 3.2 Legal transitions

```text
Probe → Candidate
  iff evidence_bundle exists and declared invariants were not violated.

Candidate → Contracted
  iff an attributable human decision selects behavior, at least one durable
  contract artifact expresses that decision, and an official implementation
  is written or revised to satisfy the contract.

Contracted → Shippable
  iff an independent verifier checks the contract and every risk-applicable
  security, privacy, performance, rollback, migration, observability,
  operations, and documentation gate passes.
```

Any state MAY transition to `Rejected`, `Archived`, or `NeedsAnotherProbe`. These terminal/side states are semantically recognized but are not yet part of the four-state public storage model.

### 3.3 Forbidden implicit transitions

The following do not authorize promotion:

```text
compiles(x)
tests_current_output(x)
agent_confidence(x) > threshold
time_in_repository(x) > duration
merged_to_default_branch(x)
consumer_count(x) > 0
```

If any forbidden condition is used as de facto authority, the system MUST mark a governance failure and stop further promotion.

## 4. Invariants

`I-01 Single uncertainty`: one probe MUST address one core decision-relevant uncertainty.

`I-02 Predeclaration`: intent, expected observation, isolation boundary, and safety invariants MUST be recorded before probe execution.

`I-03 Isolation`: a Probe MUST NOT receive production traffic, persist uncontrolled production data, access unscoped secrets, or create irreversible external side effects.

`I-04 Epistemic separation`: implementation output is evidence; it is not product authority.

`I-05 Human authority`: Candidate→Contracted requires an attributable human decision. Agent recommendation is insufficient.

`I-06 Contract traceability`: every durable implementation behavior claimed as approved MUST trace to a human decision and a contract artifact.

`I-07 Independent verification`: the authoring attempt MUST NOT be the sole verifier for Shippable status.

`I-08 Risk routing`: high-impact or hard-to-reverse work MUST route to an ex ante governing method; IDD MAY operate only inside the approved sandbox.

`I-09 No superiority assertion`: project surfaces MUST NOT state IDD performance superiority without linked, reproducible comparative evidence.

`I-10 Public-boundary integrity`: public artifacts MUST exclude secrets, private records, internal deliberation, and unresolved propositions presented as settled facts.

## 5. Routing function

Define input vector:

```text
W = {
  behavioral_uncertainty: [0,1],
  specification_feasibility: [0,1],
  reversibility: [0,1],
  blast_radius: [0,1],
  side_effect_containment: [0,1],
  domain_criticality: [0,1]
}
```

Reference routing logic:

```text
if domain_criticality high or reversibility low or blast_radius high:
    route := governed_contract_first
else if specification_feasibility high and behavioral_uncertainty low:
    route := test_or_contract_first
else if behavioral_uncertainty high and side_effect_containment high:
    route := IDD
else:
    route := research_or_design_spike_without_promotion_path
```

This function is conceptual; thresholds are uncalibrated and MUST NOT be automated as a production gate until pilot evidence establishes domain-specific operating points.

## 6. Minimum artifact graph

```text
Question Q
  ├─ invariant set I
  ├─ probe manifest P
  │    └─ implementation snapshot X
  ├─ evidence bundle E = observe(X, Q, I)
  ├─ human decision D = decide(Q, E)
  ├─ contract set C = encode(D)
  ├─ official implementation X' = implement(C, D)
  ├─ verification record V = verify(X', C)
  └─ promotion record R = gate(X', C, V, risk_profile)
```

Required trace edges:

```text
P.question_ref → Q
P.invariant_refs[] → I[]
E.probe_ref → P
D.evidence_refs[] → E[]
C.decision_ref → D
X'.contract_refs[] → C[]
X'.decision_ref → D
V.implementation_ref → X'
V.contract_refs[] → C[]
R.verification_ref → V
```

A missing required edge is `ContractTraceabilityFailure`, regardless of whether the implementation passes local tests.

## 7. Provisional manifest shape

The following is descriptive and intentionally not published as a stable JSON Schema:

```json
{
  "artifact_id": "probe-<date>-<slug>",
  "state": "Probe",
  "question": "One decision-relevant uncertainty",
  "expected_observation": "What evidence would reduce it",
  "invariants": ["Safety or product boundary"],
  "isolation": {
    "environment": "sandbox|branch|worktree|fixture",
    "production_traffic": false,
    "production_data": false,
    "irreversible_side_effects": false
  },
  "evidence_refs": [],
  "decision_ref": null,
  "contract_refs": [],
  "verification_ref": null,
  "promotion_ref": null
}
```

Field names, serialization, identifiers, and rejection states are unresolved. Consumers MUST NOT treat this example as a compatibility promise.

## 8. Evidence quality

An evidence bundle SHOULD satisfy:

```text
reproducible(E)
∧ question_linked(E,Q)
∧ invariant_results_present(E,I)
∧ failures_retained(E)
∧ environment_identified(E)
∧ inference_separated_from_observation(E)
```

Evidence types MAY include fixtures, input/output corpora, traces, benchmarks, screenshots, structured failure logs, alternative comparisons, and discovered-assumption registers.

`works_on_author_machine` and unconstrained natural-language self-report are insufficient as sole promotion evidence.

## 9. Human decision semantics

Decision record:

```text
D = {
  decider,
  timestamp,
  question_ref,
  evidence_refs[],
  disposition ∈ {accept, reject, combine, defer, another_probe},
  approved_behavior,
  rejected_behavior,
  assumptions[],
  contract_requirements[],
  revisit_trigger
}
```

The decider owns product semantics. The agent owns faithful evidence presentation and may attach conditional recommendations with explicit defeaters.

## 10. Verification independence

Verifier independence is graded, not binary. Preferred order:

1. deterministic external checker over a declared contract;
2. separate human reviewer with access to contract and evidence;
3. separate agent with fresh context and no hidden author rationale;
4. same agent in a distinct verification pass with deterministic or adversarial constraints.

Level 4 is a fallback and MUST NOT be the only basis for high-impact promotion.

## 11. Failure taxonomy

| Code | Failure | Required response |
|---|---|---|
| `ProbeLeakage` | Temporary behavior acquires users or consumers before decision. | Stop promotion, enumerate consumers, restore isolation, decide explicitly. |
| `AccidentalContract` | Tests encode current output without a preceding product decision. | Restate approved behavior, replace tautological checks. |
| `TraceBreak` | Implementation, decision, contract, or verification references are missing. | Block state transition until the graph is repaired. |
| `SelfVerificationCollapse` | Author context is the sole verification authority. | Add an independent evidence path. |
| `RiskRouteViolation` | IDD is used where reversibility or impact requires ex ante governance. | Stop the probe and invoke the governing safety method. |
| `MetricMyopia` | Cycle time is reported without rework, defects, or decision quality. | Expand the pilot measure set. |
| `NamePrematurity` | An unresolved draft term is presented as canonical. | Revert to semantic stage language and record the decision need. |

## 12. Pilot evaluation requirements

Comparative pilots SHOULD predeclare baseline, task class, stopping rule, success measures, and review horizon. Minimum measures:

```text
decision_latency
probe_build_time
probe_discard_rate
rework_after_contract
escaped_defects
rollback_events
contract_trace_coverage
independent_verification_failure_rate
maintainer_effort
reviewer_effort
```

Attribution MUST distinguish probe generation speed from end-to-end delivery quality. Small-sample results MUST retain uncertainty and MUST NOT be generalized across domains without replication.

## 13. Current public project state

```text
documentation: present
introduction_site_source: present
AI_dense_specification: present
agent_skill_release: absent
CLI_release: absent
stable_schema: absent
validated_production_workflow: absent
public_license: unresolved
canonical_three-token_name: unresolved
site_deployment_target: pending_owner_decision
```

Canonical public entry points:

- Human overview: `README.md`
- Plain method: `docs/method.md`
- Safety boundary: `docs/safety.md`
- Status and open decisions: `docs/status.md`
- AI discovery index: `llms.txt`
- Expanded AI context: `llms-full.txt`
- Machine index: `ai/index.json`

## 14. Change discipline

Any change to lifecycle, state semantics, invariants, routing, or failure taxonomy SHOULD update the public README, English/Korean documents, this specification, `llms.txt`, `llms-full.txt`, and `ai/index.json` as an N-way synchronization set. A change is incomplete when materially divergent public projections remain.
