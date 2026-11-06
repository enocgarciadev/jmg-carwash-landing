import { LINKS } from '@/lib/links'
import { useLanguage } from '../i18n/useLanguage'
import type { TranslationKey } from '../i18n/messages'

// Mismas fotos reales que los posts de Instagram/Facebook (Penpot · Contenido · Semanas 1–2)
const photos: { src: string; captionKey: TranslationKey }[] = [
  { src: '/images/trabajo-a-mano.webp', captionKey: 'work.photo1' },
  { src: '/images/trabajo-rines.webp', captionKey: 'work.photo2' },
  { src: '/images/trabajo-interior.webp', captionKey: 'work.photo3' },
]

export default function WorkGallery() {
  const { t } = useLanguage()

  return (
    <section id="work" className="py-16 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('work.title')}
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">{t('work.intro')}</p>
          <div className="w-[60px] h-[5px] bg-accent-bright mx-auto mt-4" />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {photos.map(({ src, captionKey }) => (
            <li key={src}>
              <figure className="rounded-2xl overflow-hidden border border-line bg-secondary">
                <img
                  src={src}
                  alt={t(captionKey)}
                  loading="lazy"
                  decoding="async"
                  width="640"
                  height="853"
                  className="w-full aspect-[3/4] object-cover"
                />
                <figcaption className="px-4 py-3 text-sm font-medium text-primary">
                  {t(captionKey)}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="text-center mt-10">
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold hover:underline"
          >
            {t('work.more')}
          </a>
        </p>
      </div>
    </section>
  )
}
