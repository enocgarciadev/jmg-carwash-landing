import { useState, useEffect, useMemo } from 'react'
import { MapPin, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../i18n/useLanguage'

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const navItems = useMemo(
    () => [
      { id: 'hero', label: t('nav.home') },
      { id: 'about', label: t('nav.about') },
      { id: 'services', label: t('nav.services') },
      { id: 'location', label: t('nav.contact') },
    ],
    [t]
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [navItems])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const desktopLinkBase =
    'relative text-sm font-medium transition-all duration-300 cursor-pointer py-2 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:text-text-light hover:after:w-full active:scale-[0.97]'
  const desktopLinkActive = 'text-accent after:w-full'
  const desktopLinkInactive = 'text-text-light/90 after:w-0'

  const mobileLinkBase =
    'block w-full text-left text-2xl font-semibold py-4 px-3 min-h-[44px] transition-all duration-300 rounded-lg active:scale-[0.97]'
  const mobileLinkActive = 'text-accent bg-text-light/5 relative'
  const mobileLinkInactive = 'text-text-light/90 hover:text-text-light hover:bg-text-light/5'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity duration-300">
            <span className="text-text-light font-bold text-lg md:text-xl tracking-wide">
              JMG CARWASH CORP
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                aria-current={activeSection === id ? 'page' : undefined}
                className={`${desktopLinkBase} ${
                  activeSection === id ? desktopLinkActive : desktopLinkInactive
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div
              className="flex items-center gap-1 border border-text-light/20 rounded-lg p-1"
              role="group"
              aria-label={t('lang.switcherLabel')}
            >
              <Button
                onClick={() => setLocale('es')}
                aria-pressed={locale === 'es'}
                variant={locale === 'es' ? 'accent' : 'ghost'}
                size="sm"
                className={`px-2 py-1 h-auto min-w-[36px] text-sm font-semibold rounded ${
                  locale === 'es' ? 'shadow-md' : 'text-text-light/70 hover:text-text-light hover:bg-text-light/10'
                }`}
              >
                {t('lang.es')}
              </Button>
              <Button
                onClick={() => setLocale('en')}
                aria-pressed={locale === 'en'}
                variant={locale === 'en' ? 'accent' : 'ghost'}
                size="sm"
                className={`px-2 py-1 h-auto min-w-[36px] text-sm font-semibold rounded ${
                  locale === 'en' ? 'shadow-md' : 'text-text-light/70 hover:text-text-light hover:bg-text-light/10'
                }`}
              >
                {t('lang.en')}
              </Button>
            </div>

            <Button
              variant="accent"
              size="sm"
              asChild
              className="px-5 py-2.5 h-auto text-sm font-semibold rounded-lg gap-2"
            >
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=6776+SW+117th+Ave%2C+Miami%2C+FL+33183"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4" />
                {t('nav.directions')}
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={
                isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')
              }
              aria-expanded={isMobileMenuOpen}
              className="relative z-[60] text-text-light p-2 cursor-pointer hover:bg-text-light/10 rounded-lg transition-all duration-300 h-11 w-11 flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-primary/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-primary/98 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col h-full px-6 pt-20 pb-8 overflow-y-auto overscroll-contain">
          <div className="space-y-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                aria-current={activeSection === id ? 'page' : undefined}
                className={`${mobileLinkBase} ${
                  activeSection === id ? mobileLinkActive : mobileLinkInactive
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full bg-accent mr-3 transition-opacity ${
                    activeSection === id ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden="true"
                />
                {label}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-text-light/10 space-y-4">
            <div
              className="flex items-center justify-center gap-2 border border-text-light/20 rounded-xl p-2"
              role="group"
              aria-label={t('lang.switcherLabel')}
            >
              <Button
                onClick={() => setLocale('es')}
                aria-pressed={locale === 'es'}
                variant={locale === 'es' ? 'accent' : 'ghost'}
                size="lg"
                className={`px-4 py-3 h-auto min-w-[56px] text-lg font-semibold rounded-xl ${
                  locale === 'es' ? 'shadow-md' : 'text-text-light/70 hover:text-text-light hover:bg-text-light/10'
                }`}
              >
                {t('lang.es')}
              </Button>
              <Button
                onClick={() => setLocale('en')}
                aria-pressed={locale === 'en'}
                variant={locale === 'en' ? 'accent' : 'ghost'}
                size="lg"
                className={`px-4 py-3 h-auto min-w-[56px] text-lg font-semibold rounded-xl ${
                  locale === 'en' ? 'shadow-md' : 'text-text-light/70 hover:text-text-light hover:bg-text-light/10'
                }`}
              >
                {t('lang.en')}
              </Button>
            </div>

            <Button
              variant="accent"
              size="lg"
              asChild
              className="w-full px-6 py-4 h-auto text-lg font-semibold rounded-xl gap-2"
            >
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=6776+SW+117th+Ave%2C+Miami%2C+FL+33183"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5" />
                {t('nav.directions')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
