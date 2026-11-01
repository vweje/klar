# MultiSelect

Picking several values from a list: labels, members, tags.

- A field that grows as tags are added. Tags are 24 px on `fill` with 3 px corners and a small remove button.
- Typing filters the list, which looks like `Dropdown`'s: a checkmark in front of chosen options. Choosing keeps the list open so several can be picked in a row.
- Keyboard: ↓ opens, ↑/↓ move, Enter toggles, Backspace in an empty field removes the last tag, Esc closes (without closing a Modal around it).
- `max` stops at a number of choices; the rest of the options are disabled until one is removed.
- `name` adds a hidden input per value for normal forms.

The consumer provides: `label` (or `aria-label`), `options`, `value` and `onChange(values)` or `defaultValue`, and optionally `placeholder`, `hint`, `error`, `max`, `name`.
