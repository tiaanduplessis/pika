# pika

> Efficient DOM element selection in 427 bytes (gzipped)

[![npm package version](https://img.shields.io/npm/v/@tiaanduplessis/pika.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/pika)
[![npm downloads](https://img.shields.io/npm/dm/@tiaanduplessis/pika.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/pika)
[![standard JS linter](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![Greenkeeper](https://badges.greenkeeper.io/tiaanduplessis/pika.svg)](https://greenkeeper.io)
[![travis ci build status](https://img.shields.io/travis/tiaanduplessis/pika.svg?style=flat-square)](https://travis-ci.org/tiaanduplessis/pika)
[![project license](https://img.shields.io/npm/l/@tiaanduplessis/pika.svg?style=flat-square)](https://github.com/tiaanduplessis/pika/blob/master/LICENSE)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](contribute)
- [License](#license)

## Install

```sh
$ npm install @tiaanduplessis/pika
# OR
$ yarn add @tiaanduplessis/pika
```

## Usage

The most relevant method for locating a DOM element will be chosen, because some times [`document.querySelector` won't do](https://jsperf.com/getelementbyid-vs-queryselector-vs-queryselector-by-id):

```js
import pika from '@tiaanduplessis/pika'

pika('body') // document.body
pika('head') // document.head
pika('#foo') // document.getElementById
pika('.foo') // document.getElementsByClassName
pika('div') // document.getElementsByTagName
pika('[value]') // document.querySelectorAll

```

You can optionally specify your own context(defaults to `document`):

```js

// find span within #foo
pika('span', { context: pika('#foo') })

```

If the `first` option is specified and their is only one element that matches the selector, that element will be returned instead of a array.

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/pika/issues).

## License

Licensed under the MIT License.
