import { Navigation, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { LINKS } from '@/lib/links'
import { useLanguage } from '../i18n/useLanguage'

// Misma composición que las portadas de Google y Facebook (Penpot): panel claro + foto con línea de marca cyan
export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="bg-secondary pt-16 md:pt-20 grid md:grid-cols-2 md:min-h-[min(100svh,860px)]"
    >
      <div className="flex items-center md:justify-end px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="w-full max-w-xl md:max-w-[608px] md:pr-8 lg:pr-12 animate-fade-in-up">
          <div className="w-[60px] h-[5px] bg-accent-bright mb-5" aria-hidden="true" />
          <p className="text-accent text-sm md:text-base font-semibold uppercase tracking-wider mb-3">
            {t('hero.label')}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] mb-5">
            {t('hero.title')}
            <br />
            {t('hero.highlight')}
          </h1>
          <p className="text-lg text-text-muted mb-6">{t('hero.subtitle')}</p>

          <Separator className="bg-line mb-6" />

          <p className="text-lg md:text-xl font-semibold text-primary">{t('hero.address')}</p>
          <p className="text-text-muted mt-1">{t('hero.hours')}</p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button
              variant="accent"
              size="lg"
              asChild
              className="px-7 py-4 h-auto text-base font-bold rounded-xl gap-2 group"
            >
              <a href={LINKS.directions} target="_blank" rel="noopener noreferrer">
                <Navigation className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                {t('hero.cta')}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="px-7 py-4 h-auto text-base font-semibold rounded-xl gap-2 border-primary/20 text-primary hover:bg-primary/5"
            >
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {t('hero.whatsapp')}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* LCP: mantener srcSet/sizes sincronizados con el preload de index.html */}
      <div className="relative min-h-[320px] border-t-[6px] md:border-t-0 md:border-l-[6px] border-accent-bright overflow-hidden">
        <img
          src="/images/local-1000.webp"
          srcSet="/images/local-640.webp 640w, /images/local-1000.webp 1000w, /images/local-1200.webp 1200w"
          sizes="(min-width: 768px) 50vw, 100vw"
          alt={t('hero.photoAlt')}
          className="absolute inset-0 w-full h-full object-cover object-[50%_55%]"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="1200"
          height="1600"
        />
      </div>
    </section>
  )
}
