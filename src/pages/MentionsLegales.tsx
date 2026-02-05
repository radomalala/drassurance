import React from 'react'
import { useMeta } from '../hooks/useMeta'

export default function MentionsLegales() {
  useMeta(
    'Mentions légales - PREVO Assurance',
    'Mentions légales du comparateur PREVO Assurance, spécialisé en assurance auto résiliée.'
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Mentions Légales</h1>

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Informations sur le site</h2>
          <p>
            <strong>Nom du site :</strong> PREVO Assurance
          </p>
          <p>
            <strong>Type :</strong> Comparateur d'assurance automobile
          </p>
          <p>
            <strong>Spécialisation :</strong> Assurance auto pour conducteurs résiliés, malussés ou refusés
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Responsable du site</h2>
          <p>
            Le présent site est édité par PREVO Assurance, société spécialisée en assurance automobile.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Hébergement</h2>
          <p>
            Le site est hébergé sur les serveurs optimisés pour garantir une performance et une sécurité maximales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus du site (textes, images, graphiques, logos) sont la propriété de PREVO Assurance ou de ses partenaires.
            Toute reproduction ou représentation, intégrale ou partielle, sans autorisation préalable est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Responsabilité</h2>
          <p>
            PREVO Assurance ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site.
            Les informations fournies sont données à titre informatif. Pour tout changement ou correction de vos données,
            veuillez nous contacter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Liens externes</h2>
          <p>
            Le site peut contenir des liens vers des sites externes. PREVO Assurance n'est pas responsable du contenu de ces sites
            ni de leurs politiques de confidentialité.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modification des mentions légales</h2>
          <p>
            PREVO Assurance se réserve le droit de modifier les présentes mentions légales à tout moment.
            Les modifications prennent effet dès leur mise en ligne.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français.
            Tout litige en découlant sera de la compétence des tribunaux français.
          </p>
        </section>
      </div>

      <div className="mt-12 bg-urgent-red/10 border border-urgent-red rounded-lg p-6">
        <p className="text-gray-700 dark:text-gray-300">
          Pour toute question relative à ces mentions légales, veuillez nous <a href="/contact" className="text-urgent-red font-bold hover:underline">contacter</a>.
        </p>
      </div>
    </div>
  )
}
