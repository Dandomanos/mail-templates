import cheerio from 'cheerio'
import del from 'del'
import mkdirp from 'mkdirp'
import fs from 'fs'
const debug = require('debug')('app:write-file')

// Output folder
const output = `${__dirname}/../output/`
del.sync(output)
mkdirp.sync(output)

const writeFile = (html, name = 'test') => {
  // Init $ instance
  const $ = cheerio.load(html)
  const $c = $('html').clone()
  mkdirp.sync(output)
  const file = output + `${name}.html`

  // Write html file
  fs.writeFileSync(file, $c.html())
  debug('Writed ' + file)
}

export default writeFile
