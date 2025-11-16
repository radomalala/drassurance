# Déploiement Vercel - Guide rapide

## 🚀 Étapes de déploiement

### Option 1 : Interface web (plus simple)

1. Va sur https://vercel.com et connecte-toi avec GitHub
2. Clique sur "Add New Project"
3. Sélectionne le repo `radomalala/drassurance`
4. Vercel détecte automatiquement :
   - Framework : Vite
   - Build Command : `npm run build`
   - Output Directory : `dist`
5. Clique sur "Deploy"
6. Attends 2-3 minutes
7. Ton site est en ligne ! 🎉

### Option 2 : CLI (pour les mises à jour rapides)

```powershell
# Installation (une seule fois)
npm install -g vercel

# Connexion
vercel login

# Premier déploiement (preview)
vercel

# Déploiement production
vercel --prod
```

## 🔧 Configuration automatique

Le fichier `vercel.json` est déjà configuré :
- ✅ Routing SPA (toutes les routes → index.html)
- ✅ Cache assets (1 an)
- ✅ Build optimisé

## 🌐 Domaine personnalisé

Après le premier déploiement :

1. Va dans ton projet Vercel
2. Settings → Domains
3. Ajoute ton domaine (ex: `clinique-resilies.fr`)
4. Configure les DNS selon les instructions Vercel

## 📊 Variables d'environnement

Si besoin plus tard :

1. Projet Vercel → Settings → Environment Variables
2. Ajoute `VITE_` prefixé (ex: `VITE_API_URL`)
3. Redéploie

## ✅ Checklist avant déploiement

- [x] Vérification finale du build local : `npm run build`
- [x] Logo personnalisé dans `public/mockups/icone_logo.PNG`
- [x] Fichier `.env` configuré (si nécessaire)
- [x] Coordonnées réelles dans Footer et Contact
- [ ] Numéro de téléphone réel (actuellement `01 XX XX XX XX`)
- [ ] Email réel (actuellement `contact@clinique-resilies.fr`)
- [ ] Analytics (Google Analytics, Plausible, etc.)
- [ ] Mentions légales complètes
- [ ] Politique de confidentialité
- [ ] Integration formulaire (Netlify Forms, Formspree, ou API backend)

## 🐛 Debugging

Si erreur au build :
```powershell
npm run build
```

Si erreur de routing en prod :
- Vérifie que `vercel.json` existe
- Les rewrites doivent pointer vers `/index.html`

## 📈 Après déploiement

1. Teste toutes les pages
2. Vérifie le responsive mobile
3. Teste les formulaires
4. Configure les analytics
5. Ajoute un sitemap.xml
6. Configure Google Search Console
