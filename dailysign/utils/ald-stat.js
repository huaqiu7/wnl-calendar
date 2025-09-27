var t = require("../../@babel/runtime/helpers/typeof");

!function() {
    var a = "6.1.2", s = require("./ald-stat-conf.js"), e = 0, n = 0, o = 0, r = 0;
    function _(t) {
        var a = "";
        try {
            a = wx.getStorageSync("aldstat_uuid");
        } catch (t) {
            a = "uuid-getstoragesync";
        }
        if (!a) {
            a = "" + Date.now() + Math.floor(1e7 * Math.random());
            try {
                wx.setStorageSync("aldstat_uuid", a);
            } catch (t) {
                wx.setStorageSync("aldstat_uuid", "uuid-getstoragesync");
            }
            t.aldstat_is_first_open = !0;
        }
        return a;
    }
    function i() {
        wx.request({
            url: "https://log.aldwx.com/config/app.json",
            header: {
                AldStat: "MiniApp-Stat"
            },
            method: "GET",
            success: function(t) {
                if (200 === t.statusCode) for (var a in t.data) wx.setStorageSync(a, t.data[a]);
            }
        });
    }
    function l(t, a, s) {
        if (t[a]) {
            var e = t[a];
            t[a] = function(t) {
                s.call(this, t, a), e.call(this, t);
            };
        } else t[a] = function(t) {
            s.call(this, t, a);
        };
    }
    var d = function(t) {
        wx.getSetting && wx.getSetting({
            success: function(a) {
                a.authSetting["scope.userInfo"] && wx.getUserInfo({
                    withCredentials: !1,
                    success: function(a) {
                        t(a);
                    }
                });
            }
        });
    }, c = function(t, a, s) {
        void 0 === arguments[1] && (a = "GET"), void 0 === arguments[2] && (s = "d.html");
        var n = 0, o = function o() {
            e += 1, t.rq_c = e, wx.request({
                url: "https://log.aldwx.com/" + s,
                data: t,
                header: {
                    AldStat: "MiniApp-Stat"
                },
                method: a,
                success: function() {},
                fail: function() {
                    n < 2 && (n++, t.retryTimes = n, o());
                }
            });
        };
        o();
    }, u = function(t, e, n, o) {
        var r = {
            ak: s.app_key,
            uu: _(t),
            at: t.aldstat_access_token,
            st: Date.now(),
            tp: n,
            ev: e,
            v: a
        };
        o && (r.ct = o), t.aldstat_qr && (r.qr = t.aldstat_qr), c(r, "GET", "d.html");
    }, h = function(t, e, n, o) {
        void 0 === t.aldstat_showoption && (t.aldstat_showoption = {});
        var r = {
            ak: s.app_key,
            wsr: t.aldstat_showoption,
            uu: _(t),
            at: t.aldstat_access_token,
            st: Date.now(),
            tp: n,
            ev: e,
            nt: t.aldstat_network_type,
            pm: t.aldstat_phone_model,
            pr: t.aldstat_pixel_ratio,
            ww: t.aldstat_window_width,
            wh: t.aldstat_window_height,
            lang: t.aldstat_language,
            wv: t.aldstat_wechat_version,
            lat: t.aldstat_lat,
            lng: t.aldstat_lng,
            spd: t.aldstat_speed,
            v: a
        };
        o && (r.ct = o), t.aldstat_location_name && (r.ln = t.aldstat_location_name), t.aldstat_src && (r.sr = t.aldstat_src), 
        t.aldstat_qr && (r.qr = t.aldstat_qr), c(r, "GET", "d.html");
    };
    function p(t) {
        this.app = t;
    }
    p.prototype.debug = function(t) {
        h(this.app, "debug", 0, t);
    }, p.prototype.warn = function(t) {
        h(this.app, "debug", 1, t);
    }, p.prototype.error = function(t) {
        u(this.app, "debug", 2, t);
    }, p.prototype.sendEvent = function(a, s) {
        if (!x(a)) return !1;
        if (a.length >= 255) return !1;
        if ("object" === t(s)) {
            for (var e in s) {
                if (!x(e)) return !1;
                if ("object" == t(s[e])) return !1;
                if (!x(s[e])) return !1;
            }
            h(this.app, "event", a, JSON.stringify(s));
        } else if ("string" == typeof s && s.length <= 255) {
            if (x(s)) {
                var n = String(s);
                new Object()[n] = s, h(this.app, "event", a, s);
            }
        } else h(this.app, "event", a, !1);
    };
    var g = function() {
        var t = this;
        t.aldstat_duration += Date.now() - t.aldstat_showtime, y(t, "app", "unLaunch");
    }, f = function(t, a, s) {
        void 0 !== wx.getShareInfo ? wx.getShareInfo({
            shareTicket: a,
            success: function(a) {
                h(t, "event", "ald_share_" + s, JSON.stringify(a));
            },
            fail: function() {
                h(t, "event", "ald_share_" + s, "1");
            }
        }) : h(t, "event", "ald_share_" + s, "1");
    }, w = function(t) {
        i(), this.aldstat = new p(this);
        var a = "";
        try {
            a = wx.getStorageSync("aldstat_src");
        } catch (t) {
            a = "uuid-getstoragesync";
        }
        a && (this.aldstat_src = a);
        var e = _(this);
        this.aldstat_uuid = e, this.aldstat_timestamp = Date.now(), this.aldstat_showtime = Date.now(), 
        this.aldstat_duration = 0;
        var n = this;
        n.aldstat_error_count = 0, n.aldstat_page_count = 1, n.aldstat_first_page = 0, this.aldstat_showoption = void 0 !== t ? t : {};
        var o = function() {
            wx.getSystemInfo({
                success: function(t) {
                    n.aldstat_vsdk_version = void 0 === t.SDKVersion ? "1.0.0" : t.SDKVersion, n.aldstat_phone_model = t.model, 
                    n.aldstat_pixel_ratio = t.pixelRatio, n.aldstat_window_width = t.windowWidth, n.aldstat_window_height = t.windowHeight, 
                    n.aldstat_language = t.language, n.aldstat_wechat_version = t.version, n.aldstat_sv = t.system, 
                    n.aldstat_wvv = t.platform;
                },
                complete: function() {
                    s.getLocation && l(), r();
                }
            });
        }, r = function() {
            d(function(t) {
                var a = "";
                try {
                    a = wx.getStorageSync("aldstat_uuid");
                } catch (t) {
                    a = "uuid-getstoragesync";
                }
                t.userInfo.uu = a, t, c(t.userInfo, "GET", "u.html");
            });
        }, l = function() {
            wx.getLocation({
                type: "wgs84",
                success: function(t) {
                    n.aldstat_lat = t.latitude, n.aldstat_lng = t.longitude, n.aldstat_speed = t.speed;
                }
            });
        };
        wx.getNetworkType({
            success: function(t) {
                n.aldstat_network_type = t.networkType;
            },
            complete: o
        });
        var u = "";
        try {
            u = wx.getStorageSync("app_session_key_create_launch_upload");
        } catch (t) {
            u = "";
        }
        u ? u > 0 && "number" == typeof u && (n.aldstat_access_token = "" + Date.now() + Math.floor(1e7 * Math.random())) : n.aldstat_access_token = "" + Date.now() + Math.floor(1e7 * Math.random()), 
        y(n, "app", "launch");
    }, v = function(t, a) {
        void 0 === this.aldstat_error_count ? this.aldstat_error_count = 1 : this.aldstat_error_count++, 
        h(this, "event", "ald_error_message", JSON.stringify(t));
    }, y = function(t, e, i) {
        var l = "";
        try {
            l = wx.getStorageSync("app_" + i + "_upload");
        } catch (t) {
            l = "";
        }
        if ((l || "launch" === i) && !(l < 1 && "number" == typeof l)) {
            void 0 === t.aldstat_timestamp && (t.aldstat_timestamp = Date.now());
            var d = wx.getSystemInfoSync();
            t.aldstat_vsdk_version = void 0 === d.SDKVersion ? "1.0.0" : d.SDKVersion, t.aldstat_phone_model = d.model, 
            t.aldstat_pixel_ratio = d.pixelRatio, t.aldstat_window_width = d.windowWidth, t.aldstat_window_height = d.windowHeight, 
            t.aldstat_language = d.language, t.aldstat_sv = d.system, t.aldstat_wvv = d.platform;
            var u = {
                ak: s.app_key,
                waid: s.appid,
                wst: s.appsecret,
                uu: _(t),
                at: t.aldstat_access_token,
                wsr: t.aldstat_showoption,
                st: t.aldstat_timestamp,
                dr: t.aldstat_duration,
                et: Date.now(),
                pc: t.aldstat_page_count,
                fp: t.aldstat_first_page,
                lp: t.aldstat_last_page,
                life: i,
                ec: t.aldstat_error_count,
                nt: t.aldstat_network_type,
                pm: t.aldstat_phone_model,
                wsdk: t.aldstat_vsdk_version,
                pr: t.aldstat_pixel_ratio,
                ww: t.aldstat_window_width,
                wh: t.aldstat_window_height,
                lang: t.aldstat_language,
                wv: t.aldstat_wechat_version,
                lat: t.aldstat_lat,
                lng: t.aldstat_lng,
                spd: t.aldstat_speed,
                v: a,
                ev: e,
                sv: t.aldstat_sv,
                wvv: t.aldstat_wvv
            };
            "launch" === i ? n += 1 : "show" === i ? o += 1 : r += 1, u.la_c = n, u.as_c = o, 
            u.ah_c = r, t.page_share_count && "number" == typeof t.page_share_count && (u.sc = t.page_share_count), 
            t.aldstat_is_first_open && (u.ifo = "true"), t.aldstat_location_name && (u.ln = t.aldstat_location_name), 
            t.aldstat_src && (u.sr = t.aldstat_src), t.aldstat_qr && (u.qr = t.aldstat_qr), 
            t.ald_share_src && (u.usr = t.ald_share_src), c(u, "GET", "d.html");
        }
    }, S = function(t) {
        this.aldstat_showtime = Date.now(), this.aldstat_showoption = void 0 !== t ? t : {};
        var a = "";
        try {
            a = wx.getStorageSync("app_session_key_create_show_upload");
        } catch (t) {
            a = "";
        }
        a && a > 0 && "number" == typeof a && (this.aldstat_access_token = "" + Date.now() + Math.floor(1e7 * Math.random())), 
        y(this, "app", "show"), void 0 !== t && (void 0 !== t.shareTicket ? f(this, t.shareTicket, "click") : void 0 !== t.query && void 0 !== t.query.ald_share_src && f(this, "0", "click"));
    }, m = function(t, a) {
        var s = this;
        s.aldstat_is_first_open && (s.aldstat_is_first_open = !1), s.aldstat_duration = Date.now() - s.aldstat_showtime, 
        y(s, "app", "hide");
    };
    function x(t) {
        if ("string" != typeof t) return !1;
        var a = t.replace(/\s+/g, "_");
        return !/[~`!@/#+=\$%\^()&\*]+/g.test(a);
    }
    var k = function(t, a) {
        var s = getApp();
        b(s, this, "hide");
    }, q = function(t, a) {
        var s = getApp();
        b(s, this, "unload");
    }, D = function(t, a) {
        var s = "";
        try {
            s = wx.getStorageSync("aldstat_src");
        } catch (t) {
            s = "";
        }
        var e = getApp();
        if (wx.showShareMenu, s && (e.aldstat_src = s), !function(t) {
            for (var a in t) return !1;
            return !0;
        }(t)) {
            if (void 0 !== t.aldsrc) if (s) e.aldstat_qr = t.aldsrc; else {
                try {
                    wx.setStorageSync("aldstat_src", t.aldsrc);
                } catch (t) {}
                e.aldstat_src = t.aldsrc, e.aldstat_qr = t.aldsrc;
            }
            void 0 !== t.ald_share_src && (e.ald_share_src = t.ald_share_src), this.aldstat_page_args = JSON.stringify(t);
        }
        b(e, this, "load");
    }, b = function(t, e, n) {
        var o = "";
        try {
            o = wx.getStorageSync("page_" + n + "_upload");
        } catch (t) {
            o = "";
        }
        if ((o || "show" === n) && !(o < 1 && "number" == typeof o)) {
            e.aldstat_start_time = Date.now(), e.aldstat_error_count = 0, t.aldstat_page_count ? t.aldstat_page_count++ : t.aldstat_page_count = 1, 
            t.aldstat_first_page || (t.aldstat_first_page = e.__route__, e.aldstat_is_first_page = !0), 
            t.aldstat_last_page = e.__route__;
            var r = {
                uu: _(t),
                at: t.aldstat_access_token,
                wsr: t.aldstat_showoption,
                ak: s.app_key,
                ev: "page",
                st: e.aldstat_start_time,
                dr: Date.now() - e.aldstat_start_time,
                pp: e.__route__,
                life: n,
                sc: e.page_share_count,
                ec: e.aldstat_error_count,
                nt: t.aldstat_network_type,
                pm: t.aldstat_phone_model,
                pr: t.aldstat_pixel_ratio,
                ww: t.aldstat_window_width,
                wh: t.aldstat_window_height,
                lang: t.aldstat_language,
                wv: t.aldstat_wechat_version,
                lat: t.aldstat_lat,
                lng: t.aldstat_lng,
                spd: t.aldstat_speed,
                v: a,
                wsdk: t.aldstat_vsdk_version,
                sv: t.aldstat_sv,
                wvv: t.aldstat_wvv
            };
            e.aldstat_is_first_page && (r.ifp = "true"), t.aldstat_page_last_page && (r.lp = t.aldstat_page_last_page), 
            t.aldstat_location_name && (r.ln = t.aldstat_location_name), e.aldstat_page_args && (r.ag = e.aldstat_page_args), 
            t.aldstat_src && (r.sr = t.aldstat_src), t.aldstat_qr && (r.qr = t.aldstat_qr), 
            t.ald_share_src && (r.usr = t.ald_share_src), t.aldstat_page_last_page = e.__route__, 
            c(r, "GET", "d.html");
        }
    }, T = function(t, a) {
        var s = getApp();
        b(s, this, "show");
    }, A = function(t, a) {
        var s = getApp();
        h(s, "event", "ald_pulldownrefresh", 1);
    }, M = function(t, a) {
        var s = getApp();
        h(s, "event", "ald_reachbottom", 1);
    }, I = function(a, e) {
        var n = getApp();
        if (void 0 !== a && void 0 !== a[1]) {
            var o = "";
            try {
                o = wx.getStorageSync("aldstat_uuid");
            } catch (a) {
                o = "uuid-getstoragesync";
            }
            var r = "";
            try {
                r = wx.getStorageSync(o);
            } catch (a) {
                r = "p_share_count_getst";
            }
            var _ = "";
            if ("undefined" !== n.ald_share_src && n.ald_share_src) {
                for (var i = (_ = n.ald_share_src).split(","), l = !0, u = 0, p = i.length; u < p; u++) {
                    if (i[u].replace('"', "") == o) {
                        l = !1;
                        break;
                    }
                }
                i.length >= 3 && (l && i.shift(), _ = i.toString()), "" !== _ && l && (_ = _ + "," + o);
            } else try {
                _ = wx.getStorageSync("aldstat_uuid");
            } catch (a) {
                _ = "ald_share_src_getst";
            }
            if (a[1].path && "undefined" !== a[1].path || (s.defaultPath ? a[1].path = s.defaultPath : a[1].path = this.__route__), 
            -1 != a[1].path.indexOf("?") ? a[1].path += "&ald_share_src=" + _ : a[1].path += "?ald_share_src=" + _, 
            h(n, "event", "ald_share_chain", {
                path: n.aldstat_last_page,
                chain: _
            }), "" === r || void 0 === r) {
                try {
                    wx.setStorageSync(o, 1);
                } catch (a) {}
                r = 1, n.page_share_count = r;
            } else {
                r = parseInt(wx.getStorageSync(o)) + 1, n.page_share_count = r;
                try {
                    wx.setStorageSync(o, r);
                } catch (a) {}
            }
            d(function(t) {
                var a = "";
                try {
                    a = wx.getStorageSync("aldstat_uuid");
                } catch (t) {
                    a = "uuid-getstoragesync";
                }
                t.userInfo.uu = a, c(t.userInfo, "GET", "u.html");
            });
            a[1];
            void 0 === a[1].success && (a[1].success = function(t) {}), void 0 === a[1].fail && (a[1].fail = function(t) {});
            var g = a[1].fail, w = a[1].success;
            return a[1].success = function(a) {
                new Array();
                if ("object" === t(a.shareTickets)) for (var s = 0; s < a.shareTickets.length; s++) f(n, a.shareTickets[s], "user");
                h(n, "event", "ald_share_status", JSON.stringify(a)), w(a);
            }, a[1].fail = function(t) {
                h(n, "event", "ald_share_status", "fail"), g(t);
            }, a[1];
        }
    }, E = App;
    App = function(t) {
        l(t, "onLaunch", w), l(t, "onUnlaunch", g), l(t, "onShow", S), l(t, "onHide", m), 
        l(t, "onError", v), E(t);
    };
    var G = Page;
    Page = function(t) {
        l(t, "onLoad", D), l(t, "onUnload", q), l(t, "onShow", T), l(t, "onHide", k), l(t, "onReachBottom", M), 
        l(t, "onPullDownRefresh", A), void 0 !== t.onShareAppMessage && function(t, a, s) {
            if (t[a]) {
                var e = t[a];
                t[a] = function(t) {
                    var n = e.call(this, t);
                    return s.call(this, [ t, n ], a), n;
                };
            } else t[a] = function(t) {
                s.call(this, t, a);
            };
        }(t, "onShareAppMessage", I), G(t);
    };
}();