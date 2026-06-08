interface Opinia {
  inicjaly: string
  imie:     string
  miasto:   string
  tresc:    string
  ciemna?:  boolean
}

const opinie: Opinia[] = [
  {
    inicjaly: 'AK',
    imie:     'Anna K.',
    miasto:   'Gdańsk',
    tresc:    'Sprzedałam mieszkanie w 3 tygodnie. Cena powyżej oczekiwań, a cały proces przebiegł bez żadnego stresu.',
  },
  {
    inicjaly: 'MW',
    imie:     'Marek W.',
    miasto:   'Sopot',
    tresc:    'Szukałem mieszkania dla rodziny — agent znalazł idealne miejsce w dwa tygodnie. Polecam z całego serca.',
    ciemna:   true,
  },
  {
    inicjaly: 'JN',
    imie:     'Julia N.',
    miasto:   'Gdynia',
    tresc:    'Profesjonalizm na każdym etapie. Bezpieczna umowa, uczciwa prowizja i pełne wsparcie przez cały czas.',
  },
]

export default function Opinie() {
  return (
    <section
      className="py-24 max-w-7xl mx-auto px-6"
      aria-labelledby="opinie-heading"
    >
      <p className="section-tag text-stone mb-3">Opinie klientów</p>
      <h2
        id="opinie-heading"
        className="font-display text-4xl md:text-5xl font-semibold text-charcoal mb-16"
      >
        Co mówią nasi klienci
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {opinie.map(o => (
          <article
            key={o.imie}
            className={`p-8 rounded-sm ${
              o.ciemna
                ? 'bg-charcoal'
                : 'bg-white border border-stone/10'
            }`}
          >
            <div className="font-display text-4xl text-gold mb-4" aria-hidden="true">"</div>
            <blockquote
              className={`leading-relaxed mb-6 ${
                o.ciemna ? 'text-white/60' : 'text-charcoal/70'
              }`}
            >
              {o.tresc}
            </blockquote>
            <footer className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold ${
                  o.ciemna
                    ? 'bg-white/10 text-white'
                    : 'bg-stone/20 text-stone'
                }`}
                aria-hidden="true"
              >
                {o.inicjaly}
              </div>
              <div>
                <div className={`font-medium text-sm ${o.ciemna ? 'text-white' : 'text-charcoal'}`}>
                  {o.imie}
                </div>
                <div className={`text-xs ${o.ciemna ? 'text-white/40' : 'text-stone'}`}>
                  {o.miasto}
                </div>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  )
}
