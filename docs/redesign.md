# Redesigning an existing dashboard with Klar

How to move an app that already works onto Klar without a rewrite: tokens first, then the shell, then one page at a time. The app keeps working after every step.

## 1. Pick the route that fits the stack

| The app is built with | Do this |
| --- | --- |
| React with Tailwind and shadcn/ui | Install Klar and import `klar/tokens.css` and `klar/shadcn.css`. The existing shadcn components take on Klar's colors, borders and radius at once. Then swap components page by page. |
| React with Tailwind, no shadcn | Import `klar/styles.css` and `klar/tailwind.css`. Klar's tokens become utilities (`bg-surface`, `text-text-secondary`, `border-border`). Replace colors and components page by page. |
| React with plain CSS or another library | Import `klar/styles.css` and replace components page by page, starting with the shell. |
| Not React (Vue, Svelte, server-rendered) | Import `klar/tokens.css` and use the tokens in the app's own CSS. The component styles are plain CSS too (`k-btn`, `k-input`, `k-table`), so markup can borrow them; the behaviour stays the app's own. |

```bash
npm install github:vweje/klar
```

## 2. Map every page to a Klar pattern

Before changing anything, list the pages and name the pattern each one becomes (see [Patterns](patterns.md)):

| What the app has | What it becomes in Klar |
| --- | --- |
| A menu at the top or a narrow sidebar | `Sidebar` (300 px) and `Topbar`, content at full width |
| Tabs or sub-menus inside a section | `NavList` for pages, `Tabs` for up to four views of the same data |
| A start page with numbers and charts | `Stat` tiles with `Sparkline`, then `Card`s with `LineChart`, `BarChart`, `BarList` |
| Lists of records | `Table` with sortable columns, selection and bulk actions, `rowMenu` for right-click |
| Edit panels that slide in from the side | `Modal` in the center; `Dialog` for yes/no |
| A long settings page | Settings pages under categories with `SettingsSection` |
| Native selects, date and time inputs | `Dropdown`, `MultiSelect`, `Combobox`, `DatePicker`, `DateRangePicker`, `TimePicker` |
| Alerts and banners | `toast()` for what just happened, `Callout` for what must be dealt with |
| Spinners while loading | `Skeleton` in the shape of the content |
| A board, a calendar, a plan | `Kanban`, `Calendar` (month, week, day), `Gantt` |

## 3. Tokens first

Replace the app's colors, fonts, radii and shadows with Klar's tokens before touching layout.

- Every background becomes `canvas` (the page), `surface` (cards, rows, fields) or `surface-raised` (things that float).
- Every line becomes `border`, or `border-strong` for fields that must stay visible.
- Text becomes `text`, `text-secondary` or `text-muted`.
- The brand color goes. The one primary button per view is `primary` (black in light, white in dark). Keep `success`, `warning` and `danger` for status only, always with a word.
- Font: Manrope, weights 500, 700 and 800. Radii: 6 px on controls, 8 px on lists and menus, 12 px on cards.
- Shadows only on things that float.

Check both themes after this step: set `data-theme="dark"` on `<html>`.

## 4. The shell

Swap the app's frame for `Sidebar`, `Topbar` and a content area that uses the full width with `space-8` margin. Put the page's one primary action in the topbar or the page head. Add `CommandPalette` on ⌘K with every page and the most used actions.

## 5. One page at a time

For each page, in the order people use them most:

1. Replace the layout with the pattern from step 2.
2. Swap components: buttons, fields, tables, menus, overlays.
3. Remove what Klar does not do: colored icons, gradients, glass, a second primary button, text on every chart point.
4. Make right-click work on whole rows and cards, with the same actions as the ⋯ menu.
5. Add the four states: loading (`Skeleton`), empty (`EmptyState` with the action that fills it), error (`Callout`), loaded.

## 6. Check before calling it done

- [ ] One primary button per view.
- [ ] Color only for status, always with a word or icon.
- [ ] Light and dark both look right; nothing is hard-coded.
- [ ] 375 px wide: no sideways scrolling, sidebar hidden, forms in one column.
- [ ] Keyboard: every action reachable, focus visible, overlays keep and return focus.
- [ ] Motion only from the tokens; nothing bounces.

## Doing it with Claude Code

Open the other project and ask for it in steps, so each one can be checked:

> Redesign this app with the Klar design system (github.com/vweje/klar). Read docs/design-principles.md, docs/patterns.md, docs/redesign.md and the component docs first. Start with step 3, tokens only, and show me before going on.

Then the shell, then page by page. To make it stick, add this to the project's `CLAUDE.md`:

```md
## Design system
This app uses Klar (github:vweje/klar). Follow its docs/design-principles.md and docs/patterns.md.
Use Klar components before writing new ones. One primary button per view; color only means status.
```
