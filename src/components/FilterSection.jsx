// FilterSection.jsx — la barra con titolo "TV Shows", il dropdown Genres
// e i pulsanti di layout (lista/griglia).

function FilterSection() {
  return (
    <section className="filter-section">
      <h1 className="page-title">TV Shows</h1>
      <div className="filter-controls">
        <div className="filter-left">
          <button className="btn-genre">
            Genres <span>&#9662;</span>
          </button>
          <div className="genre-dropdown">
            <a href="#">Drama</a>
            <a href="#">Comedy</a>
            <a href="#">Thriller</a>
            <a href="#">Action</a>
            <a href="#">Documentary</a>
            <a href="#">Romance</a>
          </div>
        </div>

        <div className="filter-right">
          <button className="btn-layout active">☰</button>
          <button className="btn-layout">⊞</button>
        </div>
      </div>
    </section>
  )
}

export default FilterSection
