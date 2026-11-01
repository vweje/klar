/* Klar - React components (ESM source). Build with: npm run build */
import * as R from 'react';
var h = R.createElement, useState = R.useState;
var useIsoLayout = typeof window !== 'undefined' ? R.useLayoutEffect : R.useEffect;

/* ---------- Built-in texts (i18n) ---------- */
var en = {
  search: 'Search', selected: 'Selected', breadcrumb: 'Breadcrumb', mainNavigation: 'Main navigation',
  loading: 'Loading', pagination: 'Pagination', previous: 'Previous', next: 'Next', close: 'Close',
  commands: 'Commands', commandPlaceholder: 'Type a command or search…', searchCommands: 'Search commands',
  noResults: 'No results for', navigate: 'navigate', select: 'select',
  locale: 'en-US', today: 'Today', previousMonth: 'Previous month', nextMonth: 'Next month', more: 'more', chooseDate: 'Choose a date',
  previousWeek: 'Previous week', nextWeek: 'Next week', previousDay: 'Previous day', nextDay: 'Next day', view: 'View', month: 'Month', week: 'Week', day: 'Day', allDay: 'All day',
  notifications: 'Notifications', markAllRead: 'Mark all as read', all: 'All', unread: 'Unread', caughtUp: 'You are all caught up.',
  dropFiles: 'Drop files here or', browse: 'browse', remove: 'Remove', tooLarge: 'is larger than', wrongType: 'is not an allowed file type', uploaded: 'Uploaded',
  moveHint: 'Press Alt and an arrow key to move the card. On touch, press and hold to pick it up.', empty: 'Nothing here yet.', completed: 'Completed',
  bulkActions: 'Bulk actions', clearSelection: 'Clear selection', columns: 'Columns', selectAll: 'Select all rows', selectRow: 'Select row',
  showPassword: 'Show password', hidePassword: 'Hide password', passwordStrength: 'Password strength', weak: 'Weak', fair: 'Fair', good: 'Good', strong: 'Strong',
  digit: 'Digit', of: 'of', increase: 'Increase', decrease: 'Decrease',
  chooseRange: 'Choose a period', last7: 'Last 7 days', last30: 'Last 30 days', thisMonth: 'This month', lastMonth: 'Last month', thisYear: 'This year', chooseTime: 'Choose a time',
  searching: 'Searching…', loadFailed: 'Could not load results.', tryAgain: 'Try again', typeToSearch: 'Type to search', clear: 'Clear',
  other: 'Other', total: 'Total', less: 'Less', moreLabel: 'More',
  write: 'Write', preview: 'Preview', bold: 'Bold', italic: 'Italic', list: 'List', link: 'Link', code: 'Code', nothingToPreview: 'Nothing to preview.',
  comment: 'Comment', writeComment: 'Write a comment. Type @ to mention someone.', toSend: 'to send', noComments: 'No comments yet.'
};
var da = {
  search: 'Søg', selected: 'Valgt', breadcrumb: 'Brødkrumme', mainNavigation: 'Hovedmenu',
  loading: 'Indlæser', pagination: 'Sider', previous: 'Forrige', next: 'Næste', close: 'Luk',
  commands: 'Kommandoer', commandPlaceholder: 'Skriv en kommando eller søg…', searchCommands: 'Søg kommandoer',
  noResults: 'Ingen resultater for', navigate: 'naviger', select: 'vælg',
  locale: 'da-DK', today: 'I dag', previousMonth: 'Forrige måned', nextMonth: 'Næste måned', more: 'flere', chooseDate: 'Vælg en dato',
  previousWeek: 'Forrige uge', nextWeek: 'Næste uge', previousDay: 'Forrige dag', nextDay: 'Næste dag', view: 'Visning', month: 'Måned', week: 'Uge', day: 'Dag', allDay: 'Hele dagen',
  notifications: 'Notifikationer', markAllRead: 'Markér alle som læst', all: 'Alle', unread: 'Ulæste', caughtUp: 'Du er helt opdateret.',
  dropFiles: 'Slip filer her eller', browse: 'vælg dem', remove: 'Fjern', tooLarge: 'er større end', wrongType: 'er ikke en tilladt filtype', uploaded: 'Uploadet',
  moveHint: 'Tryk Alt og en piletast for at flytte kortet. På touch holder du fingeren på kortet for at tage det op.', empty: 'Intet her endnu.', completed: 'Færdig',
  bulkActions: 'Massehandlinger', clearSelection: 'Ryd valg', columns: 'Kolonner', selectAll: 'Vælg alle rækker', selectRow: 'Vælg række',
  showPassword: 'Vis adgangskode', hidePassword: 'Skjul adgangskode', passwordStrength: 'Adgangskodens styrke', weak: 'Svag', fair: 'Okay', good: 'God', strong: 'Stærk',
  digit: 'Ciffer', of: 'af', increase: 'Øg', decrease: 'Sænk',
  chooseRange: 'Vælg en periode', last7: 'Seneste 7 dage', last30: 'Seneste 30 dage', thisMonth: 'Denne måned', lastMonth: 'Sidste måned', thisYear: 'I år', chooseTime: 'Vælg et tidspunkt',
  searching: 'Søger…', loadFailed: 'Kunne ikke hente resultater.', tryAgain: 'Prøv igen', typeToSearch: 'Skriv for at søge', clear: 'Ryd',
  other: 'Andet', total: 'I alt', less: 'Mindre', moreLabel: 'Mere',
  write: 'Skriv', preview: 'Forhåndsvis', bold: 'Fed', italic: 'Kursiv', list: 'Liste', link: 'Link', code: 'Kode', nothingToPreview: 'Intet at forhåndsvise.',
  comment: 'Kommentér', writeComment: 'Skriv en kommentar. Skriv @ for at nævne nogen.', toSend: 'for at sende', noComments: 'Ingen kommentarer endnu.'
};
var locales = { en: en, da: da };
var strings = Object.assign({}, en);
function setStrings(next) { Object.assign(strings, typeof next === 'string' ? locales[next] : next); return strings; }
function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
function omit(o, keys) { var r = {}; for (var k in o) { if (keys.indexOf(k) < 0) r[k] = o[k]; } return r; }
function useControlled(value, initial) {
  var s = useState(initial), c = value !== undefined;
  return [c ? value : s[0], function (v) { if (!c) s[1](v); }];
}

/* ---------- Motion ---------- */
function reducedMotion() { return typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
// Reads a duration token so the JS waits exactly as long as the CSS animation runs.
function motionMs(token) {
  if (reducedMotion()) return 0;
  var v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--' + token));
  return isNaN(v) ? 120 : v;
}
// Keeps something mounted while it animates out. `leaving` is true during the exit.
function usePresence(open, token) {
  var st = useState(open), mounted = st[0];
  R.useEffect(function () {
    if (open) { st[1](true); return; }
    var t = setTimeout(function () { st[1](false); }, motionMs(token));
    return function () { clearTimeout(t); };
  }, [open]);
  return { show: open || mounted, leaving: !open && mounted };
}
function useEscape(active, onEscape) {
  R.useEffect(function () {
    if (!active) return;
    function key(e) { if (e.key === 'Escape') onEscape(); }
    document.addEventListener('keydown', key);
    return function () { document.removeEventListener('keydown', key); };
  });
}
/* Focus: an open overlay takes focus, keeps Tab inside, and gives focus back when it closes. */
var FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
var trapStack = [];
function focusablesIn(el) {
  return Array.prototype.filter.call(el.querySelectorAll(FOCUSABLE), function (n) { return n.offsetWidth || n.offsetHeight || n.getClientRects().length; });
}
function useFocusTrap(active, ref) {
  // Remember what had focus before the overlay renders, since autoFocus inside it moves focus first.
  var before = R.useRef(null), was = R.useRef(false);
  if (active && !was.current && typeof document !== 'undefined') before.current = document.activeElement;
  was.current = active;
  useIsoLayout(function () {
    var el = ref.current;
    if (!active || !el) return;
    var token = {};
    trapStack.push(token);
    if (!el.contains(document.activeElement)) {
      // A form field first, so people can start typing; otherwise the first button.
      var first = el.querySelector('input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled])') || focusablesIn(el)[0];
      if (!first) { el.setAttribute('tabindex', '-1'); first = el; }
      first.focus({ preventScroll: true });
    }
    function key(e) {
      if (e.key !== 'Tab' || trapStack[trapStack.length - 1] !== token) return;
      var list = focusablesIn(el);
      if (!list.length) { e.preventDefault(); return; }
      var a = list[0], z = list[list.length - 1], cur = document.activeElement;
      if (e.shiftKey && (cur === a || !el.contains(cur))) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && (cur === z || !el.contains(cur))) { e.preventDefault(); a.focus(); }
    }
    document.addEventListener('keydown', key);
    var back = before.current;
    return function () {
      document.removeEventListener('keydown', key);
      trapStack = trapStack.filter(function (t) { return t !== token; });
      // After React's commit, which puts focus back where it was before the commit and would undo this.
      // Only when focus is still in the closing overlay, so a deliberate move elsewhere is kept.
      Promise.resolve().then(function () {
        var cur = document.activeElement;
        if (back && back.focus && document.contains(back) && (!cur || cur === document.body || el.contains(cur))) back.focus({ preventScroll: true });
      });
    };
  }, [active]);
}
function onScrimDown(onClose) {
  return function (e) { if (e.target === e.currentTarget && onClose) onClose(); };
}

/* Switches theme with a single crossfade (View Transitions where supported) and no per-element color transitions. */
function setTheme(theme) {
  var root = document.documentElement;
  function apply() { if (theme === 'system') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', theme); }
  function done() { root.classList.remove('k-theme-switching'); }
  root.classList.add('k-theme-switching');
  if (document.startViewTransition && !reducedMotion()) {
    document.startViewTransition(apply).finished.then(done, done);
    return;
  }
  apply();
  getComputedStyle(document.body).opacity; // flush styles so the change lands before transitions come back
  setTimeout(done, 1);
}

var PATHS = {
  'chevron-right': 'M9 6l6 6-6 6',
  'chevron-down': 'M6 9l6 6 6-6',
  'arrow-right': 'M5 12h14M13 6l6 6-6 6',
  'search': 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4',
  'check': 'M5 12.5l4.5 4.5L19 7.5',
  'xmark': 'M6 6l12 12M18 6L6 18',
  'plus': 'M12 5v14M5 12h14',
  'more': 'M5.5 12h.01M12 12h.01M18.5 12h.01',
  'home': 'M4 10.5L12 4l8 6.5V20H4z',
  'inbox': 'M4 13l2.5-8h11L20 13v6H4zM4 13h5l1 2h4l1-2h5',
  'folder': 'M3.5 6.5h6l2 2h9v10h-17z',
  'calendar': 'M4 6h16v14H4zM4 10h16M8 3.5v4M16 3.5v4',
  'chart': 'M5 20V11M12 20V4M19 20v-6',
  'person': 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20.5a7.5 7.5 0 0 1 15 0',
  'settings': 'M4 7h9M17 7h3M15 5v4M4 17h3M11 17h9M9 15v4',
  'bell': 'M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15zM10 20.5a2 2 0 0 0 4 0',
  'lock': 'M5 11h14v9H5zM8 11V8a4 4 0 0 1 8 0v3',
  'info': 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01',
  'circle-check': 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.5 12.5l2.5 2.5 4.5-5',
  'alert': 'M12 4l9 16H3zM12 10v4M12 17h.01',
  'chevron-left': 'M15 6l-6 6 6 6',
  'trend-up': 'M4 16l6-6 4 4 6-6M15 8h5v5',
  'trend-down': 'M4 8l6 6 4-4 6 6M15 16h5v-5',
  'edit': 'M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4',
  'copy': 'M9 9h11v11H9zM5 15V4h11',
  'trash': 'M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13',
  'upload': 'M12 16V4M7 9l5-5 5 5M4 20h16',
  'filter': 'M4 6h16M7 12h10M10 18h4',
  'logout': 'M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10',
  'file': 'M7 3h7l5 5v13H7zM14 3v5h5',
  'chevron-up': 'M6 15l6-6 6 6',
  'minus': 'M6 12h12',
  'eye': 'M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  'eye-off': 'M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6 0 9.5 7 9.5 7a16 16 0 0 1-3 3.9M6.6 6.6C4 8.3 2.5 12 2.5 12S6 19 12 19c1.5 0 2.9-.4 4.1-1M9.9 9.9a3 3 0 0 0 4.2 4.2',
  'clock': 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  'message': 'M4 5h16v11H9l-5 4z',
  'bold': 'M7 5h6a3.5 3.5 0 0 1 0 7H7zM7 12h7a3.5 3.5 0 0 1 0 7H7z',
  'italic': 'M11 5h6M7 19h6M15 5l-6 14',
  'list': 'M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01',
  'link': 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1',
  'code': 'M8 8l-4 4 4 4M16 8l4 4-4 4',
  'send': 'M21 3L10 14M21 3l-7 18-4-7-7-4z'
};

function Icon(p) {
  var size = p.size || 16;
  return h('svg', {
    className: cx('k-icon', p.className), width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor', strokeWidth: p.weight || 2,
    strokeLinecap: 'round', strokeLinejoin: 'round',
    role: p.label ? 'img' : undefined, 'aria-label': p.label, 'aria-hidden': p.label ? undefined : true
  }, h('path', { d: PATHS[p.name] || '' }));
}
Icon.names = Object.keys(PATHS);

function Kbd(p) { return h('kbd', { className: 'k-kbd' }, p.children); }

function Button(p) {
  var variant = p.variant || 'primary', size = p.size || 'md';
  var rest = omit(p, ['variant', 'size', 'icon', 'iconRight', 'shortcut', 'block', 'className', 'children']);
  var is = size === 'lg' ? 16 : 14;
  return h('button', Object.assign({ type: 'button' }, rest, {
    className: cx('k-btn', 'k-btn--' + variant, 'k-btn--' + size, p.block && 'k-btn--block', !p.children && 'k-btn--icon-only', p.className)
  }),
    p.icon ? h(Icon, { name: p.icon, size: is, weight: 2.25 }) : null,
    p.children != null ? h('span', null, p.children) : null,
    p.iconRight ? h(Icon, { name: p.iconRight, size: is, weight: 2.25 }) : null,
    p.shortcut ? h('span', { className: 'k-btn__kbd' }, p.shortcut) : null);
}

function TextField(p) {
  var auto = R.useId(), id = p.id || auto, note = p.error || p.hint;
  var rest = omit(p, ['label', 'hint', 'error', 'className', 'id']);
  return h('div', { className: cx('k-field', p.error && 'k-field--error', p.className) },
    p.label ? h('label', { className: 'k-field__label', htmlFor: id }, p.label) : null,
    h('input', Object.assign({ id: id, className: 'k-input', 'aria-invalid': p.error ? true : undefined, 'aria-describedby': note ? id + '-note' : undefined }, rest)),
    note ? h('p', { id: id + '-note', className: 'k-field__note' }, p.error ? h(Icon, { name: 'info', size: 13 }) : null, note) : null);
}

function SearchField(p) {
  var rest = omit(p, ['className', 'placeholder', 'shortcut']);
  var ph = p.placeholder || strings.search;
  return h('label', { className: cx('k-search', p.className) },
    h(Icon, { name: 'search', size: 15 }),
    h('input', Object.assign({ type: 'search', className: 'k-search__input', placeholder: ph, 'aria-label': ph }, rest)),
    p.shortcut === false ? null : h(Kbd, null, p.shortcut || '⌘K'));
}

function Checkbox(p) {
  var st = useControlled(p.checked, !!p.defaultChecked), on = st[0];
  var id = R.useId();
  function toggle() { if (p.disabled) return; st[1](!on); if (p.onChange) p.onChange(!on); }
  return h('div', { className: cx('k-check', p.disabled && 'k-check--disabled', p.className) },
    h('button', { type: 'button', role: 'checkbox', 'aria-checked': p.indeterminate && !on ? 'mixed' : on, disabled: p.disabled, 'aria-labelledby': p.label ? id : undefined, 'aria-label': p.label ? undefined : p['aria-label'], className: cx('k-check__box', (on || p.indeterminate) && 'k-check__box--on'), onClick: toggle },
      on ? h(Icon, { name: 'check', size: 12, weight: 3 }) : p.indeterminate ? h(Icon, { name: 'minus', size: 12, weight: 3 }) : null),
    p.label ? h('div', { className: 'k-check__text', onClick: toggle },
      h('span', { id: id, className: 'k-check__label' }, p.label),
      p.description ? h('span', { className: 'k-check__desc' }, p.description) : null) : null);
}

function Switch(p) {
  var st = useControlled(p.checked, !!p.defaultChecked), on = st[0];
  function toggle() { if (p.disabled) return; st[1](!on); if (p.onChange) p.onChange(!on); }
  var btn = h('button', {
    type: 'button', role: 'switch', 'aria-checked': on, disabled: p.disabled,
    'aria-label': p.label ? undefined : p['aria-label'],
    className: cx('k-switch', on && 'k-switch--on'), onClick: toggle
  }, h('span', { className: 'k-switch__knob' }));
  return p.label ? h('label', { className: cx('k-switch-row', p.className) }, h('span', null, p.label), btn) : btn;
}

function SegmentedControl(p) {
  var opts = (p.options || []).map(function (o) { return typeof o === 'string' ? { value: o, label: o } : o; });
  var st = useControlled(p.value, p.defaultValue !== undefined ? p.defaultValue : (opts[0] && opts[0].value)), v = st[0];
  return h('div', { className: cx('k-seg', p.block && 'k-seg--block', p.className), role: 'radiogroup', 'aria-label': p['aria-label'] },
    opts.map(function (o) {
      var on = o.value === v;
      return h('button', {
        key: o.value, type: 'button', role: 'radio', 'aria-checked': on,
        className: cx('k-seg__item', on && 'k-seg__item--on'),
        onClick: function () { st[1](o.value); if (p.onChange) p.onChange(o.value); }
      }, o.icon ? h(Icon, { name: o.icon, size: 14 }) : null, o.label);
    }));
}

function List(p) {
  return h('section', { className: cx('k-list', p.className) },
    (p.header || p.action) ? h('div', { className: 'k-list__head' },
      p.header ? h('h3', { className: 'k-list__header' }, p.header) : h('span'), p.action || null) : null,
    h('div', { className: 'k-list__body' }, p.children),
    p.footer ? h('p', { className: 'k-list__footer' }, p.footer) : null);
}

function ListRow(p) {
  var acc = p.accessory, accNode = null;
  if (acc === 'chevron') accNode = h(Icon, { name: 'chevron-right', size: 16, className: 'k-row__chev' });
  else if (acc === 'check') accNode = h(Icon, { name: 'check', size: 16, weight: 2.5, className: 'k-row__check', label: strings.selected });
  else if (acc) accNode = acc;
  var Tag = p.href ? 'a' : (p.onClick ? 'button' : 'div');
  return h(Tag, {
    className: cx('k-row', (p.href || p.onClick) && 'k-row--action', p.className),
    href: p.href, onClick: p.onClick, type: Tag === 'button' ? 'button' : undefined
  },
    p.icon ? h('span', { className: 'k-row__icon' }, h(Icon, { name: p.icon, size: 15 })) : null,
    h('span', { className: 'k-row__text' },
      h('span', { className: cx('k-row__title', p.destructive && 'k-row__title--danger') }, p.title),
      p.subtitle ? h('span', { className: 'k-row__subtitle' }, p.subtitle) : null),
    p.value != null ? h('span', { className: 'k-row__value' }, p.value) : null,
    accNode);
}

function Card(p) {
  var rest = omit(p, ['eyebrow', 'title', 'action', 'footer', 'className', 'children']);
  return h('div', Object.assign({}, rest, { className: cx('k-card', p.className) }),
    (p.eyebrow || p.title || p.action) ? h('div', { className: 'k-card__head' },
      h('div', null,
        p.eyebrow ? h('p', { className: 'k-card__eyebrow' }, p.eyebrow) : null,
        p.title ? h('h3', { className: 'k-card__title' }, p.title) : null),
      p.action || null) : null,
    p.children != null ? h('div', { className: 'k-card__body' }, p.children) : null,
    p.footer ? h('div', { className: 'k-card__footer' }, p.footer) : null);
}

function Badge(p) {
  var tone = p.tone || 'neutral', dot = tone === 'success' || tone === 'warning' || tone === 'danger';
  return h('span', { className: cx('k-badge', 'k-badge--' + tone, p.className) }, dot ? h('span', { className: 'k-badge__dot' }) : null, p.children);
}

function ProgressBar(p) {
  var v = Math.max(0, Math.min(1, p.value || 0));
  return h('div', {
    className: cx('k-progress', p.className), role: 'progressbar', 'aria-label': p.label,
    'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': Math.round(v * 100)
  }, h('div', { className: 'k-progress__fill', style: { width: (v * 100) + '%' } }));
}

function Topbar(p) {
  var crumbs = p.breadcrumb || [];
  return h('header', { className: cx('k-topbar', p.className) },
    h('nav', { className: 'k-topbar__crumbs', 'aria-label': strings.breadcrumb },
      crumbs.map(function (c, i) {
        return h(R.Fragment, { key: i }, h('span', { className: 'k-topbar__crumb' }, c), h('span', { className: 'k-topbar__sep', 'aria-hidden': true }, '/'));
      }),
      h('h1', { className: 'k-topbar__title' }, p.title)),
    p.actions ? h('div', { className: 'k-topbar__actions' }, p.actions) : null);
}

function Sidebar(p) {
  var items = p.items || [];
  var st = useControlled(p.value, p.defaultValue !== undefined ? p.defaultValue : (items[0] && items[0].id)), v = st[0];
  return h('aside', { className: cx('k-sidebar', p.className) },
    p.header ? h('div', { className: 'k-sidebar__header' }, p.header) : null,
    h('nav', { className: 'k-sidebar__nav', 'aria-label': p['aria-label'] || strings.mainNavigation },
      items.map(function (it, i) {
        if (it.section) return h('p', { key: 's' + i, className: 'k-sidebar__section' }, it.section);
        var on = it.id === v;
        return h('button', {
          key: it.id, type: 'button', className: cx('k-sidebar__item', on && 'k-sidebar__item--on'),
          'aria-current': on ? 'page' : undefined,
          onClick: function () { st[1](it.id); if (p.onChange) p.onChange(it.id); }
        }, it.icon ? h(Icon, { name: it.icon, size: 16 }) : null, h('span', { className: 'k-sidebar__label' }, it.label),
          it.count != null ? h('span', { className: 'k-sidebar__count' }, it.count) : null);
      })),
    p.footer ? h('div', { className: 'k-sidebar__footer' }, p.footer) : null);
}

function NavList(p) {
  var items = p.items || [];
  var first = items.filter(function (it) { return it.id; })[0];
  var st = useControlled(p.value, p.defaultValue !== undefined ? p.defaultValue : (first && first.id)), v = st[0];
  return h('nav', { className: cx('k-navlist', p.className), 'aria-label': p['aria-label'] },
    items.map(function (it, i) {
      if (it.section) return h('p', { key: 's' + i, className: 'k-navlist__section' }, it.section);
      var on = it.id === v;
      return h('button', {
        key: it.id, type: 'button', className: cx('k-navlist__item', on && 'k-navlist__item--on'),
        'aria-current': on ? 'page' : undefined,
        onClick: function () { st[1](it.id); if (p.onChange) p.onChange(it.id); }
      }, it.icon ? h(Icon, { name: it.icon, size: 16 }) : null, h('span', { className: 'k-navlist__label' }, it.label),
        it.count != null ? h('span', { className: 'k-navlist__count' }, it.count) : null);
    }));
}

function SettingsSection(p) {
  return h('section', { className: cx('k-setting', p.className) },
    h('div', { className: 'k-setting__head' },
      h('h3', { className: 'k-setting__title' }, p.title),
      p.description ? h('p', { className: 'k-setting__desc' }, p.description) : null),
    h('div', { className: 'k-setting__body' }, p.children));
}

function Dialog(p) {
  var id = R.useId();
  var presence = usePresence(p.open !== false, 'duration-fast');
  useEscape(p.overlay && p.open !== false && !!p.onClose, p.onClose);
  var trap = R.useRef(null);
  useFocusTrap(!!p.overlay && p.open !== false, trap);
  if (!presence.show) return null;
  var acts = p.actions && p.actions.length ? p.actions : [{ label: 'OK', variant: 'primary' }];
  var panel = h('div', { ref: trap, className: cx('k-dialog', p.className), role: 'dialog', 'aria-modal': p.overlay ? true : undefined, 'aria-labelledby': id + '-t', 'aria-describedby': p.message ? id + '-m' : undefined },
    h('div', { className: 'k-dialog__content' },
      h('h2', { id: id + '-t', className: 'k-dialog__title' }, p.title),
      p.message ? h('p', { id: id + '-m', className: 'k-dialog__message' }, p.message) : null,
      p.children || null),
    h('div', { className: 'k-dialog__actions' },
      acts.map(function (a, i) {
        return h(Button, { key: i, size: 'md', variant: a.variant || 'secondary', onClick: a.onClick }, a.label);
      })));
  return p.overlay ? h('div', { className: cx('k-scrim', presence.leaving && 'k-leaving'), onMouseDown: onScrimDown(p.onClose) }, panel) : panel;
}

/* ---------- Inputs ---------- */
function Textarea(p) {
  var auto = R.useId(), id = p.id || auto, note = p.error || p.hint;
  var len = useState(String(p.value != null ? p.value : (p.defaultValue || '')).length);
  var rest = omit(p, ['label', 'hint', 'error', 'className', 'id', 'onChange']);
  return h('div', { className: cx('k-field', p.error && 'k-field--error', p.className) },
    p.label ? h('label', { className: 'k-field__label', htmlFor: id }, p.label) : null,
    h('textarea', Object.assign({ id: id, rows: 4, className: 'k-input k-textarea', 'aria-invalid': p.error ? true : undefined, 'aria-describedby': note ? id + '-note' : undefined,
      onChange: function (e) { len[1](e.target.value.length); if (p.onChange) p.onChange(e); } }, rest)),
    (note || p.maxLength) ? h('div', { className: 'k-field__row' },
      note ? h('p', { id: id + '-note', className: 'k-field__note' }, p.error ? h(Icon, { name: 'info', size: 13 }) : null, note) : h('span'),
      p.maxLength ? h('span', { className: 'k-field__count' }, len[0] + '/' + p.maxLength) : null) : null);
}

function Select(p) {
  var auto = R.useId(), id = p.id || auto, note = p.error || p.hint;
  var opts = (p.options || []).map(function (o) { return typeof o === 'string' ? { value: o, label: o } : o; });
  var rest = omit(p, ['label', 'hint', 'error', 'className', 'id', 'options', 'placeholder']);
  return h('div', { className: cx('k-field', p.error && 'k-field--error', p.className) },
    p.label ? h('label', { className: 'k-field__label', htmlFor: id }, p.label) : null,
    h('div', { className: 'k-select' },
      h('select', Object.assign({ id: id, className: 'k-input k-select__el', 'aria-describedby': note ? id + '-note' : undefined }, rest),
        p.placeholder ? h('option', { value: '', disabled: true }, p.placeholder) : null,
        opts.map(function (o) { return h('option', { key: o.value, value: o.value }, o.label); })),
      h(Icon, { name: 'chevron-down', size: 16, className: 'k-select__chev' })),
    note ? h('p', { id: id + '-note', className: 'k-field__note' }, note) : null);
}

/* Custom select: a field-like trigger and a listbox styled like Klar's menus.
   The panel is position: fixed so it is never clipped by a scrolling Modal or table. */
function Dropdown(p) {
  var auto = R.useId(), id = p.id || auto;
  var opts = (p.options || []).map(function (o) { return typeof o === 'string' ? { value: o, label: o } : o; });
  var choices = opts.filter(function (o) { return !o.section; });
  var st = useControlled(p.value, p.defaultValue), v = st[0];
  var open = useState(false), q = useState(''), act = useState(0), pos = useState(null);
  var presence = usePresence(open[0], 'duration-fast');
  var wrap = R.useRef(null), trigger = R.useRef(null), list = R.useRef(null);
  var query = q[0].trim().toLowerCase();
  var shown = opts.filter(function (o) { return o.section ? !query : !query || String(o.label).toLowerCase().indexOf(query) >= 0; });
  var selectable = shown.filter(function (o) { return !o.section && !o.disabled; });
  var current = choices.filter(function (o) { return o.value === v; })[0];
  var note = p.error || p.hint;

  function show() {
    if (p.disabled || !trigger.current) return;
    var r = trigger.current.getBoundingClientRect();
    var panelHeight = Math.min(280, choices.length * 30 + 8) + (p.search ? 38 : 0);
    var below = window.innerHeight - r.bottom, up = below < panelHeight + 12 && r.top > below;
    pos[1]({ left: r.left, width: r.width, top: up ? undefined : r.bottom + 6, bottom: up ? window.innerHeight - r.top + 6 : undefined, up: up });
    q[1]('');
    act[1](Math.max(0, choices.filter(function (o) { return !o.disabled; }).indexOf(current)));
    open[1](true);
  }
  function hide(refocus) { open[1](false); if (refocus && trigger.current) trigger.current.focus(); }
  function pick(o) { if (!o || o.disabled) return; st[1](o.value); if (p.onChange) p.onChange(o.value); hide(true); }
  function move(to) { act[1](Math.max(0, Math.min(selectable.length - 1, to))); }
  function onKey(e) {
    if (!open[0]) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(); }
      return;
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); move(act[0] + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); move(act[0] - 1); }
    else if (e.key === 'Home') { e.preventDefault(); move(0); }
    else if (e.key === 'End') { e.preventDefault(); move(selectable.length - 1); }
    else if (e.key === 'Enter' || (e.key === ' ' && !p.search)) { e.preventDefault(); pick(selectable[act[0]]); }
    // Stop here so an Esc meant for the dropdown does not also close a Modal or Dialog around it.
    else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); hide(true); }
    else if (e.key === 'Tab') hide(false);
    else if (!p.search && e.key.length === 1) {
      var key = e.key.toLowerCase(), n = selectable.length;
      for (var i = 1; i <= n; i++) {
        var o = selectable[(act[0] + i) % n];
        if (String(o.label).toLowerCase().charAt(0) === key) { act[1]((act[0] + i) % n); break; }
      }
    }
  }

  R.useEffect(function () {
    if (!open[0]) return;
    function off(e) { if (wrap.current && !wrap.current.contains(e.target)) hide(false); }
    function scroll(e) { if (!list.current || !list.current.contains(e.target)) hide(false); }
    document.addEventListener('mousedown', off);
    window.addEventListener('scroll', scroll, true);
    function resize() { hide(false); }
    window.addEventListener('resize', resize);
    return function () { document.removeEventListener('mousedown', off); window.removeEventListener('scroll', scroll, true); window.removeEventListener('resize', resize); };
  }, [open[0]]);
  R.useEffect(function () {
    var l = list.current, el = open[0] && l && l.querySelector('[data-active]');
    if (!el) return;
    // Scroll only the list, never the page, which would close the dropdown.
    if (el.offsetTop < l.scrollTop) l.scrollTop = el.offsetTop - 4;
    else if (el.offsetTop + el.offsetHeight > l.scrollTop + l.clientHeight) l.scrollTop = el.offsetTop + el.offsetHeight - l.clientHeight + 4;
  }, [open[0], act[0], query]);

  var activeOption = open[0] ? selectable[act[0]] : null;
  var optionId = function (o) { return id + '-o-' + choices.indexOf(o); };
  var panel = presence.show && pos[0] ? h('div', {
    className: cx('k-menu k-dd__panel', pos[0].up && 'k-dd__panel--up', presence.leaving && 'k-leaving'),
    style: { left: pos[0].left, top: pos[0].top, bottom: pos[0].bottom, width: pos[0].width }
  },
    p.search ? h('div', { className: 'k-dd__search' }, h(Icon, { name: 'search', size: 15 }),
      h('input', { className: 'k-dd__search-input', autoFocus: true, value: q[0], placeholder: strings.search, 'aria-label': strings.search,
        'aria-controls': id + '-list', 'aria-activedescendant': activeOption ? optionId(activeOption) : undefined,
        onChange: function (e) { q[1](e.target.value); act[1](0); }, onKeyDown: onKey })) : null,
    h('div', { ref: list, id: id + '-list', role: 'listbox', 'aria-labelledby': p.label ? id + '-label' : undefined, 'aria-label': p.label ? undefined : p['aria-label'], className: 'k-dd__list' },
      selectable.length === 0 ? h('p', { className: 'k-dd__empty' }, strings.noResults + ' "' + q[0] + '"') : null,
      shown.map(function (o, i) {
        if (o.section) return h('p', { key: 's' + i, className: 'k-menu__heading' }, o.section);
        var on = o.value === v, active = o === activeOption;
        return h('div', {
          key: String(o.value), id: optionId(o), role: 'option', 'aria-selected': on, 'aria-disabled': o.disabled || undefined, 'data-active': active || undefined,
          className: cx('k-menu__item k-dd__option', active && 'k-menu__item--active', o.disabled && 'k-dd__option--disabled'),
          onMouseMove: function () { if (!o.disabled && !active) act[1](selectable.indexOf(o)); },
          onMouseDown: function (e) { e.preventDefault(); },
          onClick: function () { pick(o); }
        },
          h('span', { className: 'k-menu__check' }, on ? h(Icon, { name: 'check', size: 13, weight: 2.5 }) : null),
          o.icon ? h(Icon, { name: o.icon, size: 14 }) : null,
          h('span', { className: 'k-menu__label' }, o.label, o.description ? h('span', { className: 'k-dd__desc' }, o.description) : null));
      }))) : null;

  return h('div', { ref: wrap, className: cx('k-field', p.error && 'k-field--error', p.className) },
    p.label ? h('label', { id: id + '-label', className: 'k-field__label', htmlFor: id, onClick: function (e) { e.preventDefault(); if (trigger.current) trigger.current.focus(); } }, p.label) : null,
    h('button', {
      ref: trigger, id: id, type: 'button', role: 'combobox', disabled: p.disabled,
      className: cx('k-input k-dd__trigger', !current && 'k-dd__trigger--empty'),
      'aria-haspopup': 'listbox', 'aria-expanded': open[0], 'aria-controls': open[0] ? id + '-list' : undefined,
      'aria-activedescendant': !p.search && activeOption ? optionId(activeOption) : undefined,
      'aria-label': p.label ? undefined : p['aria-label'], 'aria-invalid': p.error ? true : undefined, 'aria-describedby': note ? id + '-note' : undefined,
      onClick: function () { if (open[0]) hide(false); else show(); }, onKeyDown: onKey
    },
      current && current.icon ? h(Icon, { name: current.icon, size: 15 }) : null,
      h('span', { className: 'k-dd__value' }, current ? current.label : (p.placeholder || '')),
      h(Icon, { name: 'chevron-down', size: 16, className: 'k-dd__chev' })),
    p.name ? h('input', { type: 'hidden', name: p.name, value: v == null ? '' : v }) : null,
    note ? h('p', { id: id + '-note', className: 'k-field__note' }, p.error ? h(Icon, { name: 'info', size: 13 }) : null, note) : null,
    panel);
}

