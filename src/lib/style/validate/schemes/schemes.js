const basicStyles = require('./basicStyles')
/* ********************      SCHEMES       ***************** */
const defaultPrimaryButton = {
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
const defaultSecondaryButton = {
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
const defaultLogoHeader = {
  padding: { type: 'px', default: '5px' }
}
const logoHeader = { ...basicStyles, ...defaultLogoHeader }
const header = { ...basicStyles }
const defaultBlock = { padding: { type: 'px', default: '20px' } }
const block = { ...basicStyles, ...defaultBlock }
const primaryButton = { ...basicStyles, ...defaultPrimaryButton }
const secondaryButton = { ...basicStyles, ...defaultSecondaryButton }


const stylesScheme = {
  commons: {
    type: 'object',
    default: commons,
  },
  logoHeader: {
    type: 'object',
    default: logoHeader
  },
  header: {
    type: 'object',
    default: header,
  },
  block: {
    type: 'object',
    default: block,
  },
  primaryButton: {
    type: 'object',
    default: primaryButton,
  },
  secondaryButton: {
    type: 'object',
    default: secondaryButton,
  },
  paragraph: {
    type: 'object',
    default: paragraph,
  },
  h1: {
    type: 'object',
    default: h1,
  },
}

const schemes = {
  commons,
  logoHeader,
  header,
  block,
  primaryButton,
  secondaryButton,
  stylesScheme,
  h1,
  paragraph,
}
module.exports = schemes
