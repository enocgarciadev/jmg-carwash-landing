import { createContext } from 'react'
import type { Locale } from './messages'
import type { TranslationKey } from './messages'

export interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
