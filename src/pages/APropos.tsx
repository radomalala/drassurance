import React from 'react'
import { useMeta } from '../hooks/useMeta'

export default function APropos(){
  return (
    <div className="py-16 px-4">
      {useMeta('À propos — La Clinique des Résiliés', 'Notre approche : bienveillance, expertise et résultats pour les conducteurs résiliés.')}      
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">La première clinique assurantielle de France</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">Nous avons créé un concept unique: accompagner les conducteurs en difficulté jusqu’à leur réhabilitation complète</p>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {icon:'❤️', title:'Bienveillance', text:"Nous croyons que tout le monde mérite une seconde chance. Pas de jugement, que de l’aide."},
            {icon:'🛡️', title:'Expertise', text:"10 ans d’expérience dans l’assurance des profils difficiles. Nous connaissons tous les assureurs."},
            {icon:'📈', title:'Résultats', text:'87% de clients satisfaits et une économie moyenne de 38% sur le parcours complet.'},
          ].map((b,i)=> (
            <div key={i} className="text-center p-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">{b.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-600">{b.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
          <p className="text-lg text-gray-700 mb-4">Trop de conducteurs se retrouvent exclus du système d’assurance traditionnel. Résiliés, malussés, refusés... ils se sentent abandonnés et paient des tarifs exorbitants.</p>
          <p className="text-lg text-gray-700 mb-4">Nous avons créé <strong>La Clinique des Résiliés</strong> pour leur offrir une solution complète: assurer immédiatement, mais surtout accompagner année après année jusqu’à la réhabilitation totale.</p>
          <p className="text-lg text-gray-700">Notre approche médicale n’est pas un hasard: nous traitons chaque dossier comme un patient à soigner, avec un programme de guérison progressif.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Chiffres Clés</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {v:'2019', l:"Année de création"},
              {v:'1200+', l:'Clients accompagnés'},
              {v:'87%', l:'Taux de satisfaction'},
              {v:'15', l:'Partenaires assureurs'},
            ].map((s,i)=> (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl font-bold text-urgent-red mb-2">{s.v}</div>
                <div className="text-gray-600">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Nos Partenaires Assureurs</h2>
          <p className="text-center text-gray-600 mb-8">Nous travaillons avec les meilleurs assureurs spécialisés du marché</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {Array.from({length:4}).map((_,i)=> (
              <div key={i} className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-xs">Assureur {i+1}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
