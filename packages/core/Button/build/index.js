module.exports = (function (e) {
  var t = {};
  function r(o) {
    if (t[o]) return t[o].exports;
    var n = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (r.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            o,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return o;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 2))
  );
})([
  function (e, t) {
    function r() {
      return (
        (e.exports = r =
          Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var o in r)
                    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
                }
                return e;
              }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        r.apply(this, arguments)
      );
    }
    (e.exports = r),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t) {
    e.exports = require("react");
  },
  function (e, t, r) {
    "use strict";
    r.r(t);
    var o = r(0),
      n = r.n(o),
      u = r(1),
      f = r.n(u);
    var c = function (e) {
      var t = e.props;
      return f.a.createElement(
        "button",
        n()(
          {
            className:
              "o-fcaNGp o-dsiSgT o-NBTwp o-bVSleT o-cWRslo o-cRLvC o-eqqVmt o-eKWNKE   o-ItVGT o-bIMsfE  o-bkmzIL o-fdTMrI _2f7K o-cXuWIw o-casNrQ o-cDXfkV o-fznVqX o-fznVsN ",
            type: "button",
          },
          t
        ),
        "Hello World!"
      );
    };
    t.default = c;
  },
]);
