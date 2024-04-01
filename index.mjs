// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";function n(r,n,s){var i,a,d,m,o,f,l,u,p;if(r<=0)return 0;if(1===r||0===s)return e(n[0])?0:n[0];for(d=s<0?(1-r)*s:0,i=0,a=0,m=0,p=0;p<r;p++)f=n[d],!1===e(f)&&(l=i+f,u=t(i)>=t(f)?i-l+f:f-l+i,i=l,l=m+u,o=t(m)>=t(u)?m-l+u:u-l+m,m=l,a+=o),d+=s;return i+m+a}function s(r,n,s,i){var a,d,m,o,f,l,u,p,j;if(r<=0)return 0;if(1===r||0===s)return e(n[i])?0:n[i];for(m=i,a=0,d=0,o=0,j=0;j<r;j++)l=n[m],!1===e(l)&&(u=a+l,p=t(a)>=t(l)?a-u+l:l-u+a,a=u,u=o+p,f=t(o)>=t(p)?o-u+p:p-u+o,o=u,d+=f),m+=s;return a+o+d}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
