import { Car, Sparkles, ShieldCheck, Paintbrush, Gem, ChevronRight } from 'lucide-react'

const services = [
  {
    icon: Car,
    name: 'Lavado Express / Básico',
    price: 'Desde $25',
    features: [
      'Lavado exterior completo',
      'Limpieza interior rápida',
      'Aspirado básico',
      'Limpieza de vidrios',
    ],
  },
  {
    icon: Sparkles,
    name: 'Lavado Premium / Detallado Integral',
    price: 'Desde $55',
    features: [
      'Limpieza profunda exterior',
      'Aspirado exhaustivo interior',
      'Protección de plásticos',
      'Acondicionamiento de cuero',
    ],
  },
  {
    icon: ShieldCheck,
    name: 'Desinfección y Limpieza de Tapicería',
    price: 'Desde $80',
    features: [
      'Tratamiento profundo asientos',
      'Limpieza alfombras',
      'Eliminación de olores',
      'Desinfección completa',
    ],
  },
  {
    icon: Paintbrush,
    name: 'Pulido y Encerado de Alta Gama',
    price: 'Desde $120',
    features: [
      'Corrección menor de pintura',
      'Sellado de brillo duradero',
      'Eliminación de swirl marks',
      'Protección UV',
    ],
  },
  {
    icon: Gem,
    name: 'Tratamiento Cerámico / Protección Avanzada',
    price: 'Desde $250',
    features: [
      'Protección hidrofóbica superior',
      'Duración de hasta 2 años',
      'Resistencia a químicos',
      'Brillo extremo garantizado',
    ],
  },
]

export default function ServicesMenu() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-text-primary/70 text-lg max-w-2xl mx-auto">
            Selecciona el servicio ideal para tu vehículo y visítanos directamente
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card-bg rounded-2xl p-6 md:p-8 shadow-lg shadow-primary/5 border border-primary/5 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 ease-out hover:-translate-y-3 cursor-pointer group flex flex-col"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-accent/20">
                <service.icon className="w-6 h-6 text-accent transition-transform duration-500 ease-out group-hover:scale-110" />
              </div>

              <h3 className="text-xl font-bold text-primary mb-2 transition-colors duration-300 group-hover:text-accent">
                {service.name}
              </h3>

              <p className="text-2xl font-bold text-accent mb-5 transition-transform duration-300 group-hover:scale-105 origin-left">
                {service.price}
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-2 text-text-primary/80 text-sm transition-all duration-300 group-hover:text-text-primary"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0 transition-all duration-300 group-hover:scale-125" />
                    {feature}
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
                VISÍTANOS 
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
              ¡Elige tu servicio y visítanos! No necesitas reservar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}