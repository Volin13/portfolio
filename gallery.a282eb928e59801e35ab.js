(()=>{var e,n,r,t={2083:(e,n,r)=>{"use strict";r.r(n);r(2088),r(9786),r(5947),r(9960),r(9302);e.hot.accept(2083,(e=>{console.log("Gallery module updated.")}))},9960:(e,n,r)=>{"use strict";var t=r(3584),o=r.n(t),l=r(470),a=r(293);document.addEventListener("DOMContentLoaded",(function(){const e=localStorage.getItem("lang")||"uk";document.querySelector(".gallery__list").innerHTML="uk"===e?o()(l):o()(a)}))},3584:(e,n,r)=>{var t=r(3633);e.exports=(t.default||t).template({1:function(e,n,r,t,o,l,a){var i,c,d=null!=n?n:e.nullContext||{},u=e.hooks.helperMissing,s="function",f=e.escapeExpression,p=e.lambda,h=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='gallery__listItem' id=\""+f(typeof(c=null!=(c=h(r,"index")||o&&h(o,"index"))?c:u)===s?c.call(d,{name:"index",hash:{},data:o,loc:{start:{line:2,column:36},end:{line:2,column:46}}}):c)+"\" style='--item-index: "+f(typeof(c=null!=(c=h(r,"index")||o&&h(o,"index"))?c:u)===s?c.call(d,{name:"index",hash:{},data:o,loc:{start:{line:2,column:69},end:{line:2,column:79}}}):c)+"'>\r\n    <div class=\"card__content\"> \r\n    <div class='gallery__itemThumb'>\r\n      <a target='_blank' href='"+f(typeof(c=null!=(c=h(r,"link")||(null!=n?h(n,"link"):n))?c:u)===s?c.call(d,{name:"link",hash:{},data:o,loc:{start:{line:5,column:31},end:{line:5,column:39}}}):c)+"'>\r\n        <h2 class='gallery__itemTitle'>"+f(typeof(c=null!=(c=h(r,"title")||(null!=n?h(n,"title"):n))?c:u)===s?c.call(d,{name:"title",hash:{},data:o,loc:{start:{line:6,column:39},end:{line:6,column:48}}}):c)+"</h2>\r\n      </a>\r\n\r\n      <ul class='gallery__itemTechList'>\r\n"+(null!=(i=h(r,"each").call(d,null!=n?h(n,"tech"):n,{name:"each",hash:{},fn:e.program(2,o,0,l,a),inverse:e.noop,data:o,loc:{start:{line:10,column:8},end:{line:17,column:17}}}))?i:"")+"      </ul>\r\n      <a\r\n        href='projects/"+f(typeof(c=null!=(c=h(r,"id")||(null!=n?h(n,"id"):n))?c:u)===s?c.call(d,{name:"id",hash:{},data:o,loc:{start:{line:20,column:23},end:{line:20,column:29}}}):c)+"?lang="+f(typeof(c=null!=(c=h(r,"currentLang")||(null!=n?h(n,"currentLang"):n))?c:u)===s?c.call(d,{name:"currentLang",hash:{},data:o,loc:{start:{line:20,column:35},end:{line:20,column:50}}}):c)+"'\r\n        class='gallery__showMore'\r\n      >                      "+f(p(null!=(i=null!=a[1]?h(a[1],"translations"):a[1])?h(i,"more"):i,n))+"\r\n</a>\r\n    </div>\r\n    <img\r\n      src='"+f(p(null!=(i=null!=(i=null!=n?h(n,"slides"):n)?h(i,"0"):i)?h(i,"src"):i,n))+"'\r\n      alt='"+f(p(null!=(i=null!=(i=null!=n?h(n,"slides"):n)?h(i,"0"):i)?h(i,"alt"):i,n))+"'\r\n      class='gallery__listImg'\r\n    />\r\n    \r\n    </div>\r\n  </li>\r\n"},2:function(e,n,r,t,o){var l,a=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,c="function",d=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"          <li class='gallery__itemTechItem'>\r\n            <div\r\n              class='gallery__itemTechItem gallery__itemTechItem-text'\r\n              style='--tech-index: "+d(typeof(l=null!=(l=u(r,"index")||o&&u(o,"index"))?l:i)===c?l.call(a,{name:"index",hash:{},data:o,loc:{start:{line:14,column:35},end:{line:14,column:45}}}):l)+"'\r\n            >"+d(typeof(l=null!=(l=u(r,"techName")||(null!=n?u(n,"techName"):n))?l:i)===c?l.call(a,{name:"techName",hash:{},data:o,loc:{start:{line:15,column:13},end:{line:15,column:25}}}):l)+"</div>\r\n          </li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,r,t,o,l,a){var i,c=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return(null!=(i=c(r,"each").call(null!=n?n:e.nullContext||{},null!=n?c(n,"items"):n,{name:"each",hash:{},fn:e.program(1,o,0,l,a),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:33,column:9}}}))?i:"")+"\r\n"},useData:!0,useDepths:!0})}},o={};function l(e){var n=o[e];if(void 0!==n){if(void 0!==n.error)throw n.error;return n.exports}var r=o[e]={id:e,exports:{}};try{var a={id:e,module:r,factory:t[e],require:l};l.i.forEach((function(e){e(a)})),r=a.module,a.factory.call(r.exports,r,r.exports,a.require)}catch(e){throw r.error=e,e}return r.exports}l.m=t,l.c=o,l.i=[],e=[],l.O=(n,r,t,o)=>{if(!r){var a=1/0;for(u=0;u<e.length;u++){for(var[r,t,o]=e[u],i=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(l.O).every((e=>l.O[e](r[c])))?r.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(u--,1);var d=t();void 0!==d&&(n=d)}}return n}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,t,o]},l.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return l.d(n,{a:n}),n},l.d=(e,n)=>{for(var r in n)l.o(n,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},l.hu=e=>e+"."+l.h()+".hot-update.js",l.hmrF=()=>"gallery."+l.h()+".hot-update.json",l.h=()=>"99b269322d11af2be397",l.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),n={},r="portf:",l.l=(e,t,o,a)=>{if(n[e])n[e].push(t);else{var i,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var s=d[u];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==r+o){i=s;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",r+o),i.src=e),n[e]=[t];var f=(r,t)=>{i.onerror=i.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.j=543,(()=>{var e,n,r,t={},o=l.c,a=[],i=[],c="idle",d=0,u=[];function s(e){c=e;for(var n=[],r=0;r<i.length;r++)n[r]=i[r].call(null,e);return Promise.all(n).then((function(){}))}function f(){0==--d&&s("ready").then((function(){if(0===d){var e=u;u=[];for(var n=0;n<e.length;n++)e[n]()}}))}function p(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return s("check").then(l.hmrM).then((function(r){return r?s("prepare").then((function(){var t=[];return n=[],Promise.all(Object.keys(l.hmrC).reduce((function(e,o){return l.hmrC[o](r.c,r.r,r.m,e,n,t),e}),[])).then((function(){return n=function(){return e?m(e):s("ready").then((function(){return t}))},0===d?n():new Promise((function(e){u.push((function(){e(n())}))}));var n}))})):s(v()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+c+")")})):m(e)}function m(e){e=e||{},v();var t=n.map((function(n){return n(e)}));n=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return s("abort").then((function(){throw o[0]}));var l=s("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var a,i=s("apply"),c=function(e){a||(a=e)},d=[];return t.forEach((function(e){if(e.apply){var n=e.apply(c);if(n)for(var r=0;r<n.length;r++)d.push(n[r])}})),Promise.all([l,i]).then((function(){return a?s("fail").then((function(){throw a})):r?m(e).then((function(e){return d.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e})):s("idle").then((function(){return d}))}))}function v(){if(r)return n||(n=[]),Object.keys(l.hmrI).forEach((function(e){r.forEach((function(r){l.hmrI[e](r,n)}))})),r=void 0,!0}l.hmrD=t,l.i.push((function(u){var m,v,y,g,_=u.module,b=function(n,r){var t=o[r];if(!t)return n;var l=function(l){if(t.hot.active){if(o[l]){var i=o[l].parents;-1===i.indexOf(r)&&i.push(r)}else a=[r],e=l;-1===t.children.indexOf(l)&&t.children.push(l)}else console.warn("[HMR] unexpected require("+l+") from disposed module "+r),a=[];return n(l)},i=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&"e"!==u&&Object.defineProperty(l,u,i(u));return l.e=function(e,r){return function(e){switch(c){case"ready":s("prepare");case"prepare":return d++,e.then(f,f),e;default:return e}}(n.e(e,r))},l}(u.require,u.id);_.hot=(m=u.id,v=_,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==m,_requireSelf:function(){a=v.parents.slice(),e=y?void 0:m,l(m)},active:!0,accept:function(e,n,r){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=n||function(){},g._acceptedErrorHandlers[e[t]]=r;else g._acceptedDependencies[e]=n||function(){},g._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)g._declinedDependencies[e[n]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=g._disposeHandlers.indexOf(e);n>=0&&g._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":n=[],Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,n)})),s("ready");break;case"ready":Object.keys(l.hmrI).forEach((function(e){l.hmrI[e](m,n)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(m)}},check:p,apply:h,status:function(e){if(!e)return c;i.push(e)},addStatusHandler:function(e){i.push(e)},removeStatusHandler:function(e){var n=i.indexOf(e);n>=0&&i.splice(n,1)},data:t[m]},e=void 0,g),_.parents=a,_.children=[],a=[],u.require=b})),l.hmrC={},l.hmrI={}})(),l.p="/",(()=>{l.b=document.baseURI||self.location.href;var e,n,r,t,o,a=l.hmrS_jsonp=l.hmrS_jsonp||{543:0},i={};function c(n,r){return e=r,new Promise(((e,r)=>{i[n]=e;var t=l.p+l.hu(n),o=new Error;l.l(t,(e=>{if(i[n]){i[n]=void 0;var t=e&&("load"===e.type?"missing":e.type),l=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+n+" failed.\n("+t+": "+l+")",o.name="ChunkLoadError",o.type=t,o.request=l,r(o)}}))}))}function d(e){function i(e){for(var n=[e],r={},t=n.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),a=o.id,i=o.chain,d=l.c[a];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(d.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var u=0;u<d.parents.length;u++){var s=d.parents[u],f=l.c[s];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([s]),moduleId:a,parentId:s};-1===n.indexOf(s)&&(f.hot._acceptedDependencies[a]?(r[s]||(r[s]=[]),c(r[s],[a])):(delete r[s],n.push(s),t.push({chain:i.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function c(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}l.f&&delete l.f.jsonpHmr,n=void 0;var d={},u=[],s={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(l.o(r,p)){var h,m=r[p],v=!1,y=!1,g=!1,_="";switch((h=m?i(p):{type:"disposed",moduleId:p}).chain&&(_="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+_));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+_));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+_));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(y)for(p in s[p]=m,c(u,h.outdatedModules),h.outdatedDependencies)l.o(h.outdatedDependencies,p)&&(d[p]||(d[p]=[]),c(d[p],h.outdatedDependencies[p]));g&&(c(u,[h.moduleId]),s[p]=f)}r=void 0;for(var b,E=[],w=0;w<u.length;w++){var I=u[w],k=l.c[I];k&&(k.hot._selfAccepted||k.hot._main)&&s[I]!==f&&!k.hot._selfInvalidated&&E.push({module:I,require:k.hot._requireSelf,errorHandler:k.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete a[e]})),t=void 0;for(var n,r=u.slice();r.length>0;){var o=r.pop(),i=l.c[o];if(i){var c={},s=i.hot._disposeHandlers;for(w=0;w<s.length;w++)s[w].call(null,c);for(l.hmrD[o]=c,i.hot.active=!1,delete l.c[o],delete d[o],w=0;w<i.children.length;w++){var f=l.c[i.children[w]];f&&((e=f.parents.indexOf(o))>=0&&f.parents.splice(e,1))}}}for(var p in d)if(l.o(d,p)&&(i=l.c[p]))for(b=d[p],w=0;w<b.length;w++)n=b[w],(e=i.children.indexOf(n))>=0&&i.children.splice(e,1)},apply:function(n){for(var r in s)l.o(s,r)&&(l.m[r]=s[r]);for(var t=0;t<o.length;t++)o[t](l);for(var a in d)if(l.o(d,a)){var i=l.c[a];if(i){b=d[a];for(var c=[],f=[],p=[],h=0;h<b.length;h++){var m=b[h],v=i.hot._acceptedDependencies[m],y=i.hot._acceptedErrorHandlers[m];if(v){if(-1!==c.indexOf(v))continue;c.push(v),f.push(y),p.push(m)}}for(var g=0;g<c.length;g++)try{c[g].call(null,b)}catch(r){if("function"==typeof f[g])try{f[g](r,{moduleId:a,dependencyId:p[g]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:a,dependencyId:p[g],error:t,originalError:r}),e.ignoreErrored||(n(t),n(r))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:a,dependencyId:p[g],error:r}),e.ignoreErrored||n(r)}}}for(var _=0;_<E.length;_++){var w=E[_],I=w.module;try{w.require(I)}catch(r){if("function"==typeof w.errorHandler)try{w.errorHandler(r,{moduleId:I,module:l.c[I]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:t,originalError:r}),e.ignoreErrored||(n(t),n(r))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:I,error:r}),e.ignoreErrored||n(r)}}return u}}}self.webpackHotUpdateportf=(n,t,a)=>{for(var c in t)l.o(t,c)&&(r[c]=t[c],e&&e.push(c));a&&o.push(a),i[n]&&(i[n](),i[n]=void 0)},l.hmrI.jsonp=function(e,n){r||(r={},o=[],t=[],n.push(d)),l.o(r,e)||(r[e]=l.m[e])},l.hmrC.jsonp=function(e,i,u,s,f,p){f.push(d),n={},t=i,r=u.reduce((function(e,n){return e[n]=!1,e}),{}),o=[],e.forEach((function(e){l.o(a,e)&&void 0!==a[e]?(s.push(c(e,p)),n[e]=!0):n[e]=!1})),l.f&&(l.f.jsonpHmr=function(e,r){n&&l.o(n,e)&&!n[e]&&(r.push(c(e)),n[e]=!0)})},l.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(l.p+l.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},l.O.j=e=>0===a[e];var u=(e,n)=>{var r,t,[o,i,c]=n,d=0;if(o.some((e=>0!==a[e]))){for(r in i)l.o(i,r)&&(l.m[r]=i[r]);if(c)var u=c(l)}for(e&&e(n);d<o.length;d++)t=o[d],l.o(a,t)&&a[t]&&a[t][0](),a[t]=0;return l.O(u)},s=self.webpackChunkportf=self.webpackChunkportf||[];s.forEach(u.bind(null,0)),s.push=u.bind(null,s.push.bind(s))})(),l.nc=void 0;var a=l.O(void 0,[76],(()=>l(2083)));a=l.O(a)})();