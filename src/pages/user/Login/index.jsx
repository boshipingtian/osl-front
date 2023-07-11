import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { history } from 'umi';
import { message, Tabs } from 'antd';
import React from 'react';
import { ProFormText, LoginForm } from '@ant-design/pro-form';
import Footer from '@/components/Footer';

import { login } from '@/services/user/login';
import styles from './index.less';

const Login = () => {
  //提前创建本地缓存
  localStorage.setItem('token', null);
  localStorage.setItem('userInfo', null);

  const handleSubmit = async (values) => {
    const data = await login(values);
    const userInfo = data.data;
    if (data.code === 200 && data.msg === 'ok') {
      //存入token
      localStorage.setItem('token', userInfo.token);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      //跳转到首页
      message.success('登陆成功');
      history.push('/');
    } else {
      message.error('登陆失败');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          logo={<img alt="logo" src={'/logo.svg'} />}
          title="省油灯综合管理系统"
          subTitle={''}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values);
          }}
        >
          <Tabs>
            <Tabs.TabPane key="account" tab="账户密码登录" />
          </Tabs>
          <div>
            {/*用户名输入框*/}
            <ProFormText
              name="account"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder="用户名: 956963"
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            {/*密码输入框*/}
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder="密码: 123456"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
            />
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
