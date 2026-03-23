/**
 * main.jsx
 * Application entry point. Initializes i18n before rendering
 * so translations are available on first render.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n' // must be imported before App so i18next is ready
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
