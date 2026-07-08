import { useEffect } from 'react'
import { useLanguage } from './i18n/useLanguage'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProposition from './components/ValueProposition'
import ServicesMenu from './components/ServicesMenu'
import LocationHours from './components/LocationHours'
import Footer from './components/Footer'

function App() {
  const { locale, t } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t('meta.title')
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'))
    }
  }, [locale, t])

  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <ValueProposition />
      <ServicesMenu />
      <LocationHours />
      <Footer />
    </div>
  )
}

export default App