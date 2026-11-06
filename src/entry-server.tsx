import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageProvider'
import type { Locale } from './i18n/messages'

export { messages } from './i18n/messages'

export function render(locale: Locale) {
  return renderToString(
    <StrictMode>
      <LanguageProvider locale={locale}>
        <App />
      </LanguageProvider>
    </StrictMode>
  )
}
