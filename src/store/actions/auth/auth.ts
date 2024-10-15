import { createActions, createTypes } from 'reduxsauce'

import { AuthActions, AuthActionsTypes } from './auth.types'

export const loginStringTypes = createTypes<AuthActionsTypes>(`
    LOGIN_USER_REQUEST
    LOGIN_USER_SUCCESS
    LOGIN_USER_FAILURE
    GET_USER_ME_REQUEST
    GET_USER_ME_SUCCESS
    GET_USER_ME_FAILURE
    REGENERATE_TOKEN_REQUEST
    REGENERATE_TOKEN_SUCCESS
    REGENERATE_TOKEN_FAILURE
    RESET_LOGOUT
`)

const { Types: AuthActionTypes, Creators: AuthCreators } = createActions<
  AuthActionsTypes,
  AuthActions
>({
  loginUserRequest: ['payload'],
  loginUserSuccess: ['payload'],
  loginUserFailure: ['payload'],
  getUserMeRequest: ['payload'],
  getUserMeSuccess: ['payload'],
  getUserMeFailure: ['payload'],
  regenerateTokenRequest: ['payload'],
  regenerateTokenSuccess: ['payload'],
  regenerateTokenFailure: ['payload'],
  resetLogout: ['payload']
})

export { AuthCreators, AuthActionTypes }
