const _ = require('lodash')
const utils = require('./utils')

const getCompiledStyle = (style = {}) => {
  const elementStyles = Object.keys(style)
    .filter(item => item !== 'commons')
    .reduce((prev, cur) => _.set(prev, `${cur}Style`, getBasicStyles(style, cur)), {
      commons: style.commons,
    })

  const imgStyles = Object.keys(style)
    .filter(item => item !== 'commons')
    .reduce((prev, cur) => _.set(prev, `${cur}ImgStyle`, utils.getImageStyle(style[cur])), {})

  return { ...elementStyles, ...imgStyles }
}

const getBasicStyles = (style = {}, key = '') => {
  const element = _.get(style, key, {})
  const SIDES = ['', 'top', 'right', 'left', 'bottom']
  console.log('min-height', utils.getMinHeight(element))
  return `
    ${SIDES.reduce((prev, cur) => prev + utils.getBorder(element, cur), '')}
    ${SIDES.reduce((prev, cur) => prev + utils.getSideElement(element, cur, 'padding'), '')}
    ${SIDES.reduce((prev, cur) => prev + utils.getSideElement(element, cur, 'margin'), '')}
    ${utils.getMaxWidth(element)}
    ${utils.getMinHeight(element)}
  `
}

module.exports = {
  getCompiledStyle,
}
