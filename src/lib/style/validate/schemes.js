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
    type: 'weight',
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
    type: 'weight',
    default: 'bold',
  },
}

const commons = {
  fontFamily: { type: 'string', default: 'Gotham' },
  secureFont: { type: 'secureFont', default: 'Arial, Helvetica' },
  fontsColor: { type: 'color', default: '#474747' },
  backgroundsColor: { type: 'color', default: '#FFFFFF' },
  secondaryBackgroundColor: { type: 'color', default: '#dedede' },
  borderRadius: { type: 'px', default: '5px' },
  width: { type: 'px', default: '700px' },
}

const borders = {
  borderColor: { type: 'color', default: 'transparent' },
  borderSize: { type: 'px', default: 'none' },
  borderStyle: { type: 'borderStyle', default: 'solid' },
  borderLeftColor: { type: 'color', default: null },
  borderLeftSize: { type: 'px', default: null },
  borderLeftStyle: { type: 'borderStyle', default: null },
  borderRightColor: { type: 'color', default: null },
  borderRightSize: { type: 'px', default: null },
  borderRightStyle: { type: 'borderStyle', default: null },
  borderTopColor: { type: 'color', default: null },
  borderTopSize: { type: 'px', default: null },
  borderTopStyle: { type: 'borderStyle', default: null },
  borderBottomColor: { type: 'color', default: null },
  borderBottomSize: { type: 'px', default: null },
  borderBottomStyle: { type: 'borderStyle', default: null },
}
const paddings = {
  padding: { type: 'px', default: '0px' },
  paddingTop: { type: 'px', default: null },
  paddingRight: { type: 'px', default: null },
  paddingLeft: { type: 'px', default: null },
  paddingBottom: { type: 'px', default: null },
}
const margins = {
  margin: { type: 'px', default: '0px' },
  marginTop: { type: 'px', default: null },
  marginRight: { type: 'px', default: null },
  marginLeft: { type: 'px', default: null },
  marginBottom: { type: 'px', default: null },
}

const basicStyles = { ...borders, ...paddings, ...margins }
const header = { ...basicStyles }
const block = { ...basicStyles }

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
