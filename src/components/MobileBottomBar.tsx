import { Phone, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LINKS } from '@/lib/links'
import { useLanguage } from '../i18n/useLanguage'

export default function MobileBottomBar() {
  const { t } = useLanguage()

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 bg-primary border-t border-text-light/10 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] md:hidden"
      style={{ paddingBottom: 'max(16px, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center gap-3 px-4 py-3 max-w-lg mx-auto">
        <Button
          variant="secondary"
          size="lg"
          asChild
          className="flex-1 h-12 text-sm font-semibold rounded-xl gap-2"
        >
          <a href={LINKS.phone}>
            <Phone className="w-5 h-5" />
            {t('mobileBar.call')}
          </a>
        </Button>
        <Button
          variant="accent"
          size="lg"
          asChild
          className="flex-1 h-12 text-sm font-semibold rounded-xl gap-2"
        >
          <a
            href={LINKS.directions}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Navigation className="w-5 h-5" />
            {t('mobileBar.directions')}
          </a>
        </Button>
      </div>
    </div>
  )
}
