import React from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle, Phone } from 'lucide-react'

export default function ResiliationNonRespectClauses(){
  useMeta('Assurance Auto Après Non-Respect des Clauses - PREVO', 'Résilié pour non-respect des clauses du contrat ? PREVO vous propose une nouvelle assurance rapidement et sans complications.')

  return (
    <div className="py-16 px-4">
      {useMeta('Assurance Auto Après Non-Respect des Clauses - PREVO', 'Résilié pour non-respect des clauses du contrat ? PREVO vous propose une nouvelle assurance rapidement et sans complications.')}
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <a href="/motifs-resiliation" className="text-urgent-red hover:underline mb-4 inline-block">← Retour aux motifs de résiliation</a>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Assurance Auto après<br />
            <span className="text-urgent-red">Non-Respect des Clauses</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Votre assurance vous a résilié pour non-respect des conditions du contrat ? PREVO trouve une solution adaptée.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-urgent-red rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Non-Respect des Clauses : Comprendre</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Le non-respect des clauses du contrat peut justifier une résiliation. Exemples courants :
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span>Non-entretien du véhicule (révisions obligatoires)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span>Utilisation du véhicule autrement que spécifié</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span>Défaut de déclaration de sinistre</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span>Stationnement en zone dangereuse régulière</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 border-2 border-urgent-red mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Pourquoi PREVO Peut Vous Assurer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Écoute active
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous comprenons les circonstances et trouvons des solutions justes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Flexibilité
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nos partenaires acceptent les situations complexes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Couverture juste
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Assurance adaptée à votre véritable besoin.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Respect des conditions
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous clarifions les clauses pour éviter de futurs problèmes.
              </p>
            </div>
          </div>
        </div>

        <div id="formulaire" className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Devis Express</h2>
            <p className="text-gray-600 dark:text-gray-400">Non-respect de clauses ? Nous clarifions et nous assurons.</p>
          </div>
          <div className="hs-form-frame" data-region="eu1" data-form-id="ae783fe2-6128-4eb3-8714-26a5aafc84b4" data-portal-id="146017876"></div>
        </div>
      </div>
    </div>
  )
}
