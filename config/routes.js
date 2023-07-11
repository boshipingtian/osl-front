export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/data-overview/data-statistics',
  },
  // 大屏页
  {
    path: '/data-screen',
    component: './dataOverview/DataScreen',
    layout: false,
  },
  {
    path: '/',
  },
  // 数据总览
  {
    path: '/data-overview',
    name: 'data-overview',
    icon: 'dashboard',
    routes: [
      // 数据统计
      {
        path: '/data-overview/data-statistics',
        name: 'data-statistics',
        icon: 'smile',
        component: './dataOverview/DataStatistics',
      },
      // 数据大屏
      {
        path: '/data-overview/data-screen',
        name: 'data-screen',
        icon: 'smile',
        redirect: '/data-screen',
      },
      //运营管理
      {
        path: '/data-overview/operation-management',
        name: 'operation-management',
        icon: 'smile',
        component: './dataOverview/OperationManagement',
      },
    ],
  },
  // 平台监控
  {
    path: '/platform-monitor',
    name: 'platform-monitor',
    icon: 'smile',
    routes: [
      // 企业监控
      {
        path: '/platform-monitor/enterprise-monitor',
        name: 'enterprise-monitor',
        routes: [
          //买卖企业
          {
            path: '/platform-monitor/enterprise-monitor/trading-enterprise',
            name: 'trading-enterprise',
            component: './platformMonitor/EnterpriseMonitor/TradingEnterprise',
          },
          //买卖企业详情
          {
            path: '/platform-monitor/enterprise-monitor/trading-enterprise/detail',
            component: './platformMonitor/EnterpriseMonitor/TradingEnterprise/detail',
          },

          //物流企业
          {
            path: '/platform-monitor/enterprise-monitor/logistics-enterprise',
            name: 'logistics-enterprise',
            component: './platformMonitor/EnterpriseMonitor/LogisticsEnterprise',
          },
          //物流企业详情
          {
            path: '/platform-monitor/enterprise-monitor/logistics-enterprise/detail',
            component: './platformMonitor/EnterpriseMonitor/LogisticsEnterprise/detail',
          },

          //企业设备
          {
            path: '/platform-monitor/enterprise-monitor/enterprise-device',
            component: './platformMonitor/EnterpriseMonitor/EnterpriseDevice',
          },
          //企业设备详情
          {
            path: '/platform-monitor/enterprise-monitor/enterprise-device/detail',
            component: './platformMonitor/EnterpriseMonitor/EnterpriseDevice/detail',
          },
        ],
      },
      // 业务监控
      {
        path: '/platform-monitor/business-monitor',
        name: 'business-monitor',
        icon: 'smile',
        routes: [
          //订单
          {
            path: '/platform-monitor/business-monitor/order',
            name: 'order',
            component: './platformMonitor/BusinessMonitor/Order',
          },
          //订单详情
          {
            path: '/platform-monitor/business-monitor/order/detail',
            component: './platformMonitor/BusinessMonitor/Order/detail',
          },
          //运单
          {
            path: '/platform-monitor/business-monitor/waybill',
            name: 'waybill',
            component: './platformMonitor/BusinessMonitor/Waybill',
          },
          //运单详情
          {
            path: '/platform-monitor/business-monitor/waybill/detail',
            component: './platformMonitor/BusinessMonitor/Waybill/detail',
          },
        ],
      },
      // 运输管理
      {
        path: '/platform-monitor/transportation-management',
        name: 'transportation-management',
        routes: [
          //司机
          {
            path: '/platform-monitor/transportation-management/driver',
            name: 'driver',
            component: './platformMonitor/TransportationManagement/Driver',
          },
          //司机详情
          {
            path: '/platform-monitor/transportation-management/driver/detail',
            component: './platformMonitor/TransportationManagement/Driver/detail',
          },
          //车辆
          {
            path: '/platform-monitor/transportation-management/vehicle',
            name: 'vehicle',
            component: './platformMonitor/TransportationManagement/Vehicle',
          },
          //车辆详情
          {
            path: '/platform-monitor/transportation-management/vehicle/detail',
            component: './platformMonitor/TransportationManagement/Vehicle/detail',
          },
        ],
      },
      //审计监控
      {
        path: '/platform-monitor/audit-monitor',
        name: 'audit-monitor',
        component: './platformMonitor/AuditMonitor',
      },
      //审计监控详情
      {
        path: '/platform-monitor/audit-monitor/detail',
        component: './platformMonitor/AuditMonitor/detail',
      },
    ],
  },
  // 报警信息
  {
    path: '/alarm-info',
    name: 'alarm-info',
    icon: 'smile',
    routes: [
      // 报警总览
      {
        path: '/alarm-info/alarm-overview',
        name: 'alarm-overview',
        component: './alarmInfo/AlarmOverview',
      },
      // 报警设置
      {
        path: '/alarm-info/alarm-setting',
        name: 'alarm-setting',
        component: './alarmInfo/AlarmSetting',
      },
    ],
  },
  // 历史数据
  {
    path: '/history-data',
    name: 'history-data',
    icon: 'smile',
    routes: [
      // 历史报警
      {
        path: '/history-data/history-alarm',
        name: 'history-alarm',
        component: './historyData/HistoryAlarm',
      },
      // 历史业务
      {
        path: '/history-data/history-business',
        name: 'history-business',
        routes: [
          //历史订单
          {
            path: '/history-data/history-business/history-order',
            name: 'history-order',
            component: './historyData/HistoryBusiness/HistoryOrder',
          },
          //历史订单详情
          {
            path: '/history-data/history-business/history-order/detail',
            component: './historyData/HistoryBusiness/HistoryOrder/detail',
          },
          //历史运单
          {
            path: '/history-data/history-business/history-waybill',
            name: 'history-waybill',
            component: './historyData/HistoryBusiness/HistoryWaybill',
          },
          //历史运单详情
          {
            path: '/history-data/history-business/history-waybill/detail',
            component: './historyData/HistoryBusiness/HistoryWaybill/detail',
          },
        ],
      },
      // 历史运输
      {
        path: '/history-data/history-transportation',
        name: 'history-transportation',
        component: './historyData/HistoryTransportation',
      },

      //运次
      {
        path: '/history-data/history-transportation/trans-times',
        component: './platformMonitor/TransportationManagement/TransTimes',
      },
    ],
  },
  // 用户信息
  {
    path: '/user-info',
    name: 'user-info',
    icon: 'smile',
    routes: [
      // 信息详情
      {
        path: '/user-info/user-info-detail',
        name: 'user-info-detail',
        component: './userInfo/UserInfoDetail',
      },
      // 用户设置
      {
        path: '/user-info/user-setting',
        name: 'user-setting',
        component: './userInfo/UserSetting',
      },
    ],
  },

  {
    component: './404',
  },
];
