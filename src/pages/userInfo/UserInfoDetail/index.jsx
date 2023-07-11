import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import {
  UserOutlined,
  PhoneOutlined,
  PartitionOutlined,
  TeamOutlined,
  IdcardOutlined,
} from '@ant-design/icons';
import { getUserInfo } from '@/services/user/user';

// const userInfo = {
//   account: '825895',
//   name: '审计端管理员',
//   holder: '管理员',
//   holderMobile: '1111111111',
//   headPictrueUri: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
// };

const Index = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserInfo().then((res) => {
      setUserInfo(res);
    });
  }, []);
  console.log('用户详情：', userInfo);

  return (
    <Card style={{ width: '350px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div style={{ width: '106px', height: '106px', overflow: 'hidden', borderRadius: '50%' }}>
          <img style={{ width: 'inherit', height: 'inherit' }} src={userInfo?.headPictrueUrl} />
        </div>
        <div style={{ marginTop: '24px', fontSize: '20px' }}>{userInfo?.name}</div>
        <div style={{ marginTop: '7px', fontSize: '14px' }}>{userInfo?.account}</div>

        <div style={{ marginTop: '35px' }}>
          <div
            style={{
              width: '250px',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', width: '113px' }}>
              <UserOutlined style={{ fontSize: '20px' }} />
              <span style={{ marginLeft: '12px', fontSize: '14px' }}>{userInfo?.name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '113px' }}>
              <IdcardOutlined style={{ fontSize: '20px' }} />
              <span style={{ marginLeft: '12px', fontSize: '14px' }}>{userInfo?.account}</span>
            </div>
          </div>

          <div
            style={{
              width: '250px',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', width: '113px' }}>
              <PartitionOutlined style={{ fontSize: '20px' }} />
              <span style={{ marginLeft: '12px', fontSize: '14px' }}>{userInfo?.holder}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '113px' }}>
              <PhoneOutlined style={{ fontSize: '20px' }} />
              <span style={{ marginLeft: '12px', fontSize: '14px' }}>{userInfo?.holderMobile}</span>
            </div>
          </div>

          <div
            style={{
              width: '250px',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', width: '113px' }}>
              <TeamOutlined style={{ fontSize: '20px' }} />
              <span style={{ marginLeft: '12px', fontSize: '14px' }}>{userInfo?.holder}</span>
            </div>
          </div>
        </div>

        {/*  footer*/}
        {/*<div*/}
        {/*  style={{*/}
        {/*    width: '300px',*/}
        {/*    display: 'flex',*/}
        {/*    justifyContent: 'space-between',*/}
        {/*    marginBottom: '16px',*/}
        {/*    marginTop: '116px',*/}
        {/*    fontSize: '14px',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <div>*/}
        {/*    <span style={{color: '#707070'}}>审计端负责人：</span>*/}
        {/*    <span>负责人</span>*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <span style={{color: '#707070'}}>审计机构：</span>*/}
        {/*    <span>负责人政府</span>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <span>创建时间： </span>*/}
        {/*  <span>2022年05月22日</span>*/}
        {/*</div>*/}
      </div>
    </Card>
  );
};

export default Index;
