// const _ = require('lodash')
const validate = require('./validate/index.js')
const compiler = require('./compiler/index.js')

let validatedStyle

const getStyle = style => {
  validatedStyle = validate.getValidatedStyle(style)

  return compiler.getCompiledStyle(validatedStyle)
}

// const capitalize = (string = '') => {
//   return string.charAt(0).toUpperCase() + string.slice(1)
// }

// const getBasicStyles = (key = '') => {
//   const element = _.get(validatedStyle, key, {})
//   const SIDES = ['', 'top', 'right', 'left', 'bottom']
//   return `
//     ${SIDES.reduce((prev, cur) => prev + getBorder(element, cur), '')}
//     ${SIDES.reduce((prev, cur) => prev + getSideElement(element, cur, 'padding'), '')}
//     ${SIDES.reduce((prev, cur) => prev + getSideElement(element, cur, 'margin'), '')}
//     ${getMaxWidth(element)}
//   `
// }

// const getSideElement = (element = {}, side = '', style = 'margin') => {
//   const Side = capitalize(side)
//   const Style = element[`${style}${Side}`]
//   return Style
//     ? `
//   ${style}${side && '-' + side}: ${Style};`
//     : ''
// }

// const getMaxWidth = (element = {}) => {
//   return `max-width: calc(100% - ${removeUnits(element.marginLeft) +
//     removeUnits(element.marginRight)}px);`
// }

// const removeUnits = (value = '0px') => {
//   return (value && Number(value.replace('px', ''))) || 0
// }

// const getBorder = (element = {}, side = '') => {
//   const Side = capitalize(side)
//   const size = element[`border${Side}Size`]
//   const color = element[`border${Side}Color`]
//   const style = element[`border${Side}Style`]
//   const bkUpSize = element[`borderSize`]
//   const bkUpColor = element[`borderColor`]
//   const bkUpstyle = element[`borderStyle`]
//   return size || color || style
//     ? `
//     border${side && '-' + side}: ${size || bkUpSize} ${style || bkUpstyle} ${color || bkUpColor};`
//     : ''
// }

module.exports = getStyle
