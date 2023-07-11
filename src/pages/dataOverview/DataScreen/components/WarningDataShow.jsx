import React, { useState } from 'react';
import { Button, Space } from 'antd';
import styles from '../index.less';

const WarningDataShow = () => {
  const [currentPage] = useState(1);
  const [fullPage] = useState(1);
  return (
    <div>
      {/*分页器*/}
      <div className={styles.WarningPageChange}>
        <Space>
          <Button size="small"> {'<'} </Button>
          <Button size="small"> {'>'} </Button>
          <div className={styles.WarningPageChangeText}>
            {`当前第${currentPage}页/共${fullPage}页`}
          </div>
        </Space>
      </div>
    </div>
  );
};

export default WarningDataShow;
