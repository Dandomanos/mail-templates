const heml = require('heml')
const fs = require('fs')
const writeFile = require('./src/lib/save/writeFile')
const _ = require('lodash')
const co = require('co')

const getStyle = require('./src/lib/style/getStyle')

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

// Html template file name
const outputFile = process.argv[2]

function throwError(key, err) {
  error(Errors[key] || Errors.default)
  throw new Error(err)
}
const getTemplate = co.wrap(function* (config, templateName = 'mail', fullObjectReturn = false) {

  // Get Promo Style
  const promoStyle = getStyle(config.style) || {}
  debug('PromoStyle LOADED')

  config.style = { ...config.style, ...promoStyle }

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
  // const templateContent = getPromoContent(promoConfig, config.lang, config)
  // const templateContent = config.content || {}
  // debug('PromoContent LOADED', templateContent)

  // Compile email with promoStyle and templateContent
  let mailTemplate
  try {
    mailTemplate = yield heml(styledHtml(_.assign({}, config)), hemlOptions)
    debug('Html Mail GENERATED')
  } catch (err) {
    throwError('noGenerated', err)
  }

  // write
  if (outputFile) {
    try {
      writeFile(mailTemplate.html, outputFile)
      debug('Static Html SAVED')
    } catch (err) {
      throwError('noSave', err)
    }
  }

  let rObject = {
    html: mailTemplate.html || throwError('noGenerated', Errors.noGenerated),
    plain:
      config.content.plainText ||
      'If you cannot read this email please check this url: ' + config.content.primaryUrl,
    subject: config.content.subject,
  }

  if (!fullObjectReturn) {
    rObject = mailTemplate.html || throwError('noGenerated', Errors.noGenerated)
  }

  return rObject
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
