# Toast

Short-lived notification after an action. This is the card itself - for showing and positioning, use `Toaster` + `Klar.toast()`.

- 360 px, `surface-raised`, `border`, `radius-md`, `shadow-md`. Title 14 px bold, description 13 px in `text-secondary`.
- `tone` adds a colored icon (`success`, `warning`, `danger`, `info`); `default` has no icon.
- `action` (e.g. "Undo") and a close button (`onClose`; pass `null` for a button with no handler in demos).

The consumer provides: `title`, and optionally `description`, `tone`, `action`, `onClose`.
