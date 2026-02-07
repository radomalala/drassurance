import React from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle, Phone } from 'lucide-react'

export default function ResiliationNonPaiement() {
  const faqItems = [
    {
      q: "Pourquoi mon assurance m'a résilié pour non-paiement ?",
      a: "L'assureur peut résilier le contrat après un retard de paiement, généralement après une ou plusieurs relances non respectées. C'est une protection pour l'assureur."
    },
    {
      q: "Est-il possible d'être assuré après un impayé ?",
      a: "Oui ! Chez PREVO, nous travaillons avec des partenaires spécialisés qui acceptent les profils avec impayés. C'est même notre spécialité."
    },
    {
      q: "Vais-je payer plus cher après une résiliation pour non-paiement ?",
      a: "Oui, généralement. Mais PREVO négocie activement pour vous obtenir les meilleurs tarifs possibles en fonction de votre situation."
    },
    {
      q: "Combien de temps reste une résiliation pour non-paiement dans mes dossiers ?",
      a: "Environ 3-5 ans. PREVO vous accompagne pour améliorer progressivement votre profil auprès des assureurs."
    },
    {
      q: "Puis-je conduire sans assurance en attendant une proposition ?",
      a: "Non, c'est illégal et très dangereux. PREVO vous propose une assurance rapidement, souvent sous 15 minutes."
    },
    {
      q: "Comment éviter une prochaine résiliation ?",
      a: "Nous mettons en place un système de paiement régulier et vous suivons pour garantir la continuité de votre contrat."
    },
  ]

  useMeta('Assurance Auto Après Résiliation pour Non-Paiement - PREVO', 'Résilié pour impayé ? Trouvez une assurance auto avec PREVO. Devis gratuit sous 15 minutes. Nous assurons les conducteurs refusés ailleurs.')

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-16">
          <a href="/motifs-resiliation" className="text-urgent-red hover:underline mb-4 inline-block">← Retour aux motifs de résiliation</a>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Assurance Auto après Résiliation<br />
            <span className="text-urgent-red">pour Non-Paiement</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Vous avez été résilié par votre assureur à cause d'un retard ou d'un non-paiement de primes ? PREVO vous propose une solution rapide et adaptée.
          </p>
        </div>

        {/* Section explicative */}
        <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-urgent-red rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Comprendre la Résiliation pour Non-Paiement</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            La résiliation pour non-paiement est l'une des raisons les plus fréquentes de fin de contrat. Elle intervient lorsque l'assuré ne paie pas ses primes dans les délais convenus, généralement après :
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">1.</span>
              <span>Une relance amiable (simple rappel)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">2.</span>
              <span>Une mise en demeure officielle (30 jours de délai)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">3.</span>
              <span>La résiliation automatique du contrat</span>
            </li>
          </ul>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
            Important : Vous êtes alors sans couverture d'assurance et ne pouvez pas circuler légalement.
          </p>
        </div>

        {/* Pourquoi PREVO */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 border-2 border-urgent-red mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Pourquoi PREVO Peut Vous Assurer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Acceptation immédiate
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nos partenaires acceptent les dossiers avec non-paiement antérieur. Pas de refus, pas de jugement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Réponse en 15 minutes
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous évaluons votre situation rapidement et vous proposons une couverture adaptée.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Accompagnement complet
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous vous aidons à mettre en place un système de paiement régulier pour éviter une nouvelle résiliation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Tarifs négociés
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous négocions activement pour vous obtenir les meilleurs tarifs possibles selon votre profil.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Questions Fréquemment Posées</h2>
          <div className="space-y-6">
            {faqItems.map((item, idx) => (
              <details key={idx} className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 cursor-pointer group">
                <summary className="text-lg font-bold text-gray-900 dark:text-white flex items-center justify-between">
                  {item.q}
                  <span className="text-urgent-red ml-2">+</span>
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        <div id="formulaire" className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Devis Express</h2>
            <p className="text-gray-600 dark:text-gray-400">Résilié pour non-paiement ? Nous avons une solution pour vous.</p>
          </div>
          <div className="hs-form-frame" data-region="eu1" data-form-id="ae783fe2-6128-4eb3-8714-26a5aafc84b4" data-portal-id="146017876"></div>
        </div>
      </div>
    </div>
  )
}
