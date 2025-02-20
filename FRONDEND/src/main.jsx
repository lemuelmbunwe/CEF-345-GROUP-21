import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider }  from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';


/* const router = createBrowserRouter([
  {
    path: '/',
    element: <App /> , },
    {path: '/viewproperties',
      element: <PropertyList />,
    }
]); */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </StrictMode>,
)
  