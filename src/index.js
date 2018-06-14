const SELECTOR_REGEX = /^[#.\w]{1}\w+$/

const toArrayOrElement = function (nodes, first) {
  if (nodes.length === 1 && first) {
    return nodes[0]
  }
  return Array.from(nodes)
}

const pika = function (selector = '', { context = document, first = false } = {}) {
  if (!selector.length) {
    throw new Error('pika: No selector was provided')
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
      return toArrayOrElement(context.getElementsByTagName(selector), first)
    }

    const name = selector.slice(1)

    if (prefix === '#') {
      return toArrayOrElement([context.getElementById(name)], first)
    }

    if (prefix === '.') {
      return toArrayOrElement(context.getElementsByClassName(name), first)
    }
  }

  return toArrayOrElement(context.querySelectorAll(selector), first)
}

export default pika
