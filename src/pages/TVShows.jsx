// TVShows.jsx — pagina dedicata alle serie TV.
// Riusa lo stesso componente MovieGallery che già abbiamo,
// passando query di ricerca per serie TV famose.
// Questo dimostra il pattern di "componente riutilizzabile":
// stesso codice, contenuti diversi.

import MovieGallery from '../components/MovieGallery'

function TVShows() {
  return (
    <>
      <section className="filter-section">
        <h1 className="page-title">TV Shows</h1>
        <p className="page-subtitle">
          The best series, all in one place.
        </p>
      </section>

      <section className="content">
        <MovieGallery title="Breaking Bad" searchQuery="breaking bad" />
        <MovieGallery title="Game of Thrones" searchQuery="game of thrones" />
        <MovieGallery title="Stranger Things" searchQuery="stranger things" />
      </section>
    </>
  )
}

export default TVShows
