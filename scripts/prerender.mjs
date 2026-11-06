// Genera el HTML con el contenido ya pintado: dist/index.html (es) y dist/en/index.html (en).
// Corre después de `vite build` y `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const SITE = 'https://www.jmgcarwashcorp.com'
const PAGES = {
  es: { path: '/', file: 'dist/index.html', lang: 'es', og: 'es_US', ogAlt: 'en_US' },
  en: { path: '/en/', file: 'dist/en/index.html', lang: 'en', og: 'en_US', ogAlt: 'es_US' },
}

const { render, messages } = await import(pathToFileURL(`${root}dist-ssr/entry-server.js`).href)
const template = readFileSync(`${root}dist/index.html`, 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Reemplazo con función: el HTML renderizado trae precios con "$" que String.replace interpretaría
function replaceOnce(html, pattern, value, label) {
  const found = typeof pattern === 'string' ? html.includes(pattern) : pattern.test(html)
  if (!found) throw new Error(`prerender: no se encontró ${label} en index.html`)
  return html.replace(pattern, (_, prefix) => (typeof prefix === 'string' ? prefix : '') + value)
}

for (const [locale, page] of Object.entries(PAGES)) {
  const m = messages[locale]
  const url = SITE + page.path
  let html = template
  html = replaceOnce(html, /<html lang="[^"]*">/, `<html lang="${page.lang}">`, 'html lang')
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${esc(m['meta.title'])}</title>`, 'title')
  html = replaceOnce(html, /(<meta name="description" content=")[^"]*/, esc(m['meta.description']), 'description')
  html = replaceOnce(html, /(<meta property="og:title" content=")[^"]*/, esc(m['meta.title']), 'og:title')
  html = replaceOnce(html, /(<meta property="og:description" content=")[^"]*/, esc(m['meta.description']), 'og:description')
  html = replaceOnce(html, /(<meta property="og:url" content=")[^"]*/, url, 'og:url')
  html = replaceOnce(html, /(<meta property="og:locale" content=")[^"]*/, page.og, 'og:locale')
  html = replaceOnce(html, /(<meta property="og:locale:alternate" content=")[^"]*/, page.ogAlt, 'og:locale:alternate')
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*/, url, 'canonical')
  html = replaceOnce(html, '<div id="root"></div>', `<div id="root">${render(locale)}</div>`, 'root')
  mkdirSync(new URL('.', pathToFileURL(root + page.file)), { recursive: true })
  writeFileSync(root + page.file, html)
  console.log(`prerender: ${page.file} (${locale})`)
}

rmSync(`${root}dist-ssr`, { recursive: true, force: true })
