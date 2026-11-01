# Table

Data table with a border, a light header and row hover.

- Container: `surface`, `border`, `radius-md`; horizontal scroll on small screens. Header 38 px in `canvas` with 12 px bold `text-secondary`.
- Rows 48 px with a `border` between them; text in `text-secondary`. `strong: true` on a column makes it bold and `text`; `mono: true` sets it in `mono` (IDs, amounts).
- Cells can render components via `render` (Badge, Avatar, buttons).
- `rowMenu(row)` returns menu items, and a right-click anywhere on the row opens them at the cursor. The row stays highlighted while its menu is open. Give it the same items as the row's ⋯ `Menu`.

The consumer provides: `columns` (`key`, `label`, `align`, `width`, `strong`, `mono`, `render`), `rows` (objects, preferably with an `id`), and optionally `onRowClick` and `rowMenu`. Sorting and filtering are up to the consumer.

Do: right-align numbers. Avoid: more than 6-7 columns, and coloring entire rows.

## Sorting, selection and long tables

- `sortable` on a column makes its header a button: ascending, descending, off. The arrow shows the direction and the header gets `aria-sort`. `sortValue` sorts by something other than the shown text; `manualSort` leaves sorting to the server.
- `selectable` adds a checkbox column. The header checkbox selects all, and shows a dash when only some are selected. While rows are selected, a bar with the count, the `bulkActions` and Clear selection appears above the table.
- `columnToggle` adds a Columns menu above the table. `hideable: false` keeps a column in place.
- Above 100 rows only the rows in view are rendered (`virtualize`), inside a scroll area with a sticky header (`maxHeight`, default 480 px).
