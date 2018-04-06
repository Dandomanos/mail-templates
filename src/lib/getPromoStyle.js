import _ from 'lodash'

const defaultStyle = {
  brandingColor: '#e91721',
  backgroundsColor: '#fff',
  secondaryBackgroundColor: '#ebebeb',
  fontsColor: '#474747',
  fontSize: 16,
  h1FontSize: 30,
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

const schemes = {
  brandingColor: {
    type: 'color',
  },
  backgroundsColor: {
    type: 'color',
  },
  secondaryBrandingColor: {
    type: 'color',
  },
  fontsColor: {
    type: 'color',
  },
  fontSize: {
    type: 'px',
  },
  h1FontSize: {
    type: 'px',
  },
}

const validateStyle = ([key, val]) => {
  const scheme = schemes[key]
  const type = scheme && types[scheme.type]

  if (!scheme || !type || !type.check(val)) return null

  return type.normalize(val)
}

const getPromoStyle = promoConfig => {
  if (!promoConfig) return {}

  const style = _.get(promoConfig, 'template.style', {})

  const getValue = key => {
    return validateStyle([key, style[key]]) || defaultStyle[key]
  }

  return {
    brandingColor: getValue('brandingColor'),
    backgroundsColor: getValue('backgroundsColor'),
    secondaryBackgroundColor: getValue('secondaryBackgroundColor'),
    fontsColor: getValue('fontsColor'),
    fontSize: getValue('fontSize'),
    h1FontSize: getValue('h1FontSize'),
  }
}

export default getPromoStyle
