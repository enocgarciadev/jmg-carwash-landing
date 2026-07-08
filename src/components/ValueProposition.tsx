import { CalendarCheck, Building2, Clock } from 'lucide-react'

const benefits = [
  {
    icon: CalendarCheck,
    title: 'Sin Citas Previas',
    description:
      'Llegas con tu vehículo, te acomodas y te atendemos de inmediato en orden de llegada.',
  },
  {
    icon: Building2,
    title: 'Instalaciones de Primera',
    description:
      'Disfruta de un área de espera cómoda y acondicionada mientras consentimos tu auto.',
  },
  {
    icon: Clock,
    title: 'Rapidez y Eficiencia',
    description:
      'Procesos optimizados por expertos para cuidar tu tiempo sin descuidar el detalle.',
  },
]

export default function ValueProposition() {
  return (
    <section id="about" className="py-16 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Comprometidos con la Perfección
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card-bg rounded-2xl p-8 shadow-lg shadow-primary/5 border border-primary/5 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 ease-out hover:-translate-y-3 cursor-pointer group"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}