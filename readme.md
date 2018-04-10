# pt-mail-generator

Create html mails for Promotool templates.

# Install

```sh
$ npm install @gigigo/pt-mail-generator
```

# Usage

```sh
const getTemplate = require('@gigigo/pt-mail-generator')
getTemplate(configuration)
.then( html => {
    // do something
}).catch(err => {
    // throw error
})
```

# Params

* Configuration => `required` // Object
* Template => optional => default 'participate' // String
* Save => optional => default false // Boolean

# Configuration

* **environment** => `required` // (String => 'staging', 'quality', 'live')
* **promoId** => `required` // (Number)
* **status** => `required` // (String => 'winner', 'participant', 'not winner')
* **promoUrl** => `required` // (String => 'https://origin-front-pt.s.orchextra.io/455')
* **lang** => optional => default 'en' // (String => 'en', 'es', 'de')
* **prizeId** => optional => default null // (Number)
* **voucher** => optional => default null // (String => 'ORX-123456')

# Example

```sh
const getTemplate = require('@gigigo/pt-mail-generator')

const configuration = {
  environment: 'staging',
  promoId: 455,
  lang: 'es',
  status: 'winner',
  voucher: 'ORX-1903',
  prizeId: 273,
  promoUrl: 'https://origin-front-pt.s.orchextra.io/455',
}

getTemplate(configuration, 'participate', false)
.then( html => {
    // do something
}).catch(err => {
    // throw error
})
```
