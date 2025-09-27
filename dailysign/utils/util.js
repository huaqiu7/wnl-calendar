var e = function(e) {
    return (e = e.toString())[1] ? e : "0" + e;
};

module.exports = {
    formatTime: function(t) {
        var r = t.getFullYear(), n = t.getMonth() + 1, a = t.getDate(), g = t.getHours(), o = t.getMinutes(), u = t.getSeconds();
        return [ r, n, a ].map(e).join("-") + " " + [ g, o, u ].map(e).join(":");
    },
    getCurrentPageUrl: function() {
        var e = getCurrentPages();
        return e[e.length - 1].route;
    },
    getCurrentPageUrlWithArgs: function() {
        var e = getCurrentPages(), t = e[e.length - 1], r = t.route, n = t.options, a = r + "?";
        for (var g in n) {
            a += g + "=" + n[g] + "&";
        }
        return a = a.substring(0, a.length - 1);
    },
    uuid: function() {
        var e = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var r = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16), ("x" == t ? r : 3 & r | 8).toString(16);
        }).replace(/-/g, "");
    },
    NumberToChinese: function(e) {
        if (!/^\d*(\.\d*)?$/.test(e)) return console.log("Number is wrong!"), "Number is wrong!";
        for (var t = [ "〇", "一", "二", "三", "四", "五", "六", "七", "八", "九" ], r = [ "", "十", "百", "千", "万", "亿", "点", "" ], n = ("" + e).replace(/(^0*)/g, "").split("."), a = 0, g = "", o = n[0].length - 1; o >= 0; o -= 1) {
            switch (a) {
              case 0:
                g = r[7] + g;
                break;

              case 4:
                new RegExp("0{4}\\d{" + (n[0].length - o - 1) + "}$").test(n[0]) || (g = r[4] + g);
                break;

              case 8:
                g = r[5] + g, r[7] = r[5], a = 0;
            }
            a % 4 == 2 && 0 != n[0].charAt(o + 2) && 0 == n[0].charAt(o + 1) && (g = t[0] + g), 
            0 != n[0].charAt(o) && (g = t[n[0].charAt(o)] + r[a % 4] + g), a++;
        }
        if (n.length > 1) {
            g += r[6];
            for (var u = 0; u < n[1].length; u++) g += t[n[1].charAt(u)];
        }
        return g;
    },
    yearToChinese: function(e) {
        for (var t = [ "〇", "一", "二", "三", "四", "五", "六", "七", "八", "九" ], r = e.toString().split(""), n = [], a = 0; a < r.length; a++) n.push(t[parseInt(r[a])]);
        return n = n.toString().replace(/,/g, "");
    },
    getDate: function(e, t) {
        var r, n = Date.parse(new Date(e)) / 1e3;
        return 0 === t && (r = n - 86400 * (dates - 1)), 1 === t && (r = n - 86400 * dates), 
        new Date(1e3 * r).toLocaleDateString().replace(/\//g, "-");
    },
    getPointDate: function(e, t) {
        var r = Math.floor(t), n = "/";
        e.indexOf("-") > -1 ? n = "-" : e.indexOf(".") > -1 && (n = ".");
        var a = new Date(e), g = new Date(Number(a) + 864e5 * r), o = g.getFullYear(), u = g.getMonth() + 1, i = g.getDate();
        return o + n + (u < 10 ? "0" + u : u) + n + (i < 10 ? "0" + i : i);
    },
    getDateDiff: function(e, t) {
        var r = new Date(Date.parse(e.replace(/-/g, "/"))).getTime(), n = new Date(Date.parse(t.replace(/-/g, "/"))).getTime();
        return Math.abs(r - n) / 864e5;
    },
    formatNumber: e
};