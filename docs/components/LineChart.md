# LineChart

Change over time: revenue per day, sign-ups per week.

- Monochrome: the series that matters in `primary`, at most one comparison (often the previous period) in `border-strong`, dashed - so the two never depend on color alone. More than two series: use small multiples, one chart each.
- 2 px lines with round joins, an optional `area` wash (8 % of `primary`) under the first series, hairline gridlines in `border`, y-axis ticks rounded to clean, compact numbers ($0, $2.5K, $5K) in `text-muted`. One y-axis, always.
- Hover shows a crosshair, a dot per series with a 2 px `surface` ring, and a tooltip with every value. The tooltip opens to the side near the edges.
- A legend appears above the chart when there are two series; a single series is named by the card title.
- A hidden table with every value is there for screen readers.
- Fills its container's width and follows it when it resizes; set `height` (default 240).

The consumer provides: `data` (rows with a `label` and a number per series key), `series` (`key`, `label`), `aria-label`, and optionally `format` (tooltip values), `formatAxis`, `area`, `height`.
