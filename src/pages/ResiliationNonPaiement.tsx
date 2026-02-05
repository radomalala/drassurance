import React, { useState } from 'react'
import { useMeta } from '../hooks/useMeta'
import { CheckCircle, Phone } from 'lucide-react'

export default function ResiliationNonPaiement(){
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
      q: "Pourquoi mon assurance m'a résilié pour non-paiement ?",
      a: "L'assureur peut résilier le contrat après un retard de paiement, généralement après une ou plusieurs relances non respectées. C'est une protection pour l'assureur."
    },
    {
      q: "Est-il possible d'être assuré après un impayé ?",
      a: "Oui ! Chez PREVO, nous travaillons avec des partenaires spécialisés qui acceptent les profils avec impayés. C'est même notre spécialité."
    },
    {
      q: "Vais-je payer plus cher après une résiliation pour non-paiement ?",
      a: "Oui, généralement. Mais PREVO négocie activement pour vous obtenir les meilleurs tarifs possibles en fonction de votre situation."
    },
    {
      q: "Combien de temps reste une résiliation pour non-paiement dans mes dossiers ?",
      a: "Environ 3-5 ans. PREVO vous accompagne pour améliorer progressivement votre profil auprès des assureurs."
    },
    {
      q: "Puis-je conduire sans assurance en attendant une proposition ?",
      a: "Non, c'est illégal et très dangereux. PREVO vous propose une assurance rapidement, souvent sous 15 minutes."
    },
    {
      q: "Comment éviter une prochaine résiliation ?",
      a: "Nous mettons en place un système de paiement régulier et vous suivons pour garantir la continuité de votre contrat."
    },
  ]

  return (
    <div className="py-16 px-4">
      {useMeta('Assurance Auto Après Résiliation pour Non-Paiement - PREVO', 'Résilié pour impayé ? Trouvez une assurance auto avec PREVO. Devis gratuit sous 15 minutes. Nous assurons les conducteurs refusés ailleurs.')}
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-16">
          <a href="/motifs-resiliation" className="text-urgent-red hover:underline mb-4 inline-block">← Retour aux motifs de résiliation</a>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Assurance Auto après Résiliation<br />
            <span className="text-urgent-red">pour Non-Paiement</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Vous avez été résilié par votre assureur à cause d'un retard ou d'un non-paiement de primes ? PREVO vous propose une solution rapide et adaptée.
          </p>
        </div>

        {/* Section explicative */}
        <div className="bg-blue-50 dark:bg-slate-800 border-l-4 border-urgent-red rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Comprendre la Résiliation pour Non-Paiement</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            La résiliation pour non-paiement est l'une des raisons les plus fréquentes de fin de contrat. Elle intervient lorsque l'assuré ne paie pas ses primes dans les délais convenus, généralement après :
          </p>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">1.</span>
              <span>Une relance amiable (simple rappel)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">2.</span>
              <span>Une mise en demeure officielle (30 jours de délai)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-urgent-red font-bold">3.</span>
              <span>La résiliation automatique du contrat</span>
            </li>
          </ul>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
            Important : Vous êtes alors sans couverture d'assurance et ne pouvez pas circuler légalement.
          </p>
        </div>

        {/* Pourquoi PREVO */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 border-2 border-urgent-red mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Pourquoi PREVO Peut Vous Assurer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Acceptation immédiate
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nos partenaires acceptent les dossiers avec non-paiement antérieur. Pas de refus, pas de jugement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Réponse en 15 minutes
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous évaluons votre situation rapidement et vous proposons une couverture adaptée.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Accompagnement complet
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous vous aidons à mettre en place un système de paiement régulier pour éviter une nouvelle résiliation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="text-urgent-red" size={24} />
                Tarifs négociés
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous négocions activement pour vous obtenir les meilleurs tarifs possibles selon votre profil.
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
            <p className="text-gray-600 dark:text-gray-400">Résilié pour non-paiement ? Nous avons une solution pour vous.</p>
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
                <option value="non-paiement">Résilié pour non-paiement</option>
                <option value="ancien-non-paiement">Ancien non-paiement, nouvelle assurance recherchée</option>
                <option value="risque-non-paiement">À risque de non-paiement</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Informations complémentaires</label>
              <textarea rows={4} placeholder="Date de résiliation, raison de l'impayé, solutions de paiement prévues..." className="w-full px-4 py-3 border-2 border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:border-urgent-red focus:outline-none resize-y" value={formData.infos} onChange={e=>setFormData({...formData, infos:e.target.value})}></textarea>
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
