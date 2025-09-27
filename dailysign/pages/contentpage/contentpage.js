var t = 0, a = !1;

Page({
    data: {
        htmlText: "",
        htmlHeard: "",
        currDate: new Date(),
        dataKey: "",
        contentList: [],
        hasMore: !1,
        cid: "",
        unitids: [ "adunit-e91ff8f488cb50dc", "adunit-cbf6855acbd06315", "adunit-fbb4f3db3a860a5d", "adunit-0eea92e6c5d1aae0", "adunit-9169488258a34c6d", "adunit-7db0adf68c7b301a" ]
    },
    onLoad: function(t) {
        var a = t.detailid, e = t.dateKey;
        this.setData({
            cid: a,
            dateKey: e
        }), this.bindData(a, e);
    },
    bindData: function(a, e) {
        t = 0, this.setData({
            htmlText: "",
            htmlHeard: "",
            contentList: [],
            hasMore: !1,
            dataKey: e,
            currDate: this.convertDateFromStringfunction(e),
            title: ""
        });
        var i = this;
        wx.request({
            url: "https://service.51wnl.com/Api/SignEvDay/Detail",
            data: {
                DetailID: a
            },
            header: {
                "content-type": "application/json"
            },
            method: "GET",
            dataType: "xml/json/script/html",
            responseType: "text",
            success: function(t) {
                var a = JSON.parse(t.data), e = a.data.content, n = e.indexOf('<div class="i-content-inner clearfix" fontsizetype="1">'), s = "";
                n > 0 && (s = e.substring(0, n), e = e.substring(n)), s = s.replace(/<h1>/g, "<h1 class='h1'>").replace(/<p>/g, "<p class='p'>").replace(/<img/g, "<img class='img'").replace('<a href="javascript:;" class="i-small" stat="WnlDetailSmallFontClick">A<i>-</i><a href="javascript:;" class="i-big" stat="WnlDetailBigFontClick">A<i>+</i></a>', ""), 
                e = e.replace(/<h1>/g, "<h1 class='h1'>").replace(/<p>/g, "<p class='p'>").replace(/<img/g, "<img class='img'").replace('<a href="javascript:;" class="i-small" stat="WnlDetailSmallFontClick">A<i>-</i><a href="javascript:;" class="i-big" stat="WnlDetailBigFontClick">A<i>+</i></a>', ""), 
                i.setData({
                    htmlText: "<div class='wnl-aritle'><div class='i-content'>" + e + "</div></div>",
                    htmlHeard: "<div class='wnl-aritle'><div class='i-content'>" + s + "</div></div>",
                    title: a.data
                });
            }
        }), this.getHistory(t);
    },
    getHistory: function(t) {
        if (!a) {
            console.log("发起请求 page=" + t), a = !0;
            var e = this.addDate(this.data.currDate, -(5 + 5 * t)), i = this.addDate(this.data.currDate, -(5 * t + 1)), n = this;
            wx.request({
                url: "https://service.51wnl.com/Api/SignEvDay/His",
                data: {
                    datekey: e,
                    enddatekey: i
                },
                header: {
                    "content-type": "application/json"
                },
                method: "GET",
                dataType: "xml/json/script/html",
                responseType: "text",
                success: function(t) {
                    var a = JSON.parse(t.data).data;
                    for (var e in a) {
                        var i = a[e].img;
                        i && (a[e].imgs = i.split(","));
                    }
                    var s = n.data.contentList.concat(a);
                    n.setData({
                        contentList: s,
                        hasMore: a.length > 0
                    });
                },
                complete: function() {
                    a = !1;
                }
            });
        }
    },
    showMore: function() {},
    onItemClick: function(t) {
        var a = t.currentTarget.dataset.detailid, e = t.currentTarget.dataset.datekey;
        wx.navigateTo({
            url: "../contentpage/contentpage?detailid=" + a + "&dateKey=" + e
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.data.hasMore && (t += 1, this.getHistory(t));
    },
    onShareAppMessage: function() {
        var t = this;
        return {
            title: "".concat(t.data.title.title),
            desc: t.data.title.title,
            imageUrl: "",
            path: "dailysign/pages/contentpage/contentpage?detailid=" + t.data.cid + "&dateKey=" + t.data.dateKey,
            success: function() {
                t.show("分享成功");
            }
        };
    },
    addDate: function(t, a) {
        null != a && "" != a || (a = 1);
        var e = new Date(t);
        e.setDate(e.getDate() + a);
        var i = e.getMonth() + 1, n = e.getDate();
        return e.getFullYear() + "-" + this.getFormatDate(i) + "-" + this.getFormatDate(n);
    },
    getFormatDate: function(t) {
        if (null == t || "" == t) return "";
        var a = t + "";
        return a.length < 2 && (a = "0" + a), a;
    },
    convertDateFromStringfunction: function(t) {
        if (t) {
            var a = t.split(/[- : \/]/);
            return new Date(a[0], a[1] - 1, a[2]);
        }
    }
});