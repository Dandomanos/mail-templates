import _ from 'lodash'
// aux functions
const translator = (obj, lang, fbLang) => {
  return _.cloneDeepWith(obj, value => {
    if (value && value.$ /* === 1 //TBD */) {
      return value[lang] || value[fbLang] || value[getFirstLangKey(value)] || ''
    }
  })
}
const getFirstLangKey = value => {
  return Object.keys(value).filter(x => x != '$')[0]
}

const debug = require('debug')('app:get-content')
const getPromoContent = (promoConfig, lang, participate) => {
  const status =
    participate.status === 'winner' || participate.status === 'participant' ? 'OK' : 'Invalid'
  const $pc = path => {
    return translator(_.get(promoConfig, path, null), lang, 'en')
  }
  const redirectUrl = (template, type) => {
    const active = $pc(`template.${template}.${type}.activeUrl`)
    let url = $pc(`template.${template}.${type}.url`)

    // Append voucher code if needed
    const appendVoucher = $pc(`template.${template}.${type}.voucherInUrl`)
    if (appendVoucher && participate.voucher) url += participate.voucher

    return active && url ? url : false
  }
  const imageHeader =
    $pc('template.home.headerDesktopImage') ||
    $pc('template.home.headerMobileImage') ||
    $pc('template.header.headerDesktopImage') ||
    $pc('template.header.headerMobileImage')

  const flow = _.get(promoConfig, 'steps', [])
  const template = `${flow[flow.length - 1]}${status}`
  const title = $pc(`template.${template}.title`)
  const content = $pc(`template.${template}.content`)
  const buttonText = $pc(`template.${template}.button.text`)
  const secondaryButtonText = $pc(`template.${template}.secondaryButton.text`)
  const buttonUrl = redirectUrl(template, 'button') || participate.promoUrl
  const secondaryButtonUrl = redirectUrl(template, 'secondaryButton') || participate.promoUrl
  const secondaryButton = secondaryButtonText
    ? `<button class="secondary" href="${secondaryButtonUrl}">${secondaryButtonText}</button>`
    : ''
  debug('template', template)
  debug('imageHeader', imageHeader)
  debug('title', title)
  debug('content', content)
  debug('buttonUrl', buttonUrl)
  debug('secondaryButtonUrl', secondaryButtonUrl)
  debug('buttonText', buttonText)
  debug('secondaryButtonText', secondaryButtonText)
  debug('secondaryButton', secondaryButton)

  return {
    imageHeader: imageHeader,
    title: title,
    content: content,
    buttonText: buttonText,
    buttonUrl: buttonUrl,
    secondaryButton: secondaryButton,
  }
}
export default getPromoContent
