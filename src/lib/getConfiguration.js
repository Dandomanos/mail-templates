import environments from './environments'
import request from './request'

function getUrl(env) {
  return environments[env].apiPT
}
const getConfiguration = async (env = 'staging', promoId = '455') => {
  return request({
    method: 'GET',
    url: getUrl(env) + '/configuration/' + promoId,
  })
}
export default getConfiguration