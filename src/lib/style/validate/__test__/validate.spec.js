const validate = require('./../index.js')
const schemes = require('./../schemes')

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
  }
}
const DEFAULT = {
}
const defaultValidated = validate.getValidatedStyle(DEFAULT)
const invalid = validate.getValidatedStyle(INVALID)
const build1 = validate.getValidatedStyle(BUILD_1)
const build2 = validate.getValidatedStyle(BUILD_2)
const build3 = validate.getValidatedStyle(BUILD_3)

describe('validate styles', () => {
  it('should validate common styles', () => {
    // TO DO => ADD GOOGLE FONTS AND CUSTOM FONTS(URL, FORMATS)

    //  SECURE-FONT
    expect(invalid.commons.secureFont).toBe(schemes.commons.secureFont.default)
    expect(defaultValidated.commons.secureFont).toBe(schemes.commons.secureFont.default)
    expect(build1.commons.secureFont).toBe('Times, "Times New Roman", serif')
    expect(build2.commons.secureFont).toBe('"Arial Black", Gadget, sans-serif')
    expect(build3.commons.secureFont).toBe('Arial, Helvetica, sans-serif')

    // FONT-COLOR
    expect(invalid.commons.fontColor).toBe(schemes.commons.fontColor.default)
    expect(defaultValidated.commons.fontColor).toBe(schemes.commons.fontColor.default)
    expect(build1.commons.fontColor).toBe(BUILD_1.commons.fontColor)
    expect(build2.commons.fontColor).toBe(BUILD_2.commons.fontColor)
    expect(build3.commons.fontColor).toBe(BUILD_3.commons.fontColor)

    // BACKGROUND-COLOR
    expect(invalid.commons.backgroundColor).toBe(schemes.commons.backgroundColor.default)
    expect(defaultValidated.commons.backgroundColor).toBe(schemes.commons.backgroundColor.default)
    expect(build1.commons.backgroundColor).toBe(BUILD_1.commons.backgroundColor)
    expect(build2.commons.backgroundColor).toBe(BUILD_2.commons.backgroundColor)
    expect(build3.commons.backgroundColor).toBe(BUILD_3.commons.backgroundColor)

    // SECONDARY-BACKGROUND-COLOR
    expect(invalid.commons.secondaryBackgroundColor).toBe(schemes.commons.secondaryBackgroundColor.default)
    expect(defaultValidated.commons.secondaryBackgroundColor).toBe(schemes.commons.secondaryBackgroundColor.default)
    expect(build1.commons.secondaryBackgroundColor).toBe(BUILD_1.commons.secondaryBackgroundColor)
    expect(build2.commons.secondaryBackgroundColor).toBe(BUILD_2.commons.secondaryBackgroundColor)
    expect(build3.commons.secondaryBackgroundColor).toBe(BUILD_3.commons.secondaryBackgroundColor)

    // BORDER-RADIUS
    expect(invalid.commons.borderRadius).toBe(schemes.commons.borderRadius.default)
    expect(defaultValidated.commons.borderRadius).toBe(schemes.commons.borderRadius.default)
    expect(build1.commons.borderRadius).toBe(BUILD_1.commons.borderRadius + 'px')
    expect(build2.commons.borderRadius).toBe(BUILD_2.commons.borderRadius + 'px')
    expect(build3.commons.borderRadius).toBe(BUILD_3.commons.borderRadius + 'px')

    // WIDTH
    expect(invalid.commons.width).toBe(schemes.commons.width.default)
    expect(defaultValidated.commons.width).toBe(schemes.commons.width.default)
    expect(build1.commons.width).toBe(BUILD_1.commons.width + 'px')
    expect(build2.commons.width).toBe(BUILD_2.commons.width + 'px')
    expect(build3.commons.width).toBe(BUILD_3.commons.width + 'px')

  })

  it('should validate header basic styles', () => {
    // BORDER-COLOR
    expect(invalid.header.borderColor).toBe(schemes.header.borderColor.default)
    expect(defaultValidated.header.borderColor).toBe(schemes.header.borderColor.default)
    expect(build1.header.borderColor).toBe(BUILD_1.header.borderColor)
    expect(build2.header.borderColor).toBe(BUILD_2.header.borderColor)
    expect(build3.header.borderColor).toBe(BUILD_3.header.borderColor)

    // BORDER-STYLE
    expect(invalid.header.borderStyle).toBe(schemes.header.borderStyle.default)
    expect(defaultValidated.header.borderStyle).toBe(schemes.header.borderStyle.default)
    expect(build1.header.borderStyle).toBe(BUILD_1.header.borderStyle)
    expect(build2.header.borderStyle).toBe(BUILD_2.header.borderStyle)
    expect(build3.header.borderStyle).toBe(BUILD_3.header.borderStyle)

    // BORDER-SIZE
    expect(invalid.header.borderRightSize).toBe(schemes.header.borderRightSize.default)
    expect(defaultValidated.header.borderRightSize).toBe(schemes.header.borderRightSize.default)
    expect(build1.header.borderRightSize).toBe(BUILD_1.header.borderRightSize + 'px')
    expect(build2.header.borderRightSize).toBe(BUILD_2.header.borderRightSize + 'px')
    expect(build3.header.borderRightSize).toBe(BUILD_3.header.borderRightSize + 'px')

    // MARGIN
    expect(invalid.header.margin).toBe(schemes.header.margin.default)
    expect(defaultValidated.header.margin).toBe(schemes.header.margin.default)
    expect(build1.header.margin).toBe(BUILD_1.header.margin + 'px')
    expect(build2.header.margin).toBe(BUILD_2.header.margin + 'px')
    expect(build3.header.margin).toBe(BUILD_3.header.margin + 'px')

    // MARGIN-LEFT
    expect(invalid.header.marginLeft).toBe(schemes.header.marginLeft.default)
    expect(defaultValidated.header.marginLeft).toBe(schemes.header.marginLeft.default)
    expect(build1.header.marginLeft).toBe(BUILD_1.header.marginLeft + 'px')
    expect(build2.header.marginLeft).toBe(BUILD_2.header.marginLeft + 'px')
    expect(build3.header.marginLeft).toBe(BUILD_3.header.marginLeft + 'px')

    // PADDING
    expect(invalid.header.padding).toBe(schemes.header.padding.default)
    expect(defaultValidated.header.padding).toBe(schemes.header.padding.default)
    expect(build1.header.padding).toBe(BUILD_1.header.padding + 'px')
    expect(build2.header.padding).toBe(BUILD_2.header.padding + 'px')
    expect(build3.header.padding).toBe(BUILD_3.header.padding + 'px')

    // PADDING-TOP
    expect(invalid.header.paddingTop).toBe(schemes.header.paddingTop.default)
    expect(defaultValidated.header.paddingTop).toBe(schemes.header.paddingTop.default)
    expect(build1.header.paddingTop).toBe(BUILD_1.header.paddingTop + 'px')
    expect(build2.header.paddingTop).toBe(BUILD_2.header.paddingTop + 'px')
    expect(build3.header.paddingTop).toBe(BUILD_3.header.paddingTop + 'px')

    // BORDER-RADIUS
    expect(invalid.header.borderRadius).toBe(schemes.header.borderRadius.default)
    expect(defaultValidated.header.borderRadius).toBe(schemes.header.borderRadius.default)
    expect(build1.header.borderRadius).toBe(BUILD_1.header.borderRadius + 'px')
    expect(build2.header.borderRadius).toBe(BUILD_2.header.borderRadius + 'px')
    expect(build3.header.borderRadius).toBe(BUILD_3.header.borderRadius + 'px')

    // FONT-WEIGHT
    expect(invalid.header.fontWeight).toBe(schemes.header.fontWeight.default)
    expect(defaultValidated.header.fontWeight).toBe(schemes.header.fontWeight.default)
    expect(build1.header.fontWeight).toBe(String(BUILD_1.header.fontWeight))
    expect(build2.header.fontWeight).toBe(String(BUILD_2.header.fontWeight))
    expect(build3.header.fontWeight).toBe(String(BUILD_3.header.fontWeight))

    // TEXT-ALIGN
    expect(invalid.header.textAlign).toBe(schemes.header.textAlign.default)
    expect(defaultValidated.header.textAlign).toBe(schemes.header.textAlign.default)
    expect(build1.header.textAlign).toBe((BUILD_1.header.textAlign).toLowerCase())
    expect(build2.header.textAlign).toBe((BUILD_2.header.textAlign).toLowerCase())
    expect(build3.header.textAlign).toBe((BUILD_3.header.textAlign).toLowerCase())

    // TEXT-TRANSFORM
    expect(invalid.header.textTransform).toBe(schemes.header.textTransform.default)
    expect(defaultValidated.header.textTransform).toBe(schemes.header.textTransform.default)
    expect(build1.header.textTransform).toBe((BUILD_1.header.textTransform).toLowerCase())
    expect(build2.header.textTransform).toBe((BUILD_2.header.textTransform).toLowerCase())
    expect(build3.header.textTransform).toBe((BUILD_3.header.textTransform).toLowerCase())

    // TEXT-DECORATION
    expect(invalid.header.textTransform).toBe(schemes.header.textTransform.default)
    expect(defaultValidated.header.textTransform).toBe(schemes.header.textTransform.default)
    expect(build1.header.textTransform).toBe((BUILD_1.header.textTransform).toLowerCase())
    expect(build2.header.textTransform).toBe((BUILD_2.header.textTransform).toLowerCase())
    expect(build3.header.textTransform).toBe((BUILD_3.header.textTransform).toLowerCase())
  })
})