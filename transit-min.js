// transit-js 0.8.861
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
;(function(){var h=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function k(a,b){var c=a.split("."),d=h;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b};function ba(a,b,c){return Object.prototype.hasOwnProperty.call(a,b)?a[b]:a[b]=c(b)};function l(a,b){this.s=a|0;this.j=b|0}var ca={},da={};function n(a){return ba(ca,a,function(a){return new l(a,0>a?-1:0)})}function ea(a){a|=0;return-128<=a&&128>a?n(a):new l(a,0>a?-1:0)}function p(a){return isNaN(a)?n(0):a<=-fa?q():a+1>=fa?ga():0>a?r(p(-a)):new l(a%t|0,a/t|0)}function u(a,b){return new l(a,b)}
function ja(a,b){if(!a.length)throw Error("number format error: empty string");var c=b||10;if(2>c||36<c)throw Error("radix out of range: "+c);if("-"==a.charAt(0))return r(ja(a.substring(1),c));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);for(var d=p(Math.pow(c,8)),e=n(0),f=0;f<a.length;f+=8){var g=Math.min(8,a.length-f),m=parseInt(a.substring(f,f+g),c);8>g?(g=p(Math.pow(c,g)),e=v(e,g).add(p(m))):(e=v(e,d),e=e.add(p(m)))}return e}var t=4294967296,fa=t*t/2;
function ga(){return ba(da,ka,function(){return u(-1,2147483647)})}function q(){return ba(da,la,function(){return u(0,-2147483648)})}function ma(){return ba(da,na,function(){return ea(16777216)})}function w(a){return a.j*t+(0<=a.s?a.s:t+a.s)}
l.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(x(this))return"0";if(0>this.j){if(y(this,q())){var b=p(a);var c=z(this,b);b=A(v(c,b),this);return c.toString(a)+b.s.toString(a)}return"-"+r(this).toString(a)}c=p(Math.pow(a,6));b=this;for(var d="";;){var e=z(b,c),f=(A(b,v(e,c)).s>>>0).toString(a);b=e;if(x(b))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};function x(a){return!a.j&&!a.s}function y(a,b){return a.j==b.j&&a.s==b.s}
function B(a,b){if(y(a,b))return 0;var c=0>a.j,d=0>b.j;return c&&!d?-1:!c&&d?1:0>A(a,b).j?-1:1}function r(a){return y(a,q())?q():u(~a.s,~a.j).add(n(1))}l.prototype.add=function(a){var b=this.j>>>16,c=this.j&65535,d=this.s>>>16,e=a.j>>>16,f=a.j&65535,g=a.s>>>16;a=0+((this.s&65535)+(a.s&65535));g=0+(a>>>16)+(d+g);d=0+(g>>>16);d+=c+f;b=0+(d>>>16)+(b+e)&65535;return u((g&65535)<<16|a&65535,b<<16|d&65535)};function A(a,b){return a.add(r(b))}
function v(a,b){if(x(a)||x(b))return n(0);if(y(a,q()))return 1==(b.s&1)?q():n(0);if(y(b,q()))return 1==(a.s&1)?q():n(0);if(0>a.j)return 0>b.j?v(r(a),r(b)):r(v(r(a),b));if(0>b.j)return r(v(a,r(b)));if(0>B(a,ma())&&0>B(b,ma()))return p(w(a)*w(b));var c=a.j>>>16,d=a.j&65535,e=a.s>>>16,f=a.s&65535,g=b.j>>>16,m=b.j&65535,Ea=b.s>>>16,ha=b.s&65535;var Xa=0+f*ha;var Z=0+(Xa>>>16)+e*ha;var I=0+(Z>>>16);Z=(Z&65535)+f*Ea;I+=Z>>>16;I+=d*ha;var ia=0+(I>>>16);I=(I&65535)+e*Ea;ia+=I>>>16;I=(I&65535)+f*m;ia=ia+(I>>>
16)+(c*ha+d*Ea+e*m+f*g)&65535;return u((Z&65535)<<16|Xa&65535,ia<<16|I&65535)}
function z(a,b){if(x(b))throw Error("division by zero");if(x(a))return n(0);if(y(a,q())){if(y(b,n(1))||y(b,n(-1)))return q();if(y(b,q()))return n(1);var c=1;var d=a.j;c=32>c?u(a.s>>>c|d<<32-c,d>>c):u(d>>c-32,0<=d?0:-1);c=oa(z(c,b),1);if(y(c,n(0)))return 0>b.j?n(1):n(-1);d=A(a,v(b,c));return c.add(z(d,b))}if(y(b,q()))return n(0);if(0>a.j)return 0>b.j?z(r(a),r(b)):r(z(r(a),b));if(0>b.j)return r(z(a,r(b)));var e=n(0);for(d=a;0<=B(d,b);){c=Math.max(1,Math.floor(w(d)/w(b)));for(var f=Math.ceil(Math.log(c)/
Math.LN2),f=48>=f?1:Math.pow(2,f-48),g=p(c),m=v(g,b);0>m.j||0<B(m,d);)c-=f,g=p(c),m=v(g,b);x(g)&&(g=n(1));e=e.add(g);d=A(d,m)}return e}function oa(a,b){if(b&=63){var c=a.s;return 32>b?u(c<<b,a.j<<b|c>>>32-b):u(0,c<<b-32)}return a}function pa(a,b){if(b&=63){var c=a.j;return 32>b?u(a.s>>>b|c<<32-b,c>>>b):32==b?u(c,0):u(c>>>b-32,0)}return a}var ka=1,la=2,na=6;function qa(a,b){if(3<a.length){if(b)return!0;var c=a.charAt(1);return"~"===a.charAt(0)?":"===c||"$"===c||"#"===c:!1}return!1}function ra(a){var b=Math.floor(a/44);a=String.fromCharCode(a%44+48);return b?"^"+String.fromCharCode(b+48)+a:"^"+a}function sa(){this.a=this.o=0;this.cache={}}sa.prototype.write=function(a,b){if(qa(a,b)){1936===this.o&&this.clear();var c=this.cache[a];return null==c?(this.cache[a]=[ra(this.o),this.a],this.o++,a):c[1]!=this.a?(c[1]=this.a,c[0]=ra(this.o),this.o++,a):c[0]}return a};
sa.prototype.clear=function(){this.o=0;this.a++};function ta(){this.o=0;this.cache=[]}ta.prototype.write=function(a){1936==this.o&&(this.o=0);this.cache[this.o]=a;this.o++;return a};ta.prototype.read=function(a){return this.cache[2===a.length?a.charCodeAt(1)-48:44*(a.charCodeAt(1)-48)+(a.charCodeAt(2)-48)]};ta.prototype.clear=function(){this.o=0};var C="undefined"!=typeof Object.keys?function(a){return Object.keys(a)}:function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},D="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"===aa(a)};function E(){return Math.round(15*Math.random()).toString(16)}
function ua(){var a=(8|3&Math.round(14*Math.random())).toString(16);return E()+E()+E()+E()+E()+E()+E()+E()+"-"+E()+E()+E()+E()+"-4"+E()+E()+E()+"-"+a+E()+E()+E()+"-"+E()+E()+E()+E()+E()+E()+E()+E()+E()+E()+E()+E()};var va=1;function F(a,b){if(null==a)return null==b;if(a===b)return!0;if("object"===typeof a){if(D(a)){if(D(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!F(a[c],b[c]))return!1;return!0}return!1}if(a.D)return a.D(b);if(null!=b&&"object"===typeof b){if(b.D)return b.D(a);var c=0,d=C(b).length,e;for(e in a)if(a.hasOwnProperty(e)&&(c++,!b.hasOwnProperty(e)||!F(a[e],b[e])))return!1;return c===d}}return!1}function wa(a,b){return a^b+2654435769+(a<<6)+(a>>2)}var xa={},ya=0;
function za(a){var b=0;if(null!=a.forEach)a.forEach(function(a,c){b=(b+(H(c)^H(a)))%4503599627370496});else for(var c=C(a),d=0;d<c.length;d++)var e=c[d],f=a[e],b=(b+(H(e)^H(f)))%4503599627370496;return b}function Aa(a){var b=0;if(D(a))for(var c=0;c<a.length;c++)b=wa(b,H(a[c]));else a.forEach&&a.forEach(function(a){b=wa(b,H(a))});return b}
function H(a){if(null==a)return 0;switch(typeof a){case "number":return a;case "boolean":return!0===a?1:0;case "string":var b=xa[a];if(null==b){for(var c=b=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;ya++;256<=ya&&(xa={},ya=1);xa[a]=b}a=b;return a;case "function":if(b=a.transit$hashCode$)return b;b=va;"undefined"!=typeof Object.defineProperty?Object.defineProperty(a,"transit$hashCode$",{value:b,enumerable:!1}):a.transit$hashCode$=b;va++;return b;default:return a instanceof Date?a.valueOf():
D(a)?Aa(a):a.F?a.F():za(a)}};var Ba="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function J(a,b){this.tag=a;this.rep=b;this.a=-1}J.prototype.toString=function(){return"[TaggedValue: "+this.tag+", "+this.rep+"]"};J.prototype.g=function(a){return F(this,a)};J.prototype.equiv=J.prototype.g;J.prototype.D=function(a){return a instanceof J?this.tag===a.tag&&F(this.rep,a.rep):!1};J.prototype.F=function(){-1===this.a&&(this.a=wa(H(this.tag),H(this.rep)));return this.a};function K(a,b){return new J(a,b)}
var Ca=ja("9007199254740991"),Da=ja("-9007199254740991");function Fa(a){if("number"===typeof a)return a;if(a instanceof l)return a;a=ja(a,10);return 0<B(a,Ca)||0>B(a,Da)?a:w(a)}l.prototype.a=function(a){return F(this,a)};l.prototype.equiv=l.prototype.a;l.prototype.D=function(a){return a instanceof l&&y(this,a)};l.prototype.F=function(){return this.s};function Ga(a){return K("n",a)}function Ha(a){return K("f",a)}function L(a){this.v=a;this.a=-1}L.prototype.toString=function(){return":"+this.v};
L.prototype.namespace=function(){var a=this.v.indexOf("/");return-1!=a?this.v.substring(0,a):null};L.prototype.name=function(){var a=this.v.indexOf("/");return-1!=a?this.v.substring(a+1,this.v.length):this.v};L.prototype.g=function(a){return F(this,a)};L.prototype.equiv=L.prototype.g;L.prototype.D=function(a){return a instanceof L&&this.v==a.v};L.prototype.F=function(){-1===this.a&&(this.a=H(this.v));return this.a};function Ia(a){return new L(a)}function M(a){this.v=a;this.a=-1}
M.prototype.namespace=function(){var a=this.v.indexOf("/");return-1!=a?this.v.substring(0,a):null};M.prototype.name=function(){var a=this.v.indexOf("/");return-1!=a?this.v.substring(a+1,this.v.length):this.v};M.prototype.toString=function(){return this.v};M.prototype.g=function(a){return F(this,a)};M.prototype.equiv=M.prototype.g;M.prototype.D=function(a){return a instanceof M&&this.v==a.v};M.prototype.F=function(){-1===this.a&&(this.a=H(this.v));return this.a};function Ja(a){return new M(a)}
function Ka(a,b,c){var d="";c=c||b+1;for(var e=8*(7-b),f=oa(ea(255),e);b<c;b++,e-=8,f=pa(f,8)){var g=pa(u(a.s&f.s,a.j&f.j),e).toString(16);1==g.length&&(g="0"+g);d+=g}return d}function N(a,b){this.g=a;this.w=b;this.a=-1}N.prototype.toString=function(){var a=this.g,b=this.w;var c=""+(Ka(a,0,4)+"-");c+=Ka(a,4,6)+"-";c+=Ka(a,6,8)+"-";c+=Ka(b,0,2)+"-";return c+=Ka(b,2,8)};N.prototype.C=function(a){return F(this,a)};N.prototype.equiv=N.prototype.C;
N.prototype.D=function(a){return a instanceof N&&y(this.g,a.g)&&y(this.w,a.w)};N.prototype.F=function(){-1===this.a&&(this.a=H(this.toString()));return this.a};
function La(a){a=a.replace(/-/g,"");var b,c;var d=b=0;for(c=24;8>d;d+=2,c-=8)b|=parseInt(a.substring(d,d+2),16)<<c;var e=0;d=8;for(c=24;16>d;d+=2,c-=8)e|=parseInt(a.substring(d,d+2),16)<<c;var f=u(e,b);b=0;d=16;for(c=24;24>d;d+=2,c-=8)b|=parseInt(a.substring(d,d+2),16)<<c;e=0;for(c=d=24;32>d;d+=2,c-=8)e|=parseInt(a.substring(d,d+2),16)<<c;return new N(f,u(e,b))}function Ma(a){a="number"===typeof a?a:parseInt(a,10);return new Date(a)}
Date.prototype.D=function(a){return a instanceof Date?this.valueOf()===a.valueOf():!1};Date.prototype.F=function(){return this.valueOf()};
function Na(a,b){if(b&&!1===b.P||"undefined"==typeof h.G)if("undefined"!=typeof Uint8Array){if("undefined"!=typeof atob)var c=atob(a);else{c=String(a).replace(/=+$/,"");if(1==c.length%4)throw Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var d=0,e,f,g=0,m="";f=c.charAt(g++);~f&&(e=d%4?64*e+f:f,d++%4)?m+=String.fromCharCode(255&e>>(-2*d&6)):0)f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(f);c=m}d=c.length;e=new Uint8Array(d);for(f=0;f<
d;f++)e[f]=c.charCodeAt(f);c=e}else c=K("b",a);else c=new h.G(a,"base64");return c}function Oa(a){return K("r",a)}function O(a,b){this.entries=a;this.type=b||0;this.o=0}O.prototype.next=function(){if(this.o<this.entries.length){var a=null;0===this.type?a=this.entries[this.o]:1===this.type?a=this.entries[this.o+1]:a=[this.entries[this.o],this.entries[this.o+1]];a={value:a,done:!1};this.o+=2;return a}return{value:null,done:!0}};O.prototype.next=O.prototype.next;O.prototype[Ba]=function(){return this};
function P(a,b){this.map=a;this.type=b||0;this.keys=Pa(this.map);this.o=0;this.g=null;this.a=0}P.prototype.next=function(){if(this.o<this.map.size){this.g&&this.a<this.g.length||(this.g=this.map.map[this.keys[this.o]],this.a=0);var a=null;0===this.type?a=this.g[this.a]:1===this.type?a=this.g[this.a+1]:a=[this.g[this.a],this.g[this.a+1]];a={value:a,done:!1};this.o++;this.a+=2;return a}return{value:null,done:!0}};P.prototype.next=P.prototype.next;P.prototype[Ba]=function(){return this};
function Qa(a,b){if(a instanceof Q&&Ra(b)){if(a.size!==b.size)return!1;for(var c in a.map)for(var d=a.map[c],e=0;e<d.length;e+=2)if(!F(d[e+1],b.get(d[e])))return!1;return!0}if(a instanceof R&&Ra(b)){if(a.size!==b.size)return!1;c=a.l;for(e=0;e<c.length;e+=2)if(!F(c[e+1],b.get(c[e])))return!1;return!0}if(null!=b&&"object"===typeof b&&(e=C(b),c=e.length,a.size===c)){for(d=0;d<c;d++){var f=e[d];if(!a.has(f)||!F(b[f],a.get(f)))return!1}return!0}return!1}
function Sa(a){return null==a?"null":"array"==aa(a)?"["+a.toString()+"]":"string"==typeof a?'"'+a+'"':a.toString()}function Ta(a){var b=0,c="TransitMap {";a.forEach(function(d,e){c+=Sa(e)+" => "+Sa(d);b<a.size-1&&(c+=", ");b++});return c+"}"}function Ua(a){var b=0,c="TransitSet {";a.forEach(function(d){c+=Sa(d);b<a.size-1&&(c+=", ");b++});return c+"}"}function R(a){this.l=a;this.h=null;this.a=-1;this.size=a.length/2;this.g=0}R.prototype.toString=function(){return Ta(this)};R.prototype.inspect=function(){return this.toString()};
function Va(a){if(a.h)throw Error("Invalid operation, already converted");if(8>a.size)return!1;a.g++;return 32<a.g?(a.h=S(a.l,!1,!0),a.l=[],!0):!1}R.prototype.clear=function(){this.a=-1;this.h?this.h.clear():this.l=[];this.size=0};R.prototype.clear=R.prototype.clear;R.prototype.keys=function(){return this.h?this.h.keys():new O(this.l,0)};R.prototype.keys=R.prototype.keys;R.prototype.w=function(){if(this.h)return this.h.w();for(var a=[],b=0,c=0;c<this.l.length;b++,c+=2)a[b]=this.l[c];return a};
R.prototype.keySet=R.prototype.w;R.prototype.entries=function(){return this.h?this.h.entries():new O(this.l,2)};R.prototype.entries=R.prototype.entries;R.prototype.values=function(){return this.h?this.h.values():new O(this.l,1)};R.prototype.values=R.prototype.values;R.prototype.forEach=function(a){if(this.h)this.h.forEach(a);else for(var b=0;b<this.l.length;b+=2)a(this.l[b+1],this.l[b])};R.prototype.forEach=R.prototype.forEach;
R.prototype.get=function(a,b){if(this.h)return this.h.get(a);if(Va(this))return this.get(a);for(var c=0;c<this.l.length;c+=2)if(F(this.l[c],a))return this.l[c+1];return b};R.prototype.get=R.prototype.get;R.prototype.has=function(a){if(this.h)return this.h.has(a);if(Va(this))return this.has(a);for(var b=0;b<this.l.length;b+=2)if(F(this.l[b],a))return!0;return!1};R.prototype.has=R.prototype.has;
R.prototype.set=function(a,b){this.a=-1;if(this.h)this.h.set(a,b),this.size=this.h.size;else{for(var c=0;c<this.l.length;c+=2)if(F(this.l[c],a)){this.l[c+1]=b;return}this.l.push(a);this.l.push(b);this.size++;32<this.size&&(this.h=S(this.l,!1,!0),this.l=null)}};R.prototype.set=R.prototype.set;
R.prototype["delete"]=function(a){this.a=-1;if(this.h)return a=this.h["delete"](a),this.size=this.h.size,a;for(var b=0;b<this.l.length;b+=2)if(F(this.l[b],a))return a=this.l[b+1],this.l.splice(b,2),this.size--,a};R.prototype.C=function(){var a=S();this.forEach(function(b,c){a.set(c,b)});return a};R.prototype.clone=R.prototype.C;R.prototype[Ba]=function(){return this.entries()};R.prototype.F=function(){if(this.h)return this.h.F();-1===this.a&&(this.a=za(this));return this.a};
R.prototype.D=function(a){return this.h?Qa(this.h,a):Qa(this,a)};function Q(a,b,c){this.map=b||{};this.a=a||[];this.size=c||0;this.g=-1}Q.prototype.toString=function(){return Ta(this)};Q.prototype.inspect=function(){return this.toString()};Q.prototype.clear=function(){this.g=-1;this.map={};this.a=[];this.size=0};Q.prototype.clear=Q.prototype.clear;function Pa(a){return a.a?a.a:C(a.map)}
Q.prototype["delete"]=function(a){this.g=-1;this.a=null;for(var b=H(a),c=this.map[b],d=0;d<c.length;d+=2)if(F(a,c[d]))return a=c[d+1],c.splice(d,2),0===c.length&&delete this.map[b],this.size--,a};Q.prototype.entries=function(){return new P(this,2)};Q.prototype.entries=Q.prototype.entries;Q.prototype.forEach=function(a){for(var b=Pa(this),c=0;c<b.length;c++)for(var d=this.map[b[c]],e=0;e<d.length;e+=2)a(d[e+1],d[e],this)};Q.prototype.forEach=Q.prototype.forEach;
Q.prototype.get=function(a,b){var c=H(a),c=this.map[c];if(null!=c)for(var d=0;d<c.length;d+=2){if(F(a,c[d]))return c[d+1]}else return b};Q.prototype.get=Q.prototype.get;Q.prototype.has=function(a){var b=H(a),b=this.map[b];if(null!=b)for(var c=0;c<b.length;c+=2)if(F(a,b[c]))return!0;return!1};Q.prototype.has=Q.prototype.has;Q.prototype.keys=function(){return new P(this,0)};Q.prototype.keys=Q.prototype.keys;
Q.prototype.w=function(){for(var a=Pa(this),b=[],c=0;c<a.length;c++)for(var d=this.map[a[c]],e=0;e<d.length;e+=2)b.push(d[e]);return b};Q.prototype.keySet=Q.prototype.w;Q.prototype.set=function(a,b){this.g=-1;var c=H(a),d=this.map[c];if(null==d)this.a&&this.a.push(c),this.map[c]=[a,b],this.size++;else{for(var c=!0,e=0;e<d.length;e+=2)if(F(b,d[e])){c=!1;d[e]=b;break}c&&(d.push(a),d.push(b),this.size++)}};Q.prototype.set=Q.prototype.set;Q.prototype.values=function(){return new P(this,1)};
Q.prototype.values=Q.prototype.values;Q.prototype.C=function(){var a=S();this.forEach(function(b,c){a.set(c,b)});return a};Q.prototype.clone=Q.prototype.C;Q.prototype[Ba]=function(){return this.entries()};Q.prototype.F=function(){-1===this.g&&(this.g=za(this));return this.g};Q.prototype.D=function(a){return Qa(this,a)};
function S(a,b,c){a=a||[];b=!1===b?b:!0;if((!0!==c||!c)&&64>=a.length){if(b){var d=a;a=[];for(b=0;b<d.length;b+=2){var e=!1;for(c=0;c<a.length;c+=2)if(F(a[c],d[b])){a[c+1]=d[b+1];e=!0;break}e||(a.push(d[b]),a.push(d[b+1]))}}return new R(a)}var d={},e=[],f=0;for(b=0;b<a.length;b+=2){c=H(a[b]);var g=d[c];if(null==g)e.push(c),d[c]=[a[b],a[b+1]],f++;else{var m=!0;for(c=0;c<g.length;c+=2)if(F(g[c],a[b])){g[c+1]=a[b+1];m=!1;break}m&&(g.push(a[b]),g.push(a[b+1]),f++)}}return new Q(e,d,f)}
function Ra(a){return a instanceof R||a instanceof Q}function T(a){this.map=a;this.size=a.size}T.prototype.toString=function(){return Ua(this)};T.prototype.inspect=function(){return this.toString()};T.prototype.add=function(a){this.map.set(a,a);this.size=this.map.size};T.prototype.add=T.prototype.add;T.prototype.clear=function(){this.map=new Q;this.size=0};T.prototype.clear=T.prototype.clear;T.prototype["delete"]=function(a){a=this.map["delete"](a);this.size=this.map.size;return a};
T.prototype.entries=function(){return this.map.entries()};T.prototype.entries=T.prototype.entries;T.prototype.forEach=function(a){var b=this;this.map.forEach(function(c,d){a(d,b)})};T.prototype.forEach=T.prototype.forEach;T.prototype.has=function(a){return this.map.has(a)};T.prototype.has=T.prototype.has;T.prototype.keys=function(){return this.map.keys()};T.prototype.keys=T.prototype.keys;T.prototype.g=function(){return this.map.w()};T.prototype.keySet=T.prototype.g;T.prototype.values=function(){return this.map.values()};
T.prototype.values=T.prototype.values;T.prototype.a=function(){var a=Wa();this.forEach(function(b){a.add(b)});return a};T.prototype.clone=T.prototype.a;T.prototype[Ba]=function(){return this.values()};T.prototype.D=function(a){if(a instanceof T){if(this.size===a.size)return F(this.map,a.map)}else return!1};T.prototype.F=function(){return H(this.map)};
function Wa(a){a=a||[];for(var b={},c=[],d=0,e=0;e<a.length;e++){var f=H(a[e]),g=b[f];if(null==g)c.push(f),b[f]=[a[e],a[e]],d++;else{for(var f=!0,m=0;m<g.length;m+=2)if(F(g[m],a[e])){f=!1;break}f&&(g.push(a[e]),g.push(a[e]),d++)}}return new T(new Q(c,b,d))}function Ya(a){return K("'",a)}function Za(a){return K("list",a)}function $a(a){return K("link",a)};var ab=0,bb="transit$guid$"+ua();function cb(a){if(null==a)return"null";if(a===String)return"string";if(a===Boolean)return"boolean";if(a===Number)return"number";if(a===Array)return"array";if(a===Object)return"map";var b=a[bb];null==b&&("undefined"!=typeof Object.defineProperty?(b=++ab,Object.defineProperty(a,bb,{value:b,enumerable:!1})):a[bb]=b=++ab);return b}function U(a,b){for(var c=a.toString(),d=c.length;d<b;d++)c="0"+c;return c}function db(){}db.prototype.tag=function(){return"_"};
db.prototype.rep=function(){return null};db.prototype.B=function(){return"null"};function eb(){}eb.prototype.tag=function(){return"s"};eb.prototype.rep=function(a){return a};eb.prototype.B=function(a){return a};function fb(){}fb.prototype.tag=function(){return"i"};fb.prototype.rep=function(a){return a};fb.prototype.B=function(a){return a.toString()};function gb(){}gb.prototype.tag=function(){return"i"};gb.prototype.rep=function(a){return a.toString()};gb.prototype.B=function(a){return a.toString()};
function hb(){}hb.prototype.tag=function(){return"?"};hb.prototype.rep=function(a){return a};hb.prototype.B=function(a){return a.toString()};function ib(){}ib.prototype.tag=function(){return"array"};ib.prototype.rep=function(a){return a};ib.prototype.B=function(){return null};function jb(){}jb.prototype.tag=function(){return"map"};jb.prototype.rep=function(a){return a};jb.prototype.B=function(){return null};function kb(){}kb.prototype.tag=function(){return"t"};
kb.prototype.rep=function(a){return a.getUTCFullYear()+"-"+U(a.getUTCMonth()+1,2)+"-"+U(a.getUTCDate(),2)+"T"+U(a.getUTCHours(),2)+":"+U(a.getUTCMinutes(),2)+":"+U(a.getUTCSeconds(),2)+"."+U(a.getUTCMilliseconds(),3)+"Z"};kb.prototype.B=function(a,b){return b.rep(a)};function lb(){}lb.prototype.tag=function(){return"m"};lb.prototype.rep=function(a){return a.valueOf()};lb.prototype.B=function(a){return a.valueOf().toString()};lb.prototype.R=function(){return new kb};function mb(){}
mb.prototype.tag=function(){return"u"};mb.prototype.rep=function(a){return a.toString()};mb.prototype.B=function(a){return a.toString()};function nb(){}nb.prototype.tag=function(){return":"};nb.prototype.rep=function(a){return a.v};nb.prototype.B=function(a,b){return b.rep(a)};function ob(){}ob.prototype.tag=function(){return"$"};ob.prototype.rep=function(a){return a.v};ob.prototype.B=function(a,b){return b.rep(a)};function pb(){}pb.prototype.tag=function(a){return a.tag};pb.prototype.rep=function(a){return a.rep};
pb.prototype.B=function(){return null};function qb(){}qb.prototype.tag=function(){return"set"};qb.prototype.rep=function(a){var b=[];a.forEach(function(a){b.push(a)});return K("array",b)};qb.prototype.B=function(){return null};function rb(){}rb.prototype.tag=function(){return"map"};rb.prototype.rep=function(a){return a};rb.prototype.B=function(){return null};function sb(){}sb.prototype.tag=function(){return"map"};sb.prototype.rep=function(a){return a};sb.prototype.B=function(){return null};
function tb(){}tb.prototype.tag=function(){return"b"};tb.prototype.rep=function(a){return a.toString("base64")};tb.prototype.B=function(){return null};function ub(){}ub.prototype.tag=function(){return"b"};
ub.prototype.rep=function(a){for(var b=0,c=a.length,d="",e;b<c;)e=a.subarray(b,Math.min(b+32768,c)),d+=String.fromCharCode.apply(null,e),b+=32768;if("undefined"!=typeof btoa)var f=btoa(d);else{a=String(d);c=0;d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";for(e="";a.charAt(c|0)||(d="=",c%1);e+=d.charAt(63&f>>8-c%1*8)){b=a.charCodeAt(c+=.75);if(255<b)throw Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");f=f<<8|b}f=e}return f};
ub.prototype.B=function(){return null};function vb(){this.A={};this.set(null,new db);this.set(String,new eb);this.set(Number,new fb);this.set(l,new gb);this.set(Boolean,new hb);this.set(Array,new ib);this.set(Object,new jb);this.set(Date,new lb);this.set(N,new mb);this.set(L,new nb);this.set(M,new ob);this.set(J,new pb);this.set(T,new qb);this.set(R,new rb);this.set(Q,new sb);"undefined"!=typeof h.G&&this.set(h.G,new tb);"undefined"!=typeof Uint8Array&&this.set(Uint8Array,new ub)}
vb.prototype.get=function(a){a="string"===typeof a?this.A[a]:this.A[cb(a)];return null!=a?a:this.A["default"]};vb.prototype.get=vb.prototype.get;vb.prototype.set=function(a,b){var c;if(c="string"===typeof a)a:{switch(a){case "null":case "string":case "boolean":case "number":case "array":case "map":c=!1;break a}c=!0}c?this.A[a]=b:this.A[cb(a)]=b};function wb(a){this.L=a}
function V(a){this.w=a||{};this.A={};for(var b in this.I.A)this.A[b]=this.I.A[b];for(b in this.w.handlers){a:{switch(b){case "_":case "s":case "?":case "i":case "d":case "b":case "'":case "array":case "map":a=!0;break a}a=!1}if(a)throw Error('Cannot override handler for ground type "'+b+'"');this.A[b]=this.w.handlers[b]}this.K=null!=this.w.preferStrings?this.w.preferStrings:this.I.K;this.P=null!=this.w.preferBuffers?this.w.preferBuffers:this.I.P;this.N=this.w.defaultHandler||this.I.N;this.g=this.w.mapBuilder;
this.C=this.w.arrayBuilder}
V.prototype.I={A:{_:function(){return null},"?":function(a){return"t"===a},b:function(a,b){return Na(a,b)},i:function(a){return Fa(a)},n:function(a){return Ga(a)},d:function(a){return parseFloat(a)},f:function(a){return Ha(a)},c:function(a){return a},":":function(a){return Ia(a)},$:function(a){return Ja(a)},r:function(a){return Oa(a)},z:function(a){a:switch(a){case "-INF":a=-Infinity;break a;case "INF":a=Infinity;break a;case "NaN":a=NaN;break a;default:throw Error("Invalid special double value "+a);
}return a},"'":function(a){return a},m:function(a){return Ma(a)},t:function(a){return new Date(a)},u:function(a){return La(a)},set:function(a){return Wa(a)},list:function(a){return Za(a)},link:function(a){return $a(a)},cmap:function(a){return S(a,!1)}},N:function(a,b){return K(a,b)},K:!0,P:!0};
V.prototype.a=function(a,b,c,d){if(null==a)return null;switch(typeof a){case "string":return qa(a,c)?(a=xb(this,a),b&&b.write(a,c),b=a):b="^"===a.charAt(0)&&" "!==a.charAt(1)?b.read(a,c):xb(this,a),b;case "object":if(D(a))if("^ "===a[0])if(this.g)if(17>a.length&&this.g.fromArray){d=[];for(c=1;c<a.length;c+=2)d.push(this.a(a[c],b,!0,!1)),d.push(this.a(a[c+1],b,!1,!1));b=this.g.fromArray(d,a)}else{d=this.g.init(a);for(c=1;c<a.length;c+=2)d=this.g.add(d,this.a(a[c],b,!0,!1),this.a(a[c+1],b,!1,!1),a);
b=this.g.finalize(d,a)}else{d=[];for(c=1;c<a.length;c+=2)d.push(this.a(a[c],b,!0,!1)),d.push(this.a(a[c+1],b,!1,!1));b=S(d,!1)}else b=yb(this,a,b,c,d);else{c=C(a);var e=c[0];if((d=1==c.length?this.a(e,b,!1,!1):null)&&d instanceof wb)a=a[e],c=this.A[d.L],b=null!=c?c(this.a(a,b,!1,!0),this):K(d.L,this.a(a,b,!1,!1));else if(this.g)if(16>c.length&&this.g.fromArray){var f=[];for(e=0;e<c.length;e++)d=c[e],f.push(this.a(d,b,!0,!1)),f.push(this.a(a[d],b,!1,!1));b=this.g.fromArray(f,a)}else{f=this.g.init(a);
for(e=0;e<c.length;e++)d=c[e],f=this.g.add(f,this.a(d,b,!0,!1),this.a(a[d],b,!1,!1),a);b=this.g.finalize(f,a)}else{f=[];for(e=0;e<c.length;e++)d=c[e],f.push(this.a(d,b,!0,!1)),f.push(this.a(a[d],b,!1,!1));b=S(f,!1)}}return b}return a};V.prototype.decode=V.prototype.a;
function yb(a,b,c,d,e){if(e){var f=[];for(e=0;e<b.length;e++)f.push(a.a(b[e],c,d,!1));return f}f=c&&c.o;if(2===b.length&&"string"===typeof b[0]&&(e=a.a(b[0],c,!1,!1))&&e instanceof wb)return f=b[1],b=a.A[e.L],null!=b?f=b(a.a(f,c,d,!0),a):K(e.L,a.a(f,c,d,!1));c&&f!=c.o&&(c.o=f);if(a.C){if(32>=b.length&&a.C.fromArray){f=[];for(e=0;e<b.length;e++)f.push(a.a(b[e],c,d,!1));return a.C.fromArray(f,b)}f=a.C.init(b);for(e=0;e<b.length;e++)f=a.C.add(f,a.a(b[e],c,d,!1),b);return a.C.finalize(f,b)}f=[];for(e=
0;e<b.length;e++)f.push(a.a(b[e],c,d,!1));return f}function xb(a,b){if("~"===b.charAt(0)){var c=b.charAt(1);if("~"===c||"^"===c||"`"===c)return b.substring(1);if("#"===c)return new wb(b.substring(2));var d=a.A[c];return null==d?a.N(c,b.substring(2)):d(b.substring(2),a)}return b};function zb(a){this.a=new V(a)}function Ab(a,b){this.g=a;this.a=b||{};this.cache=this.a.cache?this.a.cache:new ta}Ab.prototype.read=function(a){var b=this.cache;a=this.g.a.a(JSON.parse(a),b);this.cache.clear();return a};Ab.prototype.read=Ab.prototype.read;function Bb(a){this.a=a||{};this.K=null!=this.a.preferStrings?this.a.preferStrings:!0;this.S=this.a.objectBuilder||null;this.transform=this.a.transform||null;this.A=new vb;if(a=this.a.handlers){if(D(a)||!a.forEach)throw Error('transit writer "handlers" option must be a map');var b=this;a.forEach(function(a,d){if(void 0!==d)b.A.set(d,a);else throw Error("Cannot create handler for JavaScript undefined");})}this.H=this.a.handlerForForeign;this.M=this.a.unpack||function(a){return a instanceof R&&null===
a.h?a.l:!1};this.J=this.a&&this.a.verbose||!1}function Cb(a,b){var c=a.A.get(null==b?null:b.constructor);return null!=c?c:(c=b&&b.transitTag)?a.A.get(c):null}function W(a,b,c,d,e){a=a+b+c;return e?e.write(a,d):a}function Db(a,b,c){var d=[];if(D(b))for(var e=0;e<b.length;e++)d.push(X(a,b[e],!1,c));else b.forEach(function(b){d.push(X(a,b,!1,c))});return d}function Eb(a,b){if("string"!==typeof b){var c=Cb(a,b);return c&&1===c.tag(b).length}return!0}
function Fb(a,b){var c=a.M(b),d=!0;if(c){for(var e=0;e<c.length&&(d=Eb(a,c[e]),d);e+=2);return d}if(b.keys&&(c=b.keys(),e=null,c.next)){for(e=c.next();!e.done;){d=Eb(a,e.value);if(!d)break;e=c.next()}return d}if(b.forEach)return b.forEach(function(b,c){d=d&&Eb(a,c)}),d;throw Error("Cannot walk keys of object type "+(null==b?null:b.constructor).name);}
function Gb(a){if(a.constructor.transit$isObject)return!0;var b=a.constructor.toString(),b=b.substr(9),b=b.substr(0,b.indexOf("(")),b="Object"==b;"undefined"!=typeof Object.defineProperty?Object.defineProperty(a.constructor,"transit$isObject",{value:b,enumerable:!1}):a.constructor.transit$isObject=b;return b}
function Hb(a,b,c){var d=null,e=null,f=null,d=null,g=0;if(b.constructor===Object||null!=b.forEach||a.H&&Gb(b)){if(a.J){if(null!=b.forEach){if(Fb(a,b)){var m={};b.forEach(function(b,d){m[X(a,d,!0,!1)]=X(a,b,!1,c)});return m}d=a.M(b);e=[];f=W("~#","cmap","",!0,c);if(d)for(;g<d.length;g+=2)e.push(X(a,d[g],!1,!1)),e.push(X(a,d[g+1],!1,c));else b.forEach(function(b,d){e.push(X(a,d,!1,!1));e.push(X(a,b,!1,c))});m={};m[f]=e;return m}d=C(b);for(m={};g<d.length;g++)m[X(a,d[g],!0,!1)]=X(a,b[d[g]],!1,c);return m}if(null!=
b.forEach){if(Fb(a,b)){d=a.M(b);m=["^ "];if(d)for(;g<d.length;g+=2)m.push(X(a,d[g],!0,c)),m.push(X(a,d[g+1],!1,c));else b.forEach(function(b,d){m.push(X(a,d,!0,c));m.push(X(a,b,!1,c))});return m}d=a.M(b);e=[];f=W("~#","cmap","",!0,c);if(d)for(;g<d.length;g+=2)e.push(X(a,d[g],!1,c)),e.push(X(a,d[g+1],!1,c));else b.forEach(function(b,d){e.push(X(a,d,!1,c));e.push(X(a,b,!1,c))});return[f,e]}m=["^ "];for(d=C(b);g<d.length;g++)m.push(X(a,d[g],!0,c)),m.push(X(a,b[d[g]],!1,c));return m}if(null!=a.S)return a.S(b,
function(b){return X(a,b,!0,c)},function(b){return X(a,b,!1,c)});g=(null==b?null:b.constructor).name;d=Error("Cannot write "+g);d.data={O:b,type:g};throw d;}
function X(a,b,c,d){null!==a.transform&&(b=a.transform(b));var e=Cb(a,b)||(a.H?a.H(b,a.A):null),f=e?e.tag(b):null,g=e?e.rep(b):null;if(null!=e&&null!=f)switch(f){case "_":return c?W("~","_","",c,d):null;case "s":return 0<g.length?(a=g.charAt(0),a="~"===a||"^"===a||"`"===a?"~"+g:g):a=g,W("","",a,c,d);case "?":return c?W("~","?",g.toString()[0],c,d):g;case "i":return Infinity===g?W("~","z","INF",c,d):-Infinity===g?W("~","z","-INF",c,d):isNaN(g)?W("~","z","NaN",c,d):c||"string"===typeof g||g instanceof
l?W("~","i",g.toString(),c,d):g;case "d":return c?W(g.T,"d",g,c,d):g;case "b":return W("~","b",g,c,d);case "'":return a.J?(c={},b=W("~#","'","",!0,d),c[b]=X(a,g,!1,d),d=c):d=[W("~#","'","",!0,d),X(a,g,!1,d)],d;case "array":return Db(a,g,d);case "map":return Hb(a,g,d);default:a:{if(1===f.length){if("string"===typeof g){d=W("~",f,g,c,d);break a}if(c||a.K){(a=a.J&&e.R())?(f=a.tag(b),g=a.B(b,a)):g=e.B(b,e);if(null!==g){d=W("~",f,g,c,d);break a}d=Error('Tag "'+f+'" cannot be encoded as string');d.data=
{tag:f,rep:g,O:b};throw d;}}c=f;b=g;a.J?(e={},e[W("~#",c,"",!0,d)]=X(a,b,!1,d),d=e):d=[W("~#",c,"",!0,d),X(a,b,!1,d)]}return d}else throw d=(null==b?null:b.constructor).name,a=Error("Cannot write "+d),a.data={O:b,type:d},a;}function Ib(a,b){var c=Cb(a,b)||(a.H?a.H(b,a.A):null);if(null!=c)return 1===c.tag(b).length?Ya(b):b;var c=(null==b?null:b.constructor).name,d=Error("Cannot write "+c);d.data={O:b,type:c};throw d;}
function Y(a,b){this.a=a;this.g=b||{};!1===this.g.cache?this.cache=null:this.cache=this.g.cache?this.g.cache:new sa}Y.prototype.C=function(){return this.a};Y.prototype.marshaller=Y.prototype.C;Y.prototype.write=function(a,b){var c=b||{};var d=c.asMapKey||!1;var e=this.a.J?!1:this.cache;!1===c.marshalTop?d=X(this.a,a,d,e):(c=this.a,d=JSON.stringify(X(c,Ib(c,a),d,e)));null!=this.cache&&this.cache.clear();return d};Y.prototype.write=Y.prototype.write;Y.prototype.w=function(a,b){this.a.A.set(a,b)};
Y.prototype.register=Y.prototype.w;k("transit.reader",function(a,b){if("json"===a||"json-verbose"===a||null==a){var c=new zb(b);return new Ab(c,b)}throw Error("Cannot create reader of type "+a);});k("transit.writer",function(a,b){if("json"===a||"json-verbose"===a||null==a){"json-verbose"===a&&(b||(b={}),b.verbose=!0);var c=new Bb(b);return new Y(c,b)}c=Error('Type must be "json"');c.data={type:a};throw c;});
k("transit.makeBuilder",function(a){function b(){}b.prototype.init=a.init;b.prototype.add=a.add;b.prototype.finalize=a.finalize;b.prototype.fromArray=a.fromArray;return new b});k("transit.makeWriteHandler",function(a){function b(){}b.prototype.tag=a.tag;b.prototype.rep=a.rep;b.prototype.B=a.stringRep;b.prototype.R=a.getVerboseHandler;return new b});k("transit.date",Ma);k("transit.integer",Fa);
k("transit.isInteger",function(a){return a instanceof l?!0:"number"===typeof a&&!isNaN(a)&&Infinity!==a&&parseFloat(a)===parseInt(a,10)});k("transit.uuid",function(a){return La(a)});k("transit.isUUID",function(a){return a instanceof N});k("transit.bigInt",Ga);k("transit.isBigInt",function(a){return a instanceof J&&"n"===a.tag});k("transit.bigDec",Ha);k("transit.isBigDec",function(a){return a instanceof J&&"f"===a.tag});k("transit.keyword",Ia);k("transit.isKeyword",function(a){return a instanceof L});
k("transit.symbol",Ja);k("transit.isSymbol",function(a){return a instanceof M});k("transit.binary",Na);k("transit.isBinary",function(a){return"undefined"!=typeof h.G&&a instanceof h.G?!0:"undefined"!=typeof Uint8Array&&a instanceof Uint8Array?!0:a instanceof J&&"b"===a.tag});k("transit.uri",Oa);k("transit.isURI",function(a){return a instanceof J&&"r"===a.tag});k("transit.map",S);k("transit.isMap",Ra);k("transit.set",Wa);k("transit.isSet",function(a){return a instanceof T});k("transit.list",Za);
k("transit.isList",function(a){return a instanceof J&&"list"===a.tag});k("transit.quoted",Ya);k("transit.isQuoted",function(a){return a instanceof J&&"'"===a.tag});k("transit.tagged",K);k("transit.isTaggedValue",function(a){return a instanceof J});k("transit.link",$a);k("transit.isLink",function(a){return a instanceof J&&"link"===a.tag});k("transit.hash",H);k("transit.hashMapLike",za);k("transit.hashArrayLike",Aa);k("transit.equals",F);
k("transit.extendToEQ",function(a,b){a.F=b.hashCode;a.D=b.equals;return a});k("transit.mapToObject",function(a){var b={};a.forEach(function(a,d){if("string"!==typeof d)throw Error("Cannot convert map with non-string keys");b[d]=a});return b});k("transit.objectToMap",function(a){var b=S(),c;for(c in a)a.hasOwnProperty(c)&&b.set(c,a[c]);return b});k("transit.decoder",function(a){return new V(a)});k("transit.UUIDfromString",La);k("transit.randomUUID",ua);k("transit.stringableKeys",Fb);
k("transit.readCache",function(){return new ta});k("transit.writeCache",function(){return new sa});})();
