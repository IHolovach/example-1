import camelcaseKeys from 'camelcase-keys'
import { createReducer } from 'reduxsauce'

import { ForgotPasswordTypes, ForgotPasswordActionTypes } from '../../actions'
import {
  ResetPasswordState,
  ChangePasswordState,
  ChangeCurrentPasswordState,
  CreatePasswordState
} from './forgot-password.types'

/* ------------- Reducers ------------- */

const INITIAL_STATE: ResetPasswordState = {
  isLoggedIn: false,
  email: '',
  error: ''
}

export const postResetPasswordSuccess = (
  state = INITIAL_STATE,
  action: ForgotPasswordTypes.PostPasswordResetActionSuccess
) => {
  if (action.payload) {
    const { email } = action.payload

    return {
      ...state,
      email
    }
  }

  return {
    ...state,
    email: '',
    error: ''
  }
}

export const postResetPasswordFailure = (
  state = INITIAL_STATE,
  action: ForgotPasswordTypes.PostPasswordResetActionFailure
) => {
  if (action.payload) {
    const { error } = action.payload

    return {
      ...state,
      error
    }
  }

  return {
    ...state,
    error: ''
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const resetPassword = createReducer(INITIAL_STATE, {
  [ForgotPasswordActionTypes.POST_RESET_PASSWORD_SUCCESS]: postResetPasswordSuccess,
  [ForgotPasswordActionTypes.POST_RESET_PASSWORD_FAILURE]: postResetPasswordFailure
})

/* ------------- Reducers ------------- */

const INITIAL_CHANGE_STATE: ChangePasswordState = {
  isLoggedIn: false,
  reseted: false,
  response: {},
  error: ''
}

export const postChangePasswordSuccess = (
  state = INITIAL_CHANGE_STATE,
  action: ForgotPasswordTypes.PostPasswordChangeActionSuccess
) => {
  if (action.payload) {
    return {
      ...state,
      reseted: true
    }
  }

  return {
    ...state,
    reseted: true,
    error: ''
  }
}

export const postChangePasswordFailure = (
  state = INITIAL_CHANGE_STATE,
  action: ForgotPasswordTypes.PostPasswordChangeActionFailure
) => {
  if (action.payload) {
    const { error, response } = action.payload

    return {
      ...state,
      reseted: false,
      response,
      error
    }
  }

  return {
    ...state,
    reseted: false,
    response: {},
    error: ''
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const changePassword = createReducer(INITIAL_CHANGE_STATE, {
  [ForgotPasswordActionTypes.POST_CHANGE_PASSWORD_SUCCESS]: postChangePasswordSuccess,
  [ForgotPasswordActionTypes.POST_CHANGE_PASSWORD_FAILURE]: postChangePasswordFailure
})

/* ------------- Reducers ------------- */

const INITIAL_CHANGE_CURRENT_STATE: ChangeCurrentPasswordState = {
  isLoggedIn: false,
  changed: false,
  invalidValues: {},
  error: ''
}

export const postChangeCurrentPasswordSuccess = (
  state = INITIAL_CHANGE_CURRENT_STATE,
  action: ForgotPasswordTypes.PostCurrentPasswordChangeActionSuccess
) => {
  if (action.payload) {
    return {
      ...state,
      changed: true
    }
  }

  return {
    ...state,
    changed: false,
    invalidValues: {},
    error: ''
  }
}

export const postChangeCurrentPasswordFailure = (
  state = INITIAL_CHANGE_CURRENT_STATE,
  action: ForgotPasswordTypes.PostCurrentPasswordChangeActionFailure
) => {
  if (action.payload) {
    const { error, response = {} } = action.payload
    let alignedResponse = {}
    if (response.data) {
      alignedResponse = camelcaseKeys(response.data, {
        deep: true
      })
    }

    return {
      ...state,
      changed: false,
      invalidValues: alignedResponse,
      error
    }
  }

  return {
    ...state,
    changed: false,
    invalidValues: {},
    error: ''
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const changeCurrentPassword = createReducer(
  INITIAL_CHANGE_CURRENT_STATE,
  {
    [ForgotPasswordActionTypes.POST_CHANGE_CURRENT_PASSWORD_SUCCESS]:
    postChangeCurrentPasswordSuccess,
    [ForgotPasswordActionTypes.POST_CHANGE_CURRENT_PASSWORD_FAILURE]:
    postChangeCurrentPasswordFailure
  }
)

/* ------------- Reducers ------------- */

const INITIAL_CREATE_STATE: CreatePasswordState = {
  isLoggedIn: false,
  created: false,
  response: {},
  error: ''
}

export const postCreatePasswordSuccess = (
  state = INITIAL_CREATE_STATE,
  action: ForgotPasswordTypes.PostPasswordCreateActionSuccess
) => {
  if (action.payload) {
    return {
      ...state,
      created: true
    }
  }

  return {
    ...state,
    created: true,
    error: ''
  }
}

export const postCreatePasswordFailure = (
  state = INITIAL_CREATE_STATE,
  action: ForgotPasswordTypes.PostPasswordCreateActionFailure
) => {
  if (action.payload) {
    const { error, response } = action.payload

    return {
      ...state,
      created: false,
      response,
      error
    }
  }

  return {
    ...state,
    created: false,
    response: {},
    error: ''
  }
}

/* ------------- Hookup Reducers To Types ------------- */

export const createPassword = createReducer(INITIAL_CREATE_STATE, {
  [ForgotPasswordActionTypes.POST_CREATE_PASSWORD_SUCCESS]: postCreatePasswordSuccess,
  [ForgotPasswordActionTypes.POST_CREATE_PASSWORD_FAILURE]: postCreatePasswordFailure
})
