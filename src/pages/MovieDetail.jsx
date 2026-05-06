// MovieDetail.jsx — pagina di dettaglio di un singolo film.
// Esempio URL: /movie/tt1201607
//
// Demonstra TRE concetti potenti di react-router-dom + React:
// 1. Rotte dinamiche con :imdbID (configurate in App.jsx)
// 2. Hook useParams per leggere il parametro dall'URL
// 3. Fetch differente da OMDB: stesso endpoint ma con ?i=ID&plot=full
//    invece di ?s=titolo per ottenere TUTTI i dettagli del film.

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

function MovieDetail() {

  // useParams legge i parametri dinamici dell'URL.
  // Il nome "imdbID" deve corrispondere a quello messo in App.jsx
  // nella route: <Route path="/movie/:imdbID" ... />
  const { imdbID } = useParams()

  // useNavigate per il bottone "Back to Home"
  const navigate = useNavigate()

  // Stato locale per il film, il loading e l'errore
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const apiKey = import.meta.env.VITE_OMDB_API_KEY
        // Usiamo "?i=" per cercare per ID (non "?s=" che è per search)
        // "&plot=full" chiede la versione completa della trama
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Errore di rete: ' + response.status)
        }
        const data = await response.json()

        if (data.Response === 'True') {
          setMovie(data)
        } else {
          setError(data.Error || 'Film non trovato')
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, [imdbID]) // ← se cambia l'imdbID nell'URL (utente naviga ad un altro film), rifaccio il fetch

  // Render condizionale
  if (loading) return <Loader />
  if (error) return <ErrorMessage message={error} />
  if (!movie) return null

  // Helper: alcuni campi possono essere "N/A". Mostro "—" in quel caso.
  const safe = (value) => (value && value !== 'N/A' ? value : '—')
  const hasPoster = movie.Poster && movie.Poster !== 'N/A'

  return (
    <div className="movie-detail">
      {/* Sfondo poster sfumato */}
      {hasPoster && (
        <div
          className="movie-detail-bg"
          style={{ backgroundImage: `url(${movie.Poster})` }}
        />
      )}

      <div className="movie-detail-content">
        {/* Poster a sinistra */}
        <div className="movie-detail-poster">
          {hasPoster ? (
            <img src={movie.Poster} alt={movie.Title} />
          ) : (
            <div className="movie-card-placeholder">
              <span>{movie.Title}</span>
            </div>
          )}
        </div>

        {/* Info a destra */}
        <div className="movie-detail-info">
          <h1>{movie.Title}</h1>

          <div className="movie-detail-meta">
            <span>{safe(movie.Year)}</span>
            <span className="dot">•</span>
            <span>{safe(movie.Rated)}</span>
            <span className="dot">•</span>
            <span>{safe(movie.Runtime)}</span>
            <span className="dot">•</span>
            <span>{safe(movie.Genre)}</span>
          </div>

          <p className="movie-detail-plot">{safe(movie.Plot)}</p>

          <div className="movie-detail-credits">
            <p><strong>Director:</strong> {safe(movie.Director)}</p>
            <p><strong>Writer:</strong> {safe(movie.Writer)}</p>
            <p><strong>Cast:</strong> {safe(movie.Actors)}</p>
            <p><strong>Country:</strong> {safe(movie.Country)}</p>
            <p><strong>Awards:</strong> {safe(movie.Awards)}</p>
          </div>

          {movie.imdbRating && movie.imdbRating !== 'N/A' && (
            <div className="movie-detail-rating">
              <span className="rating-imdb">IMDB</span>
              <span className="rating-value">{movie.imdbRating}/10</span>
              <span className="rating-votes">({movie.imdbVotes} votes)</span>
            </div>
          )}

          <div className="movie-detail-actions">
            <button className="btn btn-play">▶ Play</button>
            <button className="btn-back" onClick={() => navigate('/')}>
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