function RadioGroup(p) {
  var opts = (p.options || []).map(function (o) { return typeof o === 'string' ? { value: o, label: o } : o; });
  var st = useControlled(p.value, p.defaultValue), v = st[0];
  return h('div', { className: cx('k-radios', p.variant === 'cards' && 'k-radios--cards', p.className), role: 'radiogroup', 'aria-label': p['aria-label'] },
    opts.map(function (o) {
      var on = o.value === v;
      return h('button', { key: o.value, type: 'button', role: 'radio', 'aria-checked': on, disabled: o.disabled,
        className: cx('k-radio', on && 'k-radio--on'), onClick: function () { st[1](o.value); if (p.onChange) p.onChange(o.value); } },
        h('span', { className: 'k-radio__dot' }),
        h('span', { className: 'k-radio__text' }, h('span', { className: 'k-radio__label' }, o.label),
          o.description ? h('span', { className: 'k-radio__desc' }, o.description) : null));
    }));
}

function Slider(p) {
  var st = useControlled(p.value, p.defaultValue != null ? p.defaultValue : (p.min || 0)), v = st[0];
  var min = p.min || 0, max = p.max != null ? p.max : 100, pct = ((v - min) / (max - min)) * 100;
  var id = R.useId();
  return h('div', { className: cx('k-slider', p.className) },
    p.label ? h('div', { className: 'k-slider__head' }, h('label', { className: 'k-field__label', htmlFor: id }, p.label),
      h('span', { className: 'k-slider__value' }, p.format ? p.format(v) : v)) : null,
    h('input', { id: id, type: 'range', min: min, max: max, step: p.step || 1, value: v, disabled: p.disabled, className: 'k-slider__input',
      style: { '--k-pct': pct + '%' }, 'aria-label': p.label ? undefined : p['aria-label'],
      onChange: function (e) { var n = Number(e.target.value); st[1](n); if (p.onChange) p.onChange(n); } }));
}

/* ---------- Display ---------- */
function initials(name) { return String(name || '?').trim().split(/\s+/).slice(0, 2).map(function (s) { return s.charAt(0); }).join('').toUpperCase(); }
function Avatar(p) {
  var size = p.size || 'md';
  return h('span', { className: cx('k-avatar', 'k-avatar--' + size, p.className), title: p.name, role: 'img', 'aria-label': p.name },
    p.src ? h('img', { src: p.src, alt: '' }) : initials(p.name),
    p.status ? h('span', { className: cx('k-avatar__status', 'k-avatar__status--' + p.status) }) : null);
}
function AvatarGroup(p) {
  var list = p.names || [], max = p.max || 4, extra = list.length - max;
  return h('span', { className: cx('k-avatars', p.className) },
    list.slice(0, max).map(function (n, i) { return h(Avatar, { key: i, name: n, size: p.size || 'sm' }); }),
    extra > 0 ? h('span', { className: cx('k-avatar', 'k-avatar--' + (p.size || 'sm'), 'k-avatar--more') }, '+' + extra) : null);
}

function Tooltip(p) {
  return h('span', { className: cx('k-tip', p.open && 'k-tip--open', 'k-tip--' + (p.side || 'top'), p.className) },
    p.children, h('span', { className: 'k-tip__bubble', role: 'tooltip' }, p.content, p.shortcut ? h('span', { className: 'k-tip__kbd' }, p.shortcut) : null));
}

function Tabs(p) {
  var items = p.items || [];
  var st = useControlled(p.value, p.defaultValue !== undefined ? p.defaultValue : (items[0] && items[0].id)), v = st[0];
  return h('div', { className: cx('k-tabs', p.className), role: 'tablist', 'aria-label': p['aria-label'] },
    items.map(function (it) {
      var on = it.id === v;
      return h('button', { key: it.id, type: 'button', role: 'tab', 'aria-selected': on, className: cx('k-tab', on && 'k-tab--on'),
        onClick: function () { st[1](it.id); if (p.onChange) p.onChange(it.id); } },
        it.icon ? h(Icon, { name: it.icon, size: 15 }) : null, it.label,
        it.count != null ? h('span', { className: 'k-tab__count' }, it.count) : null);
    }));
}

function Stat(p) {
  var trend = p.trend || 'flat';
  return h('div', { className: cx('k-stat', p.className) },
    h('div', { className: 'k-stat__label' }, p.icon ? h(Icon, { name: p.icon, size: 15 }) : null, p.label),
    p.chart ? h('div', { className: 'k-stat__value-row' }, h('div', { className: 'k-stat__value' }, p.value), p.chart) : h('div', { className: 'k-stat__value' }, p.value),
    (p.delta || p.caption) ? h('div', { className: 'k-stat__foot' },
      p.delta ? h('span', { className: cx('k-stat__delta', 'k-stat__delta--' + trend) },
        trend !== 'flat' ? h(Icon, { name: trend === 'up' ? 'trend-up' : 'trend-down', size: 14, weight: 2.25 }) : null, p.delta) : null,
      p.caption ? h('span', { className: 'k-stat__caption' }, p.caption) : null) : null);
}

function Table(p) {
  var cols = p.columns || [], rows = p.rows || [];
  var ctx = useContextMenu();
  var sortSt = useControlled(p.sort, p.defaultSort || null), sort = sortSt[0];
  var selSt = useControlled(p.selected, p.defaultSelected || []), selected = selSt[0] || [];
  var hidSt = useControlled(p.hiddenColumns, p.defaultHiddenColumns || []), hidden = hidSt[0] || [];
  var scrollTop = useState(0);
  var shown = cols.filter(function (c) { return hidden.indexOf(c.key) < 0; });
  var idOf = function (r, i) { return r.id != null ? r.id : i; };

  function setSort(key) {
    var next = !sort || sort.key !== key ? { key: key, dir: 'asc' } : sort.dir === 'asc' ? { key: key, dir: 'desc' } : null;
    sortSt[1](next);
    if (p.onSortChange) p.onSortChange(next);
  }
  var sorted = rows;
  if (sort && !p.manualSort) {
    var sc = cols.filter(function (c) { return c.key === sort.key; })[0];
    var get = sc && sc.sortValue ? sc.sortValue : function (r) { return r[sort.key]; };
    sorted = rows.slice().sort(function (a, b) {
      var x = get(a), y = get(b);
      var c = typeof x === 'number' && typeof y === 'number' ? x - y : String(x == null ? '' : x).localeCompare(String(y == null ? '' : y), strings.locale, { numeric: true });
      return sort.dir === 'asc' ? c : -c;
    });
  }
  function setSelected(next) { selSt[1](next); if (p.onSelectedChange) p.onSelectedChange(next); }
  var ids = sorted.map(idOf);
  var allOn = ids.length > 0 && ids.every(function (id) { return selected.indexOf(id) >= 0; });
  var someOn = !allOn && ids.some(function (id) { return selected.indexOf(id) >= 0; });
  function toggleRow(id) { setSelected(selected.indexOf(id) >= 0 ? selected.filter(function (x) { return x !== id; }) : selected.concat([id])); }
  function setHidden(next) { hidSt[1](next); if (p.onHiddenColumnsChange) p.onHiddenColumnsChange(next); }

  // Long tables only render the rows in view. Rows are 49 px: 48 px cells and a 1 px hairline.
  var rowHeight = p.rowHeight || 49, virtual = p.virtualize != null ? p.virtualize : sorted.length > 100;
  var maxHeight = p.maxHeight || (virtual ? 480 : null);
  var from = 0, to = sorted.length;
  if (virtual) {
    from = Math.max(0, Math.floor(scrollTop[0] / rowHeight) - 8);
    to = Math.min(sorted.length, Math.ceil((scrollTop[0] + maxHeight) / rowHeight) + 8);
  }
  var span = shown.length + (p.selectable ? 1 : 0);
  var selectedRows = sorted.filter(function (r, i) { return selected.indexOf(idOf(r, i)) >= 0; });
  var toggleable = cols.filter(function (c) { return c.hideable !== false && c.label; });

  var toolbar = (p.selectable && p.bulkActions) || p.columnToggle ? h('div', { className: 'k-table__toolbar' },
    p.selectable && p.bulkActions && selected.length ? h('div', { className: 'k-table__bulk', role: 'region', 'aria-label': strings.bulkActions },
      h('span', { className: 'k-table__bulk-count' }, selected.length + ' ' + strings.selected.toLowerCase()),
      h('div', { className: 'k-table__bulk-actions' }, p.bulkActions(selectedRows)),
      h(Button, { size: 'sm', variant: 'ghost', icon: 'xmark', onClick: function () { setSelected([]); } }, strings.clearSelection)) : h('span', { className: 'k-table__toolbar-space' }),
    p.columnToggle ? h(Menu, { align: 'end', trigger: h(Button, { size: 'sm', variant: 'secondary', icon: 'settings' }, strings.columns),
      items: toggleable.map(function (c) {
        var on = hidden.indexOf(c.key) < 0;
        return { label: typeof c.label === 'string' ? c.label : c.key, checked: on, onSelect: function () { setHidden(on ? hidden.concat([c.key]) : hidden.filter(function (k) { return k !== c.key; })); } };
      }) }) : null) : null;

  return h(R.Fragment, null,
    toolbar,
    h('div', { className: cx('k-table-wrap', maxHeight && 'k-table-wrap--scroll', p.className), style: maxHeight ? { maxHeight: maxHeight } : undefined,
      onScroll: virtual ? function (e) { scrollTop[1](e.currentTarget.scrollTop); } : undefined },
      h('table', { className: 'k-table', 'aria-rowcount': virtual ? sorted.length + 1 : undefined, 'aria-label': p['aria-label'] },
        h('thead', null, h('tr', null,
          p.selectable ? h('th', { className: 'k-table__select' }, h(Checkbox, { 'aria-label': strings.selectAll, checked: allOn, indeterminate: someOn, onChange: function () { setSelected(allOn ? [] : ids); } })) : null,
          shown.map(function (c) {
            var dir = sort && sort.key === c.key ? sort.dir : null;
            return h('th', { key: c.key, style: { width: c.width, textAlign: c.align || 'left' }, 'aria-sort': c.sortable ? (dir === 'asc' ? 'ascending' : dir === 'desc' ? 'descending' : 'none') : undefined },
              c.sortable ? h('button', { type: 'button', className: cx('k-table__sort', dir && 'k-table__sort--on', c.align === 'right' && 'k-table__sort--right'), onClick: function () { setSort(c.key); } },
                c.label, h(Icon, { name: dir === 'desc' ? 'chevron-down' : dir === 'asc' ? 'chevron-up' : 'chevron-down', size: 13, className: 'k-table__sort-icon' })) : c.label);
          }))),
        h('tbody', null,
          virtual && from > 0 ? h('tr', { 'aria-hidden': true }, h('td', { colSpan: span, className: 'k-table__spacer', style: { height: from * rowHeight } })) : null,
          sorted.slice(from, to).map(function (r, j) {
            var i = from + j, id = idOf(r, i), on = selected.indexOf(id) >= 0;
            return h('tr', {
              key: id, 'aria-rowindex': virtual ? i + 2 : undefined, 'aria-selected': p.selectable ? on : undefined,
              className: cx(p.onRowClick && 'k-table__row--action', on && 'k-table__row--selected', ctx.isOpenFor(r) && 'k-table__row--menu') || undefined,
              onClick: p.onRowClick ? function () { p.onRowClick(r); } : undefined,
              onContextMenu: p.rowMenu ? function (e) { ctx.open(e, r); } : undefined
            },
              p.selectable ? h('td', { className: 'k-table__select', onClick: function (e) { e.stopPropagation(); } },
                h(Checkbox, { 'aria-label': strings.selectRow, checked: on, onChange: function () { toggleRow(id); } })) : null,
              shown.map(function (c) {
                return h('td', { key: c.key, style: { textAlign: c.align || 'left' }, className: c.strong ? 'k-table__strong' : (c.mono ? 'k-table__mono' : undefined) }, c.render ? c.render(r) : r[c.key]);
              }));
          }),
          virtual && to < sorted.length ? h('tr', { 'aria-hidden': true }, h('td', { colSpan: span, className: 'k-table__spacer', style: { height: (sorted.length - to) * rowHeight } })) : null))),
    p.rowMenu && ctx.data ? ctx.render(p.rowMenu(ctx.data)) : null);
}

