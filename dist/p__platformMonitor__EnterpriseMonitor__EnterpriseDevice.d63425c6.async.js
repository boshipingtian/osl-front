(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3109],{70347:function(){},2375:function(A,g,e){"use strict";e.r(g),e.d(g,{default:function(){return q}});var s=e(13062),y=e(71230),n=e(12968),C=e(62462),D=e(89032),Y=e(15746),B=e(58024),R=e(39144),te=e(57663),j=e(71577),p=e(34792),m=e(48086),v=e(11849),i=e(3182),t=e(2824),d=e(94043),T=e.n(d),_=e(67294),fe=e(15873),J=e(86353),ge=e(71194),r=e(48889),c=e(20228),u=e(11382),l=e(49111),o=e(19650),k=e(9715),Z=e(22712),w=e(47673),M=e(50817),a=e(85893),P=function(b){var S=b.title,L=b.visible,N=b.loading,W=b.footer,z=W===void 0?null:W,K=b.onCancel,F=b.onFinish;return(0,a.jsx)(r.Z,{title:S,visible:L,footer:z,onCancel:K,children:(0,a.jsx)(u.Z,{spinning:N,children:(0,a.jsxs)(Z.Z,{onFinish:F,autoComplete:"off",labelCol:{span:6},wrapperCol:{span:18},children:[(0,a.jsx)(Z.Z.Item,{label:"\u8BBE\u5907\u7C7B\u578B",name:"deviceType",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8BBE\u5907\u7C7B\u578B"}],children:(0,a.jsx)(M.Z,{})}),(0,a.jsx)(Z.Z.Item,{label:"\u8BBE\u5907\u6807\u8BC6\u7B26",name:"deviceIndentification",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8BBE\u5907\u6807\u8BC6\u7B26"}],children:(0,a.jsx)(M.Z,{})}),(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(j.Z,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4"}),(0,a.jsx)(j.Z,{htmlType:"reset",children:"\u91CD\u7F6E"})]})]})})})},ne=P,$=e(5733),U=function(b){var S,L,N,W,z,K,F,G=b.location,H=G==null?void 0:G.query,ae=H.id,se=(0,_.useState)(!1),oe=(0,t.Z)(se,2),me=oe[0],re=oe[1],de=(0,_.useState)(!1),ce=(0,t.Z)(de,2),he=ce[0],f=ce[1];(0,_.useEffect)(function(){},[]);var h=(0,J.QT)({url:"/device/getInfo",method:"POST",data:{companyId:ae},requestType:"form"}),x=(0,J.QT)({url:"/device/getList",method:"POST",data:{companyId:ae},requestType:"form"}),ye=function(){var E=(0,i.Z)(T().mark(function O(V){var I;return T().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return f(!0),Q.next=3,(0,$.S6)((0,v.Z)((0,v.Z)({},V),{},{companyId:ae}));case 3:I=Q.sent,console.log(I),I.code===200?(f(!1),m.default.success(I.msg),re(!1)):(m.default.error(I.msg),f(!1));case 6:case"end":return Q.stop()}},O)}));return function(V){return E.apply(this,arguments)}}(),ue=function(O,V,I,le){return(0,a.jsx)(Y.Z,{span:8,children:(0,a.jsx)(R.Z,{children:(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{style:{marginBottom:"15px"},children:[(0,a.jsx)("span",{children:"\u8BBE\u5907\u7C7B\u578B"}),(0,a.jsx)("span",{style:{fontSize:"18px",fontWeight:"bold",marginLeft:"10px"},children:O})]}),(0,a.jsxs)("div",{style:{marginBottom:"15px",display:"flex",alignItems:"center"},children:[(0,a.jsx)("span",{children:"\u8BBE\u5907\u72B6\u6001"}),(0,a.jsx)("span",{style:{fontSize:"18px",fontWeight:"bold",marginLeft:"10px",color:"#2ed573"},children:V}),(0,a.jsx)(fe.Z,{style:{fontSize:"24px",color:"#2ed573",marginLeft:"10px"}})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"\u8BBE\u5907\u8BC6\u522B\u7801"}),(0,a.jsx)("span",{style:{marginLeft:"10px"},children:I})]})]}),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"end"},children:[(0,a.jsx)("div",{style:{fontSize:"24px",fontWeight:"bold",fontFamily:"sans-serif"},children:"#"+le}),(0,a.jsx)(j.Z,{children:"\u67E5\u770B\u8BE6\u60C5"})]})]})})},le)};return(0,a.jsxs)("div",{children:[(0,a.jsxs)(R.Z,{children:[(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsx)("div",{style:{width:"40px",height:"40px",overflow:"hidden",borderRadius:"10px"},children:(0,a.jsx)(C.Z,{width:40,height:40,preview:!1,src:"https://picsum.photos/200/200"})}),(0,a.jsx)("span",{style:{fontSize:"18px",margin:"0 15px 0 10px",fontWeight:"bold",fontFamily:"sans-serif"},children:h==null||(S=h.data)===null||S===void 0?void 0:S.companyName})]}),(0,a.jsx)(j.Z,{type:"primary",onClick:function(){return re(!0)},children:"\u65B0\u589E\u8BBE\u5907"})]}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"end",marginTop:"20px"},children:[(0,a.jsxs)("div",{style:{fontSize:"14px"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"\u8D1F\u8D23\u4EBA\uFF1A"}),(0,a.jsx)("span",{children:h==null||(L=h.data)===null||L===void 0?void 0:L.holder})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"\u8054\u7CFB\u65B9\u5F0F\uFF1A"}),(0,a.jsx)("span",{children:h==null||(N=h.data)===null||N===void 0?void 0:N.phone})]})]}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"space-between",width:"335px"},children:[{title:"\u4F01\u4E1A\u8BBE\u5907\u6570",data:"".concat(h==null||(W=h.data)===null||W===void 0?void 0:W.deviceNumAll,"\u4E2A")},{title:"\u8FD0\u884C\u4E2D",data:"".concat(h==null||(z=h.data)===null||z===void 0?void 0:z.deviceNumRunning,"\u4E2A")},{title:"\u8131\u673A\u4E2D",data:"".concat(h==null||(K=h.data)===null||K===void 0?void 0:K.deviceNumOffLine,"\u4E2A")}].map(function(E,O){return(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:"18px",fontWeight:"bold"},children:[(0,a.jsx)("div",{children:E.title}),(0,a.jsx)("div",{children:E.data})]},E.title)})})]})]}),(0,a.jsx)("div",{style:{marginTop:"20px"},children:(0,a.jsx)(y.Z,{gutter:[20,20],children:x==null||(F=x.data)===null||F===void 0?void 0:F.map(function(E,O){return ue(E.deviceType,E.deviceState,E.deviceIndentification,O+1)})})}),(0,a.jsx)(ne,{title:"\u6DFB\u52A0\u8BBE\u5907",visible:me,loading:he,onCancel:function(){return re(!1)},onFinish:function(O){return ye(O)},footer:null})]})},q=U},5733:function(A,g,e){"use strict";e.d(g,{YJ:function(){return D},bF:function(){return B},$q:function(){return R},jO:function(){return te},S6:function(){return j}});var s=e(3182),y=e(94043),n=e.n(y),C=e(636),D=function(){var p=(0,s.Z)(n().mark(function m(v){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,C.Z)("/user/sale/selectByCondition",{method:"POST",data:v}));case 1:case"end":return t.stop()}},m)}));return function(v){return p.apply(this,arguments)}}(),Y=null,B=function(){var p=(0,s.Z)(n().mark(function m(v){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,C.Z)("/user/sale/add",{method:"POST",data:v}));case 1:case"end":return t.stop()}},m)}));return function(v){return p.apply(this,arguments)}}(),R=function(){var p=(0,s.Z)(n().mark(function m(v){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,C.Z)("/user/sale/update",{method:"POST",data:v}));case 1:case"end":return t.stop()}},m)}));return function(v){return p.apply(this,arguments)}}(),te=function(){var p=(0,s.Z)(n().mark(function m(v){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,C.Z)("/user/sale/delete",{method:"POST",data:v}));case 1:case"end":return t.stop()}},m)}));return function(v){return p.apply(this,arguments)}}(),j=function(){var p=(0,s.Z)(n().mark(function m(v){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,C.Z)("/device/add",{method:"POST",data:v}));case 1:case"end":return t.stop()}},m)}));return function(v){return p.apply(this,arguments)}}()},39144:function(A,g,e){"use strict";e.d(g,{Z:function(){return ge}});var s=e(96156),y=e(22122),n=e(67294),C=e(94184),D=e.n(C),Y=e(98423),B=e(65632),R=function(r,c){var u={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&c.indexOf(l)<0&&(u[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(r);o<l.length;o++)c.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(r,l[o])&&(u[l[o]]=r[l[o]]);return u},te=function(c){var u=c.prefixCls,l=c.className,o=c.hoverable,k=o===void 0?!0:o,Z=R(c,["prefixCls","className","hoverable"]);return n.createElement(B.C,null,function(w){var M=w.getPrefixCls,a=M("card",u),P=D()("".concat(a,"-grid"),l,(0,s.Z)({},"".concat(a,"-grid-hoverable"),k));return n.createElement("div",(0,y.Z)({},Z,{className:P}))})},j=te,p=function(r,c){var u={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&c.indexOf(l)<0&&(u[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(r);o<l.length;o++)c.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(r,l[o])&&(u[l[o]]=r[l[o]]);return u},m=function(c){return n.createElement(B.C,null,function(u){var l=u.getPrefixCls,o=c.prefixCls,k=c.className,Z=c.avatar,w=c.title,M=c.description,a=p(c,["prefixCls","className","avatar","title","description"]),P=l("card",o),ne=D()("".concat(P,"-meta"),k),$=Z?n.createElement("div",{className:"".concat(P,"-meta-avatar")},Z):null,U=w?n.createElement("div",{className:"".concat(P,"-meta-title")},w):null,q=M?n.createElement("div",{className:"".concat(P,"-meta-description")},M):null,ee=U||q?n.createElement("div",{className:"".concat(P,"-meta-detail")},U,q):null;return n.createElement("div",(0,y.Z)({},a,{className:ne}),$,ee)})},v=m,i=e(16004),t=e(71230),d=e(15746),T=e(97647),_=function(r,c){var u={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&c.indexOf(l)<0&&(u[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(r);o<l.length;o++)c.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(r,l[o])&&(u[l[o]]=r[l[o]]);return u};function fe(r){var c=r.map(function(u,l){return n.createElement("li",{style:{width:"".concat(100/r.length,"%")},key:"action-".concat(l)},n.createElement("span",null,u))});return c}var J=n.forwardRef(function(r,c){var u,l,o=n.useContext(B.E_),k=o.getPrefixCls,Z=o.direction,w=n.useContext(T.Z),M=function(ve){var X;(X=r.onTabChange)===null||X===void 0||X.call(r,ve)},a=function(){var ve;return n.Children.forEach(r.children,function(X){X&&X.type&&X.type===j&&(ve=!0)}),ve},P=r.prefixCls,ne=r.className,$=r.extra,U=r.headStyle,q=U===void 0?{}:U,ee=r.bodyStyle,b=ee===void 0?{}:ee,S=r.title,L=r.loading,N=r.bordered,W=N===void 0?!0:N,z=r.size,K=r.type,F=r.cover,G=r.actions,H=r.tabList,ae=r.children,se=r.activeTabKey,oe=r.defaultActiveTabKey,me=r.tabBarExtraContent,re=r.hoverable,de=r.tabProps,ce=de===void 0?{}:de,he=_(r,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),f=k("card",P),h=b.padding===0||b.padding==="0px"?{padding:24}:void 0,x=n.createElement("div",{className:"".concat(f,"-loading-block")}),ye=n.createElement("div",{className:"".concat(f,"-loading-content"),style:h},n.createElement(t.Z,{gutter:8},n.createElement(d.Z,{span:22},x)),n.createElement(t.Z,{gutter:8},n.createElement(d.Z,{span:8},x),n.createElement(d.Z,{span:15},x)),n.createElement(t.Z,{gutter:8},n.createElement(d.Z,{span:6},x),n.createElement(d.Z,{span:18},x)),n.createElement(t.Z,{gutter:8},n.createElement(d.Z,{span:13},x),n.createElement(d.Z,{span:9},x)),n.createElement(t.Z,{gutter:8},n.createElement(d.Z,{span:4},x),n.createElement(d.Z,{span:3},x),n.createElement(d.Z,{span:16},x))),ue=se!==void 0,E=(0,y.Z)((0,y.Z)({},ce),(u={},(0,s.Z)(u,ue?"activeKey":"defaultActiveKey",ue?se:oe),(0,s.Z)(u,"tabBarExtraContent",me),u)),O,V=H&&H.length?n.createElement(i.Z,(0,y.Z)({size:"large"},E,{className:"".concat(f,"-head-tabs"),onChange:M}),H.map(function(ie){return n.createElement(i.Z.TabPane,{tab:ie.tab,disabled:ie.disabled,key:ie.key})})):null;(S||$||V)&&(O=n.createElement("div",{className:"".concat(f,"-head"),style:q},n.createElement("div",{className:"".concat(f,"-head-wrapper")},S&&n.createElement("div",{className:"".concat(f,"-head-title")},S),$&&n.createElement("div",{className:"".concat(f,"-extra")},$)),V));var I=F?n.createElement("div",{className:"".concat(f,"-cover")},F):null,le=n.createElement("div",{className:"".concat(f,"-body"),style:b},L?ye:ae),Q=G&&G.length?n.createElement("ul",{className:"".concat(f,"-actions")},fe(G)):null,Ee=(0,Y.Z)(he,["onTabChange"]),pe=z||w,xe=D()(f,(l={},(0,s.Z)(l,"".concat(f,"-loading"),L),(0,s.Z)(l,"".concat(f,"-bordered"),W),(0,s.Z)(l,"".concat(f,"-hoverable"),re),(0,s.Z)(l,"".concat(f,"-contain-grid"),a()),(0,s.Z)(l,"".concat(f,"-contain-tabs"),H&&H.length),(0,s.Z)(l,"".concat(f,"-").concat(pe),pe),(0,s.Z)(l,"".concat(f,"-type-").concat(K),!!K),(0,s.Z)(l,"".concat(f,"-rtl"),Z==="rtl"),l),ne);return n.createElement("div",(0,y.Z)({ref:c},Ee,{className:xe}),O,I,le,Q)});J.Grid=j,J.Meta=v;var ge=J},58024:function(A,g,e){"use strict";var s=e(38663),y=e.n(s),n=e(70347),C=e.n(n),D=e(18106),Y=e(13062),B=e(89032)},15746:function(A,g,e){"use strict";var s=e(21584);g.Z=s.Z},89032:function(A,g,e){"use strict";var s=e(38663),y=e.n(s),n=e(6999)},71230:function(A,g,e){"use strict";var s=e(92820);g.Z=s.Z},13062:function(A,g,e){"use strict";var s=e(38663),y=e.n(s),n=e(6999)},27678:function(A,g,e){"use strict";e.d(g,{g1:function(){return p},os:function(){return v}});var s=/margin|padding|width|height|max|min|offset/,y={left:!0,top:!0},n={cssFloat:1,styleFloat:1,float:1};function C(i){return i.nodeType===1?i.ownerDocument.defaultView.getComputedStyle(i,null):{}}function D(i,t,d){if(t=t.toLowerCase(),d==="auto"){if(t==="height")return i.offsetHeight;if(t==="width")return i.offsetWidth}return t in y||(y[t]=s.test(t)),y[t]?parseFloat(d)||0:d}function Y(i,t){var d=arguments.length,T=C(i);return t=n[t]?"cssFloat"in i.style?"cssFloat":"styleFloat":t,d===1?T:D(i,t,T[t]||i.style[t])}function B(i,t,d){var T=arguments.length;if(t=n[t]?"cssFloat"in i.style?"cssFloat":"styleFloat":t,T===3)return typeof d=="number"&&s.test(t)&&(d="".concat(d,"px")),i.style[t]=d,d;for(var _ in t)t.hasOwnProperty(_)&&B(i,_,t[_]);return C(i)}function R(i){return i===document.body?document.documentElement.clientWidth:i.offsetWidth}function te(i){return i===document.body?window.innerHeight||document.documentElement.clientHeight:i.offsetHeight}function j(){var i=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),t=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);return{width:i,height:t}}function p(){var i=document.documentElement.clientWidth,t=window.innerHeight||document.documentElement.clientHeight;return{width:i,height:t}}function m(){return{scrollLeft:Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),scrollTop:Math.max(document.documentElement.scrollTop,document.body.scrollTop)}}function v(i){var t=i.getBoundingClientRect(),d=document.documentElement;return{left:t.left+(window.pageXOffset||d.scrollLeft)-(d.clientLeft||document.body.clientLeft||0),top:t.top+(window.pageYOffset||d.scrollTop)-(d.clientTop||document.body.clientTop||0)}}}}]);
