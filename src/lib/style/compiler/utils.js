const getSideElement = (element = {}, side = '', style = 'margin') => {
  const Side = capitalize(side)
  const Style = element[`${style}${Side}`]
  return Style
    ? `
  ${style}${side && '-' + side}: ${Style};`
    : ''
}

const getMaxWidth = (element = {}) => {
  return `max-width: calc(100% - ${removeUnits(element.marginLeft) +
    removeUnits(element.marginRight)}px);`
}
const getMinHeight = (element = {}) => {
  return element.imgMaxHeight ? `min-height: ${element.imgMaxHeight}` : ''
}

const getImageStyle = (element = {}) => {
  const maxWidth = element.imgMaxWidth ? `max-width: ${element.imgMaxWidth};` : ''
  const maxHeight = element.imgMaxHeight ? `max-height: ${element.imgMaxHeight};` : ''
  const imgAlign = element.imgAlign
  return maxWidth || maxHeight || imgAlign ? `${maxWidth}${maxHeight}${imgAlign}` : ''
}

const getFonts = (element = {}) => {
  const properties = ['fontSize', 'color', 'fontWeight', 'textDecoration', 'textAlign', 'textTransform']
  return properties.reduce((prev, cur) => `${prev}${compileCamelStyle(element, cur)}`, '')
}

const getBasics = (element = {}) => {
  return Object.keys(element).reduce((prev, cur) => `${prev}${compileCamelStyle(element, cur)}`, '')
}

/* ********************      AUX       ***************** */

const removeUnits = (value = '0px') => {
  return (value && Number(value.replace('px', ''))) || 0
}

const capitalize = (string = '') => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const camelToKebab = (string = '') => {
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

const compileCamelStyle = (element = {}, key = '') => {
  return element[key] ? `${camelToKebab(key)}: ${element[key]};\n` : ''
}

const utils = {
  getSideElement,
  getMaxWidth,
  getImageStyle,
  getMinHeight,
  getFonts,
  getBasics
}

module.exports = utils
