# Design Tokens

This project uses a small, brand-first token set taken from the JMG brand manual v1.0 (Penpot file "JMG · Portada Google", page "Manual de identidad"). shadcn/ui variables are mapped to the same values so both legacy and shadcn classes render consistently.

## Brand tokens (legacy)

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#0B315F` | Azul JMG: headings, dark surfaces |
| `--color-secondary` | `#F8FAFC` | Blanco Espuma: main background |
| `--color-accent` | `#0077A8` | Cyan Texto: CTAs, links and small text on light surfaces |
| `--color-accent-bright` | `#00A6DE` | Cyan Agua: accent bars, lines, and accents on Azul JMG |
| `--color-text-primary` | `#0B315F` | Body text on light surfaces |
| `--color-text-muted` | `#526477` | Gris Asfalto: secondary text |
| `--color-line` | `#D7E1EB` | Línea: separators and card borders |
| `--color-text-light` | `#FFFFFF` | Text on dark surfaces |
| `--color-card-bg` | `#FFFFFF` | Card surfaces |

These tokens live in `src/index.css` inside the top `@theme` block. They are kept intact so existing section components continue to work during the migration.

## shadcn/ui variables

| Variable | Value | Maps from |
|---|---|---|
| `--primary` | `#0B315F` | `--color-primary` |
| `--primary-foreground` | `#FFFFFF` | `--color-text-light` |
| `--secondary` | `#F8FAFC` | `--color-secondary` |
| `--secondary-foreground` | `#0B315F` | `--color-text-primary` |
| `--accent` | `#0077A8` | `--color-accent` (Cyan Texto) |
| `--accent-foreground` | `#FFFFFF` | `--color-text-light` |
| `--ring` | `#0077A8` | `--color-accent` (focus rings) |
| `--background` | `#F8FAFC` | `--color-secondary` |
| `--foreground` | `#0B315F` | `--color-text-primary` |
| `--card` | `#FFFFFF` | `--color-card-bg` |
| `--card-foreground` | `#0B315F` | `--color-text-primary` |
| `--popover` | `#FFFFFF` | `--color-card-bg` |
| `--popover-foreground` | `#0B315F` | `--color-text-primary` |
| `--muted` | `#F8FAFC` | `--color-secondary` |
| `--muted-foreground` | `#526477` | Gris Asfalto |
| `--border` | `#D7E1EB` | Línea |
| `--input` | `#D7E1EB` | Form borders |
| `--destructive` | `#EF4444` | Error states |
| `--radius` | `0.625rem` | Global radius base |

## Contrast

- Cyan Texto `#0077A8` on white: 5.0:1 (AA). White text on Cyan Texto buttons: 5.0:1.
- Cyan Agua `#00A6DE` on white is only 2.8:1: never use it for text on light surfaces (the manual says the same).
- On Azul JMG `#0B315F` use `accent-bright` (4.6:1), not `accent`. Focus outlines switch to Cyan Agua on dark surfaces.
- Brand proportion per piece: 60 % white · 30 % blue · 10 % cyan.

## Typography

- `font-sans` and `body` use `Inter Tight Variable` (`@fontsource-variable/inter-tight`), with Arial as the fallback the manual specifies.
- Logo files: `public/logo-jmg.svg` (color, light backgrounds) and `public/logo-jmg-reverso.svg` (on Azul JMG). Minimum width 160 px.
- `font-heading` uses the same family as `font-sans`.
- Scale comes from Tailwind utilities (`text-xs`, `text-sm`, `text-base`, `text-lg`, etc.).

## Spacing

- Tailwind spacing scale (`space-1` = `0.25rem`, `space-4` = `1rem`, etc.).
- Card internal spacing is controlled by `--card-spacing`:
  - `default`: `--spacing(4)`
  - `sm`: `--spacing(3)`

## Radius

`--radius` is `0.625rem`. Derived radii:

| Token | Value |
|---|---|
| `--radius-sm` | `calc(var(--radius) * 0.6)` |
| `--radius-md` | `calc(var(--radius) * 0.8)` |
| `--radius-lg` | `var(--radius)` |
| `--radius-xl` | `calc(var(--radius) * 1.4)` |

## Shadow & focus

- Cards carry a subtle ring: `ring-1 ring-foreground/10`.
- Focus state: `focus-visible:ring-3 focus-visible:ring-ring/50`.
- The existing global `*:focus-visible` rule keeps `2px solid var(--color-accent)` as a fallback.

## Dark mode

Dark variables are defined by shadcn but the landing page does not currently use `.dark`. If a dark theme is added later, update the `.dark` block in `src/index.css` to match the brand palette.
