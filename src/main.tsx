import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import "@fontsource/josefin-slab/400.css";
import "@fontsource/josefin-slab/700.css";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
