# HomeKey Realty

Landing page agencji nieruchomości zbudowany w **Vite + React + TypeScript + Tailwind CSS v3**.

## Uruchomienie lokalne

```bash
# 1. Zainstaluj zależności
npm install

# 2. Uruchom serwer deweloperski
npm run dev
```

Strona dostępna pod: http://localhost:5173

## Budowanie produkcyjne

```bash
npm run build      # kompiluje TypeScript i buduje bundle
npm run preview    # podgląd zbudowanej wersji lokalnie
```

Wynikowe pliki trafiają do katalogu `dist/` – ten folder wrzucasz na Vercel/Netlify.

## Wdrożenie na Vercel

1. Zaloguj się na [vercel.com](https://vercel.com)
2. Kliknij **Add New Project** → zaimportuj repozytorium z GitHuba
3. Vercel automatycznie wykryje Vite – pozostaw domyślne ustawienia
4. Kliknij **Deploy**

## Struktura projektu

```
src/
├── components/
│   ├── Navbar.tsx     ← nawigacja + hamburger (useState)
│   ├── Hero.tsx       ← sekcja hero (Flex, Mobile-First)
│   ├── Oferty.tsx     ← karty ofert (Grid)
│   ├── ONas.tsx       ← o agencji (Grid)
│   ├── Opinie.tsx     ← testimoniale (Grid, blockquote)
│   ├── Kontakt.tsx    ← formularz z walidacją (useState)
│   └── Footer.tsx     ← stopka
├── App.tsx            ← składa wszystkie sekcje
├── main.tsx           ← entry point React
└── index.css          ← Tailwind + klasy pomocnicze
```

## Wymagania spełnione

| Kryterium | Rozwiązanie |
|-----------|-------------|
| Mobile-First | `flex flex-col lg:flex-row`, `grid md:grid-cols-2` |
| Tailwind bez "magicznych liczb" | cały układ w klasach Tailwind, `@layer components` |
| Hamburger | `useState` w Navbar.tsx, animacja X ↔ ≡ |
| Walidacja formularza | `validateForm()` w Kontakt.tsx, `e.preventDefault()`, komunikaty inline |
| Semantyczny HTML | `<header>`, `<main>`, `<footer>`, `<article>`, `<blockquote>`, `aria-*` |
| Brak błędów w konsoli | czyste TypeScript, strict mode |
