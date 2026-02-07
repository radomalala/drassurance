import React from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle, Phone } from 'lucide-react'

export default function ResiliationRetraitSuspension(){
  const faqItems = [
    {
      q: "Pourquoi mon assurance me résilie après un retrait de permis ?",
      a: "L'assureur peut résilier suite à un retrait de permis car le profil de risque change considérablement. C'est une clause standard des contrats d'assurance."
    },
    {
      q: "Puis-je conduire sans permis ?",
      a: "Non, c'est illégal. Cependant, si vous avez encore le permis malgré les points retirés, vous pouvez conduire légalement et être assuré. PREVO accepte ces profils."
    },
    {
      q: "Et si mon permis est retiré complètement ?",
      a: "Vous ne pouvez pas conduire légalement. Une fois votre permis restitué, PREVO vous propose rapidement une assurance adaptée."
    },
    {
      q: "L'alcoolémie impacte-t-elle mon assurance pour toujours ?",
      a: "L'impact dépend de la gravité et du temps écoulé. PREVO négocie activement avec ses partenaires pour trouver une solution adaptée."
    },
    {
      q: "Comment éviter une résiliation suite à une infraction ?",
      a: "Respectez le code de la route et déclarez toute infraction à votre assureur. PREVO vous aide à maintenir votre couverture malgré les antécédents."
    },
    {
      q: "Y a-t-il des assureurs spécialisés pour les profils avec retrait ?",
      a: "Oui, et nous les connaissons tous ! PREVO travaille avec les meilleures compagnies spécialisées."
    },
  ]

  return (
    <div className="py-16 px-4">
      {useMeta('Assurance Auto Après Retrait ou Suspension de Permis - PREVO', 'Résilié suite à un retrait de permis ? Alcoolémie, excès de vitesse, stupéfiants ? Trouvez une assurance avec PREVO en 15 minutes.')}
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-16">
          <a href="/motifs-resiliation" className="text-urgent-red hover:underline mb-4 inline-block">← Retour aux motifs de résiliation</a>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Assurance Auto après Retrait<br />
            <span className="text-urgent-red">ou Suspension de Permis</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Alcoolémie, excès de vitesse, stupéfiants, retrait de permis... Votre assurance vous a résilié ? PREVO vous propose une solution adaptée.
          </p>
        </div>

        {/* Section explicative */}
        <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-urgent-red rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Retrait et Suspension de Permis : Comprendre la Situation</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Une résiliation suite à un retrait ou une suspension de permis est une décision courante des assureurs. Les motifs incluent :
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span><strong>Alcoolémie</strong> - Conduite en état d'ivresse</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span><strong>Excès de vitesse</strong> - Infractions graves ou répétées</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span><strong>Stupéfiants</strong> - Conduite sous l'influence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span><strong>Perte de points</strong> - Solde de permis épuisé</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span><strong>Suspension administrative</strong> - Retrait temporaire</span>
            </li>
          </ul>
        </div>

        {/* Pourquoi PREVO */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 border-2 border-urgent-red mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Pourquoi PREVO Peut Vous Assurer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Pas de jugement
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous comprenons que les infractions arrivent. Notre rôle est de vous assurer, pas de vous condamner.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Partenaires spécialisés
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous travaillons avec des assureurs agréés pour les profils à risques aggravés.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Couverture complète
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Même avec un permis restreint, vous pouvez être assuré pour conduire légalement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Plan de réhabilitation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous vous accompagnons pour améliorer progressivement votre profil auprès des assureurs.
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
            <p className="text-gray-600 dark:text-gray-400">Retrait de permis ? Nous avons une assurance pour vous.</p>
          </div>
          <div className="hs-form-frame" data-region="eu1" data-form-id="ae783fe2-6128-4eb3-8714-26a5aafc84b4" data-portal-id="146017876"></div>
        </div>
      </div>
    </div>
  )
}
