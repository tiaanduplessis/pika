!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.pika=t()}(this,function(){var e=/^[#.\w]{1}\w+$/,t=function(e,t){return 1===e.length&&t?e[0]:Array.from(e)};return function(r,n){void 0===r&&(r=""),void 0===n&&(n={context:document,first:!1});var o=n.context,i=n.first;if(!r.length)throw new Error("no selector provided");if("body"===r)return o.body;if("head"===r)return o.head;if(r.match(e)){var f=r.slice(0,1);if(f.toLowerCase()!==f.toUpperCase())return t(o.getElementsByTagName(r),i);var d=r.slice(1);if("#"===f)return t([o.getElementById(d)],i);if("."===f)return t(o.getElementsByClassName(d),i)}return t(o.querySelectorAll(r),i)}});
//# sourceMappingURL=pika.umd.js.map
