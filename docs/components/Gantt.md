# Gantt

Projects and tasks over time.

- A sticky column of names on the left (with an optional avatar), a timeline on the right that scrolls sideways and opens at today. Month names and days (or week starts, when zoomed out) in a sticky header.
- Bars are 18 px with a `border-strong` outline on `fill`; `progress` fills them with `primary` from the left, and the percentage sits after the bar. A `milestone` is a small `primary` diamond.
- `group` puts tasks under a heading row. A 2 px `primary` line marks today.
- Clicking a bar calls `onItemClick`; the bar's label says the dates.

The consumer provides: `items` (`label`, `start`, `end`, `progress`, `group`, `milestone`, `avatar`), `aria-label`, and optionally `onItemClick`, `from`, `to`, `scale`, `maxHeight`.
