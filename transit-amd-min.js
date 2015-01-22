// transit-js 0.8.755
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
;(function(){function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};function c(a,b){this.A=a|0;this.p=b|0}var ba={};function l(a){if(-128<=a&&128>a){var b=ba[a];if(b)return b}b=new c(a|0,0>a?-1:0);-128<=a&&128>a&&(ba[a]=b);return b}function m(a){return isNaN(a)||!isFinite(a)?n:a<=-ca?p:a+1>=ca?da:0>a?r(m(-a)):new c(a%s|0,a/s|0)}function t(a,b){return new c(a,b)}
function u(a,b){if(0==a.length)throw Error("number format error: empty string");var d=b||10;if(2>d||36<d)throw Error("radix out of range: "+d);if("-"==a.charAt(0))return r(u(a.substring(1),d));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);for(var e=m(Math.pow(d,8)),f=n,g=0;g<a.length;g+=8){var h=Math.min(8,a.length-g),k=parseInt(a.substring(g,g+h),d);8>h?(h=m(Math.pow(d,h)),f=f.multiply(h).add(m(k))):(f=f.multiply(e),f=f.add(m(k)))}return f}
var s=4294967296,ca=s*s/2,n=l(0),v=l(1),ea=l(-1),da=t(-1,2147483647),p=t(0,-2147483648),fa=l(16777216);function w(a){return a.p*s+(0<=a.A?a.A:s+a.A)}
c.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(y(this))return"0";if(0>this.p){if(this.equals(p)){var b=m(a),d=z(this,b),b=A(d.multiply(b),this);return d.toString(a)+b.A.toString(a)}return"-"+r(this).toString(a)}for(var d=m(Math.pow(a,6)),b=this,e="";;){var f=z(b,d),g=A(b,f.multiply(d)).A.toString(a),b=f;if(y(b))return g+e;for(;6>g.length;)g="0"+g;e=""+g+e}};function y(a){return 0==a.p&&0==a.A}
c.prototype.equals=function(a){return this.p==a.p&&this.A==a.A};c.prototype.compare=function(a){if(this.equals(a))return 0;var b=0>this.p,d=0>a.p;return b&&!d?-1:!b&&d?1:0>A(this,a).p?-1:1};function r(a){return a.equals(p)?p:t(~a.A,~a.p).add(v)}c.prototype.add=function(a){var b=this.p>>>16,d=this.p&65535,e=this.A>>>16,f=a.p>>>16,g=a.p&65535,h=a.A>>>16,k;k=0+((this.A&65535)+(a.A&65535));a=0+(k>>>16);a+=e+h;e=0+(a>>>16);e+=d+g;d=0+(e>>>16);d=d+(b+f)&65535;return t((a&65535)<<16|k&65535,d<<16|e&65535)};
function A(a,b){return a.add(r(b))}
c.prototype.multiply=function(a){if(y(this)||y(a))return n;if(this.equals(p))return 1==(a.A&1)?p:n;if(a.equals(p))return 1==(this.A&1)?p:n;if(0>this.p)return 0>a.p?r(this).multiply(r(a)):r(r(this).multiply(a));if(0>a.p)return r(this.multiply(r(a)));if(0>this.compare(fa)&&0>a.compare(fa))return m(w(this)*w(a));var b=this.p>>>16,d=this.p&65535,e=this.A>>>16,f=this.A&65535,g=a.p>>>16,h=a.p&65535,k=a.A>>>16;a=a.A&65535;var D,q,x,ka;ka=0+f*a;x=0+(ka>>>16);x+=e*a;q=0+(x>>>16);x=(x&65535)+f*k;q+=x>>>16;
x&=65535;q+=d*a;D=0+(q>>>16);q=(q&65535)+e*k;D+=q>>>16;q&=65535;q+=f*h;D+=q>>>16;q&=65535;D=D+(b*a+d*k+e*h+f*g)&65535;return t(x<<16|ka&65535,D<<16|q)};
function z(a,b){if(y(b))throw Error("division by zero");if(y(a))return n;if(a.equals(p)){if(b.equals(v)||b.equals(ea))return p;if(b.equals(p))return v;var d;d=1;if(0==d)d=a;else{var e=a.p;d=32>d?t(a.A>>>d|e<<32-d,e>>d):t(e>>d-32,0<=e?0:-1)}d=z(d,b).shiftLeft(1);if(d.equals(n))return 0>b.p?v:ea;e=A(a,b.multiply(d));return d.add(z(e,b))}if(b.equals(p))return n;if(0>a.p)return 0>b.p?z(r(a),r(b)):r(z(r(a),b));if(0>b.p)return r(z(a,r(b)));for(var f=n,e=a;0<=e.compare(b);){d=Math.max(1,Math.floor(w(e)/
w(b)));for(var g=Math.ceil(Math.log(d)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),h=m(d),k=h.multiply(b);0>k.p||0<k.compare(e);)d-=g,h=m(d),k=h.multiply(b);y(h)&&(h=v);f=f.add(h);e=A(e,k)}return f}c.prototype.shiftLeft=function(a){a&=63;if(0==a)return this;var b=this.A;return 32>a?t(b<<a,this.p<<a|b>>>32-a):t(0,b<<a-32)};function ga(a,b){b&=63;if(0==b)return a;var d=a.p;return 32>b?t(a.A>>>b|d<<32-b,d>>>b):32==b?t(d,0):t(d>>>b-32,0)};var B={g:{}};B.g.N="undefined"!=typeof Object.keys?function(a){return Object.keys(a)}:function(a){var b=[],d=0,e;for(e in a)b[d++]=e;return b};B.g.isArray="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"===aa(a)};B.g.Ea="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";B.g.Na=function(a){return Math.round(Math.random()*a)};B.g.q=function(){return B.g.Na(15).toString(16)};
B.g.randomUUID=function(){var a=(8|3&B.g.Na(14)).toString(16);return B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+"-"+B.g.q()+B.g.q()+B.g.q()+B.g.q()+"-4"+B.g.q()+B.g.q()+B.g.q()+"-"+a+B.g.q()+B.g.q()+B.g.q()+"-"+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()};
B.g.btoa=function(a){if("undefined"!=typeof btoa)return btoa(a);a=String(a);for(var b,d,e=0,f=B.g.Ea,g="";a.charAt(e|0)||(f="=",e%1);g+=f.charAt(63&b>>8-e%1*8)){d=a.charCodeAt(e+=.75);if(255<d)throw Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");b=b<<8|d}return g};
B.g.atob=function(a){if("undefined"!=typeof atob)return atob(a);a=String(a).replace(/=+$/,"");if(1==a.length%4)throw Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var b=0,d,e,f=0,g="";e=a.charAt(f++);~e&&(d=b%4?64*d+e:e,b++%4)?g+=String.fromCharCode(255&d>>(-2*b&6)):0)e=B.g.Ea.indexOf(e);return g};B.g.Xa=function(a){for(var b=0,d=a.length,e="",f=null;b<d;)f=a.subarray(b,Math.min(b+32768,d)),e+=String.fromCharCode.apply(null,f),b+=32768;return B.g.btoa(e)};
B.g.Qa=function(a){a=B.g.atob(a);for(var b=a.length,d=new Uint8Array(b),e=0;e<b;e++)d[e]=a.charCodeAt(e);return d};B.l={};B.l.D="~";B.l.Wa="#";B.l.Z="^";B.l.Ba="`";B.l.S="~#";B.a={};B.a.na="transit$hashCode$";B.a.Ha=1;B.a.equals=function(a,b){if(null==a)return null==b;if(a===b)return!0;if("object"===typeof a){if(B.g.isArray(a)){if(B.g.isArray(b)&&a.length===b.length){for(var d=0;d<a.length;d++)if(!B.a.equals(a[d],b[d]))return!1;return!0}return!1}if(a.G)return a.G(b);if(null!=b&&"object"===typeof b){if(b.G)return b.G(a);var d=0,e=B.g.N(b).length,f;for(f in a)if(a.hasOwnProperty(f)&&(d++,!b.hasOwnProperty(f)||!B.a.equals(a[f],b[f])))return!1;return d===e}}return!1};
B.a.oa=function(a,b){return a^b+2654435769+(a<<6)+(a>>2)};B.a.wa={};B.a.xa=0;B.a.Va=256;B.a.jb=function(a){var b=B.a.wa[a];if(null!=b)return b;for(var d=b=0;d<a.length;++d)b=31*b+a.charCodeAt(d),b%=4294967296;B.a.xa++;B.a.xa>=B.a.Va&&(B.a.wa={},B.a.xa=1);return B.a.wa[a]=b};
B.a.hashMapLike=function(a){var b=0;if(null!=a.forEach)a.forEach(function(a,d){b=(b+(B.a.j(d)^B.a.j(a)))%4503599627370496});else for(var d=B.g.N(a),e=0;e<d.length;e++)var f=d[e],g=a[f],b=(b+(B.a.j(f)^B.a.j(g)))%4503599627370496;return b};B.a.hashArrayLike=function(a){var b=0;if(B.g.isArray(a))for(var d=0;d<a.length;d++)b=B.a.oa(b,B.a.j(a[d]));else a.forEach&&a.forEach(function(a){b=B.a.oa(b,B.a.j(a))});return b};
B.a.j=function(a){if(null==a)return 0;switch(typeof a){case "number":return a;case "boolean":return!0===a?1:0;case "string":return B.a.jb(a);case "function":var b=a[B.a.na];b||(b=B.a.Ha,"undefined"!=typeof Object.defineProperty?Object.defineProperty(a,B.a.na,{value:b,enumerable:!1}):a[B.a.na]=b,B.a.Ha++);return b;default:return a instanceof Date?a.valueOf():B.g.isArray(a)?B.a.hashArrayLike(a):a.I?a.I():B.a.hashMapLike(a)}};B.a.extendToEQ=function(a,b){a.I=b.hashCode;a.G=b.equals;return a};B.types={};function C(a,b){this.tag=a;this.rep=b;this.j=-1}C.prototype.toString=function(){return"[TaggedValue: "+this.tag+", "+this.rep+"]"};C.prototype.L=function(a){return B.a.equals(this,a)};C.prototype.equiv=C.prototype.L;C.prototype.G=function(a){return a instanceof C?this.tag===a.tag&&B.a.equals(this.rep,a.rep):!1};C.prototype.I=function(){-1===this.j&&(this.j=B.a.oa(B.a.j(this.tag),B.a.j(this.rep)));return this.j};B.types.K=function(a,b){return new C(a,b)};
B.types.isTaggedValue=function(a){return a instanceof C};B.types.yb=function(){return null};B.types.Ya=function(a){return"t"===a};B.types.Sa=u("9007199254740992");B.types.Ta=u("-9007199254740992");B.types.Ja=function(a){if("number"===typeof a||a instanceof c)return a;a=u(a,10);return 0<a.compare(B.types.Sa)||0>a.compare(B.types.Ta)?a:w(a)};c.prototype.L=function(a){return B.a.equals(this,a)};c.prototype.equiv=c.prototype.L;c.prototype.G=function(a){return a instanceof c&&this.equals(a)};
c.prototype.I=function(){return this.A};B.types.isInteger=function(a){return a instanceof c?!0:"number"===typeof a&&!isNaN(a)&&Infinity!==a&&parseFloat(a)===parseInt(a)};B.types.ib=function(a){return parseFloat(a)};B.types.Da=function(a){return B.types.K("n",a)};B.types.mb=function(a){return a instanceof C&&"n"===a.tag};function ha(a){return B.types.K("f",a)}B.types.lb=function(a){return a instanceof C&&"f"===a.tag};B.types.$a=function(a){return a};function E(a){this.name=a;this.j=-1}
E.prototype.toString=function(){return":"+this.name};E.prototype.L=function(a){return B.a.equals(this,a)};E.prototype.equiv=E.prototype.L;E.prototype.G=function(a){return a instanceof E&&this.name==a.name};E.prototype.I=function(){-1===this.j&&(this.j=B.a.j(this.name));return this.j};B.types.keyword=function(a){return new E(a)};B.types.isKeyword=function(a){return a instanceof E};function F(a){this.name=a;this.j=-1}F.prototype.toString=function(){return"[Symbol: "+this.name+"]"};
F.prototype.L=function(a){return B.a.equals(this,a)};F.prototype.equiv=F.prototype.L;F.prototype.G=function(a){return a instanceof F&&this.name==a.name};F.prototype.I=function(){-1===this.j&&(this.j=B.a.j(this.name));return this.j};B.types.symbol=function(a){return new F(a)};B.types.isSymbol=function(a){return a instanceof F};
B.types.ea=function(a,b,d){var e="";d=d||b+1;for(var f=8*(7-b),g=l(255).shiftLeft(f);b<d;b++,f-=8,g=ga(g,8)){var h=ga(t(a.A&g.A,a.p&g.p),f).toString(16);1==h.length&&(h="0"+h);e+=h}return e};function G(a,b){this.pa=a;this.ra=b;this.j=-1}G.prototype.toString=function(a){var b=this.pa,d=this.ra;a=""+(B.types.ea(b,0,4)+"-");a+=B.types.ea(b,4,6)+"-";a+=B.types.ea(b,6,8)+"-";a+=B.types.ea(d,0,2)+"-";return a+=B.types.ea(d,2,8)};G.prototype.L=function(a){return B.a.equals(this,a)};G.prototype.equiv=G.prototype.L;
G.prototype.G=function(a){return a instanceof G&&this.pa.equals(a.pa)&&this.ra.equals(a.ra)};G.prototype.I=function(){-1===this.j&&(this.j=B.a.j(this.toString()));return this.j};
B.types.UUIDfromString=function(a){a=a.replace(/-/g,"");for(var b=null,d=null,e=d=0,f=24,g=0,g=d=0,f=24;8>g;g+=2,f-=8)d|=parseInt(a.substring(g,g+2),16)<<f;e=0;g=8;for(f=24;16>g;g+=2,f-=8)e|=parseInt(a.substring(g,g+2),16)<<f;b=t(e,d);d=0;g=16;for(f=24;24>g;g+=2,f-=8)d|=parseInt(a.substring(g,g+2),16)<<f;e=0;for(f=g=24;32>g;g+=2,f-=8)e|=parseInt(a.substring(g,g+2),16)<<f;d=t(e,d);return new G(b,d)};B.types.uuid=function(a){return B.types.UUIDfromString(a)};
B.types.isUUID=function(a){return a instanceof G};B.types.date=function(a){a="number"===typeof a?a:parseInt(a,10);return new Date(a)};B.types.wb=function(a){return new Date(a)};Date.prototype.G=function(a){return a instanceof Date?this.valueOf()===a.valueOf():!1};Date.prototype.I=function(){return this.valueOf()};function ia(a,b){return b&&!1===b.ua||"undefined"==typeof Buffer?"undefined"!=typeof Uint8Array?B.g.Qa(a):B.types.K("b",a):new Buffer(a,"base64")}
B.types.isBinary=function(a){return"undefined"!=typeof Buffer&&a instanceof Buffer?!0:"undefined"!=typeof Uint8Array&&a instanceof Uint8Array?!0:a instanceof C&&"b"===a.tag};function ja(a){return B.types.K("r",a)}B.types.isURI=function(a){return a instanceof C&&"r"===a.tag};B.types.T=0;B.types.ga=1;B.types.za=2;function H(a,b){this.H=a;this.type=b||B.types.T;this.w=0}
H.prototype.next=function(){if(this.w<this.H.length){var a=null,a=this.type===B.types.T?this.H[this.w]:this.type===B.types.ga?this.H[this.w+1]:[this.H[this.w],this.H[this.w+1]],a={value:a,done:!1};this.w+=2;return a}return{value:null,done:!0}};H.prototype.next=H.prototype.next;function I(a,b){this.map=a;this.type=b||B.types.T;this.keys=la(this.map);this.w=0;this.P=null;this.M=0}
I.prototype.next=function(){if(this.w<this.map.size){null!=this.P&&this.M<this.P.length||(this.P=this.map.map[this.keys[this.w]],this.M=0);var a=null,a=this.type===B.types.T?this.P[this.M]:this.type===B.types.ga?this.P[this.M+1]:[this.P[this.M],this.P[this.M+1]],a={value:a,done:!1};this.w++;this.M+=2;return a}return{value:null,done:!0}};I.prototype.next=I.prototype.next;
B.types.sa=function(a,b){if((b instanceof J||b instanceof K)&&a.size===b.size){for(var d in a.map)for(var e=a.map[d],f=0;f<e.length;f+=2)if(!B.a.equals(e[f+1],b.get(e[f])))return!1;return!0}if(null!=b&&"object"===typeof b&&(d=B.g.N(b),e=d.length,a.size===e)){for(f=0;f<e;f++){var g=d[f];if(!a.has(g)||!B.a.equals(b[g],a.get(g)))return!1}return!0}return!1};B.types.ka=8;B.types.ya=32;B.types.Pa=32;function K(a){this.v=a;this.o=null;this.j=-1;this.size=a.length/2;this.Ca=0}K.prototype.toString=function(){return"[TransitArrayMap]"};
function ma(a){if(a.o)throw Error("Invalid operation, already converted");if(a.size<B.types.ka)return!1;a.Ca++;return a.Ca>B.types.Pa?(a.o=B.types.map(a.v,!1,!0),a.v=[],!0):!1}K.prototype.clear=function(){this.j=-1;this.o?this.o.clear():this.v=[];this.size=0};K.prototype.clear=K.prototype.clear;K.prototype.keys=function(){return this.o?this.o.keys():new H(this.v,B.types.T)};K.prototype.keys=K.prototype.keys;
K.prototype.Q=function(){if(this.o)return this.o.Q();for(var a=[],b=0,d=0;d<this.v.length;b++,d+=2)a[b]=this.v[d];return a};K.prototype.keySet=K.prototype.Q;K.prototype.H=function(){return this.o?this.o.H():new H(this.v,B.types.za)};K.prototype.entries=K.prototype.H;K.prototype.R=function(){return this.o?this.o.R():new H(this.v,B.types.ga)};K.prototype.values=K.prototype.R;K.prototype.forEach=function(a){if(this.o)this.o.forEach(a);else for(var b=0;b<this.v.length;b+=2)a(this.v[b+1],this.v[b])};
K.prototype.forEach=K.prototype.forEach;K.prototype.get=function(a,b){if(this.o)return this.o.get(a);if(ma(this))return this.get(a);for(var d=0;d<this.v.length;d+=2)if(B.a.equals(this.v[d],a))return this.v[d+1];return b};K.prototype.get=K.prototype.get;K.prototype.has=function(a){if(this.o)return this.o.has(a);if(ma(this))return this.has(a);for(var b=0;b<this.v.length;b+=2)if(B.a.equals(this.v[b],a))return!0;return!1};K.prototype.has=K.prototype.has;
K.prototype.set=function(a,b){this.j=-1;if(this.o)this.o.set(a,b),this.size=this.o.size;else{for(var d=0;d<this.v.length;d+=2)if(B.a.equals(this.v[d],a)){this.v[d+1]=b;return}this.v.push(a);this.v.push(b);this.size++;this.size>B.types.ya&&(this.o=B.types.map(this.v,!1,!0),this.v=null)}};K.prototype.set=K.prototype.set;
K.prototype["delete"]=function(a){this.j=-1;if(this.o)this.o["delete"](a),this.size=this.o.size;else for(var b=0;b<this.v.length;b+=2)if(B.a.equals(this.v[b],a)){this.v.splice(b,2);this.size--;break}};K.prototype.I=function(){if(this.o)return this.o.I();-1===this.j&&(this.j=B.a.hashMapLike(this));return this.j};K.prototype.G=function(a){return this.o?B.types.sa(this.o,a):B.types.sa(this,a)};function J(a,b,d){this.map=b||{};this.U=a||[];this.size=d||0;this.j=-1}J.prototype.toString=function(){return"[TransitMap]"};
J.prototype.clear=function(){this.j=-1;this.map={};this.U=[];this.size=0};J.prototype.clear=J.prototype.clear;function la(a){return null!=a.U?a.U:B.g.N(a.map)}J.prototype["delete"]=function(a){this.j=-1;this.U=null;for(var b=B.a.j(a),d=this.map[b],e=0;e<d.length;e+=2)if(B.a.equals(a,d[e])){d.splice(e,2);0===d.length&&delete this.map[b];this.size--;break}};J.prototype.H=function(){return new I(this,B.types.za)};J.prototype.entries=J.prototype.H;
J.prototype.forEach=function(a){for(var b=la(this),d=0;d<b.length;d++)for(var e=this.map[b[d]],f=0;f<e.length;f+=2)a(e[f+1],e[f],this)};J.prototype.forEach=J.prototype.forEach;J.prototype.get=function(a,b){var d=B.a.j(a),d=this.map[d];if(null!=d)for(var e=0;e<d.length;e+=2){if(B.a.equals(a,d[e]))return d[e+1]}else return b};J.prototype.get=J.prototype.get;J.prototype.has=function(a){var b=B.a.j(a),b=this.map[b];if(null!=b)for(var d=0;d<b.length;d+=2)if(B.a.equals(a,b[d]))return!0;return!1};
J.prototype.has=J.prototype.has;J.prototype.keys=function(){return new I(this,B.types.T)};J.prototype.keys=J.prototype.keys;J.prototype.Q=function(){for(var a=la(this),b=[],d=0;d<a.length;d++)for(var e=this.map[a[d]],f=0;f<e.length;f+=2)b.push(e[f]);return b};J.prototype.keySet=J.prototype.Q;
J.prototype.set=function(a,b){this.j=-1;var d=B.a.j(a),e=this.map[d];if(null==e)this.U&&this.U.push(d),this.map[d]=[a,b],this.size++;else{for(var d=!0,f=0;f<e.length;f+=2)if(B.a.equals(b,e[f])){d=!1;e[f]=b;break}d&&(e.push(a),e.push(b),this.size++)}};J.prototype.set=J.prototype.set;J.prototype.R=function(){return new I(this,B.types.ga)};J.prototype.values=J.prototype.R;J.prototype.I=function(){-1===this.j&&(this.j=B.a.hashMapLike(this));return this.j};
J.prototype.G=function(a){return B.types.sa(this,a)};
B.types.map=function(a,b,d){a=a||[];b=!1===b?b:!0;if((!0!==d||!d)&&a.length<=2*B.types.ya){if(b){var e=a;a=[];for(b=0;b<e.length;b+=2){var f=!1;for(d=0;d<a.length;d+=2)if(B.a.equals(a[d],e[b])){a[d+1]=e[b+1];f=!0;break}f||(a.push(e[b]),a.push(e[b+1]))}}return new K(a)}var e={},f=[],g=0;for(b=0;b<a.length;b+=2){d=B.a.j(a[b]);var h=e[d];if(null==h)f.push(d),e[d]=[a[b],a[b+1]],g++;else{var k=!0;for(d=0;d<h.length;d+=2)if(B.a.equals(h[d],a[b])){h[d+1]=a[b+1];k=!1;break}k&&(h.push(a[b]),h.push(a[b+1]),
g++)}}return new J(f,e,g)};B.types.kb=function(a){return a instanceof K};B.types.isMap=function(a){return a instanceof K||a instanceof J};function L(a){this.map=a;this.size=a.size}L.prototype.toString=function(){return"[TransitSet]"};L.prototype.add=function(a){this.map.set(a,a);this.size=this.map.size};L.prototype.add=L.prototype.add;L.prototype.clear=function(){this.map=new J;this.size=0};L.prototype.clear=L.prototype.clear;L.prototype["delete"]=function(a){this.map["delete"](a);this.size=this.map.size};
L.prototype.H=function(){return this.map.H()};L.prototype.entries=L.prototype.H;L.prototype.forEach=function(a){var b=this;this.map.forEach(function(d,e){a(e,b)})};L.prototype.forEach=L.prototype.forEach;L.prototype.has=function(a){return this.map.has(a)};L.prototype.has=L.prototype.has;L.prototype.keys=function(){return this.map.keys()};L.prototype.keys=L.prototype.keys;L.prototype.Q=function(){return this.map.Q()};L.prototype.keySet=L.prototype.Q;L.prototype.R=function(){return this.map.R()};
L.prototype.values=L.prototype.R;L.prototype.G=function(a){if(a instanceof L){if(this.size===a.size)return B.a.equals(this.map,a.map)}else return!1};L.prototype.I=function(){return B.a.j(this.map)};B.types.set=function(a){a=a||[];for(var b={},d=[],e=0,f=0;f<a.length;f++){var g=B.a.j(a[f]),h=b[g];if(null==h)d.push(g),b[g]=[a[f],a[f]],e++;else{for(var g=!0,k=0;k<h.length;k+=2)if(B.a.equals(h[k],a[f])){g=!1;break}g&&(h.push(a[f]),h.push(a[f]),e++)}}return new L(new J(d,b,e))};
B.types.isSet=function(a){return a instanceof L};B.types.quoted=function(a){return B.types.K("'",a)};B.types.isQuoted=function(a){return a instanceof C&&"'"===a.tag};B.types.list=function(a){return B.types.K("list",a)};B.types.isList=function(a){return a instanceof B.types.xb&&"list"===a.tag};B.types.link=function(a){return B.types.K("link",a)};B.types.isLink=function(a){return a instanceof C&&"link"===a.tag};
B.types.tb=function(a){switch(a){case "-INF":return-Infinity;case "INF":return Infinity;case "NaN":return NaN;default:throw Error("Invalid special double value "+a);}};B.k={};B.k.Ua=3;B.k.X=48;B.k.Y=44;B.k.Aa=B.k.Y*B.k.Y;B.k.Ra=4096;B.k.Ka=function(a,b){if(a.length>B.k.Ua){if(b)return!0;var d=a.charAt(1);return a.charAt(0)===B.l.D?":"===d||"$"===d||"#"===d:!1}return!1};B.k.Ia=function(a){var b=Math.floor(a/B.k.Y);a=String.fromCharCode(a%B.k.Y+B.k.X);return 0===b?B.l.Z+a:B.l.Z+String.fromCharCode(b+B.k.X)+a};function M(){this.Za=this.ca=this.w=0;this.F={}}
M.prototype.write=function(a,b){if(B.k.Ka(a,b)){this.Za===B.k.Ra?(this.clear(),this.ca=0,this.F={}):this.w===B.k.Aa&&this.clear();var d=this.F[a];return null==d?(this.F[a]=[B.k.Ia(this.w),this.ca],this.w++,a):d[1]!=this.ca?(d[1]=this.ca,d[0]=B.k.Ia(this.w),this.w++,a):d[0]}return a};M.prototype.clear=function(){this.w=0;this.ca++};B.k.writeCache=function(){return new M};B.k.nb=function(a){return a.charAt(0)===B.l.Z&&" "!==a.charAt(1)};
B.k.ab=function(a){return 2===a.length?a.charCodeAt(1)-B.k.X:(a.charCodeAt(1)-B.k.X)*B.k.Y+(a.charCodeAt(2)-B.k.X)};function N(){this.w=0;this.F=[]}N.prototype.write=function(a){this.w==B.k.Aa&&(this.w=0);this.F[this.w]=a;this.w++;return a};N.prototype.va=function(a){return this.F[B.k.ab(a)]};N.prototype.clear=function(){this.w=0};B.k.readCache=function(){return new N};B.e={};B.e.decoder={};function na(a){this.ia=a}B.e.decoder.tag=function(a){return new na(a)};B.e.decoder.La=function(a){return a&&a instanceof na};B.e.decoder.pb=function(a){switch(a){case "_":case "s":case "?":case "i":case "d":case "b":case "'":case "array":case "map":return!0}return!1};
function O(a){this.options=a||{};this.h={};for(var b in this.ba.h)this.h[b]=this.ba.h[b];for(b in this.options.handlers){if(B.e.decoder.pb(b))throw Error('Cannot override handler for ground type "'+b+'"');this.h[b]=this.options.handlers[b]}this.ha=null!=this.options.preferStrings?this.options.preferStrings:this.ba.ha;this.ua=null!=this.options.preferBuffers?this.options.preferBuffers:this.ba.ua;this.ma=this.options.defaultHandler||this.ba.ma;this.J=this.options.mapBuilder;this.V=this.options.arrayBuilder}
O.prototype.ba={h:{_:function(){return null},"?":function(a){return B.types.Ya(a)},b:function(a,b){return ia(a,b)},i:function(a){return B.types.Ja(a)},n:function(a){return B.types.Da(a)},d:function(a){return B.types.ib(a)},f:function(a){return ha(a)},c:function(a){return B.types.$a(a)},":":function(a){return B.types.keyword(a)},$:function(a){return B.types.symbol(a)},r:function(a){return ja(a)},z:function(a){return B.types.tb(a)},"'":function(a){return a},m:function(a){return B.types.date(a)},t:function(a){return B.types.wb(a)},
u:function(a){return B.types.uuid(a)},set:function(a){return B.types.set(a)},list:function(a){return B.types.list(a)},link:function(a){return B.types.link(a)},cmap:function(a){return B.types.map(a,!1)}},ma:function(a,b){return B.types.K(a,b)},ha:!0,ua:!0};
O.prototype.B=function(a,b,d,e){if(null==a)return null;switch(typeof a){case "string":return B.k.Ka(a,d)?(a=oa(this,a),b&&b.write(a,d),b=a):b=B.k.nb(a)?b.va(a,d):oa(this,a),b;case "object":if(B.g.isArray(a))if("^ "===a[0])if(this.J)if(a.length<2*B.types.ka+1&&this.J.fromArray){e=[];for(d=1;d<a.length;d+=2)e.push(this.B(a[d],b,!0,!1)),e.push(this.B(a[d+1],b,!1,!1));b=this.J.fromArray(e,a)}else{e=this.J.init(a);for(d=1;d<a.length;d+=2)e=this.J.add(e,this.B(a[d],b,!0,!1),this.B(a[d+1],b,!1,!1),a);b=
this.J.finalize(e,a)}else{e=[];for(d=1;d<a.length;d+=2)e.push(this.B(a[d],b,!0,!1)),e.push(this.B(a[d+1],b,!1,!1));b=B.types.map(e,!1)}else b=pa(this,a,b,d,e);else{d=B.g.N(a);var f=d[0];e=1==d.length?this.B(f,b,!1,!1):null;if(B.e.decoder.La(e))a=a[f],d=this.h[e.ia],b=null!=d?d(this.B(a,b,!1,!0),this):B.types.K(e.ia,this.B(a,b,!1,!1));else if(this.J)if(d.length<2*B.types.ka&&this.J.fromArray){var g=[];for(e=0;e<d.length;e++)f=d[e],g.push(this.B(f,b,!0,!1)),g.push(this.B(a[f],b,!1,!1));b=this.J.fromArray(g,
a)}else{g=this.J.init(a);for(e=0;e<d.length;e++)f=d[e],g=this.J.add(g,this.B(f,b,!0,!1),this.B(a[f],b,!1,!1),a);b=this.J.finalize(g,a)}else{g=[];for(e=0;e<d.length;e++)f=d[e],g.push(this.B(f,b,!0,!1)),g.push(this.B(a[f],b,!1,!1));b=B.types.map(g,!1)}}return b}return a};O.prototype.decode=O.prototype.B;
function pa(a,b,d,e,f){if(f){var g=[];for(f=0;f<b.length;f++)g.push(a.B(b[f],d,e,!1));return g}g=d&&d.w;if(2===b.length&&"string"===typeof b[0]&&(f=a.B(b[0],d,!1,!1),B.e.decoder.La(f)))return b=b[1],g=a.h[f.ia],null!=g?g=g(a.B(b,d,e,!0),a):B.types.K(f.ia,a.B(b,d,e,!1));d&&g!=d.w&&(d.w=g);if(a.V){if(32>=b.length&&a.V.fromArray){g=[];for(f=0;f<b.length;f++)g.push(a.B(b[f],d,e,!1));return a.V.fromArray(g,b)}g=a.V.init();for(f=0;f<b.length;f++)g=a.V.add(g,a.B(b[f],d,e,!1),b);return a.V.finalize(g,b)}g=
[];for(f=0;f<b.length;f++)g.push(a.B(b[f],d,e,!1));return g}function oa(a,b){if(b.charAt(0)===B.l.D){var d=b.charAt(1);if(d===B.l.D||d===B.l.Z||d===B.l.Ba)return b.substring(1);if(d===B.l.Wa)return B.e.decoder.tag(b.substring(2));var e=a.h[d];return null==e?a.ma(d,b.substring(2)):e(b.substring(2),a)}return b}B.e.decoder.decoder=function(a){return new O(a)};B.e.reader={};function qa(a){this.decoder=new O(a)}function P(a,b){this.ub=a;this.options=b||{};this.F=this.options.cache?this.options.cache:new N}P.prototype.va=function(a){var b=this.F;a=this.ub.decoder.B(JSON.parse(a),b);this.F.clear();return a};P.prototype.read=P.prototype.va;B.h={};B.h.Fa=0;B.h.la="transit$guid$"+B.g.randomUUID();B.h.Oa=function(a){if(null==a)return"null";if(a===String)return"string";if(a===Boolean)return"boolean";if(a===Number)return"number";if(a===Array)return"array";if(a===Object)return"map";var b=a[B.h.la];null==b&&("undefined"!=typeof Object.defineProperty?(b=++B.h.Fa,Object.defineProperty(a,B.h.la,{value:b,enumerable:!1})):a[B.h.la]=b=++B.h.Fa);return b};B.h.constructor=function(a){return null==a?null:a.constructor};
B.h.W=function(a,b){for(var d=a.toString(),e=d.length;e<b;e++)d="0"+d;return d};B.h.stringableKeys=function(a){a=B.g.N(a);for(var b=0;b<a.length;b++);return!0};function Q(){}Q.prototype.tag=function(){return"_"};Q.prototype.rep=function(){return null};Q.prototype.C=function(){return"null"};function R(){}R.prototype.tag=function(){return"s"};R.prototype.rep=function(a){return a};R.prototype.C=function(a){return a};function S(){}S.prototype.tag=function(){return"i"};S.prototype.rep=function(a){return a};
S.prototype.C=function(a){return a.toString()};function T(){}T.prototype.tag=function(){return"i"};T.prototype.rep=function(a){return a.toString()};T.prototype.C=function(a){return a.toString()};function U(){}U.prototype.tag=function(){return"?"};U.prototype.rep=function(a){return a};U.prototype.C=function(a){return a.toString()};function V(){}V.prototype.tag=function(){return"array"};V.prototype.rep=function(a){return a};V.prototype.C=function(){return null};function W(){}W.prototype.tag=function(){return"map"};
W.prototype.rep=function(a){return a};W.prototype.C=function(){return null};function ra(){}ra.prototype.tag=function(){return"t"};ra.prototype.rep=function(a){return a.getUTCFullYear()+"-"+B.h.W(a.getUTCMonth()+1,2)+"-"+B.h.W(a.getUTCDate(),2)+"T"+B.h.W(a.getUTCHours(),2)+":"+B.h.W(a.getUTCMinutes(),2)+":"+B.h.W(a.getUTCSeconds(),2)+"."+B.h.W(a.getUTCMilliseconds(),3)+"Z"};ra.prototype.C=function(a,b){return b.rep(a)};function X(){}X.prototype.tag=function(){return"m"};X.prototype.rep=function(a){return a.valueOf()};
X.prototype.C=function(a){return a.valueOf().toString()};X.prototype.Ga=function(){return new ra};function sa(){}sa.prototype.tag=function(){return"u"};sa.prototype.rep=function(a){return a.toString()};sa.prototype.C=function(a){return a.toString()};function ta(){}ta.prototype.tag=function(){return":"};ta.prototype.rep=function(a){return a.name};ta.prototype.C=function(a,b){return b.rep(a)};function ua(){}ua.prototype.tag=function(){return"$"};ua.prototype.rep=function(a){return a.name};
ua.prototype.C=function(a,b){return b.rep(a)};function va(){}va.prototype.tag=function(a){return a.tag};va.prototype.rep=function(a){return a.rep};va.prototype.C=function(){return null};function wa(){}wa.prototype.tag=function(){return"set"};wa.prototype.rep=function(a){var b=[];a.forEach(function(a){b.push(a)});return B.types.K("array",b)};wa.prototype.C=function(){return null};function xa(){}xa.prototype.tag=function(){return"map"};xa.prototype.rep=function(a){return a};xa.prototype.C=function(){return null};
function ya(){}ya.prototype.tag=function(){return"map"};ya.prototype.rep=function(a){return a};ya.prototype.C=function(){return null};function za(){}za.prototype.tag=function(){return"b"};za.prototype.rep=function(a){return a.toString("base64")};za.prototype.C=function(){return null};function Aa(){}Aa.prototype.tag=function(){return"b"};Aa.prototype.rep=function(a){return B.g.Xa(a)};Aa.prototype.C=function(){return null};
B.h.bb=function(a){a.set(null,new Q);a.set(String,new R);a.set(Number,new S);a.set(c,new T);a.set(Boolean,new U);a.set(Array,new V);a.set(Object,new W);a.set(Date,new X);a.set(G,new sa);a.set(E,new ta);a.set(F,new ua);a.set(C,new va);a.set(L,new wa);a.set(K,new xa);a.set(J,new ya);"undefined"!=typeof Buffer&&a.set(Buffer,new za);"undefined"!=typeof Uint8Array&&a.set(Uint8Array,new Aa)};function Y(){this.h={};B.h.bb(this)}
Y.prototype.get=function(a){var b=null,b="string"===typeof a?this.h[a]:this.h[B.h.Oa(a)];return null!=b?b:this.h["default"]};Y.prototype.get=Y.prototype.get;B.h.vb=function(a){switch(a){case "null":case "string":case "boolean":case "number":case "array":case "map":return!1}return!0};Y.prototype.set=function(a,b){"string"===typeof a&&B.h.vb(a)?this.h[a]=b:this.h[B.h.Oa(a)]=b};B.e.writer={};B.e.writer.escape=function(a){if(0<a.length){var b=a.charAt(0);return b===B.l.D||b===B.l.Z||b===B.l.Ba?B.l.D+a:a}return a};
function Ba(a){this.O=a||{};this.ha=null!=this.O.preferStrings?this.O.preferStrings:!0;this.Ma=this.O.objectBuilder||null;this.h=new Y;if(a=this.O.handlers){if(B.g.isArray(a)||!a.forEach)throw Error('transit writer "handlers" option must be a map');var b=this;a.forEach(function(a,e){b.h.set(e,a)})}this.da=this.O.handlerForForeign;this.ja=this.O.unpack||function(a){return B.types.kb(a)&&null===a.o?a.v:!1};this.fa=this.O&&this.O.verbose||!1}
function Ca(a,b){var d=a.h.get(B.h.constructor(b));return null!=d?d:(d=b&&b.transitTag)?a.h.get(d):null}function Z(a,b,d,e,f){a=a+b+d;return f?f.write(a,e):a}B.e.writer.gb=function(a,b,d){var e=[];if(B.g.isArray(b))for(var f=0;f<b.length;f++)e.push(B.e.writer.s(a,b[f],!1,d));else b.forEach(function(b){e.push(B.e.writer.s(a,b,!1,d))});return e};B.e.writer.cb=function(a,b,d){return B.e.writer.gb(a,b,d)};B.e.writer.qa=function(a,b){if("string"!==typeof b){var d=Ca(a,b);return d&&1===d.tag(b).length}return!0};
B.e.writer.stringableKeys=function(a,b){var d=a.ja(b),e=!0;if(d){for(var f=0;f<d.length&&(e=B.e.writer.qa(a,d[f]),e);f+=2);return e}if(b.keys&&(d=b.keys(),f=null,d.next)){for(f=d.next();!f.done;){e=B.e.writer.qa(a,f.value);if(!e)break;f=d.next()}return e}if(b.forEach)return b.forEach(function(b,d){e=e&&B.e.writer.qa(a,d)}),e;throw Error("Cannot walk keys of object type "+B.h.constructor(b).name);};
B.e.writer.ob=function(a){if(a.constructor.transit$isObject)return!0;var b=a.constructor.toString(),b=b.substr(9),b=b.substr(0,b.indexOf("(")),b="Object"==b;"undefined"!=typeof Object.defineProperty?Object.defineProperty(a.constructor,"transit$isObject",{value:b,enumerable:!1}):a.constructor.transit$isObject=b;return b};
B.e.writer.fb=function(a,b,d){if(b.constructor===Object||null!=b.forEach||a.da&&B.e.writer.ob(b)){if(a.fa){if(null!=b.forEach)if(B.e.writer.stringableKeys(a,b)){var e={};b.forEach(function(b,f){e[B.e.writer.s(a,f,!0,!1)]=B.e.writer.s(a,b,!1,d)})}else{var f=a.ja(b),g=[],h=Z(B.l.S,"cmap","",!0,d);if(f)for(var k=0;k<f.length;k+=2)g.push(B.e.writer.s(a,f[k],!0,!1)),g.push(B.e.writer.s(a,f[k+1],!1,d));else b.forEach(function(b,e){g.push(B.e.writer.s(a,e,!0,!1));g.push(B.e.writer.s(a,b,!1,d))});e={};e[h]=
g}else for(e={},f=B.g.N(b),k=0;k<f.length;k++)e[B.e.writer.s(a,f[k],!0,!1)]=B.e.writer.s(a,b[f[k]],!1,d);return e}if(null!=b.forEach){if(B.e.writer.stringableKeys(a,b)){f=a.ja(b);e=["^ "];if(f)for(k=0;k<f.length;k+=2)e.push(B.e.writer.s(a,f[k],!0,d)),e.push(B.e.writer.s(a,f[k+1],!1,d));else b.forEach(function(b,f){e.push(B.e.writer.s(a,f,!0,d));e.push(B.e.writer.s(a,b,!1,d))});return e}f=a.ja(b);g=[];h=Z(B.l.S,"cmap","",!0,d);if(f)for(k=0;k<f.length;k+=2)g.push(B.e.writer.s(a,f[k],!0,d)),g.push(B.e.writer.s(a,
f[k+1],!1,d));else b.forEach(function(b,e){g.push(B.e.writer.s(a,e,!0,d));g.push(B.e.writer.s(a,b,!1,d))});return[h,g]}e=["^ "];f=B.g.N(b);for(k=0;k<f.length;k++)e.push(B.e.writer.s(a,f[k],!0,d)),e.push(B.e.writer.s(a,b[f[k]],!1,d));return e}if(null!=a.Ma)return a.Ma(b,function(b){return B.e.writer.s(a,b,!0,d)},function(b){return B.e.writer.s(a,b,!1,d)});k=B.h.constructor(b).name;f=Error("Cannot write "+k);f.data={ta:b,type:k};throw f;};
B.e.writer.hb=function(a,b,d,e){if(a.fa){var f={};f[Z(B.l.S,b,"",!0,e)]=B.e.writer.s(a,d,!1,e);return f}return[Z(B.l.S,b,"",!0,e),B.e.writer.s(a,d,!1,e)]};B.e.writer.eb=function(a,b,d,e,f,g,h){if(1===d.length){if("string"===typeof e)return Z(B.l.D,d,e,g,h);if(g||a.ha){(e=a.fa&&b.Ga())?(d=e.tag(f),e=e.C(f,e)):e=b.C(f,b);if(null!==e)return Z(B.l.D,d,e,g,h);b=Error('Tag "'+d+'" cannot be encoded as string');b.data={tag:d,rep:e,ta:f};throw b;}}return B.e.writer.hb(a,d,e,h)};
B.e.writer.s=function(a,b,d,e){var f=Ca(a,b)||(a.da?a.da(b,a.h):null),g=f?f.tag(b):null,h=f?f.rep(b):null;if(null!=f&&null!=g)switch(g){case "_":return d?Z(B.l.D,"_","",d,e):null;case "s":return Z("","",B.e.writer.escape(h),d,e);case "?":return d?Z(B.l.D,"?",h.toString()[0],d,e):h;case "i":return Infinity===h?Z(B.l.D,"z","INF",d,e):-Infinity===h?Z(B.l.D,"z","-INF",d,e):isNaN(h)?Z(B.l.D,"z","NaN",d,e):d||"string"===typeof h||h instanceof c?Z(B.l.D,"i",h.toString(),d,e):h;case "d":return d?Z(h.D,"d",
h,d,e):h;case "b":return Z(B.l.D,"b",h,d,e);case "'":return a.fa?(b={},d=Z(B.l.S,"'","",!0,e),b[d]=B.e.writer.s(a,h,!1,e),a=b):a=[Z(B.l.S,"'","",!0,e),B.e.writer.s(a,h,!1,e)],a;case "array":return B.e.writer.cb(a,h,e);case "map":return B.e.writer.fb(a,h,e);default:return B.e.writer.eb(a,f,g,h,b,d,e)}else throw a=B.h.constructor(b).name,e=Error("Cannot write "+a),e.data={ta:b,type:a},e;};
B.e.writer.sb=function(a,b){var d=Ca(a,b)||(a.da?a.da(b,a.h):null);if(null!=d)return 1===d.tag(b).length?B.types.quoted(b):b;var d=B.h.constructor(b).name,e=Error("Cannot write "+d);e.data={ta:b,type:d};throw e;};B.e.writer.qb=function(a,b,d,e){return JSON.stringify(B.e.writer.s(a,B.e.writer.sb(a,b),d,e))};function $(a,b){this.aa=a;this.options=b||{};this.F=!1===this.options.cache?null:this.options.cache?this.options.cache:new M}$.prototype.rb=function(){return this.aa};$.prototype.marshaller=$.prototype.rb;
$.prototype.write=function(a,b){var d=null,d=b||{},e=d.asMapKey||!1,f=this.aa.fa?!1:this.F,d=!1===d.marshalTop?B.e.writer.s(this.aa,a,e,f):B.e.writer.qb(this.aa,a,e,f);null!=this.F&&this.F.clear();return d};$.prototype.write=$.prototype.write;$.prototype.register=function(a,b){this.aa.h.set(a,b)};$.prototype.register=$.prototype.register;B.reader=function(a,b){if("json"===a||"json-verbose"===a||null==a){var d=new qa(b);return new P(d,b)}throw Error("Cannot create reader of type "+a);};B.writer=function(a,b){if("json"===a||"json-verbose"===a||null==a){"json-verbose"===a&&(null==b&&(b={}),b.verbose=!0);var d=new Ba(b);return new $(d,b)}d=Error('Type must be "json"');d.data={type:a};throw d;};
B.makeWriteHandler=function(a){function b(){}b.prototype.tag=a.tag;b.prototype.rep=a.rep;b.prototype.C=a.stringRep;b.prototype.Ga=a.getVerboseHandler;return new b};B.makeBuilder=function(a){function b(){}b.prototype.init=a.init;b.prototype.add=a.add;b.prototype.finalize=a.finalize;b.prototype.fromArray=a.fromArray;return new b};B.date=B.types.date;B.integer=B.types.Ja;B.isInteger=B.types.isInteger;B.uuid=B.types.uuid;B.isUUID=B.types.isUUID;B.bigInt=B.types.Da;B.isBigInt=B.types.mb;B.bigDec=ha;
B.isBigDec=B.types.lb;B.keyword=B.types.keyword;B.isKeyword=B.types.isKeyword;B.symbol=B.types.symbol;B.isSymbol=B.types.isSymbol;B.binary=ia;B.isBinary=B.types.isBinary;B.uri=ja;B.isURI=B.types.isURI;B.map=B.types.map;B.isMap=B.types.isMap;B.set=B.types.set;B.isSet=B.types.isSet;B.list=B.types.list;B.isList=B.types.isList;B.quoted=B.types.quoted;B.isQuoted=B.types.isQuoted;B.tagged=B.types.K;B.isTaggedValue=B.types.isTaggedValue;B.link=B.types.link;B.isLink=B.types.isLink;B.hash=B.a.j;
B.hashMapLike=B.a.hashMapLike;B.hashMapLike=B.a.hashArrayLike;B.equals=B.a.equals;B.extendToEQ=B.a.extendToEQ;B.mapToObject=function(a){var b={};a.forEach(function(a,e){if("string"!==typeof e)throw Error("Cannot convert map with non-string keys");b[e]=a});return b};B.decoder=B.e.decoder.decoder;B.readCache=B.k.readCache;B.writeCache=B.k.writeCache;B.UUIDfromString=B.types.UUIDfromString;B.randomUUID=B.types.randomUUID;B.stringableKeys=B.e.writer.stringableKeys;define("transit",[],function(){return B});})();
