# Drawer

Side panel that slides in from the right (or left) - for details and editing without leaving the page.

- 400px, full height, `surface-raised`, `border` toward the content, `shadow-lg`. Header with title (18px, 800), description, and close button; scrollable content; footer with buttons on the right.
- `overlay` places it on `scrim`; clicking the scrim calls `onClose`.

The consumer provides: `title`, optionally `description`, content as children, `footer`, `side`, `overlay`, and `onClose`.

Use `Dialog` for short decisions; `Drawer` for forms and details.
