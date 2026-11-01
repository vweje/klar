# CommentThread

A discussion under a task, a document or a record.

- Each comment: a small `Avatar`, the name in bold with the time in `text-muted`, and the text in a `fill` box rendered with `Markdown`.
- The composer below has the current person's avatar, a textarea with @mentions, a hint ("⌘ Enter to send") and a secondary Comment button that stays disabled while the field is empty.
- `onSubmit(body, mentioned)` gives the text and the names that were mentioned, so they can be notified.

The consumer provides: `comments` (`id`, `author`, `time`, `body`), `onSubmit`, and optionally `people`, `currentUser`, `placeholder`.

Pair it with a `Timeline` for everything that happened besides comments.
