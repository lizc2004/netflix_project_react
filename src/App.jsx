// App.jsx — il componente principale dell'applicazione.

import Navbar from './components/Navbar'
import FilterSection from './components/FilterSection'
import Hero from './components/Hero'
import MovieGallery from './components/MovieGallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <FilterSection />
      <Hero />

      {/* Sezione contenuti: 3 gallerie con 3 saghe diverse.
          Lo stesso componente MovieGallery viene riutilizzato
          passando ogni volta props differenti. */}
      <section className="content">
        <MovieGallery title="Harry Potter" searchQuery="harry potter" />
        <MovieGallery title="Lord of the Rings" searchQuery="lord of the rings" />
        <MovieGallery title="Star Wars" searchQuery="star wars" />
      </section>

      <Footer />
    </div>
  )
}

export default App
