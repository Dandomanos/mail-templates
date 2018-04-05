import heml from 'heml'
import fs from 'fs'
import getConfiguration from './src/lib/getConfiguration'
import getPromoStyle from './src/lib/getPromoStyle'
import getPromoContent from './src/lib/getPromoContent'

import writeFile from './src/writeFile'
import _ from 'lodash'

// Html template file name
const name = process.argv[2] || 'email'

if (!name) throw new Error('No template name defined')

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
;(async function() {
  // get configuration
  const promoConfig = await getConfiguration()
  debug('promoConfig', promoConfig)

  // Get Promo Style
  const promoStyle = getPromoStyle(promoConfig)
  debug('promoStyle', promoStyle)

  // Get Promo Template
  const template = fs.readFileSync(`${__dirname}/templates/${name}.heml`).toString()
  const styledHtml = _.template(template)

  // Get Promo Content
  const templateContent = getPromoContent()

  // Compile email with promoStyle and templateContent
  const mailTemplate = await heml(styledHtml(_.assign({}, promoStyle, templateContent)), options)

  // write
  writeFile(mailTemplate.html, name)
})()
