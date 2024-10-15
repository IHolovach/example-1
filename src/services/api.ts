// a library to wrap and simplify api calls
import apisauce from 'apisauce'

import { authService } from './auth'
import { policyService } from './policy'
import { forgotPasswordService } from './forgot-password'
import { validateService } from './validate'
import { coreInfoService } from './core-info'

// our "constructor"
const create = (baseURL = 'https://zwolle.digitalharbour.io/api') => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 60000
  })
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  const getRoot = () => api.get('')

  const setHeader = (key: string, prop: string) => {
    const headers = { ...api.headers, [key]: prop }
    api.setHeaders(headers)
  }
  const setToken = (token: string) => {
    if (token) {
      api.setHeader('Authorization', `JWT ${token}`)
    } else {
      api.setHeader('Authorization', '')
    }
  }

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //

  return {
    // a list of the API functions from step 2
    getRoot,
    setHeader,
    setToken,
    auth: authService(api),
    policy: policyService(api),
    forgotPassword: forgotPasswordService(api),
    validate: validateService(api),
    coreInfo: coreInfoService(api)
  }
}

// let's return back our create method as the default.
export default {
  create
}
