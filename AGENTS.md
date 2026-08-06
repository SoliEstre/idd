# Public repository rules

This repository is the public surface of the IDD project. Keep every change safe to publish.

## Read before changing files

1. Read `README.md`, `docs/status.md`, and the document you will change.
2. Use English for the main document. Add or update the matching Korean document when the meaning changes.
3. Treat `ai/idd-spec.md` as a dense expert and machine-readable projection, not as permission to invent missing decisions.

## Public boundary

- Never add secrets, personal data, private links, internal reports, agent transcripts, or local machine details.
- Separate verified facts, inferences, proposals, and open questions.
- Do not claim that IDD improves speed, quality, or safety until a public evidence record supports the claim.
- Do not present either `Defend` or `Distill` as the settled final word in a canonical three-part name.
- Do not imply that a public repository grants an open-source license. No license has been selected.

## Writing level

- The introduction site uses L1.1.1: everyday language, full sentences, and an explanation before a technical term.
- General documents use L1.1.1 through L1.2.2: plain language with a small amount of defined terminology.
- `ai/` uses L5.5.5: compact expert terminology, explicit invariants, formal states, provenance, and failure conditions.

## Method rules

- Use one isolated probe for one core uncertainty.
- Record the intended question and safety limits before implementation.
- Do not promote a probe without a human decision and a matching test, contract, or evaluation.
- Require a verifier that is independent from the implementation attempt before calling a change shippable.
- Prefer a reproducible local check for every enforced gate.

## Documentation checks

- Keep English and Korean navigation valid.
- Use relative links inside the repository when possible.
- Keep the public README, site, `llms.txt`, and AI specification aligned on lifecycle and status.
- Mark deployment, licensing, canonical naming, and untested performance claims as unresolved until a human records the decision.
