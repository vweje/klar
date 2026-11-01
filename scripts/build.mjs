// Builds dist/ from src/ and tokens/tokens.json.
// Run: npm install && npm run build
import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const r = (p) => root + p;
mkdirSync(r('dist'), { recursive: true });

const tokens = JSON.parse(readFileSync(r('tokens/tokens.json'), 'utf8'));
const themes = tokens.color.themes.map((t) => t.id);
const first = themes[0];

const val = (tok, theme) => {
  const v = typeof tok.value === 'string' ? tok.value : (tok.value[theme] ?? tok.value[first]);
  return v.replace(/^\{(.+)\}$/, 'var(--$1)');
};
const themed = (theme) =>
  [...tokens.color.tokens, ...(tokens.shadow?.tokens ?? [])]
    .map((t) => `  --${t.name}: ${val(t, theme)};`)
    .join('\n');
const flat = ['spacing', 'radius', 'size', 'zIndex']
  .flatMap((fam) => tokens[fam]?.tokens ?? [])
  .map((t) => `  --${t.name}: ${t.value};`)
  .join('\n');
const fonts = Object.entries(tokens.type.families)
  .map(([k, v]) => `  --font-${k}: ${v};`)
  .join('\n');
const typeClasses = tokens.type.groups
  .flatMap((g) => g.styles.map((s) => ({ ...s, family: s.family ?? g.family })))
  .map((s) => {
    const rules = [
      `font-family: var(--font-${s.family})`,
      `font-size: ${s.fontSize}`,
      `line-height: ${s.lineHeight}`,
      `font-weight: ${s.fontWeight}`,
      s.letterSpacing ? `letter-spacing: ${s.letterSpacing}` : null,
      s.name === 'overline' ? 'text-transform: uppercase' : null,
    ].filter(Boolean);
    return `.k-${s.name} { ${rules.join('; ')}; }`;
  })
  .join('\n');

// tokens.css: light by default, dark via data-theme="dark", .dark (next-themes) or the system setting
const tokensCss = `/* Klar - tokens. Generated from tokens/tokens.json - do not edit by hand. */
:root, [data-theme="light"], .light {
${themed('light')}
}
[data-theme="dark"], .dark {
${themed('dark')}
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]):not(.light) {
${themed('dark').replace(/^/gm, '  ')}
  }
}
:root {
${flat}
${fonts}
}

/* Type styles */
${typeClasses}
`;
writeFileSync(r('dist/tokens.css'), tokensCss);

// klar.css = tokens + components (the Google Fonts import must come first)
const comp = readFileSync(r('src/components.css'), 'utf8');
const importLine = comp.match(/^@import[^\n]*\n/)?.[0] ?? '';
writeFileSync(r('dist/klar.css'), importLine + tokensCss + '\n' + comp.replace(importLine, ''));
writeFileSync(r('dist/components.css'), comp);

// Tailwind v4: Klar-farver som utilities (bg-surface, text-text-secondary, border-border ...)
const colorNames = tokens.color.tokens.map((t) => t.name);
const radius = tokens.radius.tokens.map((t) => `  --radius-${t.name.replace('radius-', '')}: ${t.value};`).join('\n');
writeFileSync(r('dist/tailwind.css'), `/* Klar - Tailwind v4 theme. Import after "tailwindcss" and klar/styles.css (or klar/tokens.css). */
@theme inline {
${colorNames.map((n) => `  --color-${n}: var(--${n});`).join('\n')}
  --shadow-klar-xs: var(--shadow-xs);
  --shadow-klar-md: var(--shadow-md);
  --shadow-klar-lg: var(--shadow-lg);
}
@theme {
  --font-sans: ${tokens.type.families.sans};
  --font-mono: ${tokens.type.families.mono};
${radius}
}
@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *, .dark, .dark *));
`);

// shadcn/ui: maps Klar onto shadcn's variables so existing shadcn components get the Klar look
writeFileSync(r('dist/shadcn.css'), `/* Klar - shadcn/ui theme. Import after klar/tokens.css (or klar/styles.css).
   --primary and --border come straight from Klar's tokens (same name and meaning). */
:root, .light, .dark, [data-theme] {
  --background: var(--canvas);
  --foreground: var(--text);
  --card: var(--surface);
  --card-foreground: var(--text);
  --popover: var(--surface-raised);
  --popover-foreground: var(--text);
  --primary-foreground: var(--on-primary);
  --secondary: var(--fill);
  --secondary-foreground: var(--text);
  --muted: var(--fill);
  --muted-foreground: var(--text-secondary);
  --accent: var(--fill);
  --accent-foreground: var(--text);
  --destructive: var(--danger-solid);
  --destructive-foreground: var(--on-danger);
  --input: var(--border-strong);
  --ring: var(--focus-ring);
  --radius: 8px;
  --chart-1: var(--text);
  --chart-2: var(--text-secondary);
  --chart-3: var(--text-muted);
  --chart-4: var(--border-strong);
  --chart-5: var(--fill-hover);
  --sidebar: var(--surface);
  --sidebar-foreground: var(--text);
  --sidebar-primary: var(--primary);
  --sidebar-primary-foreground: var(--on-primary);
  --sidebar-accent: var(--fill);
  --sidebar-accent-foreground: var(--text);
  --sidebar-border: var(--border);
  --sidebar-ring: var(--focus-ring);
}
body { font-family: var(--font-sans); font-weight: 500; }
`);

// JavaScript: ESM + CommonJS (with "use client" for the Next.js App Router) and a UMD build for <script> tags
const common = { entryPoints: [r('src/klar.js')], bundle: true, external: ['react', 'react-dom'], target: 'es2018', legalComments: 'none' };
await build({ ...common, format: 'esm', outfile: r('dist/klar.mjs'), banner: { js: '"use client";' } });
await build({ ...common, format: 'cjs', outfile: r('dist/klar.cjs'), banner: { js: '"use client";' } });
const src = readFileSync(r('src/klar.js'), 'utf8');
const umd = '/* Klar - UMD build. Requires window.React and window.ReactDOM. Exposes window.Klar. */\n(function () {\n' +
  src.replace("import * as R from 'react';", 'var R = window.React;')
     .replace(/export \{([\s\S]*?)\};\s*$/, (_, names) => `window.Klar = Object.assign(window.Klar || {}, {${names}});\n`) +
  '})();\n';
writeFileSync(r('dist/klar.umd.js'), umd);

copyFileSync(r('src/index.d.ts'), r('dist/index.d.ts'));
copyFileSync(r('tokens/tokens.json'), r('dist/tokens.json'));
console.log('Built Klar to dist/');
