const response = (h, value = {
  status: 'error',
  message: 'ada yang error, perbaiki dulu',
}, code = 500) => h.response(value).code(code);

module.exports = { response };
