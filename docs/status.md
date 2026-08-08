# Project status

[한국어](ko/status.md)

Status: **research draft with an initial agent-skill distribution**.

The repository currently provides a public explanation, a working lifecycle, safety boundaries, a dense AI-facing specification, a static introduction site, and a 0.1.0-draft agent skill packaged for Codex, Claude Code, and Gemini CLI. It does not yet provide a standalone command-line tool, stable schema package, validated production workflow, or controlled skill-effectiveness evidence.

## Settled for the current draft

- Implementation is evidence before it is a product promise.
- A probe is isolated and answers one core uncertainty.
- A human decision is required before promotion.
- Approved behavior is expressed as a test, contract, evaluation, or invariant.
- Independent verification and risk-appropriate delivery gates are required before a change is shippable.
- Public documents avoid unverified claims of superiority.
- The repository is licensed under the MIT License; `LICENSE` is the authoritative license text.
- The introduction site is deployed with GitHub Pages at `https://soliestre.github.io/idd/`.
- The canonical skill is `skills/idd/SKILL.md`; Codex, Claude Code, and Gemini CLI manifests package that shared source.

## Open decisions

- The canonical three-part name is not settled. Draft sources use both `Defend` and `Distill` for the final word.
- The skill’s artifact shape, trigger calibration, and enforcement strength may change before a stable release.

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
