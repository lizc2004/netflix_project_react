// MovieCard.jsx — la singola card di un film.
// Riceve due "props" dal genitore: il titolo e l'URL del poster.
//
// Mostriamo un placeholder con il titolo del film in due casi:
// 1. OMDB ha restituito "N/A" come poster (immagine non disponibile)
// 2. L'URL del poster esiste ma il browser non riesce a caricarlo
//    (link morto, 404, immagine bloccata, ecc.) — gestito con onError

import { useState } from 'react'

function MovieCard({ title, poster }) {

  // Stato: ricorda se il caricamento dell'immagine è fallito.
  // Parte da false (assumiamo che vada bene), e diventa true
  // se onError viene chiamato.
  const [imageFailed, setImageFailed] = useState(false)

  // Mostro il placeholder se:
  // - il poster manca o è "N/A" (OMDB non ce l'ha)
  // - OPPURE il caricamento dell'immagine è fallito
  const showPlaceholder = !poster || poster === 'N/A' || imageFailed

  return (
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
  )
}

export default MovieCard
