# DonutChart

Parts of a whole: hours by type, revenue by channel.

- Up to five parts in steps of gray from `primary` to `fill-hover`, with 2 px gaps; more than five and the smallest become "Other".
- The total sits in the middle with a label (`centerLabel`). Hovering a part, or its row in the legend, dims the others and shows that part's number in the middle.
- The legend is always there, with the value and the share of each part - the grays alone never carry the meaning.

The consumer provides: `data` (`label`, `value`), `aria-label`, and optionally `format`, `centerLabel`, `size`.

Use a `BarList` instead when the parts do not add up to a whole.
