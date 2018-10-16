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
  return `
    ${utils.getMaxWidth(element)}
    ${utils.getMinHeight(element)}
    ${utils.getFonts(element)}
    ${utils.getBasics(element)}
  `
}

module.exports = {
  getCompiledStyle,
}
