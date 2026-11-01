# Dropdown

Custom select: a field that opens a list styled like Klar's menus. The default way to pick one value from five or more.

- Trigger looks like `TextField`: `border-strong`, `radius-sm`, 34 px, the chosen label (or `placeholder` in `text-muted`) and a chevron that turns when open. Open, it gets the focus ring.
- The list is a `Menu` panel (`surface-raised`, `border`, `radius-md`, `shadow-md`) but lighter than an action menu: 30 px options in 13 px at weight 500, the chosen one at 700 with a checkmark in front. As wide as the trigger, at most 280 px tall, quiet scrollbar.
- Options can have an `icon` and a one-line `description`; `{ section }` adds a heading; `disabled` options are skipped.
- `search` adds a search field at the top that filters as you type - use it from about eight options.
- Opens below the field, or above it when there is no room. The list is `position: fixed`, so it is never clipped inside a `Modal`, a table or a scrolling page; scrolling the page closes it.
- Motion: drops 4 px into place (`duration-base`), leaves faster (`duration-fast`), the chevron turns with it.
- Keyboard: ↓, ↑, Enter or Space opens; ↑/↓, Home and End move; Enter picks; typing a letter jumps to the next option starting with it; Esc closes without closing a `Modal` around it; Tab closes and moves on.
- `name` adds a hidden input so the value is sent with a normal form.

The consumer provides: `label` (or `aria-label`), `options` (strings or `{ value, label, icon, description, disabled }`), `value` and `onChange(value)` or `defaultValue`, and optionally `placeholder`, `hint`, `error`, `search`, `name`.

Use `RadioGroup` or `SegmentedControl` for 2-4 options that should be visible at once. Use the native `Select` only when you want the phone's own picker.
