import React, { useState } from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle, Phone } from 'lucide-react'

export default function ResiliationSinistres(){
  const [formData, setFormData] = useState({ nom:'', tel:'', situation:'', infos:'' })
  const [ok, setOk] = useState(false)
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
      if(!resp.ok){
        let msg = 'Erreur lors de l\'envoi';
        try { const data = await resp.json(); if(data?.error) msg = data.error } catch {/* ignore */}
        throw new Error(msg + ` (statut ${resp.status})`);
      }
      setOk(true); setTimeout(()=>setOk(false), 5000);
      setFormData({ nom:'', tel:'', situation:'', infos:'' })
    } catch(err:any){
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setSending(false);
    }
  }

  const faqItems = [
    {
      q: "À partir de combien de sinistres peut-on être résilié ?",
      a: "Généralement 2-3 sinistres en 3 ans suffisent. C'est variable selon les assureurs, mais c'est considéré comme du risque aggravé."
    },
    {
      q: "Les sinistres sans ma responsabilité comptent-ils ?",
      a: "Oui, tous les sinistres déclarés sont pris en compte pour évaluer votre profil, même s'ils ne sont pas de votre fait."
    },
    {
      q: "Vais-je payer beaucoup plus cher ?",
      a: "Oui, le surcoût peut être important. Mais PREVO négocie pour réduire ce surcoût et vous accompagne pour améliorer votre profil."
    },
    {
      q: "Comment diminuer mon nombre de sinistres déclarés ?",
      a: "Vous ne pouvez pas, mais avec le temps (3-5 ans), les sinistres s'effacent progressivement de vos antécédents."
    },
    {
      q: "Puis-je déclarer mes sinistres à un nouvel assureur ?",
      a: "Oui, vous devez obligatoirement déclarer vos sinistres antérieurs. PREVO aide à présenter favorablement votre dossier."
    },
    {
      q: "Y a-t-il des assureurs qui acceptent les sinistres répétitifs ?",
      a: "Oui, exactement ! PREVO travaille avec ces assureurs spécialisés pour les conducteurs avec antécédents sinistres."
    },
  ]

  return (
    <div className="py-16 px-4">
      {useMeta('Assurance Auto Après Sinistres Répétitifs - PREVO', 'Trop de sinistres déclarés ? Résilié pour sinistralité ? PREVO vous propose une assurance adaptée. Devis gratuit en 15 minutes.')}
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-16">
          <a href="/motifs-resiliation" className="text-urgent-red hover:underline mb-4 inline-block">← Retour aux motifs de résiliation</a>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Assurance Auto après<br />
            <span className="text-urgent-red">Sinistres Répétitifs</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Vous avez déclaré plusieurs sinistres et votre assureur vous résilie ? PREVO vous propose une couverture adaptée à votre situation.
          </p>
        </div>

        {/* Section explicative */}
        <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-urgent-red rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Sinistralité et Résiliation : Comprendre</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            La résiliation pour sinistres répétitifs intervient lorsque vous avez déclaré trop de sinistres sur une courte période. L'assureur considère que vous présentez un risque trop élevé.
          </p>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span><strong>2-3 sinistres en 3 ans</strong> = profil aggravé</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span><strong>Tous les sinistres comptent</strong> même si vous n'êtes pas responsable</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">•</span>
              <span><strong>Impact durable</strong> = 3-5 ans minimum sur vos antécédents</span>
            </p>
          </div>
        </div>

        {/* Pourquoi PREVO */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 border-2 border-urgent-red mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Pourquoi PREVO Peut Vous Assurer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Expertise sinistralité
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Notre spécialité, c'est d'assurer les conducteurs avec antécédents sinistres.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Tarifs négociés
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous réduisons votre surcoût grâce à nos partenariats stratégiques.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Accompagnement
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous travaillons à améliorer votre profil d'année en année.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Réponse rapide
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Devis et couverture en moins de 15 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Questions Fréquemment Posées</h2>
          <div className="space-y-6">
            {faqItems.map((item, idx) => (
              <details key={idx} className="bg-gray-50 dark:bg-slate-800 rounded-lg p-6 cursor-pointer group">
                <summary className="text-lg font-bold text-gray-900 dark:text-white flex items-center justify-between">
                  {item.q}
                  <span className="text-urgent-red ml-2">+</span>
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Formulaire */}
        <div id="formulaire" className="bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Devis Express</h2>
            <p className="text-gray-600 dark:text-gray-400">Trop de sinistres ? Nous avons une solution pour vous.</p>
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
              <label htmlFor="situation-select" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Nombre de sinistres en 3 ans *</label>
              <select
                id="situation-select"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:border-urgent-red focus:outline-none"
                value={formData.situation}
                onChange={e=>setFormData({...formData, situation:e.target.value})}
              >
                <option value="">Sélectionnez</option>
                <option value="2-sinistres">2 sinistres</option>
                <option value="3-sinistres">3 sinistres</option>
                <option value="4-plus">4 sinistres ou plus</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Informations complémentaires</label>
              <textarea rows={4} placeholder="Détail des sinistres, vos responsabilités, statut actuel de votre assurance..." className="w-full px-4 py-3 border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:border-urgent-red focus:outline-none resize-y" value={formData.infos} onChange={e=>setFormData({...formData, infos:e.target.value})}></textarea>
            </div>
            {error && <div role="alert" className="mb-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded">
              {error}
            </div>}
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
