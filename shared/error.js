module.exports = function (msg, param, value, location) {
  return {
    msg: msg || '',
    param: param || '',
    value: value || '',
    location: location || '',
  }
}
