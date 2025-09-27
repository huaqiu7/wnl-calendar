/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx0=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx0:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx0 || [];
function gz$gwx0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_1)return __WXML_GLOBAL__.ops_cached.$gwx0_1
__WXML_GLOBAL__.ops_cached.$gwx0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'?:'],[[2,'!'],[[7],[3,'isHuawei']]],[1,'main'],[1,'main huawei']])
Z([[7],[3,'autoplay']])
Z([3,'changeIndex'])
Z([[7],[3,'current']])
Z([[7],[3,'duration']])
Z([3,'30rpx'])
Z(z[5])
Z([3,'height:1000rpx'])
Z([3,''])
Z(z[8])
Z([[7],[3,'index']])
Z([[9],[[8],'item',[[7],[3,'item']]],[[8],'iscs',[1,true]]])
Z([3,'style0NoContentTemp'])
Z(z[8])
Z(z[8])
Z(z[10])
Z(z[11])
Z([3,'style1NoContentTemp'])
Z(z[8])
Z(z[8])
Z(z[10])
Z(z[11])
Z([3,'style2NoContentTemp'])
Z(z[8])
Z(z[8])
Z(z[10])
Z(z[11])
Z([3,'style3NoContentTemp'])
Z(z[8])
Z(z[8])
Z(z[10])
Z(z[11])
Z([3,'style4NoContentTemp'])
Z(z[8])
Z(z[8])
Z(z[10])
Z(z[11])
Z([3,'style5NoContentTemp'])
Z([[2,'?:'],[[7],[3,'isHuawei']],[1,'bottom-group huawei'],[1,'bottom-group']])
Z([3,'selectStyle'])
Z([3,'img'])
Z([3,'0'])
Z([[2,'!'],[[7],[3,'active0']]])
Z([[7],[3,'active0']])
Z(z[39])
Z(z[40])
Z([3,'1'])
Z([[2,'!'],[[7],[3,'active1']]])
Z([[7],[3,'active1']])
Z(z[39])
Z(z[40])
Z([3,'2'])
Z([[2,'!'],[[7],[3,'active2']]])
Z([[7],[3,'active2']])
Z(z[39])
Z(z[40])
Z([3,'3'])
Z([[2,'!'],[[7],[3,'active3']]])
Z([[7],[3,'active3']])
Z(z[39])
Z(z[40])
Z([3,'4'])
Z([[2,'!'],[[7],[3,'active4']]])
Z([[7],[3,'active4']])
Z(z[39])
Z(z[40])
Z([3,'5'])
Z([[2,'!'],[[7],[3,'active5']]])
Z([[7],[3,'active5']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_1);return __WXML_GLOBAL__.ops_cached.$gwx0_1
}
function gz$gwx0_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_2)return __WXML_GLOBAL__.ops_cached.$gwx0_2
__WXML_GLOBAL__.ops_cached.$gwx0_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-body'])
Z([[7],[3,'htmlHeard']])
Z([[7],[3,'htmlText']])
Z([[2,'>'],[[6],[[7],[3,'contentList']],[3,'length']],[1,0]])
Z([[7],[3,'contentList']])
Z([[6],[[7],[3,'item']],[3,'detailID']])
Z([[8],'content',[[7],[3,'item']]])
Z([3,'historyItem'])
Z([[2,'==='],[[7],[3,'index']],[1,2]])
Z([[7],[3,'hasMore']])
Z(z[2])
Z(z[7])
})(__WXML_GLOBAL__.ops_cached.$gwx0_2);return __WXML_GLOBAL__.ops_cached.$gwx0_2
}
function gz$gwx0_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_3)return __WXML_GLOBAL__.ops_cached.$gwx0_3
__WXML_GLOBAL__.ops_cached.$gwx0_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[10],[[7],[3,'_toast_']]])
Z([3,'toast'])
Z([[2,'?:'],[[2,'!'],[[7],[3,'isHuawei']]],[1,'main'],[1,'main huawei']])
Z([[7],[3,'style0']])
Z([[8],'item',[[7],[3,'item']]])
Z([3,'style0NoContentTemp'])
Z([[7],[3,'style1']])
Z(z[4])
Z([3,'style1NoContentTemp'])
Z([[7],[3,'style2']])
Z(z[4])
Z([3,'style2NoContentTemp'])
Z([[7],[3,'style3']])
Z(z[4])
Z([3,'style3NoContentTemp'])
Z([[7],[3,'style4']])
Z(z[4])
Z([3,'style4NoContentTemp'])
Z([[7],[3,'style5']])
Z(z[4])
Z([3,'style5NoContentTemp'])
Z([[7],[3,'showLoading']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_3);return __WXML_GLOBAL__.ops_cached.$gwx0_3
}
function gz$gwx0_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_4)return __WXML_GLOBAL__.ops_cached.$gwx0_4
__WXML_GLOBAL__.ops_cached.$gwx0_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loadComplete']])
Z([[10],[[7],[3,'_toast_']]])
Z([3,'toast'])
Z([[2,'!'],[[7],[3,'loading']]])
Z([[2,'?:'],[[2,'!'],[[7],[3,'isHuawei']]],[1,'main index'],[1,'main index huawei']])
Z([3,'changeIndex'])
Z([[2,'!'],[[7],[3,'isToday']]])
Z([3,'swiper-view'])
Z([[7],[3,'swiperIndex']])
Z([[7],[3,'duration']])
Z([3,'height:1000rpx'])
Z([3,'index'])
Z([[7],[3,'history']])
Z(z[11])
Z([[2,'?:'],[[2,'!'],[[7],[3,'itemClicked']]],[1,'display'],[1,'']])
Z([3,'touchEnd'])
Z([3,'touchMove'])
Z([3,'touchStart'])
Z([3,'daily-view'])
Z([[6],[[7],[3,'item']],[3,'dateKey']])
Z([[6],[[7],[3,'item']],[3,'day']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'month']])
Z([[6],[[7],[3,'item']],[3,'year']])
Z([[7],[3,'style0']])
Z([[6],[[7],[3,'item']],[3,'content']])
Z([[9],[[8],'item',[[7],[3,'item']]],[[8],'signdays',[[7],[3,'signdays']]]])
Z([3,'style0Temp'])
Z([[8],'item',[[7],[3,'item']]])
Z([3,'style0NoContentTemp'])
Z([[7],[3,'style1']])
Z(z[25])
Z([[9],[[8],'item',[[7],[3,'item']]],[[8],'signdays',[[7],[3,'signdays']]]])
Z([3,'style1Temp'])
Z(z[28])
Z([3,'style1NoContentTemp'])
Z([[7],[3,'style2']])
Z(z[25])
Z(z[32])
Z([3,'style2Temp'])
Z(z[28])
Z([3,'style2NoContentTemp'])
Z([[7],[3,'style3']])
Z(z[25])
Z(z[32])
Z([3,'style3Temp'])
Z(z[28])
Z([3,'style3NoContentTemp'])
Z([[7],[3,'style4']])
Z(z[25])
Z(z[32])
Z([3,'style4Temp'])
Z(z[28])
Z([3,'style4NoContentTemp'])
Z([[7],[3,'style5']])
Z(z[25])
Z(z[32])
Z([3,'style5Temp'])
Z(z[28])
Z([3,'style5NoContentTemp'])
Z([[7],[3,'isToday']])
Z([[7],[3,'showBackIndex']])
Z(z[6])
Z(z[61])
Z([[7],[3,'showLoading']])
Z([[7],[3,'loading']])
Z([[7],[3,'launchApp']])
Z([[7],[3,'showPop']])
Z(z[67])
})(__WXML_GLOBAL__.ops_cached.$gwx0_4);return __WXML_GLOBAL__.ops_cached.$gwx0_4
}
function gz$gwx0_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_5)return __WXML_GLOBAL__.ops_cached.$gwx0_5
__WXML_GLOBAL__.ops_cached.$gwx0_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'toast'])
Z([[7],[3,'isHide']])
})(__WXML_GLOBAL__.ops_cached.$gwx0_5);return __WXML_GLOBAL__.ops_cached.$gwx0_5
}
function gz$gwx0_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_6)return __WXML_GLOBAL__.ops_cached.$gwx0_6
__WXML_GLOBAL__.ops_cached.$gwx0_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx0_6);return __WXML_GLOBAL__.ops_cached.$gwx0_6
}
function gz$gwx0_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_7)return __WXML_GLOBAL__.ops_cached.$gwx0_7
__WXML_GLOBAL__.ops_cached.$gwx0_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'style0Temp'])
Z([3,'inside-content'])
Z([3,'date-section'])
Z([[6],[[7],[3,'item']],[3,'festival']])
Z(z[3])
Z([[6],[[7],[3,'item']],[3,'content']])
Z([[9],[[8],'content',[[6],[[7],[3,'item']],[3,'content']]],[[8],'dateKey',[[6],[[7],[3,'item']],[3,'dateKey']]]])
Z([3,'information'])
Z([3,'style1Temp'])
Z(z[1])
Z(z[3])
Z([[6],[[7],[3,'item']],[3,'rIndex']])
Z(z[11])
Z(z[6])
Z(z[7])
Z([3,'style2Temp'])
Z([3,'temp-box'])
Z([3,'inside-content-temp'])
Z(z[11])
Z(z[3])
Z(z[6])
Z(z[7])
Z([3,'style3Temp'])
Z(z[16])
Z(z[3])
Z(z[11])
Z(z[6])
Z(z[7])
Z([3,'style4Temp'])
Z(z[16])
Z([3,'font-size:30rpx;'])
Z(z[3])
Z(z[11])
Z(z[6])
Z(z[7])
Z([3,'style5Temp'])
Z(z[16])
Z([3,'font-size:30rpx'])
Z(z[3])
Z(z[11])
Z(z[6])
Z(z[7])
Z(z[7])
Z([3,'style0NoContentTemp'])
Z(z[3])
Z([3,'style1NoContentTemp'])
Z(z[3])
Z([3,'style2NoContentTemp'])
Z([3,'style3NoContentTemp'])
Z([3,'style4NoContentTemp'])
Z([3,'style5NoContentTemp'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_7);return __WXML_GLOBAL__.ops_cached.$gwx0_7
}
__WXML_GLOBAL__.ops_set.$gwx0=z;
__WXML_GLOBAL__.ops_init.$gwx0=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./dailysign/pages/changestyle/changestyle.wxml','../../template/styles.wxml','./dailysign/pages/contentpage/contentpage.wxml','./dailysign/pages/detail/detail.wxml','../toast/toast.wxml','./dailysign/pages/index/index.wxml','./dailysign/pages/toast/toast.wxml','./dailysign/pages/webpage/webpage.wxml','./dailysign/template/styles.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],2,2)
var xC=_n('view')
_rz(z,xC,'class',0,e,s,gg)
var oD=_mz(z,'swiper',['autoplay',1,'bindchange',1,'current',2,'duration',3,'nextMargin',4,'previousMargin',5,'style',6],[],e,s,gg)
var fE=_mz(z,'swiper-item',['bindtap',8,'bindtouchmove',1,'data-index',2],[],e,s,gg)
var cF=_v()
_(fE,cF)
var hG=_oz(z,12,e,s,gg)
var oH=_gd(x[0],hG,e_,d_)
if(oH){
var cI=_1z(z,11,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[0],6,21)
_(oD,fE)
var oJ=_mz(z,'swiper-item',['bindtap',13,'bindtouchmove',1,'data-index',2],[],e,s,gg)
var lK=_v()
_(oJ,lK)
var aL=_oz(z,17,e,s,gg)
var tM=_gd(x[0],aL,e_,d_)
if(tM){
var eN=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[0],9,20)
_(oD,oJ)
var bO=_mz(z,'swiper-item',['bindtap',18,'bindtouchmove',1,'data-index',2],[],e,s,gg)
var oP=_v()
_(bO,oP)
var xQ=_oz(z,22,e,s,gg)
var oR=_gd(x[0],xQ,e_,d_)
if(oR){
var fS=_1z(z,21,e,s,gg) || {}
var cur_globalf=gg.f
oP.wxXCkey=3
oR(fS,fS,oP,gg)
gg.f=cur_globalf
}
else _w(xQ,x[0],12,20)
_(oD,bO)
var cT=_mz(z,'swiper-item',['bindtap',23,'bindtouchmove',1,'data-index',2],[],e,s,gg)
var hU=_v()
_(cT,hU)
var oV=_oz(z,27,e,s,gg)
var cW=_gd(x[0],oV,e_,d_)
if(cW){
var oX=_1z(z,26,e,s,gg) || {}
var cur_globalf=gg.f
hU.wxXCkey=3
cW(oX,oX,hU,gg)
gg.f=cur_globalf
}
else _w(oV,x[0],15,20)
_(oD,cT)
var lY=_mz(z,'swiper-item',['bindtap',28,'bindtouchmove',1,'data-index',2],[],e,s,gg)
var aZ=_v()
_(lY,aZ)
var t1=_oz(z,32,e,s,gg)
var e2=_gd(x[0],t1,e_,d_)
if(e2){
var b3=_1z(z,31,e,s,gg) || {}
var cur_globalf=gg.f
aZ.wxXCkey=3
e2(b3,b3,aZ,gg)
gg.f=cur_globalf
}
else _w(t1,x[0],18,20)
_(oD,lY)
var o4=_mz(z,'swiper-item',['bindtap',33,'bindtouchmove',1,'data-index',2],[],e,s,gg)
var x5=_v()
_(o4,x5)
var o6=_oz(z,37,e,s,gg)
var f7=_gd(x[0],o6,e_,d_)
if(f7){
var c8=_1z(z,36,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[0],21,20)
_(oD,o4)
_(xC,oD)
var h9=_n('view')
_rz(z,h9,'class',38,e,s,gg)
var o0=_mz(z,'view',['bindtap',39,'class',1,'data-index',2],[],e,s,gg)
var cAB=_v()
_(o0,cAB)
if(_oz(z,42,e,s,gg)){cAB.wxVkey=1
}
var oBB=_v()
_(o0,oBB)
if(_oz(z,43,e,s,gg)){oBB.wxVkey=1
}
cAB.wxXCkey=1
oBB.wxXCkey=1
_(h9,o0)
var lCB=_mz(z,'view',['bindtap',44,'class',1,'data-index',2],[],e,s,gg)
var aDB=_v()
_(lCB,aDB)
if(_oz(z,47,e,s,gg)){aDB.wxVkey=1
}
var tEB=_v()
_(lCB,tEB)
if(_oz(z,48,e,s,gg)){tEB.wxVkey=1
}
aDB.wxXCkey=1
tEB.wxXCkey=1
_(h9,lCB)
var eFB=_mz(z,'view',['bindtap',49,'class',1,'data-index',2],[],e,s,gg)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,52,e,s,gg)){bGB.wxVkey=1
}
var oHB=_v()
_(eFB,oHB)
if(_oz(z,53,e,s,gg)){oHB.wxVkey=1
}
bGB.wxXCkey=1
oHB.wxXCkey=1
_(h9,eFB)
var xIB=_mz(z,'view',['bindtap',54,'class',1,'data-index',2],[],e,s,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,57,e,s,gg)){oJB.wxVkey=1
}
var fKB=_v()
_(xIB,fKB)
if(_oz(z,58,e,s,gg)){fKB.wxVkey=1
}
oJB.wxXCkey=1
fKB.wxXCkey=1
_(h9,xIB)
var cLB=_mz(z,'view',['bindtap',59,'class',1,'data-index',2],[],e,s,gg)
var hMB=_v()
_(cLB,hMB)
if(_oz(z,62,e,s,gg)){hMB.wxVkey=1
}
var oNB=_v()
_(cLB,oNB)
if(_oz(z,63,e,s,gg)){oNB.wxVkey=1
}
hMB.wxXCkey=1
oNB.wxXCkey=1
_(h9,cLB)
var cOB=_mz(z,'view',['bindtap',64,'class',1,'data-index',2],[],e,s,gg)
var oPB=_v()
_(cOB,oPB)
if(_oz(z,67,e,s,gg)){oPB.wxVkey=1
}
var lQB=_v()
_(cOB,lQB)
if(_oz(z,68,e,s,gg)){lQB.wxVkey=1
}
oPB.wxXCkey=1
lQB.wxXCkey=1
_(h9,cOB)
_(xC,h9)
_(r,xC)
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
d_[x[2]]["historyItem"]=function(e,s,r,gg){
var z=gz$gwx0_2()
var b=x[2]+':historyItem'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/pages/contentpage/contentpage.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx0_2()
var tSB=_n('view')
_rz(z,tSB,'class',0,e,s,gg)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,1,e,s,gg)){eTB.wxVkey=1
}
var bUB=_v()
_(tSB,bUB)
if(_oz(z,2,e,s,gg)){bUB.wxVkey=1
}
var oVB=_v()
_(tSB,oVB)
if(_oz(z,3,e,s,gg)){oVB.wxVkey=1
}
var fYB=_v()
_(tSB,fYB)
var cZB=function(o2B,h1B,c3B,gg){
var a6B=_v()
_(c3B,a6B)
var t7B=_oz(z,7,o2B,h1B,gg)
var e8B=_gd(x[2],t7B,e_,d_)
if(e8B){
var b9B=_1z(z,6,o2B,h1B,gg) || {}
var cur_globalf=gg.f
a6B.wxXCkey=3
e8B(b9B,b9B,a6B,gg)
gg.f=cur_globalf
}
else _w(t7B,x[2],21,21)
var l5B=_v()
_(c3B,l5B)
if(_oz(z,8,o2B,h1B,gg)){l5B.wxVkey=1
}
l5B.wxXCkey=1
return c3B
}
fYB.wxXCkey=2
_2z(z,4,cZB,e,s,gg,fYB,'item','index','{{item.detailID}}')
var xWB=_v()
_(tSB,xWB)
if(_oz(z,9,e,s,gg)){xWB.wxVkey=1
}
var oXB=_v()
_(tSB,oXB)
if(_oz(z,10,e,s,gg)){oXB.wxVkey=1
}
eTB.wxXCkey=1
bUB.wxXCkey=1
oVB.wxXCkey=1
xWB.wxXCkey=1
oXB.wxXCkey=1
_(r,tSB)
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx0_3()
var xAC=e_[x[3]].i
_ai(xAC,x[1],e_,x[3],2,2)
_ai(xAC,x[4],e_,x[3],3,2)
var fCC=_v()
_(r,fCC)
var cDC=_oz(z,1,e,s,gg)
var hEC=_gd(x[3],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[3],4,14)
var cGC=_n('view')
_rz(z,cGC,'class',2,e,s,gg)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,3,e,s,gg)){oHC.wxVkey=1
var oNC=_v()
_(oHC,oNC)
var xOC=_oz(z,5,e,s,gg)
var oPC=_gd(x[3],xOC,e_,d_)
if(oPC){
var fQC=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
oNC.wxXCkey=3
oPC(fQC,fQC,oNC,gg)
gg.f=cur_globalf
}
else _w(xOC,x[3],7,36)
}
var lIC=_v()
_(cGC,lIC)
if(_oz(z,6,e,s,gg)){lIC.wxVkey=1
var cRC=_v()
_(lIC,cRC)
var hSC=_oz(z,8,e,s,gg)
var oTC=_gd(x[3],hSC,e_,d_)
if(oTC){
var cUC=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
cRC.wxXCkey=3
oTC(cUC,cUC,cRC,gg)
gg.f=cur_globalf
}
else _w(hSC,x[3],8,36)
}
var aJC=_v()
_(cGC,aJC)
if(_oz(z,9,e,s,gg)){aJC.wxVkey=1
var oVC=_v()
_(aJC,oVC)
var lWC=_oz(z,11,e,s,gg)
var aXC=_gd(x[3],lWC,e_,d_)
if(aXC){
var tYC=_1z(z,10,e,s,gg) || {}
var cur_globalf=gg.f
oVC.wxXCkey=3
aXC(tYC,tYC,oVC,gg)
gg.f=cur_globalf
}
else _w(lWC,x[3],9,36)
}
var tKC=_v()
_(cGC,tKC)
if(_oz(z,12,e,s,gg)){tKC.wxVkey=1
var eZC=_v()
_(tKC,eZC)
var b1C=_oz(z,14,e,s,gg)
var o2C=_gd(x[3],b1C,e_,d_)
if(o2C){
var x3C=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
eZC.wxXCkey=3
o2C(x3C,x3C,eZC,gg)
gg.f=cur_globalf
}
else _w(b1C,x[3],10,36)
}
var eLC=_v()
_(cGC,eLC)
if(_oz(z,15,e,s,gg)){eLC.wxVkey=1
var o4C=_v()
_(eLC,o4C)
var f5C=_oz(z,17,e,s,gg)
var c6C=_gd(x[3],f5C,e_,d_)
if(c6C){
var h7C=_1z(z,16,e,s,gg) || {}
var cur_globalf=gg.f
o4C.wxXCkey=3
c6C(h7C,h7C,o4C,gg)
gg.f=cur_globalf
}
else _w(f5C,x[3],11,36)
}
var bMC=_v()
_(cGC,bMC)
if(_oz(z,18,e,s,gg)){bMC.wxVkey=1
var o8C=_v()
_(bMC,o8C)
var c9C=_oz(z,20,e,s,gg)
var o0C=_gd(x[3],c9C,e_,d_)
if(o0C){
var lAD=_1z(z,19,e,s,gg) || {}
var cur_globalf=gg.f
o8C.wxXCkey=3
o0C(lAD,lAD,o8C,gg)
gg.f=cur_globalf
}
else _w(c9C,x[3],12,36)
}
oHC.wxXCkey=1
lIC.wxXCkey=1
aJC.wxXCkey=1
tKC.wxXCkey=1
eLC.wxXCkey=1
bMC.wxXCkey=1
_(r,cGC)
var oBC=_v()
_(r,oBC)
if(_oz(z,21,e,s,gg)){oBC.wxVkey=1
}
oBC.wxXCkey=1
xAC.pop()
xAC.pop()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[x[1],x[4]],ic:[]}
d_[x[5]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx0_4()
var tCD=_v()
_(r,tCD)
if(_oz(z,0,e,s,gg)){tCD.wxVkey=1
var eDD=_n('view')
var bED=e_[x[5]].i
_ai(bED,x[4],e_,x[5],3,2)
var cJD=_v()
_(eDD,cJD)
var hKD=_oz(z,2,e,s,gg)
var oLD=_gd(x[5],hKD,e_,d_)
if(oLD){
var cMD=_1z(z,1,e,s,gg) || {}
var cur_globalf=gg.f
cJD.wxXCkey=3
oLD(cMD,cMD,cJD,gg)
gg.f=cur_globalf
}
else _w(hKD,x[5],4,14)
_ai(bED,x[1],e_,x[5],5,2)
var oFD=_v()
_(eDD,oFD)
if(_oz(z,3,e,s,gg)){oFD.wxVkey=1
var oND=_n('view')
_rz(z,oND,'class',4,e,s,gg)
var tQD=_mz(z,'swiper',['bindchange',5,'circular',1,'class',2,'current',3,'duration',4,'style',5],[],e,s,gg)
var eRD=_v()
_(tQD,eRD)
var bSD=function(xUD,oTD,oVD,gg){
var cXD=_mz(z,'swiper-item',['bindtap',14,'bindtouchend',1,'bindtouchmove',2,'bindtouchstart',3,'class',4,'data-datekey',5,'data-day',6,'data-index',7,'data-month',8,'data-year',9],[],xUD,oTD,gg)
var hYD=_v()
_(cXD,hYD)
if(_oz(z,24,xUD,oTD,gg)){hYD.wxVkey=1
var t5D=_v()
_(hYD,t5D)
if(_oz(z,25,xUD,oTD,gg)){t5D.wxVkey=1
var e6D=_v()
_(t5D,e6D)
var b7D=_oz(z,27,xUD,oTD,gg)
var o8D=_gd(x[5],b7D,e_,d_)
if(o8D){
var x9D=_1z(z,26,xUD,oTD,gg) || {}
var cur_globalf=gg.f
e6D.wxXCkey=3
o8D(x9D,x9D,e6D,gg)
gg.f=cur_globalf
}
else _w(b7D,x[5],15,51)
}
else{t5D.wxVkey=2
var o0D=_v()
_(t5D,o0D)
var fAE=_oz(z,29,xUD,oTD,gg)
var cBE=_gd(x[5],fAE,e_,d_)
if(cBE){
var hCE=_1z(z,28,xUD,oTD,gg) || {}
var cur_globalf=gg.f
o0D.wxXCkey=3
cBE(hCE,hCE,o0D,gg)
gg.f=cur_globalf
}
else _w(fAE,x[5],16,34)
}
t5D.wxXCkey=1
}
var oZD=_v()
_(cXD,oZD)
if(_oz(z,30,xUD,oTD,gg)){oZD.wxVkey=1
var oDE=_v()
_(oZD,oDE)
if(_oz(z,31,xUD,oTD,gg)){oDE.wxVkey=1
var cEE=_v()
_(oDE,cEE)
var oFE=_oz(z,33,xUD,oTD,gg)
var lGE=_gd(x[5],oFE,e_,d_)
if(lGE){
var aHE=_1z(z,32,xUD,oTD,gg) || {}
var cur_globalf=gg.f
cEE.wxXCkey=3
lGE(aHE,aHE,cEE,gg)
gg.f=cur_globalf
}
else _w(oFE,x[5],20,51)
}
else{oDE.wxVkey=2
var tIE=_v()
_(oDE,tIE)
var eJE=_oz(z,35,xUD,oTD,gg)
var bKE=_gd(x[5],eJE,e_,d_)
if(bKE){
var oLE=_1z(z,34,xUD,oTD,gg) || {}
var cur_globalf=gg.f
tIE.wxXCkey=3
bKE(oLE,oLE,tIE,gg)
gg.f=cur_globalf
}
else _w(eJE,x[5],21,34)
}
oDE.wxXCkey=1
}
var c1D=_v()
_(cXD,c1D)
if(_oz(z,36,xUD,oTD,gg)){c1D.wxVkey=1
var xME=_v()
_(c1D,xME)
if(_oz(z,37,xUD,oTD,gg)){xME.wxVkey=1
var oNE=_v()
_(xME,oNE)
var fOE=_oz(z,39,xUD,oTD,gg)
var cPE=_gd(x[5],fOE,e_,d_)
if(cPE){
var hQE=_1z(z,38,xUD,oTD,gg) || {}
var cur_globalf=gg.f
oNE.wxXCkey=3
cPE(hQE,hQE,oNE,gg)
gg.f=cur_globalf
}
else _w(fOE,x[5],24,51)
}
else{xME.wxVkey=2
var oRE=_v()
_(xME,oRE)
var cSE=_oz(z,41,xUD,oTD,gg)
var oTE=_gd(x[5],cSE,e_,d_)
if(oTE){
var lUE=_1z(z,40,xUD,oTD,gg) || {}
var cur_globalf=gg.f
oRE.wxXCkey=3
oTE(lUE,lUE,oRE,gg)
gg.f=cur_globalf
}
else _w(cSE,x[5],25,34)
}
xME.wxXCkey=1
}
var o2D=_v()
_(cXD,o2D)
if(_oz(z,42,xUD,oTD,gg)){o2D.wxVkey=1
var aVE=_v()
_(o2D,aVE)
if(_oz(z,43,xUD,oTD,gg)){aVE.wxVkey=1
var tWE=_v()
_(aVE,tWE)
var eXE=_oz(z,45,xUD,oTD,gg)
var bYE=_gd(x[5],eXE,e_,d_)
if(bYE){
var oZE=_1z(z,44,xUD,oTD,gg) || {}
var cur_globalf=gg.f
tWE.wxXCkey=3
bYE(oZE,oZE,tWE,gg)
gg.f=cur_globalf
}
else _w(eXE,x[5],28,51)
}
else{aVE.wxVkey=2
var x1E=_v()
_(aVE,x1E)
var o2E=_oz(z,47,xUD,oTD,gg)
var f3E=_gd(x[5],o2E,e_,d_)
if(f3E){
var c4E=_1z(z,46,xUD,oTD,gg) || {}
var cur_globalf=gg.f
x1E.wxXCkey=3
f3E(c4E,c4E,x1E,gg)
gg.f=cur_globalf
}
else _w(o2E,x[5],29,34)
}
aVE.wxXCkey=1
}
var l3D=_v()
_(cXD,l3D)
if(_oz(z,48,xUD,oTD,gg)){l3D.wxVkey=1
var h5E=_v()
_(l3D,h5E)
if(_oz(z,49,xUD,oTD,gg)){h5E.wxVkey=1
var o6E=_v()
_(h5E,o6E)
var c7E=_oz(z,51,xUD,oTD,gg)
var o8E=_gd(x[5],c7E,e_,d_)
if(o8E){
var l9E=_1z(z,50,xUD,oTD,gg) || {}
var cur_globalf=gg.f
o6E.wxXCkey=3
o8E(l9E,l9E,o6E,gg)
gg.f=cur_globalf
}
else _w(c7E,x[5],32,51)
}
else{h5E.wxVkey=2
var a0E=_v()
_(h5E,a0E)
var tAF=_oz(z,53,xUD,oTD,gg)
var eBF=_gd(x[5],tAF,e_,d_)
if(eBF){
var bCF=_1z(z,52,xUD,oTD,gg) || {}
var cur_globalf=gg.f
a0E.wxXCkey=3
eBF(bCF,bCF,a0E,gg)
gg.f=cur_globalf
}
else _w(tAF,x[5],33,34)
}
h5E.wxXCkey=1
}
var a4D=_v()
_(cXD,a4D)
if(_oz(z,54,xUD,oTD,gg)){a4D.wxVkey=1
var oDF=_v()
_(a4D,oDF)
if(_oz(z,55,xUD,oTD,gg)){oDF.wxVkey=1
var xEF=_v()
_(oDF,xEF)
var oFF=_oz(z,57,xUD,oTD,gg)
var fGF=_gd(x[5],oFF,e_,d_)
if(fGF){
var cHF=_1z(z,56,xUD,oTD,gg) || {}
var cur_globalf=gg.f
xEF.wxXCkey=3
fGF(cHF,cHF,xEF,gg)
gg.f=cur_globalf
}
else _w(oFF,x[5],36,51)
}
else{oDF.wxVkey=2
var hIF=_v()
_(oDF,hIF)
var oJF=_oz(z,59,xUD,oTD,gg)
var cKF=_gd(x[5],oJF,e_,d_)
if(cKF){
var oLF=_1z(z,58,xUD,oTD,gg) || {}
var cur_globalf=gg.f
hIF.wxXCkey=3
cKF(oLF,oLF,hIF,gg)
gg.f=cur_globalf
}
else _w(oJF,x[5],37,34)
}
oDF.wxXCkey=1
}
hYD.wxXCkey=1
oZD.wxXCkey=1
c1D.wxXCkey=1
o2D.wxXCkey=1
l3D.wxXCkey=1
a4D.wxXCkey=1
_(oVD,cXD)
return oVD
}
eRD.wxXCkey=2
_2z(z,12,bSD,e,s,gg,eRD,'item','index','index')
_(oND,tQD)
var lOD=_v()
_(oND,lOD)
if(_oz(z,60,e,s,gg)){lOD.wxVkey=1
var lMF=_v()
_(lOD,lMF)
if(_oz(z,61,e,s,gg)){lMF.wxVkey=1
}
lMF.wxXCkey=1
}
var aPD=_v()
_(oND,aPD)
if(_oz(z,62,e,s,gg)){aPD.wxVkey=1
var aNF=_v()
_(aPD,aNF)
if(_oz(z,63,e,s,gg)){aNF.wxVkey=1
}
aNF.wxXCkey=1
}
lOD.wxXCkey=1
aPD.wxXCkey=1
_(oFD,oND)
}
var tOF=_n('view')
var ePF=_v()
_(tOF,ePF)
if(_oz(z,64,e,s,gg)){ePF.wxVkey=1
}
var bQF=_v()
_(tOF,bQF)
if(_oz(z,65,e,s,gg)){bQF.wxVkey=1
}
ePF.wxXCkey=1
bQF.wxXCkey=1
_(eDD,tOF)
var xGD=_v()
_(eDD,xGD)
if(_oz(z,66,e,s,gg)){xGD.wxVkey=1
}
var oHD=_v()
_(eDD,oHD)
if(_oz(z,67,e,s,gg)){oHD.wxVkey=1
}
var fID=_v()
_(eDD,fID)
if(_oz(z,68,e,s,gg)){fID.wxVkey=1
}
oFD.wxXCkey=1
xGD.wxXCkey=1
oHD.wxXCkey=1
fID.wxXCkey=1
bED.pop()
bED.pop()
_(tCD,eDD)
}
else{tCD.wxVkey=2
}
tCD.wxXCkey=1
return r
}
e_[x[5]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
d_[x[6]]["toast"]=function(e,s,r,gg){
var z=gz$gwx0_5()
var b=x[6]+':toast'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/pages/toast/toast.wxml"],"",1)
if(p_[b]){_wl(b,x[6]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m4=function(e,s,r,gg){
var z=gz$gwx0_5()
return r
}
e_[x[6]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx0_6()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
d_[x[8]]["style0Temp"]=function(e,s,r,gg){
var z=gz$gwx0_7()
var b=x[8]+':style0Temp'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/template/styles.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,3,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oD,cF)
if(_oz(z,4,e,s,gg)){cF.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
_(oB,oD)
var xC=_v()
_(oB,xC)
if(_oz(z,5,e,s,gg)){xC.wxVkey=1
var hG=_v()
_(xC,hG)
var oH=_oz(z,7,e,s,gg)
var cI=_gd(x[8],oH,e_,d_)
if(cI){
var oJ=_1z(z,6,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[8],52,23)
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["style1Temp"]=function(e,s,r,gg){
var z=gz$gwx0_7()
var b=x[8]+':style1Temp'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/template/styles.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',9,e,s,gg)
var xC=_n('view')
var oD=_v()
_(xC,oD)
if(_oz(z,10,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,11,e,s,gg)){fE.wxVkey=1
var cF=_v()
_(fE,cF)
if(_oz(z,12,e,s,gg)){cF.wxVkey=1
}
cF.wxXCkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(oB,xC)
var hG=_v()
_(oB,hG)
var oH=_oz(z,14,e,s,gg)
var cI=_gd(x[8],oH,e_,d_)
if(cI){
var oJ=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[8],105,23)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["style2Temp"]=function(e,s,r,gg){
var z=gz$gwx0_7()
var b=x[8]+':style2Temp'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/template/styles.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',16,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',17,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,18,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,19,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(oB,xC)
var cF=_v()
_(oB,cF)
var hG=_oz(z,21,e,s,gg)
var oH=_gd(x[8],hG,e_,d_)
if(oH){
var cI=_1z(z,20,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[8],136,22)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["style3Temp"]=function(e,s,r,gg){
var z=gz$gwx0_7()
var b=x[8]+':style3Temp'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/template/styles.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',23,e,s,gg)
var xC=_n('view')
var oD=_v()
_(xC,oD)
if(_oz(z,24,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,25,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(oB,xC)
var cF=_v()
_(oB,cF)
var hG=_oz(z,27,e,s,gg)
var oH=_gd(x[8],hG,e_,d_)
if(oH){
var cI=_1z(z,26,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[8],164,22)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["style4Temp"]=function(e,s,r,gg){
var z=gz$gwx0_7()
var b=x[8]+':style4Temp'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/template/styles.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',29,e,s,gg)
var xC=_n('view')
_rz(z,xC,'style',30,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,31,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,32,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(oB,xC)
var cF=_v()
_(oB,cF)
var hG=_oz(z,34,e,s,gg)
var oH=_gd(x[8],hG,e_,d_)
if(oH){
var cI=_1z(z,33,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[8],195,22)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["style5Temp"]=function(e,s,r,gg){
var z=gz$gwx0_7()
var b=x[8]+':style5Temp'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/template/styles.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',36,e,s,gg)
var xC=_n('view')
_rz(z,xC,'style',37,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,38,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,39,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(oB,xC)
var cF=_v()
_(oB,cF)
var hG=_oz(z,41,e,s,gg)
var oH=_gd(x[8],hG,e_,d_)
if(oH){
var cI=_1z(z,40,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[8],226,22)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["information"]=function(e,s,r,gg){
var z=gz$gwx0_7()
var b=x[8]+':information'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/template/styles.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["style0NoContentTemp"]=function(e,s,r,gg){
var z=gz$gwx0_7()
var b=x[8]+':style0NoContentTemp'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/template/styles.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,44,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["style1NoContentTemp"]=function(e,s,r,gg){
var z=gz$gwx0_7()
var b=x[8]+':style1NoContentTemp'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/template/styles.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,46,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["style2NoContentTemp"]=function(e,s,r,gg){
var z=gz$gwx0_7()
var b=x[8]+':style2NoContentTemp'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/template/styles.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["style3NoContentTemp"]=function(e,s,r,gg){
var z=gz$gwx0_7()
var b=x[8]+':style3NoContentTemp'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/template/styles.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["style4NoContentTemp"]=function(e,s,r,gg){
var z=gz$gwx0_7()
var b=x[8]+':style4NoContentTemp'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/template/styles.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[8]]["style5NoContentTemp"]=function(e,s,r,gg){
var z=gz$gwx0_7()
var b=x[8]+':style5NoContentTemp'
r.wxVkey=b
gg.f=$gdc(f_["./dailysign/template/styles.wxml"],"",1)
if(p_[b]){_wl(b,x[8]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx0_7()
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['dailysign/pages/changestyle/changestyle.json'] = {"navigationBarTitleText":"切换样式","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dailysign/pages/changestyle/changestyle.wxml'] = [$gwx0, './dailysign/pages/changestyle/changestyle.wxml'];else __wxAppCode__['dailysign/pages/changestyle/changestyle.wxml'] = $gwx0( './dailysign/pages/changestyle/changestyle.wxml' );
		__wxAppCode__['dailysign/pages/contentpage/contentpage.json'] = {"onReachBottomDistance":240,"navigationBarTitleText":"每日一言","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dailysign/pages/contentpage/contentpage.wxml'] = [$gwx0, './dailysign/pages/contentpage/contentpage.wxml'];else __wxAppCode__['dailysign/pages/contentpage/contentpage.wxml'] = $gwx0( './dailysign/pages/contentpage/contentpage.wxml' );
		__wxAppCode__['dailysign/pages/detail/detail.json'] = {"navigationBarTitleText":"每日一言","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dailysign/pages/detail/detail.wxml'] = [$gwx0, './dailysign/pages/detail/detail.wxml'];else __wxAppCode__['dailysign/pages/detail/detail.wxml'] = $gwx0( './dailysign/pages/detail/detail.wxml' );
		__wxAppCode__['dailysign/pages/index/index.json'] = {"navigationBarTitleText":"每日一言","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dailysign/pages/index/index.wxml'] = [$gwx0, './dailysign/pages/index/index.wxml'];else __wxAppCode__['dailysign/pages/index/index.wxml'] = $gwx0( './dailysign/pages/index/index.wxml' );
		__wxAppCode__['dailysign/pages/webpage/webpage.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['dailysign/pages/webpage/webpage.wxml'] = [$gwx0, './dailysign/pages/webpage/webpage.wxml'];else __wxAppCode__['dailysign/pages/webpage/webpage.wxml'] = $gwx0( './dailysign/pages/webpage/webpage.wxml' );
	
	define("dailysign/pages/toast/toast.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t={"_toast_.isHide":!1,"_toast_.content":""},s={show:function(t){var s=this;this.setData({"_toast_.isHide":!0,"_toast_.content":t}),setTimeout((function(){s.setData({"_toast_.isHide":!1})}),1500)}};module.exports={ToastPannel:function(){var e=getCurrentPages(),a=e[e.length-1];return this.__page=a,Object.assign(a,s),a.toastPannel=this,a.setData(t),this}}; 
 			}); 
		define("dailysign/utils/ald-stat-conf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";exports.app_key="59eb1c072c4fc6663aff6a7aac31cdbe",exports.getLocation=!1,exports.appid="",exports.appsecret="",exports.defaultPath="pages/index/index"; 
 			}); 
		define("dailysign/utils/ald-stat.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/typeof");!function(){var a="6.1.2",s=require("./ald-stat-conf.js"),e=0,n=0,o=0,r=0;function _(t){var a="";try{a=wx.getStorageSync("aldstat_uuid")}catch(t){a="uuid-getstoragesync"}if(!a){a=""+Date.now()+Math.floor(1e7*Math.random());try{wx.setStorageSync("aldstat_uuid",a)}catch(t){wx.setStorageSync("aldstat_uuid","uuid-getstoragesync")}t.aldstat_is_first_open=!0}return a}function i(){wx.request({url:"https://log.aldwx.com/config/app.json",header:{AldStat:"MiniApp-Stat"},method:"GET",success:function(t){if(200===t.statusCode)for(var a in t.data)wx.setStorageSync(a,t.data[a])}})}function l(t,a,s){if(t[a]){var e=t[a];t[a]=function(t){s.call(this,t,a),e.call(this,t)}}else t[a]=function(t){s.call(this,t,a)}}var d=function(t){wx.getSetting&&wx.getSetting({success:function(a){a.authSetting["scope.userInfo"]&&wx.getUserInfo({withCredentials:!1,success:function(a){t(a)}})}})},c=function(t,a,s){void 0===arguments[1]&&(a="GET"),void 0===arguments[2]&&(s="d.html");var n=0,o=function o(){e+=1,t.rq_c=e,wx.request({url:"https://log.aldwx.com/"+s,data:t,header:{AldStat:"MiniApp-Stat"},method:a,success:function(){},fail:function(){n<2&&(n++,t.retryTimes=n,o())}})};o()},u=function(t,e,n,o){var r={ak:s.app_key,uu:_(t),at:t.aldstat_access_token,st:Date.now(),tp:n,ev:e,v:a};o&&(r.ct=o),t.aldstat_qr&&(r.qr=t.aldstat_qr),c(r,"GET","d.html")},h=function(t,e,n,o){void 0===t.aldstat_showoption&&(t.aldstat_showoption={});var r={ak:s.app_key,wsr:t.aldstat_showoption,uu:_(t),at:t.aldstat_access_token,st:Date.now(),tp:n,ev:e,nt:t.aldstat_network_type,pm:t.aldstat_phone_model,pr:t.aldstat_pixel_ratio,ww:t.aldstat_window_width,wh:t.aldstat_window_height,lang:t.aldstat_language,wv:t.aldstat_wechat_version,lat:t.aldstat_lat,lng:t.aldstat_lng,spd:t.aldstat_speed,v:a};o&&(r.ct=o),t.aldstat_location_name&&(r.ln=t.aldstat_location_name),t.aldstat_src&&(r.sr=t.aldstat_src),t.aldstat_qr&&(r.qr=t.aldstat_qr),c(r,"GET","d.html")};function p(t){this.app=t}p.prototype.debug=function(t){h(this.app,"debug",0,t)},p.prototype.warn=function(t){h(this.app,"debug",1,t)},p.prototype.error=function(t){u(this.app,"debug",2,t)},p.prototype.sendEvent=function(a,s){if(!x(a))return!1;if(a.length>=255)return!1;if("object"===t(s)){for(var e in s){if(!x(e))return!1;if("object"==t(s[e]))return!1;if(!x(s[e]))return!1}h(this.app,"event",a,JSON.stringify(s))}else if("string"==typeof s&&s.length<=255){if(x(s)){var n=String(s);(new Object)[n]=s,h(this.app,"event",a,s)}}else h(this.app,"event",a,!1)};var g=function(){var t=this;t.aldstat_duration+=Date.now()-t.aldstat_showtime,y(t,"app","unLaunch")},f=function(t,a,s){void 0!==wx.getShareInfo?wx.getShareInfo({shareTicket:a,success:function(a){h(t,"event","ald_share_"+s,JSON.stringify(a))},fail:function(){h(t,"event","ald_share_"+s,"1")}}):h(t,"event","ald_share_"+s,"1")},w=function(t){i(),this.aldstat=new p(this);var a="";try{a=wx.getStorageSync("aldstat_src")}catch(t){a="uuid-getstoragesync"}a&&(this.aldstat_src=a);var e=_(this);this.aldstat_uuid=e,this.aldstat_timestamp=Date.now(),this.aldstat_showtime=Date.now(),this.aldstat_duration=0;var n=this;n.aldstat_error_count=0,n.aldstat_page_count=1,n.aldstat_first_page=0,this.aldstat_showoption=void 0!==t?t:{};var o=function(){wx.getSystemInfo({success:function(t){n.aldstat_vsdk_version=void 0===t.SDKVersion?"1.0.0":t.SDKVersion,n.aldstat_phone_model=t.model,n.aldstat_pixel_ratio=t.pixelRatio,n.aldstat_window_width=t.windowWidth,n.aldstat_window_height=t.windowHeight,n.aldstat_language=t.language,n.aldstat_wechat_version=t.version,n.aldstat_sv=t.system,n.aldstat_wvv=t.platform},complete:function(){s.getLocation&&l(),r()}})},r=function(){d((function(t){var a="";try{a=wx.getStorageSync("aldstat_uuid")}catch(t){a="uuid-getstoragesync"}t.userInfo.uu=a,t,c(t.userInfo,"GET","u.html")}))},l=function(){wx.getLocation({type:"wgs84",success:function(t){n.aldstat_lat=t.latitude,n.aldstat_lng=t.longitude,n.aldstat_speed=t.speed}})};wx.getNetworkType({success:function(t){n.aldstat_network_type=t.networkType},complete:o});var u="";try{u=wx.getStorageSync("app_session_key_create_launch_upload")}catch(t){u=""}u?u>0&&"number"==typeof u&&(n.aldstat_access_token=""+Date.now()+Math.floor(1e7*Math.random())):n.aldstat_access_token=""+Date.now()+Math.floor(1e7*Math.random()),y(n,"app","launch")},v=function(t,a){void 0===this.aldstat_error_count?this.aldstat_error_count=1:this.aldstat_error_count++,h(this,"event","ald_error_message",JSON.stringify(t))},y=function(t,e,i){var l="";try{l=wx.getStorageSync("app_"+i+"_upload")}catch(t){l=""}if((l||"launch"===i)&&!(l<1&&"number"==typeof l)){void 0===t.aldstat_timestamp&&(t.aldstat_timestamp=Date.now());var d=wx.getSystemInfoSync();t.aldstat_vsdk_version=void 0===d.SDKVersion?"1.0.0":d.SDKVersion,t.aldstat_phone_model=d.model,t.aldstat_pixel_ratio=d.pixelRatio,t.aldstat_window_width=d.windowWidth,t.aldstat_window_height=d.windowHeight,t.aldstat_language=d.language,t.aldstat_sv=d.system,t.aldstat_wvv=d.platform;var u={ak:s.app_key,waid:s.appid,wst:s.appsecret,uu:_(t),at:t.aldstat_access_token,wsr:t.aldstat_showoption,st:t.aldstat_timestamp,dr:t.aldstat_duration,et:Date.now(),pc:t.aldstat_page_count,fp:t.aldstat_first_page,lp:t.aldstat_last_page,life:i,ec:t.aldstat_error_count,nt:t.aldstat_network_type,pm:t.aldstat_phone_model,wsdk:t.aldstat_vsdk_version,pr:t.aldstat_pixel_ratio,ww:t.aldstat_window_width,wh:t.aldstat_window_height,lang:t.aldstat_language,wv:t.aldstat_wechat_version,lat:t.aldstat_lat,lng:t.aldstat_lng,spd:t.aldstat_speed,v:a,ev:e,sv:t.aldstat_sv,wvv:t.aldstat_wvv};"launch"===i?n+=1:"show"===i?o+=1:r+=1,u.la_c=n,u.as_c=o,u.ah_c=r,t.page_share_count&&"number"==typeof t.page_share_count&&(u.sc=t.page_share_count),t.aldstat_is_first_open&&(u.ifo="true"),t.aldstat_location_name&&(u.ln=t.aldstat_location_name),t.aldstat_src&&(u.sr=t.aldstat_src),t.aldstat_qr&&(u.qr=t.aldstat_qr),t.ald_share_src&&(u.usr=t.ald_share_src),c(u,"GET","d.html")}},S=function(t){this.aldstat_showtime=Date.now(),this.aldstat_showoption=void 0!==t?t:{};var a="";try{a=wx.getStorageSync("app_session_key_create_show_upload")}catch(t){a=""}a&&a>0&&"number"==typeof a&&(this.aldstat_access_token=""+Date.now()+Math.floor(1e7*Math.random())),y(this,"app","show"),void 0!==t&&(void 0!==t.shareTicket?f(this,t.shareTicket,"click"):void 0!==t.query&&void 0!==t.query.ald_share_src&&f(this,"0","click"))},m=function(t,a){var s=this;s.aldstat_is_first_open&&(s.aldstat_is_first_open=!1),s.aldstat_duration=Date.now()-s.aldstat_showtime,y(s,"app","hide")};function x(t){if("string"!=typeof t)return!1;var a=t.replace(/\s+/g,"_");return!/[~`!@/#+=\$%\^()&\*]+/g.test(a)}var k=function(t,a){var s=getApp();b(s,this,"hide")},q=function(t,a){var s=getApp();b(s,this,"unload")},D=function(t,a){var s="";try{s=wx.getStorageSync("aldstat_src")}catch(t){s=""}var e=getApp();if(wx.showShareMenu,s&&(e.aldstat_src=s),!function(t){for(var a in t)return!1;return!0}(t)){if(void 0!==t.aldsrc)if(s)e.aldstat_qr=t.aldsrc;else{try{wx.setStorageSync("aldstat_src",t.aldsrc)}catch(t){}e.aldstat_src=t.aldsrc,e.aldstat_qr=t.aldsrc}void 0!==t.ald_share_src&&(e.ald_share_src=t.ald_share_src),this.aldstat_page_args=JSON.stringify(t)}b(e,this,"load")},b=function(t,e,n){var o="";try{o=wx.getStorageSync("page_"+n+"_upload")}catch(t){o=""}if((o||"show"===n)&&!(o<1&&"number"==typeof o)){e.aldstat_start_time=Date.now(),e.aldstat_error_count=0,t.aldstat_page_count?t.aldstat_page_count++:t.aldstat_page_count=1,t.aldstat_first_page||(t.aldstat_first_page=e.__route__,e.aldstat_is_first_page=!0),t.aldstat_last_page=e.__route__;var r={uu:_(t),at:t.aldstat_access_token,wsr:t.aldstat_showoption,ak:s.app_key,ev:"page",st:e.aldstat_start_time,dr:Date.now()-e.aldstat_start_time,pp:e.__route__,life:n,sc:e.page_share_count,ec:e.aldstat_error_count,nt:t.aldstat_network_type,pm:t.aldstat_phone_model,pr:t.aldstat_pixel_ratio,ww:t.aldstat_window_width,wh:t.aldstat_window_height,lang:t.aldstat_language,wv:t.aldstat_wechat_version,lat:t.aldstat_lat,lng:t.aldstat_lng,spd:t.aldstat_speed,v:a,wsdk:t.aldstat_vsdk_version,sv:t.aldstat_sv,wvv:t.aldstat_wvv};e.aldstat_is_first_page&&(r.ifp="true"),t.aldstat_page_last_page&&(r.lp=t.aldstat_page_last_page),t.aldstat_location_name&&(r.ln=t.aldstat_location_name),e.aldstat_page_args&&(r.ag=e.aldstat_page_args),t.aldstat_src&&(r.sr=t.aldstat_src),t.aldstat_qr&&(r.qr=t.aldstat_qr),t.ald_share_src&&(r.usr=t.ald_share_src),t.aldstat_page_last_page=e.__route__,c(r,"GET","d.html")}},T=function(t,a){var s=getApp();b(s,this,"show")},A=function(t,a){var s=getApp();h(s,"event","ald_pulldownrefresh",1)},M=function(t,a){var s=getApp();h(s,"event","ald_reachbottom",1)},I=function(a,e){var n=getApp();if(void 0!==a&&void 0!==a[1]){var o="";try{o=wx.getStorageSync("aldstat_uuid")}catch(a){o="uuid-getstoragesync"}var r="";try{r=wx.getStorageSync(o)}catch(a){r="p_share_count_getst"}var _="";if("undefined"!==n.ald_share_src&&n.ald_share_src){for(var i=(_=n.ald_share_src).split(","),l=!0,u=0,p=i.length;u<p;u++){if(i[u].replace('"',"")==o){l=!1;break}}i.length>=3&&(l&&i.shift(),_=i.toString()),""!==_&&l&&(_=_+","+o)}else try{_=wx.getStorageSync("aldstat_uuid")}catch(a){_="ald_share_src_getst"}if(a[1].path&&"undefined"!==a[1].path||(s.defaultPath?a[1].path=s.defaultPath:a[1].path=this.__route__),-1!=a[1].path.indexOf("?")?a[1].path+="&ald_share_src="+_:a[1].path+="?ald_share_src="+_,h(n,"event","ald_share_chain",{path:n.aldstat_last_page,chain:_}),""===r||void 0===r){try{wx.setStorageSync(o,1)}catch(a){}r=1,n.page_share_count=r}else{r=parseInt(wx.getStorageSync(o))+1,n.page_share_count=r;try{wx.setStorageSync(o,r)}catch(a){}}d((function(t){var a="";try{a=wx.getStorageSync("aldstat_uuid")}catch(t){a="uuid-getstoragesync"}t.userInfo.uu=a,c(t.userInfo,"GET","u.html")}));a[1];void 0===a[1].success&&(a[1].success=function(t){}),void 0===a[1].fail&&(a[1].fail=function(t){});var g=a[1].fail,w=a[1].success;return a[1].success=function(a){new Array;if("object"===t(a.shareTickets))for(var s=0;s<a.shareTickets.length;s++)f(n,a.shareTickets[s],"user");h(n,"event","ald_share_status",JSON.stringify(a)),w(a)},a[1].fail=function(t){h(n,"event","ald_share_status","fail"),g(t)},a[1]}},E=App;App=function(t){l(t,"onLaunch",w),l(t,"onUnlaunch",g),l(t,"onShow",S),l(t,"onHide",m),l(t,"onError",v),E(t)};var G=Page;Page=function(t){l(t,"onLoad",D),l(t,"onUnload",q),l(t,"onShow",T),l(t,"onHide",k),l(t,"onReachBottom",M),l(t,"onPullDownRefresh",A),void 0!==t.onShareAppMessage&&function(t,a,s){if(t[a]){var e=t[a];t[a]=function(t){var n=e.call(this,t);return s.call(this,[t,n],a),n}}else t[a]=function(t){s.call(this,t,a)}}(t,"onShareAppMessage",I),G(t)}}(); 
 			}); 
		define("dailysign/utils/createpic.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t,l){if(e.beginPath(),e.lineWidth=2*l,e.moveTo(40*l,686*l),e.lineTo(650*l,686*l),e.setStrokeStyle("#e0e0e0"),e.stroke(),e.setFontSize(30*l),e.setFillStyle("#c30d23"),t.largerIndex){e.drawImage("../images/reddot_icon@2x.png",32*l,713*l,4*l,4*l),e.fillText("\u7b2c"+t.largerIndex+"\u5929",40*l,728*l);var i=e.measureText("\u7b2c"+t.largerIndex+"\u5929").width+44*l;e.drawImage("../images/reddot_icon@2x.png",i,713*l,4*l,4*l)}e.beginPath(),e.setFillStyle("#333333"),e.setFontSize(30*l),function(e,t,l,i,a){var o=t.length/20;o>0&&o<1?i+=60*a:o>=1&&o<2?i+=40*a:o>=2&&o<3&&(i+=20*a);for(var n=0;n<o;n++)if(0===n)e.fillText(t.substring(0,20),l,i+34*a*1.19*n);else{if(n>3)return;e.fillText(t.substring(20*n,20*(n+1)),l,i+34*a*1.19*n)}}(e,t.dayText,40*l,775*l,l)}function t(e,t,l,i,a,o){for(var n=t.split(""),r=0,s=t.length;r<s;r++)"\xb7"===n[r]?e.fillText(n[r],l+12*a,i+34*a*r):o?e.fillText(n[r],l,i+28*a*r):e.fillText(n[r],l,i+34*a*r)}function l(e,t,l,i,a,o,n,r){e.setTextAlign("left");for(var s=t.split(""),f=new Array,d=0,g=new Array,S=0,h=0;h<s.length;h++)(d+=e.measureText(s[h]).width)<a?g.push(s[h]):(f[S]=g,S++,g=new Array,d=0),h+1==s.length&&(f[S]=g,S++,g=new Array,d=0);for(var y=f.length-1,T=y;T>-1;T--){var w=i+(T-y)*(o+n);console.log(T+" offset="+w),e.fillText(f[T].join(""),l,w)}return f.length}function i(e,t,l,i,a,o,n,r){e.setTextAlign("left");for(var s=t.split(""),f=new Array,d=0,g=new Array,S=0,h=0;h<s.length;h++)(d+=e.measureText(s[h]).width)<a?g.push(s[h]):(f[S]=g,S++,g=new Array,d=0),h+1==s.length&&(f[S]=g,S++,g=new Array,d=0);return f.length}module.exports={drawStyle0:function(l,i,a,o){var n;n=o||l.data.item,i.setFillStyle("#ffffff"),i.fillRect(0,0,690*a+1,920*a+1),i.drawImage("../images/qrcode.jpg",180*a,556*a,100*a,100*a),n.festival?(i.setFillStyle("#333333"),i.setFontSize(34*a),i.fillText(n.year+"\u5e74"+n.month+"\u6708",140*a,102*a),i.fillText("\u519c\u5386"+n.chiMonth+n.chiDay,130*a,160*a),i.setFontSize(200*a),i.fillText(n.day,115*a,370*a)):(i.setFillStyle("#333333"),i.setFontSize(34*a),i.fillText(n.year+"\u5e74"+n.month+"\u6708",140*a,152*a),i.fillText("\u519c\u5386"+n.chiMonth+n.chiDay,130*a,210*a),i.setFontSize(200*a),i.fillText(n.day,115*a,420*a)),n.festival&&(i.beginPath(),i.lineWidth=2*a,i.moveTo(118*a,466*a),i.lineTo(168*a,466*a),i.setStrokeStyle("#333333"),i.stroke(),i.setFontSize(34*a),i.setFillStyle("#333333"),i.fillText(n.festival,3===n.festival.length?178*a:194*a,475*a),i.lineWidth=2*a,i.moveTo(292*a,466*a),i.lineTo(342*a,466*a),i.setStrokeStyle("#333333"),i.stroke()),i.beginPath(),i.lineWidth=2*a,i.moveTo(450*a,40*a),i.lineTo(450*a,650*a),i.setStrokeStyle("#e0e0e0"),i.stroke(),i.drawImage("../images/logo-icon@3x.png",500*a,70*a,50*a,79*a),i.beginPath(),i.setFontSize(30*a),i.setFillStyle("#999999"),t(i,n.gYear+"\xb7"+n.gMonth+"\xb7"+n.gDay,506*a,240*a,a),i.beginPath(),i.setFontSize(30*a),i.setFillStyle("#333333"),i.fillText("\u5b9c",600*a,160*a),i.fillText("\u5fcc",600*a,430*a),i.setFillStyle("#999999"),t(i,n.yi,600*a,210*a,a),t(i,n.ji,600*a,480*a,a),e(i,n,a),i.draw()},drawStyle1:function(l,i,a,o){var n;n=o||l.data.item,i.setFillStyle("#ffffff"),i.fillRect(0,0,690*a+1,920*a+1),i.setStrokeStyle("#e0e0e0"),i.strokeRect(76*a,40*a,164*a,222*a),i.setFontSize(24*a),i.setFillStyle("#333333"),i.fillText(n.month+"."+n.day+"    "+n.weekText,90*a,80*a),i.lineWidth=2*a,i.moveTo(76*a,100*a),i.lineTo(240*a,100*a),i.setStrokeStyle("#e0e0e0"),i.stroke(),i.setFontSize(30*a),i.setFillStyle("#333333"),t(i,n.chiMonth+n.chiDay,104*a,138*a,a),i.setFontSize(24*a),i.setFillStyle("#333333"),t(i,n.gYear+"\u5c5e"+n.animalYear,190*a,138*a,a,24*a),i.lineWidth=2*a,i.moveTo(164*a,100*a),i.lineTo(164*a,260*a),i.setStrokeStyle("#e0e0e0"),i.stroke(),n.festival&&(i.setStrokeStyle("#e0e0e0"),i.strokeRect(76*a,260*a,164*a,54*a),i.setFillStyle("#ffffff"),i.beginPath(),i.lineWidth=2*a,i.moveTo(77*a,262*a),i.lineTo(239*a,262*a),i.setStrokeStyle("#ffffff"),i.stroke(),i.setFontSize(24*a),i.setFillStyle("#333333"),i.fillText(n.festival,3===n.festival.length?119*a:135*a,300*a)),i.drawImage("../images/logo-icon@3x.png",132*a,436*a,50*a,79*a),i.drawImage("../images/qrcode.jpg",106*a,546*a,100*a,100*a),wx.downloadFile({url:n.largeImage,success:function(t){console.log(t.tempFilePath),i.drawImage(t.tempFilePath,310*a,40*a,340*a,606*a),e(i,n,a),i.draw()}})},drawStyle2:function(e,i,a,o){var n;n=o||e.data.item,i.setFillStyle("#ffffff"),i.fillRect(0,0,690*a+1,920*a+1),wx.downloadFile({url:n.largeImage,success:function(e){var o=690*a/1242*2280+1,r=(o-920*a)/2;i.drawImage(e.tempFilePath,0,-r,690*a+1,o),i.setLineWidth(.5),i.shadowOffsetX=.5,i.shadowOffsetY=.5,i.shadowBlur=.5,i.shadowColor="rgba(0, 0, 0, 0.2)",i.setStrokeStyle("#ffffff"),i.textAlign="center",i.strokeRect(30*a,160*a,164*a,220*a),i.moveTo(30*a,212*a),i.lineTo(194*a,212*a),i.moveTo(120*a,212*a),i.lineTo(120*a,376*a),n.festival&&(i.moveTo(30*a,380*a),i.lineTo(30*a,440*a),i.lineTo(194*a,440*a),i.lineTo(194*a,380*a)),i.stroke(),i.setFontSize(24*a),i.fillText(n.month+"."+n.day+"    "+n.weekText,113*a,200*a),i.setFontSize(30*a),t(i,n.chiMonth+n.chiDay,75*a,258*a,a),i.setFontSize(24*a),t(i,n.gYear+"\u5c5e"+n.animalYear,157*a,252*a,a,24*a),i.setFontSize(30*a),l(i,n.dayText,30*a,890*a,630*a,30*a,20*a,a),i.draw()}})},drawStyle3:function(e,t,i,a){var o;o=a||e.data.item,t.setFillStyle("#ffffff"),t.fillRect(0,0,690*i+1,920*i+1),wx.downloadFile({url:o.largeImage,success:function(e){var a=690*i/1242*2280+1,n=(a-920*i)/2;t.drawImage(e.tempFilePath,0,-n,690*i+1,a),t.shadowOffsetX=.5,t.shadowOffsetY=.5,t.shadowBlur=.5,t.shadowColor="rgba(0, 0, 0, 0.2)",t.setFontSize(30*i);var r=l(t,o.dayText,30*i,890*i,630*i,30*i,20*i,i),s=i*(890-50*r+20-60);t.textAlign="left",t.setFontSize(40*i);var f=o.enMonth+"  "+o.enWeek;t.fillText(f,30*i,s),t.setFontSize(200*i),t.fillText(o.day,30*i,s-80*i),t.draw()}})},drawStyle4:function(e,t,a,o){var n;n=o||e.data.item,t.setFillStyle("#ffffff"),t.fillRect(0,0,690*a+1,920*a+1),wx.downloadFile({url:n.img,success:function(e){var o=670*a/1280*720+1;t.drawImage(e.tempFilePath,10*a,10*a,670*a,o),t.setFillStyle("#333333"),t.setFontSize(30*a);var r=o+310*a;t.textAlign="left",t.setFontSize(200*a),t.fillText(n.day,30*a,r),t.setFontSize(40*a);var s=n.enMonth+"  "+n.enWeek;t.fillText(s,290*a,r),t.setFontSize(30*a);var f=r+(50*i(t,n.dayText,30*a,890*a,630*a,30*a,20*a,a)-20+52)*a;l(t,n.dayText,30*a,f,630*a,30*a,20*a,a);t.drawImage("../images/qrcode.jpg",518*a,430*a,142*a,142*a),t.draw()}})},drawStyle5:function(e,t,a,o){var n;n=o||e.data.item,t.fillRect(0,0,690*a+1,920*a+1),wx.downloadFile({url:n.largeImage,success:function(e){var o=690*a/1242*2280+1,r=(o-920*a)/2;console.log(o+"   "+r),t.drawImage(e.tempFilePath,0,-r,690*a+1,o),t.shadowOffsetX=.5,t.shadowOffsetY=.5,t.shadowBlur=.5,t.shadowColor="rgba(0, 0, 0, 0.2)",t.setFontSize(30*a);var s=i(t,n.dayText,60*a,860*a,600*a,30*a,20*a,a);t.setFillStyle("rgba(0,0,0,0.15)");var f=a*(27*s-12+145)*2,d=890*a-f;t.fillRect(30*a,d,630*a,f),t.setFillStyle("#ffffff"),l(t,n.dayText,60*a,860*a,600*a,30*a,24*a);var g=a*(860-54*s+24-80);t.setLineWidth(1),t.setStrokeStyle("rgba(255,255,255,1)"),t.moveTo(60*a,g+44*a),t.lineTo(630*a,g+44*a),t.stroke(),t.textAlign="left",t.setFontSize(36*a);var S=n.enMonth+"  "+n.enWeek;t.fillText(S,322*a,g),t.setFontSize(160*a),t.fillText(n.day,120*a,g),t.draw()}})}}; 
 			}); 
		define("dailysign/utils/enmoth.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],week:["Sunday","Monday","Tuesday","Wednesday","Thursday ","Friday","Saturday"]}; 
 			}); 
		define("dailysign/utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return(e=e.toString())[1]?e:"0"+e};module.exports={formatTime:function(t){var r=t.getFullYear(),n=t.getMonth()+1,a=t.getDate(),g=t.getHours(),o=t.getMinutes(),u=t.getSeconds();return[r,n,a].map(e).join("-")+" "+[g,o,u].map(e).join(":")},getCurrentPageUrl:function(){var e=getCurrentPages();return e[e.length-1].route},getCurrentPageUrlWithArgs:function(){var e=getCurrentPages(),t=e[e.length-1],r=t.route,n=t.options,a=r+"?";for(var g in n){a+=g+"="+n[g]+"&"}return a=a.substring(0,a.length-1)},uuid:function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?r:3&r|8).toString(16)})).replace(/-/g,"")},NumberToChinese:function(e){if(!/^\d*(\.\d*)?$/.test(e))return console.log("Number is wrong!"),"Number is wrong!";for(var t=["\u3007","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d"],r=["","\u5341","\u767e","\u5343","\u4e07","\u4ebf","\u70b9",""],n=(""+e).replace(/(^0*)/g,"").split("."),a=0,g="",o=n[0].length-1;o>=0;o-=1){switch(a){case 0:g=r[7]+g;break;case 4:new RegExp("0{4}\\d{"+(n[0].length-o-1)+"}$").test(n[0])||(g=r[4]+g);break;case 8:g=r[5]+g,r[7]=r[5],a=0}a%4==2&&0!=n[0].charAt(o+2)&&0==n[0].charAt(o+1)&&(g=t[0]+g),0!=n[0].charAt(o)&&(g=t[n[0].charAt(o)]+r[a%4]+g),a++}if(n.length>1){g+=r[6];for(var u=0;u<n[1].length;u++)g+=t[n[1].charAt(u)]}return g},yearToChinese:function(e){for(var t=["\u3007","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d"],r=e.toString().split(""),n=[],a=0;a<r.length;a++)n.push(t[parseInt(r[a])]);return n=n.toString().replace(/,/g,"")},getDate:function(e,t){var r,n=Date.parse(new Date(e))/1e3;return 0===t&&(r=n-86400*(dates-1)),1===t&&(r=n-86400*dates),new Date(1e3*r).toLocaleDateString().replace(/\//g,"-")},getPointDate:function(e,t){var r=Math.floor(t),n="/";e.indexOf("-")>-1?n="-":e.indexOf(".")>-1&&(n=".");var a=new Date(e),g=new Date(Number(a)+864e5*r),o=g.getFullYear(),u=g.getMonth()+1,i=g.getDate();return o+n+(u<10?"0"+u:u)+n+(i<10?"0"+i:i)},getDateDiff:function(e,t){var r=new Date(Date.parse(e.replace(/-/g,"/"))).getTime(),n=new Date(Date.parse(t.replace(/-/g,"/"))).getTime();return Math.abs(r-n)/864e5},formatNumber:e}; 
 			}); 
		__wxRoute = 'dailysign/pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dailysign/pages/index/index.js';	define("dailysign/pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault"),e=require("../../../@babel/runtime/helpers/toConsumableArray"),a=t(require("../../utils/util")),i=require("../toast/toast.js"),s=require("../../utils/enmoth.js"),n=require("../../utils/createpic.js"),o=getApp(),r=o.globalData.Proportion,d=o.globalData.system,h=o.globalData.brand,l=o.globalData.model,c=require("../../../utils/createvideo.js"),u=0,y=0,g="",A="",D="",f="https://service.51wnl.com";Page({FINALL_DATA:[],REQUEST_POSITION:5,SHARE_DATE:"",SHARE_TEMP:0,isLoadingData:!1,clickIndex:2,DURATION:300,CLOSET_FLAG:!0,todayIndex:0,data:{today:"".concat((new Date).getFullYear(),"-").concat(a.default.formatNumber((new Date).getMonth()+1),"-").concat(a.default.formatNumber((new Date).getDate())),currentdate:"",uid:"",signtxt:"\u7b7e\u5230",tiptxt:"\u4f60\u8fd8\u6ca1\u5f00\u59cb\u7b7e\u5230\u54e6",signed:!1,signdays:0,history:[],duration:300,swiperIndex:2,swiperCircular:!0,showPop:!1,isToday:!0,style0:!0,style1:!1,style2:!1,style3:!1,style4:!1,style5:!1,currentStyle:0,showLoading:!1,itemClicked:!1,isHuawei:!1,nowIndex:30,loading:!1,hasinf:0,appdate:"",launchApp:!1,showBackIndex:!1},onReady:function(){c.createInterstitial({adUnitId:o.globalData.interstitialAd.dailysign})},onLoad:function(t){this.SHARE_TEMP=parseInt(t.template),this.SHARE_DATE=t.date;this.setData({launchApp:!1,currentdate:this.SHARE_DATE?this.SHARE_DATE:this.data.today,showBackIndex:1014===o.globalData.scene||1036===o.globalData.scene}),new i.ToastPannel,wx.getStorageSync("uid")?this.uid=wx.getStorageSync("uid"):(this.uid=a.default.uuid(),wx.setStorageSync("uid",this.uid)),this.init()},init:function(){var t=a.default.formatTime(new Date).split(" ")[0],e=a.default.getPointDate(t,-30);this.SHARE_DATE===this.data.today&&(this.SHARE_DATE=""),this.SHARE_TEMP&&this.setShareStyle(this.SHARE_TEMP),this.SHARE_DATE?this.setShareDate(this.SHARE_DATE):this.getSignInfoByDate(e,t)},routeIndex:function(){wx.switchTab({url:"/pages/index/index"}),o.globalData.scene=1001},setShareStyle:function(t){var e;t?(3===t&&(e=2),1===t&&(e=3),2===t&&(e=4),4===t&&(e=5),wx.setStorageSync("currentStyle",e),this.setData({style0:!1,style1:!1,style2:3===t,style3:1===t,style4:2===t,style5:4===t,currentStyle:e})):(t=wx.getStorageSync("currentStyle")||this.data.currentStyle,this.setData({style0:0===t,style1:1===t,style2:2===t,style3:3===t,style4:4===t,style5:5===t,currentStyle:t}))},setShareDate:function(t){var e=a.default.getPointDate(t,-15),i=a.default.getPointDate(t,15);this.getSignInfoByDate(e,i)},onShow:function(){this.setShareStyle(),("HUAWEI"===h||"huawei"===h||"google"===h||"HONOR"===h||"honor"===h||"Meizu"===h&&"PRO 6"===l)&&this.setData({isHuawei:!0})},getSignInfoByDate:function(t,e,a){var i=this;this.isLoadingData=!0,A=t,D=e,console.log("reqDate =============== >",A),console.log("lastReqDate =========== >",D);wx.request({url:"https://service.51wnl.com/Api/SignEvDay/GetSignInfo",data:{uid:this.uid,did:"",datekey:t,enddatekey:e},dataType:"json",header:{"content-type":"application/json"},success:function(t){i.isLoadingData=!1,i.setData({loadComplete:!0}),i.formatData(t.data.data,a)},error:function(t){console.log(t)}})},formatData:function(t,i){for(var n=0,o=t.length;n<o;n+=1){t[n].year=t[n].dateKey.split("-")[0],t[n].month=t[n].dateKey.split("-")[1],t[n].day=t[n].dateKey.split("-")[2],t[n].largeYear=a.default.yearToChinese(parseInt(t[n].dateKey.split("-")[0])),t[n].largerIndex=a.default.NumberToChinese(t[n].rIndex),t[n].largeMonth=a.default.NumberToChinese(t[n].dateKey.split("-")[1]),t[n].largeDay=a.default.NumberToChinese(t[n].dateKey.split("-")[2]),t[n].content&&(t[n].content.imgs=t[n].content.img.split(",")),"\u4e00\u5341"===t[n].largeMonth&&(t[n].largeMonth="\u5341"),"\u4e00\u5341"===t[n].largeDay&&(t[n].largeDay="\u5341"),t[n].festival,0!==t[n].rIndex&&(this.todayIndex=t[n].rIndex),t[n].enWeek=s.week[t[n].weekIndex].toUpperCase();var r=parseInt(t[n].month)-1;t[n].enMonth=s.month[r].toUpperCase()}var d=this.FINALL_DATA.length<1;if(this.FINALL_DATA=i?[].concat(e(t),e(this.FINALL_DATA)):[].concat(e(this.FINALL_DATA),e(t)),d&&!this.SHARE_DATE&&this.setData({history:this.FINALL_DATA.slice(-3),isToday:!0,loading:!1,swiperIndex:2}),d&&this.SHARE_DATE){var h;h=this.FINALL_DATA.slice(14,17),this.setData({history:h,swiperIndex:1,isToday:this.SHARE_DATE===this.data.today,loading:!1})}this.setSignInfo()},setSignInfo:function(){var t=this.FINALL_DATA[this.FINALL_DATA.length-1].rIndex;this.setData({signdays:t,signtxt:t?"\u5df2\u7b7e\u5230":"\u7b7e\u5230",tiptxt:t?"\u5df2\u7b7e\u5230".concat(t,"\u5929"):"\u4f60\u8fd8\u6ca1\u5f00\u59cb\u7b7e\u5230\u54e6"})},signOn:function(){this.data.signdays||(this.updateLastData(),this.sendSignReq())},sendSignReq:function(){wx.request({url:f+"/Api/SignEvDay/SignToday",data:{uid:this.uid,did:""},dataType:"json",header:{"content-type":"application/json"},success:function(t){console.log(t)},error:function(t){this.show(t)}})},updateLastData:function(){var t=this.data.history.length-1;this.data.history[t].rIndex=this.todayIndex+1,this.data.history[t].largerIndex=a.default.NumberToChinese(this.data.history[t].rIndex),this.FINALL_DATA[this.FINALL_DATA.length-1].rIndex=this.todayIndex+1,this.FINALL_DATA[this.FINALL_DATA.length-1].largerIndex=a.default.NumberToChinese(this.data.history[t].rIndex),this.setData({signtxt:"\u5df2\u7b7e\u5230",tiptxt:"\u5df2\u7b7e\u5230"+this.data.history[t].rIndex+"\u5929",signdays:this.data.history[t].rIndex,showPop:!0,history:this.data.history})},saveSign:function(){var t=this,e=wx.createCanvasContext("style0"),a=this.data.history[this.data.history.length-1];this.setData({showLoading:!0}),this.data.style0&&n.drawStyle0(t,e,r,a),this.data.style1&&n.drawStyle1(t,e,r,a),this.data.style2&&n.drawStyle2(t,e,r,a),this.data.style3&&n.drawStyle3(t,e,r,a),this.data.style4&&n.drawStyle4(t,e,r,a),this.data.style5&&n.drawStyle5(t,e,r,a),setTimeout((function(){t.saveImage("style0")}),2500)},saveImage:function(t){var e=this;wx.canvasToTempFilePath({canvasId:t,success:function(t){wx.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){e.setData({showPop:!1}),e.show("\u65e5\u7b7e\u5df2\u4fdd\u5b58\u5230\u672c\u5730")},complete:function(){e.setData({showLoading:!1})}})}})},closePop:function(){this.setData({showPop:!1})},display:function(t){this.itemClicked(this);var e=t.currentTarget.dataset.index,a=encodeURIComponent(JSON.stringify(this.data.history[e])),i=wx.getStorageSync("currentStyle")?wx.getStorageSync("currentStyle"):this.data.currentStyle;wx.navigateTo({url:"../detail/detail?obj="+a+"&style="+i+"&current="+e})},itemClicked:function(t){t.setData({itemClicked:!0}),setTimeout((function(){t.setData({itemClicked:!1})}),500)},setCircleData:function(t,e){var a,i,s,n=this;0===t?(a=e?2:1,i=e?3:2):1===t?(a=e?0:2,i=e?2:3):2===t&&(a=e?1:0,i=1),this.FINALL_DATA.forEach((function(t,e){t.dateKey===n.data.history[2].dateKey&&(s=e)}));var o=e?s-i:s+i;this.FINALL_DATA[o]&&this.data.history.splice(a,1,this.FINALL_DATA[o]),this.setData({history:this.data.history,swiperIndex:t})},changeIndex:function(t){var e=this,i=t.detail.current,s="touch"===t.detail.source?this.data.swiperIndex:this.clickIndex,n="touch"===t.detail.source?this.DURATION:0,o=!0;i<s?2===s&&0===i&&(o=!1):(0!==s||2!==i)&&(o=!1);var r=this.data.history[i].dateKey,d=this.FINALL_DATA[0].dateKey,h=this.FINALL_DATA[this.FINALL_DATA.length-1].dateKey;if(a.default.getDateDiff(r,d)===this.REQUEST_POSITION&&!this.isLoadingData){var l=a.default.getPointDate(d,-1),c=a.default.getPointDate(l,-30);this.getSignInfoByDate(c,l,o)}if(a.default.getDateDiff(r,h)===this.REQUEST_POSITION&&this.SHARE_DATE&&!this.isLoadingData&&!o){var u=a.default.getPointDate(h,30),y=a.default.getPointDate(h,1);this.getSignInfoByDate(y,u,o)}var g=this.data.history[i].dateKey===this.data.today;if(setTimeout((function(){e.setData({isToday:g})}),300),this.setData({duration:n,swiperCircular:!g,currentdate:r}),g&&!this.hasChange)return this.hasChange=!0,void this.backToday();this.setCircleData(i,o,n)},backToday:function(){if(this.SHARE_DATE&&this.FINALL_DATA[this.FINALL_DATA.length-1].dateKey!==this.data.today){this.FINALL_DATA=[],this.SHARE_DATE="";var t=a.default.formatTime(new Date).split(" ")[0],e=a.default.getPointDate(t,-30);this.getSignInfoByDate(e,t)}else this.setData({history:this.FINALL_DATA.slice(-3),swiperIndex:2,isToday:!0,duration:this.DURATION,currentdate:this.data.today})},prev:function(){var t=this.data.swiperIndex;0===t&&(t=3),this.clickIndex=t,this.setData({swiperIndex:t-1})},next:function(){var t=this.data.swiperIndex;2===t&&(t=-1),this.clickIndex=t,this.setData({swiperIndex:t+1})},touchStart:function(t){u=t.touches[0].pageX,g=setInterval((function(){y+=1}),100)},touchMove:function(t){t.currentTarget.dataset.datekey===this.FINALL_DATA[this.FINALL_DATA.length-1].dateKey&&(t.touches[0].pageX-u<=-40&&y<10&&this.show("\u660e\u5929\uff0c\u656c\u8bf7\u671f\u5f85~"))},touchEnd:function(t){var e=t.changedTouches[0].pageX;Math.abs(e-u)<1&&(this.touchDirection=null),clearInterval(g),y=0},onShareAppMessage:function(t){var e=this,a=this,i="";"button"===t.from&&(i="../images/shareImg.jpg");var s=this.data.history.filter((function(t){return t.dateKey===e.data.currentdate})),n=s[0].dateKey;return{title:s[0].dayText,path:"dailysign/pages/index/index?date=".concat(n),imageUrl:i||"",success:function(){a.setData({showPop:!1}),"Android"!==d&&a.show("\u5206\u4eab\u6210\u529f")},fail:function(){}}},toWebPage:function(t){var e=t.currentTarget.dataset.did,a=t.currentTarget.dataset.dk;wx.navigateTo({url:"../contentpage/contentpage?detailid="+e+"&dateKey="+a})},launchAppError:function(t){console.log("\u6253\u5f00\u9519\u8bef"+t.detail.errMsg)}}); 
 			}); 	require("dailysign/pages/index/index.js");
 		__wxRoute = 'dailysign/pages/detail/detail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dailysign/pages/detail/detail.js';	define("dailysign/pages/detail/detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../toast/toast.js"),e=require("../../utils/createpic.js"),a=require("../../utils/enmoth.js"),s=getApp(),o=s.globalData.Proportion,l=s.globalData.system,n=s.globalData.brand,i=s.globalData.model;Page({data:{item:[],style0:!0,style1:!1,style2:!1,style3:!1,style4:!1,style5:!1,showLoading:!1,current:0,currStyle:0,isHuawei:!1,cw:690*o,ch:920*o},onLoad:function(e){new t.ToastPannel;var s=JSON.parse(decodeURIComponent(e.obj));s.enWeek=a.week[s.weekIndex].toUpperCase();var o=parseInt(s.month-1);s.enMonth=a.month[o].toUpperCase();var l=parseInt(e.style),n=parseInt(e.current);console.log(l),this.setData({style0:0===l,style1:1===l,style2:2===l,style3:3===l,style4:4===l,style5:5===l,item:s,current:n,currStyle:l}),console.log(s)},onShow:function(){var t=wx.getStorageSync("currentStyle");""===t&&(t=this.data.currStyle),("HUAWEI"===n||"huawei"===n||"google"===n||"HONOR"==n||"honor"==n||"Meizu"===n&&"PRO 6"===i)&&this.setData({isHuawei:!0}),this.setData({style0:0===t,style1:1===t,style2:2===t,style3:3===t,style4:4===t,style5:5===t,currStyle:t})},saveSign:function(){var t=this;this.setData({showLoading:!0});var a=wx.createCanvasContext("style0");this.data.style0&&e.drawStyle0(t,a,o),this.data.style1&&e.drawStyle1(t,a,o),this.data.style2&&e.drawStyle2(t,a,o),this.data.style3&&e.drawStyle3(t,a,o),this.data.style4&&e.drawStyle4(t,a,o),this.data.style5&&e.drawStyle5(t,a,o),setTimeout((function(){t.saveImage("style0")}),2500)},saveImage:function(t){var e=this;wx.canvasToTempFilePath({canvasId:t,success:function(t){console.log(t.tempFilePath),wx.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){e.show("\u65e5\u7b7e\u5df2\u4fdd\u5b58\u5230\u672c\u5730")},complete:function(){e.setData({showLoading:!1})}})}})},onShareAppMessage:function(t){var e=this;"button"===t.from&&console.log(t.target);var a=e.data.item.dateKey;return{title:e.data.item.dayText,path:"dailysign/pages/index/index?date=".concat(a),imageUrl:"",success:function(){"Android"!==l&&e.show("\u5206\u4eab\u6210\u529f")},fail:function(){}}},switchStyle:function(){wx.navigateTo({url:"../changestyle/changestyle?obj="+JSON.stringify(this.data.item)+"&index="+this.data.currStyle})}}); 
 			}); 	require("dailysign/pages/detail/detail.js");
 		__wxRoute = 'dailysign/pages/changestyle/changestyle';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dailysign/pages/changestyle/changestyle.js';	define("dailysign/pages/changestyle/changestyle.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),e=t.globalData.brand,a=t.globalData.model,i=require("../../utils/enmoth.js");Page({data:{item:{},current:0,autoplay:!1,duration:"300",active0:!0,active1:!1,active2:!1,active3:!1,active4:!1,active5:!1,isHuawei:!1},onLoad:function(t){var e=JSON.parse(t.obj),a=t.index;e.enWeek=i.week[e.weekIndex].toUpperCase();var n=parseInt(e.month);e.enMonth=i.month[n-1].toUpperCase(),this.setData({item:e,current:a}),console.log("\u6784\u9020\u540e\u7684data"),console.log(this.data.item)},onShow:function(){("HUAWEI"===e||"huawei"===e||"google"===e||"HONOR"===e||"honor"===e||"Meizu"===e&&"PRO 6"===a)&&this.setData({isHuawei:!0})},onHide:function(){},selectStyle:function(t){var e=parseInt(t.currentTarget.dataset.index);this.setData({active0:0===e,active1:1===e,active2:2===e,active3:3===e,active4:4===e,active5:5===e,current:e})},changeIndex:function(t){var e=t.detail.current;this.setData({active0:0===e,active1:1===e,active2:2===e,active3:3===e,active4:4===e,active5:5===e,current:e})},select:function(){wx.setStorageSync("currentStyle",this.data.current),wx.navigateBack({delta:1})},onShareAppMessage:function(t){"button"===t.from&&console.log(t.target);var e=this.data.item.dateKey;return{title:this.data.item.dayText,path:"dailysign/pages/index/index?date=".concat(e),imageUrl:"",success:function(){},fail:function(){}}}}); 
 			}); 	require("dailysign/pages/changestyle/changestyle.js");
 		__wxRoute = 'dailysign/pages/webpage/webpage';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dailysign/pages/webpage/webpage.js';	define("dailysign/pages/webpage/webpage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{url:""},onLoad:function(n){var o=n.detailid,t=n.dateKey;console.log(o);var e="https://mobile.51wnl.com/temporary/signcontent/daycontent.html?detailid="+o+"&dateKey="+t;this.setData({url:e})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("dailysign/pages/webpage/webpage.js");
 		__wxRoute = 'dailysign/pages/contentpage/contentpage';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dailysign/pages/contentpage/contentpage.js';	define("dailysign/pages/contentpage/contentpage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=0,a=!1;Page({data:{htmlText:"",htmlHeard:"",currDate:new Date,dataKey:"",contentList:[],hasMore:!1,cid:"",unitids:["adunit-e91ff8f488cb50dc","adunit-cbf6855acbd06315","adunit-fbb4f3db3a860a5d","adunit-0eea92e6c5d1aae0","adunit-9169488258a34c6d","adunit-7db0adf68c7b301a"]},onLoad:function(t){var a=t.detailid,e=t.dateKey;this.setData({cid:a,dateKey:e}),this.bindData(a,e)},bindData:function(a,e){t=0,this.setData({htmlText:"",htmlHeard:"",contentList:[],hasMore:!1,dataKey:e,currDate:this.convertDateFromStringfunction(e),title:""});var i=this;wx.request({url:"https://service.51wnl.com/Api/SignEvDay/Detail",data:{DetailID:a},header:{"content-type":"application/json"},method:"GET",dataType:"xml/json/script/html",responseType:"text",success:function(t){var a=JSON.parse(t.data),e=a.data.content,n=e.indexOf('<div class="i-content-inner clearfix" fontsizetype="1">'),s="";n>0&&(s=e.substring(0,n),e=e.substring(n)),s=s.replace(/<h1>/g,"<h1 class='h1'>").replace(/<p>/g,"<p class='p'>").replace(/<img/g,"<img class='img'").replace('<a href="javascript:;" class="i-small" stat="WnlDetailSmallFontClick">A<i>-</i><a href="javascript:;" class="i-big" stat="WnlDetailBigFontClick">A<i>+</i></a>',""),e=e.replace(/<h1>/g,"<h1 class='h1'>").replace(/<p>/g,"<p class='p'>").replace(/<img/g,"<img class='img'").replace('<a href="javascript:;" class="i-small" stat="WnlDetailSmallFontClick">A<i>-</i><a href="javascript:;" class="i-big" stat="WnlDetailBigFontClick">A<i>+</i></a>',""),i.setData({htmlText:"<div class='wnl-aritle'><div class='i-content'>"+e+"</div></div>",htmlHeard:"<div class='wnl-aritle'><div class='i-content'>"+s+"</div></div>",title:a.data})}}),this.getHistory(t)},getHistory:function(t){if(!a){console.log("\u53d1\u8d77\u8bf7\u6c42 page="+t),a=!0;var e=this.addDate(this.data.currDate,-(5+5*t)),i=this.addDate(this.data.currDate,-(5*t+1)),n=this;wx.request({url:"https://service.51wnl.com/Api/SignEvDay/His",data:{datekey:e,enddatekey:i},header:{"content-type":"application/json"},method:"GET",dataType:"xml/json/script/html",responseType:"text",success:function(t){var a=JSON.parse(t.data).data;for(var e in a){var i=a[e].img;i&&(a[e].imgs=i.split(","))}var s=n.data.contentList.concat(a);n.setData({contentList:s,hasMore:a.length>0})},complete:function(){a=!1}})}},showMore:function(){},onItemClick:function(t){var a=t.currentTarget.dataset.detailid,e=t.currentTarget.dataset.datekey;wx.navigateTo({url:"../contentpage/contentpage?detailid="+a+"&dateKey="+e})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){this.data.hasMore&&(t+=1,this.getHistory(t))},onShareAppMessage:function(){var t=this;return{title:"".concat(t.data.title.title),desc:t.data.title.title,imageUrl:"",path:"dailysign/pages/contentpage/contentpage?detailid="+t.data.cid+"&dateKey="+t.data.dateKey,success:function(){t.show("\u5206\u4eab\u6210\u529f")}}},addDate:function(t,a){null!=a&&""!=a||(a=1);var e=new Date(t);e.setDate(e.getDate()+a);var i=e.getMonth()+1,n=e.getDate();return e.getFullYear()+"-"+this.getFormatDate(i)+"-"+this.getFormatDate(n)},getFormatDate:function(t){if(null==t||""==t)return"";var a=t+"";return a.length<2&&(a="0"+a),a},convertDateFromStringfunction:function(t){if(t){var a=t.split(/[- : \/]/);return new Date(a[0],a[1]-1,a[2])}}}); 
 			}); 	require("dailysign/pages/contentpage/contentpage.js");
 	