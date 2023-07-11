//司机详情
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, message, Row, Space, Tag } from 'antd';
import BasicTable from '@/components/Table/BasicTable';
import DriverInfo from '@/components/Info/DriverInfo';
import BasicProgress from '@/components/Progress/BasicProgress';
import { getDriverDetail, removeDriver, updateDriver } from '@/services/transportation/driver';
import { TransportationDriverHistoryTransList } from '@/services/TableColumes/platform';
import DriverModel from '@/pages/platformMonitor/TransportationManagement/Driver/components/DriverModal';

const Index = ({ location }) => {
  const { driverId } = location.query;
  const [driverDetail, setDriverDetail] = useState(undefined);

  const [isEditVisible, setIsEditVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    await DriverDetail(driverId);
  }, []);

  const DriverDetail = async (driverId) => {
    const res = await getDriverDetail({ driverId });
    console.log(res);
    if (res.success) {
      const data = res.result;
      setDriverDetail(data);
    } else {
      message.error(res.description);
    }
  };

  //驾驶员基本信息
  let infoData = [
    {
      title: '姓名',
      data: driverDetail?.driverName,
    },
    {
      title: '账号',
      data: driverDetail?.account,
    },
    {
      title: '联系方式',
      data: driverDetail?.mobile,
    },
    {
      title: '创建时间',
      data: driverDetail?.creatTime,
    },
  ];
  let driverData = [
    {
      title: '绑定车辆',
      data: driverDetail?.boundCarNum,
    },
    {
      title: '拉货次数',
      data: driverDetail?.workNum,
    },
    {
      title: '违约数',
      data: driverDetail?.noContractNum,
    },
    {
      title: '行驶公里数',
      data: driverDetail?.milesTravelled,
    },
  ];

  //运输进度信息
  let progress = {
    current: driverDetail?.nowTranData?.tranStatus,
    data: [
      {
        title: '驶向卖方',
        description: '',
      },
      {
        title: '正在装货',
        description: '',
      },
      {
        title: '驶向买方',
        description: '',
      },
      {
        title: '正在卸货',
        description: '',
      },
      {
        title: '完成运输',
        description: '',
      },
    ],
  };

  /**
   * 更新司机信息
   */
  const modifyDriver = async (data) => {
    setLoading(true);
    const res = await updateDriver({ ...data });
    if (res.code === 200) {
      setLoading(false);
      setIsEditVisible(false);
      await DriverDetail(driverId);
      message.success(res.msg);
    } else {
      setLoading(false);
      setIsEditVisible(false);
      message.error(res.msg);
    }
  };

  /**
   * 删除司机
   * @param param
   * @returns {Promise<unknown>}
   * @constructor
   */
  const DeleteDriver = async (param) => {
    const res = await removeDriver({ driverId });
    if (res.code === 200) {
      message.success(res.msg);
    } else {
      message.error(res.msg);
    }
  };

  return (
    <Row gutter={[20, 20]}>
      <Col span={24}>
        <DriverInfo
          infoData={infoData}
          headPicture={driverDetail?.headPictureUrl}
          driverData={driverData}
          inTransit={driverDetail?.inTransit}
          onEditClick={() => setIsEditVisible(true)}
          onDeleteClick={async () => DeleteDriver({ driverId })}
        />
      </Col>

      {driverDetail?.inTransit ? (
        <Col span={24}>
          <Card>
            {/*title*/}
            <div style={{ marginBottom: '10px' }}>
              <span style={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
                车辆现进行中运输数据
              </span>
            </div>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '35px',
                }}
              >
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div style={{ marginRight: '50px' }}>
                    <span>关联车辆：</span>
                    <span>
                      <a>{driverDetail?.nowTranData?.carLicense}</a>
                    </span>
                  </div>
                  <div>
                    <span>关联时间：</span>
                    <span>{driverDetail?.nowTranData?.startTime}</span>
                  </div>
                </div>
                <div>
                  <Space>
                    <Button type="primary">查看车辆详情</Button>
                    <Button type="primary">查看运次详情</Button>
                  </Space>
                </div>
              </div>
              <BasicProgress progress={progress.data} current={progress.current} />
            </div>
          </Card>
        </Col>
      ) : (
        ''
      )}

      <Col span={24}>
        <BasicTable
          title="历史运输数据"
          rowKey={(record) => record.tranId}
          columns={TransportationDriverHistoryTransList}
          dataSource={driverDetail?.historyList.map((item) => {
            return { ...item, operate: '查看详情' };
          })}
          isShowTitleButton={false}
        />
      </Col>

      <DriverModel
        visible={isEditVisible}
        title="编辑司机"
        loading={loading}
        onOK={async (params) => modifyDriver({ driverId, ...params })}
        onCancel={() => setIsEditVisible(false)}
      />
    </Row>
  );
};

export default Index;
