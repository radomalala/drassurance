import React from 'react'
import { useMeta } from '../hooks/useMeta'

export default function CGU() {
  useMeta(
    'Conditions Générales d\'Utilisation - PREVO Assurance',
    'Conditions générales d\'utilisation du site et des services PREVO Assurance.'
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Conditions Générales d'Utilisation</h1>

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Objet</h2>
          <p>
            Les présentes Conditions Générales d'Utilisation régissent l'accès et l'utilisation du site PREVO Assurance
            et des services qui y sont proposés.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Accès au site</h2>
          <p>
            L'accès au site est gratuit. PREVO Assurance se réserve le droit de modifier ou d'interrompre
            l'accès au site sans avis préalable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Utilisation du site</h2>
          <p>
            L'utilisateur s'engage à :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Utiliser le site de manière légale et conforme à ces CGU</li>
            <li>Ne pas endommager ou perturber le fonctionnement du site</li>
            <li>Ne pas recourir à des techniques de piratage ou d'intrusion</li>
            <li>Fournir des informations exactes et complètes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Services proposés</h2>
          <p>
            PREVO Assurance propose un service de comparaison d'assurances automobiles destiné aux conducteurs
            résiliés, malussés ou refusés par les assureurs traditionnels.
          </p>
          <p>
            Les informations sur les devis et tarifs sont fournies à titre informatif. Les tarifs finaux
            dépendent de l'acceptation des assureurs partenaires.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Limitation de responsabilité</h2>
          <p>
            PREVO Assurance n'est pas responsable des dommages directs ou indirects résultant de l'utilisation
            ou de l'impossibilité d'utiliser le site, y compris la perte de données ou la perte de revenus.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Informations et devis</h2>
          <p>
            Les devis fournis par PREVO Assurance sont basés sur les informations déclarées par l'utilisateur.
            L'utilisateur s'engage à fournir des informations exactes et complètes.
          </p>
          <p>
            Un devis n'est pas une offre contractuelle. L'assurance n'est effective que si l'utilisateur
            l'accepte et que l'assureur partenaire le confirme.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Propriété intellectuelle</h2>
          <p>
            Tous les contenus du site sont protégés par les droits d'auteur. Leur reproduction ou leur exploitation
            est interdite sans autorisation préalable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Partenaires assureurs</h2>
          <p>
            PREVO Assurance collabore avec des assureurs partenaires. L'acceptation d'une demande de devis
            ou d'une souscription dépend de la décision de ces assureurs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Droit applicable</h2>
          <p>
            Les présentes CGU sont soumises au droit français. Tout litige en résultant sera soumis à la juridiction
            des tribunaux français.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Modifications</h2>
          <p>
            PREVO Assurance se réserve le droit de modifier les CGU à tout moment. Les modifications prennent effet
            dès leur publication. L'utilisation continue du site après les modifications implique votre acceptation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Contact</h2>
          <p>
            Pour toute question concernant ces CGU, veuillez nous <a href="/contact" className="text-urgent-red font-bold hover:underline">contacter</a>.
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
