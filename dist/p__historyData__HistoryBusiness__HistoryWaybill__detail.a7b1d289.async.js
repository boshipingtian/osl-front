(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4177],{52953:function(){},66784:function(W,C,t){"use strict";var y=t(67294),f=t(42696),x=t(85893),e=function(E){var v=E.style,d=E.option;return(0,x.jsx)("div",{children:(0,x.jsx)(f.Z,{style:v,option:d})})};C.Z=e},1691:function(W,C,t){"use strict";var y=t(67294),f=t(42696),x=t(85893),e=function(E){var v=E.style,d=E.option;return(0,x.jsx)("div",{style:v,children:(0,x.jsx)(f.Z,{option:d})})};C.Z=e},32767:function(W,C,t){"use strict";var y=t(58024),f=t(39144),x=t(98858),e=t(4914),U=t(67294),E=t(86353),v=t(85893),d=function(P){var o=P.title,O=P.isShowCreateDate,S=O===void 0?!0:O,i=P.createDate,Z=P.infoColumn,R=P.infoData,g=R===void 0?[]:R,s=P.style;return(0,v.jsxs)(f.Z,{style:s,children:[(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"20px",alignItems:"center"},children:[(0,v.jsx)("div",{style:{fontSize:"18px",fontFamily:"sans-serif",fontWeight:"bold"},children:o}),(0,v.jsx)("div",{style:{fontSize:"16px",fontFamily:"sans-serif"},children:S?"\u751F\u6210\u65F6\u95F4\uFF1A"+i:i})]}),(0,v.jsx)(e.Z,{column:Z,children:g.map(function(h,T){return["\u5356\u65B9\u4F01\u4E1A","\u4E70\u65B9\u4F01\u4E1A","\u7269\u6D41\u4F01\u4E1A"].includes(h.title)?(0,v.jsx)(e.Z.Item,{label:h.title,children:(0,v.jsx)("a",{onClick:function(){E.m8.push({pathname:"/platform-monitor/enterprise-monitor/trading-enterprise/detail",query:{companyId:h.id}})},children:h.data})},T):(0,v.jsx)(e.Z.Item,{label:h.title,children:h.data},T)})})]})};C.Z=d},65737:function(W,C,t){"use strict";var y=t(58024),f=t(39144),x=t(14781),e=t(40308),U=t(8963),E=t(22809),v=t(57663),d=t(71577),b=t(49101),P=t(67294),o=t(85893),O=function(i){var Z=i.title,R=i.columns,g=i.dataSource,s=i.titleButton,h=i.isShowTitleButton,T=h===void 0?!0:h,j=i.footerMore,F=i.onPageChange,$=i.onAddHandler,K=i.rowKey,w=i.loading,z=i.total,nt=z===void 0?500:z;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(f.Z,{children:[(0,o.jsxs)("div",{className:"FullAddTableHeader",children:[(0,o.jsx)("span",{className:"title",children:Z}),(0,o.jsx)("div",{children:T?(0,o.jsx)(d.Z,{type:"primary",icon:(0,o.jsx)(b.Z,{}),onClick:function(){return $(!0)},children:"\u6DFB\u52A0"}):s})]}),(0,o.jsx)(E.Z,{loading:w,rowKey:K,columns:R,pagination:!1,dataSource:g}),(0,o.jsxs)("div",{className:"FullAddTableFooter",children:[(0,o.jsx)("span",{children:j}),(0,o.jsx)(e.Z,{showQuickJumper:!0,defaultCurrent:1,total:nt,onChange:function(n,l){return F(n,l)}})]})]})})};C.Z=O},85581:function(W,C,t){"use strict";t.r(C);var y=t(13062),f=t(71230),x=t(88983),e=t(47933),U=t(58024),E=t(39144),v=t(98858),d=t(4914),b=t(89032),P=t(15746),o=t(67294),O=t(32767),S=t(65737),i=t(86353),Z=t(66784),R=t(1691),g=t(12996),s=t(85893),h=[{title:"\u7269\u6D41\u4F01\u4E1A",data:"\u554A\u5427\u554A\u5427\u516C\u53F8",id:18},{title:"\u5356\u65B9\u4F01\u4E1A",data:"\u554A\u5427\u554A\u5427\u516C\u53F8",id:18},{title:"\u4E70\u65B9\u4F01\u4E1A",data:"\u554A\u5427\u554A\u5427\u516C\u53F8",id:18},{title:"\u4F01\u4E1A\u8D1F\u8D23\u4EBA",data:"\u554A\u5427\u554A\u5427"},{title:"\u4F01\u4E1A\u8D1F\u8D23\u4EBA",data:"\u554A\u5427\u554A\u5427"},{title:"\u4F01\u4E1A\u8D1F\u8D23\u4EBA",data:"\u554A\u5427\u554A\u5427"},{title:"\u8054\u7CFB\u65B9\u5F0F",data:"12312312312"},{title:"\u8054\u7CFB\u65B9\u5F0F",data:"12312312312"},{title:"\u8054\u7CFB\u65B9\u5F0F",data:"12312312312"}],T=[{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"startDate",key:"startDate"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endDate",key:"endDate"},{title:"\u53F8\u673A",dataIndex:"driver",key:"driver"},{title:"\u8F66\u8F86",dataIndex:"car",key:"car"},{title:"\u662F\u5426\u62A5\u8B66",dataIndex:"warning",key:"warning"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(K){return(0,s.jsx)("a",{onClick:function(){i.m8.push({pathname:"/history-data/history-transportation/trans-times",query:{transId:2}})},children:K})}}],j=[{startDate:"2022-01-01",endDate:"2022-01-20",driver:"\u53F8\u673A",car:"\u8F66\u8F66\u8F66",warning:"\u5426",operate:"\u67E5\u770B\u8BE6\u60C5"}],F=function(){return(0,s.jsxs)(f.Z,{gutter:20,children:[(0,s.jsx)(P.Z,{span:16,children:(0,s.jsx)(O.Z,{title:"\u8FD0\u5355\u53F7\uFF1A1234567890",infoColumn:3,isShowCreateDate:!1,createDate:(0,s.jsxs)("span",{children:["\u7ED1\u5B9A\u8BA2\u5355\u53F7\uFF1A",(0,s.jsx)("a",{onClick:function(){i.m8.push({pathname:"/history-data/history-business/history-order/detail",query:{id:"b"}})},children:"12345678900"})]}),infoData:h,style:{marginBottom:"20px"}})}),(0,s.jsx)(P.Z,{span:8,children:(0,s.jsxs)(E.Z,{style:{marginBottom:"20px"},children:[(0,s.jsx)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"20px"},children:(0,s.jsx)("span",{style:{fontSize:"18px",fontFamily:"sans-serif",fontWeight:"bold"},children:"\u8FD0\u5355\u8BE6\u60C5"})}),(0,s.jsxs)(d.Z,{column:2,children:[(0,s.jsx)(d.Z.Item,{label:"\u8FD0\u8D27\u79CD\u7C7B",children:(0,s.jsx)("a",{children:"\u554A\u5427\u554A\u5427"})}),(0,s.jsx)(d.Z.Item,{label:"\u8FD0\u5355\u91CD\u91CF",children:"123KG"}),(0,s.jsx)(d.Z.Item,{label:"\u8FD0\u5355\u603B\u8FD0\u91CF",children:"123KG"}),(0,s.jsx)(d.Z.Item,{label:"\u603B\u62A5\u8B66\u6B21\u6570",children:"12"}),(0,s.jsx)(d.Z.Item,{label:"\u7B7E\u8BA2\u65F6\u95F4",children:"2022-01-01"}),(0,s.jsx)(d.Z.Item,{label:"\u7ED3\u675F\u65F6\u95F4",children:"2022-01-01"})]})]})}),(0,s.jsx)(P.Z,{span:24,children:(0,s.jsx)(S.Z,{title:"\u5386\u53F2\u8FD0\u6B21",columns:T,dataSource:j,footerMore:"\u7ED1\u5B9A\u8F66\u8F86\u603B\u6570\uFF1A12",isShowTitleButton:!1,titleButton:(0,s.jsxs)(e.ZP.Group,{defaultValue:"\u5168\u90E8",children:[(0,s.jsx)(e.ZP.Button,{value:"\u5168\u90E8",children:"\u5168\u90E8"}),(0,s.jsx)(e.ZP.Button,{value:"\u5DF2\u62A5\u8B66",children:"\u5DF2\u62A5\u8B66"}),(0,s.jsx)(e.ZP.Button,{value:"\u672A\u62A5\u8B66",children:"\u672A\u62A5\u8B66"})]})})})]})};C.default=F},4914:function(W,C,t){"use strict";t.d(C,{K:function(){return j},Z:function(){return nt}});var y=t(96156),f=t(28481),x=t(90484),e=t(67294),U=t(94184),E=t.n(U),v=t(50344),d=t(24308),b=t(21687),P=t(65632),o=t(22122);function O(a){return a!=null}var S=function(n){var l=n.itemPrefixCls,r=n.component,_=n.span,u=n.className,c=n.style,B=n.labelStyle,I=n.contentStyle,p=n.bordered,D=n.label,A=n.content,N=n.colon,L=r;if(p){var m;return e.createElement(L,{className:E()((m={},(0,y.Z)(m,"".concat(l,"-item-label"),O(D)),(0,y.Z)(m,"".concat(l,"-item-content"),O(A)),m),u),style:c,colSpan:_},O(D)&&e.createElement("span",{style:B},D),O(A)&&e.createElement("span",{style:I},A))}return e.createElement(L,{className:E()("".concat(l,"-item"),u),style:c,colSpan:_},e.createElement("div",{className:"".concat(l,"-item-container")},D&&e.createElement("span",{className:E()("".concat(l,"-item-label"),(0,y.Z)({},"".concat(l,"-item-no-colon"),!N)),style:B},D),A&&e.createElement("span",{className:E()("".concat(l,"-item-content")),style:I},A)))},i=S;function Z(a,n,l){var r=n.colon,_=n.prefixCls,u=n.bordered,c=l.component,B=l.type,I=l.showLabel,p=l.showContent,D=l.labelStyle,A=l.contentStyle;return a.map(function(N,L){var m=N.props,G=m.label,H=m.children,V=m.prefixCls,J=V===void 0?_:V,Q=m.className,M=m.style,k=m.labelStyle,X=m.contentStyle,q=m.span,tt=q===void 0?1:q,Y=N.key;return typeof c=="string"?e.createElement(i,{key:"".concat(B,"-").concat(Y||L),className:Q,style:M,labelStyle:(0,o.Z)((0,o.Z)({},D),k),contentStyle:(0,o.Z)((0,o.Z)({},A),X),span:tt,colon:r,component:c,itemPrefixCls:J,bordered:u,label:I?G:null,content:p?H:null}):[e.createElement(i,{key:"label-".concat(Y||L),className:Q,style:(0,o.Z)((0,o.Z)((0,o.Z)({},D),M),k),span:1,colon:r,component:c[0],itemPrefixCls:J,bordered:u,label:G}),e.createElement(i,{key:"content-".concat(Y||L),className:Q,style:(0,o.Z)((0,o.Z)((0,o.Z)({},A),M),X),span:tt*2-1,component:c[1],itemPrefixCls:J,bordered:u,content:H})]})}var R=function(n){var l=e.useContext(j),r=n.prefixCls,_=n.vertical,u=n.row,c=n.index,B=n.bordered;return _?e.createElement(e.Fragment,null,e.createElement("tr",{key:"label-".concat(c),className:"".concat(r,"-row")},Z(u,n,(0,o.Z)({component:"th",type:"label",showLabel:!0},l))),e.createElement("tr",{key:"content-".concat(c),className:"".concat(r,"-row")},Z(u,n,(0,o.Z)({component:"td",type:"content",showContent:!0},l)))):e.createElement("tr",{key:c,className:"".concat(r,"-row")},Z(u,n,(0,o.Z)({component:B?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},l)))},g=R,s=function(n){var l=n.children;return l},h=s,T=t(96159),j=e.createContext({}),F={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function $(a,n){if(typeof a=="number")return a;if((0,x.Z)(a)==="object")for(var l=0;l<d.c4.length;l++){var r=d.c4[l];if(n[r]&&a[r]!==void 0)return a[r]||F[r]}return 3}function K(a,n,l){var r=a;return(n===void 0||n>l)&&(r=(0,T.Tm)(a,{span:l}),(0,b.Z)(n===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),r}function w(a,n){var l=(0,v.Z)(a).filter(function(c){return c}),r=[],_=[],u=n;return l.forEach(function(c,B){var I,p=(I=c.props)===null||I===void 0?void 0:I.span,D=p||1;if(B===l.length-1){_.push(K(c,p,u)),r.push(_);return}D<u?(u-=D,_.push(c)):(_.push(K(c,D,u)),r.push(_),u=n,_=[])}),r}function z(a){var n,l=a.prefixCls,r=a.title,_=a.extra,u=a.column,c=u===void 0?F:u,B=a.colon,I=B===void 0?!0:B,p=a.bordered,D=a.layout,A=a.children,N=a.className,L=a.style,m=a.size,G=a.labelStyle,H=a.contentStyle,V=e.useContext(P.E_),J=V.getPrefixCls,Q=V.direction,M=J("descriptions",l),k=e.useState({}),X=(0,f.Z)(k,2),q=X[0],tt=X[1],Y=$(c,q);e.useEffect(function(){var at=d.ZP.subscribe(function(et){(0,x.Z)(c)==="object"&&tt(et)});return function(){d.ZP.unsubscribe(at)}},[]);var lt=w(A,Y),st=e.useMemo(function(){return{labelStyle:G,contentStyle:H}},[G,H]);return e.createElement(j.Provider,{value:st},e.createElement("div",{className:E()(M,(n={},(0,y.Z)(n,"".concat(M,"-").concat(m),m&&m!=="default"),(0,y.Z)(n,"".concat(M,"-bordered"),!!p),(0,y.Z)(n,"".concat(M,"-rtl"),Q==="rtl"),n),N),style:L},(r||_)&&e.createElement("div",{className:"".concat(M,"-header")},r&&e.createElement("div",{className:"".concat(M,"-title")},r),_&&e.createElement("div",{className:"".concat(M,"-extra")},_)),e.createElement("div",{className:"".concat(M,"-view")},e.createElement("table",null,e.createElement("tbody",null,lt.map(function(at,et){return e.createElement(g,{key:et,index:et,colon:I,prefixCls:M,vertical:D==="vertical",bordered:p,row:at})}))))))}z.Item=h;var nt=z},98858:function(W,C,t){"use strict";var y=t(38663),f=t.n(y),x=t(52953),e=t.n(x)}}]);
