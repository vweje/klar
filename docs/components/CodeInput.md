# CodeInput

A one-time code for two-step sign-in or confirming an email.

- One 44 x 52 px box per digit in `mono`, with a gap in the middle of a six-digit code. Typing moves to the next box, Backspace goes back, the arrows move between boxes.
- Pasting a code, or the phone filling it in from a text message (`autocomplete="one-time-code"`), fills every box at once.
- `onComplete` runs when the last digit is in. Show a wrong code as `error` and keep the digits so people can correct one.

The consumer provides: `label`, `onComplete`, and optionally `length` (default 6), `value`/`onChange`, `error`, `hint`, `autoFocus`.
