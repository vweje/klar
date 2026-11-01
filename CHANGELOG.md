# Changelog

## Unreleased

- `Modal`: a large centered screen (up to 1200 x 800, full screen on phones) for editing and details, with the same entrance and exit as `Dialog`.
- The demo uses the full width of the content area, edits tasks in a `Modal` and has a settings page.
- The sidebar token is 300 px instead of 240 px.
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
