(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(9),r=n.n(a),i=(n(14),n(7)),l=n(2),j=n.n(l),o=n(4),d=n(3),u=n(0);function b(e){var t=e.schedule,n=e.deleteMeeting,c=e.editMeeting,s=e.index;return Object(u.jsxs)("div",{className:"schedule-item",onDoubleClick:function(){return c(s)},children:[Object(u.jsx)("div",{className:t[s].important&&t[s].important?"schedule-important":""}),Object(u.jsxs)("div",{className:"schedule-text",children:[Object(u.jsx)("div",{className:"schedule-title",children:Object(u.jsx)("b",{children:t[s].title})}),Object(u.jsx)("div",{className:"schedule-date",children:t[s].date}),Object(u.jsx)("div",{className:"schedule-zoom-link",children:t[s].zoomLink})]}),Object(u.jsxs)("div",{className:"schedule-delete",children:[Object(u.jsx)("div",{className:"schedule-edit-button",onClick:function(){return c(s)},children:"Edit"}),Object(u.jsx)("div",{className:"schedule-delete-button",onClick:function(){return n(s)},children:"Delete"})]})]})}function h(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(-1),r=Object(d.a)(a,2),l=r[0],h=r[1],O=Object(c.useState)(""),x=Object(d.a)(O,2),p=x[0],f=x[1],m=Object(c.useState)(""),v=Object(d.a)(m,2),k=v[0],g=v[1],y=Object(c.useState)(""),N=Object(d.a)(y,2),w=N[0],C=N[1],S=Object(c.useState)(!1),E=Object(d.a)(S,2),D=E[0],F=E[1],L=Object(c.useState)(!1),z=Object(d.a)(L,2),T=z[0],M=z[1];function P(){return J.apply(this,arguments)}function J(){return(J=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/schedule",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(o.a)(j.a.mark((function e(t){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/schedule",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return c=e.sent,e.next=5,c.json();case 5:(a=e.sent).id=n.length+1,s([].concat(Object(i.a)(n),[a]));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(o.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/schedule/".concat(n[t].id),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(c)});case 2:e.sent,n[t]=c,s(Object(i.a)(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){return A.apply(this,arguments)}function A(){return(A=Object(o.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/schedule/".concat(n[t].id),{method:"DELETE"});case 2:e.sent,n.splice(t,1),s(Object(i.a)(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){h(e),f(n[e].title),g(n[e].date),C(n[e].zoomLink),F(n[e].important)}function U(e){e.preventDefault();var t=new Date,n=new Date(k);""===p||p.length>30||""===k||n<t||!w.toLowerCase().includes("zoom")?M(!0):(-1!==l?function(e,t){I.apply(this,arguments)}(l,{title:p,date:k,zoomLink:w,important:D}):function(e){B.apply(this,arguments)}({title:p,date:k,zoomLink:w,important:D}),f(""),g(""),C(""),F(""),h(-1),M(!1))}function V(){for(var e=[],t=0;t<n.length;t++)e.push(Object(u.jsx)(b,{schedule:n,editMeeting:G,deleteMeeting:Z,index:t},t));return e}function q(){h(-1),f(""),g(""),C(""),F("")}function H(){return Object(u.jsxs)("div",{className:"section-title",children:[!l&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("button",{onClick:q,children:["< ","Back"]}),Object(u.jsx)("br",{})]}),Object(u.jsx)("b",{children:l?"Create Meeting":"Edit Meeting"})]})}function K(){var e=[];T&&""===p?e.push(Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"form-feedback",children:"Enter a title!"}),Object(u.jsx)("br",{})]})):p.length>30&&e.push(Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"form-feedback",children:"Enter a title less than 30 characters!"}),Object(u.jsx)("br",{})]}));var t=new Date,n=new Date(k);return(T&&""===k||T&&n<t)&&e.push(Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"form-feedback",children:"Enter a valid date!"}),Object(u.jsx)("br",{})]})),T&&!w.toLowerCase().includes("zoom")&&e.push(Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"form-feedback",children:"Enter a valid Zoom link!"}),Object(u.jsx)("br",{})]})),e}return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("header",{children:Object(u.jsx)("h3",{className:"nav-brand",children:"Vincent Tieu's PA4"})}),Object(u.jsxs)("div",{className:"dual-section-display",children:[Object(u.jsxs)("div",{className:"dual-section",children:[Object(u.jsx)("div",{class:"section-title",children:Object(u.jsx)("b",{children:"Full Schedule"})}),Object(u.jsx)("br",{}),Object(u.jsx)(V,{})]}),Object(u.jsxs)("div",{className:"dual-section",children:[Object(u.jsx)(H,{}),Object(u.jsx)("br",{}),Object(u.jsxs)("form",{children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",id:"title",onChange:function(e){return f(e.target.value)},value:p}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"date",children:"Date"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"datetime-local",id:"date",onChange:function(e){return g(e.target.value)},value:k}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"zoom-link",children:"Zoom Link"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",id:"zoom-link",onChange:function(e){return C(e.target.value)},value:w}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"important",children:"Important"})," ",Object(u.jsx)("input",{className:"important-radio",type:"radio",id:"important",onClick:function(){return F(!D)},checked:D}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(K,{}),Object(u.jsx)("button",{onClick:function(e){return U(e)},children:-1===l?"Create!":"Save Edit!"})]})]})]}),Object(u.jsx)("br",{})]})}var O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.0b2e30db.chunk.js.map