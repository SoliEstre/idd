# Project status

[한국어](ko/status.md)

Status: **research and public documentation bootstrap**.

The repository currently provides a public explanation, a working lifecycle, safety boundaries, a dense AI-facing specification, and a static introduction site. It does not yet provide a released agent skill, command-line tool, schema package, or validated production workflow.

## Settled for the current draft

- Implementation is evidence before it is a product promise.
- A probe is isolated and answers one core uncertainty.
- A human decision is required before promotion.
- Approved behavior is expressed as a test, contract, evaluation, or invariant.
- Independent verification and risk-appropriate delivery gates are required before a change is shippable.
- Public documents avoid unverified claims of superiority.

## Open decisions

- The canonical three-part name is not settled. Draft sources use both `Defend` and `Distill` for the final word.
- The first reusable distribution surface, such as an agent skill or schema package, is not selected.
- The public license is not selected.
- The introduction site host is not approved. The current recommendation is GitHub Pages first, with clear conditions for moving to self-hosting.

## Evidence still needed

Controlled pilots should compare IDD with an appropriate baseline and record at least:

- time from question to product decision;
- probe rework and discarded work;
- escaped defects and rollback events;
- coverage of approved decisions by durable checks;
- independent verification failures;
- maintainer and reviewer effort.

Until that evidence exists, IDD’s benefits remain hypotheses.

## Versioning

The documents are pre-release working material. Breaking changes to terms, states, and artifact shapes can occur before the first public specification version.
