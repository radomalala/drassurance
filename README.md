# La Clinique des Résiliés

Site web React + TypeScript + TailwindCSS pour un cabinet d'assurance spécialisé dans les profils résiliés.

## 🚀 Démarrage local

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```powershell
git clone https://github.com/radomalala/drassurance.git
cd drassurance
npm install
```

### Développement

```powershell
npm run dev
```

Ouvre http://localhost:5173

### Build production

```powershell
npm run build
npm run preview
```

## 📦 Déploiement sur Vercel

### Méthode 1 : Via l'interface Vercel (recommandé)

1. Connecte-toi sur [vercel.com](https://vercel.com)
2. Clique sur **"Add New Project"**
3. Importe le repo GitHub `radomalala/drassurance`
4. Vercel détecte automatiquement Vite
5. Clique sur **"Deploy"**

### Méthode 2 : Via Vercel CLI

```powershell
npm install -g vercel
vercel login
vercel
```

Pour déployer en production :

```powershell
vercel --prod
```

### Configuration

Le fichier `vercel.json` configure :
- Build command : `npm run build`
- Output directory : `dist`
- Rewrites pour le routing client-side (SPA)
- Cache des assets statiques (1 an)

## 🏗️ Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Menu + bandeau urgence
│   └── Footer.tsx        # Footer global
├── pages/
│   ├── Home.tsx          # Page d'accueil
│   ├── Urgence.tsx       # Urgence résiliation
│   ├── Programme.tsx     # Programme 3 niveaux
│   ├── Temoignages.tsx   # Témoignages clients
│   ├── FAQ.tsx           # Questions fréquentes
│   ├── APropos.tsx       # À propos
│   └── Contact.tsx       # Contact + formulaire
├── hooks/
│   └── useMeta.ts        # Hook SEO dynamique
├── App.tsx               # Router principal
├── main.tsx              # Point d'entrée
└── index.css             # Styles Tailwind
```

## 🎨 Stack technique

- **Framework** : React 18 + Vite
- **Language** : TypeScript
- **Styling** : TailwindCSS
- **Routing** : React Router v6
- **Icons** : Lucide React
- **Hosting** : Vercel

## 📝 Variables d'environnement

Aucune variable requise pour le moment. Pour ajouter des variables :

1. Crée `.env.local` :
```
VITE_API_URL=https://api.example.com
```

2. Ajoute dans Vercel :
	 - Settings → Environment Variables

## 🔧 Personnalisation

### Couleurs (tailwind.config.cjs)

```js
colors: {
	'urgent-red': '#E63946',
	'navy-blue': '#1D3557',
	'progress-orange': '#F77F00',
	'progress-green': '#06D6A0',
}
```

### Logo

Remplace `public/logo.svg` par ton logo.

### Contact

Mets à jour les coordonnées dans `src/components/Footer.tsx` et `src/pages/Contact.tsx`.

## 📄 License

Propriétaire - La Clinique des Résiliés
