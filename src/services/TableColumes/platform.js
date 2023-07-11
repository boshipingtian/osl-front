import React from 'react';
import { history } from 'umi';
import { Tag } from 'antd';

//买卖企业列表的表头
export const TradingEnterpriseColumn = [
  {
    title: '企业名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '国家',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: '地区',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '负责人',
    dataIndex: 'holder',
    key: 'holder',
  },
  {
    title: '联系方式',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value, record) => {
      return (
        <span
          style={{ color: '#1890FF', cursor: 'pointer' }}
          onClick={() => {
            history.push({
              pathname: '/platform-monitor/enterprise-monitor/trading-enterprise/detail',
              query: {
                companyId: record.id,
                name: record.name,
              },
            });
          }}
        >
          {value}
        </span>
      );
    },
  },
];

//买卖企业列表的搜索选项
export const TradingEnterpriseSelectOption = ['企业名称', '国家', '地区', '负责人', '联系方式'];

//买卖企业详情的表头
export const TradingEnterpriseColumnDetail = [
  {
    title: '运单号',
    dataIndex: 'identification',
    key: 'identification',
  },
  {
    title: '时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '合作企业',
    dataIndex: 'contractualCompanyName',
    key: 'contractualCompanyName',
  },
  {
    title: '合作企业负责人',
    dataIndex: 'contractualCompanyOwner',
    key: 'contractualCompanyOwner',
  },
  {
    title: '合作企业联系方式',
    dataIndex: 'contractualCompanyMobile',
    key: 'contractualCompanyMobile',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value, record) => {
      return (
        <span
          style={{ color: '#1890FF', cursor: 'pointer' }}
          onClick={() => {
            history.push({
              pathname: '/platform-monitor/enterprise-monitor/trading-enterprise/detail',
              query: {
                companyId: record.id,
                name: record.name,
              },
            });
          }}
        >
          {value}
        </span>
      );
    },
  },
];

//物流企业列表的表头
export const LogisticsEnterpriseColumns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '企业名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '国家',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: '地区',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '负责人',
    dataIndex: 'holder',
    key: 'holder',
  },
  {
    title: '联系方式',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value, record) => {
      return (
        <span
          style={{ color: '#1890FF', cursor: 'pointer' }}
          onClick={() => {
            history.push({
              pathname: '/platform-monitor/enterprise-monitor/logistics-enterprise/detail',
              query: {
                id: record.id,
              },
            });
          }}
        >
          {value}
        </span>
      );
    },
  },
];

//物流企业列表的搜索选项
export const LogisticsEnterpriseSelectOption = ['企业名称', '国家', '地区', '负责人', '联系方式'];

//物流企业详情 - 运单列表的表头
export const logisticTranListColumns = [
  {
    title: '运单号',
    dataIndex: 'tranIdentification',
    key: 'tranIdentification',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '绑定订单号',
    dataIndex: 'bindOrderIdentification',
    key: 'bindOrderIdentification',
  },
  {
    title: '绑定时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value, record) => {
      return (
        <span
          style={{ color: '#1890FF', cursor: 'pointer' }}
          onClick={() => {
            history.push({
              pathname: '/platform-monitor/business-monitor/waybill/detail',
              query: {
                id: record.tranIdentification,
              },
            });
          }}
        >
          {value}
        </span>
      );
    },
  },
];

