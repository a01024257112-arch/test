# Accessibility Checklist (WCAG 2.2 AA target)

Status reflects the actual implementation in this build, checked manually
via keyboard navigation and code review. This has **not** been run through
an automated auditor (axe, Lighthouse a11y) or a screen reader in this
session — see "Not yet verified" at the bottom and `docs/final-report.md`
→ Known Limitations.

## Implemented

- [x] **Skip link** to `#main-content` on every page (`BaseLayout.astro`), visible on focus.
- [x] **Semantic quiz markup**: every question is a real `<fieldset>` with a `<legend>` containing the question prompt, and real `<input type="radio">` elements — styled as large buttons via a sibling `<label>`, never `<div>`-based fake radios (`QuizEngine.astro`).
- [x] **Keyboard operability**: radio groups are natively keyboard-navigable (arrow keys within group, Tab between controls); Next/Back are real `<button>` elements; no custom keydown handling was needed because the markup is native form controls.
- [x] **Visible focus states**: global `:focus-visible` outline (`global.css`), plus a dedicated focus style on the (styled) radio label (`quiz.css`).
- [x] **Screen-reader progress announcement**: the "Question X / N" text node is `aria-live="polite"` and updates on every navigation (`QuizEngine.astro`); the progress bar itself carries `role="progressbar"` with `aria-valuemin`/`aria-valuemax`/`aria-valuenow`.
- [x] **Focus management between questions**: on each question change, the client script moves programmatic focus to the question's `<legend>` (`tabindex="-1"` + `.focus()`), so screen-reader users land on the new question instead of staying on a now-hidden Back button.
- [x] **Minimum touch target size**: `--touch-target: 48px` token applied to all buttons and quiz options (spec asked for 44–56px).
- [x] **No color-only signaling**: evidence badges pair color with text labels and shape (pill + uppercase text), never color alone; selected quiz options get a filled radio dot + border-color change + background tint, not color alone.
- [x] **Reduced motion respected**: global `prefers-reduced-motion` rule collapses all transitions/animations (`global.css`); the progress-bar width transition is explicitly disabled under reduced motion too (`quiz.css`).
- [x] **Sufficient contrast**: text color `#111111` on `#FFFFFF` (>15:1), secondary text `#666666` on white (~5.7:1, passes AA for normal text), accent `#1F5F4E` on white (~7.7:1). Dark-mode tokens were chosen with the same target ratios.
- [x] **No information conveyed only through hover**: all interactive affordances (option selection, card links) have a persistent visible state, not just `:hover`.
- [x] **Alt text / decorative markup**: inline SVG icons (search glyph, back-arrow, checkmark) are `aria-hidden="true"` since they're always paired with visible or `sr-only` text.
- [x] **Form labeling**: every input has a real, associated `<label>` (search boxes use visually-hidden `<label>` + placeholder as a supplement, never placeholder-as-label).
- [x] **Language attributes**: `<html lang>` set per-locale from `getLocale(lang).hreflang`; `dir` attribute wired (all current locales are `ltr`, but the field exists for a future RTL locale).
- [x] **Heading hierarchy**: one `<h1>` per page, sequential `<h2>`/`<h3>` in content sections (test landing, results, guides) — no skipped levels by design.
- [x] **Resume banner is not a trap**: the "You have progress saved" banner offers two real, keyboard-reachable buttons (Continue / Start over), not just a dismiss-on-click div.

## Not yet verified (flagged, not claimed done)

- [ ] No automated accessibility audit (axe-core / Lighthouse) has been run against the built `dist/` output in this session — see Known Limitations in the final report for why, and treat this checklist as implementation intent, not a certified pass.
- [ ] No manual screen-reader pass (VoiceOver/NVDA/JAWS) has been performed.
- [ ] Color contrast has been reasoned about analytically (documented ratios above) but not verified with a contrast-checking tool against the final rendered CSS.
- [ ] `<details>`/`<summary>` used for per-trait "More about this result" on the Big Five results page has native keyboard support in all modern browsers, but has not been tested with assistive tech specifically.

## Recommended before declaring AA-compliant

1. Run `axe-core` (or Lighthouse's accessibility category) against every unique page template in `dist/`.
2. One full keyboard-only pass per page template (no mouse) confirming a logical tab order.
3. One screen-reader pass (at minimum VoiceOver + Safari, or NVDA + Firefox) through: homepage → category → test landing → full quiz → results.
4. Confirm dark-mode contrast ratios with a tool, not just token math.
