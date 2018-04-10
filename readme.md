# pt-mail-generator

Create html mails for Promotool templates.

# Install

```sh
$ npm install pt-mail-generator
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
