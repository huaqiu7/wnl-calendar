var t = require("../toast/toast.js"), e = require("../../utils/createpic.js"), a = require("../../utils/enmoth.js"), s = getApp(), o = s.globalData.Proportion, l = s.globalData.system, n = s.globalData.brand, i = s.globalData.model;

Page({
    data: {
        item: [],
        style0: !0,
        style1: !1,
        style2: !1,
        style3: !1,
        style4: !1,
        style5: !1,
        showLoading: !1,
        current: 0,
        currStyle: 0,
        isHuawei: !1,
        cw: 690 * o,
        ch: 920 * o
    },
    onLoad: function(e) {
        new t.ToastPannel();
        var s = JSON.parse(decodeURIComponent(e.obj));
        s.enWeek = a.week[s.weekIndex].toUpperCase();
        var o = parseInt(s.month - 1);
        s.enMonth = a.month[o].toUpperCase();
        var l = parseInt(e.style), n = parseInt(e.current);
        console.log(l), this.setData({
            style0: 0 === l,
            style1: 1 === l,
            style2: 2 === l,
            style3: 3 === l,
            style4: 4 === l,
            style5: 5 === l,
            item: s,
            current: n,
            currStyle: l
        }), console.log(s);
    },
    onShow: function() {
        var t = wx.getStorageSync("currentStyle");
        "" === t && (t = this.data.currStyle), ("HUAWEI" === n || "huawei" === n || "google" === n || "HONOR" == n || "honor" == n || "Meizu" === n && "PRO 6" === i) && this.setData({
            isHuawei: !0
        }), this.setData({
            style0: 0 === t,
            style1: 1 === t,
            style2: 2 === t,
            style3: 3 === t,
            style4: 4 === t,
            style5: 5 === t,
            currStyle: t
        });
    },
    saveSign: function() {
        var t = this;
        this.setData({
            showLoading: !0
        });
        var a = wx.createCanvasContext("style0");
        this.data.style0 && e.drawStyle0(t, a, o), this.data.style1 && e.drawStyle1(t, a, o), 
        this.data.style2 && e.drawStyle2(t, a, o), this.data.style3 && e.drawStyle3(t, a, o), 
        this.data.style4 && e.drawStyle4(t, a, o), this.data.style5 && e.drawStyle5(t, a, o), 
        setTimeout(function() {
            t.saveImage("style0");
        }, 2500);
    },
    saveImage: function(t) {
        var e = this;
        wx.canvasToTempFilePath({
            canvasId: t,
            success: function(t) {
                console.log(t.tempFilePath), wx.saveImageToPhotosAlbum({
                    filePath: t.tempFilePath,
                    success: function() {
                        e.show("日签已保存到本地");
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
    onShareAppMessage: function(t) {
        var e = this;
        "button" === t.from && console.log(t.target);
        var a = e.data.item.dateKey;
        return {
            title: e.data.item.dayText,
            path: "dailysign/pages/index/index?date=".concat(a),
            imageUrl: "",
            success: function() {
                "Android" !== l && e.show("分享成功");
            },
            fail: function() {}
        };
    },
    switchStyle: function() {
        wx.navigateTo({
            url: "../changestyle/changestyle?obj=" + JSON.stringify(this.data.item) + "&index=" + this.data.currStyle
        });
    }
});