(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8386],{20415:function(X,I,r){"use strict";var z=r(2824),K=r(35556),B=r(97880),j=r(67294),g=r(85893),S=B.Z.Step,W=function(P){var x=P.progress,f=P.current,R=f===void 0?0:f,h=(0,j.useState)([]),o=(0,z.Z)(h,2),E=o[0],A=o[1];return(0,j.useEffect)(function(){A(x)},[x]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(B.Z,{progressDot:!0,current:R,children:E.map(function(a,m){var M=a.title,U=a.description;return(0,g.jsx)(S,{title:M,description:U},m)})})})};I.Z=W},40479:function(X,I,r){"use strict";r.r(I),r.d(I,{default:function(){return te}});var z=r(13062),K=r(71230),B=r(58024),j=r(39144),g=r(49111),S=r(19650),W=r(57663),D=r(71577),P=r(89032),x=r(15746),f=r(11849),R=r(34792),h=r(48086),o=r(3182),E=r(2824),A=r(94043),a=r.n(A),m=r(67294),M=r(65737),U=r(98858),N=r(4914),ve=r(71153),V=r(60331),t=r(85893),Y=function(v){var Z=v.infoData,C=v.headPicture,y=v.driverData,O=v.inTransit,p=v.onEditClick,$=v.onDeleteClick;return(0,t.jsxs)(j.Z,{children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[(0,t.jsx)("span",{style:{fontSize:"18px",fontWeight:"bold",fontFamily:"sans-serif"},children:"\u53F8\u673A\u8BE6\u60C5"}),(0,t.jsx)("div",{children:(0,t.jsxs)(S.Z,{children:[O?(0,t.jsx)(V.Z,{color:"blue",children:"\u8FD0\u8F93\u4E2D"}):(0,t.jsx)(V.Z,{color:"red",children:"\u7A7A\u95F2\u4E2D"}),(0,t.jsx)(D.Z,{type:"primary",onClick:function(){return p()},children:"\u7F16\u8F91"}),(0,t.jsx)(D.Z,{type:"danger",onClick:function(){return $()},children:"\u5220\u9664"})]})})]}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsxs)("div",{style:{display:"flex"},children:[(0,t.jsx)("div",{style:{width:"65px",height:"65px",overflow:"hidden",borderRadius:"50%"},children:(0,t.jsx)("img",{style:{width:"65px",height:"65px"},src:C,alt:"\u5934\u50CF"})}),(0,t.jsx)("div",{style:{width:"calc(600px - 80px)",marginLeft:"15px"},children:(0,t.jsx)(N.Z,{column:2,children:Z.map(function(u,e){return(0,t.jsx)(N.Z.Item,{label:u.title,children:u.data},e)})})})]}),(0,t.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:y.map(function(u,e){return e===y.length-1?(0,t.jsxs)("div",{style:{textAlign:"right",margin:"0 0 0 30px"},children:[(0,t.jsx)("div",{style:{fontSize:"14px"},children:u.title}),(0,t.jsx)("div",{style:{fontSize:"30px"},children:u.data})]},e):(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,t.jsxs)("div",{style:{textAlign:"right",margin:"0 34px"},children:[(0,t.jsx)("div",{style:{fontSize:"14px"},children:u.title}),(0,t.jsx)("div",{style:{fontSize:"30px"},children:u.data})]}),(0,t.jsx)("div",{style:{width:"1px",height:"80%",backgroundColor:"#E9E9E9"}})]},e)})})]})]})},b=Y,k=r(20415),L=r(90723),q=r(65523),_=r(99747),ee=function(v){var Z,C,y,O=v.location,p=O.query.driverId,$=(0,m.useState)(void 0),u=(0,E.Z)($,2),e=u[0],ne=u[1],ie=(0,m.useState)(!1),G=(0,E.Z)(ie,2),se=G[0],T=G[1],ae=(0,m.useState)(!1),Q=(0,E.Z)(ae,2),le=Q[0],w=Q[1];(0,m.useEffect)((0,o.Z)(a().mark(function i(){return a().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,H(p);case 2:case"end":return n.stop()}},i)})),[]);var H=function(){var i=(0,o.Z)(a().mark(function l(n){var s,c;return a().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,(0,L.zW)({driverId:n});case 2:s=F.sent,console.log(s),s.success?(c=s.result,ne(c)):h.default.error(s.description);case 5:case"end":return F.stop()}},l)}));return function(n){return i.apply(this,arguments)}}(),de=[{title:"\u59D3\u540D",data:e==null?void 0:e.driverName},{title:"\u8D26\u53F7",data:e==null?void 0:e.account},{title:"\u8054\u7CFB\u65B9\u5F0F",data:e==null?void 0:e.mobile},{title:"\u521B\u5EFA\u65F6\u95F4",data:e==null?void 0:e.creatTime}],ue=[{title:"\u7ED1\u5B9A\u8F66\u8F86",data:e==null?void 0:e.boundCarNum},{title:"\u62C9\u8D27\u6B21\u6570",data:e==null?void 0:e.workNum},{title:"\u8FDD\u7EA6\u6570",data:e==null?void 0:e.noContractNum},{title:"\u884C\u9A76\u516C\u91CC\u6570",data:e==null?void 0:e.milesTravelled}],J={current:e==null||(Z=e.nowTranData)===null||Z===void 0?void 0:Z.tranStatus,data:[{title:"\u9A76\u5411\u5356\u65B9",description:""},{title:"\u6B63\u5728\u88C5\u8D27",description:""},{title:"\u9A76\u5411\u4E70\u65B9",description:""},{title:"\u6B63\u5728\u5378\u8D27",description:""},{title:"\u5B8C\u6210\u8FD0\u8F93",description:""}]},oe=function(){var i=(0,o.Z)(a().mark(function l(n){var s;return a().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return w(!0),d.next=3,(0,L.VQ)((0,f.Z)({},n));case 3:if(s=d.sent,s.code!==200){d.next=12;break}return w(!1),T(!1),d.next=9,H(p);case 9:h.default.success(s.msg),d.next=15;break;case 12:w(!1),T(!1),h.default.error(s.msg);case 15:case"end":return d.stop()}},l)}));return function(n){return i.apply(this,arguments)}}(),ce=function(){var i=(0,o.Z)(a().mark(function l(n){var s;return a().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,L.BD)({driverId:p});case 2:s=d.sent,s.code===200?h.default.success(s.msg):h.default.error(s.msg);case 4:case"end":return d.stop()}},l)}));return function(n){return i.apply(this,arguments)}}();return(0,t.jsxs)(K.Z,{gutter:[20,20],children:[(0,t.jsx)(x.Z,{span:24,children:(0,t.jsx)(b,{infoData:de,headPicture:e==null?void 0:e.headPictureUrl,driverData:ue,inTransit:e==null?void 0:e.inTransit,onEditClick:function(){return T(!0)},onDeleteClick:(0,o.Z)(a().mark(function i(){return a().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",ce({driverId:p}));case 1:case"end":return n.stop()}},i)}))})}),e!=null&&e.inTransit?(0,t.jsx)(x.Z,{span:24,children:(0,t.jsxs)(j.Z,{children:[(0,t.jsx)("div",{style:{marginBottom:"10px"},children:(0,t.jsx)("span",{style:{fontSize:"18px",fontFamily:"sans-serif",fontWeight:"bold"},children:"\u8F66\u8F86\u73B0\u8FDB\u884C\u4E2D\u8FD0\u8F93\u6570\u636E"})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"35px"},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,t.jsxs)("div",{style:{marginRight:"50px"},children:[(0,t.jsx)("span",{children:"\u5173\u8054\u8F66\u8F86\uFF1A"}),(0,t.jsx)("span",{children:(0,t.jsx)("a",{children:e==null||(C=e.nowTranData)===null||C===void 0?void 0:C.carLicense})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"\u5173\u8054\u65F6\u95F4\uFF1A"}),(0,t.jsx)("span",{children:e==null||(y=e.nowTranData)===null||y===void 0?void 0:y.startTime})]})]}),(0,t.jsx)("div",{children:(0,t.jsxs)(S.Z,{children:[(0,t.jsx)(D.Z,{type:"primary",children:"\u67E5\u770B\u8F66\u8F86\u8BE6\u60C5"}),(0,t.jsx)(D.Z,{type:"primary",children:"\u67E5\u770B\u8FD0\u6B21\u8BE6\u60C5"})]})})]}),(0,t.jsx)(k.Z,{progress:J.data,current:J.current})]})]})}):"",(0,t.jsx)(x.Z,{span:24,children:(0,t.jsx)(M.Z,{title:"\u5386\u53F2\u8FD0\u8F93\u6570\u636E",rowKey:function(l){return l.tranId},columns:q.kz,dataSource:e==null?void 0:e.historyList.map(function(i){return(0,f.Z)((0,f.Z)({},i),{},{operate:"\u67E5\u770B\u8BE6\u60C5"})}),isShowTitleButton:!1})}),(0,t.jsx)(_.Z,{visible:se,title:"\u7F16\u8F91\u53F8\u673A",loading:le,onOK:function(){var i=(0,o.Z)(a().mark(function l(n){return a().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",oe((0,f.Z)({driverId:p},n)));case 1:case"end":return c.stop()}},l)}));return function(l){return i.apply(this,arguments)}}(),onCancel:function(){return T(!1)}})]})},te=ee}}]);
