# TimePicker

A time of day.

- A field with a clock icon. Typing is quick: "930", "9:30", "9.30", "9" and "2pm" all become 24-hour "09:30" / "14:00".
- The list under it has every quarter of an hour (`step`), opens at the current value and moves to whatever is typed.
- ↑/↓ move in the list, Enter picks, Esc closes without closing a Modal around it. An impossible time puts the old value back.

The consumer provides: `value` and `onChange(time)`, and optionally `label`, `step`, `min`, `max`, `placeholder`.

Use two next to a `DatePicker` for a meeting: Starts and Ends.
