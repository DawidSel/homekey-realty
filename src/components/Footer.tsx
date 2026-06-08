export default function Footer() {
  return (
    <footer className="bg-charcoal py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-gold/20 rounded-sm flex items-center justify-center" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M2 8L8 2L14 8V14H10V10H6V14H2V8Z" fill="#C9A96E" />
            </svg>
          </div>
          <span className="font-display text-lg text-white">
            HomeKey{' '}
            <span className="text-stone italic font-normal">Realty</span>
          </span>
        </div>

        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} HomeKey Realty. Wszelkie prawa zastrzeżone.
        </p>

        <nav aria-label="Linki prawne">
          <ul className="flex gap-6">
            <li>
              <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                Polityka prywatności
              </a>
            </li>
            <li>
              <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
                Regulamin
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </footer>
  )
}