//物流企业详情 - 车辆列表的表头
export const logisticCarListColumns = [
  {
    title: '车牌号',
    dataIndex: 'carNum',
    key: 'carNum',
  },
  {
    title: '注册时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '车辆状态',
    dataIndex: 'carState',
    key: 'carState',
    render: (value) => {
      return <Tag color="red">{value}</Tag>;
    },
  },
  {
    title: '查看车辆详情',
    dataIndex: 'viewCarInfo',
    key: 'viewCarInfo',
    render: (value, record) => {
      return (
        <span
          style={{ color: '#1890FF', cursor: 'pointer' }}
          onClick={() => {
            history.push({
              pathname: '/platform-monitor/enterprise-monitor/logistics-enterprise/detail',
              query: {
                id: record?.carNum,
              },
            });
          }}
        >
          {value}
        </span>
      );
    },
  },
  {
    title: '车证信息',
    dataIndex: 'viewCarLicenseInfo',
    key: 'viewCarLicenseInfo',
    render: (value, record) => {
      return (
        <span
          style={{ color: '#1890FF', cursor: 'pointer' }}
          onClick={() => {
            history.push({
              pathname: '/platform-monitor/enterprise-monitor/logistics-enterprise/detail',
              query: {
                id: record?.carNum,
              },
            });
          }}
        >
          {value}
        </span>
      );
    },
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value, record) => {
      return (
        <span
          style={{ color: '#1890FF', cursor: 'pointer' }}
          onClick={() => {
            history.push({
              pathname: '/platform-monitor/enterprise-monitor/logistics-enterprise/detail',
              query: {
                id: record?.carNum,
              },
            });
          }}
        >
          {value}
        </span>
      );
    },
  },
];
//运输管理 - 车辆 - 全部车辆列表
export const TransportationVehicleColumn = [
  {
    title: 'id',
    dataIndex: 'carId',
    key: 'carId',
    hideInTable: true,
  },
  {
    title: '车牌号',
    dataIndex: 'license',
    key: 'license',
  },
  {
    title: '所属物流企业',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: '企业负责人',
    dataIndex: 'driverName',
    key: 'driverName',
  },
  {
    title: '联系方式',
    dataIndex: 'driverPhone',
    key: 'driverPhone',
  },
  {
    title: '绑定订单状态',
    dataIndex: 'contractStatus',
    key: 'contractStatus',
    render: (value) => (value ? <Tag color="green">已绑定</Tag> : <Tag color="red">未绑定</Tag>),
  },
  {
    title: '运输状态',
    dataIndex: 'traning',
    key: 'traning',
    render: (value) => (value ? <Tag color="green">运输中</Tag> : <Tag color="red">空闲中</Tag>),
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value, record) => (
      <a
        onClick={() => {
          console.log(record.carId);
          history.push({
            pathname: '/platform-monitor/transportation-management/vehicle/detail',
            query: {
              carId: record.carId,
            },
          });
        }}
      >
        {value}
      </a>
    ),
  },
];

//运输管理 - 车辆 - 全部车辆列表 - 搜索选项
export const TransportationVehicleSelectOption = [
  '关联司机',
  '所属运单',
  '所属订单',
  '物流公司',
  '运次',
];

//运输管理 - 车辆 - 车辆详情
export const TransportationVehicleHistoryTransList = [
  {
    title: '运次id',
    dataIndex: 'tranId',
    key: 'tranId',
    hideInTable: true,
  },
  {
    title: '时间',
    dataIndex: 'finishTime',
    key: 'finishTime',
  },
  {
    title: '订单号',
    dataIndex: 'orderNum',
    key: 'orderNum',
  },
  {
    title: '物流企业',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: '运单号',
    dataIndex: 'tranNum',
    key: 'tranNum',
  },
  {
    title: '司机名称',
    dataIndex: 'driverName',
    key: 'driverName',
  },
  {
    title: '联系方式',
    dataIndex: 'driverPhone',
    key: 'driverPhone',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value, record) => (
      <a
        onClick={() => {
          history.push({
            pathname: '/history-data/history-transportation/trans-times',
            query: {
              transId: record.tranId,
            },
          });
        }}
      >
        {value}
      </a>
    ),
  },
];

//运输管理 - 司机 - 全部司机列表
export const TransportationDriverColumn = [
  {
    title: '司机id',
    dataIndex: 'driverId',
    key: 'driverId',
    hideInTable: true,
  },
  {
    title: '司机姓名',
    dataIndex: 'driverName',
    key: 'driverName',
  },
  {
    title: '联系方式',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '报警次数',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: '运次',
    dataIndex: 'leader',
    key: 'leader',
  },
  {
    title: '公里数',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: '绑定车辆数',
    dataIndex: 'contact1',
    key: 'contact1',
  },
  {
    title: '是否绑定车辆',
    dataIndex: 'linkCar',
    key: 'linkCar',
    render: (value) => (value ? <Tag color="blue">已绑定</Tag> : <Tag color="red">未绑定</Tag>),
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value, record) => (
      <a
        onClick={() => {
          history.push({
            pathname: '/platform-monitor/transportation-management/driver/detail',
            query: {
              driverId: record.driverId,
            },
          });
        }}
      >
        {value}
      </a>
    ),
  },
];

export const TransportationDriverSelectOption = ['姓名', '已绑定车辆', '未绑定车辆', '驾驶证类型'];

