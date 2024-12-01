"use strict";var s=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var a=s(function(g,o){
var u=require('@stdlib/utils-property-names/dist'),f=require('@stdlib/utils-get-prototype-of/dist'),p=require('@stdlib/object-ctor/dist');function v(t,r){var e;for(e=0;e<t.length;e++)if(t[e]===r)return!0;return!1}function c(t){var r,e,n,i;if(t==null)return[];e=p(t),r=[];do{for(n=u(e),i=0;i<n.length;i++)v(r,n[i])===!1&&r.push(n[i]);e=f(e)}while(e);return r}o.exports=c
});var l=a();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
