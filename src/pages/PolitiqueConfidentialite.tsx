import React from 'react'
import { useMeta } from '../hooks/useMeta'

export default function PolitiqueConfidentialite() {
  useMeta(
    'Politique de confidentialité - PREVO Assurance',
    'Politique de confidentialité et gestion des données personnelles chez PREVO Assurance.'
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Politique de Confidentialité</h1>

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Collecte de données</h2>
          <p>
            PREVO Assurance collecte les informations personnelles que vous nous communiquez volontairement,
            notamment lors du remplissage de formulaires de contact ou de demande de devis.
          </p>
          <p>
            Les données collectées peuvent inclure : nom, prénom, adresse email, numéro de téléphone,
            informations sur votre véhicule et votre situation d'assurance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Utilisation des données</h2>
          <p>
            Vos données personnelles sont utilisées pour :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Vous fournir les services demandés</li>
            <li>Vous contacter pour des devis ou des offres commerciales</li>
            <li>Améliorer notre service</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Partage des données</h2>
          <p>
            Vos données peuvent être partagées avec nos partenaires assureurs pour vous fournir des devis
            et des offres adaptées à votre situation. Nous ne vendons jamais vos données à des tiers non autorisés.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Sécurité des données</h2>
          <p>
            Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données
            personnelles contre tout accès non autorisé ou perte.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Conservation des données</h2>
          <p>
            Vos données personnelles sont conservées aussi longtemps que nécessaire pour les finalités pour lesquelles
            elles ont été collectées, conformément à la législation en vigueur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Droits des utilisateurs (RGPD)</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous avez le droit :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>D'accéder à vos données personnelles</li>
            <li>De demander la rectification de vos données</li>
            <li>De demander la suppression de vos données</li>
            <li>De vous opposer au traitement de vos données</li>
            <li>De demander la portabilité de vos données</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez contrôler l'utilisation
            des cookies via les paramètres de votre navigateur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Contact</h2>
          <p>
            Pour toute question concernant vos données personnelles ou cette politique de confidentialité,
            veuillez nous <a href="/contact" className="text-urgent-red font-bold hover:underline">contacter</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Modifications</h2>
          <p>
            Cette politique de confidentialité peut être modifiée à tout moment. Les modifications
            prennent effet dès leur publication sur le site.
          </p>
        </section>
      </div>

      <div className="mt-12 bg-urgent-red/10 border border-urgent-red rounded-lg p-6">
        <p className="text-gray-700 dark:text-gray-300">
          Mise à jour : février 2026
        </p>
      </div>
    </div>
  )
}
