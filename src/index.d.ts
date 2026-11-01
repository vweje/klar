import type * as React from 'react';

/** Built-in component texts (aria labels, placeholders). English by default. */
export interface KlarStrings { search: string; selected: string; breadcrumb: string; mainNavigation: string; loading: string; pagination: string; previous: string; next: string; close: string; commands: string; commandPlaceholder: string; searchCommands: string; noResults: string; navigate: string; select: string; /** BCP 47 locale for dates and numbers, e.g. 'en-US' or 'da-DK'. */ locale: string; today: string; previousMonth: string; nextMonth: string; more: string; chooseDate: string; previousWeek: string; nextWeek: string; previousDay: string; nextDay: string; view: string; month: string; week: string; day: string; allDay: string; notifications: string; markAllRead: string; all: string; unread: string; caughtUp: string; dropFiles: string; browse: string; remove: string; tooLarge: string; wrongType: string; uploaded: string; moveHint: string; empty: string; completed: string; bulkActions: string; clearSelection: string; columns: string; selectAll: string; selectRow: string; showPassword: string; hidePassword: string; passwordStrength: string; weak: string; fair: string; good: string; strong: string; digit: string; of: string; increase: string; decrease: string; chooseRange: string; last7: string; last30: string; thisMonth: string; lastMonth: string; thisYear: string; chooseTime: string; searching: string; loadFailed: string; tryAgain: string; typeToSearch: string; clear: string; other: string; total: string; less: string; moreLabel: string; write: string; preview: string; bold: string; italic: string; list: string; link: string; code: string; nothingToPreview: string; comment: string; writeComment: string; toSend: string; noComments: string }
/** Bundled translations. */
export declare const locales: { en: KlarStrings; da: KlarStrings };
/** Switch built-in texts globally: setStrings('da'), or pass your own partial set. Call once before rendering. */
export declare function setStrings(next: 'en' | 'da' | Partial<KlarStrings>): KlarStrings;
/** Sets data-theme on <html> with one crossfade (View Transitions where supported). 'system' follows the OS setting. */
export declare function setTheme(theme: 'light' | 'dark' | 'system'): void;

export type IconName = 'chevron-right' | 'chevron-down' | 'arrow-right' | 'search' | 'check' | 'xmark' | 'plus' | 'more' | 'home' | 'inbox' | 'folder' | 'calendar' | 'chart' | 'person' | 'settings' | 'bell' | 'lock' | 'info' | 'circle-check' | 'alert' | 'chevron-left' | 'trend-up' | 'trend-down' | 'edit' | 'copy' | 'trash' | 'upload' | 'filter' | 'logout' | 'file' | 'chevron-up' | 'minus' | 'eye' | 'eye-off' | 'clock' | 'message' | 'bold' | 'italic' | 'list' | 'link' | 'code' | 'send';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'ghost' | 'danger'; size?: 'sm' | 'md' | 'lg'; icon?: IconName; iconRight?: IconName; shortcut?: string; block?: boolean }
export declare function Button(props: ButtonProps): React.ReactElement;

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> { label?: string; hint?: string; error?: string }
export declare function TextField(props: TextFieldProps): React.ReactElement;

export interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> { placeholder?: string; shortcut?: string | false }
export declare function SearchField(props: SearchFieldProps): React.ReactElement;

export interface CheckboxProps { /** Shows a dash: some, not all, of a group is checked. */ indeterminate?: boolean; checked?: boolean; defaultChecked?: boolean; onChange?: (checked: boolean) => void; label?: React.ReactNode; description?: React.ReactNode; disabled?: boolean; 'aria-label'?: string; className?: string }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;

export interface SwitchProps { checked?: boolean; defaultChecked?: boolean; onChange?: (checked: boolean) => void; label?: string; disabled?: boolean; 'aria-label'?: string; className?: string }
export declare function Switch(props: SwitchProps): React.ReactElement;

export interface SegmentedOption { value: string; label: React.ReactNode; icon?: IconName }
export interface SegmentedControlProps { options: Array<string | SegmentedOption>; value?: string; defaultValue?: string; onChange?: (value: string) => void; block?: boolean; 'aria-label'?: string; className?: string }
export declare function SegmentedControl(props: SegmentedControlProps): React.ReactElement;

