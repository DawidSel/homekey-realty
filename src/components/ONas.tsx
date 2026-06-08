const cechy = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.39 7.26L18 8.18L14 12.08L14.96 18L10 15.27L5.04 18L6 12.08L2 8.18L7.61 7.26L10 2Z" stroke="#C9A96E" strokeWidth="1.5" />
      </svg>
    ),
    tytul: 'Szybka wycena',
    opis:  'Bezpłatna wycena nieruchomości w ciągu 24h.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17 11H3M3 11L7 7M3 11L7 15" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tytul: 'Pełna obsługa',
    opis:  'Od pierwszego kontaktu do podpisania umowy.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="5" width="14" height="11" rx="1" stroke="#C9A96E" strokeWidth="1.5" />
        <path d="M3 8H17" stroke="#C9A96E" strokeWidth="1.5" />
      </svg>
    ),
    tytul: 'Bez ukrytych kosztów',
    opis:  'Transparentne warunki współpracy od początku.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#C9A96E" strokeWidth="1.5" />
        <path d="M10 6V10L13 12" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tytul: 'Kontakt 7 dni / tydzień',
    opis:  'Jesteśmy dostępni wtedy, kiedy potrzebujesz.',
  },
]

export default function ONas() {
  return (
    <section
      id="o-nas"
      className="py-24 bg-charcoal relative overflow-hidden"
      aria-labelledby="o-nas-heading"
    >
      {/* Dekoracyjna siatka */}
      <div
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,169,110,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Grid (dwie równe kolumny) */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="section-tag text-gold mb-4">O agencji</p>
            <h2
              id="o-nas-heading"
              className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight mb-8"
            >
              Stawiamy na relacje,<br />
              <span className="italic text-gold">nie tylko transakcje.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              HomeKey Realty to butikowa agencja nieruchomości z Trójmiasta. Od ponad 15 lat
              pomagamy kupującym, sprzedającym i najemcom — zawsze z pełnym zaangażowaniem i bez
              presji.
            </p>
            <p className="text-white/50 leading-relaxed">
              Każdy klient to dla nas indywidualna historia. Słuchamy, doradzamy i działamy sprawnie
              — bo wiemy, że czas to pieniądz.
            </p>
          </div>

          {/* Cechy: Grid (równe 2 kolumny) */}
          <div className="grid grid-cols-2 gap-4">
            {cechy.map(c => (
              <div key={c.tytul} className="bg-white/5 border border-white/10 p-6 rounded-sm">
                <div
                  className="w-10 h-10 bg-gold/10 flex items-center justify-center rounded-sm mb-4"
                  aria-hidden="true"
                >
                  {c.icon}
                </div>
                <h3 className="font-display text-lg text-white font-semibold mb-2">{c.tytul}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{c.opis}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
