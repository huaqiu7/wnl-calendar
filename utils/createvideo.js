module.exports = {
    createVideo: function(o) {
        var n, e = o.adUnitId, t = o.success, i = o.fail;
        return function() {
            wx.showLoading({
                title: "正在创建视频",
                mask: !0
            }), n ? (wx.hideLoading(), n.show()) : ((n = wx.createRewardedVideoAd({
                adUnitId: e
            })).onLoad(function(o) {
                console.log("激励视频onLoad");
            }), n.onError(function() {
                wx.hideLoading && wx.hideLoading(), console.log("激励视频onError"), i && i();
            }), n.onClose(function(o) {
                console.log("激励视频播放完成", o), o.isEnded && t && t();
            }), n.load().then(function() {
                wx.hideLoading(), n.show();
            }));
        };
    },
    createInterstitial: function(o) {
        var n = o.adUnitId, e = 0;
        if (wx.createInterstitialAd) {
            var t = wx.createInterstitialAd({
                adUnitId: n
            });
            return t.onLoad(function() {
                console.log("插屏onLoad"), t.show();
            }), t.onError(function() {
                console.log("插屏onError"), ++e <= 1 && t.load().then(function() {
                    t.show();
                });
            }), t;
        }
    }
};