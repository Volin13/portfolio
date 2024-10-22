(()=>{"use strict";var e,t,r,n={5768:(e,t,r)=>{r.r(t);r(2088),r(9786),r(5947),r(8596),r(9302);e.hot.accept(5768,(e=>{console.log("Project Details module updated.")}))},8596:(e,t,r)=>{var n=r(1236),o=(r(2052),r(7936),r(2375));r(7044);var a=r(3385),i=r(7083);r(5639),r(7426);r(5155),r(8929),r(8998);function l(e){let t,r,{swiper:n,extendParams:a,on:i,emit:l,params:s}=e;n.autoplay={running:!1,paused:!1,timeLeft:0},a({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,c,u,p,f,h,m,y,v=s&&s.autoplay?s.autoplay.delay:3e3,g=s&&s.autoplay?s.autoplay.delay:3e3,b=(new Date).getTime();function w(e){n&&!n.destroyed&&n.wrapperEl&&e.target===n.wrapperEl&&(n.wrapperEl.removeEventListener("transitionend",w),y||e.detail&&e.detail.bySwiperTouchMove||T())}const E=()=>{if(n.destroyed||!n.autoplay.running)return;n.autoplay.paused?c=!0:c&&(g=d,c=!1);const e=n.autoplay.paused?d:b+g-(new Date).getTime();n.autoplay.timeLeft=e,l("autoplayTimeLeft",e,e/v),r=requestAnimationFrame((()=>{E()}))},_=e=>{if(n.destroyed||!n.autoplay.running)return;cancelAnimationFrame(r),E();let o=void 0===e?n.params.autoplay.delay:e;v=n.params.autoplay.delay,g=n.params.autoplay.delay;const a=(()=>{let e;if(e=n.virtual&&n.params.virtual.enabled?n.slides.filter((e=>e.classList.contains("swiper-slide-active")))[0]:n.slides[n.activeIndex],!e)return;return parseInt(e.getAttribute("data-swiper-autoplay"),10)})();!Number.isNaN(a)&&a>0&&void 0===e&&(o=a,v=a,g=a),d=o;const i=n.params.speed,s=()=>{n&&!n.destroyed&&(n.params.autoplay.reverseDirection?!n.isBeginning||n.params.loop||n.params.rewind?(n.slidePrev(i,!0,!0),l("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(n.slides.length-1,i,!0,!0),l("autoplay")):!n.isEnd||n.params.loop||n.params.rewind?(n.slideNext(i,!0,!0),l("autoplay")):n.params.autoplay.stopOnLastSlide||(n.slideTo(0,i,!0,!0),l("autoplay")),n.params.cssMode&&(b=(new Date).getTime(),requestAnimationFrame((()=>{_()}))))};return o>0?(clearTimeout(t),t=setTimeout((()=>{s()}),o)):requestAnimationFrame((()=>{s()})),o},O=()=>{b=(new Date).getTime(),n.autoplay.running=!0,_(),l("autoplayStart")},S=()=>{n.autoplay.running=!1,clearTimeout(t),cancelAnimationFrame(r),l("autoplayStop")},D=(e,r)=>{if(n.destroyed||!n.autoplay.running)return;clearTimeout(t),e||(m=!0);const o=()=>{l("autoplayPause"),n.params.autoplay.waitForTransition?n.wrapperEl.addEventListener("transitionend",w):T()};if(n.autoplay.paused=!0,r)return h&&(d=n.params.autoplay.delay),h=!1,void o();const a=d||n.params.autoplay.delay;d=a-((new Date).getTime()-b),n.isEnd&&d<0&&!n.params.loop||(d<0&&(d=0),o())},T=()=>{n.isEnd&&d<0&&!n.params.loop||n.destroyed||!n.autoplay.running||(b=(new Date).getTime(),m?(m=!1,_(d)):_(),n.autoplay.paused=!1,l("autoplayResume"))},I=()=>{if(n.destroyed||!n.autoplay.running)return;const e=(0,o.g)();"hidden"===e.visibilityState&&(m=!0,D(!0)),"visible"===e.visibilityState&&T()},j=e=>{"mouse"===e.pointerType&&(m=!0,y=!0,n.animating||n.autoplay.paused||D(!0))},x=e=>{"mouse"===e.pointerType&&(y=!1,n.autoplay.paused&&T())};i("init",(()=>{n.params.autoplay.enabled&&(n.params.autoplay.pauseOnMouseEnter&&(n.el.addEventListener("pointerenter",j),n.el.addEventListener("pointerleave",x)),(0,o.g)().addEventListener("visibilitychange",I),O())})),i("destroy",(()=>{n.el&&"string"!=typeof n.el&&(n.el.removeEventListener("pointerenter",j),n.el.removeEventListener("pointerleave",x)),(0,o.g)().removeEventListener("visibilitychange",I),n.autoplay.running&&S()})),i("_freeModeStaticRelease",(()=>{(p||m)&&T()})),i("_freeModeNoMomentumRelease",(()=>{n.params.autoplay.disableOnInteraction?S():D(!0,!0)})),i("beforeTransitionStart",((e,t,r)=>{!n.destroyed&&n.autoplay.running&&(r||!n.params.autoplay.disableOnInteraction?D(!0,!0):S())})),i("sliderFirstMove",(()=>{!n.destroyed&&n.autoplay.running&&(n.params.autoplay.disableOnInteraction?S():(u=!0,p=!1,m=!1,f=setTimeout((()=>{m=!0,p=!0,D(!0)}),200)))})),i("touchEnd",(()=>{if(!n.destroyed&&n.autoplay.running&&u){if(clearTimeout(f),clearTimeout(t),n.params.autoplay.disableOnInteraction)return p=!1,void(u=!1);p&&n.params.cssMode&&T(),p=!1,u=!1}})),i("slideChange",(()=>{!n.destroyed&&n.autoplay.running&&(h=!0)})),Object.assign(n.autoplay,{start:O,stop:S,pause:D,resume:T})}r(3484),r(7555);var s=r(6971);r(6666),r(2664),r(5426),r(7698),r(9574);document.addEventListener("DOMContentLoaded",(function(){new n.A(".descriptionSwiper",{speed:500,lazy:!0,direction:"horizontal",grabCursor:!0,spaceBetween:30,modules:[a.A,i.A,s.A,l],loop:!0,effect:"fade",fadeEffect:{crossFade:!0},autoplay:{delay:3500,pauseOnMouseEnter:!0},speed:2e3,pagination:{el:".swiper-pagination",type:"bullets",dynamicBullets:!0,dynamicMainBullets:3,clickable:!0},navigation:{nextEl:".descriptionSwiper__button-next",prevEl:".descriptionSwiper__button-prev"}})}))},7044:(e,t,r)=>{r.d(t,{a:()=>w,c:()=>m,d:()=>i,e:()=>f,f:()=>_,g:()=>p,h:()=>b,j:()=>l,k:()=>E,m:()=>O,n:()=>a,o:()=>g,p:()=>v,q:()=>y,r:()=>u,s:()=>c,t:()=>h,u:()=>d,v:()=>o});var n=r(2375);function o(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function a(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function i(){return Date.now()}function l(e,t){void 0===t&&(t="x");const r=(0,n.a)();let o,a,i;const l=function(e){const t=(0,n.a)();let r;return t.getComputedStyle&&(r=t.getComputedStyle(e,null)),!r&&e.currentStyle&&(r=e.currentStyle),r||(r=e.style),r}(e);return r.WebKitCSSMatrix?(a=l.transform||l.webkitTransform,a.split(",").length>6&&(a=a.split(", ").map((e=>e.replace(",","."))).join(", ")),i=new r.WebKitCSSMatrix("none"===a?"":a)):(i=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),o=i.toString().split(",")),"x"===t&&(a=r.WebKitCSSMatrix?i.m41:16===o.length?parseFloat(o[12]):parseFloat(o[4])),"y"===t&&(a=r.WebKitCSSMatrix?i.m42:16===o.length?parseFloat(o[13]):parseFloat(o[5])),a||0}function s(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function d(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<arguments.length;n+=1){const o=n<0||arguments.length<=n?void 0:arguments[n];if(null!=o&&(r=o,!("undefined"!=typeof window&&void 0!==window.HTMLElement?r instanceof HTMLElement:r&&(1===r.nodeType||11===r.nodeType)))){const r=Object.keys(Object(o)).filter((e=>t.indexOf(e)<0));for(let t=0,n=r.length;t<n;t+=1){const n=r[t],a=Object.getOwnPropertyDescriptor(o,n);void 0!==a&&a.enumerable&&(s(e[n])&&s(o[n])?o[n].__swiper__?e[n]=o[n]:d(e[n],o[n]):!s(e[n])&&s(o[n])?(e[n]={},o[n].__swiper__?e[n]=o[n]:d(e[n],o[n])):e[n]=o[n])}}}var r;return e}function c(e,t,r){e.style.setProperty(t,r)}function u(e){let{swiper:t,targetPosition:r,side:o}=e;const a=(0,n.a)(),i=-t.translate;let l,s=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(t.cssModeFrameID);const c=r>i?"next":"prev",u=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,p=()=>{l=(new Date).getTime(),null===s&&(s=l);const e=Math.max(Math.min((l-s)/d,1),0),n=.5-Math.cos(e*Math.PI)/2;let c=i+n*(r-i);if(u(c,r)&&(c=r),t.wrapperEl.scrollTo({[o]:c}),u(c,r))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[o]:c})})),void a.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=a.requestAnimationFrame(p)};p()}function p(e){return e.querySelector(".swiper-slide-transform")||e.shadowRoot&&e.shadowRoot.querySelector(".swiper-slide-transform")||e}function f(e,t){return void 0===t&&(t=""),[...e.children].filter((e=>e.matches(t)))}function h(e){try{return void console.warn(e)}catch(e){}}function m(e,t){void 0===t&&(t=[]);const r=document.createElement(e);return r.classList.add(...Array.isArray(t)?t:function(e){return void 0===e&&(e=""),e.trim().split(" ").filter((e=>!!e.trim()))}(t)),r}function y(e,t){const r=[];for(;e.previousElementSibling;){const n=e.previousElementSibling;t?n.matches(t)&&r.push(n):r.push(n),e=n}return r}function v(e,t){const r=[];for(;e.nextElementSibling;){const n=e.nextElementSibling;t?n.matches(t)&&r.push(n):r.push(n),e=n}return r}function g(e,t){return(0,n.a)().getComputedStyle(e,null).getPropertyValue(t)}function b(e){let t,r=e;if(r){for(t=0;null!==(r=r.previousSibling);)1===r.nodeType&&(t+=1);return t}}function w(e,t){const r=[];let n=e.parentElement;for(;n;)t?n.matches(t)&&r.push(n):r.push(n),n=n.parentElement;return r}function E(e,t){t&&e.addEventListener("transitionend",(function r(n){n.target===e&&(t.call(e,n),e.removeEventListener("transitionend",r))}))}function _(e,t,r){const o=(0,n.a)();return r?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(o.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(o.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}function O(e){return(Array.isArray(e)?e:[e]).filter((e=>!!e))}}},o={};function a(e){var t=o[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var r=o[e]={id:e,exports:{}};try{var i={id:e,module:r,factory:n[e],require:a};a.i.forEach((function(e){e(i)})),r=i.module,i.factory.call(r.exports,r,r.exports,i.require)}catch(e){throw r.error=e,e}return r.exports}a.m=n,a.c=o,a.i=[],e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,n,o]=e[c],l=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.hu=e=>e+"."+a.h()+".hot-update.js",a.hmrF=()=>"projectDetails."+a.h()+".hot-update.json",a.h=()=>"bd3fea370f308529ebb3",a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="portf:",a.l=(e,n,o,i)=>{if(t[e])t[e].push(n);else{var l,s;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+o){l=u;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",r+o),l.src=e),t[e]=[n];var p=(r,n)=>{l.onerror=l.onload=null,clearTimeout(f);var o=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(n))),r)return r(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=36,(()=>{var e,t,r,n={},o=a.c,i=[],l=[],s="idle",d=0,c=[];function u(e){s=e;for(var t=[],r=0;r<l.length;r++)t[r]=l[r].call(null,e);return Promise.all(t).then((function(){}))}function p(){0==--d&&u("ready").then((function(){if(0===d){var e=c;c=[];for(var t=0;t<e.length;t++)e[t]()}}))}function f(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return u("check").then(a.hmrM).then((function(r){return r?u("prepare").then((function(){var n=[];return t=[],Promise.all(Object.keys(a.hmrC).reduce((function(e,o){return a.hmrC[o](r.c,r.r,r.m,e,t,n),e}),[])).then((function(){return t=function(){return e?m(e):u("ready").then((function(){return n}))},0===d?t():new Promise((function(e){c.push((function(){e(t())}))}));var t}))})):u(y()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==s?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+s+")")})):m(e)}function m(e){e=e||{},y();var n=t.map((function(t){return t(e)}));t=void 0;var o=n.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var a=u("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var i,l=u("apply"),s=function(e){i||(i=e)},d=[];return n.forEach((function(e){if(e.apply){var t=e.apply(s);if(t)for(var r=0;r<t.length;r++)d.push(t[r])}})),Promise.all([a,l]).then((function(){return i?u("fail").then((function(){throw i})):r?m(e).then((function(e){return d.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):u("idle").then((function(){return d}))}))}function y(){if(r)return t||(t=[]),Object.keys(a.hmrI).forEach((function(e){r.forEach((function(r){a.hmrI[e](r,t)}))})),r=void 0,!0}a.hmrD=n,a.i.push((function(c){var m,y,v,g,b=c.module,w=function(t,r){var n=o[r];if(!n)return t;var a=function(a){if(n.hot.active){if(o[a]){var l=o[a].parents;-1===l.indexOf(r)&&l.push(r)}else i=[r],e=a;-1===n.children.indexOf(a)&&n.children.push(a)}else console.warn("[HMR] unexpected require("+a+") from disposed module "+r),i=[];return t(a)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&"e"!==c&&Object.defineProperty(a,c,l(c));return a.e=function(e,r){return function(e){switch(s){case"ready":u("prepare");case"prepare":return d++,e.then(p,p),e;default:return e}}(t.e(e,r))},a}(c.require,c.id);b.hot=(m=c.id,y=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:v=e!==m,_requireSelf:function(){i=y.parents.slice(),e=v?void 0:m,a(m)},active:!0,accept:function(e,t,r){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)g._acceptedDependencies[e[n]]=t||function(){},g._acceptedErrorHandlers[e[n]]=r;else g._acceptedDependencies[e]=t||function(){},g._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._declinedDependencies[e[t]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=g._disposeHandlers.indexOf(e);t>=0&&g._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":t=[],Object.keys(a.hmrI).forEach((function(e){a.hmrI[e](m,t)})),u("ready");break;case"ready":Object.keys(a.hmrI).forEach((function(e){a.hmrI[e](m,t)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(m)}},check:f,apply:h,status:function(e){if(!e)return s;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:n[m]},e=void 0,g),b.parents=i,b.children=[],i=[],c.require=w})),a.hmrC={},a.hmrI={}})(),a.p="/",(()=>{a.b=document.baseURI||self.location.href;var e,t,r,n,o,i=a.hmrS_jsonp=a.hmrS_jsonp||{36:0},l={};function s(t,r){return e=r,new Promise(((e,r)=>{l[t]=e;var n=a.p+a.hu(t),o=new Error;a.l(n,(e=>{if(l[t]){l[t]=void 0;var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+t+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,r(o)}}))}))}function d(e){function l(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),i=o.id,l=o.chain,d=a.c[i];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:l,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:l,moduleId:i};for(var c=0;c<d.parents.length;c++){var u=d.parents[c],p=a.c[u];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:l.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(p.hot._acceptedDependencies[i]?(r[u]||(r[u]=[]),s(r[u],[i])):(delete r[u],t.push(u),n.push({chain:l.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}a.f&&delete a.f.jsonpHmr,t=void 0;var d={},c=[],u={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in r)if(a.o(r,f)){var h,m=r[f],y=!1,v=!1,g=!1,b="";switch((h=m?l(f):{type:"disposed",moduleId:f}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(y=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(y=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(y=new Error("Aborted because "+f+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),v=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(y)return{error:y};if(v)for(f in u[f]=m,s(c,h.outdatedModules),h.outdatedDependencies)a.o(h.outdatedDependencies,f)&&(d[f]||(d[f]=[]),s(d[f],h.outdatedDependencies[f]));g&&(s(c,[h.moduleId]),u[f]=p)}r=void 0;for(var w,E=[],_=0;_<c.length;_++){var O=c[_],S=a.c[O];S&&(S.hot._selfAccepted||S.hot._main)&&u[O]!==p&&!S.hot._selfInvalidated&&E.push({module:O,require:S.hot._requireSelf,errorHandler:S.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete i[e]})),n=void 0;for(var t,r=c.slice();r.length>0;){var o=r.pop(),l=a.c[o];if(l){var s={},u=l.hot._disposeHandlers;for(_=0;_<u.length;_++)u[_].call(null,s);for(a.hmrD[o]=s,l.hot.active=!1,delete a.c[o],delete d[o],_=0;_<l.children.length;_++){var p=a.c[l.children[_]];p&&((e=p.parents.indexOf(o))>=0&&p.parents.splice(e,1))}}}for(var f in d)if(a.o(d,f)&&(l=a.c[f]))for(w=d[f],_=0;_<w.length;_++)t=w[_],(e=l.children.indexOf(t))>=0&&l.children.splice(e,1)},apply:function(t){for(var r in u)a.o(u,r)&&(a.m[r]=u[r]);for(var n=0;n<o.length;n++)o[n](a);for(var i in d)if(a.o(d,i)){var l=a.c[i];if(l){w=d[i];for(var s=[],p=[],f=[],h=0;h<w.length;h++){var m=w[h],y=l.hot._acceptedDependencies[m],v=l.hot._acceptedErrorHandlers[m];if(y){if(-1!==s.indexOf(y))continue;s.push(y),p.push(v),f.push(m)}}for(var g=0;g<s.length;g++)try{s[g].call(null,w)}catch(r){if("function"==typeof p[g])try{p[g](r,{moduleId:i,dependencyId:f[g]})}catch(n){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:f[g],error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:f[g],error:r}),e.ignoreErrored||t(r)}}}for(var b=0;b<E.length;b++){var _=E[b],O=_.module;try{_.require(O)}catch(r){if("function"==typeof _.errorHandler)try{_.errorHandler(r,{moduleId:O,module:a.c[O]})}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:O,error:n,originalError:r}),e.ignoreErrored||(t(n),t(r))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:O,error:r}),e.ignoreErrored||t(r)}}return c}}}self.webpackHotUpdateportf=(t,n,i)=>{for(var s in n)a.o(n,s)&&(r[s]=n[s],e&&e.push(s));i&&o.push(i),l[t]&&(l[t](),l[t]=void 0)},a.hmrI.jsonp=function(e,t){r||(r={},o=[],n=[],t.push(d)),a.o(r,e)||(r[e]=a.m[e])},a.hmrC.jsonp=function(e,l,c,u,p,f){p.push(d),t={},n=l,r=c.reduce((function(e,t){return e[t]=!1,e}),{}),o=[],e.forEach((function(e){a.o(i,e)&&void 0!==i[e]?(u.push(s(e,f)),t[e]=!0):t[e]=!1})),a.f&&(a.f.jsonpHmr=function(e,r){t&&a.o(t,e)&&!t[e]&&(r.push(s(e)),t[e]=!0)})},a.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(a.p+a.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},a.O.j=e=>0===i[e];var c=(e,t)=>{var r,n,[o,l,s]=t,d=0;if(o.some((e=>0!==i[e]))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(s)var c=s(a)}for(e&&e(t);d<o.length;d++)n=o[d],a.o(i,n)&&i[n]&&i[n][0](),i[n]=0;return a.O(c)},u=self.webpackChunkportf=self.webpackChunkportf||[];u.forEach(c.bind(null,0)),u.push=c.bind(null,u.push.bind(u))})(),a.nc=void 0;var i=a.O(void 0,[76],(()=>a(5768)));i=a.O(i)})();