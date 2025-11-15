import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Navigation(){
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkCls = ({ isActive }: {isActive:boolean}) =>
    `hover:text-urgent-red ${isActive ? 'text-urgent-red' : 'text-gray-700'}`

  return (
    <>
      <div className="bg-urgent-red text-white py-2 px-4 text-center font-bold text-sm">
        🚨 URGENCE RÉSILIATION ? Réponse sous 2h • Tél: 01 XX XX XX XX
      </div>

      <nav className="bg-white dark:bg-slate-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="La Clinique des Résiliés" className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">LA CLINIQUE</h1>
              <p className="text-xs text-gray-600 dark:text-gray-300">des Résiliés</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink to="/" className={linkCls}>Accueil</NavLink>
            <NavLink to="/urgence-resiliation" className={linkCls}>Urgences</NavLink>
            <NavLink to="/programme" className={linkCls}>Programme</NavLink>
            <NavLink to="/temoignages" className={linkCls}>Témoignages</NavLink>
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
            <div className="flex flex-col py-4 px-4 gap-4">
              <NavLink onClick={()=>setMobileOpen(false)} to="/" className="text-left py-2 hover:text-urgent-red">Accueil</NavLink>
              <NavLink onClick={()=>setMobileOpen(false)} to="/urgence-resiliation" className="text-left py-2 hover:text-urgent-red">Urgences</NavLink>
              <NavLink onClick={()=>setMobileOpen(false)} to="/programme" className="text-left py-2 hover:text-urgent-red">Programme</NavLink>
              <NavLink onClick={()=>setMobileOpen(false)} to="/temoignages" className="text-left py-2 hover:text-urgent-red">Témoignages</NavLink>
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
    </>
  )
}
