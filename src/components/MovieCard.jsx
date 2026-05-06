// MovieCard.jsx — la singola card di un film.
// Riceve tre "props" dal genitore: titolo, poster e imdbID.
// L'imdbID serve per costruire il link al dettaglio del film.
//
// Quando l'utente clicca sulla card, viene portato a /movie/<imdbID>
// che è gestita da MovieDetail. Il routing è SPA (no reload).

import { useState } from 'react'
import { Link } from 'react-router-dom'

function MovieCard({ title, poster, imdbID }) {

  const [imageFailed, setImageFailed] = useState(false)
  const showPlaceholder = !poster || poster === 'N/A' || imageFailed

  return (
    <Link to={`/movie/${imdbID}`} className="movie-card-link">
      <div className="movie-card">
        {showPlaceholder ? (
          <div className="movie-card-placeholder">
            <span>{title}</span>
          </div>
        ) : (
          <img
            src={poster}
            alt={title}
            onError={() => setImageFailed(true)}
          />
        )}
      </div>
    </Link>
  )
}

export default MovieCard
