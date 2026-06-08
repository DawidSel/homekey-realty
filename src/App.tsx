import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Oferty    from './components/Oferty'
import ONas      from './components/ONas'
import Opinie    from './components/Opinie'
import Kontakt   from './components/Kontakt'
import Footer    from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Złoty separator */}
        <div className="max-w-4xl mx-auto px-6 py-2" aria-hidden="true">
          <div className="gold-line" />
        </div>
        <Oferty />
        <ONas />
        <Opinie />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}
