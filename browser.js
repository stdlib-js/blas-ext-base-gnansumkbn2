// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;function f(e){return e!=e}function c(e){return Math.abs(e)}function _(e,t,r){var n,o,i,u,a,l,_,p,d;if(e<=0)return 0;if(1===e||0===r)return f(t[0])?0:t[0];for(i=r<0?(1-e)*r:0,n=0,o=0,u=0,d=0;d<e;d++)!1===f(l=t[i])&&(_=n+l,p=c(n)>=c(l)?n-_+l:l-_+n,n=_,_=u+p,a=c(u)>=c(p)?u-_+p:p-_+u,u=_,o+=a),i+=r;return n+u+o}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&u&&u.call(e,t,r.set),e},e(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n){var o,i,u,a,l,_,p,d,b;if(e<=0)return 0;if(1===e||0===r)return f(t[n])?0:t[n];for(u=n,o=0,i=0,a=0,b=0;b<e;b++)!1===f(_=t[u])&&(p=o+_,d=c(o)>=c(_)?o-p+_:_-p+o,o=p,p=a+d,l=c(a)>=c(d)?a-p+d:d-p+a,a=p,i+=l),u+=r;return o+a+i}}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).gnansumkbn2=t();
//# sourceMappingURL=browser.js.map