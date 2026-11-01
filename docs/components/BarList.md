# BarList

A ranked list where each row is its own bar: top projects, pages, people.

- 32 px rows with a `fill` bar behind the label, as wide as the value relative to the largest. Label in `text` at 700, value right-aligned in `text-secondary` with tabular figures. Optional 14 px icon.
- Sort it largest first, and keep it to about eight rows.

The consumer provides: `items` (`label`, `value`, optional `icon`, `id`), `aria-label`, and optionally `format`.
