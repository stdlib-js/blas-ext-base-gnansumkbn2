// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";function n(s,e,n,i){var d,a,m,o,f,l,j,p,h;if(s<=0)return 0;if(m=i,0===n)return t(e[m])?0:s*e[m];for(d=0,a=0,o=0,h=0;h<s;h++)l=e[m],!1===t(l)&&(j=d+l,p=r(d)>=r(l)?d-j+l:l-j+d,d=j,j=o+p,f=r(o)>=r(p)?o-j+p:p-j+o,o=j,a+=f),m+=n;return d+o+a}function i(s,t,r){return n(s,t,r,e(s,r))}s(i,"ndarray",n);export{i as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
