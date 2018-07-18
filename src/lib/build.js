const getTemplate = require('../../index')

const configuration = {
  content: {
    plainText: 'Default Sample Plain Text',
    subject: 'Default Sample Subject',
    headerImage: 'http://localhost:1903/imgipsum/821x421/225378/EB7F00?text=Header-Image-Sample',
    title: 'Default Sample Title',
    content: '<p>Default Sample Content</p>',
    voucher: '',
    primaryUrl: 'https://github.com/Dandomanos/mail-templates',
    buttonText: 'Default Sample Button Text',
    secondaryButton: '',
  },
  style: {
    commons: {
      fontFamily: 'Gotham',
      fontsColor: '#474747',
      backgroundsColor: '#FFFFFF',
      secondaryBackgroundColor: '#dedede',
      borderRadius: 5,
    },
    header: {
      borderColor: '#99CC00', // Hexadecimal
      borderSize: 10, // Number
    },
    primary: {},
    secondary: {},
    h1: {
      fontSize: 20,
    },
    input: {
      borderColor: '#99CC00',
      borderSize: 2,
    },
  },
}

getTemplate(configuration, 'participate', true)
