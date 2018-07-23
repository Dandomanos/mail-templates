const _ = require('lodash')
const isColor = require('is-color')
const schemes = require('./schemes')

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

const validBorderStyle = [
  'solid',
  'dashed',
  'dotted',
  'double',
  'groove',
  'hidden',
  'inset',
  'none',
  'outset',
  'ridge',
  'unset',
  'inherit',
  'initial',
]
const secureFonts = {
  // Serif Fonts
  georgia: 'Georgia, serif',
  palatino: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  palatinolinotype: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  'palatino linotype': '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  times: '"Times New Roman", Times, serif',
  timesnewroman: '"Times New Roman", Times, serif',
  'times new roman': '"Times New Roman", Times, serif',
  // Sans-Serif Fonts
  arial: 'Arial, Helvetica, sans-serif',
  arialblack: '"Arial Black", Gadget, sans-serif',
  comic: '"Comic Sans MS", cursive, sans-serif',
  comicsans: '"Comic Sans MS", cursive, sans-serif',
  'comic sans': '"Comic Sans MS", cursive, sans-serif',
  impact: 'Impact, Charcoal, sans-serif',
  lucidasans: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  lucidasansunicode: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  'lucida sans': '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  'lucida sans unicode': '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  tahoma: 'Tahoma, Geneva, sans-serif',
  trebuchet: '"Trebuchet MS", Helvetica, sans-serif',
  trebuchetms: '"Trebuchet MS", Helvetica, sans-serif',
  'trebuchet ms': '"Trebuchet MS", Helvetica, sans-serif',
  verdana: 'Verdana, Geneva, sans-serif',
  // Monospace Fonts
  courier: '"Courier New", Courier, monospace',
  couriernew: '"Courier New", Courier, monospace',
  'courier new': '"Courier New", Courier, monospace',
  lucida: '"Lucida Console", Monaco, monospace',
  lucidaconsole: '"Lucida Console", Monaco, monospace',
  'lucida console': '"Lucida Console", Monaco, monospace',
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
  align: {
    check: x => ['left', 'middle', 'right'].includes(x),
    normalize: x => (x == 'middle' ? 'center' : x),
  },
  boolean: {
    check: x => typeof x === 'boolean',
    normalize: x => x,
  },
  weight: {
    check: x => ['Bold', 'Lighter', 'Normal', 'Bolder'].includes(x),
    normalize: x => x.toLowerCase(),
  },
  borderStyle: {
    check: x => x && validBorderStyle.includes(x.toLowerCase()),
    normalize: x => x.toLowerCase(),
  },
  string: {
    check: x => typeof x === 'string' && (x + '').match(/^[a-zA-Z0-9'-]+$/i),
    normalize: x => x,
  },
  secureFont: {
    check: x => secureFonts[x.toLowerCase()] !== undefined,
    normalize: x => secureFonts[x.toLowerCase()],
  },
}

module.exports = {
  multiplyPixel: multiplyPixel,
  validateStyle: validateStyle,
  getStyleValue: getStyleValue,
}
