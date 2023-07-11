import React from 'react';
import TableSearchPro from '@/components/Table/TableSearchPro';
import BasicTable from '@/components/Table/BasicTable';
import { history } from 'umi';
import { Button } from 'antd';

const selectOption = [
  {
    title: '分类',
    data: ['运单号', '企业', '负责人', '联系方式'],
  },
  {
    title: '关键词',
    data: ['运单号', '企业', '负责人', '联系方式'],
  },
  {
    title: '报警原因',
    data: ['运单号', '企业', '负责人', '联系方式'],
  },
];

const columns = [
  {
    title: '时间',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '车牌号',
    dataIndex: 'carNumber',
    key: 'carNumber',
  },
  {
    title: '司机联系方式',
    dataIndex: 'driverContact',
    key: 'driverContact',
  },
  {
    title: '报警原因',
    dataIndex: 'warningReason',
    key: 'warningReason',
  },
  {
    title: '报警描述',
    dataIndex: 'warningDesc',
    key: 'warningDesc',
  },
  {
    title: '卖方企业',
    dataIndex: 'sellBusiness',
    key: 'sellBusiness',
  },
  {
    title: '买方企业',
    dataIndex: 'buyerBusiness',
    key: 'buyerBusiness',
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
    pathname: '/platform-monitor/audit-monitor/detail',
    query: {
      id: 'a',
    },
  });
};

const dataSource = [
  {
    date: '2022-02-02',
    carNumber: '冀1312D',
    driverContact: '123123123',
    warningReason: '车辆故障',
    warningDesc: '管理员名称',
    sellBusiness: '卖方企业',
    buyerBusiness: '买方企业',
    operate: '查看详情',
  },
];
const Index = () => {
  return (
    <div>
      <TableSearchPro selectOption={selectOption} style={{ marginBottom: '20px' }} />
      <BasicTable
        columns={columns}
        title="报警列表"
        dataSource={dataSource}
        isShowTitleButton={false}
        rowKey={(record) => record.driverContact}
        footerMore={
          <Button
            type="primary"
            onClick={() => {
              history.push({
                pathname: '/history-data/history-alarm',
                query: {
                  id: 'a',
                },
              });
            }}
          >
            历史报警
          </Button>
        }
      />
    </div>
  );
};

export default Index;
