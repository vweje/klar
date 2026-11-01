# RadioGroup

One choice among 2-5 visible options. Two variants: list and cards.

- **list** (default): 18 px round marker with a 1.5 px `border-strong`; the selected one gets a thick `primary` ring. Label in 14 px bold (700), `description` in `text-secondary`.
- **cards**: each option as a card with `border` and `radius-md`; the selected one gets a `primary` border. Good for plans and views.

The consumer provides: `options` (`value`, `label`, `description`, `disabled`), `value`/`onChange` or `defaultValue`, and `aria-label`.
