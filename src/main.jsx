// Web Dev Simplified -> Learn React With This One Project
// https://www.youtube.com/watch?v=Rh3tobg7hEo

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)