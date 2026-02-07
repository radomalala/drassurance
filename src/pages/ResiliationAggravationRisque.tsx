import React from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle, Phone } from 'lucide-react'

export default function ResiliationAggravationRisque(){
  useMeta('Assurance Auto Après Aggravation du Risque - PREVO', 'Résilié suite à une aggravation du risque ? Changement d\'utilisation du véhicule ? PREVO vous assure en 15 minutes.')

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <a href="/motifs-resiliation" className="text-urgent-red hover:underline mb-4 inline-block">← Retour aux motifs de résiliation</a>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Assurance Auto après<br />
            <span className="text-urgent-red">Aggravation du Risque</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Changement d'utilisation du véhicule ou de situation ? Votre assureur vous résilie pour aggravation du risque ? PREVO a une solution.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-urgent-red rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Aggravation du Risque : Comprendre</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            L'aggravation du risque survient lorsque votre situation change de manière à augmenter le risque assurantiel :
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span>Changement de profession (commercial, chauffeur)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span>Augmentation kilométrage annuel</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span>Utilisation du véhicule à titre professionnel</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span>Ajout de conducteur à risque</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 border-2 border-urgent-red mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Pourquoi PREVO Peut Vous Assurer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Flexibilité d'utilisation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous acceptons les changements d'utilisation et les profils professionnels.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Tarifs adaptés
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous évaluons juste votre risque réel sans surcoût excessif.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Continuité assurance
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous vous assurons même si vous êtes rejeté ailleurs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Réactivité
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Devis et couverture en 15 minutes maximum.
              </p>
            </div>
          </div>
        </div>

        <div id="formulaire" className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Devis Express</h2>
            <p className="text-gray-600 dark:text-gray-400">Aggravation du risque ? Nous vous trouvons une assurance adaptée.</p>
          </div>
          <div className="hs-form-frame" data-region="eu1" data-form-id="ae783fe2-6128-4eb3-8714-26a5aafc84b4" data-portal-id="146017876"></div>
        </div>
      </div>
    </div>
  )
}
