// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=void 0!==Object.getOwnPropertyNames,e=Object,t=e.getOwnPropertyNames;function n(r){return Object.keys(Object(r))}var i=void 0!==Object.keys,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function a(){return o&&"symbol"==typeof Symbol.toStringTag}var u=Object.prototype.toString,c=Object.prototype.hasOwnProperty;function f(r,e){return null!=r&&c.call(r,e)}var l,s="function"==typeof Symbol?Symbol:void 0,p="function"==typeof s?s.toStringTag:"",g=a()?function(r){var e,t,n;if(null==r)return u.call(r);t=r[p],e=f(r,p);try{r[p]=void 0}catch(e){return u.call(r)}return n=u.call(r),e?r[p]=t:delete r[p],n}:function(r){return u.call(r)};function y(r){return"[object Arguments]"===g(r)}l=function(){return y(arguments)}();var d=l,h="function"==typeof Object.defineProperty?Object.defineProperty:null,b=Object.defineProperty;function v(r){return"number"==typeof r}function w(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function m(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+w(i):w(i)+r,n&&(r="-"+r)),r}var j=String.prototype.toLowerCase,O=String.prototype.toUpperCase;function S(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!v(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=m(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=m(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===O.call(r.specifier)?O.call(t):j.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function _(r){return"string"==typeof r}var E=Math.abs,k=String.prototype.toLowerCase,T=String.prototype.toUpperCase,x=String.prototype.replace,I=/e\+(\d)$/,P=/e-(\d)$/,A=/^(\d+)$/,V=/^(\d+)e/,F=/\.0$/,N=/\.0*e/,$=/(\..*[^0])0*e/;function C(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!v(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":E(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=x.call(t,$,"$1e"),t=x.call(t,N,"e"),t=x.call(t,F,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=x.call(t,I,"e+0$1"),t=x.call(t,P,"e-0$1"),r.alternate&&(t=x.call(t,A,"$1."),t=x.call(t,V,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===T.call(r.specifier)?T.call(t):k.call(t)}function B(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function L(r,e,t){var n=e-r.length;return n<0?r:r=t?r+B(n):B(n)+r}var R=String.fromCharCode,G=isNaN,W=Array.isArray;function X(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Z(r){var e,t,n,i,o,a,u,c,f;if(!W(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(_(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=X(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,G(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,G(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=S(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!G(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=G(o)?String(n.arg):R(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=C(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=m(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=L(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,i;for(t=[],i=0,n=M.exec(r);n;)(e=r.slice(i,M.lastIndex-n[0].length)).length&&t.push(e),t.push(Y(n)),i=M.lastIndex,n=M.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function H(r){return"string"==typeof r}function z(r){var e,t,n;if(!H(r))throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=U(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Z.apply(null,t)}var D,q=Object.prototype,J=q.toString,K=q.__defineGetter__,Q=q.__defineSetter__,rr=q.__lookupGetter__,er=q.__lookupSetter__;D=function(){try{return h({},"x",{}),!0}catch(r){return!1}}()?b:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===J.call(r))throw new TypeError(z("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===J.call(t))throw new TypeError(z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(rr.call(r,e)||er.call(r,e)?(n=r.__proto__,r.__proto__=q,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&K&&K.call(r,e,t.get),a&&Q&&Q.call(r,e,t.set),r};var tr=D;function nr(r,e,t){tr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ir(r){return"string"==typeof r}var or=String.prototype.valueOf,ar=a();function ur(r){return"object"==typeof r&&(r instanceof String||(ar?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object String]"===g(r)))}function cr(r){return ir(r)||ur(r)}function fr(r){return"number"==typeof r}nr(cr,"isPrimitive",ir),nr(cr,"isObject",ur);var lr=Number,sr=lr.prototype.toString,pr=a();function gr(r){return"object"==typeof r&&(r instanceof lr||(pr?function(r){try{return sr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===g(r)))}function yr(r){return fr(r)||gr(r)}function dr(r){return r!=r}function hr(r){return fr(r)&&dr(r)}function br(r){return gr(r)&&dr(r.valueOf())}function vr(r){return hr(r)||br(r)}nr(yr,"isPrimitive",fr),nr(yr,"isObject",gr),nr(vr,"isPrimitive",hr),nr(vr,"isObject",br);var wr=Number.POSITIVE_INFINITY,mr=lr.NEGATIVE_INFINITY,jr=Math.floor;function Or(r){return jr(r)===r}function Sr(r){return r<wr&&r>mr&&Or(r)}function _r(r){return fr(r)&&Sr(r)}function Er(r){return gr(r)&&Sr(r.valueOf())}function kr(r){return _r(r)||Er(r)}nr(kr,"isPrimitive",_r),nr(kr,"isObject",Er);var Tr,xr=Object.prototype.propertyIsEnumerable,Ir=!xr.call("beep","0");function Pr(r,e){var t;return null!=r&&(!(t=xr.call(r,e))&&Ir&&cr(r)?!hr(e=+e)&&_r(e)&&e>=0&&e<r.length:t)}Tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};var Ar,Vr=Tr;Ar=d?y:function(r){return null!==r&&"object"==typeof r&&!Vr(r)&&"number"==typeof r.length&&Or(r.length)&&r.length>=0&&r.length<=4294967295&&f(r,"callee")&&!Pr(r,"callee")};var Fr=Ar,Nr=Array.prototype.slice;function $r(r){return null!==r&&"object"==typeof r}var Cr=function(r){if("function"!=typeof r)throw new TypeError(z("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Vr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}($r);nr($r,"isObjectLikeArray",Cr);var Br=Pr((function(){}),"prototype"),Lr=!Pr({toString:null},"toString");function Rr(r){return r!=r}function Gr(r){return fr(r)&&Rr(r)}function Wr(r){return gr(r)&&Rr(r.valueOf())}function Xr(r){return Gr(r)||Wr(r)}function Zr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Or(r.length)&&r.length>=0&&r.length<=9007199254740991}function Mr(r){return"string"==typeof r}nr(Xr,"isPrimitive",Gr),nr(Xr,"isObject",Wr);var Yr=String.prototype.valueOf,Ur=a();function Hr(r){return"object"==typeof r&&(r instanceof String||(Ur?function(r){try{return Yr.call(r),!0}catch(r){return!1}}(r):"[object String]"===g(r)))}function zr(r){return Mr(r)||Hr(r)}function Dr(r,e,t){var n,i;if(!Zr(r)&&!Mr(r))throw new TypeError(z("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!_r(t))throw new TypeError(z("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Xr(e)){for(;i<n;i++)if(Xr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}nr(zr,"isPrimitive",Mr),nr(zr,"isObject",Hr);var qr=/./;function Jr(r){return"boolean"==typeof r}var Kr=Boolean,Qr=Boolean.prototype.toString,re=a();function ee(r){return"object"==typeof r&&(r instanceof Kr||(re?function(r){try{return Qr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function te(r){return Jr(r)||ee(r)}function ne(){return new Function("return this;")()}nr(te,"isPrimitive",Jr),nr(te,"isObject",ee);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="object"==typeof globalThis?globalThis:null,ue=function(r){if(arguments.length){if(!Jr(r))throw new TypeError(z("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ne()}if(ae)return ae;if(ie)return ie;if(oe)return oe;throw new Error("unexpected error. Unable to resolve global object.")}(),ce=ue.document&&ue.document.childNodes,fe=Int8Array;function le(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;function pe(r){var e,t,n,i;if(("Object"===(t=g(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=se.exec(n.toString()))return e[1]}return $r(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}nr(le,"REGEXP",se);var ge="function"==typeof qr||"object"==typeof fe||"function"==typeof ce?function(r){return pe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?pe(r).toLowerCase():e};function ye(r){return r.constructor&&r.constructor.prototype===r}var de,he=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],be="undefined"==typeof window?void 0:window,ve=function(){var r;if("undefined"===ge(be))return!1;for(r in be)try{-1===Dr(he,r)&&f(be,r)&&null!==be[r]&&"object"===ge(be[r])&&ye(be[r])}catch(r){return!0}return!1}(),we="undefined"!=typeof window,me=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];de=i?function(){return 2!==(n(arguments)||"").length}(1,2)?function(r){return Fr(r)?n(Nr.call(r)):n(r)}:n:function(r){var e,t,n,i,o,a,u;if(i=[],Fr(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!f(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof r)&&!$r(r))return i;t=Br&&n}for(o in r)t&&"prototype"===o||!f(r,o)||i.push(String(o));if(Lr)for(e=function(r){if(!1===we&&!ve)return ye(r);try{return ye(r)}catch(r){return!1}}(r),u=0;u<me.length;u++)a=me[u],e&&"constructor"===a||!f(r,a)||i.push(String(a));return i};var je,Oe=de;je=r?function(r){return t(e(r))}:function(r){return Oe(e(r))};var Se,_e,Ee=je,ke=Object.getPrototypeOf;_e=Object.getPrototypeOf,Se="function"===ge(_e)?ke:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===g(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Te=Se;function xe(r){return null==r?null:(r=e(r),Te(r))}function Ie(r,e){var t;for(t=0;t<r.length;t++)if(r[t]===e)return!0;return!1}return function(r){var t,n,i,o;if(null==r)return[];n=e(r),t=[];do{for(i=Ee(n),o=0;o<i.length;o++)!1===Ie(t,i[o])&&t.push(i[o]);n=xe(n)}while(n);return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).propertyNamesIn=e();
//# sourceMappingURL=browser.js.map
