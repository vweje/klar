# DatePicker

A date field that opens a small calendar.

- The trigger looks like `TextField` with a calendar icon on the right; the date is written out in the user's language ("Nov 4, 2026", "4. nov. 2026"). Empty, it shows "Choose a date".
- The calendar opens below the field, or above it when there is no room, with the same motion as menus. It is `position: fixed`, so a `Modal` never clips it.
- Opening focuses the chosen day (or today). Arrows move a day or a week, Page Up/Down a month, Enter picks and closes; Esc closes without closing a `Modal` around it.
- Values are ISO strings (`2026-11-04`). `name` adds a hidden input for normal forms.

The consumer provides: `label` (or `aria-label`), `value` and `onChange(date)` or `defaultValue`, and optionally `placeholder`, `hint`, `error`, `weekStartsOn`, `name`.
