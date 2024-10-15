import { ApisauceInstance } from 'apisauce'
import camelcaseKeys from 'camelcase-keys'

import { getGeneralApiProblem } from '../api-problem'
import { alignPolicyToCorrectValues } from '../policy/utils'
import {
  PostValidateResults,
  PostValidateResponse,
  PostValidate
} from './validate.types'

// our "constructor"
export const validateService = (api: ApisauceInstance) => {
  /**
   * Get policies from api service
   */
  const postValidate = async ({
    values
  }: PostValidate): Promise<PostValidateResults> => {
    const alignedBody = alignPolicyToCorrectValues(values)
    const response = await api.post<PostValidateResponse>(
      'organization/user/policies/validate',
      alignedBody
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) {
        return problem
      }
    }
    try {
      if (response.data) {
        const data = camelcaseKeys(response.data, {
          deep: true
        })

        return { kind: 'ok', data }
      }

      return { kind: 'bad-data' }
    } catch {
      return { kind: 'bad-data' }
    }
  }

  return {
    postValidate
  }
}
