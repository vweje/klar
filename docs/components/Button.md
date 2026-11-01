# Button

Compact button in four variants and three sizes - the text takes the space, not the padding.

- **primary** (`primary` + `on-primary`): black in light, white in dark. The primary action - at most one per view.
- **secondary** (`surface` + `border` + `shadow-xs`): all regular actions.
- **ghost** (transparent, `fill` on hover): actions in the topbar, rows, and icon buttons.
- **danger** (`danger-solid` + `on-danger`): only the final confirmation of something destructive, typically in a `Dialog`.

Sizes: `sm` (`control-sm`, 13px) in the topbar, rows, and cards; `md` (`control-md`, 14px) by default; `lg` (`control-lg`, 15px) for forms and mobile. All use `radius-sm` and bold text (700).

The consumer provides: the label as children (verb first: "Save", "Create"), `onClick`, optionally `icon`/`iconRight`, `shortcut` (shown as a keyboard shortcut), and `disabled`. Without children the button becomes square - provide an `aria-label` in that case.

Avoid: two primary buttons side by side, icons on both sides, long labels.
