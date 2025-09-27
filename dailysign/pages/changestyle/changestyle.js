var t = getApp(), e = t.globalData.brand, a = t.globalData.model, i = require("../../utils/enmoth.js");

Page({
    data: {
        item: {},
        current: 0,
        autoplay: !1,
        duration: "300",
        active0: !0,
        active1: !1,
        active2: !1,
        active3: !1,
        active4: !1,
        active5: !1,
        isHuawei: !1
    },
    onLoad: function(t) {
        var e = JSON.parse(t.obj), a = t.index;
        e.enWeek = i.week[e.weekIndex].toUpperCase();
        var n = parseInt(e.month);
        e.enMonth = i.month[n - 1].toUpperCase(), this.setData({
            item: e,
            current: a
        }), console.log("构造后的data"), console.log(this.data.item);
    },
    onShow: function() {
        ("HUAWEI" === e || "huawei" === e || "google" === e || "HONOR" === e || "honor" === e || "Meizu" === e && "PRO 6" === a) && this.setData({
            isHuawei: !0
        });
    },
    onHide: function() {},
    selectStyle: function(t) {
        var e = parseInt(t.currentTarget.dataset.index);
        this.setData({
            active0: 0 === e,
            active1: 1 === e,
            active2: 2 === e,
            active3: 3 === e,
            active4: 4 === e,
            active5: 5 === e,
            current: e
        });
    },
    changeIndex: function(t) {
        var e = t.detail.current;
        this.setData({
            active0: 0 === e,
            active1: 1 === e,
            active2: 2 === e,
            active3: 3 === e,
            active4: 4 === e,
            active5: 5 === e,
            current: e
        });
    },
    select: function() {
        wx.setStorageSync("currentStyle", this.data.current), wx.navigateBack({
            delta: 1
        });
    },
    onShareAppMessage: function(t) {
        "button" === t.from && console.log(t.target);
        var e = this.data.item.dateKey;
        return {
            title: this.data.item.dayText,
            path: "dailysign/pages/index/index?date=".concat(e),
            imageUrl: "",
            success: function() {},
            fail: function() {}
        };
    }
});