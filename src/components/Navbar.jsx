// Navbar.jsx — la barra di navigazione in alto.
// I link che navigano internamente usano <Link to="..."> di react-router-dom,
// così cambiare pagina NON ricarica il browser (vera SPA).
//
// useLocation() ci dà accesso all'oggetto location del router, da cui leggiamo
// pathname (l'URL corrente). Lo usiamo per applicare la classe "active" al link
// che corrisponde alla pagina corrente, in modo dinamico.

import { Link, useLocation } from 'react-router-dom'

function Navbar() {

  // Leggo l'URL corrente. location.pathname sarà "/", "/profile", "/settings", ecc.
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <header className="navbar" id="main-navbar">
      <div className="navbar-container">
        {/* Lato sinistro: logo + link di navigazione */}
        <div className="navbar-left">
          {/* Il logo riporta alla home */}
          <Link to="/">
            <img
              src="/Netflix-assets/assets/netflix_logo.png"
              alt="Netflix logo"
              className="logo"
            />
          </Link>
          <nav className="nav-menu" id="nav-links">
            {/* La classe "active" viene applicata dinamicamente confrontando
                il pathname corrente con la destinazione del link. */}
            <Link
              to="/"
              className={currentPath === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
            <a href="#" className="nav-link">TV Shows</a>
            <a href="#" className="nav-link">Movies</a>
            <a href="#" className="nav-link">Recently Added</a>
            <a href="#" className="nav-link">My List</a>
          </nav>
        </div>

        {/* Lato destro: icone + avatar profilo */}
        <div className="navbar-right" id="nav-right">
          <span className="nav-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <img
            src="/Netflix-assets/assets/kids_icon.png"
            alt="KIDS"
            className="nav-kids-img"
          />
          <span className="nav-icon">
            <i className="fa-solid fa-bell"></i>
          </span>
          <div className="nav-profile">
            <img
              src="/Netflix-assets/assets/avatar.png"
              alt="Profile"
              className="profile-avatar"
            />
            <span className="profile-arrow">&#9662;</span>
            <div className="profile-dropdown">
              <Link to="/profile">Edit Profile</Link>
              <Link to="/settings">Account</Link>
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
