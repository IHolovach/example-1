import { createActions, createTypes } from 'reduxsauce'

import { CoreInfoActions, CoreInfoActionsTypes } from './core-info.types'

export const coreInfoStringTypes = createTypes<CoreInfoActionsTypes>(`
  GET_CORE_INFO_REQUEST
  GET_CORE_INFO_SUCCESS
  GET_CORE_INFO_FAILURE
`)

const {
  Types: CoreInfoActionTypes,
  Creators: CoreInfoCreators
} = createActions<CoreInfoActionsTypes, CoreInfoActions>({
  getCoreInfoRequest: ['payload'],
  getCoreInfoSuccess: ['payload'],
  getCoreInfoFailure: ['payload']
})

export { CoreInfoCreators, CoreInfoActionTypes }
