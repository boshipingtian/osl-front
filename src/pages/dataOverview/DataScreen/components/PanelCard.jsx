import React from 'react';
import styles from '../index.less';
import allcenterbg from '@/assets/images/allcenterbg.png';
import imgTopLeft from '@/assets/images/leftt.png';
import imgTopRight from '@/assets/images/rightt.png';
import imgBottomLeft from '@/assets/images/leftb.png';
import imgBottomRight from '@/assets/images/rightb.png';

const Index = (props) => {
  const { title = 'title', width = '280px', height } = props;
  return (
    <div className={styles.PanelCardContainer} style={{ width, height }}>
      <img className={styles.PanelCardBackGroundImage} src={allcenterbg} alt="" />
      <img className={styles.imgTopLeft} src={imgTopLeft} alt="" />
      <img className={styles.imgTopRight} src={imgTopRight} alt="" />
      <img className={styles.imgBottomLeft} src={imgBottomLeft} alt="" />
      <img className={styles.imgBottomRight} src={imgBottomRight} alt="" />

      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <div className={styles.context}>{props.children}</div>
      </div>
    </div>
  );
};

export default Index;
