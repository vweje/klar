# Toaster

The toast system: put `<Toaster />` in the app once, and call `Klar.toast()` from anywhere.

- `Klar.toast('Saved')` or `Klar.toast({ title, description, tone, action, duration })`. Shortcuts: `toast.success()`, `toast.warning()`, `toast.danger()`, `toast.info()`.
- Toasts stack in the bottom right (`z-toast`, above dialogs), slide in over 180 ms and disappear after 4 seconds (`duration: 0` = stays put). At most 5 at a time.
- `toast()` returns an id; `toast.dismiss(id)` removes it. The close button is always included.
- `inline` places the stack in the flow (for demos).
- Built-in texts follow the global strings set with `setStrings()` (see the README's "Language" section).

```js
const { toast } = window.Klar;
toast.success({ title: 'Task created', description: '"New homepage design" has been added.' });
```

Do: confirm actions briefly ("Link copied"). Avoid: errors that require action - use `Callout` or `Dialog`.
