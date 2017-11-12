var SELECTOR_REGEX = /^[#.\w]{1}\w+$/;

var toArrayOrElement = function (nodes, first) {
  if (nodes.length === 1 && first) {
    return nodes[0]
  }
  return Array.from(nodes)
};

var pika = function (selector, options) {
  if ( selector === void 0 ) selector = '';
  if ( options === void 0 ) options = { context: document, first: false };

  var context = options.context;
  var first = options.first;

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
    var prefix = selector.slice(0, 1);

    if (prefix.toLowerCase() !== prefix.toUpperCase()) {
      return toArrayOrElement(context.getElementsByTagName(selector), first)
    }

    var name = selector.slice(1);

    if (prefix === '#') {
      return toArrayOrElement([context.getElementById(name)], first)
    }

    if (prefix === '.') {
      return toArrayOrElement(context.getElementsByClassName(name), first)
    }
  }

  return toArrayOrElement(context.querySelectorAll(selector), first)
};

export default pika;
