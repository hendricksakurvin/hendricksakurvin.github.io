(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{2114:function(e,t,s){"use strict";s.r(t);s(116);var r=s(3),a=s(241),n=s(25),i={};i.props={headers:{key:"headers",required:!0,type:Array}},i.setup=function(e,t){var s=Object(n.d)(),i=Object(n.j)(),o=e,c=Object(r.o)("copy");return{t:s,copyIcon:c,copyHeaders:function(){Object(a.a)(JSON.stringify(o.headers)),c.value="check",i.success("".concat(s("state.copied_to_clipboard"))),setTimeout((function(){return c.value="copy"}),1e3)}}};var o=i,c=s(23),l=Object(c.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-lowerSecondaryStickyFold"},[s("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("request.header_list"))+"\n    ")]),e._v(" "),s("div",{staticClass:"flex"},[e.headers?s("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"copyHeaders",attrs:{title:e.t("action.copy"),svg:e.copyIcon},nativeOn:{click:function(t){return e.copyHeaders.apply(null,arguments)}}}):e._e()],1)]),e._v(" "),e._l(e.headers,(function(t,r){return s("div",{key:"header-"+r,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight group"},[s("span",{staticClass:"flex flex-1 min-w-0 px-4 py-2 transition group-hover:text-secondaryDark"},[s("span",{staticClass:"truncate rounded-sm select-all"},[e._v("\n        "+e._s(t.key)+"\n      ")])]),e._v(" "),s("span",{staticClass:"flex flex-1 min-w-0 px-4 py-2 transition group-hover:text-secondaryDark"},[s("span",{staticClass:"truncate rounded-sm select-all"},[e._v("\n        "+e._s(t.value)+"\n      ")])])])}))],2)}),[],!1,null,null,null);t.default=l.exports;installComponents(l,{ButtonSecondary:s(107).default})}}]);