# Switch

Small on/off toggle for settings that take effect immediately.

- 34 × 20 px. Off: `fill` with a `border-strong` border and a gray thumb. On: `primary` with the thumb in `on-primary`.
- The state shows in both the thumb's position and the fill - never in color alone.

The consumer provides: `label` (or `aria-label`), and `checked`/`onChange` or `defaultChecked`.
