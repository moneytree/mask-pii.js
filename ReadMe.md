# mask-pii

[![Build Status](https://travis-ci.org/moneytree/mask-pii.js.svg?branch=master)](https://travis-ci.org/moneytree/mask-pii.js)

JavaScript / Node.js module for masking PII in strings.

Currently only e-mail address and domain name masking are supported.
Pull requests to add masking for other PII very welcome.

We maintain 100% test coverage.

## Installation

```sh
npm install @moneytree/mask-pii --save
```

## Usage

```js
const { string, email, domain } = require('mask-pii');

string('foobar', '#');           // f########r
domain('sub.example.com');       // s********e.com
email('bob.foobar@example.com'); // b********r@e********e.com
```

## License

MIT
