# Slider

Pick a value within a range. Built on the native `input type="range"`.

- 6 px track in `fill`, filled part in `primary`, 18 px thumb in `surface` with a 2 px `primary` border.
- With `label`, the value is shown on the right in bold text; `format` controls the display ("60 %", "12 hours").

The consumer provides: `label` (or `aria-label`), `min`, `max`, `step`, `value`/`onChange` or `defaultValue`, and optionally `format`.
