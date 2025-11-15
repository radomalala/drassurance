import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ(){
  const [open, setOpen] = useState<string|null>(null)
  const data = [
    {category:'Résiliation', questions:[
      {q:"Puis-je être assuré si j'ai été résilié pour non-paiement ?", a:"Oui, des assureurs spécialisés acceptent ce profil. Le tarif est adapté."},
      {q:'Combien de temps après une résiliation puis-je m’assurer ?', a:'Immédiatement, une solution peut être trouvée dès le lendemain.'},
      {q:'Dois-je déclarer ma résiliation à tous les assureurs ?', a:'Oui, c’est obligatoire sous peine de nullité du contrat.'},
    ]},
    {category:'Malus', questions:[
      {q:'À partir de quel malus êtes-vous spécialisés ?', a:'Dès 1.25, et surtout au-delà de 2.00.'},
      {q:'Peut-on effacer un malus rapidement ?', a:'Non, baisse de 5% par an sans sinistre. Nous accompagnons ce parcours.'},
    ]},
    {category:'Le programme', questions:[
      {q:'Combien de temps dure le parcours complet ?', a:'Entre 2 et 4 ans selon le profil.'},
      {q:'Puis-je arrêter en cours de route ?', a:"Oui, sans engagement. Vous pouvez partir quand vous voulez."},
    ]},
  ]
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">Questions Fréquentes</h1>
        <p className="text-xl text-center text-gray-600 mb-12">Tout ce que vous devez savoir sur notre programme de réhabilitation</p>
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
