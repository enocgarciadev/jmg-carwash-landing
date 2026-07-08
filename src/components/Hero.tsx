import { MapPin, Navigation } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90 z-10" />
      
      {/* Hero LCP image: keep this URL in sync with the preload link in index.html */}
      <img
        src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1920&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 animate-pulse-slow z-0"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        width="1920"
        height="1280"
      />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-text-light leading-tight mb-6 animate-fade-in-up">
          Cuidado Automotriz
          <br />
          <span className="text-accent">de Nivel Superior</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-text-light/90 mb-4 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Atención premium en orden de llegada. Visítanos hoy mismo sin necesidad de cita previa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-text-light px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-accent/40 active:scale-95 cursor-pointer group"
          >
            <Navigation className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            CÓMO LLEGAR (MAPS / WAZE)
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-text-light/70 text-sm animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <MapPin className="w-4 h-4" />
          <span>Lunes a Domingo: 8:00AM - 7:00PM</span>
        </div>
      </div>
    </section>
  )
}