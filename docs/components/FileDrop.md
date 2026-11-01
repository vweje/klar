# FileDrop

Adding files by dropping them or browsing for them, with a list of what was added.

- A dashed `border-strong` area on `surface` with an upload icon, "Drop files here or browse" and a hint for what is allowed ("PDF, PNG or JPG up to 10 MB"). Dragging files over it turns the border solid `primary` on `fill`. It is a button too: click, Enter or Space opens the file dialog.
- `accept` (like the input attribute) and `maxSize` (bytes) are checked before `onFiles` is called; refused files are listed below in `danger` with the reason.
- The file list shows each file's name and size, a `ProgressBar` while `progress` is below 1, "Uploaded" when it is done, or the `error`. A ghost remove button sits at the end of each row.
- Uploading is up to the consumer: `onFiles` gets the `File` objects, `files` shows the result.

The consumer provides: `onFiles`, `files` (`id`, `name`, `size`, `progress`, `error`), `onRemove`, and optionally `label`, `hint`, `accept`, `multiple`, `maxSize`, `name`.
