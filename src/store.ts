import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from './epics'
import rootReducer from './reducers'

const epicMiddleware = createEpicMiddleware(rootEpic)

const configureStore = (initialState?: any) => {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(epicMiddleware)))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })

    module.hot.accept('./epics', () => {
      const nextRootEpic = require('./epics').default
      epicMiddleware.replaceEpic(nextRootEpic)
    })
  }
  return store
}

export default configureStore
