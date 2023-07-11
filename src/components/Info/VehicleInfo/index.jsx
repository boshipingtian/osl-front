import React from 'react';
import { Button, Card, Descriptions, Space, Tag } from 'antd';

const Index = ({ infoData, contractStatus, traning, showCarImage, editCarInfo, deleteCarInfo }) => {
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
          车辆详情
        </span>
        <div>
          <Space>
            <Button onClick={() => showCarImage()}>查看证照与车辆照片</Button>
            <Button onClick={() => editCarInfo()} type="primary">
              编辑
            </Button>
            <Button type="danger" onClick={() => deleteCarInfo()}>
              删除
            </Button>
          </Space>
        </div>
      </div>
      {/*info*/}
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
      <div style={{ display: 'flex' }}>
        <div>
          <span>是否绑定运单：</span>
          {contractStatus ? <Tag color="green">已绑定</Tag> : <Tag color="red">未绑定</Tag>}
        </div>
        <div style={{ marginLeft: '30px' }}>
          <span>是否运输中：</span>
          {traning ? <Tag color="green">运输中</Tag> : <Tag color="red">空闲中</Tag>}
        </div>
      </div>
    </Card>
  );
};

export default Index;
