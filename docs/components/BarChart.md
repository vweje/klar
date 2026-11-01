# BarChart

Comparing amounts across a few categories or periods: tasks per week, orders per month.

- Columns at most 24 px wide with 4 px rounded tops and square bases, grown from one baseline; the leftover band is air. Two series sit side by side with a 2 px gap: `primary` first, `border-strong` second.
- Hairline gridlines, compact y-axis ticks, category labels thinned out so they never collide.
- Hover dims the other columns and shows a tooltip with every value in the group.
- Legend for two series, a hidden table for screen readers, full width of its container.

The consumer provides: `data`, `series`, `aria-label`, and optionally `format`, `formatAxis`, `height` (default 240).

Use `BarList` instead for a ranked list with long labels.
