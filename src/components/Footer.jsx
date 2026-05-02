// Footer.jsx — il piè di pagina di Netflix.
// Componente statico: solo struttura, niente stato.
// Contiene: icone social, 4 colonne di link, pulsante Service Code, copyright.

function Footer() {
  return (
    <footer className="footer">
      {/* Icone social network */}
      <div className="footer-social">
        <span className="social-icon">
          <img src="/Netflix-assets/assets/facebook_logo.png" alt="facebook" />
        </span>
        <span className="social-icon">
          <img src="/Netflix-assets/assets/instagram_logo.png" alt="instagram" />
        </span>
        <span className="social-icon">
          <img src="/Netflix-assets/assets/x_logo.png" alt="x" />
        </span>
        <span className="social-icon">
          <img src="/Netflix-assets/assets/youtube_logo.png" alt="youtube" />
        </span>
      </div>

      {/* Quattro colonne di link */}
      <div className="footer-links">
        <div className="footer-col">
          <a href="#">Audio and Subtitles</a>
          <a href="#">Media Center</a>
          <a href="#">Privacy</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-col">
          <a href="#">Audio Description</a>
          <a href="#">Investor Relations</a>
          <a href="#">Legal Notices</a>
        </div>
        <div className="footer-col">
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie Preferences</a>
        </div>
        <div className="footer-col">
          <a href="#">Gift Cards</a>
          <a href="#">Terms of Use</a>
          <a href="#">Corporate Information</a>
        </div>
      </div>

      <button className="btn-service-code">Service Code</button>
      <p className="footer-copy">&copy; 1997-2026 Netflix, Inc.</p>
    </footer>
  )
}

export default Footer
