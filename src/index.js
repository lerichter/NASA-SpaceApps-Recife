import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import ErrorBoundary from './components/error-boundary'
import { TemplateProvider } from './components/template/provider'
import { Navigation } from './navigation'


import './config'
import './style.css'

require('typeface-roboto')

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <ErrorBoundary>
        <TemplateProvider>
          <Navigation />
        </TemplateProvider>
      </ErrorBoundary>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./navigation', () => {
    render()
  })
}
