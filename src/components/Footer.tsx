export default function Footer() {
  return (
    <footer className="bg-primary py-8 border-t border-text-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="text-text-light font-bold text-lg tracking-wide">
              JMG CARWASH CORP
            </span>
            <p className="text-text-light/50 text-sm mt-1">
              Cuidado automotriz premium desde 2020
            </p>
          </div>
          
          <p className="text-text-light/40 text-sm">
            © {new Date().getFullYear()} JMG Carwash Corp. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}