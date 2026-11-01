# SettingsSection

One settings topic: what it is on the left, the controls on the right.

- Two columns: title (15px, 800) and a one-line description in `text-secondary` on the left (1/3), the controls on the right (2/3). One column on phones.
- `space-6` above and below, a 1 px `border` between sections and none above the first.
- Controls keep their natural width; text fields, lists, tables and radio groups stretch to the full column.
- The section title names the field, so a single text field inside needs only an `aria-label`, not a visible label.

The consumer provides: `title`, `description`, and the controls as children.

Do: one topic per section ("Email address", "Theme"). Don't: a section that mixes things that are saved with things that apply right away.
