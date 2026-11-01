# NotificationInbox

The bell in the topbar and the list behind it.

- A ghost icon button with the unread count in a small `primary` badge (9+ above nine). Its label says the count for screen readers.
- Opens a 380 px `Popover` aligned to the right: title, a ghost "Mark all as read", an All/Unread switch, then the list.
- Each item: an `Avatar` for a person or an icon tile, the title (bold while unread), an optional one-line description and the time, and a `primary` dot while unread. Clicking marks it read and calls `onItemClick`.
- Empty: "You are all caught up."

The consumer provides: `items` (`id`, `title`, `description`, `time`, `read`, `icon` or `avatar`), `onRead`, `onReadAll`, `onItemClick`.

Do: link every notification to the thing it is about. Don't: use it for confirmations - those are toasts.
