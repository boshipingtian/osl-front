(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[2064],{65737:function(A,v,o){"use strict";var I=o(58024),s=o(91894),f=o(14781),c=o(23492),i=o(8963),C=o(42020),E=o(57663),T=o(71577),g=o(49101),h=o(67294),a=o(85893),n=function(r){var l=r.title,p=r.columns,x=r.dataSource,m=r.titleButton,k=r.isShowTitleButton,_=k===void 0?!0:k,O=r.footerMore,D=r.onPageChange,j=r.onAddHandler,P=r.rowKey,u=r.loading,e=r.total,t=e===void 0?500:e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)("div",{className:"FullAddTableHeader",children:[(0,a.jsx)("span",{className:"title",children:l}),(0,a.jsx)("div",{children:_?(0,a.jsx)(T.Z,{type:"primary",icon:(0,a.jsx)(g.Z,{}),onClick:function(){return j(!0)},children:"\u6DFB\u52A0"}):m})]}),(0,a.jsx)(C.Z,{loading:u,rowKey:P,columns:p,pagination:!1,dataSource:x}),(0,a.jsxs)("div",{className:"FullAddTableFooter",children:[(0,a.jsx)("span",{children:O}),(0,a.jsx)(c.Z,{showQuickJumper:!0,defaultCurrent:1,total:t,onChange:function(M,Z){return D(M,Z)}})]})]})})};v.Z=n},65523:function(A,v,o){"use strict";o.d(v,{pv:function(){return C},qW:function(){return E},KT:function(){return T},sP:function(){return g},mI:function(){return h},DL:function(){return a},Fj:function(){return n},FY:function(){return d},cm:function(){return r},dh:function(){return l},x1:function(){return p},pC:function(){return x},kz:function(){return m},z0:function(){return _},j2:function(){return O},sw:function(){return D},c4:function(){return j},_j:function(){return P}});var I=o(71153),s=o(60331),f=o(67294),c=o(86353),i=o(85893),C=[{title:"\u4F01\u4E1A\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"holder",key:"holder"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"phone",key:"phone"},{title:"\u7EA7\u522B",dataIndex:"level",key:"level"},{title:"\u56FD\u5BB6",dataIndex:"country",key:"country"},{title:"\u5730\u533A",dataIndex:"address",key:"address"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(e,t){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){c.m8.push({pathname:"/platform-monitor/enterprise-monitor/trading-enterprise/detail",query:{companyId:t.id,name:t.name}})},children:e})}}],E=["\u4F01\u4E1A\u540D\u79F0","\u56FD\u5BB6","\u5730\u533A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"],T=[{title:"\u8FD0\u5355\u53F7",dataIndex:"identification",key:"identification"},{title:"\u65F6\u95F4",dataIndex:"createTime",key:"createTime"},{title:"\u5408\u4F5C\u4F01\u4E1A",dataIndex:"contractualCompanyName",key:"contractualCompanyName"},{title:"\u5408\u4F5C\u4F01\u4E1A\u8D1F\u8D23\u4EBA",dataIndex:"contractualCompanyOwner",key:"contractualCompanyOwner"},{title:"\u5408\u4F5C\u4F01\u4E1A\u8054\u7CFB\u65B9\u5F0F",dataIndex:"contractualCompanyMobile",key:"contractualCompanyMobile"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(e,t){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){c.m8.push({pathname:"/platform-monitor/enterprise-monitor/trading-enterprise/detail",query:{companyId:t.id,name:t.name}})},children:e})}}],g=[{title:"\u4F01\u4E1A\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"holder",key:"holder"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"phone",key:"phone"},{title:"\u7EA7\u522B",dataIndex:"level",key:"level"},{title:"\u56FD\u5BB6",dataIndex:"country",key:"country"},{title:"\u5730\u533A",dataIndex:"address",key:"address"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(e,t){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){c.m8.push({pathname:"/platform-monitor/enterprise-monitor/logistics-enterprise/detail",query:{id:t.id}})},children:e})}}],h=["\u4F01\u4E1A\u540D\u79F0","\u56FD\u5BB6","\u5730\u533A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"],a=[{title:"\u8FD0\u5355\u53F7",dataIndex:"tranIdentification",key:"tranIdentification"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",key:"createTime"},{title:"\u7ED1\u5B9A\u8BA2\u5355\u53F7",dataIndex:"bindOrderIdentification",key:"bindOrderIdentification"},{title:"\u7ED1\u5B9A\u65F6\u95F4",dataIndex:"updateTime",key:"updateTime"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(e,t){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){c.m8.push({pathname:"/platform-monitor/business-monitor/waybill/detail",query:{id:t.tranIdentification}})},children:e})}}],n=[{title:"\u8F66\u724C\u53F7",dataIndex:"carNum",key:"carNum"},{title:"\u6CE8\u518C\u65F6\u95F4",dataIndex:"createTime",key:"createTime"},{title:"\u8F66\u8F86\u72B6\u6001",dataIndex:"carState",key:"carState",render:function(e){return(0,i.jsx)(s.Z,{color:"red",children:e})}},{title:"\u67E5\u770B\u8F66\u8F86\u8BE6\u60C5",dataIndex:"viewCarInfo",key:"viewCarInfo",render:function(e,t){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){c.m8.push({pathname:"/platform-monitor/enterprise-monitor/logistics-enterprise/detail",query:{id:t==null?void 0:t.carNum}})},children:e})}},{title:"\u8F66\u8BC1\u4FE1\u606F",dataIndex:"viewCarLicenseInfo",key:"viewCarLicenseInfo",render:function(e,t){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){c.m8.push({pathname:"/platform-monitor/enterprise-monitor/logistics-enterprise/detail",query:{id:t==null?void 0:t.carNum}})},children:e})}},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(e,t){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){c.m8.push({pathname:"/platform-monitor/enterprise-monitor/logistics-enterprise/detail",query:{id:t==null?void 0:t.carNum}})},children:e})}}],d=[{title:"id",dataIndex:"carId",key:"carId",hideInTable:!0},{title:"\u8F66\u724C\u53F7",dataIndex:"license",key:"license"},{title:"\u6240\u5C5E\u7269\u6D41\u4F01\u4E1A",dataIndex:"company",key:"company"},{title:"\u4F01\u4E1A\u8D1F\u8D23\u4EBA",dataIndex:"driverName",key:"driverName"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"driverPhone",key:"driverPhone"},{title:"\u7ED1\u5B9A\u8BA2\u5355\u72B6\u6001",dataIndex:"contractStatus",key:"contractStatus",render:function(e){return e?(0,i.jsx)(s.Z,{color:"green",children:"\u5DF2\u7ED1\u5B9A"}):(0,i.jsx)(s.Z,{color:"red",children:"\u672A\u7ED1\u5B9A"})}},{title:"\u8FD0\u8F93\u72B6\u6001",dataIndex:"traning",key:"traning",render:function(e){return e?(0,i.jsx)(s.Z,{color:"green",children:"\u8FD0\u8F93\u4E2D"}):(0,i.jsx)(s.Z,{color:"red",children:"\u7A7A\u95F2\u4E2D"})}},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(e,t){return(0,i.jsx)("a",{onClick:function(){console.log(t.carId),c.m8.push({pathname:"/platform-monitor/transportation-management/vehicle/detail",query:{carId:t.carId}})},children:e})}}],r=["\u5173\u8054\u53F8\u673A","\u6240\u5C5E\u8FD0\u5355","\u6240\u5C5E\u8BA2\u5355","\u7269\u6D41\u516C\u53F8","\u8FD0\u6B21"],l=[{title:"\u8FD0\u6B21id",dataIndex:"tranId",key:"tranId",hideInTable:!0},{title:"\u65F6\u95F4",dataIndex:"finishTime",key:"finishTime"},{title:"\u8BA2\u5355\u53F7",dataIndex:"orderNum",key:"orderNum"},{title:"\u7269\u6D41\u4F01\u4E1A",dataIndex:"company",key:"company"},{title:"\u8FD0\u5355\u53F7",dataIndex:"tranNum",key:"tranNum"},{title:"\u53F8\u673A\u540D\u79F0",dataIndex:"driverName",key:"driverName"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"driverPhone",key:"driverPhone"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(e,t){return(0,i.jsx)("a",{onClick:function(){c.m8.push({pathname:"/history-data/history-transportation/trans-times",query:{transId:t.tranId}})},children:e})}}],p=[{title:"\u53F8\u673Aid",dataIndex:"driverId",key:"driverId",hideInTable:!0},{title:"\u53F8\u673A\u59D3\u540D",dataIndex:"driverName",key:"driverName"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"phone",key:"phone"},{title:"\u62A5\u8B66\u6B21\u6570",dataIndex:"region",key:"region"},{title:"\u8FD0\u6B21",dataIndex:"leader",key:"leader"},{title:"\u516C\u91CC\u6570",dataIndex:"contact",key:"contact"},{title:"\u7ED1\u5B9A\u8F66\u8F86\u6570",dataIndex:"contact1",key:"contact1"},{title:"\u662F\u5426\u7ED1\u5B9A\u8F66\u8F86",dataIndex:"linkCar",key:"linkCar",render:function(e){return e?(0,i.jsx)(s.Z,{color:"blue",children:"\u5DF2\u7ED1\u5B9A"}):(0,i.jsx)(s.Z,{color:"red",children:"\u672A\u7ED1\u5B9A"})}},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(e,t){return(0,i.jsx)("a",{onClick:function(){c.m8.push({pathname:"/platform-monitor/transportation-management/driver/detail",query:{driverId:t.driverId}})},children:e})}}],x=["\u59D3\u540D","\u5DF2\u7ED1\u5B9A\u8F66\u8F86","\u672A\u7ED1\u5B9A\u8F66\u8F86","\u9A7E\u9A76\u8BC1\u7C7B\u578B"],m=[{title:"\u8FD0\u6B21 id",dataIndex:"tranId",key:"tranId"},{title:"\u65F6\u95F4",dataIndex:"finishTime",key:"finishTime"},{title:"\u8F66\u724C\u53F7",dataIndex:"carNumber",key:"carNumber"},{title:"\u7ED1\u5B9A\u8BA2\u5355\u53F7",dataIndex:"orderNum",key:"orderNum"},{title:"\u7ED1\u5B9A\u8FD0\u5355\u53F7",dataIndex:"tranNum",key:"tranNum"},{title:"\u7269\u6D41\u4F01\u4E1A",dataIndex:"company",key:"company"},{title:"\u72B6\u6001",dataIndex:"tranStatus",key:"tranStatus",render:function(e){return(0,i.jsx)(s.Z,{color:"blue",children:e})}},{title:"\u662F\u5426\u62A5\u8B66",dataIndex:"alarm",key:"alarm",render:function(e){return e?(0,i.jsx)(s.Z,{color:"green",children:"\u672A\u62A5\u8B66"}):(0,i.jsx)(s.Z,{color:"red",children:"\u5DF2\u62A5\u8B66"})}},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(e,t){return(0,i.jsx)("a",{onClick:function(){c.m8.push({pathname:"/history-data/history-transportation/trans-times",query:{transId:t.tranId}})},children:e})}}],k=[{title:"\u8FD0\u6B21 id",dataIndex:"tranId",key:"tranId"},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"startTime",key:"startTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"finishTime",key:"finishTime"},{title:"\u8FD0\u5355\u53F7",dataIndex:"tranNum",key:"tranNum"},{title:"\u4E70\u65B9\u4F01\u4E1A",dataIndex:"buyCompany",key:"buyCompany"},{title:"\u5356\u65B9\u4F01\u4E1A",dataIndex:"saleCompany",key:"saleCompany"},{title:"\u7ED1\u5B9A\u8F66\u724C\u53F7",dataIndex:"license",key:"license"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(e,t){return(0,i.jsx)("a",{onClick:function(){c.m8.push({pathname:"/history-data/history-transportation/trans-times",query:{transId:t.tranId}})},children:e})}}],_=[{title:"\u8BA2\u5355\u53F7",dataIndex:"orderId",key:"orderId"},{title:"\u4E70\u65B9\u4F01\u4E1A",dataIndex:"companyA",key:"companyA"},{title:"\u4E70\u65B9\u4F01\u4E1A\u8D1F\u8D23\u4EBA",dataIndex:"holderA",key:"holderA"},{title:"\u5356\u65B9\u4F01\u4E1A",dataIndex:"companyB",key:"companyB"},{title:"\u5356\u65B9\u4F01\u4E1A\u8D1F\u8D23\u4EBA",dataIndex:"holderB",key:"holderB"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(e,t){return(0,i.jsx)("a",{onClick:function(){c.m8.push({pathname:"/platform-monitor/business-monitor/order/detail",query:{orderId:t.orderId}})},children:e})}}],O=["\u8BA2\u5355\u53F7","\u5356\u65B9\u4F01\u4E1A","\u5356\u65B9\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"],D=[{title:"\u8FD0\u5355\u53F7",dataIndex:"tranId",key:"tranId"},{title:"\u516C\u53F8",dataIndex:"name",key:"name"},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"holder",key:"holder"},{title:"\u8054\u7CFB\u65B9\u5F0F",dataIndex:"phone",key:"phone"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(e,t){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){c.m8.push({pathname:"/platform-monitor/business-monitor/waybill/detail",query:{transId:t.tranId}})},children:e})}}],j=[{title:"\u7EA7\u522B",data:["\u8FD0\u5355\u53F7","\u4F01\u4E1A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"]},{title:"\u6027\u8D28",data:["\u8FD0\u5355\u53F7","\u4F01\u4E1A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"]},{title:"\u7BA1\u8F96\u8303\u56F4",data:["\u8FD0\u5355\u53F7","\u4F01\u4E1A","\u8D1F\u8D23\u4EBA","\u8054\u7CFB\u65B9\u5F0F"]}],P=[{title:"\u540D\u79F0",dataIndex:"name",key:"name"},{title:"\u7C7B\u578B",dataIndex:"type",key:"type"},{title:"\u7EA7\u522B",dataIndex:"rank",key:"rank"},{title:"\u6743\u9650",dataIndex:"limits",key:"limits"},{title:"\u8D23\u4EFB\u4EBA",dataIndex:"holder",key:"holder"},{title:"\u8D23\u4EFB\u4EBA\u8054\u7CFB\u65B9\u5F0F",dataIndex:"holderMobile",key:"holderMobile"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(e,t){return(0,i.jsx)("span",{style:{color:"#1890FF",cursor:"pointer"},onClick:function(){c.m8.push({pathname:"/platform-monitor/audit-monitor/detail",query:{account:t.account}})},children:e})}}]},46039:function(A,v,o){"use strict";o.d(v,{Fw:function(){return c},dz:function(){return i},XC:function(){return C},x7:function(){return E},Vh:function(){return T},VR:function(){return g}});var I=o(39428),s=o(3182),f=o(636),c=function(){var h=(0,s.Z)((0,I.Z)().mark(function a(n){return(0,I.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(n),r.abrupt("return",(0,f.Z)("/orderdetail/getOrder",{method:"POST",requestType:"json",data:n}));case 2:case"end":return r.stop()}},a)}));return function(n){return h.apply(this,arguments)}}(),i=function(){var h=(0,s.Z)((0,I.Z)().mark(function a(n){var d;return(0,I.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=n.orderId,console.log({orderId:d}),l.abrupt("return",(0,f.Z)("/orderdetail/orderInfo",{method:"POST",requestType:"json",params:{orderId:d}}));case 3:case"end":return l.stop()}},a)}));return function(n){return h.apply(this,arguments)}}(),C=function(){var h=(0,s.Z)((0,I.Z)().mark(function a(n){var d,r,l,p,x;return(0,I.Z)().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return d=n.orderId,r=n.orderType,l=n.price,p=n.weight,x=n.cargoType,console.log("\u4FEE\u6539\u8BA2\u5355",{orderId:d,orderType:r,price:l,weight:p,cargoType:x}),k.abrupt("return",(0,f.Z)("/orderdetail/updateOrder",{method:"POST",requestType:"json",data:{orderId:d,orderType:r,price:l,weight:p,cargoType:x}}));case 3:case"end":return k.stop()}},a)}));return function(n){return h.apply(this,arguments)}}(),E=function(){var h=(0,s.Z)((0,I.Z)().mark(function a(n){var d,r,l,p,x,m;return(0,I.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return d=n.companyA,r=n.companyB,l=n.orderType,p=n.price,x=n.weight,m=n.cargoType,console.log("\u6DFB\u52A0\u8BA2\u5355",{companyA:d,companyB:r,orderType:l,price:p,weight:x,cargoType:m}),_.abrupt("return",(0,f.Z)("/orderdetail/updateOrder",{method:"POST",requestType:"json",data:{companyA:d,companyB:r,orderType:l,price:p,weight:x,cargoType:m}}));case 3:case"end":return _.stop()}},a)}));return function(n){return h.apply(this,arguments)}}(),T=function(){var h=(0,s.Z)((0,I.Z)().mark(function a(n){var d,r,l,p;return(0,I.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return d=n.orderId,r=n.price,l=n.weight,p=n.company,console.log("\u7ED1\u5B9A\u8FD0\u5355",{orderId:d,price:r,weight:l,company:p}),m.abrupt("return",(0,f.Z)("/orderdetail/insertTran",{method:"POST",requestType:"json",data:{orderId:d,price:r,weight:l,company:p}}));case 3:case"end":return m.stop()}},a)}));return function(n){return h.apply(this,arguments)}}(),g=function(){var h=(0,s.Z)((0,I.Z)().mark(function a(n){var d,r,l,p;return(0,I.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return d=n.orderId,r=n.state,l=n.num,p=n.size,console.log("\u8FD0\u5355\u5217\u8868",{orderId:d,state:r}),m.abrupt("return",(0,f.Z)("/tranDetail/getTran",{method:"POST",requestType:"json",data:{orderId:d,state:r,num:l,size:p}}));case 3:case"end":return m.stop()}},a)}));return function(n){return h.apply(this,arguments)}}()}}]);
