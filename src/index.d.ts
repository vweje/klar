import type * as React from 'react';

/** Built-in component texts (aria labels, placeholders). English by default. */
export interface KlarStrings { search: string; selected: string; breadcrumb: string; mainNavigation: string; loading: string; pagination: string; previous: string; next: string; close: string; commands: string; commandPlaceholder: string; searchCommands: string; noResults: string; navigate: string; select: string; /** BCP 47 locale for dates and numbers, e.g. 'en-US' or 'da-DK'. */ locale: string; today: string; previousMonth: string; nextMonth: string; more: string; chooseDate: string }
/** Bundled translations. */
export declare const locales: { en: KlarStrings; da: KlarStrings };
/** Switch built-in texts globally: setStrings('da'), or pass your own partial set. Call once before rendering. */
export declare function setStrings(next: 'en' | 'da' | Partial<KlarStrings>): KlarStrings;
/** Sets data-theme on <html> with one crossfade (View Transitions where supported). 'system' follows the OS setting. */
export declare function setTheme(theme: 'light' | 'dark' | 'system'): void;

export type IconName = 'chevron-right' | 'chevron-down' | 'arrow-right' | 'search' | 'check' | 'xmark' | 'plus' | 'more' | 'home' | 'inbox' | 'folder' | 'calendar' | 'chart' | 'person' | 'settings' | 'bell' | 'lock' | 'info' | 'circle-check' | 'alert' | 'chevron-left' | 'trend-up' | 'trend-down' | 'edit' | 'copy' | 'trash' | 'upload' | 'filter' | 'logout';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'ghost' | 'danger'; size?: 'sm' | 'md' | 'lg'; icon?: IconName; iconRight?: IconName; shortcut?: string; block?: boolean }
export declare function Button(props: ButtonProps): React.ReactElement;

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> { label?: string; hint?: string; error?: string }
export declare function TextField(props: TextFieldProps): React.ReactElement;

export interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> { placeholder?: string; shortcut?: string | false }
export declare function SearchField(props: SearchFieldProps): React.ReactElement;

export interface CheckboxProps { checked?: boolean; defaultChecked?: boolean; onChange?: (checked: boolean) => void; label?: React.ReactNode; description?: React.ReactNode; disabled?: boolean; 'aria-label'?: string; className?: string }
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
export interface TableColumn<T = any> { key: string; label: React.ReactNode; align?: 'left' | 'right' | 'center'; width?: number | string; strong?: boolean; mono?: boolean; render?: (row: T) => React.ReactNode }
export interface TableProps<T = any> { columns: TableColumn<T>[]; rows: T[]; onRowClick?: (row: T) => void; /** Right-click anywhere on a row opens these items. Use the same actions as the row's ⋯ menu. */ rowMenu?: (row: T) => MenuItem[]; className?: string }
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
export interface ModalProps { title: React.ReactNode; description?: React.ReactNode; footer?: React.ReactNode; /** Keep it rendered and toggle this to animate it in and out. */ open?: boolean; /** Called on Esc, the close button and a click on the scrim. */ onClose?: () => void; children?: React.ReactNode; className?: string }
export declare function Modal(props: ModalProps): React.ReactElement | null;

// ---- Charts ----
/** A chart series. Klar charts show at most two: the one that matters and one comparison. */
export interface ChartSeries { key: string; label: string }
export interface ChartProps { /** Rows with a `label` and a number per series key. */ data: Array<{ label: string; [key: string]: string | number }>; /** Defaults to one series with key `value`. Only the first two are drawn. */ series?: ChartSeries[]; height?: number; /** Formats values in the tooltip and the screen reader table. */ format?: (value: number) => string; /** Formats the y-axis ticks. Compact numbers by default (1K, 2.5M). */ formatAxis?: (value: number) => string; 'aria-label'?: string; className?: string }
export declare function LineChart(props: ChartProps & { /** A light wash under the first series. */ area?: boolean }): React.ReactElement;
export declare function BarChart(props: ChartProps): React.ReactElement;
export interface BarListItem { id?: string; label: string; value: number; icon?: IconName }
export declare function BarList(props: { items: BarListItem[]; format?: (value: number) => string; 'aria-label'?: string; className?: string }): React.ReactElement;
export declare function Sparkline(props: { data: number[]; width?: number; height?: number; label?: string; className?: string }): React.ReactElement | null;

// ---- Dates ----
/** Dates are ISO strings ('2026-11-01') so nothing shifts with time zones. */
export interface CalendarEvent { id?: string; date: string; title: string; time?: string; tone?: 'success' | 'warning' | 'danger' }
export interface CalendarProps { size?: 'lg' | 'sm'; value?: string; defaultValue?: string; onChange?: (date: string) => void; month?: string; defaultMonth?: string; onMonthChange?: (month: string) => void; events?: CalendarEvent[]; onEventClick?: (event: CalendarEvent) => void; maxEvents?: number; weekStartsOn?: 0 | 1; autoFocus?: boolean; className?: string }
export declare function Calendar(props: CalendarProps): React.ReactElement;
export interface DatePickerProps { label?: string; hint?: string; error?: string; placeholder?: string; value?: string; defaultValue?: string; onChange?: (date: string) => void; weekStartsOn?: 0 | 1; name?: string; disabled?: boolean; id?: string; 'aria-label'?: string; className?: string }
export declare function DatePicker(props: DatePickerProps): React.ReactElement;

declare global { interface Window { Klar: { Button: typeof Button; TextField: typeof TextField; SearchField: typeof SearchField; Checkbox: typeof Checkbox; Switch: typeof Switch; SegmentedControl: typeof SegmentedControl; List: typeof List; ListRow: typeof ListRow; Card: typeof Card; Badge: typeof Badge; ProgressBar: typeof ProgressBar; Topbar: typeof Topbar; Sidebar: typeof Sidebar; NavList: typeof NavList; SettingsSection: typeof SettingsSection; Dialog: typeof Dialog; Icon: typeof Icon; Kbd: typeof Kbd; Textarea: typeof Textarea; Select: typeof Select; Dropdown: typeof Dropdown; RadioGroup: typeof RadioGroup; Slider: typeof Slider; Avatar: typeof Avatar; AvatarGroup: typeof AvatarGroup; Tooltip: typeof Tooltip; Tabs: typeof Tabs; Stat: typeof Stat; Table: typeof Table; EmptyState: typeof EmptyState; Skeleton: typeof Skeleton; Spinner: typeof Spinner; Pagination: typeof Pagination; Accordion: typeof Accordion; Callout: typeof Callout; Toast: typeof Toast; Toaster: typeof Toaster; MenuPanel: typeof MenuPanel; Menu: typeof Menu; ContextMenu: typeof ContextMenu; CommandPalette: typeof CommandPalette; Drawer: typeof Drawer; Modal: typeof Modal; LineChart: typeof LineChart; BarChart: typeof BarChart; BarList: typeof BarList; Sparkline: typeof Sparkline; Calendar: typeof Calendar; DatePicker: typeof DatePicker; toast: ToastFn; setStrings: typeof setStrings; setTheme: typeof setTheme; locales: typeof locales } } }
