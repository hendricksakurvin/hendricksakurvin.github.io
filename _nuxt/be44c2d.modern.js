(window.webpackJsonp=window.webpackJsonp||[]).push([[78,79,87,92,111,112],{1993:function(e,t,s){"use strict";t.a=function(e){return e>=100&&e<200?{name:"informational",className:"info-response"}:e>=200&&e<300?{name:"successful",className:"success-response"}:e>=300&&e<400?{name:"redirection",className:"redir-response"}:e>=400&&e<500?{name:"client error",className:"cl-error-response"}:e>=500&&e<600?{name:"server error",className:"sv-error-response"}:{name:"unknown",className:"missing-data-response"}}},2015:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s(198),r=s(17),l={};l.props={headers:{key:"headers",required:!0,type:Array}},l.setup=(e,t)=>{var s=Object(r.d)(),l=Object(r.j)(),o=e,i=Object(n.o)("copy");return{t:s,copyIcon:i,copyHeaders:()=>{Object(a.a)(JSON.stringify(o.headers)),i.value="check",l.success("".concat(s("state.copied_to_clipboard"))),setTimeout((()=>i.value="copy"),1e3)}}};var o=l,i=s(16),c=Object(i.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-lowerSecondaryStickyFold"},[s("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("request.header_list"))+"\n    ")]),e._v(" "),s("div",{staticClass:"flex"},[e.headers?s("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"copyHeaders",attrs:{title:e.t("action.copy"),svg:e.copyIcon},nativeOn:{click:function(t){return e.copyHeaders.apply(null,arguments)}}}):e._e()],1)]),e._v(" "),e._l(e.headers,(function(t,n){return s("div",{key:"header-"+n,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight group"},[s("span",{staticClass:"flex flex-1 min-w-0 px-4 py-2 transition group-hover:text-secondaryDark"},[s("span",{staticClass:"truncate rounded-sm select-all"},[e._v("\n        "+e._s(t.key)+"\n      ")])]),e._v(" "),s("span",{staticClass:"flex flex-1 min-w-0 px-4 py-2 transition group-hover:text-secondaryDark"},[s("span",{staticClass:"truncate rounded-sm select-all"},[e._v("\n        "+e._s(t.value)+"\n      ")])])])}))],2)}),[],!1,null,null,null);t.default=c.exports;installComponents(c,{ButtonSecondary:s(87).default})},2190:function(e,t,s){"use strict";s.r(t);var n=s(34),a=s(3),r=(s(36),s(41),s(64),{lensName:"response.json",isSupportedContentType:s(865).a,renderer:"json",rendererImport:()=>Promise.all([s.e(1),s.e(7),s.e(21)]).then(s.bind(null,2329))}),l={lensName:"response.raw",isSupportedContentType:()=>!0,renderer:"raw",rendererImport:()=>Promise.all([s.e(1),s.e(20)]).then(s.bind(null,2331))},o=(s(63),[r,{lensName:"response.image",isSupportedContentType:e=>/\bimage\/(?:gif|jpeg|png|webp|bmp|svg\+xml|x-icon|vnd\.microsoft\.icon)\b/i.test(e),renderer:"imageres",rendererImport:()=>Promise.all([s.e(6),s.e(16)]).then(s.bind(null,2328))},{lensName:"response.html",isSupportedContentType:e=>/\btext\/html|application\/xhtml\+xml\b/i.test(e),renderer:"htmlres",rendererImport:()=>Promise.all([s.e(1),s.e(22)]).then(s.bind(null,2318))},{lensName:"response.xml",isSupportedContentType:e=>/\bxml\b/i.test(e),renderer:"xmlres",rendererImport:()=>Promise.all([s.e(1),s.e(23)]).then(s.bind(null,2332))},{lensName:"response.pdf",isSupportedContentType:e=>/\bapplication\/pdf\b/i.test(e),renderer:"pdfres",rendererImport:()=>Promise.all([s.e(2),s.e(19),s.e(17)]).then(s.bind(null,2330))},l]);var i=s(17),c=s(94);function d(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}var p=Object(a.c)({components:function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?d(Object(s),!0).forEach((function(t){Object(n.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},function(){var e={};for(var t of o)e[t.renderer]=t.rendererImport;return e}()),props:{response:{type:Object,default:()=>{}}},setup:()=>({testResults:Object(i.g)(c.r,null)}),data:()=>({selectedLensTab:""}),computed:{headerLength(){return this.response&&this.response.headers?Object.keys(this.response.headers).length:0},validLenses(){return this.response?function(e){if("loading"===e.type||"network_fail"===e.type||"script_fail"===e.type||"fail"===e.type)return[];var t=e.headers.find((e=>"content-type"===e.key));if(!t)return[l];var s=[];for(var n of o)n.isSupportedContentType(t.value)&&s.push(n);return s}(this.response):[]}},watch:{validLenses:{handler(e){0!==e.length&&(this.selectedLensTab=e[0].renderer)},immediate:!0}}}),u=p,f=s(16),v=Object(f.a)(u,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.response?s("SmartTabs",{attrs:{styles:"sticky z-10 bg-primary top-lowerPrimaryStickyFold"},model:{value:e.selectedLensTab,callback:function(t){e.selectedLensTab=t},expression:"selectedLensTab"}},[e._l(e.validLenses,(function(t,n){return s("SmartTab",{key:"lens-"+n,staticClass:"flex flex-col flex-1 w-full h-full",attrs:{id:t.renderer,label:e.$t(t.lensName)}},[s(t.renderer,{tag:"component",attrs:{response:e.response}})],1)})),e._v(" "),e.headerLength?s("SmartTab",{staticClass:"flex flex-col flex-1",attrs:{id:"headers",label:e.$t("response.headers"),info:""+e.headerLength}},[s("LensesHeadersRenderer",{attrs:{headers:e.response.headers}})],1):e._e(),e._v(" "),s("SmartTab",{staticClass:"flex flex-col flex-1",attrs:{id:"results",label:e.$t("test.results"),indicator:!(!e.testResults||!(e.testResults.expectResults.length||e.testResults.tests.length||e.testResults.envDiff.selected.additions.length||e.testResults.envDiff.selected.updations.length||e.testResults.envDiff.global.updations.length))}},[s("HttpTestResult")],1)],2):e._e()}),[],!1,null,null,null);t.default=v.exports;installComponents(v,{SmartTab:s(891).default,LensesHeadersRenderer:s(2015).default,HttpTestResult:s(2184).default,SmartTabs:s(892).default})},2194:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s(1993),r=s(27),l=s(17),o={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Switch Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",420:"Enhance Your Calm",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",444:"No Response",449:"Retry With",450:"Blocked by Windows Parental Controls",451:"Unavailable For Legal Reasons",499:"Client Closed Request",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required",598:"Network read timeout error",599:"Network connect timeout error"};function i(e){var t;return null!==(t=o[e])&&void 0!==t?t:"Unknown"}var c={props:{response:{key:"response",required:!0,type:null}},setup:(e,t)=>{var s=Object(l.d)(),o=e,c=Object(n.a)((()=>"loading"===o.response.type||"network_fail"===o.response.type||"script_fail"===o.response.type||"fail"===o.response.type?{name:"error",className:"text-red-500"}:Object(a.a)(o.response.statusCode)));return{getSpecialKey:r.b,getStatusCodeReasonPhrase:i,t:s,statusCategory:c}}},d=c,p=s(16),u=Object(p.a)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sticky top-0 z-10 flex items-start p-4 overflow-auto bg-primary hide-scrollbar whitespace-nowrap"},[null==e.response?s("div",{staticClass:"flex flex-col items-center justify-center flex-1 text-secondaryLight"},[s("div",{staticClass:"flex pb-4 my-4 space-x-2"},[s("div",{staticClass:"flex flex-col items-end text-right space-y-4"},[s("span",{staticClass:"flex items-center flex-1"},[e._v("\n          "+e._s(e.t("shortcut.request.send_request"))+"\n        ")]),e._v(" "),s("span",{staticClass:"flex items-center flex-1"},[e._v("\n          "+e._s(e.t("shortcut.general.show_all"))+"\n        ")]),e._v(" "),s("span",{staticClass:"flex items-center flex-1"},[e._v("\n          "+e._s(e.t("shortcut.general.command_menu"))+"\n        ")]),e._v(" "),s("span",{staticClass:"flex items-center flex-1"},[e._v("\n          "+e._s(e.t("shortcut.general.help_menu"))+"\n        ")])]),e._v(" "),s("div",{staticClass:"flex flex-col space-y-4"},[s("div",{staticClass:"flex"},[s("span",{staticClass:"shortcut-key"},[e._v(e._s(e.getSpecialKey()))]),e._v(" "),s("span",{staticClass:"shortcut-key"},[e._v("G")])]),e._v(" "),s("div",{staticClass:"flex"},[s("span",{staticClass:"shortcut-key"},[e._v(e._s(e.getSpecialKey()))]),e._v(" "),s("span",{staticClass:"shortcut-key"},[e._v("K")])]),e._v(" "),e._m(0),e._v(" "),e._m(1)])]),e._v(" "),s("ButtonSecondary",{attrs:{label:e.t("app.documentation"),to:"https://docs.hoppscotch.io/features/response",svg:"external-link",blank:"",outline:"",reverse:""}})],1):s("div",{staticClass:"flex flex-col flex-1"},["loading"===e.response.type?s("div",{staticClass:"flex flex-col items-center justify-center"},[s("SmartSpinner",{staticClass:"my-4"}),e._v(" "),s("span",{staticClass:"text-secondaryLight"},[e._v(e._s(e.t("state.loading")))])],1):e._e(),e._v(" "),"network_fail"===e.response.type?s("div",{staticClass:"flex flex-col items-center justify-center flex-1 p-4"},[s("img",{staticClass:"inline-flex flex-col object-contain object-center w-32 h-32 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/youre_lost.svg",loading:"lazy",alt:""+e.t("error.network_fail")}}),e._v(" "),s("span",{staticClass:"mb-2 font-semibold text-center"},[e._v("\n        "+e._s(e.t("error.network_fail"))+"\n      ")]),e._v(" "),s("span",{staticClass:"max-w-sm mb-6 text-center whitespace-normal text-secondaryLight"},[e._v("\n        "+e._s(e.t("helpers.network_fail"))+"\n      ")]),e._v(" "),s("AppInterceptor",{staticClass:"border rounded border-dividerLight"})],1):e._e(),e._v(" "),"script_fail"===e.response.type?s("div",{staticClass:"flex flex-col items-center justify-center flex-1 p-4"},[s("img",{staticClass:"inline-flex flex-col object-contain object-center w-32 h-32 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/youre_lost.svg",loading:"lazy",alt:""+e.t("error.script_fail")}}),e._v(" "),s("span",{staticClass:"mb-2 font-semibold text-center"},[e._v("\n        "+e._s(e.t("error.script_fail"))+"\n      ")]),e._v(" "),s("span",{staticClass:"max-w-sm mb-6 text-center whitespace-normal text-secondaryLight"},[e._v("\n        "+e._s(e.t("helpers.script_fail"))+"\n      ")]),e._v(" "),s("div",{staticClass:"w-full px-4 py-2 overflow-auto font-mono text-red-400 whitespace-normal rounded bg-primaryLight"},[e._v("\n        "+e._s(e.response.error.name)+": "+e._s(e.response.error.message)),s("br"),e._v("\n        "+e._s(e.response.error.stack)+"\n      ")])]):e._e(),e._v(" "),"success"===e.response.type||"fail"===e.response.type?s("div",{staticClass:"flex items-center font-semibold text-tiny"},[s("div",{staticClass:"inline-flex flex-1 space-x-4",class:e.statusCategory.className},[e.response.statusCode?s("span",[s("span",{staticClass:"text-secondary"},[e._v(" "+e._s(e.t("response.status"))+": ")]),e._v("\n          "+e._s(e.response.statusCode+"  •  ")+e._s(e.getStatusCodeReasonPhrase(e.response.statusCode))+"\n        ")]):e._e(),e._v(" "),e.response.meta&&e.response.meta.responseDuration?s("span",[s("span",{staticClass:"text-secondary"},[e._v(" "+e._s(e.t("response.time"))+": ")]),e._v("\n          "+e._s(e.response.meta.responseDuration+" ms")+"\n        ")]):e._e(),e._v(" "),e.response.meta&&e.response.meta.responseSize?s("span",[s("span",{staticClass:"text-secondary"},[e._v(" "+e._s(e.t("response.size"))+": ")]),e._v("\n          "+e._s(e.response.meta.responseSize+" B")+"\n        ")]):e._e()])]):e._e()])])}),[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex"},[s("span",{staticClass:"shortcut-key"},[e._v("/")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex"},[s("span",{staticClass:"shortcut-key"},[e._v("?")])])}],!1,null,null,null);t.default=u.exports;installComponents(u,{ButtonSecondary:s(87).default,SmartSpinner:s(144).default,AppInterceptor:s(464).default})},2257:function(e,t,s){"use strict";s.r(t);var n=s(3),a=s(17),r=s(94),l=Object(n.c)({setup(){var e=Object(a.g)(r.p,null),t=Object(n.a)((()=>{var t,s;return"success"===(null===(t=e.value)||void 0===t?void 0:t.type)||"fail"===(null===(s=e.value)||void 0===s?void 0:s.type)})),s=Object(n.a)((()=>null===e.value||"loading"===e.value.type)),l=Object(a.e)();return Object(n.y)(e,(()=>{var t;"loading"===(null===(t=e.value)||void 0===t?void 0:t.type)?l.value.$loading.start():l.value.$loading.finish()})),{hasResponse:t,response:e,loading:s}}}),o=s(16),i=Object(o.a)(l,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-col flex-1"},[s("HttpResponseMeta",{attrs:{response:e.response}}),e._v(" "),!e.loading&&e.hasResponse?s("LensesResponseBodyRenderer",{attrs:{response:e.response}}):e._e()],1)}),[],!1,null,null,null);t.default=i.exports;installComponents(i,{HttpResponseMeta:s(2194).default,LensesResponseBodyRenderer:s(2190).default})},865:function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"a",(function(){return a}));s(63);var n={"application/json":"json","application/ld+json":"json","application/hal+json":"json","application/vnd.api+json":"json","application/xml":"xml","application/x-www-form-urlencoded":"multipart","multipart/form-data":"multipart","text/html":"html","text/plain":"plain"};function a(e){return/\bjson\b/i.test(e)}},867:function(e,t,s){var n=s(921);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,s(96).default)("8e49862c",n,!0,{sourceMap:!1})},874:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));var n=e=>{throw new Error(e)}},891:function(e,t,s){"use strict";s.r(t);var n=s(3),a={};a.props={label:{type:String,default:null},info:{type:String,default:null},indicator:{type:Boolean,default:!1},icon:{type:String,default:null},id:{type:String,default:null,required:!0},selected:{type:Boolean,default:!1}},a.setup=(e,t)=>{var s=e,a=Object(n.a)((()=>({icon:s.icon,indicator:s.indicator,info:s.info,label:s.label}))),{activeTabID:r,addTabEntry:l,updateTabEntry:o,removeTabEntry:i}=Object(n.e)("tabs-system"),c=Object(n.a)((()=>r.value===s.id));return Object(n.j)((()=>{l(s.id,a.value)})),Object(n.y)(a,(e=>{o(s.id,e)})),Object(n.i)((()=>{i(s.id)})),{active:c}};var r=a,l=s(16),o=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],staticClass:"flex flex-col flex-1"},[e._t("default")],2)}),[],!1,null,null,null);t.default=o.exports},892:function(e,t,s){"use strict";s.r(t);s(36),s(41);var n=s(1),a=s(169),r=s(72),l=s(46),o=s(3),i=s(874),c={};c.props={styles:{type:String,default:""},vertical:{type:Boolean,default:!1},value:{type:String,required:!0}},c.setup=(e,t)=>{var s=e,c=t.emit,d=Object(o.o)([]);Object(o.l)("tabs-system",{activeTabID:Object(o.a)((()=>s.value)),addTabEntry:(e,t)=>{d.value=Object(n.pipe)(d.value,l.fromPredicate(Object(a.not)(r.exists((t=>{var[s]=t;return s===e})))),l.map(r.append([e,t])),l.getOrElseW((()=>Object(i.a)("Tab with duplicate ID created: '".concat(e,"'")))))},updateTabEntry:(e,t)=>{d.value=Object(n.pipe)(d.value,r.findIndex((t=>{var[s]=t;return s===e})),l.chain((s=>Object(n.pipe)(d.value,r.updateAt(s,[e,t])))),l.getOrElseW((()=>Object(i.a)("Failed to update tab entry: ".concat(e)))))},removeTabEntry:e=>{d.value=Object(n.pipe)(d.value,r.findIndex((t=>{var[s]=t;return s===e})),l.chain((e=>Object(n.pipe)(d.value,r.deleteAt(e)))),l.getOrElseW((()=>Object(i.a)("Failed to remove tab entry: ".concat(e))))),s.value===e&&d.value.length>0&&p(d.value[0][0])}});var p=e=>{c("input",e)};return{tabEntries:d,selectTab:p}};var d=c,p=(s(920),s(16)),u=Object(p.a)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-1 h-full flex-nowrap",class:{"flex-col h-auto":!e.vertical}},[s("div",{staticClass:"relative tabs hide-scrollbar",class:[{"border-r border-dividerLight":e.vertical},e.styles]},[s("div",{staticClass:"flex flex-1"},[s("div",{staticClass:"flex justify-between flex-1",class:{"flex-col":e.vertical}},[s("div",{staticClass:"flex",class:{"flex-col space-y-2 p-2":e.vertical}},e._l(e.tabEntries,(function(t,n){var a=t[0],r=t[1];return s("button",{key:"tab-"+n,staticClass:"tab",class:[{active:e.value===a},{vertical:e.vertical}],attrs:{"aria-label":r.label||"",role:"button"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectTab(a)},click:function(t){return e.selectTab(a)}}},[r.icon?s("SmartIcon",{staticClass:"svg-icons",attrs:{name:r.icon}}):e._e(),e._v(" "),e.vertical&&r.label?s("tippy",{attrs:{placement:"left",theme:"tooltip",content:r.label}}):r.label?s("span",[e._v(e._s(r.label))]):e._e(),e._v(" "),r.info&&"null"!==r.info?s("span",{staticClass:"tab-info"},[e._v("\n              "+e._s(r.info)+"\n            ")]):e._e(),e._v(" "),r.indicator?s("span",{staticClass:"w-1 h-1 ml-2 rounded-full bg-accentLight"}):e._e()],1)})),0),e._v(" "),s("div",{staticClass:"flex items-center justify-center"},[e._t("actions")],2)])])]),e._v(" "),s("div",{staticClass:"w-full h-full contents",class:{"!flex flex-col flex-1 overflow-y-auto hide-scrollbar":e.vertical}},[e._t("default")],2)])}),[],!1,null,"0c695c31",null);t.default=u.exports;installComponents(u,{SmartIcon:s(93).default})},920:function(e,t,s){"use strict";s(867)},921:function(e,t,s){var n=s(95)(!1);n.push([e.i,'.tabs[data-v-0c695c31] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  white-space: nowrap;\n  overflow: auto;\n  -ms-flex-negative: 0;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n}\n.tabs .tab[data-v-0c695c31] {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-negative: 0;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  color: var(--secondary-color);\n  font-weight: 600;\n  cursor: pointer;\n}\n.tabs .tab[data-v-0c695c31]:hover {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab[data-v-0c695c31]:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.tabs .tab[data-v-0c695c31]:focus-visible {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab .tab-info[data-v-0c695c31] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  width: 1.25rem;\n  height: 1rem;\n  margin-left: 0.5rem;\n  font-size: 8px;\n  line-height: 1;\n  border-color: var(--divider-color);\n  border-width: 1px;\n  border-radius: 0.25rem;\n  color: var(--secondary-light-color);\n}\n.tabs .tab[data-v-0c695c31]::after {\n  position: absolute;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0px;\n  background-color: transparent;\n  z-index: 2;\n  height: 0.125rem;\n  content: "";\n}\n.tabs .tab[data-v-0c695c31]:focus::after {\n  background-color: var(--divider-color);\n}\n.tabs .tab.active[data-v-0c695c31] {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab.active .tab-info[data-v-0c695c31] {\n  color: var(--secondary-color);\n  border-color: var(--divider-dark-color);\n}\n.tabs .tab.active[data-v-0c695c31]::after {\n  background-color: var(--accent-color);\n}\n.tabs .tab.vertical[data-v-0c695c31] {\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n}\n.tabs .tab.vertical[data-v-0c695c31]:focus::after {\n  display: none;\n}\n.tabs .tab.vertical.active[data-v-0c695c31] {\n  color: var(--accent-color);\n}\n.tabs .tab.vertical.active .tab-info[data-v-0c695c31] {\n  color: var(--secondary-color);\n  border-color: var(--divider-dark-color);\n}\n.tabs .tab.vertical.active[data-v-0c695c31]::after {\n  display: none;\n}',""]),e.exports=n}}]);