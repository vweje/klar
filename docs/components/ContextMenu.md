# ContextMenu

Right-click menu: wrap an area, and a right-click opens a menu at the cursor.

- Uses the same panel as `Menu` (icons, shortcuts, separators, `danger`, submenus, and checkmarks). Positioned `fixed` at the cursor with `z-dropdown`.
- Submenus: give an item `items` - it gets a chevron and opens to the right on hover, click, or →. ← closes it again. If there is no room, it opens to the left.
- `checked: true/false` on items shows checkmarks - good for choices like status or sorting in a submenu.
- Closes on outside click, Esc, scroll, or selecting an item.
- `defaultOpenAt: { x, y }` opens it immediately, `defaultOpenSub` opens a submenu (both for demos).

The consumer provides: `items` (like `Menu`) and the area as children - e.g. a file row, a card, or a table row.

Do: keep submenus to one level, and also repeat the most important actions from the right-click menu somewhere visible (right-click is hidden to many users and does not exist on touch).
