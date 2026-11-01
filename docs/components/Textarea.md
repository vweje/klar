# Textarea

Multi-line text field that looks like `TextField`, plus an optional character counter.

- `surface`, 1 px `border-strong`, `radius-sm`, at least 88 px tall; can be dragged taller vertically.
- `maxLength` shows a counter ("57/280") in `text-muted` in the bottom right. `hint` and `error` work as in `TextField`.

The consumer provides: `label`, `placeholder`, `rows`, optionally `maxLength`, `hint`/`error`, and native props (`value`, `onChange`).
