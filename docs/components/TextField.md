# TextField

Text field with a label above it, optional help text and an error state.

- `surface` with a 1 px `border-strong`, `radius-sm`, height `control-md`, 14 px text at weight 500. Label in `label` (13 px, 700).
- Hover darkens the border; focus adds a 2 px ring in `focus-ring` (black/white). Error: border and message in `danger` with an info icon.
- Placeholder in `text-muted` - an example, never a replacement for the label.

The consumer provides: `label`, optionally `hint` or `error`, and native input props (`value`, `onChange`, `type`, `placeholder`).
