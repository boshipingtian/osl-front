import React from 'react';
import PanelCard from '@/pages/dataOverview/DataScreen/components/PanelCard';
import styles from '@/pages/dataOverview/DataScreen/index.less';
import NumberDataShow from '@/pages/dataOverview/DataScreen/components/NumberDataShow';
import ReactEcharts from 'echarts-for-react';
import WarningCard from '@/pages/dataOverview/DataScreen/components/WarningCard';
import WarningDataShow from '@/pages/dataOverview/DataScreen/components/WarningDataShow';

const option = {
  title: {
    text: '80%',
    left: 'center',
    top: '49%',
    textStyle: {
      color: '#fff',
      fontSize: 12,
      align: 'center',
    },
  },
  graphic: {
    type: 'text',
    left: 'center',
    top: '43%',
    style: {
      text: '处理率',
      textAlign: 'center',
      fill: '#0582b8',
      fontSize: 12,
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
      type: 'pie',
      radius: ['45%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },
      data: [
        {
          value: 335,
          itemStyle: {
            color: '#00aeef',
          },
        },
        {
          value: 310,
          itemStyle: {
            color: '#ff0000',
          },
        },
      ],
    },
    {
      silent: true,
      name: '外边框',
      type: 'pie',
      radius: ['100%', '100%'], //边框大小
      center: ['50%', '50%'], //边框位置
      label: {
        show: false,
        position: 'center',
      },
      data: [
        {
          value: 10,
          itemStyle: {
            normal: {
              borderWidth: 1, //设置边框粗细
              borderColor: '#00aeef', //边框颜色
            },
          },
        },
      ],
    },
  ],
};

const Index = () => {
  return (
    <div className={styles.rightContent}>
      <PanelCard title="今日报警">
        <div className={styles.NumberDataShowContent}>
          <div>
            <NumberDataShow title="已处理" numberArray={[0, 0, 1, 1]} />
            <NumberDataShow title="未处理" numberArray={[0, 0, 1, 1]} />
          </div>
          <div>
            <ReactEcharts
              style={{ height: '150px' }}
              className={styles.NumberDataCharts}
              option={option}
            />
          </div>
        </div>
      </PanelCard>
      <PanelCard title="域控列表">
        <div>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
            return (
              <WarningCard
                key={index}
                title="DD123131231"
                status={Math.floor(Math.random() * 3)}
                id={123}
              />
            );
          })}
        </div>

        <div className={styles.WarningPageChange}>
          <WarningDataShow />
        </div>
      </PanelCard>
    </div>
  );
};

export default Index;
