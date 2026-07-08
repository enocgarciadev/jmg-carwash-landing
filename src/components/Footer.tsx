import { Separator } from '@/components/ui/separator'
import { useLanguage } from '../i18n/useLanguage'

export default function Footer() {
  const { t } = useLanguage()

  const copyright = t('footer.copyright').replace(
    '{year}',
    String(new Date().getFullYear())
  )

  return (
    <footer className="bg-primary">
      <Separator className="bg-text-light/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="text-text-light font-bold text-lg tracking-wide">
              JMG CARWASH CORP
            </span>
            <p className="text-text-light/50 text-sm mt-1">
              {t('footer.tagline')}
            </p>
          </div>
          
          <p className="text-text-light/70 text-sm">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}