import React from 'react';
import BasicTable from '@/components/Table/BasicTable';
import { history } from 'umi';
import TableSearch from '@/components/Table/TableSearch';

const columns = [
  {
    title: '开始时间',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: '结束时间',
    dataIndex: 'endDate',
    key: 'endDate',
  },
  {
    title: '订单号',
    dataIndex: 'orderNumber',
    key: 'orderNumber',
  },
  {
    title: '买方企业',
    dataIndex: 'buyerBusiness',
    key: 'country',
  },
  {
    title: '买方企业负责人',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: '卖方企业',
    dataIndex: 'leader',
    key: 'leader',
  },
  {
    title: '卖方企业负责人',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value) => (
      <a
        onClick={() => {
          history.push({
            pathname: '/history-data/history-business/history-order/detail',
            query: {
              id: 'a',
            },
          });
        }}
      >
        {value}
      </a>
    ),
  },
];

const selectOption = ['订单号', '企业', '负责人', '联系方式'];

const dataSource = [
  {
    startDate: '2022-01-01',
    endDate: '2022-01-20',
    orderNumber: 'DD123123123',
    buyerBusiness: '买方企业名称',
    region: '管理员',
    leader: '卖方企业名称',
    contact: '管理员名称',
    operate: '查看详情',
  },
];

const Index = () => {
  return (
    <div>
      <TableSearch style={{ marginBottom: '20px' }} selectOption={selectOption} />
      <BasicTable
        columns={columns}
        title="历史订单列表"
        isShowTitleButton={false}
        dataSource={dataSource}
        rowKey={(record) => record.orderNumber}
      />
    </div>
  );
};

export default Index;
