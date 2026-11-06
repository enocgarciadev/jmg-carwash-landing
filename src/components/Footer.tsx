import { Separator } from '@/components/ui/separator'
import SocialLinks from './SocialLinks'
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
            <img
              src="/logo-jmg-reverso.svg"
              alt="JMG Carwash Corp"
              width="160"
              height="41"
              loading="lazy"
              className="w-[160px] h-auto mx-auto md:mx-0"
            />
            <p className="text-text-light/70 text-sm mt-2">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3">
            <SocialLinks />
            <p className="text-text-light/70 text-sm">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}