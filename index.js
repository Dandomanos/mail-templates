const heml = require('heml')
const fs = require('fs')
const getConfiguration = require('./src/lib/getConfiguration')
const getPromoStyle = require('./src/lib/getPromoStyle')
const getPromoContent = require('./src/lib/getPromoContent')

const writeFile = require('./src/lib/writeFile')
const _ = require('lodash')
const co = require('co')

const hemlOptions = {
  validate: 'soft', // validation levels - 'strict'|'soft'|'none'
  cheerio: {}, // config passed to cheerio parser
  juice: {},
  beautify: {}, // config passed to js-beautify html method
  elements: [
    // any custom elements you want to use
  ],
}
const debug = require('debug')('app:index')
const error = require('debug')('app:Error')

const Errors = {
  noEnviroment: 'No environment defined',
  noPromoId: 'No promoId defined',
  noStatus: 'No status defined',
  noPromoUrl: 'No promoUrl defined',
  noConfiguration: 'Cannot Load PromoConfiguration',
  noTemplate: 'Cannot Load PromoTemplate',
  noGenerated: 'Cannot Generate Html Mail',
  noSave: 'Cannot save static html',
  default: 'Unknow Error',
}

function throwError(key, err) {
  error(Errors[key] || Errors.default)
  throw new Error(err)
}
const getTemplate = co.wrap(function*(config, templateName = 'participate', save = false) {
  // Prevent configuration errors
  if (!config.environment) throwError('noEnviroment', Errors.noEnviroment)
  if (!config.promoId) throwError('noPromoId', Errors.noPromoId)
  if (!config.status) throwError('noStatus', Errors.noStatus)
  if (!config.promoUrl) throwError('noPromoUrl', Errors.noPromoUrl)

  // get configuration
  let promoConfig
  try {
    promoConfig = yield getConfiguration(config.environment, config.promoId)
    debug('PromoConfiguration LOADED')
  } catch (err) {
    throwError('noConfiguration', err)
  }

  // Get Promo Style
  const promoStyle = getPromoStyle(promoConfig)
  debug('PromoStyle LOADED')

  // Get Promo Template
  let styledHtml
  try {
    const template = fs.readFileSync(`${__dirname}/src/templates/${templateName}.heml`).toString()
    styledHtml = _.template(template)
    debug('PromoTemplate LOADED')
  } catch (err) {
    throwError('noTemplate', err)
  }

  // Get Promo Content
  const templateContent = getPromoContent(promoConfig, config.lang, config)
  debug('PromoContent LOADED')

  // Compile email with promoStyle and templateContent
  let mailTemplate
  try {
    mailTemplate = yield heml(styledHtml(_.assign({}, promoStyle, templateContent)), hemlOptions)
    debug('Html Mail GENERATED')
  } catch (err) {
    throwError('noGenerated', err)
  }

  // write
  if (save) {
    try {
      writeFile(mailTemplate.html, templateName)
      debug('Static Html SAVED')
    } catch (err) {
      throwError('noSave', err)
    }
  }

  return mailTemplate.html || throwError('noGenerated', Errors.noGenerated)
})

/* *****************      SAMPLE        *********** */

// const configuration = {
//   environment: 'staging',
//   promoId: 455,
//   lang: 'es',
//   status: 'winner',
//   voucher: 'ORX-1903',
//   // date: '1522999245280',
//   prizeId: 273,
//   // type: 'tier',
//   // participationId: 585492,
//   promoUrl: 'https://origin-front-pt.s.orchextra.io/455',
// }

// getTemplate(configuration, 'participate', true)

module.exports = getTemplate
