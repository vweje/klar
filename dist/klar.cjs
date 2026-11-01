"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/klar.js
var klar_exports = {};
__export(klar_exports, {
  Accordion: () => Accordion,
  Avatar: () => Avatar,
  AvatarGroup: () => AvatarGroup,
  Badge: () => Badge,
  Button: () => Button,
  Callout: () => Callout,
  Card: () => Card,
  Checkbox: () => Checkbox,
  CommandPalette: () => CommandPalette,
  ContextMenu: () => ContextMenu,
  Dialog: () => Dialog,
  Drawer: () => Drawer,
  Dropdown: () => Dropdown,
  EmptyState: () => EmptyState,
  Icon: () => Icon,
  Kbd: () => Kbd,
  List: () => List,
  ListRow: () => ListRow,
  Menu: () => Menu,
  MenuPanel: () => MenuPanel,
  Modal: () => Modal,
  NavList: () => NavList,
  Pagination: () => Pagination,
  ProgressBar: () => ProgressBar,
  RadioGroup: () => RadioGroup,
  SearchField: () => SearchField,
  SegmentedControl: () => SegmentedControl,
  Select: () => Select,
  SettingsSection: () => SettingsSection,
  Sidebar: () => Sidebar,
  Skeleton: () => Skeleton,
  Slider: () => Slider,
  Spinner: () => Spinner,
  Stat: () => Stat,
  Switch: () => Switch,
  Table: () => Table,
  Tabs: () => Tabs,
  TextField: () => TextField,
  Textarea: () => Textarea,
  Toast: () => Toast,
  Toaster: () => Toaster,
  Tooltip: () => Tooltip,
  Topbar: () => Topbar,
  locales: () => locales,
  setStrings: () => setStrings,
  setTheme: () => setTheme,
  toast: () => toast
});
module.exports = __toCommonJS(klar_exports);
var R = __toESM(require("react"), 1);
var h = R.createElement;
var useState2 = R.useState;
var useIsoLayout = typeof window !== "undefined" ? R.useLayoutEffect : R.useEffect;
var en = {
  search: "Search",
  selected: "Selected",
  breadcrumb: "Breadcrumb",
  mainNavigation: "Main navigation",
  loading: "Loading",
  pagination: "Pagination",
  previous: "Previous",
  next: "Next",
  close: "Close",
  commands: "Commands",
  commandPlaceholder: "Type a command or search\u2026",
  searchCommands: "Search commands",
  noResults: "No results for",
  navigate: "navigate",
  select: "select"
};
var da = {
  search: "S\xF8g",
  selected: "Valgt",
  breadcrumb: "Br\xF8dkrumme",
  mainNavigation: "Hovedmenu",
  loading: "Indl\xE6ser",
  pagination: "Sider",
  previous: "Forrige",
  next: "N\xE6ste",
  close: "Luk",
  commands: "Kommandoer",
  commandPlaceholder: "Skriv en kommando eller s\xF8g\u2026",
  searchCommands: "S\xF8g kommandoer",
  noResults: "Ingen resultater for",
  navigate: "naviger",
  select: "v\xE6lg"
};
var locales = { en, da };
var strings = Object.assign({}, en);
function setStrings(next) {
  Object.assign(strings, typeof next === "string" ? locales[next] : next);
  return strings;
}
function cx() {
  return Array.prototype.filter.call(arguments, Boolean).join(" ");
}
function omit(o, keys) {
  var r = {};
  for (var k in o) {
    if (keys.indexOf(k) < 0) r[k] = o[k];
  }
  return r;
}
function useControlled(value, initial) {
  var s = useState2(initial), c = value !== void 0;
  return [c ? value : s[0], function(v) {
    if (!c) s[1](v);
  }];
}
function reducedMotion() {
  return typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function motionMs(token) {
  if (reducedMotion()) return 0;
  var v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--" + token));
  return isNaN(v) ? 120 : v;
}
function usePresence(open, token) {
  var st = useState2(open), mounted = st[0];
  R.useEffect(function() {
    if (open) {
      st[1](true);
      return;
    }
    var t = setTimeout(function() {
      st[1](false);
    }, motionMs(token));
    return function() {
      clearTimeout(t);
    };
  }, [open]);
  return { show: open || mounted, leaving: !open && mounted };
}
function useEscape(active, onEscape) {
  R.useEffect(function() {
    if (!active) return;
    function key(e) {
      if (e.key === "Escape") onEscape();
    }
    document.addEventListener("keydown", key);
    return function() {
      document.removeEventListener("keydown", key);
    };
  });
}
function onScrimDown(onClose) {
  return function(e) {
    if (e.target === e.currentTarget && onClose) onClose();
  };
}
function setTheme(theme) {
  var root = document.documentElement;
  function apply() {
    if (theme === "system") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", theme);
  }
  function done() {
    root.classList.remove("k-theme-switching");
  }
  root.classList.add("k-theme-switching");
  if (document.startViewTransition && !reducedMotion()) {
    document.startViewTransition(apply).finished.then(done, done);
    return;
  }
  apply();
  getComputedStyle(document.body).opacity;
  setTimeout(done, 1);
}
var PATHS = {
  "chevron-right": "M9 6l6 6-6 6",
  "chevron-down": "M6 9l6 6 6-6",
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
  "search": "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4",
  "check": "M5 12.5l4.5 4.5L19 7.5",
  "xmark": "M6 6l12 12M18 6L6 18",
  "plus": "M12 5v14M5 12h14",
  "more": "M5.5 12h.01M12 12h.01M18.5 12h.01",
  "home": "M4 10.5L12 4l8 6.5V20H4z",
  "inbox": "M4 13l2.5-8h11L20 13v6H4zM4 13h5l1 2h4l1-2h5",
  "folder": "M3.5 6.5h6l2 2h9v10h-17z",
  "calendar": "M4 6h16v14H4zM4 10h16M8 3.5v4M16 3.5v4",
  "chart": "M5 20V11M12 20V4M19 20v-6",
  "person": "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4.5 20.5a7.5 7.5 0 0 1 15 0",
  "settings": "M4 7h9M17 7h3M15 5v4M4 17h3M11 17h9M9 15v4",
  "bell": "M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15zM10 20.5a2 2 0 0 0 4 0",
  "lock": "M5 11h14v9H5zM8 11V8a4 4 0 0 1 8 0v3",
  "info": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01",
  "circle-check": "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.5 12.5l2.5 2.5 4.5-5",
  "alert": "M12 4l9 16H3zM12 10v4M12 17h.01",
  "chevron-left": "M15 6l-6 6 6 6",
  "trend-up": "M4 16l6-6 4 4 6-6M15 8h5v5",
  "trend-down": "M4 8l6 6 4-4 6 6M15 16h5v-5",
  "edit": "M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4",
  "copy": "M9 9h11v11H9zM5 15V4h11",
  "trash": "M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13",
  "upload": "M12 16V4M7 9l5-5 5 5M4 20h16",
  "filter": "M4 6h16M7 12h10M10 18h4",
  "logout": "M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"
};
function Icon(p) {
  var size = p.size || 16;
  return h("svg", {
    className: cx("k-icon", p.className),
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: p.weight || 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: p.label ? "img" : void 0,
    "aria-label": p.label,
    "aria-hidden": p.label ? void 0 : true
  }, h("path", { d: PATHS[p.name] || "" }));
}
Icon.names = Object.keys(PATHS);
function Kbd(p) {
  return h("kbd", { className: "k-kbd" }, p.children);
}
function Button(p) {
  var variant = p.variant || "primary", size = p.size || "md";
  var rest = omit(p, ["variant", "size", "icon", "iconRight", "shortcut", "block", "className", "children"]);
  var is = size === "lg" ? 16 : 14;
  return h(
    "button",
    Object.assign({ type: "button" }, rest, {
      className: cx("k-btn", "k-btn--" + variant, "k-btn--" + size, p.block && "k-btn--block", !p.children && "k-btn--icon-only", p.className)
    }),
    p.icon ? h(Icon, { name: p.icon, size: is, weight: 2.25 }) : null,
    p.children != null ? h("span", null, p.children) : null,
    p.iconRight ? h(Icon, { name: p.iconRight, size: is, weight: 2.25 }) : null,
    p.shortcut ? h("span", { className: "k-btn__kbd" }, p.shortcut) : null
  );
}
function TextField(p) {
  var auto = R.useId(), id = p.id || auto, note = p.error || p.hint;
  var rest = omit(p, ["label", "hint", "error", "className", "id"]);
  return h(
    "div",
    { className: cx("k-field", p.error && "k-field--error", p.className) },
    p.label ? h("label", { className: "k-field__label", htmlFor: id }, p.label) : null,
    h("input", Object.assign({ id, className: "k-input", "aria-invalid": p.error ? true : void 0, "aria-describedby": note ? id + "-note" : void 0 }, rest)),
    note ? h("p", { id: id + "-note", className: "k-field__note" }, p.error ? h(Icon, { name: "info", size: 13 }) : null, note) : null
  );
}
function SearchField(p) {
  var rest = omit(p, ["className", "placeholder", "shortcut"]);
  var ph = p.placeholder || strings.search;
  return h(
    "label",
    { className: cx("k-search", p.className) },
    h(Icon, { name: "search", size: 15 }),
    h("input", Object.assign({ type: "search", className: "k-search__input", placeholder: ph, "aria-label": ph }, rest)),
    p.shortcut === false ? null : h(Kbd, null, p.shortcut || "\u2318K")
  );
}
function Checkbox(p) {
  var st = useControlled(p.checked, !!p.defaultChecked), on = st[0];
  var id = R.useId();
  function toggle() {
    if (p.disabled) return;
    st[1](!on);
    if (p.onChange) p.onChange(!on);
  }
  return h(
    "div",
    { className: cx("k-check", p.disabled && "k-check--disabled", p.className) },
    h(
      "button",
      { type: "button", role: "checkbox", "aria-checked": on, disabled: p.disabled, "aria-labelledby": p.label ? id : void 0, "aria-label": p.label ? void 0 : p["aria-label"], className: cx("k-check__box", on && "k-check__box--on"), onClick: toggle },
      on ? h(Icon, { name: "check", size: 12, weight: 3 }) : null
    ),
    p.label ? h(
      "div",
      { className: "k-check__text", onClick: toggle },
      h("span", { id, className: "k-check__label" }, p.label),
      p.description ? h("span", { className: "k-check__desc" }, p.description) : null
    ) : null
  );
}
function Switch(p) {
  var st = useControlled(p.checked, !!p.defaultChecked), on = st[0];
  function toggle() {
    if (p.disabled) return;
    st[1](!on);
    if (p.onChange) p.onChange(!on);
  }
  var btn = h("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    disabled: p.disabled,
    "aria-label": p.label ? void 0 : p["aria-label"],
    className: cx("k-switch", on && "k-switch--on"),
    onClick: toggle
  }, h("span", { className: "k-switch__knob" }));
  return p.label ? h("label", { className: cx("k-switch-row", p.className) }, h("span", null, p.label), btn) : btn;
}
function SegmentedControl(p) {
  var opts = (p.options || []).map(function(o) {
    return typeof o === "string" ? { value: o, label: o } : o;
  });
  var st = useControlled(p.value, p.defaultValue !== void 0 ? p.defaultValue : opts[0] && opts[0].value), v = st[0];
  return h(
    "div",
    { className: cx("k-seg", p.block && "k-seg--block", p.className), role: "radiogroup", "aria-label": p["aria-label"] },
    opts.map(function(o) {
      var on = o.value === v;
      return h("button", {
        key: o.value,
        type: "button",
        role: "radio",
        "aria-checked": on,
        className: cx("k-seg__item", on && "k-seg__item--on"),
        onClick: function() {
          st[1](o.value);
          if (p.onChange) p.onChange(o.value);
        }
      }, o.icon ? h(Icon, { name: o.icon, size: 14 }) : null, o.label);
    })
  );
}
function List(p) {
  return h(
    "section",
    { className: cx("k-list", p.className) },
    p.header || p.action ? h(
      "div",
      { className: "k-list__head" },
      p.header ? h("h3", { className: "k-list__header" }, p.header) : h("span"),
      p.action || null
    ) : null,
    h("div", { className: "k-list__body" }, p.children),
    p.footer ? h("p", { className: "k-list__footer" }, p.footer) : null
  );
}
function ListRow(p) {
  var acc = p.accessory, accNode = null;
  if (acc === "chevron") accNode = h(Icon, { name: "chevron-right", size: 16, className: "k-row__chev" });
  else if (acc === "check") accNode = h(Icon, { name: "check", size: 16, weight: 2.5, className: "k-row__check", label: strings.selected });
  else if (acc) accNode = acc;
  var Tag = p.href ? "a" : p.onClick ? "button" : "div";
  return h(
    Tag,
    {
      className: cx("k-row", (p.href || p.onClick) && "k-row--action", p.className),
      href: p.href,
      onClick: p.onClick,
      type: Tag === "button" ? "button" : void 0
    },
    p.icon ? h("span", { className: "k-row__icon" }, h(Icon, { name: p.icon, size: 15 })) : null,
    h(
      "span",
      { className: "k-row__text" },
      h("span", { className: cx("k-row__title", p.destructive && "k-row__title--danger") }, p.title),
      p.subtitle ? h("span", { className: "k-row__subtitle" }, p.subtitle) : null
    ),
    p.value != null ? h("span", { className: "k-row__value" }, p.value) : null,
    accNode
  );
}
function Card(p) {
  var rest = omit(p, ["eyebrow", "title", "action", "footer", "className", "children"]);
  return h(
    "div",
    Object.assign({}, rest, { className: cx("k-card", p.className) }),
    p.eyebrow || p.title || p.action ? h(
      "div",
      { className: "k-card__head" },
      h(
        "div",
        null,
        p.eyebrow ? h("p", { className: "k-card__eyebrow" }, p.eyebrow) : null,
        p.title ? h("h3", { className: "k-card__title" }, p.title) : null
      ),
      p.action || null
    ) : null,
    p.children != null ? h("div", { className: "k-card__body" }, p.children) : null,
    p.footer ? h("div", { className: "k-card__footer" }, p.footer) : null
  );
}
function Badge(p) {
  var tone = p.tone || "neutral", dot = tone === "success" || tone === "warning" || tone === "danger";
  return h("span", { className: cx("k-badge", "k-badge--" + tone, p.className) }, dot ? h("span", { className: "k-badge__dot" }) : null, p.children);
}
function ProgressBar(p) {
  var v = Math.max(0, Math.min(1, p.value || 0));
  return h("div", {
    className: cx("k-progress", p.className),
    role: "progressbar",
    "aria-label": p.label,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(v * 100)
  }, h("div", { className: "k-progress__fill", style: { width: v * 100 + "%" } }));
}
function Topbar(p) {
  var crumbs = p.breadcrumb || [];
  return h(
    "header",
    { className: cx("k-topbar", p.className) },
    h(
      "nav",
      { className: "k-topbar__crumbs", "aria-label": strings.breadcrumb },
      crumbs.map(function(c, i) {
        return h(R.Fragment, { key: i }, h("span", { className: "k-topbar__crumb" }, c), h("span", { className: "k-topbar__sep", "aria-hidden": true }, "/"));
      }),
      h("h1", { className: "k-topbar__title" }, p.title)
    ),
    p.actions ? h("div", { className: "k-topbar__actions" }, p.actions) : null
  );
}
function Sidebar(p) {
  var items = p.items || [];
  var st = useControlled(p.value, p.defaultValue !== void 0 ? p.defaultValue : items[0] && items[0].id), v = st[0];
  return h(
    "aside",
    { className: cx("k-sidebar", p.className) },
    p.header ? h("div", { className: "k-sidebar__header" }, p.header) : null,
    h(
      "nav",
      { className: "k-sidebar__nav", "aria-label": p["aria-label"] || strings.mainNavigation },
      items.map(function(it, i) {
        if (it.section) return h("p", { key: "s" + i, className: "k-sidebar__section" }, it.section);
        var on = it.id === v;
        return h(
          "button",
          {
            key: it.id,
            type: "button",
            className: cx("k-sidebar__item", on && "k-sidebar__item--on"),
            "aria-current": on ? "page" : void 0,
            onClick: function() {
              st[1](it.id);
              if (p.onChange) p.onChange(it.id);
            }
          },
          it.icon ? h(Icon, { name: it.icon, size: 16 }) : null,
          h("span", { className: "k-sidebar__label" }, it.label),
          it.count != null ? h("span", { className: "k-sidebar__count" }, it.count) : null
        );
      })
    ),
    p.footer ? h("div", { className: "k-sidebar__footer" }, p.footer) : null
  );
}
function NavList(p) {
  var items = p.items || [];
  var first = items.filter(function(it) {
    return it.id;
  })[0];
  var st = useControlled(p.value, p.defaultValue !== void 0 ? p.defaultValue : first && first.id), v = st[0];
  return h(
    "nav",
    { className: cx("k-navlist", p.className), "aria-label": p["aria-label"] },
    items.map(function(it, i) {
      if (it.section) return h("p", { key: "s" + i, className: "k-navlist__section" }, it.section);
      var on = it.id === v;
      return h(
        "button",
        {
          key: it.id,
          type: "button",
          className: cx("k-navlist__item", on && "k-navlist__item--on"),
          "aria-current": on ? "page" : void 0,
          onClick: function() {
            st[1](it.id);
            if (p.onChange) p.onChange(it.id);
          }
        },
        it.icon ? h(Icon, { name: it.icon, size: 16 }) : null,
        h("span", { className: "k-navlist__label" }, it.label),
        it.count != null ? h("span", { className: "k-navlist__count" }, it.count) : null
      );
    })
  );
}
function SettingsSection(p) {
  return h(
    "section",
    { className: cx("k-setting", p.className) },
    h(
      "div",
      { className: "k-setting__head" },
      h("h3", { className: "k-setting__title" }, p.title),
      p.description ? h("p", { className: "k-setting__desc" }, p.description) : null
    ),
    h("div", { className: "k-setting__body" }, p.children)
  );
}
function Dialog(p) {
  var id = R.useId();
  var presence = usePresence(p.open !== false, "duration-fast");
  useEscape(p.overlay && p.open !== false && !!p.onClose, p.onClose);
  if (!presence.show) return null;
  var acts = p.actions && p.actions.length ? p.actions : [{ label: "OK", variant: "primary" }];
  var panel = h(
    "div",
    { className: cx("k-dialog", p.className), role: "dialog", "aria-modal": p.overlay ? true : void 0, "aria-labelledby": id + "-t", "aria-describedby": p.message ? id + "-m" : void 0 },
    h(
      "div",
      { className: "k-dialog__content" },
      h("h2", { id: id + "-t", className: "k-dialog__title" }, p.title),
      p.message ? h("p", { id: id + "-m", className: "k-dialog__message" }, p.message) : null,
      p.children || null
    ),
    h(
      "div",
      { className: "k-dialog__actions" },
      acts.map(function(a, i) {
        return h(Button, { key: i, size: "md", variant: a.variant || "secondary", onClick: a.onClick }, a.label);
      })
    )
  );
  return p.overlay ? h("div", { className: cx("k-scrim", presence.leaving && "k-leaving"), onMouseDown: onScrimDown(p.onClose) }, panel) : panel;
}
function Textarea(p) {
  var auto = R.useId(), id = p.id || auto, note = p.error || p.hint;
  var len = useState2(String(p.value != null ? p.value : p.defaultValue || "").length);
  var rest = omit(p, ["label", "hint", "error", "className", "id", "onChange"]);
  return h(
    "div",
    { className: cx("k-field", p.error && "k-field--error", p.className) },
    p.label ? h("label", { className: "k-field__label", htmlFor: id }, p.label) : null,
    h("textarea", Object.assign({
      id,
      rows: 4,
      className: "k-input k-textarea",
      "aria-invalid": p.error ? true : void 0,
      "aria-describedby": note ? id + "-note" : void 0,
      onChange: function(e) {
        len[1](e.target.value.length);
        if (p.onChange) p.onChange(e);
      }
    }, rest)),
    note || p.maxLength ? h(
      "div",
      { className: "k-field__row" },
      note ? h("p", { id: id + "-note", className: "k-field__note" }, p.error ? h(Icon, { name: "info", size: 13 }) : null, note) : h("span"),
      p.maxLength ? h("span", { className: "k-field__count" }, len[0] + "/" + p.maxLength) : null
    ) : null
  );
}
function Select(p) {
  var auto = R.useId(), id = p.id || auto, note = p.error || p.hint;
  var opts = (p.options || []).map(function(o) {
    return typeof o === "string" ? { value: o, label: o } : o;
  });
  var rest = omit(p, ["label", "hint", "error", "className", "id", "options", "placeholder"]);
  return h(
    "div",
    { className: cx("k-field", p.error && "k-field--error", p.className) },
    p.label ? h("label", { className: "k-field__label", htmlFor: id }, p.label) : null,
    h(
      "div",
      { className: "k-select" },
      h(
        "select",
        Object.assign({ id, className: "k-input k-select__el", "aria-describedby": note ? id + "-note" : void 0 }, rest),
        p.placeholder ? h("option", { value: "", disabled: true }, p.placeholder) : null,
        opts.map(function(o) {
          return h("option", { key: o.value, value: o.value }, o.label);
        })
      ),
      h(Icon, { name: "chevron-down", size: 16, className: "k-select__chev" })
    ),
    note ? h("p", { id: id + "-note", className: "k-field__note" }, note) : null
  );
}
function Dropdown(p) {
  var auto = R.useId(), id = p.id || auto;
  var opts = (p.options || []).map(function(o) {
    return typeof o === "string" ? { value: o, label: o } : o;
  });
  var choices = opts.filter(function(o) {
    return !o.section;
  });
  var st = useControlled(p.value, p.defaultValue), v = st[0];
  var open = useState2(false), q = useState2(""), act = useState2(0), pos = useState2(null);
  var presence = usePresence(open[0], "duration-fast");
  var wrap = R.useRef(null), trigger = R.useRef(null), list = R.useRef(null);
  var query = q[0].trim().toLowerCase();
  var shown = opts.filter(function(o) {
    return o.section ? !query : !query || String(o.label).toLowerCase().indexOf(query) >= 0;
  });
  var selectable = shown.filter(function(o) {
    return !o.section && !o.disabled;
  });
  var current = choices.filter(function(o) {
    return o.value === v;
  })[0];
  var note = p.error || p.hint;
  function show() {
    if (p.disabled || !trigger.current) return;
    var r = trigger.current.getBoundingClientRect();
    var panelHeight = Math.min(280, choices.length * 30 + 8) + (p.search ? 38 : 0);
    var below = window.innerHeight - r.bottom, up = below < panelHeight + 12 && r.top > below;
    pos[1]({ left: r.left, width: r.width, top: up ? void 0 : r.bottom + 6, bottom: up ? window.innerHeight - r.top + 6 : void 0, up });
    q[1]("");
    act[1](Math.max(0, choices.filter(function(o) {
      return !o.disabled;
    }).indexOf(current)));
    open[1](true);
  }
  function hide(refocus) {
    open[1](false);
    if (refocus && trigger.current) trigger.current.focus();
  }
  function pick(o) {
    if (!o || o.disabled) return;
    st[1](o.value);
    if (p.onChange) p.onChange(o.value);
    hide(true);
  }
  function move(to) {
    act[1](Math.max(0, Math.min(selectable.length - 1, to)));
  }
  function onKey(e) {
    if (!open[0]) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        show();
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      move(act[0] + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      move(act[0] - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      move(0);
    } else if (e.key === "End") {
      e.preventDefault();
      move(selectable.length - 1);
    } else if (e.key === "Enter" || e.key === " " && !p.search) {
      e.preventDefault();
      pick(selectable[act[0]]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      hide(true);
    } else if (e.key === "Tab") hide(false);
    else if (!p.search && e.key.length === 1) {
      var key = e.key.toLowerCase(), n = selectable.length;
      for (var i = 1; i <= n; i++) {
        var o = selectable[(act[0] + i) % n];
        if (String(o.label).toLowerCase().charAt(0) === key) {
          act[1]((act[0] + i) % n);
          break;
        }
      }
    }
  }
  R.useEffect(function() {
    if (!open[0]) return;
    function off(e) {
      if (wrap.current && !wrap.current.contains(e.target)) hide(false);
    }
    function scroll(e) {
      if (!list.current || !list.current.contains(e.target)) hide(false);
    }
    document.addEventListener("mousedown", off);
    window.addEventListener("scroll", scroll, true);
    window.addEventListener("resize", off);
    return function() {
      document.removeEventListener("mousedown", off);
      window.removeEventListener("scroll", scroll, true);
      window.removeEventListener("resize", off);
    };
  }, [open[0]]);
  R.useEffect(function() {
    var l = list.current, el = open[0] && l && l.querySelector("[data-active]");
    if (!el) return;
    if (el.offsetTop < l.scrollTop) l.scrollTop = el.offsetTop - 4;
    else if (el.offsetTop + el.offsetHeight > l.scrollTop + l.clientHeight) l.scrollTop = el.offsetTop + el.offsetHeight - l.clientHeight + 4;
  }, [open[0], act[0], query]);
  var activeOption = open[0] ? selectable[act[0]] : null;
  var optionId = function(o) {
    return id + "-o-" + choices.indexOf(o);
  };
  var panel = presence.show && pos[0] ? h(
    "div",
    {
      className: cx("k-menu k-dd__panel", pos[0].up && "k-dd__panel--up", presence.leaving && "k-leaving"),
      style: { left: pos[0].left, top: pos[0].top, bottom: pos[0].bottom, width: pos[0].width }
    },
    p.search ? h(
      "div",
      { className: "k-dd__search" },
      h(Icon, { name: "search", size: 15 }),
      h("input", {
        className: "k-dd__search-input",
        autoFocus: true,
        value: q[0],
        placeholder: strings.search,
        "aria-label": strings.search,
        "aria-controls": id + "-list",
        "aria-activedescendant": activeOption ? optionId(activeOption) : void 0,
        onChange: function(e) {
          q[1](e.target.value);
          act[1](0);
        },
        onKeyDown: onKey
      })
    ) : null,
    h(
      "div",
      { ref: list, id: id + "-list", role: "listbox", "aria-labelledby": p.label ? id + "-label" : void 0, "aria-label": p.label ? void 0 : p["aria-label"], className: "k-dd__list" },
      selectable.length === 0 ? h("p", { className: "k-dd__empty" }, strings.noResults + ' "' + q[0] + '"') : null,
      shown.map(function(o, i) {
        if (o.section) return h("p", { key: "s" + i, className: "k-menu__heading" }, o.section);
        var on = o.value === v, active = o === activeOption;
        return h(
          "div",
          {
            key: String(o.value),
            id: optionId(o),
            role: "option",
            "aria-selected": on,
            "aria-disabled": o.disabled || void 0,
            "data-active": active || void 0,
            className: cx("k-menu__item k-dd__option", active && "k-menu__item--active", o.disabled && "k-dd__option--disabled"),
            onMouseMove: function() {
              if (!o.disabled && !active) act[1](selectable.indexOf(o));
            },
            onMouseDown: function(e) {
              e.preventDefault();
            },
            onClick: function() {
              pick(o);
            }
          },
          h("span", { className: "k-menu__check" }, on ? h(Icon, { name: "check", size: 13, weight: 2.5 }) : null),
          o.icon ? h(Icon, { name: o.icon, size: 14 }) : null,
          h("span", { className: "k-menu__label" }, o.label, o.description ? h("span", { className: "k-dd__desc" }, o.description) : null)
        );
      })
    )
  ) : null;
  return h(
    "div",
    { ref: wrap, className: cx("k-field", p.error && "k-field--error", p.className) },
    p.label ? h("label", { id: id + "-label", className: "k-field__label", htmlFor: id, onClick: function(e) {
      e.preventDefault();
      if (trigger.current) trigger.current.focus();
    } }, p.label) : null,
    h(
      "button",
      {
        ref: trigger,
        id,
        type: "button",
        role: "combobox",
        disabled: p.disabled,
        className: cx("k-input k-dd__trigger", !current && "k-dd__trigger--empty"),
        "aria-haspopup": "listbox",
        "aria-expanded": open[0],
        "aria-controls": open[0] ? id + "-list" : void 0,
        "aria-activedescendant": !p.search && activeOption ? optionId(activeOption) : void 0,
        "aria-label": p.label ? void 0 : p["aria-label"],
        "aria-invalid": p.error ? true : void 0,
        "aria-describedby": note ? id + "-note" : void 0,
        onClick: function() {
          if (open[0]) hide(false);
          else show();
        },
        onKeyDown: onKey
      },
      current && current.icon ? h(Icon, { name: current.icon, size: 15 }) : null,
      h("span", { className: "k-dd__value" }, current ? current.label : p.placeholder || ""),
      h(Icon, { name: "chevron-down", size: 16, className: "k-dd__chev" })
    ),
    p.name ? h("input", { type: "hidden", name: p.name, value: v == null ? "" : v }) : null,
    note ? h("p", { id: id + "-note", className: "k-field__note" }, p.error ? h(Icon, { name: "info", size: 13 }) : null, note) : null,
    panel
  );
}
function RadioGroup(p) {
  var opts = (p.options || []).map(function(o) {
    return typeof o === "string" ? { value: o, label: o } : o;
  });
  var st = useControlled(p.value, p.defaultValue), v = st[0];
  return h(
    "div",
    { className: cx("k-radios", p.variant === "cards" && "k-radios--cards", p.className), role: "radiogroup", "aria-label": p["aria-label"] },
    opts.map(function(o) {
      var on = o.value === v;
      return h(
        "button",
        {
          key: o.value,
          type: "button",
          role: "radio",
          "aria-checked": on,
          disabled: o.disabled,
          className: cx("k-radio", on && "k-radio--on"),
          onClick: function() {
            st[1](o.value);
            if (p.onChange) p.onChange(o.value);
          }
        },
        h("span", { className: "k-radio__dot" }),
        h(
          "span",
          { className: "k-radio__text" },
          h("span", { className: "k-radio__label" }, o.label),
          o.description ? h("span", { className: "k-radio__desc" }, o.description) : null
        )
      );
    })
  );
}
function Slider(p) {
  var st = useControlled(p.value, p.defaultValue != null ? p.defaultValue : p.min || 0), v = st[0];
  var min = p.min || 0, max = p.max != null ? p.max : 100, pct = (v - min) / (max - min) * 100;
  var id = R.useId();
  return h(
    "div",
    { className: cx("k-slider", p.className) },
    p.label ? h(
      "div",
      { className: "k-slider__head" },
      h("label", { className: "k-field__label", htmlFor: id }, p.label),
      h("span", { className: "k-slider__value" }, p.format ? p.format(v) : v)
    ) : null,
    h("input", {
      id,
      type: "range",
      min,
      max,
      step: p.step || 1,
      value: v,
      disabled: p.disabled,
      className: "k-slider__input",
      style: { "--k-pct": pct + "%" },
      "aria-label": p.label ? void 0 : p["aria-label"],
      onChange: function(e) {
        var n = Number(e.target.value);
        st[1](n);
        if (p.onChange) p.onChange(n);
      }
    })
  );
}
function initials(name) {
  return String(name || "?").trim().split(/\s+/).slice(0, 2).map(function(s) {
    return s.charAt(0);
  }).join("").toUpperCase();
}
function Avatar(p) {
  var size = p.size || "md";
  return h(
    "span",
    { className: cx("k-avatar", "k-avatar--" + size, p.className), title: p.name, role: "img", "aria-label": p.name },
    p.src ? h("img", { src: p.src, alt: "" }) : initials(p.name),
    p.status ? h("span", { className: cx("k-avatar__status", "k-avatar__status--" + p.status) }) : null
  );
}
function AvatarGroup(p) {
  var list = p.names || [], max = p.max || 4, extra = list.length - max;
  return h(
    "span",
    { className: cx("k-avatars", p.className) },
    list.slice(0, max).map(function(n, i) {
      return h(Avatar, { key: i, name: n, size: p.size || "sm" });
    }),
    extra > 0 ? h("span", { className: cx("k-avatar", "k-avatar--" + (p.size || "sm"), "k-avatar--more") }, "+" + extra) : null
  );
}
function Tooltip(p) {
  return h(
    "span",
    { className: cx("k-tip", p.open && "k-tip--open", "k-tip--" + (p.side || "top"), p.className) },
    p.children,
    h("span", { className: "k-tip__bubble", role: "tooltip" }, p.content, p.shortcut ? h("span", { className: "k-tip__kbd" }, p.shortcut) : null)
  );
}
function Tabs(p) {
  var items = p.items || [];
  var st = useControlled(p.value, p.defaultValue !== void 0 ? p.defaultValue : items[0] && items[0].id), v = st[0];
  return h(
    "div",
    { className: cx("k-tabs", p.className), role: "tablist", "aria-label": p["aria-label"] },
    items.map(function(it) {
      var on = it.id === v;
      return h(
        "button",
        {
          key: it.id,
          type: "button",
          role: "tab",
          "aria-selected": on,
          className: cx("k-tab", on && "k-tab--on"),
          onClick: function() {
            st[1](it.id);
            if (p.onChange) p.onChange(it.id);
          }
        },
        it.icon ? h(Icon, { name: it.icon, size: 15 }) : null,
        it.label,
        it.count != null ? h("span", { className: "k-tab__count" }, it.count) : null
      );
    })
  );
}
function Stat(p) {
  var trend = p.trend || "flat";
  return h(
    "div",
    { className: cx("k-stat", p.className) },
    h("div", { className: "k-stat__label" }, p.icon ? h(Icon, { name: p.icon, size: 15 }) : null, p.label),
    h("div", { className: "k-stat__value" }, p.value),
    p.delta || p.caption ? h(
      "div",
      { className: "k-stat__foot" },
      p.delta ? h(
        "span",
        { className: cx("k-stat__delta", "k-stat__delta--" + trend) },
        trend !== "flat" ? h(Icon, { name: trend === "up" ? "trend-up" : "trend-down", size: 14, weight: 2.25 }) : null,
        p.delta
      ) : null,
      p.caption ? h("span", { className: "k-stat__caption" }, p.caption) : null
    ) : null
  );
}
function Table(p) {
  var cols = p.columns || [], rows = p.rows || [];
  var ctx = useContextMenu();
  return h(
    R.Fragment,
    null,
    h(
      "div",
      { className: cx("k-table-wrap", p.className) },
      h(
        "table",
        { className: "k-table" },
        h("thead", null, h("tr", null, cols.map(function(c) {
          return h("th", { key: c.key, style: { width: c.width, textAlign: c.align || "left" } }, c.label);
        }))),
        h("tbody", null, rows.map(function(r, i) {
          return h(
            "tr",
            {
              key: r.id != null ? r.id : i,
              className: cx(p.onRowClick && "k-table__row--action", ctx.isOpenFor(r) && "k-table__row--menu") || void 0,
              onClick: p.onRowClick ? function() {
                p.onRowClick(r);
              } : void 0,
              onContextMenu: p.rowMenu ? function(e) {
                ctx.open(e, r);
              } : void 0
            },
            cols.map(function(c) {
              return h("td", { key: c.key, style: { textAlign: c.align || "left" }, className: c.strong ? "k-table__strong" : c.mono ? "k-table__mono" : void 0 }, c.render ? c.render(r) : r[c.key]);
            })
          );
        }))
      )
    ),
    p.rowMenu && ctx.data ? ctx.render(p.rowMenu(ctx.data)) : null
  );
}
function EmptyState(p) {
  return h(
    "div",
    { className: cx("k-empty", p.className) },
    h("span", { className: "k-empty__icon" }, h(Icon, { name: p.icon || "inbox", size: 22 })),
    h("h3", { className: "k-empty__title" }, p.title),
    p.description ? h("p", { className: "k-empty__desc" }, p.description) : null,
    p.action ? h("div", { className: "k-empty__action" }, p.action) : null
  );
}
function Skeleton(p) {
  if (p.lines) {
    var arr = [];
    for (var i = 0; i < p.lines; i++) arr.push(h("span", { key: i, className: "k-skel", style: { height: 12, width: i === p.lines - 1 ? "60%" : "100%" } }));
    return h("span", { className: cx("k-skel-lines", p.className), "aria-hidden": true }, arr);
  }
  return h("span", { className: cx("k-skel", p.circle && "k-skel--circle", p.className), "aria-hidden": true, style: { width: p.width || "100%", height: p.height || 16 } });
}
function Spinner(p) {
  var s = p.size || 16;
  return h("span", { className: cx("k-spinner", p.className), role: "status", "aria-label": p.label || strings.loading, style: { width: s, height: s } });
}
function Pagination(p) {
  var count = p.pageCount || 1;
  var st = useControlled(p.page, p.defaultPage || 1), cur = st[0];
  function go(n) {
    if (n < 1 || n > count || n === cur) return;
    st[1](n);
    if (p.onChange) p.onChange(n);
  }
  var pages = [], i;
  for (i = 1; i <= count; i++) {
    if (i === 1 || i === count || Math.abs(i - cur) <= 1) pages.push(i);
    else if (pages[pages.length - 1] !== "\u2026") pages.push("\u2026");
  }
  return h(
    "nav",
    { className: cx("k-pages", p.className), "aria-label": strings.pagination },
    h(Button, { size: "sm", variant: "ghost", icon: "chevron-left", "aria-label": strings.previous, disabled: cur === 1, onClick: function() {
      go(cur - 1);
    } }),
    pages.map(function(n, idx) {
      return n === "\u2026" ? h("span", { key: "e" + idx, className: "k-pages__gap" }, "\u2026") : h("button", { key: n, type: "button", className: cx("k-pages__item", n === cur && "k-pages__item--on"), "aria-current": n === cur ? "page" : void 0, onClick: function() {
        go(n);
      } }, n);
    }),
    h(Button, { size: "sm", variant: "ghost", icon: "chevron-right", "aria-label": strings.next, disabled: cur === count, onClick: function() {
      go(cur + 1);
    } })
  );
}
function Accordion(p) {
  var items = p.items || [];
  var st = useState2(p.defaultOpen || []), open = st[0];
  function toggle(id) {
    var has = open.indexOf(id) >= 0;
    st[1](has ? open.filter(function(x) {
      return x !== id;
    }) : p.multiple ? open.concat([id]) : [id]);
  }
  return h("div", { className: cx("k-accordion", p.className) }, items.map(function(it) {
    var on = open.indexOf(it.id) >= 0;
    return h(
      "div",
      { key: it.id, className: cx("k-acc", on && "k-acc--open") },
      h(
        "button",
        { type: "button", className: "k-acc__head", "aria-expanded": on, onClick: function() {
          toggle(it.id);
        } },
        h("span", null, it.title),
        h(Icon, { name: "chevron-down", size: 16, className: "k-acc__chev" })
      ),
      on ? h("div", { className: "k-acc__body" }, it.content) : null
    );
  }));
}
var TONE_ICON = { info: "info", success: "circle-check", warning: "alert", danger: "alert" };
function Callout(p) {
  var tone = p.tone || "info";
  return h(
    "div",
    { className: cx("k-callout", "k-callout--" + tone, p.className), role: tone === "danger" ? "alert" : "status" },
    h(Icon, { name: p.icon || TONE_ICON[tone], size: 16, className: "k-callout__icon" }),
    h(
      "div",
      { className: "k-callout__text" },
      p.title ? h("p", { className: "k-callout__title" }, p.title) : null,
      p.children ? h("div", { className: "k-callout__body" }, p.children) : null
    ),
    p.action ? h("div", { className: "k-callout__action" }, p.action) : null
  );
}
function Toast(p) {
  var tone = p.tone || "default";
  return h(
    "div",
    { className: cx("k-toast", p.className), role: "status" },
    tone !== "default" ? h(Icon, { name: TONE_ICON[tone] || "info", size: 16, className: "k-toast__icon k-toast__icon--" + tone }) : null,
    h(
      "div",
      { className: "k-toast__text" },
      h("p", { className: "k-toast__title" }, p.title),
      p.description ? h("p", { className: "k-toast__desc" }, p.description) : null
    ),
    p.action ? h("div", { className: "k-toast__action" }, p.action) : null,
    p.onClose !== void 0 ? h("button", { type: "button", className: "k-toast__close", "aria-label": strings.close, onClick: p.onClose || void 0 }, h(Icon, { name: "xmark", size: 14 })) : null
  );
}
function MenuPanel(p) {
  var items = p.items || [];
  var sub = useState2(p.defaultOpenSub != null ? p.defaultOpenSub : null), openSub = sub[0];
  var flip = useState2(false), ref = R.useRef(null);
  var hasCheck = items.some(function(it) {
    return it.checked !== void 0;
  });
  useIsoLayout(function() {
    if (!p.nested || !ref.current) return;
    var r = ref.current.getBoundingClientRect();
    if (r.right > window.innerWidth - 8) flip[1](true);
  }, []);
  return h(
    "div",
    {
      ref,
      className: cx("k-menu", p.nested && "k-menu--nested", flip[0] && "k-menu--flip", p.className),
      role: "menu",
      onKeyDown: p.nested ? function(e) {
        if (e.key === "ArrowLeft" && p.onBack) {
          e.stopPropagation();
          p.onBack();
        }
      } : void 0
    },
    items.map(function(it, i) {
      if (it.separator) return h("div", { key: i, className: "k-menu__sep", role: "separator" });
      if (it.heading) return h("p", { key: i, className: "k-menu__heading" }, it.heading);
      var hasSub = it.items && it.items.length, isOpen = hasSub && openSub === i;
      var btn = h(
        "button",
        {
          key: hasSub ? void 0 : i,
          type: "button",
          role: it.checked !== void 0 ? "menuitemcheckbox" : "menuitem",
          "aria-checked": it.checked !== void 0 ? !!it.checked : void 0,
          "aria-haspopup": hasSub ? "menu" : void 0,
          "aria-expanded": hasSub ? !!isOpen : void 0,
          disabled: it.disabled,
          className: cx("k-menu__item", it.danger && "k-menu__item--danger", isOpen && "k-menu__item--open"),
          onMouseEnter: function() {
            sub[1](hasSub ? i : null);
          },
          onKeyDown: hasSub ? function(e) {
            if (e.key === "ArrowRight" || e.key === "Enter") {
              e.preventDefault();
              sub[1](i);
            }
          } : void 0,
          onClick: function() {
            if (hasSub) {
              sub[1](isOpen ? null : i);
              return;
            }
            if (it.onSelect) it.onSelect();
            if (p.onClose) p.onClose();
          }
        },
        hasCheck ? h("span", { className: "k-menu__check" }, it.checked ? h(Icon, { name: "check", size: 14, weight: 2.5 }) : null) : null,
        it.icon ? h(Icon, { name: it.icon, size: 15 }) : null,
        h("span", { className: "k-menu__label" }, it.label),
        it.shortcut ? h("span", { className: "k-menu__kbd" }, it.shortcut) : null,
        hasSub ? h(Icon, { name: "chevron-right", size: 14, className: "k-menu__chev" }) : null
      );
      if (!hasSub) return btn;
      return h(
        "div",
        { key: i, className: "k-menu__sub" },
        btn,
        isOpen ? h(MenuPanel, { items: it.items, nested: true, onClose: p.onClose, onBack: function() {
          sub[1](null);
        } }) : null
      );
    })
  );
}
function Menu(p) {
  var st = useState2(!!p.defaultOpen), open = st[0], ref = R.useRef(null);
  var presence = usePresence(open, "duration-fast");
  R.useEffect(function() {
    if (!open) return;
    function off(e) {
      if (ref.current && !ref.current.contains(e.target)) st[1](false);
    }
    function esc(e) {
      if (e.key === "Escape") st[1](false);
    }
    document.addEventListener("mousedown", off);
    document.addEventListener("keydown", esc);
    return function() {
      document.removeEventListener("mousedown", off);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);
  if (!p.trigger) return h(MenuPanel, p);
  return h(
    "span",
    { ref, className: cx("k-dropdown", "k-dropdown--" + (p.align || "start")), onClick: function(e) {
      e.stopPropagation();
    } },
    R.cloneElement(p.trigger, { onClick: function() {
      st[1](!open);
    }, "aria-haspopup": "menu", "aria-expanded": open }),
    presence.show ? h(MenuPanel, { items: p.items, defaultOpenSub: p.defaultOpenSub, onClose: function() {
      st[1](false);
    }, className: cx("k-dropdown__panel", presence.leaving && "k-leaving") }) : null
  );
}
function CommandPalette(p) {
  var q = useState2(""), act = useState2(0), query = q[0].toLowerCase();
  var presence = usePresence(p.open !== false, "duration-fast");
  R.useEffect(function() {
    if (p.open) {
      q[1]("");
      act[1](0);
    }
  }, [p.open]);
  if (!presence.show) return null;
  var list = (p.items || []).filter(function(it) {
    return !query || it.label.toLowerCase().indexOf(query) >= 0;
  });
  var groups = [];
  list.forEach(function(it, i) {
    var g = it.group || "";
    var last = groups[groups.length - 1];
    if (!last || last.name !== g) groups.push({ name: g, items: [] });
    groups[groups.length - 1].items.push({ it, idx: i });
  });
  function key(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      act[1](Math.min(act[0] + 1, list.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      act[1](Math.max(act[0] - 1, 0));
    } else if (e.key === "Enter" && list[act[0]]) {
      if (list[act[0]].onSelect) list[act[0]].onSelect();
    } else if (e.key === "Escape" && p.onClose) p.onClose();
  }
  var panel = h(
    "div",
    { className: cx("k-cmdk", p.className), role: "dialog", "aria-label": strings.commands },
    h(
      "div",
      { className: "k-cmdk__search" },
      h(Icon, { name: "search", size: 16 }),
      h("input", {
        className: "k-cmdk__input",
        placeholder: p.placeholder || strings.commandPlaceholder,
        value: q[0],
        autoFocus: p.autoFocus,
        onChange: function(e) {
          q[1](e.target.value);
          act[1](0);
        },
        onKeyDown: key,
        "aria-label": strings.searchCommands
      }),
      h("kbd", { className: "k-kbd" }, "Esc")
    ),
    h(
      "div",
      { className: "k-cmdk__list", role: "listbox" },
      list.length === 0 ? h("p", { className: "k-cmdk__empty" }, strings.noResults + ' "' + q[0] + '"') : null,
      groups.map(function(g, gi) {
        return h(
          "div",
          { key: gi, className: "k-cmdk__group" },
          g.name ? h("p", { className: "k-menu__heading" }, g.name) : null,
          g.items.map(function(x) {
            var on = x.idx === act[0];
            return h(
              "button",
              {
                key: x.idx,
                type: "button",
                role: "option",
                "aria-selected": on,
                className: cx("k-menu__item", on && "k-menu__item--active"),
                onMouseEnter: function() {
                  act[1](x.idx);
                },
                onClick: function() {
                  if (x.it.onSelect) x.it.onSelect();
                }
              },
              x.it.icon ? h(Icon, { name: x.it.icon, size: 15 }) : null,
              h("span", { className: "k-menu__label" }, x.it.label),
              x.it.shortcut ? h("span", { className: "k-menu__kbd" }, x.it.shortcut) : null
            );
          })
        );
      })
    ),
    h(
      "div",
      { className: "k-cmdk__foot" },
      h("span", null, h("kbd", { className: "k-kbd" }, "\u2191"), h("kbd", { className: "k-kbd" }, "\u2193"), " " + strings.navigate),
      h("span", null, h("kbd", { className: "k-kbd" }, "\u21B5"), " " + strings.select)
    )
  );
  return p.overlay ? h("div", { className: cx("k-scrim k-scrim--top", presence.leaving && "k-leaving"), onMouseDown: onScrimDown(p.onClose) }, panel) : panel;
}
function useContextMenu(initial) {
  var st = useState2(initial || null), pos = st[0], ref = R.useRef(null), last = R.useRef(pos);
  var presence = usePresence(!!pos, "duration-fast");
  if (pos) last.current = pos;
  function close() {
    st[1](null);
  }
  R.useEffect(function() {
    if (!pos) return;
    function off(e) {
      if (ref.current && !ref.current.contains(e.target)) close();
    }
    function esc(e) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("mousedown", off);
    document.addEventListener("keydown", esc);
    window.addEventListener("scroll", off, true);
    return function() {
      document.removeEventListener("mousedown", off);
      document.removeEventListener("keydown", esc);
      window.removeEventListener("scroll", off, true);
    };
  }, [pos]);
  useIsoLayout(function() {
    var el = ref.current;
    if (!pos || !el) return;
    var r = el.getBoundingClientRect();
    if (r.right > window.innerWidth - 8) el.style.left = Math.max(8, window.innerWidth - r.width - 8) + "px";
    if (r.bottom > window.innerHeight - 8) el.style.top = Math.max(8, pos.y - r.height) + "px";
  }, [pos]);
  return {
    data: last.current && last.current.data,
    isOpenFor: function(data) {
      return !!pos && pos.data === data;
    },
    // The innermost right-click area wins, so nested areas never open two menus.
    open: function(e, data) {
      e.preventDefault();
      e.stopPropagation();
      st[1]({ x: e.clientX, y: e.clientY, data });
    },
    render: function(items, defaultOpenSub) {
      if (!presence.show) return null;
      return h(
        "div",
        {
          ref,
          className: cx("k-ctx", presence.leaving && "k-leaving"),
          style: { left: last.current.x, top: last.current.y },
          onClick: function(e) {
            e.stopPropagation();
          },
          onContextMenu: function(e) {
            e.preventDefault();
            e.stopPropagation();
          }
        },
        h(MenuPanel, { items, defaultOpenSub, onClose: close })
      );
    }
  };
}
function ContextMenu(p) {
  var ctx = useContextMenu(p.defaultOpenAt);
  return h(
    R.Fragment,
    null,
    h("div", { className: cx("k-ctx-area", p.className), onContextMenu: function(e) {
      ctx.open(e);
    } }, p.children),
    ctx.render(p.items, p.defaultOpenSub)
  );
}
var toastStore = { list: [], subs: [], id: 0 };
function emitToasts() {
  toastStore.subs.forEach(function(f) {
    f(toastStore.list.slice());
  });
}
function dismissToast(id) {
  var found = toastStore.list.some(function(t) {
    return t.id === id && !t.leaving;
  });
  if (!found) return;
  toastStore.list = toastStore.list.map(function(t) {
    return t.id === id ? Object.assign({}, t, { leaving: true }) : t;
  });
  emitToasts();
  setTimeout(function() {
    toastStore.list = toastStore.list.filter(function(t) {
      return t.id !== id;
    });
    emitToasts();
  }, motionMs("duration-fast"));
}
function toast(opts) {
  if (typeof opts === "string") opts = { title: opts };
  var id = ++toastStore.id, t = Object.assign({ id, duration: 4e3 }, opts);
  toastStore.list = toastStore.list.concat([t]).slice(-5);
  emitToasts();
  if (t.duration > 0) setTimeout(function() {
    dismissToast(id);
  }, t.duration);
  return id;
}
toast.dismiss = dismissToast;
["success", "warning", "danger", "info"].forEach(function(tone) {
  toast[tone] = function(o) {
    if (typeof o === "string") o = { title: o };
    return toast(Object.assign({ tone }, o));
  };
});
function Toaster(p) {
  var st = useState2(toastStore.list.slice());
  R.useEffect(function() {
    toastStore.subs.push(st[1]);
    return function() {
      toastStore.subs = toastStore.subs.filter(function(f) {
        return f !== st[1];
      });
    };
  }, []);
  return h(
    "div",
    { className: cx("k-toasts", p.inline && "k-toasts--inline", p.className), "aria-live": "polite" },
    st[0].map(function(t) {
      return h(
        "div",
        { key: t.id, className: cx("k-toasts__item", t.leaving && "k-toasts__item--leaving") },
        h(Toast, { title: t.title, description: t.description, tone: t.tone, action: t.action, onClose: function() {
          dismissToast(t.id);
        } })
      );
    })
  );
}
function Drawer(p) {
  var id = R.useId();
  var presence = usePresence(p.open !== false, "duration-base");
  useEscape(p.overlay && p.open !== false && !!p.onClose, p.onClose);
  if (!presence.show) return null;
  var panel = h(
    "aside",
    { className: cx("k-drawer", "k-drawer--" + (p.side || "right"), p.className), role: "dialog", "aria-modal": p.overlay ? true : void 0, "aria-labelledby": id },
    h(
      "header",
      { className: "k-drawer__head" },
      h("div", null, h("h2", { id, className: "k-drawer__title" }, p.title), p.description ? h("p", { className: "k-drawer__desc" }, p.description) : null),
      p.onClose !== void 0 ? h(Button, { size: "sm", variant: "ghost", icon: "xmark", "aria-label": strings.close, onClick: p.onClose || void 0 }) : null
    ),
    h("div", { className: "k-drawer__body" }, p.children),
    p.footer ? h("footer", { className: "k-drawer__foot" }, p.footer) : null
  );
  return p.overlay ? h("div", { className: cx("k-scrim k-scrim--drawer k-scrim--" + (p.side || "right"), presence.leaving && "k-leaving"), onMouseDown: onScrimDown(p.onClose) }, panel) : panel;
}
function Modal(p) {
  var id = R.useId();
  var presence = usePresence(p.open !== false, "duration-fast");
  useEscape(p.open !== false && !!p.onClose, p.onClose);
  if (!presence.show) return null;
  var panel = h(
    "div",
    { className: cx("k-modal", p.className), role: "dialog", "aria-modal": true, "aria-labelledby": id },
    h(
      "header",
      { className: "k-modal__head" },
      h("div", null, h("h2", { id, className: "k-modal__title" }, p.title), p.description ? h("p", { className: "k-modal__desc" }, p.description) : null),
      p.onClose ? h(Button, { size: "sm", variant: "ghost", icon: "xmark", "aria-label": strings.close, onClick: p.onClose }) : null
    ),
    h("div", { className: "k-modal__body" }, p.children),
    p.footer ? h("footer", { className: "k-modal__foot" }, p.footer) : null
  );
  return h("div", { className: cx("k-scrim", presence.leaving && "k-leaving"), onMouseDown: onScrimDown(p.onClose) }, panel);
}
