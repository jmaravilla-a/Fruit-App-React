(this["webpackJsonpfruit-app"]=this["webpackJsonpfruit-app"]||[]).push([[0],{11:function(t,e,i){"use strict";i.r(e);var a=i(1),r=i.n(a),c=i(4),f=i.n(c),o=i(2),n=(i(9),[{title:"Apple",mediaUrl:"https://images.unsplash.com/photo-1601291888371-bcf5759bae4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80"},{title:"Green Pepper",mediaUrl:"https://images.unsplash.com/photo-1599987141071-f5810d32e21a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1381&q=80"},{title:"Cauliflower",mediaUrl:"https://images.unsplash.com/photo-1510627498534-cf7e9002facc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{title:"Papaya",mediaUrl:"https://images.unsplash.com/photo-1604778234463-762cf933e155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{title:"Tomato",mediaUrl:"https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"},{title:"Broccoli",mediaUrl:"https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80"},{title:"Avocado",mediaUrl:"https://images.unsplash.com/photo-1550852074-03227b5fe6fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{title:"Blue Berry",mediaUrl:"https://images.unsplash.com/photo-1620256150820-d22b49c16e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"},{title:"Pineapple",mediaUrl:"https://images.unsplash.com/photo-1515878459526-bfff71cfa6da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},{title:"Yes",mediaUrl:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}]),s=i(0);var l=function(t){var e=t.title,i=t.setActiveIndex,a=t.index;return Object(s.jsx)("div",{className:"project-item",onMouseEnter:function(){return i(a)},onMouseLeave:function(){return i(-1)},children:Object(s.jsx)("h3",{className:"project-title",children:Object(s.jsx)("span",{children:e})})})};var u=function(t){var e=t.url,i=t.active,r=t.x,c=t.y,f=function(){var t=Object(a.useState)({}),e=Object(o.a)(t,2),i=e[0],r=e[1],c=Object(a.useState)(null),f=Object(o.a)(c,2),n=f[0],s=f[1],l=Object(a.useCallback)((function(t){s(t)}),[]);return Object(a.useLayoutEffect)((function(){n&&r(function(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height}}(n))}),[n]),[l,i]}(),n=Object(o.a)(f,2),l=n[0],u=n[1],x=u.width,p=u.height;return Object(s.jsx)("img",{className:i&&"is-active",ref:l,src:e,alt:"pictureData",style:{transform:"translate(".concat(r-x/2,"px, ").concat(c-p/2,"px)")}})};var x=function(){var t=Object(a.useState)(-1),e=Object(o.a)(t,2),i=e[0],c=e[1],f=function(){var t=r.a.useState({x:0,y:0}),e=Object(o.a)(t,2),i=e[0],c=e[1];return Object(a.useEffect)((function(){var t=function(t){c({x:t.clientX,y:t.clientY})};return window.addEventListener("mousemove",t),function(){return window.removeEventListener("mousemove",t)}}),[]),i}(),x=f.x,p=f.y;return Object(s.jsxs)("div",{className:"page-wrapper",children:[Object(s.jsx)("div",{className:"project-list",children:n.map((function(t,e){var i=t.title;return Object(s.jsx)(l,{title:i,setActiveIndex:c,index:e})}))}),Object(s.jsx)("div",{className:"project-media",children:n.map((function(t,e){var a=t.mediaUrl,r=e===i,c=r?x:0,f=r?p:0;return Object(s.jsx)(u,{url:a,active:r,x:c,y:f})}))})]})};f.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))},9:function(t,e,i){}},[[11,1,2]]]);
//# sourceMappingURL=main.d3a9d4be.chunk.js.map