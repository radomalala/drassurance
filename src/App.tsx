import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Urgence from './pages/Urgence'
import Programme from './pages/Programme'
import Temoignages from './pages/Temoignages'
import FAQ from './pages/FAQ'
import APropos from './pages/APropos'
import Contact from './pages/Contact'
import TypesResiliation from './pages/TypesResiliation'

export default function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
        <Navigation />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-urgent-red text-white px-4 py-2 rounded z-50">Aller au contenu principal</a>
        <main id="main-content" className="flex-1" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/urgence-resiliation" element={<Urgence />} />
            <Route path="/types-resiliation" element={<TypesResiliation />} />
            <Route path="/programme" element={<Programme />} />
            <Route path="/temoignages" element={<Temoignages />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/apropos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
