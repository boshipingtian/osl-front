import React from 'react';
import PanelCard from '@/pages/dataOverview/DataScreen/components/PanelCard';
import NumberDataShow from '@/pages/dataOverview/DataScreen/components/NumberDataShow';
import WarningDataShow from '@/pages/dataOverview/DataScreen/components/WarningDataShow';
import ReactEcharts from 'echarts-for-react';
import styles from '@/pages/dataOverview/DataScreen/index.less';
import WarningCard from '@/pages/dataOverview/DataScreen/components/WarningCard';

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
      text: '在线率',
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
            color: 'rgb(21, 61, 94)',
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

const LeftContent = () => {
  return (
    <div className={styles.leftContent}>
      <PanelCard title="车辆数据">
        <div className={styles.NumberDataShowContent}>
          <div>
            <NumberDataShow title="跑单中车辆" numberArray={[0, 0, 1, 1]} />
            <NumberDataShow title="闲置车辆" numberArray={[0, 0, 1, 1]} />
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
      <PanelCard title="场控列表">
        <div>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
            return (
              <WarningCard
                key={index}
                title="买卖企业名称"
                isShowTag={false}
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

export default LeftContent;
