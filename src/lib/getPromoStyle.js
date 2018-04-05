import _ from 'lodash'

const defaultStyle = {
  brandingColor: '#e91721',
  backgroundsColor: '#fff',
  secondaryBackgroundColor: '#ebebeb',
  fontsColor: '#474747',
  fontSize: 16,
  h1FontSize: 30,
}

const getPromoStyle = promoConfig => {
  if (!promoConfig) return {}

  const style = _.get(promoConfig, 'template.style', {})

  const getItem = key => {
    return style[key] || defaultStyle[key]
  }

  return {
    brandingColor: getItem('brandingColor'),
    backgroundsColor: getItem('backgroundsColor'),
    secondaryBackgroundColor: getItem('secondaryBackgroundColor'),
    fontsColor: getItem('fontsColor'),
    fontSize: getItem('fontSize') + 'px',
    h1FontSize: getItem('h1FontSize') + 'px',
  }
}

export default getPromoStyle
