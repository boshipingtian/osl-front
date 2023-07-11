import React from 'react';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, message, Spin } from 'antd';
import { history } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import { logout } from '@/services/user/login';

const AvatarDropdown = ({ menu }) => {
  let userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const onMenuClick = async (event) => {
    const { key } = event;

    if (key === 'logout') {
      const res = await logout();
      console.log(res);
      if (res.code === 200 && res.msg === '成功退出登录') {
        localStorage.setItem('userInfo', null);
        localStorage.setItem('token', null);
        userInfo = null;
        message.success('退出登陆成功');
        history.push('/user/login');
      } else {
        message.error('退出登陆失败');
      }
    }
  };

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!userInfo) {
    return loading;
  }

  const currentUser = userInfo;

  if (!currentUser || !currentUser.name) {
    return loading;
  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      {menu && (
        <Menu.Item key="center">
          <UserOutlined />
          个人中心
        </Menu.Item>
      )}
      {menu && (
        <Menu.Item key="settings">
          <SettingOutlined />
          个人设置
        </Menu.Item>
      )}
      {menu && <Menu.Divider />}

      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className={`${styles.action} ${styles.account}`}>
        <Avatar
          size="small"
          className={styles.avatar}
          src={currentUser.headPictrueUrl}
          alt="avatar"
        />
        <span className={`${styles.name} anticon`}>{currentUser.name}</span>
      </span>
    </HeaderDropdown>
  );
};

export default AvatarDropdown;