//运输管理 - 司机 - 司机详情
export const TransportationDriverHistoryTransList = [
  {
    title: '运次 id',
    dataIndex: 'tranId',
    key: 'tranId',
  },
  {
    title: '时间',
    dataIndex: 'finishTime',
    key: 'finishTime',
  },
  {
    title: '车牌号',
    dataIndex: 'carNumber',
    key: 'carNumber',
  },
  {
    title: '绑定订单号',
    dataIndex: 'orderNum',
    key: 'orderNum',
  },
  {
    title: '绑定运单号',
    dataIndex: 'tranNum',
    key: 'tranNum',
  },
  {
    title: '物流企业',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: '状态',
    dataIndex: 'tranStatus',
    key: 'tranStatus',
    render: (value) => <Tag color="blue">{value}</Tag>,
  },
  {
    title: '是否报警',
    dataIndex: 'alarm',
    key: 'alarm',
    render: (value) => (value ? <Tag color="green">未报警</Tag> : <Tag color="red">已报警</Tag>),
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value, record) => (
      <a
        onClick={() => {
          history.push({
            pathname: '/history-data/history-transportation/trans-times',
            query: {
              transId: record.tranId,
            },
          });
        }}
      >
        {value}
      </a>
    ),
  },
];

//历史运次 - 全部运次列表
export const HistoryTransList = [
  {
    title: '运次 id',
    dataIndex: 'tranId',
    key: 'tranId',
  },
  {
    title: '开始时间',
    dataIndex: 'startTime',
    key: 'startTime',
  },
  {
    title: '结束时间',
    dataIndex: 'finishTime',
    key: 'finishTime',
  },
  {
    title: '运单号',
    dataIndex: 'tranNum',
    key: 'tranNum',
  },
  {
    title: '买方企业',
    dataIndex: 'buyCompany',
    key: 'buyCompany',
  },
  {
    title: '卖方企业',
    dataIndex: 'saleCompany',
    key: 'saleCompany',
  },
  {
    title: '绑定车牌号',
    dataIndex: 'license',
    key: 'license',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value, record) => (
      <a
        onClick={() => {
          history.push({
            pathname: '/history-data/history-transportation/trans-times',
            query: {
              transId: record.tranId,
            },
          });
        }}
      >
        {value}
      </a>
    ),
  },
];

//业务管理 - 订单 - 订单列表
export const OrderListColumns = [
  {
    title: '订单号',
    dataIndex: 'orderId',
    key: 'orderId',
  },
  {
    title: '买方企业',
    dataIndex: 'companyA',
    key: 'companyA',
  },
  {
    title: '买方企业负责人',
    dataIndex: 'holderA',
    key: 'holderA',
  },
  {
    title: '卖方企业',
    dataIndex: 'companyB',
    key: 'companyB',
  },
  {
    title: '卖方企业负责人',
    dataIndex: 'holderB',
    key: 'holderB',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value, record) => (
      <a
        onClick={() => {
          history.push({
            pathname: '/platform-monitor/business-monitor/order/detail',
            query: {
              orderId: record.orderId,
            },
          });
        }}
      >
        {value}
      </a>
    ),
  },
];
//业务管理 - 订单 - 订单列表 - 搜索项
export const OrderListSelectOption = ['订单号', '卖方企业', '卖方负责人', '联系方式'];
//业务管理 - 订单 - 订单详情 - 运单列表
export const OrderDetailWaybillColumns = [
  {
    title: '运单号',
    dataIndex: 'tranId',
    key: 'tranId',
  },
  {
    title: '公司',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '负责人',
    dataIndex: 'holder',
    key: 'holder',
  },
  {
    title: '联系方式',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value, record) => {
      return (
        <span
          style={{ color: '#1890FF', cursor: 'pointer' }}
          onClick={() => {
            history.push({
              pathname: '/platform-monitor/business-monitor/waybill/detail',
              query: {
                transId: record.tranId,
              },
            });
          }}
        >
          {value}
        </span>
      );
    },
  },
];

//业务管理 - 订单 - 订单列表 - 搜索项
export const AuditListSelectOption = [
  {
    title: '级别',
    data: ['运单号', '企业', '负责人', '联系方式'],
  },
  {
    title: '性质',
    data: ['运单号', '企业', '负责人', '联系方式'],
  },
  {
    title: '管辖范围',
    data: ['运单号', '企业', '负责人', '联系方式'],
  },
];

//业务管理 - 订单 - 订单详情 - 运单列表
export const AuditDetailColumns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '级别',
    dataIndex: 'rank',
    key: 'rank',
  },
  {
    title: '权限',
    dataIndex: 'limits',
    key: 'limits',
  },
  {
    title: '性质',
    dataIndex: 'administration',
    key: 'administration',
  },
  {
    title: '管理员',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '联系方式',
    dataIndex: 'holderMobile',
    key: 'holderMobile',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value, item) => {
      return (
        <span
          style={{ color: '#1890FF', cursor: 'pointer' }}
          onClick={() => {
            history.push({
              pathname: '/platform-monitor/audit-monitor/detail',
              query: {
                account: item.account,
              },
            });
          }}
        >
          {value}
        </span>
      );
    },
  },
];
