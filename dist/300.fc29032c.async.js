(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[300],{65737:function(N,T,r){"use strict";var g=r(58024),c=r(91894),E=r(14781),p=r(23492),i=r(8963),f=r(42020),j=r(57663),x=r(71577),y=r(49101),_=r(67294),o=r(85893),d=function(t){var s=t.title,l=t.columns,B=t.dataSource,Z=t.titleButton,W=t.isShowTitleButton,L=W===void 0?!0:W,U=t.footerMore,m=t.onPageChange,R=t.onAddHandler,P=t.rowKey,u=t.loading,n=t.total,a=n===void 0?500:n;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(c.Z,{children:[(0,o.jsxs)("div",{className:"FullAddTableHeader",children:[(0,o.jsx)("span",{className:"title",children:s}),(0,o.jsx)("div",{children:L?(0,o.jsx)(x.Z,{type:"primary",icon:(0,o.jsx)(y.Z,{}),onClick:function(){return R(!0)},children:"\u6DFB\u52A0"}):Z})]}),(0,o.jsx)(f.Z,{loading:u,rowKey:P,columns:l,pagination:!1,dataSource:B}),(0,o.jsxs)("div",{className:"FullAddTableFooter",children:[(0,o.jsx)("span",{children:U}),(0,o.jsx)(p.Z,{showQuickJumper:!0,defaultCurrent:1,total:a,onChange:function(S,K){return m(S,K)}})]})]})})};T.Z=d},6817:function(N,T,r){"use strict";var g=r(43185),c=r(98670),E=r(57663),p=r(71577),i=r(39428),f=r(3182),j=r(2824),x=r(67294),y=r(84391),_=r(85893),o=function(e){var t=e.title,s=e.maxCount,l=s===void 0?1:s,B=e.getFile,Z=e.getImageUrl,W=(0,x.useState)([]),L=(0,j.Z)(W,2),U=L[0],m=L[1],R=(0,x.useState)(""),P=(0,j.Z)(R,2),u=P[0],n=P[1],a=(0,x.useState)(new File([],"",void 0)),h=(0,j.Z)(a,2),S=h[0],K=h[1];(0,x.useEffect)(function(){B&&B(S),Z&&Z(u)},[u,S]);var V=function(){var A=(0,f.Z)((0,i.Z)().mark(function F(D){var v,k;return(0,i.Z)().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(v=D.fileList,k=D.file,m(v),!(v.length>0)){M.next=7;break}return M.next=5,w(v[0]);case 5:M.next=8;break;case 7:n("");case 8:K(k);case 9:case"end":return M.stop()}},F)}));return function(D){return A.apply(this,arguments)}}(),w=function(){var A=(0,f.Z)((0,i.Z)().mark(function F(D){var v;return(0,i.Z)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,b(D.originFileObj);case 2:v=O.sent,n(v);case 4:case"end":return O.stop()}},F)}));return function(D){return A.apply(this,arguments)}}(),b=function(F){return new Promise(function(D,v){var k=new FileReader;k.readAsDataURL(F),k.onload=function(){return D(k.result)},k.onerror=function(O){return v(O)}})};return(0,_.jsx)("div",{style:{margin:"10px 0px"},children:(0,_.jsx)(c.Z,{onChange:V,fileList:U,beforeUpload:function(){return!1},maxCount:l,children:(0,_.jsx)(p.Z,{icon:(0,_.jsx)(y.Z,{}),children:t})})})};T.Z=o},81223:function(N,T,r){"use strict";var g=r(71194),c=r(48889),E=r(20228),p=r(11382),i=r(47673),f=r(29730),j=r(34792),x=r(48086),y=r(2824),_=r(67294),o=r(53587),d=r(6817),e=r(85893),t=function(l){var B=l.title,Z=l.visible,W=l.handleOk,L=l.visibleHide,U=l.spinning,m=l.resultData,R=(0,_.useState)(""),P=(0,y.Z)(R,2),u=P[0],n=P[1],a=(0,_.useState)(""),h=(0,y.Z)(a,2),S=h[0],K=h[1],V=(0,_.useState)(""),w=(0,y.Z)(V,2),b=w[0],A=w[1],F=(0,_.useState)(""),D=(0,y.Z)(F,2),v=D[0],k=D[1],O=(0,_.useState)(""),M=(0,y.Z)(O,2),z=M[0],Q=M[1],ie=(0,_.useState)(new File([],"",void 0)),X=(0,y.Z)(ie,2),Y=X[0],oe=X[1],le=(0,_.useState)(""),q=(0,y.Z)(le,2),ee=q[0],de=q[1],ue=(0,_.useState)(new File([],"",void 0)),te=(0,y.Z)(ue,2),$=te[0],se=te[1],ce=(0,_.useState)(new File([],"",void 0)),ne=(0,y.Z)(ce,2),H=ne[0],me=ne[1],pe=(0,_.useState)(new File([],"",void 0)),re=(0,y.Z)(pe,2),G=re[0],_e=re[1],he=(0,_.useState)(new File([],"",void 0)),ae=(0,y.Z)(he,2),J=ae[0],Ie=ae[1];return(0,_.useEffect)(function(){console.log("VehicleModal",m),m&&(n(m==null?void 0:m.license),K(m==null?void 0:m.carType),k(m==null?void 0:m.carWeight),A(m==null?void 0:m.carLegalWeight),Q(m==null?void 0:m.company))},[m]),(0,e.jsx)(c.Z,{title:B,visible:Z,onOk:function(){if(!u||!S||!b||!v||!z||!Y.size||!$.size||!H.size||!G.size||!J.size){x.default.error("\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F");return}W({license:u,carType:S,carLegalWeight:b,carWeight:v,company:z,carDrivingImg:Y,carImage1:$,carImage2:H,carImage3:G,carImage4:J})},onCancel:function(){L()},children:(0,e.jsx)(p.Z,{tip:"Loading...",spinning:U,children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"20px 0px 0px"},children:[(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{style:{marginBottom:"25px"},children:[(0,e.jsx)("div",{style:{marginBottom:"10px",fontSize:"14px"},children:"\u8F66\u724C\u53F7"}),(0,e.jsx)(f.Z,{placeholder:"\u8BF7\u8F93\u5165\u8F66\u724C\u53F7",value:u,onChange:function(I){return n(I.target.value)}})]}),(0,e.jsxs)("div",{style:{marginBottom:"25px"},children:[(0,e.jsx)("div",{style:{marginBottom:"10px",fontSize:"14px"},children:"\u8F66\u8F86\u578B\u53F7"}),(0,e.jsx)(f.Z,{placeholder:"\u8BF7\u8F93\u5165\u8F66\u8F86\u578B\u53F7",value:S,onChange:function(I){return K(I.target.value)}})]}),(0,e.jsxs)("div",{style:{marginBottom:"25px"},children:[(0,e.jsx)("div",{style:{marginBottom:"10px",fontSize:"14px"},children:"\u8377\u8F7D\u91CD\u91CF"}),(0,e.jsx)(f.Z,{placeholder:"\u8BF7\u8F93\u5165\u8377\u8F7D\u91CD\u91CF",value:b,onChange:function(I){return A(I.target.value)}})]}),(0,e.jsxs)("div",{style:{marginBottom:"25px"},children:[(0,e.jsx)("div",{style:{marginBottom:"10px",fontSize:"14px"},children:"\u8F66\u8F86\u81EA\u91CD"}),(0,e.jsx)(f.Z,{placeholder:"\u8BF7\u8F93\u5165\u8F66\u8F86\u81EA\u91CD",value:v,onChange:function(I){return k(I.target.value)}})]}),(0,e.jsxs)("div",{style:{marginBottom:"25px"},children:[(0,e.jsx)("div",{style:{marginBottom:"10px",fontSize:"14px"},children:"\u6240\u5C5E\u7269\u6D41\u4F01\u4E1A"}),(0,e.jsx)(f.Z,{placeholder:"\u8BF7\u8F93\u5165\u6240\u5C5E\u7269\u6D41\u4F01\u4E1A",value:z,onChange:function(I){return Q(I.target.value)}})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{marginBottom:"25px"},children:(0,e.jsx)("div",{style:{marginBottom:"10px",fontSize:"14px"},children:"\u8F66\u8F86\u884C\u9A76\u8BC1"})}),(0,e.jsxs)("div",{style:{overflow:"hidden",width:"150px"},children:[(0,e.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"150px",height:"150px",borderRadius:"20px",overflow:"hidden",border:"1px solid #e8e8e8"},children:ee?(0,e.jsx)("img",{src:ee,style:{objectFit:"cover",height:"100%"}}):(0,e.jsx)(o.Z,{style:{fontSize:"50px",color:"#9d9d9d"}})}),(0,e.jsx)(d.Z,{title:"\u8F66\u8F86\u884C\u9A76\u8BC1",getFile:function(I){return oe(I)},getImageUrl:function(I){return de(I)}})]}),(0,e.jsx)("div",{style:{marginBottom:"10px",marginTop:"20px"},children:(0,e.jsx)("div",{style:{marginBottom:"10px",fontSize:"14px"},children:"\u8F66\u8F86\u56DB\u89D2\u7167\u7247"})}),(0,e.jsx)(d.Z,{title:"\u5DE6\u524D\u7167\u7247",getFile:function(I){return se(I)},setImgFile:$}),(0,e.jsx)(d.Z,{title:"\u53F3\u524D\u7167\u7247",getFile:function(I){return me(I)},setImgFile:H}),(0,e.jsx)(d.Z,{title:"\u5DE6\u540E\u7167\u7247",getFile:function(I){return _e(I)},setImgFile:G}),(0,e.jsx)(d.Z,{title:"\u53F3\u540E\u7167\u7247",getFile:function(I){return Ie(I)},setImgFile:J})]})]})})})};T.Z=t},65523:function(N,T,r){"use strict";r.d(T,{pv:function(){return f},qW:function(){return j},KT:function(){return x},sP:function(){return y},mI:function(){return _},DL:function(){return o},Fj:function(){return d},FY:function(){return e},cm:function(){return t},dh:function(){return s},x1:function(){return l},pC:function(){return B},kz:function(){return Z},z0:function(){return L},j2:function(){return U},sw:function(){return m},c4:function(){return R},_j:function(){return P}});var g=r(71153),c=r(60331),E=r(67294),p=r(86353),i=r(85893),f=[{title:"\u4F01\u4E1A\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"holder",key:"holder"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"phone",key:"phone"},{title:"\u7EA7\u522B",dataIndex:"level",key:"level"},{title:"\u56FD\u5BB6",dataIndex:"country",key:"country"},{title:"\u5730\u533A",dataIndex:"address",key:"address"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,a){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){p.m8.push({pathname:"/platform-monitor/enterprise-monitor/trading-enterprise/detail",query:{companyId:a.id,name:a.name}})},children:n})}}],j=["\u4F01\u4E1A\u540D\u79F0","\u56FD\u5BB6","\u5730\u533A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"],x=[{title:"\u8FD0\u5355\u53F7",dataIndex:"identification",key:"identification"},{title:"\u65F6\u95F4",dataIndex:"createTime",key:"createTime"},{title:"\u5408\u4F5C\u4F01\u4E1A",dataIndex:"contractualCompanyName",key:"contractualCompanyName"},{title:"\u5408\u4F5C\u4F01\u4E1A\u8D1F\u8D23\u4EBA",dataIndex:"contractualCompanyOwner",key:"contractualCompanyOwner"},{title:"\u5408\u4F5C\u4F01\u4E1A\u8054\u7CFB\u65B9\u5F0F",dataIndex:"contractualCompanyMobile",key:"contractualCompanyMobile"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,a){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){p.m8.push({pathname:"/platform-monitor/enterprise-monitor/trading-enterprise/detail",query:{companyId:a.id,name:a.name}})},children:n})}}],y=[{title:"\u4F01\u4E1A\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"holder",key:"holder"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"phone",key:"phone"},{title:"\u7EA7\u522B",dataIndex:"level",key:"level"},{title:"\u56FD\u5BB6",dataIndex:"country",key:"country"},{title:"\u5730\u533A",dataIndex:"address",key:"address"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,a){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){p.m8.push({pathname:"/platform-monitor/enterprise-monitor/logistics-enterprise/detail",query:{id:a.id}})},children:n})}}],_=["\u4F01\u4E1A\u540D\u79F0","\u56FD\u5BB6","\u5730\u533A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"],o=[{title:"\u8FD0\u5355\u53F7",dataIndex:"tranIdentification",key:"tranIdentification"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime"},{title:"\u7ED1\u5B9A\u8BA2\u5355\u53F7",dataIndex:"bindOrderIdentification",key:"bindOrderIdentification"},{title:"\u7ED1\u5B9A\u65F6\u95F4",dataIndex:"updateTime",key:"updateTime"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,a){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){p.m8.push({pathname:"/platform-monitor/business-monitor/waybill/detail",query:{id:a.tranIdentification}})},children:n})}}],d=[{title:"\u8F66\u724C\u53F7",dataIndex:"carNum",key:"carNum"},{title:"\u6CE8\u518C\u65F6\u95F4",dataIndex:"createTime",key:"createTime"},{title:"\u8F66\u8F86\u72B6\u6001",dataIndex:"carState",key:"carState",render:function(n){return(0,i.jsx)(c.Z,{color:"red",children:n})}},{title:"\u67E5\u770B\u8F66\u8F86\u8BE6\u60C5",dataIndex:"viewCarInfo",key:"viewCarInfo",render:function(n,a){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){p.m8.push({pathname:"/platform-monitor/enterprise-monitor/logistics-enterprise/detail",query:{id:a==null?void 0:a.carNum}})},children:n})}},{title:"\u8F66\u8BC1\u4FE1\u606F",dataIndex:"viewCarLicenseInfo",key:"viewCarLicenseInfo",render:function(n,a){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){p.m8.push({pathname:"/platform-monitor/enterprise-monitor/logistics-enterprise/detail",query:{id:a==null?void 0:a.carNum}})},children:n})}},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,a){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){p.m8.push({pathname:"/platform-monitor/enterprise-monitor/logistics-enterprise/detail",query:{id:a==null?void 0:a.carNum}})},children:n})}}],e=[{title:"id",dataIndex:"carId",key:"carId",hideInTable:!0},{title:"\u8F66\u724C\u53F7",dataIndex:"license",key:"license"},{title:"\u6240\u5C5E\u7269\u6D41\u4F01\u4E1A",dataIndex:"company",key:"company"},{title:"\u4F01\u4E1A\u8D1F\u8D23\u4EBA",dataIndex:"driverName",key:"driverName"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"driverPhone",key:"driverPhone"},{title:"\u7ED1\u5B9A\u8BA2\u5355\u72B6\u6001",dataIndex:"contractStatus",key:"contractStatus",render:function(n){return n?(0,i.jsx)(c.Z,{color:"green",children:"\u5DF2\u7ED1\u5B9A"}):(0,i.jsx)(c.Z,{color:"red",children:"\u672A\u7ED1\u5B9A"})}},{title:"\u8FD0\u8F93\u72B6\u6001",dataIndex:"traning",key:"traning",render:function(n){return n?(0,i.jsx)(c.Z,{color:"green",children:"\u8FD0\u8F93\u4E2D"}):(0,i.jsx)(c.Z,{color:"red",children:"\u7A7A\u95F2\u4E2D"})}},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,a){return(0,i.jsx)("a",{onClick:function(){console.log(a.carId),p.m8.push({pathname:"/platform-monitor/transportation-management/vehicle/detail",query:{carId:a.carId}})},children:n})}}],t=["\u5173\u8054\u53F8\u673A","\u6240\u5C5E\u8FD0\u5355","\u6240\u5C5E\u8BA2\u5355","\u7269\u6D41\u516C\u53F8","\u8FD0\u6B21"],s=[{title:"\u8FD0\u6B21id",dataIndex:"tranId",key:"tranId",hideInTable:!0},{title:"\u65F6\u95F4",dataIndex:"finishTime",key:"finishTime"},{title:"\u8BA2\u5355\u53F7",dataIndex:"orderNum",key:"orderNum"},{title:"\u7269\u6D41\u4F01\u4E1A",dataIndex:"company",key:"company"},{title:"\u8FD0\u5355\u53F7",dataIndex:"tranNum",key:"tranNum"},{title:"\u53F8\u673A\u540D\u79F0",dataIndex:"driverName",key:"driverName"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"driverPhone",key:"driverPhone"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,a){return(0,i.jsx)("a",{onClick:function(){p.m8.push({pathname:"/history-data/history-transportation/trans-times",query:{transId:a.tranId}})},children:n})}}],l=[{title:"\u53F8\u673Aid",dataIndex:"driverId",key:"driverId",hideInTable:!0},{title:"\u53F8\u673A\u59D3\u540D",dataIndex:"driverName",key:"driverName"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"phone",key:"phone"},{title:"\u62A5\u8B66\u6B21\u6570",dataIndex:"region",key:"region"},{title:"\u8FD0\u6B21",dataIndex:"leader",key:"leader"},{title:"\u516C\u91CC\u6570",dataIndex:"contact",key:"contact"},{title:"\u7ED1\u5B9A\u8F66\u8F86\u6570",dataIndex:"contact1",key:"contact1"},{title:"\u662F\u5426\u7ED1\u5B9A\u8F66\u8F86",dataIndex:"linkCar",key:"linkCar",render:function(n){return n?(0,i.jsx)(c.Z,{color:"blue",children:"\u5DF2\u7ED1\u5B9A"}):(0,i.jsx)(c.Z,{color:"red",children:"\u672A\u7ED1\u5B9A"})}},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,a){return(0,i.jsx)("a",{onClick:function(){p.m8.push({pathname:"/platform-monitor/transportation-management/driver/detail",query:{driverId:a.driverId}})},children:n})}}],B=["\u59D3\u540D","\u5DF2\u7ED1\u5B9A\u8F66\u8F86","\u672A\u7ED1\u5B9A\u8F66\u8F86","\u9A7E\u9A76\u8BC1\u7C7B\u578B"],Z=[{title:"\u8FD0\u6B21 id",dataIndex:"tranId",key:"tranId"},{title:"\u65F6\u95F4",dataIndex:"finishTime",key:"finishTime"},{title:"\u8F66\u724C\u53F7",dataIndex:"carNumber",key:"carNumber"},{title:"\u7ED1\u5B9A\u8BA2\u5355\u53F7",dataIndex:"orderNum",key:"orderNum"},{title:"\u7ED1\u5B9A\u8FD0\u5355\u53F7",dataIndex:"tranNum",key:"tranNum"},{title:"\u7269\u6D41\u4F01\u4E1A",dataIndex:"company",key:"company"},{title:"\u72B6\u6001",dataIndex:"tranStatus",key:"tranStatus",render:function(n){return(0,i.jsx)(c.Z,{color:"blue",children:n})}},{title:"\u662F\u5426\u62A5\u8B66",dataIndex:"alarm",key:"alarm",render:function(n){return n?(0,i.jsx)(c.Z,{color:"green",children:"\u672A\u62A5\u8B66"}):(0,i.jsx)(c.Z,{color:"red",children:"\u5DF2\u62A5\u8B66"})}},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,a){return(0,i.jsx)("a",{onClick:function(){p.m8.push({pathname:"/history-data/history-transportation/trans-times",query:{transId:a.tranId}})},children:n})}}],W=[{title:"\u8FD0\u6B21 id",dataIndex:"tranId",key:"tranId"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"startTime",key:"startTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"finishTime",key:"finishTime"},{title:"\u8FD0\u5355\u53F7",dataIndex:"tranNum",key:"tranNum"},{title:"\u4E70\u65B9\u4F01\u4E1A",dataIndex:"buyCompany",key:"buyCompany"},{title:"\u5356\u65B9\u4F01\u4E1A",dataIndex:"saleCompany",key:"saleCompany"},{title:"\u7ED1\u5B9A\u8F66\u724C\u53F7",dataIndex:"license",key:"license"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,a){return(0,i.jsx)("a",{onClick:function(){p.m8.push({pathname:"/history-data/history-transportation/trans-times",query:{transId:a.tranId}})},children:n})}}],L=[{title:"\u8BA2\u5355\u53F7",dataIndex:"orderId",key:"orderId"},{title:"\u4E70\u65B9\u4F01\u4E1A",dataIndex:"companyA",key:"companyA"},{title:"\u4E70\u65B9\u4F01\u4E1A\u8D1F\u8D23\u4EBA",dataIndex:"holderA",key:"holderA"},{title:"\u5356\u65B9\u4F01\u4E1A",dataIndex:"companyB",key:"companyB"},{title:"\u5356\u65B9\u4F01\u4E1A\u8D1F\u8D23\u4EBA",dataIndex:"holderB",key:"holderB"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,a){return(0,i.jsx)("a",{onClick:function(){p.m8.push({pathname:"/platform-monitor/business-monitor/order/detail",query:{orderId:a.orderId}})},children:n})}}],U=["\u8BA2\u5355\u53F7","\u5356\u65B9\u4F01\u4E1A","\u5356\u65B9\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"],m=[{title:"\u8FD0\u5355\u53F7",dataIndex:"tranId",key:"tranId"},{title:"\u516C\u53F8",dataIndex:"name",key:"name"},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"holder",key:"holder"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"phone",key:"phone"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,a){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){p.m8.push({pathname:"/platform-monitor/business-monitor/waybill/detail",query:{transId:a.tranId}})},children:n})}}],R=[{title:"\u7EA7\u522B",data:["\u8FD0\u5355\u53F7","\u4F01\u4E1A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"]},{title:"\u6027\u8D28",data:["\u8FD0\u5355\u53F7","\u4F01\u4E1A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"]},{title:"\u7BA1\u8F96\u8303\u56F4",data:["\u8FD0\u5355\u53F7","\u4F01\u4E1A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"]}],P=[{title:"\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u7EA7\u522B",dataIndex:"rank",key:"rank"},{title:"\u6743\u9650",dataIndex:"limits",key:"limits"},{title:"\u8D23\u4EFB\u4EBA",dataIndex:"holder",key:"holder"},{title:"\u8D23\u4EFB\u4EBA\u8054\u7CFB\u65B9\u5F0F",dataIndex:"holderMobile",key:"holderMobile"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(n,a){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){p.m8.push({pathname:"/platform-monitor/audit-monitor/detail",query:{account:a.account}})},children:n})}}]},42579:function(N,T,r){"use strict";r.d(T,{kc:function(){return p},Xn:function(){return i},NV:function(){return f},oI:function(){return j},$N:function(){return x},m9:function(){return y},nD:function(){return _}});var g=r(39428),c=r(3182),E=r(636),p=function(){var o=(0,c.Z)((0,g.Z)().mark(function d(e){return(0,g.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return console.log(e),s.abrupt("return",(0,E.Z)("/lamp/car/allCarPage",{method:"POST",requestType:"form",data:e}));case 2:case"end":return s.stop()}},d)}));return function(e){return o.apply(this,arguments)}}(),i=function(){var o=(0,c.Z)((0,g.Z)().mark(function d(e){return(0,g.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return console.log(e),s.abrupt("return",(0,E.Z)("/lamp/car/searchCar",{method:"POST",requestType:"form",data:e}));case 2:case"end":return s.stop()}},d)}));return function(e){return o.apply(this,arguments)}}(),f=function(){var o=(0,c.Z)((0,g.Z)().mark(function d(e){var t;return(0,g.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return console.log(e),t=new FormData,t.append("license",e.license),t.append("carType",e.carType),t.append("carLegalWeight",e.carLegalWeight),t.append("carWeight",e.carWeight),t.append("company",e.company),t.append("carDrivingImg",e.carDrivingImg),t.append("carImage1",e.carImage1),t.append("carImage2",e.carImage2),t.append("carImage3",e.carImage3),t.append("carImage4",e.carImage4),l.abrupt("return",(0,E.Z)("/lamp/car/creatCar",{method:"POST",requestType:"form",data:t}));case 13:case"end":return l.stop()}},d)}));return function(e){return o.apply(this,arguments)}}(),j=function(){var o=(0,c.Z)((0,g.Z)().mark(function d(e){var t;return(0,g.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return console.log(e),t=new FormData,t.append("carId",e==null?void 0:e.carId),l.abrupt("return",(0,E.Z)("/lamp/car/deleteCar",{method:"POST",requestType:"form",data:t}));case 4:case"end":return l.stop()}},d)}));return function(e){return o.apply(this,arguments)}}(),x=function(){var o=(0,c.Z)((0,g.Z)().mark(function d(e){var t;return(0,g.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return console.log(e),t=new FormData,t.append("license",e.license),t.append("carType",e.carType),t.append("carLegalWeight",e.carLegalWeight),t.append("carWeight",e.carWeight),t.append("company",e.company),t.append("carDrivingImg",e.carDrivingImg),t.append("carImage1",e.carImage1),t.append("carImage2",e.carImage2),t.append("carImage3",e.carImage3),t.append("carImage4",e.carImage4),l.abrupt("return",(0,E.Z)("/lamp/car/updateInfo",{method:"POST",requestType:"form",data:t}));case 13:case"end":return l.stop()}},d)}));return function(e){return o.apply(this,arguments)}}(),y=function(){var o=(0,c.Z)((0,g.Z)().mark(function d(e){return(0,g.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return console.log(e),s.abrupt("return",(0,E.Z)("/lamp/car/detailOne",{method:"POST",requestType:"form",data:e}));case 2:case"end":return s.stop()}},d)}));return function(e){return o.apply(this,arguments)}}(),_=function(){var o=(0,c.Z)((0,g.Z)().mark(function d(e){var t;return(0,g.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.carId,l.abrupt("return",(0,E.Z)("/lamp/car/carImg",{method:"POST",requestType:"form",data:{carId:t}}));case 2:case"end":return l.stop()}},d)}));return function(e){return o.apply(this,arguments)}}()}}]);