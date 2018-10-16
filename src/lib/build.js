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
    logoHeader: 'https://4.bp.blogspot.com/-WovWyVV6wK0/WW6rg05K9fI/AAAAAAABNU4/5rrftOg2aX88L8gLqYOnsi4vk5UO0VjTwCLcBGAs/s1600/Club%2BAtletico%2Bde%2BMadrid.png',
    logoHeaderLegend: 'Club Atletico de Madrid'
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
    logoHeader: {
      imgMaxWidth: 50,
      imgMaxHeight: 50,
      imgAlign: 'center',
      // padding: 5,
    },
    header: {
      borderColor: '#99CC00', // Hexadecimal
      borderWidth: 10, // Number
      borderStyle: 'DASHED',
      borderLeftColor: '#FFFF00',
      borderLeftWidth: 5,
      borderLeftStyle: 'inset',
      borderRightColor: '#FF00FF',
      borderRightWidth: 4,
      borderRightStyle: 'double',
      padding: 20,
      marginLeft: 20,
      // border: '1px solid green',
    },
    block: {
      marginLeft: 10,
      marginRight: 20,
      paddingBottom: 5,
      borderColor: '#AA0000',
      borderWidth: 5,
    },
    primaryButton: {},
    secondaryButton: {},
    h1: {
      fontSize: 20,
      textTransform: 'uppercase',
      margin: 0,
      marginLeft: 5,
      border: '3px solid blue',
      borderTop: 'dashed green 1px'
    },
    input: {
      borderColor: '#99CC00',
      borderWidth: 2,
    },
  },
}

getTemplate(configuration, 'mail', true)
