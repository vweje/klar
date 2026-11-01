# Menu

Dropdown menu of actions. Can be shown as a standalone panel or with a button that opens it.

- Panel: `surface-raised`, `border`, `radius-md`, `shadow-md`, 4 px padding. Items are 32 px with an icon (`text-secondary`), a 14 px label and an optional shortcut in `mono`.
- Submenus: an item with `items` gets a chevron and opens a new menu to the right (hover, click or →; ← closes). One level at most.
- `checked` shows a checkmark in front of items - for single choices like status or sorting.
- `{ heading }` adds a heading, `{ separator: true }` a divider, `danger: true` colors the item `danger` (put it last).
- With `trigger`, the button opens the menu below itself (`align: 'start' | 'end'`); clicking outside or Esc closes it.

The consumer provides: `items` (`label`, `icon`, `shortcut`, `danger`, `disabled`, `checked`, `items`, `onSelect`), and optionally `trigger` and `align`. `MenuPanel` is the panel alone.
