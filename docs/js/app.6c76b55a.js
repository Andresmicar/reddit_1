(function(n){function e(e){for(var t,r,u=e[0],d=e[1],i=e[2],s=0,h=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(n[t]=d[t]);f&&f(e);while(h.length)h.shift()();return o.push.apply(o,i||[]),c()}function c(){for(var n,e=0;e<o.length;e++){for(var c=o[e],t=!0,r=1;r<c.length;r++){var d=c[r];0!==a[d]&&(t=!1)}t&&(o.splice(e--,1),n=u(u.s=c[0]))}return n}var t={},a={app:0},o=[];function r(n){return u.p+"js/"+({about:"about"}[n]||n)+"."+{about:"9124a017","chunk-03a3b882":"136ae67c","chunk-0757a354":"af735b92","chunk-0cf8d3fd":"1f8f707a","chunk-1236b7ea":"cdb0bc98","chunk-13b67bd6":"415b637e","chunk-13d808b0":"2e3de08a","chunk-147347c2":"4dac6d47","chunk-173239cb":"a09595be","chunk-19749bdc":"da452987","chunk-1d09176a":"226d3f21","chunk-1d98d26e":"b4c0d8ad","chunk-1d9e597b":"d8a3e07f","chunk-1f01ba41":"9dc281ae","chunk-23d04875":"376ffabe","chunk-26cd360e":"18604904","chunk-276d98b6":"06bc4367","chunk-287bfebe":"468d6abd","chunk-2d0aef65":"36c6cb0d","chunk-2d0b5965":"9be468fa","chunk-2d0b95c5":"1c34d1aa","chunk-2d0c1f4a":"8ed85c5d","chunk-2d0d43da":"53b92bf8","chunk-2d0d5f78":"cb7af483","chunk-2d0da04a":"0c6f9dac","chunk-2d0e5812":"7e21b2f1","chunk-2d20825f":"3e30e628","chunk-2d208821":"cc493705","chunk-2d2107eb":"3fea26a3","chunk-2d218068":"1304e9f6","chunk-2d221c44":"42ace0bc","chunk-2d22bf12":"7ef7c890","chunk-2e3dea86":"b7bae2da","chunk-310e4a24":"1476650b","chunk-35303782":"4c19068e","chunk-42c9b51a":"16f2f82b","chunk-451c033d":"4a6b6715","chunk-45f210ed":"f10f348e","chunk-48aa0eb2":"c4ae94be","chunk-4bd21d71":"7d6a2ee0","chunk-4bfff9a0":"58b64f36","chunk-4c152a7f":"980ff0b4","chunk-4fd53c67":"c8807c9f","chunk-5236e874":"6adf9539","chunk-524b3904":"132ea791","chunk-55740014":"77dca778","chunk-5ae09e80":"db239ad5","chunk-5afd4824":"35a3cfd5","chunk-62fecb36":"e4febc43","chunk-64380fce":"82040288","chunk-6815f227":"a4c21051","chunk-685f1802":"d5a2f2fd","chunk-68f689f8":"af07f5cb","chunk-698cf714":"37e8d191","chunk-69b4d404":"f5690714","chunk-6f8305ec":"2af0d37f","chunk-724db1a8":"61efdd23","chunk-7466af47":"5b92a1e9","chunk-747507c6":"f810957c","chunk-7654979d":"8e2ec76a","chunk-76ed02b0":"150a2204","chunk-77289590":"8252d7b3","chunk-7abcb7ec":"952a2bcb","chunk-7debd47e":"d1604002","chunk-85bd8bec":"f4c45815","chunk-90f00036":"5251e48b","chunk-97af63a2":"220673f8","chunk-99349a2c":"cab226a4","chunk-9fce23b6":"b82f437a","chunk-a2f26d3a":"68f598d2","chunk-af516e02":"b96af3ae","chunk-af53ba2c":"397822d5","chunk-af55936a":"d066ed49","chunk-af59c236":"b8b3fce6","chunk-b133bd62":"165ca811","chunk-b5efce64":"95ad8f86","chunk-c17a989a":"d7989f00","chunk-c5ec1966":"0a55fcc6","chunk-cb3bc3aa":"910c2f5b","chunk-cc206ae2":"32d4a41c","chunk-cf035038":"2e8ecfbf","chunk-d09df222":"9f87b135","chunk-d968f544":"b4890214","chunk-e10b5e90":"0bfa2b5f","chunk-e1d3363c":"721b085a","chunk-f9bc50ea":"e7e30629","chunk-2d0a3a68":"3363f526","chunk-2d0b1bd7":"29a0371b","chunk-2d0b3840":"42e5ae46","chunk-2d0b9b8a":"efcfb93c","chunk-2d0c5785":"1a93480b","chunk-2d0e13d1":"b184cf8b","chunk-2d0e5f57":"592b2103","chunk-2d0e8e5e":"174bbc66","chunk-2d0cfec5":"82662344"}[n]+".js"}function u(e){if(t[e])return t[e].exports;var c=t[e]={i:e,l:!1,exports:{}};return n[e].call(c.exports,c,c.exports,u),c.l=!0,c.exports}u.e=function(n){var e=[],c=a[n];if(0!==c)if(c)e.push(c[2]);else{var t=new Promise((function(e,t){c=a[n]=[e,t]}));e.push(c[2]=t);var o,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=r(n);var i=new Error;o=function(e){d.onerror=d.onload=null,clearTimeout(s);var c=a[n];if(0!==c){if(c){var t=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading chunk "+n+" failed.\n("+t+": "+o+")",i.name="ChunkLoadError",i.type=t,i.request=o,c[1](i)}a[n]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:d})}),12e4);d.onerror=d.onload=o,document.head.appendChild(d)}return Promise.all(e)},u.m=n,u.c=t,u.d=function(n,e,c){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(u.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)u.d(c,t,function(e){return n[e]}.bind(null,t));return c},u.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/",u.oe=function(n){throw console.error(n),n};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=e,d=d.slice();for(var s=0;s<d.length;s++)e(d[s]);var f=i;o.push([0,"chunk-vendors"]),c()})({0:function(n,e,c){n.exports=c("56d7")},"05fe":function(n,e,c){var t={"./ion-action-sheet-controller_8.entry.js":["b628","chunk-03a3b882"],"./ion-action-sheet-ios.entry.js":["f1fc","chunk-55740014"],"./ion-action-sheet-md.entry.js":["fcd0","chunk-42c9b51a"],"./ion-alert-ios.entry.js":["bf7f","chunk-1f01ba41"],"./ion-alert-md.entry.js":["2ced","chunk-cf035038"],"./ion-app_8-ios.entry.js":["4078","chunk-45f210ed"],"./ion-app_8-md.entry.js":["a805","chunk-1d98d26e"],"./ion-avatar_3-ios.entry.js":["d1d6","chunk-7654979d"],"./ion-avatar_3-md.entry.js":["2822","chunk-0757a354"],"./ion-back-button-ios.entry.js":["6a57","chunk-d09df222"],"./ion-back-button-md.entry.js":["53f8","chunk-7abcb7ec"],"./ion-backdrop-ios.entry.js":["47f7","chunk-2d0c1f4a"],"./ion-backdrop-md.entry.js":["a40f","chunk-2d20825f"],"./ion-button_2-ios.entry.js":["32cb","chunk-d968f544"],"./ion-button_2-md.entry.js":["bbf30","chunk-9fce23b6"],"./ion-card_5-ios.entry.js":["95534","chunk-b5efce64"],"./ion-card_5-md.entry.js":["19bf","chunk-13d808b0"],"./ion-checkbox-ios.entry.js":["d98b","chunk-2e3dea86"],"./ion-checkbox-md.entry.js":["9522","chunk-5ae09e80"],"./ion-chip-ios.entry.js":["87e5","chunk-c5ec1966"],"./ion-chip-md.entry.js":["775e","chunk-6f8305ec"],"./ion-col_3.entry.js":["6a8a","chunk-2d0da04a"],"./ion-datetime_3-ios.entry.js":["495e","chunk-1236b7ea"],"./ion-datetime_3-md.entry.js":["2aa2","chunk-35303782"],"./ion-fab_3-ios.entry.js":["41d0","chunk-c17a989a"],"./ion-fab_3-md.entry.js":["c0b4","chunk-0cf8d3fd"],"./ion-img.entry.js":["9588","chunk-2d0e5812"],"./ion-infinite-scroll_2-ios.entry.js":["5bdc","chunk-af53ba2c"],"./ion-infinite-scroll_2-md.entry.js":["3acb","chunk-af55936a"],"./ion-input-ios.entry.js":["4d6d","chunk-287bfebe"],"./ion-input-md.entry.js":["037b","chunk-26cd360e"],"./ion-item-option_3-ios.entry.js":["4121","chunk-4bfff9a0"],"./ion-item-option_3-md.entry.js":["2dcf","chunk-4fd53c67"],"./ion-item_8-ios.entry.js":["c899","chunk-48aa0eb2"],"./ion-item_8-md.entry.js":["9c96","chunk-13b67bd6"],"./ion-loading-ios.entry.js":["a9f3","chunk-b133bd62"],"./ion-loading-md.entry.js":["568c","chunk-76ed02b0"],"./ion-menu_4-ios.entry.js":["1413","chunk-e10b5e90"],"./ion-menu_4-md.entry.js":["83f2","chunk-276d98b6"],"./ion-modal-ios.entry.js":["d3e0","chunk-97af63a2"],"./ion-modal-md.entry.js":["005e","chunk-64380fce"],"./ion-nav_5.entry.js":["9c3e","chunk-69b4d404"],"./ion-popover-ios.entry.js":["646f","chunk-1d9e597b"],"./ion-popover-md.entry.js":["cf49","chunk-7debd47e"],"./ion-progress-bar-ios.entry.js":["d984","chunk-cb3bc3aa"],"./ion-progress-bar-md.entry.js":["a831","chunk-6815f227"],"./ion-radio_2-ios.entry.js":["20ea","chunk-19749bdc"],"./ion-radio_2-md.entry.js":["4386","chunk-4c152a7f"],"./ion-range-ios.entry.js":["b74f","chunk-23d04875"],"./ion-range-md.entry.js":["1f2e","chunk-698cf714"],"./ion-refresher_2-ios.entry.js":["0128","chunk-af59c236"],"./ion-refresher_2-md.entry.js":["9626","chunk-af516e02"],"./ion-reorder_2-ios.entry.js":["68cb","chunk-5236e874"],"./ion-reorder_2-md.entry.js":["c026","chunk-524b3904"],"./ion-ripple-effect.entry.js":["c8da","chunk-2d218068"],"./ion-route_4.entry.js":["10e8","chunk-85bd8bec"],"./ion-searchbar-ios.entry.js":["4579","chunk-4bd21d71"],"./ion-searchbar-md.entry.js":["7dfb","chunk-173239cb"],"./ion-segment_2-ios.entry.js":["2e86","chunk-f9bc50ea"],"./ion-segment_2-md.entry.js":["866f","chunk-5afd4824"],"./ion-select_3-ios.entry.js":["9317","chunk-147347c2"],"./ion-select_3-md.entry.js":["4518","chunk-1d09176a"],"./ion-slide_2-ios.entry.js":["332a","chunk-2d0b95c5"],"./ion-slide_2-md.entry.js":["a4a9","chunk-2d208821"],"./ion-spinner.entry.js":["e11b","chunk-685f1802"],"./ion-split-pane-ios.entry.js":["f0b4","chunk-2d22bf12"],"./ion-split-pane-md.entry.js":["cc6d","chunk-2d221c44"],"./ion-tab-bar_2-ios.entry.js":["ae2e","chunk-62fecb36"],"./ion-tab-bar_2-md.entry.js":["df13","chunk-68f689f8"],"./ion-tab_2.entry.js":["6725","chunk-90f00036"],"./ion-text.entry.js":["ed3b","chunk-310e4a24"],"./ion-textarea-ios.entry.js":["6d1b","chunk-451c033d"],"./ion-textarea-md.entry.js":["4680","chunk-e1d3363c"],"./ion-toast-ios.entry.js":["5bda","chunk-99349a2c"],"./ion-toast-md.entry.js":["5c21","chunk-7466af47"],"./ion-toggle-ios.entry.js":["6daf","chunk-724db1a8"],"./ion-toggle-md.entry.js":["ae8d","chunk-cc206ae2"],"./ion-virtual-scroll.entry.js":["5fd7","chunk-2d0d43da"]};function a(n){if(!c.o(t,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=t[n],a=e[0];return c.e(e[1]).then((function(){return c(a)}))}a.keys=function(){return Object.keys(t)},a.id="05fe",n.exports=a},"56d7":function(n,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var t=c("2b0e"),a=function(){var n=this,e=n.$createElement,c=n._self._c||e;return c("ion-app",[c("ion-toolbar",{attrs:{color:"dark"}},[c("ion-buttons",{attrs:{slot:"secondary"},slot:"secondary"},[c("ion-button",[n._v(" Ionic ")])],1),c("ion-title",[n._v(" IonicVue ")])],1),c("div",{attrs:{id:"nav"}},[c("router-link",{attrs:{to:"/"}},[n._v("Home")]),n._v(" | "),c("router-link",{attrs:{to:"/about"}},[n._v("About")])],1),c("ion-content",{attrs:{color:"dark"}},[c("router-view")],1)],1)},o=[],r=c("2877"),u={},d=Object(r["a"])(u,a,o,!1,null,null,null),i=d.exports,s=(c("d3b7"),c("8c4f")),f=function(){var n=this,e=n.$createElement,c=n._self._c||e;return c("div",n._l(n.posts,(function(e){return c("ion-card",{key:e.data.id,staticStyle:{border:"1px solid yellow"}},[c("ion-card-content",[c("img",{attrs:{src:e.data.thumbnail,alt:""}}),c("ion-label",{attrs:{color:"light"}},[n._v(n._s(e.data.title))]),c("ion-button",{attrs:{color:"tertiary",expand:"full"},on:{click:function(c){return n.viewMore(e.data)}}},[n._v(" View more ")])],1)],1)})),1)},h=[],b=(c("96cf"),c("1da1")),k=c("bc3a"),l=c.n(k),y={data:function(){return{posts:[]}},mounted:function(){var n=Object(b["a"])(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,l.a.get("https://www.reddit.com/r/marvelstudios.json");case 2:e=n.sent,this.posts=e.data.data.children,console.log(this.posts);case 5:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),methods:{viewMore:function(n){this.$router.push({name:"detail",params:{post:n}})}}},p=y,j=Object(r["a"])(p,f,h,!1,null,null,null),m=j.exports;t["a"].use(s["a"]);var _=[{path:"/",name:"home",component:m},{path:"/detail",name:"detail",component:function(){return c.e("chunk-a2f26d3a").then(c.bind(null,"c84b"))},props:!0},{path:"/about",name:"about",component:function(){return c.e("about").then(c.bind(null,"f820"))}}],v=new s["a"]({mode:"history",base:"/",routes:_}),g=v,w=c("481b");c("95ad");t["a"].use(w["a"]),t["a"].config.productionTip=!1,new t["a"]({router:g,render:function(n){return n(i)}}).$mount("#app")}});
//# sourceMappingURL=app.6c76b55a.js.map