function EmptyState(p) {
  return h('div', { className: cx('k-empty', p.className) },
    h('span', { className: 'k-empty__icon' }, h(Icon, { name: p.icon || 'inbox', size: 22 })),
    h('h3', { className: 'k-empty__title' }, p.title),
    p.description ? h('p', { className: 'k-empty__desc' }, p.description) : null,
    p.action ? h('div', { className: 'k-empty__action' }, p.action) : null);
}

function Skeleton(p) {
  if (p.lines) {
    var arr = []; for (var i = 0; i < p.lines; i++) arr.push(h('span', { key: i, className: 'k-skel', style: { height: 12, width: i === p.lines - 1 ? '60%' : '100%' } }));
    return h('span', { className: cx('k-skel-lines', p.className), 'aria-hidden': true }, arr);
  }
  return h('span', { className: cx('k-skel', p.circle && 'k-skel--circle', p.className), 'aria-hidden': true, style: { width: p.width || '100%', height: p.height || 16 } });
}

function Spinner(p) {
  var s = p.size || 16;
  return h('span', { className: cx('k-spinner', p.className), role: 'status', 'aria-label': p.label || strings.loading, style: { width: s, height: s } });
}

function Pagination(p) {
  var count = p.pageCount || 1;
  var st = useControlled(p.page, p.defaultPage || 1), cur = st[0];
  function go(n) { if (n < 1 || n > count || n === cur) return; st[1](n); if (p.onChange) p.onChange(n); }
  var pages = [], i;
  for (i = 1; i <= count; i++) { if (i === 1 || i === count || Math.abs(i - cur) <= 1) pages.push(i); else if (pages[pages.length - 1] !== '…') pages.push('…'); }
  return h('nav', { className: cx('k-pages', p.className), 'aria-label': strings.pagination },
    h(Button, { size: 'sm', variant: 'ghost', icon: 'chevron-left', 'aria-label': strings.previous, disabled: cur === 1, onClick: function () { go(cur - 1); } }),
    pages.map(function (n, idx) {
      return n === '…' ? h('span', { key: 'e' + idx, className: 'k-pages__gap' }, '…')
        : h('button', { key: n, type: 'button', className: cx('k-pages__item', n === cur && 'k-pages__item--on'), 'aria-current': n === cur ? 'page' : undefined, onClick: function () { go(n); } }, n);
    }),
    h(Button, { size: 'sm', variant: 'ghost', icon: 'chevron-right', 'aria-label': strings.next, disabled: cur === count, onClick: function () { go(cur + 1); } }));
}

function Accordion(p) {
  var items = p.items || [];
  var st = useState(p.defaultOpen || []), open = st[0];
  function toggle(id) {
    var has = open.indexOf(id) >= 0;
    st[1](has ? open.filter(function (x) { return x !== id; }) : (p.multiple ? open.concat([id]) : [id]));
  }
  return h('div', { className: cx('k-accordion', p.className) }, items.map(function (it) {
    var on = open.indexOf(it.id) >= 0;
    return h('div', { key: it.id, className: cx('k-acc', on && 'k-acc--open') },
      h('button', { type: 'button', className: 'k-acc__head', 'aria-expanded': on, onClick: function () { toggle(it.id); } },
        h('span', null, it.title), h(Icon, { name: 'chevron-down', size: 16, className: 'k-acc__chev' })),
      on ? h('div', { className: 'k-acc__body' }, it.content) : null);
  }));
}

/* ---------- Feedback ---------- */
var TONE_ICON = { info: 'info', success: 'circle-check', warning: 'alert', danger: 'alert' };
function Callout(p) {
  var tone = p.tone || 'info';
  return h('div', { className: cx('k-callout', 'k-callout--' + tone, p.className), role: tone === 'danger' ? 'alert' : 'status' },
    h(Icon, { name: p.icon || TONE_ICON[tone], size: 16, className: 'k-callout__icon' }),
    h('div', { className: 'k-callout__text' }, p.title ? h('p', { className: 'k-callout__title' }, p.title) : null,
      p.children ? h('div', { className: 'k-callout__body' }, p.children) : null),
    p.action ? h('div', { className: 'k-callout__action' }, p.action) : null);
}

function Toast(p) {
  var tone = p.tone || 'default';
  return h('div', { className: cx('k-toast', p.className), role: 'status' },
    tone !== 'default' ? h(Icon, { name: TONE_ICON[tone] || 'info', size: 16, className: 'k-toast__icon k-toast__icon--' + tone }) : null,
    h('div', { className: 'k-toast__text' }, h('p', { className: 'k-toast__title' }, p.title),
      p.description ? h('p', { className: 'k-toast__desc' }, p.description) : null),
    p.action ? h('div', { className: 'k-toast__action' }, p.action) : null,
    p.onClose !== undefined ? h('button', { type: 'button', className: 'k-toast__close', 'aria-label': strings.close, onClick: p.onClose || undefined }, h(Icon, { name: 'xmark', size: 14 })) : null);
}

/* ---------- Menus ---------- */
function MenuPanel(p) {
  var items = p.items || [];
  var sub = useState(p.defaultOpenSub != null ? p.defaultOpenSub : null), openSub = sub[0];
  var flip = useState(false), ref = R.useRef(null);
  var hasCheck = items.some(function (it) { return it.checked !== undefined; });
  useIsoLayout(function () {
    if (!p.nested || !ref.current) return;
    var r = ref.current.getBoundingClientRect();
    if (r.right > window.innerWidth - 8) flip[1](true);
  }, []);
  return h('div', { ref: ref, className: cx('k-menu', p.nested && 'k-menu--nested', flip[0] && 'k-menu--flip', p.className), style: p.style, role: 'menu',
    onKeyDown: p.nested ? function (e) { if (e.key === 'ArrowLeft' && p.onBack) { e.stopPropagation(); p.onBack(); } } : undefined },
    items.map(function (it, i) {
      if (it.separator) return h('div', { key: i, className: 'k-menu__sep', role: 'separator' });
      if (it.heading) return h('p', { key: i, className: 'k-menu__heading' }, it.heading);
      var hasSub = it.items && it.items.length, isOpen = hasSub && openSub === i;
      var btn = h('button', { key: hasSub ? undefined : i, type: 'button', role: it.checked !== undefined ? 'menuitemcheckbox' : 'menuitem',
        'aria-checked': it.checked !== undefined ? !!it.checked : undefined, 'aria-haspopup': hasSub ? 'menu' : undefined, 'aria-expanded': hasSub ? !!isOpen : undefined,
        disabled: it.disabled, className: cx('k-menu__item', it.danger && 'k-menu__item--danger', isOpen && 'k-menu__item--open'),
        onMouseEnter: function () { sub[1](hasSub ? i : null); },
        onKeyDown: hasSub ? function (e) { if (e.key === 'ArrowRight' || e.key === 'Enter') { e.preventDefault(); sub[1](i); } } : undefined,
        onClick: function () { if (hasSub) { sub[1](isOpen ? null : i); return; } if (it.onSelect) it.onSelect(); if (p.onClose) p.onClose(); } },
        hasCheck ? h('span', { className: 'k-menu__check' }, it.checked ? h(Icon, { name: 'check', size: 14, weight: 2.5 }) : null) : null,
        it.icon ? h(Icon, { name: it.icon, size: 15 }) : null, h('span', { className: 'k-menu__label' }, it.label),
        it.shortcut ? h('span', { className: 'k-menu__kbd' }, it.shortcut) : null,
        hasSub ? h(Icon, { name: 'chevron-right', size: 14, className: 'k-menu__chev' }) : null);
      if (!hasSub) return btn;
      return h('div', { key: i, className: 'k-menu__sub' }, btn,
        isOpen ? h(MenuPanel, { items: it.items, nested: true, onClose: p.onClose, onBack: function () { sub[1](null); } }) : null);
    }));
}
function Menu(p) {
  var st = useState(!!p.defaultOpen), open = st[0], ref = R.useRef(null), panel = R.useRef(null), pos = useState(null);
  var presence = usePresence(open, 'duration-fast');
  var end = p.align === 'end';
  // The panel is position: fixed at the trigger, so a table or Modal that scrolls never clips it.
  function place() {
    if (!ref.current) return;
    var r = ref.current.getBoundingClientRect();
    var estimate = Math.min(360, (p.items || []).length * 32 + 8);
    var below = window.innerHeight - r.bottom, up = below < estimate + 12 && r.top > below;
    pos[1]({ up: up, top: up ? undefined : r.bottom + 6, bottom: up ? window.innerHeight - r.top + 6 : undefined,
      left: end ? undefined : r.left, right: end ? window.innerWidth - r.right : undefined });
  }
  useIsoLayout(function () { if (open && !pos[0]) place(); }, [open]);
  R.useEffect(function () {
    if (!open) return;
    function off(e) { if (ref.current && !ref.current.contains(e.target)) st[1](false); }
    function esc(e) { if (e.key === 'Escape') st[1](false); }
    function scroll(e) { if (!panel.current || !panel.current.contains(e.target)) st[1](false); }
    document.addEventListener('mousedown', off); document.addEventListener('keydown', esc);
    function resize() { st[1](false); }
    window.addEventListener('scroll', scroll, true); window.addEventListener('resize', resize);
    return function () { document.removeEventListener('mousedown', off); document.removeEventListener('keydown', esc); window.removeEventListener('scroll', scroll, true); window.removeEventListener('resize', resize); };
  }, [open]);
  if (!p.trigger) return h(MenuPanel, p);
  var at = pos[0];
  return h('span', { ref: ref, className: cx('k-dropdown', 'k-dropdown--' + (p.align || 'start')), onClick: function (e) { e.stopPropagation(); } },
    R.cloneElement(p.trigger, { onClick: function () { if (!open) place(); st[1](!open); }, 'aria-haspopup': 'menu', 'aria-expanded': open }),
    presence.show && at ? h('div', { ref: panel },
      h(MenuPanel, { items: p.items, defaultOpenSub: p.defaultOpenSub, onClose: function () { st[1](false); },
        className: cx('k-dropdown__panel', at.up && 'k-dropdown__panel--up', presence.leaving && 'k-leaving'),
        style: { top: at.top, bottom: at.bottom, left: at.left, right: at.right } })) : null);
}

function CommandPalette(p) {
  var q = useState(''), act = useState(0), query = q[0].toLowerCase();
  var presence = usePresence(p.open !== false, 'duration-fast');
  R.useEffect(function () { if (p.open) { q[1](''); act[1](0); } }, [p.open]);
  var trap = R.useRef(null);
  useFocusTrap(!!p.overlay && p.open !== false, trap);
  if (!presence.show) return null;
  var list = (p.items || []).filter(function (it) { return !query || it.label.toLowerCase().indexOf(query) >= 0; });
  var groups = [];
  list.forEach(function (it, i) { var g = it.group || ''; var last = groups[groups.length - 1]; if (!last || last.name !== g) groups.push({ name: g, items: [] }); groups[groups.length - 1].items.push({ it: it, idx: i }); });
  function key(e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); act[1](Math.min(act[0] + 1, list.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); act[1](Math.max(act[0] - 1, 0)); }
    else if (e.key === 'Enter' && list[act[0]]) { if (list[act[0]].onSelect) list[act[0]].onSelect(); }
    else if (e.key === 'Escape' && p.onClose) p.onClose();
  }
  var panel = h('div', { ref: trap, className: cx('k-cmdk', p.className), role: 'dialog', 'aria-modal': p.overlay ? true : undefined, 'aria-label': strings.commands },
    h('div', { className: 'k-cmdk__search' }, h(Icon, { name: 'search', size: 16 }),
      h('input', { className: 'k-cmdk__input', placeholder: p.placeholder || strings.commandPlaceholder, value: q[0], autoFocus: p.autoFocus,
        onChange: function (e) { q[1](e.target.value); act[1](0); }, onKeyDown: key, 'aria-label': strings.searchCommands }),
      h('kbd', { className: 'k-kbd' }, 'Esc')),
    h('div', { className: 'k-cmdk__list', role: 'listbox' },
      list.length === 0 ? h('p', { className: 'k-cmdk__empty' }, strings.noResults + ' "' + q[0] + '"') : null,
      groups.map(function (g, gi) {
        return h('div', { key: gi, className: 'k-cmdk__group' }, g.name ? h('p', { className: 'k-menu__heading' }, g.name) : null,
          g.items.map(function (x) {
            var on = x.idx === act[0];
            return h('button', { key: x.idx, type: 'button', role: 'option', 'aria-selected': on, className: cx('k-menu__item', on && 'k-menu__item--active'),
              onMouseEnter: function () { act[1](x.idx); }, onClick: function () { if (x.it.onSelect) x.it.onSelect(); } },
              x.it.icon ? h(Icon, { name: x.it.icon, size: 15 }) : null, h('span', { className: 'k-menu__label' }, x.it.label),
              x.it.shortcut ? h('span', { className: 'k-menu__kbd' }, x.it.shortcut) : null);
          }));
      })),
    h('div', { className: 'k-cmdk__foot' }, h('span', null, h('kbd', { className: 'k-kbd' }, '↑'), h('kbd', { className: 'k-kbd' }, '↓'), ' ' + strings.navigate),
      h('span', null, h('kbd', { className: 'k-kbd' }, '↵'), ' ' + strings.select)));
  return p.overlay ? h('div', { className: cx('k-scrim k-scrim--top', presence.leaving && 'k-leaving'), onMouseDown: onScrimDown(p.onClose) }, panel) : panel;
}


/* ---------- Context menu, toaster, drawer ---------- */
/* Right-click menus, shared by ContextMenu and Table rows. `data` tells which thing was clicked. */
function useContextMenu(initial) {
  var st = useState(initial || null), pos = st[0], ref = R.useRef(null), last = R.useRef(pos);
  var presence = usePresence(!!pos, 'duration-fast');
  if (pos) last.current = pos;
  function close() { st[1](null); }
  R.useEffect(function () {
    if (!pos) return;
    function off(e) { if (ref.current && !ref.current.contains(e.target)) close(); }
    function esc(e) { if (e.key === 'Escape') close(); }
    document.addEventListener('mousedown', off); document.addEventListener('keydown', esc);
    window.addEventListener('scroll', off, true);
    return function () { document.removeEventListener('mousedown', off); document.removeEventListener('keydown', esc); window.removeEventListener('scroll', off, true); };
  }, [pos]);
  // Keep the menu inside the window when it opens near the right or bottom edge.
  useIsoLayout(function () {
    var el = ref.current;
    if (!pos || !el) return;
    var r = el.getBoundingClientRect();
    if (r.right > window.innerWidth - 8) el.style.left = Math.max(8, window.innerWidth - r.width - 8) + 'px';
    if (r.bottom > window.innerHeight - 8) el.style.top = Math.max(8, pos.y - r.height) + 'px';
  }, [pos]);
  return {
    data: last.current && last.current.data,
    isOpenFor: function (data) { return !!pos && pos.data === data; },
    // The innermost right-click area wins, so nested areas never open two menus.
    open: function (e, data) { e.preventDefault(); e.stopPropagation(); st[1]({ x: e.clientX, y: e.clientY, data: data }); },
    render: function (items, defaultOpenSub) {
      if (!presence.show) return null;
      return h('div', { ref: ref, className: cx('k-ctx', presence.leaving && 'k-leaving'), style: { left: last.current.x, top: last.current.y },
        onClick: function (e) { e.stopPropagation(); }, onContextMenu: function (e) { e.preventDefault(); e.stopPropagation(); } },
        h(MenuPanel, { items: items, defaultOpenSub: defaultOpenSub, onClose: close }));
    }
  };
}

function ContextMenu(p) {
  var ctx = useContextMenu(p.defaultOpenAt);
  return h(R.Fragment, null,
    h('div', { className: cx('k-ctx-area', p.className), onContextMenu: function (e) { ctx.open(e); } }, p.children),
    ctx.render(p.items, p.defaultOpenSub));
}

var toastStore = { list: [], subs: [], id: 0 };
function emitToasts() { toastStore.subs.forEach(function (f) { f(toastStore.list.slice()); }); }
function dismissToast(id) {
  var found = toastStore.list.some(function (t) { return t.id === id && !t.leaving; });
  if (!found) return;
  toastStore.list = toastStore.list.map(function (t) { return t.id === id ? Object.assign({}, t, { leaving: true }) : t; });
  emitToasts();
  setTimeout(function () { toastStore.list = toastStore.list.filter(function (t) { return t.id !== id; }); emitToasts(); }, motionMs('duration-fast'));
}
function toast(opts) {
  if (typeof opts === 'string') opts = { title: opts };
  var id = ++toastStore.id, t = Object.assign({ id: id, duration: 4000 }, opts);
  toastStore.list = toastStore.list.concat([t]).slice(-5); emitToasts();
  if (t.duration > 0) setTimeout(function () { dismissToast(id); }, t.duration);
  return id;
}
toast.dismiss = dismissToast;
['success', 'warning', 'danger', 'info'].forEach(function (tone) {
  toast[tone] = function (o) { if (typeof o === 'string') o = { title: o }; return toast(Object.assign({ tone: tone }, o)); };
});
function Toaster(p) {
  var st = useState(toastStore.list.slice());
  R.useEffect(function () { toastStore.subs.push(st[1]); return function () { toastStore.subs = toastStore.subs.filter(function (f) { return f !== st[1]; }); }; }, []);
  return h('div', { className: cx('k-toasts', p.inline && 'k-toasts--inline', p.className), 'aria-live': 'polite' },
    st[0].map(function (t) {
      return h('div', { key: t.id, className: cx('k-toasts__item', t.leaving && 'k-toasts__item--leaving') },
        h(Toast, { title: t.title, description: t.description, tone: t.tone, action: t.action, onClose: function () { dismissToast(t.id); } }));
    }));
}

function Drawer(p) {
  var id = R.useId();
  var presence = usePresence(p.open !== false, 'duration-base');
  useEscape(p.overlay && p.open !== false && !!p.onClose, p.onClose);
  var trap = R.useRef(null);
  useFocusTrap(!!p.overlay && p.open !== false, trap);
  if (!presence.show) return null;
  var panel = h('aside', { ref: trap, className: cx('k-drawer', 'k-drawer--' + (p.side || 'right'), p.className), role: 'dialog', 'aria-modal': p.overlay ? true : undefined, 'aria-labelledby': id },
    h('header', { className: 'k-drawer__head' },
      h('div', null, h('h2', { id: id, className: 'k-drawer__title' }, p.title), p.description ? h('p', { className: 'k-drawer__desc' }, p.description) : null),
      p.onClose !== undefined ? h(Button, { size: 'sm', variant: 'ghost', icon: 'xmark', 'aria-label': strings.close, onClick: p.onClose || undefined }) : null),
    h('div', { className: 'k-drawer__body' }, p.children),
    p.footer ? h('footer', { className: 'k-drawer__foot' }, p.footer) : null);
  return p.overlay ? h('div', { className: cx('k-scrim k-scrim--drawer k-scrim--' + (p.side || 'right'), presence.leaving && 'k-leaving'), onMouseDown: onScrimDown(p.onClose) }, panel) : panel;
}

function Modal(p) {
  var id = R.useId();
  var presence = usePresence(p.open !== false, 'duration-fast');
  useEscape(p.open !== false && !!p.onClose, p.onClose);
  var trap = R.useRef(null);
  useFocusTrap(p.open !== false, trap);
  if (!presence.show) return null;
  var panel = h('div', { ref: trap, className: cx('k-modal', p.size === 'md' && 'k-modal--md', p.className), role: 'dialog', 'aria-modal': true, 'aria-labelledby': id },
    h('header', { className: 'k-modal__head' },
      h('div', null, h('h2', { id: id, className: 'k-modal__title' }, p.title), p.description ? h('p', { className: 'k-modal__desc' }, p.description) : null),
      p.onClose ? h(Button, { size: 'sm', variant: 'ghost', icon: 'xmark', 'aria-label': strings.close, onClick: p.onClose }) : null),
    h('div', { className: 'k-modal__body' }, p.children),
    p.footer ? h('footer', { className: 'k-modal__foot' }, p.footer) : null);
  return h('div', { className: cx('k-scrim', presence.leaving && 'k-leaving'), onMouseDown: onScrimDown(p.onClose) }, panel);
}

