import React from 'react';
import TableSearch from '@/components/Table/TableSearch';
import BasicTable from '@/components/Table/BasicTable';
import { history } from 'umi';

const columns = [
  {
    title: '运单号',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
  },
  {
    title: '买方企业',
    dataIndex: 'buyerBusiness',
    key: 'buyerBusiness',
  },
  {
    title: '卖方企业',
    dataIndex: 'leader',
    key: 'leader',
  },
  {
    title: '物流企业',
    dataIndex: 'leader',
    key: 'leader',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value) => <a onClick={getMore}>{value}</a>,
  },
];
const getMore = () => {
  history.push({
    pathname: '/platform-monitor/business-monitor/waybill/detail',
    query: {
      id: 'a',
    },
  });
};

const selectOption = ['运单号', '企业', '负责人', '联系方式'];

const dataSource = [
  {
    orderNumber: 'DD123123123',
    buyerBusiness: '买方企业名称',
    region: '卖方企业名称',
    leader: '物流企业名称',
    operate: '查看详情',
  },
];

const Index = () => {
  return (
    <div>
      <TableSearch style={{ marginBottom: '20px' }} selectOption={selectOption} />
      <BasicTable
        columns={columns}
        title="运单列表"
        rowKey={(record) => record.orderNumber}
        dataSource={dataSource}
      />
    </div>
  );
};

export default Index;
