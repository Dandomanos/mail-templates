const schemes = require('./schemes')
const utils = require('./utils')
const _ = require('lodash')

const getValidatedStyle = (style = {}) => {
  return Object.keys(schemes.stylesScheme).reduce(
    (prev, cur) =>
      _.assign(prev, {
        [cur]: utils.getStyleValue(style, cur),
      }),
    {}
  )
}
const validate = {
  getValidatedStyle,
}
module.exports = validate
