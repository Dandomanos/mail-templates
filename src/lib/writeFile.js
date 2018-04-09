const cheerio = require('cheerio')
const del = require('del')
const mkdirp = require('mkdirp')
const fs = require('fs')
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

module.exports = writeFile
