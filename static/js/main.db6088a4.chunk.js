(this["webpackJsonpagile-board"]=this["webpackJsonpagile-board"]||[]).push([[0],{12:function(e,a,n){},24:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=(n(12),n(1)),s=function(){return Object(i.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsx)("h4",{children:"Kanban Board"})})})},c=n(5),l=n(2),d=n(3),o=n(27),b=[{id:1,lanename:"Backlog",tasks:[{id:Object(o.a)(),labelid:1,taskname:"Misspelling on navbar",priority:3}]},{id:2,lanename:"Open",tasks:[{id:Object(o.a)(),labelid:2,taskname:"Add hidden button in Mobile view",priority:1},{id:Object(o.a)(),labelid:3,taskname:"Design Prototype for Blog Page",priority:2},{id:Object(o.a)(),labelid:3,taskname:"Update Header",priority:1}]},{id:3,lanename:"In Progress",tasks:[{id:Object(o.a)(),labelid:3,taskname:"Component Redesign",priority:2}]},{id:4,lanename:"Done",tasks:[{id:Object(o.a)(),labelid:2,taskname:"Change Task Form Format",priority:2}]}],j=[{id:1,key:"B",name:"Bug",bgcolor:"#E53935",color:"#ffffff"},{id:2,key:"S",name:"Story",bgcolor:"#7CB342",color:"#ffffff"},{id:3,key:"T",name:"Task",bgcolor:"#1E88E5",color:"#ffffff"}],f=n(10),u=function(e){var a=e.index,n=e.task;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(d.b,{draggableId:n.id.toString(),index:a,children:function(e){var a=j.find((function(e){return(null===e||void 0===e?void 0:e.id)===(null===n||void 0===n?void 0:n.labelid)}));return Object(i.jsxs)("div",Object(l.a)(Object(l.a)(Object(l.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,className:"taskcard",children:[Object(i.jsxs)("div",{className:"title d-flex align-items-center",children:[Object(i.jsx)(f.a,{className:"me-1",size:"12",color:a.bgcolor}),n.taskname]}),Object(i.jsx)("div",{style:{background:a.bgcolor,color:a.color},className:"pill ml-3",children:a.name})]}))}},n.id)})},m=r.a.memo(u),O=function(e){var a=e.lane;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"lane ",children:[Object(i.jsx)("h6",{className:"lane-title d-flex justify-content-center fw-bold",children:a.lanename}),Object(i.jsx)(d.c,{droppableId:a.id.toString(),children:function(e){return Object(i.jsxs)("div",Object(l.a)(Object(l.a)({},e.droppableProps),{},{ref:e.innerRef,className:"lane-body",children:[a.tasks.map((function(e,a){return Object(i.jsx)(m,{index:a,task:e},e.id)})),e.placeholder]}))}},a.id)]})})},p=function(e){var a=e.lanes,n=e.setLanes,t=function(e){if(e&&null!==e.destination){var n=parseInt(e.source.droppableId),t=parseInt(e.destination.droppableId),r=parseInt(e.destination.index),i=parseInt(e.source.index),s=Array.from(a);if(n!==t){var d=s.find((function(e){return e.id===n})),o=d.tasks.splice(i,1),b=Object(c.a)(o,1)[0];return s.map((function(e){if(e.id===n)return d;if(e.id===t){var a=Array.from(e.tasks);return a.splice(r,0,b),Object(l.a)(Object(l.a)({},e),{},{tasks:a})}return e}))}return s.map((function(e){if(e.id===n){var a=Array.from(e.tasks),t=a.splice(i,1),s=Object(c.a)(t,1)[0];return a.splice(r,0,s),Object(l.a)(Object(l.a)({},e),{},{tasks:a})}return e}))}return null};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"lanecontainer",children:Object(i.jsx)(d.a,{onDragEnd:function(e){var a=t(e);a&&n(a)},children:a.map((function(e){return Object(i.jsx)(O,{setLanes:n,lane:e},e.id)}))})})})},g=function(){var e=Object(t.useState)(b),a=Object(c.a)(e,2),n=a[0],r=a[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(p,{setLanes:r,lanes:n})})};var x=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("main",{className:"wrapper",children:[Object(i.jsx)(s,{}),Object(i.jsx)(g,{})]})})},h=n(9),k=(n(23),document.getElementById("app"));Object(h.createRoot)(k).render(Object(i.jsx)(x,{}))}},[[24,1,2]]]);
//# sourceMappingURL=main.db6088a4.chunk.js.map