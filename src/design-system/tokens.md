# Design Tokens

This project uses a small, brand-first token set. shadcn/ui variables are mapped to the same values so both legacy and shadcn classes render consistently.

## Brand tokens (legacy)

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#0F172A` | Hero backgrounds, primary surfaces |
| `--color-secondary` | `#F8FAFC` | Light backgrounds |
| `--color-accent` | `#2563EB` | CTAs, focus rings, links |
| `--color-text-primary` | `#1E293B` | Body text on light surfaces |
| `--color-text-light` | `#FFFFFF` | Text on dark surfaces |
| `--color-card-bg` | `#FFFFFF` | Card surfaces |

These tokens live in `src/index.css` inside the top `@theme` block. They are kept intact so existing section components continue to work during the migration.

## shadcn/ui variables

| Variable | Value | Maps from |
|---|---|---|
| `--primary` | `#0F172A` | `--color-primary` |
| `--primary-foreground` | `#FFFFFF` | `--color-text-light` |
| `--secondary` | `#F8FAFC` | `--color-secondary` |
| `--secondary-foreground` | `#1E293B` | `--color-text-primary` |
| `--accent` | `#2563EB` | `--color-accent` |
| `--accent-foreground` | `#FFFFFF` | `--color-text-light` |
| `--ring` | `#2563EB` | `--color-accent` |
| `--background` | `#F8FAFC` | `--color-secondary` |
| `--foreground` | `#1E293B` | `--color-text-primary` |
| `--card` | `#FFFFFF` | `--color-card-bg` |
| `--card-foreground` | `#1E293B` | `--color-text-primary` |
| `--popover` | `#FFFFFF` | `--color-card-bg` |
| `--popover-foreground` | `#1E293B` | `--color-text-primary` |
| `--muted` | `#F8FAFC` | `--color-secondary` |
| `--muted-foreground` | `#64748B` | Secondary text |
| `--border` | `#E2E8F0` | Subtle borders |
| `--input` | `#E2E8F0` | Form borders |
| `--destructive` | `#EF4444` | Error states |
| `--radius` | `0.625rem` | Global radius base |

## Typography

- `font-sans` is `Geist Variable` from shadcn/ui v4. The existing `body` rule keeps `system-ui` as a fallback for section components that do not explicitly request a font class.
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
