import React from 'react'
import { useMeta } from '../hooks/useMeta'
import { Link } from 'react-router-dom'
import { Car, Truck, TrendingUp, Home, Wind, Zap } from 'lucide-react'

export default function TypesVehicules(){
  const vehicules = [
    {
      id: 'voiture',
      title: 'Voiture Particulière',
      description: 'Citadine, berline, SUV...',
      icon: Car,
      color: 'blue'
    },
    {
      id: 'taxi-vtc',
      title: 'Taxi & VTC',
      description: 'Utilisation professionnelle intensive',
      icon: Car,
      color: 'purple'
    },
    {
      id: 'vehicule-sans-permis',
      title: 'Véhicule Sans Permis',
      description: 'VSP quadricycle électrique',
      icon: Zap,
      color: 'green'
    },
    {
      id: 'utilitaire',
      title: 'Utilitaire',
      description: 'Fourgon, benne, plateau',
      icon: Truck,
      color: 'orange'
    },
    {
      id: 'camping-car',
      title: 'Camping-car & Caravane',
      description: 'Loisir ou habitation mobile',
      icon: Home,
      color: 'red'
    },
    {
      id: 'poids-lourd',
      title: 'Poids Lourd',
      description: 'Camion, semi-remorque',
      icon: Truck,
      color: 'yellow'
    },
    {
      id: 'nvei',
      title: 'NVEI',
      description: 'Trottinette, hoverboard, skateboard',
      icon: Wind,
      color: 'pink'
    },
  ]

  return (
    <div className="py-16 px-4">
      {useMeta('Assurance Auto par Type de Véhicule - PREVO', 'Assurance pour tous types de véhicules : voiture, taxi, VTC, utilitaire, camping-car, poids lourd, NVEI. PREVO assure même les profils résiliés.')}
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Assurance par Type<br />
            <span className="text-urgent-red">de Véhicule</span>
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Sélectionnez votre type de véhicule pour découvrir les spécificités de votre assurance chez PREVO.
          </p>
          <p className="text-lg text-center text-urgent-red font-semibold max-w-2xl mx-auto">
            Résilié ? Malussé ? Nous vous assurons mieux et moins cher
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {vehicules.map((vehicule) => {
            const Icon = vehicule.icon
            const colorMap = {
              blue: 'bg-blue-50 border-blue-200 hover:shadow-xl hover:bg-blue-100',
              purple: 'bg-purple-50 border-purple-200 hover:shadow-xl hover:bg-purple-100',
              green: 'bg-green-50 border-green-200 hover:shadow-xl hover:bg-green-100',
              orange: 'bg-orange-50 border-orange-200 hover:shadow-xl hover:bg-orange-100',
              red: 'bg-red-50 border-red-200 hover:shadow-xl hover:bg-red-100',
              yellow: 'bg-yellow-50 border-yellow-200 hover:shadow-xl hover:bg-yellow-100',
              pink: 'bg-pink-50 border-pink-200 hover:shadow-xl hover:bg-pink-100',
            }
            return (
              <Link
                key={vehicule.id}
                to={`/vehicules/${vehicule.id}`}
                className={`border-2 rounded-2xl p-6 transition transform hover:scale-105 cursor-pointer ${colorMap[vehicule.color as keyof typeof colorMap]}`}
              >
                <div className="text-center">
                  <Icon className="w-12 h-12 text-urgent-red mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{vehicule.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{vehicule.description}</p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-urgent-red to-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Tous les Véhicules, Tous les Profils</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Peu importe votre type de véhicule, PREVO trouve une assurance adaptée à votre situation. Devis gratuit et réponse en 15 minutes.</p>
          <a href="/#formulaire" className="inline-block bg-white text-urgent-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg">
            Obtenir un devis express
          </a>
        </div>
      </div>
    </div>
  )
}
