var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../../@babel/runtime/helpers/toConsumableArray"), a = t(require("../../utils/util")), i = require("../toast/toast.js"), s = require("../../utils/enmoth.js"), n = require("../../utils/createpic.js"), o = getApp(), r = o.globalData.Proportion, d = o.globalData.system, h = o.globalData.brand, l = o.globalData.model, c = require("../../../utils/createvideo.js"), u = 0, y = 0, g = "", A = "", D = "", f = "https://service.51wnl.com";

Page({
    FINALL_DATA: [],
    REQUEST_POSITION: 5,
    SHARE_DATE: "",
    SHARE_TEMP: 0,
    isLoadingData: !1,
    clickIndex: 2,
    DURATION: 300,
    CLOSET_FLAG: !0,
    todayIndex: 0,
    data: {
        today: "".concat(new Date().getFullYear(), "-").concat(a.default.formatNumber(new Date().getMonth() + 1), "-").concat(a.default.formatNumber(new Date().getDate())),
        currentdate: "",
        uid: "",
        signtxt: "签到",
        tiptxt: "你还没开始签到哦",
        signed: !1,
        signdays: 0,
        history: [],
        duration: 300,
        swiperIndex: 2,
        swiperCircular: !0,
        showPop: !1,
        isToday: !0,
        style0: !0,
        style1: !1,
        style2: !1,
        style3: !1,
        style4: !1,
        style5: !1,
        currentStyle: 0,
        showLoading: !1,
        itemClicked: !1,
        isHuawei: !1,
        nowIndex: 30,
        loading: !1,
        hasinf: 0,
        appdate: "",
        launchApp: !1,
        showBackIndex: !1
    },
    onReady: function() {
        c.createInterstitial({
            adUnitId: o.globalData.interstitialAd.dailysign
        });
    },
    onLoad: function(t) {
        this.SHARE_TEMP = parseInt(t.template), this.SHARE_DATE = t.date;
        this.setData({
            launchApp: !1,
            currentdate: this.SHARE_DATE ? this.SHARE_DATE : this.data.today,
            showBackIndex: 1014 === o.globalData.scene || 1036 === o.globalData.scene
        }), new i.ToastPannel(), wx.getStorageSync("uid") ? this.uid = wx.getStorageSync("uid") : (this.uid = a.default.uuid(), 
        wx.setStorageSync("uid", this.uid)), this.init();
    },
    init: function() {
        var t = a.default.formatTime(new Date()).split(" ")[0], e = a.default.getPointDate(t, -30);
        this.SHARE_DATE === this.data.today && (this.SHARE_DATE = ""), this.SHARE_TEMP && this.setShareStyle(this.SHARE_TEMP), 
        this.SHARE_DATE ? this.setShareDate(this.SHARE_DATE) : this.getSignInfoByDate(e, t);
    },
    routeIndex: function() {
        wx.switchTab({
            url: "/pages/index/index"
        }), o.globalData.scene = 1001;
    },
    setShareStyle: function(t) {
        var e;
        t ? (3 === t && (e = 2), 1 === t && (e = 3), 2 === t && (e = 4), 4 === t && (e = 5), 
        wx.setStorageSync("currentStyle", e), this.setData({
            style0: !1,
            style1: !1,
            style2: 3 === t,
            style3: 1 === t,
            style4: 2 === t,
            style5: 4 === t,
            currentStyle: e
        })) : (t = wx.getStorageSync("currentStyle") || this.data.currentStyle, this.setData({
            style0: 0 === t,
            style1: 1 === t,
            style2: 2 === t,
            style3: 3 === t,
            style4: 4 === t,
            style5: 5 === t,
            currentStyle: t
        }));
    },
    setShareDate: function(t) {
        var e = a.default.getPointDate(t, -15), i = a.default.getPointDate(t, 15);
        this.getSignInfoByDate(e, i);
    },
    onShow: function() {
        this.setShareStyle(), ("HUAWEI" === h || "huawei" === h || "google" === h || "HONOR" === h || "honor" === h || "Meizu" === h && "PRO 6" === l) && this.setData({
            isHuawei: !0
        });
    },
    getSignInfoByDate: function(t, e, a) {
        var i = this;
        this.isLoadingData = !0, A = t, D = e, console.log("reqDate =============== >", A), 
        console.log("lastReqDate =========== >", D);
        wx.request({
            url: "https://service.51wnl.com/Api/SignEvDay/GetSignInfo",
            data: {
                uid: this.uid,
                did: "",
                datekey: t,
                enddatekey: e
            },
            dataType: "json",
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                i.isLoadingData = !1, i.setData({
                    loadComplete: !0
                }), i.formatData(t.data.data, a);
            },
            error: function(t) {
                console.log(t);
            }
        });
    },
    formatData: function(t, i) {
        for (var n = 0, o = t.length; n < o; n += 1) {
            t[n].year = t[n].dateKey.split("-")[0], t[n].month = t[n].dateKey.split("-")[1], 
            t[n].day = t[n].dateKey.split("-")[2], t[n].largeYear = a.default.yearToChinese(parseInt(t[n].dateKey.split("-")[0])), 
            t[n].largerIndex = a.default.NumberToChinese(t[n].rIndex), t[n].largeMonth = a.default.NumberToChinese(t[n].dateKey.split("-")[1]), 
            t[n].largeDay = a.default.NumberToChinese(t[n].dateKey.split("-")[2]), t[n].content && (t[n].content.imgs = t[n].content.img.split(",")), 
            "一十" === t[n].largeMonth && (t[n].largeMonth = "十"), "一十" === t[n].largeDay && (t[n].largeDay = "十"), 
            t[n].festival, 0 !== t[n].rIndex && (this.todayIndex = t[n].rIndex), t[n].enWeek = s.week[t[n].weekIndex].toUpperCase();
            var r = parseInt(t[n].month) - 1;
            t[n].enMonth = s.month[r].toUpperCase();
        }
        var d = this.FINALL_DATA.length < 1;
        if (this.FINALL_DATA = i ? [].concat(e(t), e(this.FINALL_DATA)) : [].concat(e(this.FINALL_DATA), e(t)), 
        d && !this.SHARE_DATE && this.setData({
            history: this.FINALL_DATA.slice(-3),
            isToday: !0,
            loading: !1,
            swiperIndex: 2
        }), d && this.SHARE_DATE) {
            var h;
            h = this.FINALL_DATA.slice(14, 17), this.setData({
                history: h,
                swiperIndex: 1,
                isToday: this.SHARE_DATE === this.data.today,
                loading: !1
            });
        }
        this.setSignInfo();
    },
    setSignInfo: function() {
        var t = this.FINALL_DATA[this.FINALL_DATA.length - 1].rIndex;
        this.setData({
            signdays: t,
            signtxt: t ? "已签到" : "签到",
            tiptxt: t ? "已签到".concat(t, "天") : "你还没开始签到哦"
        });
    },
    signOn: function() {
        this.data.signdays || (this.updateLastData(), this.sendSignReq());
    },
    sendSignReq: function() {
        wx.request({
            url: f + "/Api/SignEvDay/SignToday",
            data: {
                uid: this.uid,
                did: ""
            },
            dataType: "json",
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t);
            },
            error: function(t) {
                this.show(t);
            }
        });
    },
    updateLastData: function() {
        var t = this.data.history.length - 1;
        this.data.history[t].rIndex = this.todayIndex + 1, this.data.history[t].largerIndex = a.default.NumberToChinese(this.data.history[t].rIndex), 
        this.FINALL_DATA[this.FINALL_DATA.length - 1].rIndex = this.todayIndex + 1, this.FINALL_DATA[this.FINALL_DATA.length - 1].largerIndex = a.default.NumberToChinese(this.data.history[t].rIndex), 
        this.setData({
            signtxt: "已签到",
            tiptxt: "已签到" + this.data.history[t].rIndex + "天",
            signdays: this.data.history[t].rIndex,
            showPop: !0,
            history: this.data.history
        });
    },
    saveSign: function() {
        var t = this, e = wx.createCanvasContext("style0"), a = this.data.history[this.data.history.length - 1];
        this.setData({
            showLoading: !0
        }), this.data.style0 && n.drawStyle0(t, e, r, a), this.data.style1 && n.drawStyle1(t, e, r, a), 
        this.data.style2 && n.drawStyle2(t, e, r, a), this.data.style3 && n.drawStyle3(t, e, r, a), 
        this.data.style4 && n.drawStyle4(t, e, r, a), this.data.style5 && n.drawStyle5(t, e, r, a), 
        setTimeout(function() {
            t.saveImage("style0");
        }, 2500);
    },
    saveImage: function(t) {
        var e = this;
        wx.canvasToTempFilePath({
            canvasId: t,
            success: function(t) {
                wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function() {
                        e.setData({
                            showPop: !1
                        }), e.show("日签已保存到本地");
                    },
                    complete: function() {
                        e.setData({
                            showLoading: !1
                        });
                    }
                });
            }
        });
    },
    closePop: function() {
        this.setData({
            showPop: !1
        });
    },
    display: function(t) {
        this.itemClicked(this);
        var e = t.currentTarget.dataset.index, a = encodeURIComponent(JSON.stringify(this.data.history[e])), i = wx.getStorageSync("currentStyle") ? wx.getStorageSync("currentStyle") : this.data.currentStyle;
        wx.navigateTo({
            url: "../detail/detail?obj=" + a + "&style=" + i + "&current=" + e
        });
    },
    itemClicked: function(t) {
        t.setData({
            itemClicked: !0
        }), setTimeout(function() {
            t.setData({
                itemClicked: !1
            });
        }, 500);
    },
    setCircleData: function(t, e) {
        var a, i, s, n = this;
        0 === t ? (a = e ? 2 : 1, i = e ? 3 : 2) : 1 === t ? (a = e ? 0 : 2, i = e ? 2 : 3) : 2 === t && (a = e ? 1 : 0, 
        i = 1), this.FINALL_DATA.forEach(function(t, e) {
            t.dateKey === n.data.history[2].dateKey && (s = e);
        });
        var o = e ? s - i : s + i;
        this.FINALL_DATA[o] && this.data.history.splice(a, 1, this.FINALL_DATA[o]), this.setData({
            history: this.data.history,
            swiperIndex: t
        });
    },
    changeIndex: function(t) {
        var e = this, i = t.detail.current, s = "touch" === t.detail.source ? this.data.swiperIndex : this.clickIndex, n = "touch" === t.detail.source ? this.DURATION : 0, o = !0;
        i < s ? 2 === s && 0 === i && (o = !1) : (0 !== s || 2 !== i) && (o = !1);
        var r = this.data.history[i].dateKey, d = this.FINALL_DATA[0].dateKey, h = this.FINALL_DATA[this.FINALL_DATA.length - 1].dateKey;
        if (a.default.getDateDiff(r, d) === this.REQUEST_POSITION && !this.isLoadingData) {
            var l = a.default.getPointDate(d, -1), c = a.default.getPointDate(l, -30);
            this.getSignInfoByDate(c, l, o);
        }
        if (a.default.getDateDiff(r, h) === this.REQUEST_POSITION && this.SHARE_DATE && !this.isLoadingData && !o) {
            var u = a.default.getPointDate(h, 30), y = a.default.getPointDate(h, 1);
            this.getSignInfoByDate(y, u, o);
        }
        var g = this.data.history[i].dateKey === this.data.today;
        if (setTimeout(function() {
            e.setData({
                isToday: g
            });
        }, 300), this.setData({
            duration: n,
            swiperCircular: !g,
            currentdate: r
        }), g && !this.hasChange) return this.hasChange = !0, void this.backToday();
        this.setCircleData(i, o, n);
    },
    backToday: function() {
        if (this.SHARE_DATE && this.FINALL_DATA[this.FINALL_DATA.length - 1].dateKey !== this.data.today) {
            this.FINALL_DATA = [], this.SHARE_DATE = "";
            var t = a.default.formatTime(new Date()).split(" ")[0], e = a.default.getPointDate(t, -30);
            this.getSignInfoByDate(e, t);
        } else this.setData({
            history: this.FINALL_DATA.slice(-3),
            swiperIndex: 2,
            isToday: !0,
            duration: this.DURATION,
            currentdate: this.data.today
        });
    },
    prev: function() {
        var t = this.data.swiperIndex;
        0 === t && (t = 3), this.clickIndex = t, this.setData({
            swiperIndex: t - 1
        });
    },
    next: function() {
        var t = this.data.swiperIndex;
        2 === t && (t = -1), this.clickIndex = t, this.setData({
            swiperIndex: t + 1
        });
    },
    touchStart: function(t) {
        u = t.touches[0].pageX, g = setInterval(function() {
            y += 1;
        }, 100);
    },
    touchMove: function(t) {
        t.currentTarget.dataset.datekey === this.FINALL_DATA[this.FINALL_DATA.length - 1].dateKey && (t.touches[0].pageX - u <= -40 && y < 10 && this.show("明天，敬请期待~"));
    },
    touchEnd: function(t) {
        var e = t.changedTouches[0].pageX;
        Math.abs(e - u) < 1 && (this.touchDirection = null), clearInterval(g), y = 0;
    },
    onShareAppMessage: function(t) {
        var e = this, a = this, i = "";
        "button" === t.from && (i = "../images/shareImg.jpg");
        var s = this.data.history.filter(function(t) {
            return t.dateKey === e.data.currentdate;
        }), n = s[0].dateKey;
        return {
            title: s[0].dayText,
            path: "dailysign/pages/index/index?date=".concat(n),
            imageUrl: i || "",
            success: function() {
                a.setData({
                    showPop: !1
                }), "Android" !== d && a.show("分享成功");
            },
            fail: function() {}
        };
    },
    toWebPage: function(t) {
        var e = t.currentTarget.dataset.did, a = t.currentTarget.dataset.dk;
        wx.navigateTo({
            url: "../contentpage/contentpage?detailid=" + e + "&dateKey=" + a
        });
    },
    launchAppError: function(t) {
        console.log("打开错误" + t.detail.errMsg);
    }
});