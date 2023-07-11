import React from 'react';
import styles from '../index.less';

const Index = (props) => {
  const { number = 0 } = props;
  return <div className={styles.NumberLight}>{number}</div>;
};

export default Index;
