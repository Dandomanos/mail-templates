import axios from 'axios'

const debug = require('debug')('pt:api')

// Error response wrapper
export class ApiError extends Error {
  constructor(data, response) {
    if (!data || typeof data !== 'object') data = {}
    if (!data.message) data.message = 'Unkown error'
    data.code |= 0
    if (!data.code) data.code = -1

    super(data.message)
    this.name = this.constructor.name
    this.data = data
    this.response = response
  }
}

const request = axios.create({
  timeout: 10000,
})
export default request

// Intercept request start
// Used for logging and authorization injection
request.interceptors.request.use(
  config => {
    debug('start', config.url, config)
    return config
  },
  err => {
    debug('pre-error', err)
    return Promise.reject(err)
  }
)

// Handle the same way all responses status
request.interceptors.response.use(
  response => handleResponse(null, response),
  err => handleResponse(err, err.response)
)

/**
 * Response handler
 * @param  {Error} err
 * @param  {Object} AJAX response
 * @return {Promise}
 */
function handleResponse(err, response) {
  // Posible network or config errors
  if (!response) response = {}

  if (!response.data || response.data.status == null) {
    response.data = {
      status: false,
      error: {
        code: -2,
        message: err && err.message,
      },
    }
  }

  // KO response
  if (!response.data || response.data.status !== true) {
    const errorData = response.data && response.data.error
    debug('failed', errorData)
    return Promise.reject(new ApiError(errorData, response))
  }

  // OK Response
  debug('success', response.data.data)
  return response.data.data
}
