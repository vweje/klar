# MarkdownEditor

Notes with a little formatting.

- A textarea with a toolbar of ghost icon buttons (Bold, Italic, List, Link, Code) and a Write/Preview switch. ⌘B, ⌘I and ⌘K (Ctrl on Windows) work while typing.
- The toolbar wraps the selected text, or inserts a word to replace.
- Typing @ opens a list of `people` under the field; ↑/↓ and Enter or Tab insert the name.
- Preview shows the text through `Markdown`.

The consumer provides: `value` and `onChange(text)`, `label`, and optionally `people`, `rows`, `maxLength`, `placeholder`, `hint`.
