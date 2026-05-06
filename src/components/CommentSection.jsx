// CommentSection.jsx — sezione commenti per un singolo film.
// Usa l'API CRUD di Strive School:
//   GET  https://striveschool-api.herokuapp.com/api/comments/:elementId
//   POST https://striveschool-api.herokuapp.com/api/comments/
//
// Entrambe le chiamate richiedono un header di autenticazione:
//   Authorization: Bearer <TOKEN>
// Il token è in .env come VITE_STRIVE_TOKEN.
//
// Prop:
//   - imdbID: l'ID del film, usato sia per il GET che come elementId nel POST.

import { useState, useEffect } from 'react'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'

const COMMENTS_API = 'https://striveschool-api.herokuapp.com/api/comments/'

function CommentSection({ imdbID }) {

  // Stato lista commenti
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Stato form (form "controllato" da React)
  const [newComment, setNewComment] = useState('')
  const [newRate, setNewRate] = useState('5')
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState(null)

  // Token preso da .env
  const token = import.meta.env.VITE_STRIVE_TOKEN

  // Funzione che fa il GET dei commenti.
  // L'ho estratta dall'useEffect così posso richiamarla anche dopo il POST.
  const fetchComments = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(COMMENTS_API + imdbID, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (!response.ok) {
        throw new Error('Errore nel caricamento commenti: ' + response.status)
      }
      const data = await response.json()
      setComments(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Eseguo il GET al mount e ogni volta che cambia l'imdbID
  useEffect(() => {
    fetchComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imdbID])

  // Handler del submit del form
  const handleSubmit = async (e) => {
    e.preventDefault() // evita il refresh della pagina, comportamento default del form HTML

    if (!newComment.trim()) {
      setFormError('Il commento non può essere vuoto')
      return
    }

    try {
      setSubmitting(true)
      setFormError(null)

      const response = await fetch(COMMENTS_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          comment: newComment,
          rate: newRate,
          elementId: imdbID,
        }),
      })

      if (!response.ok) {
        throw new Error("Errore durante l'invio del commento: " + response.status)
      }

      // Reset del form
      setNewComment('')
      setNewRate('5')

      // Refresh della lista per vedere il commento appena postato
      fetchComments()
    } catch (err) {
      setFormError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="comment-section">
      <h2 className="comment-section-title">Commenti</h2>

      {/* Lista commenti */}
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && comments.length === 0 && (
        <p className="no-comments">Nessun commento ancora. Sii il primo!</p>
      )}
      {!loading && !error && comments.length > 0 && (
        <ul className="comment-list">
          {comments.map((c) => (
            <li key={c._id} className="comment-item">
              <div className="comment-rate">⭐ {c.rate}/5</div>
              <p className="comment-text">{c.comment}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Form per nuovo commento */}
      <form onSubmit={handleSubmit} className="comment-form">
        <h3 className="comment-form-title">Lascia un commento</h3>

        <div className="comment-form-row">
          <label htmlFor="rate">Voto:</label>
          <select
            id="rate"
            value={newRate}
            onChange={(e) => setNewRate(e.target.value)}
            disabled={submitting}
          >
            <option value="1">1 ⭐</option>
            <option value="2">2 ⭐</option>
            <option value="3">3 ⭐</option>
            <option value="4">4 ⭐</option>
            <option value="5">5 ⭐</option>
          </select>
        </div>

        <textarea
          className="comment-textarea"
          placeholder="Scrivi il tuo commento..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          disabled={submitting}
          rows={4}
        />

        {formError && <p className="comment-form-error">{formError}</p>}

        <button
          type="submit"
          className="comment-submit-btn"
          disabled={submitting}
        >
          {submitting ? 'Invio...' : 'Pubblica commento'}
        </button>
      </form>
    </div>
  )
}

export default CommentSection
