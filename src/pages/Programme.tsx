import React from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle } from 'lucide-react'

export default function Programme(){
  return (
    <div className="py-16 px-4">
      {useMeta('Programme de Réhabilitation Assurantielle en 3 Niveaux', 'Découvrez notre parcours : de résilié à profil standard en 3 niveaux. Accompagnement personnalisé.')}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">Comment fonctionne notre programme ?</h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">Un accompagnement unique en France pour passer progressivement de « résilié » à « assuré normalement »</p>

        <div className="space-y-12">
          {[
            {color:'red', badge:'NIVEAU 1', title:'Soins Intensifs', icon:'🚨', bgFrom:'from-red-50', border:'border-red-200', bulletColor:'text-red-600', ctaBg:'bg-red-600', ctaHover:'hover:bg-red-700'},
            {color:'orange', badge:'NIVEAU 2', title:'Réhabilitation', icon:'📈', bgFrom:'from-orange-50', border:'border-orange-200', bulletColor:'text-orange-500', ctaBg:'bg-orange-500', ctaHover:'hover:bg-orange-600'},
            {color:'green', badge:'NIVEAU 3', title:'Retour au Standard', icon:'✅', bgFrom:'from-green-50', border:'border-green-200', bulletColor:'text-green-600', ctaBg:'bg-green-600', ctaHover:'hover:bg-green-700'},
          ].map((n,i)=> (
            <div key={i} className={`bg-gradient-to-br ${n.bgFrom} to-white border-2 ${n.border} rounded-3xl p-8 md:p-12`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-20 h-20 ${n.color==='red'?'bg-urgent-red':n.color==='orange'?'bg-progress-orange':'bg-progress-green'} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-4xl">{n.icon}</span>
                </div>
                <div>
                  <div className={`${n.color==='red'?'bg-urgent-red':n.color==='orange'?'bg-progress-orange':'bg-progress-green'} text-white px-4 py-1 rounded-full text-sm font-bold inline-block mb-2`}>{n.badge}</div>
                  <h2 className="text-3xl font-bold text-gray-900">{n.title}</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg"><strong>Qui est concerné ?</strong> Conducteurs en situation difficile : résiliation, refus multiples, malus important.</p>
                <p className="text-lg"><strong>Durée :</strong> variable selon votre profil et votre historique</p>
                <p className="text-lg"><strong>Objectif :</strong> vous assurer immédiatement et démarrer votre parcours</p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2"><CheckCircle size={20} className={`${n.bulletColor} mt-1 flex-shrink-0`} /><span>Accompagnement personnalisé</span></li>
                  <li className="flex items-start gap-2"><CheckCircle size={20} className={`${n.bulletColor} mt-1 flex-shrink-0`} /><span>Renégociation annuelle</span></li>
                  <li className="flex items-start gap-2"><CheckCircle size={20} className={`${n.bulletColor} mt-1 flex-shrink-0`} /><span>Objectif: retour au standard</span></li>
                </ul>
              </div>
              <a href="/contact" className={`mt-6 inline-block ${n.ctaBg} text-white px-8 py-3 rounded-lg font-bold ${n.ctaHover} transition`}>Obtenir mon devis {n.badge}</a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Calendrier type d'un parcours</h3>
          {[
            {year:'Année 1', title:'Stabilisation (niveau 1)', desc:'Vous êtes assuré immédiatement, on reconstruit votre dossier, objectif zéro sinistre', bg:'bg-urgent-red'},
            {year:'Année 2', title:'Amélioration (passage niveau 2)', desc:'Votre malus diminue, les tarifs baissent, la réhabilitation démarre vraiment', bg:'bg-progress-orange'},
            {year:'Année 3', title:'Retour à la normale (niveau 3)', desc:'Profil standard retrouvé, tarifs compétitifs, vous êtes de nouveau autonome', bg:'bg-progress-green'},
          ].map((t,i)=> (
            <div key={i} className="flex items-start gap-4 mb-6 last:mb-0">
              <div className={`w-12 h-12 ${t.bg} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>{t.year}</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{t.title}</h4>
                <p className="text-gray-600">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
