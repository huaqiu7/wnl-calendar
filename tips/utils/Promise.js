var t = require("../../@babel/runtime/helpers/typeof");

!function(e, n) {
    "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (void 0).ES6Promise = n();
}(0, function() {
    function e(t) {
        return "function" == typeof t;
    }
    function n() {
        var t = setTimeout;
        return function() {
            return t(r, 1);
        };
    }
    function r() {
        for (var t = 0; t < g; t += 2) {
            (0, C[t])(C[t + 1]), C[t] = void 0, C[t + 1] = void 0;
        }
        g = 0;
    }
    function o(t, e) {
        var n = arguments, r = this, o = new this.constructor(s);
        void 0 === o[q] && y(o);
        var i = r._state;
        return i ? function() {
            var t = n[i - 1];
            S(function() {
                return _(i, o, t, r._result);
            });
        }() : p(r, o, t, e), o;
    }
    function i(e) {
        if (e && "object" == t(e) && e.constructor === this) return e;
        var n = new this(s);
        return a(n, e), n;
    }
    function s() {}
    function u(t) {
        try {
            return t.then;
        } catch (t) {
            return D.error = t, D;
        }
    }
    function c(t, n, r) {
        n.constructor === t.constructor && r === o && n.constructor.resolve === i ? function(t, e) {
            e._state === k ? l(t, e._result) : e._state === F ? h(t, e._result) : p(e, void 0, function(e) {
                return a(t, e);
            }, function(e) {
                return h(t, e);
            });
        }(t, n) : r === D ? h(t, D.error) : void 0 === r ? l(t, n) : e(r) ? function(t, e, n) {
            S(function(t) {
                var r = !1, o = function(t, e, n, r) {
                    try {
                        t.call(e, n, r);
                    } catch (t) {
                        return t;
                    }
                }(n, e, function(n) {
                    r || (r = !0, e !== n ? a(t, n) : l(t, n));
                }, function(e) {
                    r || (r = !0, h(t, e));
                }, t._label);
                !r && o && (r = !0, h(t, o));
            }, t);
        }(t, n, r) : l(t, n);
    }
    function a(e, n) {
        e === n ? h(e, new TypeError("You cannot resolve a promise with itself")) : function(e) {
            return "function" == typeof e || "object" == t(e) && null !== e;
        }(n) ? c(e, n, u(n)) : l(e, n);
    }
    function f(t) {
        t._onerror && t._onerror(t._result), d(t);
    }
    function l(t, e) {
        t._state === Y && (t._result = e, t._state = k, 0 !== t._subscribers.length && S(d, t));
    }
    function h(t, e) {
        t._state === Y && (t._state = F, t._result = e, S(f, t));
    }
    function p(t, e, n, r) {
        var o = t._subscribers, i = o.length;
        t._onerror = null, o[i] = e, o[i + k] = n, o[i + F] = r, 0 === i && t._state && S(d, t);
    }
    function d(t) {
        var e = t._subscribers, n = t._state;
        if (0 !== e.length) {
            for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], 
            o = e[s + n], r ? _(n, r, o, i) : o(i);
            t._subscribers.length = 0;
        }
    }
    function v() {
        this.error = null;
    }
    function _(t, n, r, o) {
        var i = e(r), s = void 0, u = void 0, c = void 0, f = void 0;
        if (i) {
            if ((s = function(t, e) {
                try {
                    return t(e);
                } catch (t) {
                    return K.error = t, K;
                }
            }(r, o)) === K ? (f = !0, u = s.error, s = null) : c = !0, n === s) return void h(n, new TypeError("A promises callback cannot return that same promise."));
        } else s = o, c = !0;
        n._state !== Y || (i && c ? a(n, s) : f ? h(n, u) : t === k ? l(n, s) : t === F && h(n, s));
    }
    function y(t) {
        t[q] = L++, t._state = void 0, t._result = void 0, t._subscribers = [];
    }
    function m(t, e) {
        this._instanceConstructor = t, this.promise = new t(s), this.promise[q] || y(this.promise), 
        w(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 
        0 === this.length ? l(this.promise, this._result) : (this.length = this.length || 0, 
        this._enumerate(), 0 === this._remaining && l(this.promise, this._result))) : h(this.promise, new Error("Array Methods must be provided an Array"));
    }
    function b(t) {
        this[q] = L++, this._result = this._state = void 0, this._subscribers = [], s !== t && ("function" != typeof t && function() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
        }(), this instanceof b ? function(t, e) {
            try {
                e(function(e) {
                    a(t, e);
                }, function(e) {
                    h(t, e);
                });
            } catch (e) {
                h(t, e);
            }
        }(this, t) : function() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        }());
    }
    var w = Array.isArray ? Array.isArray : function(t) {
        return "[object Array]" === Object.prototype.toString.call(t);
    }, g = 0, A = void 0, j = void 0, S = function(t, e) {
        C[g] = t, C[g + 1] = e, 2 === (g += 2) && (j ? j(r) : O());
    }, E = "undefined" != typeof window ? window : void 0, T = E || {}, x = T.MutationObserver || T.WebKitMutationObserver, M = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), P = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, C = new Array(1e3), O = void 0;
    O = M ? function() {
        return process.nextTick(r);
    } : x ? function() {
        var t = 0, e = new x(r), n = document.createTextNode("");
        return e.observe(n, {
            characterData: !0
        }), function() {
            n.data = t = ++t % 2;
        };
    }() : P ? function() {
        var t = new MessageChannel();
        return t.port1.onmessage = r, function() {
            return t.port2.postMessage(0);
        };
    }() : void 0 === E && "function" == typeof require ? function() {
        try {
            var t = require("vertx");
            return void 0 !== (A = t.runOnLoop || t.runOnContext) ? function() {
                A(r);
            } : n();
        } catch (t) {
            return n();
        }
    }() : n();
    var q = Math.random().toString(36).substring(16), Y = void 0, k = 1, F = 2, D = new v(), K = new v(), L = 0;
    return m.prototype._enumerate = function() {
        for (var t = this.length, e = this._input, n = 0; this._state === Y && n < t; n++) this._eachEntry(e[n], n);
    }, m.prototype._eachEntry = function(t, e) {
        var n = this._instanceConstructor, r = n.resolve;
        if (r === i) {
            var a = u(t);
            if (a === o && t._state !== Y) this._settledAt(t._state, e, t._result); else if ("function" != typeof a) this._remaining--, 
            this._result[e] = t; else if (n === b) {
                var f = new n(s);
                c(f, t, a), this._willSettleAt(f, e);
            } else this._willSettleAt(new n(function(e) {
                return e(t);
            }), e);
        } else this._willSettleAt(r(t), e);
    }, m.prototype._settledAt = function(t, e, n) {
        var r = this.promise;
        r._state === Y && (this._remaining--, t === F ? h(r, n) : this._result[e] = n), 
        0 === this._remaining && l(r, this._result);
    }, m.prototype._willSettleAt = function(t, e) {
        var n = this;
        p(t, void 0, function(t) {
            return n._settledAt(k, e, t);
        }, function(t) {
            return n._settledAt(F, e, t);
        });
    }, b.all = function(t) {
        return new m(this, t).promise;
    }, b.race = function(t) {
        var e = this;
        return new e(w(t) ? function(n, r) {
            for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r);
        } : function(t, e) {
            return e(new TypeError("You must pass an array to race."));
        });
    }, b.resolve = i, b.reject = function(t) {
        var e = new this(s);
        return h(e, t), e;
    }, b._setScheduler = function(t) {
        j = t;
    }, b._setAsap = function(t) {
        S = t;
    }, b._asap = S, b.prototype = {
        constructor: b,
        then: o,
        catch: function(t) {
            return this.then(null, t);
        }
    }, b.polyfill = function() {
        var t = void 0;
        if ("undefined" != typeof global) t = global; else if ("undefined" != typeof self) t = self; else try {
            t = Function("return this")();
        } catch (t) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
        }
        var e = t.Promise;
        if (e) {
            var n = null;
            try {
                n = Object.prototype.toString.call(e.resolve());
            } catch (t) {}
            if ("[object Promise]" === n && !e.cast) return;
        }
        t.Promise = b;
    }, b.Promise = b, b;
});