var t = require("../../utils/util"), i = require("../../utils/province"), e = require("../../utils/city"), c = require("../../utils/county"), a = {
    citySelectProps: {
        data: {
            maskZindexCity: -1,
            maskOpacityCity: 0,
            modalZindexCity: -1,
            modalOpacityCity: 0,
            provinces: [],
            citys: [],
            countys: [],
            cityPickerViewValue: [ 0, 0, 0 ],
            cityCode: ""
        }
    },
    initCity: function() {
        this.setData(this.data), this.getCityPickerStorage();
    },
    getCityPickerStorage: function() {
        var t = wx.getStorageSync("cityPickerValue");
        if (t) {
            var a = i[t[0]].id, s = e[a][t[1]].id;
            this.citySelectProps.data.provinces = i, this.citySelectProps.data.citys = e[a], 
            this.citySelectProps.data.countys = c[s];
        } else this.initCityPicker();
        this.setData(this.citySelectProps.data), this.setData({
            cityPickerViewValue: t
        });
    },
    maskTapCity: function() {
        this.citySelectModuleHide();
    },
    citySelectCancelTap: function() {
        this.citySelectModuleHide();
    },
    citySelectConfirmTap: function() {
        this.citySelectModuleHide(), this.citySelectCallback();
    },
    cityPickerChange: function(t) {
        var a, s, y = t.detail.value, l = i[y[0]].id, o = this.citySelectProps.data.cityPickerViewValue;
        if (y[0] !== o[0]) {
            var r, d;
            a = e[l][0].id, r = e[l], d = c[a], this.citySelectProps.data.cityPickerViewValue = [ y[0], 0, 0 ], 
            this.setData({
                citys: r,
                countys: d,
                cityPickerViewValue: [ y[0], 0, 0 ]
            });
        }
        if (y[1] != o[1]) {
            var n;
            a = e[l][y[1]].id, n = c[a], this.citySelectProps.data.cityPickerViewValue = [ y[0], y[1], 0 ], 
            this.setData({
                countys: n,
                cityPickerViewValue: [ y[0], y[1], 0 ]
            });
        }
        y[2] !== o[2] && (this.citySelectProps.data.cityPickerViewValue = y, this.setData({
            cityPickerViewValue: y
        })), y = this.citySelectProps.data.cityPickerViewValue, a = e[l][y[1]].id, s = c[a][y[2]].id, 
        c[a][y[2]].name, this.citySelectProps.data.cityCode = s;
    },
    citySelectShow: function() {
        this.citySelectModuleShow();
    },
    citySelectModuleHide: function() {
        var i = this;
        this.setData({
            maskOpacityCity: 0,
            modalOpacityCity: 0
        }), t.sleep(400).then(function() {
            i.setData({
                maskZindexCity: -1,
                modalZindexCity: -1
            });
        });
    },
    citySelectModuleShow: function() {
        this.setData({
            maskZindexCity: 999,
            maskOpacityCity: 1,
            modalZindexCity: 1e3,
            modalOpacityCity: 1
        });
    },
    initCityPicker: function() {
        this.citySelectProps.data.provinces = i, this.citySelectProps.data.citys = e[i[0].id], 
        this.citySelectProps.data.countys = c[e[i[0].id][0].id];
    }
};

module.exports = a;