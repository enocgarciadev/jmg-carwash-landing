import { useCallback, type ReactNode } from 'react'
import { type Locale, LOCALE_PATHS, messages } from './messages'
import { LanguageContext } from './LanguageContext'

// El idioma sale de la URL (/ = español, /en/ = inglés): cada versión se indexa por separado
export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  const setLocale = useCallback(
    (newLocale: Locale) => {
      if (newLocale !== locale) window.location.assign(LOCALE_PATHS[newLocale])
    },
    [locale]
  )

  const t = useCallback(
    (key: keyof typeof messages.es) => messages[locale][key],
    [locale]
  )

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
