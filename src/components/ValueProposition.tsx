import { Hand, Sparkles, Users, MapPin } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { useLanguage } from '../i18n/useLanguage'

export default function ValueProposition() {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: Hand,
      title: t('about.benefit1.title'),
      description: t('about.benefit1.description'),
    },
    {
      icon: Sparkles,
      title: t('about.benefit2.title'),
      description: t('about.benefit2.description'),
    },
    {
      icon: Users,
      title: t('about.benefit3.title'),
      description: t('about.benefit3.description'),
    },
    {
      icon: MapPin,
      title: t('about.benefit4.title'),
      description: t('about.benefit4.description'),
    },
  ]

  return (
    <section id="about" className="py-16 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('about.title')}
          </h2>
          <div className="w-[60px] h-[5px] bg-accent-bright mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg shadow-primary/5 border border-primary/5 ring-0 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 ease-out group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-accent/20">
                <benefit.icon className="w-7 h-7 text-accent transition-transform duration-500 ease-out group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 transition-colors duration-300 group-hover:text-accent">
                {benefit.title}
              </h3>
              <p className="text-text-primary/80 leading-relaxed transition-colors duration-300 group-hover:text-text-primary">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}