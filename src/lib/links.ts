// Datos oficiales (manual de identidad, lámina 10): mismos enlaces en web, Maps y redes
export const MAPS_CID = '4455837891401584152'

export const LINKS = {
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=JMG+Carwash+Corp%2C+6776+SW+117th+Ave%2C+Miami%2C+FL+33183',
  mapsListing: `https://www.google.com/maps?cid=${MAPS_CID}`,
  mapsEmbed: `https://www.google.com/maps?cid=${MAPS_CID}&output=embed`,
  phone: 'tel:+13059929248',
  whatsapp: 'https://wa.me/13059929248',
  facebook: 'https://www.facebook.com/profile.php?id=61595435576495',
  instagram: 'https://www.instagram.com/jmgcarwashmiami/',
} as const