export interface ListProps { header?: React.ReactNode; action?: React.ReactNode; footer?: React.ReactNode; children?: React.ReactNode; className?: string }
export declare function List(props: ListProps): React.ReactElement;
export interface ListRowProps { title: React.ReactNode; subtitle?: React.ReactNode; value?: React.ReactNode; icon?: IconName; accessory?: 'chevron' | 'check' | React.ReactNode; destructive?: boolean; href?: string; onClick?: () => void; className?: string }
export declare function ListRow(props: ListRowProps): React.ReactElement;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> { eyebrow?: React.ReactNode; title?: React.ReactNode; action?: React.ReactNode; footer?: React.ReactNode }
export declare function Card(props: CardProps): React.ReactElement;

export interface BadgeProps { tone?: 'neutral' | 'outline' | 'solid' | 'success' | 'warning' | 'danger'; children?: React.ReactNode; className?: string }
export declare function Badge(props: BadgeProps): React.ReactElement;

export interface ProgressBarProps { value: number; label?: string; className?: string }
export declare function ProgressBar(props: ProgressBarProps): React.ReactElement;

export interface TopbarProps { title: React.ReactNode; breadcrumb?: React.ReactNode[]; actions?: React.ReactNode; className?: string }
export declare function Topbar(props: TopbarProps): React.ReactElement;

export type SidebarItem = { id: string; label: string; icon?: IconName; count?: number } | { section: string };
export interface SidebarProps { items: SidebarItem[]; value?: string; defaultValue?: string; onChange?: (id: string) => void; header?: React.ReactNode; footer?: React.ReactNode; 'aria-label'?: string; className?: string }
export declare function Sidebar(props: SidebarProps): React.ReactElement;

/** Sub-navigation inside a page (e.g. settings): optional group headings followed by items. */
export type NavListItem = { id: string; label: string; icon?: IconName; count?: number } | { section: string };
export interface NavListProps { items: NavListItem[]; value?: string; defaultValue?: string; onChange?: (id: string) => void; 'aria-label'?: string; className?: string }
export declare function NavList(props: NavListProps): React.ReactElement;
/** One settings topic: title and description on the left, controls on the right. */
export interface SettingsSectionProps { title: React.ReactNode; description?: React.ReactNode; children?: React.ReactNode; className?: string }
export declare function SettingsSection(props: SettingsSectionProps): React.ReactElement;

export interface DialogAction { label: string; variant?: 'primary' | 'secondary' | 'ghost' | 'danger'; onClick?: () => void }
export interface DialogProps { title: React.ReactNode; message?: React.ReactNode; actions?: DialogAction[]; overlay?: boolean; /** Keep it rendered and toggle this to animate it in and out. */ open?: boolean; /** Called on Esc and on a click on the scrim. */ onClose?: () => void; children?: React.ReactNode; className?: string }
export declare function Dialog(props: DialogProps): React.ReactElement | null;

