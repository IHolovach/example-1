import { createActions, createTypes } from 'reduxsauce'

import { AppActions, AppActionsTypes } from './app.types'

export const appStringTypes = createTypes(`
  IS_LOADED
  GET_HISTORY_CONTEXT
`)

const { Types: AppActionTypes, Creators: AppCreators } = createActions<
  AppActionsTypes,
  AppActions
>({
  isLoaded: ['isLoaded'],
  getHistoryContext: ['payload']
})

export { AppCreators, AppActionTypes }
