"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=i(function(h,t){
var y=require('@stdlib/blas-ext-base-dsumors/dist').ndarray;function f(e,r,a,s){return e<=0?NaN:e===1||a===0?r[s]:y(e,r,a,s)/e}t.exports=f
});var v=i(function(k,o){
var p=require('@stdlib/strided-base-stride2offset/dist'),j=n();function x(e,r,a){return j(e,r,a,p(e,a))}o.exports=x
});var m=i(function(w,d){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),R=n();l(q,"ndarray",R);d.exports=q
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=m(),u,c=E(_(__dirname,"./native.js"));O(c)?u=b:u=c;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
