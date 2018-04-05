import heml from 'heml'
import fs from 'fs'
import writeFile from './src/writeFile'
import _ from 'lodash'
const options = {
  validate: 'soft', // validation levels - 'strict'|'soft'|'none'
  cheerio: {}, // config passed to cheerio parser
  juice: {},
  beautify: {}, // config passed to js-beautify html method
  elements: [
    // any custom elements you want to use
  ],
}

const style = {
  brandingColor: '#8BD2E0',
  backgroundsColor: '#3976BD',
  secondaryBackgroundColor: '#BABABA',
  fontsColor: '#FDFDFD',
  fontSize: '16px',
  h1FontSize: '30px',
}

const templateContent = {
  imageHeader: 'https://s3-eu-west-1.amazonaws.com/orchextra-images-pt-dev/5a1fcc5cda4a93183c915032.jpeg',
  title: "CONGRATULATIONS, YOU'RE A WINNER!",
  description: 'You won an amazing prize. Click on the button below and claim your prize.',
  buttonText: 'Claim Prize',
  buttonUrl: 'https://heml.io',
}

// Html template file name
const name = process.argv[2] || 'email'

if (!name) throw new Error('No template name defined')

// Get template content
const template = fs.readFileSync(`${__dirname}/templates/${name}.heml`).toString()

const styledHtml = _.template(template)

heml(styledHtml(_.assign({}, style, templateContent)), options).then(
  ({
    html,
    metadata,
    errors
  }) => {
    // Write output mail template
    writeFile(html, name)
  }
)