// transit-js 0.8.733
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
;(function(){var aa=this;
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function k(a,b){var c=a.split("."),d=aa;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b};function l(a,b){this.k=a|0;this.e=b|0}var ca={};function m(a){if(-128<=a&&128>a){var b=ca[a];if(b)return b}b=new l(a|0,0>a?-1:0);-128<=a&&128>a&&(ca[a]=b);return b}function n(a){return isNaN(a)||!isFinite(a)?p:a<=-da?q:a+1>=da?ea:0>a?r(n(-a)):new l(a%s|0,a/s|0)}function t(a,b){return new l(a,b)}
function v(a,b){if(0==a.length)throw Error("number format error: empty string");var c=b||10;if(2>c||36<c)throw Error("radix out of range: "+c);if("-"==a.charAt(0))return r(v(a.substring(1),c));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);for(var d=n(Math.pow(c,8)),e=p,f=0;f<a.length;f+=8){var g=Math.min(8,a.length-f),h=parseInt(a.substring(f,f+g),c);8>g?(g=n(Math.pow(c,g)),e=e.multiply(g).add(n(h))):(e=e.multiply(d),e=e.add(n(h)))}return e}
var s=4294967296,da=s*s/2,p=m(0),w=m(1),fa=m(-1),ea=t(-1,2147483647),q=t(0,-2147483648),ga=m(16777216);function x(a){return a.e*s+(0<=a.k?a.k:s+a.k)}
l.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(y(this))return"0";if(0>this.e){if(z(this,q)){var b=n(a),c=A(this,b),b=B(c.multiply(b),this);return c.toString(a)+b.k.toString(a)}return"-"+r(this).toString(a)}for(var c=n(Math.pow(a,6)),b=this,d="";;){var e=A(b,c),f=B(b,e.multiply(c)).k.toString(a),b=e;if(y(b))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};function y(a){return 0==a.e&&0==a.k}function z(a,b){return a.e==b.e&&a.k==b.k}
l.prototype.compare=function(a){if(z(this,a))return 0;var b=0>this.e,c=0>a.e;return b&&!c?-1:!b&&c?1:0>B(this,a).e?-1:1};function r(a){return z(a,q)?q:t(~a.k,~a.e).add(w)}l.prototype.add=function(a){var b=this.e>>>16,c=this.e&65535,d=this.k>>>16,e=a.e>>>16,f=a.e&65535,g=a.k>>>16,h;h=0+((this.k&65535)+(a.k&65535));a=0+(h>>>16);a+=d+g;d=0+(a>>>16);d+=c+f;c=0+(d>>>16);c=c+(b+e)&65535;return t((a&65535)<<16|h&65535,c<<16|d&65535)};function B(a,b){return a.add(r(b))}
l.prototype.multiply=function(a){if(y(this)||y(a))return p;if(z(this,q))return 1==(a.k&1)?q:p;if(z(a,q))return 1==(this.k&1)?q:p;if(0>this.e)return 0>a.e?r(this).multiply(r(a)):r(r(this).multiply(a));if(0>a.e)return r(this.multiply(r(a)));if(0>this.compare(ga)&&0>a.compare(ga))return n(x(this)*x(a));var b=this.e>>>16,c=this.e&65535,d=this.k>>>16,e=this.k&65535,f=a.e>>>16,g=a.e&65535,h=a.k>>>16;a=a.k&65535;var J,u,D,sa;sa=0+e*a;D=0+(sa>>>16);D+=d*a;u=0+(D>>>16);D=(D&65535)+e*h;u+=D>>>16;D&=65535;u+=
c*a;J=0+(u>>>16);u=(u&65535)+d*h;J+=u>>>16;u&=65535;u+=e*g;J+=u>>>16;u&=65535;J=J+(b*a+c*h+d*g+e*f)&65535;return t(D<<16|sa&65535,J<<16|u)};
function A(a,b){if(y(b))throw Error("division by zero");if(y(a))return p;if(z(a,q)){if(z(b,w)||z(b,fa))return q;if(z(b,q))return w;var c;c=1;if(0==c)c=a;else{var d=a.e;c=32>c?t(a.k>>>c|d<<32-c,d>>c):t(d>>c-32,0<=d?0:-1)}c=A(c,b).shiftLeft(1);if(z(c,p))return 0>b.e?w:fa;d=B(a,b.multiply(c));return c.add(A(d,b))}if(z(b,q))return p;if(0>a.e)return 0>b.e?A(r(a),r(b)):r(A(r(a),b));if(0>b.e)return r(A(a,r(b)));for(var e=p,d=a;0<=d.compare(b);){c=Math.max(1,Math.floor(x(d)/x(b)));for(var f=Math.ceil(Math.log(c)/
Math.LN2),f=48>=f?1:Math.pow(2,f-48),g=n(c),h=g.multiply(b);0>h.e||0<h.compare(d);)c-=f,g=n(c),h=g.multiply(b);y(g)&&(g=w);e=e.add(g);d=B(d,h)}return e}l.prototype.shiftLeft=function(a){a&=63;if(0==a)return this;var b=this.k;return 32>a?t(b<<a,this.e<<a|b>>>32-a):t(0,b<<a-32)};function ha(a,b){b&=63;if(0==b)return a;var c=a.e;return 32>b?t(a.k>>>b|c<<32-b,c>>>b):32==b?t(c,0):t(c>>>b-32,0)};var C="undefined"!=typeof Object.keys?function(a){return Object.keys(a)}:function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},E="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"===ba(a)};function F(){return Math.round(15*Math.random()).toString(16)};var ia=1;function G(a,b){if(null==a)return null==b;if(a===b)return!0;if("object"===typeof a){if(E(a)){if(E(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!G(a[c],b[c]))return!1;return!0}return!1}if(a.s)return a.s(b);if(null!=b&&"object"===typeof b){if(b.s)return b.s(a);var c=0,d=C(b).length,e;for(e in a)if(a.hasOwnProperty(e)&&(c++,!b.hasOwnProperty(e)||!G(a[e],b[e])))return!1;return c===d}}return!1}function ja(a,b){return a^b+2654435769+(a<<6)+(a>>2)}var ka={},la=0;
function ma(a){var b=0;if(null!=a.forEach)a.forEach(function(a,c){b=(b+(H(c)^H(a)))%4503599627370496});else for(var c=C(a),d=0;d<c.length;d++)var e=c[d],f=a[e],b=(b+(H(e)^H(f)))%4503599627370496;return b}function na(a){var b=0;if(E(a))for(var c=0;c<a.length;c++)b=ja(b,H(a[c]));else a.forEach&&a.forEach(function(a){b=ja(b,H(a))});return b}
function H(a){if(null==a)return 0;switch(typeof a){case "number":return a;case "boolean":return!0===a?1:0;case "string":var b=ka[a];if(null==b){for(var c=b=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;la++;256<=la&&(ka={},la=1);ka[a]=b}a=b;return a;case "function":return b=a.transit$hashCode$,b||(b=ia,"undefined"!=typeof Object.defineProperty?Object.defineProperty(a,"transit$hashCode$",{value:b,enumerable:!1}):a.transit$hashCode$=b,ia++),b;default:return a instanceof Date?a.valueOf():E(a)?
na(a):a.w?a.w():ma(a)}};var oa={};function I(a,b){this.tag=a;this.rep=b;this.g=-1}I.prototype.toString=function(){return"[TaggedValue: "+this.tag+", "+this.rep+"]"};I.prototype.B=function(a){return G(this,a)};I.prototype.equiv=I.prototype.B;I.prototype.s=function(a){return a instanceof I?this.tag===a.tag&&G(this.rep,a.rep):!1};I.prototype.w=function(){-1===this.g&&(this.g=ja(H(this.tag),H(this.rep)));return this.g};function K(a,b){return new I(a,b)}var pa=v("9007199254740992"),qa=v("-9007199254740992");
function ra(a){if("number"===typeof a||a instanceof l)return a;a=v(a,10);return 0<a.compare(pa)||0>a.compare(qa)?a:x(a)}l.prototype.B=function(a){return G(this,a)};l.prototype.equiv=l.prototype.B;l.prototype.s=function(a){return a instanceof l&&z(this,a)};l.prototype.w=function(){return this.k};function ta(a){return K("n",a)}function ua(a){return K("f",a)}function L(a){this.name=a;this.g=-1}L.prototype.toString=function(){return":"+this.name};L.prototype.B=function(a){return G(this,a)};
L.prototype.equiv=L.prototype.B;L.prototype.s=function(a){return a instanceof L&&this.name==a.name};L.prototype.w=function(){-1===this.g&&(this.g=H(this.name));return this.g};function va(a){return new L(a)}function M(a){this.name=a;this.g=-1}M.prototype.toString=function(){return"[Symbol: "+this.name+"]"};M.prototype.B=function(a){return G(this,a)};M.prototype.equiv=M.prototype.B;M.prototype.s=function(a){return a instanceof M&&this.name==a.name};
M.prototype.w=function(){-1===this.g&&(this.g=H(this.name));return this.g};function wa(a){return new M(a)}function N(a,b,c){var d="";c=c||b+1;for(var e=8*(7-b),f=m(255).shiftLeft(e);b<c;b++,e-=8,f=ha(f,8)){var g=ha(t(a.k&f.k,a.e&f.e),e).toString(16);1==g.length&&(g="0"+g);d+=g}return d}function O(a,b){this.S=a;this.T=b;this.g=-1}O.prototype.toString=function(a){var b=this.S,c=this.T;a=""+(N(b,0,4)+"-");a+=N(b,4,6)+"-";a+=N(b,6,8)+"-";a+=N(c,0,2)+"-";return a+=N(c,2,8)};
O.prototype.B=function(a){return G(this,a)};O.prototype.equiv=O.prototype.B;O.prototype.s=function(a){return a instanceof O&&z(this.S,a.S)&&z(this.T,a.T)};O.prototype.w=function(){-1===this.g&&(this.g=H(this.toString()));return this.g};
function xa(a){a=a.replace(/-/g,"");for(var b=null,c=null,d=c=0,e=24,f=0,f=c=0,e=24;8>f;f+=2,e-=8)c|=parseInt(a.substring(f,f+2),16)<<e;d=0;f=8;for(e=24;16>f;f+=2,e-=8)d|=parseInt(a.substring(f,f+2),16)<<e;b=t(d,c);c=0;f=16;for(e=24;24>f;f+=2,e-=8)c|=parseInt(a.substring(f,f+2),16)<<e;d=0;for(e=f=24;32>f;f+=2,e-=8)d|=parseInt(a.substring(f,f+2),16)<<e;c=t(d,c);return new O(b,c)}function ya(a){a="number"===typeof a?a:parseInt(a,10);return new Date(a)}
Date.prototype.s=function(a){return a instanceof Date?this.valueOf()===a.valueOf():!1};Date.prototype.w=function(){return this.valueOf()};function za(a){return K("b",a)}function Aa(a){return K("r",a)}function P(a,b){this.v=a;this.type=b||0;this.j=0}P.prototype.next=function(){if(this.j<this.v.length){var a=null,a=0===this.type?this.v[this.j]:1===this.type?this.v[this.j+1]:[this.v[this.j],this.v[this.j+1]],a={value:a,done:!1};this.j+=2;return a}return{value:null,done:!0}};P.prototype.next=P.prototype.next;
function Q(a,b){this.map=a;this.type=b||0;this.keys=Ba(this.map);this.j=0;this.D=null;this.C=0}Q.prototype.next=function(){if(this.j<this.map.size){null!=this.D&&this.C<this.D.length||(this.D=this.map.map[this.keys[this.j]],this.C=0);var a=null,a=0===this.type?this.D[this.C]:1===this.type?this.D[this.C+1]:[this.D[this.C],this.D[this.C+1]],a={value:a,done:!1};this.j++;this.C+=2;return a}return{value:null,done:!0}};Q.prototype.next=Q.prototype.next;
function Ca(a,b){if((b instanceof R||b instanceof S)&&a.size===b.size){for(var c in a.map)for(var d=a.map[c],e=0;e<d.length;e+=2)if(!G(d[e+1],b.get(d[e])))return!1;return!0}if(null!=b&&"object"===typeof b&&(c=C(b),d=c.length,a.size===d)){for(e=0;e<d;e++){var f=c[e];if(!a.has(f)||!G(b[f],a.get(f)))return!1}return!0}return!1}function S(a){this.h=a;this.a=null;this.g=-1;this.size=a.length/2;this.W=0}S.prototype.toString=function(){return"[TransitArrayMap]"};
function Da(a){if(a.a)throw Error("Invalid operation, already converted");if(8>a.size)return!1;a.W++;return 32<a.W?(a.a=T(a.h,!1,!0),a.h=[],!0):!1}S.prototype.clear=function(){this.g=-1;this.a?this.a.clear():this.h=[];this.size=0};S.prototype.clear=S.prototype.clear;S.prototype.keys=function(){return this.a?this.a.keys():new P(this.h,0)};S.prototype.keys=S.prototype.keys;S.prototype.F=function(){if(this.a)return this.a.F();for(var a=[],b=0,c=0;c<this.h.length;b++,c+=2)a[b]=this.h[c];return a};
S.prototype.keySet=S.prototype.F;S.prototype.v=function(){return this.a?this.a.v():new P(this.h,2)};S.prototype.entries=S.prototype.v;S.prototype.H=function(){return this.a?this.a.H():new P(this.h,1)};S.prototype.values=S.prototype.H;S.prototype.forEach=function(a){if(this.a)this.a.forEach(a);else for(var b=0;b<this.h.length;b+=2)a(this.h[b+1],this.h[b])};S.prototype.forEach=S.prototype.forEach;
S.prototype.get=function(a,b){if(this.a)return this.a.get(a);if(Da(this))return this.get(a);for(var c=0;c<this.h.length;c+=2)if(G(this.h[c],a))return this.h[c+1];return b};S.prototype.get=S.prototype.get;S.prototype.has=function(a){if(this.a)return this.a.has(a);if(Da(this))return this.has(a);for(var b=0;b<this.h.length;b+=2)if(G(this.h[b],a))return!0;return!1};S.prototype.has=S.prototype.has;
S.prototype.set=function(a,b){this.g=-1;if(this.a)this.a.set(a,b),this.size=this.a.size;else{for(var c=0;c<this.h.length;c+=2)if(G(this.h[c],a)){this.h[c+1]=b;return}this.h.push(a);this.h.push(b);this.size++;32<this.size&&(this.a=T(this.h,!1,!0),this.h=null)}};S.prototype.set=S.prototype.set;S.prototype["delete"]=function(a){this.g=-1;if(this.a)this.a["delete"](a),this.size=this.a.size;else for(var b=0;b<this.h.length;b+=2)if(G(this.h[b],a)){this.h.splice(b,2);this.size--;break}};
S.prototype.w=function(){if(this.a)return this.a.w();-1===this.g&&(this.g=ma(this));return this.g};S.prototype.s=function(a){return this.a?Ca(this.a,a):Ca(this,a)};function R(a,b,c){this.map=b||{};this.I=a||[];this.size=c||0;this.g=-1}R.prototype.toString=function(){return"[TransitMap]"};R.prototype.clear=function(){this.g=-1;this.map={};this.I=[];this.size=0};R.prototype.clear=R.prototype.clear;function Ba(a){return null!=a.I?a.I:C(a.map)}
R.prototype["delete"]=function(a){this.g=-1;this.I=null;for(var b=H(a),c=this.map[b],d=0;d<c.length;d+=2)if(G(a,c[d])){c.splice(d,2);0===c.length&&delete this.map[b];this.size--;break}};R.prototype.v=function(){return new Q(this,2)};R.prototype.entries=R.prototype.v;R.prototype.forEach=function(a){for(var b=Ba(this),c=0;c<b.length;c++)for(var d=this.map[b[c]],e=0;e<d.length;e+=2)a(d[e+1],d[e],this)};R.prototype.forEach=R.prototype.forEach;
R.prototype.get=function(a,b){var c=H(a),c=this.map[c];if(null!=c)for(var d=0;d<c.length;d+=2){if(G(a,c[d]))return c[d+1]}else return b};R.prototype.get=R.prototype.get;R.prototype.has=function(a){var b=H(a),b=this.map[b];if(null!=b)for(var c=0;c<b.length;c+=2)if(G(a,b[c]))return!0;return!1};R.prototype.has=R.prototype.has;R.prototype.keys=function(){return new Q(this,0)};R.prototype.keys=R.prototype.keys;
R.prototype.F=function(){for(var a=Ba(this),b=[],c=0;c<a.length;c++)for(var d=this.map[a[c]],e=0;e<d.length;e+=2)b.push(d[e]);return b};R.prototype.keySet=R.prototype.F;R.prototype.set=function(a,b){this.g=-1;var c=H(a),d=this.map[c];if(null==d)this.I&&this.I.push(c),this.map[c]=[a,b],this.size++;else{for(var c=!0,e=0;e<d.length;e+=2)if(G(b,d[e])){c=!1;d[e]=b;break}c&&(d.push(a),d.push(b),this.size++)}};R.prototype.set=R.prototype.set;R.prototype.H=function(){return new Q(this,1)};
R.prototype.values=R.prototype.H;R.prototype.w=function(){-1===this.g&&(this.g=ma(this));return this.g};R.prototype.s=function(a){return Ca(this,a)};
function T(a,b,c){a=a||[];b=!1===b?b:!0;if((!0!==c||!c)&&64>=a.length){if(b){var d=a;a=[];for(b=0;b<d.length;b+=2){var e=!1;for(c=0;c<a.length;c+=2)if(G(a[c],d[b])){a[c+1]=d[b+1];e=!0;break}e||(a.push(d[b]),a.push(d[b+1]))}}return new S(a)}var d={},e=[],f=0;for(b=0;b<a.length;b+=2){c=H(a[b]);var g=d[c];if(null==g)e.push(c),d[c]=[a[b],a[b+1]],f++;else{var h=!0;for(c=0;c<g.length;c+=2)if(G(g[c],a[b])){g[c+1]=a[b+1];h=!1;break}h&&(g.push(a[b]),g.push(a[b+1]),f++)}}return new R(e,d,f)}
function U(a){this.map=a;this.size=a.size}U.prototype.toString=function(){return"[TransitSet]"};U.prototype.add=function(a){this.map.set(a,a);this.size=this.map.size};U.prototype.add=U.prototype.add;U.prototype.clear=function(){this.map=new R;this.size=0};U.prototype.clear=U.prototype.clear;U.prototype["delete"]=function(a){this.map["delete"](a);this.size=this.map.size};U.prototype.v=function(){return this.map.v()};U.prototype.entries=U.prototype.v;
U.prototype.forEach=function(a){var b=this;this.map.forEach(function(c,d){a(d,b)})};U.prototype.forEach=U.prototype.forEach;U.prototype.has=function(a){return this.map.has(a)};U.prototype.has=U.prototype.has;U.prototype.keys=function(){return this.map.keys()};U.prototype.keys=U.prototype.keys;U.prototype.F=function(){return this.map.F()};U.prototype.keySet=U.prototype.F;U.prototype.H=function(){return this.map.H()};U.prototype.values=U.prototype.H;
U.prototype.s=function(a){if(a instanceof U){if(this.size===a.size)return G(this.map,a.map)}else return!1};U.prototype.w=function(){return H(this.map)};function Ea(a){a=a||[];for(var b={},c=[],d=0,e=0;e<a.length;e++){var f=H(a[e]),g=b[f];if(null==g)c.push(f),b[f]=[a[e],a[e]],d++;else{for(var f=!0,h=0;h<g.length;h+=2)if(G(g[h],a[e])){f=!1;break}f&&(g.push(a[e]),g.push(a[e]),d++)}}return new U(new R(c,b,d))}function Fa(a){return K("'",a)}function Ga(a){return K("list",a)}
function Ha(a){return K("link",a)};function Ia(a,b){if(3<a.length){if(b)return!0;var c=a.charAt(1);return"~"===a.charAt(0)?":"===c||"$"===c||"#"===c:!1}return!1}function Ja(a){var b=Math.floor(a/44);a=String.fromCharCode(a%44+48);return 0===b?"^"+a:"^"+String.fromCharCode(b+48)+a}function Ka(){this.Z=this.L=this.j=0;this.q={}}
Ka.prototype.write=function(a,b){if(Ia(a,b)){4096===this.Z?(this.clear(),this.L=0,this.q={}):1936===this.j&&this.clear();var c=this.q[a];return null==c?(this.q[a]=[Ja(this.j),this.L],this.j++,a):c[1]!=this.L?(c[1]=this.L,c[0]=Ja(this.j),this.j++,a):c[0]}return a};Ka.prototype.clear=function(){this.j=0;this.L++};function La(){this.j=0;this.q=[]}La.prototype.write=function(a){1936==this.j&&(this.j=0);this.q[this.j]=a;this.j++;return a};
La.prototype.V=function(a){return this.q[2===a.length?a.charCodeAt(1)-48:44*(a.charCodeAt(1)-48)+(a.charCodeAt(2)-48)]};La.prototype.clear=function(){this.j=0};function Ma(a){this.P=a}
function V(a){this.options=a||{};this.o={};for(var b in this.N.o)this.o[b]=this.N.o[b];for(b in this.options.handlers){a:{switch(b){case "_":case "s":case "?":case "i":case "d":case "b":case "'":case "array":case "map":a=!0;break a}a=!1}if(a)throw Error('Cannot override handler for ground type "'+b+'"');this.o[b]=this.options.handlers[b]}this.O=null!=this.options.preferStrings?this.options.preferStrings:this.N.O;this.R=this.options.defaultHandler||this.N.R;this.A=this.options.mapBuilder;this.J=this.options.arrayBuilder}
V.prototype.N={o:{_:function(){return null},"?":function(a){return"t"===a},b:function(a){return za(a)},i:function(a){return ra(a)},n:function(a){return ta(a)},d:function(a){return parseFloat(a)},f:function(a){return ua(a)},c:function(a){return a},":":function(a){return va(a)},$:function(a){return wa(a)},r:function(a){return Aa(a)},z:function(a){a:switch(a){case "-INF":a=-Infinity;break a;case "INF":a=Infinity;break a;case "NaN":a=NaN;break a;default:throw Error("Invalid special double value "+a);
}return a},"'":function(a){return a},m:function(a){return ya(a)},t:function(a){return new Date(a)},u:function(a){return xa(a)},set:function(a){return Ea(a)},list:function(a){return Ga(a)},link:function(a){return Ha(a)},cmap:function(a){return T(a,!1)}},R:function(a,b){return K(a,b)},O:!0};
V.prototype.l=function(a,b,c,d){if(null==a)return null;switch(typeof a){case "string":return Ia(a,c)?(a=Na(this,a),b&&b.write(a,c),b=a):b="^"===a.charAt(0)&&" "!==a.charAt(1)?b.V(a,c):Na(this,a),b;case "object":if(E(a))if("^ "===a[0])if(this.A)if(17>a.length&&this.A.fromArray){d=[];for(c=1;c<a.length;c+=2)d.push(this.l(a[c],b,!0,!1)),d.push(this.l(a[c+1],b,!1,!1));b=this.A.fromArray(d,a)}else{d=this.A.init(a);for(c=1;c<a.length;c+=2)d=this.A.add(d,this.l(a[c],b,!0,!1),this.l(a[c+1],b,!1,!1),a);b=
this.A.finalize(d,a)}else{d=[];for(c=1;c<a.length;c+=2)d.push(this.l(a[c],b,!0,!1)),d.push(this.l(a[c+1],b,!1,!1));b=T(d,!1)}else b=Oa(this,a,b,c,d);else{c=C(a);var e=c[0];if((d=1==c.length?this.l(e,b,!1,!1):null)&&d instanceof Ma)a=a[e],c=this.o[d.P],b=null!=c?c(this.l(a,b,!1,!0)):K(d.P,this.l(a,b,!1,!1));else if(this.A)if(16>c.length&&this.A.fromArray){var f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.l(e,b,!0,!1)),f.push(this.l(a[e],b,!1,!1));b=this.A.fromArray(f,a)}else{f=this.A.init(a);for(d=
0;d<c.length;d++)e=c[d],f=this.A.add(f,this.l(e,b,!0,!1),this.l(a[e],b,!1,!1),a);b=this.A.finalize(f,a)}else{f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.l(e,b,!0,!1)),f.push(this.l(a[e],b,!1,!1));b=T(f,!1)}}return b}return a};V.prototype.decode=V.prototype.l;
function Oa(a,b,c,d,e){if(e){var f=[];for(e=0;e<b.length;e++)f.push(a.l(b[e],c,d,!1));return f}f=c&&c.j;if(2===b.length&&"string"===typeof b[0]&&(e=a.l(b[0],c,!1,!1))&&e instanceof Ma)return b=b[1],f=a.o[e.P],null!=f?f=f(a.l(b,c,d,!0)):K(e.P,a.l(b,c,d,!1));c&&f!=c.j&&(c.j=f);if(a.J){if(32>=b.length&&a.J.fromArray){f=[];for(e=0;e<b.length;e++)f.push(a.l(b[e],c,d,!1));return a.J.fromArray(f,b)}f=a.J.init();for(e=0;e<b.length;e++)f=a.J.add(f,a.l(b[e],c,d,!1),b);return a.J.finalize(f,b)}f=[];for(e=0;e<
b.length;e++)f.push(a.l(b[e],c,d,!1));return f}function Na(a,b){if("~"===b.charAt(0)){var c=b.charAt(1);if("~"===c||"^"===c||"`"===c)return b.substring(1);if("#"===c)return new Ma(b.substring(2));var d=a.o[c];return null==d?a.R(c,b.substring(2)):d(b.substring(2))}return b};function Pa(a){this.aa=new V(a)}function Qa(a,b){this.ca=a;this.options=b||{};this.q=this.options.cache?this.options.cache:new La}Qa.prototype.V=function(a){var b=this.q;a=this.ca.aa.l(JSON.parse(a),b);this.q.clear();return a};Qa.prototype.read=Qa.prototype.V;var Ra=0,Sa=(8|3&Math.round(14*Math.random())).toString(16),Ta="transit$guid$"+(F()+F()+F()+F()+F()+F()+F()+F()+"-"+F()+F()+F()+F()+"-4"+F()+F()+F()+"-"+Sa+F()+F()+F()+"-"+F()+F()+F()+F()+F()+F()+F()+F()+F()+F()+F()+F());
function Ua(a){if(null==a)return"null";if(a===String)return"string";if(a===Boolean)return"boolean";if(a===Number)return"number";if(a===Array)return"array";if(a===Object)return"map";var b=a[Ta];null==b&&("undefined"!=typeof Object.defineProperty?(b=++Ra,Object.defineProperty(a,Ta,{value:b,enumerable:!1})):a[Ta]=b=++Ra);return b}function W(a,b){for(var c=a.toString(),d=c.length;d<b;d++)c="0"+c;return c}function Va(){}Va.prototype.tag=function(){return"_"};Va.prototype.rep=function(){return null};
Va.prototype.p=function(){return"null"};function Wa(){}Wa.prototype.tag=function(){return"s"};Wa.prototype.rep=function(a){return a};Wa.prototype.p=function(a){return a};function Xa(){}Xa.prototype.tag=function(){return"i"};Xa.prototype.rep=function(a){return a};Xa.prototype.p=function(a){return a.toString()};function Ya(){}Ya.prototype.tag=function(){return"i"};Ya.prototype.rep=function(a){return a.toString()};Ya.prototype.p=function(a){return a.toString()};function Za(){}Za.prototype.tag=function(){return"?"};
Za.prototype.rep=function(a){return a};Za.prototype.p=function(a){return a.toString()};function $a(){}$a.prototype.tag=function(){return"array"};$a.prototype.rep=function(a){return a};$a.prototype.p=function(){return null};function ab(){}ab.prototype.tag=function(){return"map"};ab.prototype.rep=function(a){return a};ab.prototype.p=function(){return null};function bb(){}bb.prototype.tag=function(){return"t"};
bb.prototype.rep=function(a){return a.getUTCFullYear()+"-"+W(a.getUTCMonth()+1,2)+"-"+W(a.getUTCDate(),2)+"T"+W(a.getUTCHours(),2)+":"+W(a.getUTCMinutes(),2)+":"+W(a.getUTCSeconds(),2)+"."+W(a.getUTCMilliseconds(),3)+"Z"};bb.prototype.p=function(a,b){return b.rep(a)};function X(){}X.prototype.tag=function(){return"m"};X.prototype.rep=function(a){return a.valueOf()};X.prototype.p=function(a){return a.valueOf().toString()};X.prototype.X=function(){return new bb};function cb(){}cb.prototype.tag=function(){return"u"};
cb.prototype.rep=function(a){return a.toString()};cb.prototype.p=function(a){return a.toString()};function db(){}db.prototype.tag=function(){return":"};db.prototype.rep=function(a){return a.name};db.prototype.p=function(a,b){return b.rep(a)};function eb(){}eb.prototype.tag=function(){return"$"};eb.prototype.rep=function(a){return a.name};eb.prototype.p=function(a,b){return b.rep(a)};function fb(){}fb.prototype.tag=function(a){return a.tag};fb.prototype.rep=function(a){return a.rep};
fb.prototype.p=function(){return null};function gb(){}gb.prototype.tag=function(){return"set"};gb.prototype.rep=function(a){var b=[];a.forEach(function(a){b.push(a)});return K("array",b)};gb.prototype.p=function(){return null};function hb(){}hb.prototype.tag=function(){return"map"};hb.prototype.rep=function(a){return a};hb.prototype.p=function(){return null};function ib(){}ib.prototype.tag=function(){return"map"};ib.prototype.rep=function(a){return a};ib.prototype.p=function(){return null};
function jb(){this.o={};this.set(null,new Va);this.set(String,new Wa);this.set(Number,new Xa);this.set(l,new Ya);this.set(Boolean,new Za);this.set(Array,new $a);this.set(Object,new ab);this.set(Date,new X);this.set(O,new cb);this.set(L,new db);this.set(M,new eb);this.set(I,new fb);this.set(U,new gb);this.set(S,new hb);this.set(R,new ib)}jb.prototype.get=function(a){var b=null,b="string"===typeof a?this.o[a]:this.o[Ua(a)];return null!=b?b:this.o["default"]};
jb.prototype.set=function(a,b){var c;if(c="string"===typeof a)a:{switch(a){case "null":case "string":case "boolean":case "number":case "array":case "map":c=!1;break a}c=!0}c?this.o[a]=b:this.o[Ua(a)]=b};function kb(a){this.G=a||{};this.O=null!=this.G.preferStrings?this.G.preferStrings:!0;this.Y=this.G.objectBuilder||null;this.o=new jb;if(a=this.G.handlers){if(E(a)||!a.forEach)throw Error('transit writer "handlers" option must be a map');var b=this;a.forEach(function(a,d){b.o.set(d,a)})}this.Q=this.G.unpack||function(a){return a instanceof S&&null===a.a?a.h:!1};this.M=this.G&&this.G.verbose||!1}
function lb(a,b){var c=a.o.get(null==b?null:b.constructor);return null!=c?c:(c=b&&b.transitTag)?a.o.get(c):null}function Y(a,b,c,d,e){a=a+b+c;return e?e.write(a,d):a}function mb(a,b,c){var d=[];if(E(b))for(var e=0;e<b.length;e++)d.push(Z(a,b[e],!1,c));else b.forEach(function(b){d.push(Z(a,b,!1,c))});return d}function nb(a,b){if("string"!==typeof b){var c=lb(a,b);return c&&1===c.tag(b).length}return!0}
function ob(a,b){var c=a.Q(b),d=!0;if(c){for(var e=0;e<c.length&&(d=nb(a,c[e]),d);e+=2);return d}if(b.keys&&(c=b.keys(),c.next)){for(step=c.next();!step.done;){d=nb(a,step.value);if(!d)break;step=c.next()}return d}if(b.forEach)return b.forEach(function(b,c){d=d&&nb(a,c)}),d;throw Error("Cannot walk keys of object type "+(null==b?null:b.constructor).name);}
function pb(a,b,c){if(b.constructor===Object||null!=b.forEach){if(a.M){if(null!=b.forEach)if(ob(a,b)){var d={};b.forEach(function(b,e){d[Z(a,e,!0,!1)]=Z(a,b,!1,c)})}else{var e=a.Q(b),f=[],g=Y("~#","cmap","",!0,c);if(e)for(var h=0;h<e.length;h+=2)f.push(Z(a,e[h],!0,!1)),f.push(Z(a,e[h+1],!1,c));else b.forEach(function(b,d){f.push(Z(a,d,!0,!1));f.push(Z(a,b,!1,c))});d={};d[g]=f}else for(d={},e=C(b),h=0;h<e.length;h++)d[Z(a,e[h],!0,!1)]=Z(a,b[e[h]],!1,c);return d}if(null!=b.forEach){if(ob(a,b)){e=a.Q(b);
d=["^ "];if(e)for(h=0;h<e.length;h+=2)d.push(Z(a,e[h],!0,c)),d.push(Z(a,e[h+1],!1,c));else b.forEach(function(b,e){d.push(Z(a,e,!0,c));d.push(Z(a,b,!1,c))});return d}e=a.Q(b);f=[];g=Y("~#","cmap","",!0,c);if(e)for(h=0;h<e.length;h+=2)f.push(Z(a,e[h],!0,c)),f.push(Z(a,e[h+1],!1,c));else b.forEach(function(b,d){f.push(Z(a,d,!0,c));f.push(Z(a,b,!1,c))});return[g,f]}d=["^ "];e=C(b);for(h=0;h<e.length;h++)d.push(Z(a,e[h],!0,c)),d.push(Z(a,b[e[h]],!1,c));return d}if(null!=a.Y)return a.Y(b,function(b){return Z(a,
b,!0,c)},function(b){return Z(a,b,!1,c)});h=(null==b?null:b.constructor).name;e=Error("Cannot write "+h);e.data={U:b,type:h};throw e;}
function Z(a,b,c,d){var e=lb(a,b),f=e?e.tag(b):null,g=e?e.rep(b):null;if(null!=e&&null!=f)switch(f){case "_":return c?Y("~","_","",c,d):null;case "s":return 0<g.length?(a=g.charAt(0),a="~"===a||"^"===a||"`"===a?"~"+g:g):a=g,Y("","",a,c,d);case "?":return c?Y("~","?",g.toString()[0],c,d):g;case "i":return Infinity===g?Y("~","z","INF",c,d):-Infinity===g?Y("~","z","-INF",c,d):isNaN(g)?Y("~","z","NaN",c,d):c||"string"===typeof g||g instanceof l?Y("~","i",g.toString(),c,d):g;case "d":return c?Y(g.da,"d",
g,c,d):g;case "b":return Y("~","b",g,c,d);case "'":return a.M?(b={},c=Y("~#","'","",!0,d),b[c]=Z(a,g,!1,d),d=b):d=[Y("~#","'","",!0,d),Z(a,g,!1,d)],d;case "array":return mb(a,g,d);case "map":return pb(a,g,d);default:a:{if(1===f.length){if("string"===typeof g){d=Y("~",f,g,c,d);break a}if(c||a.O){(a=a.M&&e.X())?(f=a.tag(b),g=a.p(b,a)):g=e.p(b,e);if(null!==g){d=Y("~",f,g,c,d);break a}d=Error('Tag "'+f+'" cannot be encoded as string');d.data={tag:f,rep:g,U:b};throw d;}}b=f;c=g;a.M?(g={},g[Y("~#",b,"",
!0,d)]=Z(a,c,!1,d),d=g):d=[Y("~#",b,"",!0,d),Z(a,c,!1,d)]}return d}else throw d=(null==b?null:b.constructor).name,a=Error("Cannot write "+d),a.data={U:b,type:d},a;}function qb(a,b){var c=lb(a,b);if(null!=c)return 1===c.tag(b).length?Fa(b):b;var c=(null==b?null:b.constructor).name,d=Error("Cannot write "+c);d.data={U:b,type:c};throw d;}function $(a,b){this.K=a;this.options=b||{};this.q=!1===this.options.cache?null:this.options.cache?this.options.cache:new Ka}$.prototype.ba=function(){return this.K};
$.prototype.marshaller=$.prototype.ba;$.prototype.write=function(a,b){var c=null,d=b||{},c=d.asMapKey||!1,e=this.K.M?!1:this.q;!1===d.marshalTop?c=Z(this.K,a,c,e):(d=this.K,c=JSON.stringify(Z(d,qb(d,a),c,e)));null!=this.q&&this.q.clear();return c};$.prototype.write=$.prototype.write;$.prototype.register=function(a,b){this.K.o.set(a,b)};$.prototype.register=$.prototype.register;k("transit.reader",function(a,b){if("json"===a||"json-verbose"===a||null==a){var c=new Pa(b);return new Qa(c,b)}throw Error("Cannot create reader of type "+a);});k("transit.writer",function(a,b){if("json"===a||"json-verbose"===a||null==a){"json-verbose"===a&&(null==b&&(b={}),b.verbose=!0);var c=new kb(b);return new $(c,b)}c=Error('Type must be "json"');c.data={type:a};throw c;});
k("transit.makeBuilder",function(a){function b(){}b.prototype.init=a.init;b.prototype.add=a.add;b.prototype.finalize=a.finalize;b.prototype.fromArray=a.fromArray;return new b});k("transit.makeWriteHandler",function(a){function b(){}b.prototype.tag=a.tag;b.prototype.rep=a.rep;b.prototype.p=a.stringRep;b.prototype.X=a.getVerboseHandler;return new b});k("transit.date",ya);k("transit.integer",ra);
k("transit.isInteger",function(a){return a instanceof l?!0:"number"===typeof a&&!isNaN(a)&&Infinity!==a&&parseFloat(a)===parseInt(a)});k("transit.uuid",function(a){return xa(a)});k("transit.isUUID",function(a){return a instanceof O});k("transit.bigInt",ta);k("transit.isBigInt",function(a){return a instanceof I&&"n"===a.tag});k("transit.bigDec",ua);k("transit.isBigDec",function(a){return a instanceof I&&"f"===a.tag});k("transit.keyword",va);k("transit.isKeyword",function(a){return a instanceof L});
k("transit.symbol",wa);k("transit.isSymbol",function(a){return a instanceof M});k("transit.binary",za);k("transit.isBinary",function(a){return a instanceof I&&"b"===a.tag});k("transit.uri",Aa);k("transit.isURI",function(a){return a instanceof I&&"r"===a.tag});k("transit.map",T);k("transit.isMap",function(a){return a instanceof S||a instanceof R});k("transit.set",Ea);k("transit.isSet",function(a){return a instanceof U});k("transit.list",Ga);
k("transit.isList",function(a){return a instanceof oa.ea&&"list"===a.tag});k("transit.quoted",Fa);k("transit.isQuoted",function(a){return a instanceof I&&"'"===a.tag});k("transit.tagged",K);k("transit.isTaggedValue",function(a){return a instanceof I});k("transit.link",Ha);k("transit.isLink",function(a){return a instanceof I&&"link"===a.tag});k("transit.hash",H);k("transit.hashMapLike",ma);k("transit.hashArrayLike",na);k("transit.equals",G);
k("transit.extendToEQ",function(a,b){a.w=b.hashCode;a.s=b.equals;return a});k("transit.mapToObject",function(a){var b={};a.forEach(function(a,d){if("string"!==typeof d)throw Error("Cannot convert map with non-string keys");b[d]=a});return b});k("transit.decoder",function(a){return new V(a)});k("transit.UUIDfromString",xa);k("transit.randomUUID",oa.fa);k("transit.stringableKeys",ob);})();
