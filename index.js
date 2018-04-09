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

const getTemplate = co.wrap(function*(config, templateName = 'participate', save = false) {
  // get configuration
  const promoConfig = yield getConfiguration(config.environment, config.promoId)
  debug('promoConfig loaded', promoConfig)

  // Get Promo Style
  const promoStyle = getPromoStyle(promoConfig)
  debug('promoStyle', promoStyle)

  // Get Promo Template
  const template = fs.readFileSync(`${__dirname}/src/templates/${templateName}.heml`).toString()
  const styledHtml = _.template(template)

  // Get Promo Content
  const templateContent = getPromoContent(promoConfig, config.lang, hemlOptions)
  debug('templateContent', templateContent)

  // Compile email with promoStyle and templateContent
  const mailTemplate = yield heml(styledHtml(_.assign({}, promoStyle, templateContent)), config)

  // write
  if (save) writeFile(mailTemplate.html, templateName)

  return mailTemplate.html
})

/* *****************      SAMPLE        *********** */

const configuration = {
  environment: 'staging',
  promoId: 455,
  lang: 'es',
  status: 'winner',
  // date: '1522999245280',
  prizeId: 273,
  // type: 'tier',
  participationId: 585492,
  promoUrl: 'https://origin-front-pt.s.orchextra.io/455',
}
getTemplate(configuration, 'participate', true)

// module.exports = getTemplate
