interface Oferta {
  id:       number
  imgClass: string
  imgAlt:   string
  badge:    string
  badgeClass: string
  cena:     string
  lokacja:  string
  tytul:    string
  detale:   string[]
}

const oferty: Oferta[] = [
  {
    id:         1,
    imgClass:   'prop-img-1',
    imgAlt:     'Apartament Gdańsk Wrzeszcz',
    badge:      'Sprzedaż',
    badgeClass: 'badge-gold',
    cena:       '850 000 zł',
    lokacja:    'Gdańsk · Wrzeszcz',
    tytul:      'Apartament 3-pokojowy, 74 m²',
    detale:     ['3 pokoje', '74 m²', '4. piętro'],
  },
  {
    id:         2,
    imgClass:   'prop-img-2',
    imgAlt:     'Dom szeregowy Sopot Centrum',
    badge:      'Wynajem',
    badgeClass: 'bg-sage',
    cena:       '4 200 zł / mc',
    lokacja:    'Sopot · Centrum',
    tytul:      'Dom szeregowy, 120 m²',
    detale:     ['5 pokoi', '120 m²', 'ogród'],
  },
  {
    id:         3,
    imgClass:   'prop-img-3',
    imgAlt:     'Mieszkanie Gdynia Śródmieście',
    badge:      'Sprzedaż',
    badgeClass: 'badge-gold',
    cena:       '320 000 zł',
    lokacja:    'Gdynia · Śródmieście',
    tytul:      'Mieszkanie 2-pokojowe, 48 m²',
    detale:     ['2 pokoje', '48 m²', '2. piętro'],
  },
]

export default function Oferty() {
  return (
    <section id="oferty" className="py-24 max-w-7xl mx-auto px-6" aria-labelledby="oferty-heading">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="section-tag text-stone mb-3">Aktualne ogłoszenia</p>
          <h2 id="oferty-heading" className="font-display text-4xl md:text-5xl font-semibold text-charcoal">
            Wybrane oferty
          </h2>
        </div>
        <a
          href="#kontakt"
          className="text-stone text-sm border-b border-stone pb-0.5 hover:text-gold hover:border-gold transition-colors self-start md:self-auto"
        >
          Pełna lista ofert →
        </a>
      </div>

      {/* Grid (równe kolumny) – lepsza opcja niż Flexbox dla tego układu */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {oferty.map(o => (
          <article key={o.id} className="card-hover bg-white rounded-sm overflow-hidden">
            <div
              className={`${o.imgClass} h-52 relative`}
              role="img"
              aria-label={`Zdjęcie: ${o.imgAlt}`}
            >
              <div
                className={`${o.badgeClass} absolute top-4 left-4 text-white text-xs px-3 py-1.5 rounded-sm font-medium`}
              >
                {o.badge}
              </div>
              <div className="absolute bottom-4 right-4 bg-charcoal/80 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-sm font-display font-semibold">
                {o.cena}
              </div>
            </div>
            <div className="p-6">
              <p className="section-tag text-stone mb-2">{o.lokacja}</p>
              <h3 className="font-display text-xl font-semibold mb-3">{o.tytul}</h3>
              <div className="flex gap-4 text-stone text-sm mb-5">
                {o.detale.map((d, i) => (
                  <span key={d} className="flex items-center gap-4">
                    {d}
                    {i < o.detale.length - 1 && (
                      <span className="text-stone/30 ml-4" aria-hidden="true">·</span>
                    )}
                  </span>
                ))}
              </div>
              <a
                href="#kontakt"
                className="block text-center border border-charcoal text-charcoal text-sm py-3 rounded-sm hover:bg-charcoal hover:text-white transition-all"
              >
                Zapytaj o ofertę
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
