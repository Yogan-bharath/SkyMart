import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import { router } from './routes/router.jsx'
import ProductsContext from './Context/ProductsContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <ProductsContext>
    <RouterProvider router={router}/>
    <ToastContainer/>
  </ProductsContext>
)
