(window.webpackJsonp=window.webpackJsonp||[]).push([[43,14,45],{850:function(e,t,r){"use strict";r.d(t,"m",(function(){return h})),r.d(t,"i",(function(){return v})),r.d(t,"j",(function(){return m})),r.d(t,"n",(function(){return y})),r.d(t,"k",(function(){return g})),r.d(t,"a",(function(){return k})),r.d(t,"l",(function(){return q})),r.d(t,"o",(function(){return b})),r.d(t,"h",(function(){return x})),r.d(t,"f",(function(){return j})),r.d(t,"d",(function(){return $})),r.d(t,"g",(function(){return w})),r.d(t,"c",(function(){return C})),r.d(t,"e",(function(){return S})),r.d(t,"b",(function(){return _}));var n=r(34),i=(r(36),r(41),r(35)),o=r(38),s=r(61),a=r(43),l=r(17);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={request:Object(s.makeGQLRequest)({name:"Untitled request",url:"https://echo.hoppscotch.io/graphql",headers:[],variables:'{\n  "id": "1"\n}',query:"query Request {\n  method\n  url\n  headers {\n    key\n    value\n  }\n}\n",auth:{authType:"none",authActive:!0}}),schema:"",response:""},p=Object(a.b)({setSession(e,t){var{session:r}=t;return r},setName(e,t){var{newName:r}=t;return{request:d(d({},e.request),{},{name:r})}},setURL(e,t){var{newURL:r}=t;return{request:d(d({},e.request),{},{url:r})}},setHeaders(e,t){var{headers:r}=t;return{request:d(d({},e.request),{},{headers:r})}},addHeader(e,t){var{header:r}=t;return{request:d(d({},e.request),{},{headers:[...e.request.headers,r]})}},removeHeader(e,t){var{headerIndex:r}=t;return{request:d(d({},e.request),{},{headers:e.request.headers.filter(((e,t)=>t!==r))})}},updateHeader(e,t){var{headerIndex:r,updatedHeader:n}=t;return{request:d(d({},e.request),{},{headers:e.request.headers.map(((e,t)=>t===r?n:e))})}},setQuery(e,t){var{newQuery:r}=t;return{request:d(d({},e.request),{},{query:r})}},setVariables(e,t){var{newVariables:r}=t;return{request:d(d({},e.request),{},{variables:r})}},setResponse(e,t){var{newResponse:r}=t;return{response:r}},setAuth(e,t){var{newAuth:r}=t;return{request:d(d({},e.request),{},{auth:r})}}}),f=new a.a(u,p);function h(e){f.dispatch({dispatcher:"setURL",payload:{newURL:e}})}function v(e){f.dispatch({dispatcher:"setHeaders",payload:{headers:e}})}function m(e){f.dispatch({dispatcher:"setQuery",payload:{newQuery:e}})}function y(e){f.dispatch({dispatcher:"setVariables",payload:{newVariables:e}})}function g(e){f.dispatch({dispatcher:"setResponse",payload:{newResponse:e}})}function k(){return f.value}function q(e){f.dispatch({dispatcher:"setSession",payload:{session:e}})}function b(){return Object(l.h)(O,f.value.request.name,(e=>{f.dispatch({dispatcher:"setName",payload:{newName:e}})}))}function x(e){f.dispatch({dispatcher:"setAuth",payload:{newAuth:e}})}var O=f.subject$.pipe(Object(i.a)("request","name"),Object(o.a)()),j=f.subject$.pipe(Object(i.a)("request","url"),Object(o.a)()),$=f.subject$.pipe(Object(i.a)("request","query"),Object(o.a)()),w=f.subject$.pipe(Object(i.a)("request","variables"),Object(o.a)()),C=f.subject$.pipe(Object(i.a)("request","headers"),Object(o.a)()),S=f.subject$.pipe(Object(i.a)("response"),Object(o.a)()),_=f.subject$.pipe(Object(i.a)("request","auth"),Object(o.a)())},962:function(e,t,r){"use strict";r.r(t);var n=r(3),i=r(61),o=r(195),s=r(101),a=r(850),l=Object(n.c)({props:{picked:{type:Object,default:null},savingMode:{type:Boolean,default:!1},request:{type:Object,default:()=>{}},folderPath:{type:String,default:null},requestIndex:{type:Number,default:null},doc:Boolean},setup:()=>({tippyActions:Object(n.o)(null),options:Object(n.o)(null),edit:Object(n.o)(null),duplicate:Object(n.o)(null),deleteAction:Object(n.o)(null)}),data:()=>({dragging:!1,confirmRemove:!1}),computed:{isSelected(){return this.picked&&"gql-my-request"===this.picked.pickedType&&this.picked.folderPath===this.folderPath&&this.picked.requestIndex===this.requestIndex}},methods:{pick(){this.$emit("select",{picked:{pickedType:"gql-my-request",folderPath:this.folderPath,requestIndex:this.requestIndex}})},selectRequest(){this.savingMode?this.pick():Object(a.l)({request:Object(o.cloneDeep)(Object(i.makeGQLRequest)({name:this.$props.request.name,url:this.$props.request.url,query:this.$props.request.query,headers:this.$props.request.headers,variables:this.$props.request.variables,auth:this.$props.request.auth})),schema:"",response:""})},dragStart(e){var{dataTransfer:t}=e;this.dragging=!this.dragging,t.setData("folderPath",this.folderPath),t.setData("requestIndex",this.requestIndex)},removeRequest(){this.picked&&"gql-my-request"===this.picked.pickedType&&this.picked.folderPath===this.folderPath&&this.picked.requestIndex===this.requestIndex&&this.$emit("select",{picked:null}),Object(s.t)(this.folderPath,this.requestIndex),this.$toast.success("".concat(this.$t("state.deleted")))}}}),c=r(16),d=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col",class:[{"bg-primaryLight":e.dragging}]},[r("div",{staticClass:"flex items-stretch group",attrs:{draggable:"true"},on:{dragstart:e.dragStart,dragover:function(e){e.stopPropagation()},dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[r("span",{staticClass:"flex items-center justify-center w-16 px-2 truncate cursor-pointer",on:{click:function(t){e.doc||e.selectRequest()}}},[r("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:e.isSelected?"check-circle":"file"}})],1),e._v(" "),r("span",{staticClass:"flex flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(t){e.doc||e.selectRequest()}}},[r("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.request.name)+"\n      ")])]),e._v(" "),r("div",{staticClass:"flex"},[e.savingMode?e._e():r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"rotate-ccw",title:e.$t("action.restore")},nativeOn:{click:function(t){e.doc||e.selectRequest()}}}),e._v(" "),r("span",[r("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.more"),svg:"more-vertical"}})]},proxy:!0}])},[e._v(" "),r("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"d",void 0,t.key,void 0)?null:e.duplicate.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[r("SmartItem",{ref:"edit",attrs:{svg:"edit",label:""+e.$t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-request",{request:e.request,requestIndex:e.requestIndex,folderPath:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),r("SmartItem",{ref:"duplicate",attrs:{svg:"copy",label:""+e.$t("action.duplicate"),shortcut:["D"]},nativeOn:{click:function(t){return function(){e.$emit("duplicate-request",{request:e.request,requestIndex:e.requestIndex,folderPath:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),r("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:""+e.$t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)])],1)],1)]),e._v(" "),r("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:""+e.$t("confirm.remove_request")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeRequest}})],1)}),[],!1,null,null,null);t.default=d.exports;installComponents(d,{SmartIcon:r(93).default,ButtonSecondary:r(87).default,SmartItem:r(102).default,SmartConfirmModal:r(315).default})},963:function(e,t,r){"use strict";r.r(t);var n=r(3),i=r(101),o=Object(n.c)({name:"Folder",props:{picked:{type:Object,default:null},savingMode:{type:Boolean,default:!1},folder:{type:Object,default:()=>{}},folderIndex:{type:Number,default:null},collectionIndex:{type:Number,default:null},folderPath:{type:String,default:null},doc:Boolean,isFiltered:Boolean},setup:()=>({tippyActions:Object(n.o)(null),options:Object(n.o)(null),requestAction:Object(n.o)(null),folderAction:Object(n.o)(null),edit:Object(n.o)(null),deleteAction:Object(n.o)(null)}),data:()=>({showChildren:!1,dragging:!1,confirmRemove:!1}),computed:{isSelected(){return this.picked&&"gql-my-folder"===this.picked.pickedType&&this.picked.folderPath===this.folderPath},getCollectionIcon(){return this.isSelected?"check-circle":(this.showChildren||this.isFiltered)&&(this.showChildren||this.isFiltered)?"folder-open":"folder"}},methods:{pick(){this.$emit("select",{picked:{pickedType:"gql-my-folder",folderPath:this.folderPath}})},toggleShowChildren(){this.savingMode&&this.pick(),this.showChildren=!this.showChildren},removeFolder(){this.picked&&"gql-my-folder"===this.picked.pickedType&&this.picked.folderPath===this.folderPath&&this.$emit("select",{picked:null}),Object(i.s)(this.folderPath),this.$toast.success("".concat(this.$t("state.deleted")))},dropEvent(e){var{dataTransfer:t}=e;this.dragging=!this.dragging;var r=t.getData("folderPath"),n=t.getData("requestIndex");Object(i.p)(r,n,this.folderPath)}}}),s=r(16),a=Object(s.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col",class:[{"bg-primaryLight":e.dragging}]},[r("div",{staticClass:"flex items-stretch group",on:{dragover:[function(e){e.preventDefault()},function(t){e.dragging=!0}],drop:[function(t){return t.preventDefault(),e.dropEvent.apply(null,arguments)},function(t){e.dragging=!1}],dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[r("span",{staticClass:"flex items-center justify-center px-4 cursor-pointer",on:{click:function(t){return e.toggleShowChildren()}}},[r("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:e.getCollectionIcon}})],1),e._v(" "),r("span",{staticClass:"flex flex-1 min-w-0 py-2 pr-2 cursor-pointer transition group-hover:text-secondaryDark",on:{click:function(t){return e.toggleShowChildren()}}},[r("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.folder.name?e.folder.name:e.folder.title)+"\n      ")])]),e._v(" "),r("div",{staticClass:"flex"},[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"file-plus",title:e.$t("request.new")},nativeOn:{click:function(t){return e.$emit("add-request",{path:e.folderPath})}}}),e._v(" "),r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"folder-plus",title:e.$t("folder.new")},nativeOn:{click:function(t){return e.$emit("add-folder",{folder:e.folder,path:e.folderPath})}}}),e._v(" "),r("span",[r("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.more"),svg:"more-vertical"}})]},proxy:!0}])},[e._v(" "),r("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0",role:"menu"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"r",void 0,t.key,void 0)?null:e.requestAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"n",void 0,t.key,void 0)?null:e.folderAction.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[r("SmartItem",{ref:"requestAction",attrs:{svg:"file-plus",label:""+e.$t("request.new"),shortcut:["R"]},nativeOn:{click:function(t){return function(){e.$emit("add-request",{path:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),r("SmartItem",{ref:"folderAction",attrs:{svg:"folder-plus",label:""+e.$t("folder.new"),shortcut:["N"]},nativeOn:{click:function(t){return function(){e.$emit("add-folder",{folder:e.folder,path:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),r("SmartItem",{ref:"edit",attrs:{svg:"edit",label:""+e.$t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-folder",{folder:e.folder,folderPath:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),r("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:""+e.$t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)])],1)],1)]),e._v(" "),e.showChildren||e.isFiltered?r("div",{staticClass:"flex"},[r("div",{staticClass:"bg-dividerLight cursor-nsResize flex ml-5.5 transform transition w-1 hover:bg-dividerDark hover:scale-x-125",on:{click:function(t){return e.toggleShowChildren()}}}),e._v(" "),r("div",{staticClass:"flex flex-col flex-1 truncate"},[e._l(e.folder.folders,(function(t,n){return r("CollectionsGraphqlFolder",{key:"subFolder-"+String(n),attrs:{picked:e.picked,"saving-mode":e.savingMode,folder:t,"folder-index":n,"folder-path":e.folderPath+"/"+String(n),"collection-index":e.collectionIndex,doc:e.doc,"is-filtered":e.isFiltered},on:{"add-request":function(t){return e.$emit("add-request",t)},"add-folder":function(t){return e.$emit("add-folder",t)},"edit-folder":function(t){return e.$emit("edit-folder",t)},"edit-request":function(t){return e.$emit("edit-request",t)},"duplicate-request":function(t){return e.$emit("duplicate-request",t)},select:function(t){return e.$emit("select",t)}}})})),e._v(" "),e._l(e.folder.requests,(function(t,n){return r("CollectionsGraphqlRequest",{key:"request-"+String(n),attrs:{picked:e.picked,"saving-mode":e.savingMode,request:t,"collection-index":e.collectionIndex,"folder-index":e.folderIndex,"folder-path":e.folderPath,"folder-name":e.folder.name,"request-index":n,doc:e.doc},on:{"edit-request":function(t){return e.$emit("edit-request",t)},"duplicate-request":function(t){return e.$emit("duplicate-request",t)},select:function(t){return e.$emit("select",t)}}})})),e._v(" "),e.folder.folders&&0===e.folder.folders.length&&e.folder.requests&&0===e.folder.requests.length?r("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[r("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 mb-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/pack.svg",loading:"lazy",alt:""+e.$t("empty.folder")}}),e._v(" "),r("span",{staticClass:"text-center"},[e._v("\n          "+e._s(e.$t("empty.folder"))+"\n        ")])]):e._e()],2)]):e._e(),e._v(" "),r("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:""+e.$t("confirm.remove_folder")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeFolder}})],1)}),[],!1,null,null,null);t.default=a.exports;installComponents(a,{SmartIcon:r(93).default,ButtonSecondary:r(87).default,SmartItem:r(102).default,CollectionsGraphqlFolder:r(963).default,CollectionsGraphqlRequest:r(962).default,SmartConfirmModal:r(315).default})}}]);