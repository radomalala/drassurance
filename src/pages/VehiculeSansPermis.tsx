import React from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle, Phone } from 'lucide-react'

export default function VehiculeSansPermis() {
  return (
    <div className="py-16 px-4">
      {useMeta('Assurance Véhicule Sans Permis (VSP) - PREVO', 'Assurance VSP et quadricycle électrique. Résilié, malussé ? PREVO assure rapidement même sans permis de conduire valide.')}
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <a href="/types-vehicules" className="text-urgent-red hover:underline mb-4 inline-block">← Retour aux types de véhicules</a>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Assurance Véhicule<br />
            <span className="text-urgent-red">Sans Permis</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Assurance complète pour VSP et quadricycles électriques. Résilié, malussé, sans permis ? PREVO vous assure.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-slate-800 border-l-4 border-urgent-red rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Spécificités des VSP</h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Aucun permis voiture requis</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Vitesse limitée</strong> (45 km/h généralement)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Assurance obligatoire</strong> comme voiture classique</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Usage urbain principal</strong></span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 border-2 border-urgent-red mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">PREVO pour les VSP</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Même sans permis valide ou avec un permis retiré, vous pouvez conduire légalement un VSP et être assuré chez PREVO.
          </p>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Acceptation sans permis</strong> pour VSP</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Couverture complète</strong> responsabilité civile + dommages</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Tarifs accessibles</strong> pour ce type de véhicule</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Réponse rapide</strong> en 15 minutes</span>
            </li>
          </ul>
        </div>

        <div id="formulaire" className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Devis Express - VSP</h2>
            <p className="text-gray-600 dark:text-gray-400">Assurance adaptée à votre véhicule sans permis.</p>
          </div>
          <div className="hs-form-frame" data-region="eu1" data-form-id="ae783fe2-6128-4eb3-8714-26a5aafc84b4" data-portal-id="146017876"></div>
        </div>
      </div>
    </div>
  )
}
