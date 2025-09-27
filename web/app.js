(function(){
  const calendar = window.calendar || (typeof calendar !== 'undefined' ? calendar : null);
  if(!calendar){
    console.error('calendar lib not loaded');
    return;
  }

  const state = {
    viewDate: new Date(),
    active: null
  };

  const titleEl = document.getElementById('title');
  const gridEl = document.getElementById('grid');
  const dayPanelEl = document.getElementById('dayPanel');
  const weatherBtn = document.getElementById('weatherBtn');
  const geoBtn = document.getElementById('geoBtn');
  const cityPickerBtn = document.getElementById('cityPickerBtn');
  const astroBtn = document.getElementById('astroBtn');
  const astroSelect = document.getElementById('astroSelect');
  const astroResult = document.getElementById('astroResult');
  const weatherResult = document.getElementById('weatherResult');
  const cityCodeInput = document.getElementById('cityCode');
  document.getElementById('prevBtn').addEventListener('click', ()=>{
    const d = new Date(state.viewDate.getFullYear(), state.viewDate.getMonth(), 1);
    d.setMonth(d.getMonth()-1);
    state.viewDate = d;
    render();
  });
  document.getElementById('nextBtn').addEventListener('click', ()=>{
    const d = new Date(state.viewDate.getFullYear(), state.viewDate.getMonth(), 1);
    d.setMonth(d.getMonth()+1);
    state.viewDate = d;
    render();
  });

  function formatTitle(d){
    return `${d.getFullYear()}年${d.getMonth()+1}月`;
  }

  function getMonthGrid(year, month){
    // month is 0-based
    const first = new Date(year, month, 1);
    const firstWeekday = first.getDay();
    const lastDay = new Date(year, month+1, 0).getDate();
    const prevLast = new Date(year, month, 0).getDate();
    const cells = [];
    // previous month padding
    for(let i=firstWeekday-1; i>=0; i--){
      const day = prevLast - i;
      const date = new Date(year, month-1, day);
      cells.push({ date, other:true });
    }
    // current month days
    for(let day=1; day<=lastDay; day++){
      const date = new Date(year, month, day);
      cells.push({ date, other:false });
    }
    // next month padding
    while(cells.length % 7 !== 0){
      const last = cells[cells.length-1].date;
      const date = new Date(last.getFullYear(), last.getMonth(), last.getDate()+1);
      cells.push({ date, other:true });
    }
    return cells;
  }

  function getLunarInfo(date){
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();
    try {
      return calendar.solar2lunar(y, m, d);
    } catch (e) {
      return null;
    }
  }

  function renderDayPanel(date){
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

  function m2(n){ return (n<10?'0':'')+n; }

  function render(){
    const y = state.viewDate.getFullYear();
    const m = state.viewDate.getMonth();
    titleEl.textContent = formatTitle(state.viewDate);
    gridEl.innerHTML = '';
    const today = new Date();
    today.setHours(0,0,0,0);

    const cells = getMonthGrid(y, m);
    cells.forEach(({date, other})=>{
      const li = getLunarInfo(date);
      const cell = document.createElement('div');
      cell.className = 'cell' + (other ? ' other' : '');
      const isToday = date.getTime() === today.getTime();
      if(isToday) cell.className += ' today';
      if(state.active && state.active.getTime()===date.getTime()) cell.className += ' active';

      const day = document.createElement('div');
      day.className = 'day';
      day.textContent = date.getDate();
      const lunar = document.createElement('div');
      lunar.className = 'lunar' + (li && li.isTerm ? ' jieqi' : '');
      lunar.textContent = li ? (li.isTerm ? li.Term : (li.IDayCn==='初一' ? li.IMonthCn : li.IDayCn)) : '';

      cell.appendChild(day);
      cell.appendChild(lunar);

      cell.addEventListener('click', ()=>{
        state.active = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        render();
        renderDayPanel(state.active);
      });

      gridEl.appendChild(cell);
    });

    // default active today if in current month, else first day of view month
    const inCurrentMonth = today.getFullYear()===y && today.getMonth()===m;
    if(!state.active){
      state.active = inCurrentMonth ? new Date(today) : new Date(y, m, 1);
      render();
      return;
    }
    renderDayPanel(state.active);
  }

  render();

  // Weather integration via local proxy
  async function fetchWeather(){
    const code = (cityCodeInput.value || '').trim() || '101010100';
    weatherResult.textContent = '查询中...';
    try{
      const resp = await fetch(`/api/weather?cityCode=${encodeURIComponent(code)}`);
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

  if(weatherBtn){ weatherBtn.addEventListener('click', fetchWeather); }
  if(geoBtn){
    geoBtn.addEventListener('click', async ()=>{
      weatherResult.textContent = '定位中...';
      if(!navigator.geolocation){
        weatherResult.textContent = '该浏览器不支持定位';
        return;
      }
      navigator.geolocation.getCurrentPosition(async pos=>{
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        weatherResult.textContent = '查询中...';
        try{
          const resp = await fetch(`/api/weather?lat=${encodeURIComponent(lat)}&lng=${encodeURIComponent(lng)}`);
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
    });
  }

  // Astro integration via local proxy
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
  if(astroBtn){ astroBtn.addEventListener('click', fetchAstro); }

  // Simple city picker using existing province/city lists -> store cityCode
  async function openCityPicker(){
    // 动态加载省/市数据（直接从已有 js 导入不方便在浏览器端用，这里简单弹窗输入城市名→用 cityLongLat 近似，仍走经纬度查询）
    const name = prompt('请输入城市名（如 北京市/上海市/广州市 ...），将用经纬度近似查询');
    if(!name) return;
    try{
      const map = await import('../utils/cityLongLat.js');
      const m = map.default || map;
      const coord = m[name];
      if(!coord){
        alert('未找到该城市坐标，您也可直接输入城市代码查询');
        return;
      }
      weatherResult.textContent = '查询中...';
      const resp = await fetch(`/api/weather?lat=${encodeURIComponent(coord[1])}&lng=${encodeURIComponent(coord[0])}`);
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
  if(cityPickerBtn){ cityPickerBtn.addEventListener('click', openCityPicker); }
})();


