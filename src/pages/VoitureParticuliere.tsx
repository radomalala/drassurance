import React from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle, Phone, Car } from 'lucide-react'

export default function VoitureParticuliere(){

  return (
    <div className="py-16 px-4">
      {useMeta('Assurance Voiture Particulière - Résilié, Malussé - PREVO', 'Assurance voiture particulière (citadine, berline, SUV). Résilié ou malussé ? PREVO vous assure rapidement mieux et moins cher.')}
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <a href="/types-vehicules" className="text-urgent-red hover:underline mb-4 inline-block">← Retour aux types de véhicules</a>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Assurance Voiture<br />
            <span className="text-urgent-red">Particulière</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Citadine, berline, SUV... Résilié, malussé, refusé ? PREVO assure tous les profils, même les plus complexes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-urgent-red rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Car className="text-urgent-red" size={28} />
              Votre Profil de Conducteur
            </h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Conducteur résilie</strong> - Ancien client d'un autre assureur</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Malussé</strong> - Accumulation de points perdus</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Refusé ailleurs</strong> - Rejeté par assureurs classiques</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Jeune conducteur</strong> - Avec antécédents</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 border-urgent-red">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pourquoi Choisir PREVO</h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Acceptation garantie</strong> pour tous les profils</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Tarifs compétitifs</strong> grâce aux partenariats</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Couverture adaptée</strong> à votre besoin réel</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Accompagnement complet</strong> année après année</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-urgent-red mb-2">15 min</div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Devis & réponse</p>
          </div>
          <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-urgent-red mb-2">100%</div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Acceptation</p>
          </div>
          <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-urgent-red mb-2">-40%</div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Tarifs moyens</p>
          </div>
        </div>

        <div id="formulaire" className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Devis Express - Voiture Particulière</h2>
            <p className="text-gray-600 dark:text-gray-400">Assurance auto adaptée à votre profil et votre budget.</p>
          </div>
          <div className="hs-form-frame" data-region="eu1" data-form-id="ae783fe2-6128-4eb3-8714-26a5aafc84b4" data-portal-id="146017876"></div>
        </div>
      </div>
    </div>
  )
}
