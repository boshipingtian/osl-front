import React from 'react';
import styles from '@/pages/dataOverview/DataScreen/index.less';
import NumberLight from '@/pages/dataOverview/DataScreen/components/NumberLight';

const Index = (props) => {
  const { title = '标题', numberArray = [0, 0, 0, 0] } = props;

  return (
    <div className={styles.NumberDataShow}>
      <div className={styles.NumberDataShowTitle}>{title}</div>
      <div>
        {numberArray.map((value) => {
          return <NumberLight key={Math.floor(Math.random() * 100)} number={value} />;
        })}
      </div>
    </div>
  );
};

export default Index;
