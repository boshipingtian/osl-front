import React, { useState } from 'react';
import { Button, Card, Descriptions, Image, Tag, Input, Space } from 'antd';
import { IdcardOutlined } from '@ant-design/icons';
import './index.less';
import LicenseModal from '@/components/Modal/LicenseModal/LicenseModal';
import MapModal from '@/components/Modal/MapModal/MapModal';

const { Search } = Input;

const Index = ({
  name,
  companyType = 1,
  holder,
  id,
  phone,
  creatTime,
  address,
  license,
  editEnterprise,
  deleteEnterprise,
  licenseClick,
}) => {
  const [licenseVisible, setLicenseVisible] = useState(false);
  const [visibleMap, setVisibleMap] = useState(false);

  const onSearch = (value) => console.log(value);

  const descTitle = (
    <div className="descTitle">
      <div className="descImage">
        <Image width={40} height={40} preview={false} src="https://picsum.photos/200/200" />
      </div>
      <span className="title">{name}</span>
      <Tag color="blue">{companyType === 1 ? '买卖企业' : '物流企业'}</Tag>
    </div>
  );
  return (
    <Card>
      {/*证件弹出框*/}
      <LicenseModal
        title="证件图片"
        src={license}
        visible={licenseVisible}
        onCancel={() => setLicenseVisible(false)}
      />
      {/*地图弹出框*/}
      <MapModal
        title="地图"
        footer={null}
        visible={visibleMap}
        onCancel={() => setVisibleMap(false)}
      />

      <div className="CardBuyerInfo">
        <Search
          placeholder="输入企业名称"
          allowClear
          enterButton="搜索"
          style={{
            width: 300,
          }}
          // size="large"
          onSearch={onSearch}
        />
        <div>
          <Space>
            <Button type="primary" onClick={() => editEnterprise()}>
              编辑
            </Button>
            <Button type="danger" onClick={() => deleteEnterprise()}>
              删除
            </Button>
          </Space>
        </div>
      </div>

      <Descriptions title={descTitle} column={2}>
        <Descriptions.Item label="负责人">{holder}</Descriptions.Item>
        <Descriptions.Item label="id">{id}</Descriptions.Item>
        <Descriptions.Item label="联系方式">{phone}</Descriptions.Item>
        <Descriptions.Item label="注册时间">{creatTime}</Descriptions.Item>
        <Descriptions.Item label="地址">
          <span style={{ color: '#1890ff', cursor: 'pointer' }} onClick={() => setVisibleMap(true)}>
            {address}
          </span>
        </Descriptions.Item>
        <Descriptions.Item label="营业执照">
          {/*license*/}
          <IdcardOutlined
            style={{ fontSize: 24, color: '#1890ff' }}
            onClick={() => setLicenseVisible(true)}
          />
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default Index;
