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
import MotifsResiliation from './pages/MotifsResiliation'
import ResiliationNonPaiement from './pages/ResiliationNonPaiement'
import ResiliationRetraitSuspension from './pages/ResiliationRetraitSuspension'
import ResiliationSinistres from './pages/ResiliationSinistres'
import ResiliationAggravationRisque from './pages/ResiliationAggravationRisque'
import ResiliationFausseDeclaration from './pages/ResiliationFausseDeclaration'
import ResiliationNonRespectClauses from './pages/ResiliationNonRespectClauses'
import TypesVehicules from './pages/TypesVehicules'
import VoitureParticuliere from './pages/VoitureParticuliere'
import TaxiVTC from './pages/TaxiVTC'
import VehiculeSansPermis from './pages/VehiculeSansPermis'

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
            <Route path="/motifs-resiliation" element={<MotifsResiliation />} />
            <Route path="/resiliation/non-paiement" element={<ResiliationNonPaiement />} />
            <Route path="/resiliation/retrait-suspension" element={<ResiliationRetraitSuspension />} />
            <Route path="/resiliation/sinistres-repetitifs" element={<ResiliationSinistres />} />
            <Route path="/resiliation/aggravation-risque" element={<ResiliationAggravationRisque />} />
            <Route path="/resiliation/fausse-declaration" element={<ResiliationFausseDeclaration />} />
            <Route path="/resiliation/non-respect-clauses" element={<ResiliationNonRespectClauses />} />
            <Route path="/types-vehicules" element={<TypesVehicules />} />
            <Route path="/vehicules/voiture" element={<VoitureParticuliere />} />
            <Route path="/vehicules/taxi-vtc" element={<TaxiVTC />} />
            <Route path="/vehicules/vehicule-sans-permis" element={<VehiculeSansPermis />} />
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
