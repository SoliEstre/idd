# IDD routing

Use the first matching rule.

| Behavioral uncertainty | Change risk | Route |
|---:|---:|---|
| Low | Low | Direct implementation or lightweight TDD |
| Low | High | Strict TDD and contract-first |
| High | Low | Isolated IDD probe |
| High | High | Governed sandbox discovery, human decision, then strict contracts |

## High-risk override

Route known bugs, authentication, authorization, payments, accounting, destructive data changes, migrations, cryptography, public compatibility promises, and legal compliance to their governing method before any exploratory implementation.

## IDD eligibility

Use IDD only when all are true:

- the product decision is materially uncertain;
- an implementation can reduce that uncertainty;
- the probe is disposable and isolated;
- side effects are absent or bounded by a stronger governing contract;
- evidence can be captured; and
- an attributable human can decide what behavior to adopt.

If the scarce availability of real validation is the main constraint after behavior is contracted, combine the work with TWDD rather than stretching IDD to cover the test-window problem.
