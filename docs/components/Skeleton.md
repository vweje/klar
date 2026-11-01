# Skeleton

Placeholder while content loads - shows the shape of what is coming.

- `fill-hover` surfaces with `radius-xs` and a slow pulse (1.4 s). `circle` for avatars, `lines` for text blocks (the last line is shorter).
- Use it when loading takes more than about 300 ms and the layout is known; otherwise use `Spinner`.

The consumer provides: `width`, `height`, and optionally `circle` or `lines`. Hidden from screen readers - announce loading somewhere else.
