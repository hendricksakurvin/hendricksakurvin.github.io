(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1293:function(e,t,n){"use strict";n.r(t);n(55);var r=n(3),a=n(25),u=n(929),s={};s.props={show:{key:"show",required:!0,type:Boolean},folderPath:{key:"folderPath",required:!1,type:String}},s.setup=function(e,t){var n=Object(a.j)(),s=Object(a.d)(),o=e,c=t.emit,i=Object(r.o)("");Object(r.y)((function(){return o.show}),(function(e){e&&(i.value=Object(u.a)().request.name)}));var d=function(){c("hide-modal")};return{name:i,addRequest:function(){i.value?(c("add-request",{name:i.value,path:o.folderPath}),d()):n.error("".concat(s("error.empty_req_name")))},hideModal:d}};var o=s,c=n(23),i=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("SmartModal",{attrs:{dialog:"",title:e.$t("request.new")},on:{close:function(t){return e.$emit("hide-modal")}},scopedSlots:e._u([{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col px-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelGqlAddRequest",placeholder:" ",type:"text",autocomplete:"off"},domProps:{value:e.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addRequest.apply(null,arguments)},input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("label",{attrs:{for:"selectLabelGqlAddRequest"}},[e._v("\n        "+e._s(e.$t("action.label"))+"\n      ")])])]},proxy:!0},{key:"footer",fn:function(){return[n("span",[n("ButtonPrimary",{attrs:{label:e.$t("action.save")},nativeOn:{click:function(t){return e.addRequest.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{attrs:{label:e.$t("action.cancel")},nativeOn:{click:function(t){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,1485072167)}):e._e()}),[],!1,null,null,null);t.default=i.exports;installComponents(i,{ButtonPrimary:n(172).default,ButtonSecondary:n(107).default,SmartModal:n(113).default})},929:function(e,t,n){"use strict";n.d(t,"m",(function(){return b})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return q})),n.d(t,"n",(function(){return j})),n.d(t,"k",(function(){return m})),n.d(t,"a",(function(){return v})),n.d(t,"l",(function(){return O})),n.d(t,"o",(function(){return w})),n.d(t,"h",(function(){return k})),n.d(t,"f",(function(){return R})),n.d(t,"d",(function(){return P})),n.d(t,"g",(function(){return $})),n.d(t,"c",(function(){return x})),n.d(t,"e",(function(){return _})),n.d(t,"b",(function(){return S}));n(10),n(8),n(15),n(7),n(14);var r=n(40),a=n(34),u=(n(12),n(9),n(4),n(64),n(55),n(45)),s=n(47),o=n(74),c=n(50),i=n(25);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={request:Object(o.makeGQLRequest)({name:"Untitled request",url:"https://echo.hoppscotch.io/graphql",headers:[],variables:'{\n  "id": "1"\n}',query:"query Request {\n  method\n  url\n  headers {\n    key\n    value\n  }\n}\n",auth:{authType:"none",authActive:!0}}),schema:"",response:""},f=Object(c.b)({setSession:function(e,t){return t.session},setName:function(e,t){var n=t.newName;return{request:l(l({},e.request),{},{name:n})}},setURL:function(e,t){var n=t.newURL;return{request:l(l({},e.request),{},{url:n})}},setHeaders:function(e,t){var n=t.headers;return{request:l(l({},e.request),{},{headers:n})}},addHeader:function(e,t){var n=t.header;return{request:l(l({},e.request),{},{headers:[].concat(Object(r.a)(e.request.headers),[n])})}},removeHeader:function(e,t){var n=t.headerIndex;return{request:l(l({},e.request),{},{headers:e.request.headers.filter((function(e,t){return t!==n}))})}},updateHeader:function(e,t){var n=t.headerIndex,r=t.updatedHeader;return{request:l(l({},e.request),{},{headers:e.request.headers.map((function(e,t){return t===n?r:e}))})}},setQuery:function(e,t){var n=t.newQuery;return{request:l(l({},e.request),{},{query:n})}},setVariables:function(e,t){var n=t.newVariables;return{request:l(l({},e.request),{},{variables:n})}},setResponse:function(e,t){return{response:t.newResponse}},setAuth:function(e,t){var n=t.newAuth;return{request:l(l({},e.request),{},{auth:n})}}}),h=new c.a(p,f);function b(e){h.dispatch({dispatcher:"setURL",payload:{newURL:e}})}function y(e){h.dispatch({dispatcher:"setHeaders",payload:{headers:e}})}function q(e){h.dispatch({dispatcher:"setQuery",payload:{newQuery:e}})}function j(e){h.dispatch({dispatcher:"setVariables",payload:{newVariables:e}})}function m(e){h.dispatch({dispatcher:"setResponse",payload:{newResponse:e}})}function v(){return h.value}function O(e){h.dispatch({dispatcher:"setSession",payload:{session:e}})}function w(){return Object(i.h)(g,h.value.request.name,(function(e){h.dispatch({dispatcher:"setName",payload:{newName:e}})}))}function k(e){h.dispatch({dispatcher:"setAuth",payload:{newAuth:e}})}var g=h.subject$.pipe(Object(u.a)("request","name"),Object(s.a)()),R=h.subject$.pipe(Object(u.a)("request","url"),Object(s.a)()),P=h.subject$.pipe(Object(u.a)("request","query"),Object(s.a)()),$=h.subject$.pipe(Object(u.a)("request","variables"),Object(s.a)()),x=h.subject$.pipe(Object(u.a)("request","headers"),Object(s.a)()),_=h.subject$.pipe(Object(u.a)("response"),Object(s.a)()),S=h.subject$.pipe(Object(u.a)("request","auth"),Object(s.a)())}}]);