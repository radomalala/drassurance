import React, { useState } from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle, Phone } from 'lucide-react'

export default function ResiliationAggravationRisque(){
  const [formData, setFormData] = useState({ nom:'', tel:'', situation:'', infos:'' })
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string|undefined>(undefined)

  useMeta('Assurance Auto Après Aggravation du Risque - PREVO', 'Résilié suite à une aggravation du risque ? Changement d\'utilisation du véhicule ? PREVO vous assure en 15 minutes.')

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
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <a href="/motifs-resiliation" className="text-urgent-red hover:underline mb-4 inline-block">← Retour aux motifs de résiliation</a>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Assurance Auto après<br />
            <span className="text-urgent-red">Aggravation du Risque</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Changement d'utilisation du véhicule ou de situation ? Votre assureur vous résilie pour aggravation du risque ? PREVO a une solution.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-urgent-red rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Aggravation du Risque : Comprendre</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            L'aggravation du risque survient lorsque votre situation change de manière à augmenter le risque assurantiel :
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span>Changement de profession (commercial, chauffeur)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span>Augmentation kilométrage annuel</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span>Utilisation du véhicule à titre professionnel</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span>Ajout de conducteur à risque</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 border-2 border-urgent-red mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Pourquoi PREVO Peut Vous Assurer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Flexibilité d'utilisation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous acceptons les changements d'utilisation et les profils professionnels.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Tarifs adaptés
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous évaluons juste votre risque réel sans surcoût excessif.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Continuité assurance
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous vous assurons même si vous êtes rejeté ailleurs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Réactivité
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Devis et couverture en 15 minutes maximum.
              </p>
            </div>
          </div>
        </div>

        <div id="formulaire" className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Devis Express</h2>
            <p className="text-gray-600 dark:text-gray-400">Aggravation du risque ? Nous vous trouvons une assurance adaptée.</p>
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
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Informations complémentaires</label>
              <textarea rows={4} placeholder="Quel changement a provoqué la résiliation ? Nouvelle utilisation du véhicule ?" className="w-full px-4 py-3 border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:border-urgent-red focus:outline-none resize-y" value={formData.infos} onChange={e=>setFormData({...formData, infos:e.target.value})}></textarea>
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
