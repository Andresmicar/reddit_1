(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5f57"],{9769:function(e,a,n){"use strict";n.r(a),n.d(a,"mdTransitionAnimation",(function(){return o}));n("69ed"),n("b6d2"),n("c123");var i=n("157e"),t=(n("a1ca"),n("ceb5")),o=function(e,a){var n="40px",o="0px",r="back"===a.direction,c=a.enteringEl,d=a.leavingEl,b=Object(t["b"])(c),s=b.querySelector("ion-toolbar"),l=Object(i["a"])();if(l.addElement(b).fill("both").beforeRemoveClass("ion-page-invisible"),r?l.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):l.duration(a.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY("+n+")","translateY("+o+")").fromTo("opacity",.01,1),s){var u=Object(i["a"])();u.addElement(s),l.addAnimation(u)}if(d&&r){l.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var f=Object(i["a"])();f.addElement(Object(t["b"])(d)).afterStyles({display:"none"}).fromTo("transform","translateY("+o+")","translateY("+n+")").fromTo("opacity",1,0),l.addAnimation(f)}return l}}}]);
//# sourceMappingURL=chunk-2d0e5f57.592b2103.js.map