import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/scss/main.scss'
import { RouterProvider } from 'react-router'
import router from './routes'

import './main.scss'

function FallbackLoading() {
  return <p>Loading...</p>
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<FallbackLoading />} />
  </React.StrictMode>
)
