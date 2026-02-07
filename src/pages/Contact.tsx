import React from 'react'
import { Phone, Mail, MapPin, AlertCircle } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'

export default function Contact(){
  useMeta('Contact — urgence assurance auto resilie', 'Contactez-nous : téléphone, email, horaires. Formulaire de contact disponible.');
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">Contactez-nous</h1>
        <p className="text-xl text-center text-gray-600 mb-12">Notre équipe est à votre écoute pour répondre à toutes vos questions</p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Formulaire de Contact</h2>
              <div id="hbspt-form-contact"></div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0"><Phone className="text-urgent-red" size={24} /></div><div><h3 className="font-bold text-gray-900 mb-1">Téléphone</h3><p className="text-gray-600">07 53 31 90 64</p><p className="text-sm text-gray-500">Lun-Ven: 9h-19h | Sam: 9h-13h</p></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0"><Mail className="text-urgent-red" size={24} /></div><div><h3 className="font-bold text-gray-900 mb-1">Email</h3><p className="text-gray-600">sine.sow@prevo.fr</p><p className="text-sm text-gray-500">Réponse en 5mn</p></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0"><MapPin className="text-urgent-red" size={24} /></div><div><h3 className="font-bold text-gray-900 mb-1">Adresse</h3><p className="text-gray-600">9, allée Georges Bizet</p><p className="text-gray-600">95870 Bezons</p></div></div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-urgent-red to-red-700 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Besoin urgent ?</h3>
              <p className="mb-6 opacity-90">Pour une résiliation ou un refus récent, utilisez notre ligne d’urgence</p>
              <a href="/urgence-resiliation" className="w-full bg-white text-urgent-red px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-flex items-center justify-center gap-2"><AlertCircle size={20} />Accéder à l’urgence</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
