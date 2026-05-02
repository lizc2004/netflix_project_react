// Loader.jsx — mostra un messaggio mentre i dati stanno caricando.
// Sfrutto le classi del Bootstrap già caricato per avere uno spinner pronto.

function Loader() {
  return (
    <div className="loader">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loader
