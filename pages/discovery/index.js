var e = require("../../utils/api");

Page({
    data: {
        copyright: "Copyright © 2010-2018 Calendar. All Rights Reserved."
    },
    title: "适合中国人的日历应用",
    desc: "",
    onShareAppMessage: function() {
        return {
            title: this.title,
            desc: this.desc,
            path: "/pages/discovery/index"
        };
    },
    qrcodeTap: function() {
        e.previewImage({
            urls: [ "http://www.51wnl.com/wxapp_resource/wnl/QRCARD.jpg" ]
        });
    },
    onLoad: function() {
        var e = new Date().getFullYear();
        this.setData({
            copyright: "Copyright © 2010-" + e + " Calendar. All Rights Reserved."
        });
    }
});