# What IDD is

[한국어](ko/what-is-idd.md)

Implementation-Driven Development, or IDD, is a way to learn about uncertain software behavior by building a small example first.

Think of a probe sent into an unknown place. The probe brings back information. It does not decide where people should live. In the same way, an IDD implementation brings back evidence. It does not decide what the product must promise.

## The problem it addresses

A team sometimes knows its goal but cannot yet describe the right behavior in enough detail to write a useful specification or test.

An AI coding agent can create a working example quickly. The example can reveal missing rules, awkward boundaries, hidden data needs, and better questions. But it can also contain accidental behavior. If the team ships it just because it runs, those accidents become difficult to remove.

IDD inserts a decision between learning and promising:

```text
implementation → evidence → human decision → protected behavior
```

## When to use it

IDD may fit when:

- the desired outcome is clear but important behavior is still uncertain;
- a small, isolated implementation can answer one important question;
- the result can be observed without exposing users or production data to uncontrolled risk;
- a person is available to decide what the evidence means.

Use tests, contracts, or an existing specification first when the required behavior is already known.

Do not use IDD as the default route for irreversible or high-risk changes such as authorization, payments, destructive data changes, production migrations, or cryptography. Those areas need a stricter method chosen before implementation.

## How IDD differs from “code first”

Code-first work can treat a working implementation as progress toward shipment. IDD treats the first implementation as temporary evidence.

The probe stays isolated. Its assumptions are visible. A person must approve the behavior. A test, contract, or evaluation must express that decision. A separate verification step must then check the result.

If those steps do not happen, the probe remains a probe.

## Relationship to test-driven development

Test-driven development starts from behavior that can be expressed as a test. IDD starts one step earlier when the team does not yet know which behavior deserves that test.

IDD should end by producing a decision that can be protected with tests, contracts, or evaluations. It is not a reason to skip them.
