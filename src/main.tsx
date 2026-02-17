import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root') as HTMLElement

if (rootElement.hasChildNodes()) {
  // Mode react-snap : hydrate le HTML pré-rendu
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  // Mode navigateur normal : crée le root React
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}