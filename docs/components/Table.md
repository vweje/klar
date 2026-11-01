# Table

Data table with a border, a light header and row hover.

- Container: `surface`, `border`, `radius-md`; horizontal scroll on small screens. Header 38 px in `canvas` with 12 px bold `text-secondary`.
- Rows 48 px with a `border` between them; text in `text-secondary`. `strong: true` on a column makes it bold and `text`; `mono: true` sets it in `mono` (IDs, amounts).
- Cells can render components via `render` (Badge, Avatar, buttons).
- `rowMenu(row)` returns menu items, and a right-click anywhere on the row opens them at the cursor. The row stays highlighted while its menu is open. Give it the same items as the row's ⋯ `Menu`.

The consumer provides: `columns` (`key`, `label`, `align`, `width`, `strong`, `mono`, `render`), `rows` (objects, preferably with an `id`), and optionally `onRowClick` and `rowMenu`. Sorting and filtering are up to the consumer.

Do: right-align numbers. Avoid: more than 6-7 columns, and coloring entire rows.
