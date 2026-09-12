import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { GoogleAuthProvider } from './auth/GoogleAuthContext'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleAuthProvider>
      <App />
    </GoogleAuthProvider>
  </StrictMode>,
)
