import React, { useState } from 'react'
import { AlertCircle, Phone, CheckCircle, Clock, Award } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'

export default function Home(){
  const [formData, setFormData] = useState({ nom:'', tel:'', situation:'' })
  const [ok, setOk] = useState(false)
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOk(true); setTimeout(()=>setOk(false), 4000);
    setFormData({ nom:'', tel:'', situation:'' })
  }
  return (
    <>
      {useMeta('Assurance Auto Résilié | La Clinique des Résiliés', "Cabinet spécialisé en assurance auto pour conducteurs résiliés, malussés ou refusés. Programme de réhabilitation en 3 niveaux. Devis sous 2h.")}
      {ok && (
        <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl z-50">
          Merci ! Nous vous rappelons sous 2h.
        </div>
      )}

      <div className="bg-gradient-to-br from-red-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              RÉSILIÉ • MALUSSÉ • REFUSÉ
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              On vous assure<br />
              <span className="text-urgent-red">aujourd’hui</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Le seul cabinet qui vous accompagne, année après année, jusqu’à redevenir un profil standard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/urgence-resiliation" className="bg-urgent-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 flex items-center justify-center gap-2 shadow-lg transition">
                <AlertCircle size={24} /> URGENCE RÉSILIATION
              </a>
              <a href="#formulaire" className="bg-white text-gray-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 border-2 border-gray-300 text-center transition">
                Devis en 2 minutes
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Clock size={16} /> Réponse sous 2h</div>
              <div className="flex items-center gap-2"><CheckCircle size={16} /> Sans engagement</div>
              <div className="flex items-center gap-2"><Award size={16} /> 87% satisfaits</div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="text-6xl">🚗</div>
                  </div>
                  <div className="absolute top-8 right-8 bg-white border-2 border-red-400 rounded px-2 py-1 text-2xl rotate-12">🩹</div>
                  <div className="absolute bottom-0 right-12 text-4xl">🩺</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Auto</h3>
                <p className="text-gray-600">Votre spécialiste en réhabilitation assurantielle</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Notre Programme de Réhabilitation</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">Un parcours progressif sur 3 niveaux pour retrouver des tarifs standards</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 relative">
              <div className="absolute -top-4 left-6 bg-urgent-red text-white px-4 py-1 rounded-full text-sm font-bold">NIVEAU 1</div>
              <div className="mt-4">
                <div className="w-16 h-16 bg-urgent-red rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Soins Intensifs</h3>
                <p className="text-gray-700 mb-4">Résiliation, refus, malus lourd</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-urgent-red flex-shrink-0" /> Assurance immédiate</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-urgent-red flex-shrink-0" /> Même profil complexe</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-urgent-red flex-shrink-0" /> Tarif adapté</li>
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Retour Standard</h3>
                <p className="text-gray-700 mb-4">Profil réhabilité</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-progress-green flex-shrink-0" /> Assurable partout</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-progress-green flex-shrink-0" /> Meilleurs tarifs</li>
                  <li className="flex items-start gap-2"><CheckCircle size={16} className="mt-0.5 text-progress-green flex-shrink-0" /> Autonomie retrouvée</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Devis Express</h2>
            <p className="text-gray-600">Remplissez le formulaire, nous vous rappelons sous 2h</p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                <input required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-urgent-red focus:outline-none" placeholder="Jean Dupont" value={formData.nom} onChange={e=>setFormData({...formData, nom:e.target.value})} />
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
            <button className="w-full bg-urgent-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 flex items-center justify-center gap-2 transition shadow-lg" type="submit">
              <Phone size={24} /> Être rappelé sous 2h
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">🔒 Vos données sont protégées et conformes RGPD</p>
          </form>
        </div>
      </div>
    </>
  )
}
