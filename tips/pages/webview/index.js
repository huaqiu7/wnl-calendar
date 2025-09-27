Page({
    data: {
        src: ""
    },
    onLoad: function(n) {
        this.setData({
            src: decodeURIComponent(n.url)
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