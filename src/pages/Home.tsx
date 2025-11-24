import React, { useState } from 'react'
import { AlertCircle, Phone, CheckCircle, Clock, Award } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import Mascotte from '../components/Mascotte'

export default function Home(){
  const [formData, setFormData] = useState({ nom:'', tel:'', situation:'', infos:'' })
  const [ok, setOk] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string|undefined>(undefined)
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true); setError(undefined)
    try {
      const resp = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if(!resp.ok) throw new Error('Erreur lors de l\'envoi');
      setOk(true); setTimeout(()=>setOk(false), 5000);
      setFormData({ nom:'', tel:'', situation:'', infos:'' })
    } catch(err:any){
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setSending(false);
    }
  }
  return (
    <>
      {useMeta('Assurance Auto Résilié | La Clinique des Assurances Résiliés', "Cabinet spécialisé en assurance auto pour conducteurs résiliés, malussés ou refusés. Programme de réhabilitation en 3 niveaux. Devis sous 2h.")}
      {ok && (
        <div role="alert" aria-live="polite" className="fixed top-24 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-xl z-50">
          Merci ! Nous vous rappelons sous 15mn.
        </div>
      )}

      <div className="bg-gradient-to-br from-red-50 to-white dark:from-slate-900 dark:to-slate-950 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Assurance Résilié, Malussé ou Refusé
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              On vous assure dès aujourd'hui<br />
              <span className="text-urgent-red">mieux et moins chère</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Programme unique en 3 niveaux : assurance immédiate, réhabilitation de votre profil, retour à des tarifs standards. Objectif final : payer votre assurance comme un conducteur classique.
            </p>
            <ul className="mb-8 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li className="flex items-start gap-2"><CheckCircle className="text-urgent-red flex-shrink-0" size={16}/> Devis prioritaire & réponse sous 15 minutes</li>
              <li className="flex items-start gap-2"><CheckCircle className="text-urgent-red flex-shrink-0" size={16}/> Accompagnement pluriannuel structuré</li>
              <li className="flex items-start gap-2"><CheckCircle className="text-urgent-red flex-shrink-0" size={16}/> Négociation annuelle pour abaisser vos coûts</li>
              <li className="flex items-start gap-2"><CheckCircle className="text-urgent-red flex-shrink-0" size={16}/> Transition vers assureurs généralistes</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/urgence-resiliation" className="bg-urgent-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 flex items-center justify-center gap-2 shadow-lg transition">
                <AlertCircle size={24} /> Urgence résiliation
              </a>
              <a href="#formulaire" className="bg-white text-gray-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 border-2 border-gray-300 text-center transition">
                Obtenir un devis rapide
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2"><Clock size={16} /> Réponse sous 15 minutes</div>
              <div className="flex items-center gap-2"><CheckCircle size={16} /> Sans engagement</div>
              <div className="flex items-center gap-2"><Award size={16} /> 99 % de satisfaction</div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-8 relative">
              <div className="text-center">
                <Mascotte size="lg" caption="Votre spécialiste en réhabilitation d'assurance" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Notre programme de réhabilitation</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">Un parcours structuré en 3 niveaux pour retrouver des primes normales. Découvrez le détail du <a href="/programme" className="text-urgent-red underline">programme</a> ou consultez les <a href="/types-resiliation" className="text-urgent-red underline">types de résiliation</a>.</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 relative">
              <div className="absolute -top-4 left-6 bg-urgent-red text-white px-4 py-1 rounded-full text-sm font-bold">NIVEAU 1</div>
              <div className="mt-4">
                <div className="w-16 h-16 bg-urgent-red rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Soins intensifs</h3>
                <p className="text-gray-700 mb-4">Résiliation, refus, malus élevé</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-urgent-red flex-shrink-0" /> Assurance immédiate</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-urgent-red flex-shrink-0" /> Même avec un profil difficile</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-urgent-red flex-shrink-0" /> Tarif adapté à votre situation</li>
                </ul>
              </div>
            </div>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 relative">
              <div className="absolute -top-4 left-6 bg-progress-orange text-white px-4 py-1 rounded-full text-sm font-bold">NIVEAU 2</div>
              <div className="mt-4">
                <div className="w-16 h-16 bg-progress-orange rounded-full flex items-center justify-center mb-4">📈</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Réhabilitation</h3>
                <p className="text-gray-700 mb-4">Amélioration progressive</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-progress-orange flex-shrink-0" /> Réduction du malus</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-progress-orange flex-shrink-0" /> Suivi personnalisé</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-progress-orange flex-shrink-0" /> Tarifs en baisse</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 relative">
              <div className="absolute -top-4 left-6 bg-progress-green text-white px-4 py-1 rounded-full text-sm font-bold">NIVEAU 3</div>
              <div className="mt-4">
                <div className="w-16 h-16 bg-progress-green rounded-full flex items-center justify-center mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Retour au standard</h3>
                <p className="text-gray-700 mb-4">Profil réhabilité</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-progress-green flex-shrink-0" /> Vous êtes assurable partout</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-progress-green flex-shrink-0" /> Tarifs compétitifs</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-progress-green flex-shrink-0" /> Vous retrouvez votre autonomie</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="w-12 h-12 bg-urgent-red rounded-full text-white font-bold flex items-center justify-center shadow-lg">1</div>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-urgent-red to-progress-orange"></div>
            <div className="w-12 h-12 bg-progress-orange rounded-full text-white font-bold flex items-center justify-center shadow-lg">2</div>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-progress-orange to-progress-green"></div>
            <div className="w-12 h-12 bg-progress-green rounded-full text-white font-bold flex items-center justify-center shadow-lg">3</div>
          </div>
        </div>
      </div>

      <div id="formulaire" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Devis express</h2>
            <p className="text-gray-600">Remplissez le formulaire, nous vous rappelons sous 2 heures. Plus vous êtes précis, plus notre réponse est rapide.</p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                <input required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-urgent-red focus:outline-none" placeholder="Prénom et nom" value={formData.nom} onChange={e=>setFormData({...formData, nom:e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                <input required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-urgent-red focus:outline-none" placeholder="06 XX XX XX XX" value={formData.tel} onChange={e=>setFormData({...formData, tel:e.target.value})} />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Votre situation *</label>
              <select required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-urgent-red focus:outline-none" value={formData.situation} onChange={e=>setFormData({...formData, situation:e.target.value})}>
                <option value="">Sélectionnez votre situation</option>
                <option value="resilie">Résilié par mon assureur</option>
                <option value="refuse">Refusé par plusieurs assureurs</option>
                <option value="malus">Malus important</option>
                <option value="jeune">Jeune conducteur avec antécédents</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Informations complémentaires</label>
              <textarea rows={4} placeholder="Contexte de votre résiliation, usage du véhicule, besoins spécifiques..." className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-urgent-red focus:outline-none resize-y" value={formData.infos} onChange={e=>setFormData({...formData, infos:e.target.value})}></textarea>
              <p className="text-xs text-gray-500 mt-2">Ces détails nous aident à vous proposer une solution adaptée plus rapidement.</p>
            </div>
            {error && <div role="alert" className="mb-4 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded">{error}</div>}
            <button disabled={sending} className="w-full bg-urgent-red disabled:opacity-60 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 flex items-center justify-center gap-2 transition shadow-lg" type="submit">
              <Phone size={24} /> {sending ? 'Envoi...' : 'Être rappelé sous 15 minutes'}
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">🔒 Vos données sont protégées et conformes RGPD</p>
          </form>
        </div>
      </div>
    </>
  )
}
