import { createActions, createTypes } from 'reduxsauce'

import {
  ForgotPasswordActions,
  ForgotPasswordActionsTypes
} from './forgot-password.types'

export const forgotPasswordStringTypes = createTypes<ForgotPasswordActionsTypes>(`
  POST_RESET_PASSWORD_REQUEST
  POST_RESET_PASSWORD_SUCCESS
  POST_RESET_PASSWORD_FAILURE
  POST_CHANGE_PASSWORD_REQUEST
  POST_CHANGE_PASSWORD_SUCCESS
  POST_CHANGE_PASSWORD_FAILURE
  POST_CHANGE_CURRENT_PASSWORD_REQUEST
  POST_CHANGE_CURRENT_PASSWORD_SUCCESS
  POST_CHANGE_CURRENT_PASSWORD_FAILURE
  POST_CREATE_PASSWORD_REQUEST
  POST_CREATE_PASSWORD_SUCCESS
  POST_CREATE_PASSWORD_FAILURE
`)

const {
  Types: ForgotPasswordActionTypes,
  Creators: ForgotPasswordCreators
} = createActions<ForgotPasswordActionsTypes, ForgotPasswordActions>({
  postResetPasswordRequest: ['payload'],
  postResetPasswordSuccess: ['payload'],
  postResetPasswordFailure: ['payload'],
  postChangePasswordRequest: ['payload'],
  postChangePasswordSuccess: ['payload'],
  postChangePasswordFailure: ['payload'],
  postChangeCurrentPasswordRequest: ['payload'],
  postChangeCurrentPasswordSuccess: ['payload'],
  postChangeCurrentPasswordFailure: ['payload'],
  postCreatePasswordRequest: ['payload'],
  postCreatePasswordSuccess: ['payload'],
  postCreatePasswordFailure: ['payload']
})

export { ForgotPasswordCreators, ForgotPasswordActionTypes }
