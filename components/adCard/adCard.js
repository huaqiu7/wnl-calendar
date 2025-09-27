Component({
    properties: {
        adType: {
            type: String,
            value: "",
            observer: function(e) {
                this.setData({
                    adType: e
                });
            }
        },
        adSource: {
            type: String,
            value: "",
            observer: function(e) {
                this.setData({
                    adSource: e
                });
            }
        },
        adImage: {
            type: String,
            value: "",
            observer: function(e) {
                this.setData({
                    adImage: e
                });
            }
        },
        title: {
            type: String,
            value: "",
            observer: function(e) {
                this.setData({
                    title: e
                });
            }
        },
        desc: {
            type: String,
            value: "",
            observer: function(e) {
                this.setData({
                    desc: e
                });
            }
        }
    },
    data: {
        showType: ""
    },
    ready: function() {
        if (this.properties.adSource && "" !== this.properties.adSource) {
            var e = this.properties.adType;
            "wxad" !== this.properties.adType && (e = this.properties.title && "" !== this.properties.title && this.properties.desc && "" !== this.properties.desc ? "card" : "img"), 
            console.log(e), this.setData({
                showType: e
            });
        }
    },
    methods: {
        dealRoute: function() {
            var e = this.properties.adSource;
            "h5" === this.properties.adType ? wx.navigateTo({
                url: "../webview/webview?url=" + e
            }) : "wxapp" === this.properties.adType && (console.log("wxapp click, id:".concat(this.properties.adSource)), 
            wx.navigateToMiniProgram({
                appId: e,
                path: "pages/index/index",
                envVersion: "release",
                success: function() {}
            }));
        }
    }
});