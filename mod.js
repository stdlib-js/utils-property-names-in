// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var t=void 0!==Object.getOwnPropertyNames,e=Object.getOwnPropertyNames;var n=function(r){return e(Object(r))};var o=function(r){return Object.keys(Object(r))},i=o;var u=function(){return function(){return 2!==(i(arguments)||"").length}(1,2)},c=void 0!==Object.keys;var f=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var a=function(){return f&&"symbol"==typeof Symbol.toStringTag},l=Object.prototype.toString,p=l;var v=function(r){return p.call(r)},s=Object.prototype.hasOwnProperty;var y=function(r,t){return null!=r&&s.call(r,t)},b="function"==typeof Symbol?Symbol.toStringTag:"",g=y,d=b,j=l;var m=v,h=function(r){var t,e,n;if(null==r)return j.call(r);e=r[d],t=g(r,d);try{r[d]=void 0}catch(t){return j.call(r)}return n=j.call(r),t?r[d]=e:delete r[d],n},O=a()?h:m,w=O;var _=function(r){return"[object Arguments]"===w(r)},P=_;var S=function(){return P(arguments)}(),E="function"==typeof Object.defineProperty?Object.defineProperty:null;var I=function(){try{return E({},"x",{}),!0}catch(r){return!1}},T=Object.defineProperty,A=Object.prototype,N=A.toString,k=A.__defineGetter__,x=A.__defineSetter__,B=A.__lookupGetter__,V=A.__lookupSetter__;var F=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(B.call(r,t)||V.call(r,t)?(n=r.__proto__,r.__proto__=A,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,t,e.get),u&&x&&x.call(r,t,e.set),r},G=T,L=F,M=I()?G:L;var X=function(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},Y=X;var C=function(r){return"string"==typeof r},D=String.prototype.valueOf;var H=O,R=function(r){try{return D.call(r),!0}catch(r){return!1}},W=a();var z=function(r){return"object"==typeof r&&(r instanceof String||(W?R(r):"[object String]"===H(r)))},U=C,q=z;var J=Y,K=function(r){return U(r)||q(r)},Q=z;J(K,"isPrimitive",C),J(K,"isObject",Q);var Z=K;var $=function(r){return"number"==typeof r},rr=Number,tr=rr.prototype.toString;var er=O,nr=rr,or=function(r){try{return tr.call(r),!0}catch(r){return!1}},ir=a();var ur=function(r){return"object"==typeof r&&(r instanceof nr||(ir?or(r):"[object Number]"===er(r)))},cr=$,fr=ur;var ar=Y,lr=function(r){return cr(r)||fr(r)},pr=ur;ar(lr,"isPrimitive",$),ar(lr,"isObject",pr);var vr=lr;var sr=function(r){return r!=r},yr=vr.isPrimitive,br=sr;var gr=function(r){return yr(r)&&br(r)},dr=vr.isObject,jr=sr;var mr=function(r){return dr(r)&&jr(r.valueOf())},hr=gr,Or=mr;var wr=Y,_r=function(r){return hr(r)||Or(r)},Pr=mr;wr(_r,"isPrimitive",gr),wr(_r,"isObject",Pr);var Sr=_r,Er=Number.POSITIVE_INFINITY,Ir=rr.NEGATIVE_INFINITY,Tr=Math.floor;var Ar=function(r){return Tr(r)===r},Nr=Er,kr=Ir,xr=Ar;var Br=function(r){return r<Nr&&r>kr&&xr(r)},Vr=vr.isPrimitive,Fr=Br;var Gr=function(r){return Vr(r)&&Fr(r)},Lr=vr.isObject,Mr=Br;var Xr=function(r){return Lr(r)&&Mr(r.valueOf())},Yr=Gr,Cr=Xr;var Dr=Y,Hr=function(r){return Yr(r)||Cr(r)},Rr=Xr;Dr(Hr,"isPrimitive",Gr),Dr(Hr,"isObject",Rr);var Wr,zr=Hr,Ur=Object.prototype.propertyIsEnumerable;Wr=!Ur.call("beep","0");var qr=Z,Jr=Sr.isPrimitive,Kr=zr.isPrimitive,Qr=Ur,Zr=Wr;var $r=function(r,t){var e;return null!=r&&(!(e=Qr.call(r,t))&&Zr&&qr(r)?!Jr(t=+t)&&Kr(t)&&t>=0&&t<r.length:e)},rt=$r,tt=O;var et=Array.isArray?Array.isArray:function(r){return"[object Array]"===tt(r)},nt=y,ot=rt,it=et,ut=Ar;var ct=S?_:function(r){return null!==r&&"object"==typeof r&&!it(r)&&"number"==typeof r.length&&ut(r.length)&&r.length>=0&&r.length<=4294967295&&nt(r,"callee")&&!ot(r,"callee")},ft=ct,at=o,lt=Array.prototype.slice;var pt=function(r){return ft(r)?at(lt.call(r)):at(r)},vt=et;var st=function(r){return null!==r&&"object"==typeof r};Y(st,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!vt(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(st));var yt=st;var bt=rt((function(){}),"prototype"),gt=!rt({toString:null},"toString"),dt=Ar;var jt=Sr,mt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&dt(r.length)&&r.length>=0&&r.length<=9007199254740991},ht=Z.isPrimitive,Ot=zr.isPrimitive;var wt=function(r,t,e){var n,o;if(!mt(r)&&!ht(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!Ot(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(jt(t)){for(;o<n;o++)if(jt(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1},_t=/./;var Pt=function(r){return"boolean"==typeof r},St=Boolean.prototype.toString;var Et=O,It=function(r){try{return St.call(r),!0}catch(r){return!1}},Tt=a();var At=function(r){return"object"==typeof r&&(r instanceof Boolean||(Tt?It(r):"[object Boolean]"===Et(r)))},Nt=Pt,kt=At;var xt=Y,Bt=function(r){return Nt(r)||kt(r)},Vt=At;xt(Bt,"isPrimitive",Pt),xt(Bt,"isObject",Vt);var Ft=Bt;var Gt=function(){return new Function("return this;")()},Lt="object"==typeof self?self:null,Mt="object"==typeof window?window:null,Xt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Yt="object"==typeof Xt?Xt:null;module.exports=Yt;var Ct=Ft.isPrimitive,Dt=Gt,Ht=Lt,Rt=Mt,Wt=r(Object.freeze({__proto__:null}));var zt=function(r){if(arguments.length){if(!Ct(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Dt()}if(Ht)return Ht;if(Rt)return Rt;if(Wt)return Wt;throw new Error("unexpected error. Unable to resolve global object.")},Ut=zt(),qt=Ut.document&&Ut.document.childNodes,Jt=Int8Array,Kt=_t,Qt=qt,Zt=Jt;var $t=function(){return"function"==typeof Kt||"object"==typeof Zt||"function"==typeof Qt};var re=function(){return/^\s*function\s*([^(]*)/i},te=re;Y(te,"REGEXP",re());var ee=yt;var ne=O,oe=te.REGEXP,ie=function(r){return ee(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ue=function(r){var t,e,n;if(("Object"===(e=ne(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=oe.exec(n.toString()))return t[1]}return ie(r)?"Buffer":e},ce=ue;var fe=ue;var ae=function(r){var t;return null===r?"null":"object"===(t=typeof r)?ce(r).toLowerCase():t},le=function(r){return fe(r).toLowerCase()},pe=$t()?le:ae;var ve,se=function(r){return r.constructor&&r.constructor.prototype===r},ye="undefined"==typeof window?void 0:window,be=y,ge=wt,de=pe,je=se,me=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],he=ye;ve=function(){var r;if("undefined"===de(he))return!1;for(r in he)try{-1===ge(me,r)&&be(he,r)&&null!==he[r]&&"object"===de(he[r])&&je(he[r])}catch(r){return!0}return!1}();var Oe="undefined"!=typeof window,we=ve,_e=se,Pe=Oe;var Se=yt,Ee=y,Ie=ct,Te=bt,Ae=gt,Ne=function(r){if(!1===Pe&&!we)return _e(r);try{return _e(r)}catch(r){return!1}},ke=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var xe=o,Be=pt,Ve=function(r){var t,e,n,o,i,u,c;if(o=[],Ie(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!Ee(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1===(n="function"==typeof r)&&!Se(r))return o;e=Te&&n}for(i in r)e&&"prototype"===i||!Ee(r,i)||o.push(String(i));if(Ae)for(t=Ne(r),c=0;c<ke.length;c++)u=ke[c],t&&"constructor"===u||!Ee(r,u)||o.push(String(u));return o},Fe=c?u()?Be:xe:Ve;var Ge=t?n:function(r){return Fe(Object(r))},Le=pe;var Me=function(r){return"function"===Le(r)},Xe=Object.getPrototypeOf;var Ye=function(r){return r.__proto__},Ce=O,De=Ye;var He=function(r){var t=De(r);return t||null===t?t:"[object Function]"===Ce(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Re=Xe,We=He,ze=Me(Object.getPrototypeOf)?Re:We;var Ue=function(r){return null==r?null:(r=Object(r),ze(r))};function qe(r,t){var e;for(e=0;e<r.length;e++)if(r[e]===t)return!0;return!1}function Je(r){var t,e,n,o;if(null==r)return[];e=Object(r),t=[];do{for(n=Ge(e),o=0;o<n.length;o++)!1===qe(t,n[o])&&t.push(n[o]);e=Ue(e)}while(e);return t}export{Je as default};
//# sourceMappingURL=mod.js.map
