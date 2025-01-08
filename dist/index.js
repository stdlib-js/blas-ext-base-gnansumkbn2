"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=m(function(A,b){
var y=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs/dist');function x(e,r,t,k){var n,c,v,i,o,s,a,u,q;if(e<=0)return 0;if(v=k,t===0)return y(r[v])?0:e*r[v];for(n=0,c=0,i=0,q=0;q<e;q++)s=r[v],y(s)===!1&&(a=n+s,f(n)>=f(s)?u=n-a+s:u=s-a+n,n=a,a=i+u,f(i)>=f(u)?o=i-a+u:o=u-a+i,i=a,c+=o),v+=t;return n+i+c}b.exports=x
});var p=m(function(B,d){
var O=require('@stdlib/strided-base-stride2offset/dist'),R=l();function h(e,r,t){return R(e,r,t,O(e,t))}d.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=p(),w=l();j(g,"ndarray",w);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
