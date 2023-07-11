import React from 'react';
import ReactEcharts from 'echarts-for-react';
import styles from './index.less';

const option = {
  tooltip: {
    trigger: 'item',
  },
  graphic: {
    type: 'text',
    left: 'center',
    top: '88%',
    style: {
      text: '在线率',
      textAlign: 'center',
      // fontWeight:'bold',
      fill: '#000',
      fontSize: 16,
    },
  },
  grid: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      title: '123',
      label: {
        show: false,
        // position: 'center'
      },
      emphasis: {
        // label: {
        //   show: true,
        //   fontSize: '40',
        //   fontWeight: 'bold'
        // }
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
      ],
    },
  ],
};

const Index = () => {
  return (
    <div className={styles.BlockItemEchartsContainer}>
      <ReactEcharts style={{ height: 140 }} key={0} option={option} />
      <ReactEcharts style={{ height: 140 }} key={1} option={option} />
      <ReactEcharts style={{ height: 140 }} key={2} option={option} />
      <ReactEcharts style={{ height: 140 }} key={3} option={option} />
    </div>
  );
};

export default Index;
