import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CrewmateProvider } from './context/CrewmateContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CrewmateProvider>
      <App />
    </CrewmateProvider>
  </React.StrictMode>
)
