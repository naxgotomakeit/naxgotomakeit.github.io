# Nax Lab

A GitHub Pages + Jekyll personal website for a living AI & Robotics research log.

## How to use

This site is designed so you do **not** need to edit HTML every day.

### Add a daily log

Create a new Markdown file in `_posts/`:

```text
_posts/YYYY-MM-DD-HHMM-short-title.md
```

Example:

```text
_posts/2026-05-02-1030-reading-vla-paper.md
```

Use this front matter:

```markdown
---
layout: post
title: "Short title"
date: 2026-05-02 10:30:00 +0000
categories: daily-log
tags: [tag1, tag2]
---

Write your log here.
```

The Home page and Daily Log page will automatically group entries by date.

### Add a research note

Create a new Markdown file in `_posts/` with `categories: research-note`.

```markdown
---
layout: post
title: "Paper Note - Paper Title"
date: 2026-05-02 16:00:00 +0000
categories: research-note
tags: [Embodied AI, VLA, World Models]
---

## Problem

## Method

## Why it matters for robots

## Experiments

## My takeaway
```

### Edit projects

Edit `projects.html` directly to update project cards.

## Upload instructions

1. Download the zip.
2. Unzip it.
3. Copy all files into your `naxgotomakeit.github.io` repo.
4. If you already have an `index.html`, rename it to `index_old.html` first.
5. Commit and push to GitHub.
6. GitHub Pages should rebuild automatically.
