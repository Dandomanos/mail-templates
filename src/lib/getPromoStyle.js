import _ from 'lodash'
const debug = require('debug')('app:promo-style')
const styles = {
  brandingColor: { type: 'color', default: '#e91721' },
  backgroundsColor: { type: 'color', default: '#fff' },
  secondaryBackgroundColor: { type: 'color', default: '#ebebeb' },
  fontsColor: { type: 'color', default: '#474747' },
  fontSize: { type: 'px', default: 16 },
  h1FontSize: { type: 'px', default: 30 },
  primary: { type: 'button', default: { backgroundColor: '#e91721' } },
}

const buttonStyle = {
  highlightedBorder: { type: 'side', default: 'none' },
  backgroundColor: { type: 'color', default: '#e91721' },
  textColor: { type: 'color', default: '#FFFFFF' },
  borderColor: { type: 'color', default: '#bb121a' },
  borderRadius: { type: 'px', default: '5' },
  borderSize: { type: 'px', default: '0' },
}

const types = {
  color: {
    check: x => (x + '').match(/^#[0-9a-f]{6}$/i),
    normalize: x => x,
  },
  px: {
    check: x => (x + '').match(/^\d+$/i),
    normalize: x => x + 'px',
  },
  button: {
    check: x => typeof x === 'object',
    normalize: x =>
      Object.keys(buttonStyle).reduce(
        (prev, cur) =>
          _.assign(prev, { [cur]: validateStyle([cur, x[cur]], true) || buttonStyle[cur].default }),
        {}
      ),
  },
  side: {
    check: x => ['None', 'Bottom', 'Top', 'Left', 'Right'].includes(x),
    normalize: x => x.charAt(0).toLowerCase() + x.slice(1),
  },
}

const validateStyle = ([key, val], isButton = false) => {
  const scheme = isButton ? buttonStyle[key] : styles[key]
  const type = scheme && types[scheme.type]

  debug('scheme', scheme, 'type', type)

  return !scheme || !type || !type.check(val) ? null : type.normalize(val)
}

const getPromoStyle = promoConfig => {
  if (!promoConfig) return {}

  const promoStyle = _.get(promoConfig, 'template.style', {})

  const getValue = key => {
    return validateStyle([key, promoStyle[key]]) || styles[key].default
  }

  return Object.keys(styles).reduce((prev, cur) => _.assign(prev, { [cur]: getValue(cur) }), {})
}

export default getPromoStyle
