import React from 'react'
import { useMeta } from '../hooks/useMeta'

export default function APropos(){
  return (
    <div className="py-16 px-4">
      {useMeta('À propos — Dr Assurance', 'Dr Assurance est une filiale du groupe PREVO Assurance, spécialisée en assurance auto résilié, malusé ou refusé. Expertise complète des profils aggravés.')}      
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">Spécialiste en assurance auto résilié</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">Une filiale du groupe PREVO Assurance, créée spécialement et uniquement pour les assurances auto résiliées, malussées ou refusées</p>
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 mb-16 border border-blue-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Qui est PREVO Assurance ?</h2>
          <p className="text-lg text-gray-700 mb-4">PREVO Assurance est un cabinet de courtage en assurance indépendant, spécialement créé pour accompagner les conducteurs et les assurés qui rencontrent des difficultés : résiliation d'assurance, malus élevé, sinistres répétés, non-paiement, suspension ou annulation de permis, profils à risques aggravés, etc.</p>
          <p className="text-lg text-gray-700">Face au nombre croissant d'automobilistes laissés sans solution par les assureurs traditionnels, nous avons fondé PREVO avec une mission simple : <strong>offrir une assurance accessible, rapide et adaptée à ceux que les autres refusent.</strong></p>
        </div>
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 border-2 border-urgent-red">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Expertise : L'Assurance Auto Risques Aggravés</h2>
          <p className="text-lg text-gray-700 mb-6">Bien que nous couvrions tous les types d'assurances (habitation, RC pro, emprunteur, décennale, taxi/VTC, deux-roues, santé…), <strong>notre spécialité première reste l'assurance auto risques aggravés.</strong></p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Nous proposons des solutions sur mesure pour :</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold text-xl">✓</span>
              <span className="text-lg text-gray-700">Conducteurs résiliés par leur assureur</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold text-xl">✓</span>
              <span className="text-lg text-gray-700">Malussés ou sinistrés</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold text-xl">✓</span>
              <span className="text-lg text-gray-700">Conducteurs professionnels (Taxi, VTC, artisans, indépendants…)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold text-xl">✓</span>
              <span className="text-lg text-gray-700">Jeunes conducteurs en difficulté</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold text-xl">✓</span>
              <span className="text-lg text-gray-700">Profils à antécédents (alcoolémie, stupéfiants, retrait de permis…)</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Force : Le Partenariat Stratégique</h2>
          <p className="text-lg text-gray-700">Nous travaillons en partenariat avec plusieurs compagnies spécialisées, ce qui nous permet de <strong>trouver une assurance au meilleur tarif même en situation complexe.</strong> Cette approche collaborative garantit que chaque client bénéficie de solutions adaptées et de prix compétitifs, indépendamment de son profil.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {icon:'⚡', title:'Rapide', text:'Devis et réponse sous 15 minutes'},
            {icon:'💡', title:'Spécialisé', text:'Expertise exclusive en assurance résilié et malusé'},
            {icon:'🤝', title:'Fiable', text:'Partenaire de plusieurs compagnies spécialisées'},
          ].map((b,i)=> (
            <div key={i} className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">{b.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-600">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
