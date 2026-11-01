# Calendar

A month view: deadlines, meetings and anything else with a date.

- Header with the month in `h3`, a secondary "Today" button and ghost arrows for the previous and next month. Weekday names in `overline`. Weeks start on Monday by default (`weekStartsOn`).
- Days in a grid with 1 px hairlines on `surface`, at least 112 px tall. Days outside the month sit on `canvas` with muted numbers. Today's number is a small `primary` square; the selected day gets a 2 px `primary` inset ring.
- Events are 20 px chips on `fill`, with an optional time in `text-secondary`. After `maxEvents` (default 3) the rest becomes "+2 more". A `tone` dot is allowed for status, but the title must say it too.
- On phones the cells shrink and the events become dots.
- `size="sm"` is the compact grid the `DatePicker` uses: 36 px day buttons, the selected day filled with `primary`, today outlined, a dot on days with events, full keyboard support (arrows, Page Up/Down, Home/End).
- Dates in and out are ISO strings (`2026-11-04`), so nothing shifts with time zones. Month and weekday names follow `setStrings()`.

The consumer provides: `events` (`id`, `date`, `title`, `time`, `tone`), `value`/`onChange` for the selected day, optionally `month`/`onMonthChange`, `onEventClick`, `weekStartsOn`, `maxEvents`.

Pair it with a `List` of the selected day's plan next to it.
