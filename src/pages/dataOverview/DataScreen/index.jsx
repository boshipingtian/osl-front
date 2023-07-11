import React from 'react';
import styles from './index.less';
import HeaderTitle from './components/HeaderTitle';
import MapData from './components/MapData';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';

import background from '@/assets/images/background.png';

const Index = () => {
  return (
    <div className={styles.dataScreenContainer}>
      {/*背景图片*/}
      <img className={styles.dataScreenContainerImage} src={background} alt="" />

      {/*头部*/}
      <HeaderTitle title="省油灯数据大屏" />

      {/*主内容 grid布局*/}
      <div className={styles.mainContent}>
        {/*左布局*/}
        <LeftContent />

        {/*地图组件*/}
        <div className={styles.mapData}>
          <MapData />
        </div>

        {/*右布局*/}
        <RightContent />
      </div>
    </div>
  );
};

export default Index;
