# SegmentedControl

Switch between 2-5 views of the same content (period, list/board).

- Track in `fill`, selected segment in `surface` with `border` and `shadow-xs`, `radius-xs`. Text 13 px bold (700); inactive in `text-secondary`.
- Optional icon per segment. `block` fills the width.

The consumer provides: `options` (strings or `{value, label, icon}`), `value`/`onChange` or `defaultValue`, and `aria-label`.
