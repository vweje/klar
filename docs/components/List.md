# List

Bordered list with dividers - the core component for content. `List` is the container, `ListRow` the row (both in `window.Klar`).

- Container: `surface`, 1px `border`, `radius-md`. Heading in `overline` (uppercase, `text-secondary`) with an optional `action` on the right.
- Rows are at least `row` tall, padding `space-4`, separated by a 1px `border`. Title in 14px bold (700), subtitle 13px `text-secondary`.
- `icon` adds a neutral 28px icon tile in `fill`. `value` sits on the right (text or a `Badge`). `accessory`: `'chevron'`, `'check'`, or a node.
- `onClick`/`href` makes the row clickable with `fill` on hover. `destructive` colors the title `danger`.

The consumer provides: rows as children; per row a `title` and the rest as needed.

Avoid: colored icon tiles - color is used only for status.
