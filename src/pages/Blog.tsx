import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'

export default function Blog() {
  useMeta(
    'Blog PREVO Assurance - Conseils et actualités assurance auto résiliée',
    'Découvrez nos articles sur l\'assurance auto pour conducteurs résiliés, malussés ou refusés. Conseils, actualités et guides pratiques.'
  )

  const articles = [
    {
      id: 'resiliation-auto-consequences',
      title: 'Les conséquences d\'une résiliation d\'assurance auto',
      excerpt: 'Comprendre les impacts réels d\'une résiliation et comment les atténuer avec un bon accompagnement.',
      date: '2025-02-01',
      author: 'Dr Assurance',
      category: 'Résiliation',
      readTime: '5 min',
    },
    {
      id: 'rehaussement-tarif-assurance',
      title: 'Comment réduire votre tarif d\'assurance après une résiliation ?',
      excerpt: 'Découvrez les stratégies et solutions pour obtenir les meilleures tarifications malgré votre historique.',
      date: '2025-01-28',
      author: 'PREVO Experts',
      category: 'Conseils',
      readTime: '7 min',
    },
    {
      id: 'assurance-jeune-conducteur-resilie',
      title: 'Assurance jeune conducteur résilié : comment s\'en sortir ?',
      excerpt: 'Les défis spécifiques aux jeunes conducteurs résiliés et les solutions adaptées pour retrouver une couverture.',
      date: '2025-01-25',
      author: 'Dr Assurance',
      category: 'Jeunes Conducteurs',
      readTime: '6 min',
    },
    {
      id: 'fausse-declaration-assurance',
      title: 'Fausse déclaration à l\'assurance : comment régulariser ?',
      excerpt: 'Guide complet pour comprendre les conséquences d\'une fausse déclaration et comment les résoudre.',
      date: '2025-01-20',
      author: 'PREVO Experts',
      category: 'Actualité',
      readTime: '8 min',
    },
    {
      id: 'sinistralite-assurance-auto',
      title: 'Sinistralité élevée : comment trouver une assurance ?',
      excerpt: 'Si vous avez eu plusieurs sinistres, découvrez comment retrouver une couverture adaptée et abordable.',
      date: '2025-01-18',
      author: 'Dr Assurance',
      category: 'Sinistres',
      readTime: '6 min',
    },
    {
      id: 'malus-assurance-demarche',
      title: 'Malus assurance : comprendre et gérer votre coefficient',
      excerpt: 'Explication du coefficient malus et les moyens de le réduire progressivement avec une bonne pratique.',
      date: '2025-01-15',
      author: 'PREVO Experts',
      category: 'Malus',
      readTime: '7 min',
    },
    {
      id: 'comparer-assurance-refuse-partout',
      title: 'Assurance auto résiliée : comment comparer efficacement les offres quand on est refusé partout',
      excerpt: 'Découvrez comment comparer les assurances auto en tant que conducteur résilié ou refusé avec un comparateur spécialisé.',
      date: '2025-02-05',
      author: 'PREVO Experts',
      category: 'Conseils',
      readTime: '7 min',
    },
  ]

  const categories = ['Tous', 'Résiliation', 'Conseils', 'Jeunes Conducteurs', 'Actualité', 'Sinistres', 'Malus']

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-50 to-white dark:from-slate-900 dark:to-slate-950 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Blog PREVO Assurance
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            Conseils, actualités et guides pratiques pour naviguer votre résiliation d'assurance
          </p>
          <p className="text-lg text-urgent-red font-semibold">
            🚨 Résilié ? Malussé ? Refusé ? On a une solution pour vous
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full font-medium transition ${
                cat === 'Tous'
                  ? 'bg-urgent-red text-white'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-urgent-red hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition border border-gray-100 dark:border-slate-700 overflow-hidden hover:border-urgent-red dark:hover:border-urgent-red"
            >
              <div className="h-48 bg-gradient-to-br from-urgent-red to-red-700 dark:from-slate-700 dark:to-slate-900 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <p className="text-sm font-semibold text-red-100 mb-2">{article.category}</p>
                  <p className="text-sm opacity-90">{article.readTime}</p>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-urgent-red transition line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {new Date(article.date).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {article.author}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-urgent-red font-semibold group-hover:gap-3 transition">
                  Lire l'article
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-urgent-red to-red-700 text-white py-16 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vous avez besoin d'une assurance immédiatement ?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            N'attendez pas - PREVO vous accompagne vers la meilleure solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33753319064"
              className="inline-block bg-white text-urgent-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              📞 Nous appeler
            </a>
            <Link
              to="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-urgent-red transition"
            >
              ✉️ Formulaire de contact
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
