import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Provider } from "@/components/ui/provider"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </StrictMode>,
)
