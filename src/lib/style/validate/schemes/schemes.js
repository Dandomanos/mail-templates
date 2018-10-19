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
  borderWidth: {
    type: 'px',
    default: '0px',
  },
  minWidth: {
    type: 'px',
    default: '200px'
  }
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
  borderWidth: {
    type: 'px',
    default: '0px',
  },
}

const defaultTitle = {
  fontFamily: {
    type: 'string',
    default: 'Gotham',
  },
  textAlign: {
    type: 'align',
    default: 'center',
  },
  fontWeight: {
    type: 'fontWeight',
    default: 'bold',
  },
  textDecoration: {
    type: 'textDecoration',
    default: 'none'
  },
  textTransform: {
    type: 'textTransform',
    default: 'none',
  },
  color: {
    type: 'color',
    default: '#474747',
  },
  fontSize: {
    type: 'px',
    default: '25px',
  },
  marginTop: {
    type: 'px',
    default: '16px'
  }
}

const defaultSubtitle = {
  fontFamily: {
    type: 'string',
    default: 'Gotham',
  },
  textAlign: {
    type: 'align',
    default: 'center',
  },
  fontWeight: {
    type: 'fontWeight',
    default: 'bold',
  },
  textDecoration: {
    type: 'textDecoration',
    default: 'none'
  },
  textTransform: {
    type: 'textTransform',
    default: 'none',
  },
  color: {
    type: 'color',
    default: '#474747',
  },
  fontSize: {
    type: 'px',
    default: '20px',
  },
  marginTop: {
    type: 'px',
    default: '16px'
  }
}

const defaultDescription = {
  // TODO add default values for section description
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
const defaultLogo = {
  padding: { type: 'px', default: '5px' },
  imgMaxWidth: { type: 'px', default: '50px' },
  imgMaxHeight: { type: 'px', default: '50px' },
  imgAlign: { type: 'float', default: 'float:left;' },
}
const defaultSection = {
  padding: { type: 'px', default: '10px' }
}
const logo = { ...basicStyles, ...defaultLogo }
const header = { ...basicStyles }
const defaultBlock = { padding: { type: 'px', default: '20px' } }
const block = { ...basicStyles, ...defaultBlock }
const primaryButton = { ...basicStyles, ...defaultPrimaryButton }
const secondaryButton = { ...basicStyles, ...defaultSecondaryButton }
const title = { ...basicStyles, ...defaultTitle }
const subtitle = { ...basicStyles, ...defaultSubtitle }
const description = { ...basicStyles, ...defaultDescription }
const section = { ...basicStyles, ...defaultSection }


const stylesScheme = {
  commons: {
    type: 'object',
    default: commons,
  },
  logo: {
    type: 'object',
    default: logo
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
  title: {
    type: 'object',
    default: title,
  },
  subtitle: {
    type: 'object',
    default: subtitle,
  },
  description: {
    type: 'object',
    default: description,
  },
  section: {
    type: 'object',
    default: section,
  },
}

const schemes = {
  commons,
  logo,
  header,
  block,
  primaryButton,
  secondaryButton,
  stylesScheme,
  title,
  subtitle,
  description,
  paragraph,
}
module.exports = schemes
