const getBorder = (element = {}, side = '') => {
  const Side = capitalize(side)
  const size = element[`border${Side}Size`]
  const color = element[`border${Side}Color`]
  const style = element[`border${Side}Style`]
  const bkUpSize = element[`borderSize`]
  const bkUpColor = element[`borderColor`]
  const bkUpstyle = element[`borderStyle`]
  return size || color || style
    ? `
    border${side && '-' + side}: ${size || bkUpSize} ${style || bkUpstyle} ${color || bkUpColor};`
    : ''
}

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

/* ********************      AUX       ***************** */

const removeUnits = (value = '0px') => {
  return (value && Number(value.replace('px', ''))) || 0
}

const capitalize = (string = '') => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const utils = {
  getBorder,
  getSideElement,
  getMaxWidth,
}

module.exports = utils
