function e(e, t, l) {
    if (e.beginPath(), e.lineWidth = 2 * l, e.moveTo(40 * l, 686 * l), e.lineTo(650 * l, 686 * l), 
    e.setStrokeStyle("#e0e0e0"), e.stroke(), e.setFontSize(30 * l), e.setFillStyle("#c30d23"), 
    t.largerIndex) {
        e.drawImage("../images/reddot_icon@2x.png", 32 * l, 713 * l, 4 * l, 4 * l), e.fillText("第" + t.largerIndex + "天", 40 * l, 728 * l);
        var i = e.measureText("第" + t.largerIndex + "天").width + 44 * l;
        e.drawImage("../images/reddot_icon@2x.png", i, 713 * l, 4 * l, 4 * l);
    }
    e.beginPath(), e.setFillStyle("#333333"), e.setFontSize(30 * l), function(e, t, l, i, a) {
        var o = t.length / 20;
        o > 0 && o < 1 ? i += 60 * a : o >= 1 && o < 2 ? i += 40 * a : o >= 2 && o < 3 && (i += 20 * a);
        for (var n = 0; n < o; n++) if (0 === n) e.fillText(t.substring(0, 20), l, i + 34 * a * 1.19 * n); else {
            if (n > 3) return;
            e.fillText(t.substring(20 * n, 20 * (n + 1)), l, i + 34 * a * 1.19 * n);
        }
    }(e, t.dayText, 40 * l, 775 * l, l);
}

function t(e, t, l, i, a, o) {
    for (var n = t.split(""), r = 0, s = t.length; r < s; r++) "·" === n[r] ? e.fillText(n[r], l + 12 * a, i + 34 * a * r) : o ? e.fillText(n[r], l, i + 28 * a * r) : e.fillText(n[r], l, i + 34 * a * r);
}

function l(e, t, l, i, a, o, n, r) {
    e.setTextAlign("left");
    for (var s = t.split(""), f = new Array(), d = 0, g = new Array(), S = 0, h = 0; h < s.length; h++) (d += e.measureText(s[h]).width) < a ? g.push(s[h]) : (f[S] = g, 
    S++, g = new Array(), d = 0), h + 1 == s.length && (f[S] = g, S++, g = new Array(), 
    d = 0);
    for (var y = f.length - 1, T = y; T > -1; T--) {
        var w = i + (T - y) * (o + n);
        console.log(T + " offset=" + w), e.fillText(f[T].join(""), l, w);
    }
    return f.length;
}

function i(e, t, l, i, a, o, n, r) {
    e.setTextAlign("left");
    for (var s = t.split(""), f = new Array(), d = 0, g = new Array(), S = 0, h = 0; h < s.length; h++) (d += e.measureText(s[h]).width) < a ? g.push(s[h]) : (f[S] = g, 
    S++, g = new Array(), d = 0), h + 1 == s.length && (f[S] = g, S++, g = new Array(), 
    d = 0);
    return f.length;
}

