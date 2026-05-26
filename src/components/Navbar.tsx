import { useState, useEffect } from 'react'
import { MapPin, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

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

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-text-light/90 hover:text-text-light text-sm font-medium transition-all duration-300 cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-text-light/90 hover:text-text-light text-sm font-medium transition-all duration-300 cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              Acerca de
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-text-light/90 hover:text-text-light text-sm font-medium transition-all duration-300 cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-text-light/90 hover:text-text-light text-sm font-medium transition-all duration-300 cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              Contacto
            </button>
          </div>

          <div className="hidden md:block">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-text-light px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-accent/30 active:scale-95"
            >
              <MapPin className="w-4 h-4" />
              CÓMO LLEGAR
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-light p-2 cursor-pointer hover:bg-text-light/10 rounded-lg transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-text-light/10 transition-all duration-300">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-text-light/90 hover:text-text-light hover:bg-text-light/5 py-3 px-3 text-sm font-medium transition-all duration-300 rounded-lg cursor-pointer"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-text-light/90 hover:text-text-light hover:bg-text-light/5 py-3 px-3 text-sm font-medium transition-all duration-300 rounded-lg cursor-pointer"
              >
                Acerca de
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-text-light/90 hover:text-text-light hover:bg-text-light/5 py-3 px-3 text-sm font-medium transition-all duration-300 rounded-lg cursor-pointer"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="block w-full text-left text-text-light/90 hover:text-text-light hover:bg-text-light/5 py-3 px-3 text-sm font-medium transition-all duration-300 rounded-lg cursor-pointer"
              >
                Contacto
              </button>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-text-light px-4 py-3 rounded-lg text-sm font-semibold mt-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
              >
                <MapPin className="w-4 h-4" />
                CÓMO LLEGAR
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}