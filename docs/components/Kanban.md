# Kanban

A board of columns with cards that move between them: tasks by status, deals by stage.

- Columns on `canvas` with a hairline border, a 13 px title and a count; at least 260 px wide, scrolling sideways when there are many.
- Cards on `surface` with a `border`, `radius-md` and 12 px padding; the border darkens on hover. `renderCard` decides what is on them.
- Drag a card with the mouse, a pen or a finger (press and hold for a moment on touch, so scrolling still works): a copy follows the pointer, the card fades to 35 %, the column under the pointer gets `fill` and a 2 px `primary` line shows where it will land.
- Keyboard: focus a card and press Alt and an arrow key - left and right move it to the next column, up and down reorder it. Enter opens it.
- `onMove(id, toColumn, toIndex)`: `toIndex` is the card's place in the target column after it has left its old one, so the consumer can remove it and insert it there.
- Wrap the card's content in a `ContextMenu` with the same actions as everywhere else.

The consumer provides: `columns` (`id`, `title`, `items`, optional `action`), `onMove`, and optionally `onCardClick`, `renderCard`, `emptyText`.
