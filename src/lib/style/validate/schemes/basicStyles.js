const basics = {
  backgroundColor: { type: 'color', default: null },
  color: { type: 'color', default: null },
  textDecoration: { type: 'textDecoration', default: 'none' },
  textDecorationStyle: { type: 'textDecorationStyle', default: 'none' },
  textTransform: { type: 'textTransform', default: 'none' },
  textAlign: { type: 'align', default: null },
  secureFont: { type: 'secureFont', default: null },
  fontWeight: { type: 'fontWeight', default: null },
  fontSize: { type: 'px', default: null }
}
const borders = {
  border: { type: 'border', default: null },
  borderLeft: { type: 'border', default: null },
  borderTop: { type: 'border', default: null },
  borderRight: { type: 'border', default: null },
  borderBottom: { type: 'border', default: null },
  borderColor: { type: 'color', default: null },
  borderWidth: { type: 'px', default: null },
  borderStyle: { type: 'borderStyle', default: null },
  borderLeftColor: { type: 'color', default: null },
  borderLeftWidth: { type: 'px', default: null },
  borderLeftStyle: { type: 'borderStyle', default: null },
  borderRightColor: { type: 'color', default: null },
  borderRightWidth: { type: 'px', default: null },
  borderRightStyle: { type: 'borderStyle', default: null },
  borderTopColor: { type: 'color', default: null },
  borderTopWidth: { type: 'px', default: null },
  borderTopStyle: { type: 'borderStyle', default: null },
  borderBottomColor: { type: 'color', default: null },
  borderBottomWidth: { type: 'px', default: null },
  borderBottomStyle: { type: 'borderStyle', default: null },
  borderRadius: { type: 'px', default: '0px' }
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

const images = {
  imgMaxWidth: { type: 'px', default: null },
  imgMaxHeight: { type: 'px', default: null },
  imgAlign: { type: 'float', default: null }
}

const basicStyles = { ...basics, ...borders, ...paddings, ...margins, ...images }
module.exports = basicStyles