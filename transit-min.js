// transit-js 0.8.874
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
;(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var da=ca(this);function k(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
k("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}function c(e,f){this.g=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.g};var d=0;return b});
k("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e}k("Array.prototype.entries",function(a){return a?a:function(){return fa(this,function(b,c){return[b,c]})}});k("Array.prototype.keys",function(a){return a?a:function(){return fa(this,function(b){return b})}});
k("Array.prototype.values",function(a){return a?a:function(){return fa(this,function(b,c){return c})}});var l=this||self;function ha(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}function m(a,b){a=a.split(".");var c=l;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};var n="undefined"!=typeof Object.keys?function(a){return Object.keys(a)}:function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},q="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"===ha(a)};function r(){return Math.round(15*Math.random()).toString(16)}
function ja(){var a=(8|3&Math.round(14*Math.random())).toString(16);return r()+r()+r()+r()+r()+r()+r()+r()+"-"+r()+r()+r()+r()+"-4"+r()+r()+r()+"-"+a+r()+r()+r()+"-"+r()+r()+r()+r()+r()+r()+r()+r()+r()+r()+r()+r()};function ka(a,b){if(3<a.length){if(b)return!0;b=a.charAt(1);return"~"===a.charAt(0)?":"===b||"$"===b||"#"===b:!1}return!1}function la(a){var b=Math.floor(a/44);a=String.fromCharCode(a%44+48);return 0===b?"^"+a:"^"+String.fromCharCode(b+48)+a}function ma(){this.g=this.o=0;this.cache={}}ma.prototype.write=function(a,b){return ka(a,b)?(1936===this.o&&this.clear(),b=this.cache[a],null==b?(this.cache[a]=[la(this.o),this.g],this.o++,a):b[1]!=this.g?(b[1]=this.g,b[0]=la(this.o),this.o++,a):b[0]):a};
ma.prototype.clear=function(){this.o=0;this.g++};function t(){this.o=0;this.cache=[]}t.prototype.write=function(a){1936==this.o&&(this.o=0);this.cache[this.o]=a;this.o++;return a};t.prototype.read=function(a){return this.cache[2===a.length?a.charCodeAt(1)-48:44*(a.charCodeAt(1)-48)+(a.charCodeAt(2)-48)]};t.prototype.clear=function(){this.o=0};var na=1;function u(a,b){if(null==a)return null==b;if(a===b)return!0;if("object"===typeof a){if(q(a)){if(q(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!u(a[c],b[c]))return!1;return!0}return!1}if(a.C)return a.C(b);if(null!=b&&"object"===typeof b){if(b.C)return b.C(a);c=0;var d=n(b).length,e;for(e in a)if(a.hasOwnProperty(e)&&(c++,!b.hasOwnProperty(e)||!u(a[e],b[e])))return!1;return c===d}}return!1}function oa(a,b){return a^b+2654435769+(a<<6)+(a>>2)}var pa={},qa=0;
function ra(a){var b=0;if(null!=a.forEach)a.forEach(function(h,p){b=(b+(v(p)^v(h)))%4503599627370496});else for(var c=n(a),d=0;d<c.length;d++){var e=c[d],f=a[e];b=(b+(v(e)^v(f)))%4503599627370496}return b}function sa(a){var b=0;if(q(a))for(var c=0;c<a.length;c++)b=oa(b,v(a[c]));else a.forEach&&a.forEach(function(d){b=oa(b,v(d))});return b}
function v(a){if(null==a)return 0;switch(typeof a){case "number":return a;case "boolean":return!0===a?1:0;case "string":var b=pa[a];if(null!=b)a=b;else{for(var c=b=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;qa++;256<=qa&&(pa={},qa=1);a=pa[a]=b}return a;case "function":if(b=a.transit$hashCode$)return b;b=na;"undefined"!=typeof Object.defineProperty?Object.defineProperty(a,"transit$hashCode$",{value:b,enumerable:!1}):a.transit$hashCode$=b;na++;return b;default:return a instanceof Date?a.valueOf():
q(a)?sa(a):a.D?a.D():ra(a)}};function w(a,b){this.h=a|0;this.g=b|0}function x(a){return 4294967296*a.g+(a.h>>>0)}
w.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);var b=this.g>>21;if(0==b||-1==b&&(0!=this.h||-2097152!=this.g))return b=x(this),10==a?""+b:b.toString(a);b=14-(a>>2);var c=Math.pow(a,b),d=y(c,c/4294967296);c=B(this,d);d=Math.abs(x(this.add(C(D(c,d)))));var e=10==a?""+d:d.toString(a);e.length<b&&(e="0000000000000".substr(e.length-b)+e);d=x(c);return(10==a?d:d.toString(a))+e};function E(a){return 0==a.h&&0==a.g}function G(a,b){return a.h==b.h&&a.g==b.g}
function ta(a,b){return a.g==b.g?a.h==b.h?0:a.h>>>0>b.h>>>0?1:-1:a.g>b.g?1:-1}function C(a){var b=~a.h+1|0;return y(b,~a.g+!b|0)}w.prototype.add=function(a){var b=this.g>>>16,c=this.g&65535,d=this.h>>>16,e=a.g>>>16,f=a.g&65535,h=a.h>>>16;a=(this.h&65535)+(a.h&65535);h=(a>>>16)+(d+h);d=h>>>16;d+=c+f;b=(d>>>16)+(b+e)&65535;return y((h&65535)<<16|a&65535,b<<16|d&65535)};
function D(a,b){if(E(a))return a;if(E(b))return b;var c=a.g>>>16,d=a.g&65535,e=a.h>>>16;a=a.h&65535;var f=b.g>>>16,h=b.g&65535,p=b.h>>>16;b=b.h&65535;var z=a*b;var A=(z>>>16)+e*b;var F=A>>>16;A=(A&65535)+a*p;F+=A>>>16;F+=d*b;var ia=F>>>16;F=(F&65535)+e*p;ia+=F>>>16;F=(F&65535)+a*h;ia=ia+(F>>>16)+(c*b+d*p+e*h+a*f)&65535;return y((A&65535)<<16|z&65535,ia<<16|F&65535)}
function B(a,b){if(E(b))throw Error("division by zero");if(0>a.g){if(G(a,H)){if(G(b,ua)||G(b,va))return H;if(G(b,H))return ua;var c=1;if(0==c)c=a;else{var d=a.g;c=32>c?y(a.h>>>c|d<<32-c,d>>c):y(d>>c-32,0<=d?0:-1)}c=wa(B(c,b),1);if(G(c,I))return 0>b.g?ua:va;a=a.add(C(D(b,c)));return c.add(B(a,b))}return 0>b.g?B(C(a),C(b)):C(B(C(a),b))}if(E(a))return I;if(0>b.g)return G(b,H)?I:C(B(a,C(b)));for(d=I;0<=ta(a,b);){c=Math.max(1,Math.floor(x(a)/x(b)));var e=Math.ceil(Math.log(c)/Math.LN2);e=48>=e?1:Math.pow(2,
e-48);for(var f=J(c),h=D(f,b);0>h.g||0<ta(h,a);)c-=e,f=J(c),h=D(f,b);E(f)&&(f=ua);d=d.add(f);a=a.add(C(h))}return d}w.prototype.and=function(a){return y(this.h&a.h,this.g&a.g)};w.prototype.or=function(a){return y(this.h|a.h,this.g|a.g)};w.prototype.xor=function(a){return y(this.h^a.h,this.g^a.g)};function wa(a,b){b&=63;if(0==b)return a;var c=a.h;return 32>b?y(c<<b,a.g<<b|c>>>32-b):y(0,c<<b-32)}
function xa(a,b){b&=63;if(0==b)return a;var c=a.g;return 32>b?y(a.h>>>b|c<<32-b,c>>>b):32==b?y(c,0):y(c>>>b-32,0)}function J(a){return 0<a?0x7fffffffffffffff<=a?ya:new w(a,a/4294967296):0>a?-9223372036854775808>=a?H:C(new w(-a,-a/4294967296)):I}function y(a,b){return new w(a,b)}
function za(a,b){if("-"==a.charAt(0))return C(za(a.substring(1),b));var c=parseInt(a,b||10);if(9007199254740991>=c)return new w(c%4294967296|0,c/4294967296|0);if(0==a.length)throw Error("number format error: empty string");if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);b=b||10;if(2>b||36<b)throw Error("radix out of range: "+b);c=J(Math.pow(b,8));for(var d=I,e=0;e<a.length;e+=8){var f=Math.min(8,a.length-e),h=parseInt(a.substring(e,e+f),b);8>f?d=D(d,J(Math.pow(b,
f))).add(J(h)):(d=D(d,c),d=d.add(J(h)))}return d}var I=y(0,0),ua=y(1,0),va=y(-1,-1),ya=y(4294967295,2147483647),H=y(0,2147483648);var Aa="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function K(a,b){this.tag=a;this.rep=b;this.g=-1}K.prototype.toString=function(){return"[TaggedValue: "+this.tag+", "+this.rep+"]"};K.prototype.h=function(a){return u(this,a)};K.prototype.equiv=K.prototype.h;K.prototype.C=function(a){return a instanceof K?this.tag===a.tag&&u(this.rep,a.rep):!1};K.prototype.D=function(){-1===this.g&&(this.g=oa(v(this.tag),v(this.rep)));return this.g};function L(a,b){return new K(a,b)}
var Ba=za("9007199254740991"),Ca=za("-9007199254740991");function Da(a){if("number"===typeof a)return a;if(a instanceof w)return a;a=za(a,10);var b;(b=0<ta(a,Ba))||(b=0>ta(a,Ca));return b?a:x(a)}w.prototype.v=function(a){return u(this,a)};w.prototype.equiv=w.prototype.v;w.prototype.C=function(a){return a instanceof w&&G(this,a)};w.prototype.D=function(){return this.h};function Ea(a){return L("n",a)}function Fa(a){return L("f",a)}function M(a){this.s=a;this.g=-1}
M.prototype.toString=function(){return":"+this.s};M.prototype.namespace=function(){var a=this.s.indexOf("/");return-1!=a?this.s.substring(0,a):null};M.prototype.name=function(){var a=this.s.indexOf("/");return-1!=a?this.s.substring(a+1,this.s.length):this.s};M.prototype.h=function(a){return u(this,a)};M.prototype.equiv=M.prototype.h;M.prototype.C=function(a){return a instanceof M&&this.s==a.s};M.prototype.D=function(){-1===this.g&&(this.g=v(this.s));return this.g};function Ga(a){return new M(a)}
function N(a){this.s=a;this.g=-1}N.prototype.namespace=function(){var a=this.s.indexOf("/");return-1!=a?this.s.substring(0,a):null};N.prototype.name=function(){var a=this.s.indexOf("/");return-1!=a?this.s.substring(a+1,this.s.length):this.s};N.prototype.toString=function(){return this.s};N.prototype.h=function(a){return u(this,a)};N.prototype.equiv=N.prototype.h;N.prototype.C=function(a){return a instanceof N&&this.s==a.s};N.prototype.D=function(){-1===this.g&&(this.g=v(this.s));return this.g};
function Ha(a){return new N(a)}function Ia(a,b,c){var d="";c=c||b+1;for(var e=8*(7-b),f=wa(new w(255,0),e);b<c;b++,e-=8,f=xa(f,8)){var h=xa(a.and(f),e).toString(16);1==h.length&&(h="0"+h);d+=h}return d}function O(a,b){this.h=a;this.v=b;this.g=-1}O.prototype.toString=function(){var a=this.h,b=this.v;var c=Ia(a,0,4)+"-";c+=Ia(a,4,6)+"-";c+=Ia(a,6,8)+"-";c+=Ia(b,0,2)+"-";return c+=Ia(b,2,8)};O.prototype.F=function(a){return u(this,a)};O.prototype.equiv=O.prototype.F;
O.prototype.C=function(a){return a instanceof O&&G(this.h,a.h)&&G(this.v,a.v)};O.prototype.D=function(){-1===this.g&&(this.g=v(this.toString()));return this.g};
function Ja(a){a=a.replace(/-/g,"");var b,c;var d=b=0;for(c=24;8>d;d+=2,c-=8)b|=parseInt(a.substring(d,d+2),16)<<c;var e=0;d=8;for(c=24;16>d;d+=2,c-=8)e|=parseInt(a.substring(d,d+2),16)<<c;var f=y(e,b);b=0;d=16;for(c=24;24>d;d+=2,c-=8)b|=parseInt(a.substring(d,d+2),16)<<c;e=0;for(c=d=24;32>d;d+=2,c-=8)e|=parseInt(a.substring(d,d+2),16)<<c;return new O(f,y(e,b))}function Ka(a){a="number"===typeof a?a:parseInt(a,10);return new Date(a)}
Date.prototype.C=function(a){return a instanceof Date?this.valueOf()===a.valueOf():!1};Date.prototype.D=function(){return this.valueOf()};
function La(a,b){if(b&&!1===b.O||"undefined"==typeof l.g)if("undefined"!=typeof Uint8Array){if("undefined"!=typeof atob)var c=atob(a);else{a=String(a).replace(/=+$/,"");if(1==a.length%4)throw Error("'atob' failed: The string to be decoded is not correctly encoded.");b=0;for(var d,e=0,f="";d=a.charAt(e++);~d&&(c=b%4?64*c+d:d,b++%4)?f+=String.fromCharCode(255&c>>(-2*b&6)):0)d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(d);c=f}a=c.length;b=new Uint8Array(a);for(d=0;d<
a;d++)b[d]=c.charCodeAt(d);c=b}else c=L("b",a);else c=new l.g(a,"base64");return c}function Ma(a){return L("r",a)}function P(a,b){this.entries=a;this.type=b||0;this.o=0}P.prototype.next=function(){if(this.o<this.entries.length){var a=null;0===this.type?a=this.entries[this.o]:1===this.type?a=this.entries[this.o+1]:a=[this.entries[this.o],this.entries[this.o+1]];a={value:a,done:!1};this.o+=2;return a}return{value:null,done:!0}};P.prototype.next=P.prototype.next;P.prototype[Aa]=function(){return this};
function Q(a,b){this.map=a;this.type=b||0;this.keys=Na(this.map);this.o=0;this.h=null;this.g=0}Q.prototype.next=function(){if(this.o<this.map.size){null!=this.h&&this.g<this.h.length||(this.h=this.map.map[this.keys[this.o]],this.g=0);var a=null;0===this.type?a=this.h[this.g]:1===this.type?a=this.h[this.g+1]:a=[this.h[this.g],this.h[this.g+1]];a={value:a,done:!1};this.o++;this.g+=2;return a}return{value:null,done:!0}};Q.prototype.next=Q.prototype.next;Q.prototype[Aa]=function(){return this};
function Oa(a,b){if(a instanceof R&&Pa(b)){if(a.size!==b.size)return!1;for(var c in a.map)for(var d=a.map[c],e=0;e<d.length;e+=2)if(!u(d[e+1],b.get(d[e])))return!1;return!0}if(a instanceof S&&Pa(b)){if(a.size!==b.size)return!1;a=a.l;for(e=0;e<a.length;e+=2)if(!u(a[e+1],b.get(a[e])))return!1;return!0}if(null!=b&&"object"===typeof b&&(e=n(b),c=e.length,a.size===c)){for(d=0;d<c;d++){var f=e[d];if(!a.has(f)||!u(b[f],a.get(f)))return!1}return!0}return!1}
function Qa(a){return null==a?"null":"array"===ha(a)?"["+a.toString()+"]":"string"===ha(a)?'"'+a+'"':a.toString()}function Ra(a){var b=0,c="TransitMap {";a.forEach(function(d,e){c+=Qa(e)+" => "+Qa(d);b<a.size-1&&(c+=", ");b++});return c+"}"}function Sa(a){var b=0,c="TransitSet {";a.forEach(function(d){c+=Qa(d);b<a.size-1&&(c+=", ");b++});return c+"}"}function S(a){this.l=a;this.j=null;this.g=-1;this.size=a.length/2;this.h=0}S.prototype.toString=function(){return Ra(this)};S.prototype.inspect=function(){return this.toString()};
function Ta(a){if(a.j)throw Error("Invalid operation, already converted");if(8>a.size)return!1;a.h++;return 32<a.h?(a.j=T(a.l,!1,!0),a.l=[],!0):!1}S.prototype.clear=function(){this.g=-1;this.j?this.j.clear():this.l=[];this.size=0};S.prototype.clear=S.prototype.clear;S.prototype.keys=function(){return this.j?this.j.keys():new P(this.l,0)};S.prototype.keys=S.prototype.keys;S.prototype.v=function(){if(this.j)return this.j.v();for(var a=[],b=0,c=0;c<this.l.length;b++,c+=2)a[b]=this.l[c];return a};
S.prototype.keySet=S.prototype.v;S.prototype.entries=function(){return this.j?this.j.entries():new P(this.l,2)};S.prototype.entries=S.prototype.entries;S.prototype.values=function(){return this.j?this.j.values():new P(this.l,1)};S.prototype.values=S.prototype.values;S.prototype.forEach=function(a){if(this.j)this.j.forEach(a);else for(var b=0;b<this.l.length;b+=2)a(this.l[b+1],this.l[b])};S.prototype.forEach=S.prototype.forEach;
S.prototype.get=function(a,b){if(this.j)return this.j.get(a);if(Ta(this))return this.get(a);for(var c=0;c<this.l.length;c+=2)if(u(this.l[c],a))return this.l[c+1];return b};S.prototype.get=S.prototype.get;S.prototype.has=function(a){if(this.j)return this.j.has(a);if(Ta(this))return this.has(a);for(var b=0;b<this.l.length;b+=2)if(u(this.l[b],a))return!0;return!1};S.prototype.has=S.prototype.has;
S.prototype.set=function(a,b){this.g=-1;if(this.j)this.j.set(a,b),this.size=this.j.size;else{for(var c=0;c<this.l.length;c+=2)if(u(this.l[c],a)){this.l[c+1]=b;return}this.l.push(a);this.l.push(b);this.size++;32<this.size&&(this.j=T(this.l,!1,!0),this.l=null)}};S.prototype.set=S.prototype.set;S.prototype["delete"]=function(a){this.g=-1;if(this.j)return a=this.j.delete(a),this.size=this.j.size,a;for(var b=0;b<this.l.length;b+=2)if(u(this.l[b],a))return a=this.l[b+1],this.l.splice(b,2),this.size--,a};
S.prototype.F=function(){var a=T();this.forEach(function(b,c){a.set(c,b)});return a};S.prototype.clone=S.prototype.F;S.prototype[Aa]=function(){return this.entries()};S.prototype.D=function(){if(this.j)return this.j.D();-1===this.g&&(this.g=ra(this));return this.g};S.prototype.C=function(a){return this.j?Oa(this.j,a):Oa(this,a)};function R(a,b,c){this.map=b||{};this.h=a||[];this.size=c||0;this.g=-1}R.prototype.toString=function(){return Ra(this)};R.prototype.inspect=function(){return this.toString()};
R.prototype.clear=function(){this.g=-1;this.map={};this.h=[];this.size=0};R.prototype.clear=R.prototype.clear;function Na(a){return null!=a.h?a.h:n(a.map)}R.prototype["delete"]=function(a){this.g=-1;this.h=null;for(var b=v(a),c=this.map[b],d=0;d<c.length;d+=2)if(u(a,c[d]))return a=c[d+1],c.splice(d,2),0===c.length&&delete this.map[b],this.size--,a};R.prototype.entries=function(){return new Q(this,2)};R.prototype.entries=R.prototype.entries;
R.prototype.forEach=function(a){for(var b=Na(this),c=0;c<b.length;c++)for(var d=this.map[b[c]],e=0;e<d.length;e+=2)a(d[e+1],d[e],this)};R.prototype.forEach=R.prototype.forEach;R.prototype.get=function(a,b){var c=v(a);c=this.map[c];if(null!=c)for(b=0;b<c.length;b+=2){if(u(a,c[b]))return c[b+1]}else return b};R.prototype.get=R.prototype.get;R.prototype.has=function(a){var b=v(a);b=this.map[b];if(null!=b)for(var c=0;c<b.length;c+=2)if(u(a,b[c]))return!0;return!1};R.prototype.has=R.prototype.has;
R.prototype.keys=function(){return new Q(this,0)};R.prototype.keys=R.prototype.keys;R.prototype.v=function(){for(var a=Na(this),b=[],c=0;c<a.length;c++)for(var d=this.map[a[c]],e=0;e<d.length;e+=2)b.push(d[e]);return b};R.prototype.keySet=R.prototype.v;R.prototype.set=function(a,b){this.g=-1;var c=v(a),d=this.map[c];if(null==d)this.h&&this.h.push(c),this.map[c]=[a,b],this.size++;else{c=!0;for(var e=0;e<d.length;e+=2)if(u(b,d[e])){c=!1;d[e]=b;break}c&&(d.push(a),d.push(b),this.size++)}};
R.prototype.set=R.prototype.set;R.prototype.values=function(){return new Q(this,1)};R.prototype.values=R.prototype.values;R.prototype.F=function(){var a=T();this.forEach(function(b,c){a.set(c,b)});return a};R.prototype.clone=R.prototype.F;R.prototype[Aa]=function(){return this.entries()};R.prototype.D=function(){-1===this.g&&(this.g=ra(this));return this.g};R.prototype.C=function(a){return Oa(this,a)};
function T(a,b,c){a=a||[];b=!1===b?b:!0;if((!0!==c||!c)&&64>=a.length){if(b){var d=a;a=[];for(b=0;b<d.length;b+=2){var e=!1;for(c=0;c<a.length;c+=2)if(u(a[c],d[b])){a[c+1]=d[b+1];e=!0;break}e||(a.push(d[b]),a.push(d[b+1]))}}return new S(a)}d={};e=[];var f=0;for(b=0;b<a.length;b+=2){c=v(a[b]);var h=d[c];if(null==h)e.push(c),d[c]=[a[b],a[b+1]],f++;else{var p=!0;for(c=0;c<h.length;c+=2)if(u(h[c],a[b])){h[c+1]=a[b+1];p=!1;break}p&&(h.push(a[b]),h.push(a[b+1]),f++)}}return new R(e,d,f)}
function Pa(a){return a instanceof S||a instanceof R}function U(a){this.map=a;this.size=a.size}U.prototype.toString=function(){return Sa(this)};U.prototype.inspect=function(){return this.toString()};U.prototype.add=function(a){this.map.set(a,a);this.size=this.map.size};U.prototype.add=U.prototype.add;U.prototype.clear=function(){this.map=new R;this.size=0};U.prototype.clear=U.prototype.clear;U.prototype["delete"]=function(a){a=this.map.delete(a);this.size=this.map.size;return a};
U.prototype.entries=function(){return this.map.entries()};U.prototype.entries=U.prototype.entries;U.prototype.forEach=function(a){var b=this;this.map.forEach(function(c,d){a(d,b)})};U.prototype.forEach=U.prototype.forEach;U.prototype.has=function(a){return this.map.has(a)};U.prototype.has=U.prototype.has;U.prototype.keys=function(){return this.map.keys()};U.prototype.keys=U.prototype.keys;U.prototype.h=function(){return this.map.v()};U.prototype.keySet=U.prototype.h;U.prototype.values=function(){return this.map.values()};
U.prototype.values=U.prototype.values;U.prototype.g=function(){var a=Ua();this.forEach(function(b){a.add(b)});return a};U.prototype.clone=U.prototype.g;U.prototype[Aa]=function(){return this.values()};U.prototype.C=function(a){if(a instanceof U){if(this.size===a.size)return u(this.map,a.map)}else return!1};U.prototype.D=function(){return v(this.map)};
function Ua(a){a=a||[];for(var b={},c=[],d=0,e=0;e<a.length;e++){var f=v(a[e]),h=b[f];if(null==h)c.push(f),b[f]=[a[e],a[e]],d++;else{f=!0;for(var p=0;p<h.length;p+=2)if(u(h[p],a[e])){f=!1;break}f&&(h.push(a[e]),h.push(a[e]),d++)}}return new U(new R(c,b,d))}function Va(a){return L("'",a)}function Wa(a){return L("list",a)}function Xa(a){return L("link",a)};function Ya(a){this.K=a}
function V(a){this.v=a||{};this.A={};for(var b in this.H.A)this.A[b]=this.H.A[b];for(b in this.v.handlers){a:{switch(b){case "_":case "s":case "?":case "i":case "d":case "b":case "'":case "array":case "map":a=!0;break a}a=!1}if(a)throw Error('Cannot override handler for ground type "'+b+'"');this.A[b]=this.v.handlers[b]}this.J=null!=this.v.preferStrings?this.v.preferStrings:this.H.J;this.O=null!=this.v.preferBuffers?this.v.preferBuffers:this.H.O;this.M=this.v.defaultHandler||this.H.M;this.h=this.v.mapBuilder;
this.F=this.v.arrayBuilder}
V.prototype.H={A:{_:function(){return null},"?":function(a){return"t"===a},b:function(a,b){return La(a,b)},i:function(a){return Da(a)},n:function(a){return Ea(a)},d:function(a){return parseFloat(a)},f:function(a){return Fa(a)},c:function(a){return a},":":function(a){return Ga(a)},$:function(a){return Ha(a)},r:function(a){return Ma(a)},z:function(a){a:switch(a){case "-INF":a=-Infinity;break a;case "INF":a=Infinity;break a;case "NaN":a=NaN;break a;default:throw Error("Invalid special double value "+a);
}return a},"'":function(a){return a},m:function(a){return Ka(a)},t:function(a){return new Date(a)},u:function(a){return Ja(a)},set:function(a){return Ua(a)},list:function(a){return Wa(a)},link:function(a){return Xa(a)},cmap:function(a){return T(a,!1)}},M:function(a,b){return L(a,b)},J:!0,O:!0};
V.prototype.g=function(a,b,c,d){if(null==a)return null;switch(typeof a){case "string":return ka(a,c)?(a=Za(this,a),b&&b.write(a,c),b=a):b="^"===a.charAt(0)&&" "!==a.charAt(1)?b.read(a,c):Za(this,a),b;case "object":if(q(a))if("^ "===a[0])if(this.h)if(17>a.length&&this.h.fromArray){d=[];for(c=1;c<a.length;c+=2)d.push(this.g(a[c],b,!0,!1)),d.push(this.g(a[c+1],b,!1,!1));b=this.h.fromArray(d,a)}else{d=this.h.init(a);for(c=1;c<a.length;c+=2)d=this.h.add(d,this.g(a[c],b,!0,!1),this.g(a[c+1],b,!1,!1),a);
b=this.h.finalize(d,a)}else{d=[];for(c=1;c<a.length;c+=2)d.push(this.g(a[c],b,!0,!1)),d.push(this.g(a[c+1],b,!1,!1));b=T(d,!1)}else b=$a(this,a,b,c,d);else{c=n(a);var e=c[0];if((d=1==c.length?this.g(e,b,!1,!1):null)&&d instanceof Ya)a=a[e],c=this.A[d.K],b=null!=c?c(this.g(a,b,!1,!0),this):L(d.K,this.g(a,b,!1,!1));else if(this.h)if(16>c.length&&this.h.fromArray){var f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.g(e,b,!0,!1)),f.push(this.g(a[e],b,!1,!1));b=this.h.fromArray(f,a)}else{f=this.h.init(a);
for(d=0;d<c.length;d++)e=c[d],f=this.h.add(f,this.g(e,b,!0,!1),this.g(a[e],b,!1,!1),a);b=this.h.finalize(f,a)}else{f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.g(e,b,!0,!1)),f.push(this.g(a[e],b,!1,!1));b=T(f,!1)}}return b}return a};V.prototype.decode=V.prototype.g;
function $a(a,b,c,d,e){if(e){var f=[];for(e=0;e<b.length;e++)f.push(a.g(b[e],c,d,!1));return f}f=c&&c.o;if(2===b.length&&"string"===typeof b[0]&&(e=a.g(b[0],c,!1,!1))&&e instanceof Ya)return b=b[1],f=a.A[e.K],null!=f?f=f(a.g(b,c,d,!0),a):L(e.K,a.g(b,c,d,!1));c&&f!=c.o&&(c.o=f);if(a.F){if(32>=b.length&&a.F.fromArray){f=[];for(e=0;e<b.length;e++)f.push(a.g(b[e],c,d,!1));return a.F.fromArray(f,b)}f=a.F.init(b);for(e=0;e<b.length;e++)f=a.F.add(f,a.g(b[e],c,d,!1),b);return a.F.finalize(f,b)}f=[];for(e=
0;e<b.length;e++)f.push(a.g(b[e],c,d,!1));return f}function Za(a,b){if("~"===b.charAt(0)){var c=b.charAt(1);if("~"===c||"^"===c||"`"===c)return b.substring(1);if("#"===c)return new Ya(b.substring(2));var d=a.A[c];return null==d?a.M(c,b.substring(2)):d(b.substring(2),a)}return b};function ab(a){this.g=new V(a)}function bb(a,b){this.h=a;this.g=b||{};this.cache=this.g.cache?this.g.cache:new t}bb.prototype.read=function(a){var b=this.cache;a=this.h.g.g(JSON.parse(a),b);this.cache.clear();return a};bb.prototype.read=bb.prototype.read;var cb=0,db="transit$guid$"+ja();function eb(a){if(null==a)return"null";if(a===String)return"string";if(a===Boolean)return"boolean";if(a===Number)return"number";if(a===Array)return"array";if(a===Object)return"map";var b=a[db];null==b&&("undefined"!=typeof Object.defineProperty?(b=++cb,Object.defineProperty(a,db,{value:b,enumerable:!1})):a[db]=b=++cb);return b}function W(a,b){a=a.toString();for(var c=a.length;c<b;c++)a="0"+a;return a}function fb(){}fb.prototype.tag=function(){return"_"};
fb.prototype.rep=function(){return null};fb.prototype.B=function(){return"null"};function gb(){}gb.prototype.tag=function(){return"s"};gb.prototype.rep=function(a){return a};gb.prototype.B=function(a){return a};function hb(){}hb.prototype.tag=function(){return"i"};hb.prototype.rep=function(a){return a};hb.prototype.B=function(a){return a.toString()};function ib(){}ib.prototype.tag=function(){return"i"};ib.prototype.rep=function(a){return a.toString()};ib.prototype.B=function(a){return a.toString()};
function jb(){}jb.prototype.tag=function(){return"?"};jb.prototype.rep=function(a){return a};jb.prototype.B=function(a){return a.toString()};function kb(){}kb.prototype.tag=function(){return"array"};kb.prototype.rep=function(a){return a};kb.prototype.B=function(){return null};function lb(){}lb.prototype.tag=function(){return"map"};lb.prototype.rep=function(a){return a};lb.prototype.B=function(){return null};function mb(){}mb.prototype.tag=function(){return"t"};
mb.prototype.rep=function(a){return a.getUTCFullYear()+"-"+W(a.getUTCMonth()+1,2)+"-"+W(a.getUTCDate(),2)+"T"+W(a.getUTCHours(),2)+":"+W(a.getUTCMinutes(),2)+":"+W(a.getUTCSeconds(),2)+"."+W(a.getUTCMilliseconds(),3)+"Z"};mb.prototype.B=function(a,b){return b.rep(a)};function nb(){}nb.prototype.tag=function(){return"m"};nb.prototype.rep=function(a){return a.valueOf()};nb.prototype.B=function(a){return a.valueOf().toString()};nb.prototype.P=function(){return new mb};function ob(){}
ob.prototype.tag=function(){return"u"};ob.prototype.rep=function(a){return a.toString()};ob.prototype.B=function(a){return a.toString()};function pb(){}pb.prototype.tag=function(){return":"};pb.prototype.rep=function(a){return a.s};pb.prototype.B=function(a,b){return b.rep(a)};function qb(){}qb.prototype.tag=function(){return"$"};qb.prototype.rep=function(a){return a.s};qb.prototype.B=function(a,b){return b.rep(a)};function rb(){}rb.prototype.tag=function(a){return a.tag};rb.prototype.rep=function(a){return a.rep};
rb.prototype.B=function(){return null};function sb(){}sb.prototype.tag=function(){return"set"};sb.prototype.rep=function(a){var b=[];a.forEach(function(c){b.push(c)});return L("array",b)};sb.prototype.B=function(){return null};function tb(){}tb.prototype.tag=function(){return"map"};tb.prototype.rep=function(a){return a};tb.prototype.B=function(){return null};function ub(){}ub.prototype.tag=function(){return"map"};ub.prototype.rep=function(a){return a};ub.prototype.B=function(){return null};
function vb(){}vb.prototype.tag=function(){return"b"};vb.prototype.rep=function(a){return a.toString("base64")};vb.prototype.B=function(){return null};function wb(){}wb.prototype.tag=function(){return"b"};
wb.prototype.rep=function(a){for(var b,c=0,d=a.length,e="",f;c<d;)f=a.subarray(c,Math.min(c+32768,d)),e+=String.fromCharCode.apply(null,f),c+=32768;if("undefined"!=typeof btoa)b=btoa(e);else{a=String(e);d=0;e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";for(f="";a.charAt(d|0)||(e="=",d%1);f+=e.charAt(63&b>>8-d%1*8)){c=a.charCodeAt(d+=.75);if(255<c)throw Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");b=b<<8|c}b=f}return b};
wb.prototype.B=function(){return null};function xb(){this.A={};this.set(null,new fb);this.set(String,new gb);this.set(Number,new hb);this.set(w,new ib);this.set(Boolean,new jb);this.set(Array,new kb);this.set(Object,new lb);this.set(Date,new nb);this.set(O,new ob);this.set(M,new pb);this.set(N,new qb);this.set(K,new rb);this.set(U,new sb);this.set(S,new tb);this.set(R,new ub);"undefined"!=typeof l.g&&this.set(l.g,new vb);"undefined"!=typeof Uint8Array&&this.set(Uint8Array,new wb)}
xb.prototype.get=function(a){a="string"===typeof a?this.A[a]:this.A[eb(a)];return null!=a?a:this.A["default"]};xb.prototype.get=xb.prototype.get;xb.prototype.set=function(a,b){var c;if(c="string"===typeof a)a:{switch(a){case "null":case "string":case "boolean":case "number":case "array":case "map":c=!1;break a}c=!0}c?this.A[a]=b:this.A[eb(a)]=b};function yb(a){this.g=a||{};this.J=null!=this.g.preferStrings?this.g.preferStrings:!0;this.R=this.g.objectBuilder||null;this.transform=this.g.transform||null;this.A=new xb;if(a=this.g.handlers){if(q(a)||!a.forEach)throw Error('transit writer "handlers" option must be a map');var b=this;a.forEach(function(c,d){if(void 0!==d)b.A.set(d,c);else throw Error("Cannot create handler for JavaScript undefined");})}this.G=this.g.handlerForForeign;this.L=this.g.unpack||function(c){return c instanceof S&&null===
c.j?c.l:!1};this.I=this.g&&this.g.verbose||!1}function zb(a,b){var c=a.A.get(null==b?null:b.constructor);return null!=c?c:(b=b&&b.transitTag)?a.A.get(b):null}function X(a,b,c,d,e){a=a+b+c;return e?e.write(a,d):a}function Ab(a,b,c){var d=[];if(q(b))for(var e=0;e<b.length;e++)d.push(Y(a,b[e],!1,c));else b.forEach(function(f){d.push(Y(a,f,!1,c))});return d}function Bb(a,b){return"string"!==typeof b?(a=zb(a,b))&&1===a.tag(b).length:!0}
function Cb(a,b){var c=a.L(b),d=!0;if(c){for(b=0;b<c.length&&(d=Bb(a,c[b]),d);b+=2);return d}if(b.keys){c=b.keys();var e=null;if(c.next){for(e=c.next();!e.done;){d=Bb(a,e.value);if(!d)break;e=c.next()}return d}}if(b.forEach)return b.forEach(function(f,h){d=d&&Bb(a,h)}),d;throw Error("Cannot walk keys of object type "+(null==b?null:b.constructor).name);}
function Db(a){if(a.constructor.transit$isObject)return!0;var b=a.constructor.toString();b=b.substr(9);b=b.substr(0,b.indexOf("("));b="Object"==b;"undefined"!=typeof Object.defineProperty?Object.defineProperty(a.constructor,"transit$isObject",{value:b,enumerable:!1}):a.constructor.transit$isObject=b;return b}
function Eb(a,b,c){var d=null,e=null,f=null;d=null;var h=0;if(b.constructor===Object||null!=b.forEach||a.G&&Db(b)){if(a.I){if(null!=b.forEach){if(Cb(a,b)){var p={};b.forEach(function(z,A){p[Y(a,A,!0,!1)]=Y(a,z,!1,c)});return p}d=a.L(b);e=[];f=X("~#","cmap","",!0,c);if(d)for(;h<d.length;h+=2)e.push(Y(a,d[h],!1,!1)),e.push(Y(a,d[h+1],!1,c));else b.forEach(function(z,A){e.push(Y(a,A,!1,!1));e.push(Y(a,z,!1,c))});p={};p[f]=e;return p}d=n(b);for(p={};h<d.length;h++)p[Y(a,d[h],!0,!1)]=Y(a,b[d[h]],!1,c);
return p}if(null!=b.forEach){if(Cb(a,b)){d=a.L(b);p=["^ "];if(d)for(;h<d.length;h+=2)p.push(Y(a,d[h],!0,c)),p.push(Y(a,d[h+1],!1,c));else b.forEach(function(z,A){p.push(Y(a,A,!0,c));p.push(Y(a,z,!1,c))});return p}d=a.L(b);e=[];f=X("~#","cmap","",!0,c);if(d)for(;h<d.length;h+=2)e.push(Y(a,d[h],!1,c)),e.push(Y(a,d[h+1],!1,c));else b.forEach(function(z,A){e.push(Y(a,A,!1,c));e.push(Y(a,z,!1,c))});return[f,e]}p=["^ "];for(d=n(b);h<d.length;h++)p.push(Y(a,d[h],!0,c)),p.push(Y(a,b[d[h]],!1,c));return p}if(null!=
a.R)return a.R(b,function(z){return Y(a,z,!0,c)},function(z){return Y(a,z,!1,c)});h=(null==b?null:b.constructor).name;d=Error("Cannot write "+h);d.data={N:b,type:h};throw d;}
function Y(a,b,c,d){null!==a.transform&&(b=a.transform(b));var e=zb(a,b)||(a.G?a.G(b,a.A):null),f=e?e.tag(b):null,h=e?e.rep(b):null;if(null!=e&&null!=f)switch(f){case "_":return c?X("~","_","",c,d):null;case "s":return 0<h.length?(a=h.charAt(0),a="~"===a||"^"===a||"`"===a?"~"+h:h):a=h,X("","",a,c,d);case "?":return c?X("~","?",h.toString()[0],c,d):h;case "i":return Infinity===h?X("~","z","INF",c,d):-Infinity===h?X("~","z","-INF",c,d):isNaN(h)?X("~","z","NaN",c,d):c||"string"===typeof h||h instanceof
w?X("~","i",h.toString(),c,d):h;case "d":return c?X(h.S,"d",h,c,d):h;case "b":return X("~","b",h,c,d);case "'":return a.I?(c={},b=X("~#","'","",!0,d),c[b]=Y(a,h,!1,d),d=c):d=[X("~#","'","",!0,d),Y(a,h,!1,d)],d;case "array":return Ab(a,h,d);case "map":return Eb(a,h,d);default:a:{if(1===f.length){if("string"===typeof h){d=X("~",f,h,c,d);break a}if(c||a.J){(a=a.I&&e.P())?(f=a.tag(b),h=a.B(b,a)):h=e.B(b,e);if(null!==h){d=X("~",f,h,c,d);break a}d=Error('Tag "'+f+'" cannot be encoded as string');d.data=
{tag:f,rep:h,N:b};throw d;}}c=f;b=h;a.I?(e={},e[X("~#",c,"",!0,d)]=Y(a,b,!1,d),d=e):d=[X("~#",c,"",!0,d),Y(a,b,!1,d)]}return d}else throw d=(null==b?null:b.constructor).name,a=Error("Cannot write "+d),a.data={N:b,type:d},a;}function Z(a,b){this.g=a;this.h=b||{};!1===this.h.cache?this.cache=null:this.cache=this.h.cache?this.h.cache:new ma}Z.prototype.v=function(){return this.g};Z.prototype.marshaller=Z.prototype.v;
Z.prototype.write=function(a,b){var c=b||{};b=c.asMapKey||!1;var d=this.g.I?!1:this.cache;if(!1===c.marshalTop)a=Y(this.g,a,b,d);else{c=this.g;var e=JSON,f=e.stringify,h=Y;var p=zb(c,a)||(c.G?c.G(a,c.A):null);if(null!=p)a=1===p.tag(a).length?Va(a):a;else throw b=(null==a?null:a.constructor).name,d=Error("Cannot write "+b),d.data={N:a,type:b},d;a=f.call(e,h(c,a,b,d))}null!=this.cache&&this.cache.clear();return a};Z.prototype.write=Z.prototype.write;
Z.prototype.register=function(a,b){this.g.A.set(a,b)};Z.prototype.register=Z.prototype.register;m("transit.reader",function(a,b){if("json"===a||"json-verbose"===a||null==a)return a=new ab(b),new bb(a,b);throw Error("Cannot create reader of type "+a);});m("transit.writer",function(a,b){if("json"===a||"json-verbose"===a||null==a)return"json-verbose"===a&&(null==b&&(b={}),b.verbose=!0),a=new yb(b),new Z(a,b);b=Error('Type must be "json"');b.data={type:a};throw b;});
m("transit.makeBuilder",function(a){function b(){}b.prototype.init=a.init;b.prototype.add=a.add;b.prototype.finalize=a.finalize;b.prototype.fromArray=a.fromArray;return new b});m("transit.makeWriteHandler",function(a){function b(){}b.prototype.tag=a.tag;b.prototype.rep=a.rep;b.prototype.B=a.stringRep;b.prototype.P=a.getVerboseHandler;return new b});m("transit.date",Ka);m("transit.integer",Da);
m("transit.isInteger",function(a){return a instanceof w?!0:"number"===typeof a&&!isNaN(a)&&Infinity!==a&&parseFloat(a)===parseInt(a,10)});m("transit.uuid",function(a){return Ja(a)});m("transit.isUUID",function(a){return a instanceof O});m("transit.bigInt",Ea);m("transit.isBigInt",function(a){return a instanceof K&&"n"===a.tag});m("transit.bigDec",Fa);m("transit.isBigDec",function(a){return a instanceof K&&"f"===a.tag});m("transit.keyword",Ga);m("transit.isKeyword",function(a){return a instanceof M});
m("transit.symbol",Ha);m("transit.isSymbol",function(a){return a instanceof N});m("transit.binary",La);m("transit.isBinary",function(a){return"undefined"!=typeof l.g&&a instanceof l.g?!0:"undefined"!=typeof Uint8Array&&a instanceof Uint8Array?!0:a instanceof K&&"b"===a.tag});m("transit.uri",Ma);m("transit.isURI",function(a){return a instanceof K&&"r"===a.tag});m("transit.map",T);m("transit.isMap",Pa);m("transit.set",Ua);m("transit.isSet",function(a){return a instanceof U});m("transit.list",Wa);
m("transit.isList",function(a){return a instanceof K&&"list"===a.tag});m("transit.quoted",Va);m("transit.isQuoted",function(a){return a instanceof K&&"'"===a.tag});m("transit.tagged",L);m("transit.isTaggedValue",function(a){return a instanceof K});m("transit.link",Xa);m("transit.isLink",function(a){return a instanceof K&&"link"===a.tag});m("transit.hash",v);m("transit.hashMapLike",ra);m("transit.hashArrayLike",sa);m("transit.equals",u);
m("transit.extendToEQ",function(a,b){a.D=b.hashCode;a.C=b.equals;return a});m("transit.mapToObject",function(a){var b={};a.forEach(function(c,d){if("string"!==typeof d)throw Error("Cannot convert map with non-string keys");b[d]=c});return b});m("transit.objectToMap",function(a){var b=T(),c;for(c in a)a.hasOwnProperty(c)&&b.set(c,a[c]);return b});m("transit.decoder",function(a){return new V(a)});m("transit.UUIDfromString",Ja);m("transit.randomUUID",ja);m("transit.stringableKeys",Cb);
m("transit.readCache",function(){return new t});m("transit.writeCache",function(){return new ma});})();
