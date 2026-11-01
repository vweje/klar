# SearchField

Search field with a magnifying glass and a keyboard shortcut (`Kbd`) on the right.

- Like an input field, but with a soft `border` so it doesn't compete with form fields. Focus: ring in `focus-ring`.
- `shortcut` shows the shortcut (default "⌘K"); `shortcut={false}` hides it.
- Built-in texts (such as the default placeholder "Search") follow the global strings set with `setStrings()` (see the README's "Language" section).

The consumer provides: a `placeholder` that says what is being searched, `value`/`onChange`, and the shortcut itself in the app.
