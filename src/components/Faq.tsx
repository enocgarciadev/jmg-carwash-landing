import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'
import type { TranslationKey } from '../i18n/messages'

const items = [1, 2, 3, 4, 5, 6].map((n) => ({
  q: `faq.q${n}` as TranslationKey,
  a: `faq.a${n}` as TranslationKey,
}))

export default function Faq() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="py-16 md:py-28 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('faq.title')}
          </h2>
          <div className="w-[60px] h-[5px] bg-accent-bright mx-auto" />
        </div>

        <div className="divide-y divide-line border-y border-line">
          {items.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-lg font-semibold text-primary [&::-webkit-details-marker]:hidden">
                {t(q)}
                <ChevronDown
                  className="w-5 h-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-text-muted leading-relaxed">{t(a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
