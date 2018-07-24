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
}
const BUILD_2 = {
  commons: {
    secureFont: 'arIAlbLAck',
    fontColor: 'hsl(123, 45%, 67%)',
    backgroundColor: 'rgb(255,255,255)',
    secondaryBackgroundColor: 'currentColor',
    borderRadius: 4,
    width: 750,
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
  }
}
const INVALID = {
  commons: {
    secureFont: 'dandomanos',
    fontColor: 'dando-color-dark',
    backgroundColor: 'rgba(255,20255,255)',
    secondaryBackgroundColor: 'rgba(255, 0, 0)',
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
    // expect(defaultValidated).toMatchSnapshot()

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


    // console.log('build1', build1)
  })
})