// MovieGallery.jsx — galleria di film su una saga.
// Riceve due props:
//   - title: il titolo che apparirà sopra la riga (es. "Harry Potter")
//   - searchQuery: la stringa da cercare su OMDB (es. "harry potter")
//
// Questo componente è il "cuore React" del progetto:
// gestisce stato interno, fa una chiamata HTTP asincrona,
// e mostra una vista diversa a seconda del risultato (loading/error/dati).

import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'

function MovieGallery({ title, searchQuery }) {

  // === STATO ===
  // Tre stati indipendenti per gestire le tre situazioni possibili:
  // 1. movies  → l'array dei film ottenuti da OMDB (vuoto all'inizio)
  // 2. loading → true mentre aspetto la risposta dell'API
  // 3. error   → stringa con il messaggio di errore (null se tutto ok)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // === EFFETTO ===
  // useEffect viene eseguito UNA volta sola quando il componente nasce
  // (perché l'array di dipendenze è [searchQuery] e cambia solo se cambia
  // la prop searchQuery). Qui dentro facciamo il fetch a OMDB.
  useEffect(() => {

    // Definisco una funzione async dentro l'effetto e la chiamo subito.
    // Non posso rendere "async" useEffect direttamente, è una limitazione
    // di React, quindi il pattern standard è questo.
    const fetchMovies = async () => {
      try {
        // Leggo la chiave API dal file .env
        const apiKey = import.meta.env.VITE_OMDB_API_KEY

        // Costruisco l'URL della chiamata.
        // encodeURIComponent serve a "tradurre" eventuali spazi
        // o caratteri speciali nella query (es. "harry potter" → "harry%20potter")
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchQuery)}`

        // Lancio la richiesta HTTP e aspetto la risposta
        const response = await fetch(url)

        // Se la risposta NON è ok (es. 404, 500), lancio un errore
        if (!response.ok) {
          throw new Error('Errore di rete: ' + response.status)
        }

        // Parsing JSON della risposta
        const data = await response.json()

        // OMDB restituisce un oggetto con:
        //   - Response: "True" o "False"
        //   - Search:   array dei film (solo se Response = "True")
        //   - Error:    messaggio di errore (solo se Response = "False")
        if (data.Response === 'True') {
          setMovies(data.Search)
        } else {
          setError(data.Error || 'Nessun film trovato')
        }
      } catch (err) {
        // Cattura errori di rete o problemi imprevisti
        setError(err.message)
      } finally {
        // "finally" viene eseguito sia se va bene che se va male:
        // smetto sempre di mostrare il loader
        setLoading(false)
      }
    }

    fetchMovies()
  }, [searchQuery]) // ← rieseguo solo se cambia la prop searchQuery

  // === RENDER CONDIZIONALE ===
  // Mostro tre viste diverse a seconda dello stato corrente.
  // Questo pattern si chiama "conditional rendering".

  return (
    <div className="movies-row">
      <h2>{title}</h2>

      {loading && <Loader />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <div className="movies-grid">
          {/* .map() trasforma ogni film dell'array in una <MovieCard />.
              La "key" è obbligatoria in React per liste — usa l'imdbID
              che è univoco per ogni film. */}
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default MovieGallery
