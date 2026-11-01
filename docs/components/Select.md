# Select

Dropdown choice built on the native `select` - works with keyboards, screen readers and the phone's own picker.

- Looks like `TextField` with a chevron in `text-secondary` on the right.
- `placeholder` adds a disabled first option ("Choose a person"); set `defaultValue: ''` to show it.

The consumer provides: `label`, `options` (strings or `{value, label}`), `value`/`onChange` or `defaultValue`, and optionally `hint`/`error`.

Use `RadioGroup` when there are 2-4 options that should be visible at once.
