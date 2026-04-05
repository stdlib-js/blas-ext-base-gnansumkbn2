"use strict";var g=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var d=g(function(I,x){
var p=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-abs/dist');function w(i,r,o,l){var v,q,e,u,t,c,a,s,n,f,y;if(v=r.data,q=r.accessors[0],a=l,o===0)return p(q(v,a))?0:i*q(v,a);for(e=0,u=0,t=0,y=0;y<i;y++)s=q(v,a),p(s)===!1&&(n=e+s,b(e)>=b(s)?f=e-n+s:f=s-n+e,e=n,n=t+f,b(t)>=b(f)?c=t-n+f:c=f-n+t,t=n,u+=c),a+=o;return e+t+u}x.exports=w
});var k=g(function(J,O){
var z=require('@stdlib/array-base-arraylike2object/dist'),j=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-abs/dist'),A=d();function B(i,r,o,l){var v,q,e,u,t,c,a,s,n,f;if(i<=0)return 0;if(n=z(r),n.accessorProtocol)return A(i,n,o,l);if(e=l,o===0)return j(r[e])?0:i*r[e];for(v=0,q=0,u=0,f=0;f<i;f++)c=r[e],j(c)===!1&&(a=v+c,m(v)>=m(c)?s=v-a+c:s=c-a+v,v=a,a=u+s,m(u)>=m(s)?t=u-a+s:t=s-a+u,u=a,q+=t),e+=o;return v+u+q}O.exports=B
});var R=g(function(K,P){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=k();function E(i,r,o){return D(i,r,o,C(i,o))}P.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),G=k();F(h,"ndarray",G);module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
