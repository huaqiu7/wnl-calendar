Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}, t = {
    formatNumber: e,
    formatTime: function(t) {
        var r = t ? new Date(t) : new Date(), n = r.getFullYear(), o = r.getMonth() + 1, a = r.getDate(), u = r.getHours(), i = r.getMinutes(), s = r.getSeconds();
        return [ n, o, a ].map(e).join("-") + " " + [ u, i, s ].map(e).join(":");
    },
    str2Int: function(e) {
        return 0 == (e = e.replace(/^0+/g, "")).length ? 0 : parseInt(e);
    }
};

exports.default = t;