import heml from 'heml'
import fs from 'fs'
import getConfiguration from './src/lib/getConfiguration'
import getPromoStyle from './src/lib/getPromoStyle'
import getPromoContent from './src/lib/getPromoContent'

import writeFile from './src/writeFile'
import _ from 'lodash'

const options = {
  validate: 'soft', // validation levels - 'strict'|'soft'|'none'
  cheerio: {}, // config passed to cheerio parser
  juice: {},
  beautify: {}, // config passed to js-beautify html method
  elements: [
    // any custom elements you want to use
  ],
}
const debug = require('debug')('app:index')

const participateResult = {
  status: 'not winner',
  date: '1522999245280',
  prizeId: 273,
  type: 'tier',
  participationId: 585492,
  promoUrl: 'https://origin-front-pt.s.orchextra.io/455',
}

const getTemplate = async (
  environment,
  promoId,
  lang,
  participate,
  templateName = 'participate'
) => {
  // get configuration
  const promoConfig = await getConfiguration(environment, promoId)
  debug('promoConfig', promoConfig)

  // Get Promo Style
  const promoStyle = getPromoStyle(promoConfig)
  debug('promoStyle', promoStyle)

  // Get Promo Template
  const template = fs.readFileSync(`${__dirname}/templates/${templateName}.heml`).toString()
  const styledHtml = _.template(template)

  // Get Promo Content
  const templateContent = getPromoContent(promoConfig, lang, participate)

  // Compile email with promoStyle and templateContent
  const mailTemplate = await heml(styledHtml(_.assign({}, promoStyle, templateContent)), options)

  // write
  writeFile(mailTemplate.html, templateName)
}
getTemplate('staging', 455, 'es', participateResult)
