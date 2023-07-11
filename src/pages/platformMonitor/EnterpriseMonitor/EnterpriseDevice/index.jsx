import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Image, Row, message } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useRequest } from 'umi';
import DeviceAddModal from '@/components/Modal/DeviceAddModal/DeviceAddModal';
import { addDevice } from '@/services/enterprise/enterprise';

const Index = ({ location }) => {
  const { id } = location?.query;
  const [visibleAddDevice, setVisibleAddDevice] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  /**
   * 获取买卖企业设备信息
   */
  const deviceInfo = useRequest({
    url: '/device/getInfo',
    method: 'POST',
    data: {
      companyId: id,
    },
    requestType: 'form',
  });
  /**
   * 获取买卖企业设备列表
   */
  const deviceList = useRequest({
    url: '/device/getList',
    method: 'POST',
    data: {
      companyId: id,
    },
    requestType: 'form',
  });

  /**
   * 添加设备
   */
  const addDeviceHandler = async (data) => {
    setLoading(true);
    const res = await addDevice({ ...data, companyId: id });
    console.log(res);
    if (res.code === 200) {
      setLoading(false);
      message.success(res.msg);
      setVisibleAddDevice(false);
    } else {
      message.error(res.msg);
      setLoading(false);
    }
  };

  const deviceItem = (category, status, idCode, number) => (
    <Col span={8} key={number}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div style={{ marginBottom: '15px' }}>
              <span>设备类型</span>
              <span style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '10px' }}>
                {category}
              </span>
            </div>
            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
              <span>设备状态</span>
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginLeft: '10px',
                  color: '#2ed573',
                }}
              >
                {status}
              </span>
              <CheckCircleOutlined
                style={{ fontSize: '24px', color: '#2ed573', marginLeft: '10px' }}
              />
            </div>
            <div>
              <span>设备识别码</span>
              <span style={{ marginLeft: '10px' }}>{idCode}</span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'end',
            }}
          >
            <div style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
              {'#' + number}
            </div>
            <Button>查看详情</Button>
          </div>
        </div>
      </Card>
    </Col>
  );

  return (
    <div>
      <Card>
        {/*title*/}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{ width: '40px', height: '40px', overflow: 'hidden', borderRadius: '10px' }}
            >
              <Image width={40} height={40} preview={false} src="https://picsum.photos/200/200" />
            </div>
            <span
              style={{
                fontSize: '18px',
                margin: '0 15px 0 10px',
                fontWeight: 'bold',
                fontFamily: 'sans-serif',
              }}
            >
              {deviceInfo?.data?.companyName}
            </span>
          </div>
          <Button type="primary" onClick={() => setVisibleAddDevice(true)}>
            新增设备
          </Button>
        </div>
        {/*info*/}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            marginTop: '20px',
          }}
        >
          <div style={{ fontSize: '14px' }}>
            <div>
              <span>负责人：</span>
              <span>{deviceInfo?.data?.holder}</span>
            </div>
            <div>
              <span>联系方式：</span>
              <span>{deviceInfo?.data?.phone}</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '335px' }}>
            {[
              {
                title: '企业设备数',
                data: `${deviceInfo?.data?.deviceNumAll}个`,
              },
              {
                title: '运行中',
                data: `${deviceInfo?.data?.deviceNumRunning}个`,
              },
              {
                title: '脱机中',
                data: `${deviceInfo?.data?.deviceNumOffLine}个`,
              },
            ].map((value, index) => (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold',
                }}
                key={value.title}
              >
                <div>{value.title}</div>
                <div>{value.data}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div style={{ marginTop: '20px' }}>
        <Row gutter={[20, 20]}>
          {deviceList?.data?.map((value, index) =>
            deviceItem(value.deviceType, value.deviceState, value.deviceIndentification, index + 1),
          )}
        </Row>
      </div>

      <DeviceAddModal
        title="添加设备"
        visible={visibleAddDevice}
        loading={loading}
        onCancel={() => setVisibleAddDevice(false)}
        onFinish={(res) => addDeviceHandler(res)}
        footer={null}
      />
    </div>
  );
};

export default Index;
