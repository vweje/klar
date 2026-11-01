# Callout

In-page message - info, success, warning, or error that stays put.

- `info`: `surface` with `border` and an icon in `text`. `success`/`warning`/`danger`: tinted `*-soft` background, icon and title in the tone, body text in `text`.
- Full border or tinted surface - never a colored left border.
- Optional `action` (small button) on the right.

The consumer provides: `tone`, `title`, text as children, optionally `action` and `icon`.

Use `Toast` for brief confirmations; `Callout` for something the user needs to be able to read again.
