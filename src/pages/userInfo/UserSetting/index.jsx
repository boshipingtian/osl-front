import React, { useEffect, useState } from 'react';
import { Card, Tabs, Input, Button, Upload, message, Modal, Space } from 'antd';
import { EyeTwoTone, UploadOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { deleteUser, updatePassword, updateUserInfo } from '@/services/user/user';
import { history } from 'umi';
import { logout } from '@/services/user/login';

const { TabPane } = Tabs;

const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  //更新用户的信息
  //username,holder,holderMobile,file
  const [username, setUsername] = useState('');
  const [holder, setHolder] = useState('');
  const [holderMobile, setHolderMobile] = useState('');
  const [file, setFile] = useState(new File([], '', undefined));
  const [avatar, setAvatar] = useState('');
  //修改用户密码
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordAgain, setNewPasswordAgain] = useState('');

  useEffect(() => {
    // console.log("初始化加载")
    getUserInfo();
    // console.log(username, holder, holderMobile, file)
  }, []);

  //获取用户信息
  const getUserInfo = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    setUsername(userInfo.name);
    setHolder(userInfo.holder);
    setHolderMobile(userInfo.holderMobile);
    setFile(userInfo.headPictrueUrl);
    setAvatar(userInfo.headPictrueUrl);
  };

  //获取用户的信息
  const usernameOnChange = (props) => {
    setUsername(props.target.value);
  };
  const holderOnChange = (props) => {
    setHolder(props.target.value);
  };
  const holderMobileOnChange = (props) => {
    setHolderMobile(props.target.value);
  };
  const fileOnChange = (props) => {
    setFile(props.file);
    // console.log("file:", file)
    // console.log(username, holder, holderMobile, file)
  };
  //确认上传
  const ConfirmUpload = async () => {
    let formdata = new FormData();
    formdata.append('name', username);
    formdata.append('holder', holder);
    formdata.append('holderMobile', holderMobile);
    formdata.append('file', file);
    const res = await updateUserInfo(formdata);
    // console.log(res)
    if (res.code === 200) {
      message.success('更新成功');
      await logout();
      history.push('/user/login');
    } else {
      message.error(res.msg);
    }
  };

  //基础信息设置
  const BasicSettings = (
    <>
      <div style={{ fontSize: '20px', marginBottom: '25px' }}>基本设置</div>
      {/*form*/}
      <div style={{ display: 'flex' }}>
        <div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>用户名</div>
            <Input style={{ width: '310px' }} placeholder={username} onChange={usernameOnChange} />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>账户负责人</div>
            <Input style={{ width: '310px' }} placeholder={holder} onChange={holderOnChange} />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>负责人联系方式</div>
            <Input
              style={{ width: '310px' }}
              placeholder={holderMobile}
              onChange={holderMobileOnChange}
            />
          </div>
        </div>

        <div style={{ marginLeft: '100px' }}>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>头像</div>
            <div
              style={{ width: '150px', height: '150px', overflow: 'hidden', borderRadius: '50%' }}
            >
              <img style={{ width: 'inherit', height: 'inherit' }} src={avatar} />
            </div>

            {/*上传*/}
            <div style={{ marginTop: '20px' }}>
              <Upload onChange={fileOnChange} beforeUpload={() => false} maxCount={1}>
                <Button icon={<UploadOutlined />}>上传文件</Button>
              </Upload>
            </div>
          </div>
        </div>
      </div>

      <Button style={{ marginTop: '60px' }} type="primary" onClick={ConfirmUpload}>
        更新基本信息
      </Button>
    </>
  );

  //控制修改密码的弹窗
  const showModal = () => {
    setIsModalVisible(true);
  };
  const getNowPassword = (props) => {
    setOldPassword(props.target.value);
  };
  const getNewPassword = (props) => {
    setNewPassword(props.target.value);
  };
  const getNewPasswordAgain = (props) => {
    setNewPasswordAgain(props.target.value);
  };
  const handleOk = async () => {
    if (newPassword !== newPasswordAgain) {
      message.error('两次输入的密码不一致');
      return;
    }
    const res = await updatePassword({ oldPwd: oldPassword, newPwd: newPassword });
    // console.log(res)
    if (res.code === 200) {
      message.success('修改成功');
      setIsModalVisible(false);
      await logout();
      history.push('/user/login');
    } else {
      message.error(res.msg);
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //注销账号
  const deleteUserHandler = async () => {
    const res = await deleteUser();
    if (res.code === 200) {
      message.success('注销成功');
      await logout();
      history.push('/user/login');
    } else {
      message.error('注销失败');
    }
  };

  //安全设置
  const securitySettings = (
    <>
      <div style={{ fontSize: '20px', marginBottom: '25px' }}>安全设置</div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
        <span style={{ marginBottom: '10px', fontSize: '14px' }}>账号密码</span>
        <a style={{ fontSize: '14px', color: '#1890FF' }} onClick={showModal}>
          修改
        </a>
      </div>

      {/*注销账号*/}
      <Button style={{ marginTop: '15px' }} type="danger" onClick={deleteUserHandler}>
        注销账号
      </Button>
    </>
  );

  return (
    <Card>
      <Tabs tabBarStyle={{ width: '228px' }} tabPosition="left">
        <TabPane tab="基本设置" key="1">
          {BasicSettings}
        </TabPane>
        <TabPane tab="安全设置" key="2">
          {securitySettings}
        </TabPane>
      </Tabs>

      <Modal
        title="修改密码"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{ marginBottom: '25px' }}>
          <div style={{ marginBottom: '10px', fontSize: '14px' }}>当前密码</div>
          <Input placeholder="请输入当前密码" onChange={getNowPassword} />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <div style={{ marginBottom: '10px', fontSize: '14px' }}>新密码</div>
          <Input.Password
            placeholder="请输入密码"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            onChange={getNewPassword}
          />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <div style={{ marginBottom: '10px', fontSize: '14px' }}>确认密码</div>
          <Input.Password
            placeholder="请再次输入密码"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            onChange={getNewPasswordAgain}
          />
        </div>

        <div style={{ marginTop: '60px' }}>
          <Space>
            <Button type="primary" onClick={handleOk}>
              确认
            </Button>
            <Button onClick={handleCancel}>取消</Button>
          </Space>
        </div>
      </Modal>
    </Card>
  );
};

export default Index;
