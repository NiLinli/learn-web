(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r)
        }, p, p.exports, r, e, n, t)
      }
      return n[i].exports
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o
  }
  return r
})()({
  1: [function (require, module, exports) {
    (function (global) {
      var a = 2;
      var b = 4;

      global.c = 4;

      module.exports = {
        a,
        b
      };
      // 要执行的代码包裹在 
    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  }, {}],
  2: [function (require, module, exports) {
    var foo = require('./foo');

    function add(a, b) {
      return a + b;
    }

    console.log(`add(a, b) = ${add(foo.a, foo.b)}`);
    console.log(`c = ${c}`);

  }, {
    "./foo": 1
  }]
}, {}, [2]);