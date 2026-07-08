import { MapPin, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../i18n/useLanguage'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90 z-10" />
      
      {/* Hero LCP image: keep srcSet/sizes in sync with the preload link in index.html */}
      <img
        src="/images/hero-1920.webp"
        srcSet="/images/hero-640.webp 640w, /images/hero-1280.webp 1280w, /images/hero-1920.webp 1920w"
        sizes="100vw"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center animate-pulse-slow z-0"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        width="1920"
        height="1280"
      />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-text-light leading-[1.1] mb-6 animate-fade-in-up">
          {t('hero.title')}
          <br />
          <span className="text-accent">{t('hero.highlight')}</span>
        </h1>
        
        <p className="text-base sm:text-lg text-text-light/90 mb-4 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button
            variant="accent"
            size="lg"
            asChild
            className="px-8 py-4 h-auto text-lg font-bold rounded-xl gap-2 group"
          >
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=6776+SW+117th+Ave%2C+Miami%2C+FL+33183"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              {t('hero.cta')}
            </a>
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-text-light/70 text-sm animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <MapPin className="w-4 h-4" />
          <span>{t('hero.hours')}</span>
        </div>
      </div>
    </section>
  )
}