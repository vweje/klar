# NumberField

A number with a unit: hours, quantities, percentages.

- Looks like `TextField` with the unit after the number in `text-secondary` (or a `prefix` before it) and two small steppers at the end. Tabular figures.
- Typing is free; the value is read when the field is left or Enter is pressed, rounded to `decimals`, kept within `min` and `max`, and written the local way (1.234,5 in Danish). Text without digits puts the old value back.
- ↑ and ↓ step by `step`.

The consumer provides: `label` (or `aria-label`), `value` and `onChange(number | null)` or `defaultValue`, and optionally `unit`, `prefix`, `min`, `max`, `step`, `decimals`, `stepper`, `locale`, `hint`, `error`.
