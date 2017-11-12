<div align="center">
  <img src="http://images5.fanpop.com/image/photos/30600000/Pikachu-pikachu-30613394-200-200.gif" alt=""/>
</div>
<h1 align="center">pika</h1>
<div align="center">
  <strong>Efficient DOM element selection</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/@tiaanduplessis/pika">
    <img src="https://img.shields.io/npm/v/@tiaanduplessis/pika.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/@tiaanduplessis/pika">
  <img src="https://img.shields.io/npm/dm/@tiaanduplessis/pika.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
    <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/tiaanduplessis/pika.svg" alt="Greenkeeper" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/pika">
    <img src="https://img.shields.io/travis/tiaanduplessis/pika.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/pika/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/@tiaanduplessis/pika.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/pika/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/pika.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/pika/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/pika.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20pika!%20https://github.com/tiaanduplessis/pika%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/pika.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/pika/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install @tiaanduplessis/pika
# OR
$ yarn add @tiaanduplessis/pika
```

## Usage

The most relevant method for locating a DOM element will be chosen:

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
