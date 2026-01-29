import React, { useState } from 'react'
import { useMeta } from '../hooks/useMeta'

export default function Urgence(){
  useMeta("Résilié par votre assurance ? Solution sous 15mn", "Assurance immédiate après résiliation. Réponse sous 15 minutes. Sans engagement.")
  const [f, setF] = useState({ nom:'', tel:'', situation:'' })
  const [ok,setOk] = useState(false)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')
  
  const onSubmit = async(e:React.FormEvent)=>{
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/send-urgency`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(f)
      })
      if (!res.ok) throw new Error('Erreur envoi')
      setOk(true)
      setTimeout(()=>setOk(false),4000)
      setF({nom:'',tel:'',situation:''})
    } catch (err) {
      setError('Erreur lors de l\'envoi. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-red-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        {ok && <div role="alert" aria-live="polite" className="bg-green-600 text-white px-4 py-2 rounded mb-6 inline-block">Merci ! Nous vous rappelons sous 5mn.</div>}
        {error && <div role="alert" aria-live="polite" className="bg-red-600 text-white px-4 py-2 rounded mb-6 inline-block">{error}</div>}
        <div className="mb-8">
          <div className="inline-block bg-urgent-red text-white px-6 py-3 rounded-full text-lg font-bold mb-6">🚨 Urgence résiliation</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Résilié ?<br/><span className="text-urgent-red">On vous assure dès aujourd'hui mieux et moins chère</span></h1>
          <p className="text-2xl text-gray-600 mb-12">Réponse garantie sous 5 minutes</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {[
            {bg:'bg-red-100',emoji:'😰',t:'1. Vous êtes résilié',s:'Situation difficile'},
            {bg:'bg-orange-100',emoji:'🔍',t:'2. Nous analysons votre dossier',s:'En moins de 5 minutes'},
            {bg:'bg-green-100',emoji:'✅',t:'3. Vous êtes assuré',s:'Solution trouvée'},
            {bg:'bg-blue-100',emoji:'📈',t:'4. On vous accompagne',s:'Sur le long terme'},
          ].map((c,i)=> (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
              <div className={`w-16 h-16 ${c.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-3xl">{c.emoji}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{c.t}</h3>
              <p className="text-sm text-gray-600">{c.s}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-left">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Formulaire express urgence</h2>
          <form onSubmit={onSubmit}>
            <div className="space-y-4 mb-6">
              <input required placeholder="Nom complet *" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-urgent-red focus:outline-none" value={f.nom} onChange={e=>setF({...f,nom:e.target.value})} />
              <input required placeholder="Téléphone *" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-urgent-red focus:outline-none" value={f.tel} onChange={e=>setF({...f,tel:e.target.value})} />
              <label htmlFor="situation-select" className="sr-only">Votre situation *</label>
              <select
                id="situation-select"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-urgent-red focus:outline-none"
                value={f.situation}
                onChange={e=>setF({...f,situation:e.target.value})}
              >
                <option value="">Votre situation *</option>
                <option value="resilie">Résilié</option>
                <option value="refuse">Refusé</option>
                <option value="malus">Malus lourd</option>
              </select>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-urgent-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed">🚨 {loading ? 'Envoi en cours...' : 'Urgence : me rappeler maintenant'}</button>
          </form>
        </div>
      </div>
    </div>
  )
}
