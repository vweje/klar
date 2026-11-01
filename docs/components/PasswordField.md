# PasswordField

A password, with a button to show it.

- `TextField` with a ghost eye button inside the right edge; it says "Show password" or "Hide password" to screen readers and is a toggle (`aria-pressed`).
- `strength` adds four thin bars and a word (Weak, Fair, Good, Strong) under the field: `danger`, `warning` or `success`, always with the word. Use it only where a new password is chosen.
- The score rewards length, mixed case, digits and symbols, and stays low for common passwords and repeats. Explain the rule in `hint`.

The consumer provides: `label`, `value`/`onChange` (an input event, like `TextField`), and optionally `strength`, `hint`, `error`, `autoComplete`.
