(this["webpackJsonppipeline-icons-demo"]=this["webpackJsonppipeline-icons-demo"]||[]).push([[0],{39:function(e,t,a){e.exports=a(48)},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),o=a(18),m=a(7),i=a(50),s=a(56),u=a(51),E=a(52),p=a(10),d=a(53),b=a(54),f=a(21),h=a(13),g=a(14),y=a(30),x=a(29),w=a(26),v=a(27),z=a(28),S=a(55),I=a(4),O=a(32),j=a.n(O),k=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1],m=Object(n.useRef)(null),i=Object(n.useRef)(0);return Object(n.useEffect)((function(){var t=new j.a(m.current,{text:function(){return e.text}});return t.on("success",(function(e){c(!0),clearTimeout(i.current),i.current=setTimeout((function(){return c(!1)}),1500)})),t.on("error",(function(e){console.log("error: failed to copy text",e)})),function(){t.destroy(),clearTimeout(i.current)}})),r.a.createElement("div",{ref:m},e.children(l))},A=Object(I.a)(m.b)([],{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),C=function(e){var t=e.filterValue,a=e.icons;return Object.keys(a).filter((function(e){return"Icon"!==e&&e.toLowerCase().includes(t.toLowerCase())})).map((function(e,t){return r.a.createElement(m.b,{key:e+t},r.a.createElement(k,{text:e},(function(t){return r.a.createElement(m.b,{width:"4rem",key:e,m:3,title:e,style:{textAlign:"center"}},r.a.createElement(a[e],{size:48}),r.a.createElement(A,{fontSize:"1rem"},t?"Copied":e))})))}))},T=function(e){var t=e.icons,a=e.placeholder,l=Object(n.useState)(""),c=Object(o.a)(l,2),E=c[0],p=c[1];return r.a.createElement(m.b,{my:4},r.a.createElement(i.a,{label:"Filter icons"},r.a.createElement(s.a,{type:"text",placeholder:"e.g. ".concat(a),onChange:function(e){return p(e.target.value)},value:E})),r.a.createElement(u.a,{flexWrap:"wrap"},r.a.createElement(C,{filterValue:E,icons:t})))},B=function(e){return r.a.createElement(E.a,{theme:p.a,className:"App"},r.a.createElement(d.a,null,r.a.createElement(m.b,{m:4},r.a.createElement(b.a,{as:"h1"},"PIPELINE Icons"),r.a.createElement(f.a,null,"Install with peer dependency"),r.a.createElement(m.b,{bg:"light-gray",p:3},r.a.createElement(f.a,null,"yarn add @pipeline-ui/icons styled-components")),r.a.createElement(f.a,{mt:3},"Import entire library and reference any icon"),r.a.createElement(m.b,{bg:"light-gray",p:4},r.a.createElement(f.a,null,"import ","{ Icon }",' from "@pipeline-ui/icons";'),r.a.createElement(f.a,null,'<Icon name="Star" />'),r.a.createElement(f.a,null,'<Icon name="Star" color="red" /> // set color value directly'),r.a.createElement(f.a,null,'<Icon name="Star" color="primary" /> // access styled-system\n              theme color values')),r.a.createElement(u.a,null,r.a.createElement(m.b,{m:3},r.a.createElement(S.a,{name:"Star",size:"24px"})),r.a.createElement(m.b,{m:3},r.a.createElement(S.a,{name:"Star",size:"24px",color:"red"})),r.a.createElement(m.b,{m:3},r.a.createElement(S.a,{name:"Star",size:"24px",color:"primary"}))),r.a.createElement(f.a,null,"Single icon, named imports that supports tree-shaking"),r.a.createElement(f.a,{bg:"light-gray",p:3},"import ","{ Star }",' from "@pipeline-ui/icons";'),r.a.createElement(u.a,null,r.a.createElement(m.b,{m:3},r.a.createElement(y.a,{size:"24px"})),r.a.createElement(m.b,{m:3},r.a.createElement(y.a,{size:"24px",color:"red"})),r.a.createElement(m.b,{m:3},r.a.createElement(x.a,{size:"24px"})),r.a.createElement(m.b,{m:3},r.a.createElement(x.a,{size:"24px",color:"red"}))),r.a.createElement(f.a,{bg:"light-gray",p:3},"import ","{ Btc, Algo }",' from "@pipeline-ui/icons";'),r.a.createElement(u.a,null,r.a.createElement(m.b,{m:3},r.a.createElement(w.a,{size:"24px"})),r.a.createElement(m.b,{m:3},r.a.createElement(w.a,{size:"24px",color:"red"})),r.a.createElement(m.b,{m:3},r.a.createElement(v.a,{size:"24px"})),r.a.createElement(m.b,{m:3},r.a.createElement(v.a,{size:"24px",color:"red"})),r.a.createElement(m.b,{m:3},r.a.createElement(z.a,{size:"24px"})),r.a.createElement(m.b,{m:3},r.a.createElement(z.a,{size:"24px",color:"red"}))),r.a.createElement(b.a,{as:"h2"},"Tokens"),r.a.createElement(T,{icons:g,placeholder:"Algo"}),r.a.createElement(b.a,{as:"h2"},"Material"),r.a.createElement(T,{icons:h,placeholder:"Star"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.369fc739.chunk.js.map