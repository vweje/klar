# Avatar

Round avatar with an image or initials, plus `AvatarGroup` for stacks of people.

- Sizes `sm` (24), `md` (32), `lg` (44). Without an image: bold initials on `fill` with a `border` ring.
- `status`: small dot in the bottom right - `online` (`success`), `away` (`warning`), `offline` (`border-strong`).
- `AvatarGroup` overlaps avatars with a `surface` ring and shows "+N" after `max`.

The consumer provides: `name` (used for initials and the accessible name), optionally `src`, `size`, `status`. The group takes `names` and `max`.
