# Dialog

Modal dialog for decisions - typically confirming something destructive.

- 420px wide, `surface-raised`, `border`, `radius-lg`, `shadow-md`. Left-aligned title in `h3`, message in `text-secondary`.
- Actions in the bottom right as `md` buttons: secondary for cancel first, then the confirming one (`primary` or `danger`).
- `overlay` places it on `scrim` (solid dimming, never blur) and makes it modal.
- Opens with the scrim fading in and the dialog rising 8 px into place (`duration-slow`); closes faster (`duration-fast`). Keep it rendered and toggle `open` to get the exit animation; with `onClose`, Esc and a click on the scrim close it.

The consumer provides: `title` (a question), `message`, optionally content as children, `actions` (`label`, `variant`, `onClick`), `open`, `onClose`, and focus management.

Do: name the action precisely ("Delete project", not "OK").
