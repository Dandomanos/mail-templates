import _ from 'lodash'

const styles = {
  brandingColor: { type: 'color', default: '#e91721' },
  backgroundsColor: { type: 'color', default: '#fff' },
  secondaryBackgroundColor: { type: 'color', default: '#ebebeb' },
  fontsColor: { type: 'color', default: '#474747' },
  fontSize: { type: 'px', default: 16 },
  h1FontSize: { type: 'px', default: 30 },
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
}

const validateStyle = ([key, val]) => {
  const scheme = styles[key]
  const type = scheme && types[scheme.type]

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
