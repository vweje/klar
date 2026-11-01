# Patterns

Recipes for common screens and situations - which components to use and how to combine them.

## App shell

- `Sidebar` (240 px) on the left, `Topbar` (56 px) at the top, content on `canvas` with `space-8` margin.
- Page title in `h1` at the top of the content with a short subtitle in `text-secondary`; period picker (`SegmentedControl`) on the right.
- At most one primary button per screen - typically "New …" in the `Topbar`.
- On mobile: hide the sidebar behind a ghost icon button in the `Topbar`, and give the content `space-6` margin.

## Dashboard

- First row: 3-4 `Stat` cards in a grid with `space-3` gaps.
- Below: `Tabs` for filters (with `count`) and secondary buttons ("Filter", "Export") on the right - above a `Table`.
- `Card` for everything else (charts, activity, goals with `ProgressBar`).
- See the [live demo](../examples/index.html) for the full composition.

## Forms

- One column, max about 480 px wide; fields separated by `space-4`, groups by `space-8` with an `h3` above.
- Label above the field, always. Help text below (`hint`); an error replaces the help text (`error`).
- Choices: `Select` for many options, `RadioGroup` for 2-4 visible ones, `Checkbox` for yes/no that is saved, `Switch` for yes/no that takes effect immediately.
- Buttons at the bottom right: secondary "Cancel" first, primary "Save" last. On mobile: `lg` and `block`.
- Validate on blur or on submit - never while the user is typing for the first time.

## Editing an item

- Short edits (1-3 fields): inline in the row or in a `Dialog`.
- Longer edits: `Drawer` from the right, so the list behind stays visible.
- Destructive actions: `Menu` or `ContextMenu` with a `danger` item at the bottom → confirm in a `Dialog` with a `danger` button → confirm the result with a toast with "Undo".

## Right-click and shortcuts

- `ContextMenu` on rows, cards and files with the same actions as the "…" menu (`Menu` with a ghost icon button) - never actions that exist only on right-click.
- Show shortcuts in menus (`shortcut`) and tooltips so they can be learned.
- `CommandPalette` on ⌘K / Ctrl K gives access to all actions and all navigation.

## Feedback

- Confirmation after an action: `toast.success('…')` - short, in past tense ("Task created").
- Undoable: a toast with an "Undo" button and a `duration` of 6-8 seconds.
- Errors the user must act on: `Callout` (`danger`) on the page or `error` on the field - not a toast that disappears.
- State warnings (expiring subscription, offline): `Callout` (`warning`) at the top of the content.

## Loading and empty states

- Under 300 ms: show nothing.
- Known layout: `Skeleton` in the shape of the content (rows, cards, avatars).
- Action in progress: `Spinner` in the button that started it, with the button disabled ("Saving…").
- Empty: `EmptyState` with a specific title and the action that fills the page.
