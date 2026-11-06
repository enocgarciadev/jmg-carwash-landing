import { MessageCircle } from 'lucide-react'
import { LINKS } from '@/lib/links'

// lucide-react 1.x ya no trae íconos de marca: estos son los trazos que tenía antes
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: 'w-5 h-5',
  'aria-hidden': true,
}

const items = [
  {
    href: LINKS.instagram,
    label: 'Instagram @jmgcarwashmiami',
    icon: (
      <svg {...iconProps}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    href: LINKS.facebook,
    label: 'Facebook JMG Carwash Corp',
    icon: (
      <svg {...iconProps}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    href: LINKS.whatsapp,
    label: 'WhatsApp (305) 992-9248',
    icon: <MessageCircle className="w-5 h-5" aria-hidden="true" />,
  },
]

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {items.map(({ href, label, icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="w-11 h-11 flex items-center justify-center rounded-xl border border-text-light/20 text-text-light/80 hover:text-accent-bright hover:border-accent-bright transition-colors duration-300"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
