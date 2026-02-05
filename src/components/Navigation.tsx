import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navigation(){
  const [mobileOpen, setMobileOpen] = useState(false)
  const [motifOpen, setMotifOpen] = useState(false)

  const linkCls = ({ isActive }: {isActive:boolean}) =>
    `hover:text-urgent-red ${isActive ? 'text-urgent-red' : 'text-gray-700'}`

  const motifs = [
    { label: 'Non-paiement des primes', path: '/resiliation/non-paiement' },
    { label: 'Retrait/Suspension de permis', path: '/resiliation/retrait-suspension' },
    { label: 'Sinistres répétitifs', path: '/resiliation/sinistres-repetitifs' },
    { label: 'Aggravation du risque', path: '/resiliation/aggravation-risque' },
    { label: 'Fausse déclaration', path: '/resiliation/fausse-declaration' },
    { label: 'Non-respect des clauses', path: '/resiliation/non-respect-clauses' },
  ]

  return (
    <>
      <div className="bg-urgent-red text-white py-2 px-4 text-center font-bold text-sm">
        🚨 URGENCE RÉSILIATION ? Réponse sous 5mn • Tél: +33 7 53 31 90 64
      </div>

      <nav aria-label="Navigation principale" className="bg-white dark:bg-slate-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/mockups/icone_logo.PNG" alt="La Clinique des Assurances Résiliés" className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">LA CLINIQUE</h1>
              <p className="text-xs text-gray-600 dark:text-gray-300">des Résiliés</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/" className={linkCls}>Accueil</NavLink>
            <NavLink to="/urgence-resiliation" className={linkCls}>Urgences</NavLink>
            
            {/* Accordéon Motifs de résiliation */}
            <div className="relative group">
              <button className="hover:text-urgent-red text-gray-700 flex items-center gap-1 py-2">
                Motifs de résiliation
                <ChevronDown size={16} className="group-hover:rotate-180 transition" />
              </button>
              <div className="absolute left-0 mt-0 hidden group-hover:block bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg z-50 min-w-max">
                {motifs.map((motif) => (
                  <NavLink
                    key={motif.path}
                    to={motif.path}
                    className="block px-4 py-3 hover:bg-urgent-red hover:text-white text-gray-700 dark:text-gray-300 dark:hover:text-white first:rounded-t-lg last:rounded-b-lg whitespace-nowrap"
                  >
                    {motif.label}
                  </NavLink>
                ))}
              </div>
            </div>
            
            <NavLink to="/types-vehicules" className={linkCls}>Types de véhicules</NavLink>
            <NavLink to="/programme" className={linkCls}>Programme</NavLink>
            <NavLink to="/blog" className={linkCls}>Blog</NavLink>
            <NavLink to="/faq" className={linkCls}>FAQ</NavLink>
            <NavLink to="/apropos" className={linkCls}>À propos</NavLink>
            <NavLink to="/contact" className={linkCls}>Contact</NavLink>
            <div className="pl-4 ml-2 border-l border-gray-200 dark:border-slate-700">
              <ThemeToggle />
            </div>
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
            <div className="flex flex-col py-4 px-4 gap-2">
              <NavLink onClick={()=>setMobileOpen(false)} to="/" className="text-left py-2 hover:text-urgent-red">Accueil</NavLink>
              <NavLink onClick={()=>setMobileOpen(false)} to="/urgence-resiliation" className="text-left py-2 hover:text-urgent-red">Urgences</NavLink>
              
              {/* Accordéon mobile Motifs */}
              <div className="border-t border-gray-200 dark:border-slate-700 pt-2 mt-2">
                <button
                  onClick={() => setMotifOpen(!motifOpen)}
                  className="w-full text-left py-2 hover:text-urgent-red flex items-center justify-between"
                >
                  <span>Motifs de résiliation</span>
                  <ChevronDown size={16} className={`transition ${motifOpen ? 'rotate-180' : ''}`} />
                </button>
                {motifOpen && (
                  <div className="bg-gray-50 dark:bg-slate-800 rounded-lg mt-2 ml-4">
                    {motifs.map((motif) => (
                      <NavLink
                        key={motif.path}
                        onClick={()=>{setMobileOpen(false); setMotifOpen(false)}}
                        to={motif.path}
                        className="block px-4 py-2 hover:bg-urgent-red hover:text-white text-gray-700 dark:text-gray-300 dark:hover:text-white text-sm"
                      >
                        {motif.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
              
              <NavLink onClick={()=>setMobileOpen(false)} to="/types-vehicules" className="text-left py-2 hover:text-urgent-red">Types de véhicules</NavLink>
              <NavLink onClick={()=>setMobileOpen(false)} to="/programme" className="text-left py-2 hover:text-urgent-red">Programme</NavLink>
              <NavLink onClick={()=>setMobileOpen(false)} to="/blog" className="text-left py-2 hover:text-urgent-red">Blog</NavLink>
              <NavLink onClick={()=>setMobileOpen(false)} to="/faq" className="text-left py-2 hover:text-urgent-red">FAQ</NavLink>
              <NavLink onClick={()=>setMobileOpen(false)} to="/apropos" className="text-left py-2 hover:text-urgent-red">À propos</NavLink>
              <NavLink onClick={()=>setMobileOpen(false)} to="/contact" className="text-left py-2 hover:text-urgent-red">Contact</NavLink>
              <div className="pt-2 border-t border-gray-200 dark:border-slate-700">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
      <div aria-label="Bandeau d'accroche" className="bg-gradient-to-r from-urgent-red/10 to-orange-100 dark:from-slate-900 dark:to-slate-900 border-y border-red-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 text-center md:text-left">
            Assurance résilié dès <span className="font-bold text-urgent-red">16&nbsp;€/mois*</span> • Devis en 5&nbsp;min
          </p>
          <a href="/#formulaire" className="inline-flex items-center justify-center bg-urgent-red text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition">
            Demander un devis rapide
          </a>
        </div>
      </div>
    </>
  )
}
