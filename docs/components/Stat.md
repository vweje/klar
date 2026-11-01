# Stat

KPI card for dashboards: label, big number and change.

- Card like `Card` (`surface`, `border`, `radius-lg`). Label 13 px bold in `text-secondary` with an optional icon; the value 30 px at weight 800 with tabular numbers.
- `delta` + `trend`: `up` in `success` with an up arrow, `down` in `danger` with a down arrow, `flat` in `text-secondary`. `caption` explains the comparison.
- `trend` describes whether the change is good or bad - not its direction. More overdue tasks is `down`.

The consumer provides: `label`, `value` (formatted), and optionally `delta`, `trend`, `caption`, `icon`. Put 3-4 in a grid.
