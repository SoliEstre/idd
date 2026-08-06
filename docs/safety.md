# Safety boundaries

[한국어](ko/safety.md)

IDD gives implementation a narrow role: it may gather evidence. It may not create product authority by itself.

## Rules that always apply

1. State safety limits before building the probe.
2. Isolate the probe from production users, secrets, and permanent data unless a stricter approved plan says otherwise.
3. Never treat working code as automatic approval.
4. Require a human decision before behavior becomes a product contract.
5. Match the decision with a test, contract, evaluation, or explicit invariant.
6. Use an independent verification step before promotion.
7. Keep rollback and observation requirements proportional to risk.

## Work that needs another route

Do not use a speculative implementation as the first move when an error can create severe or irreversible harm. Examples include:

- authentication and authorization;
- payments and financial records;
- deletion or irreversible transformation of data;
- production database migrations;
- cryptographic protocols or key handling;
- legal, medical, or safety-critical decisions;
- changes that expose private information;
- actions on external systems that are difficult to undo.

These tasks need an explicit contract, threat model, migration plan, approval, or domain review before implementation. A safe prototype may still be useful later, inside those boundaries.

## Common failure patterns

### The probe quietly becomes production code

Warning signs include a probe on the default branch, real users calling it, undocumented consumers, or no owner for removal.

Response: stop promotion, identify consumers, restore isolation, and record a decision before continuing.

### The test copies the implementation

A test written only to match current output can protect an accident.

Response: write the human decision in plain language first. Then make the test express that decision.

### The author verifies their own assumptions

The same context can repeat the same mistake.

Response: use a fresh reviewer or deterministic checker that reads the contract and evidence independently.

### Speed is reported without quality

Fast probe creation says little about whether the final decision was good.

Response: measure rework, escaped defects, decision latency, contract coverage, and rollback outcomes alongside cycle time.
