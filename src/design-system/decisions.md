# Decision Log

This file captures the rationale behind the shadcn/ui + design system setup. The goal is to make the landing page easier to maintain without losing the existing brand identity or i18n architecture.

## shadcn/ui v4 with Tailwind CSS v4 and Vite

- **Decision**: Run `pnpm dlx shadcn@latest init` in the existing React 19 + Vite + Tailwind CSS 4 project.
- **Alternatives considered**: shadcn v3 with a Tailwind v3 downgrade; a fully custom design system.
- **Rationale**: The project already uses the exact stack shadcn v4 targets. A downgrade would add migration work for no benefit. A custom design system would require re-implementing accessibility, focus, and variant logic that shadcn provides for free.

## Radix component library

- **Decision**: Select the `radix` component library during initialization (`style: "radix-nova"`, `baseColor: "neutral"`).
- **Alternatives considered**: The `base` component library.
- **Rationale**: The design calls for `Button asChild` to render anchor CTAs. The Radix-based Button supports `asChild` via `radix-ui` `Slot.Root`. The Base UI alternative uses a different polymorphism model and would require additional changes to match the documented pattern. The shadcn v4 CLI now expresses the old "new-york" style as the Radix library with a preset; the generated `components.json` style is therefore `"radix-nova"` rather than `"new-york"`.

## Only Button, Card, and Separator

- **Decision**: Install only `button`, `card`, and `separator`.
- **Alternatives considered**: Adding `Sheet`, `Badge`, `NavigationMenu`, etc.
- **Rationale**: Button and Card replace the most duplicated custom styles across the landing page. Separator standardizes dividers. The mobile drawer already handles scroll lock, active-section indication, and animation; replacing it with `Sheet` would add churn without benefit.

## Keep the existing legacy `@theme` block

- **Decision**: Leave the original `--color-primary`, `--color-secondary`, etc. block in `src/index.css` and add shadcn variables after it.
- **Alternatives considered**: Rename every custom token to the shadcn naming convention.
- **Rationale**: Existing section components already reference classes like `text-text-light` and `bg-card-bg`. Renaming all of them would inflate the diff and increase the risk of regressions. The custom tokens that overlap with shadcn names (`--color-primary`, `--color-secondary`, `--color-accent`) are intentionally overridden by the later shadcn `@theme inline` mapping, because they now point to the same semantic value.

## `@/` path alias for `src/`

- **Decision**: Add `baseUrl` + `paths` to `tsconfig.json` and `tsconfig.app.json`, and add a Vite `resolve.alias` in `vite.config.ts`.
- **Alternatives considered**: `package.json` imports.
- **Rationale**: shadcn-generated components and docs use `@/components/ui/*` and `@/lib/utils`. The TypeScript `paths` approach is the shadcn default and leaves generated files unmodified. TypeScript 6.0 deprecates `baseUrl`; the project opts in with `ignoreDeprecations: "6.0"` so the alias continues to work until the next TypeScript major version.

## No i18n wrappers around shadcn primitives

- **Decision**: Pass `t("...")` as children and props to shadcn components.
- **Alternatives considered**: Create translation-aware `TButton`, `TCard`, etc.
- **Rationale**: The design system should be text-agnostic. Wrapping every primitive in translation logic creates single-use components and couples the UI library to the current i18n implementation.

## CSS variables for theming

- **Decision**: Use `cssVariables: true` in `components.json`.
- **Rationale**: Brand colors are mapped directly to CSS custom properties, making token overrides possible without rebuilding component files. This also keeps the existing Tailwind color utilities (`bg-primary`, `text-primary-foreground`) working.
