require("../../@babel/runtime/helpers/Arrayincludes");

var t = require("../../utils/api"), e = require("../../utils/util"), a = require("../../utils/eventNotify"), i = require("../../utils/calendar"), n = require("../../components/datePicker/datePicker"), o = require("../../components/cityPicker/cityPicker"), s = require("../../data/YJData"), h = t.app, r = require("../../utils/createvideo.js");

Page({
    hasParams: !1,
    title: "",
    desc: "",
    dateNow: new Date(),
    viewDate: new Date(),
    prevViewDate: new Date(),
    nextViewDate: new Date(),
    minDate: new Date(1901, 1, 19),
    maxDate: new Date(2099, 11, 31),
    monthViewWidth: 375,
    monthViewHeight: 310,
    monthList: [],
    monthViewTop: 20,
    monthDayList: [],
    prevMonthIndex: 0,
    nextMonthIndex: 2,
    monthDuration: 400,
    monthAnimation: t.createAnimation({
        duration: 400,
        delay: 0
    }),
    isScrolling: !1,
    startTimeStamp: 0,
    startX: 0,
    startY: 0,
    astroUrl: "https://c.51wnl.com/contentapi/api4.4.0/wxprogram/getstar",
    astroName: "aries",
    astroIndex: 0,
    astroIcon: "",
    astroList: [ "白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "摩羯座", "水瓶座", "双鱼座" ],
    comAstro: [ [ "aries", "白羊座", "3.21-4.19" ], [ "taurus", "金牛座", "4.20-5.20" ], [ "gemini", "双子座", "5.21-6.21" ], [ "cancer", "巨蟹座", "6.22-7.22" ], [ "leo", "狮子座", "7.23-8.22" ], [ "virgo", "处女座", "8.23-9.22" ], [ "libra", "天秤座", "9.23-10.23" ], [ "scorpio", "天蝎座", "10.24-11.22" ], [ "sagittarius", "射手座", "11.23-12.21" ], [ "capricorn", "摩羯座", "12.22-1.19" ], [ "aquarius", "水瓶座", "1.20-2.18" ], [ "pisces", "双鱼座", "2.19-3.20" ] ],
    mryyUrl: "https://www.51wnl.com/Api4.3.3/GetSentenceByDate.ashx",
    DPR: 2,
    screenWidth: 412,
    currentYjIndex: -1,
    tokenList: [],
    data: {
        ad: [],
        fontLowClass: "",
        screenHeight: 0,
        todayDisaply: "none",
        screenWidth: 375,
        singleMonthDisplay: "1",
        singleMonthDayObj: {},
        currentDateString: "",
        monthViewTop: 20,
        monthViewWidth: 375,
        monthTransform: -375,
        monthList: [],
        monthViewDisplay: "0",
        monthAnimation: {},
        dayViewData: {},
        astroShow: !1,
        wtCode: [ [ 0, "晴" ], [ 1, "多云" ], [ 2, "阴" ], [ 10, "大雨" ], [ 8, "中雨" ], [ 7, "小雨" ], [ 14, "下雪" ], [ 18, "雾" ], [ 20, "沙尘" ], [ 29, "飓风" ], [ 4, "雷雨" ], [ 5, "雷雨+冰雹" ], [ 19, "冻鱼" ], [ 30, "霾" ] ],
        pm: [ "#9aee6b", "#77cc31", "#e6ac0d", "#d97127", "#cc4c3b", "#a63e30" ],
        isWeatherShow: !1,
        isWeatherDateShow: !1,
        loadEaseOut: {},
        city_font: "14px",
        city_padding: null,
        weatherData: [],
        alignItemsWeather: "",
        weather_cur_pm_weather: 3,
        cesuanItemListNum: "",
        bannerIsShow: !0,
        cesuanItemList: [],
        cesuanItemWebViewList: [],
        isBannerShow: !1,
        isViewBannerShow: !1,
        isShowHeaderBanner: !1,
        bannerHeader: "",
        bannerShowNum: 12,
        landUrlClick: "",
        testClick: !1,
        isAstroShow: !0,
        astroData: {},
        astroPicUrl: "",
        astroBGPUrl: "https://www.51wnl.com/wxapp_resource/wnl/stars@2x.jpg",
        astroIconUrl: "https://www.51wnl.com/wxapp_resource/wnl/astro_change_icon@2x.png",
        showAstroText: "",
        astroIndex: 0,
        astroList: [ "白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座", "天蝎座", "射手座", "摩羯座", "水瓶座", "双鱼座" ],
        mryyShow: !1,
        mryyData: {},
        yjTxtList: [ "结婚", "出行", "搬新房", "订盟", "理发", "开业", "会亲友", "搬家", "合婚订婚", "打扫" ],
        yjTxtStatus: [ "", "", "", "", "", "", "", "", "", "" ],
        yjListWidth: "676px",
        animationClass: "",
        yjBtnTxt: "择吉日"
    },
    onLoad: function(t) {
        console.log("参数携带日期", t.searchdate || ""), this.dateNow = new Date(), this.viewDate = new Date(), 
        t && t.searchdate && (this.hasParams = !0, this.dateNow = new Date(t.searchdate), 
        this.viewDate = new Date(t.searchdate)), this.prevViewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1), 
        this.prevViewDate.setMonth(this.prevViewDate.getMonth() - 1), this.nextViewDate = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1), 
        this.nextViewDate.setMonth(this.nextViewDate.getMonth() + 1), this.setMonthItemActive(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.dateNow.getDate()), 
        Object.assign(this, n), Object.assign(this, o), this.init(), this.initCity(), a.register(this, "deviceOk", function() {}), 
        console.log(i.solar2lunar(2017, 6, 19));
    },
    onUnload: function() {
        a.unRegister(this, null);
    },
    initPageData: function() {
        this.setData({
            deviceString: "not ok"
        }), h.globalData.model && this.setData({
            deviceString: h.globalData.model
        });
    },
    onReady: function() {
        var a = this, i = (r.createInterstitial({
            adUnitId: h.globalData.interstitialAd.home
        }), 10 * (this.data.yjTxtList.length - 1) + 30);
        this.data.yjTxtList.forEach(function(t) {
            i += 16 * t.length + 22;
        });
        var n = h.globalData.windowWidth - h.globalData.windowWidth % 7;
        this.monthItemWidth = Math.floor(n / 7), this.monthList[0] = this.createMonthView(this.prevViewDate.getFullYear(), this.prevViewDate.getMonth(), 0), 
        this.monthList[1] = this.createMonthView(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1), 
        this.monthList[2] = this.createMonthView(this.nextViewDate.getFullYear(), this.nextViewDate.getMonth(), 2), 
        this.monthAnimation.translate3d(-h.globalData.windowWidth, 0, 0).step({
            duration: 0
        }), this.setData({
            yjListWidth: i + "px",
            screenWidth: h.globalData.windowWidth,
            monthAnimation: this.monthAnimation.export(),
            monthViewWidth: n,
            monthList: this.monthList,
            singleMonthDayObj: {
                year: this.monthList[1].year,
                month: this.monthList[1].month,
                monthViewHeight: this.monthList[1].monthViewHeight,
                monthViewTop: this.monthList[1].monthViewTop,
                monthDayList: this.monthList[1].monthDayList
            },
            currentDateString: e.formatDate(this.viewDate, "yyyy年M月")
        }), this.getMryyInfo(this.dateNow), this.weatherGet(), this.bannerInfoGet(), t.getSystemInfo().then(function(t) {
            a.DPR = Math.floor(t.pixelRatio), a.screenWidth = t.screenWidth, a.setData({
                astroBGPUrl: "https://www.51wnl.com/wxapp_resource/wnl/stars@" + a.DPR + "x.jpg",
                astroIconUrl: "https://www.51wnl.com/wxapp_resource/wnl/astro_change_icon@" + a.DPR + "x.png"
            });
        }), t.getStorage({
            key: "wnl_astrodata"
        }).then(function(t) {
            t.data && t.data.astroName && "" !== t.data.astroName && t.data.data && "" !== t.data.data && t.data.data.today ? a.getAstroInfo(t.data.astroName, t.data) : a.getAstroInfo(a.astroName);
        }, function() {
            a.getAstroInfo(a.astroName);
        }), this.getMryyInfo(this.dateNow);
    },
    weatherGet: function() {
        var e = this;
        t.authorize({
            scope: "scope.userLocation"
        }).then(function() {
            t.getLocation().then(function(t) {
                console.log("start"), e.singleWeather(t.latitude, t.longitude);
            }, function() {
                e.singleWeather(39.902451, 116.427301);
            });
        }, function() {
            e.singleWeather(39.902451, 116.427301);
        });
    },
    singleWeather: function(e, a, i) {
        var n = this;
        console.log(i);
        var o = t.getStorageSync("wtDataGetTimeStamp");
        if (Date.parse(new Date()) / 1e3 - o > 600) {
            t.setStorage({
                key: "weatherData",
                data: ""
            });
            var s = t.getStorageSync("cityCode");
            s && (i = s, e = "", a = "");
        }
        var h = t.getStorageSync("weatherData");
        if (h && !i) {
            console.log("weatherStorage");
            var r = JSON.parse(h);
            console.log(r), this.weatherRendering(r, !0);
        } else t.request({
            url: "https://apic.51wnl.com/CttApi/GetWeatherDetail?tkn=6480F2A608958030D190E9E62590174A&cid=Youloft_IOS&av=4.5.9&mac=00:11:22:33:44:55&did=b622c089e7e14d2c2fa8c9129dafbb51&chn=wnl_anzhi&cc=CN&lang=zh&bd=com.youloft.calendar&t=1430366273&cver=6.0&lasttimestamp=&model=iphone&cardId=78&sign=66069614e98aba9d07b1ad26d94e2450",
            data: {
                CityCode: i,
                Lng: a,
                Lat: e
            }
        }).then(function(e) {
            if (200 === e.data.status) {
                console.log(666666), console.log(e);
                var a = Date.parse(new Date()) / 1e3;
                t.setStorage({
                    key: "wtDataGetTimeStamp",
                    data: a
                }), t.setStorage({
                    key: "weatherData",
                    data: JSON.stringify(e)
                }), t.setStorageSync("firstCode", e.data.data.cityCode), console.log("weatherRendering(res)"), 
                console.log(e), n.weatherRendering(e);
            }
        });
    },
    weatherRendering: function(e, a) {
        a && t.setStorageSync("beforeCode", e.data.data.cityCode), console.log(e);
        var i = this, n = this.data.wtCode, o = [], s = e.data.data, h = this.data.pm;
        s.curr.hasOwnProperty("aqi") && o.push(e.data.data.curr, e.data.data.fcd[2], e.data.data.fcd[3]), 
        console.log(o), o.forEach(function(t) {
            for (var e = t.aqi.grade, a = 0; a < n.length; a++) if (t.pmState = "优" === e ? h[0] : "良" === e ? h[1] : "轻度" === e ? h[2] : "中度" === e ? h[3] : "重度" === e ? h[4] : h[5], 
            t.icon = "https://www.51wnl.com/wxapp_resource/wnl/weather/nd" + t.wt + ".png", 
            n[a][0] === t.wt) {
                t.weather = n[a][1];
                break;
            }
        }), console.log(e.data.data.c), o[0].city = e.data.data.c;
        var r = "14px", l = null;
        s.c.length > 5 && i.screenWidth <= 320 ? (r = "11px", l = "6px") : r = s.c.length > 5 ? "12px" : "14px";
        var d = o[0].d.split("-");
        o[0].date = d[1] + "月" + d[2] + "日", i.loadOut(), o[0].th = o[0].th + "°", o[0].ct < -10 ? setTimeout(function() {
            i.setData({
                weather_cur_pm_weather: "52rpx"
            });
        }, 160) : o[0].ct > -10 && i.setData({
            weather_cur_pm_weather: "6rpx"
        }), setTimeout(function() {
            i.setData({
                weatherData: o,
                isWeatherShow: !0,
                city_font: r,
                city_padding: l
            });
        }, 160);
    },
    loadOut: function() {
        var e = t.createAnimation({
            duration: 150,
            timingFunction: "ease-out"
        });
        e.scale(0).step(), this.setData({
            loadEaseOut: e.export()
        });
    },
    onHide: function() {
        this.dateSelectModuleHideNow(), this.uploadTokenList();
    },
    onShareAppMessage: function() {
        return {
            title: this.title,
            desc: this.desc,
            path: "/pages/index/index"
        };
    },
    dateSelectCallback: function(t, e, a) {
        console.log(t, e, a), this.swiperToMonth(t, e, a);
    },
    dateSelectTap: function(t) {
        console.log("dateSelectTap ========"), this.submitToken(t), this.dateSelectShow(!0, this.viewDate);
    },
    submitToken: function(t) {
        var e = t.detail.formId;
        this.dealFormIds(e);
    },
    dealFormIds: function(t) {
        var a = this.tokenList;
        a || (a = []);
        var i = {
            wxToken: t,
            createTime: e.formatTime(new Date())
        };
        a.push(i), this.tokenList = a;
    },
    uploadTokenList: function() {
        var e = this.tokenList;
        if (e.length) {
            this.tokenList = [];
            var a = {
                wxid: h.globalData.openId,
                wxtoken: e
            };
            t.POST("https://wxapigate.51wnl.com/api/wxusermessage/uploadusermessage", a).then();
        }
    },
    routeDailySign: function(e) {
        this.submitToken(e), t.navigateTo({
            url: "../../dailysign/pages/index/index"
        });
    },
    citySelectTap: function(t) {
        this.submitToken(t), this.citySelectShow();
    },
    citySelectCallback: function() {
        var e = t.getStorageSync("cityCode");
        o.citySelectProps.data.cityPickerViewValue.length > 1 && (t.setStorage({
            key: "cityPickerValue",
            data: o.citySelectProps.data.cityPickerViewValue
        }), o.citySelectProps.data.cityCode && t.setStorage({
            key: "cityCode",
            data: o.citySelectProps.data.cityCode
        })), o.citySelectProps.data.cityCode ? this.singleWeather("", "", o.citySelectProps.data.cityCode) : e ? this.singleWeather("", "", e) : this.singleWeather("", "", 101010100);
    },
    bannerInfoGet: function() {
        var t = this, e = h.globalData.adConfigData;
        e.cardConfig ? (console.log("adconfig ===="), this.setAdData(e)) : h.getAdConfig().then(function(e) {
            t.setAdData(e);
        });
    },
    to2Array: function(t, e) {
        t = new Array(Math.ceil(e.length / 4));
        for (var a = 0; a < t.length; a++) {
            t[a] = new Array();
            for (var i = 0; i < 4; i++) t[a][i] = "";
        }
        for (var n = 0; n < e.length; n++) t[parseInt(n / 4)][n % 4] = e[n];
        for (var o = t.length, s = 0; s < t[o - 1].length; s++) "" === t[o - 1][s] && (t[o - 1].splice(s, 1), 
        s -= 1);
        return t;
    },
    setAdData: function(t) {
        var e, a;
        console.log("adconfig ====", t), this.setData({
            isViewBannerShow: t.toolConfig.showHotTool
        });
        var i, n = t.toolConfig, o = n.recommend;
        o && this.setData({
            isShowHeaderBanner: !0
        });
        var s = n.generals;
        a = s, i = s.length, e = this.to2Array(e, s), console.log(i), s.length > 8 && this.setData({
            bannerIsShow: !1,
            cesuanItemListNum: 2,
            bannerShowNum: 2
        }), this.setData({
            cesuanItemList: e,
            cesuanItemWebViewList: a,
            bannerHeader: o,
            isBannerShow: !0,
            ad: t.cardConfig.indexCard
        });
    },
    redirectBannerUrl: function(e) {
        var a = e.currentTarget.dataset.url;
        a.toLowerCase().indexOf("https") > -1 ? t.navigateTo({
            url: "../webview/webview?url=" + a
        }) : t.navigateToMiniProgram({
            appId: a,
            path: "pages/index/index",
            envVersion: "release",
            success: function() {}
        });
    },
    routeTips: function() {
        var a = this.data.festivalList, i = this.data.dayViewObj.year, n = this.data.dayViewObj.month + 1, o = this.data.dayViewObj.day, s = "".concat(i, "-").concat(e.formatNumber(n), "-").concat(e.formatNumber(o));
        a && 1 === a.length && t.navigateTo({
            url: "../../tips/pages/index/index?name=".concat(a[0], "&date=").concat(s)
        });
    },
    festivalChange: function(a) {
        var i = parseInt(a.detail.value), n = this.data.festivalList, o = this.data.dayViewObj.year, s = this.data.dayViewObj.month + 1, h = this.data.dayViewObj.day, r = "".concat(o, "-").concat(e.formatNumber(s), "-").concat(e.formatNumber(h));
        t.navigateTo({
            url: "../../tips/pages/index/index?name=".concat(n[i], "&date=").concat(r)
        });
    },
    bannerHide: function() {
        this.setData({
            bannerIsShow: !1,
            cesuanItemListNum: 2,
            bannerShowNum: 2
        });
    },
    bannerShow: function() {
        this.setData({
            bannerIsShow: !0,
            bannerShowNum: 12,
            cesuanItemListNum: 10
        });
    },
    getAstroInfo: function(t, e) {
        this.astroName = t, this.astroIndex = this.getAstroCnameDate(t).index;
        var a = this.comAstro[this.astroIndex][0];
        if (this.setData({
            astroPicUrl: "https://www.51wnl.com/wxapp_resource/wnl/astro/" + a + "@" + this.DPR + "x.png"
        }), e) {
            this.createShowText(e.data.today.xzys);
            var i = this.dateNow.getTime(), n = e.time;
            t !== e.astroName || t === e.astroName && i - n >= 18e5 ? this.getAstroInfoServer(t) : (e.data.today.cName = this.getAstroCnameDate(t).cName, 
            this.setData({
                astroData: e.data.today,
                astroShow: !0,
                astroIndex: this.astroIndex,
                isAstroShow: !0
            }));
        } else this.getAstroInfoServer(t);
    },
    createShowText: function(t) {
        var e = t, a = Math.round((this.screenWidth - 44) / 15);
        e.length >= 3 * a && (e = e.substring(0, 2 * a - 2), this.screenWidth > 400 && (e = e.substring(0, 2 * a - 3)), 
        e += " …"), this.setData({
            showAstroText: e
        });
    },
    getAstroInfoServer: function(e) {
        var a = this;
        t.request({
            url: this.astroUrl,
            data: {
                starname: e
            }
        }).then(function(i) {
            if (200 === parseInt(i.statusCode, 10)) {
                i.data.astroName = e, i.data.time = a.dateNow.getTime();
                var n = a.getAstroCnameDate(e);
                i.data.data.today.name = e, i.data.data.today.cName = n.cName, i.data.data.today.cDate = n.cDate, 
                a.createShowText(i.data.data.today.xzys), a.astroIndex = a.getAstroCnameDate(e).index, 
                a.setData({
                    astroData: i.data.data.today,
                    astroShow: !0,
                    isAstroShow: !0,
                    astroIndex: a.astroIndex
                }), t.setStorage({
                    key: "wnl_astrodata",
                    data: i.data
                });
            }
        }, function() {});
    },
    getAstroCnameDate: function(t) {
        for (var e = {}, a = 0; a < this.comAstro.length; a++) if (this.comAstro[a][0] === t) return e.index = a, 
        e.cName = this.comAstro[a][1], e.cDate = this.comAstro[a][2].replace(/\./g, "月").replace("-", "日-") + "日", 
        e;
    },
    astroPickerChange: function(t) {
        var e = parseInt(t.detail.value, 10);
        if (e === this.astroIndex) return !1;
        this.setData({
            isAstroShow: !1
        }), this.getAstroInfo(this.comAstro[e][0]);
    },
    pickerTap: function() {},
    astroViewTap: function(e) {
        this.submitToken(e), t.navigateTo({
            url: "../astro/index?name=" + e.currentTarget.dataset.name
        });
    },
    weatherViewTap: function(e) {
        var a;
        this.submitToken(e);
        var i = t.getStorageSync("cityCode");
        i ? (a = i, console.log("citycodeValueStorage" + a), t.navigateTo({
            url: "../weather/index?cityCode=" + i
        })) : t.getStorageSync("firstCode") ? (a = t.getStorageSync("firstCode"), console.log("firstcode" + a), 
        t.navigateTo({
            url: "../weather/index?cityCode=" + a
        })) : t.getStorageSync("beforeCode") ? (a = t.getStorageSync("beforeCode"), console.log("before"), 
        t.navigateTo({
            url: "../weather/index?cityCode=" + a
        })) : console.log(99);
    },
    getMryyInfo: function(a) {
        var i = this;
        t.getStorage({
            key: "wnl_mryydata"
        }).then(function(t) {
            e.formatDate(a, "yyyy-MM-dd") !== t.data.dateString ? i.getMryyInfoServer(a, 1) : i.setData({
                mryyData: t.data.data,
                mryyShow: !0
            });
        }, function() {
            console.log(3333), i.getMryyInfoServer(a, 0);
        });
    },
    getMryyInfoServer: function(a, i) {
        var n = this, o = e.formatDate(a, "yyyy-MM-dd");
        t.GET(this.mryyUrl, {
            date: o,
            cc: "cn",
            deviceType: "IOS"
        }).then(function(e) {
            200 === parseInt(e.statusCode, 10) && "" !== e.data && (e.data.dateString = o, n.setData({
                mryyData: e.data.data,
                mryyShow: !0
            }), t.setStorage({
                key: "wnl_mryydata",
                data: e.data
            }));
        }, function() {
            i && n.setData({
                mryyShow: !0
            });
        });
    },
    mryyViewTap: function() {
        t.navigateTo({
            url: "../mryy/index"
        });
    },
    dayViewTap: function(e) {
        this.submitToken(e), h.globalData.dayViewTap = !0, t.switchTab({
            url: "../lunar/index"
        });
    },
    prevMonthTap: function() {
        this.moveToPrevMonth();
    },
    nextMonthTap: function() {
        this.moveToNextMonth();
    },
    todayTap: function(t) {
        this.submitToken(t), this.swiperToMonth(this.dateNow.getFullYear(), this.dateNow.getMonth(), this.dateNow.getDate()), 
        this.setData({
            isWeatherDateShow: !1
        });
    },
    yjToggleBtn: function(t) {
        this.submitToken(t);
        var e = "" === this.data.animationClass ? "animate-slide-down" : "", a = "择吉日" === this.data.yjBtnTxt ? "收起" : "择吉日";
        if ("择吉日" === a) {
            var i = [];
            this.data.yjTxtStatus.forEach(function() {
                i.push("");
            }), this.monthList.forEach(function(t) {
                t.monthDayList.forEach(function(t) {
                    t.monthClass = t.monthClass.replace(/yi/g, ""), t.monthClass = t.monthClass.trim();
                });
            }), this.currentYjIndex = -1, this.setData({
                yjTxtStatus: i,
                monthList: this.monthList,
                "singleMonthDayObj.monthDayList": this.monthList[1].monthDayList,
                animationClass: e,
                yjBtnTxt: a
            });
        } else this.setData({
            animationClass: e,
            yjBtnTxt: a
        });
    },
    yjSelectTap: function(t) {
        var e = this, a = [], i = t.target.dataset.index;
        this.data.yjTxtStatus.forEach(function(t, n) {
            e.currentYjIndex === i ? a.push("") : n === i ? a.push("active") : a.push("");
        }), this.monthList.forEach(function(t) {
            t.monthDayList.forEach(function(t) {
                if (t.monthClass = t.monthClass.replace(/yi/g, ""), t.monthClass = t.monthClass.trim(), 
                e.currentYjIndex !== i) {
                    var a = e.getYiStatus(t.year, t.month, t.day, e.data.yjTxtList[i]);
                    "" !== a && (t.monthClass += a);
                }
            });
        }), this.currentYjIndex === i ? this.currentYjIndex = -1 : this.currentYjIndex = i, 
        this.setData({
            yjTxtStatus: a,
            monthList: this.monthList,
            "singleMonthDayObj.monthDayList": this.monthList[1].monthDayList
        });
    },
    monthTouchStart: function(t) {
        this.startTimeStamp = t.timeStamp;
        var e = t.touches[0];
        this.startX = e.pageX, this.startY = e.pageY;
    },
    monthTouchMove: function() {},
    monthTouchEnd: function(t) {
        var a = t.changedTouches[0], i = a.pageX, n = a.pageY, o = t.timeStamp, s = e.getSlideDirection(this.startX, this.startY, i, n, o - this.startTimeStamp, Math.floor(h.globalData.windowWidth / 5));
        "left" === s ? this.moveToNextMonth() : "right" === s && this.moveToPrevMonth();
    },
    moveToNextMonth: function() {
        var t = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate());
        if (t.setMonth(t.getMonth() + 1), t > this.maxDate) return !1;
        if (this.isScrolling) return !1;
        this.isScrolling = !0, this.prevViewDate.setDate(1), this.viewDate.setDate(1), this.nextViewDate.setDate(1), 
        this.prevViewDate.setMonth(this.prevViewDate.getMonth() + 1), this.viewDate.setMonth(this.viewDate.getMonth() + 1), 
        this.nextViewDate.setMonth(this.nextViewDate.getMonth() + 1);
        var e = new Date(), a = !0;
        this.viewDate.getMonth() === e.getMonth() && (a = !1), this.setData({
            singleMonthDisplay: "0",
            monthViewDisplay: "1",
            isWeatherDateShow: a
        });
        var i = this.createMonthView(this.nextViewDate.getFullYear(), this.nextViewDate.getMonth(), 1);
        this.betweenMonthChangeAction(i, 1);
    },
    moveToPrevMonth: function() {
        var t = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), this.viewDate.getDate());
        if (t.setMonth(t.getMonth() - 1), t < this.minDate) return !1;
        if (this.isScrolling) return !1;
        this.isScrolling = !0, this.prevViewDate.setDate(1), this.viewDate.setDate(1), this.nextViewDate.setDate(1), 
        this.prevViewDate.setMonth(this.prevViewDate.getMonth() - 1), this.viewDate.setMonth(this.viewDate.getMonth() - 1), 
        this.nextViewDate.setMonth(this.nextViewDate.getMonth() - 1);
        var e = new Date(), a = !0;
        this.viewDate.getMonth() === e.getMonth() && (a = !1), this.setData({
            singleMonthDisplay: "0",
            monthViewDisplay: "1",
            isWeatherDateShow: a
        });
        var i = this.createMonthView(this.prevViewDate.getFullYear(), this.prevViewDate.getMonth(), -1);
        this.betweenMonthChangeAction(i, -1);
    },
    monthItemTap: function(t) {
        var e = parseInt(t.currentTarget.dataset.year), a = parseInt(t.currentTarget.dataset.month), i = parseInt(t.currentTarget.dataset.day), n = new Date(e, a, i);
        this.isNowMonth = !1;
        for (var o = 0; o < this.monthList[1].monthDayList.length; o++) {
            var s = this.monthList[1].monthDayList[o];
            if (s.year === e && s.month === a && s.day === i) {
                if (s.monthClass.indexOf("active") >= 0) return !1;
                if (s.monthClass.indexOf("last") >= 0) {
                    if (n < this.minDate) return !1;
                    this.moveToPrevMonth();
                } else if (s.monthClass.indexOf("next") >= 0) {
                    if (n > this.maxDate) return !1;
                    this.moveToNextMonth();
                } else s.monthClass.indexOf("current") >= 0 && (this.isNowMonth = !0);
            }
        }
        if (this.isNowMonth) {
            var h = this.setMonthItemActive(e, a, i), r = new Date(), l = !0;
            e === r.getFullYear() && a === r.getMonth() && i === r.getDate() && (l = !1), this.setData({
                monthList: this.monthList,
                "singleMonthDayObj.monthDayList": this.monthList[1].monthDayList,
                todayDisaply: h,
                isWeatherDateShow: l
            });
        }
    },
    createMonthView: function(t, e, a) {
        var i = [], n = s = t, o = r = e, s = t, r = e;
        o - 1 < 0 ? (o = 11, n--) : o--, r + 1 > 11 ? (r = 0, s++) : r++;
        var l = new Date(t, e, 1).getDay(), d = new Date(t, e + 1, 0).getDate(), c = Math.ceil((d - (7 - l)) / 7) + 1, g = Math.floor((this.monthViewHeight - this.monthItemWidth * c) / (c - 1)), m = this.monthViewHeight, w = this.monthViewTop;
        h.globalData.windowWidth >= 400 ? (m += 38, w -= 5, g += 9) : h.globalData.windowWidth >= 375 && (m += 10, 
        g += 3);
        for (var D = new Date(n, o + 1, 0).getDate(), u = {}, y = D - l + 1; y <= D; y++) u = this.getDayObj(n, o, y, g, "last"), 
        i.push(u);
        for (var p = 1; p <= d; p++) u = this.getDayObj(t, e, p, g, "current"), i.push(u);
        for (var v = 1; v <= 7 * c - d - l; v++) u = this.getDayObj(s, r, v, g, "next"), 
        i.push(u);
        var f = {
            index: a,
            year: t,
            month: e,
            monthViewHeight: m,
            monthViewTop: w,
            monthDayList: i
        };
        return console.log(f), f;
    },
    getDayObj: function(t, e, a, n, o) {
        var s = {
            index: a,
            year: t,
            month: e,
            day: a,
            width: this.monthItemWidth,
            height: this.monthItemWidth - 1,
            monthItemMarginBottom: n,
            lunarDay: "",
            monthClass: o,
            vacationClass: ""
        }, r = "", l = i.solar2lunar(t, e, a), d = l.lYear, c = l.lMonth, g = l.lDay, m = [];
        h.globalData.festivalData && (m = this.getJieri(d, c, g, t, e, a)), m = m.length > 0 && m[0].P >= 5 ? m : [], 
        l.isTerm && m.push({
            P: 8,
            L: l.Term,
            sterm: !0
        });
        var w = new Date(t, e, a), D = i.getDogDayInfo(w);
        D.length && D.indexOf("第1天") > -1 > 0 && m.push({
            P: 7,
            L: D.substr(0, 2)
        });
        var u = i.getColdInfo(w);
        if (u.length && u.indexOf("第1天") > -1 > 0 && m.push({
            P: 7,
            L: u.substr(0, 2)
        }), 0 === m.length ? r = "初一" === l.IDayCn ? l.IMonthCn : l.IDayCn : (m.sort(function(t, e) {
            return (t = parseInt(t.P, 10)) === (e = parseInt(e.P, 10)) ? 0 : t < e ? 1 : -1;
        }), r = m[0].L || m[0].V, m[0].sterm && (s.monthClass += " jieqi")), s.lunarDay = r, 
        h.globalData.vacationData) {
            var y = t.toString() + (e + 1 < 10 ? "0" + (e + 1) : e + 1) + (a < 10 ? "0" + a : a), p = h.globalData.vacationData[y];
            "1" === p ? s.vacationClass = "xiu" : "2" === p && (s.vacationClass = "ban");
        }
        t === this.viewDate.getFullYear() && e === this.viewDate.getMonth() && a === this.viewDate.getDate() && this.hasParams && (s.monthClass += " active", 
        this.setData({
            todayDisaply: "block"
        })), t === this.dateNow.getFullYear() && e === this.dateNow.getMonth() && a === this.dateNow.getDate() && (s.monthClass += " today active");
        var v = new Date(t, e, a);
        if (6 !== v.getDay() && 0 !== v.getDay() || (s.monthClass += " weekind"), -1 !== this.currentYjIndex) {
            var f = this.getYiStatus(t, e, a, this.data.yjTxtList[this.currentYjIndex]);
            "" !== f && (s.monthClass += f);
        }
        return s;
    },
    getYiStatus: function(t, e, a, n) {
        var o = new Date(t, e, a), h = i.getYJSqlFields(o), r = "-";
        return s && s[h[1] + "-" + h[0]] && (r = s[h[1] + "-" + h[0]].y), r.indexOf(n) > -1 ? " yi" : "";
    },
    betweenMonthChangeAction: function(t, a) {
        var i = this;
        -1 === a ? (this.monthAnimation.translate3d(0, 0, 0).step(), this.setData({
            monthAnimation: this.monthAnimation.export(),
            currentDateString: e.formatDate(this.viewDate, "yyyy年M月")
        }), e.sleep(this.monthDuration).then(function() {
            i.monthList.pop(), i.prevMonthIndex--, i.monthList.unshift({
                index: i.prevMonthIndex,
                year: t.year,
                month: t.month,
                monthViewHeight: t.monthViewHeight,
                monthViewTop: t.monthViewTop,
                monthDayList: t.monthDayList
            }), i.swiperEndAction(a);
        })) : 1 === a && (this.monthAnimation.translate3d(-2 * h.globalData.windowWidth, 0, 0).step(), 
        this.setData({
            monthAnimation: this.monthAnimation.export(),
            currentDateString: e.formatDate(this.viewDate, "yyyy年M月")
        }), e.sleep(this.monthDuration).then(function() {
            i.monthList.shift(), i.nextMonthIndex++, i.monthList.push({
                index: i.nextMonthIndex,
                year: t.year,
                month: t.month,
                monthViewHeight: t.monthViewHeight,
                monthViewTop: t.monthViewTop,
                monthDayList: t.monthDayList
            }), i.swiperEndAction(a);
        }));
    },
    swiperEndAction: function(t) {
        var e = this.monthList[1].year, a = this.monthList[1].month, n = 0, o = {};
        e === this.dateNow.getFullYear() && a === this.dateNow.getMonth() ? n = this.dateNow.getDate() : -1 === t ? n = i.solarDays(this.monthList[1].year, this.monthList[1].month) : 1 === t && (n = 1);
        var s = this.setMonthItemActive(e, a, n);
        this.monthAnimation.translate3d(-h.globalData.windowWidth, 0, 0).step({
            duration: 0
        }), Object.assign(o, {
            singleMonthDayObj: {
                year: e,
                month: a,
                monthViewHeight: this.monthList[1].monthViewHeight,
                monthViewTop: this.monthList[1].monthViewTop,
                monthDayList: this.monthList[1].monthDayList
            },
            singleMonthDisplay: "1",
            monthViewDisplay: "0",
            monthList: this.monthList,
            monthAnimation: this.monthAnimation.export(),
            todayDisaply: s
        }), this.setData(o), this.isScrolling = !1;
    },
    setMonthItemActive: function(t, e, a) {
        for (var i = "bolck", n = 0; n < this.monthList.length; n++) for (var o = this.monthList[n].monthDayList, s = 0; s < o.length; s++) {
            var r = o[s];
            r.monthClass = r.monthClass.replace(" active", "").replace(" today", ""), r.monthClass.indexOf("current") >= 0 && r.year === this.dateNow.getFullYear() && r.month === this.dateNow.getMonth() && r.day === this.dateNow.getDate() && (r.monthClass += " today"), 
            r.monthClass.indexOf("current") >= 0 && r.year === t && r.month === e && r.day === a && (r.monthClass += " active", 
            t === this.dateNow.getFullYear() && e === this.dateNow.getMonth() && a === this.dateNow.getDate() && (r.monthClass.indexOf("today") < 0 && (r.monthClass += " today"), 
            i = "none"));
        }
        return this.viewDate.setDate(a), this.getDayViewData(t, e, a), h.globalData.year = t, 
        h.globalData.month = e, h.globalData.day = a, i;
    },
    getDayViewData: function(t, a, n) {
        var o = new Date(t, a, n), h = {
            year: t,
            month: a,
            day: n,
            festivalDisplay: !1
        }, r = i.solar2lunar(t, a, n), l = r.IMonthCn + r.IDayCn, d = "第" + i.getYearWeek(t, a, n) + "周", c = r.astro;
        h.lunarDayDetail = "农历" + l + " " + d + " " + c;
        var g = r.Animal, m = i.getLunarHourIndex(this.dateNow.getHours()), w = 0, D = new Date(t, a, n);
        0 === m ? (D.setDate(D.getDate() + 1), w = 0) : w = this.dateNow.getHours();
        var u = i.getStemsBranchHourAsString(D, w), y = r.gzYear + "年 " + r.gzMonth + "月 " + r.gzDay + "日 " + u + "时 [属" + g + "] ";
        h.lunarDate = y;
        var p = this.getDayFestivalData(t, a, n);
        h.jiejiari = p.jiejiari, h.festivalDisplay = p.festivalDisplay;
        var v = i.getYJSqlFields(o), f = "-", x = "-";
        s && s[v[1] + "-" + v[0]] && (f = s[v[1] + "-" + v[0]].y, x = s[v[1] + "-" + v[0]].j);
        var S = new Date(t, a, n + 1), M = this.getDayFestivalData(S.getFullYear(), S.getMonth(), S.getDate());
        console.log("nextDayJieqi", M);
        [ "立春", "立夏", "立秋", "立冬", "春分", "夏至", "秋分", "冬至" ].includes(M.jiejiari.substr(0, 2)) && (console.log("四绝四离日"), 
        f = "", x = "大事勿用  结婚  动手术  搬家  开工开业  建房  出行上任  安葬"), h.yi = "" === f ? "-" : f, 
        h.ji = "" === x ? "-" : x, this.setData({
            dayViewObj: h,
            festivalList: h.jiejiari ? h.jiejiari.split(" ") : null
        }), this.title = e.formatDate(o, "yyyy.M.d") + " 周" + i.nStr1[r.nWeek], this.desc = "农历" + l + "，" + r.gzYear + "[" + g + "]年 " + r.gzMonth + "月 " + r.gzDay + "日";
    },
    getDayFestivalData: function(t, e, a) {
        var n = i.solar2lunar(t, e, a), o = n.isTerm ? n.Term : "", s = n.lYear, r = n.lMonth, l = n.lDay, d = [];
        h.globalData.festivalData && (d = this.getJieri(s, r, l, t, e, a));
        var c = new Date(t, e, a), g = i.getDogDayInfo(c);
        g.length > 0 && d.push({
            P: 7,
            V: g
        });
        var m = i.getColdInfo(c);
        m.length > 0 && d.push({
            P: 7,
            V: m
        });
        for (var w = "", D = 0; D < d.length; D++) w += (d[D].V || d[D].L) + " ";
        var u = (o + " " + w).trim();
        return {
            jiejiari: u,
            festivalDisplay: u.length > 1
        };
    },
    getJieri: function(t, e, a, n, o, s) {
        o += 1;
        var r = (e < 10 ? "0" + e : e.toString()) + (a < 10 ? "0" + a : a.toString()), l = (o < 10 ? "0" + o : o.toString()) + (s < 10 ? "0" + s : s.toString()), d = [], c = h.globalData.festivalData.S[l];
        if (c && c.length > 0) for (var g = 0; g < c.length; g++) n >= parseInt(c[g].Y, 10) && d.push(c[g]);
        var m = h.globalData.festivalData.L[r];
        if (m && m.length > 0) for (var w = 0; w < m.length; w++) t >= parseInt(m[w].Y, 10) && d.push(m[w]);
        var D = this.getWeekIndexString(n, o, s), u = h.globalData.festivalData.W[D];
        if (u && u.length > 0) for (var y = 0; y < u.length; y++) n >= parseInt(u[y].Y, 10) && d.push(u[y]);
        return i.isEaster(n, o, s) && d.push({
            P: 5,
            V: "复活节"
        }), d.length > 0 ? (d.sort(function(t, e) {
            return (t = parseInt(t.P, 10)) === (e = parseInt(e.P, 10)) ? 0 : t < e ? 1 : -1;
        }), d) : [];
    },
    getWeekIndexString: function(t, e, a) {
        var i = Math.ceil(a / 7), n = new Date(t, e - 1, a).getDay();
        return (e < 10 ? "0" + e : e.toString()) + i + n;
    },
    swiperToMonth: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.dateNow.getFullYear(), e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.dateNow.getMonth(), a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.isScrolling) return !1;
        this.isScrolling = !0;
        var i = new Date(t, e, 1);
        if (t === this.viewDate.getFullYear() && e === this.viewDate.getMonth()) {
            var n = this.setMonthItemActive(t, e, 0 === a ? this.dateNow.getDate() : a);
            this.setData({
                monthList: this.monthList,
                "singleMonthDayObj.monthDayList": this.monthList[1].monthDayList,
                todayDisaply: n
            }), this.isScrolling = !1;
        } else this.viewDate < i ? this.changeMonthAction(t, e, a, 1) : this.viewDate > i && this.changeMonthAction(t, e, a, -1);
    },
    changeMonthAction: function(t, a, n, o) {
        var s = this;
        this.viewDate = new Date(t, a, n), this.prevViewDate = new Date(t, a, 1), this.prevViewDate.setMonth(this.prevViewDate.getMonth() - 1), 
        this.nextViewDate = new Date(t, a, 1), this.nextViewDate.setMonth(this.nextViewDate.getMonth() + 1), 
        this.setData({
            singleMonthDisplay: "0",
            monthViewDisplay: "1"
        });
        var r = this.createMonthView(t, a, 1);
        this.nextMonthIndex++;
        var l = {
            index: this.nextMonthIndex,
            year: r.year,
            month: r.month,
            monthViewHeight: r.monthViewHeight,
            monthViewTop: r.monthViewTop,
            monthDayList: r.monthDayList
        };
        1 === o ? (this.monthList[2] = l, this.monthAnimation.translate3d(-2 * h.globalData.windowWidth, 0, 0).step()) : (this.monthList[0] = l, 
        this.monthAnimation.translate3d(0, 0, 0).step());
        var d = this.setMonthItemActive(t, a, n);
        this.setData({
            monthAnimation: this.monthAnimation.export(),
            singleMonthDayObj: l,
            currentDateString: t + "年" + (a + 1) + "月",
            todayDisaply: d
        }), e.sleep(this.monthDuration).then(function() {
            t === s.dateNow.getFullYear() && a === s.dateNow.getMonth() ? n = s.dateNow.getDate() : 0 === n && -1 === o ? n = 1 : 0 === n && 1 === o && (n = i.solarDays(s.monthList[1].year, s.monthList[1].month)), 
            s.monthList = [], s.monthList[0] = s.createMonthView(s.prevViewDate.getFullYear(), s.prevViewDate.getMonth(), 0), 
            s.monthList[1] = s.createMonthView(s.viewDate.getFullYear(), s.viewDate.getMonth(), 1), 
            s.monthList[2] = s.createMonthView(s.nextViewDate.getFullYear(), s.nextViewDate.getMonth(), 2);
            var e = s.setMonthItemActive(t, a, n);
            s.monthAnimation.translate3d(-h.globalData.windowWidth, 0, 0).step({
                duration: 0
            }), s.setData({
                singleMonthDisplay: "1",
                monthViewDisplay: "0",
                monthList: s.monthList,
                monthAnimation: s.monthAnimation.export(),
                todayDisaply: e
            }), s.isScrolling = !1;
        });
    },
    routeFortune: function() {
        t.navigateTo({
            url: "../../fortune/pages/index/index"
        });
    },
    toDoudoutu: function(e) {
        t.request({
            url: "https://quickappsys.51wnl-cq.com/exam/api/eventLog/addData",
            contentType: "application/json",
            method: "POST",
            data: {
                tag: "ddt_ad",
                event: e.currentTarget.dataset.type,
                posid: "tutuh5",
                testid: "",
                time: new Date().getTime()
            }
        });
        t.navigateToMiniProgram({
            appId: "wx802bda51f7c3cadb",
            path: "/pages/index/index?inviteCode=".concat("7d47a2a6fdab488ebca5a28371e44781")
        });
    },
    toXingZuo: function() {
        t.navigateToMiniProgram({
            appId: "wx4d1af6f6722c8490",
            path: "/pages/index/index"
        });
    },
    toVideoMoeny: function() {
        t.navigateToMiniProgram({
            appId: "wx237ca197ddf516fc",
            path: "pages/index/index?&ald_media_id=82650&ald_link_key=71ccb33cbdb558e8"
        });
    }
});