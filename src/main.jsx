import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found. Please ensure id="root" exists in index.html')
}

createRoot(root).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
