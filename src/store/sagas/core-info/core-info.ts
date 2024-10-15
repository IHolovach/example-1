import { call, put } from 'redux-saga/effects'

import { GetCoreInfoResults } from '../../../services'
import { CoreInfoCreators } from '../../actions/core-info'
import { Api } from '../../../services/api.types'

export function* CoreInfo(api: Api) {
  const response: GetCoreInfoResults = yield call(api.coreInfo.getCoreInfo)

  if (response.kind !== 'ok') {
    yield put(
      CoreInfoCreators.getCoreInfoFailure({
        error: 'Failed'
      })
    )
  } else {
    yield put(CoreInfoCreators.getCoreInfoSuccess(response.data))
  }
}
