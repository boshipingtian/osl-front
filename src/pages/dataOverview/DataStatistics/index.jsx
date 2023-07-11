import React from 'react';
import { Card, Col, Row } from 'antd';
import * as echarts from 'echarts';

import BarBasic from '@/components/Charts/BarBasic';
import CardLineCharts from '@/components/Charts/CardLineCharts';
import CardLineBackGroundCharts from '@/components/Charts/CardLineBackGroundCharts';
import CardItemNumber from '@/components/CardItemNumber';
import { CreateMonth, CreateWeek, RandomData } from '@/utils/random';

//业务数据统计
const data_transportation = {
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
  xAxis: [
    {
      type: 'category',
      data: CreateMonth(1),
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
      name: '报警次数',
      type: 'line',
      yAxisIndex: 0,
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        width: 2,
        color: '#3BA0FF',
      },
      emphasis: {
        focus: 'series',
      },
      itemStyle: {
        borderWidth: 2,
        borderColor: '#3BA0FF',
        color: '#FFFFFF',
      },
      data: RandomData(400, 500, 31),
    },
    {
      name: '已处理',
      type: 'line',
      yAxisIndex: 1,
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        width: 2,
        color: '#36CBCB',
      },
      itemStyle: {
        borderWidth: 2,
        borderColor: '#36CBCB',
        color: '#FFFFFF',
      },
      emphasis: {
        focus: 'series',
      },
      data: RandomData(300, 400, 31),
    },
    {
      name: '总运次',
      type: 'line',
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        width: 2,
        color: '#2ed573',
      },
      itemStyle: {
        borderWidth: 2,
        borderColor: '#2ed573',
        color: '#FFFFFF',
      },
      emphasis: {
        focus: 'series',
      },
      data: RandomData(500, 550, 31),
    },
  ],
};
//运输次数统计
const Statistics_transportation = {
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
    data: ['运量', '运次'],
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
      name: '运量',
      type: 'value',
      nameTextStyle: {
        padding: [0, 50, 0, 0],
      },
    },
    {
      name: '运次',
      alignTicks: true,
      type: 'value',
      nameTextStyle: {
        padding: [0, 0, 0, 50],
      },
    },
  ],
  series: [
    {
      name: '运量',
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
      data: RandomData(400, 500, 7),
    },
  ],
};
//报警统计
const warning_transportation = {
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
    data: ['报警次数', '已处理', '总运次'],
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
      name: '报警次数',
      yAxisIndex: 0,
      type: 'line',
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
      name: '已处理',
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
      data: RandomData(500, 600, 7),
    },
    {
      name: '总运次',
      type: 'line',
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: {
        width: 2,
        color: '#ECCA3F',
      },
      emphasis: {
        focus: 'series',
      },
      areaStyle: {
        opacity: 0.25,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#ECCA3F',
          },
          {
            offset: 1,
            color: '#ffffff',
          },
        ]),
      },
      itemStyle: {
        borderWidth: 2,
        borderColor: '#ECCA3F',
        color: '#FFFFFF',
      },
      data: RandomData(300, 500, 7),
    },
  ],
};

//平台域控数
const platformDataOption = {
  grid: {
    top: '0px',
    left: '0px',
    bottom: '0px',
    right: '0px',
  },
  xAxis: {
    type: 'category',
    show: false,
  },
  yAxis: {
    type: 'value',
    show: false,
  },
  series: [
    {
      data: RandomData(100, 200, 31),
      type: 'bar',
      itemStyle: {
        color: '#1890FF',
      },
    },
  ],
};

const DataCard = (props) => {
  const { title, info } = props;
  return (
    <Card>
      <CardItemNumber title={title} info={info} />
      <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: '15px' }}>
        <div
          style={{ width: '50px', lineHeight: '14px', fontSize: '14px', color: 'rgba(0,0,0,0.85)' }}
        >
          日增量
        </div>
        <div style={{ width: 'calc(100% - 50px)' }}>
          <BarBasic option={platformDataOption} style={{ height: '25px' }} />
        </div>
      </div>
      <div
        style={{
          width: '100%',
          margin: '15px 0 10px 0',
          backgroundColor: '#E8E8E8',
          height: '1px',
        }}
      />
      <Row gutter={24}>
        {[
          {
            title: '日均增加',
            value: '4个',
          },
          {
            title: '今日增加',
            value: '0个',
          },
        ].map((value) => (
          <Col span={12} key={value.title} style={{ fontSize: '14px' }}>
            <span style={{ marginRight: '5px' }}>{value.title}</span>
            <span>{value.value}</span>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

function Index() {
  return (
    <div>
      <Card headStyle={{ fontSize: '18px', fontWeight: 'bold' }} title="场控域控统计">
        <Row gutter={24}>
          <Col span={7}>
            {/*平台域控数*/}
            {DataCard({ title: '平台域控数', info: '126,560 个' })}
          </Col>

          <Col span={10}>
            {/*平台总场控数*/}
            <Card>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                  <CardItemNumber
                    infoStyle={{ fontSize: '36px' }}
                    title={'平台总场控数'}
                    info={'126,560 个'}
                  />

                  <Row style={{ marginTop: '15.15px' }}>
                    <Col span={24}>
                      <span style={{ marginRight: '5px' }}>总场数增加</span>
                      <span>12个</span>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: '10px' }}>
                    {[
                      {
                        title: '买方场数增加',
                        value: '12个',
                      },
                      {
                        title: '卖方场数增加',
                        value: '12个',
                      },
                    ].map((value) => (
                      <Col span={12} key={value.title} style={{ fontSize: '14px' }}>
                        <span style={{ marginRight: '5px' }}>{value.title}</span>
                        <span>{value.value}</span>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div style={{ width: '1px', height: 'inherit', backgroundColor: '#E8E8E8' }} />

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <CardItemNumber
                    infoStyle={{ fontSize: '28px' }}
                    title={'买方场控数'}
                    info={'126,560 个'}
                  />
                  <CardItemNumber
                    infoStyle={{ fontSize: '28px' }}
                    title={'卖方场控数'}
                    info={'126,560 个'}
                  />
                </div>
              </div>
            </Card>
          </Col>

          <Col span={7}>
            {/*平台物流公司总数*/}
            {DataCard({ title: '平台物流公司总数', info: '126,560 个' })}
          </Col>
        </Row>
      </Card>

      <Row style={{ marginTop: '24px' }}>
        <Col span={24}>
          <CardLineCharts title="业务数据统计" option={data_transportation} />
        </Col>
      </Row>

      <Row gutter={24} style={{ marginTop: '24px' }}>
        <Col span={12}>
          <CardLineBackGroundCharts title={'运输次数统计'} option={Statistics_transportation} />
        </Col>
        <Col span={12}>
          <CardLineBackGroundCharts
            title={'报警统计'}
            isShowButton={true}
            buttonText="报警列表"
            option={warning_transportation}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Index;
