import { createActions, createTypes } from 'reduxsauce'

import { ValidateActions, ValidateActionsTypes } from './validate.types'

export const validateStringTypes = createTypes<ValidateActionsTypes>(`
  POST_VALIDATE_REQUEST
  POST_VALIDATE_SUCCESS
  POST_VALIDATE_FAILURE
`)

const {
  Types: ValidateActionTypes,
  Creators: ValidateCreators
} = createActions<ValidateActionsTypes, ValidateActions>({
  postValidateRequest: ['payload'],
  postValidateSuccess: ['payload'],
  postValidateFailure: ['payload']
})

export { ValidateCreators, ValidateActionTypes }
