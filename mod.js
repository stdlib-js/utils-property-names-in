// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var t=void 0!==Object.getOwnPropertyNames,e=Object.getOwnPropertyNames;var n=function(r){return e(Object(r))};var o=function(r){return Object.keys(Object(r))},i=o;var u=function(){return function(){return 2!==(i(arguments)||"").length}(1,2)},c=void 0!==Object.keys;var a=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var f=function(){return a&&"symbol"==typeof Symbol.toStringTag},l=Object.prototype.toString,v=l;var p=function(r){return v.call(r)},s=Object.prototype.hasOwnProperty;var y=function(r,t){return null!=r&&s.call(r,t)},b="function"==typeof Symbol?Symbol.toStringTag:"",g=y,j=b,m=l;var h=p,d=function(r){var t,e,n;if(null==r)return m.call(r);e=r[j],t=g(r,j);try{r[j]=void 0}catch(t){return m.call(r)}return n=m.call(r),t?r[j]=e:delete r[j],n},O=f()?d:h,_=O;var w=function(r){return"[object Arguments]"===_(r)},P=w;var S=function(){return P(arguments)}(),E="function"==typeof Object.defineProperty?Object.defineProperty:null;var I=function(){try{return E({},"x",{}),!0}catch(r){return!1}},T=Object.defineProperty,A=Object.prototype,N=A.toString,k=A.__defineGetter__,B=A.__defineSetter__,V=A.__lookupGetter__,x=A.__lookupSetter__;var F=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(V.call(r,t)||x.call(r,t)?(n=r.__proto__,r.__proto__=A,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,t,e.get),u&&B&&B.call(r,t,e.set),r},G=T,L=F,M=I()?G:L;var X=function(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},Y=X;var C=function(r){return"string"==typeof r},D=String.prototype.valueOf;var H=O,R=function(r){try{return D.call(r),!0}catch(r){return!1}},W=f();var z=function(r){return"object"==typeof r&&(r instanceof String||(W?R(r):"[object String]"===H(r)))},U=C,q=z;var J=Y,K=function(r){return U(r)||q(r)},Q=z;J(K,"isPrimitive",C),J(K,"isObject",Q);var Z=K;var $=function(r){return"number"==typeof r},rr=Number,tr=rr.prototype.toString;var er=O,nr=rr,or=function(r){try{return tr.call(r),!0}catch(r){return!1}},ir=f();var ur=function(r){return"object"==typeof r&&(r instanceof nr||(ir?or(r):"[object Number]"===er(r)))},cr=$,ar=ur;var fr=Y,lr=function(r){return cr(r)||ar(r)},vr=ur;fr(lr,"isPrimitive",$),fr(lr,"isObject",vr);var pr=lr;var sr=function(r){return r!=r},yr=pr.isPrimitive,br=sr;var gr=function(r){return yr(r)&&br(r)},jr=pr.isObject,mr=sr;var hr=function(r){return jr(r)&&mr(r.valueOf())},dr=gr,Or=hr;var _r=Y,wr=function(r){return dr(r)||Or(r)},Pr=hr;_r(wr,"isPrimitive",gr),_r(wr,"isObject",Pr);var Sr=wr,Er=Number.POSITIVE_INFINITY,Ir=rr.NEGATIVE_INFINITY,Tr=Math.floor;var Ar=function(r){return Tr(r)===r},Nr=Er,kr=Ir,Br=Ar;var Vr=function(r){return r<Nr&&r>kr&&Br(r)},xr=pr.isPrimitive,Fr=Vr;var Gr=function(r){return xr(r)&&Fr(r)},Lr=pr.isObject,Mr=Vr;var Xr=function(r){return Lr(r)&&Mr(r.valueOf())},Yr=Gr,Cr=Xr;var Dr=Y,Hr=function(r){return Yr(r)||Cr(r)},Rr=Xr;Dr(Hr,"isPrimitive",Gr),Dr(Hr,"isObject",Rr);var Wr,zr=Hr,Ur=Object.prototype.propertyIsEnumerable;Wr=!Ur.call("beep","0");var qr=Z,Jr=Sr.isPrimitive,Kr=zr.isPrimitive,Qr=Ur,Zr=Wr;var $r=function(r,t){var e;return null!=r&&(!(e=Qr.call(r,t))&&Zr&&qr(r)?!Jr(t=+t)&&Kr(t)&&t>=0&&t<r.length:e)},rt=$r,tt=O;var et=Array.isArray?Array.isArray:function(r){return"[object Array]"===tt(r)},nt=y,ot=rt,it=et,ut=Ar;var ct=S?w:function(r){return null!==r&&"object"==typeof r&&!it(r)&&"number"==typeof r.length&&ut(r.length)&&r.length>=0&&r.length<=4294967295&&nt(r,"callee")&&!ot(r,"callee")},at=ct,ft=o,lt=Array.prototype.slice;var vt=function(r){return at(r)?ft(lt.call(r)):ft(r)},pt=et;var st=function(r){return null!==r&&"object"==typeof r};Y(st,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!pt(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(st));var yt=st;var bt=rt((function(){}),"prototype"),gt=!rt({toString:null},"toString"),jt=Ar;var mt=Sr,ht=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&jt(r.length)&&r.length>=0&&r.length<=9007199254740991},dt=Z.isPrimitive,Ot=zr.isPrimitive;var _t=function(r,t,e){var n,o;if(!ht(r)&&!dt(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!Ot(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(mt(t)){for(;o<n;o++)if(mt(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1},wt=/./;var Pt=function(r){return"boolean"==typeof r},St=Boolean.prototype.toString;var Et=O,It=function(r){try{return St.call(r),!0}catch(r){return!1}},Tt=f();var At=function(r){return"object"==typeof r&&(r instanceof Boolean||(Tt?It(r):"[object Boolean]"===Et(r)))},Nt=Pt,kt=At;var Bt=Y,Vt=function(r){return Nt(r)||kt(r)},xt=At;Bt(Vt,"isPrimitive",Pt),Bt(Vt,"isObject",xt);var Ft="object"==typeof self?self:null,Gt="object"==typeof window?window:null,Lt=Vt.isPrimitive,Mt=function(){return new Function("return this;")()},Xt=Ft,Yt=Gt,Ct=r(Object.freeze({__proto__:null}));var Dt=function(r){if(arguments.length){if(!Lt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Mt()}if(Xt)return Xt;if(Yt)return Yt;if(Ct)return Ct;throw new Error("unexpected error. Unable to resolve global object.")},Ht=Dt(),Rt=Ht.document&&Ht.document.childNodes,Wt=Int8Array,zt=wt,Ut=Rt,qt=Wt;var Jt=function(){return"function"==typeof zt||"object"==typeof qt||"function"==typeof Ut};var Kt=function(){return/^\s*function\s*([^(]*)/i},Qt=Kt;Y(Qt,"REGEXP",Kt());var Zt=yt;var $t=O,re=Qt.REGEXP,te=function(r){return Zt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ee=function(r){var t,e,n;if(("Object"===(e=$t(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=re.exec(n.toString()))return t[1]}return te(r)?"Buffer":e},ne=ee;var oe=ee;var ie=function(r){var t;return null===r?"null":"object"===(t=typeof r)?ne(r).toLowerCase():t},ue=function(r){return oe(r).toLowerCase()},ce=Jt()?ue:ie;var ae,fe=function(r){return r.constructor&&r.constructor.prototype===r},le="undefined"==typeof window?void 0:window,ve=y,pe=_t,se=ce,ye=fe,be=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ge=le;ae=function(){var r;if("undefined"===se(ge))return!1;for(r in ge)try{-1===pe(be,r)&&ve(ge,r)&&null!==ge[r]&&"object"===se(ge[r])&&ye(ge[r])}catch(r){return!0}return!1}();var je="undefined"!=typeof window,me=ae,he=fe,de=je;var Oe=yt,_e=y,we=ct,Pe=bt,Se=gt,Ee=function(r){if(!1===de&&!me)return he(r);try{return he(r)}catch(r){return!1}},Ie=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Te=o,Ae=vt,Ne=function(r){var t,e,n,o,i,u,c;if(o=[],we(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!_e(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1===(n="function"==typeof r)&&!Oe(r))return o;e=Pe&&n}for(i in r)e&&"prototype"===i||!_e(r,i)||o.push(String(i));if(Se)for(t=Ee(r),c=0;c<Ie.length;c++)u=Ie[c],t&&"constructor"===u||!_e(r,u)||o.push(String(u));return o},ke=c?u()?Ae:Te:Ne;var Be=t?n:function(r){return ke(Object(r))},Ve=ce;var xe=function(r){return"function"===Ve(r)},Fe=Object.getPrototypeOf;var Ge=function(r){return r.__proto__},Le=O,Me=Ge;var Xe=function(r){var t=Me(r);return t||null===t?t:"[object Function]"===Le(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Ye=Fe,Ce=Xe,De=xe(Object.getPrototypeOf)?Ye:Ce;var He=Be,Re=function(r){return null==r?null:(r=Object(r),De(r))};function We(r,t){var e;for(e=0;e<r.length;e++)if(r[e]===t)return!0;return!1}var ze=function(r){var t,e,n,o;if(null==r)return[];e=Object(r),t=[];do{for(n=He(e),o=0;o<n.length;o++)!1===We(t,n[o])&&t.push(n[o]);e=Re(e)}while(e);return t},Ue=ze;export{Ue as default};
//# sourceMappingURL=mod.js.map
