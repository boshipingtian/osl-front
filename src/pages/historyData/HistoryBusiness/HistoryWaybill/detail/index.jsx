//运单详情
import React from 'react';
import BusinessInfo from '@/components/Info/BusinessInfo';
import { Button, Card, Col, Descriptions, Radio, Row, Space, Tabs, Tag } from 'antd';
import BasicTable from '@/components/Table/BasicTable';
import { history } from 'umi';
import CircleCharts from '@/components/Charts/CircleCharts';
import LineBackgroundCharts from '@/components/Charts/LineBackgroundCharts';
import { CreateMonth, CreateWeek, RandomData } from '@/utils/random';
import * as echarts from 'echarts';

const infoData = [
  {
    title: '物流企业',
    data: '啊吧啊吧公司',
    id: 18,
  },
  {
    title: '卖方企业',
    data: '啊吧啊吧公司',
    id: 18,
  },
  {
    title: '买方企业',
    data: '啊吧啊吧公司',
    id: 18,
  },
  {
    title: '企业负责人',
    data: '啊吧啊吧',
  },
  {
    title: '企业负责人',
    data: '啊吧啊吧',
  },
  {
    title: '企业负责人',
    data: '啊吧啊吧',
  },
  {
    title: '联系方式',
    data: '12312312312',
  },
  {
    title: '联系方式',
    data: '12312312312',
  },
  {
    title: '联系方式',
    data: '12312312312',
  },
];

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
    title: '司机',
    dataIndex: 'driver',
    key: 'driver',
  },
  {
    title: '车辆',
    dataIndex: 'car',
    key: 'car',
  },
  {
    title: '是否报警',
    dataIndex: 'warning',
    key: 'warning',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value) => (
      <a
        onClick={() => {
          history.push({
            pathname: '/history-data/history-transportation/trans-times',
            query: {
              transId: 2,
            },
          });
        }}
      >
        {value}
      </a>
    ),
  },
];

const dataSource = [
  {
    startDate: '2022-01-01',
    endDate: '2022-01-20',
    driver: '司机',
    car: '车车车',
    warning: '否',
    operate: '查看详情',
  },
];

const Index = () => {
  return (
    <Row gutter={20}>
      <Col span={16}>
        <BusinessInfo
          title="运单号：1234567890"
          infoColumn={3}
          isShowCreateDate={false}
          createDate={
            <span>
              绑定订单号：
              <a
                onClick={() => {
                  history.push({
                    pathname: '/history-data/history-business/history-order/detail',
                    query: {
                      id: 'b',
                    },
                  });
                }}
              >
                12345678900
              </a>
            </span>
          }
          infoData={infoData}
          style={{ marginBottom: '20px' }}
        />
      </Col>

      <Col span={8}>
        <Card style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span style={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
              运单详情
            </span>
          </div>
          <Descriptions column={2}>
            <Descriptions.Item label="运货种类">
              <a>啊吧啊吧</a>
            </Descriptions.Item>
            <Descriptions.Item label="运单重量">123KG</Descriptions.Item>
            <Descriptions.Item label="运单总运量">123KG</Descriptions.Item>
            <Descriptions.Item label="总报警次数">12</Descriptions.Item>
            <Descriptions.Item label="签订时间">2022-01-01</Descriptions.Item>
            <Descriptions.Item label="结束时间">2022-01-01</Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>

      <Col span={24}>
        <BasicTable
          title="历史运次"
          columns={columns}
          dataSource={dataSource}
          footerMore="绑定车辆总数：12"
          isShowTitleButton={false}
          titleButton={
            <Radio.Group defaultValue="全部">
              <Radio.Button value="全部">全部</Radio.Button>
              <Radio.Button value="已报警">已报警</Radio.Button>
              <Radio.Button value="未报警">未报警</Radio.Button>
            </Radio.Group>
          }
        />
      </Col>
    </Row>
  );
};

export default Index;
