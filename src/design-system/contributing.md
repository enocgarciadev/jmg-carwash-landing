# Contributing to the Design System

## Before you change anything

1. Read `tokens.md`, `primitives.md`, and `patterns.md`.
2. Make sure the change maps to an existing token or adds a new token with a documented rationale.
3. Keep the mobile drawer and language switcher custom; changes to them need a separate decision.

## Adding a primitive

1. Check if the component is available in the registry: `pnpm dlx shadcn@latest add <primitive>`.
2. If you add it manually, place it in `src/components/ui/` and follow the existing conventions:
   - Use `cn` for class merging.
   - Use React.ComponentProps or the primitive's own props type.
   - Export only the component (and its subcomponents) unless a shared variant helper is genuinely reused.
3. Run `pnpm build` and `pnpm lint` before committing.

## Tokens

- Brand colors live in `src/index.css` inside the legacy `@theme` block and the shadcn `:root` block.
- When you update a brand value, update both the legacy token and the shadcn variable so they stay in sync.
- Document the new or changed token in `tokens.md`.

## Wrappers and abstraction

- Do not create wrapper components that only forward a translation or a single prop.
- Do not create a separate component for every section. Compose primitives with Tailwind classes instead.
- If you find yourself repeating the same five classes in three places, consider a small layout component, not a wrapper around shadcn.

## i18n

- All user-facing text must come from `useLanguage().t()`.
- Pass translated strings as children/props; do not hard-code text in `src/components/ui/`.
- Do not add i18n logic to `src/components/ui/` files.

## Verification

Every commit that touches the design system must pass:

```bash
pnpm build
pnpm lint
```

If `pnpm build` fails, fix the underlying TypeScript or Vite error before opening a PR. If `pnpm lint` fails because of a generated shadcn file, add a project-level lint exception and document it in `decisions.md`.

## PR scope

- Keep design-system changes in the same PR as the feature they support.
- If the diff grows beyond ~400 lines, split it into chained PRs per the `chained-pr` skill.
- PR #1 (this branch) only sets up shadcn and the design-system docs; landing section migration happens in PR #2.
