export const SUPPORTED_LOCALES = ['es', 'en'] as const
export type Locale = (typeof SUPPORTED_LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'es'
export const LOCALE_PATHS: Record<Locale, string> = { es: '/', en: '/en/' }

export function localeFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : DEFAULT_LOCALE
}

export const messages = {
  es: {
    // Nav
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.work': 'Trabajos',
    'nav.services': 'Servicios',
    'nav.location': 'Ubicación',
    'nav.directions': 'Cómo llegar',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',

    // Hero
    'hero.label': 'Kendall · Miami',
    'hero.title': 'Lavado a mano.',
    'hero.highlight': 'Cuidado al detalle.',
    'hero.subtitle':
      'Exterior · Interior · Detailing. Llegas, dejas el carro y te vas tranquilo.',
    'hero.cta': 'Cómo llegar',
    'hero.address': '6776 SW 117th Ave · En la Westar',
    'hero.hours': 'Todos los días · 8 a. m. – 7 p. m.',
    'hero.whatsapp': 'Escríbenos',
    'hero.photoAlt': 'Carro negro recién lavado a mano en JMG Carwash Corp',

    // Work gallery
    'work.title': 'Nuestro trabajo',
    'work.intro': 'Fotos reales del local. El carro terminado habla por nosotros.',
    'work.photo1': 'Lavado y secado a mano',
    'work.photo2': 'Rines al detalle',
    'work.photo3': 'Interior: aspirado, tablero y vidrios',
    'work.more': 'Ver más en Instagram @jmgcarwashmiami',

    // About
    'about.title': 'Así trabajamos',
    'about.benefit1.title': 'A mano',
    'about.benefit1.description':
      'Cada carro lo lava una persona, no un túnel.',
    'about.benefit2.title': 'Al detalle',
    'about.benefit2.description':
      'Rines, vidrios, tapicería y acabados. Lo ves al recoger tu carro.',
    'about.benefit3.title': 'Cercano',
    'about.benefit3.description':
      'Negocio familiar, trato directo, en español o en inglés.',
    'about.benefit4.title': 'Fácil de encontrar',
    'about.benefit4.description':
      'En la gasolinera Westar de la 117 Ave. Sin cita: llegas y te atendemos.',

    // Services
    'services.title': 'Servicios',
    'services.intro':
      'Exterior · Interior · Detailing. El precio depende del tamaño de tu vehículo.',
    'services.cta': 'Ver ubicación',
    'services.footer': 'No necesitas cita. Ven hoy, te atendemos en orden de llegada.',

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
    'services.detailing.feature3': 'Brillo y acabado final',

    // Location
    'location.title': 'Dónde estamos',
    'location.hoursLabel': 'Horario',
    'location.hours': 'Todos los días · 8 a. m. – 7 p. m.',
    'location.addressLabel': 'Dirección',
    'location.address': '6776 SW 117th Ave\nMiami, FL 33183',
    'location.reference': 'En la gasolinera Westar',
    'location.phoneLabel': 'Teléfonos',
    'location.whatsapp': 'Escríbenos por WhatsApp',
    'location.phone': '(305) 992-9248',
    'location.phone2': '(786) 337-2240',
    'location.footer':
      'Sin cita previa. Te atendemos en orden de llegada.',
    'location.mapButton': 'Ver mapa grande',
    'location.iframeTitle': 'Ubicación JMG Carwash Corp',

    // FAQ
    'faq.title': 'Preguntas frecuentes',
    'faq.q1': '¿Necesito cita?',
    'faq.a1': 'No. Llegas y te atendemos en orden de llegada, todos los días de 8 a. m. a 7 p. m.',
    'faq.q2': '¿Cuánto cuesta lavar mi carro?',
    'faq.a2': 'Depende del tamaño: autos compactos y sedanes desde $25, SUVs desde $30, camionetas desde $35, camiones grandes desde $40 y camiones pesados o detailing desde $60.',
    'faq.q3': '¿Dónde están?',
    'faq.a3': 'En la gasolinera Westar de la 6776 SW 117th Ave, Miami, FL 33183, en Kendall. Cerca de Kendale Lakes, Sunset y The Hammocks.',
    'faq.q4': '¿El lavado es a mano?',
    'faq.a4': 'Sí. Cada carro lo lava una persona, no un túnel: exterior, interior y detailing.',
    'faq.q5': '¿Lavan camionetas y camiones?',
    'faq.a5': 'Sí. Lavamos desde sedanes hasta camionetas full size, camiones grandes y camiones pesados.',
    'faq.q6': '¿Cómo los contacto?',
    'faq.a6': 'Llámanos al (305) 992-9248 o al (786) 337-2240, o escríbenos por WhatsApp al (305) 992-9248. Te atendemos en español o en inglés.',

    // Footer
    'footer.tagline': 'Lavado a mano. Cuidado al detalle. · Kendall · Miami',
    'footer.copyright':
      '© {year} JMG Carwash Corp. Todos los derechos reservados.',

    // Meta
    'meta.title': 'JMG Carwash Corp | Lavado a mano en Kendall, Miami',
    'meta.description':
      'Lavado a mano en Kendall, Miami. Exterior · Interior · Detailing en la Westar, 6776 SW 117th Ave. Todos los días de 8 a. m. a 7 p. m. Ven hoy, sin cita.',

    // Mobile bottom bar
    'mobileBar.call': 'Llamar',
    'mobileBar.directions': 'Cómo llegar',

    // Language switcher
    'lang.switcherLabel': 'Idioma',
    'lang.es': 'ES',
    'lang.en': 'EN',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.work': 'Our work',
    'nav.services': 'Services',
    'nav.location': 'Find Us',
    'nav.directions': 'Get directions',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',

    // Hero
    'hero.label': 'Kendall · Miami',
    'hero.title': 'Hand washed.',
    'hero.highlight': 'Detailed with care.',
    'hero.subtitle':
      'Exterior · Interior · Detailing. Drop off your car and relax.',
    'hero.cta': 'Get directions',
    'hero.address': '6776 SW 117th Ave · At the Westar',
    'hero.hours': 'Every day · 8 a.m. – 7 p.m.',
    'hero.whatsapp': 'Message us',
    'hero.photoAlt': 'Black car freshly hand washed at JMG Carwash Corp',

    // Work gallery
    'work.title': 'Our work',
    'work.intro': 'Real photos from our location. A finished car speaks for itself.',
    'work.photo1': 'Hand washed and dried',
    'work.photo2': 'Rims, detailed',
    'work.photo3': 'Interior: vacuum, dashboard and windows',
    'work.more': 'See more on Instagram @jmgcarwashmiami',

    // About
    'about.title': 'How we work',
    'about.benefit1.title': 'By hand',
    'about.benefit1.description':
      'Every car is washed by a person, not a tunnel.',
    'about.benefit2.title': 'Attention to detail',
    'about.benefit2.description':
      'Rims, windows, upholstery and trim. You see it when you pick up your car.',
    'about.benefit3.title': 'Friendly',
    'about.benefit3.description':
      'Family business, direct service, in Spanish or English.',
    'about.benefit4.title': 'Easy to find',
    'about.benefit4.description':
      'At the Westar gas station on 117th Ave. No appointment: just drive in.',

    // Services
    'services.title': 'Services',
    'services.intro':
      'Exterior · Interior · Detailing. Price depends on the size of your vehicle.',
    'services.cta': 'See location',
    'services.footer':
      'No appointment needed. Come by today, first come, first served.',

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
    'services.detailing.feature3': 'Final shine and finish',

    // Location
    'location.title': 'Where we are',
    'location.hoursLabel': 'Hours',
    'location.hours': 'Every day · 8 a.m. – 7 p.m.',
    'location.addressLabel': 'Address',
    'location.address': '6776 SW 117th Ave\nMiami, FL 33183',
    'location.reference': 'At the Westar gas station',
    'location.phoneLabel': 'Phones',
    'location.whatsapp': 'Message us on WhatsApp',
    'location.phone': '(305) 992-9248',
    'location.phone2': '(786) 337-2240',
    'location.footer':
      'No appointment needed. First come, first served.',
    'location.mapButton': 'View large map',
    'location.iframeTitle': 'JMG Carwash Corp Location',

    // FAQ
    'faq.title': 'Frequently asked questions',
    'faq.q1': 'Do I need an appointment?',
    'faq.a1': 'No. Just drive in, first come, first served, every day from 8 a.m. to 7 p.m.',
    'faq.q2': 'How much does a car wash cost?',
    'faq.a2': 'It depends on the size: compact cars and sedans from $25, SUVs from $30, full-size trucks from $35, large trucks from $40, and heavy trucks or detailing from $60.',
    'faq.q3': 'Where are you located?',
    'faq.a3': 'At the Westar gas station, 6776 SW 117th Ave, Miami, FL 33183, in Kendall. Close to Kendale Lakes, Sunset and The Hammocks.',
    'faq.q4': 'Is it a hand car wash?',
    'faq.a4': 'Yes. Every car is washed by a person, not a tunnel: exterior, interior and detailing.',
    'faq.q5': 'Do you wash trucks?',
    'faq.a5': 'Yes. We wash everything from sedans to full-size pickups, large trucks and heavy trucks.',
    'faq.q6': 'How can I reach you?',
    'faq.a6': 'Call (305) 992-9248 or (786) 337-2240, or message us on WhatsApp at (305) 992-9248. We speak Spanish and English.',

    // Footer
    'footer.tagline': 'Hand washed. Detailed with care. · Kendall · Miami',
    'footer.copyright':
      '© {year} JMG Carwash Corp. All rights reserved.',

    // Meta
    'meta.title': 'JMG Carwash Corp | Hand Car Wash in Kendall, Miami',
    'meta.description':
      'Hand car wash in Kendall, Miami. Exterior · Interior · Detailing. At the Westar gas station, 6776 SW 117th Ave. Every day 8 a.m. – 7 p.m.',

    // Mobile bottom bar
    'mobileBar.call': 'Call',
    'mobileBar.directions': 'Directions',

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
