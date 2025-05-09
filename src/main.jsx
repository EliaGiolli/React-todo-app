/* eslint-disable no-unused-vars */
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

//ROUTER
import { router } from './lib/router'
import { RouterProvider } from 'react-router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
