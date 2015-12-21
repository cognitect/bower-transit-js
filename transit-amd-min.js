// transit-js 0.8.846
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
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};function c(a,b){this.H=a|0;this.B=b|0}var ba,ca,da,ea,fa,ga,ha={};function k(a){if(-128<=a&&128>a){var b=ha[a];if(b)return b}b=new c(a|0,0>a?-1:0);-128<=a&&128>a&&(ha[a]=b);return b}function m(a){isNaN(a)||!isFinite(a)?a=n():a<=-ia?a=q():a+1>=ia?(ea||(ea=r(-1,2147483647)),a=ea):a=0>a?t(m(-a)):new c(a%u|0,a/u|0);return a}function r(a,b){return new c(a,b)}
function v(a,b){if(0==a.length)throw Error("number format error: empty string");var d=b||10;if(2>d||36<d)throw Error("radix out of range: "+d);if("-"==a.charAt(0))return t(v(a.substring(1),d));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);for(var e=m(Math.pow(d,8)),f=n(),g=0;g<a.length;g+=8){var h=Math.min(8,a.length-g),l=parseInt(a.substring(g,g+h),d);8>h?(h=m(Math.pow(d,h)),f=w(f,h).add(m(l))):(f=w(f,e),f=f.add(m(l)))}return f}var u=4294967296,ia=u*u/2;
function n(){ba||(ba=k(0));return ba}function x(){ca||(ca=k(1));return ca}function ja(){da||(da=k(-1));return da}function q(){fa||(fa=r(0,-2147483648));return fa}function ka(){ga||(ga=k(16777216));return ga}function y(a){return a.B*u+(0<=a.H?a.H:u+a.H)}
c.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(z(this))return"0";if(0>this.B){if(this.equals(q())){var b=m(a),d=A(this,b),b=C(w(d,b),this);return d.toString(a)+b.H.toString(a)}return"-"+t(this).toString(a)}for(var d=m(Math.pow(a,6)),b=this,e="";;){var f=A(b,d),g=C(b,w(f,d)).H.toString(a),b=f;if(z(b))return g+e;for(;6>g.length;)g="0"+g;e=""+g+e}};function z(a){return 0==a.B&&0==a.H}c.prototype.equals=function(a){return this.B==a.B&&this.H==a.H};
function D(a,b){if(a.equals(b))return 0;var d=0>a.B,e=0>b.B;return d&&!e?-1:!d&&e?1:0>C(a,b).B?-1:1}function t(a){return a.equals(q())?q():r(~a.H,~a.B).add(x())}c.prototype.add=function(a){var b=this.B>>>16,d=this.B&65535,e=this.H>>>16,f=a.B>>>16,g=a.B&65535,h=a.H>>>16,l;l=0+((this.H&65535)+(a.H&65535));a=0+(l>>>16);a+=e+h;e=0+(a>>>16);e+=d+g;d=0+(e>>>16);d=d+(b+f)&65535;return r((a&65535)<<16|l&65535,d<<16|e&65535)};function C(a,b){return a.add(t(b))}
function w(a,b){if(z(a)||z(b))return n();if(a.equals(q()))return 1==(b.H&1)?q():n();if(b.equals(q()))return 1==(a.H&1)?q():n();if(0>a.B)return 0>b.B?w(t(a),t(b)):t(w(t(a),b));if(0>b.B)return t(w(a,t(b)));var d=ka();if(d=0>D(a,d))d=ka(),d=0>D(b,d);if(d)return m(y(a)*y(b));var d=a.B>>>16,e=a.B&65535,f=a.H>>>16,g=a.H&65535,h=b.B>>>16,l=b.B&65535,va=b.H>>>16,V=b.H&65535,F,p,B,wa;wa=0+g*V;B=0+(wa>>>16);B+=f*V;p=0+(B>>>16);B=(B&65535)+g*va;p+=B>>>16;B&=65535;p+=e*V;F=0+(p>>>16);p=(p&65535)+f*va;F+=p>>>
16;p&=65535;p+=g*l;F+=p>>>16;p&=65535;F=F+(d*V+e*va+f*l+g*h)&65535;return r(B<<16|wa&65535,F<<16|p)}
function A(a,b){if(z(b))throw Error("division by zero");if(z(a))return n();if(a.equals(q())){if(b.equals(x())||b.equals(ja()))return q();if(b.equals(q()))return x();var d;d=1;if(0==d)d=a;else{var e=a.B;d=32>d?r(a.H>>>d|e<<32-d,e>>d):r(e>>d-32,0<=e?0:-1)}d=la(A(d,b),1);if(d.equals(n()))return 0>b.B?x():ja();e=C(a,w(b,d));return d.add(A(e,b))}if(b.equals(q()))return n();if(0>a.B)return 0>b.B?A(t(a),t(b)):t(A(t(a),b));if(0>b.B)return t(A(a,t(b)));for(var f=n(),e=a;0<=D(e,b);){d=Math.max(1,Math.floor(y(e)/
y(b)));for(var g=Math.ceil(Math.log(d)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),h=m(d),l=w(h,b);0>l.B||0<D(l,e);)d-=g,h=m(d),l=w(h,b);z(h)&&(h=x());f=f.add(h);e=C(e,l)}return f}function la(a,b){b&=63;if(0==b)return a;var d=a.H;return 32>b?r(d<<b,a.B<<b|d>>>32-b):r(0,d<<b-32)}function ma(a,b){b&=63;if(0==b)return a;var d=a.B;return 32>b?r(a.H>>>b|d<<32-b,d>>>b):32==b?r(d,0):r(d>>>b-32,0)};var E={w:{}};E.w.L="~";E.w.Sa="#";E.w.Z="^";E.w.wa="`";E.w.T="~#";E.v={};E.v.Qa=3;E.v.X=48;E.v.Y=44;E.v.va=E.v.Y*E.v.Y;E.v.Na=4096;E.v.Fa=function(a,b){if(a.length>E.v.Qa){if(b)return!0;var d=a.charAt(1);return a.charAt(0)===E.w.L?":"===d||"$"===d||"#"===d:!1}return!1};E.v.Da=function(a){var b=Math.floor(a/E.v.Y);a=String.fromCharCode(a%E.v.Y+E.v.X);return 0===b?E.w.Z+a:E.w.Z+String.fromCharCode(b+E.v.X)+a};function G(){this.a=this.G=0;this.s={}}
G.prototype.write=function(a,b){if(E.v.Fa(a,b)){0===E.v.Na?(this.clear(),this.a=0,this.s={}):this.G===E.v.va&&this.clear();var d=this.s[a];return null==d?(this.s[a]=[E.v.Da(this.G),this.a],this.G++,a):d[1]!=this.a?(d[1]=this.a,d[0]=E.v.Da(this.G),this.G++,a):d[0]}return a};G.prototype.clear=function(){this.G=0;this.a++};E.v.writeCache=function(){return new G};E.v.ib=function(a){return a.charAt(0)===E.w.Z&&" "!==a.charAt(1)};
E.v.Wa=function(a){return 2===a.length?a.charCodeAt(1)-E.v.X:(a.charCodeAt(1)-E.v.X)*E.v.Y+(a.charCodeAt(2)-E.v.X)};function H(){this.G=0;this.a=[]}H.prototype.write=function(a){this.G==E.v.va&&(this.G=0);this.a[this.G]=a;this.G++;return a};H.prototype.qa=function(a){return this.a[E.v.Wa(a)]};H.prototype.clear=function(){this.G=0};E.v.readCache=function(){return new H};E.j={};E.j.R="undefined"!=typeof Object.keys?function(a){return Object.keys(a)}:function(a){var b=[],d=0,e;for(e in a)b[d++]=e;return b};E.j.isArray="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"===aa(a)};E.j.za="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";E.j.Ja=function(a){return Math.round(Math.random()*a)};E.j.C=function(){return E.j.Ja(15).toString(16)};
E.j.randomUUID=function(){var a=(8|3&E.j.Ja(14)).toString(16);return E.j.C()+E.j.C()+E.j.C()+E.j.C()+E.j.C()+E.j.C()+E.j.C()+E.j.C()+"-"+E.j.C()+E.j.C()+E.j.C()+E.j.C()+"-4"+E.j.C()+E.j.C()+E.j.C()+"-"+a+E.j.C()+E.j.C()+E.j.C()+"-"+E.j.C()+E.j.C()+E.j.C()+E.j.C()+E.j.C()+E.j.C()+E.j.C()+E.j.C()+E.j.C()+E.j.C()+E.j.C()+E.j.C()};
E.j.btoa=function(a){if("undefined"!=typeof btoa)return btoa(a);a=String(a);for(var b,d,e=0,f=E.j.za,g="";a.charAt(e|0)||(f="=",e%1);g+=f.charAt(63&b>>8-e%1*8)){d=a.charCodeAt(e+=.75);if(255<d)throw Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");b=b<<8|d}return g};
E.j.atob=function(a){if("undefined"!=typeof atob)return atob(a);a=String(a).replace(/=+$/,"");if(1==a.length%4)throw Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var b=0,d,e,f=0,g="";e=a.charAt(f++);~e&&(d=b%4?64*d+e:e,b++%4)?g+=String.fromCharCode(255&d>>(-2*b&6)):0)e=E.j.za.indexOf(e);return g};E.j.Ta=function(a){for(var b=0,d=a.length,e="",f=null;b<d;)f=a.subarray(b,Math.min(b+32768,d)),e+=String.fromCharCode.apply(null,f),b+=32768;return E.j.btoa(e)};
E.j.Ma=function(a){a=E.j.atob(a);for(var b=a.length,d=new Uint8Array(b),e=0;e<b;e++)d[e]=a.charCodeAt(e);return d};E.g={};E.g.ka="transit$hashCode$";E.g.Ca=1;E.g.equals=function(a,b){if(null==a)return null==b;if(a===b)return!0;if("object"===typeof a){if(E.j.isArray(a)){if(E.j.isArray(b)&&a.length===b.length){for(var d=0;d<a.length;d++)if(!E.g.equals(a[d],b[d]))return!1;return!0}return!1}if(a.M)return a.M(b);if(null!=b&&"object"===typeof b){if(b.M)return b.M(a);var d=0,e=E.j.R(b).length,f;for(f in a)if(a.hasOwnProperty(f)&&(d++,!b.hasOwnProperty(f)||!E.g.equals(a[f],b[f])))return!1;return d===e}}return!1};
E.g.la=function(a,b){return a^b+2654435769+(a<<6)+(a>>2)};E.g.ra={};E.g.sa=0;E.g.Ra=256;E.g.eb=function(a){var b=E.g.ra[a];if(null!=b)return b;for(var d=b=0;d<a.length;++d)b=31*b+a.charCodeAt(d),b%=4294967296;E.g.sa++;E.g.sa>=E.g.Ra&&(E.g.ra={},E.g.sa=1);return E.g.ra[a]=b};
E.g.hashMapLike=function(a){var b=0;if(null!=a.forEach)a.forEach(function(a,d){b=(b+(E.g.o(d)^E.g.o(a)))%4503599627370496});else for(var d=E.j.R(a),e=0;e<d.length;e++)var f=d[e],g=a[f],b=(b+(E.g.o(f)^E.g.o(g)))%4503599627370496;return b};E.g.hashArrayLike=function(a){var b=0;if(E.j.isArray(a))for(var d=0;d<a.length;d++)b=E.g.la(b,E.g.o(a[d]));else a.forEach&&a.forEach(function(a){b=E.g.la(b,E.g.o(a))});return b};
E.g.o=function(a){if(null==a)return 0;switch(typeof a){case "number":return a;case "boolean":return!0===a?1:0;case "string":return E.g.eb(a);case "function":var b=a[E.g.ka];if(b)return b;b=E.g.Ca;"undefined"!=typeof Object.defineProperty?Object.defineProperty(a,E.g.ka,{value:b,enumerable:!1}):a[E.g.ka]=b;E.g.Ca++;return b;default:return a instanceof Date?a.valueOf():E.j.isArray(a)?E.g.hashArrayLike(a):a.N?a.N():E.g.hashMapLike(a)}};E.g.extendToEQ=function(a,b){a.N=b.hashCode;a.M=b.equals;return a};E.types={};"undefined"!=typeof Symbol?E.types.U=Symbol.iterator:E.types.U="@@iterator";function I(a,b){this.tag=a;this.rep=b;this.o=-1}I.prototype.toString=function(){return"[TaggedValue: "+this.tag+", "+this.rep+"]"};I.prototype.a=function(a){return E.g.equals(this,a)};I.prototype.equiv=I.prototype.a;I.prototype.M=function(a){return a instanceof I?this.tag===a.tag&&E.g.equals(this.rep,a.rep):!1};I.prototype.N=function(){-1===this.o&&(this.o=E.g.la(E.g.o(this.tag),E.g.o(this.rep)));return this.o};
E.types.O=function(a,b){return new I(a,b)};E.types.isTaggedValue=function(a){return a instanceof I};E.types.sb=function(){return null};E.types.Ua=function(a){return"t"===a};E.types.Oa=v("9007199254740991");E.types.Pa=v("-9007199254740991");E.types.Ea=function(a){if("number"===typeof a)return a;if(a instanceof c)return a;a=v(a,10);return 0<D(a,E.types.Oa)||0>D(a,E.types.Pa)?a:y(a)};c.prototype.a=function(a){return E.g.equals(this,a)};c.prototype.equiv=c.prototype.a;
c.prototype.M=function(a){return a instanceof c&&this.equals(a)};c.prototype.N=function(){return this.H};E.types.isInteger=function(a){return a instanceof c?!0:"number"===typeof a&&!isNaN(a)&&Infinity!==a&&parseFloat(a)===parseInt(a,10)};E.types.cb=function(a){return parseFloat(a)};E.types.ya=function(a){return E.types.O("n",a)};E.types.hb=function(a){return a instanceof I&&"n"===a.tag};E.types.xa=function(a){return E.types.O("f",a)};E.types.gb=function(a){return a instanceof I&&"f"===a.tag};
E.types.Va=function(a){return a};function J(a){this.I=a;this.o=-1}J.prototype.toString=function(){return":"+this.I};J.prototype.namespace=function(){var a=this.I.indexOf("/");return-1!=a?this.I.substring(0,a):null};J.prototype.name=function(){var a=this.I.indexOf("/");return-1!=a?this.I.substring(a+1,this.I.length):this.I};J.prototype.a=function(a){return E.g.equals(this,a)};J.prototype.equiv=J.prototype.a;J.prototype.M=function(a){return a instanceof J&&this.I==a.I};
J.prototype.N=function(){-1===this.o&&(this.o=E.g.o(this.I));return this.o};E.types.keyword=function(a){return new J(a)};E.types.isKeyword=function(a){return a instanceof J};function K(a){this.I=a;this.o=-1}K.prototype.namespace=function(){var a=this.I.indexOf("/");return-1!=a?this.I.substring(0,a):null};K.prototype.name=function(){var a=this.I.indexOf("/");return-1!=a?this.I.substring(a+1,this.I.length):this.I};K.prototype.toString=function(){return this.I};
K.prototype.a=function(a){return E.g.equals(this,a)};K.prototype.equiv=K.prototype.a;K.prototype.M=function(a){return a instanceof K&&this.I==a.I};K.prototype.N=function(){-1===this.o&&(this.o=E.g.o(this.I));return this.o};E.types.symbol=function(a){return new K(a)};E.types.isSymbol=function(a){return a instanceof K};E.types.ba=function(a,b,d){var e="";d=d||b+1;for(var f=8*(7-b),g=la(k(255),f);b<d;b++,f-=8,g=ma(g,8)){var h=ma(r(a.H&g.H,a.B&g.B),f).toString(16);1==h.length&&(h="0"+h);e+=h}return e};
function L(a,b){this.a=a;this.s=b;this.o=-1}L.prototype.toString=function(){var a,b=this.a,d=this.s;a=""+(E.types.ba(b,0,4)+"-");a+=E.types.ba(b,4,6)+"-";a+=E.types.ba(b,6,8)+"-";a+=E.types.ba(d,0,2)+"-";return a+=E.types.ba(d,2,8)};L.prototype.K=function(a){return E.g.equals(this,a)};L.prototype.equiv=L.prototype.K;L.prototype.M=function(a){return a instanceof L&&this.a.equals(a.a)&&this.s.equals(a.s)};L.prototype.N=function(){-1===this.o&&(this.o=E.g.o(this.toString()));return this.o};
E.types.UUIDfromString=function(a){a=a.replace(/-/g,"");for(var b=null,d=null,e=d=0,f=24,g=0,g=d=0,f=24;8>g;g+=2,f-=8)d|=parseInt(a.substring(g,g+2),16)<<f;e=0;g=8;for(f=24;16>g;g+=2,f-=8)e|=parseInt(a.substring(g,g+2),16)<<f;b=r(e,d);d=0;g=16;for(f=24;24>g;g+=2,f-=8)d|=parseInt(a.substring(g,g+2),16)<<f;e=0;for(f=g=24;32>g;g+=2,f-=8)e|=parseInt(a.substring(g,g+2),16)<<f;d=r(e,d);return new L(b,d)};E.types.uuid=function(a){return E.types.UUIDfromString(a)};
E.types.isUUID=function(a){return a instanceof L};E.types.date=function(a){a="number"===typeof a?a:parseInt(a,10);return new Date(a)};E.types.qb=function(a){return new Date(a)};Date.prototype.M=function(a){return a instanceof Date?this.valueOf()===a.valueOf():!1};Date.prototype.N=function(){return this.valueOf()};E.types.binary=function(a,b){return b&&!1===b.pa||"undefined"==typeof Buffer?"undefined"!=typeof Uint8Array?E.j.Ma(a):E.types.O("b",a):new Buffer(a,"base64")};
E.types.isBinary=function(a){return"undefined"!=typeof Buffer&&a instanceof Buffer?!0:"undefined"!=typeof Uint8Array&&a instanceof Uint8Array?!0:a instanceof I&&"b"===a.tag};E.types.uri=function(a){return E.types.O("r",a)};E.types.isURI=function(a){return a instanceof I&&"r"===a.tag};E.types.V=0;E.types.da=1;E.types.ua=2;function M(a,b){this.a=a;this.type=b||E.types.V;this.G=0}
M.prototype.next=function(){if(this.G<this.a.length){var a=null;this.type===E.types.V?a=this.a[this.G]:this.type===E.types.da?a=this.a[this.G+1]:a=[this.a[this.G],this.a[this.G+1]];a={value:a,done:!1};this.G+=2;return a}return{value:null,done:!0}};M.prototype.next=M.prototype.next;M.prototype[E.types.U]=function(){return this};function N(a,b){this.map=a;this.type=b||E.types.V;this.keys=na(this.map);this.G=0;this.s=null;this.a=0}
N.prototype.next=function(){if(this.G<this.map.size){null!=this.s&&this.a<this.s.length||(this.s=this.map.map[this.keys[this.G]],this.a=0);var a=null;this.type===E.types.V?a=this.s[this.a]:this.type===E.types.da?a=this.s[this.a+1]:a=[this.s[this.a],this.s[this.a+1]];a={value:a,done:!1};this.G++;this.a+=2;return a}return{value:null,done:!0}};N.prototype.next=N.prototype.next;N.prototype[E.types.U]=function(){return this};
E.types.na=function(a,b){if(a instanceof O&&E.types.isMap(b)){if(a.size!==b.size)return!1;for(var d in a.map)for(var e=a.map[d],f=0;f<e.length;f+=2)if(!E.g.equals(e[f+1],b.get(e[f])))return!1;return!0}if(a instanceof P&&E.types.isMap(b)){if(a.size!==b.size)return!1;d=a.D;for(f=0;f<d.length;f+=2)if(!E.g.equals(d[f+1],b.get(d[f])))return!1;return!0}if(null!=b&&"object"===typeof b&&(f=E.j.R(b),d=f.length,a.size===d)){for(e=0;e<d;e++){var g=f[e];if(!a.has(g)||!E.g.equals(b[g],a.get(g)))return!1}return!0}return!1};
E.types.ha=8;E.types.ta=32;E.types.La=32;E.types.print=function(a){return null==a?"null":"array"==aa(a)?"["+a.toString()+"]":"string"==typeof a?'"'+a+'"':a.toString()};E.types.Ia=function(a){var b=0,d="TransitMap {";a.forEach(function(e,f){d+=E.types.print(f)+" => "+E.types.print(e);b<a.size-1&&(d+=", ");b++});return d+"}"};E.types.nb=function(a){var b=0,d="TransitSet {";a.forEach(function(e){d+=E.types.print(e);b<a.size-1&&(d+=", ");b++});return d+"}"};
function P(a){this.D=a;this.A=null;this.o=-1;this.size=a.length/2;this.a=0}P.prototype.toString=function(){return E.types.Ia(this)};P.prototype.inspect=function(){return this.toString()};function oa(a){if(a.A)throw Error("Invalid operation, already converted");if(a.size<E.types.ha)return!1;a.a++;return a.a>E.types.La?(a.A=E.types.map(a.D,!1,!0),a.D=[],!0):!1}P.prototype.clear=function(){this.o=-1;this.A?this.A.clear():this.D=[];this.size=0};P.prototype.clear=P.prototype.clear;
P.prototype.keys=function(){return this.A?this.A.keys():new M(this.D,E.types.V)};P.prototype.keys=P.prototype.keys;P.prototype.s=function(){if(this.A)return this.A.s();for(var a=[],b=0,d=0;d<this.D.length;b++,d+=2)a[b]=this.D[d];return a};P.prototype.keySet=P.prototype.s;P.prototype.entries=function(){return this.A?this.A.entries():new M(this.D,E.types.ua)};P.prototype.entries=P.prototype.entries;P.prototype.values=function(){return this.A?this.A.values():new M(this.D,E.types.da)};
P.prototype.values=P.prototype.values;P.prototype.forEach=function(a){if(this.A)this.A.forEach(a);else for(var b=0;b<this.D.length;b+=2)a(this.D[b+1],this.D[b])};P.prototype.forEach=P.prototype.forEach;P.prototype.get=function(a,b){if(this.A)return this.A.get(a);if(oa(this))return this.get(a);for(var d=0;d<this.D.length;d+=2)if(E.g.equals(this.D[d],a))return this.D[d+1];return b};P.prototype.get=P.prototype.get;
P.prototype.has=function(a){if(this.A)return this.A.has(a);if(oa(this))return this.has(a);for(var b=0;b<this.D.length;b+=2)if(E.g.equals(this.D[b],a))return!0;return!1};P.prototype.has=P.prototype.has;P.prototype.set=function(a,b){this.o=-1;if(this.A)this.A.set(a,b),this.size=this.A.size;else{for(var d=0;d<this.D.length;d+=2)if(E.g.equals(this.D[d],a)){this.D[d+1]=b;return}this.D.push(a);this.D.push(b);this.size++;this.size>E.types.ta&&(this.A=E.types.map(this.D,!1,!0),this.D=null)}};
P.prototype.set=P.prototype.set;P.prototype["delete"]=function(a){this.o=-1;if(this.A)return a=this.A["delete"](a),this.size=this.A.size,a;for(var b=0;b<this.D.length;b+=2)if(E.g.equals(this.D[b],a))return a=this.D[b+1],this.D.splice(b,2),this.size--,a};P.prototype.clone=function(){var a=E.types.map();this.forEach(function(b,d){a.set(d,b)});return a};P.prototype.clone=P.prototype.clone;P.prototype[E.types.U]=function(){return this.entries()};
P.prototype.N=function(){if(this.A)return this.A.N();-1===this.o&&(this.o=E.g.hashMapLike(this));return this.o};P.prototype.M=function(a){return this.A?E.types.na(this.A,a):E.types.na(this,a)};function O(a,b,d){this.map=b||{};this.a=a||[];this.size=d||0;this.o=-1}O.prototype.toString=function(){return E.types.Ia(this)};O.prototype.inspect=function(){return this.toString()};O.prototype.clear=function(){this.o=-1;this.map={};this.a=[];this.size=0};O.prototype.clear=O.prototype.clear;
function na(a){return null!=a.a?a.a:E.j.R(a.map)}O.prototype["delete"]=function(a){this.o=-1;this.a=null;for(var b=E.g.o(a),d=this.map[b],e=0;e<d.length;e+=2)if(E.g.equals(a,d[e]))return a=d[e+1],d.splice(e,2),0===d.length&&delete this.map[b],this.size--,a};O.prototype.entries=function(){return new N(this,E.types.ua)};O.prototype.entries=O.prototype.entries;O.prototype.forEach=function(a){for(var b=na(this),d=0;d<b.length;d++)for(var e=this.map[b[d]],f=0;f<e.length;f+=2)a(e[f+1],e[f],this)};
O.prototype.forEach=O.prototype.forEach;O.prototype.get=function(a,b){var d=E.g.o(a),d=this.map[d];if(null!=d)for(var e=0;e<d.length;e+=2){if(E.g.equals(a,d[e]))return d[e+1]}else return b};O.prototype.get=O.prototype.get;O.prototype.has=function(a){var b=E.g.o(a),b=this.map[b];if(null!=b)for(var d=0;d<b.length;d+=2)if(E.g.equals(a,b[d]))return!0;return!1};O.prototype.has=O.prototype.has;O.prototype.keys=function(){return new N(this,E.types.V)};O.prototype.keys=O.prototype.keys;
O.prototype.s=function(){for(var a=na(this),b=[],d=0;d<a.length;d++)for(var e=this.map[a[d]],f=0;f<e.length;f+=2)b.push(e[f]);return b};O.prototype.keySet=O.prototype.s;O.prototype.set=function(a,b){this.o=-1;var d=E.g.o(a),e=this.map[d];if(null==e)this.a&&this.a.push(d),this.map[d]=[a,b],this.size++;else{for(var d=!0,f=0;f<e.length;f+=2)if(E.g.equals(b,e[f])){d=!1;e[f]=b;break}d&&(e.push(a),e.push(b),this.size++)}};O.prototype.set=O.prototype.set;O.prototype.values=function(){return new N(this,E.types.da)};
O.prototype.values=O.prototype.values;O.prototype.clone=function(){var a=E.types.map();this.forEach(function(b,d){a.set(d,b)});return a};O.prototype.clone=O.prototype.clone;O.prototype[E.types.U]=function(){return this.entries()};O.prototype.N=function(){-1===this.o&&(this.o=E.g.hashMapLike(this));return this.o};O.prototype.M=function(a){return E.types.na(this,a)};
E.types.map=function(a,b,d){a=a||[];b=!1===b?b:!0;if((!0!==d||!d)&&a.length<=2*E.types.ta){if(b){var e=a;a=[];for(b=0;b<e.length;b+=2){var f=!1;for(d=0;d<a.length;d+=2)if(E.g.equals(a[d],e[b])){a[d+1]=e[b+1];f=!0;break}f||(a.push(e[b]),a.push(e[b+1]))}}return new P(a)}var e={},f=[],g=0;for(b=0;b<a.length;b+=2){d=E.g.o(a[b]);var h=e[d];if(null==h)f.push(d),e[d]=[a[b],a[b+1]],g++;else{var l=!0;for(d=0;d<h.length;d+=2)if(E.g.equals(h[d],a[b])){h[d+1]=a[b+1];l=!1;break}l&&(h.push(a[b]),h.push(a[b+1]),
g++)}}return new O(f,e,g)};E.types.fb=function(a){return a instanceof P};E.types.isMap=function(a){return a instanceof P||a instanceof O};function Q(a){this.map=a;this.size=a.size}Q.prototype.toString=function(){return E.types.nb(this)};Q.prototype.inspect=function(){return this.toString()};Q.prototype.add=function(a){this.map.set(a,a);this.size=this.map.size};Q.prototype.add=Q.prototype.add;Q.prototype.clear=function(){this.map=new O;this.size=0};Q.prototype.clear=Q.prototype.clear;
Q.prototype["delete"]=function(a){a=this.map["delete"](a);this.size=this.map.size;return a};Q.prototype.s=function(){return this.map.entries()};Q.prototype.entries=Q.prototype.s;Q.prototype.forEach=function(a){var b=this;this.map.forEach(function(d,e){a(e,b)})};Q.prototype.forEach=Q.prototype.forEach;Q.prototype.has=function(a){return this.map.has(a)};Q.prototype.has=Q.prototype.has;Q.prototype.keys=function(){return this.map.keys()};Q.prototype.keys=Q.prototype.keys;Q.prototype.K=function(){return this.map.s()};
Q.prototype.keySet=Q.prototype.K;Q.prototype.a=function(){return this.map.values()};Q.prototype.values=Q.prototype.a;Q.prototype.clone=function(){var a=E.types.set();this.forEach(function(b){a.add(b)});return a};Q.prototype.clone=Q.prototype.clone;Q.prototype[E.types.U]=function(){return this.a()};Q.prototype.M=function(a){if(a instanceof Q){if(this.size===a.size)return E.g.equals(this.map,a.map)}else return!1};Q.prototype.N=function(){return E.g.o(this.map)};
E.types.set=function(a){a=a||[];for(var b={},d=[],e=0,f=0;f<a.length;f++){var g=E.g.o(a[f]),h=b[g];if(null==h)d.push(g),b[g]=[a[f],a[f]],e++;else{for(var g=!0,l=0;l<h.length;l+=2)if(E.g.equals(h[l],a[f])){g=!1;break}g&&(h.push(a[f]),h.push(a[f]),e++)}}return new Q(new O(d,b,e))};E.types.isSet=function(a){return a instanceof Q};E.types.quoted=function(a){return E.types.O("'",a)};E.types.isQuoted=function(a){return a instanceof I&&"'"===a.tag};E.types.list=function(a){return E.types.O("list",a)};
E.types.isList=function(a){return a instanceof I&&"list"===a.tag};E.types.link=function(a){return E.types.O("link",a)};E.types.isLink=function(a){return a instanceof I&&"link"===a.tag};E.types.ob=function(a){switch(a){case "-INF":return-Infinity;case "INF":return Infinity;case "NaN":return NaN;default:throw Error("Invalid special double value "+a);}};E.l={};E.l.Aa=0;E.l.ia="transit$guid$"+E.j.randomUUID();E.l.Ka=function(a){if(null==a)return"null";if(a===String)return"string";if(a===Boolean)return"boolean";if(a===Number)return"number";if(a===Array)return"array";if(a===Object)return"map";var b=a[E.l.ia];null==b&&("undefined"!=typeof Object.defineProperty?(b=++E.l.Aa,Object.defineProperty(a,E.l.ia,{value:b,enumerable:!1})):a[E.l.ia]=b=++E.l.Aa);return b};E.l.constructor=function(a){return null==a?null:a.constructor};
E.l.W=function(a,b){for(var d=a.toString(),e=d.length;e<b;e++)d="0"+d;return d};E.l.stringableKeys=function(a){a=E.j.R(a);for(var b=0;b<a.length;b++);return!0};function R(){}R.prototype.tag=function(){return"_"};R.prototype.rep=function(){return null};R.prototype.J=function(){return"null"};function S(){}S.prototype.tag=function(){return"s"};S.prototype.rep=function(a){return a};S.prototype.J=function(a){return a};function T(){}T.prototype.tag=function(){return"i"};T.prototype.rep=function(a){return a};
T.prototype.J=function(a){return a.toString()};function pa(){}pa.prototype.tag=function(){return"i"};pa.prototype.rep=function(a){return a.toString()};pa.prototype.J=function(a){return a.toString()};function qa(){}qa.prototype.tag=function(){return"?"};qa.prototype.rep=function(a){return a};qa.prototype.J=function(a){return a.toString()};function ra(){}ra.prototype.tag=function(){return"array"};ra.prototype.rep=function(a){return a};ra.prototype.J=function(){return null};function sa(){}
sa.prototype.tag=function(){return"map"};sa.prototype.rep=function(a){return a};sa.prototype.J=function(){return null};function ta(){}ta.prototype.tag=function(){return"t"};ta.prototype.rep=function(a){return a.getUTCFullYear()+"-"+E.l.W(a.getUTCMonth()+1,2)+"-"+E.l.W(a.getUTCDate(),2)+"T"+E.l.W(a.getUTCHours(),2)+":"+E.l.W(a.getUTCMinutes(),2)+":"+E.l.W(a.getUTCSeconds(),2)+"."+E.l.W(a.getUTCMilliseconds(),3)+"Z"};ta.prototype.J=function(a,b){return b.rep(a)};function U(){}U.prototype.tag=function(){return"m"};
U.prototype.rep=function(a){return a.valueOf()};U.prototype.J=function(a){return a.valueOf().toString()};U.prototype.Ba=function(){return new ta};function ua(){}ua.prototype.tag=function(){return"u"};ua.prototype.rep=function(a){return a.toString()};ua.prototype.J=function(a){return a.toString()};function xa(){}xa.prototype.tag=function(){return":"};xa.prototype.rep=function(a){return a.I};xa.prototype.J=function(a,b){return b.rep(a)};function ya(){}ya.prototype.tag=function(){return"$"};
ya.prototype.rep=function(a){return a.I};ya.prototype.J=function(a,b){return b.rep(a)};function za(){}za.prototype.tag=function(a){return a.tag};za.prototype.rep=function(a){return a.rep};za.prototype.J=function(){return null};function Aa(){}Aa.prototype.tag=function(){return"set"};Aa.prototype.rep=function(a){var b=[];a.forEach(function(a){b.push(a)});return E.types.O("array",b)};Aa.prototype.J=function(){return null};function Ba(){}Ba.prototype.tag=function(){return"map"};Ba.prototype.rep=function(a){return a};
Ba.prototype.J=function(){return null};function Ca(){}Ca.prototype.tag=function(){return"map"};Ca.prototype.rep=function(a){return a};Ca.prototype.J=function(){return null};function Da(){}Da.prototype.tag=function(){return"b"};Da.prototype.rep=function(a){return a.toString("base64")};Da.prototype.J=function(){return null};function Ea(){}Ea.prototype.tag=function(){return"b"};Ea.prototype.rep=function(a){return E.j.Ta(a)};Ea.prototype.J=function(){return null};
E.l.Xa=function(a){a.set(null,new R);a.set(String,new S);a.set(Number,new T);a.set(c,new pa);a.set(Boolean,new qa);a.set(Array,new ra);a.set(Object,new sa);a.set(Date,new U);a.set(L,new ua);a.set(J,new xa);a.set(K,new ya);a.set(I,new za);a.set(Q,new Aa);a.set(P,new Ba);a.set(O,new Ca);"undefined"!=typeof Buffer&&a.set(Buffer,new Da);"undefined"!=typeof Uint8Array&&a.set(Uint8Array,new Ea)};function W(){this.l={};E.l.Xa(this)}
W.prototype.get=function(a){var b=null,b="string"===typeof a?this.l[a]:this.l[E.l.Ka(a)];return null!=b?b:this.l["default"]};W.prototype.get=W.prototype.get;E.l.pb=function(a){switch(a){case "null":case "string":case "boolean":case "number":case "array":case "map":return!1}return!0};W.prototype.set=function(a,b){"string"===typeof a&&E.l.pb(a)?this.l[a]=b:this.l[E.l.Ka(a)]=b};E.h={};E.h.decoder={};function Fa(a){this.fa=a}E.h.decoder.tag=function(a){return new Fa(a)};E.h.decoder.Ga=function(a){return a&&a instanceof Fa};E.h.decoder.kb=function(a){switch(a){case "_":case "s":case "?":case "i":case "d":case "b":case "'":case "array":case "map":return!0}return!1};
function X(a){this.K=a||{};this.l={};for(var b in this.S.l)this.l[b]=this.S.l[b];for(b in this.K.handlers){if(E.h.decoder.kb(b))throw Error('Cannot override handler for ground type "'+b+'"');this.l[b]=this.K.handlers[b]}this.ea=null!=this.K.preferStrings?this.K.preferStrings:this.S.ea;this.pa=null!=this.K.preferBuffers?this.K.preferBuffers:this.S.pa;this.ja=this.K.defaultHandler||this.S.ja;this.s=this.K.mapBuilder;this.P=this.K.arrayBuilder}
X.prototype.S={l:{_:function(){return null},"?":function(a){return E.types.Ua(a)},b:function(a,b){return E.types.binary(a,b)},i:function(a){return E.types.Ea(a)},n:function(a){return E.types.ya(a)},d:function(a){return E.types.cb(a)},f:function(a){return E.types.xa(a)},c:function(a){return E.types.Va(a)},":":function(a){return E.types.keyword(a)},$:function(a){return E.types.symbol(a)},r:function(a){return E.types.uri(a)},z:function(a){return E.types.ob(a)},"'":function(a){return a},m:function(a){return E.types.date(a)},
t:function(a){return E.types.qb(a)},u:function(a){return E.types.uuid(a)},set:function(a){return E.types.set(a)},list:function(a){return E.types.list(a)},link:function(a){return E.types.link(a)},cmap:function(a){return E.types.map(a,!1)}},ja:function(a,b){return E.types.O(a,b)},ea:!0,pa:!0};
X.prototype.a=function(a,b,d,e){if(null==a)return null;switch(typeof a){case "string":return E.v.Fa(a,d)?(a=Ga(this,a),b&&b.write(a,d),b=a):b=E.v.ib(a)?b.qa(a,d):Ga(this,a),b;case "object":if(E.j.isArray(a))if("^ "===a[0])if(this.s)if(a.length<2*E.types.ha+1&&this.s.fromArray){e=[];for(d=1;d<a.length;d+=2)e.push(this.a(a[d],b,!0,!1)),e.push(this.a(a[d+1],b,!1,!1));b=this.s.fromArray(e,a)}else{e=this.s.init(a);for(d=1;d<a.length;d+=2)e=this.s.add(e,this.a(a[d],b,!0,!1),this.a(a[d+1],b,!1,!1),a);b=
this.s.finalize(e,a)}else{e=[];for(d=1;d<a.length;d+=2)e.push(this.a(a[d],b,!0,!1)),e.push(this.a(a[d+1],b,!1,!1));b=E.types.map(e,!1)}else b=Ha(this,a,b,d,e);else{d=E.j.R(a);var f=d[0];e=1==d.length?this.a(f,b,!1,!1):null;if(E.h.decoder.Ga(e))a=a[f],d=this.l[e.fa],b=null!=d?d(this.a(a,b,!1,!0),this):E.types.O(e.fa,this.a(a,b,!1,!1));else if(this.s)if(d.length<2*E.types.ha&&this.s.fromArray){var g=[];for(e=0;e<d.length;e++)f=d[e],g.push(this.a(f,b,!0,!1)),g.push(this.a(a[f],b,!1,!1));b=this.s.fromArray(g,
a)}else{g=this.s.init(a);for(e=0;e<d.length;e++)f=d[e],g=this.s.add(g,this.a(f,b,!0,!1),this.a(a[f],b,!1,!1),a);b=this.s.finalize(g,a)}else{g=[];for(e=0;e<d.length;e++)f=d[e],g.push(this.a(f,b,!0,!1)),g.push(this.a(a[f],b,!1,!1));b=E.types.map(g,!1)}}return b}return a};X.prototype.decode=X.prototype.a;
function Ha(a,b,d,e,f){if(f){var g=[];for(f=0;f<b.length;f++)g.push(a.a(b[f],d,e,!1));return g}g=d&&d.G;if(2===b.length&&"string"===typeof b[0]&&(f=a.a(b[0],d,!1,!1),E.h.decoder.Ga(f)))return b=b[1],g=a.l[f.fa],null!=g?g=g(a.a(b,d,e,!0),a):E.types.O(f.fa,a.a(b,d,e,!1));d&&g!=d.G&&(d.G=g);if(a.P){if(32>=b.length&&a.P.fromArray){g=[];for(f=0;f<b.length;f++)g.push(a.a(b[f],d,e,!1));return a.P.fromArray(g,b)}g=a.P.init(b);for(f=0;f<b.length;f++)g=a.P.add(g,a.a(b[f],d,e,!1),b);return a.P.finalize(g,b)}g=
[];for(f=0;f<b.length;f++)g.push(a.a(b[f],d,e,!1));return g}function Ga(a,b){if(b.charAt(0)===E.w.L){var d=b.charAt(1);if(d===E.w.L||d===E.w.Z||d===E.w.wa)return b.substring(1);if(d===E.w.Sa)return E.h.decoder.tag(b.substring(2));var e=a.l[d];return null==e?a.ja(d,b.substring(2)):e(b.substring(2),a)}return b}E.h.decoder.decoder=function(a){return new X(a)};E.h.reader={};function Ia(a){this.decoder=new X(a)}function Ja(a,b){this.K=a;this.s=b||{};this.a=this.s.cache?this.s.cache:new H}Ja.prototype.qa=function(a){var b=this.a;a=this.K.decoder.a(JSON.parse(a),b);this.a.clear();return a};Ja.prototype.read=Ja.prototype.qa;E.h.writer={};E.h.writer.escape=function(a){if(0<a.length){var b=a.charAt(0);return b===E.w.L||b===E.w.Z||b===E.w.wa?E.w.L+a:a}return a};
function Ka(a){this.a=a||{};this.ea=null!=this.a.preferStrings?this.a.preferStrings:!0;this.Ha=this.a.objectBuilder||null;this.l=new W;if(a=this.a.handlers){if(E.j.isArray(a)||!a.forEach)throw Error('transit writer "handlers" option must be a map');var b=this;a.forEach(function(a,e){if(void 0!==e)b.l.set(e,a);else throw Error("Cannot create handler for JavaScript undefined");})}this.aa=this.a.handlerForForeign;this.ga=this.a.unpack||function(a){return E.types.fb(a)&&null===a.A?a.D:!1};this.ca=this.a&&
this.a.verbose||!1}function La(a,b){var d=a.l.get(E.l.constructor(b));return null!=d?d:(d=b&&b.transitTag)?a.l.get(d):null}function Y(a,b,d,e,f){a=a+b+d;return f?f.write(a,e):a}E.h.writer.ab=function(a,b,d){var e=[];if(E.j.isArray(b))for(var f=0;f<b.length;f++)e.push(E.h.writer.F(a,b[f],!1,d));else b.forEach(function(b){e.push(E.h.writer.F(a,b,!1,d))});return e};E.h.writer.Ya=function(a,b,d){return E.h.writer.ab(a,b,d)};
E.h.writer.ma=function(a,b){if("string"!==typeof b){var d=La(a,b);return d&&1===d.tag(b).length}return!0};
E.h.writer.stringableKeys=function(a,b){var d=a.ga(b),e=!0;if(d){for(var f=0;f<d.length&&(e=E.h.writer.ma(a,d[f]),e);f+=2);return e}if(b.keys&&(d=b.keys(),f=null,d.next)){for(f=d.next();!f.done;){e=E.h.writer.ma(a,f.value);if(!e)break;f=d.next()}return e}if(b.forEach)return b.forEach(function(b,d){e=e&&E.h.writer.ma(a,d)}),e;throw Error("Cannot walk keys of object type "+E.l.constructor(b).name);};
E.h.writer.jb=function(a){if(a.constructor.transit$isObject)return!0;var b=a.constructor.toString(),b=b.substr(9),b=b.substr(0,b.indexOf("("));isObject="Object"==b;"undefined"!=typeof Object.defineProperty?Object.defineProperty(a.constructor,"transit$isObject",{value:isObject,enumerable:!1}):a.constructor.transit$isObject=isObject;return isObject};
E.h.writer.$a=function(a,b,d){var e=null,f=null,g=null,e=null,h=0;if(b.constructor===Object||null!=b.forEach||a.aa&&E.h.writer.jb(b)){if(a.ca){if(null!=b.forEach){if(E.h.writer.stringableKeys(a,b)){var l={};b.forEach(function(b,e){l[E.h.writer.F(a,e,!0,!1)]=E.h.writer.F(a,b,!1,d)});return l}e=a.ga(b);f=[];g=Y(E.w.T,"cmap","",!0,d);if(e)for(;h<e.length;h+=2)f.push(E.h.writer.F(a,e[h],!1,!1)),f.push(E.h.writer.F(a,e[h+1],!1,d));else b.forEach(function(b,e){f.push(E.h.writer.F(a,e,!1,!1));f.push(E.h.writer.F(a,
b,!1,d))});l={};l[g]=f;return l}e=E.j.R(b);for(l={};h<e.length;h++)l[E.h.writer.F(a,e[h],!0,!1)]=E.h.writer.F(a,b[e[h]],!1,d);return l}if(null!=b.forEach){if(E.h.writer.stringableKeys(a,b)){e=a.ga(b);l=["^ "];if(e)for(;h<e.length;h+=2)l.push(E.h.writer.F(a,e[h],!0,d)),l.push(E.h.writer.F(a,e[h+1],!1,d));else b.forEach(function(b,e){l.push(E.h.writer.F(a,e,!0,d));l.push(E.h.writer.F(a,b,!1,d))});return l}e=a.ga(b);f=[];g=Y(E.w.T,"cmap","",!0,d);if(e)for(;h<e.length;h+=2)f.push(E.h.writer.F(a,e[h],
!1,d)),f.push(E.h.writer.F(a,e[h+1],!1,d));else b.forEach(function(b,e){f.push(E.h.writer.F(a,e,!1,d));f.push(E.h.writer.F(a,b,!1,d))});return[g,f]}l=["^ "];for(e=E.j.R(b);h<e.length;h++)l.push(E.h.writer.F(a,e[h],!0,d)),l.push(E.h.writer.F(a,b[e[h]],!1,d));return l}if(null!=a.Ha)return a.Ha(b,function(b){return E.h.writer.F(a,b,!0,d)},function(b){return E.h.writer.F(a,b,!1,d)});h=E.l.constructor(b).name;e=Error("Cannot write "+h);e.data={oa:b,type:h};throw e;};
E.h.writer.bb=function(a,b,d,e){if(a.ca){var f={};f[Y(E.w.T,b,"",!0,e)]=E.h.writer.F(a,d,!1,e);return f}return[Y(E.w.T,b,"",!0,e),E.h.writer.F(a,d,!1,e)]};E.h.writer.Za=function(a,b,d,e,f,g,h){if(1===d.length){if("string"===typeof e)return Y(E.w.L,d,e,g,h);if(g||a.ea){(e=a.ca&&b.Ba())?(d=e.tag(f),e=e.J(f,e)):e=b.J(f,b);if(null!==e)return Y(E.w.L,d,e,g,h);b=Error('Tag "'+d+'" cannot be encoded as string');b.data={tag:d,rep:e,oa:f};throw b;}}return E.h.writer.bb(a,d,e,h)};
E.h.writer.F=function(a,b,d,e){var f=La(a,b)||(a.aa?a.aa(b,a.l):null),g=f?f.tag(b):null,h=f?f.rep(b):null;if(null!=f&&null!=g)switch(g){case "_":return d?Y(E.w.L,"_","",d,e):null;case "s":return Y("","",E.h.writer.escape(h),d,e);case "?":return d?Y(E.w.L,"?",h.toString()[0],d,e):h;case "i":return Infinity===h?Y(E.w.L,"z","INF",d,e):-Infinity===h?Y(E.w.L,"z","-INF",d,e):isNaN(h)?Y(E.w.L,"z","NaN",d,e):d||"string"===typeof h||h instanceof c?Y(E.w.L,"i",h.toString(),d,e):h;case "d":return d?Y(h.L,"d",
h,d,e):h;case "b":return Y(E.w.L,"b",h,d,e);case "'":return a.ca?(b={},d=Y(E.w.T,"'","",!0,e),b[d]=E.h.writer.F(a,h,!1,e),a=b):a=[Y(E.w.T,"'","",!0,e),E.h.writer.F(a,h,!1,e)],a;case "array":return E.h.writer.Ya(a,h,e);case "map":return E.h.writer.$a(a,h,e);default:return E.h.writer.Za(a,f,g,h,b,d,e)}else throw a=E.l.constructor(b).name,e=Error("Cannot write "+a),e.data={oa:b,type:a},e;};
E.h.writer.mb=function(a,b){var d=La(a,b)||(a.aa?a.aa(b,a.l):null);if(null!=d)return 1===d.tag(b).length?E.types.quoted(b):b;var d=E.l.constructor(b).name,e=Error("Cannot write "+d);e.data={oa:b,type:d};throw e;};E.h.writer.lb=function(a,b,d,e){return JSON.stringify(E.h.writer.F(a,E.h.writer.mb(a,b),d,e))};function Z(a,b){this.a=a;this.K=b||{};!1===this.K.cache?this.s=null:this.s=this.K.cache?this.K.cache:new G}Z.prototype.S=function(){return this.a};Z.prototype.marshaller=Z.prototype.S;
Z.prototype.write=function(a,b){var d=null,d=b||{},e=d.asMapKey||!1,f=this.a.ca?!1:this.s,d=!1===d.marshalTop?E.h.writer.F(this.a,a,e,f):E.h.writer.lb(this.a,a,e,f);null!=this.s&&this.s.clear();return d};Z.prototype.write=Z.prototype.write;Z.prototype.P=function(a,b){this.a.l.set(a,b)};Z.prototype.register=Z.prototype.P;E.reader=function(a,b){if("json"===a||"json-verbose"===a||null==a){var d=new Ia(b);return new Ja(d,b)}throw Error("Cannot create reader of type "+a);};E.writer=function(a,b){if("json"===a||"json-verbose"===a||null==a){"json-verbose"===a&&(null==b&&(b={}),b.verbose=!0);var d=new Ka(b);return new Z(d,b)}d=Error('Type must be "json"');d.data={type:a};throw d;};
E.makeWriteHandler=function(a){function b(){}b.prototype.tag=a.tag;b.prototype.rep=a.rep;b.prototype.J=a.stringRep;b.prototype.Ba=a.getVerboseHandler;return new b};E.makeBuilder=function(a){function b(){}b.prototype.init=a.init;b.prototype.add=a.add;b.prototype.finalize=a.finalize;b.prototype.fromArray=a.fromArray;return new b};E.date=E.types.date;E.integer=E.types.Ea;E.isInteger=E.types.isInteger;E.uuid=E.types.uuid;E.isUUID=E.types.isUUID;E.bigInt=E.types.ya;E.isBigInt=E.types.hb;E.bigDec=E.types.xa;
E.isBigDec=E.types.gb;E.keyword=E.types.keyword;E.isKeyword=E.types.isKeyword;E.symbol=E.types.symbol;E.isSymbol=E.types.isSymbol;E.binary=E.types.binary;E.isBinary=E.types.isBinary;E.uri=E.types.uri;E.isURI=E.types.isURI;E.map=E.types.map;E.isMap=E.types.isMap;E.set=E.types.set;E.isSet=E.types.isSet;E.list=E.types.list;E.isList=E.types.isList;E.quoted=E.types.quoted;E.isQuoted=E.types.isQuoted;E.tagged=E.types.O;E.isTaggedValue=E.types.isTaggedValue;E.link=E.types.link;E.isLink=E.types.isLink;
E.hash=E.g.o;E.hashMapLike=E.g.hashMapLike;E.hashArrayLike=E.g.hashArrayLike;E.equals=E.g.equals;E.extendToEQ=E.g.extendToEQ;E.mapToObject=function(a){var b={};a.forEach(function(a,e){if("string"!==typeof e)throw Error("Cannot convert map with non-string keys");b[e]=a});return b};E.objectToMap=function(a){var b=E.map(),d;for(d in a)a.hasOwnProperty(d)&&b.set(d,a[d]);return b};E.decoder=E.h.decoder.decoder;E.readCache=E.v.readCache;E.writeCache=E.v.writeCache;E.UUIDfromString=E.types.UUIDfromString;
E.randomUUID=E.j.randomUUID;E.stringableKeys=E.h.writer.stringableKeys;E.rb={};define("transit",[],function(){return E});})();
