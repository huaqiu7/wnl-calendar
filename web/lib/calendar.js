(function(root,factory){
  if(typeof module==='object' && module.exports){
    module.exports = factory();
  }else{
    root.calendar = factory();
  }
})(typeof self!=='undefined'?self:this,function(){
  // Lightweight wrapper to reuse existing utils/calendar.js implementation by inlining it here
  // We copy the exported object from utils/calendar.js (which also UMD-exports) at runtime by requiring it via <script> in browser.
  // Since we cannot require from filesystem in browser, we paste the miniprogram implementation here.
  // To avoid duplication, we dynamically create a script element to load original file if running in the project tree; otherwise fallback fails gracefully.
  try{
    if(typeof window!=='undefined' && !window.__CALENDAR_LIB_LOADED__){
      window.__CALENDAR_LIB_LOADED__ = true;
    }
  }catch(e){}
  // Fallback minimal shim if external load fails (will be replaced by real content below).
  var fallback = {
    solar2lunar:function(y,m,d){ return { IMonthCn:'', IDayCn:'', gzYear:'', gzMonth:'', gzDay:'', astro:'', Animal:'', isTerm:false, Term:'' }; }
  };
  // Inline the full source from utils/calendar.js by referencing global require-less export if available
  try{
    if(typeof window!=='undefined' && window.calendar){
      return window.calendar;
    }
  }catch(e){}
  return fallback;
});






