var t = [ {
    code: 0,
    name: "晴天"
}, {
    code: 1,
    name: "多云"
}, {
    code: 2,
    name: "阴"
}, {
    code: 4,
    name: "雷雨"
}, {
    code: 5,
    name: "雷雨+冰雹"
}, {
    code: 7,
    name: "小雨"
}, {
    code: 8,
    name: "中雨"
}, {
    code: 10,
    name: "大雨"
}, {
    code: 14,
    name: "雪"
}, {
    code: 18,
    name: "雾"
}, {
    code: 19,
    name: "冻雨"
}, {
    code: 20,
    name: "沙尘"
}, {
    code: 29,
    name: "飓风"
}, {
    code: 19,
    name: "冻鱼"
}, {
    code: 30,
    name: "霾"
}, {
    code: 9999,
    name: "--"
} ];

Page({
    data: {
        info: {},
        temp_info: "",
        temp_num: {},
        tigan: "",
        feng: "",
        shidu: "",
        aqi: "",
        aqi_index: "",
        sunrise: "",
        sunset: "",
        sunSetHour: "",
        sun_position: {},
        lifedata: {},
        xianxing: {},
        hourTemp: [],
        dayInfo: [],
        high: [],
        low: [],
        top1: [],
        top2: [],
        scrollLeft: "",
        canvasImg1: '"',
        canvasImg2: '"'
    },
    scroll: function(t) {
        var e = t.detail.scrollLeft;
        this.setData({
            scrollLeft: e
        });
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    touchStart: function(t) {
        console.log(t);
    },
    touchMove: function(t) {
        console.log(t);
    },
    touchEnd: function(t) {
        console.log(t);
    },
    getMax: function(t) {
        for (var e, n = 0; n < t.length; n++) 0 == n ? e = t[0] : e < t[n] && (e = t[n]);
        return e;
    },
    getMin: function(t) {
        for (var e, n = 0; n < t.length; n++) 0 == n ? e = t[0] : e > t[n] && (e = t[n]);
        return e;
    },
    setCanvasImg: function(t) {
        var e = this;
        wx.canvasToTempFilePath({
            canvasId: t,
            x: 0,
            y: 0,
            width: 2640,
            height: 300,
            destWidth: 2640,
            destHeight: 300,
            success: function(n) {
                console.log(n), "firstCanvas" == t && e.setData({
                    canvasImg1: n.tempFilePath
                }), "secondCanvas" == t && e.setData({
                    canvasImg2: n.tempFilePath
                });
            },
            fail: function(n) {
                console.log(n), setTimeout(function() {
                    e.setCanvasImg(t);
                }, 100);
            }
        });
    },
    getCanvas: function(t, e) {
        var n = this, a = wx.createCanvasContext("firstCanvas");
        a.setLineWidth(6), a.setFillStyle("#ffffff");
        for (var s = [], o = this.getMax(t), r = o - this.getMin(e), i = 60, c = 0, u = Math.floor(300 / r), l = 0; l < t.length; l++) {
            var f = 60 * l + 20, h = (o - t[l]) * Math.floor(100 / r) + 5;
            i = 180 * l + 60, c = (o - t[l]) * u + 15, s.push({
                drawX: f + "px",
                drawY: h - 8 + "px"
            }), 0 == l ? (a.moveTo(i, c), a.arc(i, c, 6, 0, 2 * Math.PI), a.setStrokeStyle("#ffffff"), 
            a.fill()) : (a.lineTo(i, c), a.arc(i, c, 6, 0, 2 * Math.PI), a.setStrokeStyle("#ffffff"));
        }
        return a.stroke(), a.draw(!0, setTimeout(function() {
            n.setCanvasImg("firstCanvas");
        }, 1e3)), s;
    },
    getCanvas2: function(t, e) {
        var n = this, a = wx.createCanvasContext("secondCanvas");
        a.setLineWidth(6), a.setFillStyle("#ffffff");
        for (var s = [], o = this.getMax(t), r = o - this.getMin(e), i = 60, c = 0, u = Math.floor(300 / r), l = 0; l < e.length; l++) {
            var f = 60 * l + 20, h = (o - e[l]) * Math.floor(100 / r);
            i = 180 * l + 60, c = (o - e[l]) * u - 12, s.push({
                drawX: f + "px",
                drawY: h + 30 + "px"
            }), 0 == l ? (a.setStrokeStyle("rgba(255, 255, 255, 0.6)"), a.moveTo(i, c), a.arc(i, c, 6, 0, 2 * Math.PI), 
            a.fill()) : (a.setStrokeStyle("#ffffff"), a.lineTo(i, c), a.arc(i, c, 6, 0, 2 * Math.PI));
        }
        return a.stroke(), a.draw(!0, setTimeout(function() {
            n.setCanvasImg("secondCanvas");
        }, 1e3)), s;
    },
    getCodeInfo: function(e) {
        for (var n = 0; n < t.length; n++) if (e == t[n].code) return t[n].name;
    },
    getDayInfo: function(t) {
        for (var e = [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ], n = [], a = 0; a < t.length; a++) {
            var s = {
                week: e[new Date(t[a].d).getDay()],
                date: t[a].d.substr(5, 2) + "/" + t[a].d.substr(8, 2),
                weather: this.getCodeInfo(t[a].wt),
                icon: "https://www.51wnl.com/wxapp_resource/wnl/weather/nd" + t[a].wt + ".png",
                high_temp: t[a].th + "°",
                low_temp: t[a].tl + "°"
            };
            n.push(s);
        }
        return n;
    },
    getTempIcon: function(t, e, n) {
        console.log("小时温度"), console.log("小时温度==========", o, s, n);
        var a = !1, s = this.str2Int(e.toString().substr(0, 2)), o = this.str2Int(t.toString().substr(0, 2));
        console.log("转换后===============", s, o);
        for (var r = 0; r < n.length; r++) {
            var i = "nd";
            n[r].h >= o && n[r].h <= s || (i = "nn"), 30 == n[r].wt || "30" == n[r].wt ? n[r].wt = "https://www.51wnl.com/wxapp_resource/wnl/weather/nd30.png" : n[r].wt = "https://weather.51wnl.com/pages/wnl_weather_new/weatherIcon_new/" + i + n[r].wt + ".png";
        }
        for (var c = 1; c < n.length; c++) 0 !== n[c].h && "0" !== n[c].h || (a ? n[c].h = "后天0" : (n[c].h = "明天0", 
        a = !0));
        return n;
    },
    getXianXing: function(t, e) {
        var n = "";
        0 != t && "false" != t || (t = !1, n = "hidden");
        var a = "";
        return t && (a = /\d/.test(e[0]) ? 1 === e.length ? "尾号 " + e[0] : "尾号 " + e[0] + " 、" + e[1] : "字母尾数" === e ? "字母尾数" : "不限行"), 
        console.log(t), {
            txt: a,
            flag: t,
            cclass: n
        };
    },
    getPosition: function(t, e) {
        var n = this.str2Int(e.substr(0, 2)), a = this.str2Int(t.substr(0, 2)), s = 60 * n + this.str2Int(e.substr(3)), o = 60 * a + this.str2Int(e.substr(3)), r = new Date(), i = (60 * r.getHours() + r.getMinutes() - o) / (s - o) * 180;
        i = i > 180 ? 180 : i;
        var c = Math.floor(143 - 143 * Math.cos(i * Math.PI / 180));
        return {
            left: c - 12 + "px",
            bottom: Math.round(143 * Math.sin(i * Math.PI / 180)) - 12 + "px",
            width: c + "px"
        };
    },
    getAqiName: function(t, e, n) {
        var a, s;
        return console.log(n + e), "" == t ? (a = n, s = "70px") : (t <= 50 ? (a = t + " |  优", 
        s = "70px") : t > 50 && t <= 100 ? (a = t + " |  良", s = "70px", 100 == t && (s = "70px")) : t > 100 && t <= 150 ? (a = t + " |  轻度污染", 
        s = "130px") : t > 150 && t <= 200 ? (a = t + " |  中度污染", s = "130px") : t > 200 && t <= 300 ? (a = t + " |  重度污染", 
        s = "130px") : a = t + " |  严重污染", 100 == t && (s = "80px")), console.log({
            aqiText: a,
            aqiWidth: s
        }), {
            aqiText: a,
            aqiWidth: s
        };
    },
    getNum: function(t) {
        var e = !1;
        (t = t.toString()).indexOf("-") > -1 && (t = t.split("-")[1], e = !0);
        var n = t.substr(0, 1), a = "";
        return t.length > 1 && (a = t.substr(1, 1)), {
            temp_num_1: "num" + n,
            temp_num_2: "num" + a,
            temp_num_fu: e
        };
    },
    str2Int: function(t) {
        return 0 === (t = t.replace(/^0+/g, "")).length ? 0 : parseInt(t);
    },
    getSunSetHour: function(t) {
        var e = 60 * this.str2Int(t.substr(0, 2)) + this.str2Int(t.substr(3)), n = new Date(), a = 60 * n.getHours() + n.getMinutes(), s = Math.floor((e - a) / 60), o = (e - a) % 60;
        return console.log(s, o), s <= 0 && o < 0 ? (this.setData({
            hasSunset: !0
        }), "") : "离日落还有" + s + "小时" + (e - a) % 60 + "分";
    },
    onLoad: function(t) {
        var e = t.cityCode;
        console.log(t.cityCode);
        var n = this;
        wx.request({
            url: "https://apic.51wnl.com/CttApi/GetWeatherDetail?tkn=6480F2A608958030D190E9E62590174A&cid=Youloft_IOS&av=4.5.9&mac=00:11:22:33:44:55&did=b622c089e7e14d2c2fa8c9129dafbb51&chn=wnl_anzhi&cc=CN&lang=zh&bd=com.youloft.calendar&t=1430366273&cver=6.0&lasttimestamp=&model=iphone&cardId=78&sign=66069614e98aba9d07b1ad26d94e2450",
            dataType: "json",
            data: {
                cityCode: e
            },
            success: function(t) {
                var e = t.data.data;
                console.log(t);
                for (var a = [], s = [], o = 0; o < e.fcd.length; o++) a.push(e.fcd[o].th);
                for (var r = 0; r < e.fcd.length; r++) s.push(e.fcd[r].tl);
                n.setData({
                    lifedata: {
                        chuanyi: e.curr.dressing.desc,
                        ganmao: e.curr.coldRisk.desc,
                        yundong: e.curr.sport.desc
                    }
                }), n.setData({
                    top1: n.getCanvas(a, s),
                    top2: n.getCanvas2(a, s)
                }), n.setData({
                    info: e,
                    temp_info: n.getCodeInfo(e.curr.wt),
                    temp_num: n.getNum(e.curr.ct),
                    tigan: "体感" + e.curr.st + "°",
                    feng: e.curr.wd + e.curr.wl + "级",
                    shidu: e.curr.rh + "%",
                    aqi_index: e.aqi.index,
                    aqi: n.getAqiName(e.aqi.index, e.aqi.pm25, e.aqi.grade),
                    xianxing: n.getXianXing(e.limit.hasResult, e.limit.ln),
                    sunrise: e.sun.sr,
                    sunset: e.sun.ss,
                    sunSetHour: n.getSunSetHour(e.sun.ss),
                    sun_position: n.getPosition(e.sun.sr, e.sun.ss),
                    hourTemp: n.getTempIcon(e.sun.sr, e.sun.ss, e.fch),
                    dayInfo: n.getDayInfo(e.fcd),
                    high: a,
                    low: s
                });
            }
        });
    }
});