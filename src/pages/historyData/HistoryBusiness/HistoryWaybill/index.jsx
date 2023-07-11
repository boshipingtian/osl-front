import React from 'react';
import TableSearch from '@/components/Table/TableSearch';
import BasicTable from '@/components/Table/BasicTable';
import { history } from 'umi';

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
    title: '运单号',
    dataIndex: 'waybillNumber',
    key: 'waybillNumber',
  },
  {
    title: '物流企业',
    dataIndex: 'LogisticsEnterprise',
    key: 'LogisticsEnterprise',
  },
  {
    title: '总绑定车辆',
    dataIndex: 'totalBindCar',
    key: 'totalBindCar',
  },
  {
    title: '总运次',
    dataIndex: 'totalTrans',
    key: 'totalTrans',
  },
  {
    title: '报警次数',
    dataIndex: 'warningNumber',
    key: 'warningNumber',
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
    pathname: '/history-data/history-business/history-waybill/detail',
    query: {
      id: 'b',
    },
  });
};

const selectOption = ['订单号', '企业', '负责人', '联系方式'];

const dataSource = [
  {
    startDate: '2022-01-01',
    endDate: '2022-01-20',
    waybillNumber: 'DD123123123',
    LogisticsEnterprise: '企业名称',
    totalBindCar: '123',
    totalTrans: '123',
    warningNumber: '123',
    operate: '查看详情',
  },
];

const Index = () => {
  return (
    <div>
      <TableSearch style={{ marginBottom: '20px' }} selectOption={selectOption} />
      <BasicTable
        columns={columns}
        title="历史运单列表"
        isShowTitleButton={false}
        dataSource={dataSource}
      />
    </div>
  );
};

export default Index;
