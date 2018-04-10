const environments = require('./environments')
const request = require('./request')
const co = require('co')

function getUrl(env) {
  return environments[env].apiPT
}
const getConfiguration = co.wrap(function*(env, promoId) {
  return yield request({
    method: 'GET',
    url: getUrl(env) + '/configuration/' + promoId,
  })
})
module.exports = getConfiguration
