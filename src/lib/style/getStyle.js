const validate = require('./validate/index.js')
const compiler = require('./compiler/index.js')

let validatedStyle

const getStyle = style => {
  validatedStyle = validate.getValidatedStyle(style)

  return Object.assign(compiler.getCompiledStyle(validatedStyle))
}

module.exports = getStyle
