// App.jsx — il componente principale dell'applicazione.
// Importa i componenti dalla cartella components/ e li dispone
// nell'ordine in cui devono apparire nella pagina.

import Navbar from './components/Navbar'
import FilterSection from './components/FilterSection'
import Hero from './components/Hero'

function App() {
  return (
    <div className="App">
      <Navbar />
      <FilterSection />
      <Hero />

      {/* TODO: qui andranno le 3 MovieGallery e il Footer */}
    </div>
  )
}

export default App
