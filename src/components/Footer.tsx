import React from 'react'
import { Phone, Mail, Clock } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-urgent-red rounded-full flex items-center justify-center">
                <span className="font-bold">+</span>
              </div>
              <span className="font-bold">La Clinique des Assurances Résiliés</span>
            </div>
            <p className="text-gray-400 text-sm">
              Le seul cabinet d assurance dédié à la réhabilitation des profils difficiles
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="/" className="hover:text-white">Accueil</a>
              <a href="/programme" className="hover:text-white">Notre Programme</a>
              <a href="/temoignages" className="hover:text-white">Témoignages</a>
              <a href="/faq" className="hover:text-white">FAQ</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+33 7 53 31 90 64</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>sine.sow@prevo.fr</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Lun-Ven: 9h-19h | Sam: 9h-13h</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Légal</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Mentions légales</a>
              <a href="#" className="hover:text-white">Politique de confidentialité</a>
              <a href="#" className="hover:text-white">CGU</a>
              <a href="#" className="hover:text-white">Gestion des cookies</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © 2024 La Clinique des Assurances Résiliés. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
