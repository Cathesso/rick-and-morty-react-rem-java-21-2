(this["webpackJsonprick-morty-react-app"]=this["webpackJsonprick-morty-react-app"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(13),a=n.n(i),s=(n(19),n(3)),j=(n(20),n(0));var o=function(e){return Object(j.jsxs)("p",{className:"name",children:[Object(j.jsx)("strong",{children:"Name:"})," ",e.name]})};var u=function(e){var t=e.character;return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:t.image,alt:"Much majestic, very wow!"}),Object(j.jsx)(o,{name:t.name}),Object(j.jsxs)("p",{class:"description",children:[" ",Object(j.jsx)("strong",{children:"Description:"})," ",t.species," "]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:"Origin: "}),t.origin.name]})]})},b=n(14),h=n.n(b);var l=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),a=Object(s.a)(i,2),o=a[0],b=a[1],l=Object(c.useState)(),O=Object(s.a)(l,2),d=O[0],f=O[1],p=Object(c.useState)(!1),m=Object(s.a)(p,2),x=m[0],g=m[1],v=Object(c.useState)(1),k=Object(s.a)(v,2),C=k[0],w=k[1];return Object(c.useEffect)((function(){!function(e){g(!0),(t=e,h.a.get("https://rickandmortyapi.com/api/character/?page="+t).then((function(e){return e.data}))).then((function(e){return b(e.results)})).catch((function(e){return f(e)})).finally((function(){return g(!1)}));var t}(C)}),[C]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{children:["Rick & Morty Characters ",C]}),Object(j.jsxs)("div",{className:"control",children:[Object(j.jsx)("button",{onClick:function(){return w(C-1)},children:"Prev"}),Object(j.jsx)("input",{value:n,onChange:function(e){r(e.target.value)}}),Object(j.jsx)("button",{onClick:function(){return w(C+1)},children:"Next"})]}),o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return Object(j.jsx)(u,{character:e},e.id)})),x&&Object(j.jsx)("div",{children:"L\xe4dt!"}),d&&Object(j.jsxs)("div",{children:["Ja wee\xdf ick jetz ooch nich: ",d.message]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root")),O()}},[[40,1,2]]]);
//# sourceMappingURL=main.c90dd8a6.chunk.js.map