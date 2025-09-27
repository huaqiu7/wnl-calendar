var t = require("../../@babel/runtime/helpers/defineProperty"), a = require("../../utils/api"), e = require("../../utils/calendar"), i = require("../../utils/util"), n = a.app;

Page({
    title: "",
    desc: "",
    nowDate: new Date(),
    isDown: !1,
    data: {
        ad: [],
        jiejiariData: {
            activeClass: "active",
            height: 0,
            time: 300,
            list: []
        },
        termData: {
            activeClass: "",
            height: 0,
            time: 300,
            list: []
        },
        hotData: {
            activeClass: "",
            height: 0,
            time: 300,
            list: []
        }
    },
    onLoad: function() {
        this.initPageData();
    },
    onReady: function() {
        var t = this;
        this.initPageData(), n.globalData.adConfigData.cardConfig ? this.setData({
            ad: n.globalData.adConfigData.cardConfig.festivalCard
        }) : n.getAdConfig().then(function(a) {
            t.setData({
                ad: a.cardConfig.festivalCard
            });
        }).catch(function(t) {
            console.log(t);
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.title,
            desc: this.desc,
            path: "/pages/festival/index"
        };
    },
    removeHou: function(t) {
        for (var a = 0; a < t.length; a++) t[a].days.indexOf("今天") > -1 || t[a].days.indexOf("明天") > -1 || t[a].days.indexOf("后天") > -1 || (t[a].days += "后");
        return t;
    },
    initPageData: function() {
        if (n.globalData.festivalData && !this.isDown) {
            var t = this.getTermList(), a = [], e = [];
            this.isDown = !0;
            var i = new Date(this.nowDate.getFullYear(), this.nowDate.getMonth(), this.nowDate.getDate()), r = 0, s = this.getJieri(i);
            for (a = a.concat(s.vacationList), e = e.concat(s.hotList); r < 365; ) i.setDate(i.getDate() + 1), 
            s = this.getJieri(i), a = a.concat(s.vacationList), e = e.concat(s.hotList), r++;
            this.removeHou(e), this.removeHou(a), this.setData({
                "jiejiariData.time": 40 * a.length,
                "jiejiariData.height": 67 * a.length,
                "jiejiariData.list": a,
                "termData.time": 20 * t.length,
                "termData.list": t,
                "hotData.time": 10 * e.length,
                "hotData.list": e
            }), a[0].num <= e[0].num ? this.title = a[0].days + "后是" + a[0].name : this.title = e[0].days + "后是" + e[0].name;
        }
    },
    getTermList: function() {
        for (var t, a = [], n = {}, r = e.dayOfYear(this.nowDate), s = this.nowDate.getFullYear(), o = -1, l = 0, g = "", h = 0; h < 24; h++) if (r > e.getOffsetByTerm(s, h - 1) + 1 && r <= e.getOffsetByTerm(s, h) + 1) {
            o = h;
            break;
        }
        -1 === o && (s++, o = 0);
        for (var D = 0; D <= 24; D++) {
            var d = o + D;
            d < 24 ? (l = e.getOffsetByTerm(s, d), t = e.getDateObjByOffset(s, l), g = s === this.nowDate.getFullYear() ? i.formatDate(t, "MM月dd日") : i.formatDate(t, "yyyy年MM月dd日")) : (d -= 24, 
            l = e.getOffsetByTerm(s + 1, d), t = e.getDateObjByOffset(s + 1, l), g = s + 1 === this.nowDate.getFullYear() ? i.formatDate(t, "MM月dd日") : i.formatDate(t, "yyyy年MM月dd日"));
            var c = this.getDaysInterval(t);
            n = {
                P: 8,
                name: e.solarTerm[d],
                date: g,
                days: c.intervalDay
            }, a.push(n);
        }
        return a = this.removeHou(a);
    },
    getJieri: function(t) {
        var a = t.getFullYear(), r = t.getMonth(), s = t.getDate(), o = e.solar2lunar(a, r, s), l = o.lYear, g = o.lMonth, h = o.lDay;
        r += 1;
        var D = (g < 10 ? "0" + g : g.toString()) + (h < 10 ? "0" + h : h.toString()), d = (r < 10 ? "0" + r : r.toString()) + (s < 10 ? "0" + s : s.toString()), c = [], f = [], u = this.getDaysInterval(t), v = a === this.nowDate.getFullYear() ? i.formatDate(t, "MM月dd日") : i.formatDate(t, "yyyy年MM月dd日"), m = n.globalData.festivalData.S[d], y = {};
        if (m && m.length > 0) for (var p = 0; p < m.length; p++) a >= parseInt(m[p].Y, 10) && ((y = {
            P: parseInt(m[p].P, 10),
            name: m[p].V,
            date: v,
            days: u.intervalDay,
            num: u.intervalTime
        }).P >= 10 ? c.push(y) : f.push(y));
        var T = n.globalData.festivalData.L[D];
        if (T && T.length > 0) for (var w = 0; w < T.length; w++) l >= parseInt(T[w].Y, 10) && ((y = {
            P: parseInt(T[w].P, 10),
            name: T[w].V,
            date: v,
            days: u.intervalDay,
            num: u.intervalTime
        }).P >= 10 ? c.push(y) : f.push(y));
        var M = this.getWeekIndexString(a, r, s), P = n.globalData.festivalData.W[M];
        if (P && P.length > 0) for (var b = 0; b < P.length; b++) (y = {
            P: parseInt(P[b].P, 10),
            name: P[b].V,
            date: v,
            days: u.intervalDay,
            num: u.intervalTime
        }).P >= 10 ? c.push(y) : f.push(y);
        return o.isTerm && "清明" === o.Term && c.push({
            P: 8,
            name: o.Term,
            date: v,
            days: u.intervalDay,
            num: u.intervalTime
        }), {
            vacationList: c,
            hotList: f
        };
    },
    getWeekIndexString: function(t, a, e) {
        var i = Math.ceil(e / 7), n = new Date(t, a - 1, e).getDay();
        return (a < 10 ? "0" + a : a.toString()) + i + n;
    },
    getDaysInterval: function(t) {
        var a = Math.ceil((t.getTime() - this.nowDate.getTime()) / 864e5);
        return {
            intervalDay: 0 === a ? "今天" : 1 === a ? "明天" : a + "天",
            intervalTime: a
        };
    },
    sectionTitleTap: function(a) {
        var e, i = a.currentTarget.dataset.tag, r = "" === this.data[i].activeClass ? "active" : "", s = "" === this.data[i].activeClass ? 67 * this.data[i].list.length : 0;
        n.globalData.windowWidth <= 320 && "hotData" === i ? s > 0 && (s += 124) : n.globalData.windowWidth <= 360 && "hotData" === i ? s > 0 && (s += 54) : n.globalData.windowWidth <= 375 && "hotData" === i && (s += 17), 
        console.log(s);
        var o = i + ".activeClass", l = i + ".height";
        this.setData((t(e = {}, o, r), t(e, l, s), e));
    },
    routeTips: function(t) {
        var e = t.currentTarget.dataset.name, i = t.currentTarget.dataset.date;
        i = i.length <= 6 ? "".concat(new Date().getFullYear(), "-").concat(i.replace("月", "-").replace("日", "")) : "".concat(i.replace("年", "-").replace("月", "-").replace("日", "")), 
        console.log(e, i), a.navigateTo({
            url: "../../tips/pages/index/index?name=".concat(e, "&date=").concat(i)
        });
    }
});