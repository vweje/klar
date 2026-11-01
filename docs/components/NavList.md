# NavList

Sub-navigation inside a page - the list of pages in settings, or the sections of a long document.

- Vertical, 220 px column to the left of the content. Same rhythm as `Sidebar`: 32 px items with a 16 px icon and a 14 px label, `fill` on hover and on the active item, `aria-current="page"` on the active one.
- `{ section }` adds a category heading in `overline`. Categories group the pages: for settings typically Account, Preferences and Workspace.
- One page at a time: choosing an item replaces the content next to it. Give each page its own URL (`#settings/notifications`) so it can be linked and reloaded.
- Keep it sticky while the page scrolls. On phones it stacks above the content.

The consumer provides: `items` (`id`, `label`, `icon`, `count`, or `{ section }`), `value` or `defaultValue`, `onChange`, and an `aria-label`.

Use `Sidebar` for the app's main navigation; `NavList` for pages within one area. Use `Tabs` instead when there are at most four views of the same thing.
