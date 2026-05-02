// Home.jsx — pagina principale del sito (la "/" del router).
// Compone i componenti della home: barra filtro, hero section, gallerie OMDB.
// Nota: Navbar e Footer NON stanno qui dentro, perché sono condivisi
// tra tutte le pagine e li mettiamo direttamente in App.jsx.

import FilterSection from '../components/FilterSection'
import Hero from '../components/Hero'
import MovieGallery from '../components/MovieGallery'

function Home() {
  return (
    <>
      <FilterSection />
      <Hero />

      <section className="content">
        <MovieGallery title="Harry Potter" searchQuery="harry potter" />
        <MovieGallery title="Lord of the Rings" searchQuery="lord of the rings" />
        <MovieGallery title="Star Wars" searchQuery="star wars" />
      </section>
    </>
  )
}

export default Home
