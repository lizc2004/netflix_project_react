// Hero.jsx — la sezione "vetrina" con immagine grande, titolo e bottone Play.
// Componente statico (per ora): nessuno stato, solo struttura.

function Hero() {
  return (
    <section className="hero">
      <img
        src="/Netflix-assets/assets/media/Bridgerton_.png"
        alt="Bridgerton"
        className="hero-bg"
      />
      <div className="hero-content">
        <h1>Bridgerton</h1>
        <p>
          Regency romance, scandal, and irresistible secrets in London's high
          society. A dazzling mix of passion, gossip, and drama.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-play">▶ Play</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
