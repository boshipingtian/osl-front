(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4246,6498],{73915:function(J){J.exports={license:"license___3unvZ"}},13277:function(){},65737:function(J,U,e){"use strict";var j=e(58024),p=e(39144),A=e(14781),i=e(40308),l=e(8963),L=e(22809),k=e(57663),f=e(71577),O=e(49101),v=e(67294),r=e(85893),h=function(d){var c=d.title,g=d.columns,C=d.dataSource,E=d.titleButton,m=d.isShowTitleButton,I=m===void 0?!0:m,a=d.footerMore,u=d.onPageChange,y=d.onAddHandler,s=d.rowKey,o=d.loading,n=d.total,t=n===void 0?500:n;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(p.Z,{children:[(0,r.jsxs)("div",{className:"FullAddTableHeader",children:[(0,r.jsx)("span",{className:"title",children:c}),(0,r.jsx)("div",{children:I?(0,r.jsx)(f.Z,{type:"primary",icon:(0,r.jsx)(O.Z,{}),onClick:function(){return y(!0)},children:"\u6DFB\u52A0"}):E})]}),(0,r.jsx)(L.Z,{loading:o,rowKey:s,columns:g,pagination:!1,dataSource:C}),(0,r.jsxs)("div",{className:"FullAddTableFooter",children:[(0,r.jsx)("span",{children:a}),(0,r.jsx)(i.Z,{showQuickJumper:!0,defaultCurrent:1,total:t,onChange:function($,D){return u($,D)}})]})]})})};U.Z=h},58262:function(J,U,e){"use strict";var j=e(58024),p=e(39144),A=e(49111),i=e(19650),l=e(34792),L=e(48086),k=e(57663),f=e(71577),O=e(47673),v=e(50817),r=e(2824),h=e(43358),P=e(34041),d=e(67294),c=e(85893),g=P.Z.Option,C=function(m){var I=m.style,a=m.selectOption,u=a===void 0?[]:a,y=m.confirm,s=m.refresh,o=(0,d.useState)(""),n=(0,r.Z)(o,2),t=n[0],_=n[1],$=(0,d.useState)(""),D=(0,r.Z)($,2),T=D[0],H=D[1];function W(){H("")}return(0,c.jsx)(p.Z,{style:I,children:(0,c.jsxs)("div",{className:"CardSearchBar",children:[(0,c.jsxs)("div",{className:"SearchBarContainer",children:[(0,c.jsxs)("div",{className:"SearchBarItem",children:[(0,c.jsx)("span",{children:"\u5206\u7C7B\uFF1A"}),(0,c.jsx)(P.Z,{placeholder:"\u8BF7\u9009\u62E9",style:{width:150},onChange:function(x){return _(x)},children:u.map(function(B){return(0,c.jsx)(g,{value:B,children:B},B)})})]}),(0,c.jsxs)("div",{className:"SearchBarItem",children:[(0,c.jsx)("span",{children:"\u5173\u952E\u8BCD\uFF1A"}),(0,c.jsx)(v.Z,{placeholder:"\u8BF7\u8F93\u5165",style:{width:150},value:T,onChange:function(x){return H(x.target.value)}})]})]}),(0,c.jsx)("div",{children:(0,c.jsxs)(i.Z,{children:[(0,c.jsx)(f.Z,{onClick:function(){s(),W()},children:"\u91CD\u7F6E"}),(0,c.jsx)(f.Z,{type:"primary",onClick:function(){console.log(t,T),T&&t||t==="\u5DF2\u7ED1\u5B9A\u8F66\u8F86"||t==="\u672A\u7ED1\u5B9A\u8F66\u8F86"?y(t,T):L.default.error("\u8BF7\u586B\u5199\u5B8C\u6574")},children:"\u67E5\u8BE2"})]})})]})})};U.Z=C},6817:function(J,U,e){"use strict";var j=e(43185),p=e(98670),A=e(57663),i=e(71577),l=e(3182),L=e(2824),k=e(94043),f=e.n(k),O=e(67294),v=e(84391),r=e(85893),h=function(d){var c=d.title,g=d.maxCount,C=g===void 0?1:g,E=d.getFile,m=d.getImageUrl,I=(0,O.useState)([]),a=(0,L.Z)(I,2),u=a[0],y=a[1],s=(0,O.useState)(""),o=(0,L.Z)(s,2),n=o[0],t=o[1],_=(0,O.useState)(new File([],"",void 0)),$=(0,L.Z)(_,2),D=$[0],T=$[1];(0,O.useEffect)(function(){E&&E(D),m&&m(n)},[n,D]);var H=function(){var x=(0,l.Z)(f().mark(function K(b){var R,Z;return f().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:if(R=b.fileList,Z=b.file,y(R),!(R.length>0)){N.next=7;break}return N.next=5,W(R[0]);case 5:N.next=8;break;case 7:t("");case 8:T(Z);case 9:case"end":return N.stop()}},K)}));return function(b){return x.apply(this,arguments)}}(),W=function(){var x=(0,l.Z)(f().mark(function K(b){var R;return f().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,B(b.originFileObj);case 2:R=F.sent,t(R);case 4:case"end":return F.stop()}},K)}));return function(b){return x.apply(this,arguments)}}(),B=function(K){return new Promise(function(b,R){var Z=new FileReader;Z.readAsDataURL(K),Z.onload=function(){return b(Z.result)},Z.onerror=function(F){return R(F)}})};return(0,r.jsx)("div",{style:{margin:"10px 0px"},children:(0,r.jsx)(p.Z,{onChange:H,fileList:u,beforeUpload:function(){return!1},maxCount:C,children:(0,r.jsx)(i.Z,{icon:(0,r.jsx)(v.Z,{}),children:c})})})};U.Z=h},74614:function(J,U,e){"use strict";var j=e(71194),p=e(48889),A=e(20228),i=e(11382),l=e(49111),L=e(19650),k=e(57663),f=e(71577),O=e(9715),v=e(22712),r=e(47673),h=e(50817),P=e(11849),d=e(34792),c=e(48086),g=e(2824),C=e(67294),E=e(73915),m=e.n(E),I=e(6817),a=e(85893),u=function(s){var o=s.title,n=s.visible,t=s.onCancel,_=s.footer,$=_===void 0?null:_,D=s.loading,T=s.onOK,H=(0,C.useState)(new File([],"",void 0)),W=(0,g.Z)(H,2),B=W[0],x=W[1],K=(0,C.useState)(""),b=(0,g.Z)(K,2),R=b[0],Z=b[1],F=function(Y){if(B.size<=0){c.default.error("\u8BF7\u4E0A\u4F20\u8BC1\u4EF6");return}T((0,P.Z)((0,P.Z)({},Y),{},{file:B}))};return(0,a.jsx)(p.Z,{title:o,visible:n,onCancel:function(){return t()},footer:$,children:(0,a.jsx)(i.Z,{spinning:D,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:m().license,children:"\u8425\u4E1A\u6267\u7167"}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(I.Z,{maxCount:1,title:"\u4E0A\u4F20\u56FE\u7247",getFile:function(Y){return x(Y)},getImageUrl:function(Y){return Z(Y)}}),(0,a.jsx)("img",{style:{width:"180px",height:"180px"},src:R,alt:""})]}),(0,a.jsxs)(v.Z,{layout:"vertical",onFinish:F,autoComplete:"off",children:[(0,a.jsx)(v.Z.Item,{label:"\u4F01\u4E1A\u540D\u79F0",name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0"}],children:(0,a.jsx)(h.Z,{placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0"})}),(0,a.jsx)(v.Z.Item,{label:"\u516C\u53F8\u8D1F\u8D23\u4EBA",name:"holder",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u516C\u53F8\u8D1F\u8D23\u4EBA"}],children:(0,a.jsx)(h.Z,{placeholder:"\u8BF7\u8F93\u5165\u516C\u53F8\u8D1F\u8D23\u4EBA"})}),(0,a.jsx)(v.Z.Item,{label:"\u8D1F\u8D23\u4EBA\u8054\u7CFB\u65B9\u5F0F",name:"phone",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u8054\u7CFB\u65B9\u5F0F"}],children:(0,a.jsx)(h.Z,{placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA\u8054\u7CFB\u65B9\u5F0F"})}),(0,a.jsx)(v.Z.Item,{label:"\u4F01\u4E1A\u5730\u5740",name:"address",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u5730\u5740"}],children:(0,a.jsx)(h.Z,{placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u5730\u5740"})}),(0,a.jsx)(v.Z.Item,{label:"\u56FD\u5BB6",name:"country",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u56FD\u5BB6"}],children:(0,a.jsx)(h.Z,{placeholder:"\u8BF7\u8F93\u5165\u56FD\u5BB6"})}),(0,a.jsx)("div",{style:{display:"flex",flexDirection:"row-reverse"},children:(0,a.jsxs)(L.Z,{children:[(0,a.jsx)(f.Z,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"}),(0,a.jsx)(f.Z,{htmlType:"reset",onClick:function(){return t()},children:"\u53D6\u6D88"})]})})]})]})})})};U.Z=u},7218:function(J,U,e){"use strict";e.r(U);var j=e(34792),p=e(48086),A=e(11849),i=e(3182),l=e(2824),L=e(94043),k=e.n(L),f=e(67294),O=e(58262),v=e(65737),r=e(65523),h=e(15423),P=e(74614),d=e(85893),c=function(){var C=(0,f.useState)([]),E=(0,l.Z)(C,2),m=E[0],I=E[1],a=(0,f.useState)(0),u=(0,l.Z)(a,2),y=u[0],s=u[1],o=(0,f.useState)(1),n=(0,l.Z)(o,2),t=n[0],_=n[1],$=(0,f.useState)(10),D=(0,l.Z)($,2),T=D[0],H=D[1],W=(0,f.useState)(""),B=(0,l.Z)(W,2),x=B[0],K=B[1],b=(0,f.useState)(""),R=(0,l.Z)(b,2),Z=R[0],F=R[1],N=(0,f.useState)(!1),Y=(0,l.Z)(N,2),ae=Y[0],w=Y[1],oe=(0,f.useState)(!1),Q=(0,l.Z)(oe,2),ie=Q[0],re=Q[1];(0,f.useEffect)((0,i.Z)(k().mark(function z(){return k().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,se(t,T,x,Z);case 2:case"end":return M.stop()}},z)})),[t,T,x,Z]);var se=function(){var z=(0,i.Z)(k().mark(function S(M,q,V,X){var G;return k().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return w(!0),ee.next=3,(0,h.FP)({name:V==="name"?X:"",phone:V==="phone"?X:"",address:V==="address"?X:"",holder:V==="holder"?X:"",country:V==="country"?X:"",pageSize:q,currentPage:M});case 3:G=ee.sent,console.log(G),G!=null&&G.pageData?(I(G==null?void 0:G.pageData.map(function(ne){return(0,A.Z)((0,A.Z)({},ne),{},{operate:"\u67E5\u770B\u8BE6\u60C5"})})),s(G.totalCount),w(!1)):(p.default.error("\u83B7\u53D6\u6570\u636E\u5F02\u5E38"),w(!1));case 6:case"end":return ee.stop()}},S)}));return function(M,q,V,X){return z.apply(this,arguments)}}(),le={\u4F01\u4E1A\u540D\u79F0:"name",\u56FD\u5BB6:"country",\u5730\u533A:"address",\u8D1F\u8D23\u4EBA:"holder",\u8054\u7CFB\u65B9\u5F0F:"phone"},de=function(){var z=(0,i.Z)(k().mark(function S(M){var q,V,X,G,ue,ee,ne;return k().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return q=M.name,V=M.phone,X=M.address,G=M.holder,ue=M.country,ee=M.file,w(!0),te.next=4,(0,h.wj)({name:q,phone:V,address:X,holder:G,country:ue,file:ee});case 4:if(ne=te.sent,ne.code!==200){te.next=13;break}return p.default.success(ne.msg),w(!1),re(!1),te.next=11,se(t,T,x,Z);case 11:te.next=15;break;case 13:p.default.error(ne.msg),w(!1);case 15:case"end":return te.stop()}},S)}));return function(M){return z.apply(this,arguments)}}();return(0,d.jsxs)("div",{children:[(0,d.jsx)(O.Z,{style:{marginBottom:"20px"},confirm:function(S,M){K(le[S]),F(M)},refresh:function(){F("")},selectOption:r.mI}),(0,d.jsx)(v.Z,{columns:r.sP,title:"\u7269\u6D41\u4F01\u4E1A\u5217\u8868",loading:ae,rowKey:function(S){return S.id},onPageChange:function(S,M){H(M),_(S)},dataSource:m,total:y}),(0,d.jsx)(P.Z,{visible:ie,loading:ae,title:"\u6DFB\u52A0\u4F01\u4E1A",onCancel:function(){return re(!1)},onOK:function(S){return de(S)}})]})};U.default=c},65523:function(J,U,e){"use strict";e.d(U,{pv:function(){return L},qW:function(){return k},KT:function(){return f},sP:function(){return O},mI:function(){return v},DL:function(){return r},Fj:function(){return h},FY:function(){return P},cm:function(){return d},dh:function(){return c},x1:function(){return g},pC:function(){return C},kz:function(){return E},Zu:function(){return m},z0:function(){return I},j2:function(){return a},sw:function(){return u},c4:function(){return y},_j:function(){return s}});var j=e(71153),p=e(60331),A=e(67294),i=e(86353),l=e(85893),L=[{title:"\u4F01\u4E1A\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u56FD\u5BB6",dataIndex:"country",key:"country"},{title:"\u5730\u533A",dataIndex:"address",key:"address"},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"holder",key:"holder"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"phone",key:"phone"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,t){return(0,l.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){i.m8.push({pathname:"/platform-monitor/enterprise-monitor/trading-enterprise/detail",query:{companyId:t.id,name:t.name}})},children:n})}}],k=["\u4F01\u4E1A\u540D\u79F0","\u56FD\u5BB6","\u5730\u533A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"],f=[{title:"\u8FD0\u5355\u53F7",dataIndex:"identification",key:"identification"},{title:"\u65F6\u95F4",dataIndex:"createTime",key:"createTime"},{title:"\u5408\u4F5C\u4F01\u4E1A",dataIndex:"contractualCompanyName",key:"contractualCompanyName"},{title:"\u5408\u4F5C\u4F01\u4E1A\u8D1F\u8D23\u4EBA",dataIndex:"contractualCompanyOwner",key:"contractualCompanyOwner"},{title:"\u5408\u4F5C\u4F01\u4E1A\u8054\u7CFB\u65B9\u5F0F",dataIndex:"contractualCompanyMobile",key:"contractualCompanyMobile"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,t){return(0,l.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){i.m8.push({pathname:"/platform-monitor/enterprise-monitor/trading-enterprise/detail",query:{companyId:t.id,name:t.name}})},children:n})}}],O=[{title:"id",dataIndex:"id",key:"id"},{title:"\u4F01\u4E1A\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u56FD\u5BB6",dataIndex:"country",key:"country"},{title:"\u5730\u533A",dataIndex:"address",key:"address"},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"holder",key:"holder"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"phone",key:"phone"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,t){return(0,l.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){i.m8.push({pathname:"/platform-monitor/enterprise-monitor/logistics-enterprise/detail",query:{id:t.id}})},children:n})}}],v=["\u4F01\u4E1A\u540D\u79F0","\u56FD\u5BB6","\u5730\u533A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"],r=[{title:"\u8FD0\u5355\u53F7",dataIndex:"tranIdentification",key:"tranIdentification"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime"},{title:"\u7ED1\u5B9A\u8BA2\u5355\u53F7",dataIndex:"bindOrderIdentification",key:"bindOrderIdentification"},{title:"\u7ED1\u5B9A\u65F6\u95F4",dataIndex:"updateTime",key:"updateTime"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,t){return(0,l.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){i.m8.push({pathname:"/platform-monitor/business-monitor/waybill/detail",query:{id:t.tranIdentification}})},children:n})}}],h=[{title:"\u8F66\u724C\u53F7",dataIndex:"carNum",key:"carNum"},{title:"\u6CE8\u518C\u65F6\u95F4",dataIndex:"createTime",key:"createTime"},{title:"\u8F66\u8F86\u72B6\u6001",dataIndex:"carState",key:"carState",render:function(n){return(0,l.jsx)(p.Z,{color:"red",children:n})}},{title:"\u67E5\u770B\u8F66\u8F86\u8BE6\u60C5",dataIndex:"viewCarInfo",key:"viewCarInfo",render:function(n,t){return(0,l.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){i.m8.push({pathname:"/platform-monitor/enterprise-monitor/logistics-enterprise/detail",query:{id:t==null?void 0:t.carNum}})},children:n})}},{title:"\u8F66\u8BC1\u4FE1\u606F",dataIndex:"viewCarLicenseInfo",key:"viewCarLicenseInfo",render:function(n,t){return(0,l.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){i.m8.push({pathname:"/platform-monitor/enterprise-monitor/logistics-enterprise/detail",query:{id:t==null?void 0:t.carNum}})},children:n})}},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,t){return(0,l.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){i.m8.push({pathname:"/platform-monitor/enterprise-monitor/logistics-enterprise/detail",query:{id:t==null?void 0:t.carNum}})},children:n})}}],P=[{title:"id",dataIndex:"carId",key:"carId",hideInTable:!0},{title:"\u8F66\u724C\u53F7",dataIndex:"license",key:"license"},{title:"\u6240\u5C5E\u7269\u6D41\u4F01\u4E1A",dataIndex:"company",key:"company"},{title:"\u4F01\u4E1A\u8D1F\u8D23\u4EBA",dataIndex:"driverName",key:"driverName"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"driverPhone",key:"driverPhone"},{title:"\u7ED1\u5B9A\u8BA2\u5355\u72B6\u6001",dataIndex:"contractStatus",key:"contractStatus",render:function(n){return n?(0,l.jsx)(p.Z,{color:"green",children:"\u5DF2\u7ED1\u5B9A"}):(0,l.jsx)(p.Z,{color:"red",children:"\u672A\u7ED1\u5B9A"})}},{title:"\u8FD0\u8F93\u72B6\u6001",dataIndex:"traning",key:"traning",render:function(n){return n?(0,l.jsx)(p.Z,{color:"green",children:"\u8FD0\u8F93\u4E2D"}):(0,l.jsx)(p.Z,{color:"red",children:"\u7A7A\u95F2\u4E2D"})}},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,t){return(0,l.jsx)("a",{onClick:function(){console.log(t.carId),i.m8.push({pathname:"/platform-monitor/transportation-management/vehicle/detail",query:{carId:t.carId}})},children:n})}}],d=["\u5173\u8054\u53F8\u673A","\u6240\u5C5E\u8FD0\u5355","\u6240\u5C5E\u8BA2\u5355","\u7269\u6D41\u516C\u53F8","\u8FD0\u6B21"],c=[{title:"\u8FD0\u6B21id",dataIndex:"tranId",key:"tranId",hideInTable:!0},{title:"\u65F6\u95F4",dataIndex:"finishTime",key:"finishTime"},{title:"\u8BA2\u5355\u53F7",dataIndex:"orderNum",key:"orderNum"},{title:"\u7269\u6D41\u4F01\u4E1A",dataIndex:"company",key:"company"},{title:"\u8FD0\u5355\u53F7",dataIndex:"tranNum",key:"tranNum"},{title:"\u53F8\u673A\u540D\u79F0",dataIndex:"driverName",key:"driverName"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"driverPhone",key:"driverPhone"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,t){return(0,l.jsx)("a",{onClick:function(){i.m8.push({pathname:"/history-data/history-transportation/trans-times",query:{transId:t.tranId}})},children:n})}}],g=[{title:"\u53F8\u673Aid",dataIndex:"driverId",key:"driverId",hideInTable:!0},{title:"\u53F8\u673A\u59D3\u540D",dataIndex:"driverName",key:"driverName"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"phone",key:"phone"},{title:"\u62A5\u8B66\u6B21\u6570",dataIndex:"region",key:"region"},{title:"\u8FD0\u6B21",dataIndex:"leader",key:"leader"},{title:"\u516C\u91CC\u6570",dataIndex:"contact",key:"contact"},{title:"\u7ED1\u5B9A\u8F66\u8F86\u6570",dataIndex:"contact1",key:"contact1"},{title:"\u662F\u5426\u7ED1\u5B9A\u8F66\u8F86",dataIndex:"linkCar",key:"linkCar",render:function(n){return n?(0,l.jsx)(p.Z,{color:"blue",children:"\u5DF2\u7ED1\u5B9A"}):(0,l.jsx)(p.Z,{color:"red",children:"\u672A\u7ED1\u5B9A"})}},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,t){return(0,l.jsx)("a",{onClick:function(){i.m8.push({pathname:"/platform-monitor/transportation-management/driver/detail",query:{driverId:t.driverId}})},children:n})}}],C=["\u59D3\u540D","\u5DF2\u7ED1\u5B9A\u8F66\u8F86","\u672A\u7ED1\u5B9A\u8F66\u8F86","\u9A7E\u9A76\u8BC1\u7C7B\u578B"],E=[{title:"\u8FD0\u6B21 id",dataIndex:"tranId",key:"tranId"},{title:"\u65F6\u95F4",dataIndex:"finishTime",key:"finishTime"},{title:"\u8F66\u724C\u53F7",dataIndex:"carNumber",key:"carNumber"},{title:"\u7ED1\u5B9A\u8BA2\u5355\u53F7",dataIndex:"orderNum",key:"orderNum"},{title:"\u7ED1\u5B9A\u8FD0\u5355\u53F7",dataIndex:"tranNum",key:"tranNum"},{title:"\u7269\u6D41\u4F01\u4E1A",dataIndex:"company",key:"company"},{title:"\u72B6\u6001",dataIndex:"tranStatus",key:"tranStatus",render:function(n){return(0,l.jsx)(p.Z,{color:"blue",children:n})}},{title:"\u662F\u5426\u62A5\u8B66",dataIndex:"alarm",key:"alarm",render:function(n){return n?(0,l.jsx)(p.Z,{color:"green",children:"\u672A\u62A5\u8B66"}):(0,l.jsx)(p.Z,{color:"red",children:"\u5DF2\u62A5\u8B66"})}},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,t){return(0,l.jsx)("a",{onClick:function(){i.m8.push({pathname:"/history-data/history-transportation/trans-times",query:{transId:t.tranId}})},children:n})}}],m=[{title:"\u8FD0\u6B21 id",dataIndex:"tranId",key:"tranId"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"startTime",key:"startTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"finishTime",key:"finishTime"},{title:"\u8FD0\u5355\u53F7",dataIndex:"tranNum",key:"tranNum"},{title:"\u4E70\u65B9\u4F01\u4E1A",dataIndex:"buyCompany",key:"buyCompany"},{title:"\u5356\u65B9\u4F01\u4E1A",dataIndex:"saleCompany",key:"saleCompany"},{title:"\u7ED1\u5B9A\u8F66\u724C\u53F7",dataIndex:"license",key:"license"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,t){return(0,l.jsx)("a",{onClick:function(){i.m8.push({pathname:"/history-data/history-transportation/trans-times",query:{transId:t.tranId}})},children:n})}}],I=[{title:"\u8BA2\u5355\u53F7",dataIndex:"orderId",key:"orderId"},{title:"\u4E70\u65B9\u4F01\u4E1A",dataIndex:"companyA",key:"companyA"},{title:"\u4E70\u65B9\u4F01\u4E1A\u8D1F\u8D23\u4EBA",dataIndex:"holderA",key:"holderA"},{title:"\u5356\u65B9\u4F01\u4E1A",dataIndex:"companyB",key:"companyB"},{title:"\u5356\u65B9\u4F01\u4E1A\u8D1F\u8D23\u4EBA",dataIndex:"holderB",key:"holderB"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,t){return(0,l.jsx)("a",{onClick:function(){i.m8.push({pathname:"/platform-monitor/business-monitor/order/detail",query:{orderId:t.orderId}})},children:n})}}],a=["\u8BA2\u5355\u53F7","\u5356\u65B9\u4F01\u4E1A","\u5356\u65B9\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"],u=[{title:"\u8FD0\u5355\u53F7",dataIndex:"tranId",key:"tranId"},{title:"\u516C\u53F8",dataIndex:"name",key:"name"},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"holder",key:"holder"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"phone",key:"phone"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,t){return(0,l.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){i.m8.push({pathname:"/platform-monitor/business-monitor/waybill/detail",query:{transId:t.tranId}})},children:n})}}],y=[{title:"\u7EA7\u522B",data:["\u8FD0\u5355\u53F7","\u4F01\u4E1A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"]},{title:"\u6027\u8D28",data:["\u8FD0\u5355\u53F7","\u4F01\u4E1A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"]},{title:"\u7BA1\u8F96\u8303\u56F4",data:["\u8FD0\u5355\u53F7","\u4F01\u4E1A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"]}],s=[{title:"\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u7EA7\u522B",dataIndex:"rank",key:"rank"},{title:"\u6743\u9650",dataIndex:"limits",key:"limits"},{title:"\u6027\u8D28",dataIndex:"administration",key:"administration"},{title:"\u7BA1\u7406\u5458",dataIndex:"createTime",key:"createTime"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"holderMobile",key:"holderMobile"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,t){return(0,l.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){i.m8.push({pathname:"/platform-monitor/audit-monitor/detail",query:{account:t.account}})},children:n})}}]},15423:function(J,U,e){"use strict";e.d(U,{FP:function(){return l},wj:function(){return L},D4:function(){return f}});var j=e(3182),p=e(94043),A=e.n(p),i=e(636),l=function(){var O=(0,j.Z)(A().mark(function v(r){var h,P,d,c,g,C,E;return A().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return h=r.name,P=r.phone,d=r.address,c=r.holder,g=r.country,C=r.currentPage,E=r.pageSize,I.abrupt("return",(0,i.Z)("/user/logistics/selectByCondition",{method:"POST",requestType:"form",data:{name:h,phone:P,address:d,holder:c,country:g,currentPage:C,pageSize:E}}));case 2:case"end":return I.stop()}},v)}));return function(r){return O.apply(this,arguments)}}(),L=function(){var O=(0,j.Z)(A().mark(function v(r){var h,P,d,c,g,C,E;return A().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return h=r.name,P=r.phone,d=r.address,c=r.holder,g=r.country,C=r.file,E=new FormData,E.append("name",h),E.append("phone",P),E.append("address",d),E.append("holder",c),E.append("country",g),E.append("file",C),I.abrupt("return",(0,i.Z)("/user/logistics/add",{method:"POST",requestType:"form",data:E}));case 9:case"end":return I.stop()}},v)}));return function(r){return O.apply(this,arguments)}}(),k=function(v){var r=v.id;return request("/user/logistics/getOneInfo",{method:"POST",requestType:"json",data:{id:r}})},f=function(){var O=(0,j.Z)(A().mark(function v(r){var h,P,d,c,g,C,E,m;return A().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return h=r.id,P=r.name,d=r.phone,c=r.address,g=r.holder,C=r.country,E=r.file,m=new FormData,m.append("id",h),m.append("name",P),m.append("phone",d),m.append("address",c),m.append("holder",g),m.append("country",C),m.append("file",E),a.abrupt("return",(0,i.Z)("/user/logistics/update",{method:"POST",requestType:"form",data:m}));case 10:case"end":return a.stop()}},v)}));return function(r){return O.apply(this,arguments)}}()},60331:function(J,U,e){"use strict";e.d(U,{Z:function(){return I}});var j=e(96156),p=e(22122),A=e(28481),i=e(67294),l=e(94184),L=e.n(l),k=e(98423),f=e(54549),O=e(65632),v=function(a,u){var y={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&u.indexOf(s)<0&&(y[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(a);o<s.length;o++)u.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(a,s[o])&&(y[s[o]]=a[s[o]]);return y},r=function(u){var y,s=u.prefixCls,o=u.className,n=u.checked,t=u.onChange,_=u.onClick,$=v(u,["prefixCls","className","checked","onChange","onClick"]),D=i.useContext(O.E_),T=D.getPrefixCls,H=function(K){t==null||t(!n),_==null||_(K)},W=T("tag",s),B=L()(W,(y={},(0,j.Z)(y,"".concat(W,"-checkable"),!0),(0,j.Z)(y,"".concat(W,"-checkable-checked"),n),y),o);return i.createElement("span",(0,p.Z)({},$,{className:B,onClick:H}))},h=r,P=e(98787),d=e(21790),c=function(a,u){var y={};for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&u.indexOf(s)<0&&(y[s]=a[s]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(a);o<s.length;o++)u.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(a,s[o])&&(y[s[o]]=a[s[o]]);return y},g=new RegExp("^(".concat(P.Y.join("|"),")(-inverse)?$")),C=new RegExp("^(".concat(P.E.join("|"),")$")),E=function(u,y){var s,o=u.prefixCls,n=u.className,t=u.style,_=u.children,$=u.icon,D=u.color,T=u.onClose,H=u.closeIcon,W=u.closable,B=W===void 0?!1:W,x=c(u,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),K=i.useContext(O.E_),b=K.getPrefixCls,R=K.direction,Z=i.useState(!0),F=(0,A.Z)(Z,2),N=F[0],Y=F[1];i.useEffect(function(){"visible"in x&&Y(x.visible)},[x.visible]);var ae=function(){return D?g.test(D)||C.test(D):!1},w=(0,p.Z)({backgroundColor:D&&!ae()?D:void 0},t),oe=ae(),Q=b("tag",o),ie=L()(Q,(s={},(0,j.Z)(s,"".concat(Q,"-").concat(D),oe),(0,j.Z)(s,"".concat(Q,"-has-color"),D&&!oe),(0,j.Z)(s,"".concat(Q,"-hidden"),!N),(0,j.Z)(s,"".concat(Q,"-rtl"),R==="rtl"),s),n),re=function(V){V.stopPropagation(),T==null||T(V),!V.defaultPrevented&&("visible"in x||Y(!1))},se=function(){return B?H?i.createElement("span",{className:"".concat(Q,"-close-icon"),onClick:re},H):i.createElement(f.Z,{className:"".concat(Q,"-close-icon"),onClick:re}):null},le="onClick"in x||_&&_.type==="a",de=(0,k.Z)(x,["visible"]),z=$||null,S=z?i.createElement(i.Fragment,null,z,i.createElement("span",null,_)):_,M=i.createElement("span",(0,p.Z)({},de,{ref:y,className:ie,style:w}),S,se());return le?i.createElement(d.Z,null,M):M},m=i.forwardRef(E);m.displayName="Tag",m.CheckableTag=h;var I=m},71153:function(J,U,e){"use strict";var j=e(38663),p=e.n(j),A=e(13277),i=e.n(A)}}]);
