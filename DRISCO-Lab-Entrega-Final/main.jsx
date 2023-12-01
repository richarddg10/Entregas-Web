import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './src/App'
import { AuthProvider } from './src/context/authUserContext'

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)
root.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
)