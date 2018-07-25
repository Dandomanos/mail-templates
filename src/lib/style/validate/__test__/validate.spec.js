const validate = require('./../index.js')
const schemes = require('./../schemes/schemes')

const BUILD_1 = {
  commons: {
    secureFont: 'timEs',
    fontColor: 'white',
    backgroundColor: '#99CC00',
    secondaryBackgroundColor: 'blue',
    borderRadius: 10,
    width: 450,
  },
  header: {
    borderColor: 'inherit',
    borderStyle: 'dotted',
    borderRightSize: 2,
    margin: 0,
    marginLeft: 5,
    padding: 3,
    paddingTop: 2,
    borderRadius: 5,
    fontWeight: 200,
    textAlign: 'START',
    textTransform: 'None',
    textDecoration: 'overline',
    textDecorationStyle: 'dotted',
    color: 'olive',
    backgroundColor: 'purple',
    secureFont: 'coMic sAns',
  }
}
const BUILD_2 = {
  commons: {
    secureFont: 'arIAlbLAck',
    fontColor: 'hsl(123, 45%, 67%)',
    backgroundColor: 'rgb(255,255,255)',
    secondaryBackgroundColor: 'currentColor',
    borderRadius: 4,
    width: 750,
  },
  header: {
    borderColor: 'tomato',
    borderStyle: 'double',
    borderRightSize: '3',
    margin: '0',
    marginLeft: '2',
    padding: '0',
    paddingTop: '10',
    borderRadius: 5,
    fontWeight: '200',
    textAlign: 'RiGhT',
    textTransform: 'LowerCaSe',
    textDecoration: 'noNe',
    textDecorationStyle: 'wavy',
    color: 'hsla(123, 45%, 67%, 0.4)',
    backgroundColor: '#EEFFEE',
    secureFont: 'TREbuCHETms',
  }
}
const BUILD_3 = {
  commons: {
    secureFont: 'ARIAL',
    fontColor: 'hsla(123, 45%, 67%, 0.4)',
    backgroundColor: 'rgba(168,25,124,0.5)',
    secondaryBackgroundColor: 'transparent',
    borderRadius: 0,
    width: 500,
  },
  header: {
    borderColor: '#FF00FF',
    borderStyle: 'groove',
    borderRightSize: 1,
    margin: '5',
    marginLeft: 0,
    padding: 0,
    paddingTop: 20,
    borderRadius: '0',
    fontWeight: 'bolder',
    textAlign: 'centeR',
    textTransform: 'uPPerCaSE',
    textDecoration: 'UNderLine',
    textDecorationStyle: 'double',
    color: 'rgb(128,33,21)',
    backgroundColor: 'rgba(23,12,32,0.2)',
    secureFont: 'couriernew',
  }
}
const INVALID = {
  commons: {
    secureFont: 'dandomanos',
    fontColor: 'dando-color-dark',
    backgroundColor: 'rgba(255,20255,255)',
    secondaryBackgroundColor: 'rgba(255, 0, 0)',
  },
  header: {
    borderColor: '#MMHH44',
    borderStyle: 'invalidStyle',
    borderRightSize: 'two',
    margin: '0px',
    marginLeft: 'one',
    padding: '1rem',
    paddingTop: 'none',
    borderRadius: 'transparent',
    fontWeight: 'strong',
    textAlign: 'middle',
    textTransform: 'rotate',
    textDecoration: 'dandomanos-art',
    textDecorationStyle: 'icon',
    color: 'dandocolor',
    backgroundColor: 'rgba(23,23,23)',
    secureFont: 'GOTHAM',
  }
}
const DEFAULT = {
}
const defaultValidated = validate.getValidatedStyle(DEFAULT)
const invalid = validate.getValidatedStyle(INVALID)
const build1 = validate.getValidatedStyle(BUILD_1)
const build2 = validate.getValidatedStyle(BUILD_2)
const build3 = validate.getValidatedStyle(BUILD_3)

const checkStyle = (element = 'commons', style = 'fontColor', concat = '', type = 'default', values = []) => {
  // FONT-COLOR
  expect(invalid[element][style]).toBe(schemes[element][style].default)
  expect(defaultValidated[element][style]).toBe(schemes[element][style].default)
  expect(build1[element][style]).toBe(getValue(values[0] || `${BUILD_1[element][style]}${concat}`, type))
  expect(build2[element][style]).toBe(getValue(values[1] || `${BUILD_2[element][style]}${concat}`, type))
  expect(build3[element][style]).toBe(getValue(values[2] || `${BUILD_3[element][style]}${concat}`, type))
}

const getValue = (string = '', type = 'default') => {
  const transform = {
    lowercase: string.toLowerCase(),
    casted: String(string),
    normal: string,
    default: string
  }
  return transform[type]
}

describe('validate styles', () => {
  it('should validate common styles', () => {
    // TO DO => ADD GOOGLE FONTS AND CUSTOM FONTS(URL, FORMATS) 
    checkStyle('commons', 'secureFont', '', 'default', ['Times, "Times New Roman", serif', '"Arial Black", Gadget, sans-serif', 'Arial, Helvetica, sans-serif'])
    checkStyle('commons', 'fontColor')
    checkStyle('commons', 'backgroundColor')
    checkStyle('commons', 'secondaryBackgroundColor')
    checkStyle('commons', 'borderRadius', 'px')
    checkStyle('commons', 'width', 'px')
  })

  it('should validate header basic styles', () => {
    checkStyle('header', 'borderColor')
    checkStyle('header', 'borderStyle')
    checkStyle('header', 'borderRightSize', 'px')
    checkStyle('header', 'margin', 'px')
    checkStyle('header', 'marginLeft', 'px')
    checkStyle('header', 'padding', 'px')
    checkStyle('header', 'paddingTop', 'px')
    checkStyle('header', 'borderRadius', 'px')
    checkStyle('header', 'fontWeight', '', 'casted')
    checkStyle('header', 'textAlign', '', 'lowercase')
    checkStyle('header', 'textTransform', '', 'lowercase')
    checkStyle('header', 'textDecoration', '', 'lowercase')
    checkStyle('header', 'textDecorationStyle', '', 'lowercase')
    checkStyle('header', 'color')
    checkStyle('header', 'backgroundColor')
    checkStyle('header', 'secureFont', '', 'default', ['"Comic Sans MS", cursive, sans-serif', '"Trebuchet MS", Helvetica, sans-serif', '"Courier New", Courier, monospace'])
  })

  it('should have different default value for components', () => {
    expect(defaultValidated.header.padding).toBe('0px')
    expect(defaultValidated.block.padding).toBe('20px')
  })
})