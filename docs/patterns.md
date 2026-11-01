# Patterns

Recipes for common screens and situations - which components to use and how to combine them.

## App shell

- `Sidebar` (300 px) on the left, `Topbar` (56 px) at the top, content on `canvas` with `space-8` margin, using the full width.
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
- Choices: `Dropdown` for five or more options (with `search` from about eight), `RadioGroup` or `SegmentedControl` for 2-4 visible ones, `Checkbox` for yes/no that is saved, `Switch` for yes/no that takes effect immediately.
- Buttons at the bottom right: secondary "Cancel" first, primary "Save" last. On mobile: `lg` and `block`.
- Validate on blur or on submit - never while the user is typing for the first time.

## Settings

- Never one long page. Split settings into pages and group the pages under a few categories: Account (Profile, Security), Preferences (Appearance, Language and region, Notifications), Workspace (General, Members, Delete workspace).
- `h1` "Settings" at the top, then a `NavList` (220 px) on the left with the categories as `{ section }` headings, and one page at a time on the right. Each page has its own URL (`#settings/notifications`) and fades in when chosen.
- Every page starts with an `h2` title, a one-line description and its actions on the right, above a hairline. Below come `SettingsSection` rows.
- Two kinds of pages, never mixed: pages that are saved (profile, workspace name) get "Save changes" as the page's one primary button, disabled until something changes, with a ghost "Discard" next to it; pages that apply right away (switches, theme, language) have no save button at all.
- Lists of things (members, sessions) use the full width of the page: a `Table` or `List` under the page head, with the main action ("Invite people") as the primary button.
- Destructive settings get a page of their own, last in the list, with a `danger` button that confirms in a `Dialog` naming the thing.
- On phones the `NavList` stacks above the page.

## Editing an item

- Short edits (1-3 fields): inline in the row or in a `Dialog`.
- Longer edits and details: `Modal` in the center - main content on the left, details in a narrow column on the right.
- `Drawer` only when the list behind must stay visible while editing.
- Destructive actions: `Menu` or `ContextMenu` with a `danger` item at the bottom → confirm in a `Dialog` with a `danger` button → confirm the result with a toast with "Undo".

## Right-click and shortcuts

- Right-click works on the whole thing, never just its label: `Table` rows through `rowMenu`, cards and files through `ContextMenu`. Same actions as the "…" menu (`Menu` with a ghost icon button) - never actions that exist only on right-click.
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
