# Checkbox

Square checkbox for choices that are saved with a button - or for multi-select lists.

- 18px, `radius-xs`, 1.5px `border-strong`. Checked: `primary` fill with a checkmark in `on-primary`.
- Label in 14px bold (700), optional `description` below in `text-secondary`. Clicking the text also toggles it.

The consumer provides: `label`, optionally `description`, and `checked`/`onChange` or `defaultChecked`.

Use `Switch` instead when the change takes effect immediately.

`indeterminate` shows a dash instead of a check: some, but not all, of a group is checked. It reads as "mixed" to screen readers.
