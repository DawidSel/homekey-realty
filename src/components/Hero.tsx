const stats = [
  { value: '1200', suffix: '+',   label: 'transakcji'   },
  { value: '15',   suffix: 'lat', label: 'doświadczenia' },
  { value: '98',   suffix: '%',   label: 'zadowolonych'  },
]

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-end relative overflow-hidden pt-20"
      style={{ background: 'linear-gradient(135deg, #1C1C1C 0%, #2e2a24 50%, #3a3028 100%)' }}
      aria-labelledby="hero-heading"
    >
      {/* Dekoracyjna siatka */}
      <div
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,169,110,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Duża liczba dekoracyjna */}
      <div
        className="absolute top-24 right-8 md:right-24 font-display text-[200px] md:text-[320px] font-bold text-white/[0.03] leading-none select-none"
        aria-hidden="true"
      >
        15
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-32 w-full">
        {/* Mobile: kolumna | Desktop: flex obok siebie */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-12">

          {/* Lewa strona: tytuł rośnie i zajmuje dostępne miejsce */}
          <div className="lg:flex-1">
            <p className="section-tag text-gold mb-6">Nieruchomości premium · Polska</p>
            <h1
              id="hero-heading"
              className="font-display text-5xl md:text-7xl font-semibold text-white leading-[1.05] mb-8"
            >
              Znajdź miejsce,<br />
              które{' '}
              <span className="italic text-gold">naprawdę</span>
              <br />
              do Ciebie pasuje.
            </h1>
            <p className="text-white/50 text-base leading-relaxed max-w-md mb-10">
              Ponad 15 lat doświadczenia na rynku nieruchomości. Sprzedaż i wynajem mieszkań,
              domów i lokali. Bez zbędnych formalności — szybko i sprawnie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#oferty" className="btn-primary px-8 py-4 text-center">
                Zobacz oferty
              </a>
              <a
                href="#kontakt"
                className="border border-white/20 text-white px-8 py-4 rounded-sm font-medium hover:bg-white/5 transition-colors text-center"
              >
                Bezpłatna konsultacja
              </a>
            </div>
          </div>

          {/* Prawa strona: statystyki – stała szerokość (flex-shrink-0) */}
          <div className="flex gap-8 lg:flex-shrink-0">
            {stats.map(stat => (
              <div key={stat.label} className="stat-border">
                <div className="font-display text-4xl md:text-5xl font-semibold text-white">
                  {stat.value}
                  <span className="text-gold">{stat.suffix}</span>
                </div>
                <div className="text-white/40 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Dolna krzywa przejścia */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80H1440V40C1200 80 900 0 720 20C540 40 240 80 0 40V80Z" fill="#F5F0E8" />
        </svg>
      </div>
    </section>
  )
}
