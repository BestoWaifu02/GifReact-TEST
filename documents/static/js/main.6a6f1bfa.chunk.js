(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),l=a(1),u=(a(8),function(e){e.setCategories;var t=Object(n.useState)(""),a=Object(l.a)(t,2);a[0],a[1]}),o=a(4),s=a.n(o),m=a(7),d=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null," ",t," "))},p=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(l.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){d(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"}," ",t," "),i&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(f,Object.assign({key:e.id},e))}))))},g=function(){var e=Object(n.useState)(["Akame Ga Kill"]),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"App By BestoWaifu02 (Diego Robledo Mendoza)"),r.a.createElement(u,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(p,{key:e,category:e})}))))};a(15);i.a.render(r.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6a6f1bfa.chunk.js.map