/* ---------- Popover ----------
   A panel anchored to a trigger. position: fixed, so tables, Modals and scrolling areas never clip it. */
function Popover(p) {
  var st = useControlled(p.open, !!p.defaultOpen), open = st[0];
  var presence = usePresence(open, 'duration-fast');
  var anchor = R.useRef(null), panel = R.useRef(null), pos = useState(null);
  var end = p.align === 'end', width = p.width || 320;
  function setOpen(v, refocus) {
    st[1](v);
    if (p.onOpenChange) p.onOpenChange(v);
    if (!v && refocus && anchor.current && anchor.current.firstChild && anchor.current.firstChild.focus) anchor.current.firstChild.focus();
  }
  function place() {
    if (!anchor.current) return;
    var r = anchor.current.getBoundingClientRect(), estimate = p.estimateHeight || 320;
    var below = window.innerHeight - r.bottom, up = below < estimate + 12 && r.top > below;
    // Never wider than the window, and always fully inside it.
    var w = Math.min(width, window.innerWidth - 16), room = window.innerWidth - w - 8;
    pos[1]({ up: up, width: w, top: up ? undefined : r.bottom + 6, bottom: up ? window.innerHeight - r.top + 6 : undefined,
      left: end ? undefined : Math.max(8, Math.min(r.left, room)),
      right: end ? Math.max(8, Math.min(window.innerWidth - r.right, room)) : undefined });
  }
  useIsoLayout(function () { if (open) place(); }, [open]);
  R.useEffect(function () {
    if (!open) return;
    function inside(t) { return (anchor.current && anchor.current.contains(t)) || (panel.current && panel.current.contains(t)); }
    function down(e) { if (!inside(e.target)) setOpen(false); }
    function key(e) { if (e.key === 'Escape') setOpen(false, true); }
    function scroll(e) { if (!panel.current || !panel.current.contains(e.target)) setOpen(false); }
    function resize() { setOpen(false); }
    document.addEventListener('mousedown', down); document.addEventListener('keydown', key);
    window.addEventListener('scroll', scroll, true); window.addEventListener('resize', resize);
    return function () { document.removeEventListener('mousedown', down); document.removeEventListener('keydown', key); window.removeEventListener('scroll', scroll, true); window.removeEventListener('resize', resize); };
  }, [open]);
  var at = pos[0], own = p.trigger.props.onClick;
  return h('span', { ref: anchor, className: cx('k-popover-anchor', p.className) },
    R.cloneElement(p.trigger, { onClick: function (e) { if (own) own(e); setOpen(!open); }, 'aria-haspopup': 'dialog', 'aria-expanded': open }),
    presence.show && at ? h('div', {
      ref: panel, role: 'dialog', 'aria-label': p['aria-label'],
      className: cx('k-popover', at.up && 'k-popover--up', end && 'k-popover--end', presence.leaving && 'k-leaving'),
      style: { top: at.top, bottom: at.bottom, left: at.left, right: at.right, width: at.width },
      // Stop here so Esc closes the popover without closing a Modal around it.
      onKeyDown: function (e) { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); setOpen(false, true); } }
    }, typeof p.children === 'function' ? p.children(function () { setOpen(false, true); }) : p.children) : null);
}

/* ---------- Notification inbox ---------- */
function NotificationInbox(p) {
  var items = p.items || [], unread = items.filter(function (it) { return !it.read; }).length;
  var tab = useState('all');
  var shown = tab[0] === 'unread' ? items.filter(function (it) { return !it.read; }) : items;
  var title = p.title || strings.notifications;
  return h('span', { className: cx('k-inbox-trigger', p.className) },
    h(Popover, { align: 'end', width: 380, estimateHeight: 480, 'aria-label': title,
      trigger: h(Button, { size: 'sm', variant: 'ghost', icon: 'bell', 'aria-label': unread ? title + ', ' + unread + ' ' + strings.unread.toLowerCase() : title }) },
      function (close) {
        return h('div', { className: 'k-inbox' },
          h('div', { className: 'k-inbox__head' },
            h('h2', { className: 'k-inbox__title' }, title),
            h(Button, { size: 'sm', variant: 'ghost', icon: 'check', disabled: !unread, onClick: function () { if (p.onReadAll) p.onReadAll(); } }, strings.markAllRead)),
          h('div', { className: 'k-inbox__tabs' },
            h(SegmentedControl, { 'aria-label': title, value: tab[0], onChange: tab[1], options: [{ value: 'all', label: strings.all }, { value: 'unread', label: strings.unread + (unread ? ' ' + unread : '') }] })),
          shown.length ? h('div', { className: 'k-inbox__list' }, shown.map(function (it) {
            return h('button', { key: it.id, type: 'button', className: cx('k-inbox__item', !it.read && 'k-inbox__item--unread'),
              onClick: function () { if (!it.read && p.onRead) p.onRead(it.id); if (p.onItemClick) { p.onItemClick(it); close(); } } },
              it.avatar ? h(Avatar, { name: it.avatar, size: 'md' }) : h('span', { className: 'k-inbox__icon' }, h(Icon, { name: it.icon || 'bell', size: 15 })),
              h('span', { className: 'k-inbox__text' },
                h('span', { className: 'k-inbox__item-title' }, it.title),
                it.description ? h('span', { className: 'k-inbox__desc' }, it.description) : null,
                it.time ? h('span', { className: 'k-inbox__time' }, it.time) : null),
              !it.read ? h('span', { className: 'k-inbox__dot', 'aria-label': strings.unread }) : null);
          })) : h('div', { className: 'k-inbox__empty' }, h(Icon, { name: 'circle-check', size: 20 }), h('p', null, strings.caughtUp)));
      }),
    unread ? h('span', { className: 'k-inbox-trigger__count', 'aria-hidden': true }, unread > 9 ? '9+' : unread) : null);
}

/* ---------- Kanban ----------
   Pointer events, so it works with a mouse, a pen and fingers: on touch, press and hold a card to pick it up.
   Or focus a card and press Alt + an arrow key.
   onMove(id, toColumn, toIndex): toIndex is the card's place in the target column after it has left its old one. */
function Kanban(p) {
  var cols = p.columns || [];
  var ghost = useState(null), over = useState(null);
  var dragRef = R.useRef(null), overRef = R.useRef(null), suppress = R.useRef(false), refocus = R.useRef(null), root = R.useRef(null), hint = R.useId();
  var colsRef = R.useRef(cols); colsRef.current = cols;
  var propsRef = R.useRef(p); propsRef.current = p;

  function locate(id) {
    var cs = colsRef.current;
    for (var c = 0; c < cs.length; c++) for (var i = 0; i < cs[c].items.length; i++) if (cs[c].items[i].id === id) return { col: c, index: i };
    return null;
  }
  function commit(id, toCol, toIndex) {
    var from = locate(id), cs = colsRef.current;
    if (!from || !propsRef.current.onMove) return;
    if (cs[from.col].id === toCol && toIndex > from.index) toIndex -= 1;
    if (cs[from.col].id === toCol && toIndex === from.index) return;
    propsRef.current.onMove(id, toCol, toIndex);
  }
  function indexAt(list, y, dragged) {
    var cards = list ? Array.prototype.filter.call(list.querySelectorAll('[data-card]'), function (c) { return c.getAttribute('data-card') !== String(dragged); }) : [];
    for (var i = 0; i < cards.length; i++) { var r = cards[i].getBoundingClientRect(); if (y < r.top + r.height / 2) return i; }
    return cards.length;
  }
  function setOver(v) { overRef.current = v; over[1](v); }

  function begin(x, y) {
    var s = dragRef.current;
    if (!s || s.active) return;
    s.active = true;
    ghost[1]({ id: s.id, item: s.item, col: s.col, x: x - s.dx, y: y - s.dy, width: s.width });
    if (s.touch && navigator.vibrate) navigator.vibrate(8);
  }
  // The listeners are kept on the drag itself, so the same functions are always removed.
  function stop() {
    var s = dragRef.current;
    if (!s) return;
    if (s.timer) clearTimeout(s.timer);
    var hd = s.handlers;
    window.removeEventListener('pointermove', hd.move);
    window.removeEventListener('pointerup', hd.up);
    window.removeEventListener('pointercancel', hd.cancel);
    window.removeEventListener('touchmove', hd.block);
    document.removeEventListener('keydown', hd.esc);
    dragRef.current = null;
  }
  function onMove(e) {
    var s = dragRef.current;
    if (!s) return;
    var dist = Math.abs(e.clientX - s.startX) + Math.abs(e.clientY - s.startY);
    if (!s.active) {
      // On touch, moving before the hold is done means the person is scrolling.
      if (s.touch) { if (dist > 10) stop(); return; }
      if (dist < 6) return;
      begin(e.clientX, e.clientY);
    }
    e.preventDefault();
    ghost[1](function (g) { return g && Object.assign({}, g, { x: e.clientX - s.dx, y: e.clientY - s.dy }); });
    var el = document.elementFromPoint(e.clientX, e.clientY), col = el && el.closest ? el.closest('[data-col]') : null;
    if (col && root.current && root.current.contains(col)) {
      var next = { col: col.getAttribute('data-col'), index: indexAt(col.querySelector('.k-kanban__list'), e.clientY, s.id) };
      var cur = overRef.current;
      if (!cur || cur.col !== next.col || cur.index !== next.index) setOver(next);
    } else if (overRef.current) setOver(null);
    var box = root.current && root.current.getBoundingClientRect();
    if (box) { if (e.clientX > box.right - 48) root.current.scrollLeft += 14; else if (e.clientX < box.left + 48) root.current.scrollLeft -= 14; }
  }
  function blockScroll(e) { if (dragRef.current && dragRef.current.active) e.preventDefault(); }
  function onUp() {
    var s = dragRef.current, target = overRef.current;
    stop();
    if (s && s.active) {
      suppress.current = true;
      setTimeout(function () { suppress.current = false; }, 0);
      if (target) {
        // The drop index was counted without the dragged card, so put it back for commit's adjustment.
        var from = locate(s.id), index = target.index;
        if (from && colsRef.current[from.col].id === target.col && index >= from.index) index += 1;
        commit(s.id, target.col, index);
      }
    }
    ghost[1](null); setOver(null);
  }
  function onCancel() { stop(); ghost[1](null); setOver(null); }
  function onEsc(e) { if (e.key === 'Escape') onCancel(); }
  function onPointerDown(e, item, col) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (e.target.closest && e.target.closest('button, a, input, textarea, select')) return;
    var r = e.currentTarget.getBoundingClientRect(), touch = e.pointerType !== 'mouse';
    stop();
    var hd = { move: onMove, up: onUp, cancel: onCancel, block: blockScroll, esc: onEsc };
    dragRef.current = { id: item.id, item: item, col: col, startX: e.clientX, startY: e.clientY, dx: e.clientX - r.left, dy: e.clientY - r.top, width: r.width, active: false, touch: touch, handlers: hd };
    if (touch) { var x = e.clientX, y = e.clientY; dragRef.current.timer = setTimeout(function () { begin(x, y); }, 280); }
    window.addEventListener('pointermove', hd.move, { passive: false });
    window.addEventListener('pointerup', hd.up);
    window.addEventListener('pointercancel', hd.cancel);
    window.addEventListener('touchmove', hd.block, { passive: false });
    document.addEventListener('keydown', hd.esc);
  }
  R.useEffect(function () { return function () { stop(); }; }, []);

  function onKey(e, item, colIndex, index) {
    if (e.key === 'Enter' && p.onCardClick) { e.preventDefault(); p.onCardClick(item, cols[colIndex]); return; }
    if (!e.altKey) return;
    var target = null;
    if (e.key === 'ArrowLeft' && colIndex > 0) target = [colIndex - 1, Math.min(index, cols[colIndex - 1].items.length)];
    else if (e.key === 'ArrowRight' && colIndex < cols.length - 1) target = [colIndex + 1, Math.min(index, cols[colIndex + 1].items.length)];
    else if (e.key === 'ArrowUp' && index > 0) target = [colIndex, index - 1];
    else if (e.key === 'ArrowDown' && index < cols[colIndex].items.length - 1) target = [colIndex, index + 2];
    if (!target) return;
    e.preventDefault();
    refocus.current = item.id;
    commit(item.id, cols[target[0]].id, target[1]);
  }
  R.useEffect(function () {
    if (!refocus.current || !root.current) return;
    var el = root.current.querySelector('[data-card="' + refocus.current + '"]');
    refocus.current = null;
    if (el) el.focus();
  });

  var g = ghost[0];
  return h('div', { ref: root, className: cx('k-kanban', g && 'k-kanban--dragging', p.className) },
    h('p', { id: hint, className: 'k-sr-only' }, strings.moveHint),
    cols.map(function (col, c) {
      var at = over[0] && over[0].col === col.id ? over[0].index : -1;
      var items = col.items, n = 0;
      return h('section', { key: col.id, 'data-col': col.id, className: cx('k-kanban__col', at >= 0 && 'k-kanban__col--over'), 'aria-label': typeof col.title === 'string' ? col.title : undefined },
        h('header', { className: 'k-kanban__head' },
          h('h3', { className: 'k-kanban__title' }, col.title),
          h('span', { className: 'k-kanban__count' }, items.length),
          col.action || null),
        h('div', { className: 'k-kanban__list' },
          items.map(function (item, i) {
            var dragging = g && g.id === item.id;
            // The drop line is placed among the cards that are not being dragged.
            var line = !dragging && at === n ? h('div', { key: 'drop', className: 'k-kanban__drop', 'aria-hidden': true }) : null;
            if (!dragging) n++;
            return h(R.Fragment, { key: item.id }, line,
              h('div', {
                'data-card': item.id, className: cx('k-kanban__card', dragging && 'k-kanban__card--dragging'),
                tabIndex: 0, role: p.onCardClick ? 'button' : undefined, 'aria-describedby': hint,
                onPointerDown: function (e) { onPointerDown(e, item, col.id); },
                onClick: p.onCardClick ? function () { if (!suppress.current) p.onCardClick(item, col); } : undefined,
                onKeyDown: function (e) { onKey(e, item, c, i); }
              }, p.renderCard ? p.renderCard(item, col) : h('span', { className: 'k-kanban__card-title' }, item.title)));
          }),
          at >= n ? h('div', { className: 'k-kanban__drop', 'aria-hidden': true }) : null,
          items.length === 0 && at < 0 ? h('p', { className: 'k-kanban__empty' }, p.emptyText || strings.empty) : null));
    }),
    g ? h('div', { className: 'k-kanban__ghost', style: { width: g.width, transform: 'translate(' + g.x + 'px,' + g.y + 'px)' }, 'aria-hidden': true },
      p.renderCard ? p.renderCard(g.item, null) : h('span', { className: 'k-kanban__card-title' }, g.item.title)) : null);
}

/* ---------- MultiSelect ---------- */
function MultiSelect(p) {
  var auto = R.useId(), id = p.id || auto;
  var opts = (p.options || []).map(function (o) { return typeof o === 'string' ? { value: o, label: o } : o; });
  var st = useControlled(p.value, p.defaultValue || []), values = st[0] || [];
  var open = useState(false), q = useState(''), act = useState(0), pos = useState(null);
  var presence = usePresence(open[0], 'duration-fast');
  var wrap = R.useRef(null), field = R.useRef(null), input = R.useRef(null), list = R.useRef(null);
  var query = q[0].trim().toLowerCase();
  var shown = opts.filter(function (o) { return !query || String(o.label).toLowerCase().indexOf(query) >= 0; });
  var selectable = shown.filter(function (o) { return !o.disabled; });
  var labelOf = function (v) { var o = opts.filter(function (x) { return x.value === v; })[0]; return o ? o.label : v; };
  var full = p.max != null && values.length >= p.max, note = p.error || p.hint;

  function place() {
    if (!field.current) return;
    var r = field.current.getBoundingClientRect(), estimate = Math.min(280, opts.length * 30 + 8);
    var below = window.innerHeight - r.bottom, up = below < estimate + 12 && r.top > below;
    pos[1]({ left: r.left, width: r.width, top: up ? undefined : r.bottom + 6, bottom: up ? window.innerHeight - r.top + 6 : undefined, up: up });
  }
  function show() { if (p.disabled || open[0]) return; place(); act[1](0); open[1](true); }
  function hide() { open[1](false); q[1](''); }
  function set(next) { st[1](next); if (p.onChange) p.onChange(next); }
  function toggle(o) {
    if (!o || o.disabled) return;
    var on = values.indexOf(o.value) >= 0;
    if (!on && full) return;
    set(on ? values.filter(function (v) { return v !== o.value; }) : values.concat([o.value]));
    q[1]('');
    if (input.current) input.current.focus();
  }
  // The field grows as tags wrap, so the list follows it.
  useIsoLayout(function () { if (open[0]) place(); }, [values.length]);
  R.useEffect(function () {
    if (!open[0]) return;
    function off(e) { if (wrap.current && !wrap.current.contains(e.target)) hide(); }
    function scroll(e) { if (!list.current || !list.current.contains(e.target)) hide(); }
    function resize() { hide(); }
    document.addEventListener('mousedown', off); window.addEventListener('scroll', scroll, true); window.addEventListener('resize', resize);
    return function () { document.removeEventListener('mousedown', off); window.removeEventListener('scroll', scroll, true); window.removeEventListener('resize', resize); };
  }, [open[0]]);
  function onKey(e) {
    if (e.key === 'Backspace' && !q[0] && values.length) { set(values.slice(0, -1)); return; }
    if (!open[0]) { if (e.key === 'ArrowDown' || e.key === 'Enter') { e.preventDefault(); show(); } return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); act[1](Math.min(selectable.length - 1, act[0] + 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); act[1](Math.max(0, act[0] - 1)); }
    else if (e.key === 'Enter') { e.preventDefault(); toggle(selectable[act[0]]); }
    else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); hide(); }
    else if (e.key === 'Tab') hide();
  }
  var active = open[0] ? selectable[act[0]] : null, optionId = function (o) { return id + '-o-' + opts.indexOf(o); };
  return h('div', { ref: wrap, className: cx('k-field', p.error && 'k-field--error', p.className) },
    p.label ? h('label', { className: 'k-field__label', htmlFor: id }, p.label) : null,
    h('div', { ref: field, className: cx('k-input k-ms', open[0] && 'k-ms--open', p.disabled && 'k-ms--disabled'), onMouseDown: function (e) { if (e.target !== input.current) e.preventDefault(); if (input.current) input.current.focus(); show(); } },
      values.map(function (v) {
        return h('span', { key: v, className: 'k-tag' }, h('span', { className: 'k-tag__label' }, labelOf(v)),
          h('button', { type: 'button', className: 'k-tag__remove', 'aria-label': strings.remove + ' ' + labelOf(v), disabled: p.disabled,
            onMouseDown: function (e) { e.preventDefault(); e.stopPropagation(); }, onClick: function () { set(values.filter(function (x) { return x !== v; })); } }, h(Icon, { name: 'xmark', size: 12, weight: 2.5 })));
      }),
      h('input', { ref: input, id: id, className: 'k-ms__input', value: q[0], disabled: p.disabled, placeholder: values.length ? '' : (p.placeholder || ''),
        role: 'combobox', 'aria-expanded': open[0], 'aria-controls': id + '-list', 'aria-autocomplete': 'list', 'aria-activedescendant': active ? optionId(active) : undefined,
        'aria-label': p.label ? undefined : p['aria-label'], 'aria-describedby': note ? id + '-note' : undefined,
        onChange: function (e) { q[1](e.target.value); act[1](0); show(); }, onFocus: show, onKeyDown: onKey }),
      h(Icon, { name: 'chevron-down', size: 16, className: 'k-dd__chev' })),
    p.name ? values.map(function (v) { return h('input', { key: v, type: 'hidden', name: p.name, value: v }); }) : null,
    note ? h('p', { id: id + '-note', className: 'k-field__note' }, p.error ? h(Icon, { name: 'info', size: 13 }) : null, note) : null,
    presence.show && pos[0] ? h('div', { className: cx('k-menu k-dd__panel', pos[0].up && 'k-dd__panel--up', presence.leaving && 'k-leaving'), style: { left: pos[0].left, top: pos[0].top, bottom: pos[0].bottom, width: pos[0].width } },
      h('div', { ref: list, id: id + '-list', role: 'listbox', 'aria-multiselectable': true, className: 'k-dd__list' },
        selectable.length === 0 ? h('p', { className: 'k-dd__empty' }, strings.noResults + ' "' + q[0] + '"') : null,
        shown.map(function (o) {
          var on = values.indexOf(o.value) >= 0, isActive = o === active, blocked = o.disabled || (!on && full);
          return h('div', { key: String(o.value), id: optionId(o), role: 'option', 'aria-selected': on, 'aria-disabled': blocked || undefined, 'data-active': isActive || undefined,
            className: cx('k-menu__item k-dd__option', isActive && 'k-menu__item--active', blocked && 'k-dd__option--disabled'),
            onMouseMove: function () { if (!o.disabled && !isActive) act[1](selectable.indexOf(o)); },
            onMouseDown: function (e) { e.preventDefault(); }, onClick: function () { toggle(o); } },
            h('span', { className: 'k-menu__check' }, on ? h(Icon, { name: 'check', size: 13, weight: 2.5 }) : null),
            h('span', { className: 'k-menu__label' }, o.label, o.description ? h('span', { className: 'k-dd__desc' }, o.description) : null));
        }))) : null);
}

