const _ = require('lodash')
const isColor = require('is-color')
const schemes = require('./schemes/schemes')
const $v = require('./schemes/validations')

const multiplyPixel = (value, variable = 1) => {
  const sizeAsString = _.isNumber(value) ? String(value) : value.substr(0, value.length - 2)
  return `${Number(sizeAsString) * variable}px`
}

const validateStyle = ([key, val], nestedScheme) => {
  const scheme = nestedScheme ? nestedScheme[key] : schemes.stylesScheme[key]
  const defaultValue = nestedScheme ? nestedScheme[key].default : schemes.stylesScheme[key].default
  const type = scheme && types[scheme.type]

  return !scheme || !type || !type.check(val)
    ? getDefaultValue(defaultValue)
    : type.normalize(val, key)
}

const getDefaultValue = defaultValue => {
  return _.isObject(defaultValue)
    ? Object.keys(defaultValue).reduce(
      (prev, cur) =>
        _.assign(prev, {
          [cur]: defaultValue[cur].default,
        }),
      {}
    )
    : defaultValue
}

const getStyleValue = (obj, key) => {
  return validateStyle([key, obj[key]])
}


const checkFromList = (list = [], isObject = false) => {
  return {
    check: x => x && (isObject ? list[x.toLowerCase()] !== undefined : list.includes(String(x).toLowerCase())),
    normalize: x => isObject ? list[x.toLowerCase()] : String(x).toLowerCase()
  }
}

const types = {
  color: {
    check: x => isColor(x),
    normalize: x => x,
  },
  px: {
    check: x => (x + '').match(/^\d+$/i),
    normalize: x => x + 'px',
  },
  object: {
    check: x => typeof x === 'object',
    normalize: (x, key) =>
      Object.keys(schemes[key]).reduce(
        (prev, cur) =>
          _.assign(prev, {
            [cur]: validateStyle([cur, x[cur]], schemes[key]) || schemes[key][cur].default,
          }),
        {}
      ),
  },
  side: {
    check: x => ['None', 'Bottom', 'Top', 'Left', 'Right'].includes(x),
    normalize: x => x.charAt(0).toLowerCase() + x.slice(1),
  },
  align: checkFromList($v.textAlign),
  textTransform: checkFromList($v.textTransform),
  fontWeight: checkFromList($v.fontWeight),
  border: {
    check: x => typeof x === 'string',
    normalize: x => {
      const borderArray = x && x.split(' ')
      const border = {}
      if (borderArray && borderArray.length) {
        borderArray.forEach(item => {
          const isWidth = item.includes('px') && item.replace('px', '').match(/^[0-9]*$/)
          const isBorderStyle = $v.borderStyle.includes(String(item).toLowerCase())
          if (isWidth) border.width = item
          if (isBorderStyle) border.style = item.toLowerCase()
          if (isColor(item)) border.color = item
        })
      }
      return Object.keys(border).reduce((prev, cur, index) => prev.concat(`${index > 0 ? ' ' : ''}${border[cur]}`), '')
    },
  },
  borderStyle: checkFromList($v.borderStyle),
  secureFont: checkFromList($v.secureFonts, true),
  textDecoration: checkFromList($v.textDecoration),
  textDecorationStyle: checkFromList($v.textDecorationStyle),
  float: checkFromList($v.float, true),
  boolean: {
    check: x => typeof x === 'boolean',
    normalize: x => x,
  },
  string: {
    check: x => typeof x === 'string' && (x + '').match(/^[a-zA-Z0-9'-]+$/i),
    normalize: x => x,
  },
}

module.exports = {
  multiplyPixel: multiplyPixel,
  validateStyle: validateStyle,
  getStyleValue: getStyleValue,
}
