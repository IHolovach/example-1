import { Store } from 'redux'
import { persistStore } from 'redux-persist'
import localStorage from 'redux-persist/es/storage'

import ReduxPersist from '../config/redux-persist'
import StartupActions from '../store/startup-redux'

const updateReducers = (store: Store): void => {
  const { reducerVersion } = ReduxPersist
  const startup = () => store.dispatch(StartupActions.startup())

  // Check to ensure latest reducer version
  localStorage
    .getItem('reducerVersion')
    .then((localVersion) => {
      if (localVersion !== reducerVersion) {
        persistStore(store, null, startup).purge()
        localStorage.setItem('reducerVersion', reducerVersion)
      } else {
        persistStore(store, null, startup).purge()
      }
    })
    .catch(() => {
      persistStore(store, null, startup).purge()
      localStorage.setItem('reducerVersion', reducerVersion)
    })
}

export default { updateReducers }
