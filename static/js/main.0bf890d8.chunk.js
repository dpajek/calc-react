(this["webpackJsonpcalc-react"]=this["webpackJsonpcalc-react"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),u=n.n(c),o=(n(9),n(1));n(10),n(11);var i=function(e){var t=e.displayedValue,n=e.previousValue,r=e.activeOperator,c=e.justAnswered,u=function(){switch(r){case"multiply":return"\xd7";case"divide":return"\xf7";case"add":return"+";case"subtract":return"-";case"equals":return"=";default:return"?"}}();return a.a.createElement("div",{className:"CalculatorDisplay"},a.a.createElement("div",{className:"BreadCrumbs"},c||"="===u?"":n+" "+u),a.a.createElement("div",{className:"Display"},t))};n(12),n(13);var l=function(e){var t=e.number,n=e.onClick;return a.a.createElement("button",{className:"NumberButton",onClick:function(){return n(t)}},t)};n(14);var s=function(e){var t=e.operator,n=e.onClick,r=function(){switch(t){case"multiply":return"\xd7";case"divide":return"\xf7";case"add":return"+";case"subtract":return"-";case"equals":return"=";default:return"?"}}();return a.a.createElement("button",{className:"OperatorButton",onClick:function(){return n(t)}},r)};n(15);var m=function(e){var t=e.onClick;return a.a.createElement("button",{className:"ClearButton",onClick:t},"clr")};var d=function(e){var t=e.previousValue,n=e.setPreviousValue,r=e.displayedValue,c=e.setDisplayedValue,u=e.activeOperator,o=e.setActiveOperator,i=e.justAnswered,d=e.setJustAnswered;function f(e){!0===i?(n(r),c(e),d(!1)):c(parseInt(""+r+e))}function v(e){if(!0!==i){var a;switch(u){case"multiply":a=t*r,d(!0);break;case"divide":a=t/r,d(!0);break;case"add":a=t+r,d(!0);break;case"subtract":a=t-r,d(!0);break;case"equals":n(r),a=0;break;default:alert(e)}c(Math.round(100*(a+Number.EPSILON))/100)}else n(r),c(0),d(!1);o(e)}return a.a.createElement("div",{className:"CalculatorKeyPad"},a.a.createElement(l,{number:7,onClick:function(e){return f(e)}}),a.a.createElement(l,{number:8,onClick:function(e){return f(e)}}),a.a.createElement(l,{number:9,onClick:function(e){return f(e)}}),a.a.createElement(s,{operator:"divide",onClick:function(e){return v(e)}}),a.a.createElement(l,{number:4,onClick:function(e){return f(e)}}),a.a.createElement(l,{number:5,onClick:function(e){return f(e)}}),a.a.createElement(l,{number:6,onClick:function(e){return f(e)}}),a.a.createElement(s,{operator:"multiply",onClick:function(e){return v(e)}}),a.a.createElement(l,{number:1,onClick:function(e){return f(e)}}),a.a.createElement(l,{number:2,onClick:function(e){return f(e)}}),a.a.createElement(l,{number:3,onClick:function(e){return f(e)}}),a.a.createElement(s,{operator:"add",onClick:function(e){return v(e)}}),a.a.createElement(m,{onClick:function(){o("equals"),n(0),c(0),d(!1)}}),a.a.createElement(l,{number:0,onClick:function(e){return f(e)}}),a.a.createElement(s,{operator:"equals",onClick:function(e){return v(e)}}),a.a.createElement(s,{operator:"subtract",onClick:function(e){return v(e)}}))};var f=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)("equals"),l=Object(o.a)(u,2),s=l[0],m=l[1],f=Object(r.useState)(0),v=Object(o.a)(f,2),p=v[0],b=v[1],k=Object(r.useState)(!1),E=Object(o.a)(k,2),C=E[0],w=E[1];return a.a.createElement("div",{className:"App"},a.a.createElement(i,{displayedValue:n,previousValue:p,activeOperator:s,justAnswered:C}),a.a.createElement(d,{displayedValue:n,setDisplayedValue:c,previousValue:p,setPreviousValue:b,activeOperator:s,setActiveOperator:m,justAnswered:C,setJustAnswered:w}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.0bf890d8.chunk.js.map