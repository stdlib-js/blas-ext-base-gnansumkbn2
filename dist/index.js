"use strict";var g=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var d=g(function(I,x){
var p=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-abs/dist');function w(i,r,u,l){var v,q,e,t,c,f,a,s,n,o,y;if(v=r.data,q=r.accessors[0],a=l,u===0)return p(q(v,a))?0:i*q(v,a);for(e=0,t=0,c=0,y=0;y<i;y++)s=q(v,a),p(s)===!1&&(n=e+s,b(e)>=b(s)?o=e-n+s:o=s-n+e,e=n,n=c+o,b(c)>=b(o)?f=c-n+o:f=o-n+c,c=n,t+=f),a+=u;return e+c+t}x.exports=w
});var k=g(function(J,O){
var z=require('@stdlib/array-base-arraylike2object/dist'),j=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-abs/dist'),A=d();function B(i,r,u,l){var v,q,e,t,c,f,a,s,n,o;if(i<=0)return 0;if(n=z(r),n.accessorProtocol)return A(i,n,u,l);if(e=l,u===0)return j(r[e])?0:i*r[e];for(v=0,q=0,t=0,o=0;o<i;o++)f=r[e],j(f)===!1&&(a=v+f,m(v)>=m(f)?s=v-a+f:s=f-a+v,v=a,a=t+s,m(t)>=m(s)?c=t-a+s:c=s-a+t,t=a,q+=c),e+=u;return v+t+q}O.exports=B
});var R=g(function(K,P){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=k();function E(i,r,u){return D(i,r,u,C(i,u))}P.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),G=k();F(h,"ndarray",G);module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
