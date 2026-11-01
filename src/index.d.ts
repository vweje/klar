import type * as React from 'react';

/** Built-in component texts (aria labels, placeholders). English by default. */
export interface KlarStrings { search: string; selected: string; breadcrumb: string; mainNavigation: string; loading: string; pagination: string; previous: string; next: string; close: string; commands: string; commandPlaceholder: string; searchCommands: string; noResults: string; navigate: string; select: string }
/** Bundled translations. */
export declare const locales: { en: KlarStrings; da: KlarStrings };
/** Switch built-in texts globally: setStrings('da'), or pass your own partial set. Call once before rendering. */
export declare function setStrings(next: 'en' | 'da' | Partial<KlarStrings>): KlarStrings;
/** Sets data-theme on <html> with one crossfade (View Transitions where supported). 'system' follows the OS setting. */
export declare function setTheme(theme: 'light' | 'dark' | 'system'): void;

export type IconName = 'chevron-right' | 'chevron-down' | 'arrow-right' | 'search' | 'check' | 'xmark' | 'plus' | 'more' | 'home' | 'inbox' | 'folder' | 'calendar' | 'chart' | 'person' | 'settings' | 'bell' | 'lock' | 'info';

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
export interface StatProps { label: React.ReactNode; value: React.ReactNode; delta?: string; trend?: 'up' | 'down' | 'flat'; caption?: React.ReactNode; icon?: IconName; className?: string }
export declare function Stat(props: StatProps): React.ReactElement;
export interface TableColumn<T = any> { key: string; label: React.ReactNode; align?: 'left' | 'right' | 'center'; width?: number | string; strong?: boolean; mono?: boolean; render?: (row: T) => React.ReactNode }
export interface TableProps<T = any> { columns: TableColumn<T>[]; rows: T[]; onRowClick?: (row: T) => void; className?: string }
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
export declare function MenuPanel(props: { items: MenuItem[]; onClose?: () => void; defaultOpenSub?: number; className?: string }): React.ReactElement;
export declare function Menu(props: { items: MenuItem[]; trigger?: React.ReactElement; align?: 'start' | 'end'; defaultOpen?: boolean; defaultOpenSub?: number; className?: string }): React.ReactElement;
export declare function ContextMenu(props: { items: MenuItem[]; children: React.ReactNode; defaultOpenAt?: { x: number; y: number }; defaultOpenSub?: number; className?: string }): React.ReactElement;
export interface CommandItem { label: string; group?: string; icon?: IconName; shortcut?: string; onSelect?: () => void }
export declare function CommandPalette(props: { items: CommandItem[]; placeholder?: string; overlay?: boolean; open?: boolean; autoFocus?: boolean; onClose?: () => void; className?: string }): React.ReactElement | null;
export interface DrawerProps { title: React.ReactNode; description?: React.ReactNode; side?: 'right' | 'left'; footer?: React.ReactNode; overlay?: boolean; /** Keep it rendered and toggle this to animate it in and out. */ open?: boolean; onClose?: (() => void) | null; children?: React.ReactNode; className?: string }
export declare function Drawer(props: DrawerProps): React.ReactElement | null;
/** Large centered screen for editing and details: up to 1200 x 800, full screen on phones. Always modal. */
export interface ModalProps { title: React.ReactNode; description?: React.ReactNode; footer?: React.ReactNode; /** Keep it rendered and toggle this to animate it in and out. */ open?: boolean; /** Called on Esc, the close button and a click on the scrim. */ onClose?: () => void; children?: React.ReactNode; className?: string }
export declare function Modal(props: ModalProps): React.ReactElement | null;

declare global { interface Window { Klar: { Button: typeof Button; TextField: typeof TextField; SearchField: typeof SearchField; Checkbox: typeof Checkbox; Switch: typeof Switch; SegmentedControl: typeof SegmentedControl; List: typeof List; ListRow: typeof ListRow; Card: typeof Card; Badge: typeof Badge; ProgressBar: typeof ProgressBar; Topbar: typeof Topbar; Sidebar: typeof Sidebar; Dialog: typeof Dialog; Icon: typeof Icon; Kbd: typeof Kbd; Textarea: typeof Textarea; Select: typeof Select; RadioGroup: typeof RadioGroup; Slider: typeof Slider; Avatar: typeof Avatar; AvatarGroup: typeof AvatarGroup; Tooltip: typeof Tooltip; Tabs: typeof Tabs; Stat: typeof Stat; Table: typeof Table; EmptyState: typeof EmptyState; Skeleton: typeof Skeleton; Spinner: typeof Spinner; Pagination: typeof Pagination; Accordion: typeof Accordion; Callout: typeof Callout; Toast: typeof Toast; Toaster: typeof Toaster; MenuPanel: typeof MenuPanel; Menu: typeof Menu; ContextMenu: typeof ContextMenu; CommandPalette: typeof CommandPalette; Drawer: typeof Drawer; Modal: typeof Modal; toast: ToastFn; setStrings: typeof setStrings; setTheme: typeof setTheme; locales: typeof locales } } }
