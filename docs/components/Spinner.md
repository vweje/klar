# Spinner

Small rotating indicator for short waits of unknown length.

- Ring in `fill-hover` with a `text`-colored arc; 700 ms per turn. 14-16 px in buttons and fields, 24 px on its own.
- Has `role="status"` and a `label` (default "Loading").
- Built-in texts follow the global strings set with `setStrings()` (see the README's "Language" section).

The consumer provides: `size` and optionally `label`. Put it in the button that started the action, and disable the button.
