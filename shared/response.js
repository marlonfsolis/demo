/**
 * Response parameter definition
 * @typedef {Object} TResponse
 * @property {Number} code
 * @property {Boolean} [success]
 * @property {any} [data]
 * @property {Error} [err]
 * */

/**
 * Response class
 * @class
 * @param {TResponse} res
 * */
module.exports = function(res) {
  if (!res.code || typeof res.code !== 'number') {
    throw 'Response code is required'
  }
  if (typeof res.success !== 'boolean') {
    res.success = res.code < 300
  }
  return { success: res.success, code: res.code, data: res.data, err: res.err }
}
