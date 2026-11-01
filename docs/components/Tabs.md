# Tabs

Underlined tabs for switching between sections on the same page.

- 40 px tall, 14 px bold text. Inactive `text-secondary`, active `text` with a 2 px `primary` underline. The whole row sits on a `border` line.
- Optional `count` in a small gray pill, and an optional icon.

The consumer provides: `items` (`id`, `label`, `icon`, `count`), `value`/`onChange` or `defaultValue`, and the content itself below the tabs.

Use `SegmentedControl` to switch views of the same content; use `Tabs` for different sections.
