import { createReducer } from 'reduxsauce'

import { AuthTypes, AuthActionTypes } from '../../actions'
import { AuthState } from './auth.types'

/* ------------- Reducers ------------- */

const INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  token: '',
  user: {},
  error: ''
}

export const loggedInSuccess = (
  state = INITIAL_STATE,
  action: AuthTypes.LoginActionSuccess
) => {
  if (action.payload) {
    const { token } = action.payload

    return {
      ...state,
      token,
      isLoggedIn: true,
      error: ''
    }
  }

  return state
}

export const loggedInFailure = (
  state = INITIAL_STATE,
  action: AuthTypes.LoginActionFailure
) => {
  if (action.payload) {
    const { error } = action.payload

    return {
      ...state,
      isLoggedIn: false,
      token: '',
      error
    }
  }

  return state
}

export const regenerateTokenFailure = (
  state = INITIAL_STATE,
  action: AuthTypes.LoginActionFailure
) => {
  if (action.payload) {
    return {
      ...state,
      isLoggedIn: false,
      token: '',
      error: ''
    }
  }

  return state
}

export const getUserMeSuccess = (
  state = INITIAL_STATE,
  action: AuthTypes.GetUserMeActionSuccess
) => {
  if (action.payload) {
    const user = action.payload

    return {
      ...state,
      user,
      error: ''
    }
  }

  return state
}

export const resetLoggout = (state = INITIAL_STATE) => {
  return {
    ...state,
    ...INITIAL_STATE
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const auth = createReducer(INITIAL_STATE, {
  [AuthActionTypes.LOGIN_USER_SUCCESS]: loggedInSuccess,
  [AuthActionTypes.LOGIN_USER_FAILURE]: loggedInFailure,
  [AuthActionTypes.GET_USER_ME_SUCCESS]: getUserMeSuccess,
  [AuthActionTypes.REGENERATE_TOKEN_SUCCESS]: loggedInSuccess,
  [AuthActionTypes.REGENERATE_TOKEN_FAILURE]: resetLoggout,
  [AuthActionTypes.RESET_LOGOUT]: resetLoggout
})
