(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3840"],{2969:function(e,t,o){"use strict";o.r(t),o.d(t,"iosTransitionAnimation",(function(){return u})),o.d(t,"shadow",(function(){return i}));o("69ed"),o("b6d2"),o("c123");var r=o("157e"),a=(o("a1ca"),o("ceb5")),n=540,l=function(e,t){return void 0===t&&(t="top"),"calc("+e+"px + var(--ion-safe-area-"+t+"))"},s=function(e){return document.querySelector(e+".ion-cloned-element")},i=function(e){return e.shadowRoot||e},c=function(e){return e.querySelector("ion-header:not(.header-collapse-condense-inactive) ion-title[size=large]")},f=function(e,t){for(var o=e.querySelectorAll("ion-buttons"),r=0,a=o;r<a.length;r++){var n=a[r],l=n.closest("ion-header"),s=l&&!l.classList.contains("header-collapse-condense-inactive"),i=n.querySelector("ion-back-button"),c=n.classList.contains("buttons-collapse");if(null!==i&&(c&&s&&t||!c))return i}return null},d=function(e,t,o,r,a){var n=f(r,o),l=c(a),s=c(r),i=f(a,o),d=null!==n&&null!==l&&!o,u=null!==s&&null!==i&&o;return d?(y(e,t,o,l),m(e,t,o,n)):u&&(y(e,t,o,s),m(e,t,o,i)),{forward:d,backward:u}},m=function(e,t,o,a){var n=a.getBoundingClientRect(),i=t?"calc(100% - "+(n.right+4)+"px)":n.left-4+"px",c=t?"7px":"-7px",f=t?"-4px":"4px",d=t?"-4px":"4px",m=t?"right":"left",y=t?"left":"right",u=[{offset:0,opacity:0,transform:"translate("+c+", "+l(8)+") scale(2.1)"},{offset:1,opacity:1,transform:"translate("+f+", "+l(-40)+") scale(1)"}],p=[{offset:0,opacity:1,transform:"translate("+f+", "+l(-40)+") scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate("+c+", "+l(8)+") scale(2.1)"}],b=o?p:u,S=[{offset:0,opacity:0,transform:"translate3d("+d+", "+l(-35)+", 0) scale(0.6)"},{offset:1,opacity:1,transform:"translate3d("+d+", "+l(-40)+", 0) scale(1)"}],v=[{offset:0,opacity:1,transform:"translate("+d+", "+l(-40)+") scale(1)"},{offset:.2,opacity:0,transform:"translate("+d+", "+l(-35)+") scale(0.6)"},{offset:1,opacity:0,transform:"translate("+d+", "+l(-35)+") scale(0.6)"}],T=o?v:S,h=Object(r["a"])(),g=Object(r["a"])(),E=s("ion-back-button"),q=E.querySelector(".button-text"),A=E.querySelector("ion-icon");E.text=a.text,E.mode=a.mode,E.icon=a.icon,E.color=a.color,E.disabled=a.disabled,E.style.setProperty("display","block"),E.style.setProperty("position","fixed"),g.addElement(A),h.addElement(q),h.beforeStyles({"transform-origin":m+" center"}).beforeAddWrite((function(){a.style.setProperty("display","none"),E.style.setProperty(m,i)})).afterAddWrite((function(){a.style.setProperty("display",""),E.style.setProperty("display","none"),E.style.removeProperty(m)})).keyframes(b),g.beforeStyles({"transform-origin":y+" center"}).keyframes(T),e.addAnimation([h,g])},y=function(e,t,o,a){var n,i=a.getBoundingClientRect(),c=t?"calc(100% - "+i.right+"px)":i.left+"px",f=t?"-18px":"18px",d=t?"right":"left",m=[{offset:0,opacity:0,transform:"translate("+f+", "+l(0)+") scale(0.49)"},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate(0, "+l(49)+") scale(1)"}],y=[{offset:0,opacity:.99,transform:"translate(0, "+l(49)+") scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate("+f+", "+l(0)+") scale(0.5)"}],u=o?m:y,p=s("ion-title"),b=Object(r["a"])();p.innerText=a.innerText,p.size=a.size,p.color=a.color,b.addElement(p),b.beforeStyles((n={"transform-origin":d+" center",height:"46px",display:"",position:"relative"},n[d]=c,n)).beforeAddWrite((function(){a.style.setProperty("display","none")})).afterAddWrite((function(){a.style.setProperty("display",""),p.style.setProperty("display","none")})).keyframes(u),e.addAnimation(b)},u=function(e,t){try{var o="cubic-bezier(0.32,0.72,0,1)",l="opacity",s="transform",c="0%",f=.8,m="rtl"===e.ownerDocument.dir,y=m?"-99.5%":"99.5%",u=m?"33%":"-33%",p=t.enteringEl,b=t.leavingEl,S="back"===t.direction,v=p.querySelector(":scope > ion-content"),T=p.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),h=p.querySelectorAll(":scope > ion-header > ion-toolbar"),g=Object(r["a"])(),E=Object(r["a"])();if(g.addElement(p).duration(t.duration||n).easing(t.easing||o).fill("both").beforeRemoveClass("ion-page-invisible"),b&&e){var q=Object(r["a"])();q.addElement(e),g.addAnimation(q)}if(v||0!==h.length||0!==T.length?(E.addElement(v),E.addElement(T)):E.addElement(p.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),g.addAnimation(E),S?E.beforeClearStyles([l]).fromTo("transform","translateX("+u+")","translateX("+c+")").fromTo(l,f,1):E.beforeClearStyles([l]).fromTo("transform","translateX("+y+")","translateX("+c+")"),v){var A=i(v).querySelector(".transition-effect");if(A){var X=A.querySelector(".transition-cover"),j=A.querySelector(".transition-shadow"),O=Object(r["a"])(),x=Object(r["a"])(),C=Object(r["a"])();O.addElement(A).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),x.addElement(X).beforeClearStyles([l]).fromTo(l,0,.1),C.addElement(j).beforeClearStyles([l]).fromTo(l,.03,.7),O.addAnimation([x,C]),E.addAnimation([O])}}var k=p.querySelector("ion-header.header-collapse-condense"),w=d(g,m,S,p,b),P=w.forward,L=w.backward;if(h.forEach((function(e){var t=Object(r["a"])();t.addElement(e),g.addAnimation(t);var o=Object(r["a"])();o.addElement(e.querySelector("ion-title"));var a,n=Object(r["a"])(),s=Array.from(e.querySelectorAll("ion-buttons,[menuToggle]")),f=e.closest("ion-header"),d=f&&f.classList.contains("header-collapse-condense-inactive");a=S?s.filter((function(e){var t=e.classList.contains("buttons-collapse");return t&&!d||!t})):s.filter((function(e){return!e.classList.contains("buttons-collapse")})),n.addElement(a);var p=Object(r["a"])();p.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var b=Object(r["a"])();b.addElement(i(e).querySelector(".toolbar-background"));var v=Object(r["a"])(),T=e.querySelector("ion-back-button");if(T&&v.addElement(T),t.addAnimation([o,n,p,b,v]),n.fromTo(l,.01,1),p.fromTo(l,.01,1),S)d||o.fromTo("transform","translateX("+u+")","translateX("+c+")").fromTo(l,.01,1),p.fromTo("transform","translateX("+u+")","translateX("+c+")"),v.fromTo(l,.01,1);else if(k||o.fromTo("transform","translateX("+y+")","translateX("+c+")").fromTo(l,.01,1),p.fromTo("transform","translateX("+y+")","translateX("+c+")"),b.beforeClearStyles([l]).fromTo(l,.01,1),P||v.fromTo(l,.01,1),T&&!P){var h=Object(r["a"])();h.addElement(i(T).querySelector(".button-text")).fromTo("transform",m?"translateX(-100px)":"translateX(100px)","translateX(0px)"),t.addAnimation(h)}})),b){var W=Object(r["a"])(),z=b.querySelector(":scope > ion-content");if(W.addElement(z),W.addElement(b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),g.addAnimation(W),S){W.beforeClearStyles([l]).fromTo("transform","translateX("+c+")",m?"translateX(-100%)":"translateX(100%)");var R=Object(a["b"])(b);g.afterAddWrite((function(){"normal"===g.getDirection()&&R.style.setProperty("display","none")}))}else W.fromTo("transform","translateX("+c+")","translateX("+u+")").fromTo(l,1,f);if(z){var B=i(z).querySelector(".transition-effect");if(B){var D=B.querySelector(".transition-cover"),J=B.querySelector(".transition-shadow"),F=Object(r["a"])(),G=Object(r["a"])(),H=Object(r["a"])();F.addElement(B).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),G.addElement(D).beforeClearStyles([l]).fromTo(l,.1,0),H.addElement(J).beforeClearStyles([l]).fromTo(l,.7,.03),F.addAnimation([G,H]),W.addAnimation([F])}}var I=b.querySelectorAll(":scope > ion-header > ion-toolbar");I.forEach((function(e){var t=Object(r["a"])();t.addElement(e);var o=Object(r["a"])();o.addElement(e.querySelector("ion-title"));var a=Object(r["a"])(),n=e.querySelectorAll("ion-buttons,[menuToggle]"),f=e.closest("ion-header"),d=f&&f.classList.contains("header-collapse-condense-inactive"),y=Array.from(n).filter((function(e){var t=e.classList.contains("buttons-collapse");return t&&!d||!t}));a.addElement(y);var p=Object(r["a"])(),b=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&p.addElement(b);var v=Object(r["a"])();v.addElement(i(e).querySelector(".toolbar-background"));var T=Object(r["a"])(),h=e.querySelector("ion-back-button");if(h&&T.addElement(h),t.addAnimation([o,a,p,T,v]),g.addAnimation(t),T.fromTo(l,.99,0),a.fromTo(l,.99,0),p.fromTo(l,.99,0),S){if(d||o.fromTo("transform","translateX("+c+")",m?"translateX(-100%)":"translateX(100%)").fromTo(l,.99,0),p.fromTo("transform","translateX("+c+")",m?"translateX(-100%)":"translateX(100%)"),v.beforeClearStyles([l]).fromTo(l,1,.01),h&&!L){var E=Object(r["a"])();E.addElement(i(h).querySelector(".button-text")).fromTo("transform","translateX("+c+")","translateX("+(m?-124:124)+"px)"),t.addAnimation(E)}}else d||o.fromTo("transform","translateX("+c+")","translateX("+u+")").fromTo(l,.99,0).afterClearStyles([s,l]),p.fromTo("transform","translateX("+c+")","translateX("+u+")").afterClearStyles([s,l]),T.afterClearStyles([l]),o.afterClearStyles([l]),a.afterClearStyles([l])}))}return g}catch(K){throw K}}}}]);
//# sourceMappingURL=chunk-2d0b3840.42e5ae46.js.map