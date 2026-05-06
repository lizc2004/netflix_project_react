// App.jsx — il componente principale dell'applicazione.
// Si occupa di orchestrare le rotte: Navbar e Footer sono sempre visibili,
// mentre il contenuto centrale cambia in base all'URL grazie a <Routes>.

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import MovieDetail from './pages/MovieDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Routes> abbina l'URL corrente del browser a uno dei <Route>.
          Solo UN componente viene renderizzato alla volta.
          La route con path="*" è il "catch-all": cattura qualunque URL
          che non corrisponda a nessuna delle altre route precedenti
          (es. /banana, /qualunque-cosa) e mostra la pagina NotFound. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
