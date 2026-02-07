import React from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle, Phone } from 'lucide-react'

export default function TaxiVTC(){
  useMeta('Assurance Taxi & VTC Professionnel - PREVO', 'Assurance taxi et VTC avec risques aggravés. Résilié, malussé ? PREVO assure les chauffeurs professionnels en 15 minutes.')

  return (
    <div className="py-16 px-4">
      {useMeta('Assurance Taxi & VTC Professionnel - PREVO', 'Assurance taxi et VTC avec risques aggravés. Résilié, malussé ? PREVO assure les chauffeurs professionnels en 15 minutes.')}
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <a href="/types-vehicules" className="text-urgent-red hover:underline mb-4 inline-block">← Retour aux types de véhicules</a>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Assurance Taxi & VTC<br />
            <span className="text-urgent-red">Professionnel</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Assurance spécialisée pour chauffeurs de taxi et VTC. Résilié, malussé ? PREVO comprend votre activité professionnelle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-purple-50 dark:bg-slate-800 border-l-4 border-urgent-red rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Spécificités de Votre Métier</h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Usage intensif</strong> du véhicule</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Kilométrage important</strong> annuel</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Statut de chauffeur professionnel</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Clientèle diverse</strong> à bord</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 border-urgent-red">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Notre Expertise Taxi/VTC</h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Couverture professionnelle complète</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Acceptation chauffeurs malussés</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Tarifs compétitifs</strong> pour l'usage intensif</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Assistance 24/7</strong> important pour vous</span>
              </li>
            </ul>
          </div>
        </div>

        <div id="formulaire" className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Devis Express - Taxi & VTC</h2>
            <p className="text-gray-600 dark:text-gray-400">Assurance professionnelle adaptée à votre activité de chauffeur.</p>
          </div>
          <div className="hs-form-frame" data-region="eu1" data-form-id="ae783fe2-6128-4eb3-8714-26a5aafc84b4" data-portal-id="146017876"></div>
        </div>
      </div>
    </div>
  )
}
