# DateRangePicker

A period: for reports, filters and anything with a start and an end.

- The field shows the period ("Oct 3 – Nov 1, 2026") with a calendar icon.
- It opens a `Popover`: presets on the left (Last 7 days, Last 30 days, This month, Last month, This year), two months side by side on the right. On phones the presets become a row and one month shows.
- First click sets the start, the second the end - in either order. Between the clicks, hovering shows the period that would be chosen. Days in the period sit on `fill`; the start and end are filled with `primary`.
- Picking a preset or an end date closes it.

The consumer provides: `value` and `onChange({ start, end })` (ISO dates), and optionally `label`, `presets`, `placeholder`, `weekStartsOn`.
