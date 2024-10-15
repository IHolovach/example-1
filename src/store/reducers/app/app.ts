import { createReducer } from 'reduxsauce'

import {
  AppTypes,
  AppActionTypes,
  AuthActionTypes,
} from '../../actions'
import { AppState } from './app.types'

/* ------------- Reducers ------------- */

const INITIAL_STATE: AppState = {
  isAppReady: false,
  isLoaded: false,
  history: null
}

export const initApp = (state = INITIAL_STATE, action: AppTypes.LoadAction) => {
  const { isLoaded } = action
  return {
    ...state,
    isLoaded
  }
}

export const getHistoryContext = (
  state = INITIAL_STATE,
  action: AppTypes.GetHistoryContextAction
) => {
  const history = action.payload
  return {
    ...state,
    history
  }
}

export const regenerateToken = (state = INITIAL_STATE) => {
  return {
    ...state,
    isAppReady: true,
    isLoaded: true
  }
}

export const dataRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoaded: false
  }
}

export const dataSuccessOrFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoaded: true
  }
}

/* ------------- Hookup Reducers To Types ------------- */

// TODO: fix and uncomment
export const app = createReducer(INITIAL_STATE, {
  [AppActionTypes.IS_LOADED]: initApp,
  [AppActionTypes.GET_HISTORY_CONTEXT]: getHistoryContext,
  [AuthActionTypes.LOGIN_USER_REQUEST]: dataRequest,
  [AuthActionTypes.LOGIN_USER_SUCCESS]: dataSuccessOrFailure,
  [AuthActionTypes.LOGIN_USER_FAILURE]: dataSuccessOrFailure,
  [AuthActionTypes.REGENERATE_TOKEN_REQUEST]: dataRequest,
  [AuthActionTypes.REGENERATE_TOKEN_SUCCESS]: regenerateToken,
  [AuthActionTypes.REGENERATE_TOKEN_FAILURE]: regenerateToken,
})
