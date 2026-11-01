# Design principles

Klar is a sharp, monochrome design system: black and white, thin borders, small corners, compact controls and bold, clear type. No accent color - the contrast between black and white does the work. Color is used only for status.

## Principles

- **Black and white.** `primary` is black in light mode and white in dark mode. It is the only "accent". Green, yellow and red always mean status - never decoration.
- **Borders before shadows.** Separate surfaces with a 1 px `border`. Use shadows only on things that float (`shadow-md` on dialogs and menus).
- **Compact.** Buttons and fields are only as large as their content needs: `control-md` (34 px) with 14 px text is the default.
- **Bold type.** Body text at weight 500, labels and buttons at 700, headings at 800. Never thin letters.
- **Solid.** No blur, glass, gradients or glow.

## Voice and tone

- Short, direct and friendly. Address the user as "you" ("Your project is saved").
- Sentence case - only the first word capitalized. Uppercase only in `overline` headings.
- Buttons start with a verb and are specific: "Create project", "Delete project", not "OK".
- No exclamation marks and no emoji in the interface.
- Errors explain the fix: "Enter a valid email address".
- Built-in component texts are English by default; switch languages with `setStrings()` (see the README).

## Color

- Backgrounds: `canvas` behind everything, `surface` for cards, lists, fields, sidebar and topbar, `surface-raised` for dialogs and menus.
- Text: `text` for primary content, `text-secondary` for descriptions and inactive navigation, `text-muted` only for placeholders and metadata on `canvas`/`surface`. `text-disabled` only in disabled controls.
- Fill: `fill` for tracks, icon tiles, active menu items and hover; `fill-hover` for an extra hover state.
- Borders: `border` for all hairlines; `border-strong` for controls that must stay visible (inputs, checkbox, switch).
- Action: `primary` with `on-primary`. Destructive: `danger-solid` with `on-danger` on buttons, `danger` as text.
- Status: `success`, `warning`, `danger` with their `*-soft` backgrounds - always paired with a word.
- Dark mode is near black (`canvas` #09090b) with zinc-gray surfaces; everything inverts, so `primary` becomes white. All text pairs hold at least 4.5:1 in both themes.

## Typography

- **Manrope** (Google Fonts) for everything; **JetBrains Mono** for code and keyboard shortcuts. Loaded by `components/bundle.css`.
- Scale: `display` (48/800) → `h1` (32/800) → `h2` (24/800) → `h3` (18/800) → `body-lg` (16/500) → `body` (14/500) → `label` (13/700) → `caption` (12/500) → `overline` (11/700, uppercase).
- `body` at 14 px is the interface default. Headings use negative letter spacing (-0.015 to -0.035 em) for a tight look.
- Minimum weight is 500. No italics in UI.

## Spacing and layout

- 4-point grid: `space-1` (4) to `space-16` (64).
- Padding: `space-4` in lists, `space-5` in cards and dialogs. `space-6` between groups, `space-8` between sections.
- App layout: `Sidebar` (240 px) on the left, `Topbar` (56 px) at the top, content on `canvas` with `space-8` margin and a max width of about 960 px.
- On mobile: hide the sidebar behind a menu button; use `lg` buttons.

## Corners

- Sharp and small: `radius-xs` (4) for checkbox and icon tiles, `radius-sm` (6) for buttons and fields, `radius-md` (8) for lists and menus, `radius-lg` (12) for cards and dialogs.
- `radius-full` only for badges, switch and avatars.

## Depth

- Depth = `border` + the difference between `canvas` and `surface`.
- `shadow-xs` only on secondary buttons and the selected segment; `shadow-md` on menus, dialogs and toasts; `shadow-lg` only on the command palette and drawer. In dark mode, borders carry depth alone.

## Motion

- Fast and subtle: 120 ms for colors and borders, 150 ms for switch and accordion, 180 ms when a toast slides in, 300 ms for progress. Easing `ease`.
- No bounce, no scaling on press. `prefers-reduced-motion` turns transitions off.

## Interaction and states

- Focus: 2 px solid `focus-ring` (same as `text`) with a 2 px offset - black in light, white in dark.
- Hover: rows, ghost buttons and menu items get `fill`; primary becomes `primary-hover`; inputs get a darker border.
- Disabled: `fill` with `text-disabled` - no semi-transparent buttons (except switch/checkbox, which dim to 50%).

## Icons

- The `Icon` component: custom line icons on a 24 px grid with a 2 px stroke and round caps, to match the bold type.
- 16 px in buttons, rows and menus; 18-20 px when standalone. They inherit the text color - always monochrome.
- No emoji as icons.

## Components

Install with `npm install github:vweje/klar`, import `klar/styles.css`, and import components from `klar` (React 18+). See [Patterns](patterns.md) for how to combine them, and the [live demo](../examples/index.html) for a full screen.

- App shell: `Sidebar`, `Topbar`, `Tabs`, `Pagination`.
- Input: `TextField`, `Textarea`, `Select`, `SearchField`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `SegmentedControl`.
- Content and data: `List`/`ListRow`, `Table`, `Card`, `Stat`, `Badge`, `Avatar`/`AvatarGroup`, `Accordion`, `Kbd`, `Tooltip`.
- Actions and menus: `Button`, `Menu` (dropdown), `ContextMenu` (right-click), `CommandPalette` (⌘K).
- Layers: `Dialog` for decisions, `Drawer` for editing in a side panel.
- Feedback: `Toaster` + `Klar.toast()` for notifications, `Toast`, `Callout`, `ProgressBar`, `Skeleton`, `Spinner`, `EmptyState`.

## Layering

- Fixed z-index tokens: `z-dropdown` (menus, right-click) < `z-dialog` (scrim, dialog, drawer, palette) < `z-toast` < `z-tooltip`.
- Toasts always sit on top, so a confirmation stays visible even when a dialog is open.

## Avoid

- Colored accents, including blue buttons and links.
- Large, airy buttons with small text.
- Thin font weights (below 500).
- Glass, blur, gradients and glow.
- Colored icons and cards with colored borders.
- More than one primary button per view.
