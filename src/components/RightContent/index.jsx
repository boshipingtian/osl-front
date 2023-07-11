import { Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang, Link } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

const GlobalHeaderRight = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space className={className}>
      {/*数据大屏*/}
      <Link className={`${styles.action} ${styles.dataScreen}`} to="/data-screen">
        数据大屏
      </Link>
      {/*头部搜索*/}
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        options={[]}
      />
      {/*疑难解答*/}
      <span
        className={styles.action}
        onClick={() => {
          window.open('https://pro.ant.design/docs/getting-started');
        }}
      >
        <QuestionCircleOutlined />
      </span>
      {/*头像*/}
      <Avatar />
      {/*多语言*/}
      <SelectLang className={styles.action} />
    </Space>
  );
};

export default GlobalHeaderRight;
