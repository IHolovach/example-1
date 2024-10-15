import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Rehydration from '../services/rehydration'
import { config } from '../config'
import { Store } from './index'
import { RootSaga } from './sagas'

// creates the store
export default (rootReducer: Store, rootSaga: RootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  const createAppropriateStore = createStore

  // eslint-disable-next-line no-underscore-dangle
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
  }

  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (config.REDUX_PERSIST.active) {
    // @ts-ignore
    Rehydration.updateReducers(store)
  }

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
