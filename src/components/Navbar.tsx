import { useState } from 'react'

const navLinks = [
  { href: '#oferty',  label: 'Oferty'   },
  { href: '#o-nas',   label: 'O nas'    },
  { href: '#kontakt', label: 'Kontakt'  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-stone/10"
        aria-label="Główna nawigacja"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3" aria-label="HomeKey Realty – strona główna">
            <div className="w-8 h-8 bg-charcoal rounded-sm flex items-center justify-center" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8L8 2L14 8V14H10V10H6V14H2V8Z" fill="#C9A96E" />
              </svg>
            </div>
            <span className="font-display text-xl font-semibold tracking-wide text-charcoal">
              HomeKey{' '}
              <span className="text-stone font-normal italic">Realty</span>
            </span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a href="#kontakt" className="btn-primary text-sm px-5 py-2.5">
              Skontaktuj się
            </a>
          </div>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {/* Animacja X ↔ hamburger przez inline transform w CSS */}
            <span
              className="block w-6 h-px bg-charcoal transition-transform duration-300"
              style={{ transform: isOpen ? 'translateY(8px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-4 h-px bg-charcoal transition-opacity duration-300"
              style={{ opacity: isOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-px bg-charcoal transition-transform duration-300"
              style={{ transform: isOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Menu mobilne"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 pb-6 flex flex-col gap-4 border-t border-stone/10 pt-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-stone hover:text-charcoal text-sm transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={closeMenu}
              className="btn-primary text-sm px-5 py-3 text-center"
            >
              Skontaktuj się
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
