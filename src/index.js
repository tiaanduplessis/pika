const SELECTOR_REGEX = /^[#.\w]{1}\w+$/
const toArrayOrElement = function (nodes) {
  if (nodes.length === 1) {
    return nodes[0]
  }
  return Array.from(nodes)
}

const pika = function (selector = '', options = { context: document }) {
  const { context } = options

  if (!selector.length) {
    throw new Error('no selector provided')
  }

  if (selector === 'body') {
    return context.body
  }

  if (selector === 'head') {
    return context.head
  }

  if (selector.match(SELECTOR_REGEX)) {
    const prefix = selector.slice(0, 1)

    if (prefix.toLowerCase() !== prefix.toUpperCase()) {
      return toArrayOrElement(context.getElementsByTagName(selector))
    }

    const name = selector.slice(1)

    if (prefix === '#') {
      return context.getElementById(name)
    }

    if (prefix === '.') {
      return toArrayOrElement(context.getElementsByClassName(name))
    }
  }

  return toArrayOrElement(context.querySelectorAll(selector))
}

export default pika
