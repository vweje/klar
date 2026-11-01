# Topbar

The top of the page: breadcrumb, title and actions. 56 px tall, `surface` with a `border` at the bottom - solid, no blur.

- The breadcrumb sits in `text-secondary`, separated by "/" in `border-strong`; the current page (`title`) in `text` and bold.
- Actions on the right as `sm` buttons: ghost icon buttons first, then secondary, and at most one primary last.

The consumer provides: `title`, `breadcrumb` (a list of texts or links) and `actions`.
