var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = require("js-base64"), a = t(require("../../utils/util")), i = require("../../utils/calendar.js"), r = require("../../utils/api.js"), n = getApp();

Page({
    data: {
        isTerm: !1,
        filterBlur: 0,
        linerOpactity: .51,
        pureOpacity: 0,
        showBackIndex: !1
    },
    onLoad: function(t) {
        this.isSpecial = !1, this.name = t.name, this.date = t.date, this.year = parseInt(this.date.split("-")[0]), 
        this.month = parseInt(this.date.split("-")[1]), this.day = parseInt(this.date.split("-")[2]), 
        this.isTerm = this.isTermOrFestival(this.name), this.checckSpecialDate(), this.setData({
            isTerm: this.isTerm,
            isSpecial: this.isSpecial,
            showBackIndex: 1014 === n.globalData.scene || 1036 === n.globalData.scene
        }), this.setTitleByIsTerm(), this.getFestival(this.name);
    },
    routeIndex: function() {
        wx.switchTab({
            url: "/pages/index/index"
        }), n.globalData.scene = 1001;
    },
    setTitleByIsTerm: function() {
        wx.setNavigationBarTitle({
            title: this.isTerm ? "节气小贴士" : "节日小贴士"
        });
    },
    checckSpecialDate: function() {
        this.name.indexOf("伏") > -1 ? (this.name = "三伏", this.isTerm = !0, this.isSpecial = !0) : (this.name.indexOf("九") > -1 && this.name.length < 3 || this.name.indexOf("九") > -1 && this.name.indexOf("第") > -1) && (this.name = "数九", 
        this.isTerm = !0, this.isSpecial = !0);
    },
    isTermOrFestival: function(t) {
        for (var e = !1, a = 0; a < i.solarTerm.length; a++) if (t === i.solarTerm[a] || i.solarTerm[a].indexOf(t) > -1) {
            e = !0;
            break;
        }
        return e;
    },
    getFestival: function(t) {
        var e = this;
        r.GET("https://c.51wnl.com/contentapi/api4.4.0/GetTermOrFestival/GetInfo?name=".concat(t)).then(function(t) {
            var a = t.data.data;
            e.setResult(a), wx.pageScrollTo({
                scrollTop: 0,
                duration: 0
            });
        }).catch(function(t) {
            console.log(t);
        });
    },
    setResult: function(t) {
        var e = JSON.parse(t.detail), a = JSON.parse(t.descptionDetail);
        t.detail = this.decodeDetail(e), t.descptionDetail = this.decodeDetail(a), t.detail.forEach(function(t) {
            t.showMore = t.content.length < 106;
        });
        var i = this.getDisplayTime();
        this.setData({
            festivalData: t,
            displayTime: i,
            loadComplete: !0
        });
    },
    decodeDetail: function(t) {
        var a = [];
        for (var i in t) {
            var r = {
                title: e.Base64.decode(i),
                content: e.Base64.decode(t[i])
            };
            a.push(r);
        }
        return a;
    },
    showMore: function(t) {
        var e = t.currentTarget.dataset;
        if (e.hasOwnProperty("index") && !this.data.festivalData.detail[e.index].showMore) this.data.festivalData.detail[e.index].showMore = !0, 
        this.setData({
            festivalData: this.data.festivalData
        }); else {
            if (this.data.showMoreDescption) return;
            this.setData({
                showMoreDescption: !0
            });
        }
    },
    getDisplayTime: function() {
        return this.isTerm ? this.getTermLastTime() : "";
    },
    getTermLastTime: function() {
        for (var t = 0, e = 0; e < i.solarTerm.length; e++) if (this.name === i.solarTerm[e]) {
            t = e;
            break;
        }
        this.todayDate = new Date();
        var a = this.getSolarTime(this.year, t), r = t === i.solarTerm.length - 1 ? 0 : t + 1, n = this.getSolarTime(this.year, r, 1), s = 0 === t ? 23 : t - 1;
        return this.initTermListDate(this.year), this.setData({
            prevFestivalName: i.solarTerm[s],
            nextFestivalName: i.solarTerm[r],
            yearName: this.initYear(this.date)
        }), "".concat(a, "-").concat(n);
    },
    getSolarTime: function(t, e, a) {
        var r = new Date(t, 0, 1), n = t - 1900, s = i.TermTable[24 * n + e];
        r.setDate(r.getDate() + s), a || (this.todayDate = new Date(r.getFullYear(), r.getMonth(), r.getDate()));
        var l = (r.getMonth() + 1 > 9 ? r.getMonth() + 1 : "0" + (r.getMonth() + 1)) + "月" + (r.getDate() > 9 ? r.getDate() : "0" + r.getDate()) + "日", o = 24 * (t - 1900), h = i.termTimeTable[o + e], c = Math.floor(h / 3600), g = Math.floor(h % 3600 / 60), u = Math.floor(h % 3600 % 60);
        return a && (u <= 0 ? (u = 59, g--) : u--), l + " " + ((c < 10 ? "0" + c : c) + ":" + (g < 10 ? "0" + g : g) + ":" + (u < 10 ? "0" + u : u));
    },
    initYear: function(t) {
        var e = new Date(t), a = i.solar2lunar(e.getFullYear(), e.getMonth(), e.getDate()), r = i.getAnimal(a.lYear);
        return "".concat(a.gzYear, "年 [属").concat(r, "]");
    },
    switchFestival: function(t) {
        var e = t.currentTarget.dataset.name;
        "click" === t.currentTarget.dataset.type && this.toggleTermList(), this.name = e, 
        this.getFestival(this.name), this.isTerm || this.setPrevNextAndTime();
    },
    initTermListDate: function(t) {
        var e = [];
        if (t >= 1900 && t <= 2135) for (var a = 0; a < 24; a++) {
            var r = new Date(t, 0, 1), n = t - 1900, s = i.TermTable[24 * n + a];
            r.setDate(r.getDate() + s), e.push({
                termName: i.solarTerm[a],
                termDate: "".concat(r.getMonth() + 1, "月").concat(r.getDate(), "日"),
                active: i.solarTerm[a] === this.name
            });
        } else for (var l = 0; l < 24; l++) e.push({
            termName: i.solarTerm[l],
            termDate: "暂无数据",
            active: i.solarTerm[l] === this.name
        });
        this.setData({
            termDateList: e
        });
    },
    toggleTermList: function() {
        this.setData({
            showTermList: !this.data.showTermList
        });
    },
    catchmove: function() {},
    onReady: function() {
        this.isTerm || this.setPrevNextAndTime();
    },
    setPrevNextAndTime: function() {
        this.allFestivalData = n.globalData.festivalData;
        var t = this.getJieriDate(this.name, this.year, this.month, this.day, this.allFestivalData), e = this.getPrevNextJieri(this.name, t.year, t.month, t.day, t.lYear, t.lMonth, t.lDay);
        this.setData({
            prevFestivalName: e.prevName,
            nextFestivalName: e.nextName,
            displaTime: t.dateTimeString
        });
    },
    getJieriDate: function(t, e, r, n, s) {
        var l, o, h, c, g = "", u = !1, D = s.S;
        for (var f in D) for (var m = 0; m < D[f].length; m++) e >= parseInt(D[f][m].Y, 10) && parseInt(D[f][m].P, 10) >= 0 && D[f][m].V.indexOf(t) > -1 && (r = a.default.str2Int(f.substr(0, 2)), 
        n = a.default.str2Int(f.substr(2, 2)), o = (l = i.solar2lunar(e, r - 1, n)).lYear, 
        h = l.lMonth, c = l.lDay, g = "每年的公历".concat(r, "月").concat(n, "日"), t.indexOf("里约") > -1 && (g = "北京时间8月6日-8月22日"), 
        u = !0);
        var d = s.L;
        for (var v in d) for (var p = 0; p < d[v].length; p++) if (e >= parseInt(d[v][p].Y, 10) && parseInt(d[v][p].P, 10) >= 0 && d[v][p].V.indexOf(t) > -1) {
            h = a.default.str2Int(v.substr(0, 2)), c = a.default.str2Int(v.substr(2, 2));
            var T = i.lunar2solar(e, h, c);
            e = T.cYear, r = T.cMonth, n = T.cDay, o = (l = i.solar2lunar(e, r - 1, n)).lYear, 
            g = "每年的农历".concat(l.IMonthCn).concat(l.IDayCn), u = !0;
        }
        var y = s.W;
        for (var w in y) for (var x = 0; x < y[w].length; x++) if (e >= parseInt(y[w][x].Y, 10) && parseInt(y[w][x].P, 10) >= 0 && y[w][x].V.indexOf(t) > -1) {
            r = a.default.str2Int(w.substr(0, 2));
            for (var M = new Date(e, r, 0).getDate(), I = a.default.str2Int(w.substr(2, 1)), F = a.default.str2Int(w.substr(3, 1)), Y = 0, S = 1; S <= 7; S++) {
                if (new Date(e, r - 1, S).getDay() === F) {
                    Y = S;
                    break;
                }
            }
            (n = Y + 7 * (I - 1)) > M && (n -= 7, I--), o = (l = i.solar2lunar(e, r - 1, n)).lYear, 
            h = l.lMonth, c = l.lDay, g = "每年".concat(r, "月的第").concat(I, "个").concat([ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ][F]), 
            u = !0;
        }
        return {
            is_index: u,
            year: e,
            month: r,
            day: n,
            lYear: o,
            lMonth: h,
            lDay: c,
            dateTimeString: g
        };
    },
    getPrevNextJieri: function(t, e, a, r, n, s, l) {
        for (var o = this.getJieriListByDate(e, a, r, n, s, l, 1), h = 0, c = 0; c < o.length; c++) if (t === o[c].jieri.V) {
            h = c;
            break;
        }
        var g = new Date(e, a - 1, r), u = [], D = [], f = g, m = g, d = "", v = "";
        if (1 === o.length) {
            for (;u.length <= 0; ) {
                g.setDate(g.getDate() - 1), f = g;
                var p = i.solar2lunar(f.getFullYear(), f.getMonth(), f.getDate()), T = p.lYear, y = p.lMonth, w = p.lDay;
                u = this.getJieriListByDate(f.getFullYear(), f.getMonth() + 1, f.getDate(), T, y, w);
            }
            for (d = u[u.length - 1].jieri.V, g = new Date(e, a - 1, r); D.length <= 0; ) {
                g.setDate(g.getDate() + 1), m = g;
                var x = i.solar2lunar(m.getFullYear(), m.getMonth(), m.getDate()), M = x.lYear, I = x.lMonth, F = x.lDay;
                D = this.getJieriListByDate(m.getFullYear(), m.getMonth() + 1, m.getDate(), M, I, F);
            }
            v = D[0].jieri.V;
        } else if (0 === h) {
            for (;u.length <= 0; ) {
                g.setDate(g.getDate() - 1), f = g;
                var Y = i.solar2lunar(f.getFullYear(), f.getMonth(), f.getDate()), S = Y.lYear, b = Y.lMonth, N = Y.lDay;
                u = this.getJieriListByDate(f.getFullYear(), f.getMonth() + 1, f.getDate(), S, b, N);
            }
            d = u[u.length - 1].jieri.V, v = o[h + 1].jieri.V;
        } else if (h === o.length - 1) {
            for (d = o[h - 1].jieri.V; D.length <= 0; ) {
                g.setDate(g.getDate() + 1), m = g;
                var L = i.solar2lunar(m.getFullYear(), m.getMonth(), m.getDate()), O = L.lYear, j = L.lMonth, P = L.lDay;
                D = this.getJieriListByDate(m.getFullYear(), m.getMonth() + 1, m.getDate(), O, j, P);
            }
            v = D[0].jieri.V;
        } else d = o[h - 1].jieri.V, v = o[h + 1].jieri.V;
        return {
            prevName: d,
            nextName: v
        };
    },
    getJieriListByDate: function(t, e, a, i, r, n) {
        var s = [], l = (e < 10 ? "0" + e : e.toString()) + (a < 10 ? "0" + a : a.toString()), o = (r < 10 ? "0" + r : r.toString()) + (n < 10 ? "0" + n : n.toString()), h = this.allFestivalData.S[l];
        if (h && h.length > 0) for (var c = 0; c < h.length; c++) t >= parseInt(h[c].Y, 10) && parseInt(h[c].P, 10) >= 0 && s.push({
            date: t + l,
            jieri: h[c]
        });
        var g = this.allFestivalData.L[o];
        if (g && g.length > 0) for (var u = 0; u < g.length; u++) i >= parseInt(g[u].Y, 10) && parseInt(g[u].P, 10) >= 0 && s.push({
            date: t + l,
            jieri: g[u]
        });
        for (var D = new Date(t, e - 1, a).getDay(), f = 0, m = 1; m <= 7; m++) {
            if (new Date(t, e - 1, m).getDay() === D) {
                f = m;
                break;
            }
        }
        for (var d = (a - f) / 7 + 1, v = new Date(t, e, 0).getDate(), p = !0, T = a + 1; T <= v; T++) {
            if (new Date(t, e - 1, T).getDay() === D) {
                p = !1;
                break;
            }
        }
        var y = (e < 10 ? "0" + e : e.toString()) + d + D, w = (e < 10 ? "0" + e : e.toString()) + (d + 1) + D, x = (e < 10 ? "0" + e : e.toString()) + (d + 2) + D, M = (e < 10 ? "0" + e : e.toString()) + (d + 3) + D, I = this.allFestivalData.W[y];
        if (p && (I = this.allFestivalData.W[y] || this.allFestivalData.W[w] || this.allFestivalData.W[x] || this.allFestivalData.W[M]), 
        I && I.length > 0) for (var F = 0; F < I.length; F++) t >= parseInt(I[F].Y, 10) && parseInt(I[F].P, 10) >= 0 && s.push({
            date: t + l,
            jieri: I[F]
        });
        return s.length > 0 && s.sort(function(t, e) {
            return (t = parseInt(t.jieri.P, 10)) === (e = parseInt(e.jieri.P, 10)) ? 0 : t < e ? 1 : -1;
        }), s;
    },
    onPageScroll: function(t) {
        var e = t.scrollTop / 50, a = e / 30 > .5 ? .5 : e / 30;
        this.setData({
            filterBlur: e,
            pureOpacity: a
        });
    },
    routeWebpage: function(t) {
        wx.navigateTo({
            url: "../webview/index?url=".concat(encodeURIComponent(t.currentTarget.dataset.url))
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: this.data.festivalData.shareTxt,
            path: "tips/pages/index/index?name=".concat(this.name, "&date=").concat(this.date),
            imageUrl: ""
        };
    }
});