// transit-js 0.8.702
// http://transit-format.org
// 
// Copyright 2014 Cognitect. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License..
;(function(){function aa(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof a.call)return"object";return c};function b(a,c){this.w=a|0;this.o=c|0}var ba={};function l(a){if(-128<=a&&128>a){var c=ba[a];if(c)return c}c=new b(a|0,0>a?-1:0);-128<=a&&128>a&&(ba[a]=c);return c}function m(a){return isNaN(a)||!isFinite(a)?n:a<=-ca?p:a+1>=ca?da:0>a?r(m(-a)):new b(a%s|0,a/s|0)}function t(a,c){return new b(a,c)}
function u(a,c){if(0==a.length)throw Error("number format error: empty string");var d=c||10;if(2>d||36<d)throw Error("radix out of range: "+d);if("-"==a.charAt(0))return r(u(a.substring(1),d));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);for(var e=m(Math.pow(d,8)),f=n,g=0;g<a.length;g+=8){var h=Math.min(8,a.length-g),k=parseInt(a.substring(g,g+h),d);8>h?(h=m(Math.pow(d,h)),f=f.multiply(h).add(m(k))):(f=f.multiply(e),f=f.add(m(k)))}return f}
var s=4294967296,ca=s*s/2,n=l(0),v=l(1),ea=l(-1),da=t(-1,2147483647),p=t(0,-2147483648),fa=l(16777216);function w(a){return a.o*s+(0<=a.w?a.w:s+a.w)}
b.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(y(this))return"0";if(0>this.o){if(this.equals(p)){var c=m(a),d=z(this,c),c=A(d.multiply(c),this);return d.toString(a)+c.w.toString(a)}return"-"+r(this).toString(a)}for(var d=m(Math.pow(a,6)),c=this,e="";;){var f=z(c,d),g=A(c,f.multiply(d)).w.toString(a),c=f;if(y(c))return g+e;for(;6>g.length;)g="0"+g;e=""+g+e}};function y(a){return 0==a.o&&0==a.w}
b.prototype.equals=function(a){return this.o==a.o&&this.w==a.w};b.prototype.compare=function(a){if(this.equals(a))return 0;var c=0>this.o,d=0>a.o;return c&&!d?-1:!c&&d?1:0>A(this,a).o?-1:1};function r(a){return a.equals(p)?p:t(~a.w,~a.o).add(v)}b.prototype.add=function(a){var c=this.o>>>16,d=this.o&65535,e=this.w>>>16,f=a.o>>>16,g=a.o&65535,h=a.w>>>16,k;k=0+((this.w&65535)+(a.w&65535));a=0+(k>>>16);a+=e+h;e=0+(a>>>16);e+=d+g;d=0+(e>>>16);d=d+(c+f)&65535;return t((a&65535)<<16|k&65535,d<<16|e&65535)};
function A(a,c){return a.add(r(c))}
b.prototype.multiply=function(a){if(y(this)||y(a))return n;if(this.equals(p))return 1==(a.w&1)?p:n;if(a.equals(p))return 1==(this.w&1)?p:n;if(0>this.o)return 0>a.o?r(this).multiply(r(a)):r(r(this).multiply(a));if(0>a.o)return r(this.multiply(r(a)));if(0>this.compare(fa)&&0>a.compare(fa))return m(w(this)*w(a));var c=this.o>>>16,d=this.o&65535,e=this.w>>>16,f=this.w&65535,g=a.o>>>16,h=a.o&65535,k=a.w>>>16;a=a.w&65535;var D,q,x,ga;ga=0+f*a;x=0+(ga>>>16);x+=e*a;q=0+(x>>>16);x=(x&65535)+f*k;q+=x>>>16;
x&=65535;q+=d*a;D=0+(q>>>16);q=(q&65535)+e*k;D+=q>>>16;q&=65535;q+=f*h;D+=q>>>16;q&=65535;D=D+(c*a+d*k+e*h+f*g)&65535;return t(x<<16|ga&65535,D<<16|q)};
function z(a,c){if(y(c))throw Error("division by zero");if(y(a))return n;if(a.equals(p)){if(c.equals(v)||c.equals(ea))return p;if(c.equals(p))return v;var d;d=1;if(0==d)d=a;else{var e=a.o;d=32>d?t(a.w>>>d|e<<32-d,e>>d):t(e>>d-32,0<=e?0:-1)}d=z(d,c).shiftLeft(1);if(d.equals(n))return 0>c.o?v:ea;e=A(a,c.multiply(d));return d.add(z(e,c))}if(c.equals(p))return n;if(0>a.o)return 0>c.o?z(r(a),r(c)):r(z(r(a),c));if(0>c.o)return r(z(a,r(c)));for(var f=n,e=a;0<=e.compare(c);){d=Math.max(1,Math.floor(w(e)/
w(c)));for(var g=Math.ceil(Math.log(d)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),h=m(d),k=h.multiply(c);0>k.o||0<k.compare(e);)d-=g,h=m(d),k=h.multiply(c);y(h)&&(h=v);f=f.add(h);e=A(e,k)}return f}b.prototype.shiftLeft=function(a){a&=63;if(0==a)return this;var c=this.w;return 32>a?t(c<<a,this.o<<a|c>>>32-a):t(0,c<<a-32)};function ha(a,c){c&=63;if(0==c)return a;var d=a.o;return 32>c?t(a.w>>>c|d<<32-c,d>>>c):32==c?t(d,0):t(d>>>c-32,0)};var B={g:{}};B.g.P="undefined"!=typeof Object.keys?function(a){return Object.keys(a)}:function(a){var c=[],d=0,e;for(e in a)c[d++]=e;return c};B.g.isArray="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"===aa(a)};B.g.Ka=function(a){return Math.round(Math.random()*a)};B.g.p=function(){return B.g.Ka(15).toString(16)};
B.g.randomUUID=function(){var a=(8|3&B.g.Ka(14)).toString(16);return B.g.p()+B.g.p()+B.g.p()+B.g.p()+B.g.p()+B.g.p()+B.g.p()+B.g.p()+"-"+B.g.p()+B.g.p()+B.g.p()+B.g.p()+"-4"+B.g.p()+B.g.p()+B.g.p()+"-"+a+B.g.p()+B.g.p()+B.g.p()+"-"+B.g.p()+B.g.p()+B.g.p()+B.g.p()+B.g.p()+B.g.p()+B.g.p()+B.g.p()+B.g.p()+B.g.p()+B.g.p()+B.g.p()};B.l={};B.l.H="~";B.l.Sa="#";B.l.ba="^";B.l.Aa="`";B.l.U="~#";B.a={};B.a.M="$com$cognitect$transit$hashCode$";
B.a.equals=function(a,c){if(null==a)return null==c;if(a===c)return!0;if("object"===typeof a){if(B.g.isArray(a)){if(B.g.isArray(c)&&a.length===c.length){for(var d=0;d<a.length;d++)if(!B.a.equals(a[d],c[d]))return!1;return!0}return!1}if(a.F)return a.F(c);if(null!=c&&"object"===typeof c){if(c.F)return c.F(a);var e=d=0,f=B.g.P(c).length,g;for(g in a)if(a.hasOwnProperty(g))if(e++,g==B.a.M)c[g]||(d=-1);else if(!c.hasOwnProperty(g)||!B.a.equals(a[g],c[g]))return!1;return e+d===f}}return!1};
B.a.oa=function(a,c){return a^c+2654435769+(a<<6)+(a>>2)};B.a.va={};B.a.wa=0;B.a.Ra=256;B.a.eb=function(a){var c=B.a.va[a];if(null!=c)return c;for(var d=c=0;d<a.length;++d)c=31*c+a.charCodeAt(d),c%=4294967296;B.a.wa++;B.a.wa>=B.a.Ra&&(B.a.va={},B.a.wa=1);return B.a.va[a]=c};
B.a.hashMapLike=function(a){var c=0;if(null!=a.forEach)a.forEach(function(a,d){c=(c+(B.a.j(d)^B.a.j(a)))%4503599627370496});else for(var d=B.g.P(a),e=0;e<d.length;e++){var f=d[e];if(f!==B.a.M)var g=a[f],c=(c+(B.a.j(f)^B.a.j(g)))%4503599627370496}return c};B.a.hashArrayLike=function(a){var c=a[B.a.M]||0;if(0===c)if(B.g.isArray(a)){for(var d=0;d<a.length;d++)c=B.a.oa(c,B.a.j(a[d]));a[B.a.M]=c}else a.forEach&&a.forEach(function(a){c=B.a.oa(c,B.a.j(a))});return c};
B.a.j=function(a){if(null==a)return 0;switch(typeof a){case "number":return a;case "boolean":return!0===a?1:0;case "string":return B.a.eb(a);default:return a instanceof Date?a.valueOf():B.g.isArray(a)?B.a.hashArrayLike(a):a.I?a.I():a[B.a.M]?a[B.a.M]:B.a.hashMapLike(a)}};B.a.extendToEQ=function(a,c){a.I=c.hashCode;a.F=c.equals;return a};B.types={};function C(a,c){this.tag=a;this.rep=c;this.j=-1}C.prototype.toString=function(){return"[TaggedValue: "+this.tag+", "+this.rep+"]"};C.prototype.L=function(a){return B.a.equals(this,a)};C.prototype.equiv=C.prototype.L;C.prototype.F=function(a){return a instanceof C?this.tag===a.tag&&B.a.equals(this.rep,a.rep):!1};C.prototype.I=function(){-1===this.j&&(this.j=B.a.oa(B.a.j(this.tag),B.a.j(this.rep)));return this.j};B.types.K=function(a,c){return new C(a,c)};
B.types.isTaggedValue=function(a){return a instanceof C};B.types.rb=function(){return null};B.types.Ta=function(a){return"t"===a};B.types.Oa=u("9007199254740992");B.types.Pa=u("-9007199254740992");B.types.Ga=function(a){if("number"===typeof a||a instanceof b)return a;a=u(a,10);return 0<a.compare(B.types.Oa)||0>a.compare(B.types.Pa)?a:w(a)};b.prototype.L=function(a){return B.a.equals(this,a)};b.prototype.equiv=b.prototype.L;b.prototype.F=function(a){return a instanceof b&&this.equals(a)};
b.prototype.I=function(){return this.w};B.types.isInteger=function(a){return a instanceof b?!0:"number"===typeof a&&!isNaN(a)&&Infinity!==a&&parseFloat(a)===parseInt(a)};B.types.cb=function(a){return parseFloat(a)};B.types.Ca=function(a){return B.types.K("n",a)};B.types.hb=function(a){return a instanceof C&&"n"===a.tag};function ia(a){return B.types.K("f",a)}B.types.gb=function(a){return a instanceof C&&"f"===a.tag};B.types.Va=function(a){return a};function E(a){this.name=a;this.j=-1}
E.prototype.toString=function(){return":"+this.name};E.prototype.L=function(a){return B.a.equals(this,a)};E.prototype.equiv=E.prototype.L;E.prototype.F=function(a){return a instanceof E&&this.name==a.name};E.prototype.I=function(){-1===this.j&&(this.j=B.a.j(this.name));return this.j};B.types.keyword=function(a){return new E(a)};B.types.isKeyword=function(a){return a instanceof E};function F(a){this.name=a;this.j=-1}F.prototype.toString=function(){return"[Symbol: "+this.name+"]"};
F.prototype.L=function(a){return B.a.equals(this,a)};F.prototype.equiv=F.prototype.L;F.prototype.F=function(a){return a instanceof F&&this.name==a.name};F.prototype.I=function(){-1===this.j&&(this.j=B.a.j(this.name));return this.j};B.types.symbol=function(a){return new F(a)};B.types.isSymbol=function(a){return a instanceof F};
B.types.ea=function(a,c,d){var e="";d=d||c+1;for(var f=8*(7-c),g=l(255).shiftLeft(f);c<d;c++,f-=8,g=ha(g,8)){var h=ha(t(a.w&g.w,a.o&g.o),f).toString(16);1==h.length&&(h="0"+h);e+=h}return e};function G(a,c){this.pa=a;this.ra=c;this.j=-1}G.prototype.toString=function(a){var c=this.pa,d=this.ra;a=""+(B.types.ea(c,0,4)+"-");a+=B.types.ea(c,4,6)+"-";a+=B.types.ea(c,6,8)+"-";a+=B.types.ea(d,0,2)+"-";return a+=B.types.ea(d,2,8)};G.prototype.L=function(a){return B.a.equals(this,a)};G.prototype.equiv=G.prototype.L;
G.prototype.F=function(a){return a instanceof G&&this.pa.equals(a.pa)&&this.ra.equals(a.ra)};G.prototype.I=function(){-1===this.j&&(this.j=B.a.j(this.toString()));return this.j};
B.types.UUIDfromString=function(a){a=a.replace(/-/g,"");for(var c=null,d=null,e=d=0,f=24,g=0,g=d=0,f=24;8>g;g+=2,f-=8)d|=parseInt(a.substring(g,g+2),16)<<f;e=0;g=8;for(f=24;16>g;g+=2,f-=8)e|=parseInt(a.substring(g,g+2),16)<<f;c=t(e,d);d=0;g=16;for(f=24;24>g;g+=2,f-=8)d|=parseInt(a.substring(g,g+2),16)<<f;e=0;for(f=g=24;32>g;g+=2,f-=8)e|=parseInt(a.substring(g,g+2),16)<<f;d=t(e,d);return new G(c,d)};B.types.uuid=function(a){return B.types.UUIDfromString(a)};
B.types.isUUID=function(a){return a instanceof G};B.types.date=function(a){a="number"===typeof a?a:parseInt(a,10);return new Date(a)};B.types.pb=function(a){return new Date(a)};Date.prototype.F=function(a){return a instanceof Date?this.valueOf()===a.valueOf():!1};Date.prototype.I=function(){return this.valueOf()};function ja(a){return B.types.K("b",a)}B.types.isBinary=function(a){return a instanceof C&&"b"===a.tag};function ka(a){return B.types.K("r",a)}
B.types.isURI=function(a){return a instanceof C&&"r"===a.tag};B.types.V=0;B.types.ga=1;B.types.ya=2;function H(a,c){this.G=a;this.type=c||B.types.V;this.B=0}H.prototype.next=function(){if(this.B<this.G.length){var a=null,a=this.type===B.types.V?this.G[this.B]:this.type===B.types.ga?this.G[this.B+1]:[this.G[this.B],this.G[this.B+1]],a={value:a,done:!1};this.B+=2;return a}return{value:null,done:!0}};H.prototype.next=H.prototype.next;
function I(a,c){this.map=a;this.type=c||B.types.V;this.keys=la(this.map);this.B=0;this.R=null;this.N=0}I.prototype.next=function(){if(this.B<this.map.size){null!=this.R&&this.N<this.R.length||(this.R=this.map.map[this.keys[this.B]],this.N=0);var a=null,a=this.type===B.types.V?this.R[this.N]:this.type===B.types.ga?this.R[this.N+1]:[this.R[this.N],this.R[this.N+1]],a={value:a,done:!1};this.B++;this.N+=2;return a}return{value:null,done:!0}};I.prototype.next=I.prototype.next;
B.types.sa=function(a,c){if((c instanceof J||c instanceof K)&&a.size===c.size){for(var d in a.map)for(var e=a.map[d],f=0;f<e.length;f+=2)if(!B.a.equals(e[f+1],c.get(e[f])))return!1;return!0}if(null!=c&&"object"===typeof c&&(d=B.g.P(c).length-(c.hasOwnProperty(B.a.M)&&1||0),a.size===d)){for(e in c)if(e!==B.a.M&&!B.a.equals(c[e],a.get(e)))return!1;return!0}return!1};B.types.la=8;B.types.xa=32;B.types.Ma=32;function K(a){this.v=a;this.k=null;this.j=-1;this.size=a.length/2;this.Ba=0}
K.prototype.toString=function(){return"[TransitArrayMap]"};function ma(a){if(a.k)throw Error("Invalid operation, already converted");if(a.size<B.types.la)return!1;a.Ba++;return a.Ba>B.types.Ma?(a.k=B.types.map(a.v,!1,!0),a.v=[],!0):!1}K.prototype.clear=function(){this.k?this.k.clear():this.v=[];this.size=0};K.prototype.clear=K.prototype.clear;K.prototype.keys=function(){return this.k?this.k.keys():new H(this.v,B.types.V)};K.prototype.keys=K.prototype.keys;
K.prototype.S=function(){if(this.k)return this.k.S();for(var a=[],c=0,d=0;d<this.v.length;c++,d+=2)a[c]=this.v[d];return a};K.prototype.keySet=K.prototype.S;K.prototype.G=function(){return this.k?this.k.G():new H(this.v,B.types.ya)};K.prototype.entries=K.prototype.G;K.prototype.T=function(){return this.k?this.k.T():new H(this.v,B.types.ga)};K.prototype.values=K.prototype.T;K.prototype.forEach=function(a){if(this.k)this.k.forEach(a);else for(var c=0;c<this.v.length;c+=2)a(this.v[c+1],this.v[c])};
K.prototype.forEach=K.prototype.forEach;K.prototype.get=function(a){if(this.k)return this.k.get(a);if(ma(this))return this.get(a);for(var c=0;c<this.v.length;c+=2)if(B.a.equals(this.v[c],a))return this.v[c+1];return null};K.prototype.get=K.prototype.get;K.prototype.O=function(a){if(this.k)return this.k.O(a);if(ma(this))return this.O(a);for(var c=0;c<this.v.length;c+=2)if(B.a.equals(this.v[c],a))return!0;return!1};K.prototype.has=K.prototype.O;
K.prototype.set=function(a,c){if(this.k)this.k.set(a,c),this.size=this.k.size;else{for(var d=0;d<this.v.length;d+=2)if(B.a.equals(this.v[d],a)){this.v[d+1]=c;return}this.v.push(a);this.v.push(c);this.size++;this.size>B.types.xa&&(this.k=B.types.map(this.v,!1,!0),this.v=null)}};K.prototype.set=K.prototype.set;K.prototype["delete"]=function(a){if(this.k)this.k["delete"](a),this.size=this.k.size;else for(var c=0;c<this.v.length;c+=2)if(B.a.equals(this.v[c],a)){this.v.splice(c,2);this.size--;break}};
K.prototype.I=function(){if(this.k)return this.k.I();-1===this.j&&(this.j=B.a.hashMapLike(this));return this.j};K.prototype.F=function(a){return this.k?B.types.sa(this.k,a):B.types.sa(this,a)};function J(a,c,d){this.map=c||{};this.W=a||[];this.size=d||0;this.j=-1}J.prototype.toString=function(){return"[TransitMap]"};J.prototype.clear=function(){this.map={};this.W=[];this.size=0;this.j=-1};J.prototype.clear=J.prototype.clear;function la(a){return null!=a.W?a.W:B.g.P(a.map)}
J.prototype["delete"]=function(a){this.W=null;for(var c=B.a.j(a),d=this.map[c],e=0;e<d.length;e+=2)if(B.a.equals(a,d[e])){d.splice(e,2);0===d.length&&delete this.map[c];this.size--;break}};J.prototype.G=function(){return new I(this,B.types.ya)};J.prototype.entries=J.prototype.G;J.prototype.forEach=function(a){for(var c=la(this),d=0;d<c.length;d++)for(var e=this.map[c[d]],f=0;f<e.length;f+=2)a(e[f+1],e[f],this)};J.prototype.forEach=J.prototype.forEach;
J.prototype.get=function(a){var c=B.a.j(a),c=this.map[c];if(null!=c)for(var d=0;d<c.length;d+=2){if(B.a.equals(a,c[d]))return c[d+1]}else return null};J.prototype.get=J.prototype.get;J.prototype.O=function(a){var c=B.a.j(a),c=this.map[c];if(null!=c)for(var d=0;d<c.length;d+=2)if(B.a.equals(a,c[d]))return!0;return!1};J.prototype.has=J.prototype.O;J.prototype.keys=function(){return new I(this,B.types.V)};J.prototype.keys=J.prototype.keys;
J.prototype.S=function(){for(var a=la(this),c=[],d=0;d<a.length;d++)for(var e=this.map[a[d]],f=0;f<e.length;f+=2)c.push(e[f]);return c};J.prototype.keySet=J.prototype.S;J.prototype.set=function(a,c){var d=B.a.j(a),e=this.map[d];if(null==e)this.W&&this.W.push(d),this.map[d]=[a,c],this.size++;else{for(var d=!0,f=0;f<e.length;f+=2)if(B.a.equals(c,e[f])){d=!1;e[f]=c;break}d&&(e.push(a),e.push(c),this.size++)}};J.prototype.set=J.prototype.set;J.prototype.T=function(){return new I(this,B.types.ga)};
J.prototype.values=J.prototype.T;J.prototype.I=function(){-1===this.j&&(this.j=B.a.hashMapLike(this));return this.j};J.prototype.F=function(a){return B.types.sa(this,a)};
B.types.map=function(a,c,d){a=a||[];c=!1===c?c:!0;if((!0!==d||!d)&&a.length<=2*B.types.xa){if(c){var e=a;a=[];for(c=0;c<e.length;c+=2){var f=!1;for(d=0;d<a.length;d+=2)if(B.a.equals(a[d],e[c])){a[d+1]=e[c+1];f=!0;break}f||(a.push(e[c]),a.push(e[c+1]))}}return new K(a)}var e={},f=[],g=0;for(c=0;c<a.length;c+=2){d=B.a.j(a[c]);var h=e[d];if(null==h)f.push(d),e[d]=[a[c],a[c+1]],g++;else{var k=!0;for(d=0;d<h.length;d+=2)if(B.a.equals(h[d],a[c])){h[d+1]=a[c+1];k=!1;break}k&&(h.push(a[c]),h.push(a[c+1]),
g++)}}return new J(f,e,g)};B.types.fb=function(a){return a instanceof K};B.types.isMap=function(a){return a instanceof K||a instanceof J};function L(a){this.map=a;this.size=a.size}L.prototype.toString=function(){return"[TransitSet]"};L.prototype.add=function(a){this.map.set(a,a);this.size=this.map.size};L.prototype.add=L.prototype.add;L.prototype.clear=function(){this.map=new J;this.size=0};L.prototype.clear=L.prototype.clear;L.prototype["delete"]=function(a){this.map["delete"](a);this.size=this.map.size};
L.prototype.G=function(){return this.map.G()};L.prototype.entries=L.prototype.G;L.prototype.forEach=function(a){var c=this;this.map.forEach(function(d,e){a(e,c)})};L.prototype.forEach=L.prototype.forEach;L.prototype.O=function(a){return this.map.O(a)};L.prototype.has=L.prototype.O;L.prototype.keys=function(){return this.map.keys()};L.prototype.keys=L.prototype.keys;L.prototype.S=function(){return this.map.S()};L.prototype.keySet=L.prototype.S;L.prototype.T=function(){return this.map.T()};
L.prototype.values=L.prototype.T;L.prototype.F=function(a){if(a instanceof L){if(this.size===a.size)return B.a.equals(this.map,a.map)}else return!1};L.prototype.I=function(){return B.a.j(this.map)};B.types.set=function(a){a=a||[];for(var c={},d=[],e=0,f=0;f<a.length;f++){var g=B.a.j(a[f]),h=c[g];if(null==h)d.push(g),c[g]=[a[f],a[f]],e++;else{for(var g=!0,k=0;k<h.length;k+=2)if(B.a.equals(h[k],a[f])){g=!1;break}g&&(h.push(a[f]),h.push(a[f]),e++)}}return new L(new J(d,c,e))};
B.types.isSet=function(a){return a instanceof L};B.types.quoted=function(a){return B.types.K("'",a)};B.types.isQuoted=function(a){return a instanceof C&&"'"===a.tag};B.types.list=function(a){return B.types.K("list",a)};B.types.isList=function(a){return a instanceof B.types.qb&&"list"===a.tag};B.types.link=function(a){return B.types.K("link",a)};B.types.isLink=function(a){return a instanceof C&&"link"===a.tag};B.q={};B.q.Qa=3;B.q.Z=48;B.q.aa=44;B.q.za=B.q.aa*B.q.aa;B.q.Na=4096;B.q.Ha=function(a,c){if(a.length>B.q.Qa){if(c)return!0;var d=a.charAt(1);return a.charAt(0)===B.l.H?":"===d||"$"===d||"#"===d:!1}return!1};B.q.Fa=function(a){var c=Math.floor(a/B.q.aa);a=String.fromCharCode(a%B.q.aa+B.q.Z);return 0===c?B.l.ba+a:B.l.ba+String.fromCharCode(c+B.q.Z)+a};function na(){this.Ua=this.da=this.B=0;this.D={}}
na.prototype.write=function(a,c){if(B.q.Ha(a,c)){this.Ua===B.q.Na?(this.clear(),this.da=0,this.D={}):this.B===B.q.za&&this.clear();var d=this.D[a];return null==d?(this.D[a]=[B.q.Fa(this.B),this.da],this.B++,a):d[1]!=this.da?(d[1]=this.da,d[0]=B.q.Fa(this.B),this.B++,a):d[0]}return a};na.prototype.clear=function(){this.B=0;this.da++};B.q.ib=function(a){return a.charAt(0)===B.l.ba};B.q.Wa=function(a){return 2===a.length?a.charCodeAt(1)-B.q.Z:(a.charCodeAt(1)-B.q.Z)*B.q.aa+(a.charCodeAt(2)-B.q.Z)};
function M(){this.B=0;this.D=[]}M.prototype.write=function(a){this.B==B.q.za&&(this.B=0);this.D[this.B]=a;this.B++;return a};M.prototype.ua=function(a){return this.D[B.q.Wa(a)]};M.prototype.clear=function(){this.B=0};B.e={};B.e.decoder={};function oa(a){this.ja=a}B.e.decoder.tag=function(a){return new oa(a)};B.e.decoder.Ia=function(a){return a&&a instanceof oa};B.e.decoder.jb=function(a){switch(a){case "_":case "s":case "?":case "i":case "d":case "b":case "'":case "array":case "map":return!0}return!1};
function N(a){this.options=a||{};this.h={};for(var c in this.ha.h)this.h[c]=this.ha.h[c];for(c in this.options.handlers){if(B.e.decoder.jb(c))throw Error('Cannot override handler for ground type "'+c+'"');this.h[c]=this.options.handlers[c]}this.ia=null!=this.options.preferStrings?this.options.preferStrings:this.ha.ia;this.na=this.options.defaultHandler||this.ha.na;this.J=this.options.mapBuilder;this.X=this.options.arrayBuilder}
N.prototype.ha={h:{_:function(){return null},"?":function(a){return B.types.Ta(a)},b:function(a){return ja(a)},i:function(a){return B.types.Ga(a)},n:function(a){return B.types.Ca(a)},d:function(a){return B.types.cb(a)},f:function(a){return ia(a)},c:function(a){return B.types.Va(a)},":":function(a){return B.types.keyword(a)},$:function(a){return B.types.symbol(a)},r:function(a){return ka(a)},"'":function(a){return a},m:function(a){return B.types.date(a)},t:function(a){return B.types.pb(a)},u:function(a){return B.types.uuid(a)},
set:function(a){return B.types.set(a)},list:function(a){return B.types.list(a)},link:function(a){return B.types.link(a)},cmap:function(a){return B.types.map(a,!1)}},na:function(a,c){return B.types.K(a,c)},ia:!0};
N.prototype.A=function(a,c,d,e){if(null==a)return null;switch(typeof a){case "string":return B.q.Ha(a,d)?(a=pa(this,a),c&&c.write(a,d),c=a):c=B.q.ib(a)?c.ua(a,d):pa(this,a),c;case "object":if(B.g.isArray(a))if("^ "===a[0])if(this.J)if(a.length<2*B.types.la+1&&this.J.fromArray){e=[];for(d=1;d<a.length;d+=2)e.push(this.A(a[d],c,!0,!1)),e.push(this.A(a[d+1],c,!1,!1));c=this.J.fromArray(e,a)}else{e=this.J.init(a);for(d=1;d<a.length;d+=2)e=this.J.add(e,this.A(a[d],c,!0,!1),this.A(a[d+1],c,!1,!1),a);c=
this.J.finalize(e,a)}else{e=[];for(d=1;d<a.length;d+=2)e.push(this.A(a[d],c,!0,!1)),e.push(this.A(a[d+1],c,!1,!1));c=B.types.map(e,!1)}else c=qa(this,a,c,e);else{d=B.g.P(a);var f=d[0];e=1==d.length?this.A(f,c,!1,!1):null;if(B.e.decoder.Ia(e))a=a[f],d=this.h[e.ja],c=null!=d?d(this.A(a,c,!1,!0)):B.types.K(e.ja,this.A(a,c,!1,!1));else if(this.J)if(d.length<2*B.types.la&&this.J.fromArray){var g=[];for(e=0;e<d.length;e++)f=d[e],g.push(this.A(f,c,!0,!1)),g.push(this.A(a[f],c,!1,!1));c=this.J.fromArray(g,
a)}else{g=this.J.init(a);for(e=0;e<d.length;e++)f=d[e],g=this.J.add(g,this.A(f,c,!0,!1),this.A(a[f],c,!1,!1),a);c=this.J.finalize(g,a)}else{g=[];for(e=0;e<d.length;e++)f=d[e],g.push(this.A(f,c,!0,!1)),g.push(this.A(a[f],c,!1,!1));c=B.types.map(g,!1)}}return c}return a};N.prototype.decode=N.prototype.A;
function qa(a,c,d,e){if(e){var f=[];for(e=0;e<c.length;e++)f.push(a.A(c[e],d,!1,!1));return f}if(2===c.length&&"string"===typeof c[0]&&(e=a.A(c[0],d,!1,!1),B.e.decoder.Ia(e)))return c=c[1],f=a.h[e.ja],null!=f?f=f(a.A(c,d,!1,!0)):B.types.K(e.ja,a.A(c,d,!1,!1));if(a.X){if(32>=c.length&&a.X.fromArray){f=[];for(e=0;e<c.length;e++)f.push(a.A(c[e],d,!1,!1));return a.X.fromArray(f,c)}f=a.X.init();for(e=0;e<c.length;e++)f=a.X.add(f,a.A(c[e],d,!1,!1),c);return a.X.finalize(f,c)}f=[];for(e=0;e<c.length;e++)f.push(a.A(c[e],
d,!1,!1));return f}function pa(a,c){if(c.charAt(0)===B.l.H){var d=c.charAt(1);if(d===B.l.H||d===B.l.ba||d===B.l.Aa)return c.substring(1);if(d===B.l.Sa)return B.e.decoder.tag(c.substring(2));var e=a.h[d];return null==e?a.na(d,c.substring(2)):e(c.substring(2))}return c}B.e.decoder.decoder=function(a){return new N(a)};B.e.reader={};function ra(a){this.decoder=new N(a)}function O(a,c){this.nb=a;this.options=c||{};this.D=this.options.cache?this.options.cache:new M}O.prototype.ua=function(a){var c=this.D;a=this.nb.decoder.A(JSON.parse(a),c);this.D.clear();return a};O.prototype.read=O.prototype.ua;B.h={};B.h.Da=0;B.h.ma="transit$guid$"+B.g.randomUUID();B.h.La=function(a){if(null==a)return"null";if(a===String)return"string";if(a===Boolean)return"boolean";if(a===Number)return"number";if(a===Array)return"array";if(a===Object)return"map";var c=a[B.h.ma];null==c&&("undefined"!=typeof Object.defineProperty?(c=++B.h.Da,Object.defineProperty(a,B.h.ma,{value:c,enumerable:!1})):a[B.h.ma]=c=++B.h.Da);return c};B.h.constructor=function(a){return null==a?null:a.constructor};
B.h.Y=function(a,c){for(var d=a.toString(),e=d.length;e<c;e++)d="0"+d;return d};B.h.stringableKeys=function(a){a=B.g.P(a);for(var c=0;c<a.length;c++);return!0};function P(){}P.prototype.tag=function(){return"_"};P.prototype.rep=function(){return null};P.prototype.C=function(){return"null"};function Q(){}Q.prototype.tag=function(){return"s"};Q.prototype.rep=function(a){return a};Q.prototype.C=function(a){return a};function R(){}R.prototype.tag=function(){return"i"};R.prototype.rep=function(a){return a};
R.prototype.C=function(a){return a.toString()};function S(){}S.prototype.tag=function(){return"i"};S.prototype.rep=function(a){return a.toString()};S.prototype.C=function(a){return a.toString()};function T(){}T.prototype.tag=function(){return"?"};T.prototype.rep=function(a){return a};T.prototype.C=function(a){return a.toString()};function U(){}U.prototype.tag=function(){return"array"};U.prototype.rep=function(a){return a};U.prototype.C=function(){return null};function V(){}V.prototype.tag=function(){return"map"};
V.prototype.rep=function(a){return a};V.prototype.C=function(){return null};function W(){}W.prototype.tag=function(){return"t"};W.prototype.rep=function(a){return a.getUTCFullYear()+"-"+B.h.Y(a.getUTCMonth()+1,2)+"-"+B.h.Y(a.getUTCDate(),2)+"T"+B.h.Y(a.getUTCHours(),2)+":"+B.h.Y(a.getUTCMinutes(),2)+":"+B.h.Y(a.getUTCSeconds(),2)+"."+B.h.Y(a.getUTCMilliseconds(),3)+"Z"};W.prototype.C=function(a,c){return c.rep(a)};function X(){}X.prototype.tag=function(){return"m"};X.prototype.rep=function(a){return a.valueOf()};
X.prototype.C=function(a){return a.valueOf().toString()};X.prototype.Ea=function(){return new W};function Y(){}Y.prototype.tag=function(){return"u"};Y.prototype.rep=function(a){return a.toString()};Y.prototype.C=function(a){return a.toString()};function sa(){}sa.prototype.tag=function(){return":"};sa.prototype.rep=function(a){return a.name};sa.prototype.C=function(a,c){return c.rep(a)};function ta(){}ta.prototype.tag=function(){return"$"};ta.prototype.rep=function(a){return a.name};
ta.prototype.C=function(a,c){return c.rep(a)};function ua(){}ua.prototype.tag=function(a){return a.tag};ua.prototype.rep=function(a){return a.rep};ua.prototype.C=function(){return null};function va(){}va.prototype.tag=function(){return"set"};va.prototype.rep=function(a){var c=[];a.forEach(function(a){c.push(a)});return B.types.K("array",c)};va.prototype.C=function(){return null};function wa(){}wa.prototype.tag=function(){return"map"};wa.prototype.rep=function(a){return a};wa.prototype.C=function(){return null};
function xa(){}xa.prototype.tag=function(){return"map"};xa.prototype.rep=function(a){return a};xa.prototype.C=function(){return null};B.h.Xa=function(a){a.set(null,new P);a.set(String,new Q);a.set(Number,new R);a.set(b,new S);a.set(Boolean,new T);a.set(Array,new U);a.set(Object,new V);a.set(Date,new X);a.set(G,new Y);a.set(E,new sa);a.set(F,new ta);a.set(C,new ua);a.set(L,new va);a.set(K,new wa);a.set(J,new xa)};function ya(){this.h={};B.h.Xa(this)}
ya.prototype.get=function(a){return"string"===typeof a?this.h[a]:this.h[B.h.La(a)]};B.h.ob=function(a){switch(a){case "null":case "string":case "boolean":case "number":case "array":case "map":return!1}return!0};ya.prototype.set=function(a,c){"string"===typeof a&&B.h.ob(a)?this.h[a]=c:this.h[B.h.La(a)]=c};B.e.writer={};B.e.writer.escape=function(a){if(0<a.length){var c=a.charAt(0);return c===B.l.H||c===B.l.ba||c===B.l.Aa?B.l.H+a:a}return a};function za(a){this.Q=a||{};this.ia=null!=this.Q.preferStrings?this.Q.preferStrings:!0;this.Ja=this.Q.objectBuilder||null;this.h=new ya;if(this.Q.handlers){var c=this;this.Q.handlers.forEach(function(a,e){c.h.set(e,a)})}this.ka=this.Q.unpack||function(a){return B.types.fb(a)&&null===a.k?a.v:!1};this.fa=this.Q&&this.Q.verbose||!1}
function Aa(a,c){var d=a.h.get(B.h.constructor(c));return null!=d?d:(d=c&&c.transitTag)?a.h.get(d):null}function Z(a,c,d,e,f){a=a+c+d;return f?f.write(a,e):a}B.e.writer.ab=function(a,c,d){var e=[];if(B.g.isArray(c))for(var f=0;f<c.length;f++)e.push(B.e.writer.s(a,c[f],!1,d));else c.forEach(function(c){e.push(B.e.writer.s(a,c,!1,d))});return e};B.e.writer.Ya=function(a,c,d){return B.e.writer.ab(a,c,d)};B.e.writer.qa=function(a,c){if("string"!==typeof c){var d=Aa(a,c);return d&&1===d.tag(c).length}return!0};
B.e.writer.stringableKeys=function(a,c){var d=a.ka(c),e=!0;if(d){for(var f=0;f<d.length&&(e=B.e.writer.qa(a,d[f]),e);f+=2);return e}if(c.keys&&(d=c.keys(),d.next)){for(step=d.next();!step.done;){e=B.e.writer.qa(a,step.value);if(!e)break;step=d.next()}return e}if(c.forEach)return c.forEach(function(c,d){e=e&&B.e.writer.qa(a,d)}),e;throw Error("Cannot walk keys of object type "+B.h.constructor(c).name);};
B.e.writer.$a=function(a,c,d){if(c.constructor===Object||null!=c.forEach){if(a.fa){if(null!=c.forEach)if(B.e.writer.stringableKeys(a,c)){var e={};c.forEach(function(c,f){e[B.e.writer.s(a,f,!0,!1)]=B.e.writer.s(a,c,!1,d)})}else{var f=a.ka(c),g=[],h=Z(B.l.U,"cmap","",!0,d);if(f)for(var k=0;k<f.length;k+=2)g.push(B.e.writer.s(a,f[k],!0,!1)),g.push(B.e.writer.s(a,f[k+1],!1,d));else c.forEach(function(c,e){g.push(B.e.writer.s(a,e,!0,!1));g.push(B.e.writer.s(a,c,!1,d))});e={};e[h]=g}else for(e={},f=B.g.P(c),
k=0;k<f.length;k++)e[B.e.writer.s(a,f[k],!0,!1)]=B.e.writer.s(a,c[f[k]],!1,d);return e}if(null!=c.forEach){if(B.e.writer.stringableKeys(a,c)){f=a.ka(c);e=["^ "];if(f)for(k=0;k<f.length;k+=2)e.push(B.e.writer.s(a,f[k],!0,d)),e.push(B.e.writer.s(a,f[k+1],!1,d));else c.forEach(function(c,f){e.push(B.e.writer.s(a,f,!0,d));e.push(B.e.writer.s(a,c,!1,d))});return e}f=a.ka(c);g=[];h=Z(B.l.U,"cmap","",!0,d);if(f)for(k=0;k<f.length;k+=2)g.push(B.e.writer.s(a,f[k],!0,d)),g.push(B.e.writer.s(a,f[k+1],!1,d));
else c.forEach(function(c,e){g.push(B.e.writer.s(a,e,!0,d));g.push(B.e.writer.s(a,c,!1,d))});return[h,g]}e=["^ "];f=B.g.P(c);for(k=0;k<f.length;k++)e.push(B.e.writer.s(a,f[k],!0,d)),e.push(B.e.writer.s(a,c[f[k]],!1,d));return e}if(null!=a.Ja)return a.Ja(c,function(c){return B.e.writer.s(a,c,!0,d)},function(c){return B.e.writer.s(a,c,!1,d)});k=B.h.constructor(c).name;f=Error("Cannot write "+k);f.data={ta:c,type:k};throw f;};
B.e.writer.bb=function(a,c,d,e){if(a.fa){var f={};f[Z(B.l.U,c,"",!0,e)]=B.e.writer.s(a,d,!1,e);return f}return[Z(B.l.U,c,"",!0,e),B.e.writer.s(a,d,!1,e)]};B.e.writer.Za=function(a,c,d,e,f,g,h){if(1===d.length){if("string"===typeof e)return Z(B.l.H,d,e,g,h);if(g||a.ia){(e=a.fa&&c.Ea())?(d=e.tag(f),e=e.C(f,e)):e=c.C(f,c);if(null!==e)return Z(B.l.H,d,e,g,h);c=Error('Tag "'+d+'" cannot be encoded as string');c.data={tag:d,rep:e,ta:f};throw c;}}return B.e.writer.bb(a,d,e,h)};
B.e.writer.s=function(a,c,d,e){var f=Aa(a,c),g=f?f.tag(c):null,h=f?f.rep(c):null;if(null!=f&&null!=g)switch(g){case "_":return d?Z(B.l.H,"_","",d,e):null;case "s":return Z("","",B.e.writer.escape(h),d,e);case "?":return d?Z(B.l.H,"?",h.toString()[0],d,e):h;case "i":return d||"string"===typeof h||h instanceof b?Z(B.l.H,"i",h.toString(),d,e):h;case "d":return d?Z(h.H,"d",h,d,e):h;case "b":return Z(B.l.H,"b",h,d,e);case "'":return a.fa?(c={},d=Z(B.l.U,"'","",!0,e),c[d]=B.e.writer.s(a,h,!1,e),a=c):a=
[Z(B.l.U,"'","",!0,e),B.e.writer.s(a,h,!1,e)],a;case "array":return B.e.writer.Ya(a,h,e);case "map":return B.e.writer.$a(a,h,e);default:return B.e.writer.Za(a,f,g,h,c,d,e)}else throw a=B.h.constructor(c).name,e=Error("Cannot write "+a),e.data={ta:c,type:a},e;};B.e.writer.mb=function(a,c){var d=Aa(a,c);if(null!=d)return 1===d.tag(c).length?B.types.quoted(c):c;var d=B.h.constructor(c).name,e=Error("Cannot write "+d);e.data={ta:c,type:d};throw e;};
B.e.writer.kb=function(a,c,d,e){return JSON.stringify(B.e.writer.s(a,B.e.writer.mb(a,c),d,e))};function $(a,c){this.ca=a;this.options=c||{};this.D=!1===this.options.cache?null:this.options.cache?this.options.cache:new na}$.prototype.lb=function(){return this.ca};$.prototype.marshaller=$.prototype.lb;$.prototype.write=function(a,c){var d=null,d=c||{},e=d.asMapKey||!1,f=this.ca.fa?!1:this.D,d=!1===d.marshalTop?B.e.writer.s(this.ca,a,e,f):B.e.writer.kb(this.ca,a,e,f);null!=this.D&&this.D.clear();return d};
$.prototype.write=$.prototype.write;$.prototype.register=function(a,c){this.ca.h.set(a,c)};$.prototype.register=$.prototype.register;B.reader=function(a,c){if("json"===a||"json-verbose"===a||null==a){var d=new ra(c);return new O(d,c)}throw Error("Cannot create reader of type "+a);};B.writer=function(a,c){if("json"===a||"json-verbose"===a||null==a){"json-verbose"===a&&(null==c&&(c={}),c.verbose=!0);var d=new za(c);return new $(d,c)}d=Error('Type must be "json"');d.data={type:a};throw d;};
B.makeWriteHandler=function(a){function c(){}c.prototype.tag=a.tag;c.prototype.rep=a.rep;c.prototype.C=a.stringRep;c.prototype.Ea=a.getVerboseHandler;return new c};B.makeBuilder=function(a){function c(){}c.prototype.init=a.init;c.prototype.add=a.add;c.prototype.finalize=a.finalize;c.prototype.fromArray=a.fromArray;return new c};B.date=B.types.date;B.integer=B.types.Ga;B.isInteger=B.types.isInteger;B.uuid=B.types.uuid;B.isUUID=B.types.isUUID;B.bigInt=B.types.Ca;B.isBigInt=B.types.hb;B.bigDec=ia;
B.isBigDec=B.types.gb;B.keyword=B.types.keyword;B.isKeyword=B.types.isKeyword;B.symbol=B.types.symbol;B.isSymbol=B.types.isSymbol;B.binary=ja;B.isBinary=B.types.isBinary;B.uri=ka;B.isURI=B.types.isURI;B.map=B.types.map;B.isMap=B.types.isMap;B.set=B.types.set;B.isSet=B.types.isSet;B.list=B.types.list;B.isList=B.types.isList;B.quoted=B.types.quoted;B.isQuoted=B.types.isQuoted;B.tagged=B.types.K;B.isTaggedValue=B.types.isTaggedValue;B.link=B.types.link;B.isLink=B.types.isLink;B.hash=B.a.j;
B.hashKey=B.a.M;B.hashMapLike=B.a.hashMapLike;B.hashMapLike=B.a.hashArrayLike;B.equals=B.a.equals;B.extendToEQ=B.a.extendToEQ;B.mapToObject=function(a){var c={};a.forEach(function(a,e){if("string"!==typeof e)throw Error("Cannot convert map with non-string keys");c[e]=a});return c};B.decoder=B.e.decoder.decoder;B.UUIDfromString=B.types.UUIDfromString;B.randomUUID=B.types.randomUUID;B.stringableKeys=B.e.writer.stringableKeys;define("transit",[],function(){return B});})();
