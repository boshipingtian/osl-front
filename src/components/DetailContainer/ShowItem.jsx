import React from 'react';
import styles from './index.less';

const Index = (props) => {
  const { title = 'title', value = 'value', fontSize = '24px' } = props;

  return (
    <div className={styles.ShowItem}>
      <span className={styles.title} style={{ fontSize: fontSize }}>
        {title}：{' '}
      </span>
      <span className={styles.value} style={{ fontSize: fontSize }}>
        {value}
      </span>
    </div>
  );
};

export default Index;
