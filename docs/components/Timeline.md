# Timeline

What happened, in order: activity on a task, the history of a deal.

- Each item has a 24 px marker - an `Avatar` for a person, an icon tile for a system event, or a small dot - joined to the next by a 1 px `border` line.
- The title is 13 px; put names and values in `<strong>`. A `description` sits in a `fill` box, for comments and quotes. The time is 11 px `text-muted`.
- Newest first when it is an activity feed.

The consumer provides: `items` (`id`, `title`, `description`, `time`, `icon` or `avatar`) and an `aria-label`.
