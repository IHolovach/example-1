import { call, put } from 'redux-saga/effects'
import {
  PostChangeCurrentPasswordResults,
  PostChangePasswordResults,
  PostCreatePasswordResults,
  PostResetPasswordResults
} from '../../../services'
import { Api } from '../../../services/api.types'
import {
  ForgotPasswordCreators,
  ForgotPasswordTypes
} from '../../actions/forgot-password'

export function* ResetPassword(
  api: Api,
  action: ForgotPasswordTypes.PostPasswordResetActionRequest
) {
  const response: PostResetPasswordResults = yield call(
    api.forgotPassword.postResetPassword,
    action.payload
  )

  if (response.kind !== 'ok') {
    if (response.kind === 'unknown') {
      yield put(ForgotPasswordCreators.postResetPasswordFailure())
    } else {
      yield put(
        ForgotPasswordCreators.postResetPasswordFailure({
          error: 'Failure authentification'
        })
      )
    }
  } else {
    yield put(
      ForgotPasswordCreators.postResetPasswordSuccess({
        email: response.email
      })
    )
  }
}

export function* ChangePassword(
  api: Api,
  action: ForgotPasswordTypes.PostPasswordChangeActionRequest
) {
  const response: PostChangePasswordResults = yield call(
    api.forgotPassword.postChangePassword,
    action.payload
  )

  if (response.kind !== 'ok') {
    if (response.kind === 'unknown') {
      yield put(ForgotPasswordCreators.postChangePasswordFailure())
    } else {
      yield put(
        ForgotPasswordCreators.postChangePasswordFailure({
          error: 'Failure authentification',
          response
        })
      )
    }
  } else {
    yield put(
      ForgotPasswordCreators.postChangePasswordSuccess(response)
    )
  }
}

export function* ChangeCurrentPassword(
  api: Api,
  action: ForgotPasswordTypes.PostCurrentPasswordChangeActionRequest
) {
  const response: PostChangeCurrentPasswordResults = yield call(
    api.forgotPassword.postChangeCurrentPassword,
    action.payload
  )

  if (response.kind !== 'ok') {
    if (response.kind === 'unknown') {
      yield put(ForgotPasswordCreators.postChangeCurrentPasswordFailure())
    } else {
      yield put(
        ForgotPasswordCreators.postChangeCurrentPasswordFailure({
          error: 'Failure authentification',
          response
        })
      )
    }
  } else {
    const { oldPassword, newPassword1, newPassword2 } = response

    yield put(
      ForgotPasswordCreators.postChangeCurrentPasswordSuccess({
        oldPassword,
        newPassword1,
        newPassword2
      })
    )
  }
}

export function* CreatePassword(
  api: Api,
  action: ForgotPasswordTypes.PostPasswordCreateActionRequest
) {
  const response: PostCreatePasswordResults = yield call(
    api.forgotPassword.postCreatePassword,
    action.payload
  )

  if (response.kind !== 'ok') {
    if (response.kind === 'unknown') {
      yield put(ForgotPasswordCreators.postCreatePasswordFailure())
    } else {
      yield put(
        ForgotPasswordCreators.postCreatePasswordFailure({
          error: 'Failure authentification',
          response
        })
      )
    }
  } else {
    yield put(
      ForgotPasswordCreators.postCreatePasswordSuccess(response)
    )
  }
}
