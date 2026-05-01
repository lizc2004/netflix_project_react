// App.jsx — il componente principale dell'applicazione.
// Importiamo i componenti dalla cartella components/ e li usiamo
// come se fossero tag HTML personalizzati.

import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Qui sotto andranno gli altri componenti:
          - Hero (la sezione grande)
          - MovieGallery x 3 (Harry Potter, LOTR, Star Wars)
          - Footer */}
      <p style={{ color: 'white', textAlign: 'center', padding: '40px' }}>
        Sotto la navbar andranno gli altri componenti...
      </p>
    </div>
  )
}

export default App
