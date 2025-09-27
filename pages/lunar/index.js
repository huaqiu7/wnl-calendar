require("../../@babel/runtime/helpers/Arrayincludes");

var t = require("../../utils/api"), e = require("../../utils/util"), a = require("../../utils/calendar"), i = require("../../components/datePicker/datePicker"), s = require("../../data/YJData"), n = require("../../data/JXData"), h = require("../../data/fetusData"), r = t.app;

Page({
    sharedate: "",
    dateNow: new Date(),
    viewDate: null,
    isShowing: !1,
    minDate: new Date(1901, 1, 19),
    maxDate: new Date(2099, 11, 31),
    title: "",
    desc: "",
    data: {
        ad: [],
        scrollMinHeight: "auto",
        dayLunarInfo: {},
        contentVisibility: "hidden",
        adData: {}
    },
    onLoad: function(t) {
        this.sharedate = t.date, console.log(this.sharedate), Object.assign(this, i), this.init();
    },
    onShow: function() {
        var t = this, e = r.globalData.year || this.dateNow.getFullYear(), a = r.globalData.month || this.dateNow.getMonth(), i = r.globalData.day || this.dateNow.getDate();
        if (0 === r.globalData.month && (a = 0), r.globalData.dayViewTap) r.globalData.dayViewTap = !1, 
        this.viewDate && (!this.viewDate || this.viewDate.getFullYear() === e && this.viewDate.getMonth() === a && this.viewDate.getDate() === i) || this.setPageData(e, a, i); else if (!this.viewDate) {
            var s = this.sharedate ? parseInt(this.sharedate.split("-")[0]) : this.dateNow.getFullYear(), n = this.sharedate ? parseInt(this.sharedate.split("-")[1]) - 1 : this.dateNow.getMonth(), h = this.sharedate ? parseInt(this.sharedate.split("-")[2]) : this.dateNow.getDate();
            this.setPageData(s, n, h);
        }
        r.globalData.adConfigData.cardConfig ? this.setData({
            ad: r.globalData.adConfigData.cardConfig.lunarCard
        }) : r.getAdConfig().then(function(e) {
            t.setData({
                ad: e.cardConfig.lunarCard
            });
        }).catch(function(t) {
            console.log(t);
        });
    },
    onHide: function() {
        this.dateSelectModuleHideNow();
    },
    setPageData: function(t, e, a) {
        this.viewDate = new Date(t, e, a);
        var i = this.getDayLunarInfo(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate());
        this.setData({
            dayLunarInfo: i,
            contentVisibility: "visible"
        });
    },
    onReady: function() {
        r.globalData.windowWidth > 320 ? this.setData({
            scrollMinHeight: r.globalData.windowHeight + "px"
        }) : this.setData({
            scrollMinHeight: "auto"
        });
    },
    onShareAppMessage: function() {
        return {
            title: this.title,
            desc: this.desc,
            path: "/pages/lunar/index"
        };
    },
    dateSelectCallback: function(t, e, a) {
        this.viewDate = new Date(t, e, a);
        var i = this.getDayLunarInfo(t, e, a);
        this.setData({
            dayLunarInfo: i
        });
    },
    dateSelectTap: function() {
        console.log(this.viewDate), this.dateSelectShow(!0, this.viewDate);
    },
    todayTap: function() {
        if (this.isShowing) return !1;
        this.isShowing = !0, this.viewDate = new Date(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate());
        var t = this.getDayLunarInfo(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate());
        this.setData({
            dayLunarInfo: t
        });
    },
    dayPrevSelect: function() {
        var t = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate());
        if (t.setDate(t.getDate() - 1), t < this.minDate) return !1;
        if (this.isShowing) return !1;
        this.isShowing = !0, this.viewDate.setDate(this.viewDate.getDate() - 1);
        var e = this.getDayLunarInfo(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate());
        this.setData({
            dayLunarInfo: e
        });
    },
    dayNextSelect: function() {
        var t = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate());
        if (t.setDate(t.getDate() + 1), t > this.maxDate) return !1;
        if (this.isShowing) return !1;
        this.isShowing = !0, this.viewDate.setDate(this.viewDate.getDate() + 1);
        var e = this.getDayLunarInfo(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate());
        this.setData({
            dayLunarInfo: e
        });
    },
    getDayLunarInfo: function(t, i, r) {
        var o = {
            todayDisaply: "block"
        };
        t === this.dateNow.getFullYear() && i === this.dateNow.getMonth() && r === this.dateNow.getDate() && (o.todayDisaply = "none");
        var g = new Date(t, i, r);
        o.sDateString = e.formatDate(g, "yyyy年M月d日");
        var l = a.solar2lunar(t, i, r);
        o.iDayCn = l.IMonthCn + l.IDayCn;
        var D = l.Animal, u = a.getYearWeek(t, i, r);
        o.lunarDate = l.gzYear + "年  " + l.gzMonth + "月  " + l.gzDay + "日 【属" + D + "】 周" + a.nStr1[l.nWeek] + "  第" + u + "周";
        var d = a.getYJSqlFields(g), w = "-", v = "-";
        s && s[d[1] + "-" + d[0]] && (w = s[d[1] + "-" + d[0]].y, v = s[d[1] + "-" + d[0]].j);
        var c = new Date(t, i, r + 1), y = a.solar2lunar(c.getFullYear(), c.getMonth(), c.getDate());
        console.log("nextDayJieqi", y);
        [ "立春", "立夏", "立秋", "立冬", "春分", "夏至", "秋分", "冬至" ].includes(y.Term) && (console.log("四绝四离日"), 
        w = "", v = "大事勿用  结婚  动手术  搬家  开工开业  建房  出行上任  安葬"), w = "" === w ? "-" : w, v = "" === v ? "-" : v, 
        o.yi = this.getYJLineString(w), o.ji = this.getYJLineString(v), o.hourJXList = [];
        for (var f = a.getLunarHourIndex(this.dateNow.getHours()), S = new Date(t, i, r), p = new Date(t, i, r), b = 0, M = 0; M < 12; M++) {
            0 === M && 0 === f ? (S.setDate(S.getDate() + 1), b = 0) : b = M;
            var L = {
                index: b,
                jxString: a.getStemsBranchHourAsString(S, 2 * b) + a.jixiongStatusOfDateTime(S, 2 * b),
                jxClass: ""
            };
            (f === b || 0 === f && 0 === b) && p.getFullYear() === this.dateNow.getFullYear() && p.getMonth() === this.dateNow.getMonth() && p.getDate() === this.dateNow.getDate() && (L.jxClass = "now"), 
            o.hourJXList.push(L);
        }
        var Y = a.querySAByDay(new Date(t, i, r), n, h);
        o.zhishen = Y.zhishen, o.cs = Y.cs, o.jianchu = Y.jianchu, o.stars28 = Y.stars28, 
        o.pzbj = Y.pzbj, o.wx = Y.wx, o.jsyq = Y.jsyq, o.taishen = [ Y.taishen.substr(0, 4), Y.taishen.substr(4) ], 
        o.xsyj = this.getLineString(Y.xsyj, 2), o.jsyq = this.getLineString(Y.jsyq, 2), 
        this.isShowing = !1, this.title = e.formatDate(g, "yyyy.M.d") + " 周" + a.nStr1[l.nWeek] + " " + o.lunarDate + " ", 
        0 === f ? (S.setDate(S.getDate() + 1), b = 0) : b = this.dateNow.getHours();
        var N = a.getStemsBranchHourAsString(S, b);
        return this.title += N + "时", this.desc = "宜：" + o.yi + " 忌：" + o.ji, o;
    },
    getYJLineString: function(e) {
        for (var a = t.app.globalData.windowWidth - 94, i = e.split(" "), s = "", n = "", h = 0; h < i.length; h++) {
            var r = (n += i[h] + " ").trim().split(" ").length;
            15 * n.trim().length - 7.5 * (r - 1) > a ? (n = i[h] + " ", s = s.trim() + "\n" + n) : s += i[h] + " ";
        }
        return s;
    },
    getLineString: function(t, e) {
        var a = t.split(" "), i = [], s = 0;
        if (1 === a.length) return i.push(a[0]), i;
        for (var n = 0; n <= a.length - 1 && !(s >= e); ) a[n].length < 3 && n + 1 < a.length && a[n + 1].length < 3 ? (i.push(a[n] + " " + a[n + 1]), 
        s++, n += 2) : (i.push(a[n]), s++, n++);
        return i;
    }
});