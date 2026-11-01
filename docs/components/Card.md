# Card

Bounded content surface for dashboards and overviews.

- `surface`, 1px `border`, `radius-lg`, padding `space-5`. No shadow - the border defines the edge.
- `eyebrow` in `overline`, `title` in `h3`, optional `action` (e.g. a ghost icon button) in the top right. Body text in `text-secondary`.
- `footer` is separated by a `border` line and holds badges and small buttons.

The consumer provides: `eyebrow`, `title`, `action`, content as children, and `footer`.

Avoid: cards inside cards, colored borders, gradients.
