(window.webpackJsonp=window.webpackJsonp||[]).push([[51,10,104],{1962:function(e,r,t){"use strict";t.r(r);var o=t(34),a=(t(36),t(41),t(103),t(197)),n=t.n(a),l=t(3),c=t(9),i=t(61),d=t(84),s=t(17);function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){Object(o.a)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m={};m.props={show:{key:"show",required:!1,type:Boolean,default:!1},action:{key:"action",required:!1,type:String,default:"edit"},editingEnvironmentIndex:{key:"editingEnvironmentIndex",required:!1,type:[Number,String,null],default:null},envVars:{key:"envVars",required:!1,type:Function,default:()=>[]}},m.setup=(e,r)=>{var t=Object(s.d)(),o=Object(s.j)(),a=e,v=r.emit,m=Object(l.o)(null),p=Object(l.o)([{key:"",value:""}]),b=Object(l.o)("trash-2"),f=Object(s.g)(d.m,[]),g=Object(l.a)((()=>"Global"===a.editingEnvironmentIndex?{name:"Global",variables:Object(d.l)()}:"new"===a.action?{name:"",variables:a.envVars()}:null!==a.editingEnvironmentIndex?Object(d.k)(a.editingEnvironmentIndex):null)),h=Object(s.g)(d.g,[])||a.envVars(),y=Object(l.a)((()=>{for(var e of p.value){var r=Object(i.parseTemplateStringE)(e.value.toString(),p.value);if(c.isLeft(r))return console.error("error",r.left),!0}return!1})),k=Object(l.a)((()=>y?[]:"Global"===a.editingEnvironmentIndex?[...p.value.map((e=>u(u({},e),{},{source:m.value})))]:[...p.value.map((e=>u(u({},e),{},{source:m.value}))),...f.value.map((e=>u(u({},e),{},{source:"Global"})))]));Object(l.y)((()=>a.show),(e=>{var r,t,o,a;e&&(m.value=null!==(t=null===(r=g.value)||void 0===r?void 0:r.name)&&void 0!==t?t:null,p.value=n()(null!==(a=null===(o=g.value)||void 0===o?void 0:o.variables)&&void 0!==a?a:[]))}));var x=()=>{m.value=null,v("hide-modal")};return{t:t,name:m,vars:p,clearIcon:b,evnExpandError:y,liveEnvs:k,clearContent:()=>{p.value=[],b.value="check",o.success("".concat(t("state.cleared"))),setTimeout((()=>b.value="trash-2"),1e3)},addEnvironmentVariable:()=>{p.value.push({key:"",value:""})},removeEnvironmentVariable:e=>{p.value.splice(e,1)},saveEnvironment:()=>{if(m.value){var e={name:m.value,variables:p.value};"new"===a.action?(Object(d.d)(m.value),Object(d.s)(h.value.length-1,e),Object(d.p)(h.value.length-1),o.success("".concat(t("environment.created")))):"Global"===a.editingEnvironmentIndex?(Object(d.r)(e.variables),o.success("".concat(t("environment.updated")))):null!==a.editingEnvironmentIndex&&(Object(d.s)(a.editingEnvironmentIndex,e),o.success("".concat(t("environment.updated")))),x()}else o.error("".concat(t("environment.invalid_name")))},hideModal:x}};var p=m,b=t(16),f=Object(b.a)(p,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return e.show?t("SmartModal",{attrs:{dialog:"",title:e.t("environment."+e.action)},on:{close:e.hideModal},scopedSlots:e._u([{key:"body",fn:function(){return[t("div",{staticClass:"flex flex-col px-2"},[t("div",{staticClass:"relative flex"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"focus",rawName:"v-focus"}],staticClass:"input floating-input",attrs:{id:"selectLabelEnvEdit",placeholder:" ",type:"text",autocomplete:"off",disabled:"Global"===e.editingEnvironmentIndex},domProps:{value:e.name},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.saveEnvironment.apply(null,arguments)},input:function(r){r.target.composing||(e.name=r.target.value)}}}),e._v(" "),t("label",{attrs:{for:"selectLabelEnvEdit"}},[e._v("\n          "+e._s(e.t("action.label"))+"\n        ")])]),e._v(" "),t("div",{staticClass:"flex items-center justify-between flex-1"},[t("label",{staticClass:"p-4",attrs:{for:"variableList"}},[e._v("\n          "+e._s(e.t("environment.variable_list"))+"\n        ")]),e._v(" "),t("div",{staticClass:"flex"},[t("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear_all"),svg:e.clearIcon},nativeOn:{click:function(r){return e.clearContent()}}}),e._v(" "),t("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{svg:"plus",title:e.t("add.new")},nativeOn:{click:function(r){return e.addEnvironmentVariable.apply(null,arguments)}}})],1)]),e._v(" "),e.evnExpandError?t("div",{staticClass:"w-full px-4 py-2 mb-2 overflow-auto font-mono text-red-400 whitespace-normal rounded bg-primaryLight"},[e._v("\n        "+e._s(e.t("environment.nested_overflow"))+"\n      ")]):e._e(),e._v(" "),t("div",{staticClass:"border rounded divide-y divide-dividerLight border-divider"},[e._l(e.vars,(function(r,o){return t("div",{key:"variable-"+o,staticClass:"flex divide-x divide-dividerLight"},[t("input",{directives:[{name:"model",rawName:"v-model",value:r.key,expression:"variable.key"}],staticClass:"flex flex-1 px-4 py-2 bg-transparent",attrs:{placeholder:""+e.t("count.variable",{count:o+1}),name:"param"+o},domProps:{value:r.key},on:{input:function(t){t.target.composing||e.$set(r,"key",t.target.value)}}}),e._v(" "),t("SmartEnvInput",{attrs:{placeholder:""+e.t("count.value",{count:o+1}),envs:e.liveEnvs,name:"value"+o},model:{value:r.value,callback:function(t){e.$set(r,"value",t)},expression:"variable.value"}}),e._v(" "),t("div",{staticClass:"flex"},[t("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{id:"variable",title:e.t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(r){return e.removeEnvironmentVariable(o)}}})],1)],1)})),e._v(" "),0===e.vars.length?t("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[t("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/blockchain.svg",loading:"lazy",alt:""+e.t("empty.environments")}}),e._v(" "),t("span",{staticClass:"pb-4 text-center"},[e._v("\n            "+e._s(e.t("empty.environments"))+"\n          ")]),e._v(" "),t("ButtonSecondary",{staticClass:"mb-4",attrs:{label:""+e.t("add.new"),filled:""},nativeOn:{click:function(r){return e.addEnvironmentVariable.apply(null,arguments)}}})],1):e._e()],2)])]},proxy:!0},{key:"footer",fn:function(){return[t("span",[t("ButtonPrimary",{attrs:{label:""+e.t("action.save")},nativeOn:{click:function(r){return e.saveEnvironment.apply(null,arguments)}}}),e._v(" "),t("ButtonSecondary",{attrs:{label:""+e.t("action.cancel")},nativeOn:{click:function(r){return e.hideModal.apply(null,arguments)}}})],1)]},proxy:!0}],null,!1,1157880366)}):e._e()}),[],!1,null,null,null);r.default=f.exports;installComponents(f,{ButtonSecondary:t(87).default,SmartEnvInput:t(875).default,ButtonPrimary:t(143).default,SmartModal:t(92).default})},848:function(e,r,t){"use strict";t.d(r,"b",(function(){return h})),t.d(r,"d",(function(){return y})),t.d(r,"a",(function(){return O})),t.d(r,"c",(function(){return j}));t(36),t(41);var o=t(820),a=t(868),n=t(957),l=t(826),c=t(877),i=t(839),d=t(925),s=t(872),v=t(930),u=t(958),m=t(960),p=t(870),b=t(961),f=t(959),g=t(873),h=o.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"0.5em",paddingRight:"0.5em"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),y=o.d.theme({"&":{fontSize:"var(--font-size-body)",height:"100%",width:"100%",flex:"1"},".cm-content":{caretColor:"var(--secondary-dark-color)",fontFamily:"var(--font-sans)",color:"var(--secondary-dark-color)",backgroundColor:"transparent"},".cm-cursor":{borderColor:"var(--secondary-color)"},".cm-widgetBuffer":{position:"absolute"},".cm-selectionBackground":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-panels":{backgroundColor:"var(--primary-light-color)",color:"var(--secondary-light-color)"},".cm-panels.cm-panels-top":{borderBottom:"1px solid var(--divider-light-color)"},".cm-panels.cm-panels-bottom":{borderTop:"1px solid var(--divider-light-color)"},".cm-search":{display:"flex",alignItems:"center",flexWrap:"nowrap",flexShrink:0,overflow:"auto"},".cm-search label":{display:"inline-flex",alignItems:"center"},".cm-textfield":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-light-color)",borderRadius:"3px"},".cm-button":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-dark-color)",backgroundImage:"none",border:"none"},".cm-completionLabel":{color:"var(--secondary-color)"},".cm-tooltip":{backgroundColor:"var(--primary-dark-color)",color:"var(--secondary-light-color)",border:"none",borderRadius:"3px"},".cm-tooltip-arrow:after":{borderColor:"transparent !important"},".cm-tooltip-arrow:before":{borderColor:"transparent !important"},".cm-tooltip.cm-tooltip-autocomplete > ul":{fontFamily:"var(--font-mono)"},".cm-tooltip-autocomplete ul li[aria-selected]":{backgroundColor:"var(--accent-dark-color)",color:"var(--accent-contrast-color)"},".cm-tooltip-autocomplete ul li[aria-selected] .cm-completionLabel":{color:"var(--accent-contrast-color)"},".cm-activeLine":{backgroundColor:"transparent"},".cm-searchMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-dark-color)"},".cm-selectionMatch":{outline:"1px solid var(--accent-dark-color)",backgroundColor:"var(--divider-light-color)"},".cm-matchingBracket, .cm-nonmatchingBracket":{backgroundColor:"var(--divider-color)",outline:"1px solid var(--accent-dark-color)"},".cm-gutters":{fontFamily:"var(--font-mono)",backgroundColor:"var(--primary-color)",borderColor:"var(--divider-light-color)"},".cm-lineNumbers":{minWidth:"3em",color:"var(--secondary-light-color)"},".cm-foldGutter":{minWidth:"2em",color:"var(--secondary-light-color)"},".cm-foldGutter .cm-gutterElement":{textAlign:"center"},".cm-line":{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.2rem",paddingBottom:"0.2rem"},".cm-activeLineGutter":{backgroundColor:"transparent"},".cm-scroller::-webkit-scrollbar":{display:"none"},".cm-foldPlaceholder":{backgroundColor:"var(--divider-light-color)",color:"var(--secondary-dark-color)",borderColor:"var(--divider-dark-color)"}}),k="var(--editor-name-color)",x="var(--editor-constant-color)",O=a.a.define([{tag:a.d.keyword,color:"var(--editor-keyword-color)"},{tag:[a.d.name,a.d.deleted,a.d.character,a.d.propertyName,a.d.macroName],color:k},{tag:[a.d.function(a.d.variableName),a.d.labelName],color:"var(--editor-variable-color)"},{tag:[a.d.color,a.d.constant(a.d.name),a.d.standard(a.d.name)],color:x},{tag:[a.d.definition(a.d.name),a.d.separator],color:"var(--editor-separator-color)"},{tag:[a.d.typeName,a.d.className,a.d.number,a.d.changed,a.d.annotation,a.d.modifier,a.d.self,a.d.namespace],color:"var(--editor-type-color)"},{tag:[a.d.operator,a.d.operatorKeyword,a.d.url,a.d.escape,a.d.regexp,a.d.link,a.d.special(a.d.string)],color:"var(--editor-operator-color)"},{tag:[a.d.meta,a.d.comment],color:"var(--editor-meta-color)"},{tag:a.d.strong,fontWeight:"bold"},{tag:a.d.emphasis,fontStyle:"italic"},{tag:a.d.strikethrough,textDecoration:"line-through"},{tag:a.d.link,color:"var(--editor-link-color)",textDecoration:"underline"},{tag:a.d.heading,fontWeight:"bold",color:k},{tag:[a.d.atom,a.d.bool,a.d.special(a.d.variableName)],color:x},{tag:[a.d.processingInstruction,a.d.string,a.d.inserted],color:"var(--editor-process-color)"},{tag:a.d.invalid,color:"var(--editor-invalid-color)"}]),j=[Object(d.d)(),Object(d.c)(),Object(o.l)(),Object(c.a)(),Object(n.a)({openText:"▾",closedText:"▸"}),Object(o.i)(),Object(o.j)(),l.g.allowMultipleSelections.of(!0),Object(i.p)(),a.b.fallback,Object(v.a)(),Object(u.a)(),Object(p.a)(),Object(f.b)(),Object(f.a)(),Object(o.k)(),Object(m.a)(),o.m.of([...u.b,...s.a,...m.c,...c.b,...n.b,...b.a,...p.c,...g.a]),Object(m.b)()]},849:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));t(63);var o=t(3),a=t(826),n=t(871),l=t(820),c=t(9),i=t(61),d=t(84),s=/(<<\w+>>)/g,v=e=>Object(n.b)(((r,t,o)=>{for(var a,n,l,d,{from:v,to:u,text:m}=r.state.doc.lineAt(t),p=t,b=t;p>v&&/\w/.test(m[p-v-1]);)p--;for(;b<u&&/\w/.test(m[b-v]);)b++;if(p===t&&o<0||b===t&&o>0||!s.test(m.slice(p-v-2,b-v+2)))return null;var f=null!==(n=null===(a=e.find((e=>e.key===m.slice(p-v,b-v))))||void 0===a?void 0:a.sourceEnv)&&void 0!==n?n:"choose an environment",g=null!==(d=null===(l=e.find((e=>e.key===m.slice(p-v,b-v))))||void 0===l?void 0:l.value)&&void 0!==d?d:"not found",h=Object(i.parseTemplateStringE)(g,e),y=c.isLeft(h)?"error":h.right;return{pos:p,end:u,above:!0,arrow:!0,create(){var e=document.createElement("span"),r=document.createElement("xmp");return r.textContent=y,e.appendChild(document.createTextNode("".concat(f," "))),e.appendChild(r),e.className="tooltip-theme",{dom:e}}}}),{hoverTime:1});var u=e=>new l.e({regexp:s,decoration:r=>function(e,r){var t=r.find((r=>r.key===e.slice(2,-2)))?"bg-accentDark text-accentContrast hover:bg-accent":"bg-red-500 text-accentContrast hover:bg-red-600";return l.b.mark({class:"".concat("cursor-help transition rounded px-1 focus:outline-none mx-0.5 env-highlight"," ").concat(t)})}(r[0],e)}),m=e=>{var r=u(e);return l.g.define((e=>({decorations:r.createDeco(e),update(e){this.decorations=r.updateDeco(e,this.decorations)}})),{decorations:e=>e.decorations})};class p{constructor(e,r){this.editorView=r,this.compartment=new a.e,this.envs=[],this.envs=Object(d.i)(),e(d.b,(e=>{var r;this.envs=e,null===(r=this.editorView.value)||void 0===r||r.dispatch({effects:this.compartment.reconfigure([v(this.envs),m(this.envs)])})}))}get extension(){return this.compartment.of([v(this.envs),m(this.envs)])}}class b{constructor(e,r){this.editorView=r,this.compartment=new a.e,this.envs=[],Object(o.y)(e,(e=>{var r;this.envs=e,null===(r=this.editorView.value)||void 0===r||r.dispatch({effects:this.compartment.reconfigure([v(this.envs),m(this.envs)])})}),{immediate:!0})}get extension(){return this.compartment.of([v(this.envs),m(this.envs)])}}},875:function(e,r,t){"use strict";t.r(r);t(63),t(129),t(896),t(919),t(36),t(41);var o=t(3),a=t(820),n=t(826),l=t(197),c=t.n(l),i=t(871),d=t(877),s=t(848),v=t(849),u=t(17),m=t(84),p={};p.props={value:{key:"value",required:!1,type:String,default:""},placeholder:{key:"placeholder",required:!1,type:String,default:""},styles:{key:"styles",required:!1,type:String,default:""},envs:{key:"envs",required:!1,type:[Array,null],default:null},focus:{key:"focus",required:!1,type:Boolean,default:!1},readonly:{key:"readonly",required:!1,type:Boolean,default:!1}},p.setup=(e,r)=>{var t=e,l=r.emit,p=Object(o.o)(t.value),b=Object(o.o)(),f=Object(o.o)(null);Object(o.y)((()=>t.value),(e=>{var r,t,o=e.replaceAll("\n",""),a=null===(r=b.value)||void 0===r?void 0:r.state.doc.toJSON().join(b.value.state.lineBreak);p.value===o&&e===a||(p.value=o,null===(t=b.value)||void 0===t||t.dispatch({filter:!1,changes:{from:0,to:b.value.state.doc.length,insert:o}}))}),{immediate:!0,flush:"sync"});var g=null,h=null,y=Object(u.g)(m.b,[]),k=Object(o.a)((()=>t.envs?t.envs.map((e=>({key:e.key,value:e.value,sourceEnv:e.source}))):y.value)),x=new v.b(k,b),O=e=>{var r=[a.d.contentAttributes.of({"aria-label":t.placeholder}),a.d.updateListener.of((e=>{t.readonly&&(e.view.contentDOM.inputMode="none")})),n.g.changeFilter.of((()=>!t.readonly)),s.d,t.readonly?a.d.theme({".cm-content":{caretColor:"var(--secondary-dark-color) !important",color:"var(--secondary-dark-color) !important",backgroundColor:"var(--divider-color) !important",opacity:.25}}):a.d.theme({}),Object(i.d)({position:"absolute"}),x,Object(a.o)(t.placeholder),a.d.domEventHandlers({paste(e){var r,t;g=e,h=null!==(t=null===(r=e.clipboardData)||void 0===r?void 0:r.getData("text"))&&void 0!==t?t:""},drop(e){e.preventDefault()}}),a.g.fromClass(class{update(e){if(!t.readonly&&e.docChanged){var r=c()(p.value);p.value=e.state.doc.toJSON().join(e.state.lineBreak);var a=c()(p.value).replaceAll("\n","");if(l("input",a),l("change",a),!!e.transactions.find((e=>e.isUserEvent("input.paste")))&&g){var n=h;Object(o.g)((()=>{l("paste",{pastedValue:n,prevValue:r})}))}else g=null,h=null}}}),Object(d.a)(),a.m.of([...d.b])];b.value=new a.d({parent:e,state:n.g.create({doc:t.value,extensions:r})})};return Object(o.j)((()=>{f.value&&(b.value||O(f.value))})),Object(o.y)(f,(()=>{var e;f.value?b.value||O(f.value):(null===(e=b.value)||void 0===e||e.destroy(),b.value=void 0)})),{emit:l,editor:f}};var b=p,f=t(16),g=Object(f.a)(b,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"flex items-center flex-1 flex-shrink-0 overflow-auto whitespace-nowrap hide-scrollbar"},[t("div",{ref:"editor",staticClass:"flex flex-1",class:e.styles,attrs:{placeholder:e.placeholder},on:{keydown:[function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:(r.preventDefault(),e.emit("enter",r))},function(r){return e.emit("keydown",r)}],keyup:function(r){return e.emit("keyup",r)},click:function(r){return e.emit("click",r)}}})])}),[],!1,null,null,null);r.default=g.exports},896:function(e,r,t){t(924)},924:function(e,r,t){"use strict";var o=t(25),a=t(23),n=t(37),l=t(42),c=t(97),i=t(57),d=t(251),s=t(70),v=t(132),u=t(252),m=t(451),p=t(65),b=t(88),f=p("replace"),g=RegExp.prototype,h=a.TypeError,y=l(u),k=l("".indexOf),x=l("".replace),O=l("".slice),j=Math.max,C=function(e,r,t){return t>e.length?-1:""===r?t:k(e,r,t)};o({target:"String",proto:!0},{replaceAll:function(e,r){var t,o,a,l,u,p,w,E,_,S=c(this),B=0,I=0,L="";if(null!=e){if((t=d(e))&&(o=s(c("flags"in g?e.flags:y(e))),!~k(o,"g")))throw h("`.replaceAll` does not allow non-global regexes");if(a=v(e,f))return n(a,e,S,r);if(b&&t)return x(s(S),e,r)}for(l=s(S),u=s(e),(p=i(r))||(r=s(r)),w=u.length,E=j(1,w),B=C(l,u,0);-1!==B;)_=p?s(r(u,B,l)):m(u,l,B,[],void 0,r),L+=O(l,I,B)+_,I=B+w,B=C(l,u,B+E);return I<l.length&&(L+=O(l,I)),L}})}}]);