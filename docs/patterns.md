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

## Reports

- `h1` with a one-line summary and a `SegmentedControl` for the period (7 days, 30 days, 12 months) on the right. Every number on the page follows the period, and every change is compared with the period before.
- First row: `Stat` tiles with a `Sparkline` in `chart` - the number, its change, and its shape.
- Below, `Card`s on a 12-column grid: the main trend as a `LineChart` (this period in `primary`, the previous one dashed) across 8 columns, a ranked `BarList` across 4, then pairs across 6 each.
- At most two series per chart. Never two y-axes: two measures with different scales get two charts.
- The card's eyebrow names the measure and its title states the headline number.

## Calendar

- `Calendar` across the content with a `List` of the selected day's plan in a 300 px column on the right; on phones the list goes below.
- Deadlines come straight from the tasks, meetings show their time. Clicking a task opens it in the `Modal`; dates inside forms use `DatePicker`.
- Offer Month, Week and Day. Right-click on a day or a time creates things right there; right-click on an event gives its actions.
- Give the page its own URL (`#calendar`) and open on today.

## Tables

- Make the columns people compare sortable. Right-align numbers and keep IDs in `mono`.
- When people act on several rows at once, add `selectable` and `bulkActions`. The bar appears only while something is selected, and destructive bulk actions get an Undo toast.
- Tables with many columns get `columnToggle`. Long lists stay in one virtualized table instead of pages.

## Boards

- Offer a board next to the list, never instead of it: a `SegmentedControl` (List, Board) above the data switches between `Table` and `Kanban`, with the same filters.
- One column per status, in the order work moves. Moving a card changes its status and says so in a toast.
- Cards show the title, the owner's avatar, the due date and the ID - nothing that needs reading. Right-clicking a card gives the same menu as the row.

## Notifications

- `NotificationInbox` in the `Topbar`, just before the theme switch. Everything in it links to the thing it is about.
- Toasts confirm what you just did; the inbox tells you what others did. Never both for the same event.

## Attachments

- `FileDrop` inside the form it belongs to, with the allowed types and size in its hint. Show progress per file and keep the form usable while files upload.

## Planning

- Calendar for days and times, `Gantt` for weeks and months. Both open on today and link back to the task.

## Comments

- A `CommentThread` under the thing being discussed, with a `Timeline` of other changes below it. Mentioned people are notified through the `NotificationInbox`.
- Notes that belong to the item itself go in a `MarkdownEditor`, not in comments.

## Guides

- Creating something that needs three to five decisions: a `Modal` with `size="md"`, a `Stepper` at the top and Back/Next at the bottom right. The last step is a review with a `List` and the real action ("Create project").
- Validate each step when Next is pressed, not before. Completed steps can be revisited from the stepper.

## Forms

- One column, max about 480 px wide; fields separated by `space-4`, groups by `space-8` with an `h3` above.
- Label above the field, always. Help text below (`hint`); an error replaces the help text (`error`).
- Dates: `DatePicker`, periods: `DateRangePicker`, times: `TimePicker` - never free text fields. Several values from a list: `MultiSelect`. One value from a list too big to load: `Combobox`.
- Numbers with a unit: `NumberField`; money: `CurrencyField` (Danish kroner as 1.234,50 kr.); codes from an app or text message: `CodeInput`; new passwords: `PasswordField` with `strength`.
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
