import { AnyAction } from 'redux'
import { History } from 'history'

import { ParamAction } from '../types'

export type CustomHistory = History<unknown>

export interface LoadAction extends AnyAction {
  isLoaded: boolean
}

export type GetHistoryContextAction = ParamAction<CustomHistory>

export type AppActionsTypes = {
  IS_LOADED: string
  GET_HISTORY_CONTEXT: string
}

export type AppActions = {
  isLoaded(): LoadAction
  getHistoryContext(history: CustomHistory): GetHistoryContextAction
}
