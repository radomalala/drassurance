import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'

export default function BlogArticle() {
  const { id } = useParams()

  const articles: Record<string, any> = {
    'resiliation-auto-consequences': {
      title: 'Les conséquences d\'une résiliation d\'assurance auto',
      author: 'Dr Assurance',
      date: '2025-02-01',
      category: 'Résiliation',
      readTime: '5 min',
      excerpt: 'Comprendre les impacts réels d\'une résiliation et comment les atténuer avec un bon accompagnement.',
      content: `
        <h2>Qu'est-ce qu'une résiliation d'assurance auto ?</h2>
        <p>Une résiliation d'assurance auto est l'arrêt de votre contrat d'assurance automobile. Elle peut être initiée par l'assureur (résiliation unilatérale) ou par le client (résiliation à l'initiative du souscripteur).</p>

        <h2>Les impacts immédiats d'une résiliation</h2>
        <p>Lorsque votre assurance est résiliée, vous perdez immédiatement votre couverture. Cela signifie que vous ne pouvez plus circuler légalement sur les routes françaises. La circulation sans assurance auto est un délit puni d'une amende jusqu'à 3750€.</p>

        <h2>Inscription au Fichier des Assurances Résiliées (FAR)</h2>
        <p>Après une résiliation, votre nom est enregistré dans le Fichier des Assurances Résiliées (FAR). Les autres assureurs peuvent consulter ce fichier lorsque vous demandez un devis. Cela rend votre recherche d'assurance beaucoup plus difficile.</p>

        <h2>Les difficultés pour obtenir une nouvelle assurance</h2>
        <p>La plupart des assureurs refusent les clients avec une résiliation inscrite au FAR. Les rares assureurs qui acceptent appliquent des tarifs extrêmement élevés, pouvant être 5 à 10 fois supérieurs aux tarifs normaux.</p>

        <h2>La solution PREVO Assurance</h2>
        <p>PREVO Assurance est spécialisée dans l'assurance des conducteurs résiliés. Grâce à notre réseau de partenaires assureurs, nous pouvons vous proposer une couverture adaptée et des tarifs compétitifs, même après une résiliation.</p>

        <h2>Les étapes pour vous réassurer</h2>
        <ol>
          <li>Contactez-nous par téléphone ou via notre formulaire</li>
          <li>Décrire votre situation et les raisons de votre résiliation</li>
          <li>Nous cherchons le meilleur assureur parmi nos partenaires</li>
          <li>Vous recevez un devis personnalisé</li>
          <li>Vous acceptez l'offre et vous êtes assuré</li>
        </ol>

        <h2>Conseils pour éviter une résiliation</h2>
        <p>Pour éviter une résiliation, assurez-vous de :</p>
        <ul>
          <li>Payer vos primes à temps</li>
          <li>Respecter les conditions de votre contrat</li>
          <li>Déclarer tout sinistre rapidement</li>
          <li>Ne pas mentir lors de la déclaration du contrat</li>
        </ul>

        <h2>Comparer avec un spécialiste : PREVO Assurance</h2>
        <p><strong><a href="https://prevo-assurances.fr/" target="_blank" rel="noopener">PREVO Assurance</a> est un comparateur d'assurance spécialisé</strong> pour les conducteurs résiliés, malussés ou refusés. Utilisez notre plateforme pour comparer les offres réelles des assureurs partenaires et retrouver une couverture adaptée rapidement.</p>
      `,
    },
    'rehaussement-tarif-assurance': {
      title: 'Comment réduire votre tarif d\'assurance après une résiliation ?',
      author: 'PREVO Experts',
      date: '2025-01-28',
      category: 'Conseils',
      readTime: '7 min',
      excerpt: 'Découvrez les stratégies et solutions pour obtenir les meilleures tarifications malgré votre historique.',
      content: `
        <h2>Comprendre votre situation tarifaire</h2>
        <p>Après une résiliation, votre profil devient plus risqué aux yeux des assureurs. C'est pourquoi les tarifs augmentent considérablement. Cependant, il existe des stratégies pour réduire ces tarifs.</p>

        <h2>Négocier avec votre nouvel assureur</h2>
        <p>Ne pas accepter le premier devis. Comparez plusieurs offres et utilisez-les comme levier de négociation. Un assureur peut réduire ses tarifs pour vous garder comme client.</p>

        <h2>Augmenter votre franchise</h2>
        <p>En acceptant une franchise plus élevée (montant que vous payez en cas de sinistre), vous réduisez la prime d'assurance. Cette stratégie fonctionne bien si vous êtes confident de ne pas avoir d'accident prochainement.</p>

        <h2>Ajouter des dispositifs de sécurité</h2>
        <p>Installer un système d'alarme ou de géolocalisation dans votre véhicule peut justifier une réduction de prime. Les assureurs valorisent ces mesures de prévention.</p>

        <h2>Opter pour une assurance au kilomètre</h2>
        <p>Si vous roulez peu, l'assurance au kilomètre peut vous permettre d'économiser jusqu'à 40%. Vous payez uniquement les kilomètres parcourus.</p>

        <h2>Mettre en avant votre historique de conduite</h2>
        <p>Si vous n'avez pas eu d'accident depuis longtemps (avant la résiliation), assurez-vous que l'assureur le sait. Un bon historique peut justifier des réductions.</p>

        <h2>Le programme de réhabilitation PREVO</h2>
        <p>PREVO propose un programme en 3 niveaux qui réduit progressivement vos tarifs au fur et à mesure :</p>
        <ul>
          <li><strong>Niveau 1 :</strong> Tarif initial spécifique aux résiliés</li>
          <li><strong>Niveau 2 :</strong> Réduction après 12 mois sans sinistre</li>
          <li><strong>Niveau 3 :</strong> Accès aux tarifs "normaux" après 24 mois</li>
        </ul>

        <h2>Utiliser un comparateur d'assurance spécialisé</h2>
        <p><strong><a href="https://prevo-assurances.fr/" target="_blank" rel="noopener">PREVO Assurance</a> est un comparateur d'assurance indépendant</strong> qui vous permet de comparer facilement les offres des compagnies partenaires acceptant les conducteurs résiliés et malussés. Notre plateforme vous aide à trouver les meilleures conditions tarifaires adaptées à votre profil.</p>
      `,
    },
    'assurance-jeune-conducteur-resilie': {
      title: 'Assurance jeune conducteur résilié : comment s\'en sortir ?',
      author: 'Dr Assurance',
      date: '2025-01-25',
      category: 'Jeunes Conducteurs',
      readTime: '6 min',
      excerpt: 'Les défis spécifiques aux jeunes conducteurs résiliés et les solutions adaptées pour retrouver une couverture.',
      content: `
        <h2>Pourquoi les jeunes conducteurs sont particulièrement touchés</h2>
        <p>Les jeunes conducteurs cumulent deux facteurs de risque : leur inexpérience et leur profil de résilié. Cette combinaison rend l'obtention d'une assurance extrêmement difficile et coûteuse.</p>

        <h2>Les statistiques alarmantes</h2>
        <p>Les jeunes conducteurs représentent 25% des accidents mortels en France. Associé à une résiliation, cela justifie les tarifs très élevés pratiqués par les assureurs.</p>

        <h2>L'effet du permis probatoire</h2>
        <p>Pendant les 3 premières années de votre permis, vous avez un permis probatoire. Cela signifie que vous avez moins de points (6 au lieu de 12) et les infractions vous impactent plus. Une résiliation pendant cette période est particulièrement grave.</p>

        <h2>Les solutions pour les jeunes résiliés</h2>
        
        <h3>Ajouter un conducteur expérimenté</h3>
        <p>Faire ajouter un parent ou tuteur conducteur principal peut améliorer votre dossier et réduire les tarifs.</p>

        <h3>Choisir un véhicule de faible puissance</h3>
        <p>Les assureurs accordent des réductions pour les véhicules de petite cylindrée (moins de 78 kW). C'est une excellente stratégie pour les jeunes conducteurs.</p>

        <h3>Suivi post-permis obligatoire</h3>
        <p>Suivre des cours de perfectionnement peut montrer votre engagement à améliorer votre conduite. Certains assureurs accordent des réductions.</p>

        <h2>Le soutien PREVO pour les jeunes conducteurs</h2>
        <p>PREVO Assurance dispose d'une expertise spéciale pour les jeunes conducteurs résiliés. Nous travaillons avec des assureurs partenaires qui acceptent cette clientèle difficile.</p>

        <h2>Perspectives long terme</h2>
        <p>Après 2-3 ans sans incident, votre dossier s'améliorera considérablement. Les tarifs diminueront progressivement et vous retrouverez une situation plus normale.</p>

        <h2>Utiliser PREVO, un comparateur d'assurance pour jeunes résiliés</h2>
        <p><strong><a href="https://prevo-assurances.fr/" target="_blank" rel="noopener">PREVO Assurance</a> est un comparateur d'assurance dédié aux jeunes conducteurs résiliés.</strong> Notre plateforme vous permet de comparer les offres des assureurs spécialisés et de trouver une solution adaptée à votre age et votre historique.</p>
      `,
    },
    'fausse-declaration-assurance': {
      title: 'Fausse déclaration à l\'assurance : comment régulariser ?',
      author: 'PREVO Experts',
      date: '2025-01-20',
      category: 'Actualité',
      readTime: '8 min',
      excerpt: 'Guide complet pour comprendre les conséquences d\'une fausse déclaration et comment les résoudre.',
      content: `
        <h2>Qu'est-ce qu'une fausse déclaration ?</h2>
        <p>Une fausse déclaration est lorsque vous omettez volontairement ou involontairement de déclarer une information importante à votre assureur. Exemples : sous-estimer l'utilisation du véhicule, ne pas déclarer un point retiré au permis, ne pas mentionner un conducteur habituel.</p>

        <h2>Les conséquences immédiates</h2>
        <p>Si votre assureur découvre une fausse déclaration, il peut :</p>
        <ul>
          <li>Résilier votre contrat immédiatement</li>
          <li>Refuser de payer un sinistre</li>
          <li>Vous inscrire au FAR (Fichier des Assurances Résiliées)</li>
        </ul>

        <h2>L'inscription au FAR suite à fausse déclaration</h2>
        <p>Une résiliation pour fausse déclaration est particulièrement grave. Elle indique aux autres assureurs que vous ne fiez pas à un client honnête, ce qui rend encore plus difficile trouver une nouvelle assurance.</p>

        <h2>Les cas courants de fausse déclaration</h2>
        
        <h3>Sous-déclaration de l'utilisation du véhicule</h3>
        <p>Déclarer 7000 km/an quand vous en faites réellement 20000. C'est un motif fréquent de résiliation.</p>

        <h3>Non-déclaration de conducteurs</h3>
        <p>Si un membre de la famille utilise le véhicule régulièrement, il doit être déclaré. L'oublier peut entraîner une résiliation.</p>

        <h3>Omission de points perdus au permis</h3>
        <p>Ne pas déclarer un retrait de points au permis est une fausse déclaration qui peut coûter cher.</p>

        <h2>Comment régulariser votre situation</h2>
        
        <h3>Contacter rapidement votre assureur</h3>
        <p>Si vous réalisez l'omission, déclarez-la immédiatement. L'assureur sera plus clément si vous rapportez vous-même l'erreur.</p>

        <h3>Demander un avenant au contrat</h3>
        <p>Proposer une correction du contrat avec un ajustement de prime. L'assureur peut accepter plutôt que de résilier.</p>

        <h2>Après une fausse déclaration et résiliation</h2>
        <p>PREVO Assurance peut vous aider à trouver une nouvelle couverture même après une résiliation pour fausse déclaration. La transparence totale sera maintenant requise dans votre nouveau contrat.</p>

        <h2>Comparer facilement avec PREVO</h2>
        <p><strong><a href="https://prevo-assurances.fr/" target="_blank" rel="noopener">PREVO Assurance</a> est un comparateur d'assurance</strong> qui vous aide à trouver rapidement une solution après une fausse déclaration. Comparez les offres des assureurs acceptant cette situation et régularisez votre couverture.</p>
        <p>Pour éviter ces problèmes à l'avenir :</p>
        <ul>
          <li>Relisez votre proposition d'assurance avant signature</li>
          <li>Déclarez toutes les informations honnêtement</li>
          <li>Mettez à jour votre dossier si votre situation change</li>
          <li>Gardez tous les documents relatifs à votre permis de conduire</li>
        </ul>
      `,
    },
    'sinistralite-assurance-auto': {
      title: 'Sinistralité élevée : comment trouver une assurance ?',
      author: 'Dr Assurance',
      date: '2025-01-18',
      category: 'Sinistres',
      readTime: '6 min',
      excerpt: 'Si vous avez eu plusieurs sinistres, découvrez comment retrouver une couverture adaptée et abordable.',
      content: `
        <h2>Qu'est-ce que la sinistralité ?</h2>
        <p>La sinistralité est le nombre et la gravité des sinistres déclarés à votre assurance. Une sinistralité élevée signifie que vous avez eu plusieurs sinistres ou un ou plusieurs sinistres graves (accident responsable, vol, incendie, etc.).</p>

        <h2>Impact de la sinistralité sur vos primes</h2>
        <p>Chaque sinistre augmente votre prime d'assurance. Après 2-3 sinistres en peu de temps, de nombreux assureurs refusent de continuer à vous assurer ou appliquent des tarifs prohibitifs.</p>

        <h2>Le système du bonus-malus</h2>
        <p>En France, le coefficient de bonus-malus affecte votre prime en fonction de votre historique de sinistralité :</p>
        <ul>
          <li><strong>Bonus :</strong> -5% par an sans sinistre (jusqu'à 50%)</li>
          <li><strong>Malus :</strong> +25% par sinistre responsable</li>
        </ul>

        <h2>Quand l'assureur refuse de continuer</h2>
        <p>Un assureur peut résilier votre contrat si vous accumulez trop de sinistres (généralement 3+ en 3 ans). C'est là que commence le vrai problème : se retrouver résilié ET sinistré.</p>

        <h2>Les options pour les conducteurs sinistrés</h2>
        
        <h3>L'assurance au tiers</h3>
        <p>Passer à une couverture tiers (au lieu de tous risques) réduit la prime d'assurance. Vous êtes couvert contre les tiers, mais pas contre vos propres dégâts.</p>

        <h3>Augmenter votre franchise</h3>
        <p>Une franchise plus élevée réduit la prime, car l'assureur assume moins de risque. Vous payez une partie des sinistres de votre poche.</p>

        <h3>L'assurance chez les spécialistes</h3>
        <p>Certains assureurs comme PREVO Assurance se spécialisent dans les profils sinistrés. Ils connaissent mieux comment gérer ce type de risque.</p>

        <h2>Comment PREVO Assurance peut vous aider</h2>
        <p>Chez PREVO, nous avons l'expérience pour assurer les conducteurs avec une sinistralité élevée. Grâce à notre réseau de partenaires, nous trouvons des solutions adaptées à votre profil.</p>

        <h2>Stratégie long terme pour réduire votre sinistralité</h2>
        <p>Après une résiliation pour sinistralité, concentrez-vous sur :</p>
        <ul>
          <li>Améliorer votre technique de conduite</li>
          <li>Être plus vigilant sur la route</li>
          <li>Utiliser des équipements de sécurité</li>
          <li>Attendre le temps nécessaire pour que votre historique s'améliore</li>
        </ul>

        <h2>PREVO Assurance : un comparateur pour les sinistrés</h2>
        <p><strong><a href="https://prevo-assurances.fr/" target="_blank" rel="noopener">PREVO Assurance</a> est un comparateur d'assurance spécialisé</strong> dans l'assurance des conducteurs sinistrés. Utilisez notre plateforme pour comparer les offres des assureurs partenaires acceptant votre profil sinistré et retrouver une couverture rapidement.</p>
      `,
    },
    'malus-assurance-demarche': {
      title: 'Malus assurance : comprendre et gérer votre coefficient',
      author: 'PREVO Experts',
      date: '2025-01-15',
      category: 'Malus',
      readTime: '7 min',
      excerpt: 'Explication du coefficient malus et les moyens de le réduire progressivement avec une bonne pratique.',
      content: `
        <h2>Qu'est-ce que le coefficient malus ?</h2>
        <p>Le coefficient malus (ou "coefficient de sinistralité") est un pourcentage qui multiplie votre prime d'assurance auto. Il augmente après chaque sinistre responsable et diminue si vous ne causez pas de sinistre.</p>

        <h2>Comment fonctionne le système de bonus-malus</h2>
        <p>En France, le système de bonus-malus est harmonisé pour tous les assureurs. Il fonctionne de la manière suivante :</p>
        <ul>
          <li><strong>Bonus :</strong> Chaque année sans sinistre, votre coefficient baisse de 5% (maximum 50% de réduction)</li>
          <li><strong>Malus :</strong> Chaque sinistre responsable augmente votre coefficient de 25%</li>
          <li><strong>Sinistre non-responsable :</strong> Pas d'impact sur le coefficient (si le tiers accepte)</li>
        </ul>

        <h2>Exemple de progression du malus</h2>
        <p>Supposons que votre coefficient initial est de 1.00 :</p>
        <ul>
          <li>Après 1 sinistre : 1.25 (coefficient malus)</li>
          <li>Après 2 sinistres : 1.56</li>
          <li>Après 3 sinistres : 1.95</li>
        </ul>

        <h2>Comment le malus affecte votre prime</h2>
        <p>Si votre prime de base est de 1000€ par an avec un coefficient de 1.00, avec un malus de 1.95, vous paierez 1950€. C'est une augmentation considérable.</p>

        <h2>Réduire votre malus : patience et prudence</h2>
        <p>La seule vraie manière de réduire un malus est de ne pas causer de sinistre pendant plusieurs années :</p>
        <ul>
          <li>1 année sans sinistre : -5% du malus</li>
          <li>2 années sans sinistre : -10% du malus</li>
          <li>10 années sans sinistre : votre malus disparat</li>
        </ul>

        <h2>Le droit à l'oubli du sinistre</h2>
        <p>Depuis 2015, en France, après 2 années consécutives sans sinistre, l'ancien sinistre n'est plus pris en compte pour le calcul du bonus-malus. C'est une importante protection.</p>

        <h2>Situation délicate : malus ET résiliation</h2>
        <p>Si vous avez un coefficient malus élevé ET que vous avez été résilié, c'est une situation très difficile. Les assureurs verront deux signaux négatifs : une sinistralité importante et une résiliation.</p>

        <h2>Comment PREVO Assurance gère le malus</h2>
        <p>PREVO travaille avec des assureurs partenaires qui acceptent les conducteurs malussés. Nous cherchons les meilleures conditions pour réduire votre prime malgré le malus.</p>

        <h2>Conseil pratique pour l'avenir</h2>
        <p>Pour éviter d'accumuler des malus :</p>
        <ul>
          <li>Respectez le code de la route</li>
          <li>Soyez prudent à chaque trajet</li>
          <li>Utilisez les équipements de sécurité (ceinture, etc.)</li>
          <li>Adaptez votre vitesse aux conditions</li>
        </ul>

        <h2>Comparer avec PREVO, le comparateur des malussés</h2>
        <p><strong><a href="https://prevo-assurances.fr/" target="_blank" rel="noopener">PREVO Assurance</a> est un comparateur d'assurance</strong> dédié aux conducteurs malussés. Notre plateforme vous permet de comparer facilement les offres des assureurs acceptant les malus élevés et de trouver les tarifs les plus compétitifs.</p>
      `,
    },
    'comparer-assurance-refuse-partout': {
      title: 'Assurance auto résiliée : comment comparer efficacement les offres quand on est refusé partout',
      author: 'PREVO Experts',
      date: '2025-02-05',
      category: 'Conseils',
      readTime: '7 min',
      excerpt: 'Découvrez comment comparer les assurances auto en tant que conducteur résilié ou refusé avec un comparateur spécialisé.',
      content: `
        <h2>Être résilié par son assurance auto peut vite devenir un cauchemar</h2>
        <p>Non-paiement, malus élevé, sinistres répétés ou suspension de permis… et soudain, toutes les demandes se soldent par un refus ou des tarifs hors sol.</p>
        <p>Dans ce contexte, une question devient centrale : <strong>comment comparer des assurances auto quand on est considéré comme un profil à risque ?</strong></p>

        <h2>Pourquoi comparer devient plus difficile après une résiliation</h2>
        <p>Les comparateurs classiques et les assureurs traditionnels filtrent fortement les profils. Résultat :</p>
        <ul>
          <li>Les conducteurs résiliés n'accèdent qu'à peu d'offres</li>
          <li>Les devis sont souvent incomplets ou non adaptés</li>
          <li>Les tarifs explosent sans explication claire</li>
          <li>Les garanties ne correspondent pas à la situation réelle du conducteur</li>
        </ul>
        <p>Comparer "au hasard" ne fonctionne plus. Il faut une approche spécialisée.</p>

        <h2>L'intérêt d'un comparateur d'assurance dédié aux profils résiliés</h2>
        <p>Un comparateur d'assurance spécialisé ne se contente pas d'afficher des prix. Il analyse la situation du conducteur et le met en relation avec les compagnies réellement disposées à l'assurer.</p>
        <p><strong>Concrètement, cela permet :</strong></p>
        <ul>
          <li>D'identifier les assureurs acceptant les profils résiliés ou malussés</li>
          <li>De comparer plusieurs offres ciblées, pas des refus automatiques</li>
          <li>D'obtenir un tarif cohérent avec son niveau de risque</li>
          <li>D'éviter les contrats inadaptés ou surdimensionnés</li>
        </ul>
        <p>C'est cette logique qui distingue un comparateur généraliste d'un acteur expert comme PREVO.</p>

        <h2>PREVO Assurance : un comparateur pensé pour les conducteurs refusés</h2>
        <p>PREVO Assurance est un comparateur d'assurances indépendant, spécialisé dans les profils à risques aggravés et les conducteurs résiliés.</p>
        <p>Plutôt que de proposer une seule solution, PREVO compare pour vous :</p>
        <ul>
          <li>Plusieurs compagnies spécialisées</li>
          <li>Différents niveaux de garanties</li>
          <li>Des contrats adaptés à votre historique réel</li>
        </ul>
        <p>Cette approche permet de trouver l'assurance la plus pertinente, et non simplement la première disponible.</p>

        <h2>PREVO intervient notamment pour :</h2>
        <ul>
          <li>Conducteurs résiliés pour non-paiement</li>
          <li>Malussés ou sinistrés</li>
          <li>Profils avec suspension ou retrait de permis</li>
          <li>Conducteurs professionnels (Taxi, VTC, utilitaires)</li>
          <li>Jeunes conducteurs en difficulté</li>
        </ul>
        <p>👉 Pour comparer des solutions réellement accessibles après une résiliation, découvrez le comparateur spécialisé <a href="https://prevo-assurances.fr/" target="_blank" rel="noopener">PREVO Assurance</a>.</p>

        <h2>Comparer pour mieux rebondir, pas juste pour rouler</h2>
        <p>L'objectif après une résiliation n'est pas seulement de "retrouver une assurance". C'est de reprendre la route légalement, sans s'enfermer dans un contrat pénalisant sur le long terme.</p>
        <p><strong>Un bon comparateur vous aide à :</strong></p>
        <ul>
          <li>Choisir un contrat adapté à votre usage réel</li>
          <li>Éviter les surprimes injustifiées</li>
          <li>Préparer une future amélioration de votre profil</li>
          <li>Sécuriser votre situation dès aujourd'hui</li>
        </ul>

        <h2>À retenir</h2>
        <ul>
          <li>✔ Être résilié ne signifie pas absence de choix</li>
          <li>✔ Comparer reste possible avec les bons acteurs</li>
          <li>✔ Un comparateur spécialisé fait toute la différence</li>
        </ul>
        <p>Dans un marché où beaucoup ferment la porte, PREVO Assurance ouvre le champ des possibles en comparant pour vous les solutions réellement accessibles.</p>
      `,
    },
  }

  const article = articles[id || '']

  useMeta(
    article?.title || 'Article - PREVO Assurance',
    article?.excerpt || 'Découvrez nos articles informatifs sur l\'assurance auto résiliée.'
  )

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p>Article non trouvé</p>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-br from-urgent-red to-red-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 mb-6 text-red-100 hover:text-white">
            <ArrowLeft size={20} />
            Retour au blog
          </Link>
          <div className="inline-block bg-red-600 text-red-100 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            {article.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
          <div className="flex flex-col md:flex-row gap-4 text-red-100">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{article.readTime} de lecture</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose dark:prose-invert max-w-none">
          <div
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-200 dark:border-slate-700 mt-12 pt-12">
          <div className="flex items-center gap-4 mb-6">
            <Share2 size={20} className="text-urgent-red" />
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Partager cet article</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${article.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-urgent-red to-red-700 text-white py-16 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Parlons de votre situation
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Vous avez une question ou vous avez besoin d'une assurance ? Nous sommes là pour vous aider.
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
