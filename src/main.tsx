import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageProvider'
import { localeFromPath } from './i18n/messages'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <LanguageProvider locale={localeFromPath(window.location.pathname)}>
      <App />
    </LanguageProvider>
  </StrictMode>
)

// En producción el HTML llega pre-renderizado (scripts/prerender.mjs); en dev, vacío
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
