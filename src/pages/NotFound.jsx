// NotFound.jsx — pagina 404 mostrata quando l'utente naviga su un URL
// non gestito da nessuna delle nostre Route.
// Si attiva grazie alla route catch-all path="*" definita in App.jsx.

import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found-code">404</h1>
      <h2 className="not-found-title">Lost your way?</h2>
      <p className="not-found-message">
        Sorry, we can't find that page. You'll find lots to explore on the home page.
      </p>
      <Link to="/" className="not-found-btn">Netflix Home</Link>
      <p className="not-found-error-code">Error Code: NSES-404</p>
    </div>
  )
}

export default NotFound
