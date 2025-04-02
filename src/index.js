import React from 'react'
import ReactDOM from 'react-dom/client'

import { Informations } from './containers/Informations'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Informations />
    <Routes />
    <GlobalStyles />
  </>
)
