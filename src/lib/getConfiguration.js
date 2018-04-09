const environments = require('./environments')
const request = require('./request')

function getUrl(env) {
  return environments[env].apiPT
}
const getConfiguration = function*(env, promoId) {
  return yield request({
    method: 'GET',
    url: getUrl(env) + '/configuration/' + promoId,
  })
}
module.exports = getConfiguration