module.exports = {
    drawStyle0: function(l, i, a, o) {
        var n;
        n = o || l.data.item, i.setFillStyle("#ffffff"), i.fillRect(0, 0, 690 * a + 1, 920 * a + 1), 
        i.drawImage("../images/qrcode.jpg", 180 * a, 556 * a, 100 * a, 100 * a), n.festival ? (i.setFillStyle("#333333"), 
        i.setFontSize(34 * a), i.fillText(n.year + "年" + n.month + "月", 140 * a, 102 * a), 
        i.fillText("农历" + n.chiMonth + n.chiDay, 130 * a, 160 * a), i.setFontSize(200 * a), 
        i.fillText(n.day, 115 * a, 370 * a)) : (i.setFillStyle("#333333"), i.setFontSize(34 * a), 
        i.fillText(n.year + "年" + n.month + "月", 140 * a, 152 * a), i.fillText("农历" + n.chiMonth + n.chiDay, 130 * a, 210 * a), 
        i.setFontSize(200 * a), i.fillText(n.day, 115 * a, 420 * a)), n.festival && (i.beginPath(), 
        i.lineWidth = 2 * a, i.moveTo(118 * a, 466 * a), i.lineTo(168 * a, 466 * a), i.setStrokeStyle("#333333"), 
        i.stroke(), i.setFontSize(34 * a), i.setFillStyle("#333333"), i.fillText(n.festival, 3 === n.festival.length ? 178 * a : 194 * a, 475 * a), 
        i.lineWidth = 2 * a, i.moveTo(292 * a, 466 * a), i.lineTo(342 * a, 466 * a), i.setStrokeStyle("#333333"), 
        i.stroke()), i.beginPath(), i.lineWidth = 2 * a, i.moveTo(450 * a, 40 * a), i.lineTo(450 * a, 650 * a), 
        i.setStrokeStyle("#e0e0e0"), i.stroke(), i.drawImage("../images/logo-icon@3x.png", 500 * a, 70 * a, 50 * a, 79 * a), 
        i.beginPath(), i.setFontSize(30 * a), i.setFillStyle("#999999"), t(i, n.gYear + "·" + n.gMonth + "·" + n.gDay, 506 * a, 240 * a, a), 
        i.beginPath(), i.setFontSize(30 * a), i.setFillStyle("#333333"), i.fillText("宜", 600 * a, 160 * a), 
        i.fillText("忌", 600 * a, 430 * a), i.setFillStyle("#999999"), t(i, n.yi, 600 * a, 210 * a, a), 
        t(i, n.ji, 600 * a, 480 * a, a), e(i, n, a), i.draw();
    },
    drawStyle1: function(l, i, a, o) {
        var n;
        n = o || l.data.item, i.setFillStyle("#ffffff"), i.fillRect(0, 0, 690 * a + 1, 920 * a + 1), 
        i.setStrokeStyle("#e0e0e0"), i.strokeRect(76 * a, 40 * a, 164 * a, 222 * a), i.setFontSize(24 * a), 
        i.setFillStyle("#333333"), i.fillText(n.month + "." + n.day + "    " + n.weekText, 90 * a, 80 * a), 
        i.lineWidth = 2 * a, i.moveTo(76 * a, 100 * a), i.lineTo(240 * a, 100 * a), i.setStrokeStyle("#e0e0e0"), 
        i.stroke(), i.setFontSize(30 * a), i.setFillStyle("#333333"), t(i, n.chiMonth + n.chiDay, 104 * a, 138 * a, a), 
        i.setFontSize(24 * a), i.setFillStyle("#333333"), t(i, n.gYear + "属" + n.animalYear, 190 * a, 138 * a, a, 24 * a), 
        i.lineWidth = 2 * a, i.moveTo(164 * a, 100 * a), i.lineTo(164 * a, 260 * a), i.setStrokeStyle("#e0e0e0"), 
        i.stroke(), n.festival && (i.setStrokeStyle("#e0e0e0"), i.strokeRect(76 * a, 260 * a, 164 * a, 54 * a), 
        i.setFillStyle("#ffffff"), i.beginPath(), i.lineWidth = 2 * a, i.moveTo(77 * a, 262 * a), 
        i.lineTo(239 * a, 262 * a), i.setStrokeStyle("#ffffff"), i.stroke(), i.setFontSize(24 * a), 
        i.setFillStyle("#333333"), i.fillText(n.festival, 3 === n.festival.length ? 119 * a : 135 * a, 300 * a)), 
        i.drawImage("../images/logo-icon@3x.png", 132 * a, 436 * a, 50 * a, 79 * a), i.drawImage("../images/qrcode.jpg", 106 * a, 546 * a, 100 * a, 100 * a), 
        wx.downloadFile({
            url: n.largeImage,
            success: function(t) {
                console.log(t.tempFilePath), i.drawImage(t.tempFilePath, 310 * a, 40 * a, 340 * a, 606 * a), 
                e(i, n, a), i.draw();
            }
        });
    },
    drawStyle2: function(e, i, a, o) {
        var n;
        n = o || e.data.item, i.setFillStyle("#ffffff"), i.fillRect(0, 0, 690 * a + 1, 920 * a + 1), 
        wx.downloadFile({
            url: n.largeImage,
            success: function(e) {
                var o = 690 * a / 1242 * 2280 + 1, r = (o - 920 * a) / 2;
                i.drawImage(e.tempFilePath, 0, -r, 690 * a + 1, o), i.setLineWidth(.5), i.shadowOffsetX = .5, 
                i.shadowOffsetY = .5, i.shadowBlur = .5, i.shadowColor = "rgba(0, 0, 0, 0.2)", i.setStrokeStyle("#ffffff"), 
                i.textAlign = "center", i.strokeRect(30 * a, 160 * a, 164 * a, 220 * a), i.moveTo(30 * a, 212 * a), 
                i.lineTo(194 * a, 212 * a), i.moveTo(120 * a, 212 * a), i.lineTo(120 * a, 376 * a), 
                n.festival && (i.moveTo(30 * a, 380 * a), i.lineTo(30 * a, 440 * a), i.lineTo(194 * a, 440 * a), 
                i.lineTo(194 * a, 380 * a)), i.stroke(), i.setFontSize(24 * a), i.fillText(n.month + "." + n.day + "    " + n.weekText, 113 * a, 200 * a), 
                i.setFontSize(30 * a), t(i, n.chiMonth + n.chiDay, 75 * a, 258 * a, a), i.setFontSize(24 * a), 
                t(i, n.gYear + "属" + n.animalYear, 157 * a, 252 * a, a, 24 * a), i.setFontSize(30 * a), 
                l(i, n.dayText, 30 * a, 890 * a, 630 * a, 30 * a, 20 * a, a), i.draw();
            }
        });
    },
    drawStyle3: function(e, t, i, a) {
        var o;
        o = a || e.data.item, t.setFillStyle("#ffffff"), t.fillRect(0, 0, 690 * i + 1, 920 * i + 1), 
        wx.downloadFile({
            url: o.largeImage,
            success: function(e) {
                var a = 690 * i / 1242 * 2280 + 1, n = (a - 920 * i) / 2;
                t.drawImage(e.tempFilePath, 0, -n, 690 * i + 1, a), t.shadowOffsetX = .5, t.shadowOffsetY = .5, 
                t.shadowBlur = .5, t.shadowColor = "rgba(0, 0, 0, 0.2)", t.setFontSize(30 * i);
                var r = l(t, o.dayText, 30 * i, 890 * i, 630 * i, 30 * i, 20 * i, i), s = i * (890 - 50 * r + 20 - 60);
                t.textAlign = "left", t.setFontSize(40 * i);
                var f = o.enMonth + "  " + o.enWeek;
                t.fillText(f, 30 * i, s), t.setFontSize(200 * i), t.fillText(o.day, 30 * i, s - 80 * i), 
                t.draw();
            }
        });
    },
    drawStyle4: function(e, t, a, o) {
        var n;
        n = o || e.data.item, t.setFillStyle("#ffffff"), t.fillRect(0, 0, 690 * a + 1, 920 * a + 1), 
        wx.downloadFile({
            url: n.img,
            success: function(e) {
                var o = 670 * a / 1280 * 720 + 1;
                t.drawImage(e.tempFilePath, 10 * a, 10 * a, 670 * a, o), t.setFillStyle("#333333"), 
                t.setFontSize(30 * a);
                var r = o + 310 * a;
                t.textAlign = "left", t.setFontSize(200 * a), t.fillText(n.day, 30 * a, r), t.setFontSize(40 * a);
                var s = n.enMonth + "  " + n.enWeek;
                t.fillText(s, 290 * a, r), t.setFontSize(30 * a);
                var f = r + (50 * i(t, n.dayText, 30 * a, 890 * a, 630 * a, 30 * a, 20 * a, a) - 20 + 52) * a;
                l(t, n.dayText, 30 * a, f, 630 * a, 30 * a, 20 * a, a);
                t.drawImage("../images/qrcode.jpg", 518 * a, 430 * a, 142 * a, 142 * a), t.draw();
            }
        });
    },
    drawStyle5: function(e, t, a, o) {
        var n;
        n = o || e.data.item, t.fillRect(0, 0, 690 * a + 1, 920 * a + 1), wx.downloadFile({
            url: n.largeImage,
            success: function(e) {
                var o = 690 * a / 1242 * 2280 + 1, r = (o - 920 * a) / 2;
                console.log(o + "   " + r), t.drawImage(e.tempFilePath, 0, -r, 690 * a + 1, o), 
                t.shadowOffsetX = .5, t.shadowOffsetY = .5, t.shadowBlur = .5, t.shadowColor = "rgba(0, 0, 0, 0.2)", 
                t.setFontSize(30 * a);
                var s = i(t, n.dayText, 60 * a, 860 * a, 600 * a, 30 * a, 20 * a, a);
                t.setFillStyle("rgba(0,0,0,0.15)");
                var f = a * (27 * s - 12 + 145) * 2, d = 890 * a - f;
                t.fillRect(30 * a, d, 630 * a, f), t.setFillStyle("#ffffff"), l(t, n.dayText, 60 * a, 860 * a, 600 * a, 30 * a, 24 * a);
                var g = a * (860 - 54 * s + 24 - 80);
                t.setLineWidth(1), t.setStrokeStyle("rgba(255,255,255,1)"), t.moveTo(60 * a, g + 44 * a), 
                t.lineTo(630 * a, g + 44 * a), t.stroke(), t.textAlign = "left", t.setFontSize(36 * a);
                var S = n.enMonth + "  " + n.enWeek;
                t.fillText(S, 322 * a, g), t.setFontSize(160 * a), t.fillText(n.day, 120 * a, g), 
                t.draw();
            }
        });
    }
};