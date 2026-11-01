# CommandPalette

⌘K palette: search and run commands or jump around the app with the keyboard.

- 560px, `surface-raised`, `border`, `radius-lg`, `shadow-lg`. 52px search field at the top, results in groups with `overline` headings, help line at the bottom on `canvas`.
- Filters as you type; ↑/↓ moves the highlight (`fill`), Enter runs `onSelect`, Esc calls `onClose`. An empty search shows "No results".
- `overlay` places it at the top of the screen over `scrim`.

The consumer provides: `items` (`label`, `group`, `icon`, `shortcut`, `onSelect`), `onClose`, and the shortcut itself (⌘K / Ctrl K) that opens it.
