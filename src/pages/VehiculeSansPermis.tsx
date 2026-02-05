import React, { useState } from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle, Phone } from 'lucide-react'

export default function VehiculeSansPermis(){
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
      {useMeta('Assurance Véhicule Sans Permis (VSP) - PREVO', 'Assurance VSP et quadricycle électrique. Résilié, malussé ? PREVO assure rapidement même sans permis de conduire valide.')}
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <a href="/types-vehicules" className="text-urgent-red hover:underline mb-4 inline-block">← Retour aux types de véhicules</a>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Assurance Véhicule<br />
            <span className="text-urgent-red">Sans Permis</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Assurance complète pour VSP et quadricycles électriques. Résilié, malussé, sans permis ? PREVO vous assure.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-slate-800 border-l-4 border-urgent-red rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Spécificités des VSP</h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Aucun permis voiture requis</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Vitesse limitée</strong> (45 km/h généralement)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Assurance obligatoire</strong> comme voiture classique</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Usage urbain principal</strong></span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 border-2 border-urgent-red mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">PREVO pour les VSP</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Même sans permis valide ou avec un permis retiré, vous pouvez conduire légalement un VSP et être assuré chez PREVO.
          </p>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Acceptation sans permis</strong> pour VSP</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Couverture complète</strong> responsabilité civile + dommages</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Tarifs accessibles</strong> pour ce type de véhicule</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-urgent-red flex-shrink-0" size={20} />
              <span><strong>Réponse rapide</strong> en 15 minutes</span>
            </li>
          </ul>
        </div>

        <div id="formulaire" className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Devis Express - VSP</h2>
            <p className="text-gray-600 dark:text-gray-400">Assurance adaptée à votre véhicule sans permis.</p>
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
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Marque et modèle VSP</label>
              <input className="w-full px-4 py-3 border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:border-urgent-red focus:outline-none" placeholder="Ex: Citroën Ami, Renault Twizy..." value={formData.infos} onChange={e=>setFormData({...formData, infos:e.target.value})} />
            </div>
            <div className="mb-6">
              <label htmlFor="permis-select" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Votre situation de permis *</label>
              <select
                id="permis-select"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:border-urgent-red focus:outline-none"
                value={formData.situation}
                onChange={e=>setFormData({...formData, situation:e.target.value})}
              >
                <option value="">Sélectionnez</option>
                <option value="sans-permis">Sans permis de conduire</option>
                <option value="permis-retiré">Permis retiré / annulé</option>
                <option value="permis-valide">Permis valide</option>
              </select>
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