/* ---------- FileDrop ---------- */
function formatBytes(n) {
  var units = ['B', 'KB', 'MB', 'GB'], i = 0;
  while (n >= 1024 && i < units.length - 1) { n /= 1024; i++; }
  return (i ? n.toLocaleString(strings.locale, { maximumFractionDigits: 1 }) : n) + ' ' + units[i];
}
function acceptsFile(file, accept) {
  if (!accept) return true;
  return accept.split(',').some(function (rule) {
    rule = rule.trim().toLowerCase();
    if (!rule) return false;
    if (rule.charAt(0) === '.') return file.name.toLowerCase().slice(-rule.length) === rule;
    if (rule.slice(-2) === '/*') return (file.type || '').toLowerCase().indexOf(rule.slice(0, -1)) === 0;
    return (file.type || '').toLowerCase() === rule;
  });
}
function FileDrop(p) {
  var input = R.useRef(null), over = useState(false), rejected = useState([]), id = R.useId();
  function take(list) {
    var files = Array.prototype.slice.call(list || []), ok = [], bad = [];
    files.forEach(function (f) {
      if (p.maxSize && f.size > p.maxSize) bad.push(f.name + ' ' + strings.tooLarge + ' ' + formatBytes(p.maxSize) + '.');
      else if (!acceptsFile(f, p.accept)) bad.push(f.name + ' ' + strings.wrongType + '.');
      else ok.push(f);
    });
    if (!p.multiple) ok = ok.slice(0, 1);
    rejected[1](bad);
    if (ok.length && p.onFiles) p.onFiles(ok);
  }
  var files = p.files || [];
  return h('div', { className: cx('k-filedrop', p.className) },
    p.label ? h('p', { className: 'k-field__label', id: id + '-label' }, p.label) : null,
    h('div', {
      role: 'button', tabIndex: p.disabled ? -1 : 0, 'aria-labelledby': p.label ? id + '-label' : undefined, 'aria-describedby': id + '-hint', 'aria-disabled': p.disabled || undefined,
      className: cx('k-filedrop__zone', over[0] && 'k-filedrop__zone--over', p.disabled && 'k-filedrop__zone--disabled'),
      onClick: function () { if (!p.disabled && input.current) input.current.click(); },
      onKeyDown: function (e) { if ((e.key === 'Enter' || e.key === ' ') && !p.disabled) { e.preventDefault(); input.current.click(); } },
      onDragOver: function (e) { if (p.disabled) return; e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; if (!over[0]) over[1](true); },
      onDragLeave: function (e) { if (!e.currentTarget.contains(e.relatedTarget)) over[1](false); },
      onDrop: function (e) { e.preventDefault(); over[1](false); if (!p.disabled) take(e.dataTransfer.files); }
    },
      h('span', { className: 'k-filedrop__icon' }, h(Icon, { name: 'upload', size: 18 })),
      h('span', { className: 'k-filedrop__title' }, strings.dropFiles + ' ', h('span', { className: 'k-filedrop__browse' }, strings.browse)),
      h('span', { id: id + '-hint', className: 'k-filedrop__hint' }, p.hint || '')),
    h('input', { ref: input, type: 'file', className: 'k-sr-only', tabIndex: -1, accept: p.accept, multiple: p.multiple, name: p.name, disabled: p.disabled,
      onChange: function (e) { take(e.target.files); e.target.value = ''; } }),
    rejected[0].length ? h('div', { className: 'k-filedrop__errors', role: 'alert' }, rejected[0].map(function (m, i) { return h('p', { key: i, className: 'k-field__note' }, h(Icon, { name: 'info', size: 13 }), m); })) : null,
    files.length ? h('ul', { className: 'k-filelist' }, files.map(function (f) {
      var status = f.error ? h('span', { className: 'k-filelist__error' }, f.error)
        : f.progress != null && f.progress < 1 ? h(ProgressBar, { value: f.progress, label: f.name })
        : h('span', { className: 'k-filelist__meta' }, formatBytes(f.size || 0) + (f.progress != null ? ' · ' + strings.uploaded : ''));
      return h('li', { key: f.id || f.name, className: cx('k-filelist__item', f.error && 'k-filelist__item--error') },
        h('span', { className: 'k-filelist__icon' }, h(Icon, { name: 'file', size: 15 })),
        h('span', { className: 'k-filelist__text' }, h('span', { className: 'k-filelist__name' }, f.name), status),
        p.onRemove ? h(Button, { size: 'sm', variant: 'ghost', icon: 'xmark', 'aria-label': strings.remove + ' ' + f.name, onClick: function () { p.onRemove(f.id || f.name); } }) : null);
    })) : null);
}

/* ---------- Timeline ---------- */
function Timeline(p) {
  return h('ol', { className: cx('k-timeline', p.className), 'aria-label': p['aria-label'] }, (p.items || []).map(function (it, i) {
    return h('li', { key: it.id || i, className: 'k-timeline__item' },
      h('span', { className: 'k-timeline__marker' },
        it.avatar ? h(Avatar, { name: it.avatar, size: 'sm' }) : it.icon ? h('span', { className: 'k-timeline__icon' }, h(Icon, { name: it.icon, size: 13 })) : h('span', { className: 'k-timeline__dot' })),
      h('div', { className: 'k-timeline__body' },
        h('p', { className: 'k-timeline__title' }, it.title),
        it.description ? h('div', { className: 'k-timeline__desc' }, it.description) : null,
        it.time ? h('p', { className: 'k-timeline__time' }, it.time) : null));
  }));
}

/* ---------- Stepper ---------- */
function Stepper(p) {
  var steps = p.steps || [], cur = p.current || 0;
  return h('ol', { className: cx('k-stepper', p.className), 'aria-label': p['aria-label'] }, steps.map(function (s, i) {
    var state = i < cur ? 'done' : i === cur ? 'current' : 'upcoming';
    var body = [
      h('span', { key: 'm', className: 'k-step__marker' }, state === 'done' ? h(Icon, { name: 'check', size: 13, weight: 2.75, label: strings.completed }) : i + 1),
      h('span', { key: 't', className: 'k-step__text' }, h('span', { className: 'k-step__label' }, s.label), s.description ? h('span', { className: 'k-step__desc' }, s.description) : null)
    ];
    return h('li', { key: s.id || i, className: cx('k-step', 'k-step--' + state), 'aria-current': state === 'current' ? 'step' : undefined },
      p.onStepClick && state === 'done'
        ? h('button', { type: 'button', className: 'k-step__btn', onClick: function () { p.onStepClick(i); } }, body)
        : h('span', { className: 'k-step__btn' }, body));
  }));
}

/* ---------- Floating lists ----------
   Shared by TimePicker and Combobox: position a list under a field and close it on outside clicks, page scroll and resize. */
function useFloating(open, wrap, field, list, onClose, estimate) {
  var pos = useState(null);
  function place() {
    if (!field.current) return;
    var r = field.current.getBoundingClientRect();
    var below = window.innerHeight - r.bottom, up = below < estimate + 12 && r.top > below;
    pos[1]({ left: r.left, width: r.width, top: up ? undefined : r.bottom + 6, bottom: up ? window.innerHeight - r.top + 6 : undefined, up: up });
  }
  useIsoLayout(function () { if (open) place(); }, [open]);
  R.useEffect(function () {
    if (!open) return;
    function down(e) { if (wrap.current && !wrap.current.contains(e.target)) onClose(); }
    function scroll(e) { if (!list.current || !list.current.contains(e.target)) onClose(); }
    function resize() { onClose(); }
    document.addEventListener('mousedown', down); window.addEventListener('scroll', scroll, true); window.addEventListener('resize', resize);
    return function () { document.removeEventListener('mousedown', down); window.removeEventListener('scroll', scroll, true); window.removeEventListener('resize', resize); };
  }, [open]);
  return pos[0];
}
function scrollActiveIntoList(list) {
  var l = list.current, el = l && l.querySelector('[data-active]');
  if (!el) return;
  if (el.offsetTop < l.scrollTop) l.scrollTop = el.offsetTop - 4;
  else if (el.offsetTop + el.offsetHeight > l.scrollTop + l.clientHeight) l.scrollTop = el.offsetTop + el.offsetHeight - l.clientHeight + 4;
}

/* ---------- Number and currency ---------- */
function separators(locale) {
  var parts = (12345.6).toLocaleString(locale).replace(/\d/g, '');
  return { group: parts.length > 1 ? parts.charAt(0) : '', decimal: parts.charAt(parts.length - 1) || '.' };
}
// Reads "1.234,50" in Danish and "1,234.50" in English; a lone "12.5" in Danish is still read as a decimal.
function parseLocaleNumber(text, locale) {
  var raw = String(text).trim();
  if (!raw) return null;
  var s = raw.replace(/\s/g, '').replace(/[^\d.,-]/g, '');
  // Text without any digits is a mistake, not an empty field.
  if (!s || s === '-') return NaN;
  var sep = separators(locale);
  if (sep.decimal === ',' && s.indexOf(',') < 0 && /^-?\d+\.\d{1,2}$|^-?\d+\.\d{4,}$/.test(s)) return Number(s);
  if (sep.group) s = s.split(sep.group).join('');
  s = s.replace(sep.decimal, '.');
  var n = Number(s);
  return isNaN(n) ? NaN : n;
}
function NumberField(p) {
  var auto = R.useId(), id = p.id || auto, locale = p.locale || strings.locale, decimals = p.decimals || 0, step = p.step || 1;
  var st = useControlled(p.value, p.defaultValue != null ? p.defaultValue : null), v = st[0];
  var fmt = function (n) { return n == null || isNaN(n) ? '' : Number(n).toLocaleString(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }); };
  var text = useState(fmt(v)), focused = useState(false), note = p.error || p.hint;
  R.useEffect(function () { if (!focused[0]) text[1](fmt(v)); }, [v, locale]);
  function clamp(n) {
    if (p.min != null) n = Math.max(p.min, n);
    if (p.max != null) n = Math.min(p.max, n);
    var f = Math.pow(10, decimals);
    return Math.round(n * f) / f;
  }
  function set(n) { st[1](n); if (p.onChange) p.onChange(n); }
  function commit(raw) {
    var n = parseLocaleNumber(raw, locale);
    if (n === null) { set(null); text[1](''); return; }
    if (isNaN(n)) { text[1](fmt(v)); return; }
    n = clamp(n); set(n); text[1](fmt(n));
  }
  function bump(dir) {
    var base = parseLocaleNumber(text[0], locale);
    if (base === null || isNaN(base)) base = v == null ? (p.min != null ? p.min : 0) : v;
    var n = clamp(base + dir * step); set(n); text[1](fmt(n));
  }
  return h('div', { className: cx('k-field', p.error && 'k-field--error', p.className) },
    p.label ? h('label', { className: 'k-field__label', htmlFor: id }, p.label) : null,
    h('div', { className: cx('k-input k-number', p.disabled && 'k-number--disabled') },
      p.prefix ? h('span', { className: 'k-number__affix' }, p.prefix) : null,
      h('input', { id: id, name: p.name, className: 'k-number__input', type: 'text', inputMode: decimals ? 'decimal' : 'numeric', autoComplete: 'off', disabled: p.disabled,
        placeholder: p.placeholder, value: text[0], role: 'spinbutton', 'aria-valuenow': v == null ? undefined : v, 'aria-valuemin': p.min, 'aria-valuemax': p.max,
        'aria-label': p.label ? undefined : p['aria-label'], 'aria-invalid': p.error ? true : undefined, 'aria-describedby': note ? id + '-note' : undefined,
        onFocus: function () { focused[1](true); },
        onBlur: function () { focused[1](false); commit(text[0]); },
        onChange: function (e) { text[1](e.target.value); },
        onKeyDown: function (e) {
          if (e.key === 'ArrowUp') { e.preventDefault(); bump(1); }
          else if (e.key === 'ArrowDown') { e.preventDefault(); bump(-1); }
          else if (e.key === 'Enter') commit(text[0]);
        } }),
      p.unit ? h('span', { className: 'k-number__affix' }, p.unit) : null,
      p.stepper !== false ? h('span', { className: 'k-number__steps' },
        h('button', { type: 'button', tabIndex: -1, className: 'k-number__step', 'aria-label': strings.decrease, disabled: p.disabled || (p.min != null && v != null && v <= p.min), onClick: function () { bump(-1); } }, h(Icon, { name: 'minus', size: 13, weight: 2.5 })),
        h('button', { type: 'button', tabIndex: -1, className: 'k-number__step', 'aria-label': strings.increase, disabled: p.disabled || (p.max != null && v != null && v >= p.max), onClick: function () { bump(1); } }, h(Icon, { name: 'plus', size: 13, weight: 2.5 }))) : null),
    note ? h('p', { id: id + '-note', className: 'k-field__note' }, p.error ? h(Icon, { name: 'info', size: 13 }) : null, note) : null);
}
var CURRENCY_AFFIX = { DKK: { unit: 'kr.' }, SEK: { unit: 'kr' }, NOK: { unit: 'kr' }, EUR: { unit: '€' }, USD: { prefix: '$' }, GBP: { prefix: '£' } };
function CurrencyField(p) {
  var currency = p.currency || 'DKK', affix = CURRENCY_AFFIX[currency] || { unit: currency };
  return h(NumberField, Object.assign({}, p, {
    decimals: p.decimals != null ? p.decimals : 2, stepper: false,
    // Danish kroner are written the Danish way: 1.234,50 kr.
    locale: p.locale || (currency === 'DKK' ? 'da-DK' : strings.locale),
    unit: p.unit || affix.unit, prefix: p.prefix || affix.prefix
  }));
}

/* ---------- One-time code ---------- */
function CodeInput(p) {
  var length = p.length || 6, boxes = R.useRef([]), id = R.useId();
  var st = useControlled(p.value, p.defaultValue || ''), v = String(st[0] || '').slice(0, length);
  function set(next, focusAt) {
    next = String(next).replace(/\D/g, '').slice(0, length);
    st[1](next);
    if (p.onChange) p.onChange(next);
    if (next.length === length && next !== v && p.onComplete) p.onComplete(next);
    if (focusAt != null) { var el = boxes.current[Math.max(0, Math.min(focusAt, length - 1))]; if (el) el.focus(); }
  }
  var cells = [];
  for (var i = 0; i < length; i++) (function (i) {
    cells.push(h('input', {
      key: i, ref: function (el) { boxes.current[i] = el; },
      className: cx('k-code__box', length === 6 && i === 3 && 'k-code__box--gap'), inputMode: 'numeric', autoComplete: i === 0 ? 'one-time-code' : 'off',
      maxLength: i === 0 ? length : 1, value: v.charAt(i), disabled: p.disabled, 'aria-invalid': p.error ? true : undefined,
      'aria-label': strings.digit + ' ' + (i + 1) + ' ' + strings.of + ' ' + length, autoFocus: p.autoFocus && i === 0,
      onFocus: function (e) { e.target.select(); },
      onChange: function (e) {
        var d = e.target.value.replace(/\D/g, '');
        if (!d) return;
        // A whole code arrives at once when it is pasted or filled in from a text message.
        if (d.length > 1) { set(d, d.length); return; }
        var at = Math.min(i, v.length);
        set(v.slice(0, at) + d + v.slice(at + 1), at + 1);
      },
      onKeyDown: function (e) {
        if (e.key === 'Backspace') { e.preventDefault(); if (v.charAt(i)) set(v.slice(0, i) + v.slice(i + 1), i); else if (i > 0) set(v.slice(0, i - 1) + v.slice(i), i - 1); }
        else if (e.key === 'ArrowLeft' && i > 0) { e.preventDefault(); boxes.current[i - 1].focus(); }
        else if (e.key === 'ArrowRight' && i < length - 1) { e.preventDefault(); boxes.current[Math.min(i + 1, v.length)].focus(); }
      },
      onPaste: function (e) { e.preventDefault(); set((e.clipboardData || window.clipboardData).getData('text'), length); }
    }));
  })(i);
  var note = p.error || p.hint;
  return h('div', { className: cx('k-field', p.error && 'k-field--error', p.className) },
    p.label ? h('span', { id: id + '-label', className: 'k-field__label' }, p.label) : null,
    h('div', { className: 'k-code', role: 'group', 'aria-labelledby': p.label ? id + '-label' : undefined, 'aria-label': p.label ? undefined : p['aria-label'] }, cells),
    note ? h('p', { className: 'k-field__note' }, p.error ? h(Icon, { name: 'info', size: 13 }) : null, note) : null);
}

/* ---------- Password ---------- */
function passwordScore(pw) {
  if (!pw) return 0;
  var s = 0;
  if (pw.length >= 8) s++;
  if (pw.length >= 12) s++;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) s++;
  if (/\d/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  if (pw.length < 8 || /^(password|qwerty|123456|adgangskode|letmein)/i.test(pw) || /(.)\1{3,}/.test(pw)) s = Math.min(s, 1);
  return Math.max(1, Math.min(4, s));
}
function PasswordField(p) {
  var auto = R.useId(), id = p.id || auto, show = useState(false);
  var own = useState(p.defaultValue || ''), value = p.value != null ? p.value : own[0];
  var level = p.strength ? passwordScore(value) : 0, note = p.error || p.hint;
  var words = [null, strings.weak, strings.fair, strings.good, strings.strong], tones = [null, 'danger', 'warning', 'success', 'success'];
  var rest = omit(p, ['label', 'hint', 'error', 'className', 'id', 'strength', 'onChange', 'defaultValue', 'value']);
  return h('div', { className: cx('k-field', p.error && 'k-field--error', p.className) },
    p.label ? h('label', { className: 'k-field__label', htmlFor: id }, p.label) : null,
    h('div', { className: 'k-password' },
      h('input', Object.assign({ id: id, className: 'k-input k-password__input', type: show[0] ? 'text' : 'password', value: value, autoComplete: p.strength ? 'new-password' : 'current-password',
        'aria-invalid': p.error ? true : undefined, 'aria-describedby': cx(note && id + '-note', level && id + '-strength') || undefined,
        onChange: function (e) { own[1](e.target.value); if (p.onChange) p.onChange(e); } }, rest)),
      h(Button, { size: 'sm', variant: 'ghost', className: 'k-password__toggle', icon: show[0] ? 'eye-off' : 'eye', 'aria-label': show[0] ? strings.hidePassword : strings.showPassword, 'aria-pressed': show[0], onClick: function () { show[1](!show[0]); } })),
    level ? h('div', { id: id + '-strength', className: 'k-strength', 'aria-live': 'polite' },
      h('span', { className: 'k-strength__bars', 'aria-hidden': true }, [1, 2, 3, 4].map(function (n) { return h('span', { key: n, className: cx('k-strength__bar', n <= level && 'k-strength__bar--' + tones[level]) }); })),
      h('span', { className: 'k-strength__word k-strength__word--' + tones[level] }, h('span', { className: 'k-sr-only' }, strings.passwordStrength + ': '), words[level])) : null,
    note ? h('p', { id: id + '-note', className: 'k-field__note' }, p.error ? h(Icon, { name: 'info', size: 13 }) : null, note) : null);
}

/* ---------- Date range ---------- */
function rangePresets() {
  var t = fromISODate(toISODate(new Date())), iso = toISODate;
  return [
    { label: strings.last7, start: iso(addDays(t, -6)), end: iso(t) },
    { label: strings.last30, start: iso(addDays(t, -29)), end: iso(t) },
    { label: strings.thisMonth, start: iso(new Date(t.getFullYear(), t.getMonth(), 1)), end: iso(t) },
    { label: strings.lastMonth, start: iso(new Date(t.getFullYear(), t.getMonth() - 1, 1)), end: iso(new Date(t.getFullYear(), t.getMonth(), 0)) },
    { label: strings.thisYear, start: iso(new Date(t.getFullYear(), 0, 1)), end: iso(t) }
  ];
}
function formatRange(range) {
  var s = range && fromISODate(range.start), e = range && fromISODate(range.end);
  if (!s || !e) return '';
  return formatDate(s, s.getFullYear() === e.getFullYear() ? { month: 'short', day: 'numeric' } : { dateStyle: 'medium' }) + ' – ' + formatDate(e, { dateStyle: 'medium' });
}
function DateRangePicker(p) {
  var auto = R.useId(), id = p.id || auto;
  var st = useControlled(p.value, p.defaultValue || null), v = st[0];
  var draft = useState(null), hover = useState(null), base = useState(toISODate(new Date()));
  var presets = p.presets || rangePresets(), note = p.error || p.hint;
  function firstOf(d) { return toISODate(new Date(d.getFullYear(), d.getMonth(), 1)); }
  function opened(open) {
    if (!open) return;
    draft[1](null); hover[1](null);
    var s = fromISODate(v && v.start), t = new Date();
    base[1](firstOf(s || new Date(t.getFullYear(), t.getMonth() - 1, 1)));
  }
  function apply(range, close) { st[1](range); if (p.onChange) p.onChange(range); close(); }
  return h('div', { className: cx('k-field', p.error && 'k-field--error', p.className) },
    p.label ? h('label', { className: 'k-field__label', htmlFor: id }, p.label) : null,
    h(Popover, { className: 'k-popover-anchor--block', width: 744, estimateHeight: 340, 'aria-label': p.label || strings.chooseRange, onOpenChange: opened,
      trigger: h('button', { id: id, type: 'button', disabled: p.disabled, className: cx('k-input k-dd__trigger', !v && 'k-dd__trigger--empty'), 'aria-label': p.label ? undefined : p['aria-label'], 'aria-describedby': note ? id + '-note' : undefined },
        h('span', { className: 'k-dd__value' }, v ? formatRange(v) : (p.placeholder || strings.chooseRange)),
        h(Icon, { name: 'calendar', size: 15, className: 'k-dd__chev' })) },
      function (close) {
        var left = fromISODate(base[0]), right = new Date(left.getFullYear(), left.getMonth() + 1, 1), d = draft[0];
        var start = d ? d.start : v && v.start, end = d ? d.end : v && v.end;
        function pick(iso) {
          if (!d || d.end) { draft[1]({ start: iso, end: null }); return; }
          var a = d.start, b = iso;
          if (b < a) { var t = a; a = b; b = t; }
          apply({ start: a, end: b }, close);
        }
        function shift(iso, by) { var x = fromISODate(iso); base[1](firstOf(new Date(x.getFullYear(), x.getMonth() + by, 1))); }
        var shared = { size: 'sm', value: null, rangeStart: start, rangeEnd: d && !d.end ? null : end, hoverDate: d && !d.end ? hover[0] : null, onDayHover: hover[1], onChange: pick, weekStartsOn: p.weekStartsOn };
        return h('div', { className: 'k-range' },
          h('div', { className: 'k-range__presets' }, presets.map(function (pr) {
            var on = v && v.start === pr.start && v.end === pr.end;
            return h('button', { key: pr.label, type: 'button', className: cx('k-range__preset', on && 'k-range__preset--on'), 'aria-pressed': on, onClick: function () { apply({ start: pr.start, end: pr.end }, close); } }, pr.label);
          })),
          h('div', { className: 'k-range__months' },
            h(Calendar, Object.assign({ nav: 'prev', autoFocus: true, date: toISODate(left), onDateChange: function (iso) { shift(iso, 0); } }, shared)),
            h(Calendar, Object.assign({ nav: 'next', className: 'k-range__second', date: toISODate(right), onDateChange: function (iso) { shift(iso, -1); } }, shared))));
      }),
    note ? h('p', { id: id + '-note', className: 'k-field__note' }, note) : null);
}

