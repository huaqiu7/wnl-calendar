(function(){
  const calendar = window.calendar || (typeof calendar !== 'undefined' ? calendar : null);
  if(!calendar){
    console.error('calendar lib not loaded');
    return;
  }

  const state = {
    viewDate: new Date(),
    active: null,
    currentTab: 'calendar'
  };

  // DOM元素
  const titleEl = document.getElementById('title');
  const gridEl = document.getElementById('grid');
  const dayPanelEl = document.getElementById('dayPanel');
  const weatherBtn = document.getElementById('weatherBtn');
  const geoBtn = document.getElementById('geoBtn');
  const astroBtn = document.getElementById('astroBtn');
  const astroSelect = document.getElementById('astroSelect');
  const weatherResult = document.getElementById('weatherResult');
  const astroResult = document.getElementById('astroResult');
  const cityCodeInput = document.getElementById('cityCode');

  // 标签页元素
  const tabItems = document.querySelectorAll('.tab-item');
  const pages = document.querySelectorAll('.page');

  // 初始化
  function init() {
    render();
    updateDayPanel(state.viewDate);
    bindEvents();
    loadFestivalData();
    loadDiscoveryData();
  }

  // 绑定事件
  function bindEvents() {
    // 日历导航
    document.getElementById('prevBtn').addEventListener('click', () => {
      state.viewDate.setMonth(state.viewDate.getMonth() - 1);
      render();
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
      state.viewDate.setMonth(state.viewDate.getMonth() + 1);
      render();
    });

    // 天气查询
    if(weatherBtn) weatherBtn.addEventListener('click', fetchWeather);
    if(geoBtn) geoBtn.addEventListener('click', fetchWeatherByGeo);
    if(astroBtn) astroBtn.addEventListener('click', fetchAstro);

    // 标签页切换
    tabItems.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;
        switchTab(tabName);
      });
    });

    // 分享功能
    const shareBtn = document.getElementById('shareBtn');
    if(shareBtn) {
      shareBtn.addEventListener('click', shareCalendar);
    }
  }

  // 标签页切换
  function switchTab(tabName) {
    // 更新标签状态
    tabItems.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === tabName);
    });

    // 更新页面显示
    pages.forEach(page => {
      page.classList.toggle('active', page.id === tabName + 'Page');
    });

    state.currentTab = tabName;

    // 根据标签页加载相应数据
    switch(tabName) {
      case 'lunar':
        updateLunarPage();
        break;
      case 'festival':
        updateFestivalPage();
        break;
      case 'discovery':
        updateDiscoveryPage();
        break;
    }
  }

  // 渲染日历
  function render(){
    const year = state.viewDate.getFullYear();
    const month = state.viewDate.getMonth();
    
    if(titleEl) titleEl.textContent = `${year}年${month + 1}月`;
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const today = new Date();
    
    for(let i = 0; i < 42; i++){
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.toDateString() === today.toDateString();
      const isActive = state.active && date.toDateString() === state.active.toDateString();
      
      const li = getLunarInfo(date);
      const lunar = li ? `${li.IMonthCn}${li.IDayCn}` : '';
      const jieqi = li && li.isTerm ? li.Term : '';
      const festival = getFestival(date);
      
      days.push({
        date,
        isCurrentMonth,
        isToday,
        isActive,
        lunar,
        jieqi,
        festival
      });
    }
    
    if(gridEl) {
      gridEl.innerHTML = days.map(day => `
        <div class="cell ${!day.isCurrentMonth ? 'other' : ''} ${day.isToday ? 'today' : ''} ${day.isActive ? 'active' : ''}" 
             data-date="${day.date.toISOString()}">
          <div class="day">${day.date.getDate()}</div>
          ${day.lunar ? `<div class="lunar">${day.lunar}</div>` : ''}
          ${day.jieqi ? `<div class="jieqi">${day.jieqi}</div>` : ''}
          ${day.festival ? `<div class="festival">${day.festival}</div>` : ''}
        </div>
      `).join('');
      
      // 绑定日期点击事件
      gridEl.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', () => {
          const dateStr = cell.dataset.date;
          const date = new Date(dateStr);
          state.active = date;
          render();
          updateDayPanel(date);
        });
      });
    }
  }

  // 更新日期详情面板
  function updateDayPanel(date) {
    const li = getLunarInfo(date);
    if(!li){ dayPanelEl.textContent=''; return; }
    const lunar = `农历${li.IMonthCn}${li.IDayCn}`;
    const ganzhi = `${li.gzYear}年 ${li.gzMonth}月 ${li.gzDay}日`;
    const week = `星期${['日','一','二','三','四','五','六'][date.getDay()]}`;
    dayPanelEl.innerHTML = `
      <div class="day-info">
        <div class="date-info">
          <div class="date-main">${date.getFullYear()}-${(m2(date.getMonth()+1))}-${m2(date.getDate())} · ${week}</div>
          <div class="lunar-info">${lunar} · 生肖${li.Animal}</div>
          <div class="ganzhi-info">干支：${ganzhi}${li.isTerm ? ' · 节气：'+li.Term : ''}</div>
        </div>
        <div class="yiji-info">
          <div class="yi-info">
            <span class="label">宜:</span>
            <span class="content" id="yiContent">加载中...</span>
          </div>
          <div class="ji-info">
            <span class="label">忌:</span>
            <span class="content" id="jiContent">加载中...</span>
          </div>
        </div>
      </div>
    `;
    fetch(`/api/yj?y=${date.getFullYear()}&m=${date.getMonth()+1}&d=${date.getDate()}`)
      .then(r=>r.json())
      .then(data=>{
        const yiContent = document.getElementById('yiContent');
        const jiContent = document.getElementById('jiContent');
        if(yiContent && jiContent){
          if(data && (data.yi || data.ji)){
            yiContent.textContent = data.yi || '-';
            jiContent.textContent = data.ji || '-';
          }else{
            yiContent.textContent = '暂无';
            jiContent.textContent = '暂无';
          }
        }
      })
      .catch(()=>{
        const yiContent = document.getElementById('yiContent');
        const jiContent = document.getElementById('jiContent');
        if(yiContent && jiContent){
          yiContent.textContent = '加载失败';
          jiContent.textContent = '加载失败';
        }
      });
  }

  // 更新黄历页面
  function updateLunarPage() {
    const date = state.active || state.viewDate;
    const li = getLunarInfo(date);
    if(!li) return;

    const lunarDate = document.getElementById('lunarDate');
    const lunarDetail = document.getElementById('lunarDetail');
    const lunarYi = document.getElementById('lunarYi');
    const lunarJi = document.getElementById('lunarJi');
    const lunarChong = document.getElementById('lunarChong');
    const lunarTai = document.getElementById('lunarTai');

    if(lunarDate) lunarDate.textContent = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
    if(lunarDetail) lunarDetail.textContent = `农历${li.IMonthCn}${li.IDayCn} · 星期${['日','一','二','三','四','五','六'][date.getDay()]}`;

    // 获取宜忌信息
    fetch(`/api/yj?y=${date.getFullYear()}&m=${date.getMonth()+1}&d=${date.getDate()}`)
      .then(r=>r.json())
      .then(data=>{
        if(lunarYi) lunarYi.textContent = data.yi || '暂无';
        if(lunarJi) lunarJi.textContent = data.ji || '暂无';
      })
      .catch(()=>{
        if(lunarYi) lunarYi.textContent = '加载失败';
        if(lunarJi) lunarJi.textContent = '加载失败';
      });

    // 设置冲煞和胎神信息（示例数据）
    if(lunarChong) lunarChong.textContent = '冲兔(癸卯)煞东';
    if(lunarTai) lunarTai.textContent = '占门厕外正北';
  }

  // 更新节日页面
  function updateFestivalPage() {
    const today = new Date();
    const month = today.getMonth() + 1;
    
    // 今日节日
    const todayFestivals = document.getElementById('todayFestivals');
    if(todayFestivals) {
      todayFestivals.innerHTML = getTodayFestivals(today);
    }

    // 本月节日
    const monthFestivals = document.getElementById('monthFestivals');
    if(monthFestivals) {
      monthFestivals.innerHTML = getMonthFestivals(month);
    }

    // 传统节日
    const traditionalFestivals = document.getElementById('traditionalFestivals');
    if(traditionalFestivals) {
      traditionalFestivals.innerHTML = getTraditionalFestivals();
    }
  }

  // 更新发现页面
  function updateDiscoveryPage() {
    // 每日一言
    const dailyQuote = document.getElementById('dailyQuote');
    if(dailyQuote) {
      dailyQuote.innerHTML = getDailyQuote();
    }

    // 历史上的今天
    const historyToday = document.getElementById('historyToday');
    if(historyToday) {
      historyToday.innerHTML = getHistoryToday();
    }

    // 节气信息
    const solarTerms = document.getElementById('solarTerms');
    if(solarTerms) {
      solarTerms.innerHTML = getSolarTerms();
    }
  }

  // 天气查询
  async function fetchWeather(){
    const cityCode = cityCodeInput && cityCodeInput.value;
    if(!cityCode){
      weatherResult.textContent = '请输入城市代码';
      return;
    }
    weatherResult.textContent = '查询中...';
    try{
      const resp = await fetch(`/api/weather?cityCode=${encodeURIComponent(cityCode)}`);
      const data = await resp.json();
      if(data && data.status===200){
        const s = data.data;
        const curr = s.curr || {};
        const f1 = (s.fcd && s.fcd[2]) || {};
        const f2 = (s.fcd && s.fcd[3]) || {};
        weatherResult.innerHTML = `
          <div><strong>${s.c}</strong> · ${curr.wtDesc || ''}</div>
          <div>当前：${curr.ct ?? '-'}°，高/低：${curr.th ?? '-'} / ${curr.tl ?? '-'}</div>
          <div>空气质量：${curr.aqi?.grade ?? '-'} ${curr.aqi?.index ?? ''}</div>
          <div>明天：${f1.tl ?? '-'} / ${f1.th ?? '-'}°，${f1.wtDesc ?? ''}</div>
          <div>后天：${f2.tl ?? '-'} / ${f2.th ?? '-'}°，${f2.wtDesc ?? ''}</div>
        `;
      }else{
        weatherResult.textContent = '未获取到有效数据';
      }
    }catch(err){
      weatherResult.textContent = '请求失败：' + err;
    }
  }

  // 按定位查询天气
  async function fetchWeatherByGeo(){
    weatherResult.textContent = '获取位置中...';
    if(!navigator.geolocation){
      weatherResult.textContent = '浏览器不支持定位';
      return;
    }
    navigator.geolocation.getCurrentPosition(async (pos)=>{
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      weatherResult.textContent = '查询中...';
      try{
        const resp = await fetch(`/api/weather?lat=${lat}&lng=${lng}`);
        const data = await resp.json();
        if(data && data.status===200){
          const s = data.data;
          const curr = s.curr || {};
          const f1 = (s.fcd && s.fcd[2]) || {};
          const f2 = (s.fcd && s.fcd[3]) || {};
          weatherResult.innerHTML = `
            <div><strong>${s.c}</strong> · ${curr.wtDesc || ''}</div>
            <div>当前：${curr.ct ?? '-'}°，高/低：${curr.th ?? '-'} / ${curr.tl ?? '-'}</div>
            <div>空气质量：${curr.aqi?.grade ?? '-'} ${curr.aqi?.index ?? ''}</div>
            <div>明天：${f1.tl ?? '-'} / ${f1.th ?? '-'}°，${f1.wtDesc ?? ''}</div>
            <div>后天：${f2.tl ?? '-'} / ${f2.th ?? '-'}°，${f2.wtDesc ?? ''}</div>
          `;
        }else{
          weatherResult.textContent = '未获取到有效数据';
        }
      }catch(err){
        weatherResult.textContent = '请求失败：' + err;
      }
    },err=>{
      weatherResult.textContent = '定位失败：' + (err && err.message ? err.message : err);
    },{ enableHighAccuracy:true, timeout:10000, maximumAge:0 });
  }

  // 星座查询
  async function fetchAstro(){
    const star = (astroSelect && astroSelect.value) || 'aries';
    astroResult.textContent = '查询中...';
    try{
      const resp = await fetch(`/api/astro?star=${encodeURIComponent(star)}`);
      const data = await resp.json();
      if(data && data.data && data.data.today){
        const t = data.data.today;
        astroResult.innerHTML = `
          <div><strong>${t.cName || star}</strong> · ${t.name || ''}</div>
          <div>综合运势：${'★'.repeat(Number(t.zhys||0))}</div>
          <div>幸运颜色：${t.xyys || '-'}</div>
          <div>幸运数字：${t.xysz || '-'}</div>
          <div>速配星座：${t.spxz || '-'}</div>
          <div style="margin-top:6px;">${t.xzys || ''}</div>
        `;
      }else{
        astroResult.textContent = '未获取到有效数据';
      }
    }catch(err){
      astroResult.textContent = '请求失败：' + err;
    }
  }

  // 分享功能
  function shareCalendar() {
    if (navigator.share) {
      navigator.share({
        title: '万年历',
        text: '查看今日万年历信息',
        url: window.location.href
      });
    } else {
      // 复制链接到剪贴板
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('链接已复制到剪贴板');
      });
    }
  }

  // 获取节日数据
  function loadFestivalData() {
    // 这里可以加载节日数据
  }

  // 获取发现页面数据
  function loadDiscoveryData() {
    // 这里可以加载发现页面数据
  }

  // 获取今日节日
  function getTodayFestivals(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const festivals = [];
    
    // 示例节日数据
    if (month === 1 && day === 1) festivals.push('元旦');
    if (month === 2 && day === 14) festivals.push('情人节');
    if (month === 3 && day === 8) festivals.push('妇女节');
    if (month === 5 && day === 1) festivals.push('劳动节');
    if (month === 6 && day === 1) festivals.push('儿童节');
    if (month === 9 && day === 10) festivals.push('教师节');
    if (month === 10 && day === 1) festivals.push('国庆节');
    if (month === 12 && day === 25) festivals.push('圣诞节');
    
    return festivals.length > 0 ? festivals.join('、') : '今日无特殊节日';
  }

  // 获取本月节日
  function getMonthFestivals(month) {
    const festivals = {
      1: '元旦(1日)、腊八节(8日)、小年(23日)',
      2: '情人节(14日)、元宵节(15日)',
      3: '妇女节(8日)、植树节(12日)',
      4: '愚人节(1日)、清明节(4-6日)',
      5: '劳动节(1日)、青年节(4日)、母亲节(第二个周日)',
      6: '儿童节(1日)、父亲节(第三个周日)',
      7: '建党节(1日)',
      8: '建军节(1日)、七夕节(7日)',
      9: '教师节(10日)、中秋节(15日)',
      10: '国庆节(1日)、重阳节(9日)',
      11: '光棍节(11日)',
      12: '圣诞节(25日)'
    };
    return festivals[month] || '本月无特殊节日';
  }

  // 获取传统节日
  function getTraditionalFestivals() {
    return '春节、元宵节、清明节、端午节、七夕节、中秋节、重阳节、腊八节、小年等传统节日';
  }

  // 获取每日一言
  function getDailyQuote() {
    const quotes = [
      '时间是最好的老师，但遗憾的是，它杀死了所有的学生。',
      '生活就像一盒巧克力，你永远不知道下一颗是什么味道。',
      '成功不是终点，失败也不是末日，最重要的是继续前进的勇气。',
      '今天很残酷，明天更残酷，后天很美好，但绝大部分人死在明天晚上。',
      '人生就像骑自行车，想保持平衡就得往前走。'
    ];
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return quotes[dayOfYear % quotes.length];
  }

  // 获取历史上的今天
  function getHistoryToday() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    
    const history = {
      '1-1': '1912年1月1日，中华民国成立',
      '1-8': '1976年1月8日，周恩来逝世',
      '2-14': '1876年2月14日，贝尔获得电话专利',
      '3-8': '1909年3月8日，国际妇女节确立',
      '4-1': '1976年4月1日，苹果公司成立',
      '5-1': '1886年5月1日，国际劳动节确立',
      '6-1': '1950年6月1日，国际儿童节确立',
      '7-1': '1921年7月1日，中国共产党成立',
      '8-1': '1927年8月1日，南昌起义',
      '9-10': '1985年9月10日，中国教师节确立',
      '10-1': '1949年10月1日，中华人民共和国成立',
      '12-25': '公元1年12月25日，耶稣诞生'
    };
    
    const key = `${month}-${day}`;
    return history[key] || '历史上的今天，发生了许多重要事件...';
  }

  // 获取节气信息
  function getSolarTerms() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    
    const terms = {
      '1-5': '小寒', '1-20': '大寒',
      '2-4': '立春', '2-19': '雨水',
      '3-6': '惊蛰', '3-21': '春分',
      '4-5': '清明', '4-20': '谷雨',
      '5-6': '立夏', '5-21': '小满',
      '6-6': '芒种', '6-22': '夏至',
      '7-7': '小暑', '7-23': '大暑',
      '8-8': '立秋', '8-23': '处暑',
      '9-8': '白露', '9-23': '秋分',
      '10-8': '寒露', '10-24': '霜降',
      '11-7': '立冬', '11-22': '小雪',
      '12-7': '大雪', '12-22': '冬至'
    };
    
    const key = `${month}-${day}`;
    const term = terms[key];
    return term ? `今日是${term}节气` : '今日无节气';
  }

  // 获取农历信息
  function getLunarInfo(date) {
    if (!calendar || !calendar.solar2lunar) return null;
    return calendar.solar2lunar(date.getFullYear(), date.getMonth() + 1, date.getDate());
  }

  // 获取节日信息
  function getFestival(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    const festivals = {
      '1-1': '元旦',
      '2-14': '情人节',
      '3-8': '妇女节',
      '5-1': '劳动节',
      '6-1': '儿童节',
      '9-10': '教师节',
      '10-1': '国庆节',
      '12-25': '圣诞节'
    };
    
    const key = `${month}-${day}`;
    return festivals[key] || '';
  }

  function m2(n){ return (n<10?'0':'')+n; }

  // 启动应用
  init();
})();
