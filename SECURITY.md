# Security Policy

## Reporting a vulnerability

If you discover a security vulnerability in Jolli Themes, please **do not** file a public issue or pull request.

Instead, report privately by opening a GitHub Security Advisory:

<https://github.com/jolliai/themes/security/advisories/new>

If you cannot use GitHub Security Advisories, email `security@jolli.ai` instead.

Please include:

- A description of the issue and its impact.

this is the new line
- Steps to reproduce, or a proof-of-concept where possible.
- The affected theme name and version.

We aim to acknowledge reports within 5 business days and ship a fix within 90 days of triage.

## Scope

Themes are client-side layout and CSS modules consumed by the Jolli CLI. Security concerns include:

- Cross-site scripting (XSS) via injected markup in layout components.
- Path traversal or file system access in theme code.
- Inclusion of external resources that could compromise user privacy.

## Out of scope

- Issues in the Jolli CLI itself — report those at [jolliai/jolliai](https://github.com/jolliai/jolliai/security/advisories/new).
- Visual or layout bugs that do not have a security impact.

## Disclosure

We follow coordinated disclosure. Once a fix is available we will publish a GitHub Security Advisory with credits to the reporter.
