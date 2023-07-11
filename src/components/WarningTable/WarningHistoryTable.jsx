import React from 'react';
import ProTable from '@ant-design/pro-table';

const columns = [
  {
    title: '订单',
    dataIndex: 'order',
    key: 'order',
    hideInSearch: true,
  },
  {
    title: '车牌号',
    filter: true,
    onFilter: true,
    dataIndex: 'carNumber',
    key: 'carNumber',
  },
  {
    title: '司机电话',
    dataIndex: 'driverPhone',
    key: 'driverPhone',
  },
  {
    title: '卖方企业',
    dataIndex: 'seller',
    key: 'seller',
  },
  {
    title: '买方企业',
    dataIndex: 'buyer',
    key: 'buyer',
  },
  {
    title: '报警原因',
    dataIndex: 'reason',
    key: 'reason',
  },
  {
    title: '报警描述',
    dataIndex: 'description',
    key: 'description',
    hideInSearch: true,
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    hideInSearch: true,
    render: () => [<a key="1">查看</a>],
  },
];

const dataSource = [
  {
    carNumber: '苏A12345',
    driverPhone: '13888888888',
    reason: '车辆超速',
    description: '车辆超速',
    seller: '卖方企业',
    buyer: '买方企业',
    operation: '查看',
  },
  {
    carNumber: '苏A12346',
    driverPhone: '13888888888',
    reason: '车辆超速',
    description: '车辆超速',
    seller: '卖方企业',
    buyer: '买方企业',
    operation: '查看',
  },
  {
    carNumber: '苏A12347',
    driverPhone: '13888888888',
    reason: '车辆超速',
    description: '车辆超速',
    seller: '卖方企业',
    buyer: '买方企业',
    operation: '查看',
  },
  {
    carNumber: '苏A12348',
    driverPhone: '13888888888',
    reason: '车辆超速',
    description: '车辆超速',
    seller: '卖方企业',
    buyer: '买方企业',
    operation: '查看',
  },
  {
    carNumber: '苏A12349',
    driverPhone: '13888888888',
    reason: '车辆超速',
    description: '车辆超速',
    seller: '卖方企业',
    buyer: '买方企业',
    operation: '查看',
  },
];

const WarningHistoryTable = () => {
  return (
    <div>
      <ProTable columns={columns} dataSource={dataSource} rowKey="carNumber" />
    </div>
  );
};

export default WarningHistoryTable;
