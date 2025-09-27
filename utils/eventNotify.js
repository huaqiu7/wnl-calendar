var e, r = require("../@babel/runtime/helpers/typeof");

e = function() {
    var e = [], r = {};
    function n(r, n) {
        if (r) for (var t = 0; t < e.length; ++t) {
            var i = e[t];
            i.eventName === r && i.func(n, i.observer);
        }
    }
    return {
        register: function(r, n, t) {
            n && t && (t = t.bind(r), e.push({
                eventName: n,
                func: t,
                observer: r
            }));
        },
        post: n,
        postSticky: function(e, t) {
            n(e, t), r[e] = t;
        },
        removeSticky: function(e) {
            r[e] = null;
        },
        getSticky: function(e) {
            return r[e];
        },
        unRegister: function(r, n) {
            if (n && r) {
                for (var t = 0; t < e.length; ++t) {
                    var i = e[t];
                    if (i.eventName === n && i.observer === r) return e.splice(t, 1), 1;
                }
                return 0;
            }
            if (n && !r) {
                var u = e.map(function(e, r) {
                    return e.eventName === n ? r : -1;
                }).filter(function(e) {
                    return e >= 0;
                }).reverse();
                if (u.length > 0) {
                    for (var f = 0; f < u.length; f++) e.splice(u[f], 1);
                    return u.length;
                }
                return 0;
            }
            if (!n && r) {
                var o = e.map(function(e, n) {
                    return e.observer === r ? n : -1;
                }).filter(function(e) {
                    return e >= 0;
                }).reverse();
                if (o.length > 0) {
                    for (var c = 0; c < o.length; c++) e.splice(o[c], 1);
                    return o.length;
                }
                return 0;
            }
            return 0;
        }
    };
}, "object" === ("undefined" == typeof exports ? "undefined" : r(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (void 0).api = e();