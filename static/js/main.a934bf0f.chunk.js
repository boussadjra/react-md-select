(this["webpackJsonpreact-md-select"]=this["webpackJsonpreact-md-select"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),r=a.n(c),i=a(1),o=a(2),s=a(4),m=a(3),u=function(e){var t=e.name,a=e.height,n=void 0===a?"20px":a,c=e.width,r=void 0===c?"20px":c,i=e.fill,o=void 0===i?"#000":i;return{"arrow-up":l.a.createElement("svg",{className:"icon",height:n,width:r,fill:o,x:"0px",y:"0px",viewBox:"0 0 512 512"},l.a.createElement("path",{d:"M149 299h214l-107 -107z"})),remove:l.a.createElement("svg",{className:"icon",height:n,width:r,fill:o,x:"0px",y:"0px",viewBox:"0 0 20 20"},l.a.createElement("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"})),check:l.a.createElement("svg",{className:"icon",style:{transform:"rotate(180deg)"},height:n,width:r,fill:o,x:"0px",y:"0px",viewBox:"0 0 512 512"},l.a.createElement("path",{d:"M192 167l226 226l30 -30l-256 -256l-119 119l30 30z"}))}[t]},d=function(e){var t=e.items,a=e.onSelectItem,n=e.selectedItem,c=e.selectedItems,r=(e.multiple,e.customLabel),i=function(e){return c.find((function(t){return t.key===e.key}))};return l.a.createElement("div",{className:"md-select__dropdown"},t.map((function(e,t){return l.a.createElement("div",{className:"md-select__dropdown-item ".concat(i(e)&&"md-select__dropdown-item--selected"),key:"item"+t,onClick:function(t){return a(t,e)}},l.a.createElement("span",null,function(e){return r?r(e):l.a.createElement(l.a.Fragment,null,Object(o.a)(e.label).map((function(e,t){return n.label.charAt(t).toUpperCase()===e.toUpperCase()?l.a.createElement("span",{className:"md-select__dropdown-item--highlighted",key:"l"+t},e):l.a.createElement("span",{key:"l"+t},e)})))}(e)))})))},p=function(){return l.a.createElement("div",{className:"md-spinner"})},f=(a(12),function(e){var t=e.options,a=e.label,c=e.type,r=void 0===c?"standard":c,f=e.value,b=e.onChange,v=e.config,E=e.multiple,g=e.renderLabel,h=e.asyncOptions,_=e.isSimple,O=Object(n.useState)({label:"",key:""}),j=Object(i.a)(O,2),y=j[0],w=j[1],N=Object(n.useState)([]),k=Object(i.a)(N,2),C=k[0],x=k[1],S=Object(n.useState)(!1),L=Object(i.a)(S,2),A=L[0],I=L[1],M=Object(n.useState)(!1),B=Object(i.a)(M,2),F=B[0],z=B[1],K=Object(n.useState)(!1),U=Object(i.a)(K,2),R=U[0],T=U[1],J=Object(n.useState)([]),W=Object(i.a)(J,2),Z=W[0],q=W[1],D=Object(n.useState)(0),G=Object(i.a)(D,2),H=G[0],P=G[1],Q="mds".concat((1e4*Math.random()).toFixed()),V=Object(m.a)({},"dropdown"+Q,null);V["dropdown"+Q]=Object(n.useRef)(null);var X=Object(n.useRef)([]);Object(n.useEffect)((function(){function e(e){V["dropdown"+Q].current&&!V["dropdown"+Q].current.contains(e.target)&&T(!1)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[V,Q]),Object(n.useEffect)((function(){var e;e=Y(Array.isArray(f)?"":f),w(e)}),[]),Object(n.useEffect)((function(){I(!!y.label)}),[y]),Object(n.useEffect)((function(){var e=X.current.reduce((function(e,t){return e+(t.offsetWidth+4)}),0);P(e)}),[C]),Object(n.useEffect)((function(){q(h?[]:t.map((function(e){return e=Object(s.a)({},e,{},Y(e))})))}),[v,t]);var Y=function(e){return _?{key:e,label:e}:{key:e?e[v.itemKey?v.itemKey:"value"]:"",label:e?e[v.itemLabel?v.itemLabel:"label"]:""}},$=function(e){var t=Object(o.a)(C).filter((function(t){return t.key!==e.key}));x(t),b(t)};return l.a.createElement("div",{className:"md-select ".concat("md-select-"+r)},l.a.createElement("label",{htmlFor:Q,className:"md-select__label ".concat(A?"md-select__label--active":"")},a),l.a.createElement("input",{value:y.label,type:"text",style:{paddingLeft:H+"px"},className:"md-select__input",onFocus:function(){return I(!0),void T(!0)},onChange:function(e){return function(e){h?(e.target.value?z(!0):z(!1),h(e.target.value,(function(e){z(!1),q(e.map((function(e){return e=Object(s.a)({},e,{},Y(e))})))}))):q(t.filter((function(t){var a=e.target.value.toUpperCase();return t.label.toUpperCase().includes(a)})).map((function(e){return e=Object(s.a)({},e,{},Y(e))}))),w({key:"",label:e.target.value})}(e)},id:Q}),h&&A&&F&&l.a.createElement("span",{className:"md-select__spinner"},l.a.createElement(p,null)),E&&l.a.createElement("div",{className:"md-select__chips"},C.map((function(e,t){return t<2&&l.a.createElement("div",{className:"md-chip",key:"si"+t,ref:function(e){return X.current[t]=e}},l.a.createElement("span",{className:"md-chip__text"},e.label),l.a.createElement("span",{className:"md-chip__close",onClick:function(){return $(e)}},l.a.createElement(u,{name:"remove",fill:"#aaa"})))})),C.length>2&&l.a.createElement("div",{className:"md-chip md-chip--small",onClick:function(){return T(!0)},ref:function(e){return X.current[2]=e}},l.a.createElement("div",{className:"md-chip__text"},"+",C.length-2))),A&&!E&&!h&&l.a.createElement("span",{onClick:function(){w({label:"",key:""})},className:"md-select__remove ".concat(A?"md-select__remove--active":"")},l.a.createElement(u,{name:"remove"})),l.a.createElement("span",{className:"md-select__arrow ".concat(A?"md-select__arrow--active":"")},l.a.createElement(u,{name:"arrow-up"})),l.a.createElement("div",{ref:V["dropdown"+Q],id:"dropdown"+Q,className:"md-select__dropdown-wrp ".concat(R?"md-select__dropdown-wrp--active":"")},l.a.createElement(d,{items:Z,onSelectItem:function(e,t){if(E){var a=Object(o.a)(C);a.find((function(e){return e.key===t.key}))?$(t):(a.push(t),x(a),b(_?a.map((function(e){return e.label})):a))}else w(t),T(!1),b(_?t.label:t)},multiple:E,selectedItem:y,selectedItems:C,customLabel:g})))}),b=(a(13),[{name:"Afghanistan",capital:"Kabul",population:27657145,flag:"https://restcountries.eu/data/afg.svg"},{name:"\xc5land Islands",capital:"Mariehamn",population:28875,flag:"https://restcountries.eu/data/ala.svg"},{name:"Albania",capital:"Tirana",population:2886026,flag:"https://restcountries.eu/data/alb.svg"},{name:"Algeria",capital:"Algiers",population:404e5,flag:"https://restcountries.eu/data/dza.svg"}]),v=["Aflou","Tlemcen","Annaba","Rabat","Cairo","Madrid","Zurich","Moskow","Beijin"],E={itemLabel:"name",itemKey:"name"},g=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),s=o[0],m=o[1],u=Object(n.useState)([]),d=Object(i.a)(u,2),p=d[0],g=d[1],h=Object(n.useState)(null),_=Object(i.a)(h,2),O=_[0],j=_[1],y=function(e){c(e)};return l.a.createElement("div",{className:"app-demo"},l.a.createElement("div",{className:"app-demo__item"},l.a.createElement(f,{asyncOptions:function(e,t){setTimeout((function(){t(b.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})))}),4e3)},label:"Async",value:a,onChange:y,config:E})),l.a.createElement("div",{className:"app-demo__item"},l.a.createElement(f,{options:b,label:"Custom rendering",onChange:y,value:a,renderLabel:function(e){return l.a.createElement("div",{className:"app-demo_custom-label"},l.a.createElement("img",{src:e.flag,alt:"flag",height:"24px",width:"32px"}),l.a.createElement("span",null,e.label))},config:E})),l.a.createElement("div",{className:"app-demo__item"},l.a.createElement(f,{options:b,label:"Multiple",value:O,onChange:function(e){j(e)},config:E,multiple:!0})),l.a.createElement("div",{className:"app-demo__item"},l.a.createElement(f,{options:b,type:"solo",label:"Solo",value:a,onChange:y,config:E})),l.a.createElement("div",{className:"app-demo__item"},l.a.createElement(f,{options:b,type:"outlined",label:"Outlined",value:a,onChange:y,config:E})),l.a.createElement("div",{className:"app-demo__item"},l.a.createElement(f,{options:b,type:"filled",label:"Filled",value:a,onChange:y,config:E})),l.a.createElement("div",{className:"app-demo__item"},l.a.createElement(f,{options:b,label:"Standard",value:a,onChange:y,config:E})),l.a.createElement("div",{className:"app-demo__item"},l.a.createElement(f,{options:v,label:"Simple select",value:s,onChange:function(e){m(e)},isSimple:!0})),l.a.createElement("div",{className:"app-demo__item"},l.a.createElement(f,{multiple:!0,options:v,label:"Simple multi select",value:p,onChange:function(e){console.log("--------cities------------"),console.log(e),console.log("--------------------"),g(e)},isSimple:!0})))};r.a.render(l.a.createElement(g,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.a934bf0f.chunk.js.map