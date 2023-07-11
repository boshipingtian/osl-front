import React from 'react';
import { Button, Card, Descriptions, Space, Tag } from 'antd';

const Index = ({ infoData, headPicture, driverData, inTransit, onEditClick, onDeleteClick }) => {
  return (
    <Card>
      {/*title*/}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <span style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
          司机详情
        </span>
        <div>
          <Space>
            {inTransit ? <Tag color="blue">运输中</Tag> : <Tag color="red">空闲中</Tag>}

            <Button type="primary" onClick={() => onEditClick()}>
              编辑
            </Button>
            <Button type="danger" onClick={() => onDeleteClick()}>
              删除
            </Button>
          </Space>
        </div>
      </div>
      {/*info*/}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '65px', height: '65px', overflow: 'hidden', borderRadius: '50%' }}>
            <img style={{ width: '65px', height: '65px' }} src={headPicture} alt="头像" />
          </div>
          <div style={{ width: 'calc(600px - 80px)', marginLeft: '15px' }}>
            <Descriptions column={2}>
              {infoData.map((value, index) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <Descriptions.Item key={index} label={value.title}>
                    {value.data}
                  </Descriptions.Item>
                );
              })}
            </Descriptions>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {driverData.map((value, index) => {
            if (index === driverData.length - 1) {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} style={{ textAlign: 'right', margin: '0 0 0 30px' }}>
                  <div style={{ fontSize: '14px' }}>{value.title}</div>
                  <div style={{ fontSize: '30px' }}>{value.data}</div>
                </div>
              );
            }
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ textAlign: 'right', margin: '0 34px' }}>
                  <div style={{ fontSize: '14px' }}>{value.title}</div>
                  <div style={{ fontSize: '30px' }}>{value.data}</div>
                </div>
                {/* eslint-disable-next-line react/no-array-index-key */}
                <div style={{ width: '1px', height: '80%', backgroundColor: '#E9E9E9' }} />
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default Index;
