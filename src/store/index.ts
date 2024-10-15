import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import configureStore from './store'
import rootSaga from './sagas'
import { config } from '../config'
import * as reducers from './reducers'

const nextReducers = {
  app: reducers.app,
  auth: reducers.auth,
  resetPassword: reducers.resetPassword,
  changePassword: reducers.changePassword,
  createPassword: reducers.createPassword,
  changeCurrentPassword: reducers.changeCurrentPassword,
  validate: reducers.validate,
  coreInfo: reducers.coreInfo
}

/* ------------- Assemble The Reducers ------------- */
export const storeReducers = combineReducers(nextReducers)

export type Store = typeof storeReducers

export default () => {
  let finalReducers = storeReducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (config.REDUX_PERSIST.active) {
    const persistConfig = config.REDUX_PERSIST.storeConfig
    // @ts-ignore
    finalReducers = persistReducer(persistConfig, storeReducers)
  }

  // eslint-disable-next-line prefer-const
  let { store, sagasManager, sagaMiddleware } = configureStore(
    finalReducers,
    rootSaga
  )

  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept(() => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)

      // eslint-disable-next-line global-require
      const newYieldedSagas = require('./sagas').default
      sagasManager.cancel()
      // @ts-ignore
      sagasManager.done.then(() => {
        // @ts-ignore
        sagasManager = sagaMiddleware(newYieldedSagas)
      })
    })
  }

  return store
}

export * from './reducers'
export * from './actions'
