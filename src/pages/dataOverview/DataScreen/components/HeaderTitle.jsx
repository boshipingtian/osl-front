import React from 'react';
import styles from '../index.less';
import header_left from '@/assets/images/header_left.png';
import header_right from '@/assets/images/header_right.png';

const HeaderTitle = (props) => {
  const { title = 'title' } = props;
  return (
    <div className={styles.headerContainer}>
      <img src={header_left} alt="" />
      {title}
      <img src={header_right} alt="" />
    </div>
  );
};

export default HeaderTitle;
