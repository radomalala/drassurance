import React, { useState } from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle, Phone, Car } from 'lucide-react'

export default function VoitureParticuliere(){
  const [formData, setFormData] = useState({ nom:'', tel:'', situation:'', infos:'' })
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string|undefined>(undefined)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true); setError(undefined)
    try {
      const resp = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/send-quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if(!resp.ok) throw new Error('Erreur lors de l\'envoi');
      setTimeout(()=>setFormData({ nom:'', tel:'', situation:'', infos:'' }), 5000);
    } catch(err:any){
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="py-16 px-4">
      {useMeta('Assurance Voiture Particulière - Résilié, Malussé - PREVO', 'Assurance voiture particulière (citadine, berline, SUV). Résilié ou malussé ? PREVO vous assure rapidement mieux et moins cher.')}
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <a href="/types-vehicules" className="text-urgent-red hover:underline mb-4 inline-block">← Retour aux types de véhicules</a>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Assurance Voiture<br />
            <span className="text-urgent-red">Particulière</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Citadine, berline, SUV... Résilié, malussé, refusé ? PREVO assure tous les profils, même les plus complexes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-urgent-red rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Car className="text-urgent-red" size={28} />
              Votre Profil de Conducteur
            </h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Conducteur résilie</strong> - Ancien client d'un autre assureur</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Malussé</strong> - Accumulation de points perdus</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Refusé ailleurs</strong> - Rejeté par assureurs classiques</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Jeune conducteur</strong> - Avec antécédents</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 border-urgent-red">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pourquoi Choisir PREVO</h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Acceptation garantie</strong> pour tous les profils</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Tarifs compétitifs</strong> grâce aux partenariats</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Couverture adaptée</strong> à votre besoin réel</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
                <span><strong>Accompagnement complet</strong> année après année</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-urgent-red mb-2">15 min</div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Devis & réponse</p>
          </div>
          <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-urgent-red mb-2">100%</div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Acceptation</p>
          </div>
          <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-urgent-red mb-2">-40%</div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold">Tarifs moyens</p>
          </div>
        </div>

        <div id="formulaire" className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Devis Express - Voiture Particulière</h2>
            <p className="text-gray-600 dark:text-gray-400">Assurance auto adaptée à votre profil et votre budget.</p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Nom complet *</label>
                <input required className="w-full px-4 py-3 border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:border-urgent-red focus:outline-none" placeholder="Prénom et nom" value={formData.nom} onChange={e=>setFormData({...formData, nom:e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Téléphone *</label>
                <input required className="w-full px-4 py-3 border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:border-urgent-red focus:outline-none" placeholder="06 XX XX XX XX" value={formData.tel} onChange={e=>setFormData({...formData, tel:e.target.value})} />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="situation-select" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Votre situation *</label>
              <select
                id="situation-select"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:border-urgent-red focus:outline-none"
                value={formData.situation}
                onChange={e=>setFormData({...formData, situation:e.target.value})}
              >
                <option value="">Sélectionnez votre situation</option>
                <option value="resilie">Résilié par mon assureur</option>
                <option value="refuse">Refusé par plusieurs assureurs</option>
                <option value="malus">Malus important</option>
                <option value="jeune">Jeune conducteur avec antécédents</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Type de voiture</label>
              <input className="w-full px-4 py-3 border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:border-urgent-red focus:outline-none" placeholder="Ex: Peugeot 308, Renault Clio..." value={formData.infos} onChange={e=>setFormData({...formData, infos:e.target.value})} />
            </div>
            {error && <div role="alert" className="mb-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded">{error}</div>}
            <button disabled={sending} className="w-full bg-urgent-red disabled:opacity-60 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 flex items-center justify-center gap-2 transition shadow-lg" type="submit">
              <Phone size={24} /> {sending ? 'Envoi...' : 'Être rappelé sous 15 minutes'}
            </button>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">🔒 Vos données sont protégées et conformes RGPD</p>
          </form>
        </div>
      </div>
    </div>
  )
}
