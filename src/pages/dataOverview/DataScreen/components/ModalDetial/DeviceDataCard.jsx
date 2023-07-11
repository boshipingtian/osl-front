import React from 'react';
import {
  ShoppingTwoTone,
  CheckCircleTwoTone,
  ShopTwoTone,
  PauseCircleTwoTone,
  WarningTwoTone,
  QuestionCircleTwoTone,
} from '@ant-design/icons';
import { Button, Space } from 'antd';
import styles from '../../index.less';

const nameList = {
  sell_in: {
    icon: <ShopTwoTone style={{ fontSize: '32px' }} />,
    title: '卖方入口',
  },
  sell_out: {
    icon: <ShopTwoTone style={{ fontSize: '32px' }} />,
    title: '卖方出口',
  },
  buy_in: {
    icon: <ShoppingTwoTone twoToneColor="#ffa502" style={{ fontSize: '32px' }} />,
    title: '买方入口',
  },
  buy_out: {
    icon: <ShoppingTwoTone twoToneColor="#ffa502" style={{ fontSize: '32px' }} />,
    title: '买方出口',
  },
};
const statusList = {
  normal: {
    icon: <CheckCircleTwoTone twoToneColor="#2ed573" style={{ fontSize: '32px' }} />,
    title: '正常',
  },
  abnormal: {
    icon: <WarningTwoTone twoToneColor="#ff6348" style={{ fontSize: '32px' }} />,
    title: '异常',
  },
  suspend: {
    icon: <PauseCircleTwoTone twoToneColor="#eccc68" style={{ fontSize: '32px' }} />,
    title: '暂停',
  },
  no_equipment: {
    icon: <QuestionCircleTwoTone twoToneColor="#1890FF" style={{ fontSize: '32px' }} />,
    title: '无设备',
  },
};
const DeviceDataCard = (props) => {
  const { name, status, todayWorkCounts, maintenanceTime } = props;

  return (
    <div className={styles.DeviceDataCard}>
      <div className={styles.leftContent}>
        <div className={styles.context}>
          <Space>
            {nameList[name].icon}
            <div>{nameList[name].title}</div>
          </Space>
        </div>
        <div className={styles.moreInfo}>
          <div>{`今日工作次数: ${todayWorkCounts}`}</div>
          <div>{`上次维护时间: ${maintenanceTime}`}</div>
        </div>
      </div>
      <div className={styles.rightContent}>
        <div>
          <Space>
            {statusList[status].icon}
            {<b>{statusList[status].title}</b>}
          </Space>
        </div>
        <div>
          <Button type="primary">查看设备</Button>
        </div>
      </div>
    </div>
  );
};

export default DeviceDataCard;
