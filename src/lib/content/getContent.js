const get = require('lodash/get')

const getContent = content => {
  return content && content.reduce((prev, cur, index) => {
    const needBlock = cur.type !== 'logo' && cur.type !== 'header'
    const startIndex = prev.lastIndexOf('<block>')
    const endIndex = prev.lastIndexOf('</block>')
    const blockOpened = startIndex > endIndex

    const getQuote = () => {
      if (needBlock && !blockOpened)
        return `<block>
        `

      if (needBlock && blockOpened)
        return ''

      if (!needBlock && blockOpened)
        return `</block>
        `

      if (!needBlock && !blockOpened)
        return ''
    }
    const closeQuote = () => {
      if (blockOpened || needBlock && (index + 1) == content.length)
        return `</block>
        `
      else return ''
    }

    return prev.concat(getQuote() + printContent(cur) + closeQuote())
  }, '')
}

const printContent = (element) => {

  const print = {
    header: printHeader(element),
    logo: printLogo(element),
    title: printTitle(element),
    section: printSection(element),
    default: ''
  }

  return print[element.type] || print.default
}
const printHeader = element => element && element.content ? `<div class="headerImage"><img src="${element.content.img}" alt="${element.content.alt || ''}" /></div>
  ` : ''
const printLogo = element => element && element.content ? `<div class="logo"><img src="${element.content.img}" alt="${element.content.alt || ''}" /></div>
  ` : ''
const printTitle = element => element && element.content ? `<h1 class="title">${element.content.text}</h1>
  ` : ''
const printSection = element => {
  const getContent = path => {
    return get(element, `content.${path}`)
  }

  const img = getContent('img') && `<div class="imgContent"><img src="${getContent('img')}" alt="" /></div>` || ''
  const title = getContent('title') && `<h1 class="title">${getContent('title')}</h1>` || ''
  const subtitle = getContent('subtitle') && `<h2 class="subtitle">${getContent('subtitle')}</h2>` || ''
  const description = getContent('description') && `<p class="description">${getContent('description')}` || ''
  const button = getContent('button.text') && getContent('button.url') && `<button class="button" href="${getContent('button.url')}">${getContent('button.text')}</button>`
  const button2 = getContent('button2.text') && getContent('button2.url') && `<button class="button2" href="${getContent('button2.url')}">${getContent('button2.text')}</button>`

  return `
  <div class="section">
    ${img}
    ${title}
    ${subtitle}
    ${description}
    ${button}
    ${button2}
  </div>`
}


module.exports = getContent