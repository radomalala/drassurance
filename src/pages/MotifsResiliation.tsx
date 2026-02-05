import React from 'react'
import { useMeta } from '../hooks/useMeta'
import { AlertCircle, CreditCard, Wrench, TrendingDown, FileText, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MotifsResiliation(){
  useMeta('Motifs de Résiliation Assurance Auto - PREVO Assurance', 'Comprendre les motifs de résiliation assurance auto et trouver une solution. PREVO assure les conducteurs résiliés.')
  const motifs = [
    {
      id: 'non-paiement',
      title: 'Non-paiement des primes',
      description: 'Résilié après impayé ou retard de paiement',
      icon: CreditCard,
      color: 'red'
    },
    {
      id: 'retrait-suspension',
      title: 'Retrait ou suspension de permis',
      description: 'Alcoolémie, excès de vitesse, stupéfiants, perte de points',
      icon: AlertCircle,
      color: 'orange'
    },
    {
      id: 'sinistres-repetitifs',
      title: 'Sinistres répétitifs',
      description: 'Trop de sinistres déclarés sur une courte période',
      icon: Wrench,
      color: 'yellow'
    },
    {
      id: 'aggravation-risque',
      title: 'Aggravation du risque',
      description: 'Changement de situation ou utilisation du véhicule',
      icon: TrendingDown,
      color: 'red'
    },
    {
      id: 'fausse-declaration',
      title: 'Fausse déclaration ou omission',
      description: 'Informations inexactes ou volontairement cachées',
      icon: FileText,
      color: 'purple'
    },
    {
      id: 'non-respect-clauses',
      title: 'Non-respect des clauses',
      description: 'Violation des conditions du contrat',
      icon: Shield,
      color: 'blue'
    },
  ]

  const colorMap = {
    red: 'bg-red-50 border-red-200 hover:shadow-xl hover:bg-red-100',
    orange: 'bg-orange-50 border-orange-200 hover:shadow-xl hover:bg-orange-100',
    yellow: 'bg-yellow-50 border-yellow-200 hover:shadow-xl hover:bg-yellow-100',
    purple: 'bg-purple-50 border-purple-200 hover:shadow-xl hover:bg-purple-100',
    blue: 'bg-blue-50 border-blue-200 hover:shadow-xl hover:bg-blue-100',
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Motifs de Résiliation<br />
            <span className="text-urgent-red">Assurance Auto</span>
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Vous avez été résilié ? Comprendre les raisons et trouver une solution rapidement.
          </p>
          <p className="text-lg text-center text-urgent-red font-semibold max-w-2xl mx-auto">
            PREVO assure ceux que les autres refusent – mieux, et moins cher
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {motifs.map((motif) => {
            const Icon = motif.icon
            return (
              <Link
                key={motif.id}
                to={`/resiliation/${motif.id}`}
                className={`border-2 rounded-2xl p-8 transition transform hover:scale-105 cursor-pointer ${colorMap[motif.color as keyof typeof colorMap]}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-12 h-12 text-urgent-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{motif.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{motif.description}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-urgent-red to-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Résilié ? Malussé ? Nous vous assurons mieux et moins cher</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Peu importe votre situation, PREVO trouve une assurance pour vous. Devis gratuit et réponse en 15 minutes.</p>
          <a href="#formulaire" className="inline-block bg-white text-urgent-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg">
            Obtenir un devis express
          </a>
        </div>
      </div>
    </div>
  )
}
