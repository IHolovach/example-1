import { call, put } from 'redux-saga/effects'
import { PostValidateResults } from '../../../services'
import { Api } from '../../../services/api.types'
import { ValidateCreators, ValidateTypes } from '../../actions/validate'

export function* Validate(
  api: Api,
  action: ValidateTypes.PostValidateActionRequest
) {
  const response: PostValidateResults = yield call(
    api.validate.postValidate,
    action.payload
  )
  const errorUpdater = Math.random()

  if (response.kind !== 'ok') {
    yield put(
      ValidateCreators.postValidateFailure({
        error: `Failed ${errorUpdater}`,
        response
      })
    )
  } else {
    yield put(ValidateCreators.postValidateSuccess(response.data))
  }
}
