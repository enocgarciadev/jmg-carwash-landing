# Patterns

This document describes how to compose primitives with the existing landing page architecture.

## CTA pattern

Primary actions that open an external map or scheduling link should be a `Button` rendered as a child anchor.

```tsx
<Button asChild>
  <a href={url} target="_blank" rel="noreferrer">
    {t("...")}
  </a>
</Button>
```

Why `asChild` instead of `onClick` with `window.open`?

- Native anchor semantics (right-click, copy link, keyboard).
- No JavaScript required for the basic action.
- Accessible by default.

For internal navigation links, keep the existing custom nav link styles unless they become a primary CTA.

## Card pattern

Cards contain a title and description. Keep them text-agnostic: translate all copy through `t()` and pass the result as children.

```tsx
<Card className="...">
  <CardHeader>
    <CardTitle>{t("...")}</CardTitle>
    <CardDescription>{t("...")}</CardDescription>
  </CardHeader>
  <CardContent>{/* optional icon or detail */}</CardContent>
</Card>
```

Preserve existing hover effects by adding utility classes to `Card`:

```tsx
<Card className="transition-all hover:-translate-y-1 hover:shadow-xl">
  ...
</Card>
```

## Divider pattern

Use `Separator` for horizontal rules between footer sections or inside a stacked list. Keep decorative separators `decorative={true}`.

```tsx
<Separator className="my-8" />
```

## i18n pattern

The existing `useLanguage` provider remains the source of all text.

- Pass `t("...")` as a child or prop to any shadcn primitive.
- Do not create translation-aware wrappers around `Button`, `Card`, or `Separator`.
- Do not hard-code strings inside primitive components.

Example:

```tsx
const { t } = useLanguage()

<Button>{t("hero.cta")}</Button>
```

## Custom components to leave untouched

The mobile navigation drawer and the language switcher are custom components with their own animation, scroll-lock, and active-section logic. They are not replaced by shadcn primitives. Changes to them should go through a separate design decision.

## Focus and accessibility

- shadcn primitives already include `focus-visible` rings.
- The existing global `*:focus-visible` rule provides a consistent accent outline as a fallback.
- Do not remove focus indicators for cosmetic reasons.
