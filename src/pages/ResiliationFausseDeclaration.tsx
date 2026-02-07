import React from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle, Phone } from 'lucide-react'

export default function ResiliationFausseDeclaration() {
  return (
    <div className="py-16 px-4">
      {useMeta('Assurance Auto Après Fausse Déclaration ou Omission - PREVO', 'Résilié pour fausse déclaration ? Information cachée découverte ? PREVO vous assure rapidement sans jugement.')}
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <a href="/motifs-resiliation" className="text-urgent-red hover:underline mb-4 inline-block">← Retour aux motifs de résiliation</a>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Assurance Auto après<br />
            <span className="text-urgent-red">Fausse Déclaration</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Résilié pour fausse déclaration ou omission ? PREVO vous propose une assurance même avec ce type d'antécédent.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-urgent-red rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Fausse Déclaration : Comprendre</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            La fausse déclaration ou omission intervient lorsque l'assuré n'a pas fourni d'informations exactes ou a volontairement caché des informations importantes.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Exemples :</strong> usage réel non déclaré, conducteur habitual caché, sinistre antérieur oublié, etc.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 border-2 border-urgent-red mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Pourquoi PREVO Peut Vous Assurer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Pas de jugement moral
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Erreurs humaines arrivent. Nous cherchons à assurer, pas à condamner.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Examen complet
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous réévaluons votre profil avec les bonnes informations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Couverture juste
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Tarif adapté à votre vrai profil de risque.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Réponse rapide
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous évaluons rapidement votre situation.
              </p>
            </div>
          </div>
        </div>

        <div id="formulaire" className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Devis Express</h2>
            <p className="text-gray-600 dark:text-gray-400">Fausse déclaration découverte ? Parlons-en sans tabou.</p>
          </div>
          <div className="hs-form-frame" data-region="eu1" data-form-id="ae783fe2-6128-4eb3-8714-26a5aafc84b4" data-portal-id="146017876"></div>
        </div>
      </div>
    </div>
  )
}
