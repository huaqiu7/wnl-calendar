/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx1=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx1:"+m)}
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
var z=__WXML_GLOBAL__.ops_set.$gwx1 || [];
function gz$gwx1_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_1)return __WXML_GLOBAL__.ops_cached.$gwx1_1
__WXML_GLOBAL__.ops_cached.$gwx1_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loadComplete']])
Z([3,'main'])
Z([[2,'&&'],[[2,'&&'],[[6],[[7],[3,'festivalData']],[3,'bizImg']],[[6],[[7],[3,'festivalData']],[3,'bizTitle']]],[[6],[[7],[3,'festivalData']],[3,'bizUrl']]])
Z([3,'showMore'])
Z([3,'desc_content'])
Z([[2,'!'],[[7],[3,'showMoreDescption']]])
Z([[6],[[7],[3,'festivalData']],[3,'detail']])
Z([[7],[3,'this']])
Z([[6],[[7],[3,'item']],[3,'title']])
Z(z[3])
Z([3,'temp_section_content section_content'])
Z([[7],[3,'index']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'showMore']]])
Z([[2,'!'],[[7],[3,'isSpecial']]])
Z([[7],[3,'isTerm']])
Z([[7],[3,'showTermList']])
Z(z[15])
Z([[7],[3,'showBackIndex']])
})(__WXML_GLOBAL__.ops_cached.$gwx1_1);return __WXML_GLOBAL__.ops_cached.$gwx1_1
}
function gz$gwx1_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx1_2)return __WXML_GLOBAL__.ops_cached.$gwx1_2
__WXML_GLOBAL__.ops_cached.$gwx1_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx1_2);return __WXML_GLOBAL__.ops_cached.$gwx1_2
}
__WXML_GLOBAL__.ops_set.$gwx1=z;
__WXML_GLOBAL__.ops_init.$gwx1=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./tips/pages/index/index.wxml','./tips/pages/webview/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx1_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
var xC=_n('view')
var oH=_n('view')
_rz(z,oH,'class',1,e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,2,e,s,gg)){cI.wxVkey=1
}
var oJ=_mz(z,'view',['bind:tap',3,'class',1],[],e,s,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,5,e,s,gg)){lK.wxVkey=1
}
lK.wxXCkey=1
_(oH,oJ)
var aL=_v()
_(oH,aL)
var tM=function(bO,eN,oP,gg){
var oR=_v()
_(oP,oR)
if(_oz(z,8,bO,eN,gg)){oR.wxVkey=1
var fS=_mz(z,'view',['bind:tap',9,'class',1,'data-index',2],[],bO,eN,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,12,bO,eN,gg)){cT.wxVkey=1
}
cT.wxXCkey=1
_(oR,fS)
}
oR.wxXCkey=1
return oP
}
aL.wxXCkey=2
_2z(z,6,tM,e,s,gg,aL,'item','index','{{this}}')
cI.wxXCkey=1
_(xC,oH)
var oD=_v()
_(xC,oD)
if(_oz(z,13,e,s,gg)){oD.wxVkey=1
var hU=_v()
_(oD,hU)
if(_oz(z,14,e,s,gg)){hU.wxVkey=1
}
hU.wxXCkey=1
}
var fE=_v()
_(xC,fE)
if(_oz(z,15,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(xC,cF)
if(_oz(z,16,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(xC,hG)
if(_oz(z,17,e,s,gg)){hG.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
_(oB,xC)
}
else{oB.wxVkey=2
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx1_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['tips/pages/index/index.json'] = {"navigationBarTitleText":"小贴士","usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['tips/pages/index/index.wxml'] = [$gwx1, './tips/pages/index/index.wxml'];else __wxAppCode__['tips/pages/index/index.wxml'] = $gwx1( './tips/pages/index/index.wxml' );
		__wxAppCode__['tips/pages/webview/index.json'] = {"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['tips/pages/webview/index.wxml'] = [$gwx1, './tips/pages/webview/index.wxml'];else __wxAppCode__['tips/pages/webview/index.wxml'] = $gwx1( './tips/pages/webview/index.wxml' );
	
	define("tips/utils/Promise.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../@babel/runtime/helpers/typeof");!function(e,n){"object"==("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(void 0).ES6Promise=n()}(0,(function(){function e(t){return"function"==typeof t}function n(){var t=setTimeout;return function(){return t(r,1)}}function r(){for(var t=0;t<g;t+=2){(0,C[t])(C[t+1]),C[t]=void 0,C[t+1]=void 0}g=0}function o(t,e){var n=arguments,r=this,o=new this.constructor(s);void 0===o[q]&&y(o);var i=r._state;return i?function(){var t=n[i-1];S((function(){return _(i,o,t,r._result)}))}():p(r,o,t,e),o}function i(e){if(e&&"object"==t(e)&&e.constructor===this)return e;var n=new this(s);return a(n,e),n}function s(){}function u(t){try{return t.then}catch(t){return D.error=t,D}}function c(t,n,r){n.constructor===t.constructor&&r===o&&n.constructor.resolve===i?function(t,e){e._state===k?l(t,e._result):e._state===F?h(t,e._result):p(e,void 0,(function(e){return a(t,e)}),(function(e){return h(t,e)}))}(t,n):r===D?h(t,D.error):void 0===r?l(t,n):e(r)?function(t,e,n){S((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?a(t,n):l(t,n))}),(function(e){r||(r=!0,h(t,e))}),t._label);!r&&o&&(r=!0,h(t,o))}),t)}(t,n,r):l(t,n)}function a(e,n){e===n?h(e,new TypeError("You cannot resolve a promise with itself")):function(e){return"function"==typeof e||"object"==t(e)&&null!==e}(n)?c(e,n,u(n)):l(e,n)}function f(t){t._onerror&&t._onerror(t._result),d(t)}function l(t,e){t._state===Y&&(t._result=e,t._state=k,0!==t._subscribers.length&&S(d,t))}function h(t,e){t._state===Y&&(t._state=F,t._result=e,S(f,t))}function p(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+k]=n,o[i+F]=r,0===i&&t._state&&S(d,t)}function d(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?_(n,r,o,i):o(i);t._subscribers.length=0}}function v(){this.error=null}function _(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,f=void 0;if(i){if((s=function(t,e){try{return t(e)}catch(t){return K.error=t,K}}(r,o))===K?(f=!0,u=s.error,s=null):c=!0,n===s)return void h(n,new TypeError("A promises callback cannot return that same promise."))}else s=o,c=!0;n._state!==Y||(i&&c?a(n,s):f?h(n,u):t===k?l(n,s):t===F&&h(n,s))}function y(t){t[q]=L++,t._state=void 0,t._result=void 0,t._subscribers=[]}function m(t,e){this._instanceConstructor=t,this.promise=new t(s),this.promise[q]||y(this.promise),w(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?l(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&l(this.promise,this._result))):h(this.promise,new Error("Array Methods must be provided an Array"))}function b(t){this[q]=L++,this._result=this._state=void 0,this._subscribers=[],s!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof b?function(t,e){try{e((function(e){a(t,e)}),(function(e){h(t,e)}))}catch(e){h(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}var w=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},g=0,A=void 0,j=void 0,S=function(t,e){C[g]=t,C[g+1]=e,2===(g+=2)&&(j?j(r):O())},E="undefined"!=typeof window?window:void 0,T=E||{},x=T.MutationObserver||T.WebKitMutationObserver,M="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),P="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=new Array(1e3),O=void 0;O=M?function(){return process.nextTick(r)}:x?function(){var t=0,e=new x(r),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():P?function(){var t=new MessageChannel;return t.port1.onmessage=r,function(){return t.port2.postMessage(0)}}():void 0===E&&"function"==typeof require?function(){try{var t=require("vertx");return void 0!==(A=t.runOnLoop||t.runOnContext)?function(){A(r)}:n()}catch(t){return n()}}():n();var q=Math.random().toString(36).substring(16),Y=void 0,k=1,F=2,D=new v,K=new v,L=0;return m.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===Y&&n<t;n++)this._eachEntry(e[n],n)},m.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===i){var a=u(t);if(a===o&&t._state!==Y)this._settledAt(t._state,e,t._result);else if("function"!=typeof a)this._remaining--,this._result[e]=t;else if(n===b){var f=new n(s);c(f,t,a),this._willSettleAt(f,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},m.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===Y&&(this._remaining--,t===F?h(r,n):this._result[e]=n),0===this._remaining&&l(r,this._result)},m.prototype._willSettleAt=function(t,e){var n=this;p(t,void 0,(function(t){return n._settledAt(k,e,t)}),(function(t){return n._settledAt(F,e,t)}))},b.all=function(t){return new m(this,t).promise},b.race=function(t){var e=this;return new e(w(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})},b.resolve=i,b.reject=function(t){var e=new this(s);return h(e,t),e},b._setScheduler=function(t){j=t},b._setAsap=function(t){S=t},b._asap=S,b.prototype={constructor:b,then:o,catch:function(t){return this.then(null,t)}},b.polyfill=function(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=b},b.Promise=b,b})); 
 			}); 
		define("tips/utils/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../@babel/runtime/helpers/typeof"),t=require("Promise"),n=module.exports={};n.default=n,n.debug=!0,Object.defineProperty(n,"app",{get:function(){return getApp()}});var o={stopRecord:!0,pauseVoice:!0,stopVoice:!0,pauseBackgroundAudio:!0,stopBackgroundAudio:!0,createAudioContext:!0,createVideoContext:!0,showNavigationBarLoading:!0,hideNavigationBarLoading:!0,createAnimation:!0,createContext:!0,drawCanvas:!0,canvasToTempFilePath:!0,hideKeyboard:!0,stopPullDownRefresh:!0};function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET";return function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.request({url:t,data:o,method:e,header:{"Content-Type":"application/json"}})}}Object.keys(wx).forEach((function(r){o[r]||"on"===r.substr(0,2)||/\w+Sync$/.test(r)?n[r]=function(){if(n.debug){var t=wx[r].apply(wx,arguments);return t||""===t||(t={}),t&&"object"===e(t)&&(t.then=function(){console.warn("wx."+r+" is not a async function, you should not use Promise")}),t}return wx[r].apply(wx,arguments)}:n[r]=function(e){return e=e||{},new t((function(t,n){e.success=t,e.fail=function(e){e&&e.errMsg?n(new Error(e.errMsg)):n(e)},wx[r](e)}))}})),n.GET=r("GET"),n.POST=r("POST"),n.PUT=r("PUT"),n.DELETE=r("DELETE"); 
 			}); 
		define("tips/utils/calendar.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e,t=require("../../@babel/runtime/helpers/typeof");e=function(){var e={lunarInfo:[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,23232,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],solarMonth:[31,28,31,30,31,30,31,31,30,31,30,31],Gan:["\u7532","\u4e59","\u4e19","\u4e01","\u620a","\u5df1","\u5e9a","\u8f9b","\u58ec","\u7678"],Zhi:["\u5b50","\u4e11","\u5bc5","\u536f","\u8fb0","\u5df3","\u5348","\u672a","\u7533","\u9149","\u620c","\u4ea5"],Animals:["\u9f20","\u725b","\u864e","\u5154","\u9f99","\u86c7","\u9a6c","\u7f8a","\u7334","\u9e21","\u72d7","\u732a"],solarTerm:["\u5c0f\u5bd2","\u5927\u5bd2","\u7acb\u6625","\u96e8\u6c34","\u60ca\u86f0","\u6625\u5206","\u6e05\u660e","\u8c37\u96e8","\u7acb\u590f","\u5c0f\u6ee1","\u8292\u79cd","\u590f\u81f3","\u5c0f\u6691","\u5927\u6691","\u7acb\u79cb","\u5904\u6691","\u767d\u9732","\u79cb\u5206","\u5bd2\u9732","\u971c\u964d","\u7acb\u51ac","\u5c0f\u96ea","\u5927\u96ea","\u51ac\u81f3"],nStr1:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341"],nStr2:["\u521d","\u5341","\u5eff","\u5345"],nStr3:["\u6b63","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341","\u51ac","\u814a"],lYearDays:function(t){var a,r=348;for(a=32768;a>8;a>>=1)r+=e.lunarInfo[t-1900]&a?1:0;return r+e.leapDays(t)},leapMonth:function(t){return 15&e.lunarInfo[t-1900]},leapDays:function(t){return e.leapMonth(t)?65536&e.lunarInfo[t-1900]?30:29:0},monthDays:function(t,a){return a>12||a<1?-1:e.lunarInfo[t-1900]&65536>>a?30:29},solarDays:function(t,a){if(a>12||a<0)return-1;var r=a;return 1==r?t%4==0&&t%100!=0||t%400==0?29:28:e.solarMonth[r]},toGanZhiYear:function(t,a,r){var n="";n=a<2?e.cyclical(t-1900+36-1):e.cyclical(t-1900+36);var o=e.getTerm(t,3);return 1===a&&r>=o&&(n=e.cyclical(t-1900+36)),n},cyclical:function(t){return e.Gan[t%10]+e.Zhi[t%12]},toAstro:function(e,t){return"\u6469\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b\u6469\u7faf".substr(2*e-(t<[20,19,21,20,21,22,23,23,23,24,23,22][e-1]?2:0),2)+"\u5ea7"},toGanZhi:function(t){return e.Gan[t%10]+e.Zhi[t%12]},getTerm:function(t,a){var r=e.getOffsetByTerm(t,a-1);return e.getDateObjByOffset(t,r).getDate()},toChinaMonth:function(t){if(t>12||t<1)return-1;var a=e.nStr3[t-1];return a+="\u6708"},toChinaDay:function(t){var a;switch(t){case 10:a="\u521d\u5341";break;case 20:a="\u4e8c\u5341";break;case 30:a="\u4e09\u5341";break;default:a=e.nStr2[Math.floor(t/10)],a+=e.nStr1[t%10]}return a},getAnimal:function(t,a,r){a--;var n=(t-1900)%12;return 0!==n&&e.getLichunOffset(t,a,r)<0&&(n-=1),e.Animals[n]},getLichunOffset:function(e,t,r){var n=new Date(e,0,1);return n.setDate(n.getDate()+a[24*(e-1900)+2]),new Date(e,t,r)-n},getYearWeek:function(t,a,r){var n=new Date(t,a,r),o=new Date(t,0,1),s=e.dayOfYear(n),u=Math.ceil((s+(o.getDay()+1-1))/7);if(u>1&&11===a){var f=new Date(t+1,0,1),i=f.getDay();i>0&&e.getIntervalDays(n,f)<=i&&(u=1)}return u},isEaster:function(e,t,a){var r=Math.floor(e/100),n=e-19*Math.floor(e/19),o=Math.floor((r-17)/25),s=r-Math.floor(r/4)-Math.floor((r-o)/3)+19*n+15;s-=30*Math.floor(s/30),s-=Math.floor(s/28)*(1-Math.floor(s/28)*Math.floor(29/(s+1))*Math.floor((21-n)/11));var u=e+Math.floor(e/4)+s+2-r+Math.floor(r/4),f=s-(u-=7*Math.floor(u/7)),i=3+Math.floor((f+40)/44),c=f+28-31*Math.floor(i/4);return t===i&&a===c},solar2lunar:function(t,a,r){if(t<1900||t>2100)return-1;if(1900==t&&0==a&&r<31)return-1;var n,o,s=new Date,u=0;t=(s=t?new Date(t,parseInt(a),r):new Date).getFullYear(),a=s.getMonth(),r=s.getDate(),a++;var f=(Date.UTC(s.getFullYear(),s.getMonth(),s.getDate())-Date.UTC(1900,0,31))/864e5;for(n=1900;n<2101&&f>0;n++)f-=u=e.lYearDays(n);f<0&&(f+=u,n--);var i=new Date,c=!1;i.getFullYear()==t&&i.getMonth()+1==a&&i.getDate()==r&&(c=!0);var h=s.getDay(),l=e.nStr1[h],g=n;o=e.leapMonth(n);var D=!1;for(n=1;n<13&&f>0;n++)o>0&&n==o+1&&0==D?(--n,D=!0,u=e.leapDays(g)):u=e.monthDays(g,n),1==D&&n==o+1&&(D=!1),f-=u;0==f&&o>0&&n==o+1&&(D?D=!1:(D=!0,--n)),f<0&&(f+=u,--n);var m=n,y=f+1,M=a-1,S=e.toGanZhiYear(t,a-1,r),v=e.getTerm(t,2*a-1),T=e.getTerm(t,2*a),B=e.toGanZhi(12*(t-1900)+a+11);r>=v&&(B=e.toGanZhi(12*(t-1900)+a+12));var d=!1,p=null;v===r&&(d=!0,p=e.solarTerm[2*a-2]),T===r&&(d=!0,p=e.solarTerm[2*a-1]);var O=Date.UTC(t,M,1,0,0,0,0)/864e5+25567+10,A=e.toGanZhi(O+r-1),I=e.toAstro(a,r);return{lYear:g,lMonth:m,lDay:y,Animal:e.getAnimal(t,a,r),IMonthCn:(D?"\u95f0":"")+e.toChinaMonth(m),IDayCn:e.toChinaDay(y),cYear:t,cMonth:a,cDay:r,gzYear:S,gzMonth:B,gzDay:A,isToday:c,isLeap:D,nWeek:h,ncWeek:"\u661f\u671f"+l,isTerm:d,Term:p,astro:I}},lunar2solar:function(t,a,r,n){n=!!n;var o=e.leapMonth(t);if(n&&o!=a)return-1;if(2100==t&&12==a&&r>1||1900==t&&1==a&&r<31)return-1;var s=e.monthDays(t,a),u=s;if(n&&(u=e.leapDays(t,a)),t<1900||t>2100||r>u)return-1;for(var f=0,i=1900;i<t;i++)f+=e.lYearDays(i);var c=0,h=!1;for(i=1;i<a;i++)c=e.leapMonth(t),h||c<=i&&c>0&&(f+=e.leapDays(t),h=!0),f+=e.monthDays(t,i);n&&(f+=s);var l=Date.UTC(1900,1,30,0,0,0),g=new Date(864e5*(f+r-31)+l),D=g.getUTCFullYear(),m=g.getUTCMonth(),y=g.getUTCDate();return e.solar2lunar(D,m,y)},BASE_STEMS_DATE:new Date(1899,1,4,0,0),BASE_STEMS_YEAR:1899,JXNames:["\u5409","\u51f6"],JXStatusUnknown:-1,JXStatusJi:0,JXStatusXiong:1,JXTable:[3372,843,3282,2868,717,1203,3372,843,3282,2868,733,1187,3372,843,3282,2868,709,1202,3372,843,3282,2868,717,1203,3372,842,3282,2868,717,1203,3372,843,3282,2868,717,1203,3372,843,3282,2852,717,1187,3368,843,3282,2868,717,1187,3372,843,3282,2868,717,1203,3372,843,3314,2868,717,1203],mPzStemArray:["\u7532\u4e0d\u5f00\u4ed3\u8d22\u7269\u8017\u6563","\u4e59\u4e0d\u683d\u690d\u5343\u682a\u4e0d\u957f","\u4e19\u4e0d\u4fee\u7076\u5fc5\u89c1\u707e\u6b83","\u4e01\u4e0d\u5243\u5934\u5934\u5fc5\u751f\u75ae","\u620a\u4e0d\u53d7\u7530\u7530\u4e3b\u4e0d\u7965","\u5df1\u4e0d\u7834\u5238\u4e8c\u6bd4\u5e76\u4ea1","\u5e9a\u4e0d\u7ecf\u7edc\u7ec7\u673a\u865a\u5f20","\u8f9b\u4e0d\u5408\u9171\u4e3b\u4eba\u4e0d\u5c1d","\u58ec\u4e0d\u6c72\u6c34\u66f4\u96be\u63d0\u9632","\u7678\u4e0d\u8bcd\u8bbc\u7406\u5f31\u654c\u5f3a"],mPzBranchArray:["\u5b50\u4e0d\u95ee\u535c\u81ea\u60f9\u7978\u6b83","\u4e11\u4e0d\u51a0\u5e26\u4e3b\u4e0d\u8fd8\u4e61","\u5bc5\u4e0d\u796d\u7940\u795e\u9b3c\u4e0d\u5c1d","\u536f\u4e0d\u7a7f\u4e95\u6c34\u6cc9\u4e0d\u9999","\u8fb0\u4e0d\u54ed\u6ce3\u5fc5\u4e3b\u91cd\u4e27","\u5df3\u4e0d\u8fdc\u884c\u8d22\u7269\u4f0f\u85cf","\u5348\u4e0d\u82eb\u76d6\u5c4b\u4e3b\u66f4\u5f20","\u672a\u4e0d\u670d\u836f\u6bd2\u6c14\u5165\u80a0","\u7533\u4e0d\u5b89\u5e8a\u9b3c\u795f\u5165\u623f","\u9149\u4e0d\u5bb4\u5ba2\u9189\u5750\u98a0\u72c2","\u620c\u4e0d\u5403\u72ac\u4f5c\u602a\u4e0a\u5e8a","\u4ea5\u4e0d\u5ac1\u5a36\u4e0d\u5229\u65b0\u90ce"],CompassUnknown:-1,CompassNorth:0,CompassNortheast:1,CompassEast:2,CompassSoutheast:3,CompassSouth:4,CompassSouthwest:5,CompassWest:6,CompassNorthwest:7,CompassNames:["\u6b63\u5317","\u4e1c\u5317","\u6b63\u4e1c","\u4e1c\u5357","\u6b63\u5357","\u897f\u5357","\u6b63\u897f","\u897f\u5317"],ANIMAL:["\u9f20","\u725b","\u864e","\u5154","\u9f99","\u86c7","\u9a6c","\u7f8a","\u7334","\u9e21","\u72d7","\u732a"],mWxMap:{"\u7532\u5b50":"\u6d77\u4e2d\u91d1","\u4e59\u4e11":"\u6d77\u4e2d\u91d1","\u4e19\u5bc5":"\u7089\u4e2d\u706b","\u4e01\u536f":"\u7089\u4e2d\u706b","\u620a\u8fb0":"\u5927\u6797\u6728","\u5df1\u5df3":"\u5927\u6797\u6728","\u5e9a\u5348":"\u8def\u65c1\u571f","\u8f9b\u672a":"\u8def\u65c1\u571f","\u58ec\u7533":"\u5251\u950b\u91d1","\u7678\u9149":"\u5251\u950b\u91d1","\u7532\u620c":"\u5c71\u5934\u706b","\u4e59\u4ea5":"\u5c71\u5934\u706b","\u4e19\u5b50":"\u6da7\u4e0b\u6c34","\u4e01\u4e11":"\u6da7\u4e0b\u6c34","\u620a\u5bc5":"\u57ce\u5934\u571f","\u5df1\u536f":"\u57ce\u5934\u571f","\u5e9a\u8fb0":"\u767d\u814a\u91d1","\u8f9b\u5df3":"\u767d\u814a\u91d1","\u58ec\u5348":"\u6768\u67f3\u6728","\u7678\u672a":"\u6768\u67f3\u6728","\u7532\u7533":"\u6cc9\u4e2d\u6c34","\u4e59\u9149":"\u6cc9\u4e2d\u6c34","\u4e19\u620c":"\u5c4b\u4e0a\u571f","\u4e01\u4ea5":"\u5c4b\u4e0a\u571f","\u620a\u5b50":"\u9739\u96f3\u706b","\u5df1\u4e11":"\u9739\u96f3\u706b","\u5e9a\u5bc5":"\u677e\u67cf\u6728","\u8f9b\u536f":"\u677e\u67cf\u6728","\u58ec\u8fb0":"\u957f\u6d41\u6c34","\u7678\u5df3":"\u957f\u6d41\u6c34","\u7532\u5348":"\u6c99\u4e2d\u91d1","\u4e59\u672a":"\u6c99\u4e2d\u91d1","\u4e19\u7533":"\u5c71\u4e0b\u706b","\u4e01\u9149":"\u5c71\u4e0b\u706b","\u620a\u620c":"\u5e73\u5730\u6728","\u5df1\u4ea5":"\u5e73\u5730\u6728","\u5e9a\u5b50":"\u58c1\u4e0a\u571f","\u8f9b\u4e11":"\u58c1\u4e0a\u571f","\u58ec\u5bc5":"\u91d1\u7b94\u91d1","\u7678\u536f":"\u91d1\u7b94\u91d1","\u7532\u8fb0":"\u8986\u706f\u706b","\u4e59\u5df3":"\u8986\u706f\u706b","\u4e19\u5348":"\u5929\u6cb3\u6c34","\u4e01\u672a":"\u5929\u6cb3\u6c34","\u620a\u7533":"\u5927\u9a7f\u571f","\u5df1\u9149":"\u5927\u9a7f\u571f","\u5e9a\u620c":"\u9497\u948f\u91d1","\u8f9b\u4ea5":"\u9497\u948f\u91d1","\u58ec\u5b50":"\u6851\u62d3\u6728","\u7678\u4e11":"\u6851\u62d3\u6728","\u7532\u5bc5":"\u5927\u6eaa\u6c34","\u4e59\u536f":"\u5927\u6eaa\u6c34","\u4e19\u8fb0":"\u6c99\u4e2d\u571f","\u4e01\u5df3":"\u6c99\u4e2d\u571f","\u620a\u5348":"\u5929\u4e0a\u706b","\u5df1\u672a":"\u5929\u4e0a\u706b","\u5e9a\u7533":"\u77f3\u69b4\u6728","\u8f9b\u9149":"\u77f3\u69b4\u6728","\u58ec\u620c":"\u5927\u6d77\u6c34","\u7678\u4ea5":"\u5927\u6d77\u6c34"},querySAByDay:function(t,a,r){var n={},o=e.getStemsBranchDay(t),s=e.getStemsBranchMonth(t.getFullYear(),e.dayOfYear(t)-1),u=e.getStemsBranchDayAsString(t),f=o%10,i=o%12,c=e.mPzStemArray[f]+" "+e.mPzBranchArray[i];n.pzbj=c;var h="",l="",g=(s+10)%12+1;a[g+"-"+u]&&(h=a[g+"-"+u].JSYQ,l=a[g+"-"+u].XSYJ,n.jsyq=h,n.xsyj=l);var D="";e.mWxMap[u]&&(D=e.mWxMap[u],n.wx=D);var m=e.cxInfoOfDateTime(t,-2);n.cs=m;var y=e.zhiShenOfMonth(s%12,o%12);n.zhishen=y;var M=e.jianChuOfDate(t);n.jianchu=M;var S=e.stars28OfDate(t);n.stars28=S;var v=e.getStemsBranchMonthAsString(t.getFullYear(),e.dayOfYear(t)-1),T=e.getStemsBranchDayAsString(t),B=e.taiShenOfMonthDiZhi(v,T,r);return n.taishen=B,n},getStemsBranchDayAsString:function(t){return e.formatStemsBranchString(e.getStemsBranchDay(t))},jianChuOfDate:function(t){var a=new Date(1901,0,1),r=new Date(t.getFullYear(),t.getMonth(),t.getDate()),n=e.twentyFourTermdaysOf(r),o=-1;if(2==n.length){var s=parseInt(n[0]),u=s%2==0?s/2:s/2+1;parseInt(n[n.length-1])&&s%2==0&&(u+=1);var f=Math.abs((r.getTime()-a.getTime())/1e3)/86400;o=Math.ceil((5+f-u)%12)}return["\u5efa\u65e5","\u9664\u65e5","\u6ee1\u65e5","\u5e73\u65e5","\u5b9a\u65e5","\u6267\u65e5","\u7834\u65e5","\u5371\u65e5","\u6210\u65e5","\u6536\u65e5","\u5f00\u65e5","\u95ed\u65e5"][o>=2?o-2:o+10]},stars28OfDate:function(t){for(var a=365*(t.getFullYear()-1),r=0;r<t.getMonth();r++)a+=e.dayCountOfMonth(r,0);a+=t.getDate();var n=0;return e.isLeapYear(t.getFullYear())&&(t.getMonth()+1>3||t.getMonth()+1==3&&t.getDate()>=1)&&(n=1),["\u8f78\u6c34\u8693\u5bbf\u661f","\u89d2\u6728\u86df\u5bbf\u661f","\u4ea2\u91d1\u9f99\u5bbf\u661f","\u6c10\u571f\u8c89\u5bbf\u661f","\u623f\u65e5\u5154\u5bbf\u661f","\u5fc3\u6708\u72d0\u5bbf\u661f","\u5c3e\u706b\u864e\u5bbf\u661f","\u7b95\u6c34\u8c79\u5bbf\u661f","\u6597\u6728\u736c\u5bbf\u661f","\u725b\u91d1\u725b\u5bbf\u661f","\u5973\u571f\u8760\u5bbf\u661f","\u865a\u65e5\u9f20\u5bbf\u661f","\u5371\u6708\u71d5\u5bbf\u661f","\u5ba4\u706b\u732a\u5bbf\u661f","\u74a7\u6c34\u8c90\u5bbf\u661f","\u594e\u6728\u72fc\u5bbf\u661f","\u5a04\u91d1\u72d7\u5bbf\u661f","\u80c3\u571f\u96c9\u5bbf\u661f","\u6634\u65e5\u9e21\u5bbf\u661f","\u6bd5\u6708\u4e4c\u5bbf\u661f","\u89dc\u706b\u7334\u5bbf\u661f","\u53c2\u6c34\u733f\u5bbf\u661f","\u4e95\u6728\u72b4\u5bbf\u661f","\u9b3c\u91d1\u7f8a\u5bbf\u661f","\u67f3\u571f\u7350\u5bbf\u661f","\u661f\u65e5\u9a6c\u5bbf\u661f","\u5f20\u6708\u9e7f\u5bbf\u661f","\u7ffc\u706b\u86c7\u5bbf\u661f"][(a+Math.floor((t.getFullYear()-1)/4-13+n)+23)%28]},isLeapYear:function(e){return e%4==0&&e%100!=0||e%400==0},dayCountOfMonth:function(e,t){switch(e+1){case 1:return 31;case 2:return t?29:28;case 3:return 31;case 4:return 30;case 5:return 31;case 6:return 30;case 7:case 8:return 31;case 9:return 30;case 10:return 31;case 11:return 30;case 12:return 31}return 0},taiShenOfMonthDiZhi:function(t,a,r){var n=e.codeForMonthDizhi(t);return e.taiShenWithCode(n,a,r)},codeForMonthDizhi:function(e){return{"\u5b50":11,"\u4e11":12,"\u5bc5":1,"\u536f":2,"\u8fb0":3,"\u5df3":4,"\u5348":5,"\u672a":6,"\u7533":7,"\u9149":8,"\u620c":9,"\u4ea5":10}[e]},taiShenWithCode:function(e,t,a){var r=a[e+"-"+t];return r||"\u6682\u65e0"},getStemsBranchMonthAsString:function(t,a){return e.formatBranchMonthString(e.getStemsBranchMonth(t,a))},formatBranchMonthString:function(t){return t<0?"":e.Zhi[t%12]},cxInfoOfDateTime:function(t,a){var r=e.branchIndexOfSolar(t,a),n=e.chongIndexOfDateTime(r),o=e.shaDirectionOfDateTime(r);try{return"\u51b2"+e.ANIMAL[n]+"\u715e"+e.CompassNames[o].replace("\u6b63","")}catch(e){return""}},branchIndexOfSolar:function(t,a){return-2==a?e.getBranchDay(t):e.getStemBranchHour(t,a)%12},getBranchDay:function(t){var a=e.getIntervalDays(e.BASE_STEMS_DATE,t);return a>0?Math.floor((a+3)%12):0},chongIndexOfDateTime:function(e){var t=-1;switch(e){case 0:t=6;break;case 1:t=7;break;case 2:t=8;break;case 3:t=9;break;case 4:t=10;break;case 5:t=11;break;case 6:t=0;break;case 7:t=1;break;case 8:t=2;break;case 9:t=3;break;case 10:t=4;break;case 11:t=5}return t},shaDirectionOfDateTime:function(t){var a=e.CompassUnknown;switch(t){case 0:case 4:case 8:a=e.CompassSouth;break;case 1:case 5:case 9:a=e.CompassEast;break;case 2:case 6:case 10:a=e.CompassNorth;break;case 3:case 7:case 11:a=e.CompassWest}return a},getStemsBranchHourAsString:function(t,a){var r=e.getLunarHourIndex(a);return e.formatStemsBranchString(e.getStemBranchHour(t,r))},getLunarHourIndex:function(e){return(Math.floor(e/2)+e%2)%12},getStemBranchHour:function(t,a){var r=e.getIntervalDays(e.BASE_STEMS_DATE,t),n=parseInt((r+9)%10);return((a+2*(n>4?n-5:n))%10*6-5*a+60)%60},formatStemsBranchString:function(t){return t<0?"":e.Gan[t%10]+e.Zhi[t%12]},getIntervalDays:function(e,t){return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),Math.floor((t-e)/864e5)},getYJSqlFields:function(t){var a=["-1","-1"],r=e.twentyFourTermdaysOf(t);if(2==r.length){var n=r[0],o=r[1],s=Math.floor(n%2==0?n/2:n/2+1);o>0&&n%2==0&&(s+=1);var u=new Date(1901,0,1),f=Math.abs(e.getIntervalDays(u,t));a[0]=(15+f)%60+"",a[1]=Math.floor(Math.abs((5+f-s)%12))+""}return a},twentyFourTermdaysOf:function(t){try{for(var r=t.getFullYear()-1900,n=e.dayOfYear(t)-1,o=0,s=0,u=0;u<24;u++){var f=a[24*r+u];if(f>n){o=u,s=0;break}if(f==n){o=u,s=1;break}}return[o+24*r-24,s]}catch(e){return null}},dayOfYear:function(e){for(var t=new Array(31,28,31,30,31,30,31,31,30,31,30,31),a=e.getDate(),r=e.getMonth(),n=e.getFullYear(),o=0,s=0;s<r;s++)o+=t[s];return o+=a,(r>1&&n%4==0&&n%100!=0||n%400==0)&&(o+=1),o},jixiongStatusOfDateTime:function(t,a){var r=e.JXStatusUnknown,n=e.getStemsBranchDay(t);return n>-1&&n<60&&(r=(e.JXTable[n]>>11-e.getLunarHourIndex(a)&1)>0?e.JXStatusJi:e.JXStatusXiong),e.getJXName(r)},getStemsBranchDay:function(t){var a=e.getIntervalDays(e.BASE_STEMS_DATE,t);return a>0?(6*parseInt((a+9)%10)-5*parseInt((a+3)%12)+60)%60:-1},getJXName:function(t){return t<0||t>e.JXNames.length?"":e.JXNames[t]},zhiShenOfMonth:function(e,t){var a=0;0==e||6==e?a=8:1==e||7==e?a=10:2==e||8==e?a=0:3==e||9==e?a=2:4==e||10==e?a=4:5!=e&&11!=e||(a=6);var r=t-a;return r<0&&(r+=12),["\u9752\u9f99","\u660e\u5802","\u5929\u5211","\u6731\u96c0","\u91d1\u532e","\u5929\u5fb7","\u767d\u864e","\u7389\u5802","\u5929\u7262","\u7384\u6b66","\u53f8\u547d","\u52fe\u9648"][r]},getStemsBranchMonth:function(t,a){var r=e.findPreTerm(t,a),n=Math.floor(12*(t-e.BASE_STEMS_YEAR)+(r+2)/2-2);return((n+2)%10*6-(n+2)%12*5+60)%60},MIN:1900,MAX:2135,findPreTerm:function(t,r){var n=t-e.MIN;if(n>0&&n<a.length/24){var o=24*n;return e.findPreTerm1(a,r,o)}return-1},findPreTerm1:function(e,t,a){for(var r=new Array(24),n=a;n<=a+23;n++)r[n-a]=e[n];var o=-1,s=0;for(s=0;s<r.length;s++){if(t===r[s]){o=s;break}if(t<r[s]){o=s-1;break}}return s===r.length&&-1===o&&(o=s-1),o},getDogDayInfo:function(t){var a=e.getDogDaysBeginDates(t.getFullYear());if(null==a||a.length<3)return"";var r=e.getIntervalDays(a[0],t),n=e.getIntervalDays(a[1],t),o=e.getIntervalDays(a[2],t);return r>=0&&n<0?"\u521d\u4f0f\u7b2c"+(r+1)+"\u5929":n>=0&&o<0?"\u4e2d\u4f0f\u7b2c"+(n+1)+"\u5929":o>=0&&o<10?"\u672b\u4f0f\u7b2c"+(o+1)+"\u5929":""},getDogDaysBeginDates:function(a){var r=e.getOffsetByTerm(a,t.TERMS_XZ);if(r<0)return null;var n=new Array(3),o=e.getDateObjByOffset(a,r),s=e.getStemsDay(o);return n[0]=e.getNextDay(o,20+(s>6?16-s:6-s)),n[1]=e.getNextDay(n[0],10),(r=e.getOffsetByTerm(a,t.TERMS_LQ))<0?null:(o=e.getDateObjByOffset(a,r),s=e.getStemsDay(o),n[2]=e.getNextDay(o,s>6?16-s:6-s),n)},getOffsetByTerm:function(e,t){return t<0?-1:a[24*(e-1900)+t]},getStemsDay:function(t){var a=e.getIntervalDays(e.BASE_STEMS_DATE,t);return a>0?Math.floor((a+9)%10):0},getDateObjByOffset:function(e,t){var a=new Date(e,0,1,0,0,0,0);return a.setDate(a.getDate()+t),a},getNextDay:function(e,t){var a=new Date(e.getFullYear(),e.getMonth(),e.getDate());return a.setDate(a.getDate()+t),a},MIN_YEAR:1900,MAX_YEAR:2135,CHINESE_NUM:["\u96f6","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341"],getColdInfo:function(t){var a=e.getIntervalDays(e.getColdBeginDate(t),t);if(a>=0){var r=Math.floor(a/9),n=Math.floor(a%9+1);if(r>=0&&r<9)return e.CHINESE_NUM[r+1]+"\u4e5d\u7b2c"+n+"\u5929"}return""},getColdBeginDate:function(a){var r=a.getFullYear();if(r>=e.MIN_YEAR&&r<=e.MAX_YEAR){var n=0;return e.dayOfYear(a)<100?(n=e.getOffsetByTerm(r-1,t.STEMS_DZ),e.getDateObjByOffset(r-1,n)):(n=e.getOffsetByTerm(r,t.STEMS_DZ),e.getDateObjByOffset(r,n))}return null}},t={TERMS_XZ:11,TERMS_LQ:14,STEMS_DZ:23},a=[5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,5,20,35,49,64,79,95,110,125,141,157,172,188,204,219,235,250,266,281,296,311,326,341,356,5,20,35,50,65,80,95,110,126,141,157,172,188,204,220,235,251,266,281,296,311,326,341,356,6,20,35,50,65,80,95,110,126,141,157,173,188,204,220,235,251,266,282,297,312,327,341,356,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,5,20,35,49,64,79,95,110,125,141,156,172,188,204,219,235,250,266,281,296,311,326,341,356,5,20,35,50,65,80,95,110,126,141,157,172,188,204,220,235,251,266,281,296,311,326,341,356,6,20,35,50,65,80,95,110,126,141,157,173,188,204,220,235,251,266,282,297,312,327,341,356,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,5,20,35,49,64,79,95,110,125,141,156,172,188,204,219,235,250,266,281,296,311,326,341,356,5,20,35,50,65,80,95,110,126,141,157,172,188,204,220,235,251,266,281,296,311,326,341,356,6,20,35,50,65,80,95,110,126,141,157,173,188,204,220,235,251,266,282,297,312,326,341,356,5,19,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,265,281,296,311,326,341,355,5,20,34,49,64,79,94,110,125,141,156,172,188,204,219,235,250,266,281,296,311,326,341,356,5,20,35,50,64,80,95,110,125,141,157,172,188,204,219,235,251,266,281,296,311,326,341,356,5,20,35,50,65,80,95,110,126,141,157,173,188,204,220,235,251,266,281,297,312,326,341,356,5,19,34,49,64,79,94,110,125,140,156,172,188,203,219,235,250,265,281,296,311,326,341,355,5,20,34,49,64,79,94,110,125,141,156,172,188,204,219,235,250,266,281,296,311,326,341,355,5,20,35,50,64,80,95,110,125,141,157,172,188,204,219,235,251,266,281,296,311,326,341,356,5,20,35,50,65,80,95,110,126,141,157,173,188,204,220,235,251,266,281,297,312,326,341,356,5,19,34,49,64,79,94,109,125,140,156,172,188,203,219,235,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,204,219,235,250,266,281,296,311,326,341,355,5,20,35,49,64,79,95,110,125,141,157,172,188,204,219,235,251,266,281,296,311,326,341,356,5,20,35,50,65,80,95,110,126,141,157,173,188,204,220,235,251,266,281,297,312,326,341,356,5,19,34,49,64,79,94,109,125,140,156,172,188,203,219,235,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,5,20,35,49,64,79,95,110,125,141,157,172,188,204,219,235,251,266,281,296,311,326,341,356,5,20,35,50,65,80,95,110,126,141,157,173,188,204,220,235,251,266,281,296,311,326,341,356,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,5,20,35,49,64,79,95,110,125,141,157,172,188,204,219,235,250,266,281,296,311,326,341,356,5,20,35,50,65,80,95,110,126,141,157,172,188,204,220,235,251,266,281,296,311,326,341,356,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,5,20,35,49,64,79,95,110,125,141,156,172,188,204,219,235,250,266,281,296,311,326,341,356,5,20,35,50,65,80,95,110,126,141,157,172,188,204,220,235,251,266,281,296,311,326,341,356,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,5,20,35,49,64,79,95,110,125,141,156,172,188,204,219,235,250,266,281,296,311,326,341,356,5,20,35,50,65,80,95,110,126,141,157,172,188,204,220,235,251,266,281,296,311,326,341,356,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,5,20,35,49,64,79,95,110,125,141,156,172,188,204,219,235,250,266,281,296,311,326,341,356,5,20,35,50,65,80,95,110,125,141,157,172,188,204,220,235,251,266,281,296,311,326,341,356,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,280,296,311,325,340,355,5,19,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,265,281,296,311,326,341,355,5,20,34,49,64,79,94,110,125,141,156,172,188,204,219,235,250,266,281,296,311,326,341,356,5,20,35,50,64,80,95,110,125,141,157,172,188,204,219,235,251,266,281,296,311,326,341,356,4,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,280,296,311,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,188,203,219,235,250,265,281,296,311,326,341,355,5,20,34,49,64,79,94,110,125,141,156,172,188,204,219,235,250,266,281,296,311,326,341,356,5,20,35,50,64,80,95,110,125,141,157,172,188,204,219,235,251,266,281,296,311,326,341,356,4,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,280,296,311,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,188,203,219,235,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,5,20,35,50,64,79,95,110,125,141,157,172,188,204,219,235,251,266,281,296,311,326,341,356,4,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,280,296,311,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,5,20,35,49,64,79,95,110,125,141,157,172,188,204,219,235,250,266,281,296,311,326,341,356,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,5,20,35,49,64,79,95,110,125,141,157,172,188,204,219,235,250,266,281,296,311,326,341,356,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,5,20,35,49,64,79,95,110,125,141,156,172,188,204,219,235,250,266,281,296,311,326,341,356,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,5,20,35,49,64,79,95,110,125,141,156,172,188,204,219,235,250,266,281,296,311,326,341,356,4,19,34,49,64,79,94,109,124,140,156,171,187,203,219,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,265,281,296,311,326,341,355,5,20,35,49,64,79,94,110,125,141,156,172,188,204,219,235,250,266,281,296,311,326,341,356,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,280,296,311,326,340,355,5,19,34,49,64,79,94,110,125,140,156,172,188,203,219,235,250,265,281,296,311,326,341,355,5,20,35,49,64,79,94,110,125,141,156,172,188,204,219,235,250,266,281,296,311,326,341,356,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,280,296,311,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,188,203,219,235,250,265,281,296,311,326,341,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,356,4,19,34,49,63,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,280,296,311,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,235,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,4,19,34,49,63,78,94,109,124,140,156,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,296,311,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,4,19,34,48,63,78,94,109,124,140,156,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,4,19,34,48,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,4,19,34,48,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,4,19,34,48,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,265,281,296,311,326,341,355,4,19,34,48,63,78,93,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,280,296,311,326,340,355,5,20,34,49,64,79,94,110,125,140,156,172,188,203,219,235,250,265,281,296,311,326,341,355,4,19,34,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,280,296,311,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,188,203,219,235,250,265,281,296,311,326,341,355,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,355,4,19,34,49,63,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,296,311,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,341,355,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,354,4,19,34,49,63,78,94,109,124,140,156,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,296,311,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,354,4,19,34,48,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,354,4,19,34,48,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,354,4,19,34,48,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,354,4,19,34,48,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,4,19,33,48,63,78,93,109,124,139,155,171,187,202,218,234,249,264,280,295,310,325,340,354,4,19,34,48,63,78,93,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,280,296,311,326,340,355,4,19,33,48,63,78,93,108,124,139,155,171,187,202,218,234,249,264,280,295,310,325,340,354,4,19,34,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,296,311,325,340,355,4,18,33,48,63,78,93,108,124,139,155,171,186,202,218,233,249,264,280,295,310,325,340,354,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,355,4,19,34,49,63,78,94,109,124,140,156,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,296,311,325,340,355,4,18,33,48,63,78,93,108,124,139,155,171,186,202,218,233,249,264,280,295,310,325,340,354,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,355,4,19,34,49,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,296,311,325,340,355,4,18,33,48,63,78,93,108,124,139,155,171,186,202,218,233,249,264,280,295,310,325,339,354,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,354,4,19,34,49,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,295,310,325,340,355,4,18,33,48,63,78,93,108,124,139,155,171,186,202,218,233,249,264,280,295,310,325,339,354,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,354,4,19,34,48,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,295,310,325,340,355,4,18,33,48,63,78,93,108,124,139,155,171,186,202,218,233,249,264,280,295,310,325,339,354,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,354,4,19,34,48,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,4,18,33,48,63,78,93,108,124,139,155,171,186,202,218,233,249,264,280,295,310,325,339,354,4,19,33,48,63,78,93,109,124,139,155,171,187,202,218,234,249,264,280,295,310,325,340,354,4,19,34,48,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,4,18,33,48,63,78,93,108,124,139,155,171,186,202,218,233,249,264,279,295,310,325,339,354,4,19,33,48,63,78,93,109,124,139,155,171,187,202,218,234,249,264,280,295,310,325,340,354,4,19,34,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,4,18,33,48,63,78,93,108,124,139,155,171,186,202,218,233,249,264,279,295,310,325,339,354,4,19,33,48,63,78,93,108,124,139,155,171,186,202,218,234,249,264,280,295,310,325,340,354,4,19,34,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,4,18,33,48,63,78,93,108,124,139,155,170,186,202,218,233,249,264,279,295,310,324,339,354,4,19,33,48,63,78,93,108,124,139,155,171,186,202,218,233,249,264,280,295,310,325,340,354,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,355,4,19,34,49,63,78,94,109,124,140,156,171,187,203,218,234,249,265,280,295,310,325,340,355,3,18,33,48,63,78,93,108,124,139,155,170,186,202,218,233,249,264,279,295,310,324,339,354,4,18,33,48,63,78,93,108,124,139,155,171,186,202,218,233,249,264,280,295,310,325,340,354,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,355,4,19,34,49,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,3,18,33,48,63,78,93,108,124,139,155,170,186,202,218,233,249,264,279,295,310,324,339,354,4,18,33,48,63,78,93,108,124,139,155,171,186,202,218,233,249,264,280,295,310,325,339,354,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,354,4,19,34,49,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,3,18,33,48,63,78,93,108,124,139,155,170,186,202,218,233,249,264,279,294,309,324,339,354,4,18,33,48,63,78,93,108,124,139,155,171,186,202,218,233,249,264,280,295,310,325,339,354,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,354,4,19,34,48,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,3,18,33,48,63,78,93,108,124,139,155,170,186,202,217,233,249,264,279,294,309,324,339,354,4,18,33,48,63,78,93,108,124,139,155,171,186,202,218,233,249,264,280,295,310,325,339,354,4,19,33,48,63,78,93,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,354,4,19,34,48,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,140,156,172,188,203,219,235,250,265,281,296,311,326,341,355,5,20,35,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,356,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,280,296,311,326,340,355,5,20,34,49,64,79,94,110,125,140,156,172,187,203,219,235,250,265,281,296,311,326,341,355,5,20,35,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,356,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,296,311,326,340,355,5,20,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,341,355,5,20,35,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,356,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,249,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,296,311,325,340,355,5,20,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,341,355,5,20,35,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,356,4,19,34,49,63,79,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,296,311,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,341,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,356,4,19,34,49,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,171,187,203,219,234,250,265,280,295,311,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,4,19,34,49,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,125,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,141,156,172,188,203,219,235,250,266,281,296,311,326,341,355,4,19,34,48,63,78,94,109,124,140,155,171,187,203,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355,5,20,34,49,64,79,94,110,125,140,156,172,188,203,219,235,250,265,281,296,311,326,341,355,4,19,34,48,63,78,94,109,124,140,155,171,187,202,218,234,249,265,280,295,310,325,340,355,4,19,34,49,64,79,94,109,124,140,156,171,187,203,218,234,250,265,280,295,310,325,340,355,5,19,34,49,64,79,94,109,125,140,156,172,187,203,219,234,250,265,281,296,311,326,340,355];return e.TermTable=a,e.termTimeTable=[0,0,49891,36074,30112,34741,49961,77226,28512,76615,45535,20385,83408,59767,31834,83989,40598,73211,7989,17716,16784,6470,75350,52894,28403,4588,70792,56694,51053,55415,71061,11606,49824,11079,66987,41266,18454,80625,53166,18449,61815,7736,29188,38774,38069,27673,10357,74195,49893,25916,5890,77982,72452,76593,5846,32648,70728,32011,1187,62108,38779,14992,73336,39183,81985,28520,49510,59738,58666,48923,31261,9331,71023,47612,27077,13248,7132,11686,26753,53919,5122,53101,22027,83095,59796,35925,8150,60095,16941,49421,70904,80583,80003,69684,52519,30025,5822,68271,48247,33891,28299,32314,47931,74528,26314,73735,43258,17481,81101,56975,29511,81384,38278,70812,5734,15542,14698,4553,73520,51236,26826,3116,69349,55258,49536,53851,69268,9825,47644,9076,64413,39082,15599,78337,50217,16116,58906,5396,26376,36475,35386,25493,7847,72221,47607,24194,3834,76467,70566,75167,4036,31150,68909,30295,85734,60108,36916,12752,71494,36812,80172,26099,47693,57283,56814,46431,29365,6796,69085,45047,25129,10698,5225,9179,24887,51433,3215,50594,19976,80579,57550,33476,5758,57803,14522,47332,68562,78690,77777,67923,50366,28292,3667,66484,46033,32034,26014,30434,45586,72675,23900,71886,40743,15541,78480,54845,26802,79019,35536,68295,3051,13007,12121,2077,71017,48804,24313,655,66751,52699,46847,51176,66565,7064,45050,6292,62036,36331,13437,75626,48148,13410,56795,2669,24188,33750,33183,22815,5689,69587,45477,21536,1642,73687,68190,72172,1375,27942,65960,27008,82580,56921,33662,9776,68228,34040,76930,23444,44465,54668,53603,43850,26213,4303,66052,42683,22216,8416,2330,6860,21872,48955,18,47913,16672,77730,54295,30516,2665,54777,11596,44250,65696,75491,74820,64553,47254,24789,449,62946,42811,28534,22859,26959,42495,69141,20823,68226,37649,11811,75402,51220,23830,75679,32739,65279,402,10200,9518,85688,68333,45879,21474,83944,63758,49452,43738,47875,63351,3771,41679,2991,58404,32966,9532,72221,44147,10089,52944,85961,20620,30889,29862,20112,2461,66891,42171,18709,84556,70674,64548,69042,84110,24792,62403,23858,79196,53700,30432,6412,65111,30574,73946,20027,41687,51436,51061,40821,23825,1342,63616,39570,19526,4983,85696,3074,18555,44926,82964,43823,13207,73760,50865,26781,85661,51298,8225,41025,62452,72579,71858,62006,44633,22544,84467,60813,40438,26279,20241,24410,39469,66275,17385,65150,33939,8661,71613,48068,20095,72511,29099,62083,83271,7031,6135,82664,65169,43109,18567,81438,61052,47084,41088,45431,60594,1042,38742,86311,55390,29656,6613,68865,41407,6818,50361,82806,18128,27817,27414,17092,59,63937,39863,15872,82385,67961,62455,66337,81912,21923,59891,20727,76257,50374,27127,3083,61644,27427,70526,17137,38417,48767,47932,38282,20789,85287,60688,37240,16763,2845,83129,1145,16124,43115,80520,41944,10596,71610,48030,24266,82681,48496,5257,38118,59600,69674,69090,59107,41867,19621,81647,57860,37586,23337,17462,21555,36894,63547,15077,62503,31822,5985,69516,45293,17894,69675,26792,59285,80948,4359,3894,80123,63016,40616,16420,78879,58812,44396,38709,42658,58121,84734,36257,83800,52885,27335,3994,66615,38605,4507,47379,80382,15036,25335,24330,14667,83485,61643,37015,13674,79584,65769,59629,64113,79080,19712,57170,18613,73815,48399,25045,1178,59828,25449,68779,14972,36565,46372,45912,35709,18638,82612,58440,34485,14417,86380,80666,84522,13547,39933,77894,38713,8058,68562,45731,21629,80669,46305,3429,36210,57802,67849,67220,57216,39873,17593,79533,55701,35372,21076,15132,19205,34387,61113,12339,60025,28891,3558,66564,43047,15134,67673,24330,57493,78729,2662,1751,78382,60779,38724,13994,76808,56205,42179,35990,40326,55347,82265,33471,81173,50182,24594,1494,63887,36425,1985,45601,78199,13642,23462,23173,12924,82337,59795,35657,11545,77896,63283,57581,61268,76697,16563,54500,15266,70897,44998,21936,84284,56652,22434,65751,12392,33891,44294,43662,34053,16719,81198,56677,33108,12602,84853,78616,82742,11166,37898,75184,36467,5085,66127,42595,19001,77483,43523,325,33412,54905,65197,64614,54835,37578,15506,77471,53796,33382,19152,13034,17051,32071,58600,9809,57139,26229,383,63855,39733,12450,64385,21705,54326,76191,86068,85770,75612,58636,36216,12121,74530,54523,40008,34317,38085,53473,79815,31220,78453,47447,21633,84698,60794,32921,85272,41974,75135,10022,20484,19647,10083,78984,57161,32552,9176,75067,61185,54993,59382,74242,14745,52019,13319,68282,42765,19180,81713,53818,19577,62902,9352,31048,41157,40812,30865,13837,77969,53735,29847,9638,81614,75726,79574,8426,34785,72575,33321,2505,62880,39934,15680,74692,40213,83835,30195,52011,62126,61791,51878,34815,12571,74703,50805,30560,16099,10159,14012,29179,55681,6908,54393,23263,84154,60735,37079,9108,61570,18172,51349,72578,83030,82180,72605,55102,33252,8600,71559,50956,36975,30684,34983,49829,76694,27705,75405,44239,18705,81857,57922,30330,82339,39446,72066,7433,17283,16978,6804,76265,53846,29787,5811,72217,57697,51980,55673,71019,10807,48644,9291,64881,38871,15865,78127,50618,16320,59768,6308,27899,38175,37601,27860,10591,74962,50539,26897,6521,78716,72610,76663,5181,31804,69122,30287,85295,59871,36332,12774,71268,37436,80644,27487,48940,59349,58651,48922,31490,9423,71197,47533,26956,12780,6546,10668,25604,52264,3390,50844,19840,80494,57498,33470,6190,58228,15635,48354,70345,80282,80078,69900,52933,30397,6224,68457,48333,33641,27864,31501,46882,73148,24635,71827,40968,15116,78355,54413,26720,79069,35963,69174,4254,14790,14115,4587,73576,51696,27068,3522,69298,55173,48826,52982,67719,8081,45309,6608,61597,36212,12681,75422,47561,13546,56888,3567,25284,35624,35299,25562,8518,72801,48471,24640,4226,76155,69971,73706,2244,28505,66062,26798,82298,56362,33500,9396,68607,34268,78121,24565,46596,56749,56610,46708,29820,7555,69820,45843,25652,11022,5038,8621,23674,49852,976,48180,17042,77782,54481,30843,3089,55710,12554,45932,67343,77958,77206,67735,50271,28481,3834,66817,46184,32181,25804,30019,44695,71424,22190,69767,38352,12795,75784,51968,24352,76611,33828,66762,2292,12429,12243,2267,71758,49446,25338,1408,67714,53206,47360,51034,66230,5945,43610,4118,59551,33373,10306,72443,45018,10690,54367,984,22902,33308,33067,23421,6407,70771,46490,22732,2404,74413,68310,72154,670,27089,64401,25369,80337,54737,31130,7470,65910,32099,75308,22301,43829,54495,53923,44486,27170,5344,67155,43624,22975,8825,2426,6512,21238,47865,85183,46246,15053,75734,52562,28549,1131,53186,10532,43295,65323,75356,75279,65250,48458,26085,2066,64416,44362,29691,23879,27430,42706,68811,20195,67212,36324,10320,73606,49523,21903,74116,31087,64184,85747,9814,9251,86111,68859,47012,22579,85475,65033,50910,44678,48757,63512,3728,40889,2033,56922,31457,7848,70620,42695,8779,52045,85234,20447,30879,30429,20775,3611,67997,43580,19890,85821,71513,65276,69158,84008,23962,61377,22140,77472,51527,28548,4449,63651,29336,73263,19715,41837,51950,51862,41856,24971,2563,64813,40702,20520,5798,86273,3403,18560,44690,82333,43055,12019,72632,49408,25649,84377,50550,7499,40899,62416,73077,72392,62927,45457,23593,85268,61712,40969,26823,20356,24481,39116,65835,16594,64238,32809,7363,70295,46599,18896,71291,28449,61548,83462,7377,7186,83762,66804,44571,20323,82775,62446,47849,41726,45306,60267,86346,37481,84427,53460,27360,4397,66593,39311,4989,48819,81812,17499,27883,27823,18149,1300,65598,41422,17522,83606,68978,62800,66341,81158,20883,58155,18922,73952,48288,24831,1237,59846,26165,69490,16610,38183,48960,48396,39063,21738,1,61785,38302,17574,3400,83238,822,15302,41797,78841,39829,8418,69150,45878,22045,81057,46967,4422,37419,59545,69730,69694,59736,42933,20586,82922,58878,38753,24065,18146,21630,36756,62721,13938,60767,29764,3593,66894,42726,15275,67509,24763,57952,79825,3974,3657,80523,63419,41485,17117,79861,59441,45138,38912,42803,57550,83972,34690,82042,50449,24840,1150,63894,35944,2152,45471,78913,14238,24979,24634,15250,84509,62659,38152,14510,80256,65925,59457,63304,77924,17870,55078,15859,71005,45079,21952,84270,57002,22733,66706,13250,35528,45781,45909,36051,19366,83452,59417,35296,15115,277,80667,84015,12669,38605,76198,36752,5747,66221,43079,19192,78012,44086,1136,34502,56153,66859,66354,56990,39726,17967,79825,56315,35677,21478,15007,18987,33529,60072,10702,58223,26683,1228,64089,40488,12723,65251,22331,55562,77398,1450,1201,77940,60956,38914,14660,77307,56951,42506,36292,39947,54741,80818,31750,78660,47531,21411,84805,60626,33430,85553,43129,76129,11948,22278,22313,12546,82175,59980,35898,11930,78130,63453,57395,60869,75782,15387,52722,13325,68403,42584,19192,81925,54244,20609,64074,11304,32988,43858,43323,34013,16636,81258,56547,33002,12189,84377,77766,81758,9813,36351,73353,34408,2914,63735,40359,16645,75584,41662,85522,32330,54519,64909,64921,55100,38264,15953,78156,54066,33746,18987,12879,16324,31327,57302,8476,55334,24360,84604,61595,37414,10099,62310,19752,52945,75056,85641,85571,76060,59154,37166,12896,75473,55040,40474,34169,37771,52454,78640,29368,76590,45075,19445,82265,58676,30820,83547,40520,74111,9473,20399,20094,10910,80199,58514,33986,10431,76064,61714,55029,58779,73119,12967,49917,10687,65666,39840,16657,79151,51924,17849,61910,8607,30974,41328,41539,31760,15156,79312,55340,31263,11095,82637,76559,79790,8300,34028,71461,31785,703,61007,37927,13963,72969,39061,82766,29798,51690,62440,62106,52733,35583,13771,75717,52131,31566,17268,10838,14684,29203,55563,6092,53413,21726,82540,58882,35289,7476,60160,17270,50757,72667,83395,83192,73748,56732,34823,10460,73179,52668,38267,31881,35574,50189,76290,27026,73921,42577,16401,79619,55390,28136,80262,37921,70988,7003,17445,17715,8045,77865,55688,31699,7650,73849,59018,52913,56206,71081,10507,47846,8272,63378,37369,13999,76549,48891,15144,58662,5881,27671,38624,38243,29066,11848,76577,51970,28446,7643,79753,73065,76921,4853,31267,68147,29150,83945,58396,34897,11243,70031,36171,79884,26770,48863,59374,59357,49711,32895,10785,73008,49090,28732,14068,7834,11284,26091,52011,2987,49782,18689,78901,55891,31688,4446,56600,14125,47213,69400,79862,79880,70264,53478,31421,7299,69827,49542,34906,28707,32179,46904,72896,23627,70639,39133,13358,76231,52612,24846,77633,34673,68339,3692,14654,14263,5072,74239,52540,27906,4359,69925,55615,48884,52686,66960,6853,43688,4499,59331,33574,10267,72883,45612,11714,55812,2692,25114,35588,35797,26036,9342,73433,49310,25139,4813,76283,70084,73285,1730,27449,64870,25169,80519,54370,31373,7350,66509,32581,76506,23565,45705,56487,56363,46961,29922,7973,69919,46092,25452,10869,4356,7946,22433,48621,85583,46429,14810,75634,52041,28532,768,53607,10764,44466,66435,77409,77258,68040,51023,29261,4795,67540,46805,32321,25626,29198,43500,69531,20032,66962,35499,9456,72666,48610,21430,73720,31504,64706,879,11436,11878,2307,72277,50156,26250,2174,68352,53381,47147,50199,64890,4032,41231,1420,56521,30385,7164,69704,42293,8617,52397,86112,21724,32761,32556,23442,6369,71133,46642,23106,2368,74395,67686,71376,85587,25376,62064,22864,77473,51851,28250,4706,63501,29895,73692,20891,43083,53881,53914,44488,27656,5706,67863,44065,23605,9025,2649,6135,20744,46632,83760,44060,12721,72824,49672,25418,84614,50414,8141,41353,63836,74439,74749,65219,48649,26588,2592,65039,44817,30057,23891,27214,41960,67772,18512,65306,33785,7773,70617,46814,19060,71806,28944,62724,84654,9429,9241,276,69601,48057,23493,86396,65538,51193,44378,48115,62277,2121,38830,86030,54311,28569,5077,67712,40253,6403,50385,83782,19802,30470,30767,21246,4668,68985,44933,20917,568,72098,65789,68980,83682,22961,60268,20522,75824,49620,26636,2519,61710,27638,71607,18520,40754,51450,51493,42083,25275,3364,65558,41758,21323,6698,307,3769,18302,44311,81287,41965,10359,71080,47512,23983,82629,49090,6193,39911,61772,72769,72509,63356,46275,24631,155,63053,42328,27991,21274,24950,39161,65247,15599,62573,30953,4979,68075,44123,16905,69313,27103,60371,82929,7067,7446,84198,67685,45489,21522,83816,63582,48634,42432,45524,60263,85809,36651,83186,51942,25721,2593,65047,37777,4049,48003,81697,17464,28457,28332,19100,2020,66595,42051,18302,83924,69373,62679,66259,80540,20286,57057,17856,72517,46934,23346,86292,58673,25210,68990,16373,38555,49539,49532,40238,23283,1368,63305,39453,18707,4041,83781,823,15215,41146,78152,38575,7196,67447,44315,20186,79456,45341,3181,36447,59073,69712,70169,60646,44181,22060,84482,60372,40062,25051,18728,21761,36367,61928,12636,59275,27863,1797,64845,41063,13536,66347,23677,57532,79605,4451,4369,81860,64856,43327,18780,81623,60700,46197,39217,42718,56648,82652,32735,79801,47938,22245,85119,61562,34153,590,44647,78316,14380,25252,25540,16163,85932,63952,39810,15857,81769,66907,60392,63515,77944,17087,54103,14200,69293,42991,19974,82265,55215,21240,65491,12530,35070,45846,46135,36719,20068,84473,60355,36419,16029,1230,81248,84495,12594,38336,75235,35612,3913,64380,40765,17128,75832,42373,86033,33577,55639,66908,66812,57877,40857,19320,81194,57693,36840,22441,15558,19155,33176,59192,9326,56243,24378,84766,61228,37290,9932,62449,20248,53729,76429,836,1410,78415,62050,40019,16087,78425,58104,43100,36735,39716,54282,79703,30413,76814,45497,19127,82379,58268,31035,83571,41241,74886,10867,21910,22070,12945,82560,60818,36511,12749,78497,63810,57128,60484,74708,14213,50920,11528,66139,40448,16815,79729,52044,18606,62300,9766,31889,43027,43022,33951,17052,81793,57391,33769,13029,84910,78152,81639,9431,35341,72103,32503,913,61184,37922,13849,73078,39018,83267,30150,52802,63428,63933,54411,38029,15948,78487,54444,34256,19298,13062,16081,30708,56160,6845,53308,21892,82052,58762,34860,7462,60225,17707,51553,73745,84961,84936,75958,58973,37363,12845,75627,54771,40244,33364,36867,50886,76889,27003,74051,42148,16462,79260,55780,28304,81290,38914,72780,8832,19891,20135,10883,80535,58607,34287,10350,76074,61243,54579,57784,72121,11393,48362,8586,63647,37424,14400,76722,49729,15770,60145,7206,29922,40722,41193,31764,15240,79553,55468,31351,10917,82289,75847,78880,6976,32569,69566,29873,84751,58796,35363,11726,70578,37151,80929,28547,50710,62085,62078,53253,36292,14822,76689,53164,32212,17693,10635,14072,27897,53803,3790,50726,18802,79354,55825,32122,4790,57536,15355,49031,71745,82715,83303,74052,57695,35787,11829,74241,53823,38810,32262,35150,49477,74760,25260,71545,40147,13747,77099,53046,26046,78665,36599,70291,6501,17534,17871,8690,78447,56628,32442,8583,74424,59598,52960,56115,70318,9570,46210,6564,61114,35263,11636,74561,46979,13711,57550,5255,27493,38848,38884,29960,13022,77846,53356,29778,8929,80836,73948,77444,5062,30953,67490,27852,82415,56263,32802,8774,67941,34028,78371,25468,48301,59136,59812,50428,34133,12090,74610,50521,30245,15198,8853,11767,26297,51628,2238,48546,17086,77064,53771,29691,2358,55018,12662,46523,68958,80269,80509,71624,54854,33262,8863,71555,50720,36013,29092,32386,46349,72168,22229,69145,37183,11428,74139,50648,23058,76090,33614,67609,3633,14907,15191,6201,75909,54228,29913,6142,71773,56999,50138,53318,67399,6625,43348,3552,58426,32211,9076,71409,44376,10395,54775,1790,24558,35329,35913,26500,10137,74496,50579,26494,6182,77517,71110,74006,2057,27435,64370,24444,79312,53167,29794,6042,65001,31527,75400,22991,45198,56540,56546,47698,30761,9296,71217,47718,26836,12334,5320,8734,22531,48363,84639,45093,13019,73551,49887,26262,85247,51754,9541,43402,66083,77188,77691,68505,52009,30125,6010,68449,47892,32936,26279,29245,43479,68825,19223,65516,34024,7586,70904,46810,19874,72477,30568,64273,689,11723,12241,2993,72844,50868,26690,2611,68424,53373,46728,49697,63951,3068,39805,53,54703,28761,5209,68087,40570,7334,51248,85469,21397,32918,33033,24259,7337,72225,47647,24020,2987,74766,67651,71018,84826,24265,60649,21070,75543,49530,26009,2142,61269,27513,71856,19115,42003,53008,53775,44553,28334,6407,68926,44861,24471,9337,2781,5532,19829,44988,81841,41633,10163,70104,46943,22872,82147,48417,6280,40142,62789,74104,74549,65673,49102,27507,3277,65912,45176,30319,23398,26444,40318,65846,15792,62470,30440,4589,67320,43908,16406,69638,27253,61477,83945,9018,9295,468,70139,48601,24234,589,66143,51455,44462,47665,61536,724,37180,83731,51953,25728,2443,64851,37832,4010,48540,82139,18702,29613,30356,21007,4735,69095,45217,21102,805,72095,65691,68515,82947,21798,58689,18570,73399,47036,23676,86158,58821,25301,69376,17048,39509,50988,51232,42486,25711,4259,66250,42674,21795,7169,135,3426,17199,42932,79165,39542,7382,67873,44085,20481,79348,45958,3685,37744,60449,71823,72400,63491,47045,25381,1232,63794,43107,28187,21339,24307,38347,63710,13955,60285,28689,2273,65534,41425,14483,67035,25173,58831,81767,6401,7116,84315,67999,46075,22101,84424,63960,48821,42210,45008,59249,84563,34910,81386,49708,23649,198,63010,35578,2306,46262,80465,16400,27930,28058,19340,2465,67447,42942,19413,84841,70276,63160,66515,80236,19618,55859,16253,70593,44646,21038,83718,56398,22809,67114,14504,37325,48396,49065,39874,23555,1673,64121,40138,19705,4677,84486,924,15163,40349,77118,36873,5344,65232,42107,18016,77434,43710,1777,35641,58477,69738,70299,61284,44748,22958,85132,61167,40454,25431,18579,21500,35481,60910,10960,57541,25578,86049,62425,39016,11577,64913,22606,57002,79532,4777,5055,82728,65901,44358,19799,82473,61392,46613,39404,42569,56282,81921,31876,78549,46698,20613,83660,59804,32763,85488,43674,77432,14107,25165,26026,16778,561,64932,40997,16782,82719,67429,60812,63439,77698,16394,53221,13018,67917,41520,18319,80776,53628,20088,64366,12055,34733,46260,46717,38014,21415,86349,62034,38336,17436,2570,81814,84795,12003,37447,73546,33745,1537,62020,38269,14809,73737,40559,84727,32611,55336,66931,67518,58818,42364,20881,83079,59360,38541,23645,16562,19454,33172,58406,8314,54539,22690,82657,59429,35415,8561,61266,19591,53386,76523,1239,2123,79349,63164,41229,17349,79628,59213,43978,37351,39972,54123,79173,29391,75557,43780,17446,80389,56651,29341,82488,40266,74607,10783,22472,22789,14176,83807,62420,37951,14392,79813,65178,58022,61274,74901,14145,50217,10463,64576,38520,14683,77351,49879,16415,60701,8344,31257,42639,43428,34518,18260,82968,58973,35079,14511,85899,79123,81942,9583,34731,71307,30988,85684,59052,35800,11568,70946,37111,81659,29096,52139,63459,64306,55383,39134,17395,79779,55772,35160,19990,13154,15864,29832,55040,5093,51475,19529,79830,56204,32660,5187,58439,16088,50483,73006,84753,85095,76554,59841,38510,14059,76897,55853,41142,33867,37009,50565,76150,25911,72568,40539,14499,77397,53618,26450,79235,37309,71099,7690,18783,19614,10442,80659,58759,34894,10832,76825,61654,55035,57697,71882,10520,47244,6930,61776,35275,12121,74503,47482,13874,58292,5889,28665,40065,40583,31741,15205,80025,55811,32041,11284,82774,75775,78703,6037,31393,67554,27642,81846,55854,32105,8669,67616,34560,78746,26790,49492,61210,61700,53052,36433,14953,76964,53253,32275,17430,10238,13234,26879,52249,2087,48449,16517,76603,53306,29403,2551,55374,13785,47694,70953,82141,83115,73931,57747,35707,11740,73853,53312,37909,31188,33689,47830,72823,23125,69273,37652,11299,74427,50658,23536,76673,34647,69027,5398,17147,17629,9044,78772,57329,32859,9140,74468,59602,52314,55337,68861,7960,43998,4230,58378,32440,8669,71541,44117,10882,55193,3072,26008,37628,38436,29742,13467,78332,54242,30409,9641,80983,73914,76621,3945,28994,65320,24984,79572,53022,29829,5751,65317,31636,76409,23944,47196,58557,59589,50668,34579,12810,75313,51226,30664,15339,8468,10932,24801,49708,86065,45776,13819,73958,50439,26891,86029,53019,10918,45506,68230,80139,80600,72161,55500,34221,9779,72631,51565,36826,29478,32539,45944,71398,20931,67461,35188,9102,71820,48128,20904,73912,32067,66166,2906,14297,15247,6285,76529,54740,30811,6791,72664,57502,50738,53383,67409,5986,42535,2094,56777,30112,6875,69122,42148,8488,53100,751,23836,35358,36210,27470,11203,76031,51973,28097,7392,78693,71695,74404,1733,26878,63037,22928,77103,50929,27116,3559,62444,29373,73542,21700,44459,56405,57016,48644,32148,10904,72964,49384,28339,13509,6147,9086,22511,47831,83853,43817,11693,71810,48333,24453,83849,50284,8606,42540,65800,77067,78137,69095,53068,31199,7380,69626,49157,33792,27037,29465,43494,68337,18524,64506,32844,6346,69516,45611,18565,71561,29608,63857,294,11947,12520,3893,73765,52333,28049,4360,69870,54998,47832,50771,64318,3258,39232,85692,53347,27312,3470,66362,38882,5737,49974,84354,20779,32478,33147,24519,8108,73060,48869,25163,4331,75829,68708,71559,85200,23947,60131,19836,74253,47710,24396,339,59888,26246,71088,18652,41994,53332,54418,45402,29313,7403,69880,45655,25085,9660,2825,5227,19175,44026,80484,40108,8248,68262,44829,21166,80404,47346,5369,39976,62822,74769,75308,66863,50200,28833,4309,67004,45816,30907,23454,26392,39744,65162,14687,61271,28998,3026,65713,42158,14874,68038,26149,60429,83556,8735,9677,875,71070,49373,25309,1290,66935,51700,44660,47216,60995,85930,35928,81917,50178,23591,441,62765,35936,2307,47084,81133,17996,29508,30547,21787,5691,70463,46516,22509,1822,72894,65824,68230,81855,20293,56398,16067,70291,44035,20373,83277,55956,23027,67355,15659,38502,50569,51206,42932,26433,5265,67298,43753,22637,7780,273,3116,16317,41508,77267,37151,4808,64965,41384,17684,77108,43808,2246,36441,59817,71270,72396,63452,47417,25589,1718,63981,43432,28065,21203,23585,37472,62201,12224,58038,26252,85990,62762,38771,11886,64904,23240,57593,80759,6118,6965,84764,68403,46890,22677,85227,64356,49292,42130,44872,58417,83563,33112,79383,46978,20792,83283,59732,32229,85595,43486,78112,14655,26666,27458,19111,2752,67883,43626,19981,85380,70458,63116,65929,79347,18085,54072,13803,68043,41534,18066,80437,53503,19914,64793,12465,35963,47463,48774,39932,24060,2275,64884,40680,20120,4601,84077,86305,13734,38393,74780,34239,2396,62273,38921,15132,74464,41303,85833,33997,56981,68960,69682,61325,44872,23601,85666,62006,40931,25971,18527,21320,34593,59830,9241,55693,23321,83727,59953,36485,9149,62443,20483,54895,77943,3264,4146,81913,65683,44186,20121,82708,61936,46868,39751,42397,56023,80970,30768,76727,44812,18202,81382,57326,30554,83369,41871,75933,12918,24389,25522,16681,666,65351,41491,17414,83229,67847,60885,63222,76938,15259,51425,10933,65203,38785,15181,77992,50772,17861,62328,10724,33686,45844,46531,38286,21758,551,62508,38895,17702,2793,81640,84472,11247,36467,72185,32127,86108,59948,36267,12677,72016,38868,83687,31680,55096,66753,67919,59124,43062,21291,83694,59530,38783,23351,16282,18618,32353,57080,7032,52871,21094,80849,57694,33689,6918,59898,18392,52725,76100,1476,2554,80369,64209,42653,18557,80965,60104,44799,37574,40031,53510,78406,27952,74069,41732,15500,78100,54597,27190,80656,38599,73352,9923,22095,22922,14756,84833,63727,39467,15916,81224,66292,58747,61456,74593,13207,48914,8598,62638,36199,12646,75183,48269,14879,59835,7660,31228,42819,44182,35402,19580,84253,60505,36347,15791,268,79678,81812,9100,33571,69792,29029,83490,56792,33483,9608,69117,35965,80748,28967,52191,64202,65094,56712,40370,19033,81185,57442,36444,21389,13999,16666,29938,54996,4323,50564,18048,78293,54390,30900,3503,56928,14991,49646,72765,84759,85686,77272,61008,39641,15460,78112,57177,42145,34853,37531,50977,75946,25543,71491,39352,12689,75679,51575,24724,77542,36107,70238,7401,18988,20346,11606,82177,60486,36717,12565,78376,62850,55838,58004,71680,9833,46e3,5342,59640,33039,9460,72086,44890,11853,56379,4750,27828,40057,40906,32782,16422,81715,57387,33793,12624,84035,76417,79108,5769,30854,66453,26333,80209,54070,30282,6755,65960,32884,77567,25649,48969,60754,61880,53257,37199,15621,78030,54037,33244,17915,10717,13074,26616,51307,1066,46860,14962,74695,51532,27518,814,53756,12336,46580,70033,81692,82853,74161,58111,36482,12526,74887,54173,38811,31702,34048,47590,72309,21879,67798,35485,9105,71765,48220,20912,74437,32472,67312,3910,16136,16910,8750,78727,57602,33242,9681,74915,59998,52401,55145,68219,6872,42475,2203,56107,29740,6068,68733,41771,8565,53554,1577,25206,36939,38309,29571,13663,78287,54378,30129,9394,80196,73066,75173,2391,26872,63086,22331,76834,50116,26904,2993,62660,29490,74493,22735,46212,58263,59381,50992,34792,13342,75521,51554,30496,15160,7690,10096,23338,48219,83990,43756,11328,71582,47767,24356,83423,50592,8705,43562,66739,78973,79959,71775,55525,34316,10053,72743,51604,36496,28908,31459,44594,69479,18837,64816,32555,6033,69013,45097,18315,71312,29993,64269,1575,13285,14803,6173,76895,55279,31606,7455,73263,57629,50500,52450,65942,3825,39842,85352,53235,26511,3079,65697,38751,5785,50583,85446,22356,34658,35688,27611,11400,76715,52510,28900,7805,79136,71511,74036,591,25448,60868,20534,74232,48005,24122,690,59904,27068,71832,20220,43633,55705,56877,48477,32402,10987,73332,49465,28575,13343,6012,8420,21777,46456,82378,41695,9552,69183,45866,21804,81516,48105,6863,41226,64952,76747,78186,69582,53743,32117,8286,70574,49920,34441,27358,29556,43112,67649,17223,62924,30595,3976,66607,42869,15569,69030,27154,62073,85233,11238,12202,4243,74380,53398,29120,5605,70832,55879,48213,50888,63864,2459,37945,84055,51416,25063,1215,63900,36750,3590,48452,82983,20190,32105,33539,25030,9221,74071,50228,26147,5392,76276,69038,71150,84617,22660,58738,17932,72358,45583,22365,84765,58059,24750,69793,17886,41443,53393,54653,46227,30224,8781,71180,47217,26349,10962,3611,5888,19177,43875,79659,39246,6830,66964,43181,19737,78830,46019,4098,38972,62050,74297,75166,67020,50687,29560,5266,68080,46944,31970,24367,27022,40081,65022,14241,60258,27831,1365,64209,40388,13547,66665,25347,59708,83405,8717,10174,1478,72105,50406,26644,2441,68199,52564,45432,47409,60923,85212,34855,80321,48243,21435,84485,60614,33807,792,45776,80629,17718,29989,31121,22931,6723,71836,47567,23713,2550,73662,66017,68399,81402,19792,55297,14950,68714,42517,18661,81710,54519,21819,66576,15148,38564,50836,51985,43738,27560,6199,68334,44417,23236,7903,268,2607,15722,40420,76199,35625,3426,63205,39897,15970,75746,42438,1305,35745,59619,71481,73078,64511,48791,27128,3321,65463,44715,28984,21723,23614,36994,61252,10757,56278,24030,83743,60170,36449,9382,62904,21237,56229,79553,5632,6726,85232,69067,48111,23876,308,65492,50382,42569,44999,57748,82484,31337,77287,44491,18158,80666,57142,30039,83567,42115,76938,14211,26365,27816,19488,3654,68640,44730,20740,86263,70774,63335,65392,78578,16488,52257,11290,65479,38594,15310,77706,51131,17915,63231,11459,35329,47382,48903,40498,24669,3163,65661,41577,20758,5207,84265,86331,13189,37622,73338,32626,125,59996,36170,12596,71743,38989,83623,32309,55596,68118,69174,61263,45032,24038,86140,62579,41354,26335,18592,21175,34061,58931,7945,53900,21237,81132,57342,33529,6529,59748,18411,52973,76790,2373,4019,81996,66387,44887,21182,83459,62748,47085,39796,41682,55020,79196,28698,74042,41882,14939,77967,53943,27169,80417,39109,73897,11187,23493,24905,16817,916,66123,42118,18278,83674,68283,60682,62864,75834,13992,49446,8905,62633,36323,12442,75459,48222,15545,60225,8863,32215,44618,45756,37714,21584,474,62679,39003,17851,2686,81385,83789,10331,35018,70567,29975,83964,57367,33921,10056,69780,36536,81802,29863,53744,65589,67205,58628,42966,21338,84037,59858,39242,23595,16443,18363,31789,55977,5474,50844,18594,78144,54630,30786,3844,57313,15804,50784,74242,288,1451,79881,63740,42690,18485,81244,60100,44959,37254,39683,52537,77268,26167,72092,39261,12922,75359,51896,24731,78397,36914,71929,9188,21527,22925,14717,85154,63782,39681,15693,81013,65544,57944,60082,73173,11222,46949,6129,60293,33506,10217,72660,46132,12945,58370,6621,30649,42719,44406,35987,20274,85082,61211,36957,16093,325,79322,81185,8038,32329,68141,27358,81429,54869,31220,7631,66925,34186,78937,27678,51064,63673,64817,56999,40828,19885,81987,58391,37080,21935,14029,16442,29139,53880,2744,48693,15961,75994,52202,28611,1627,55074,13747,48505,72325,84467,86112,77824,62203,40815,17064,79409,58588,42926,35451,37264,50366,74421,23709,68946,36683,9709,72806,48831,22263,75584,34529,69362,6884,19180,20768,12622,83251,61968,38067,14113,79589,64050,56486,58467,71419,9325,44720,3920,57590,31101,7226,70224,43084,10549,55373,4236,27714,40334,41525,33629,17462,82818,58522,34859,13578,84806,76957,79343,5711,30369,65706,25080,78832,52216,28563,4737,64371,31261,76587,24852,48889,60945,62721,54296,38717,17141,79820,55601,34886,19146,11866,13673,26981,51049,459,45689,13390,72771,49250,25228,84741,51696,10339,45319,69021,81556,82999,75131,59233,38213,14153,76824,55707,40371,32608,34795,47564,72074,20900,66664,33771,7346,69708,46225,18960,72665,31089,66219,3443,15981,17408,9454,79941,58816,34723,10906,76137,60726,52925,55030,67853,5845,41311,466,54433,27665,4269,66743,40180,6994,52416,633,24698,36742,38525,30124,14563,79427,55724,31520,10785,81403,74041,75787,2596,26680,62424,21405,75455,48699,25110,1404,60813,28026,72886,21596,45041,57609,58774,50921,34775,13820,75979,52395,31162,16026,8179,10564,23249,47910,83076,42531,9653,69657,45733,22215,81553,48765,7411,42364,66160,78453,80022,71815,56059,34705,10796,73174,52212,36613,29028,30929,43936,68068,17257,62522,30166,3178,66238,42242,15739,69063,28169,63028,760,13069,14840,6639,77365,55936,32043,7875,73317,57551,49969,51757,64748,2513,38004,83501,50886,24316,542,63497,36447,3943,48861,84239,21419,34200,35477,27728,11589,77012,52651,28946,7506,78614,70558,72818,85390,23593,58792,18219,71894,45425,21727,84482,57690,24762,70096,18542,42635,54872,56730,48476,32964,11514,74191,50012,29190,13383,5897,7556,20625,44528,80164,38879,6546,65895,42497,18501,78234,45222,4101,39096,63019,75556,77205,69336,53632,32594,8700,71306,50292,34811,27062,29018,41719,65953,14684,60210,27261,730,63122,39710,12552,66463,25007,60381,84079,10427,11865,4079,74537,53553,29410,5714,70874,55552,47634,49774,62408,375,35589,81093,48406,21623,84460,60603,34033,1010,46574,81395,19261,31473,33423,25108,9635,74507,50827,26587,5842,76409,69030,70708,83890,21459,57161,15962,69975,43011,19431,81956,55059,22216,67273,16056,39769,52472,53896,46150,30186,9248,71491,47829,26609,11343,3483,5738,18411,42965,78103,37476,4523,64476,40430,16912,76122,43410,1982,37116,60930,73491,75139,67223,51532,30414,6488,68999,47915,32354,24572,26468,39267,63410,12430,57733,25261,84701,61291,37286,10761,64039,23176,57989,82226,8132,10085,1929,72875,51501,27804,3642,69200,53349,45791,47410,60374,84336,33429,78752,46204,19514,82243,58720,31760,85604,44164,79503,16684,29453,30737,23026,6934,72440,48160,24545,3180,74337,66297,68541,81041,19181,54246,13632,67173,40750,16958,79842,52991,20227,65511,14094,38116,50427,52184,43965,28346,6939,69529,45424,24540,8827,1283,3018,16005,39930,75459,34135,1720,61018,37632,13612,73466,40452,85917,34507,58614,71097,72865,64862,49196,27963,4067,66461,45457,29792,22093,23907,36696,60818,9643,55061,22182,81960,58005,34576,7485,61480,20101,55630,79397,5913,7373,86101,70089,49121,24811,1046,65984,50565,42427,44506,56963,81346,30039,75637,42861,16205,78961,55234,28624,82145,41342,76319,14278,26641,28695,20494,5074,69977,46245,21925,1018,71414,63810,65285,78265,15663,51264,9962,64011,37004,13564,76062,49349,16486,61744,10535,34463,47202,48842,41134,25362,4419,66786,43025,21823,6340,84786,335,12849,37094,72087,31246,84623,58131,34105,10702,69973,37460,82479,31430,55267,68041,69696,61987,46288,25355,1385,64027,42829,27309,19311,21147,33632,57650,6323,51510,18757,78163,54633,30707,4247,57679,16993,51957,76391,2392,4509,82790,67459,46082,22475,84685,63898,47978,40419,41896,54789,78516,27490,72512,39863,12891,75605,51915,25069,78912,37693,73158,10589,23513,24999,17393,1420,66952,42720,19069,84111,68795,60734,62880,75314,13328,48253,7493,60826,34287,10269,73126,46113,13457,58701,7523,31616,44231,46096,38160,22601,1394,63949,39949,18943,3268,81954,83699,10107,34027,69384,28022,81846,54654,31139,6998,66801,33683,79217,27777,52083,64623,66675,58769,43392,22224,84948,60918,40028,24236,16564,18182,30964,54873,3707,48932,16080,75692,51751,28186,1082,54991,13588,49110,72881,85883,1003,79894,63987,43208,19e3,81785,60365,45012,36823,38884,51208,75544,24069,69658,36731,10139,72769,49143,22422,76028,35121,70151,8022,20428,22437,14310,85298,63924,40240,16073,81615,65742,58147,59685,72612,9990,45506,4126,58124,31033,7635,70070,43483,10562,55967,4678,28720,41343,43057,35211,19505,84837,60898,37047,15979,436,79036,80930,7178,31345,66420,25477,78887,52318,28307,4919,64221,31822,76874,25983,49817,62720,64300,56652,40801,19870,82109,58342,36972,21481,13364,15291,27705,51866,486,45832,13015,72564,48971,25167,85100,52254,11637,46722,71265,83754,85960,77855,62535,41079,17390,79447,58526,42440,34767,36122,48982,72653,21698,66710,34222,7248,70158,46448,19794,73623,32597,68089,5718,18692,20354,12774,83314,62394,38176,14365,79324,63764,55570,57464,69788,7631,42520,1726,55101,28673,4734,67793,40837,8399,53658,2696,26793,39624,41493,33761,18182,83535,59607,35684,14498,85196,77202,78844,4931,28753,63846,22462,76160,49051,25576,1597,61573,28620,74369,23033,47539,60120,62350,54452,39233,18048,80891,56799,35962,20029,12320,13697,26365,49965,85080,43612,10724,70149,46298,22704,82210,49840,8695,44399,68377,81526,83162,75736,59871,39124,14919,77698,56255,40857,32599,34566,46745,70939,19243,64690,31523,4869,67318,43766,16980,70802,29960,65296,3302,16004,18119,10206,81213,59957,36202,12083,77499,61638,53892,55417,68178,5501,40830,85729,53145,25895,2390,64689,38128,5145,50723,85876,23808,36540,38579,30828,15387,80725,56943,32984,11968,82631,74825,76489,2718,26658,61715,20553,73924,47152,23077,85946,58790,26356,71390,20593,44483,57595,59297,51911,36185,15484,77780,54145,32722,17248,8974,10843,23041,47138,81935,40861,7843,67412,43633,19854,79633,46808,6097,41218,65748,78317,80597,72629,57439,36147,12584,74776,53914,37874,30160,31451,44186,67710,16621,61461,28910,1785,64723,40875,14295,67988,27041,62407,109,12979,14732,7091,77767,56837],e},"object"===("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(void 0).calendar=e(); 
 			}); 
		define("tips/utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){return(e=e.toString())[1]?e:"0"+e},t={formatNumber:e,formatTime:function(t){var r=t?new Date(t):new Date,n=r.getFullYear(),o=r.getMonth()+1,a=r.getDate(),u=r.getHours(),i=r.getMinutes(),s=r.getSeconds();return[n,o,a].map(e).join("-")+" "+[u,i,s].map(e).join(":")},str2Int:function(e){return 0==(e=e.replace(/^0+/g,"")).length?0:parseInt(e)}};exports.default=t; 
 			}); 
		__wxRoute = 'tips/pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'tips/pages/index/index.js';	define("tips/pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../@babel/runtime/helpers/interopRequireDefault"),e=require("js-base64"),a=t(require("../../utils/util")),i=require("../../utils/calendar.js"),r=require("../../utils/api.js"),n=getApp();Page({data:{isTerm:!1,filterBlur:0,linerOpactity:.51,pureOpacity:0,showBackIndex:!1},onLoad:function(t){this.isSpecial=!1,this.name=t.name,this.date=t.date,this.year=parseInt(this.date.split("-")[0]),this.month=parseInt(this.date.split("-")[1]),this.day=parseInt(this.date.split("-")[2]),this.isTerm=this.isTermOrFestival(this.name),this.checckSpecialDate(),this.setData({isTerm:this.isTerm,isSpecial:this.isSpecial,showBackIndex:1014===n.globalData.scene||1036===n.globalData.scene}),this.setTitleByIsTerm(),this.getFestival(this.name)},routeIndex:function(){wx.switchTab({url:"/pages/index/index"}),n.globalData.scene=1001},setTitleByIsTerm:function(){wx.setNavigationBarTitle({title:this.isTerm?"\u8282\u6c14\u5c0f\u8d34\u58eb":"\u8282\u65e5\u5c0f\u8d34\u58eb"})},checckSpecialDate:function(){this.name.indexOf("\u4f0f")>-1?(this.name="\u4e09\u4f0f",this.isTerm=!0,this.isSpecial=!0):(this.name.indexOf("\u4e5d")>-1&&this.name.length<3||this.name.indexOf("\u4e5d")>-1&&this.name.indexOf("\u7b2c")>-1)&&(this.name="\u6570\u4e5d",this.isTerm=!0,this.isSpecial=!0)},isTermOrFestival:function(t){for(var e=!1,a=0;a<i.solarTerm.length;a++)if(t===i.solarTerm[a]||i.solarTerm[a].indexOf(t)>-1){e=!0;break}return e},getFestival:function(t){var e=this;r.GET("https://c.51wnl.com/contentapi/api4.4.0/GetTermOrFestival/GetInfo?name=".concat(t)).then((function(t){var a=t.data.data;e.setResult(a),wx.pageScrollTo({scrollTop:0,duration:0})})).catch((function(t){console.log(t)}))},setResult:function(t){var e=JSON.parse(t.detail),a=JSON.parse(t.descptionDetail);t.detail=this.decodeDetail(e),t.descptionDetail=this.decodeDetail(a),t.detail.forEach((function(t){t.showMore=t.content.length<106}));var i=this.getDisplayTime();this.setData({festivalData:t,displayTime:i,loadComplete:!0})},decodeDetail:function(t){var a=[];for(var i in t){var r={title:e.Base64.decode(i),content:e.Base64.decode(t[i])};a.push(r)}return a},showMore:function(t){var e=t.currentTarget.dataset;if(e.hasOwnProperty("index")&&!this.data.festivalData.detail[e.index].showMore)this.data.festivalData.detail[e.index].showMore=!0,this.setData({festivalData:this.data.festivalData});else{if(this.data.showMoreDescption)return;this.setData({showMoreDescption:!0})}},getDisplayTime:function(){return this.isTerm?this.getTermLastTime():""},getTermLastTime:function(){for(var t=0,e=0;e<i.solarTerm.length;e++)if(this.name===i.solarTerm[e]){t=e;break}this.todayDate=new Date;var a=this.getSolarTime(this.year,t),r=t===i.solarTerm.length-1?0:t+1,n=this.getSolarTime(this.year,r,1),s=0===t?23:t-1;return this.initTermListDate(this.year),this.setData({prevFestivalName:i.solarTerm[s],nextFestivalName:i.solarTerm[r],yearName:this.initYear(this.date)}),"".concat(a,"-").concat(n)},getSolarTime:function(t,e,a){var r=new Date(t,0,1),n=t-1900,s=i.TermTable[24*n+e];r.setDate(r.getDate()+s),a||(this.todayDate=new Date(r.getFullYear(),r.getMonth(),r.getDate()));var l=(r.getMonth()+1>9?r.getMonth()+1:"0"+(r.getMonth()+1))+"\u6708"+(r.getDate()>9?r.getDate():"0"+r.getDate())+"\u65e5",o=24*(t-1900),h=i.termTimeTable[o+e],c=Math.floor(h/3600),g=Math.floor(h%3600/60),u=Math.floor(h%3600%60);return a&&(u<=0?(u=59,g--):u--),l+" "+((c<10?"0"+c:c)+":"+(g<10?"0"+g:g)+":"+(u<10?"0"+u:u))},initYear:function(t){var e=new Date(t),a=i.solar2lunar(e.getFullYear(),e.getMonth(),e.getDate()),r=i.getAnimal(a.lYear);return"".concat(a.gzYear,"\u5e74 [\u5c5e").concat(r,"]")},switchFestival:function(t){var e=t.currentTarget.dataset.name;"click"===t.currentTarget.dataset.type&&this.toggleTermList(),this.name=e,this.getFestival(this.name),this.isTerm||this.setPrevNextAndTime()},initTermListDate:function(t){var e=[];if(t>=1900&&t<=2135)for(var a=0;a<24;a++){var r=new Date(t,0,1),n=t-1900,s=i.TermTable[24*n+a];r.setDate(r.getDate()+s),e.push({termName:i.solarTerm[a],termDate:"".concat(r.getMonth()+1,"\u6708").concat(r.getDate(),"\u65e5"),active:i.solarTerm[a]===this.name})}else for(var l=0;l<24;l++)e.push({termName:i.solarTerm[l],termDate:"\u6682\u65e0\u6570\u636e",active:i.solarTerm[l]===this.name});this.setData({termDateList:e})},toggleTermList:function(){this.setData({showTermList:!this.data.showTermList})},catchmove:function(){},onReady:function(){this.isTerm||this.setPrevNextAndTime()},setPrevNextAndTime:function(){this.allFestivalData=n.globalData.festivalData;var t=this.getJieriDate(this.name,this.year,this.month,this.day,this.allFestivalData),e=this.getPrevNextJieri(this.name,t.year,t.month,t.day,t.lYear,t.lMonth,t.lDay);this.setData({prevFestivalName:e.prevName,nextFestivalName:e.nextName,displaTime:t.dateTimeString})},getJieriDate:function(t,e,r,n,s){var l,o,h,c,g="",u=!1,D=s.S;for(var f in D)for(var m=0;m<D[f].length;m++)e>=parseInt(D[f][m].Y,10)&&parseInt(D[f][m].P,10)>=0&&D[f][m].V.indexOf(t)>-1&&(r=a.default.str2Int(f.substr(0,2)),n=a.default.str2Int(f.substr(2,2)),o=(l=i.solar2lunar(e,r-1,n)).lYear,h=l.lMonth,c=l.lDay,g="\u6bcf\u5e74\u7684\u516c\u5386".concat(r,"\u6708").concat(n,"\u65e5"),t.indexOf("\u91cc\u7ea6")>-1&&(g="\u5317\u4eac\u65f6\u95f48\u67086\u65e5-8\u670822\u65e5"),u=!0);var d=s.L;for(var v in d)for(var p=0;p<d[v].length;p++)if(e>=parseInt(d[v][p].Y,10)&&parseInt(d[v][p].P,10)>=0&&d[v][p].V.indexOf(t)>-1){h=a.default.str2Int(v.substr(0,2)),c=a.default.str2Int(v.substr(2,2));var T=i.lunar2solar(e,h,c);e=T.cYear,r=T.cMonth,n=T.cDay,o=(l=i.solar2lunar(e,r-1,n)).lYear,g="\u6bcf\u5e74\u7684\u519c\u5386".concat(l.IMonthCn).concat(l.IDayCn),u=!0}var y=s.W;for(var w in y)for(var x=0;x<y[w].length;x++)if(e>=parseInt(y[w][x].Y,10)&&parseInt(y[w][x].P,10)>=0&&y[w][x].V.indexOf(t)>-1){r=a.default.str2Int(w.substr(0,2));for(var M=new Date(e,r,0).getDate(),I=a.default.str2Int(w.substr(2,1)),F=a.default.str2Int(w.substr(3,1)),Y=0,S=1;S<=7;S++){if(new Date(e,r-1,S).getDay()===F){Y=S;break}}(n=Y+7*(I-1))>M&&(n-=7,I--),o=(l=i.solar2lunar(e,r-1,n)).lYear,h=l.lMonth,c=l.lDay,g="\u6bcf\u5e74".concat(r,"\u6708\u7684\u7b2c").concat(I,"\u4e2a").concat(["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"][F]),u=!0}return{is_index:u,year:e,month:r,day:n,lYear:o,lMonth:h,lDay:c,dateTimeString:g}},getPrevNextJieri:function(t,e,a,r,n,s,l){for(var o=this.getJieriListByDate(e,a,r,n,s,l,1),h=0,c=0;c<o.length;c++)if(t===o[c].jieri.V){h=c;break}var g=new Date(e,a-1,r),u=[],D=[],f=g,m=g,d="",v="";if(1===o.length){for(;u.length<=0;){g.setDate(g.getDate()-1),f=g;var p=i.solar2lunar(f.getFullYear(),f.getMonth(),f.getDate()),T=p.lYear,y=p.lMonth,w=p.lDay;u=this.getJieriListByDate(f.getFullYear(),f.getMonth()+1,f.getDate(),T,y,w)}for(d=u[u.length-1].jieri.V,g=new Date(e,a-1,r);D.length<=0;){g.setDate(g.getDate()+1),m=g;var x=i.solar2lunar(m.getFullYear(),m.getMonth(),m.getDate()),M=x.lYear,I=x.lMonth,F=x.lDay;D=this.getJieriListByDate(m.getFullYear(),m.getMonth()+1,m.getDate(),M,I,F)}v=D[0].jieri.V}else if(0===h){for(;u.length<=0;){g.setDate(g.getDate()-1),f=g;var Y=i.solar2lunar(f.getFullYear(),f.getMonth(),f.getDate()),S=Y.lYear,b=Y.lMonth,N=Y.lDay;u=this.getJieriListByDate(f.getFullYear(),f.getMonth()+1,f.getDate(),S,b,N)}d=u[u.length-1].jieri.V,v=o[h+1].jieri.V}else if(h===o.length-1){for(d=o[h-1].jieri.V;D.length<=0;){g.setDate(g.getDate()+1),m=g;var L=i.solar2lunar(m.getFullYear(),m.getMonth(),m.getDate()),O=L.lYear,j=L.lMonth,P=L.lDay;D=this.getJieriListByDate(m.getFullYear(),m.getMonth()+1,m.getDate(),O,j,P)}v=D[0].jieri.V}else d=o[h-1].jieri.V,v=o[h+1].jieri.V;return{prevName:d,nextName:v}},getJieriListByDate:function(t,e,a,i,r,n){var s=[],l=(e<10?"0"+e:e.toString())+(a<10?"0"+a:a.toString()),o=(r<10?"0"+r:r.toString())+(n<10?"0"+n:n.toString()),h=this.allFestivalData.S[l];if(h&&h.length>0)for(var c=0;c<h.length;c++)t>=parseInt(h[c].Y,10)&&parseInt(h[c].P,10)>=0&&s.push({date:t+l,jieri:h[c]});var g=this.allFestivalData.L[o];if(g&&g.length>0)for(var u=0;u<g.length;u++)i>=parseInt(g[u].Y,10)&&parseInt(g[u].P,10)>=0&&s.push({date:t+l,jieri:g[u]});for(var D=new Date(t,e-1,a).getDay(),f=0,m=1;m<=7;m++){if(new Date(t,e-1,m).getDay()===D){f=m;break}}for(var d=(a-f)/7+1,v=new Date(t,e,0).getDate(),p=!0,T=a+1;T<=v;T++){if(new Date(t,e-1,T).getDay()===D){p=!1;break}}var y=(e<10?"0"+e:e.toString())+d+D,w=(e<10?"0"+e:e.toString())+(d+1)+D,x=(e<10?"0"+e:e.toString())+(d+2)+D,M=(e<10?"0"+e:e.toString())+(d+3)+D,I=this.allFestivalData.W[y];if(p&&(I=this.allFestivalData.W[y]||this.allFestivalData.W[w]||this.allFestivalData.W[x]||this.allFestivalData.W[M]),I&&I.length>0)for(var F=0;F<I.length;F++)t>=parseInt(I[F].Y,10)&&parseInt(I[F].P,10)>=0&&s.push({date:t+l,jieri:I[F]});return s.length>0&&s.sort((function(t,e){return(t=parseInt(t.jieri.P,10))===(e=parseInt(e.jieri.P,10))?0:t<e?1:-1})),s},onPageScroll:function(t){var e=t.scrollTop/50,a=e/30>.5?.5:e/30;this.setData({filterBlur:e,pureOpacity:a})},routeWebpage:function(t){wx.navigateTo({url:"../webview/index?url=".concat(encodeURIComponent(t.currentTarget.dataset.url))})},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:this.data.festivalData.shareTxt,path:"tips/pages/index/index?name=".concat(this.name,"&date=").concat(this.date),imageUrl:""}}}); 
 			}); 	require("tips/pages/index/index.js");
 		__wxRoute = 'tips/pages/webview/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'tips/pages/webview/index.js';	define("tips/pages/webview/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{src:""},onLoad:function(n){this.setData({src:decodeURIComponent(n.url)})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("tips/pages/webview/index.js");
 	