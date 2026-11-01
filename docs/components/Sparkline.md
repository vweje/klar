# Sparkline

A tiny line without axes that shows the shape of a trend next to a number.

- 96 x 28 px by default, 1.5 px `primary` line, a dot on the last value with a `surface` ring.
- Put it in a `Stat` with the `chart` prop. Always pair it with the number and its change - a sparkline alone tells no amount.

The consumer provides: `data` (numbers, oldest first), `label` for screen readers, and optionally `width` and `height`.
