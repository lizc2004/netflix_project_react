// Navbar.jsx — la barra di navigazione in alto
// È un componente "statico": non ha stati interni, solo struttura.

function Navbar() {
  return (
    <header className="navbar" id="main-navbar">
      <div className="navbar-container">
        {/* Lato sinistro: logo + link di navigazione */}
        <div className="navbar-left">
          <img
            src="/Netflix-assets/assets/netflix_logo.png"
            alt="Netflix logo"
            className="logo"
          />
          <nav className="nav-menu" id="nav-links">
            <a href="#" className="nav-link">Home</a>
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
              <a href="#">Edit Profile</a>
              <a href="#">Account</a>
              <a href="#">Home</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
