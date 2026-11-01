# Accordion

Collapsible sections - for FAQs, grouped settings, and long forms.

- 52px rows separated by `border` lines, 15px bold title, chevron in `text-secondary` that rotates 180° when open. Content in `text-secondary`.
- By default only one is open at a time; `multiple` allows several.

The consumer provides: `items` (`id`, `title`, `content`), optionally `defaultOpen` (a list of ids) and `multiple`.
