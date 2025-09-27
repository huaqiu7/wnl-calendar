var e = require("../../@babel/runtime/helpers/typeof"), t = require("Promise"), n = module.exports = {};

n.default = n, n.debug = !0, Object.defineProperty(n, "app", {
    get: function() {
        return getApp();
    }
});

var o = {
    stopRecord: !0,
    pauseVoice: !0,
    stopVoice: !0,
    pauseBackgroundAudio: !0,
    stopBackgroundAudio: !0,
    createAudioContext: !0,
    createVideoContext: !0,
    showNavigationBarLoading: !0,
    hideNavigationBarLoading: !0,
    createAnimation: !0,
    createContext: !0,
    drawCanvas: !0,
    canvasToTempFilePath: !0,
    hideKeyboard: !0,
    stopPullDownRefresh: !0
};

function r() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "GET";
    return function(t) {
        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return n.request({
            url: t,
            data: o,
            method: e,
            header: {
                "Content-Type": "application/json"
            }
        });
    };
}

Object.keys(wx).forEach(function(r) {
    o[r] || "on" === r.substr(0, 2) || /\w+Sync$/.test(r) ? n[r] = function() {
        if (n.debug) {
            var t = wx[r].apply(wx, arguments);
            return t || "" === t || (t = {}), t && "object" === e(t) && (t.then = function() {
                console.warn("wx." + r + " is not a async function, you should not use Promise");
            }), t;
        }
        return wx[r].apply(wx, arguments);
    } : n[r] = function(e) {
        return e = e || {}, new t(function(t, n) {
            e.success = t, e.fail = function(e) {
                e && e.errMsg ? n(new Error(e.errMsg)) : n(e);
            }, wx[r](e);
        });
    };
}), n.GET = r("GET"), n.POST = r("POST"), n.PUT = r("PUT"), n.DELETE = r("DELETE");