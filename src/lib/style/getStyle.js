const validate = require('./validate/index.js')
const compiler = require('./compiler/index.js')

let validatedStyle

const getStyle = style => {
  validatedStyle = validate.getValidatedStyle(style)

  console.log('validatedStyle', validatedStyle)
  console.log('compiledStyle', compiler.getCompiledStyle(validatedStyle))

  return Object.assign(compiler.getCompiledStyle(validatedStyle))
}

module.exports = getStyle
