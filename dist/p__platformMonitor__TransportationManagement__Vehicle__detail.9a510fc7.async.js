(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9953],{66784:function(V,S,n){"use strict";var O=n(67294),L=n(42696),m=n(85893),B=function(A){var C=A.style,W=A.option;return(0,m.jsx)("div",{children:(0,m.jsx)(L.Z,{style:C,option:W})})};S.Z=B},20415:function(V,S,n){"use strict";var O=n(2824),L=n(35556),m=n(97880),B=n(67294),p=n(85893),A=m.Z.Step,C=function(f){var $=f.progress,I=f.current,G=I===void 0?0:I,x=(0,B.useState)([]),g=(0,O.Z)(x,2),h=g[0],K=g[1];return(0,B.useEffect)(function(){K($)},[$]),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(m.Z,{progressDot:!0,current:G,children:h.map(function(o,d){var R=o.title,w=o.description;return(0,p.jsx)(A,{title:R,description:w},d)})})})};S.Z=C},79779:function(V,S,n){"use strict";n.r(S),n.d(S,{default:function(){return ce}});var O=n(13062),L=n(71230),m=n(11849),B=n(49111),p=n(19650),A=n(58024),C=n(39144),W=n(57663),f=n(71577),$=n(89032),I=n(15746),G=n(34792),x=n(48086),g=n(3182),h=n(2824),K=n(94043),o=n.n(K),d=n(67294),R=n(65737),w=n(20415),Ae=n(71153),M=n(60331),Te=n(98858),H=n(4914),t=n(85893),ee=function(u){var j=u.infoData,D=u.contractStatus,y=u.traning,F=u.showCarImage,Z=u.editCarInfo,c=u.deleteCarInfo;return(0,t.jsxs)(C.Z,{children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[(0,t.jsx)("span",{style:{fontSize:"18px",fontWeight:"bold",fontFamily:"sans-serif"},children:"\u8F66\u8F86\u8BE6\u60C5"}),(0,t.jsx)("div",{children:(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(f.Z,{onClick:function(){return F()},children:"\u67E5\u770B\u8BC1\u7167\u4E0E\u8F66\u8F86\u7167\u7247"}),(0,t.jsx)(f.Z,{onClick:function(){return Z()},type:"primary",children:"\u7F16\u8F91"}),(0,t.jsx)(f.Z,{type:"danger",onClick:function(){return c()},children:"\u5220\u9664"})]})})]}),(0,t.jsx)(H.Z,{column:2,children:j.map(function(v,E){return(0,t.jsx)(H.Z.Item,{label:v.title,children:v.data},E)})}),(0,t.jsxs)("div",{style:{display:"flex"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"\u662F\u5426\u7ED1\u5B9A\u8FD0\u5355\uFF1A"}),D?(0,t.jsx)(M.Z,{color:"green",children:"\u5DF2\u7ED1\u5B9A"}):(0,t.jsx)(M.Z,{color:"red",children:"\u672A\u7ED1\u5B9A"})]}),(0,t.jsxs)("div",{style:{marginLeft:"30px"},children:[(0,t.jsx)("span",{children:"\u662F\u5426\u8FD0\u8F93\u4E2D\uFF1A"}),y?(0,t.jsx)(M.Z,{color:"green",children:"\u8FD0\u8F93\u4E2D"}):(0,t.jsx)(M.Z,{color:"red",children:"\u7A7A\u95F2\u4E2D"})]})]})]})},te=ee,ne=n(66784),ae=n(65523),P=n(42579),Le=n(71194),re=n(48889),Me=n(12968),ie=n(62462),se=function(u){var j=u.imageList,D=u.title,y=u.visible,F=y===void 0?!0:y,Z=u.onCancel,c=(0,d.useState)([]),v=(0,h.Z)(c,2),E=v[0],e=v[1];return(0,d.useEffect)(function(){e(j)},[j]),(0,t.jsx)(re.Z,{title:D,visible:F,footer:null,onCancel:function(){return Z()},children:(0,t.jsx)("div",{style:{display:"grid",width:"460px",padding:"20px",gridTemplateColumns:"repeat(2,1fr)",gridTemplateRows:"repeat(2,1fr)",gap:"20px"},children:E.map(function(T){return(0,t.jsx)(ie.Z,{width:"200px",height:"100px",style:{objectFit:"cover"},src:T},T)})})})},le=se,oe=n(81223),ue=n(86353),de=function(u){var j,D,y,F,Z=u.location;console.log(Z.query.carId);var c=Z.query.carId,v=(0,d.useState)(void 0),E=(0,h.Z)(v,2),e=E[0],T=E[1],ve=(0,d.useState)(!1),Q=(0,h.Z)(ve,2),fe=Q[0],X=Q[1],he=(0,d.useState)([]),Y=(0,h.Z)(he,2),me=Y[0],pe=Y[1],xe=(0,d.useState)(!0),b=(0,h.Z)(xe,2),Pe=b[0],Oe=b[1],ge=(0,d.useState)(!1),k=(0,h.Z)(ge,2),je=k[0],N=k[1],ye=(0,d.useState)(!1),q=(0,h.Z)(ye,2),Ce=q[0],U=q[1];(0,d.useEffect)((0,g.Z)(o().mark(function r(){return o().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Ie(c);case 2:return l.next=4,De(c);case 4:case"end":return l.stop()}},r)})),[c]);var Ie=function(){var r=(0,g.Z)(o().mark(function i(l){var s;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,P.m9)({carId:l});case 2:s=a.sent,s.success?T(s.result):x.default.error(s.description);case 4:case"end":return a.stop()}},i)}));return function(l){return r.apply(this,arguments)}}(),De=function(){var r=(0,g.Z)(o().mark(function i(l){var s;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,P.nD)({carId:l});case 2:s=a.sent,s.success?pe(s.result):x.default.error(s.description);case 4:case"end":return a.stop()}},i)}));return function(l){return r.apply(this,arguments)}}(),Fe=function(){var r=(0,g.Z)(o().mark(function i(l){var s;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,P.oI)({carId:l});case 2:s=a.sent,s.success?(x.default.success("\u5220\u9664\u6210\u529F"),Z.history.push("/platform-monitor/transportation-management/vehicle")):x.default.error(s.msg);case 4:case"end":return a.stop()}},i)}));return function(l){return r.apply(this,arguments)}}(),Ze=function(i){U(!0)},Se=[{title:"\u8F66\u724C\u53F7",data:e==null?void 0:e.license},{title:"\u6240\u5C5E\u7269\u6D41\u4F01\u4E1A",data:e==null?void 0:e.company},{title:"\u8D1F\u8D23\u4EBA",data:e==null?void 0:e.driverName},{title:"\u8054\u7CFB\u65B9\u5F0F",data:e==null?void 0:e.driverPhone},{title:"\u8F66\u8F86\u578B\u53F7",data:e==null?void 0:e.carType},{title:"\u8F66\u8F86\u6CE8\u518C\u65F6\u95F4",data:e==null?void 0:e.regTime},{title:"\u8F66\u8F86\u81EA\u91CD",data:e==null?void 0:e.carWeight},{title:"\u8F66\u8F86\u6838\u8F7D\u91CD\u91CF",data:e==null?void 0:e.carLegalWeight}],_={current:e==null||(j=e.nowTranData)===null||j===void 0?void 0:j.tranStatus,data:[{title:"\u9A76\u5411\u5356\u65B9",description:""},{title:"\u6B63\u5728\u88C5\u8D27",description:""},{title:"\u9A76\u5411\u4E70\u65B9",description:""},{title:"\u6B63\u5728\u5378\u8D27",description:""},{title:"\u5B8C\u6210\u8FD0\u8F93",description:""}]},Ee=[{title:"\u4ECA\u65E5\u62A5\u8B66",data:e==null?void 0:e.alarmNumDay},{title:"\u4ECA\u65E5\u8FD0\u6B21",data:e==null?void 0:e.tranNumDay},{title:"\u5386\u53F2\u62A5\u8B66",data:e==null?void 0:e.alermNumAll},{title:"\u5386\u53F2\u8FD0\u6B21",data:e==null?void 0:e.tranNumAll}],Be={title:{text:(e==null?void 0:e.alermNumAll)||0,left:"30%",top:"49%",textStyle:{color:"#000",fontSize:18,align:"center"}},graphic:{type:"text",left:"40%",top:"43%",style:{text:"\u62A5\u8B66\u6570",textAlign:"center",fill:"#000",fontSize:12}},tooltip:{trigger:"item"},grid:{top:"0px",left:"50px",bottom:"0px",right:"50px"},legend:{top:"center",right:"20px",orient:"vertical",itemGap:20,icon:"circle",show:!1},series:[{type:"pie",radius:["60%","95%"],center:["50%","50%"],label:{position:"inside",show:!0,formatter:"{d}%",color:"#fff"},labelLine:{show:!1},data:[{value:0,name:"\u5DF2\u5B8C\u6210\u8FD0\u91CF",itemStyle:{color:"#5B8FF9"}},{value:0,name:"\u672A\u5B8C\u6210\u8FD0\u91CF",itemStyle:{color:"#5AD8A6"}},{value:0,name:"\u4ECA\u65E5\u8FD0\u91CF",itemStyle:{color:"#5D7092"}}]}]};return(0,t.jsxs)(L.Z,{gutter:[20,20],children:[(0,t.jsx)(I.Z,{span:16,children:(0,t.jsx)(te,{infoData:Se,contractStatus:e==null?void 0:e.contractStatus,traning:e==null?void 0:e.traning,showCarImage:function(){return X(!0)},deleteCarInfo:function(){return Fe(c)},editCarInfo:function(){return Ze(c)}})}),(0,t.jsx)(I.Z,{span:8,children:(0,t.jsxs)(C.Z,{children:[(0,t.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:(0,t.jsx)("span",{style:{fontSize:"18px",fontWeight:"bold",fontFamily:"sans-serif"},children:"\u8F66\u8F86\u8BE6\u60C5"})}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,t.jsxs)("div",{style:{marginLeft:"20px"},children:[Ee.map(function(r,i){return(0,t.jsxs)("div",{style:{fontSize:"16px",marginBottom:"12px"},children:[(0,t.jsx)("span",{children:r.title+": "}),(0,t.jsx)("span",{children:r.data})]},i)}),(0,t.jsx)(f.Z,{type:"primary",onClick:function(){ue.m8.push({pathname:"/alarm-info/alarm-overview",query:{id:c}})},children:"\u62A5\u8B66\u5217\u8868"})]}),(0,t.jsx)("div",{style:{marginRight:"20px"},children:(0,t.jsx)(ne.Z,{style:{width:"200px",height:"181.72px"},option:Be})})]})]})}),e!=null&&e.nowTranData?(0,t.jsx)(I.Z,{span:24,children:(0,t.jsxs)(C.Z,{children:[(0,t.jsx)("div",{style:{marginBottom:"10px"},children:(0,t.jsx)("span",{style:{fontSize:"18px",fontFamily:"sans-serif",fontWeight:"bold"},children:"\u8F66\u8F86\u73B0\u8FDB\u884C\u4E2D\u8FD0\u8F93\u6570\u636E"})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"35px"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"\u8FD0\u5355\u53F7\uFF1A"}),(0,t.jsx)("span",{children:(0,t.jsx)("a",{children:e==null||(D=e.nowTranData)===null||D===void 0?void 0:D.tranNum})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"\u53F8\u673A\u59D3\u540D\uFF1A"}),(0,t.jsx)("span",{children:(0,t.jsx)("a",{children:e==null||(y=e.nowTranData)===null||y===void 0?void 0:y.driverName})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{children:"\u5F00\u59CB\u65F6\u95F4\uFF1A"}),(0,t.jsx)("span",{children:e==null||(F=e.nowTranData)===null||F===void 0?void 0:F.startTime})]}),(0,t.jsx)("div",{children:(0,t.jsxs)(p.Z,{children:[(0,t.jsx)(f.Z,{children:"\u67E5\u770B\u8FD0\u6B21\u8BE6\u60C5"}),(0,t.jsx)(f.Z,{children:"\u67E5\u770B\u53F8\u673A\u8BE6\u60C5"})]})})]}),(0,t.jsx)(w.Z,{progress:_.data,current:_.current})]})]})}):"",(0,t.jsx)(I.Z,{span:24,children:(0,t.jsx)(R.Z,{title:"\u5386\u53F2\u8F66\u8BC1\u6570\u636E",columns:ae.dh,dataSource:e==null?void 0:e.historyList.map(function(r){return(0,m.Z)((0,m.Z)({},r),{},{operate:"\u67E5\u770B\u8BE6\u60C5"})}),rowKey:function(i){return i==null?void 0:i.tranId},isShowTitleButton:!1})}),(0,t.jsx)(le,{imageList:me,visible:fe,onCancel:function(){return X(!1)}}),(0,t.jsx)(oe.Z,{visible:Ce,resultData:e,visibleHide:function(){return U(!1)},spinning:je,handleOk:function(){var r=(0,g.Z)(o().mark(function i(l){var s;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return N(!0),a.next=3,(0,P.$N)(l);case 3:s=a.sent,s.success?(x.default.success(s.result),N(!1),U(!1)):(x.default.error(s.msg),N(!1));case 5:case"end":return a.stop()}},i)}));return function(i){return r.apply(this,arguments)}}()})]})},ce=de}}]);