/* ---------- Time ---------- */
// "930", "9:30", "9.30", "9" and "2pm" all become 24-hour "HH:MM".
function parseTime(text) {
  var t = String(text || '').trim().toLowerCase().replace(/[.\s]/g, ':').replace(/:+/g, ':').replace(/:(am|pm)$/, '$1');
  if (!t) return null;
  var m = /^(\d{1,2})(?::?(\d{2}))?(am|pm)?$/.exec(t);
  if (!m) return undefined;
  var hh = +m[1], mm = m[2] ? +m[2] : 0;
  if (m[3] === 'pm' && hh < 12) hh += 12;
  if (m[3] === 'am' && hh === 12) hh = 0;
  return hh > 23 || mm > 59 ? undefined : pad2(hh) + ':' + pad2(mm);
}
function TimePicker(p) {
  var auto = R.useId(), id = p.id || auto, step = p.step || 15;
  var st = useControlled(p.value, p.defaultValue || null), v = st[0];
  var text = useState(v || ''), open = useState(false), act = useState(0);
  var wrap = R.useRef(null), field = R.useRef(null), list = R.useRef(null), note = p.error || p.hint;
  var lo = timeToMinutes(p.min || '00:00'), hi = timeToMinutes(p.max || '23:59'), slots = [];
  for (var m = lo; m <= hi; m += step) slots.push(minutesToTime(m));
  R.useEffect(function () { if (!open[0]) text[1](v || ''); }, [v]);
  function nearest(t) {
    var want = timeToMinutes(t);
    if (want == null) { var now = new Date(); want = now.getHours() * 60 + now.getMinutes(); }
    var best = 0;
    slots.forEach(function (s, i) { if (Math.abs(timeToMinutes(s) - want) < Math.abs(timeToMinutes(slots[best]) - want)) best = i; });
    return best;
  }
  function show() { if (p.disabled || open[0]) return; act[1](nearest(v || p.near || '09:00')); open[1](true); }
  function hide() { open[1](false); }
  function set(t) { st[1](t); text[1](t || ''); if (p.onChange) p.onChange(t); }
  function commitText() {
    var t = parseTime(text[0]);
    if (t === null) set(null); else if (t === undefined) text[1](v || ''); else set(t);
  }
  var pos = useFloating(open[0], wrap, field, list, function () { hide(); commitText(); }, 280);
  R.useEffect(function () { if (open[0]) scrollActiveIntoList(list); }, [open[0], act[0], pos]);
  function onKey(e) {
    if (!open[0]) { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); show(); } return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); act[1](Math.min(slots.length - 1, act[0] + 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); act[1](Math.max(0, act[0] - 1)); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      var typed = parseTime(text[0]);
      set(typed && typed !== v ? typed : slots[act[0]]);
      hide();
    }
    else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); text[1](v || ''); hide(); }
    else if (e.key === 'Tab') { hide(); commitText(); }
  }
  var optionId = function (i) { return id + '-t-' + i; };
  return h('div', { ref: wrap, className: cx('k-field', p.error && 'k-field--error', p.className) },
    p.label ? h('label', { className: 'k-field__label', htmlFor: id }, p.label) : null,
    h('div', { ref: field, className: cx('k-input k-time', open[0] && 'k-ms--open') },
      h('input', { id: id, name: p.name, className: 'k-time__input', value: text[0], placeholder: p.placeholder || '09:00', disabled: p.disabled, autoComplete: 'off', inputMode: 'numeric',
        role: 'combobox', 'aria-expanded': open[0], 'aria-controls': id + '-list', 'aria-activedescendant': open[0] ? optionId(act[0]) : undefined,
        'aria-label': p.label ? undefined : p['aria-label'] || strings.chooseTime, 'aria-describedby': note ? id + '-note' : undefined,
        onFocus: show, onClick: show, onChange: function (e) { text[1](e.target.value); var t = parseTime(e.target.value); if (t) act[1](nearest(t)); if (!open[0]) show(); },
        onBlur: function (e) { if (!wrap.current.contains(e.relatedTarget)) { hide(); commitText(); } }, onKeyDown: onKey }),
      h(Icon, { name: 'clock', size: 15, className: 'k-dd__chev' })),
    note ? h('p', { id: id + '-note', className: 'k-field__note' }, p.error ? h(Icon, { name: 'info', size: 13 }) : null, note) : null,
    open[0] && pos ? h('div', { className: cx('k-menu k-dd__panel', pos.up && 'k-dd__panel--up'), style: { left: pos.left, top: pos.top, bottom: pos.bottom, width: Math.max(pos.width, 140) } },
      h('div', { ref: list, id: id + '-list', role: 'listbox', className: 'k-dd__list' }, slots.map(function (s, i) {
        var on = s === v, active = i === act[0];
        return h('div', { key: s, id: optionId(i), role: 'option', 'aria-selected': on, 'data-active': active || undefined,
          className: cx('k-menu__item k-dd__option', active && 'k-menu__item--active'),
          onMouseMove: function () { if (!active) act[1](i); }, onMouseDown: function (e) { e.preventDefault(); }, onClick: function () { set(s); hide(); } },
          h('span', { className: 'k-menu__check' }, on ? h(Icon, { name: 'check', size: 13, weight: 2.5 }) : null),
          h('span', { className: 'k-menu__label k-time__slot' }, s));
      }))) : null);
}

/* ---------- Combobox ----------
   Search a large or remote list as you type. loadOptions(query) returns options or a promise of them. */
function Combobox(p) {
  var auto = R.useId(), id = p.id || auto, debounce = p.debounce != null ? p.debounce : 250, minChars = p.minChars != null ? p.minChars : 1;
  var st = useControlled(p.value, p.defaultValue || null), v = st[0];
  var text = useState(v ? v.label : ''), open = useState(false), results = useState([]), status = useState('idle'), act = useState(0);
  var wrap = R.useRef(null), field = R.useRef(null), input = R.useRef(null), list = R.useRef(null), req = R.useRef(0), timer = R.useRef(null);
  var note = p.error || p.hint;
  R.useEffect(function () { if (!open[0]) text[1](v ? v.label : ''); }, [v]);
  R.useEffect(function () { return function () { clearTimeout(timer.current); }; }, []);
  function search(q) {
    clearTimeout(timer.current);
    if (q.trim().length < minChars) { req.current++; results[1](p.defaultOptions || []); status[1](p.defaultOptions ? 'done' : 'idle'); return; }
    status[1]('loading');
    var n = ++req.current;
    timer.current = setTimeout(function () {
      Promise.resolve().then(function () { return p.loadOptions(q); }).then(function (found) {
        if (n !== req.current) return;
        results[1](found || []); status[1]('done'); act[1](0);
      }, function () { if (n === req.current) status[1]('error'); });
    }, debounce);
  }
  function show() { if (p.disabled || open[0]) return; open[1](true); search(text[0] === (v ? v.label : '') ? '' : text[0]); }
  function hide() { open[1](false); text[1](v ? v.label : ''); }
  function set(o) { st[1](o); if (p.onChange) p.onChange(o); text[1](o ? o.label : ''); }
  function pick(o) { if (!o) return; set(o); open[1](false); }
  var pos = useFloating(open[0], wrap, field, list, hide, 280);
  R.useEffect(function () { if (open[0]) scrollActiveIntoList(list); }, [act[0], open[0]]);
  var options = results[0] || [], active = open[0] && status[0] === 'done' ? options[act[0]] : null;
  function onKey(e) {
    if (!open[0]) { if (e.key === 'ArrowDown') { e.preventDefault(); show(); } return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); act[1](Math.min(options.length - 1, act[0] + 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); act[1](Math.max(0, act[0] - 1)); }
    else if (e.key === 'Enter') { if (active) { e.preventDefault(); pick(active); } }
    else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); hide(); }
    else if (e.key === 'Tab') hide();
  }
  var optionId = function (i) { return id + '-c-' + i; };
  var body = status[0] === 'loading' ? h('div', { className: 'k-dd__status' }, h(Spinner, { size: 14 }), strings.searching)
    : status[0] === 'error' ? h('div', { className: 'k-dd__status k-dd__status--error' }, strings.loadFailed, h(Button, { size: 'sm', variant: 'ghost', onClick: function () { search(text[0]); } }, strings.tryAgain))
    : status[0] === 'idle' ? h('p', { className: 'k-dd__empty' }, strings.typeToSearch)
    : options.length === 0 ? h('p', { className: 'k-dd__empty' }, strings.noResults + ' "' + text[0] + '"')
    : options.map(function (o, i) {
      var on = v && v.value === o.value, isActive = i === act[0];
      return h('div', { key: String(o.value), id: optionId(i), role: 'option', 'aria-selected': !!on, 'data-active': isActive || undefined,
        className: cx('k-menu__item k-dd__option', isActive && 'k-menu__item--active'),
        onMouseMove: function () { if (!isActive) act[1](i); }, onMouseDown: function (e) { e.preventDefault(); }, onClick: function () { pick(o); } },
        h('span', { className: 'k-menu__check' }, on ? h(Icon, { name: 'check', size: 13, weight: 2.5 }) : null),
        o.avatar ? h(Avatar, { name: o.avatar, size: 'sm' }) : o.icon ? h(Icon, { name: o.icon, size: 14 }) : null,
        h('span', { className: 'k-menu__label' }, o.label, o.description ? h('span', { className: 'k-dd__desc' }, o.description) : null));
    });
  return h('div', { ref: wrap, className: cx('k-field', p.error && 'k-field--error', p.className) },
    p.label ? h('label', { className: 'k-field__label', htmlFor: id }, p.label) : null,
    h('div', { ref: field, className: cx('k-input k-combo', open[0] && 'k-ms--open') },
      h(Icon, { name: 'search', size: 15, className: 'k-combo__icon' }),
      h('input', { ref: input, id: id, className: 'k-combo__input', value: text[0], placeholder: p.placeholder || strings.typeToSearch, disabled: p.disabled, autoComplete: 'off',
        role: 'combobox', 'aria-expanded': open[0], 'aria-controls': id + '-list', 'aria-autocomplete': 'list', 'aria-activedescendant': active ? optionId(act[0]) : undefined, 'aria-busy': status[0] === 'loading' || undefined,
        'aria-label': p.label ? undefined : p['aria-label'], 'aria-describedby': note ? id + '-note' : undefined,
        onFocus: show, onChange: function (e) { text[1](e.target.value); if (!open[0]) open[1](true); search(e.target.value); act[1](0); }, onKeyDown: onKey }),
      v ? h('button', { type: 'button', className: 'k-combo__clear', 'aria-label': strings.clear, onMouseDown: function (e) { e.preventDefault(); },
        onClick: function () { set(null); if (input.current) input.current.focus(); } }, h(Icon, { name: 'xmark', size: 13, weight: 2.5 })) : null),
    p.name ? h('input', { type: 'hidden', name: p.name, value: v ? v.value : '' }) : null,
    note ? h('p', { id: id + '-note', className: 'k-field__note' }, p.error ? h(Icon, { name: 'info', size: 13 }) : null, note) : null,
    open[0] && pos ? h('div', { className: cx('k-menu k-dd__panel', pos.up && 'k-dd__panel--up'), style: { left: pos.left, top: pos.top, bottom: pos.bottom, width: pos.width } },
      h('div', { ref: list, id: id + '-list', role: 'listbox', className: 'k-dd__list', 'aria-live': 'polite' }, body)) : null);
}

/* ---------- Charts ----------
   Monochrome by design: at most two series, the one that matters in primary and the comparison in
   border-strong (dashed for lines), so identity never rests on color alone. */
function compactNumber(n) {
  try { return new Intl.NumberFormat(strings.locale, { notation: 'compact', maximumFractionDigits: 1 }).format(n); } catch (e) { return String(n); }
}
function niceScale(max, count) {
  if (!(max > 0)) return [0, 1];
  var raw = max / count, mag = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10)), norm = raw / mag;
  var step = (norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 2.5 ? 2.5 : norm <= 5 ? 5 : 10) * mag;
  var ticks = [];
  for (var v = 0; v < max + step / 2; v += step) ticks.push(Math.round(v * 1e6) / 1e6);
  if (ticks[ticks.length - 1] < max) ticks.push(Math.round((ticks[ticks.length - 1] + step) * 1e6) / 1e6);
  return ticks;
}
function useWidth() {
  var ref = R.useRef(null), st = useState(0);
  useIsoLayout(function () {
    var el = ref.current;
    if (!el) return;
    st[1](el.clientWidth);
    if (typeof ResizeObserver === 'undefined') return;
    var ro = new ResizeObserver(function (entries) { st[1](Math.round(entries[0].contentRect.width)); });
    ro.observe(el);
    return function () { ro.disconnect(); };
  }, []);
  return [ref, st[0]];
}
function chartSeries(p) { return (p.series && p.series.length ? p.series : [{ key: 'value', label: p['aria-label'] || 'Value' }]).slice(0, p.stacked ? 4 : 2); }
function ChartLegend(p) {
  if (p.series.length < 2) return null;
  return h('div', { className: 'k-chart__legend' }, p.series.map(function (s, i) {
    return h('span', { key: s.key, className: 'k-chart__legend-item' }, h('span', { className: cx('k-chart__key', 'k-chart__key--' + p.kind, 'k-chart__key--' + (i + 1)) }), s.label);
  }));
}
function ChartTable(p) {
  return h('table', { className: 'k-sr-only' },
    p.label ? h('caption', null, p.label) : null,
    h('thead', null, h('tr', null, h('th', null, ''), p.series.map(function (s) { return h('th', { key: s.key }, s.label); }))),
    h('tbody', null, p.data.map(function (d, i) {
      return h('tr', { key: i }, h('th', null, d.label), p.series.map(function (s) { return h('td', { key: s.key }, p.format(d[s.key])); }));
    })));
}
function ChartTip(p) {
  if (!p.at) return null;
  var d = p.data[p.at.index];
  // Near the edges the tooltip opens to one side so it never leaves the chart.
  var align = p.at.x < 100 ? 'start' : p.width && p.at.x > p.width - 100 ? 'end' : 'center';
  return h('div', { className: 'k-chart__tip k-chart__tip--' + align, style: { left: p.at.x, top: p.at.y } },
    h('p', { className: 'k-chart__tip-title' }, d.label),
    p.series.map(function (s, i) {
      return h('p', { key: s.key, className: 'k-chart__tip-row' },
        h('span', { className: cx('k-chart__key', 'k-chart__key--' + p.kind, 'k-chart__key--' + (i + 1)) }),
        h('span', { className: 'k-chart__tip-label' }, s.label), h('strong', null, p.format(d[s.key])));
    }));
}
// Shared scales and axes for LineChart and BarChart.
function useChartFrame(p, width) {
  var data = p.data || [], series = chartSeries(p), height = p.height || 240;
  var max = data.reduce(function (m, d) {
    if (p.stacked) return Math.max(m, series.reduce(function (sum, s) { return sum + (+d[s.key] || 0); }, 0));
    return series.reduce(function (n, s) { return Math.max(n, +d[s.key] || 0); }, m);
  }, 0);
  var ticks = niceScale(max, 4), top = ticks[ticks.length - 1] || 1;
  var axis = p.formatAxis || compactNumber;
  var longest = ticks.reduce(function (n, t) { return Math.max(n, String(axis(t)).length); }, 1);
  var left = longest * 7 + 14, right = 8, pad = 8, bottom = 28;
  var iw = Math.max(0, width - left - right), ih = height - pad - bottom;
  return {
    data: data, series: series, height: height, ticks: ticks, axis: axis, left: left, iw: iw, ih: ih, pad: pad,
    y: function (v) { return pad + ih - (Math.max(0, +v || 0) / top) * ih; },
    grid: ticks.map(function (t) {
      var yy = pad + ih - (t / top) * ih;
      return h('g', { key: 't' + t },
        h('line', { className: 'k-chart__grid', x1: left, x2: left + iw, y1: yy, y2: yy }),
        h('text', { className: 'k-chart__axis', x: left - 8, y: yy, textAnchor: 'end', dominantBaseline: 'middle' }, axis(t)));
    }),
    // Thin out the category labels so they never collide.
    labelEvery: Math.max(1, Math.ceil(data.length / Math.max(1, Math.floor(iw / 64))))
  };
}

function LineChart(p) {
  var w = useWidth(), width = w[1], hover = useState(null);
  var f = useChartFrame(p, width), data = f.data, n = data.length, fmt = p.format || compactNumber;
  var x = function (i) { return f.left + (n <= 1 ? f.iw / 2 : i * f.iw / (n - 1)); };
  function move(e) {
    if (!n) return;
    var r = e.currentTarget.getBoundingClientRect(), mx = e.clientX - r.left;
    var i = n <= 1 ? 0 : Math.max(0, Math.min(n - 1, Math.round((mx - f.left) / (f.iw / (n - 1)))));
    hover[1]({ index: i, x: x(i), y: f.pad });
  }
  var at = hover[0] && hover[0].index < n ? hover[0] : null;
  return h('figure', { ref: w[0], className: cx('k-chart', p.className), 'aria-label': p['aria-label'] },
    h(ChartLegend, { series: f.series, kind: 'line' }),
    h('div', { className: 'k-chart__plot', style: { height: f.height } },
      width ? h('svg', { width: width, height: f.height, 'aria-hidden': true, onMouseMove: move, onMouseLeave: function () { hover[1](null); } },
        f.grid,
        data.map(function (d, i) {
          return i % f.labelEvery ? null : h('text', { key: 'x' + i, className: 'k-chart__axis', x: x(i), y: f.pad + f.ih + 18, textAnchor: n <= 1 ? 'middle' : i === 0 ? 'start' : i === n - 1 ? 'end' : 'middle' }, d.label);
        }),
        p.area && n > 1 ? h('path', { className: 'k-chart__area', d: data.map(function (d, i) { return (i ? 'L' : 'M') + x(i) + ',' + f.y(d[f.series[0].key]); }).join('') + 'L' + x(n - 1) + ',' + f.y(0) + 'L' + x(0) + ',' + f.y(0) + 'Z' }) : null,
        f.series.slice().reverse().map(function (s) {
          var i = f.series.indexOf(s);
          return h('path', { key: s.key, className: cx('k-chart__line', 'k-chart__line--' + (i + 1)), d: data.map(function (d, j) { return (j ? 'L' : 'M') + x(j) + ',' + f.y(d[s.key]); }).join('') });
        }),
        at ? h('g', null,
          h('line', { className: 'k-chart__cross', x1: at.x, x2: at.x, y1: f.pad, y2: f.pad + f.ih }),
          f.series.map(function (s, i) { return h('circle', { key: s.key, className: cx('k-chart__dot', 'k-chart__dot--' + (i + 1)), cx: at.x, cy: f.y(data[at.index][s.key]), r: 4 }); })) : null) : null,
      h(ChartTip, { at: at, width: width, data: data, series: f.series, format: fmt, kind: 'line' })),
    h(ChartTable, { label: p['aria-label'], data: data, series: f.series, format: fmt }));
}

function barPath(x, y, w, base) {
  var r = Math.min(4, w / 2, base - y);
  if (base - y <= 0) return '';
  return 'M' + x + ',' + base + 'V' + (y + r) + 'Q' + x + ',' + y + ' ' + (x + r) + ',' + y + 'H' + (x + w - r) + 'Q' + (x + w) + ',' + y + ' ' + (x + w) + ',' + (y + r) + 'V' + base + 'Z';
}

function BarChart(p) {
  var w = useWidth(), width = w[1], hover = useState(null);
  var f = useChartFrame(p, width), data = f.data, n = data.length || 1, s = f.series.length, fmt = p.format || compactNumber;
  var band = f.iw / n, gap = 2, stacked = !!p.stacked;
  var barW = stacked ? Math.max(2, Math.min(24, band * 0.64)) : Math.max(2, Math.min(24, (band * 0.64 - (s - 1) * gap) / s));
  var groupW = stacked ? barW : s * barW + (s - 1) * gap;
  var base = f.pad + f.ih, at = hover[0] && hover[0].index < data.length ? hover[0] : null;
  return h('figure', { ref: w[0], className: cx('k-chart', p.className), 'aria-label': p['aria-label'] },
    h(ChartLegend, { series: f.series, kind: 'bar' }),
    h('div', { className: 'k-chart__plot', style: { height: f.height } },
      width ? h('svg', { width: width, height: f.height, 'aria-hidden': true, onMouseLeave: function () { hover[1](null); } },
        f.grid,
        data.map(function (d, i) {
          var gx = f.left + i * band + (band - groupW) / 2, dim = at && at.index !== i;
          return h('g', { key: i, className: cx('k-chart__group', dim && 'k-chart__group--dim') },
            h('rect', { className: 'k-chart__hit', x: f.left + i * band, y: f.pad, width: band, height: f.ih,
              onMouseEnter: function () { hover[1]({ index: i, x: f.left + i * band + band / 2, y: f.pad }); } }),
            stacked ? (function () {
              // Segments stack from the baseline with a 2 px gap; only the top one gets rounded corners.
              var sum = 0, bottom = base, top = -1, segs = [];
              f.series.forEach(function (ser, j) { if ((+d[ser.key] || 0) > 0) top = j; });
              f.series.forEach(function (ser, j) {
                var v = +d[ser.key] || 0;
                if (v <= 0) return;
                sum += v;
                var y = f.y(sum), bot = segs.length ? bottom - gap : bottom;
                if (bot - y >= 1) segs.push(h('path', { key: ser.key, className: cx('k-chart__bar', 'k-chart__bar--' + (j + 1)), d: j === top ? barPath(gx, y, barW, bot) : 'M' + gx + ',' + bot + 'V' + y + 'H' + (gx + barW) + 'V' + bot + 'Z' }));
                bottom = y;
              });
              return segs;
            })() : f.series.map(function (ser, j) {
              return h('path', { key: ser.key, className: cx('k-chart__bar', 'k-chart__bar--' + (j + 1)), d: barPath(gx + j * (barW + gap), f.y(d[ser.key]), barW, base) });
            }),
            i % f.labelEvery ? null : h('text', { className: 'k-chart__axis', x: f.left + i * band + band / 2, y: base + 18, textAnchor: 'middle' }, d.label));
        })) : null,
      h(ChartTip, { at: at, width: width, data: data, series: f.series, format: fmt, kind: 'bar' })),
    h(ChartTable, { label: p['aria-label'], data: data, series: f.series, format: fmt }));
}

