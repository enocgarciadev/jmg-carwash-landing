# Primitives

shadcn/ui v4 is installed with the Radix component library. Only three primitives are used in this project; everything else is built by composing these with Tailwind utilities.

## Installed primitives

| Primitive | File | Library | Use case |
|---|---|---|---|
| `Button` | `src/components/ui/button.tsx` | `radix-ui` + `class-variance-authority` | CTAs, footer links, map links |
| `Card` | `src/components/ui/card.tsx` | React + `cn` | Value proposition and service cards |
| `Separator` | `src/components/ui/separator.tsx` | `radix-ui` | Footer dividers |

## Button

- `variant`: `default`, `secondary`, `outline`, `ghost`, `destructive`, `link`
- `size`: `default`, `xs`, `sm`, `lg`, `icon`, `icon-xs`, `icon-sm`, `icon-lg`
- `asChild`: render the button styles around a child element (e.g. an `<a>` tag)

Example CTA:

```tsx
import { Button } from "@/components/ui/button"

<Button asChild>
  <a href={directionsUrl} target="_blank" rel="noreferrer">
    {t("navbar.directions")}
  </a>
</Button>
```

Do not pass a string directly to `Button` if it is meant to be a link. Use `asChild` so the final element is an `<a>` with the correct semantics and keyboard behavior.

## Card

Card is composed of subcomponents:

- `Card`
- `CardHeader`
- `CardTitle`
- `CardDescription`
- `CardAction`
- `CardContent`
- `CardFooter`

Use `Card` as the outer container. Lift/shadow effects from the existing landing page should be added through Tailwind classes on the `Card` itself, not by creating a new wrapper component.

Example:

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

<Card className="hover:-translate-y-1 hover:shadow-lg transition-transform">
  <CardHeader>
    <CardTitle>{t("valueProposition.benefits.0.title")}</CardTitle>
  </CardHeader>
  <CardContent>{t("valueProposition.benefits.0.description")}</CardContent>
</Card>
```

## Separator

- `orientation`: `horizontal` (default) or `vertical`
- `decorative`: `true` (default) for visual dividers only

Example:

```tsx
import { Separator } from "@/components/ui/separator"

<Separator className="my-6" />
```

## Adding new primitives

1. Prefer `pnpm dlx shadcn@latest add <primitive>` so the file stays consistent with the registry.
2. If a primitive is not in the registry, write it directly in `src/components/ui/` using the same patterns as the generated files.
3. Avoid creating wrapper components just to change one prop. Use className and `cn` instead.
