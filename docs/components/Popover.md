# Popover

A small panel anchored to a button: filters, quick settings, a notification list.

- `surface-raised`, `border`, `radius-md`, `shadow-md`, 320 px wide by default (`width`). Opens below the trigger, or above it when there is no room; `align: 'end'` lines it up with the trigger's right edge.
- `position: fixed`, so tables, Modals and scrolling areas never clip it. Scrolling the page closes it.
- Closes on a click outside, Esc (which then returns focus to the trigger and never closes a Modal around it), or `close()` from a children function.
- Same motion as menus: drops 4 px into place, leaves faster.

The consumer provides: `trigger` (a button), the content as `children` or `(close) => content`, and optionally `open`/`onOpenChange`, `align`, `width`, `aria-label`.

Use `Menu` for a list of actions, `Dropdown` for choosing a value, `Popover` for anything else that belongs to a button.
