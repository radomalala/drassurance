import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePrerender from 'vite-plugin-prerender'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes: [
        '/',
        '/urgence-resiliation',
        '/types-resiliation',
        '/motifs-resiliation',
        '/resiliation/non-paiement',
        '/resiliation/retrait-suspension',
        '/resiliation/sinistres-repetitifs',
        '/resiliation/aggravation-risque',
        '/resiliation/fausse-declaration',
        '/resiliation/non-respect-clauses',
        '/types-vehicules',
        '/vehicules/voiture',
        '/vehicules/taxi-vtc',
        '/vehicules/vehicule-sans-permis',
        '/programme',
        '/temoignages',
        '/faq',
        '/blog',
        '/apropos',
        '/contact',
        '/mentions-legales',
        '/politique-confidentialite',
        '/cgu',
        '/gestion-cookies',
      ],
    }),
  ],
  server: {
    port: 5173
  }
})