# Nax Personal Lab — V1 redesign

Status: review branch only. Do not merge before content approval.

## Information architecture
- Home `/`: editorial introduction, selected work and working philosophy.
- Work `/work/`: three selected projects with individual detail pages.
- About `/about/`: education, teaching/outreach, technical areas, CV placeholder.
- Beyond `/beyond/`: ventures, piano, cooking and reading.
- Contact: shared footer with email and GitHub.

## Privacy and attribution
- G-CUBE: collaboration with Rose's team; no claim of sole IP ownership.
- Interspace: team project; company not registered; no source release.
- MSc research: no unverified accuracy claims or degree outcome.
- Trade: ongoing exploration only; do not publish confidential client or supplier terms.
- All visual artwork is CSS illustration, not a product screenshot.
- No external live demos, no analytics, no trackers, no public AI-chat widget.
- Old journal markdown remains in git for archival purposes, excluded from site build. Daily Log and Research index pages removed.

## Content remaining for V1.1
1. Confirm exact TA / outreach role descriptions and dates with CV.
2. Approve final public project attribution and image usage with collaborators.
3. Add sanitized and tested demonstrations, if approved.
4. Add user-supplied personal photographs and downloadable CV after review.
5. Test local Jekyll build and preview mobile before merging.

## Files
- `index.html`
- `projects.html` (`/work/`)
- `about.html`
- `interests.html` (`/beyond/`)
- `work/g-cube.html`, `work/interspace.html`, `work/video-qa.html`
- `_layouts/default.html`, `assets/css/main.css`, `_config.yml`

## Testing
Static review: all new pages have Jekyll front matter, consistent route paths, and navigation links.
Pending: production-equivalent Jekyll build, visual browser QA and approval of public release.
