import { RehydrateAction } from 'redux-persist/es/types'
import { call, put, select } from 'redux-saga/effects'

import { GetLoginResults, GetUserMeResults } from '../../services'
import { Api } from '../../services/api.types'
import { CustomHistory } from '../actions/app/app.types'
import { AuthCreators, AuthTypes } from '../actions/auth'
import { State } from '../reducers'

export function* Login(api: Api, action: AuthTypes.LoginActionRequest) {
  const response: GetLoginResults = yield call(api.auth.login, action.payload)

  if (response.kind !== 'ok') {
    yield put(
      AuthCreators.loginUserFailure({
        error: 'Failure authentification'
      })
    )
  } else {
    yield put(
      AuthCreators.loginUserSuccess({
        token: response.token
      })
    )

    const getHistory = (state: State) => state.app.history
    const history: CustomHistory = yield select(getHistory)
    history.push('/list')

    api.setToken(response.token)
    yield put(AuthCreators.getUserMeRequest())
  }
}

export function* GetUserMe(api: Api, action: AuthTypes.GetUserMeActionRequest) {
  const response: GetUserMeResults = yield call(
    api.auth.getUserMe,
    action.payload
  )

  if (response.kind !== 'ok') {
    yield put(
      AuthCreators.getUserMeFailure({
        error: 'Failure authentification'
      })
    )
  } else {
    yield put(AuthCreators.getUserMeSuccess(response.user))
  }
}

export function* RegenerateToken(api: Api, action: RehydrateAction) {
  const prevAuthState = action.payload as State
  if (prevAuthState && prevAuthState.auth.token) {
    const response: GetLoginResults = yield call(
      api.auth.regenerateToken,
      prevAuthState.auth
    )

    if (response.kind !== 'ok') {
      yield put(
        AuthCreators.regenerateTokenFailure({
          error: 'Failure authentification'
        })
      )
    } else {
      yield put(
        AuthCreators.regenerateTokenSuccess({
          token: response.token
        })
      )

      api.setToken(response.token)
      yield put(AuthCreators.getUserMeRequest())
    }
  } else {
    yield put(
      AuthCreators.regenerateTokenFailure({
        error: 'Failure authentification'
      })
    )
  }
}
