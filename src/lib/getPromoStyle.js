const _ = require('lodash')
const debug = require('debug')('app:promo-style')
/* ********************      SCHEMES       ***************** */
const primary = {
  highlightedBorder: { type: 'side', default: 'none' },
  backgroundColor: { type: 'color', default: '#e91721' },
  textColor: { type: 'color', default: '#FFFFFF' },
  borderColor: { type: 'color', default: '#bb121a' },
  borderRadius: { type: 'px', default: '5' },
  borderSize: { type: 'px', default: '0' },
}
const secondary = {
  highlightedBorder: { type: 'side', default: 'none' },
  backgroundColor: { type: 'color', default: '#BABABA' },
  textColor: { type: 'color', default: '#FDFDFD' },
  borderColor: { type: 'color', default: '#D1D1D1' },
  borderRadius: { type: 'px', default: '5' },
  borderSize: { type: 'px', default: '0' },
}
const stylesScheme = {
  brandingColor: { type: 'color', default: '#e91721' },
  backgroundsColor: { type: 'color', default: '#fff' },
  borderRadius: { type: 'px', default: 5 },
  bordersSize: { type: 'px', default: 1 },
  secondaryBackgroundColor: { type: 'color', default: '#ebebeb' },
  fontsColor: { type: 'color', default: '#474747' },
  fontSize: { type: 'px', default: 16 },
  h1FontSize: { type: 'px', default: 30 },
  primary: { type: 'button', default: primary },
  secondary: { type: 'button', default: secondary },
  fontFamily: { type: 'string', default: 'Gotham' },
}
const schemes = {
  primary: primary,
  secondary: secondary,
  stylesScheme: stylesScheme,
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
    normalize: (x, key) =>
      Object.keys(schemes[key]).reduce(
        (prev, cur) =>
          _.assign(prev, {
            [cur]: validateStyle([cur, x[cur]], schemes[key]) || schemes[key][cur].default,
          }),
        {}
      ),
  },
  side: {
    check: x => ['None', 'Bottom', 'Top', 'Left', 'Right'].includes(x),
    normalize: x => x.charAt(0).toLowerCase() + x.slice(1),
  },
  string: {
    check: x => (x + '').match(/^[a-zA-Z0-9'-]+$/i),
    normalize: x => x,
  },
}

const validateStyle = ([key, val], nestedScheme) => {
  const scheme = nestedScheme ? nestedScheme[key] : stylesScheme[key]
  const type = scheme && types[scheme.type]

  debug('scheme', scheme, 'type', type, 'key', key)

  return !scheme || !type || !type.check(val) ? null : type.normalize(val, key)
}

const multiplyPixel = (value, variable = 1) => {
  return `${Number(value.substr(0, value.length - 2)) * variable}px`
}

const getPromoStyle = promoConfig => {
  if (!promoConfig) return {}

  const promoStyle = _.get(promoConfig, 'template.style', {})

  const getValue = key => {
    return validateStyle([key, promoStyle[key]]) || stylesScheme[key].default
  }

  const style = Object.keys(stylesScheme).reduce(
    (prev, cur) => _.assign(prev, { [cur]: getValue(cur) }),
    {}
  )
  // Add calculate input border
  return _.assign(style, { inputBorder: multiplyPixel(style.bordersSize, 2) })
}

// export default getPromoStyle
module.exports = getPromoStyle
