import React, { useState } from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle, Phone } from 'lucide-react'

export default function ResiliationFausseDeclaration(){
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
      {useMeta('Assurance Auto Après Fausse Déclaration ou Omission - PREVO', 'Résilié pour fausse déclaration ? Information cachée découverte ? PREVO vous assure rapidement sans jugement.')}
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <a href="/motifs-resiliation" className="text-urgent-red hover:underline mb-4 inline-block">← Retour aux motifs de résiliation</a>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Assurance Auto après<br />
            <span className="text-urgent-red">Fausse Déclaration</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Résilié pour fausse déclaration ou omission ? PREVO vous propose une assurance même avec ce type d'antécédent.
          </p>
        </div>

        <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-urgent-red rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Fausse Déclaration : Comprendre</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            La fausse déclaration ou omission intervient lorsque l'assuré n'a pas fourni d'informations exactes ou a volontairement caché des informations importantes.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Exemples :</strong> usage réel non déclaré, conducteur habitual caché, sinistre antérieur oublié, etc.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 border-2 border-urgent-red mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Pourquoi PREVO Peut Vous Assurer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Pas de jugement moral
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Erreurs humaines arrivent. Nous cherchons à assurer, pas à condamner.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Examen complet
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous réévaluons votre profil avec les bonnes informations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Couverture juste
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Tarif adapté à votre vrai profil de risque.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Réponse rapide
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous évaluons rapidement votre situation.
              </p>
            </div>
          </div>
        </div>

        <div id="formulaire" className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Devis Express</h2>
            <p className="text-gray-600 dark:text-gray-400">Fausse déclaration découverte ? Parlons-en sans tabou.</p>
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
              <textarea rows={4} placeholder="Quelle était la fausse déclaration ? Qu'a découvert l'assureur ?" className="w-full px-4 py-3 border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:border-urgent-red focus:outline-none resize-y" value={formData.infos} onChange={e=>setFormData({...formData, infos:e.target.value})}></textarea>
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
