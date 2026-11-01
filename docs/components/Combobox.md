# Combobox

Finding one item in a list too big to show: customers, people, products.

- A field with a search icon. Typing calls `loadOptions(query)` after a short pause (`debounce`, 250 ms); it may return a promise. Only the newest answer is used.
- The list shows "Searching…" with a spinner while waiting, "No results for …" when empty, and "Could not load results" with Try again when the request fails.
- Options can have an `avatar` or `icon` and a `description`. A clear button empties the field.
- Leaving the field without picking puts the chosen label back.

The consumer provides: `loadOptions`, `value` and `onChange(option | null)`, and optionally `label`, `placeholder`, `minChars`, `debounce`, `defaultOptions`.

Use `Dropdown` with `search` when the whole list is already loaded.
