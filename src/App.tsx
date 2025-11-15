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

export default function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/urgence-resiliation" element={<Urgence />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/temoignages" element={<Temoignages />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
