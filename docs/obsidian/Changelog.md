---
project: khsystems-org
type: changelog
status: active
last_updated: 2026-08-22
tags: [project/khsystems-org]
---

# Changelog

See also: [[Project]], [[Decisions]]

Reconstructed from `git log`. The repository currently has a single commit —
this appears to be a fresh/squashed history rather than the full development
record.

## 2026 — Initial commit

- **`eac6e80`** — Improve SEO, AI-crawler visibility, and structured data
  sitewide. Includes `public/llms.txt` for AI-crawler visibility and
  sitewide structured data. This commit represents the full current state of
  the Next.js rebuild: App Router site with ~20 top-level routes plus 8
  service sub-pages, 5 Resend-backed forms, EN/ES bilingual chrome and Home
  page via next-intl, and the legacy WordPress export preserved under
  `legacy-export/` as a content reference only.

This documentation set (`docs/obsidian/`) was added after this commit and
does not itself represent an application change.
