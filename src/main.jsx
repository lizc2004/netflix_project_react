// main.jsx — punto d'ingresso di tutta l'applicazione.
// Qui React si "aggancia" al div#root di index.html.
//
// IMPORTANTE: avvolgo <App /> dentro <BrowserRouter> di react-router-dom.
// Questo abilita il routing client-side per tutti i componenti annidati:
// senza questo wrapper, i <Link> e i <Routes> dentro App non funzionerebbero.
// BrowserRouter usa la History API del browser, quindi gli URL sono "veri"
// (es. /profile, /settings) e i bottoni avanti/indietro funzionano.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
