const getTemplate = require('../../index')

const configuration = {
  content: {
    plainText: 'Default Sample Plain Text',
    subject: 'Default Sample Subject',
    headerImage:
      'https://raw.githubusercontent.com/Dandomanos/mail-templates/master/src/assets/headerImage.png',
    title: 'Default Sample Title',
    content: '<p>Default Sample Content</p>',
    voucher: '',
    primaryUrl: 'https://github.com/Dandomanos/mail-templates',
    buttonText: 'Default Sample Button Text',
    secondaryButton: '',
  },
  style: {
    commons: {
      fontFamily: 'Montserrat',
      secureFont: 'timEs',
      fontColor: '#FF0000',
      backgroundColor: '#FFAAFF',
      secondaryBackgroundColor: '#00DDFF',
      borderRadius: 10,
      width: 500,
    },
    header: {
      borderColor: '#99CC00', // Hexadecimal
      borderSize: 10, // Number
      borderStyle: 'DASHED',
      borderLeftColor: '#FFFF00',
      borderLeftSize: 5,
      borderLeftStyle: 'inset',
      borderRightColor: '#FF00FF',
      borderRightSize: 4,
      borderRightStyle: 'double',
      padding: 20,
      marginLeft: 20,
    },
    block: {
      marginLeft: 10,
      marginRight: 20,
      paddingBottom: 5,
      borderColor: '#AA0000',
      borderSize: 5,
    },
    primaryButton: {},
    secondaryButton: {},
    h1: {
      fontSize: 20,
    },
    input: {
      borderColor: '#99CC00',
      borderSize: 2,
    },
  },
}

getTemplate(configuration, 'mail', true)
