import React from 'react'

export default function Temoignages(){
  const cards = [
    {initials:'ML', color:'blue', name:'Marc L., 42 ans', loc:'Île-de-France', steps:[{emoji:'🔴', label:'2021: Résilié', price:'2850€/an', bg:'bg-red-50', txt:'text-red-600'}, {emoji:'🟠', label:'2022: Niveau 2', price:'2200€/an', bg:'bg-orange-50', txt:'text-orange-600'}, {emoji:'🟢', label:'2024: Standard', price:'1400€/an', bg:'bg-green-50', txt:'text-green-600'}], quote:"L'équipe m'a accompagné pas à pas. Aujourd'hui je paie moins cher qu'avant ma résiliation !", badge:'Économie: -51% en 3 ans', badgeBg:'bg-green-100', badgeTxt:'text-green-800'},
    {initials:'SD', color:'purple', name:'Sophie D., 29 ans', loc:'Rhône-Alpes', steps:[{emoji:'🔴', label:'2022: Malus 2.5', price:'3200€/an', bg:'bg-red-50', txt:'text-red-600'}, {emoji:'🟠', label:'2023: Niveau 2', price:'1900€/an', bg:'bg-orange-50', txt:'text-orange-600'}, {emoji:'🟢', label:'2024: En cours', price:'1200€/an', bg:'bg-green-50', txt:'text-green-600'}], quote:'Je pensais être bloquée à vie avec des tarifs exorbitants. Merci pour votre aide !', badge:'Économie: -62% en 2 ans', badgeBg:'bg-green-100', badgeTxt:'text-green-800'},
  ]
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">Parcours de nos patients</h1>
        <p className="text-xl text-center text-gray-600 mb-12">Découvrez comment nous avons aidé des conducteurs à retrouver une assurance normale</p>
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((c,idx)=> (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${c.color==='blue'?'bg-blue-100':c.color==='purple'?'bg-purple-100':'bg-green-100'} rounded-full flex items-center justify-center text-2xl font-bold ${c.color==='blue'?'text-blue-600':c.color==='purple'?'text-purple-600':'text-green-600'}`}>{c.initials}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{c.name}</h3>
                  <p className="text-sm text-gray-600">{c.loc}</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {c.steps.map((s,i)=> (
                  <div key={i} className={`flex items-center justify-between ${s.bg} p-3 rounded-lg`}>
                    <div className="flex items-center gap-2"><span className="text-2xl">{s.emoji}</span><span className="font-semibold text-sm">{s.label}</span></div>
                    <span className={`font-bold ${s.txt}`}>{s.price}</span>
                  </div>
                ))}
              </div>
              <blockquote className="italic text-gray-700 mb-4 border-l-4 border-urgent-red pl-4">{c.quote}</blockquote>
              <div className={`${c.badgeBg} ${c.badgeTxt} px-4 py-2 rounded-lg text-center font-bold`}>{c.badge}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vous aussi, démarrez votre réhabilitation</h2>
          <p className="text-gray-600 mb-6">Rejoignez les centaines de conducteurs qui ont retrouvé une assurance normale</p>
          <a href="/contact" className="bg-urgent-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition inline-flex items-center gap-2">Commencer mon parcours</a>
        </div>
      </div>
    </div>
  )
}
