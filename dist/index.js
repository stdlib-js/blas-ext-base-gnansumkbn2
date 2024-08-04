"use strict";var b=function(s,e){return function(){return e||s((e={exports:{}}).exports,e),e.exports}};var g=b(function(B,y){
var p=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function h(s,e,l){var i,v,f,n,u,c,r,a,t;if(s<=0)return 0;if(s===1||l===0)return p(e[0])?0:e[0];for(l<0?f=(1-s)*l:f=0,i=0,v=0,n=0,t=0;t<s;t++)c=e[f],p(c)===!1&&(r=i+c,q(i)>=q(c)?a=i-r+c:a=c-r+i,i=r,r=n+a,q(n)>=q(a)?u=n-r+a:u=a-r+n,n=r,v+=u),f+=l;return i+n+v}y.exports=h
});var O=b(function(C,x){
var k=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-abs/dist');function j(s,e,l,i){var v,f,n,u,c,r,a,t,o;if(s<=0)return 0;if(s===1||l===0)return k(e[i])?0:e[i];for(n=i,v=0,f=0,u=0,o=0;o<s;o++)r=e[n],k(r)===!1&&(a=v+r,m(v)>=m(r)?t=v-a+r:t=r-a+v,v=a,a=u+t,m(u)>=m(t)?c=u-a+t:c=t-a+u,u=a,f+=c),n+=l;return v+u+f}x.exports=j
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=g(),z=O();w(R,"ndarray",z);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
