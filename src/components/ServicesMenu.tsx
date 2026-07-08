import { Car, Truck, Sparkles, ChevronRight } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'
import type { TranslationKey } from '../i18n/messages'

export default function ServicesMenu() {
  const { t } = useLanguage()

  const services: {
    icon: typeof Car
    nameKey: TranslationKey
    priceKey: TranslationKey
    featureKeys: TranslationKey[]
  }[] = [
    {
      icon: Car,
      nameKey: 'services.compact.name',
      priceKey: 'services.compact.price',
      featureKeys: [
        'services.compact.feature0',
        'services.compact.feature1',
        'services.compact.feature2',
        'services.compact.feature3',
      ],
    },
    {
      icon: Car,
      nameKey: 'services.suv.name',
      priceKey: 'services.suv.price',
      featureKeys: [
        'services.suv.feature0',
        'services.suv.feature1',
        'services.suv.feature2',
        'services.suv.feature3',
      ],
    },
    {
      icon: Car,
      nameKey: 'services.fullsize.name',
      priceKey: 'services.fullsize.price',
      featureKeys: [
        'services.fullsize.feature0',
        'services.fullsize.feature1',
        'services.fullsize.feature2',
        'services.fullsize.feature3',
      ],
    },
    {
      icon: Truck,
      nameKey: 'services.truckLarge.name',
      priceKey: 'services.truckLarge.price',
      featureKeys: [
        'services.truckLarge.feature0',
        'services.truckLarge.feature1',
        'services.truckLarge.feature2',
        'services.truckLarge.feature3',
      ],
    },
    {
      icon: Truck,
      nameKey: 'services.truckHeavy.name',
      priceKey: 'services.truckHeavy.price',
      featureKeys: [
        'services.truckHeavy.feature0',
        'services.truckHeavy.feature1',
        'services.truckHeavy.feature2',
        'services.truckHeavy.feature3',
      ],
    },
    {
      icon: Sparkles,
      nameKey: 'services.detailing.name',
      priceKey: 'services.detailing.price',
      featureKeys: [
        'services.detailing.feature0',
        'services.detailing.feature1',
        'services.detailing.feature2',
        'services.detailing.feature3',
      ],
    },
  ]

  return (
    <section id="services" className="py-16 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('services.title')}
          </h2>
          <p className="text-text-primary/70 text-lg max-w-2xl mx-auto">
            {t('services.intro')}
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card-bg rounded-2xl p-6 md:p-8 shadow-lg shadow-primary/5 border border-primary/5 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 ease-out hover:-translate-y-3 cursor-pointer group flex flex-col active:scale-[0.98]"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-accent/20">
                <service.icon className="w-6 h-6 text-accent transition-transform duration-500 ease-out group-hover:scale-110" />
              </div>

              <h3 className="text-xl font-bold text-primary mb-2 transition-colors duration-300 group-hover:text-accent">
                {t(service.nameKey)}
              </h3>

              <p className="text-2xl font-bold text-accent mb-5 transition-transform duration-300 group-hover:scale-105 origin-left">
                {t(service.priceKey)}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {service.featureKeys.map((featureKey, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-2 text-text-primary/80 text-sm transition-all duration-300 group-hover:text-text-primary"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0 transition-all duration-300 group-hover:scale-125" />
                    {t(featureKey)}
                  </li>
                ))}
              </ul>

              <a
                href="#location"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-1 text-accent font-semibold text-sm hover:gap-3 transition-all duration-300 ease-out group/link cursor-pointer"
              >
                {t('services.cta')}
                <ChevronRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover/link:translate-x-2" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-2xl px-6 py-4 hover:bg-accent/15 transition-all duration-300 cursor-default"
          >
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <p className="text-primary font-semibold text-sm md:text-base"
            >
              {t('services.footer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}