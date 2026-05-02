// App.jsx — il componente principale dell'applicazione.
// Si occupa di orchestrare le rotte: Navbar e Footer sono sempre visibili,
// mentre il contenuto centrale cambia in base all'URL grazie a <Routes>.

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Routes> abbina l'URL corrente del browser a uno dei <Route>.
          Solo UN componente viene renderizzato alla volta. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
