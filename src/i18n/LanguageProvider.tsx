import { useState, useCallback, type ReactNode } from 'react'
import {
  type Locale,
  DEFAULT_LOCALE,
  STORAGE_KEY,
  messages,
} from './messages'
import { LanguageContext } from './LanguageContext'

function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    // Storage may be unavailable or restricted; fall back to detection.
  }

  const browser = navigator.language?.toLowerCase() ?? ''
  if (browser.startsWith('en')) return 'en'
  return DEFAULT_LOCALE
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    try {
      localStorage.setItem(STORAGE_KEY, newLocale)
    } catch {
      // Storage may be unavailable or restricted.
    }
  }, [])

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
