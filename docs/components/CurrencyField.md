# CurrencyField

An amount of money.

- `NumberField` with two decimals and no steppers. Danish kroner are written the Danish way whatever the interface language: 1.234,50 kr. EUR gets €, USD and GBP a symbol in front.
- People can type "1234.5", "1.234,50" or "1234,5" - all become 1.234,50.

The consumer provides: `label` (or `aria-label`), `value` and `onChange(number | null)`, and optionally `currency` (default `DKK`), `decimals`, `hint`, `error`.
