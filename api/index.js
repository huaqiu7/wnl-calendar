const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

// 静态文件服务
app.use('/', express.static(path.join(__dirname, '../web')));

// 处理根路径
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../web/index.html'));
});

// 天气代理：示例使用原项目的天气接口
// GET /api/weather?cityCode=101010100 或传入经纬度 lat, lng
app.get('/api/weather', async (req, res) => {
  try {
    const { cityCode, lat, lng } = req.query;
    const url = 'https://apic.51wnl.com/CttApi/GetWeatherDetail?tkn=6480F2A608958030D190E9E62590174A&cid=Youloft_IOS&av=4.5.9&mac=00:11:22:33:44:55&did=b622c089e7e14d2c2fa8c9129dafbb51&chn=wnl_anzhi&cc=CN&lang=zh&bd=com.youloft.calendar&t=1430366273&cver=6.0&lasttimestamp=&model=iphone&cardId=78&sign=66069614e98aba9d07b1ad26d94e2450';
    const params = new URLSearchParams();
    if (cityCode) params.set('CityCode', cityCode);
    if (lat) params.set('Lat', lat);
    if (lng) params.set('Lng', lng);

    const fetch = (await import('node-fetch')).default;
    const resp = await fetch(url + '&' + params.toString());
    const data = await resp.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'weather proxy error', detail: String(err) });
  }
});

// 宜忌计算：基于小程序数据与算法
const calendar = require(path.join(__dirname, '../utils/calendar.js'));
const YJData = require(path.join(__dirname, '../data/YJData.js'));

// GET /api/yj?y=2025&m=9&d=26  (m 为 1-12)
app.get('/api/yj', (req, res) => {
  try {
    const y = parseInt(req.query.y, 10);
    const m1 = parseInt(req.query.m, 10);
    const d = parseInt(req.query.d, 10);
    if (!y || !m1 || !d) return res.status(400).json({ error: 'bad params' });
    const date = new Date(y, m1 - 1, d);
    const fields = calendar.getYJSqlFields(date); // [v0, v1]
    const key = `${fields[1]}-${fields[0]}`;
    const item = YJData[key] || { y: '-', j: '-' };
    return res.json({ yi: item.y || '-', ji: item.j || '-' });
  } catch (err) {
    res.status(500).json({ error: 'yj error', detail: String(err) });
  }
});

// 星座代理：GET /api/astro?star=aries
app.get('/api/astro', async (req, res) => {
  try{
    const star = (req.query.star || 'aries').toString();
    const url = 'https://c.51wnl.com/contentapi/api4.4.0/wxprogram/getstar';
    const u = new URL(url);
    u.searchParams.set('starname', star);
    const fetch = (await import('node-fetch')).default;
    const resp = await fetch(u.toString());
    const data = await resp.json();
    res.json(data);
  }catch(err){
    res.status(500).json({ error: 'astro proxy error', detail: String(err) });
  }
});

module.exports = app;
