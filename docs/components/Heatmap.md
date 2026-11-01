# Heatmap

Activity per day over a year, like a contribution graph.

- One 11 px square per day, a column per week, weeks starting on Monday. Five steps from `fill` (nothing) to `primary` (the busiest days).
- Month names above and Mon, Wed, Fri on the left in `text-muted`. Hovering a day shows its number and date. A small Less-More legend sits below.
- Scrolls sideways on narrow screens.

The consumer provides: `data` (ISO date to number), `aria-label`, and optionally `weeks`, `end`, `format`.
