import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '../i18n/useLanguage'

export default function LocationHours() {
  const { t } = useLanguage()

  const addressLines = t('location.address').split('\n')

  return (
    <section id="location" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('location.title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Card className="rounded-2xl overflow-hidden shadow-lg shadow-primary/5 border border-primary/5 ring-0 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 ease-out p-0 gap-0">
            <div className="aspect-[4/3] w-full bg-secondary relative group min-h-[280px] md:min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.2!2d-80.3829374!3d25.7047911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQyJzE3LjIiTiA4MMKwMjInNTguNiJX!5e0!3m2!1ses!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('location.iframeTitle')}
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <Button
                variant="default"
                size="lg"
                asChild
                className="w-full px-6 py-3 h-auto text-base font-semibold rounded-xl gap-2 group hover:bg-text-primary hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=6776+SW+117th+Ave%2C+Miami%2C+FL+33183"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                  {t('location.mapButton')}
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-primary rounded-2xl shadow-lg shadow-primary/10 ring-0 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 ease-out p-0 gap-0">
            <CardContent className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="group cursor-default">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-text-light/70 text-sm font-semibold uppercase tracking-wider">
                      {t('location.hoursLabel')}
                    </span>
                  </div>
                  <p className="text-text-light text-2xl md:text-3xl font-bold transition-all duration-300 group-hover:text-accent">
                    {t('location.hours')}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 group cursor-default hover:bg-text-light/5 p-3 -m-3 rounded-xl transition-all duration-300">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-accent/30 group-hover:scale-110">
                      <MapPin className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <p className="text-text-light/70 text-sm font-medium mb-1">{t('location.addressLabel')}</p>
                      <p className="text-text-light font-semibold transition-colors duration-300 group-hover:text-accent">
                        {addressLines.map((line, index) => (
                          <span key={index}>
                            {line}
                            {index < addressLines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group cursor-default hover:bg-text-light/5 p-3 -m-3 rounded-xl transition-all duration-300">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-accent/30 group-hover:scale-110">
                      <Phone className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    </div>
                    <div>
                      <p className="text-text-light/70 text-sm font-medium mb-1">{t('location.phoneLabel')}</p>
                      <p className="text-text-light font-semibold transition-colors duration-300 group-hover:text-accent">{t('location.phone')}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-text-light/10">
                  <p className="text-text-light/60 text-sm text-center">
                    {t('location.footer')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
