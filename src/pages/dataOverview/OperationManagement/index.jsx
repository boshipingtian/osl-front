import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import CardLineBackGroundCharts from '@/components/Charts/CardLineBackGroundCharts';
import CardItemNumber from '@/components/CardItemNumber';
import { CreateWeek, RandomData } from '@/utils/random';
import * as echarts from 'echarts';

const ex_data = [
  {
    title: '平台现用户数',
    info: '126,560人',
  },
  {
    title: '今日新增用户数',
    info: '126,560人',
  },
  {
    title: '今日活跃用户数',
    info: '126,560人',
  },
];

//营收情况
const revenueOption = {
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
    data: ['营收'],
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
      name: '金额',
      type: 'value',
      nameTextStyle: {
        padding: [0, 50, 0, 0],
      },
    },
  ],
  series: [
    {
      name: '营收',
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
  ],
};
//营收次数
const revenueCountOption = {
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
    data: ['营运次数'],
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
      name: '营运次数',
      type: 'value',
      nameTextStyle: {
        padding: [0, 50, 0, 0],
      },
    },
  ],
  series: [
    {
      name: '营运次数',
      type: 'line',
      yAxisIndex: 0,
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
      data: RandomData(400, 500, 7),
    },
  ],
};
const Index = () => {
  return (
    <div>
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <Card headStyle={{ fontSize: '18px', fontWeight: 'bold' }} title="平台运营数据">
            <Row>
              {ex_data.map((item) => {
                return (
                  <Col span={8} key={item.title}>
                    <CardItemNumber
                      title={item.title}
                      info={item.info}
                      marginLeftRight={{ margin: '0 20px' }}
                    />
                  </Col>
                );
              })}
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            headStyle={{ fontSize: '18px', fontWeight: 'bold' }}
            title="服务费价格"
            extra={<Button type="primary">修改</Button>}
          >
            <span style={{ fontSize: '40px', fontWeight: 'normal' }}>320</span>
            <span style={{ fontSize: '20px', marginLeft: '10px', color: 'rgba(0,0,0,0.45)' }}>
              元/次
            </span>
          </Card>
        </Col>

        <Col span={24}>
          <Card headStyle={{ fontSize: '18px', fontWeight: 'bold' }} title="服务费统计">
            <Row gutter={24}>
              <Col span={12}>
                <CardLineBackGroundCharts
                  titleStyle={{ fontWeight: 'normal', fontSize: '16px' }}
                  title={'营收情况'}
                  option={revenueOption}
                />
              </Col>
              <Col span={12}>
                <CardLineBackGroundCharts
                  titleStyle={{ fontWeight: 'normal', fontSize: '16px' }}
                  title={'营运次数'}
                  option={revenueCountOption}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
