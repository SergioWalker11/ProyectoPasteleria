import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './componentes/Home.jsx'
import MisRoutes from './Routes.jsx';

import { ReservasProvider } from "./context/ReservasContext.jsx"; // Importa tu contexto



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReservasProvider>
      <MisRoutes />

    </ReservasProvider>
  </StrictMode>,
)
