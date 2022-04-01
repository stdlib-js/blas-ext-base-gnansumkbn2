// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";var n=e,s=t;var i=e,a=t;var d=function(r,e,t){var i,a,d,m,o,f,l,u,p;if(r<=0)return 0;if(1===r||0===t)return n(e[0])?0:e[0];for(d=t<0?(1-r)*t:0,i=0,a=0,m=0,p=0;p<r;p++)f=e[d],!1===n(f)&&(l=i+f,u=s(i)>=s(f)?i-l+f:f-l+i,i=l,l=m+u,o=s(m)>=s(u)?m-l+u:u-l+m,m=l,a+=o),d+=t;return i+m+a},m=function(r,e,t,n){var s,d,m,o,f,l,u,p,j;if(r<=0)return 0;if(1===r||0===t)return i(e[n])?0:e[n];for(m=n,s=0,d=0,o=0,j=0;j<r;j++)l=e[m],!1===i(l)&&(u=s+l,p=a(s)>=a(l)?s-u+l:l-u+s,s=u,u=o+p,f=a(o)>=a(p)?o-u+p:p-u+o,o=u,d+=f),m+=t;return s+o+d};r(d,"ndarray",m);var o=d;export{o as default,m as ndarray};
//# sourceMappingURL=index.mjs.map
