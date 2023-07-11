//运单详情
import React from 'react';
import BusinessInfo from '@/components/Info/BusinessInfo';
import { Button, Card, Col, Descriptions, Radio, Row, Space, Tag } from 'antd';
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
  },
  {
    title: '卖方企业',
    data: '啊吧啊吧公司',
  },
  {
    title: '买方企业',
    data: '啊吧啊吧公司',
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
];

const columns = [
  {
    title: '车牌号',
    dataIndex: 'businessName',
    key: 'businessName',
  },
  {
    title: '公司',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: '司机',
    dataIndex: 'leader',
    key: 'leader',
  },
  {
    title: '联系方式',
    dataIndex: 'contact',
    key: 'contact',
  },
  {
    title: '车辆状态',
    dataIndex: 'operate1',
    key: 'operate1',
    render: (value) => {
      return <Tag color="blue">{value}</Tag>;
    },
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
              pathname: '/platform-monitor/enterprise-monitor/logistics-enterprise/detail',
              query: {
                id: 'a',
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
    businessName: '鲁S122DW',
    country: '公司名称',
    leader: '司机',
    contact: '12345678910',
    operate1: '运输中',
    operate: '查看详情',
  },
];

const lineOption = {
  grid: {
    top: '40px',
    left: '50px',
    bottom: '70px',
    right: '50px',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      animation: false,
      label: {
        backgroundColor: '#505765',
      },
    },
  },
  legend: {
    data: ['报警', '运次'],
    itemGap: 100,
    bottom: '10px',
  },
  xAxis: [
    {
      type: 'category',
      data: CreateWeek(),
    },
  ],
  yAxis: [
    {
      name: '报警次数',
      type: 'value',
      nameTextStyle: {
        padding: [0, 50, 0, 0],
      },
    },
    {
      name: '已处理',
      alignTicks: true,
      type: 'value',
      nameTextStyle: {
        padding: [0, 0, 0, 50],
      },
    },
  ],
  series: [
    {
      name: '报警',
      type: 'line',
      yAxisIndex: 0,
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        width: 2,
        color: '#5B8FF9',
      },
      emphasis: {
        focus: 'series',
      },
      areaStyle: {
        opacity: 0.25,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#5B8FF9',
          },
          {
            offset: 1,
            color: '#ffffff',
          },
        ]),
      },
      itemStyle: {
        borderWidth: 2,
        borderColor: '#5B8FF9',
        color: '#FFFFFF',
      },
      data: RandomData(400, 500, 7),
    },
    {
      name: '运次',
      type: 'line',
      yAxisIndex: 1,
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        width: 2,
        color: '#36CBCB',
      },
      emphasis: {
        focus: 'series',
      },
      areaStyle: {
        opacity: 0.25,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#36CBCB',
          },
          {
            offset: 1,
            color: '#ffffff',
          },
        ]),
      },
      itemStyle: {
        borderWidth: 2,
        borderColor: '#36CBCB',
        color: '#FFFFFF',
      },
      data: RandomData(300, 500, 7),
    },
  ],
};
const titleButton = (
  <Space>
    <Button type="primary">添加车辆</Button>
  </Space>
);

const option = {
  title: {
    text: '1231吨',
    left: '22%',
    top: '49%',
    textStyle: {
      color: '#000',
      fontSize: 18,
      align: 'center',
    },
  },
  graphic: {
    type: 'text',
    left: '26%',
    top: '43%',
    style: {
      text: '总运量',
      textAlign: 'center',
      fill: '#000',
      fontSize: 12,
    },
  },
  tooltip: {
    trigger: 'item',
  },
  grid: {
    top: '0px',
    left: '50px',
    bottom: '0px',
    right: '50px',
  },
  legend: {
    top: 'center',
    right: '20px',
    orient: 'vertical',
    itemGap: 20,
    icon: 'circle',
    show: true,
  },
  series: [
    {
      type: 'pie',
      radius: ['60%', '95%'],
      center: ['30%', '50%'],
      label: {
        position: 'inside',
        show: true,
        formatter: '{d}%',
        color: '#fff',
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 1048,
          name: '已完成运量',
          itemStyle: {
            color: '#5B8FF9',
          },
        },
        {
          value: 1048,
          name: '未完成运量',
          itemStyle: {
            color: '#5AD8A6',
          },
        },
        {
          value: 1048,
          name: '今日运量',
          itemStyle: {
            color: '#5D7092',
          },
        },
      ],
    },
  ],
};

const Index = () => {
  return (
    <Row gutter={20}>
      <Col span={16}>
        <BusinessInfo
          title="运单号：1234567890"
          createDate="2022年2月2日"
          infoColumn={3}
          infoData={infoData}
          style={{ marginBottom: '20px' }}
        />

        <BasicTable
          title="绑定车辆"
          columns={columns}
          dataSource={dataSource}
          footerMore="绑定运单总数：12"
          titleButton={titleButton}
          rowKey={(record) => record.businessName}
        />
      </Col>
      <Col span={8}>
        <Card style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span style={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
              运单详情
            </span>
            <Button type="primary">编辑</Button>
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
          <CircleCharts style={{ height: '250px' }} option={option} />
        </Card>

        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span style={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
              运单报警数据看板
            </span>
            <Radio.Group defaultValue="b">
              <Radio.Button value="a">今日</Radio.Button>
              <Radio.Button value="b">总</Radio.Button>
            </Radio.Group>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span>今日报警：123</span>
            <span>今日运次：123</span>
          </div>
          <LineBackgroundCharts option={lineOption} />
          <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Button>报警列表</Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Index;
