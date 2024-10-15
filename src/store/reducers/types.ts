import { AppState } from './app'
import { AuthState } from './auth'
import { CoreInfoState } from './core-info'
import {
  ResetPasswordState,
  ChangePasswordState,
  ChangeCurrentPasswordState,
  CreatePasswordState
} from './forgot-password'
import { ValidateState } from './validate'
import { CustomHistory } from '../actions/app/app.types'

export type State = {
  app: AppState
  auth: AuthState
  resetPassword: ResetPasswordState
  changePassword: ChangePasswordState
  createPassword: CreatePasswordState
  changeCurrentPassword: ChangeCurrentPasswordState
  coreInfo: CoreInfoState
  validate: ValidateState
  history: CustomHistory
}
