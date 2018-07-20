const _ = require('lodash')
const utils = require('./utils')

const getCompiledStyle = (style = {}) => {
  return {
    headerStyle: getBasicStyles(style, 'header'),
    blockStyle: getBasicStyles(style, 'block'),
  }
}

const getBasicStyles = (style = {}, key = '') => {
  const element = _.get(style, key, {})
  const SIDES = ['', 'top', 'right', 'left', 'bottom']
  return `
    ${SIDES.reduce((prev, cur) => prev + utils.getBorder(element, cur), '')}
    ${SIDES.reduce((prev, cur) => prev + utils.getSideElement(element, cur, 'padding'), '')}
    ${SIDES.reduce((prev, cur) => prev + utils.getSideElement(element, cur, 'margin'), '')}
    ${utils.getMaxWidth(element)}
  `
}

module.exports = {
  getCompiledStyle,
}
