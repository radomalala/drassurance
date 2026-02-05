import React from 'react'
import { useMeta } from '../hooks/useMeta'

export default function GestionCookies() {
  useMeta(
    'Gestion des cookies - PREVO Assurance',
    'Politique de gestion des cookies et consentement utilisateur chez PREVO Assurance.'
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Gestion des Cookies</h1>

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite sur notre site.
            Les cookies permettent d'améliorer votre expérience en mémorisant vos préférences et vos interactions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Types de cookies utilisés</h2>
          
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Cookies essentiels</h3>
          <p>
            Ces cookies sont nécessaires au fonctionnement du site (authentification, sécurité).
            Ils ne peuvent pas être désactivés.
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 mt-4">Cookies de performance</h3>
          <p>
            Ces cookies nous aident à comprendre comment vous utilisez le site (nombre de visites, pages consultées).
            Cela nous permet d'améliorer notre service.
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 mt-4">Cookies de personnalisation</h3>
          <p>
            Ces cookies mémorisent vos préférences (langue, thème sombre/clair) pour améliorer votre expérience.
          </p>

          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 mt-4">Cookies publicitaires</h3>
          <p>
            Nous utilisons des cookies pour afficher des publicités pertinentes. Vous pouvez les désactiver.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Consentement</h2>
          <p>
            Conformément à la réglementation (RGPD, ePrivacy), nous recueillons votre consentement avant d'utiliser
            des cookies non essentiels. Un bandeau de consentement s'affiche à votre première visite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Comment gérer les cookies ?</h2>
          <p>
            Vous pouvez modifier les paramètres des cookies dans les préférences de votre navigateur :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Google Chrome :</strong> Menu → Paramètres → Confidentialité → Cookies</li>
            <li><strong>Firefox :</strong> Menu → Paramètres → Vie privée → Cookies et données de sites</li>
            <li><strong>Safari :</strong> Préférences → Confidentialité → Gérer les données de sites web</li>
            <li><strong>Edge :</strong> Paramètres → Confidentialité → Cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Durée de conservation</h2>
          <p>
            Les cookies sont généralement conservés pendant une durée limitée (de quelques jours à quelques années).
            Vous pouvez les supprimer à tout moment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Outils externes</h2>
          <p>
            Notre site peut utiliser des outils externes (Google Analytics, etc.) qui utilisent leurs propres cookies.
            Nous vous recommandons de consulter leur politique de confidentialité respective.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modification de cette politique</h2>
          <p>
            PREVO Assurance peut modifier cette politique de gestion des cookies à tout moment.
            Les modifications prennent effet dès leur publication.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nous contacter</h2>
          <p>
            Si vous avez des questions concernant notre utilisation des cookies,
            veuillez nous <a href="/contact" className="text-urgent-red font-bold hover:underline">contacter</a>.
          </p>
        </section>
      </div>

      <div className="mt-12 bg-urgent-red/10 border border-urgent-red rounded-lg p-6">
        <h3 className="font-bold text-gray-900 dark:text-white mb-2">Paramètres de consentement</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          À tout moment, vous pouvez modifier vos préférences de consentement en utilisant le bouton
          de gestion des cookies présent en bas de chaque page.
        </p>
        <button className="bg-urgent-red text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
          Gérer mes préférences
        </button>
      </div>
    </div>
  )
}
