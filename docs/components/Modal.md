# Modal

Large centered screen for editing and details - a task, a record, a form with more than a few fields.

- `size="md"` is 720 px wide and as tall as its content (at most 680 px) - for short forms and guides with a `Stepper`.
- Up to 1200 x 800 px and never larger than the window (24 px margin), `surface-raised`, `border`, `radius-lg`, `shadow-lg`. Full screen without border or radius on phones.
- Header with title (18px, 800), description and close button; content that scrolls on its own; footer with buttons on the right.
- Always modal on `scrim`. Esc, the close button and a click on the scrim call `onClose`.
- Rises 8 px into place as it fades in (`duration-slow`) and leaves faster (`duration-fast`). Keep it rendered and toggle `open` to get the exit animation.
- The content area is a column with `space-4` between children. Use the width: put the main content on the left and details (owner, status, dates) in a 300 px column on the right.

The consumer provides: `title`, optionally `description`, content as children, `footer`, `open`, and `onClose`.

Use `Dialog` for short decisions; `Modal` for editing and details; `Drawer` only when the list behind must stay visible.
