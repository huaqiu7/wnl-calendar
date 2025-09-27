var e = require("../@babel/runtime/helpers/typeof"), r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;

function n(e) {
    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
    return Object(e);
}

function o(t, n, o) {
    var c = n[o];
    if (null != c) {
        if (r.call(t, o) && (void 0 === t[o] || null === t[o])) throw new TypeError("Cannot convert undefined or null to object (" + o + ")");
        var u, i;
        !r.call(t, o) || (i = e(u = c), null === u || "object" !== i && "function" !== i) ? t[o] = c : t[o] = l(Object(t[o]), n[o]);
    }
}

function l(e, n) {
    if (e === n) return e;
    for (var l in n = Object(n)) r.call(n, l) && o(e, n, l);
    if (Object.getOwnPropertySymbols) for (var c = Object.getOwnPropertySymbols(n), u = 0; u < c.length; u++) t.call(n, c[u]) && o(e, n, c[u]);
    return e;
}

module.exports = function(e) {
    e = n(e);
    for (var r = 1; r < arguments.length; r++) l(e, arguments[r]);
    return e;
};