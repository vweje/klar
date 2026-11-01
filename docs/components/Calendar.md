# Calendar

A month view: deadlines, meetings and anything else with a date.

- Header with the month in `h3`, a secondary "Today" button and ghost arrows for the previous and next month. Weekday names in `overline`. Weeks start on Monday by default (`weekStartsOn`).
- Days in a grid with 1 px hairlines on `surface`, at least 112 px tall. Days outside the month sit on `canvas` with muted numbers. Today's number is a small `primary` square; the selected day gets a 2 px `primary` inset ring.
- Events are 20 px chips on `fill`, with an optional time in `text-secondary`. After `maxEvents` (default 3) the rest becomes "+2 more". A `tone` dot is allowed for status, but the title must say it too.
- On phones the cells shrink and the events become dots.
- `views` adds a Month/Week/Day switch to the header. Week and day show a time grid: an hour per 48 px row with hairlines, an "All day" row for events without a time, today's column on `canvas` and a 2 px `primary` line at the current time. Timed events sit at their time with a 2 px `primary` edge, as tall as they last (`end`, or an hour); events that overlap share the width side by side. It opens at 7:00 (`scrollToHour`). Clicking a day in the week opens it in day view.
- Right-click: `dayMenu(date, time)` on a day - in week and day view also on a half hour, so "New meeting at 10:30" is one click away - and `eventMenu(event)` on an event. The day stays highlighted while its menu is open.
- `size="sm"` is the compact grid the `DatePicker` uses: 36 px day buttons, the selected day filled with `primary`, today outlined, a dot on days with events, full keyboard support (arrows, Page Up/Down, Home/End).
- Dates in and out are ISO strings (`2026-11-04`), so nothing shifts with time zones. Month and weekday names follow `setStrings()`.

The consumer provides: `events` (`id`, `date`, `title`, `time`, `end`, `tone`), `value`/`onChange` for the selected day, optionally `views`, `view`/`defaultView`/`onViewChange`, `date`/`onDateChange` for the date in view, `onEventClick`, `dayMenu`, `eventMenu`, `weekStartsOn`, `maxEvents`, `scrollToHour`.

Pair it with a `List` of the selected day's plan next to it.
