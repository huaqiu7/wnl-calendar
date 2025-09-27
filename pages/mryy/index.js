var t = require("../../utils/api"), a = require("../../utils/util"), i = t.app;

Page({
    data: {
        imgUrl: "",
        imgWidth: 0,
        imgHeight: 0,
        dayNum: "",
        dayString: "",
        mryyTxt: "",
        mryyTxtClass: ""
    },
    title: "",
    desc: "",
    mryyDownUrl: "https://qiniubckimg.cq-wnl.com/",
    mryyUrl: "https://www.51wnl.com/Api4.3.3/GetSentenceByDate.ashx",
    txtWidth: 0,
    onReady: function() {
        this.txtWidth = i.globalData.windowWidth - 53;
        var t = new Date(), a = t.getMonth() + 1, e = t.getDate();
        this.setData({
            imgWidth: i.globalData.windowWidth,
            imgHeight: "ios" === i.globalData.platform ? i.globalData.windowHeight + 48 : i.globalData.windowHeight + 6,
            dayNum: e < 10 ? "0" + e : e,
            dayString: [ "JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC" ][a - 1] + "." + [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ][t.getDay()].toUpperCase()
        }), this.getMryyInfo(t), i.globalData.windowWidth <= 320 ? i.globalData.windowHeight + 56 < 480 ? this.mryyDownUrl += i.globalData.windowWidth * i.globalData.pixelRatio + "x960/" : this.mryyDownUrl += i.globalData.windowWidth * i.globalData.pixelRatio + "x1136/" : 360 === i.globalData.windowWidth ? 3 === i.globalData.pixelRatio ? this.mryyDownUrl += i.globalData.windowWidth * i.globalData.pixelRatio + "x1920/" : this.mryyDownUrl += i.globalData.windowWidth * i.globalData.pixelRatio + "x1280/" : 375 === i.globalData.windowWidth ? this.mryyDownUrl += i.globalData.windowWidth * i.globalData.pixelRatio + "x1334/" : 414 === i.globalData.windowWidth ? this.mryyDownUrl += i.globalData.windowWidth * i.globalData.pixelRatio + "x2208/" : this.mryyDownUrl += "1080x1920/";
    },
    onShareAppMessage: function() {
        return {
            title: this.title,
            desc: this.desc,
            path: "/pages/mryy/index"
        };
    },
    getMryyInfo: function(i) {
        var e = this;
        t.getStorage({
            key: "wnl_mryydata"
        }).then(function(t) {
            var l = a.formatDate(i, "yyyy-MM-dd");
            if (l !== t.data.dateString) e.getMryyInfoServer(l, 1); else {
                var o = Math.floor(e.txtWidth / 18), d = "";
                t.data.data.s.length > o && (d = "multiple_line"), e.mryyDownUrl += t.data.data.largeImg.substr(t.data.data.largeImg.lastIndexOf("/") + 1), 
                e.setData({
                    imgUrl: t.data.data.largeImg,
                    mryyTxt: t.data.data.s,
                    mryyTxtClass: d
                }), e.title = e.desc = t.data.data.s;
            }
        }, function() {
            e.getMryyInfoServer(i, 0);
        });
    },
    getMryyInfoServer: function(i) {
        var e = this, l = a.formatDate(i, "yyyy-MM-dd");
        t.request({
            url: this.mryyUrl,
            data: {
                date: l,
                cc: "cn",
                deviceType: "IOS"
            }
        }).then(function(a) {
            if (parseInt(a.statusCode, 10) && "" !== a.data) {
                a.data.dateString = l;
                var i = Math.floor(e.txtWidth / 18), o = "";
                a.data.data.s.length > i && (o = "multiple_line"), e.mryyDownUrl += a.data.data.largeImg.substr(a.data.data.largeImg.lastIndexOf("/") + 1), 
                e.setData({
                    imgUrl: a.data.data.largeImg,
                    mryyTxt: a.data.data.s,
                    mryyTxtClass: o
                }), t.setStorage({
                    key: "wnl_mryydata",
                    data: a.data
                }), e.title = e.desc = a.data.data.s;
            }
        });
    },
    mryyLongTap: function() {
        var a = this;
        t.showActionSheet({
            itemList: [ "保存图片" ]
        }).then(function(i) {
            i.cancel || 0 === i.tapIndex && t.downloadFile({
                url: a.mryyDownUrl
            }).then(function(a) {
                console.log(a), t.saveFile({
                    tempFilePath: a.tempFilePath
                }).then(function(a) {
                    console.log(a), t.showToast({
                        title: "保存成功",
                        icon: "success",
                        duration: 2e3
                    });
                });
            }, function(t) {
                console.log(t);
            });
        });
    }
});