var a = require("@babel/runtime/helpers/interopRequireDefault")(require("./adConfig")), t = require("./utils/api"), e = require("./utils/util"), o = require("./utils/eventNotify"), n = require("./data/festival"), i = require("./data/vacation");

App({
    globalData: {
        currentStyle: 0,
        Proportion: 0,
        system: "",
        brand: "",
        scene: 0,
        adConfigData: {},
        fortuneVideoAd: "adunit-df287c05332593ba",
        interstitialAd: {
            home: "adunit-a7257d07069e3529",
            fortune: "adunit-f4c81ac82ea609dc",
            dailysign: "adunit-9188916cfe344183"
        }
    },
    allConfigUrl: "https://www.51wnl.com/WxProgram/GetAllConfig.ashx?appid=ios-wnl-free&appver=2&lastupdate=",
    onShow: function(a) {
        this.globalData.scene = a.scene, console.log("场景值：=====", a.scene);
    },
    onLaunch: function() {
        var a = this;
        this.getUserInfo(), this.getDeviceInfo(), this.globalData.setAd = this.setAd, t.getStorage({
            key: "wnl_allconfigdata"
        }).then(function(t) {
            a.globalData.festivalData = JSON.parse(e.base64decode(t.data.Festival_ZH_CN)), a.globalData.vacationData = JSON.parse(e.base64decode(t.data.Vocation_ZH_CN)), 
            t.data.r && (a.allConfigUrl += t.data.r), a.getAllConfigData(a.allConfigUrl);
        }, function() {
            a.globalData.festivalData = n, a.globalData.vacationData = i, a.getAllConfigData(a.allConfigUrl);
        }), Object.assign || (Object.assign = require("./utils/object-assign"));
    },
    getAdConfig: function() {
        var e = this;
        return new Promise(function(o, n) {
            t.request({
                url: "https://mobile.51wnl-cq.com/wxapp_resource/wxapp_wnl/adConfig.json?" + Math.random(),
                method: "GET"
            }).then(function(t) {
                var n = t.data || a.default;
                console.log("adConfigData", n), e.globalData.adConfigData = n, o(n);
            });
        });
    },
    getUserInfo: function() {
        var a = this;
        t.getStorage({
            key: "openId"
        }).then(function(t) {
            a.globalData.openId = t.data;
        }, function() {
            a.getOpenIdFromServer();
        });
    },
    getOpenIdFromServer: function() {
        var a = this;
        t.login().then(function(e) {
            t.GET("https://b.cqyouloft.com/atcapi/WeChat/GetMiniProgramUserInfo?name=wnlminapp&code=".concat(e.code)).then(function(e) {
                console.log(e), a.globalData.openId = e.data.OpenID, t.setStorage({
                    key: "openId",
                    data: e.data.OpenID
                });
            });
        });
    },
    setAd: function(a, t) {
        for (var e = [], o = 0; o < a; o++) e.push({
            adIndex: o + 1,
            show: !1
        });
        var n = null;
        "wnl" === t ? n = this.globalData.wnl_ad : "hl" === t ? n = this.globalData.hl_ad : "jr" === t && (n = this.globalData.jr_ad);
        for (var i = 0; i < n.length; i++) for (var l = 0; l < e.length; l++) e[l].adIndex === parseInt(n[i]) && (e[l].show = !0);
        return e;
    },
    getDeviceInfo: function() {
        var a = this;
        t.getSystemInfo().then(function(e) {
            a.globalData.windowWidth = e.windowWidth, a.globalData.windowHeight = e.windowHeight, 
            a.globalData.model = e.model, a.globalData.pixelRatio = e.pixelRatio, a.globalData.Proportion = e.windowWidth / 750, 
            a.globalData.system = e.system.split(" ")[0], a.globalData.brand = e.brand, t.app.globalData.model.toLowerCase().match(/iphone|ipad|ipod/i) && (a.globalData.platform = "ios"), 
            o.post("deviceOk", {
                text: "ok"
            });
        });
    },
    getAllConfigData: function(a) {
        var o = this;
        t.GET(a).then(function(a) {
            200 === parseInt(a.statusCode, 10) && void 0 !== a.data.msg.Festival_ZH_CN && void 0 !== a.data.msg.Vocation_ZH_CN && (o.globalData.festivalData = JSON.parse(e.base64decode(a.data.msg.Festival_ZH_CN)), 
            o.globalData.vacationData = JSON.parse(e.base64decode(a.data.msg.Vocation_ZH_CN)), 
            t.setStorage({
                key: "wnl_allconfigdata",
                data: {
                    Festival_ZH_CN: a.data.msg.Festival_ZH_CN,
                    Vocation_ZH_CN: a.data.msg.Vocation_ZH_CN,
                    r: a.data.r
                }
            }));
        });
    }
});