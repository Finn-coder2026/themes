# Contributing to Jolli Themes

Thank you for your interest in contributing! This document explains how to get involved.

## Getting Started

1. Fork the repository and clone your fork locally.
2. Create a new branch from `main` for your work.
3. Make your changes.
4. Submit a pull request back to the `main` branch.

## Adding a New Theme

1. Create a directory named after your theme (lowercase, no spaces).
2. Add the four required files:
   - `manifest.mjs` — version, name, and metadata
   - `index.mjs` — entry point that re-exports layout and CSS
   - `layout.mjs` — React layout component
   - `css.mjs` — CSS string for theme styles
3. Add your theme to `registry.json` with a matching version.
4. Push and verify the CI validation workflow passes.
5. Submit a pull request.

See [README.md](README.md) for the theme structure reference.

## Updating an Existing Theme

1. Make your changes to the theme files.
2. Bump the version in both `manifest.mjs` and `registry.json`.
3. Submit a pull request.

## Reporting Issues

Before opening a new issue, please search existing issues to avoid duplicates.

When filing a bug report, include:

- Which theme is affected and its version
- The Jolli CLI version (`jolli --version`)
- Steps to reproduce the issue
- Expected behavior vs. actual behavior

For feature requests, describe the use case and why existing themes don't cover it.

## Pull Requests

- Keep PRs focused. One theme or one logical change per PR.
- Write clear commit messages that explain *why*, not just *what*.
- Make sure CI passes before requesting review.

## Developer Certificate of Origin (DCO)

This project uses the [Developer Certificate of Origin](https://developercertificate.org/) (DCO) to certify that contributors have the right to submit their work under the project's Apache 2.0 license.

All commits must include a `Signed-off-by` line with your real name and email address:

```bash
git commit -s -m "Your commit message"
```

This adds a line like:

```
Signed-off-by: Your Name <your.email@example.com>
```

If you've already made commits without the sign-off, you can amend them:

```bash
# Amend the most recent commit
git commit --amend -s --no-edit

# Or rebase to sign off multiple commits
git rebase --signoff HEAD~<number-of-commits>
```

Commits without a valid `Signed-off-by` line will not be accepted.

## Code Style

- Follow the existing conventions in the codebase.
- Theme files are plain `.mjs` modules — no build step required.
- CSS should be scoped to avoid conflicts with other themes.

## Code Review

All submissions require review before merging. Reviewers may ask for changes — this is a normal and collaborative part of the process.

## Questions?

If something in this guide is unclear or you're unsure how to approach a contribution, open an issue and ask.
