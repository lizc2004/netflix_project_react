// ErrorMessage.jsx — mostra un messaggio quando il fetch fallisce.
// Riceve una prop "message" per personalizzare il testo dell'errore.

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <p>⚠️ Ops! {message}</p>
    </div>
  )
}

export default ErrorMessage
