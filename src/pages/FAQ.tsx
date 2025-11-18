import React, { useState } from 'react'
import { useMeta } from '../hooks/useMeta'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ(){
  const [open, setOpen] = useState<string|null>(null)
  const data = [
    {category:'Résiliation', questions:[
      {q:"Puis-je être assuré si j'ai été résilié pour non-paiement ?", a:"Oui, nous travaillons avec des assureurs spécialisés qui acceptent ce type de profil. Le tarif sera adapté à votre situation."},
      {q:'Combien de temps après une résiliation puis-je m’assurer ?', a:'Dès le lendemain. Nous pouvons trouver une solution immédiate, même en urgence.'},
      {q:'Dois-je déclarer ma résiliation à tous les assureurs ?', a:'Oui, c’est obligatoire. Toute fausse déclaration peut entraîner la nullité du contrat.'},
    ]},
    {category:'Malus', questions:[
      {q:'À partir de quel malus êtes-vous spécialisés ?', a:'Nous intervenons dès un malus de 1.25, et surtout au-delà de 2.00 où peu d’assureurs acceptent.'},
      {q:'Peut-on effacer un malus rapidement ?', a:'Non, le malus diminue de 5 % par année sans sinistre. Notre rôle est de vous accompagner durant cette période.'},
    ]},
    {category:'Le programme', questions:[
      {q:'Combien de temps dure le parcours complet ?', a:'Entre 2 et 4 ans selon votre profil de départ et votre évolution. Chaque situation est unique.'},
      {q:'Puis-je arrêter en cours de route ?', a:"Oui, absolument. Vous n'avez aucun engagement et pouvez partir quand vous le souhaitez."},
    ]},
  ]
  return (
    <div className="py-16 px-4">
      {useMeta({
        title:'FAQ — La Clinique des Assurances Résiliés',
        description:'Questions fréquentes sur la résiliation, le malus et notre programme de réhabilitation.',
        jsonLd: [
          {
            '@context':'https://schema.org',
            '@type':'FAQPage',
            mainEntity: data.flatMap(cat => cat.questions.map(q => ({
              '@type':'Question',
              name: q.q,
              acceptedAnswer:{ '@type':'Answer', text: q.a }
            })))
          }
        ]
      })}      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">Vos questions, nos réponses</h1>
        <p className="text-xl text-center text-gray-600 mb-12">Tout ce que vous devez savoir sur notre programme</p>
        <div className="space-y-8">
          {data.map((cat,ci)=> (
            <div key={ci}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-urgent-red text-white rounded-full flex items-center justify-center text-sm">{ci+1}</span>
                {cat.category}
              </h2>
              <div className="space-y-2">
                {cat.questions.map((item, qi)=> {
                  const idx = `${ci}-${qi}`; const isOpen = open===idx;
                  return (
                    <div key={qi} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <button onClick={()=>setOpen(isOpen?null:idx)} className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition">
                        <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                        {isOpen ? <ChevronUp size={20} className="text-urgent-red"/> : <ChevronDown size={20} className="text-gray-400"/>}
                      </button>
                      {isOpen && <div className="px-6 pb-4 text-gray-700 bg-gray-50">{item.a}</div>}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Vous avez d’autres questions ?</h3>
          <p className="text-gray-600 mb-6">Notre équipe est là pour vous répondre</p>
          <a href="/contact" className="bg-urgent-red text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition inline-flex items-center gap-2">Nous contacter</a>
        </div>
      </div>
    </div>
  )
}