function BarList(p) {
  var items = p.items || [], fmt = p.format || function (v) { return Number(v).toLocaleString(strings.locale); };
  var max = items.reduce(function (m, it) { return Math.max(m, +it.value || 0); }, 0) || 1;
  return h('ul', { className: cx('k-barlist', p.className), 'aria-label': p['aria-label'] }, items.map(function (it, i) {
    return h('li', { key: it.id || it.label || i, className: 'k-barlist__row' },
      h('span', { className: 'k-barlist__bar', style: { width: Math.max(0, (+it.value || 0) / max * 100) + '%' } }),
      h('span', { className: 'k-barlist__label' }, it.icon ? h(Icon, { name: it.icon, size: 14 }) : null, it.label),
      h('span', { className: 'k-barlist__value' }, fmt(it.value)));
  }));
}

function Sparkline(p) {
  var data = p.data || [], width = p.width || 96, height = p.height || 28, n = data.length;
  if (n < 2) return null;
  var min = Math.min.apply(null, data), max = Math.max.apply(null, data), span = max - min || 1;
  var x = function (i) { return 2 + i * (width - 6) / (n - 1); }, y = function (v) { return 3 + (1 - (v - min) / span) * (height - 6); };
  return h('svg', { className: cx('k-spark', p.className), width: width, height: height, role: 'img', 'aria-label': p.label },
    h('path', { className: 'k-spark__line', d: data.map(function (v, i) { return (i ? 'L' : 'M') + x(i) + ',' + y(v); }).join('') }),
    h('circle', { className: 'k-spark__dot', cx: x(n - 1), cy: y(data[n - 1]), r: 2.5 }));
}

/* ---------- Dates ----------
   Values are ISO dates ('2026-11-01') so nothing shifts with time zones. */
function pad2(n) { return n < 10 ? '0' + n : String(n); }
function toISODate(d) { return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); }
function fromISODate(s) {
  if (!s) return null;
  if (s instanceof Date) return new Date(s.getFullYear(), s.getMonth(), s.getDate());
  var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s);
  return m ? new Date(+m[1], +m[2] - 1, +m[3]) : null;
}
function addDays(d, n) { var r = new Date(d.getFullYear(), d.getMonth(), d.getDate()); r.setDate(r.getDate() + n); return r; }
function formatDate(d, opts) { try { return new Intl.DateTimeFormat(strings.locale, opts).format(d); } catch (e) { return toISODate(d); } }
function monthDays(month, weekStart) {
  var first = new Date(month.getFullYear(), month.getMonth(), 1);
  var offset = (first.getDay() - weekStart + 7) % 7, inMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  var weeks = Math.ceil((offset + inMonth) / 7), days = [];
  for (var i = 0; i < weeks * 7; i++) days.push(addDays(first, i - offset));
  return days;
}

function timeToMinutes(t) { var m = /^(\d{1,2}):(\d{2})/.exec(t || ''); return m ? +m[1] * 60 + +m[2] : null; }
function minutesToTime(n) { return pad2(Math.floor(n / 60)) + ':' + pad2(n % 60); }
// Side-by-side lanes for events that overlap within one day.
function layoutTimed(evs) {
  var sorted = evs.map(function (ev) {
    var start = timeToMinutes(ev.time), end = timeToMinutes(ev.end);
    return { ev: ev, start: start, end: end != null && end > start ? end : start + 60 };
  }).sort(function (a, b) { return a.start - b.start || b.end - a.end; });
  var lanes = [];
  sorted.forEach(function (s) { var l = 0; while (lanes[l] != null && lanes[l] > s.start) l++; lanes[l] = s.end; s.lane = l; });
  sorted.forEach(function (s) { s.lanes = lanes.length; });
  return sorted;
}

var HOUR = 48;

function Calendar(p) {
  var small = p.size === 'sm', weekStart = p.weekStartsOn != null ? p.weekStartsOn : 1;
  var todayISO = toISODate(new Date());
  var sel = useControlled(p.value, p.defaultValue), selected = sel[0];
  var cur = useControlled(p.date, p.defaultDate || selected || todayISO), cursor = fromISODate(cur[0]);
  var viewSt = useControlled(p.view, p.defaultView || 'month'), view = small ? 'month' : viewSt[0];
  var focus = useState(selected || todayISO), grid = R.useRef(null), keyNav = R.useRef(!!p.autoFocus), body = R.useRef(null);
  var ctx = useContextMenu();
  var byDay = {};
  (p.events || []).forEach(function (ev) { var k = toISODate(fromISODate(ev.date)); (byDay[k] = byDay[k] || []).push(ev); });

  function setCursor(d) { var iso = toISODate(d); cur[1](iso); if (p.onDateChange) p.onDateChange(iso); }
  function setView(v) { viewSt[1](v); if (p.onViewChange) p.onViewChange(v); }
  function pick(iso) { sel[1](iso); focus[1](iso); if (p.onChange) p.onChange(iso); }
  function step(dir) {
    if (view === 'week') setCursor(addDays(cursor, dir * 7));
    else if (view === 'day') setCursor(addDays(cursor, dir));
    else setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + dir, 1));
  }
  function moveFocus(d) {
    keyNav.current = true;
    focus[1](toISODate(d));
    if (d.getMonth() !== cursor.getMonth() || d.getFullYear() !== cursor.getFullYear()) setCursor(d);
  }
  function onKey(e) {
    var f = fromISODate(focus[0]), moves = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
    if (moves[e.key] != null) { e.preventDefault(); moveFocus(addDays(f, moves[e.key])); }
    else if (e.key === 'PageUp' || e.key === 'PageDown') { e.preventDefault(); moveFocus(new Date(f.getFullYear(), f.getMonth() + (e.key === 'PageUp' ? -1 : 1), Math.min(f.getDate(), 28))); }
    else if (e.key === 'Home') { e.preventDefault(); moveFocus(addDays(f, -((f.getDay() - weekStart + 7) % 7))); }
    else if (e.key === 'End') { e.preventDefault(); moveFocus(addDays(f, 6 - ((f.getDay() - weekStart + 7) % 7))); }
  }
  R.useEffect(function () {
    if (!keyNav.current || !grid.current) return;
    var el = grid.current.querySelector('[data-date="' + focus[0] + '"]');
    if (el) el.focus();
  }, [focus[0], cur[0]]);
  // Open the time grid at the start of the working day, not at midnight.
  useIsoLayout(function () { if (body.current) body.current.scrollTop = (p.scrollToHour != null ? p.scrollToHour : 7) * HOUR; }, [view]);

  function dayMenu(e, iso, time) { if (p.dayMenu) ctx.open(e, { date: iso, time: time }); }
  function eventMenu(e, ev) { if (p.eventMenu) ctx.open(e, { event: ev }); }
  var menuData = ctx.data;
  var menu = menuData ? ctx.render(menuData.event ? p.eventMenu(menuData.event) : p.dayMenu(menuData.date, menuData.time)) : null;

  function eventButton(ev, i, extra) {
    return h('button', { key: ev.id || i, type: 'button', className: cx('k-cal__event', extra), title: ev.title + (ev.time ? ' · ' + ev.time + (ev.end ? '–' + ev.end : '') : ''),
      onClick: function (e) { e.stopPropagation(); if (p.onEventClick) p.onEventClick(ev); },
      onContextMenu: p.eventMenu ? function (e) { eventMenu(e, ev); } : undefined },
      ev.tone ? h('span', { className: 'k-cal__tone k-cal__tone--' + ev.tone, 'aria-hidden': true }) : null,
      ev.time ? h('span', { className: 'k-cal__time' }, ev.time) : null,
      h('span', { className: 'k-cal__event-title' }, ev.title));
  }

  var title, content;
  if (view === 'month') {
    var days = monthDays(cursor, weekStart);
    var focusInView = days.some(function (d) { return toISODate(d) === focus[0]; });
    var tabbable = focusInView ? focus[0] : toISODate(new Date(cursor.getFullYear(), cursor.getMonth(), 1));
    var max = p.maxEvents || 3;
    var rs = p.rangeStart || null, re = p.rangeEnd || (rs && p.hoverDate) || null;
    if (rs && re && re < rs) { var swap = rs; rs = re; re = swap; }
    title = formatDate(cursor, { month: 'long', year: 'numeric' });
    content = [
      h('div', { key: 'w', className: 'k-cal__weekdays', 'aria-hidden': true }, days.slice(0, 7).map(function (d, i) { return h('span', { key: i }, formatDate(d, { weekday: small ? 'narrow' : 'short' })); })),
      h('div', { key: 'g', ref: grid, className: 'k-cal__grid', role: 'grid', onKeyDown: small ? onKey : undefined }, days.map(function (d) {
        var iso = toISODate(d), out = d.getMonth() !== cursor.getMonth(), evs = byDay[iso] || [];
        var cls = cx('k-cal__day', out && 'k-cal__day--out', iso === todayISO && 'k-cal__day--today', iso === selected && 'k-cal__day--selected', menuData && menuData.date === iso && !menuData.event && 'k-cal__day--menu');
        if (small) {
          var ranged = cx(cls, rs && re && iso > rs && iso < re && 'k-cal__day--in-range', iso === rs && 'k-cal__day--range-start', iso === re && 'k-cal__day--range-end');
          return h('button', { key: iso, type: 'button', className: ranged, 'data-date': iso, role: 'gridcell', tabIndex: iso === tabbable ? 0 : -1,
            onMouseEnter: p.onDayHover ? function () { p.onDayHover(iso); } : undefined,
            'aria-selected': iso === selected, 'aria-label': formatDate(d, { dateStyle: 'full' }), onClick: function () { pick(iso); } },
            d.getDate(), evs.length ? h('span', { className: 'k-cal__dot', 'aria-hidden': true }) : null);
        }
        return h('div', { key: iso, className: cls, role: 'gridcell', 'aria-selected': iso === selected, onClick: function () { pick(iso); },
          onContextMenu: p.dayMenu ? function (e) { dayMenu(e, iso); } : undefined },
          h('span', { className: 'k-cal__num' }, d.getDate()),
          evs.slice(0, max).map(function (ev, i) { return eventButton(ev, i); }),
          evs.length > max ? h('span', { className: 'k-cal__more' }, '+' + (evs.length - max) + ' ' + strings.more) : null);
      }))
    ];
  } else {
    var cols = view === 'day' ? [cursor] : (function () { var s = addDays(cursor, -((cursor.getDay() - weekStart + 7) % 7)), out = []; for (var i = 0; i < 7; i++) out.push(addDays(s, i)); return out; })();
    var first = cols[0], last = cols[cols.length - 1];
    title = view === 'day' ? formatDate(cursor, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
      : first.getMonth() === last.getMonth() ? formatDate(first, { month: 'long', year: 'numeric' }) + ' · ' + first.getDate() + '–' + last.getDate()
      : formatDate(first, { month: 'short', day: 'numeric' }) + ' – ' + formatDate(last, { month: 'short', day: 'numeric', year: 'numeric' });
    var hours = []; for (var hr = 0; hr < 24; hr++) hours.push(hr);
    var now = new Date(), nowMin = now.getHours() * 60 + now.getMinutes();
    var template = { gridTemplateColumns: '56px repeat(' + cols.length + ', minmax(0, 1fr))' };
    content = [
      h('div', { key: 'h', className: 'k-cal__tg-head', style: template },
        h('span', { className: 'k-cal__tg-corner' }),
        cols.map(function (d) {
          var iso = toISODate(d);
          return h('button', { key: iso, type: 'button', className: cx('k-cal__tg-day', iso === todayISO && 'k-cal__day--today', iso === selected && 'k-cal__tg-day--selected'),
            onClick: function () { pick(iso); if (view === 'week' && p.dayFromWeek !== false) { setCursor(d); setView('day'); } },
            onContextMenu: p.dayMenu ? function (e) { dayMenu(e, iso); } : undefined },
            h('span', { className: 'k-cal__tg-weekday' }, formatDate(d, { weekday: 'short' })),
            h('span', { className: 'k-cal__num' }, d.getDate()));
        })),
      h('div', { key: 'a', className: 'k-cal__tg-allday', style: template },
        h('span', { className: 'k-cal__tg-label' }, strings.allDay),
        cols.map(function (d) {
          var iso = toISODate(d), evs = (byDay[iso] || []).filter(function (ev) { return timeToMinutes(ev.time) == null; });
          return h('div', { key: iso, className: 'k-cal__tg-allday-cell', onContextMenu: p.dayMenu ? function (e) { dayMenu(e, iso); } : undefined },
            evs.map(function (ev, i) { return eventButton(ev, i); }));
        })),
      h('div', { key: 'b', ref: body, className: 'k-cal__tg-body' },
        h('div', { className: 'k-cal__tg-grid', style: Object.assign({ height: 24 * HOUR }, template) },
          h('div', { className: 'k-cal__tg-gutter' }, hours.map(function (hh) {
            return hh ? h('span', { key: hh, className: 'k-cal__tg-hour', style: { top: hh * HOUR } }, formatDate(new Date(2000, 0, 1, hh), { hour: 'numeric' })) : null;
          })),
          cols.map(function (d) {
            var iso = toISODate(d), timed = layoutTimed((byDay[iso] || []).filter(function (ev) { return timeToMinutes(ev.time) != null; }));
            return h('div', { key: iso, className: cx('k-cal__tg-col', iso === todayISO && 'k-cal__tg-col--today'), onClick: function () { pick(iso); },
              onContextMenu: p.dayMenu ? function (e) {
                var r = e.currentTarget.getBoundingClientRect(), mins = Math.max(0, Math.min(23 * 60 + 30, Math.floor((e.clientY - r.top) / HOUR * 2) * 30));
                dayMenu(e, iso, minutesToTime(mins));
              } : undefined },
              timed.map(function (s, i) {
                return h('button', { key: s.ev.id || i, type: 'button', className: 'k-cal__tg-event',
                  style: { top: s.start / 60 * HOUR + 1, height: Math.max(22, (s.end - s.start) / 60 * HOUR - 3), left: 'calc(' + (s.lane * 100 / s.lanes) + '% + 2px)', width: 'calc(' + (100 / s.lanes) + '% - 4px)' },
                  title: s.ev.title + ' · ' + s.ev.time + (s.ev.end ? '–' + s.ev.end : ''),
                  onClick: function (e) { e.stopPropagation(); if (p.onEventClick) p.onEventClick(s.ev); },
                  onContextMenu: p.eventMenu ? function (e) { eventMenu(e, s.ev); } : undefined },
                  h('span', { className: 'k-cal__event-title' }, s.ev.tone ? h('span', { className: 'k-cal__tone k-cal__tone--' + s.ev.tone, 'aria-hidden': true }) : null, s.ev.title),
                  h('span', { className: 'k-cal__time' }, s.ev.time + (s.ev.end ? '–' + s.ev.end : '')));
              }),
              iso === todayISO ? h('span', { className: 'k-cal__now', style: { top: nowMin / 60 * HOUR }, 'aria-hidden': true }) : null);
          })))
    ];
  }

  var views = small ? null : p.views;
  return h('div', { className: cx('k-cal', small ? 'k-cal--sm' : 'k-cal--lg', !small && 'k-cal--' + view, p.className) },
    h('div', { className: 'k-cal__head' },
      h('h3', { className: 'k-cal__title', 'aria-live': 'polite' }, title),
      h('div', { className: 'k-cal__nav' },
        views && views.length > 1 ? h(SegmentedControl, { 'aria-label': strings.view, value: view, onChange: setView, options: views.map(function (v) { return { value: v, label: strings[v] }; }) }) : null,
        small ? null : h(Button, { size: 'sm', variant: 'secondary', onClick: function () { var t = fromISODate(todayISO); setCursor(t); focus[1](todayISO); } }, strings.today),
        p.nav === 'next' || p.nav === 'none' ? null : h(Button, { size: 'sm', variant: 'ghost', icon: 'chevron-left', 'aria-label': strings['previous' + (view === 'month' ? 'Month' : view === 'week' ? 'Week' : 'Day')], onClick: function () { step(-1); } }),
        p.nav === 'prev' || p.nav === 'none' ? null : h(Button, { size: 'sm', variant: 'ghost', icon: 'chevron-right', 'aria-label': strings['next' + (view === 'month' ? 'Month' : view === 'week' ? 'Week' : 'Day')], onClick: function () { step(1); } }))),
    content,
    menu);
}

function DatePicker(p) {
  var auto = R.useId(), id = p.id || auto;
  var st = useControlled(p.value, p.defaultValue), v = st[0];
  var open = useState(false), pos = useState(null);
  var presence = usePresence(open[0], 'duration-fast');
  var wrap = R.useRef(null), trigger = R.useRef(null), panel = R.useRef(null);
  var date = fromISODate(v), note = p.error || p.hint;
  function show() {
    if (p.disabled || !trigger.current) return;
    var r = trigger.current.getBoundingClientRect(), panelHeight = 330;
    var below = window.innerHeight - r.bottom, up = below < panelHeight + 12 && r.top > below;
    pos[1]({ left: Math.min(r.left, window.innerWidth - 296), top: up ? undefined : r.bottom + 6, bottom: up ? window.innerHeight - r.top + 6 : undefined, up: up });
    open[1](true);
  }
  function hide(refocus) { open[1](false); if (refocus && trigger.current) trigger.current.focus(); }
  R.useEffect(function () {
    if (!open[0]) return;
    function off(e) { if (wrap.current && !wrap.current.contains(e.target)) hide(false); }
    function scroll(e) { if (!panel.current || !panel.current.contains(e.target)) hide(false); }
    document.addEventListener('mousedown', off);
    window.addEventListener('scroll', scroll, true);
    function resize() { hide(false); }
    window.addEventListener('resize', resize);
    return function () { document.removeEventListener('mousedown', off); window.removeEventListener('scroll', scroll, true); window.removeEventListener('resize', resize); };
  }, [open[0]]);
  return h('div', { ref: wrap, className: cx('k-field', p.error && 'k-field--error', p.className) },
    p.label ? h('label', { className: 'k-field__label', htmlFor: id, onClick: function (e) { e.preventDefault(); if (trigger.current) trigger.current.focus(); } }, p.label) : null,
    h('button', {
      ref: trigger, id: id, type: 'button', disabled: p.disabled, className: cx('k-input k-dd__trigger', !date && 'k-dd__trigger--empty'),
      'aria-haspopup': 'dialog', 'aria-expanded': open[0], 'aria-label': p.label ? undefined : p['aria-label'],
      'aria-invalid': p.error ? true : undefined, 'aria-describedby': note ? id + '-note' : undefined,
      onClick: function () { if (open[0]) hide(false); else show(); },
      onKeyDown: function (e) { if (!open[0] && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); show(); } }
    },
      h('span', { className: 'k-dd__value' }, date ? formatDate(date, { dateStyle: 'medium' }) : (p.placeholder || strings.chooseDate)),
      h(Icon, { name: 'calendar', size: 15, className: 'k-dd__chev' })),
    p.name ? h('input', { type: 'hidden', name: p.name, value: v || '' }) : null,
    note ? h('p', { id: id + '-note', className: 'k-field__note' }, p.error ? h(Icon, { name: 'info', size: 13 }) : null, note) : null,
    presence.show && pos[0] ? h('div', {
      ref: panel, role: 'dialog', 'aria-label': p.label || p['aria-label'] || strings.chooseDate,
      className: cx('k-datepicker', pos[0].up && 'k-datepicker--up', presence.leaving && 'k-leaving'),
      style: { left: pos[0].left, top: pos[0].top, bottom: pos[0].bottom },
      // Stop here so Esc closes the picker without closing a Modal around it.
      onKeyDown: function (e) { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); hide(true); } }
    }, h(Calendar, { size: 'sm', autoFocus: true, value: v, weekStartsOn: p.weekStartsOn, onChange: function (iso) { st[1](iso); if (p.onChange) p.onChange(iso); hide(true); } })) : null);
}

/* ---------- Donut ----------
   Parts of a whole in up to five steps of gray (the rest becomes "Other"), always with a legend that has the numbers. */
function DonutChart(p) {
  var all = (p.data || []).filter(function (d) { return +d.value > 0; }), data = all;
  if (all.length > 5) {
    var rest = all.slice(4).reduce(function (a, d) { return a + +d.value; }, 0);
    data = all.slice(0, 4).concat([{ label: strings.other, value: rest }]);
  }
  var total = data.reduce(function (a, d) { return a + +d.value; }, 0) || 1;
  var size = p.size || 176, thick = p.thickness || 22, R0 = size / 2, r0 = R0 - thick, hover = useState(null);
  var fmt = p.format || function (v) { return Number(v).toLocaleString(strings.locale); };
  var pct = function (v) { return Math.round(v / total * 100) + '%'; };
  function pt(r, a) { return (R0 + r * Math.cos(a)).toFixed(2) + ',' + (R0 + r * Math.sin(a)).toFixed(2); }
  function arc(a0, a1) {
    if (a1 - a0 >= Math.PI * 2 - 1e-6) a1 = a0 + Math.PI * 2 - 1e-4;
    var large = a1 - a0 > Math.PI ? 1 : 0;
    return 'M' + pt(R0, a0) + 'A' + R0 + ',' + R0 + ' 0 ' + large + ' 1 ' + pt(R0, a1) + 'L' + pt(r0, a1) + 'A' + r0 + ',' + r0 + ' 0 ' + large + ' 0 ' + pt(r0, a0) + 'Z';
  }
  var angle = -Math.PI / 2, active = hover[0] != null ? data[hover[0]] : null;
  return h('figure', { className: cx('k-donut', p.className), 'aria-label': p['aria-label'] },
    h('div', { className: 'k-donut__chart', style: { width: size, height: size } },
      h('svg', { width: size, height: size, viewBox: '0 0 ' + size + ' ' + size, 'aria-hidden': true, onMouseLeave: function () { hover[1](null); } },
        data.map(function (d, i) {
          var a0 = angle, a1 = angle + (+d.value / total) * Math.PI * 2;
          angle = a1;
          return h('path', { key: d.label, d: arc(a0, a1), className: cx('k-donut__seg', 'k-donut__seg--' + (i + 1), hover[0] != null && hover[0] !== i && 'k-donut__seg--dim'), onMouseEnter: function () { hover[1](i); } });
        })),
      h('div', { className: 'k-donut__center', 'aria-hidden': true },
        h('span', { className: 'k-donut__value' }, fmt(active ? active.value : total)),
        h('span', { className: 'k-donut__label' }, active ? active.label : (p.centerLabel || strings.total)))),
    h('ul', { className: 'k-donut__legend' }, data.map(function (d, i) {
      return h('li', { key: d.label, className: cx('k-donut__item', hover[0] === i && 'k-donut__item--on'), onMouseEnter: function () { hover[1](i); }, onMouseLeave: function () { hover[1](null); } },
        h('span', { className: 'k-donut__key k-donut__key--' + (i + 1) }),
        h('span', { className: 'k-donut__name' }, d.label),
        h('span', { className: 'k-donut__num' }, fmt(d.value)),
        h('span', { className: 'k-donut__pct' }, pct(d.value)));
    })));
}

