import React from 'react'
import { useMeta } from '../hooks/useMeta'
import { AlertTriangle, Ban, ShieldCheck, FileText, Car, Activity } from 'lucide-react'

export default function TypesResiliation(){
  useMeta('Types de Résiliation & Infos Utiles — La Clinique des Assurances Résiliés', "Vous avez été résilié ? Nous vous aidons à retrouver une assurance au meilleur tarif. DR Assurance accompagne chaque conducteur pour obtenir rapidement un contrat conforme et adapté.")

  const Section = ({icon:Icon, title, why, consequences, actions}:{icon:any, title:string, why:string, consequences:string[], actions:string[]}) => (
    <section className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-6 md:p-8 border border-gray-100 dark:border-slate-800">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-red-50 text-urgent-red flex items-center justify-center shrink-0"><Icon size={22} /></div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Pourquoi vous avez été résilié ?</h3>
          <p className="text-gray-600 dark:text-gray-300">{why}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Conséquences</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
            {consequences.map((c,i)=>(<li key={i}>{c}</li>))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Ce que nous faisons pour vous</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
            {actions.map((a,i)=>(<li key={i}>{a}</li>))}
          </ul>
        </div>
      </div>
    </section>
  )

  return (
    <div className="py-16 px-4 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center">
          <p className="inline-block bg-red-100 text-urgent-red px-4 py-1 rounded-full text-sm font-semibold mb-4">Types de Résiliation & Informations Utiles</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Vous avez été résilié ?</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Nous vous aidons à retrouver une assurance au meilleur tarif. Parcourez aussi notre <a href="/programme" className="text-urgent-red underline">programme de réhabilitation en 3 niveaux</a> et les <a href="/temoignages" className="text-urgent-red underline">témoignages clients</a>.</p>
        </header>

        <div className="space-y-8">
          <Section
            icon={Ban}
            title="Assurance Auto Résiliée pour Non-Paiement"
            why="La résiliation intervient lorsque plusieurs cotisations restent impayées malgré les relances de l’assureur."
            consequences={[
              'Inscription au fichier AGIRA',
              'Refus des assureurs traditionnels',
              'Majorations de prime au prochain contrat',
            ]}
            actions={[
              'Proposer une assurance auto immédiate malgré les impayés',
              'Étaler ou ajuster la prime selon votre profil',
              'Vous accompagner pour éviter une nouvelle résiliation',
            ]}
          />

          <Section
            icon={Activity}
            title="Assurance Auto Résiliée pour Sinistres"
            why="Un trop grand nombre de sinistres responsables ou une fréquence d’accidents jugée trop élevée."
            consequences={[
              'Surprime importante',
              'Refus des compagnies classiques',
              'Risque d’être classé conducteur à risque',
            ]}
            actions={[
              'Trouver un assureur spécialisé dans les dossiers sensibles',
              'Rééquilibrer votre tarif grâce à une analyse précise de votre historique',
            ]}
          />

          <Section
            icon={AlertTriangle}
            title="Assurance Auto Résiliée pour Alcoolémie / Stupéfiants"
            why="Un contrôle positif a entraîné une résiliation automatique du contrat."
            consequences={[
              'Tarifs très élevés',
              'Obligation de passer une visite médicale ou tests psychotechniques',
              'Suspension ou retrait possible du permis',
            ]}
            actions={[
              'Négocier un contrat adapté malgré la gravité de la situation',
              'Vous orienter sur les démarches obligatoires (visites, tests, récupération de permis)',
            ]}
          />

          <Section
            icon={Car}
            title="Assurance Auto Résiliée pour Suspension / Retrait de Permis"
            why="Un retrait, une annulation ou une suspension de permis suite à infraction grave."
            consequences={[
              'Résiliation immédiate de votre assurance',
              'Surprime très élevée lors du retour à la conduite',
              'Complexité pour obtenir un nouveau contrat',
            ]}
            actions={[
              'Assurer les conducteurs suspendus ou ayant récupéré leur permis',
              'Adapter les garanties obligatoires pour respecter les exigences légales',
            ]}
          />

          <Section
            icon={ShieldCheck}
            title="Assurance Auto Malussé / Conducteur à Risque"
            why="Un malus élevé (coefficient > 1), pertes de points fréquentes, sinistres répétés ou comportement routier jugé dangereux."
            consequences={[
              'Primes multipliées',
              'Refus des assureurs généralistes',
              'Obligation de souscrire à des formules spécialisées',
            ]}
            actions={[
              'Assurance auto malussée au meilleur tarif possible',
              'Possibilités d’ajuster les garanties pour réduire le coût',
              'Accompagnement pour diminuer votre malus dans le temps',
            ]}
          />
        </div>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-slate-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Informations Utiles pour Refaire une Assurance Auto Après Résiliation</h3>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Documents nécessaires</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
              <li>Permis de conduire</li>
              <li>Carte grise</li>
              <li>Relevé d’informations (RI)</li>
              <li>Justificatif d’identité et de domicile</li>
            </ul>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">Délai avant de retrouver une assurance</h4>
            <p className="text-gray-600 dark:text-gray-300">➡️ Immédiat grâce à nos partenaires spécialisés, même en cas de résiliation grave.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-6 border border-gray-100 dark:border-slate-800 text-center flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pourquoi nous choisir ?</h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2 mb-6">
              <li>✓ Spécialiste des profils résiliés et à risque</li>
              <li>✓ Tarifs négociés auprès d’assureurs spécialisés</li>
              <li>✓ Souscription rapide & 100% en ligne</li>
              <li>✓ Accompagnement humain et personnalisé</li>
            </ul>
            <a href="/contact" className="inline-flex items-center gap-2 bg-urgent-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700">⏱️ Demander un devis rapide</a>
          </div>
        </section>
      </div>
    </div>
  )
}
