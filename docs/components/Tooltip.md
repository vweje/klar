# Tooltip

Short help text on hover and keyboard focus - especially for icon buttons.

- Black bubble in `primary` with `on-primary` text (12 px bold), `radius-sm`, and an optional keyboard shortcut in `mono`. Inverts automatically in dark mode.
- Shown above the element (`side: 'top'`) or below it (`'bottom'`). `open` forces it visible (for demos and onboarding).

The consumer provides: `content` (2-4 words), optionally `shortcut`, and the element as children. The icon button still needs an `aria-label`.

Avoid: important information only in a tooltip.
