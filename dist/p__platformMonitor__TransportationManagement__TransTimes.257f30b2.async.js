(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8669],{20415:function(T,m,t){"use strict";var j=t(2824),P=t(35556),p=t(97880),_=t(67294),v=t(85893),x=p.Z.Step,D=function(o){var r=o.progress,l=o.current,i=l===void 0?0:l,c=(0,_.useState)([]),a=(0,j.Z)(c,2),A=a[0],f=a[1];return(0,_.useEffect)(function(){f(r)},[r]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(p.Z,{progressDot:!0,current:i,children:A.map(function(g,M){var F=g.title,B=g.description;return(0,v.jsx)(x,{title:F,description:B},M)})})})};m.Z=D},84164:function(T,m,t){"use strict";t.r(m);var j=t(13062),P=t(71230),p=t(12968),_=t(62462),v=t(89032),x=t(15746),D=t(58024),d=t(39144),o=t(71153),r=t(60331),l=t(49111),i=t(19650),c=t(57663),a=t(71577),A=t(34792),f=t(48086),g=t(3182),M=t(2824),F=t(47673),B=t(50817),U=t(94043),C=t.n(U),b=t(67294),W=t(20415),R=t(70017),I=t(86353),e=t(85893),K=B.Z.Search,S=function(w){var z=w.location,O=z.query.transId,$=(0,b.useState)(void 0),L=(0,M.Z)($,2),n=L[0],G=L[1];console.log("transId\uFF1A",O),(0,b.useEffect)((0,g.Z)(C().mark(function s(){return C().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,N(O);case 2:case"end":return h.stop()}},s)})),[O]);var N=function(){var s=(0,g.Z)(C().mark(function u(h){var E;return C().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,(0,R.$x)({transId:h});case 2:E=y.sent,console.log(E),E.success?G(E.result):f.default.error(E.description);case 5:case"end":return y.stop()}},u)}));return function(h){return s.apply(this,arguments)}}(),Z={current:n==null?void 0:n.nowStatus,data:[{title:"\u9A76\u5411\u5356\u65B9",description:""},{title:"\u6B63\u5728\u88C5\u8D27",description:""},{title:"\u9A76\u5411\u4E70\u65B9",description:""},{title:"\u6B63\u5728\u5378\u8D27",description:""},{title:"\u5B8C\u6210\u8FD0\u8F93",description:""}]},H=[{title:"\u76AE\u91CD\u5BF9\u6BD4\u7ED3\u679C",data:(n==null?void 0:n.noPoundPass)===1?"\u901A\u8FC7":"\u672A\u901A\u8FC7"},{title:"\u76AE\u78C5\u91CD\u6BD4",data:n==null?void 0:n.noPoundCont},{title:"\u6BDB\u91CD\u5BF9\u6BD4\u7ED3\u679C",data:(n==null?void 0:n.allPoundPass)===1?"\u901A\u8FC7":"\u672A\u901A\u8FC7"},{title:"\u6BDB\u78C5\u91CD\u6BD4",data:n==null?void 0:n.allPoundCont}],J=[{title:"\u521D\u59CB\u76AE\u91CD",data:n==null?void 0:n.beginNoPound},{title:"\u521D\u59CB\u6BDB\u91CD",data:n==null?void 0:n.beginAllPound},{title:"\u6700\u7EC8\u6BDB\u91CD",data:n==null?void 0:n.endAllPound},{title:"\u6700\u7EC8\u76AE\u91CD",data:n==null?void 0:n.endNoPound}];return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{position:"absolute",width:"calc(100% + 48px)",top:"-24px",left:"-24px",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 20px",height:"60px",marginBottom:"20px",backgroundColor:"#fff"},children:[(0,e.jsx)(K,{style:{width:"300px"}}),(0,e.jsx)("div",{children:(0,e.jsxs)(i.Z,{children:[(0,e.jsx)(a.Z,{onClick:function(){return f.default.error("\u5F00\u53D1\u4E2D")},children:"\u6682\u4E0D\u5904\u7406"}),(0,e.jsx)(a.Z,{onClick:function(){return f.default.error("\u5F00\u53D1\u4E2D")},children:"\u5DF2\u5904\u7406"}),(0,e.jsx)(a.Z,{type:"danger",onClick:function(){return f.default.error("\u5F00\u53D1\u4E2D")},children:"\u5220\u9664"})]})})]}),(0,e.jsxs)(P.Z,{gutter:[20,20],style:{marginTop:"calc(36px + 20px)"},children:[(0,e.jsx)(x.Z,{span:17,children:(0,e.jsxs)(d.Z,{children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsx)("span",{style:{fontSize:"18px",fontWeight:"bold",fontFamily:"sans-serif"},children:"\u8F66\u8BC1\u6570\u636E"}),(0,e.jsx)(i.Z,{children:(0,e.jsx)(r.Z,{color:"blue",children:"\u5DF2\u5B8C\u6210"})})]}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px"},children:[(0,e.jsxs)(i.Z,{children:[(0,e.jsx)("span",{children:"\u8F66\u724C\u53F7\uFF1A"}),(0,e.jsx)("span",{children:n==null?void 0:n.license}),(0,e.jsx)("a",{onClick:function(){I.m8.push({pathname:"/platform-monitor/transportation-management/vehicle/detail",query:{carId:1}})},children:"\u67E5\u770B"})]}),(0,e.jsxs)(i.Z,{children:[(0,e.jsx)("span",{children:"\u7ED1\u5B9A\u8FD0\u5355\uFF1A"}),(0,e.jsx)("span",{children:n==null?void 0:n.tranIdentification}),(0,e.jsx)("a",{onClick:function(){I.m8.push({pathname:"/history-data/history-business/history-waybill/detail",query:{id:n==null?void 0:n.tranIdentification}})},children:"\u67E5\u770B"})]})]}),(0,e.jsx)("div",{style:{marginTop:"20px"},children:(0,e.jsx)(W.Z,{progress:Z.data,current:Z.current})}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px"},children:[(0,e.jsxs)(i.Z,{children:[(0,e.jsx)("span",{children:"\u521B\u5EFA\u65F6\u95F4\uFF1A"}),(0,e.jsx)("span",{children:n==null?void 0:n.creatTime})]}),(0,e.jsxs)(i.Z,{children:[(0,e.jsx)("span",{children:"\u66F4\u65B0\u65F6\u95F4\uFF1A"}),(0,e.jsx)("span",{children:n==null?void 0:n.updateTime})]})]})]})}),(0,e.jsx)(x.Z,{span:7,children:(0,e.jsxs)(d.Z,{children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsx)("span",{style:{fontSize:"18px",fontWeight:"bold",fontFamily:"sans-serif"},children:"\u53F8\u673A\u4FE1\u606F"}),(0,e.jsxs)(i.Z,{children:[(0,e.jsx)(r.Z,{color:"red",children:"\u672A\u5904\u7406"}),(0,e.jsx)(r.Z,{color:"red",children:"\u5DF2\u62A5\u8B66"})]})]}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"137.14px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,e.jsx)("span",{children:"\u59D3\u540D\uFF1A"}),(0,e.jsx)("span",{children:n==null?void 0:n.driverName})]}),(0,e.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,e.jsx)("span",{children:"\u8054\u7CFB\u65B9\u5F0F\uFF1A"}),(0,e.jsx)("span",{children:n==null?void 0:n.driverPhone})]}),(0,e.jsx)(a.Z,{style:{flex:"1"},type:"primary",onClick:function(){I.m8.push({pathname:"/platform-monitor/transportation-management/driver/detail",query:{driverId:n==null?void 0:n.driverId}})},children:"\u67E5\u770B\u53F8\u673A\u8BE6\u60C5"})]}),(0,e.jsx)("div",{style:{width:"107px",height:"107px"},children:(0,e.jsx)("img",{style:{width:"inherit",height:"inherit",borderRadius:"50%"},src:"https://img2.woyaogexing.com/2017/04/25/8ead3e49a054fef4!400x400_big.jpg",alt:"\u5934\u50CF"})})]})]})}),(0,e.jsx)(x.Z,{span:24,children:(0,e.jsxs)(d.Z,{children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsx)("span",{style:{fontSize:"18px",fontWeight:"bold",fontFamily:"sans-serif"},children:"\u8FC7\u78C5\u6570\u636E"}),(0,e.jsx)(i.Z,{children:(n==null?void 0:n.allPoundPass)===1&&(n==null?void 0:n.noPoundPass)===1?(0,e.jsx)(r.Z,{color:"blue",children:"\u901A\u8FC7"}):(0,e.jsx)(r.Z,{color:"red",children:"\u672A\u901A\u8FC7"})})]}),(0,e.jsxs)("div",{style:{marginTop:"20px"},children:[(0,e.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:H.map(function(s,u){return(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:s.title+": "}),(0,e.jsx)("span",{children:s.data})]},u)})}),(0,e.jsx)("div",{style:{padding:"10px 10px",boxShadow:"0 0 5px rgba(0,0,0,0.14)",marginTop:"20px"},children:(0,e.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:J.map(function(s,u){return(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{fontSize:"14px",color:"#8C8C8C"},children:s.title}),(0,e.jsx)("div",{style:{fontSize:"24px"},children:s.data})]},u)})})})]})]})}),(0,e.jsx)(x.Z,{span:24,children:(0,e.jsxs)(d.Z,{children:[(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,e.jsx)("span",{style:{fontSize:"18px",fontWeight:"bold",fontFamily:"sans-serif"},children:"\u8F66\u7EB9\u6570\u636E"}),(0,e.jsx)(i.Z,{children:(0,e.jsxs)("div",{children:[(0,e.jsx)("span",{children:"\u8F66\u7EB9\u5BF9\u6BD4\u7ED3\u679C\uFF1A"}),(0,e.jsx)(r.Z,{color:"blue",children:"\u901A\u8FC7"})]})})]}),(0,e.jsxs)("div",{style:{marginTop:"20px"},children:[(0,e.jsxs)("div",{style:{fontSize:"16px"},children:[(0,e.jsx)("span",{children:"\u8F7D\u8D27\u8F66\u7EB9\u6BD4\uFF1A"}),(0,e.jsx)("span",{children:n==null?void 0:n.carLineCountB})]}),[{num:1,valueA:n==null?void 0:n.beginCarLineA,valueB:n==null?void 0:n.endCarLineA},{num:2,valueA:n==null?void 0:n.beginCarLineB,valueB:n==null?void 0:n.endCarLineB}].map(function(s,u){return(0,e.jsxs)("div",{style:{padding:"10px 10px",boxShadow:"0 0 5px rgba(0,0,0,0.14)",marginTop:"20px"},children:[(0,e.jsx)("div",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"sans-serif",color:"#8c8c8c"},children:"\u573A".concat(s.num,"\u8F66\u7EB9")}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,e.jsxs)("div",{style:{flex:1,padding:"10px 20px 10px 0"},children:[(0,e.jsx)("div",{children:"\u5165\u53E3\u8F66\u7EB9"}),(0,e.jsx)("div",{style:{marginTop:"5px"},children:(0,e.jsx)(_.Z,{width:"100%",height:"300px",style:{objectFit:"cover"},src:s.valueA})})]}),(0,e.jsxs)("div",{style:{flex:1,padding:"10px 0px 10px 20px"},children:[(0,e.jsx)("div",{children:"\u51FA\u53E3\u8F66\u7EB9"}),(0,e.jsx)("div",{style:{marginTop:"5px"},children:(0,e.jsx)(_.Z,{width:"100%",height:"300px",style:{objectFit:"cover"},src:s.valueB})})]})]})]},u)})]})]})}),(0,e.jsx)(x.Z,{span:24,children:(0,e.jsxs)(d.Z,{children:[(0,e.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:(0,e.jsx)("span",{style:{fontSize:"18px",fontWeight:"bold",fontFamily:"sans-serif"},children:"\u73B0\u573A\u7167\u7247"})}),(0,e.jsx)("div",{style:{marginTop:"20px"},children:[{num:1,valueA:n==null?void 0:n.p1InImg,valueB:n==null?void 0:n.p1OutImg},{num:2,valueA:n==null?void 0:n.p2InImg,valueB:n==null?void 0:n.p2OutImg}].map(function(s,u){return(0,e.jsxs)("div",{style:{padding:"10px 10px",boxShadow:"0 0 5px rgba(0,0,0,0.14)",marginTop:"20px"},children:[(0,e.jsx)("div",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"sans-serif",color:"#8c8c8c"},children:"\u573A".concat(s.num,"\u7167\u7247")}),(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,e.jsxs)("div",{style:{flex:1,padding:"10px 20px 10px 0"},children:[(0,e.jsx)("div",{children:"\u5165\u53E3\u7167\u7247"}),(0,e.jsx)("div",{style:{marginTop:"5px"},children:(0,e.jsx)(_.Z,{width:"100%",height:"300px",style:{objectFit:"cover"},src:s.valueA})})]}),(0,e.jsxs)("div",{style:{flex:1,padding:"10px 0px 10px 20px"},children:[(0,e.jsx)("div",{children:"\u51FA\u53E3\u7167\u7247"}),(0,e.jsx)("div",{style:{marginTop:"5px"},children:(0,e.jsx)(_.Z,{width:"100%",height:"300px",style:{objectFit:"cover"},src:s.valueB})})]})]})]},u)})})]})})]})]})};m.default=S},70017:function(T,m,t){"use strict";t.d(m,{nE:function(){return v},$x:function(){return D}});var j=t(3182),P=t(94043),p=t.n(P),_=t(636),v=function(){var d=(0,j.Z)(p().mark(function o(r){var l,i;return p().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=r.current,i=r.size,console.log({current:l,size:i}),a.abrupt("return",(0,_.Z)("/lamp/trans/allHistoryPage",{method:"POST",requestType:"form",data:{current:l,size:i}}));case 3:case"end":return a.stop()}},o)}));return function(r){return d.apply(this,arguments)}}(),x=null,D=function(){var d=(0,j.Z)(p().mark(function o(r){var l;return p().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=r.transId,console.log(l),c.abrupt("return",(0,_.Z)("/lamp/trans/baseInfo",{method:"POST",requestType:"form",data:{transId:l}}));case 3:case"end":return c.stop()}},o)}));return function(r){return d.apply(this,arguments)}}()}}]);