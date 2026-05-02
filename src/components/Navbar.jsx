// Navbar.jsx — la barra di navigazione in alto.
// I link che navigano internamente usano <Link to="..."> di react-router-dom,
// così cambiare pagina NON ricarica il browser (vera SPA).
// I link "fittizi" (Movies, Recently Added, My List) restano <a href="#">
// perché non puntano a nessuna pagina vera nel nostro progetto.

import { Link } from 'react-router-dom'

function Navbar() {
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
            <Link to="/" className="nav-link">Home</Link>
            <a href="#" className="nav-link active">TV Shows</a>
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
