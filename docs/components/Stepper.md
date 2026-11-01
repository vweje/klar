# Stepper

Progress through a short guide: creating a project, onboarding, checkout.

- Steps in a row joined by hairlines. Each has a 24 px square marker and a label: upcoming steps outlined in `border-strong`, the current one filled with `primary`, completed ones on `fill` with a checkmark, and the line after a completed step turns `primary`.
- `onStepClick` lets people go back to a completed step; steps ahead stay locked until the current one is valid.
- On phones only the current step keeps its label.
- Three to five steps. More than that is a form, not a guide.

The consumer provides: `steps` (`label`, optional `description`), `current` (index), optionally `onStepClick` and an `aria-label`.

Put it at the top of a `Modal` with `size="md"`, with Back and Next (or the final action) in the footer.
