//历史订单详情
import React from 'react';
import BusinessInfo from '@/components/Info/BusinessInfo';
import { Button, Card, Col, Descriptions, message, Row, Space, Tag } from 'antd';
import BasicTable from '@/components/Table/BasicTable';
import { history } from 'umi';

const infoData = [
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
    title: '运单号',
    dataIndex: 'businessName',
    key: 'businessName',
  },
  {
    title: '公司',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: '负责人',
    dataIndex: 'leader',
    key: 'leader',
  },
  {
    title: '联系方式',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (value) => {
      return (
        <span
          style={{ color: '#1890FF', cursor: 'pointer' }}
          onClick={() => {
            history.push({
              pathname: '/history-data/history-business/history-waybill/detail',
              query: {
                id: 'b',
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

const dataSource = [
  {
    businessName: 'YD1231231231',
    country: '公司名称',
    leader: '负责人',
    contact: '12345678910',
    operate: '查看详情',
  },
];

const Index = () => {
  return (
    <Row gutter={20}>
      <Col span={16}>
        <BusinessInfo
          title="订单号：1234567890"
          isShowCreateDate={false}
          createDate={
            <Space>
              <Tag color="blue">已完成</Tag>
              <Button type="danger" onClick={() => message.error('开发中')}>
                删除
              </Button>
            </Space>
          }
          infoColumn={2}
          infoData={infoData}
          style={{ marginBottom: '20px' }}
        />
      </Col>
      <Col span={8}>
        <Card style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span style={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
              订单详情
            </span>
          </div>
          <Descriptions column={2}>
            <Descriptions.Item label="运货种类">
              <a>啊吧啊吧</a>
            </Descriptions.Item>
            <Descriptions.Item label="签订时间">xxxix年xx月xxx日</Descriptions.Item>
            <Descriptions.Item label="订单金额">1234万元</Descriptions.Item>
            <Descriptions.Item label="订单重量">123KG</Descriptions.Item>
            <Descriptions.Item label="已完成运量">123KG</Descriptions.Item>
            <Descriptions.Item label="今日运量">123KG</Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>
      <Col span={24}>
        <BasicTable
          title="绑定运单"
          columns={columns}
          dataSource={dataSource}
          footerMore={
            <Button
              type="primary"
              onClick={() => {
                history.push({
                  pathname: '/history-data/history-business/history-waybill',
                  query: {
                    id: 'b',
                  },
                });
              }}
            >
              历史绑定运单
            </Button>
          }
          isShowTitleButton={false}
          titleButton={<span style={{ fontSize: '16px' }}>绑定运单总数：12</span>}
        />
      </Col>
    </Row>
  );
};

export default Index;
