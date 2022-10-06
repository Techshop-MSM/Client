import React from 'react'
import ReactDOM from 'react-dom/client'
import { DataProvider, UserProvider } from './components/global/useContext'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </DataProvider>
  </BrowserRouter>
)
