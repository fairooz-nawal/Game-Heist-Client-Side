import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Router/Router';
import { AppProvider } from './components/ContextAPI';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
)
