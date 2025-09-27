Page({
    data: {
        url: ""
    },
    onLoad: function(n) {
        var o = n.detailid, t = n.dateKey;
        console.log(o);
        var e = "https://mobile.51wnl.com/temporary/signcontent/daycontent.html?detailid=" + o + "&dateKey=" + t;
        this.setData({
            url: e
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});