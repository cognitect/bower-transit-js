// transit-js 0.8.746
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
else if("function"==c&&"undefined"==typeof a.call)return"object";return c};function b(a,c){this.A=a|0;this.p=c|0}var ba={};function l(a){if(-128<=a&&128>a){var c=ba[a];if(c)return c}c=new b(a|0,0>a?-1:0);-128<=a&&128>a&&(ba[a]=c);return c}function m(a){return isNaN(a)||!isFinite(a)?n:a<=-ca?p:a+1>=ca?da:0>a?r(m(-a)):new b(a%s|0,a/s|0)}function t(a,c){return new b(a,c)}
function u(a,c){if(0==a.length)throw Error("number format error: empty string");var d=c||10;if(2>d||36<d)throw Error("radix out of range: "+d);if("-"==a.charAt(0))return r(u(a.substring(1),d));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);for(var e=m(Math.pow(d,8)),f=n,g=0;g<a.length;g+=8){var h=Math.min(8,a.length-g),k=parseInt(a.substring(g,g+h),d);8>h?(h=m(Math.pow(d,h)),f=f.multiply(h).add(m(k))):(f=f.multiply(e),f=f.add(m(k)))}return f}
var s=4294967296,ca=s*s/2,n=l(0),v=l(1),ea=l(-1),da=t(-1,2147483647),p=t(0,-2147483648),fa=l(16777216);function w(a){return a.p*s+(0<=a.A?a.A:s+a.A)}
b.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(y(this))return"0";if(0>this.p){if(this.equals(p)){var c=m(a),d=z(this,c),c=A(d.multiply(c),this);return d.toString(a)+c.A.toString(a)}return"-"+r(this).toString(a)}for(var d=m(Math.pow(a,6)),c=this,e="";;){var f=z(c,d),g=A(c,f.multiply(d)).A.toString(a),c=f;if(y(c))return g+e;for(;6>g.length;)g="0"+g;e=""+g+e}};function y(a){return 0==a.p&&0==a.A}
b.prototype.equals=function(a){return this.p==a.p&&this.A==a.A};b.prototype.compare=function(a){if(this.equals(a))return 0;var c=0>this.p,d=0>a.p;return c&&!d?-1:!c&&d?1:0>A(this,a).p?-1:1};function r(a){return a.equals(p)?p:t(~a.A,~a.p).add(v)}b.prototype.add=function(a){var c=this.p>>>16,d=this.p&65535,e=this.A>>>16,f=a.p>>>16,g=a.p&65535,h=a.A>>>16,k;k=0+((this.A&65535)+(a.A&65535));a=0+(k>>>16);a+=e+h;e=0+(a>>>16);e+=d+g;d=0+(e>>>16);d=d+(c+f)&65535;return t((a&65535)<<16|k&65535,d<<16|e&65535)};
function A(a,c){return a.add(r(c))}
b.prototype.multiply=function(a){if(y(this)||y(a))return n;if(this.equals(p))return 1==(a.A&1)?p:n;if(a.equals(p))return 1==(this.A&1)?p:n;if(0>this.p)return 0>a.p?r(this).multiply(r(a)):r(r(this).multiply(a));if(0>a.p)return r(this.multiply(r(a)));if(0>this.compare(fa)&&0>a.compare(fa))return m(w(this)*w(a));var c=this.p>>>16,d=this.p&65535,e=this.A>>>16,f=this.A&65535,g=a.p>>>16,h=a.p&65535,k=a.A>>>16;a=a.A&65535;var D,q,x,ja;ja=0+f*a;x=0+(ja>>>16);x+=e*a;q=0+(x>>>16);x=(x&65535)+f*k;q+=x>>>16;
x&=65535;q+=d*a;D=0+(q>>>16);q=(q&65535)+e*k;D+=q>>>16;q&=65535;q+=f*h;D+=q>>>16;q&=65535;D=D+(c*a+d*k+e*h+f*g)&65535;return t(x<<16|ja&65535,D<<16|q)};
function z(a,c){if(y(c))throw Error("division by zero");if(y(a))return n;if(a.equals(p)){if(c.equals(v)||c.equals(ea))return p;if(c.equals(p))return v;var d;d=1;if(0==d)d=a;else{var e=a.p;d=32>d?t(a.A>>>d|e<<32-d,e>>d):t(e>>d-32,0<=e?0:-1)}d=z(d,c).shiftLeft(1);if(d.equals(n))return 0>c.p?v:ea;e=A(a,c.multiply(d));return d.add(z(e,c))}if(c.equals(p))return n;if(0>a.p)return 0>c.p?z(r(a),r(c)):r(z(r(a),c));if(0>c.p)return r(z(a,r(c)));for(var f=n,e=a;0<=e.compare(c);){d=Math.max(1,Math.floor(w(e)/
w(c)));for(var g=Math.ceil(Math.log(d)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),h=m(d),k=h.multiply(c);0>k.p||0<k.compare(e);)d-=g,h=m(d),k=h.multiply(c);y(h)&&(h=v);f=f.add(h);e=A(e,k)}return f}b.prototype.shiftLeft=function(a){a&=63;if(0==a)return this;var c=this.A;return 32>a?t(c<<a,this.p<<a|c>>>32-a):t(0,c<<a-32)};function ga(a,c){c&=63;if(0==c)return a;var d=a.p;return 32>c?t(a.A>>>c|d<<32-c,d>>>c):32==c?t(d,0):t(d>>>c-32,0)};var B={g:{}};B.g.N="undefined"!=typeof Object.keys?function(a){return Object.keys(a)}:function(a){var c=[],d=0,e;for(e in a)c[d++]=e;return c};B.g.isArray="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"===aa(a)};B.g.Da="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";B.g.Ma=function(a){return Math.round(Math.random()*a)};B.g.q=function(){return B.g.Ma(15).toString(16)};
B.g.randomUUID=function(){var a=(8|3&B.g.Ma(14)).toString(16);return B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+"-"+B.g.q()+B.g.q()+B.g.q()+B.g.q()+"-4"+B.g.q()+B.g.q()+B.g.q()+"-"+a+B.g.q()+B.g.q()+B.g.q()+"-"+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()+B.g.q()};
B.g.btoa=function(a){if("undefined"!=typeof btoa)return btoa(a);a=String(a);for(var c,d,e=0,f=B.g.Da,g="";a.charAt(e|0)||(f="=",e%1);g+=f.charAt(63&c>>8-e%1*8)){d=a.charCodeAt(e+=.75);if(255<d)throw Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");c=c<<8|d}return g};
B.g.atob=function(a){if("undefined"!=typeof atob)return atob(a);a=String(a).replace(/=+$/,"");if(1==a.length%4)throw Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var c=0,d,e,f=0,g="";e=a.charAt(f++);~e&&(d=c%4?64*d+e:e,c++%4)?g+=String.fromCharCode(255&d>>(-2*c&6)):0)e=B.g.Da.indexOf(e);return g};B.g.Wa=function(a){for(var c=0,d=a.length,e="",f=null;c<d;)f=a.subarray(c,Math.min(c+32768,d)),e+=String.fromCharCode.apply(null,f),c+=32768;return B.g.btoa(e)};
B.g.Pa=function(a){a=B.g.atob(a);for(var c=a.length,d=new Uint8Array(c),e=0;e<c;e++)d[e]=a.charCodeAt(e);return d};B.l={};B.l.D="~";B.l.Va="#";B.l.Z="^";B.l.Aa="`";B.l.S="~#";B.a={};B.a.ma="transit$hashCode$";B.a.Ga=1;B.a.equals=function(a,c){if(null==a)return null==c;if(a===c)return!0;if("object"===typeof a){if(B.g.isArray(a)){if(B.g.isArray(c)&&a.length===c.length){for(var d=0;d<a.length;d++)if(!B.a.equals(a[d],c[d]))return!1;return!0}return!1}if(a.G)return a.G(c);if(null!=c&&"object"===typeof c){if(c.G)return c.G(a);var d=0,e=B.g.N(c).length,f;for(f in a)if(a.hasOwnProperty(f)&&(d++,!c.hasOwnProperty(f)||!B.a.equals(a[f],c[f])))return!1;return d===e}}return!1};
B.a.na=function(a,c){return a^c+2654435769+(a<<6)+(a>>2)};B.a.va={};B.a.wa=0;B.a.Ua=256;B.a.ib=function(a){var c=B.a.va[a];if(null!=c)return c;for(var d=c=0;d<a.length;++d)c=31*c+a.charCodeAt(d),c%=4294967296;B.a.wa++;B.a.wa>=B.a.Ua&&(B.a.va={},B.a.wa=1);return B.a.va[a]=c};
B.a.hashMapLike=function(a){var c=0;if(null!=a.forEach)a.forEach(function(a,d){c=(c+(B.a.h(d)^B.a.h(a)))%4503599627370496});else for(var d=B.g.N(a),e=0;e<d.length;e++)var f=d[e],g=a[f],c=(c+(B.a.h(f)^B.a.h(g)))%4503599627370496;return c};B.a.hashArrayLike=function(a){var c=0;if(B.g.isArray(a))for(var d=0;d<a.length;d++)c=B.a.na(c,B.a.h(a[d]));else a.forEach&&a.forEach(function(a){c=B.a.na(c,B.a.h(a))});return c};
B.a.h=function(a){if(null==a)return 0;switch(typeof a){case "number":return a;case "boolean":return!0===a?1:0;case "string":return B.a.ib(a);case "function":var c=a[B.a.ma];c||(c=B.a.Ga,"undefined"!=typeof Object.defineProperty?Object.defineProperty(a,B.a.ma,{value:c,enumerable:!1}):a[B.a.ma]=c,B.a.Ga++);return c;default:return a instanceof Date?a.valueOf():B.g.isArray(a)?B.a.hashArrayLike(a):a.I?a.I():B.a.hashMapLike(a)}};B.a.extendToEQ=function(a,c){a.I=c.hashCode;a.G=c.equals;return a};B.types={};function C(a,c){this.tag=a;this.rep=c;this.h=-1}C.prototype.toString=function(){return"[TaggedValue: "+this.tag+", "+this.rep+"]"};C.prototype.L=function(a){return B.a.equals(this,a)};C.prototype.equiv=C.prototype.L;C.prototype.G=function(a){return a instanceof C?this.tag===a.tag&&B.a.equals(this.rep,a.rep):!1};C.prototype.I=function(){-1===this.h&&(this.h=B.a.na(B.a.h(this.tag),B.a.h(this.rep)));return this.h};B.types.K=function(a,c){return new C(a,c)};
B.types.isTaggedValue=function(a){return a instanceof C};B.types.wb=function(){return null};B.types.Xa=function(a){return"t"===a};B.types.Ra=u("9007199254740992");B.types.Sa=u("-9007199254740992");B.types.Ia=function(a){if("number"===typeof a||a instanceof b)return a;a=u(a,10);return 0<a.compare(B.types.Ra)||0>a.compare(B.types.Sa)?a:w(a)};b.prototype.L=function(a){return B.a.equals(this,a)};b.prototype.equiv=b.prototype.L;b.prototype.G=function(a){return a instanceof b&&this.equals(a)};
b.prototype.I=function(){return this.A};B.types.isInteger=function(a){return a instanceof b?!0:"number"===typeof a&&!isNaN(a)&&Infinity!==a&&parseFloat(a)===parseInt(a)};B.types.hb=function(a){return parseFloat(a)};B.types.Ca=function(a){return B.types.K("n",a)};B.types.lb=function(a){return a instanceof C&&"n"===a.tag};function ha(a){return B.types.K("f",a)}B.types.kb=function(a){return a instanceof C&&"f"===a.tag};B.types.Za=function(a){return a};function E(a){this.name=a;this.h=-1}
E.prototype.toString=function(){return":"+this.name};E.prototype.L=function(a){return B.a.equals(this,a)};E.prototype.equiv=E.prototype.L;E.prototype.G=function(a){return a instanceof E&&this.name==a.name};E.prototype.I=function(){-1===this.h&&(this.h=B.a.h(this.name));return this.h};B.types.keyword=function(a){return new E(a)};B.types.isKeyword=function(a){return a instanceof E};function F(a){this.name=a;this.h=-1}F.prototype.toString=function(){return"[Symbol: "+this.name+"]"};
F.prototype.L=function(a){return B.a.equals(this,a)};F.prototype.equiv=F.prototype.L;F.prototype.G=function(a){return a instanceof F&&this.name==a.name};F.prototype.I=function(){-1===this.h&&(this.h=B.a.h(this.name));return this.h};B.types.symbol=function(a){return new F(a)};B.types.isSymbol=function(a){return a instanceof F};
B.types.da=function(a,c,d){var e="";d=d||c+1;for(var f=8*(7-c),g=l(255).shiftLeft(f);c<d;c++,f-=8,g=ga(g,8)){var h=ga(t(a.A&g.A,a.p&g.p),f).toString(16);1==h.length&&(h="0"+h);e+=h}return e};function G(a,c){this.oa=a;this.qa=c;this.h=-1}G.prototype.toString=function(a){var c=this.oa,d=this.qa;a=""+(B.types.da(c,0,4)+"-");a+=B.types.da(c,4,6)+"-";a+=B.types.da(c,6,8)+"-";a+=B.types.da(d,0,2)+"-";return a+=B.types.da(d,2,8)};G.prototype.L=function(a){return B.a.equals(this,a)};G.prototype.equiv=G.prototype.L;
G.prototype.G=function(a){return a instanceof G&&this.oa.equals(a.oa)&&this.qa.equals(a.qa)};G.prototype.I=function(){-1===this.h&&(this.h=B.a.h(this.toString()));return this.h};
B.types.UUIDfromString=function(a){a=a.replace(/-/g,"");for(var c=null,d=null,e=d=0,f=24,g=0,g=d=0,f=24;8>g;g+=2,f-=8)d|=parseInt(a.substring(g,g+2),16)<<f;e=0;g=8;for(f=24;16>g;g+=2,f-=8)e|=parseInt(a.substring(g,g+2),16)<<f;c=t(e,d);d=0;g=16;for(f=24;24>g;g+=2,f-=8)d|=parseInt(a.substring(g,g+2),16)<<f;e=0;for(f=g=24;32>g;g+=2,f-=8)e|=parseInt(a.substring(g,g+2),16)<<f;d=t(e,d);return new G(c,d)};B.types.uuid=function(a){return B.types.UUIDfromString(a)};
B.types.isUUID=function(a){return a instanceof G};B.types.date=function(a){a="number"===typeof a?a:parseInt(a,10);return new Date(a)};B.types.ub=function(a){return new Date(a)};Date.prototype.G=function(a){return a instanceof Date?this.valueOf()===a.valueOf():!1};Date.prototype.I=function(){return this.valueOf()};function ia(a,c){return c&&!1===c.ta||"undefined"==typeof Buffer?"undefined"!=typeof Uint8Array?B.g.Pa(a):B.types.K("b",a):new Buffer(a,"base64")}
B.types.isBinary=function(a){return"undefined"!=typeof Buffer&&a instanceof Buffer?!0:"undefined"!=typeof Uint8Array&&a instanceof Uint8Array?!0:a instanceof C&&"b"===a.tag};function ka(a){return B.types.K("r",a)}B.types.isURI=function(a){return a instanceof C&&"r"===a.tag};B.types.T=0;B.types.fa=1;B.types.ya=2;function H(a,c){this.H=a;this.type=c||B.types.T;this.w=0}
H.prototype.next=function(){if(this.w<this.H.length){var a=null,a=this.type===B.types.T?this.H[this.w]:this.type===B.types.fa?this.H[this.w+1]:[this.H[this.w],this.H[this.w+1]],a={value:a,done:!1};this.w+=2;return a}return{value:null,done:!0}};H.prototype.next=H.prototype.next;function I(a,c){this.map=a;this.type=c||B.types.T;this.keys=la(this.map);this.w=0;this.O=null;this.M=0}
I.prototype.next=function(){if(this.w<this.map.size){null!=this.O&&this.M<this.O.length||(this.O=this.map.map[this.keys[this.w]],this.M=0);var a=null,a=this.type===B.types.T?this.O[this.M]:this.type===B.types.fa?this.O[this.M+1]:[this.O[this.M],this.O[this.M+1]],a={value:a,done:!1};this.w++;this.M+=2;return a}return{value:null,done:!0}};I.prototype.next=I.prototype.next;
B.types.ra=function(a,c){if((c instanceof J||c instanceof K)&&a.size===c.size){for(var d in a.map)for(var e=a.map[d],f=0;f<e.length;f+=2)if(!B.a.equals(e[f+1],c.get(e[f])))return!1;return!0}if(null!=c&&"object"===typeof c&&(d=B.g.N(c),e=d.length,a.size===e)){for(f=0;f<e;f++){var g=d[f];if(!a.has(g)||!B.a.equals(c[g],a.get(g)))return!1}return!0}return!1};B.types.ja=8;B.types.xa=32;B.types.Oa=32;function K(a){this.v=a;this.o=null;this.h=-1;this.size=a.length/2;this.Ba=0}K.prototype.toString=function(){return"[TransitArrayMap]"};
function ma(a){if(a.o)throw Error("Invalid operation, already converted");if(a.size<B.types.ja)return!1;a.Ba++;return a.Ba>B.types.Oa?(a.o=B.types.map(a.v,!1,!0),a.v=[],!0):!1}K.prototype.clear=function(){this.h=-1;this.o?this.o.clear():this.v=[];this.size=0};K.prototype.clear=K.prototype.clear;K.prototype.keys=function(){return this.o?this.o.keys():new H(this.v,B.types.T)};K.prototype.keys=K.prototype.keys;
K.prototype.P=function(){if(this.o)return this.o.P();for(var a=[],c=0,d=0;d<this.v.length;c++,d+=2)a[c]=this.v[d];return a};K.prototype.keySet=K.prototype.P;K.prototype.H=function(){return this.o?this.o.H():new H(this.v,B.types.ya)};K.prototype.entries=K.prototype.H;K.prototype.R=function(){return this.o?this.o.R():new H(this.v,B.types.fa)};K.prototype.values=K.prototype.R;K.prototype.forEach=function(a){if(this.o)this.o.forEach(a);else for(var c=0;c<this.v.length;c+=2)a(this.v[c+1],this.v[c])};
K.prototype.forEach=K.prototype.forEach;K.prototype.get=function(a,c){if(this.o)return this.o.get(a);if(ma(this))return this.get(a);for(var d=0;d<this.v.length;d+=2)if(B.a.equals(this.v[d],a))return this.v[d+1];return c};K.prototype.get=K.prototype.get;K.prototype.has=function(a){if(this.o)return this.o.has(a);if(ma(this))return this.has(a);for(var c=0;c<this.v.length;c+=2)if(B.a.equals(this.v[c],a))return!0;return!1};K.prototype.has=K.prototype.has;
K.prototype.set=function(a,c){this.h=-1;if(this.o)this.o.set(a,c),this.size=this.o.size;else{for(var d=0;d<this.v.length;d+=2)if(B.a.equals(this.v[d],a)){this.v[d+1]=c;return}this.v.push(a);this.v.push(c);this.size++;this.size>B.types.xa&&(this.o=B.types.map(this.v,!1,!0),this.v=null)}};K.prototype.set=K.prototype.set;
K.prototype["delete"]=function(a){this.h=-1;if(this.o)this.o["delete"](a),this.size=this.o.size;else for(var c=0;c<this.v.length;c+=2)if(B.a.equals(this.v[c],a)){this.v.splice(c,2);this.size--;break}};K.prototype.I=function(){if(this.o)return this.o.I();-1===this.h&&(this.h=B.a.hashMapLike(this));return this.h};K.prototype.G=function(a){return this.o?B.types.ra(this.o,a):B.types.ra(this,a)};function J(a,c,d){this.map=c||{};this.U=a||[];this.size=d||0;this.h=-1}J.prototype.toString=function(){return"[TransitMap]"};
J.prototype.clear=function(){this.h=-1;this.map={};this.U=[];this.size=0};J.prototype.clear=J.prototype.clear;function la(a){return null!=a.U?a.U:B.g.N(a.map)}J.prototype["delete"]=function(a){this.h=-1;this.U=null;for(var c=B.a.h(a),d=this.map[c],e=0;e<d.length;e+=2)if(B.a.equals(a,d[e])){d.splice(e,2);0===d.length&&delete this.map[c];this.size--;break}};J.prototype.H=function(){return new I(this,B.types.ya)};J.prototype.entries=J.prototype.H;
J.prototype.forEach=function(a){for(var c=la(this),d=0;d<c.length;d++)for(var e=this.map[c[d]],f=0;f<e.length;f+=2)a(e[f+1],e[f],this)};J.prototype.forEach=J.prototype.forEach;J.prototype.get=function(a,c){var d=B.a.h(a),d=this.map[d];if(null!=d)for(var e=0;e<d.length;e+=2){if(B.a.equals(a,d[e]))return d[e+1]}else return c};J.prototype.get=J.prototype.get;J.prototype.has=function(a){var c=B.a.h(a),c=this.map[c];if(null!=c)for(var d=0;d<c.length;d+=2)if(B.a.equals(a,c[d]))return!0;return!1};
J.prototype.has=J.prototype.has;J.prototype.keys=function(){return new I(this,B.types.T)};J.prototype.keys=J.prototype.keys;J.prototype.P=function(){for(var a=la(this),c=[],d=0;d<a.length;d++)for(var e=this.map[a[d]],f=0;f<e.length;f+=2)c.push(e[f]);return c};J.prototype.keySet=J.prototype.P;
J.prototype.set=function(a,c){this.h=-1;var d=B.a.h(a),e=this.map[d];if(null==e)this.U&&this.U.push(d),this.map[d]=[a,c],this.size++;else{for(var d=!0,f=0;f<e.length;f+=2)if(B.a.equals(c,e[f])){d=!1;e[f]=c;break}d&&(e.push(a),e.push(c),this.size++)}};J.prototype.set=J.prototype.set;J.prototype.R=function(){return new I(this,B.types.fa)};J.prototype.values=J.prototype.R;J.prototype.I=function(){-1===this.h&&(this.h=B.a.hashMapLike(this));return this.h};
J.prototype.G=function(a){return B.types.ra(this,a)};
B.types.map=function(a,c,d){a=a||[];c=!1===c?c:!0;if((!0!==d||!d)&&a.length<=2*B.types.xa){if(c){var e=a;a=[];for(c=0;c<e.length;c+=2){var f=!1;for(d=0;d<a.length;d+=2)if(B.a.equals(a[d],e[c])){a[d+1]=e[c+1];f=!0;break}f||(a.push(e[c]),a.push(e[c+1]))}}return new K(a)}var e={},f=[],g=0;for(c=0;c<a.length;c+=2){d=B.a.h(a[c]);var h=e[d];if(null==h)f.push(d),e[d]=[a[c],a[c+1]],g++;else{var k=!0;for(d=0;d<h.length;d+=2)if(B.a.equals(h[d],a[c])){h[d+1]=a[c+1];k=!1;break}k&&(h.push(a[c]),h.push(a[c+1]),
g++)}}return new J(f,e,g)};B.types.jb=function(a){return a instanceof K};B.types.isMap=function(a){return a instanceof K||a instanceof J};function L(a){this.map=a;this.size=a.size}L.prototype.toString=function(){return"[TransitSet]"};L.prototype.add=function(a){this.map.set(a,a);this.size=this.map.size};L.prototype.add=L.prototype.add;L.prototype.clear=function(){this.map=new J;this.size=0};L.prototype.clear=L.prototype.clear;L.prototype["delete"]=function(a){this.map["delete"](a);this.size=this.map.size};
L.prototype.H=function(){return this.map.H()};L.prototype.entries=L.prototype.H;L.prototype.forEach=function(a){var c=this;this.map.forEach(function(d,e){a(e,c)})};L.prototype.forEach=L.prototype.forEach;L.prototype.has=function(a){return this.map.has(a)};L.prototype.has=L.prototype.has;L.prototype.keys=function(){return this.map.keys()};L.prototype.keys=L.prototype.keys;L.prototype.P=function(){return this.map.P()};L.prototype.keySet=L.prototype.P;L.prototype.R=function(){return this.map.R()};
L.prototype.values=L.prototype.R;L.prototype.G=function(a){if(a instanceof L){if(this.size===a.size)return B.a.equals(this.map,a.map)}else return!1};L.prototype.I=function(){return B.a.h(this.map)};B.types.set=function(a){a=a||[];for(var c={},d=[],e=0,f=0;f<a.length;f++){var g=B.a.h(a[f]),h=c[g];if(null==h)d.push(g),c[g]=[a[f],a[f]],e++;else{for(var g=!0,k=0;k<h.length;k+=2)if(B.a.equals(h[k],a[f])){g=!1;break}g&&(h.push(a[f]),h.push(a[f]),e++)}}return new L(new J(d,c,e))};
B.types.isSet=function(a){return a instanceof L};B.types.quoted=function(a){return B.types.K("'",a)};B.types.isQuoted=function(a){return a instanceof C&&"'"===a.tag};B.types.list=function(a){return B.types.K("list",a)};B.types.isList=function(a){return a instanceof B.types.vb&&"list"===a.tag};B.types.link=function(a){return B.types.K("link",a)};B.types.isLink=function(a){return a instanceof C&&"link"===a.tag};
B.types.rb=function(a){switch(a){case "-INF":return-Infinity;case "INF":return Infinity;case "NaN":return NaN;default:throw Error("Invalid special double value "+a);}};B.k={};B.k.Ta=3;B.k.X=48;B.k.Y=44;B.k.za=B.k.Y*B.k.Y;B.k.Qa=4096;B.k.Ja=function(a,c){if(a.length>B.k.Ta){if(c)return!0;var d=a.charAt(1);return a.charAt(0)===B.l.D?":"===d||"$"===d||"#"===d:!1}return!1};B.k.Ha=function(a){var c=Math.floor(a/B.k.Y);a=String.fromCharCode(a%B.k.Y+B.k.X);return 0===c?B.l.Z+a:B.l.Z+String.fromCharCode(c+B.k.X)+a};function M(){this.Ya=this.ca=this.w=0;this.F={}}
M.prototype.write=function(a,c){if(B.k.Ja(a,c)){this.Ya===B.k.Qa?(this.clear(),this.ca=0,this.F={}):this.w===B.k.za&&this.clear();var d=this.F[a];return null==d?(this.F[a]=[B.k.Ha(this.w),this.ca],this.w++,a):d[1]!=this.ca?(d[1]=this.ca,d[0]=B.k.Ha(this.w),this.w++,a):d[0]}return a};M.prototype.clear=function(){this.w=0;this.ca++};B.k.writeCache=function(){return new M};B.k.mb=function(a){return a.charAt(0)===B.l.Z&&" "!==a.charAt(1)};
B.k.$a=function(a){return 2===a.length?a.charCodeAt(1)-B.k.X:(a.charCodeAt(1)-B.k.X)*B.k.Y+(a.charCodeAt(2)-B.k.X)};function N(){this.w=0;this.F=[]}N.prototype.write=function(a){this.w==B.k.za&&(this.w=0);this.F[this.w]=a;this.w++;return a};N.prototype.ua=function(a){return this.F[B.k.$a(a)]};N.prototype.clear=function(){this.w=0};B.k.readCache=function(){return new N};B.e={};B.e.decoder={};function na(a){this.ha=a}B.e.decoder.tag=function(a){return new na(a)};B.e.decoder.Ka=function(a){return a&&a instanceof na};B.e.decoder.nb=function(a){switch(a){case "_":case "s":case "?":case "i":case "d":case "b":case "'":case "array":case "map":return!0}return!1};
function O(a){this.options=a||{};this.j={};for(var c in this.ba.j)this.j[c]=this.ba.j[c];for(c in this.options.handlers){if(B.e.decoder.nb(c))throw Error('Cannot override handler for ground type "'+c+'"');this.j[c]=this.options.handlers[c]}this.ga=null!=this.options.preferStrings?this.options.preferStrings:this.ba.ga;this.ta=null!=this.options.preferBuffers?this.options.preferBuffers:this.ba.ta;this.la=this.options.defaultHandler||this.ba.la;this.J=this.options.mapBuilder;this.V=this.options.arrayBuilder}
O.prototype.ba={j:{_:function(){return null},"?":function(a){return B.types.Xa(a)},b:function(a,c){return ia(a,c)},i:function(a){return B.types.Ia(a)},n:function(a){return B.types.Ca(a)},d:function(a){return B.types.hb(a)},f:function(a){return ha(a)},c:function(a){return B.types.Za(a)},":":function(a){return B.types.keyword(a)},$:function(a){return B.types.symbol(a)},r:function(a){return ka(a)},z:function(a){return B.types.rb(a)},"'":function(a){return a},m:function(a){return B.types.date(a)},t:function(a){return B.types.ub(a)},
u:function(a){return B.types.uuid(a)},set:function(a){return B.types.set(a)},list:function(a){return B.types.list(a)},link:function(a){return B.types.link(a)},cmap:function(a){return B.types.map(a,!1)}},la:function(a,c){return B.types.K(a,c)},ga:!0,ta:!0};
O.prototype.B=function(a,c,d,e){if(null==a)return null;switch(typeof a){case "string":return B.k.Ja(a,d)?(a=oa(this,a),c&&c.write(a,d),c=a):c=B.k.mb(a)?c.ua(a,d):oa(this,a),c;case "object":if(B.g.isArray(a))if("^ "===a[0])if(this.J)if(a.length<2*B.types.ja+1&&this.J.fromArray){e=[];for(d=1;d<a.length;d+=2)e.push(this.B(a[d],c,!0,!1)),e.push(this.B(a[d+1],c,!1,!1));c=this.J.fromArray(e,a)}else{e=this.J.init(a);for(d=1;d<a.length;d+=2)e=this.J.add(e,this.B(a[d],c,!0,!1),this.B(a[d+1],c,!1,!1),a);c=
this.J.finalize(e,a)}else{e=[];for(d=1;d<a.length;d+=2)e.push(this.B(a[d],c,!0,!1)),e.push(this.B(a[d+1],c,!1,!1));c=B.types.map(e,!1)}else c=pa(this,a,c,d,e);else{d=B.g.N(a);var f=d[0];e=1==d.length?this.B(f,c,!1,!1):null;if(B.e.decoder.Ka(e))a=a[f],d=this.j[e.ha],c=null!=d?d(this.B(a,c,!1,!0),this):B.types.K(e.ha,this.B(a,c,!1,!1));else if(this.J)if(d.length<2*B.types.ja&&this.J.fromArray){var g=[];for(e=0;e<d.length;e++)f=d[e],g.push(this.B(f,c,!0,!1)),g.push(this.B(a[f],c,!1,!1));c=this.J.fromArray(g,
a)}else{g=this.J.init(a);for(e=0;e<d.length;e++)f=d[e],g=this.J.add(g,this.B(f,c,!0,!1),this.B(a[f],c,!1,!1),a);c=this.J.finalize(g,a)}else{g=[];for(e=0;e<d.length;e++)f=d[e],g.push(this.B(f,c,!0,!1)),g.push(this.B(a[f],c,!1,!1));c=B.types.map(g,!1)}}return c}return a};O.prototype.decode=O.prototype.B;
function pa(a,c,d,e,f){if(f){var g=[];for(f=0;f<c.length;f++)g.push(a.B(c[f],d,e,!1));return g}g=d&&d.w;if(2===c.length&&"string"===typeof c[0]&&(f=a.B(c[0],d,!1,!1),B.e.decoder.Ka(f)))return c=c[1],g=a.j[f.ha],null!=g?g=g(a.B(c,d,e,!0),a):B.types.K(f.ha,a.B(c,d,e,!1));d&&g!=d.w&&(d.w=g);if(a.V){if(32>=c.length&&a.V.fromArray){g=[];for(f=0;f<c.length;f++)g.push(a.B(c[f],d,e,!1));return a.V.fromArray(g,c)}g=a.V.init();for(f=0;f<c.length;f++)g=a.V.add(g,a.B(c[f],d,e,!1),c);return a.V.finalize(g,c)}g=
[];for(f=0;f<c.length;f++)g.push(a.B(c[f],d,e,!1));return g}function oa(a,c){if(c.charAt(0)===B.l.D){var d=c.charAt(1);if(d===B.l.D||d===B.l.Z||d===B.l.Aa)return c.substring(1);if(d===B.l.Va)return B.e.decoder.tag(c.substring(2));var e=a.j[d];return null==e?a.la(d,c.substring(2)):e(c.substring(2),a)}return c}B.e.decoder.decoder=function(a){return new O(a)};B.e.reader={};function qa(a){this.decoder=new O(a)}function P(a,c){this.sb=a;this.options=c||{};this.F=this.options.cache?this.options.cache:new N}P.prototype.ua=function(a){var c=this.F;a=this.sb.decoder.B(JSON.parse(a),c);this.F.clear();return a};P.prototype.read=P.prototype.ua;B.j={};B.j.Ea=0;B.j.ka="transit$guid$"+B.g.randomUUID();B.j.Na=function(a){if(null==a)return"null";if(a===String)return"string";if(a===Boolean)return"boolean";if(a===Number)return"number";if(a===Array)return"array";if(a===Object)return"map";var c=a[B.j.ka];null==c&&("undefined"!=typeof Object.defineProperty?(c=++B.j.Ea,Object.defineProperty(a,B.j.ka,{value:c,enumerable:!1})):a[B.j.ka]=c=++B.j.Ea);return c};B.j.constructor=function(a){return null==a?null:a.constructor};
B.j.W=function(a,c){for(var d=a.toString(),e=d.length;e<c;e++)d="0"+d;return d};B.j.stringableKeys=function(a){a=B.g.N(a);for(var c=0;c<a.length;c++);return!0};function Q(){}Q.prototype.tag=function(){return"_"};Q.prototype.rep=function(){return null};Q.prototype.C=function(){return"null"};function R(){}R.prototype.tag=function(){return"s"};R.prototype.rep=function(a){return a};R.prototype.C=function(a){return a};function S(){}S.prototype.tag=function(){return"i"};S.prototype.rep=function(a){return a};
S.prototype.C=function(a){return a.toString()};function T(){}T.prototype.tag=function(){return"i"};T.prototype.rep=function(a){return a.toString()};T.prototype.C=function(a){return a.toString()};function U(){}U.prototype.tag=function(){return"?"};U.prototype.rep=function(a){return a};U.prototype.C=function(a){return a.toString()};function V(){}V.prototype.tag=function(){return"array"};V.prototype.rep=function(a){return a};V.prototype.C=function(){return null};function W(){}W.prototype.tag=function(){return"map"};
W.prototype.rep=function(a){return a};W.prototype.C=function(){return null};function X(){}X.prototype.tag=function(){return"t"};X.prototype.rep=function(a){return a.getUTCFullYear()+"-"+B.j.W(a.getUTCMonth()+1,2)+"-"+B.j.W(a.getUTCDate(),2)+"T"+B.j.W(a.getUTCHours(),2)+":"+B.j.W(a.getUTCMinutes(),2)+":"+B.j.W(a.getUTCSeconds(),2)+"."+B.j.W(a.getUTCMilliseconds(),3)+"Z"};X.prototype.C=function(a,c){return c.rep(a)};function Y(){}Y.prototype.tag=function(){return"m"};Y.prototype.rep=function(a){return a.valueOf()};
Y.prototype.C=function(a){return a.valueOf().toString()};Y.prototype.Fa=function(){return new X};function ra(){}ra.prototype.tag=function(){return"u"};ra.prototype.rep=function(a){return a.toString()};ra.prototype.C=function(a){return a.toString()};function sa(){}sa.prototype.tag=function(){return":"};sa.prototype.rep=function(a){return a.name};sa.prototype.C=function(a,c){return c.rep(a)};function ta(){}ta.prototype.tag=function(){return"$"};ta.prototype.rep=function(a){return a.name};
ta.prototype.C=function(a,c){return c.rep(a)};function ua(){}ua.prototype.tag=function(a){return a.tag};ua.prototype.rep=function(a){return a.rep};ua.prototype.C=function(){return null};function va(){}va.prototype.tag=function(){return"set"};va.prototype.rep=function(a){var c=[];a.forEach(function(a){c.push(a)});return B.types.K("array",c)};va.prototype.C=function(){return null};function wa(){}wa.prototype.tag=function(){return"map"};wa.prototype.rep=function(a){return a};wa.prototype.C=function(){return null};
function xa(){}xa.prototype.tag=function(){return"map"};xa.prototype.rep=function(a){return a};xa.prototype.C=function(){return null};function ya(){}ya.prototype.tag=function(){return"b"};ya.prototype.rep=function(a){return a.toString("base64")};ya.prototype.C=function(){return null};function za(){}za.prototype.tag=function(){return"b"};za.prototype.rep=function(a){return B.g.Wa(a)};za.prototype.C=function(){return null};
B.j.ab=function(a){a.set(null,new Q);a.set(String,new R);a.set(Number,new S);a.set(b,new T);a.set(Boolean,new U);a.set(Array,new V);a.set(Object,new W);a.set(Date,new Y);a.set(G,new ra);a.set(E,new sa);a.set(F,new ta);a.set(C,new ua);a.set(L,new va);a.set(K,new wa);a.set(J,new xa);"undefined"!=typeof Buffer&&a.set(Buffer,new ya);"undefined"!=typeof Uint8Array&&a.set(Uint8Array,new za)};function Aa(){this.j={};B.j.ab(this)}
Aa.prototype.get=function(a){var c=null,c="string"===typeof a?this.j[a]:this.j[B.j.Na(a)];return null!=c?c:this.j["default"]};B.j.tb=function(a){switch(a){case "null":case "string":case "boolean":case "number":case "array":case "map":return!1}return!0};Aa.prototype.set=function(a,c){"string"===typeof a&&B.j.tb(a)?this.j[a]=c:this.j[B.j.Na(a)]=c};B.e.writer={};B.e.writer.escape=function(a){if(0<a.length){var c=a.charAt(0);return c===B.l.D||c===B.l.Z||c===B.l.Aa?B.l.D+a:a}return a};
function Ba(a){this.Q=a||{};this.ga=null!=this.Q.preferStrings?this.Q.preferStrings:!0;this.La=this.Q.objectBuilder||null;this.j=new Aa;if(a=this.Q.handlers){if(B.g.isArray(a)||!a.forEach)throw Error('transit writer "handlers" option must be a map');var c=this;a.forEach(function(a,e){c.j.set(e,a)})}this.ia=this.Q.unpack||function(a){return B.types.jb(a)&&null===a.o?a.v:!1};this.ea=this.Q&&this.Q.verbose||!1}
function Ca(a,c){var d=a.j.get(B.j.constructor(c));return null!=d?d:(d=c&&c.transitTag)?a.j.get(d):null}function Z(a,c,d,e,f){a=a+c+d;return f?f.write(a,e):a}B.e.writer.fb=function(a,c,d){var e=[];if(B.g.isArray(c))for(var f=0;f<c.length;f++)e.push(B.e.writer.s(a,c[f],!1,d));else c.forEach(function(c){e.push(B.e.writer.s(a,c,!1,d))});return e};B.e.writer.bb=function(a,c,d){return B.e.writer.fb(a,c,d)};B.e.writer.pa=function(a,c){if("string"!==typeof c){var d=Ca(a,c);return d&&1===d.tag(c).length}return!0};
B.e.writer.stringableKeys=function(a,c){var d=a.ia(c),e=!0;if(d){for(var f=0;f<d.length&&(e=B.e.writer.pa(a,d[f]),e);f+=2);return e}if(c.keys&&(d=c.keys(),d.next)){for(step=d.next();!step.done;){e=B.e.writer.pa(a,step.value);if(!e)break;step=d.next()}return e}if(c.forEach)return c.forEach(function(c,d){e=e&&B.e.writer.pa(a,d)}),e;throw Error("Cannot walk keys of object type "+B.j.constructor(c).name);};
B.e.writer.eb=function(a,c,d){if(c.constructor===Object||null!=c.forEach){if(a.ea){if(null!=c.forEach)if(B.e.writer.stringableKeys(a,c)){var e={};c.forEach(function(c,f){e[B.e.writer.s(a,f,!0,!1)]=B.e.writer.s(a,c,!1,d)})}else{var f=a.ia(c),g=[],h=Z(B.l.S,"cmap","",!0,d);if(f)for(var k=0;k<f.length;k+=2)g.push(B.e.writer.s(a,f[k],!0,!1)),g.push(B.e.writer.s(a,f[k+1],!1,d));else c.forEach(function(c,e){g.push(B.e.writer.s(a,e,!0,!1));g.push(B.e.writer.s(a,c,!1,d))});e={};e[h]=g}else for(e={},f=B.g.N(c),
k=0;k<f.length;k++)e[B.e.writer.s(a,f[k],!0,!1)]=B.e.writer.s(a,c[f[k]],!1,d);return e}if(null!=c.forEach){if(B.e.writer.stringableKeys(a,c)){f=a.ia(c);e=["^ "];if(f)for(k=0;k<f.length;k+=2)e.push(B.e.writer.s(a,f[k],!0,d)),e.push(B.e.writer.s(a,f[k+1],!1,d));else c.forEach(function(c,f){e.push(B.e.writer.s(a,f,!0,d));e.push(B.e.writer.s(a,c,!1,d))});return e}f=a.ia(c);g=[];h=Z(B.l.S,"cmap","",!0,d);if(f)for(k=0;k<f.length;k+=2)g.push(B.e.writer.s(a,f[k],!0,d)),g.push(B.e.writer.s(a,f[k+1],!1,d));
else c.forEach(function(c,e){g.push(B.e.writer.s(a,e,!0,d));g.push(B.e.writer.s(a,c,!1,d))});return[h,g]}e=["^ "];f=B.g.N(c);for(k=0;k<f.length;k++)e.push(B.e.writer.s(a,f[k],!0,d)),e.push(B.e.writer.s(a,c[f[k]],!1,d));return e}if(null!=a.La)return a.La(c,function(c){return B.e.writer.s(a,c,!0,d)},function(c){return B.e.writer.s(a,c,!1,d)});k=B.j.constructor(c).name;f=Error("Cannot write "+k);f.data={sa:c,type:k};throw f;};
B.e.writer.gb=function(a,c,d,e){if(a.ea){var f={};f[Z(B.l.S,c,"",!0,e)]=B.e.writer.s(a,d,!1,e);return f}return[Z(B.l.S,c,"",!0,e),B.e.writer.s(a,d,!1,e)]};B.e.writer.cb=function(a,c,d,e,f,g,h){if(1===d.length){if("string"===typeof e)return Z(B.l.D,d,e,g,h);if(g||a.ga){(e=a.ea&&c.Fa())?(d=e.tag(f),e=e.C(f,e)):e=c.C(f,c);if(null!==e)return Z(B.l.D,d,e,g,h);c=Error('Tag "'+d+'" cannot be encoded as string');c.data={tag:d,rep:e,sa:f};throw c;}}return B.e.writer.gb(a,d,e,h)};
B.e.writer.s=function(a,c,d,e){var f=Ca(a,c),g=f?f.tag(c):null,h=f?f.rep(c):null;if(null!=f&&null!=g)switch(g){case "_":return d?Z(B.l.D,"_","",d,e):null;case "s":return Z("","",B.e.writer.escape(h),d,e);case "?":return d?Z(B.l.D,"?",h.toString()[0],d,e):h;case "i":return Infinity===h?Z(B.l.D,"z","INF",d,e):-Infinity===h?Z(B.l.D,"z","-INF",d,e):isNaN(h)?Z(B.l.D,"z","NaN",d,e):d||"string"===typeof h||h instanceof b?Z(B.l.D,"i",h.toString(),d,e):h;case "d":return d?Z(h.D,"d",h,d,e):h;case "b":return Z(B.l.D,
"b",h,d,e);case "'":return a.ea?(c={},d=Z(B.l.S,"'","",!0,e),c[d]=B.e.writer.s(a,h,!1,e),a=c):a=[Z(B.l.S,"'","",!0,e),B.e.writer.s(a,h,!1,e)],a;case "array":return B.e.writer.bb(a,h,e);case "map":return B.e.writer.eb(a,h,e);default:return B.e.writer.cb(a,f,g,h,c,d,e)}else throw a=B.j.constructor(c).name,e=Error("Cannot write "+a),e.data={sa:c,type:a},e;};
B.e.writer.qb=function(a,c){var d=Ca(a,c);if(null!=d)return 1===d.tag(c).length?B.types.quoted(c):c;var d=B.j.constructor(c).name,e=Error("Cannot write "+d);e.data={sa:c,type:d};throw e;};B.e.writer.ob=function(a,c,d,e){return JSON.stringify(B.e.writer.s(a,B.e.writer.qb(a,c),d,e))};function $(a,c){this.aa=a;this.options=c||{};this.F=!1===this.options.cache?null:this.options.cache?this.options.cache:new M}$.prototype.pb=function(){return this.aa};$.prototype.marshaller=$.prototype.pb;
$.prototype.write=function(a,c){var d=null,d=c||{},e=d.asMapKey||!1,f=this.aa.ea?!1:this.F,d=!1===d.marshalTop?B.e.writer.s(this.aa,a,e,f):B.e.writer.ob(this.aa,a,e,f);null!=this.F&&this.F.clear();return d};$.prototype.write=$.prototype.write;$.prototype.register=function(a,c){this.aa.j.set(a,c)};$.prototype.register=$.prototype.register;B.reader=function(a,c){if("json"===a||"json-verbose"===a||null==a){var d=new qa(c);return new P(d,c)}throw Error("Cannot create reader of type "+a);};B.writer=function(a,c){if("json"===a||"json-verbose"===a||null==a){"json-verbose"===a&&(null==c&&(c={}),c.verbose=!0);var d=new Ba(c);return new $(d,c)}d=Error('Type must be "json"');d.data={type:a};throw d;};
B.makeWriteHandler=function(a){function c(){}c.prototype.tag=a.tag;c.prototype.rep=a.rep;c.prototype.C=a.stringRep;c.prototype.Fa=a.getVerboseHandler;return new c};B.makeBuilder=function(a){function c(){}c.prototype.init=a.init;c.prototype.add=a.add;c.prototype.finalize=a.finalize;c.prototype.fromArray=a.fromArray;return new c};B.date=B.types.date;B.integer=B.types.Ia;B.isInteger=B.types.isInteger;B.uuid=B.types.uuid;B.isUUID=B.types.isUUID;B.bigInt=B.types.Ca;B.isBigInt=B.types.lb;B.bigDec=ha;
B.isBigDec=B.types.kb;B.keyword=B.types.keyword;B.isKeyword=B.types.isKeyword;B.symbol=B.types.symbol;B.isSymbol=B.types.isSymbol;B.binary=ia;B.isBinary=B.types.isBinary;B.uri=ka;B.isURI=B.types.isURI;B.map=B.types.map;B.isMap=B.types.isMap;B.set=B.types.set;B.isSet=B.types.isSet;B.list=B.types.list;B.isList=B.types.isList;B.quoted=B.types.quoted;B.isQuoted=B.types.isQuoted;B.tagged=B.types.K;B.isTaggedValue=B.types.isTaggedValue;B.link=B.types.link;B.isLink=B.types.isLink;B.hash=B.a.h;
B.hashMapLike=B.a.hashMapLike;B.hashMapLike=B.a.hashArrayLike;B.equals=B.a.equals;B.extendToEQ=B.a.extendToEQ;B.mapToObject=function(a){var c={};a.forEach(function(a,e){if("string"!==typeof e)throw Error("Cannot convert map with non-string keys");c[e]=a});return c};B.decoder=B.e.decoder.decoder;B.readCache=B.k.readCache;B.writeCache=B.k.writeCache;B.UUIDfromString=B.types.UUIDfromString;B.randomUUID=B.types.randomUUID;B.stringableKeys=B.e.writer.stringableKeys;define("transit",[],function(){return B});})();
