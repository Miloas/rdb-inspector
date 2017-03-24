import * as React from 'react'
import { Provider } from 'react-redux'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './components/App'

import configureStore from './store'

const rootEl = document.getElementById('root')

const store = configureStore()

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>
      ,
      rootEl
    )
  })
}