export interface IconProps { name: IconName; size?: number; weight?: number; label?: string; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;
export declare function Kbd(props: { children?: React.ReactNode }): React.ReactElement;



// ---- Extended components ----
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { label?: string; hint?: string; error?: string }
export declare function Textarea(props: TextareaProps): React.ReactElement;
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { label?: string; hint?: string; error?: string; placeholder?: string; options: Array<string | { value: string; label: string }> }
export declare function Select(props: SelectProps): React.ReactElement;
/** Custom select that matches Klar's menus. onChange gets the value, not an event. */
export type DropdownOption = { value: string; label: string; description?: string; icon?: IconName; disabled?: boolean } | { section: string };
export interface DropdownProps { label?: string; hint?: string; error?: string; placeholder?: string; options: Array<string | DropdownOption>; value?: string; defaultValue?: string; onChange?: (value: string) => void; /** Adds a search field at the top of the list. */ search?: boolean; /** Renders a hidden input so the value is sent with a form. */ name?: string; disabled?: boolean; id?: string; 'aria-label'?: string; className?: string }
export declare function Dropdown(props: DropdownProps): React.ReactElement;
export interface RadioOption { value: string; label: React.ReactNode; description?: React.ReactNode; disabled?: boolean }
export interface RadioGroupProps { options: Array<string | RadioOption>; value?: string; defaultValue?: string; onChange?: (value: string) => void; variant?: 'list' | 'cards'; 'aria-label'?: string; className?: string }
export declare function RadioGroup(props: RadioGroupProps): React.ReactElement;
export interface SliderProps { value?: number; defaultValue?: number; min?: number; max?: number; step?: number; onChange?: (value: number) => void; label?: string; format?: (v: number) => React.ReactNode; disabled?: boolean; 'aria-label'?: string; className?: string }
export declare function Slider(props: SliderProps): React.ReactElement;
export interface AvatarProps { name: string; src?: string; size?: 'sm' | 'md' | 'lg'; status?: 'online' | 'away' | 'offline'; className?: string }
export declare function Avatar(props: AvatarProps): React.ReactElement;
export declare function AvatarGroup(props: { names: string[]; max?: number; size?: 'sm' | 'md' | 'lg'; className?: string }): React.ReactElement;
export interface TooltipProps { content: React.ReactNode; shortcut?: string; side?: 'top' | 'bottom'; open?: boolean; children: React.ReactNode; className?: string }
export declare function Tooltip(props: TooltipProps): React.ReactElement;
export interface TabsProps { items: Array<{ id: string; label: React.ReactNode; icon?: IconName; count?: number }>; value?: string; defaultValue?: string; onChange?: (id: string) => void; 'aria-label'?: string; className?: string }
export declare function Tabs(props: TabsProps): React.ReactElement;
export interface StatProps { label: React.ReactNode; value: React.ReactNode; delta?: string; trend?: 'up' | 'down' | 'flat'; caption?: React.ReactNode; icon?: IconName; /** A small chart next to the value, e.g. a Sparkline. */ chart?: React.ReactNode; className?: string }
export declare function Stat(props: StatProps): React.ReactElement;
export interface TableColumn<T = any> { key: string; label: React.ReactNode; align?: 'left' | 'right' | 'center'; width?: number | string; strong?: boolean; mono?: boolean; render?: (row: T) => React.ReactNode; /** Click the header to sort. */ sortable?: boolean; /** The value to sort by when it differs from row[key]. */ sortValue?: (row: T) => string | number; /** false keeps it out of the Columns menu. */ hideable?: boolean }
export interface TableSort { key: string; dir: 'asc' | 'desc' }
export interface TableProps<T = any> { columns: TableColumn<T>[]; rows: T[]; onRowClick?: (row: T) => void; /** Right-click anywhere on a row opens these items. Use the same actions as the row's ⋯ menu. */ rowMenu?: (row: T) => MenuItem[];
  sort?: TableSort | null; defaultSort?: TableSort | null; onSortChange?: (sort: TableSort | null) => void; /** Sort on the server: the table only reports the sort. */ manualSort?: boolean;
  /** Adds a checkbox per row; rows are identified by their id. */ selectable?: boolean; selected?: Array<string | number>; defaultSelected?: Array<string | number>; onSelectedChange?: (ids: Array<string | number>) => void;
  /** Buttons in the bar that appears above the table while rows are selected. */ bulkActions?: (rows: T[]) => React.ReactNode;
  /** A Columns menu for hiding columns. */ columnToggle?: boolean; hiddenColumns?: string[]; defaultHiddenColumns?: string[]; onHiddenColumnsChange?: (keys: string[]) => void;
  /** Only render the rows in view. On by default above 100 rows. */ virtualize?: boolean; maxHeight?: number; rowHeight?: number; 'aria-label'?: string; className?: string }
export declare function Table(props: TableProps): React.ReactElement;
export interface EmptyStateProps { title: React.ReactNode; description?: React.ReactNode; icon?: IconName; action?: React.ReactNode; className?: string }
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;
export declare function Skeleton(props: { width?: number | string; height?: number | string; circle?: boolean; lines?: number; className?: string }): React.ReactElement;
export declare function Spinner(props: { size?: number; label?: string; className?: string }): React.ReactElement;
export declare function Pagination(props: { pageCount: number; page?: number; defaultPage?: number; onChange?: (page: number) => void; className?: string }): React.ReactElement;
export declare function Accordion(props: { items: Array<{ id: string; title: React.ReactNode; content: React.ReactNode }>; defaultOpen?: string[]; multiple?: boolean; className?: string }): React.ReactElement;
export interface CalloutProps { tone?: 'info' | 'success' | 'warning' | 'danger'; title?: React.ReactNode; icon?: IconName; action?: React.ReactNode; children?: React.ReactNode; className?: string }
export declare function Callout(props: CalloutProps): React.ReactElement;
export interface ToastProps { title: React.ReactNode; description?: React.ReactNode; tone?: 'default' | 'info' | 'success' | 'warning' | 'danger'; action?: React.ReactNode; onClose?: (() => void) | null; className?: string }
export declare function Toast(props: ToastProps): React.ReactElement;
export declare function Toaster(props: { inline?: boolean; className?: string }): React.ReactElement;
export interface ToastOptions { title: React.ReactNode; description?: React.ReactNode; tone?: ToastProps['tone']; action?: React.ReactNode; duration?: number }
export interface ToastFn { (opts: ToastOptions | string): number; success(o: Omit<ToastOptions, 'tone'> | string): number; warning(o: Omit<ToastOptions, 'tone'> | string): number; danger(o: Omit<ToastOptions, 'tone'> | string): number; info(o: Omit<ToastOptions, 'tone'> | string): number; dismiss(id: number): void }
export declare const toast: ToastFn;
export type MenuItem = { label: string; icon?: IconName; shortcut?: string; danger?: boolean; disabled?: boolean; checked?: boolean; items?: MenuItem[]; onSelect?: () => void } | { separator: true } | { heading: string };
export declare function MenuPanel(props: { items: MenuItem[]; onClose?: () => void; defaultOpenSub?: number; className?: string; style?: React.CSSProperties }): React.ReactElement;
export declare function Menu(props: { items: MenuItem[]; trigger?: React.ReactElement; align?: 'start' | 'end'; defaultOpen?: boolean; defaultOpenSub?: number; className?: string }): React.ReactElement;
export declare function ContextMenu(props: { items: MenuItem[]; children: React.ReactNode; defaultOpenAt?: { x: number; y: number }; defaultOpenSub?: number; className?: string }): React.ReactElement;
export interface CommandItem { label: string; group?: string; icon?: IconName; shortcut?: string; onSelect?: () => void }
export declare function CommandPalette(props: { items: CommandItem[]; placeholder?: string; overlay?: boolean; open?: boolean; autoFocus?: boolean; onClose?: () => void; className?: string }): React.ReactElement | null;
export interface DrawerProps { title: React.ReactNode; description?: React.ReactNode; side?: 'right' | 'left'; footer?: React.ReactNode; overlay?: boolean; /** Keep it rendered and toggle this to animate it in and out. */ open?: boolean; onClose?: (() => void) | null; children?: React.ReactNode; className?: string }
export declare function Drawer(props: DrawerProps): React.ReactElement | null;
/** Large centered screen for editing and details: up to 1200 x 800, full screen on phones. Always modal. */
export interface ModalProps { /** 'lg' is up to 1200 x 800, 'md' 720 wide and as tall as its content. */ size?: 'lg' | 'md'; title: React.ReactNode; description?: React.ReactNode; footer?: React.ReactNode; /** Keep it rendered and toggle this to animate it in and out. */ open?: boolean; /** Called on Esc, the close button and a click on the scrim. */ onClose?: () => void; children?: React.ReactNode; className?: string }
export declare function Modal(props: ModalProps): React.ReactElement | null;

// ---- Charts ----
/** A chart series. Klar charts show at most two: the one that matters and one comparison. */
export interface ChartSeries { key: string; label: string }
export interface ChartProps { /** Rows with a `label` and a number per series key. */ data: Array<{ label: string; [key: string]: string | number }>; /** Defaults to one series with key `value`. Only the first two are drawn. */ series?: ChartSeries[]; height?: number; /** Formats values in the tooltip and the screen reader table. */ format?: (value: number) => string; /** Formats the y-axis ticks. Compact numbers by default (1K, 2.5M). */ formatAxis?: (value: number) => string; 'aria-label'?: string; className?: string }
export declare function LineChart(props: ChartProps & { /** A light wash under the first series. */ area?: boolean }): React.ReactElement;
/** stacked shows up to four series as one column per group, in steps of gray. */
export declare function BarChart(props: ChartProps & { stacked?: boolean }): React.ReactElement;
export interface BarListItem { id?: string; label: string; value: number; icon?: IconName }
export declare function BarList(props: { items: BarListItem[]; format?: (value: number) => string; 'aria-label'?: string; className?: string }): React.ReactElement;
export declare function Sparkline(props: { data: number[]; width?: number; height?: number; label?: string; className?: string }): React.ReactElement | null;

// ---- Dates ----
/** Dates are ISO strings ('2026-11-01') so nothing shifts with time zones. */
/** Events without `time` are all-day. `time` and `end` are 'HH:MM'; without `end` an event lasts an hour. */
export interface CalendarEvent { id?: string; date: string; title: string; time?: string; end?: string; tone?: 'success' | 'warning' | 'danger'; [key: string]: unknown }
export type CalendarView = 'month' | 'week' | 'day';
export interface CalendarProps { size?: 'lg' | 'sm'; value?: string; defaultValue?: string; onChange?: (date: string) => void;
  /** The date in view; the month, week or day around it is shown. */ date?: string; defaultDate?: string; onDateChange?: (date: string) => void;
  view?: CalendarView; defaultView?: CalendarView; onViewChange?: (view: CalendarView) => void; /** Shows a Month/Week/Day switch in the header. */ views?: CalendarView[];
  events?: CalendarEvent[]; onEventClick?: (event: CalendarEvent) => void;
  /** Right-click on a day (and in week and day view, on a half hour, passed as 'HH:MM'). */ dayMenu?: (date: string, time?: string) => MenuItem[];
  /** Right-click on an event. */ eventMenu?: (event: CalendarEvent) => MenuItem[];
  maxEvents?: number; weekStartsOn?: 0 | 1; /** Which month arrows to show. */ nav?: 'both' | 'prev' | 'next' | 'none'; rangeStart?: string; rangeEnd?: string; hoverDate?: string; onDayHover?: (date: string) => void; /** Week and day view open scrolled to this hour. Default 7. */ scrollToHour?: number; /** Clicking a day in week view opens it in day view. Default true. */ dayFromWeek?: boolean; autoFocus?: boolean; className?: string }
export declare function Calendar(props: CalendarProps): React.ReactElement;
export interface DatePickerProps { label?: string; hint?: string; error?: string; placeholder?: string; value?: string; defaultValue?: string; onChange?: (date: string) => void; weekStartsOn?: 0 | 1; name?: string; disabled?: boolean; id?: string; 'aria-label'?: string; className?: string }
export declare function DatePicker(props: DatePickerProps): React.ReactElement;

// ---- Popover and notifications ----
export interface PopoverProps { trigger: React.ReactElement; children: React.ReactNode | ((close: () => void) => React.ReactNode); open?: boolean; defaultOpen?: boolean; onOpenChange?: (open: boolean) => void; align?: 'start' | 'end'; width?: number; /** Used to decide whether it opens upward. */ estimateHeight?: number; 'aria-label'?: string; className?: string }
export declare function Popover(props: PopoverProps): React.ReactElement;
export interface NotificationItem { id: string; title: React.ReactNode; description?: React.ReactNode; time?: string; read?: boolean; icon?: IconName; /** A person's name, shown as an Avatar instead of the icon. */ avatar?: string; [key: string]: unknown }
export declare function NotificationInbox(props: { items: NotificationItem[]; title?: string; onRead?: (id: string) => void; onReadAll?: () => void; onItemClick?: (item: NotificationItem) => void; className?: string }): React.ReactElement;

// ---- Boards, inputs and activity ----
export interface KanbanColumn<T extends { id: string } = { id: string; title?: string }> { id: string; title: React.ReactNode; items: T[]; action?: React.ReactNode }
/** onMove's `toIndex` is the card's place in the target column after it has left its old one. */
export declare function Kanban<T extends { id: string }>(props: { columns: KanbanColumn<T>[]; onMove?: (id: string, toColumn: string, toIndex: number) => void; onCardClick?: (item: T, column: KanbanColumn<T>) => void; renderCard?: (item: T, column: KanbanColumn<T>) => React.ReactNode; emptyText?: string; className?: string }): React.ReactElement;
export interface MultiSelectProps { label?: string; hint?: string; error?: string; placeholder?: string; options: Array<string | { value: string; label: string; description?: string; disabled?: boolean }>; value?: string[]; defaultValue?: string[]; onChange?: (values: string[]) => void; max?: number; name?: string; disabled?: boolean; id?: string; 'aria-label'?: string; className?: string }
export declare function MultiSelect(props: MultiSelectProps): React.ReactElement;
export interface FileItem { id?: string; name: string; size?: number; /** 0-1 while uploading; 1 or left out when done. */ progress?: number; error?: string }
export interface FileDropProps { label?: string; hint?: string; /** Like the accept attribute: '.pdf,image/*'. */ accept?: string; multiple?: boolean; /** Bytes. */ maxSize?: number; onFiles?: (files: File[]) => void; files?: FileItem[]; onRemove?: (id: string) => void; name?: string; disabled?: boolean; className?: string }
export declare function FileDrop(props: FileDropProps): React.ReactElement;
export interface TimelineItem { id?: string; title: React.ReactNode; description?: React.ReactNode; time?: string; icon?: IconName; avatar?: string }
export declare function Timeline(props: { items: TimelineItem[]; 'aria-label'?: string; className?: string }): React.ReactElement;
export interface StepperProps { steps: Array<{ id?: string; label: string; description?: string }>; /** Index of the current step. */ current: number; /** Lets people go back to a completed step. */ onStepClick?: (index: number) => void; 'aria-label'?: string; className?: string }
export declare function Stepper(props: StepperProps): React.ReactElement;

// ---- Fields ----
interface FieldBase { label?: string; hint?: string; error?: string; id?: string; name?: string; disabled?: boolean; 'aria-label'?: string; className?: string }
export interface NumberFieldProps extends FieldBase { value?: number | null; defaultValue?: number | null; onChange?: (value: number | null) => void; min?: number; max?: number; step?: number; decimals?: number; /** After the number, e.g. 'h' or '%'. */ unit?: string; /** Before the number, e.g. '$'. */ prefix?: string; /** Steppers for - and +. Default true. */ stepper?: boolean; locale?: string; placeholder?: string }
export declare function NumberField(props: NumberFieldProps): React.ReactElement;
/** An amount: two decimals, written the local way. DKK is written 1.234,50 kr. */
export declare function CurrencyField(props: NumberFieldProps & { currency?: 'DKK' | 'SEK' | 'NOK' | 'EUR' | 'USD' | 'GBP' | string }): React.ReactElement;
export interface CodeInputProps extends FieldBase { length?: number; value?: string; defaultValue?: string; onChange?: (code: string) => void; /** Called when every box is filled. */ onComplete?: (code: string) => void; autoFocus?: boolean }
export declare function CodeInput(props: CodeInputProps): React.ReactElement;
export interface PasswordFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue'> { label?: string; hint?: string; error?: string; value?: string; defaultValue?: string; /** Shows a four-step strength meter: use it where a new password is chosen. */ strength?: boolean }
export declare function PasswordField(props: PasswordFieldProps): React.ReactElement;
export interface DateRange { start: string; end: string }
export interface DateRangePickerProps extends FieldBase { value?: DateRange | null; defaultValue?: DateRange | null; onChange?: (range: DateRange) => void; presets?: Array<{ label: string; start: string; end: string }>; placeholder?: string; weekStartsOn?: 0 | 1 }
export declare function DateRangePicker(props: DateRangePickerProps): React.ReactElement;
export interface TimePickerProps extends FieldBase { /** 24-hour 'HH:MM'. */ value?: string | null; defaultValue?: string | null; onChange?: (time: string | null) => void; /** Minutes between suggestions. Default 15. */ step?: number; min?: string; max?: string; placeholder?: string }
export declare function TimePicker(props: TimePickerProps): React.ReactElement;
export interface ComboboxOption { value: string; label: string; description?: string; avatar?: string; icon?: IconName }
export interface ComboboxProps extends FieldBase { value?: ComboboxOption | null; defaultValue?: ComboboxOption | null; onChange?: (option: ComboboxOption | null) => void; /** Called as people type (after debounce). */ loadOptions: (query: string) => ComboboxOption[] | Promise<ComboboxOption[]>; defaultOptions?: ComboboxOption[]; debounce?: number; minChars?: number; placeholder?: string }
export declare function Combobox(props: ComboboxProps): React.ReactElement;

// ---- More charts ----
export declare function DonutChart(props: { data: Array<{ label: string; value: number }>; format?: (value: number) => string; centerLabel?: string; size?: number; thickness?: number; 'aria-label'?: string; className?: string }): React.ReactElement;
/** One cell per day: data maps ISO dates to numbers. */
export declare function Heatmap(props: { data: Record<string, number>; weeks?: number; end?: string; weekStartsOn?: 0 | 1; format?: (value: number) => string; 'aria-label'?: string; className?: string }): React.ReactElement;

// ---- Text ----
/** Safe markdown: bold, italic, code, links, lists, quotes and @mentions of known people. Never raw HTML. */
export declare function Markdown(props: { children?: string; text?: string; people?: Array<string | { name: string }>; className?: string }): React.ReactElement;
export interface MarkdownEditorProps { label?: string; hint?: string; error?: string; value?: string; defaultValue?: string; onChange?: (value: string) => void; placeholder?: string; rows?: number; maxLength?: number; /** People who can be @mentioned. */ people?: Array<string | { name: string }>; id?: string; className?: string }
export declare function MarkdownEditor(props: MarkdownEditorProps): React.ReactElement;
export interface Comment { id: string; author: string; time?: string; body: string }
export declare function CommentThread(props: { comments: Comment[]; people?: Array<string | { name: string }>; currentUser?: string; onSubmit?: (body: string, mentioned: string[]) => void; placeholder?: string; className?: string }): React.ReactElement;

// ---- Planning ----
export interface GanttItem { id?: string; label: string; start: string; end?: string; /** 0-1. */ progress?: number; group?: string; milestone?: boolean; avatar?: string; [key: string]: unknown }
export declare function Gantt(props: { items: GanttItem[]; from?: string; to?: string; scale?: 'day' | 'week'; labelWidth?: number; maxHeight?: number; onItemClick?: (item: GanttItem) => void; 'aria-label'?: string; className?: string }): React.ReactElement;

declare global { interface Window { Klar: { Button: typeof Button; TextField: typeof TextField; SearchField: typeof SearchField; Checkbox: typeof Checkbox; Switch: typeof Switch; SegmentedControl: typeof SegmentedControl; List: typeof List; ListRow: typeof ListRow; Card: typeof Card; Badge: typeof Badge; ProgressBar: typeof ProgressBar; Topbar: typeof Topbar; Sidebar: typeof Sidebar; NavList: typeof NavList; SettingsSection: typeof SettingsSection; Dialog: typeof Dialog; Icon: typeof Icon; Kbd: typeof Kbd; Textarea: typeof Textarea; Select: typeof Select; Dropdown: typeof Dropdown; RadioGroup: typeof RadioGroup; Slider: typeof Slider; Avatar: typeof Avatar; AvatarGroup: typeof AvatarGroup; Tooltip: typeof Tooltip; Tabs: typeof Tabs; Stat: typeof Stat; Table: typeof Table; EmptyState: typeof EmptyState; Skeleton: typeof Skeleton; Spinner: typeof Spinner; Pagination: typeof Pagination; Accordion: typeof Accordion; Callout: typeof Callout; Toast: typeof Toast; Toaster: typeof Toaster; MenuPanel: typeof MenuPanel; Menu: typeof Menu; ContextMenu: typeof ContextMenu; CommandPalette: typeof CommandPalette; Drawer: typeof Drawer; Modal: typeof Modal; LineChart: typeof LineChart; BarChart: typeof BarChart; BarList: typeof BarList; Sparkline: typeof Sparkline; Calendar: typeof Calendar; DatePicker: typeof DatePicker; Popover: typeof Popover; NotificationInbox: typeof NotificationInbox; Kanban: typeof Kanban; MultiSelect: typeof MultiSelect; FileDrop: typeof FileDrop; Timeline: typeof Timeline; Stepper: typeof Stepper; NumberField: typeof NumberField; CurrencyField: typeof CurrencyField; CodeInput: typeof CodeInput; PasswordField: typeof PasswordField; DateRangePicker: typeof DateRangePicker; TimePicker: typeof TimePicker; Combobox: typeof Combobox; DonutChart: typeof DonutChart; Heatmap: typeof Heatmap; Markdown: typeof Markdown; MarkdownEditor: typeof MarkdownEditor; CommentThread: typeof CommentThread; Gantt: typeof Gantt; toast: ToastFn; setStrings: typeof setStrings; setTheme: typeof setTheme; locales: typeof locales } } }
