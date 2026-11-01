# Drawer

Side panel that slides in from the right (or left) - for details and editing without leaving the page.

- 400px, full height, `surface-raised`, `border` toward the content, `shadow-lg`. Header with title (18px, 800), description, and close button; scrollable content; footer with buttons on the right.
- `overlay` places it on `scrim`; clicking the scrim or pressing Esc calls `onClose`.
- Slides in from its side (`duration-slow`) and out again (`duration-base`). Keep it rendered and toggle `open` to get the exit animation.

The consumer provides: `title`, optionally `description`, content as children, `footer`, `side`, `overlay`, `open`, and `onClose`.

Use `Dialog` for short decisions; `Drawer` for forms and details.
