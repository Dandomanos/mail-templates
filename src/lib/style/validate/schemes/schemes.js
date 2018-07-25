const basicStyles = require('./basicStyles')
/* ********************      SCHEMES       ***************** */
const primary = {
  highlightedBorder: {
    type: 'side',
    default: 'none',
  },
  backgroundColor: {
    type: 'color',
    default: '#e91721',
  },
  textColor: {
    type: 'color',
    default: '#FFFFFF',
  },
  borderColor: {
    type: 'color',
    default: '#bb121a',
  },
  borderRadius: {
    type: 'px',
    default: '5px',
  },
  borderSize: {
    type: 'px',
    default: '0px',
  },
}
const secondary = {
  highlightedBorder: {
    type: 'side',
    default: 'none',
  },
  backgroundColor: {
    type: 'color',
    default: '#BABABA',
  },
  textColor: {
    type: 'color',
    default: '#FDFDFD',
  },
  borderColor: {
    type: 'color',
    default: '#D1D1D1',
  },
  borderRadius: {
    type: 'px',
    default: '5px',
  },
  borderSize: {
    type: 'px',
    default: '0px',
  },
}

const h1 = {
  fontFamilyActive: {
    type: 'boolean',
    default: false,
  },
  fontFamily: {
    type: 'string',
    default: 'Gotham',
  },
  fontAlignment: {
    type: 'align',
    default: 'center',
  },
  fontWeight: {
    type: 'fontWeight',
    default: 'bold',
  },
  fontColor: {
    type: 'color',
    default: '#474747',
  },
}

const paragraph = {
  fontAlignment: {
    type: 'align',
    default: 'center',
  },
  fontWeight: {
    type: 'fontWeight',
    default: 'bold',
  },
}

const commons = {
  fontFamily: { type: 'string', default: 'Gotham' },
  secureFont: { type: 'secureFont', default: 'Arial, Helvetica' },
  fontColor: { type: 'color', default: '#474747' },
  backgroundColor: { type: 'color', default: '#FFFFFF' },
  secondaryBackgroundColor: { type: 'color', default: '#dedede' },
  borderRadius: { type: 'px', default: '5px' },
  width: { type: 'px', default: '700px' },
}
const header = { ...basicStyles }
const defaultBlock = { padding: { type: 'px', default: '20px' } }
const block = { ...basicStyles, ...defaultBlock }

const stylesScheme = {
  commons: {
    type: 'object',
    default: commons,
  },
  header: {
    type: 'object',
    default: header,
  },
  block: {
    type: 'object',
    default: block,
  },
  primary: {
    type: 'object',
    default: primary,
  },
  secondary: {
    type: 'object',
    default: secondary,
  },
  paragraph: {
    type: 'object',
    default: paragraph,
  },
  fontFamily: {
    type: 'string',
    default: 'Gotham',
  },
  footerTextColor: {
    type: 'color',
    default: '#fff',
  },
  h1: {
    type: 'object',
    default: h1,
  },
}

const schemes = {
  commons,
  header,
  block,
  primary,
  secondary,
  stylesScheme,
  h1,
  paragraph,
}
module.exports = schemes
