# Sidebar

Vertical main navigation for desktop - replaces the tab bar from the mobile design.

- `sidebar` wide (300 px), `surface` with a `border` on the right, padding `space-3`.
- Items: 32 px, `radius-sm`, 16 px icon + label in 14 px bold (700). Inactive `text-secondary`; hover and active `fill` + `text`. Optional `count` on the right.
- `{ section: 'Name' }` in `items` inserts a heading in `overline`. `header` holds the logo/workspace, `footer` the settings.

The consumer provides: `items`, `value`/`onChange` or `defaultValue`, `header` and `footer`.

On mobile: hide the sidebar behind a menu button in `Topbar`.