/* ---------- Heatmap ----------
   Activity per day over a year, one column per week, in five steps from fill to primary. */
function Heatmap(p) {
  var weeks = p.weeks || 53, weekStart = p.weekStartsOn != null ? p.weekStartsOn : 1, cell = 11, step = 14;
  var end = fromISODate(p.end) || fromISODate(toISODate(new Date()));
  var start = addDays(addDays(end, -((end.getDay() - weekStart + 7) % 7)), -(weeks - 1) * 7);
  var values = p.data || {}, hover = useState(null), fmt = p.format || function (v) { return String(v); };
  var max = Object.keys(values).reduce(function (m, k) { return Math.max(m, +values[k] || 0); }, 0) || 1;
  var level = function (v) { return !v ? 0 : Math.min(4, Math.max(1, Math.ceil(v / max * 4))); };
  var left = 30, top = 18, cells = [], months = [], total = 0, lastMonth = -1, lastLabel = -9;
  for (var w = 0; w < weeks; w++) {
    var first = addDays(start, w * 7);
    if (first.getMonth() !== lastMonth) {
      if (w - lastLabel >= 3) { months.push(h('text', { key: 'm' + w, className: 'k-chart__axis', x: left + w * step, y: 11 }, formatDate(first, { month: 'short' }))); lastLabel = w; }
      lastMonth = first.getMonth();
    }
    for (var d = 0; d < 7; d++) {
      var day = addDays(start, w * 7 + d);
      if (day > end) continue;
      var iso = toISODate(day), v = +values[iso] || 0;
      total += v;
      cells.push(h('rect', { key: iso, className: 'k-heat__cell k-heat__l' + level(v), x: left + w * step, y: top + d * step, width: cell, height: cell, rx: 2,
        onMouseEnter: (function (iso, v, x, y) { return function () { hover[1]({ iso: iso, v: v, x: x, y: y }); }; })(iso, v, left + w * step + cell / 2, top + d * step) }));
    }
  }
  var days = [0, 2, 4].map(function (d) { return h('text', { key: 'd' + d, className: 'k-chart__axis', x: 0, y: top + d * step + 9 }, formatDate(addDays(start, d), { weekday: 'short' })); });
  var at = hover[0], width = left + weeks * step;
  return h('figure', { className: cx('k-heat', p.className) },
    h('div', { className: 'k-heat__scroll' },
      h('div', { className: 'k-heat__plot', style: { width: width } },
        h('svg', { width: width, height: top + 7 * step, role: 'img', 'aria-label': (p['aria-label'] ? p['aria-label'] + ': ' : '') + fmt(total) + ' · ' + weeks + ' ' + strings.week.toLowerCase() + 's', onMouseLeave: function () { hover[1](null); } }, months, days, cells),
        at ? h('div', { className: 'k-chart__tip k-chart__tip--center', style: { left: at.x, top: at.y } },
          h('p', { className: 'k-chart__tip-title' }, fmt(at.v)), h('p', { className: 'k-chart__tip-row' }, formatDate(fromISODate(at.iso), { dateStyle: 'medium' }))) : null)),
    h('div', { className: 'k-heat__legend', 'aria-hidden': true }, strings.less,
      [0, 1, 2, 3, 4].map(function (l) { return h('span', { key: l, className: 'k-heat__swatch k-heat__l' + l }); }), strings.moreLabel));
}

/* ---------- Text: safe markdown and @mentions ----------
   Renders a small, safe subset of markdown to React elements - never HTML strings. */
function peopleNames(people) { return (people || []).map(function (x) { return typeof x === 'string' ? x : x.name; }); }
function renderInline(text, names, keyBase) {
  var out = [], re = /(\*\*[^*\n]+\*\*|_[^_\n]+_|`[^`\n]+`|\[[^\]\n]+\]\((?:https?:\/\/|mailto:)[^)\s]+\)|@[^\s@][^@\n]*)/g, last = 0, m, k = 0;
  while ((m = re.exec(text))) {
    var tok = m[0], at = m.index;
    if (tok.charAt(0) === '@') {
      var name = names.filter(function (n) { return tok.slice(1, n.length + 1) === n; }).sort(function (a, b) { return b.length - a.length; })[0];
      if (!name) { re.lastIndex = at + 1; continue; }
      if (at > last) out.push(text.slice(last, at));
      out.push(h('span', { key: keyBase + '-' + k++, className: 'k-mention' }, '@' + name));
      last = re.lastIndex = at + name.length + 1;
      continue;
    }
    if (at > last) out.push(text.slice(last, at));
    var key = keyBase + '-' + k++;
    if (tok.slice(0, 2) === '**') out.push(h('strong', { key: key }, tok.slice(2, -2)));
    else if (tok.charAt(0) === '_') out.push(h('em', { key: key }, tok.slice(1, -1)));
    else if (tok.charAt(0) === '`') out.push(h('code', { key: key, className: 'k-md__code' }, tok.slice(1, -1)));
    else { var lm = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(tok); out.push(h('a', { key: key, href: lm[2], target: '_blank', rel: 'noopener noreferrer' }, lm[1])); }
    last = at + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
function Markdown(p) {
  var names = peopleNames(p.people), lines = String(p.children != null ? p.children : p.text || '').replace(/\r/g, '').split('\n'), blocks = [], i = 0;
  var isList = function (l) { return /^\s*[-*] /.test(l); }, isNum = function (l) { return /^\s*\d+[.)] /.test(l); }, isQuote = function (l) { return /^> ?/.test(l); };
  while (i < lines.length) {
    var line = lines[i], k = 'b' + blocks.length, items = [];
    if (!line.trim()) { i++; continue; }
    if (isList(line) || isNum(line)) {
      var numbered = isNum(line);
      while (i < lines.length && (numbered ? isNum(lines[i]) : isList(lines[i]))) { items.push(lines[i].replace(/^\s*([-*]|\d+[.)]) /, '')); i++; }
      blocks.push(h(numbered ? 'ol' : 'ul', { key: k }, items.map(function (t, j) { return h('li', { key: j }, renderInline(t, names, k + j)); })));
      continue;
    }
    if (isQuote(line)) {
      while (i < lines.length && isQuote(lines[i])) { items.push(lines[i].replace(/^> ?/, '')); i++; }
      blocks.push(h('blockquote', { key: k }, items.map(function (t, j) { return [j ? h('br', { key: 'r' + j }) : null, renderInline(t, names, k + j)]; })));
      continue;
    }
    while (i < lines.length && lines[i].trim() && !isList(lines[i]) && !isNum(lines[i]) && !isQuote(lines[i])) { items.push(lines[i]); i++; }
    blocks.push(h('p', { key: k }, items.map(function (t, j) { return [j ? h('br', { key: 'r' + j }) : null, renderInline(t, names, k + j)]; })));
  }
  return h('div', { className: cx('k-md', p.className) }, blocks);
}
// Type @ in a textarea to pick a person from a list under it.
function useMentions(ref, value, setValue, people) {
  var names = peopleNames(people), st = useState(null), act = useState(0);
  function check() {
    var el = ref.current;
    if (!el || !names.length) return;
    var caret = el.selectionStart, m = /(^|\s)@([^\s@]{0,24})$/.exec(el.value.slice(0, caret));
    if (!m) { if (st[0]) st[1](null); return; }
    var r = el.getBoundingClientRect();
    st[1]({ start: caret - m[2].length - 1, end: caret, query: m[2].toLowerCase(), left: r.left, top: r.bottom + 6 });
    act[1](0);
  }
  var q = st[0] && st[0].query;
  var matches = st[0] ? names.filter(function (n) { var l = n.toLowerCase(); return l.indexOf(q) === 0 || l.split(' ').some(function (w) { return w.indexOf(q) === 0; }); }).slice(0, 6) : [];
  function insert(name) {
    var el = ref.current, m = st[0], pos = m.start + name.length + 2;
    setValue(value.slice(0, m.start) + '@' + name + ' ' + value.slice(m.end));
    st[1](null);
    setTimeout(function () { if (el) { el.focus(); el.setSelectionRange(pos, pos); } }, 0);
  }
  function onKeyDown(e) {
    if (!st[0] || !matches.length) return false;
    if (e.key === 'ArrowDown') { e.preventDefault(); act[1]((act[0] + 1) % matches.length); return true; }
    if (e.key === 'ArrowUp') { e.preventDefault(); act[1]((act[0] - 1 + matches.length) % matches.length); return true; }
    if (e.key === 'Enter' || e.key === 'Tab') { e.preventDefault(); insert(matches[act[0]]); return true; }
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); st[1](null); return true; }
    return false;
  }
  var list = st[0] && matches.length ? h('div', { className: 'k-menu k-mention-list', role: 'listbox', style: { left: st[0].left, top: st[0].top } }, matches.map(function (n, i) {
    return h('div', { key: n, role: 'option', 'aria-selected': i === act[0], className: cx('k-menu__item k-dd__option', i === act[0] && 'k-menu__item--active'),
      onMouseDown: function (e) { e.preventDefault(); insert(n); }, onMouseMove: function () { if (act[0] !== i) act[1](i); } },
      h(Avatar, { name: n, size: 'sm' }), h('span', { className: 'k-menu__label' }, n));
  })) : null;
  return { check: check, onKeyDown: onKeyDown, list: list, close: function () { st[1](null); } };
}

/* ---------- MarkdownEditor ---------- */
function MarkdownEditor(p) {
  var auto = R.useId(), id = p.id || auto, ta = R.useRef(null);
  var st = useControlled(p.value, p.defaultValue || ''), v = st[0] || '', tab = useState('write');
  function set(next) { st[1](next); if (p.onChange) p.onChange(next); }
  var mentions = useMentions(ta, v, set, p.people);
  var mod = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || '') ? '⌘' : 'Ctrl+';
  function surround(before, after, filler) {
    var el = ta.current; if (!el) return;
    var a = el.selectionStart, b = el.selectionEnd, sel = v.slice(a, b) || filler;
    set(v.slice(0, a) + before + sel + after + v.slice(b));
    setTimeout(function () { el.focus(); el.setSelectionRange(a + before.length, a + before.length + sel.length); }, 0);
  }
  function bullets() {
    var el = ta.current; if (!el) return;
    var a = v.lastIndexOf('\n', el.selectionStart - 1) + 1, b = el.selectionEnd;
    var block = v.slice(a, b).split('\n').map(function (l) { return /^- /.test(l) ? l : '- ' + l; }).join('\n');
    set(v.slice(0, a) + block + v.slice(b));
    setTimeout(function () { el.focus(); el.setSelectionRange(a + block.length, a + block.length); }, 0);
  }
  var tools = [
    { icon: 'bold', label: strings.bold, key: 'b', run: function () { surround('**', '**', strings.bold.toLowerCase()); } },
    { icon: 'italic', label: strings.italic, key: 'i', run: function () { surround('_', '_', strings.italic.toLowerCase()); } },
    { icon: 'list', label: strings.list, run: bullets },
    { icon: 'link', label: strings.link, key: 'k', run: function () { surround('[', '](https://)', strings.link.toLowerCase()); } },
    { icon: 'code', label: strings.code, run: function () { surround('`', '`', strings.code.toLowerCase()); } }
  ];
  var note = p.error || p.hint;
  return h('div', { className: cx('k-field k-mdeditor', p.error && 'k-field--error', p.className) },
    h('div', { className: 'k-mdeditor__head' },
      p.label ? h('label', { className: 'k-field__label', htmlFor: id }, p.label) : h('span'),
      h('div', { className: 'k-mdeditor__tools' },
        tab[0] === 'write' ? tools.map(function (t) {
          return h(Tooltip, { key: t.icon, content: t.label, shortcut: t.key ? mod + t.key.toUpperCase() : undefined },
            h(Button, { size: 'sm', variant: 'ghost', icon: t.icon, 'aria-label': t.label, onMouseDown: function (e) { e.preventDefault(); }, onClick: t.run }));
        }) : null,
        h(SegmentedControl, { 'aria-label': p.label || strings.write, value: tab[0], onChange: tab[1], options: [{ value: 'write', label: strings.write }, { value: 'preview', label: strings.preview }] }))),
    tab[0] === 'write'
      ? h('textarea', { ref: ta, id: id, className: 'k-input k-textarea k-mdeditor__input', rows: p.rows || 6, value: v, placeholder: p.placeholder, maxLength: p.maxLength,
          'aria-describedby': note ? id + '-note' : undefined,
          onChange: function (e) { set(e.target.value); mentions.check(); },
          onKeyDown: function (e) {
            if (mentions.onKeyDown(e)) return;
            if (e.metaKey || e.ctrlKey) {
              var t = tools.filter(function (x) { return x.key && x.key === e.key.toLowerCase(); })[0];
              if (t) { e.preventDefault(); t.run(); }
            }
          },
          onKeyUp: function (e) { if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') mentions.check(); }, onClick: mentions.check, onBlur: function () { setTimeout(mentions.close, 120); } })
      : h('div', { className: 'k-mdeditor__preview', style: { minHeight: (p.rows || 6) * 20 + 20 } },
          v.trim() ? h(Markdown, { people: p.people }, v) : h('p', { className: 'k-mdeditor__empty' }, strings.nothingToPreview)),
    note ? h('p', { id: id + '-note', className: 'k-field__note' }, p.error ? h(Icon, { name: 'info', size: 13 }) : null, note) : null,
    mentions.list);
}

/* ---------- CommentThread ---------- */
function CommentThread(p) {
  var draft = useState(''), ta = R.useRef(null), names = peopleNames(p.people), comments = p.comments || [];
  var mentions = useMentions(ta, draft[0], draft[1], p.people);
  var mod = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || '') ? '⌘' : 'Ctrl';
  function submit() {
    var body = draft[0].trim();
    if (!body) return;
    if (p.onSubmit) p.onSubmit(body, names.filter(function (n) { return body.indexOf('@' + n) >= 0; }));
    draft[1]('');
    mentions.close();
  }
  return h('div', { className: cx('k-comments', p.className) },
    comments.length ? h('ol', { className: 'k-comments__list' }, comments.map(function (c) {
      return h('li', { key: c.id, className: 'k-comment' },
        h(Avatar, { name: c.author, size: 'sm' }),
        h('div', { className: 'k-comment__main' },
          h('p', { className: 'k-comment__meta' }, h('strong', null, c.author), c.time ? h('span', null, c.time) : null),
          h(Markdown, { people: p.people, className: 'k-comment__body' }, c.body)));
    })) : h('p', { className: 'k-comments__empty' }, strings.noComments),
    h('div', { className: 'k-comments__composer' },
      p.currentUser ? h(Avatar, { name: p.currentUser, size: 'sm' }) : null,
      h('div', { className: 'k-comments__field' },
        h('textarea', { ref: ta, className: 'k-input k-textarea k-comments__input', rows: 2, value: draft[0], placeholder: p.placeholder || strings.writeComment, 'aria-label': p.placeholder || strings.writeComment,
          onChange: function (e) { draft[1](e.target.value); mentions.check(); },
          onKeyDown: function (e) { if (mentions.onKeyDown(e)) return; if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); submit(); } },
          onKeyUp: function (e) { if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') mentions.check(); }, onClick: mentions.check, onBlur: function () { setTimeout(mentions.close, 120); } }),
        h('div', { className: 'k-comments__actions' },
          h('span', { className: 'k-comments__hint' }, h(Kbd, null, mod), h(Kbd, null, 'Enter'), ' ' + strings.toSend),
          h(Button, { size: 'sm', variant: 'secondary', icon: 'send', disabled: !draft[0].trim(), onClick: submit }, strings.comment)))),
    mentions.list);
}

/* ---------- Gantt ----------
   Projects and tasks over time: a sticky column of names, a scrolling timeline with bars, progress and a today line. */
function Gantt(p) {
  var items = p.items || [], dayMs = 864e5, scroller = R.useRef(null);
  var diff = function (a, b) { return Math.round((fromISODate(b) - fromISODate(a)) / dayMs); };
  var starts = items.map(function (it) { return it.start; }).sort(), ends = items.map(function (it) { return it.end || it.start; }).sort();
  var todayISO = toISODate(new Date());
  var from = p.from || (starts.length ? toISODate(addDays(fromISODate(starts[0] < todayISO ? starts[0] : todayISO), -3)) : todayISO);
  var to = p.to || (ends.length ? toISODate(addDays(fromISODate(ends[ends.length - 1] > todayISO ? ends[ends.length - 1] : todayISO), 7)) : todayISO);
  var days = diff(from, to) + 1;
  var dayW = p.scale === 'day' ? 32 : p.scale === 'week' ? 12 : days > 120 ? 12 : 28;
  var width = days * dayW, labelW = p.labelWidth || 220, start = fromISODate(from);
  var rows = [], groups = [];
  items.forEach(function (it) { if (it.group && groups.indexOf(it.group) < 0) groups.push(it.group); });
  if (groups.length) groups.forEach(function (g) { rows.push({ group: g }); items.forEach(function (it) { if (it.group === g) rows.push({ item: it }); }); });
  items.forEach(function (it) { if (!it.group) rows.push({ item: it }); });
  var months = [], ticks = [];
  for (var d = 0; d < days; d++) {
    var day = addDays(start, d);
    if (d === 0 || day.getDate() === 1) months.push(h('span', { key: 'm' + d, className: 'k-gantt__month', style: { left: d * dayW } }, formatDate(day, { month: 'long', year: 'numeric' })));
    if (dayW >= 24 || day.getDay() === 1) ticks.push(h('span', { key: 'd' + d, className: cx('k-gantt__tick', (day.getDay() === 0 || day.getDay() === 6) && dayW >= 24 && 'k-gantt__tick--weekend', toISODate(day) === todayISO && 'k-gantt__tick--today'), style: { left: d * dayW, width: dayW >= 24 ? dayW : dayW * 7 } }, day.getDate()));
  }
  var todayX = diff(from, todayISO) * dayW + dayW / 2, showToday = todayISO >= from && todayISO <= to;
  useIsoLayout(function () { if (scroller.current && showToday) scroller.current.scrollLeft = Math.max(0, todayX - 240); }, []);
  return h('div', { className: cx('k-gantt', p.className), role: 'region', 'aria-label': p['aria-label'] },
    h('div', { ref: scroller, className: 'k-gantt__scroll', style: p.maxHeight ? { maxHeight: p.maxHeight } : undefined },
      h('div', { className: 'k-gantt__table', style: { width: labelW + width } },
        h('div', { className: 'k-gantt__row k-gantt__row--head' },
          h('div', { className: 'k-gantt__name', style: { width: labelW } }),
          h('div', { className: 'k-gantt__track', style: { width: width } }, h('div', { className: 'k-gantt__months' }, months), h('div', { className: 'k-gantt__ticks' }, ticks))),
        rows.map(function (r, i) {
          if (r.group) return h('div', { key: 'g' + i, className: 'k-gantt__row k-gantt__row--group' },
            h('div', { className: 'k-gantt__name', style: { width: labelW } }, r.group), h('div', { className: 'k-gantt__track', style: { width: width } }));
          var it = r.item, end = it.end || it.start, left = diff(from, it.start) * dayW, w = (diff(it.start, end) + 1) * dayW;
          var milestone = it.milestone || false, label = it.label + ' · ' + formatDate(fromISODate(it.start), { month: 'short', day: 'numeric' }) + (end !== it.start ? ' – ' + formatDate(fromISODate(end), { month: 'short', day: 'numeric' }) : '');
          return h('div', { key: it.id || i, className: 'k-gantt__row' },
            h('div', { className: 'k-gantt__name', style: { width: labelW } },
              it.avatar ? h(Avatar, { name: it.avatar, size: 'sm' }) : null, h('span', { className: 'k-gantt__label' }, it.label)),
            h('div', { className: 'k-gantt__track', style: { width: width } },
              h('button', { type: 'button', className: cx('k-gantt__bar', milestone && 'k-gantt__bar--milestone'), title: label, 'aria-label': label,
                style: milestone ? { left: left + dayW / 2 - 7 } : { left: left + 2, width: Math.max(6, w - 4) },
                onClick: p.onItemClick ? function () { p.onItemClick(it); } : undefined },
                !milestone && it.progress != null ? h('span', { className: 'k-gantt__progress', style: { width: Math.max(0, Math.min(1, it.progress)) * 100 + '%' } }) : null),
              h('span', { className: 'k-gantt__after', style: { left: milestone ? left + dayW / 2 + 12 : left + w + 6 } }, it.progress != null ? Math.round(it.progress * 100) + '%' : null)));
        }),
        showToday ? h('span', { className: 'k-gantt__today', style: { left: labelW + todayX }, 'aria-hidden': true }) : null)));
}

export {
  setStrings,
  locales,
  setTheme,
  Button,
  TextField,
  SearchField,
  Checkbox,
  Switch,
  SegmentedControl,
  List,
  ListRow,
  Card,
  Badge,
  ProgressBar,
  Topbar,
  Sidebar,
  NavList,
  SettingsSection,
  Dialog,
  Icon,
  Kbd,
  Textarea,
  Select,
  Dropdown,
  RadioGroup,
  Slider,
  Avatar,
  AvatarGroup,
  Tooltip,
  Tabs,
  Stat,
  Table,
  EmptyState,
  Skeleton,
  Spinner,
  Pagination,
  Accordion,
  Callout,
  Toast,
  Menu,
  MenuPanel,
  CommandPalette,
  ContextMenu,
  Toaster,
  toast,
  Drawer,
  Modal,
  LineChart,
  BarChart,
  BarList,
  Sparkline,
  Calendar,
  DatePicker,
  Popover,
  NotificationInbox,
  Kanban,
  MultiSelect,
  FileDrop,
  Timeline,
  Stepper,
  NumberField,
  CurrencyField,
  CodeInput,
  PasswordField,
  DateRangePicker,
  TimePicker,
  Combobox,
  DonutChart,
  Heatmap,
  Markdown,
  MarkdownEditor,
  CommentThread,
  Gantt
};
