export const SUPPORTED_LOCALES = ['es', 'en'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'es'
export const STORAGE_KEY = 'jmg-lang'

export const messages = {
  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.directions': 'CÓMO LLEGAR',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',

    // Hero
    'hero.title': 'Cuidado Automotriz',
    'hero.highlight': 'de Nivel Superior',
    'hero.subtitle':
      'Atención premium en orden de llegada. Visítanos hoy mismo sin necesidad de cita previa.',
    'hero.cta': 'CÓMO LLEGAR (MAPS / WAZE)',
    'hero.hours': 'Lunes a Domingo: 8:00AM - 7:00PM',

    // About
    'about.title': 'Comprometidos con la Perfección',
    'about.benefit1.title': 'Sin Citas Previas',
    'about.benefit1.description':
      'Llegas con tu vehículo, te acomodas y te atendemos de inmediato en orden de llegada.',
    'about.benefit2.title': 'Instalaciones de Primera',
    'about.benefit2.description':
      'Disfruta de un área de espera cómoda y acondicionada mientras consentimos tu auto.',
    'about.benefit3.title': 'Rapidez y Eficiencia',
    'about.benefit3.description':
      'Procesos optimizados por expertos para cuidar tu tiempo sin descuidar el detalle.',

    // Services
    'services.title': 'Nuestros Servicios',
    'services.intro':
      'Selecciona el servicio ideal para tu vehículo y visítanos directamente',
    'services.cta': 'VISÍTANOS',
    'services.footer': '¡Elige tu servicio y visítanos! No necesitas reservar.',

    'services.compact.name': 'Autos Compactos / Sedán',
    'services.compact.price': 'Desde $25',
    'services.compact.feature0': 'Lavado exterior completo',
    'services.compact.feature1': 'Limpieza interior rápida',
    'services.compact.feature2': 'Aspirado básico',
    'services.compact.feature3': 'Limpieza de vidrios',

    'services.suv.name': 'SUVs / Vehículos Medianos',
    'services.suv.price': 'Desde $30',
    'services.suv.feature0': 'Lavado exterior completo',
    'services.suv.feature1': 'Aspirado interior',
    'services.suv.feature2': 'Limpieza de vidrios',
    'services.suv.feature3': 'Protección de plásticos',

    'services.fullsize.name': 'Camionetas / Full Size',
    'services.fullsize.price': 'Desde $35',
    'services.fullsize.feature0': 'Lavado exterior completo',
    'services.fullsize.feature1': 'Aspirado interior profundo',
    'services.fullsize.feature2': 'Limpieza de vidrios',
    'services.fullsize.feature3': 'Acondicionamiento básico',

    'services.truckLarge.name': 'Camiones Grandes',
    'services.truckLarge.price': 'Desde $40',
    'services.truckLarge.feature0': 'Lavado exterior completo',
    'services.truckLarge.feature1': 'Limpieza de cabina',
    'services.truckLarge.feature2': 'Limpieza de vidrios',
    'services.truckLarge.feature3': 'Aspirado básico',

    'services.truckHeavy.name': 'Camiones Pesados',
    'services.truckHeavy.price': 'Desde $60',
    'services.truckHeavy.feature0': 'Lavado exterior completo',
    'services.truckHeavy.feature1': 'Limpieza de cabina profunda',
    'services.truckHeavy.feature2': 'Limpieza de vidrios',
    'services.truckHeavy.feature3': 'Acondicionamiento de plásticos',

    'services.detailing.name': 'Detailing Wash',
    'services.detailing.price': 'Desde $60',
    'services.detailing.feature0': 'Limpieza profunda exterior',
    'services.detailing.feature1': 'Limpieza interior detallada',
    'services.detailing.feature2': 'Protección de plásticos y cuero',
    'services.detailing.feature3': 'Brillo y acabado premium',

    // Location
    'location.title': 'Encuéntranos Ahora',
    'location.hoursLabel': 'Horario de Atención',
    'location.hours': 'Lunes a Domingo: 8:00AM - 7:00PM',
    'location.addressLabel': 'Dirección',
    'location.address': '6776 SW 117th Ave.\nMiami, FL 33183',
    'location.phoneLabel': 'Teléfono',
    'location.phone': '(305) 992-9248',
    'location.footer':
      'Visítanos sin cita previa. Te atendemos en orden de llegada.',
    'location.mapButton': 'VER MAPA GRANDE',
    'location.iframeTitle': 'Ubicación JMG Carwash Corp',

    // Footer
    'footer.tagline': 'Cuidado automotriz premium desde 2020',
    'footer.copyright':
      '© {year} JMG Carwash Corp. Todos los derechos reservados.',

    // Meta
    'meta.title': 'JMG Carwash Corp | Lavado de Autos Premium',
    'meta.description':
      'JMG Carwash Corp - Lavado de autos premium. Atención en orden de llegada, sin citas previas. Visítanos hoy mismo.',

    // Language switcher
    'lang.switcherLabel': 'Idioma',
    'lang.es': 'ES',
    'lang.en': 'EN',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.directions': 'GET DIRECTIONS',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',

    // Hero
    'hero.title': 'Premium Car Care',
    'hero.highlight': 'at Its Best',
    'hero.subtitle':
      'Premium first-come, first-served service. Visit us today—no appointment needed.',
    'hero.cta': 'GET DIRECTIONS (MAPS / WAZE)',
    'hero.hours': 'Monday to Sunday: 8:00AM - 7:00PM',

    // About
    'about.title': 'Committed to Excellence',
    'about.benefit1.title': 'No Appointments Needed',
    'about.benefit1.description':
      'Bring your vehicle, get comfortable, and we will serve you right away on a first-come, first-served basis.',
    'about.benefit2.title': 'First-Class Facilities',
    'about.benefit2.description':
      'Enjoy a comfortable, climate-controlled waiting area while we pamper your car.',
    'about.benefit3.title': 'Speed and Efficiency',
    'about.benefit3.description':
      'Expert-optimized processes that respect your time without missing a single detail.',

    // Services
    'services.title': 'Our Services',
    'services.intro':
      'Choose the right service for your vehicle and visit us directly',
    'services.cta': 'VISIT US',
    'services.footer':
      'Choose your service and visit us! No reservation needed.',

    'services.compact.name': 'Compact Cars / Sedan',
    'services.compact.price': 'From $25',
    'services.compact.feature0': 'Full exterior wash',
    'services.compact.feature1': 'Quick interior clean',
    'services.compact.feature2': 'Basic vacuuming',
    'services.compact.feature3': 'Window cleaning',

    'services.suv.name': 'SUVs / Mid-Size Vehicles',
    'services.suv.price': 'From $30',
    'services.suv.feature0': 'Full exterior wash',
    'services.suv.feature1': 'Interior vacuuming',
    'services.suv.feature2': 'Window cleaning',
    'services.suv.feature3': 'Plastic protection',

    'services.fullsize.name': 'Trucks / Full Size',
    'services.fullsize.price': 'From $35',
    'services.fullsize.feature0': 'Full exterior wash',
    'services.fullsize.feature1': 'Deep interior vacuuming',
    'services.fullsize.feature2': 'Window cleaning',
    'services.fullsize.feature3': 'Basic conditioning',

    'services.truckLarge.name': 'Large Trucks',
    'services.truckLarge.price': 'From $40',
    'services.truckLarge.feature0': 'Full exterior wash',
    'services.truckLarge.feature1': 'Cabin cleaning',
    'services.truckLarge.feature2': 'Window cleaning',
    'services.truckLarge.feature3': 'Basic vacuuming',

    'services.truckHeavy.name': 'Heavy Trucks',
    'services.truckHeavy.price': 'From $60',
    'services.truckHeavy.feature0': 'Full exterior wash',
    'services.truckHeavy.feature1': 'Deep cabin cleaning',
    'services.truckHeavy.feature2': 'Window cleaning',
    'services.truckHeavy.feature3': 'Plastic conditioning',

    'services.detailing.name': 'Detailing Wash',
    'services.detailing.price': 'From $60',
    'services.detailing.feature0': 'Deep exterior cleaning',
    'services.detailing.feature1': 'Detailed interior cleaning',
    'services.detailing.feature2': 'Plastic and leather protection',
    'services.detailing.feature3': 'Premium shine and finish',

    // Location
    'location.title': 'Find Us Now',
    'location.hoursLabel': 'Opening Hours',
    'location.hours': 'Monday to Sunday: 8:00AM - 7:00PM',
    'location.addressLabel': 'Address',
    'location.address': '6776 SW 117th Ave.\nMiami, FL 33183',
    'location.phoneLabel': 'Phone',
    'location.phone': '(305) 992-9248',
    'location.footer':
      'Visit us without an appointment. We serve on a first-come, first-served basis.',
    'location.mapButton': 'VIEW LARGE MAP',
    'location.iframeTitle': 'JMG Carwash Corp Location',

    // Footer
    'footer.tagline': 'Premium car care since 2020',
    'footer.copyright':
      '© {year} JMG Carwash Corp. All rights reserved.',

    // Meta
    'meta.title': 'JMG Carwash Corp | Premium Car Wash',
    'meta.description':
      'JMG Carwash Corp - Premium car wash. First-come, first-served, no appointments needed. Visit us today.',

    // Language switcher
    'lang.switcherLabel': 'Language',
    'lang.es': 'ES',
    'lang.en': 'EN',
  },
} as const

export type TranslationKey = keyof typeof messages.es
export type Messages = Record<TranslationKey, string>

export function getMessages(locale: Locale): Messages {
  return messages[locale] as Messages
}
