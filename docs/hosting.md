# Introduction site hosting

[한국어](ko/hosting.md)

Decision status: **GitHub Pages approved on 2026-08-06**.

Public site: [https://idd.estre.so/](https://idd.estre.so/)

The site source in [`../site/`](../site/) is plain HTML and CSS. It does not require a server program. This keeps the first hosting choice easy to reverse.

## Current decision

Use GitHub Pages as the first public host. Keep the source free of host-only runtime features. Move to self-hosting when a recorded need makes the extra control worth the extra operations.

## GitHub Pages first

Benefits:

- the public repository and deployment history stay close together;
- no application server needs patching or monitoring;
- a custom domain can use HTTPS for the connection; this does not prove that the whole site or its operation is safe;
- the same static files can be moved later.

Costs:

- there is no server-side application runtime;
- platform usage limits and deployment rules apply;
- detailed infrastructure behavior is not under project control.

## Self-host first

Benefits:

- full control over the server, response headers, deployment process, logging, and future runtime features;
- one infrastructure path if server behavior is already required.

Costs:

- server security, updates, availability, cost, backups, and incident response become project work immediately;
- the current static site does not use that extra capability.

## Conditions for moving to self-hosting

Revisit the decision when one of these conditions is true:

- a mandatory feature needs server-side code;
- platform bandwidth, build, or deployment pressure persists across two reviews;
- a legal, privacy, or contract requirement demands infrastructure control;
- required logging, response policy, or operational observation cannot be provided;
- hosting incidents or vendor dependency cross a limit recorded by the maintainer.

Review the decision every 90 days, beginning on 2026-11-04. Preserve a custom domain during a future move so public links do not need to change.

## Current hosting policy

The hosting-neutral static site is deployed with GitHub Pages. Keep relative asset URLs and no host-only runtime dependency. Reconsider self-hosting when server-side behavior, sustained platform-limit pressure, regulatory control, or operational observability requires it.

## Sources checked

Checked on 2026-08-06:

- [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- [About custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
- [Securing a GitHub Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
