# Changelog

## Unreleased

- `Calendar` has week and day views (`views`, `view`) with a time grid, all-day row, side-by-side overlaps and a now line, plus right-click menus on days, half hours and events (`dayMenu`, `eventMenu`). `date`/`onDateChange` replace `month`/`onMonthChange`.
- `Kanban` (drag and drop, Alt + arrow keys), `MultiSelect`, `FileDrop`, `Timeline`, `Stepper`, `Popover` and `NotificationInbox`.
- `Modal` takes `size="md"` for short forms and guides.
- A `file` icon.
- The demo has a board view, a notification inbox, a new-project guide, labels and attachments on tasks, and week and day views with right-click in the calendar.
- Charts: `LineChart`, `BarChart`, `BarList` and `Sparkline`. Monochrome, at most two series, thin marks, hover tooltips and a hidden table for screen readers. `Stat` takes a `chart`.
- Dates: `Calendar` (month view with events, or a compact grid) and `DatePicker`, with ISO date values and full keyboard support. `setStrings()` now also sets the locale for dates and numbers.
- `Menu` opens as a fixed layer, so tables, Modals and scrolling areas no longer clip it, and it opens upward when there is no room.
- The command palette is 720 px wide with room for more results.
- The demo has a Reports page and a Calendar page, and due dates use the DatePicker.
- `Dropdown`: a custom select that matches Klar's menus, with icons, descriptions, groups, search, full keyboard support and the same motion as menus. Its list is more compact and lighter than an action menu (30 px options, 13 px). It never gets clipped inside a `Modal`.
- `Table` takes `rowMenu`: a right-click anywhere on a row opens its menu, and the row stays highlighted while it is open.
- `ContextMenu` stays inside the window near the edges, and nested right-click areas no longer open two menus.
- `IconName` lists every icon Klar ships with.
- `NavList`: sub-navigation inside a page, with category headings. `SettingsSection`: one settings topic with title and description on the left and controls on the right.
- Settings pattern: pages grouped under Account, Preferences and Workspace, each with its own URL; saved pages and pages that apply right away are kept apart.
- The demo's settings are split into eight pages under three categories.
- `Modal`: a large centered screen (up to 1200 x 800, full screen on phones) for editing and details, with the same entrance and exit as `Dialog`.
- The demo uses the full width of the content area, edits tasks in a `Modal` and has a settings page.
- The sidebar token is 300 px instead of 240 px.
- Scrollbars are thin, without a track, and only show while the pointer is over the area that scrolls.
- Motion tokens: `duration-fast`, `duration-base`, `duration-slow`, `ease-out` and `ease-in`. Every transition in the components now uses them.
- `setTheme()` switches between light and dark with a single crossfade.
- Menus, context menus, dialogs, the drawer, the command palette, toasts and accordions animate in and out with opacity and transform only.
- `Dialog`, `Drawer` and `CommandPalette` take `open` for exit animations; `Dialog` and `Drawer` close on Esc, and every overlay closes on a click on the scrim when `onClose` is set.
- Tooltips wait a moment on hover before they show, so they no longer flicker as the pointer passes.

## 1.0.0 - 2026-11-01

First release.

- Design tokens for color (light and dark), type, spacing, radius, shadow, size and z-index, generated from `tokens/tokens.json`.
- 40 React components: layout, inputs, data display, menus with submenus, context menu, command palette, dialog, drawer and a toast system.
- Themes for Tailwind v4 (`klar/tailwind.css`) and shadcn/ui (`klar/shadcn.css`).
- ESM, CommonJS and UMD builds; works with the Next.js App Router and without a build step.
- Built-in texts in English and Danish, switchable with `setStrings()`.
