import React, { useState } from 'react';
import { Tag, Button } from 'antd';
import linebbg from '@/assets/images/linebbg.png';
import styles from '../index.less';
import ModalCard from '@/pages/dataOverview/DataScreen/components/ModalCard';

const WarningCard = (props) => {
  const { status = 2, title = '标题', isShowTag = 'ture' } = props;
  const [open, setOpen] = useState(false);
  //标签信息
  const tags = [
    <Tag key="0" color="#f50">
      离线
    </Tag>,
    <Tag key="1" color="#87d068">
      在线
    </Tag>,
    <Tag key="2" color="#108ee9">
      未知
    </Tag>,
  ];

  function changeOpen() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <div className={styles.WarningCard}>
      <div className={styles.WarningCardContext}>
        <div>
          {isShowTag ? tags[status] : ''}
          <div>{title}</div>
        </div>
        <Button size="small" ghost shape="round" onClick={() => changeOpen()}>
          详情
        </Button>
      </div>
      <img className={styles.WarningCardBackgroundImg} src={linebbg} alt="" />
      <ModalCard open={open} changeOpen={changeOpen} />
    </div>
  );
};

export default WarningCard;
