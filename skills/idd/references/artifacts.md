# IDD artifact shapes

## Probe manifest

Create `idd-probe.json`:

```json
{
  "artifact_id": "probe-2026-08-08-example",
  "state": "Probe",
  "question": "One decision-relevant uncertainty",
  "expected_observation": "Evidence that would reduce it",
  "invariants": ["A safety or product boundary"],
  "isolation": {
    "environment": "sandbox",
    "production_traffic": false,
    "production_data": false,
    "irreversible_side_effects": false
  },
  "data_policy": {
    "classification": "synthetic",
    "source": "Reviewed local fixture generator",
    "reviewer": "Project lead"
  },
  "run_command": "npm run probe:example",
  "stop_condition": "accept, reject, defer, or another probe threshold",
  "evidence_paths": ["evidence/probe-2026-08-08-example/"]
}
```

`isolation.environment` is one of `branch`, `worktree`, `sandbox`, or `fixture`. `data_policy.classification` is `synthetic` or `deidentified`. Copying real meeting notes, customer records, production exports, or other personal data into a non-production folder does not make it non-production data; use synthetic data unless a named human has reviewed the de-identification record and applicable privacy controls.

The validator checks manifest structure, bounded paths, and obvious placeholders. It cannot determine that a command is safe, that data is truly de-identified, that evidence exists, or that the probe is authorized. Project governance still owns the actual decision, contract, and verification record locations.

## Evidence bundle

Record manifest reference, environment, commands, inputs, outputs, failures, invariant results, unexpected behavior, alternatives, and observation/inference labels.

## Human decision

Record decider, timestamp, question reference, evidence references, disposition, approved behavior, rejected accidental behavior, assumptions, contract requirements, and revisit trigger. `combine` creates a new design when it introduces behavior not tested by either probe; route that behavior through another probe before adoption.

## Contract and implementation

Each contract artifact links to the decision. The official implementation links to the contract and decision. It is not the probe snapshot.

## Verification and promotion

Record verifier independence, contract checks, negative paths, applicable delivery gates, failures, and final state. Missing trace edges block promotion.
