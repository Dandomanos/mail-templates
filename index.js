import heml from "heml";

const options = {
  validate: "soft", // validation levels - 'strict'|'soft'|'none'
  cheerio: {}, // config passed to cheerio parser
  juice: {},
  beautify: {}, // config passed to js-beautify html method
  elements: [
    // any custom elements you want to use
  ]
}

heml(
  `
  <heml>
    <head>
      <subject>My Email</subject>
    </head>
    <body>
      <container>
        <row>
          <column><p>hi there!</p></column>
        </row>
      </container>
    </body>
  </heml>
`,
  options
).then(({ html, metadata, errors }) => {
    console.log('HTML', html)
})