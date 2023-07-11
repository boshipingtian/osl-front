//司机详情
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, message, Row, Space, Tag } from 'antd';
import BasicTable from '@/components/Table/BasicTable';
import BasicProgress from '@/components/Progress/BasicProgress';
import VehicleInfo from '@/components/Info/VehicleInfo';
import CircleCharts from '@/components/Charts/CircleCharts';
import { TransportationVehicleHistoryTransList } from '@/services/TableColumes/platform';
import {
  addVehicle,
  getVehicleDetail,
  getVehicleImage,
  removeVehicle,
  updateVehicle,
} from '@/services/transportation/vehicle';
import CarImageModal from '@/pages/platformMonitor/TransportationManagement/Vehicle/components/carImageModal';
import VehicleModal from '@/pages/platformMonitor/TransportationManagement/Vehicle/components/vehicleModal';
import { history } from 'umi';

const Index = ({ location }) => {
  console.log(location.query.carId);
  const { carId } = location.query;
  const [detail, setDetail] = useState(undefined);
  const [carImageShow, setCarImageShow] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [spinning, setSpinning] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(async () => {
    await getVehicleInfo(carId);
    await VehicleImage(carId);
  }, [carId]);

  //获取车辆详情
  const getVehicleInfo = async (carId) => {
    const res = await getVehicleDetail({ carId });
    if (res.success) {
      setDetail(res.result);
    } else {
      message.error(res.description);
    }
  };
  //获取车辆详情
  const VehicleImage = async (carId) => {
    const res = await getVehicleImage({ carId });
    if (res.success) {
      setImageList(res.result);
    } else {
      message.error(res.description);
    }
  };
  //删除车辆
  const deleteCarInfo = async (carId) => {
    const res = await removeVehicle({ carId });
    if (res.success) {
      message.success('删除成功');
      location.history.push('/platform-monitor/transportation-management/vehicle');
    } else {
      message.error(res.msg);
    }
  };
  //编辑车辆
  const editCarInfo = (carId) => {
    setVisible(true);
  };
  //车辆详情列表
  let infoData = [
    {
      title: '车牌号',
      data: detail?.license,
    },
    {
      title: '所属物流企业',
      data: detail?.company,
    },
    {
      title: '负责人',
      data: detail?.driverName,
    },
    {
      title: '联系方式',
      data: detail?.driverPhone,
    },
    {
      title: '车辆型号',
      data: detail?.carType,
    },
    {
      title: '车辆注册时间',
      data: detail?.regTime,
    },
    {
      title: '车辆自重',
      data: detail?.carWeight,
    },
    {
      title: '车辆核载重量',
      data: detail?.carLegalWeight,
    },
  ];
  //运输进度
  let progress = {
    current: detail?.nowTranData?.tranStatus,
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
  //报警信息
  let itemList = [
    {
      title: '今日报警',
      data: detail?.alarmNumDay,
    },
    {
      title: '今日运次',
      data: detail?.tranNumDay,
    },
    {
      title: '历史报警',
      data: detail?.alermNumAll,
    },
    {
      title: '历史运次',
      data: detail?.tranNumAll,
    },
  ];
  //报警信息图表
  let option = {
    title: {
      text: detail?.alermNumAll || 0,
      left: '30%',
      top: '49%',
      textStyle: {
        color: '#000',
        fontSize: 18,
        align: 'center',
      },
    },
    graphic: {
      type: 'text',
      left: '40%',
      top: '43%',
      style: {
        text: '报警数',
        textAlign: 'center',
        fill: '#000',
        fontSize: 12,
      },
    },
    tooltip: {
      trigger: 'item',
    },
    grid: {
      top: '0px',
      left: '50px',
      bottom: '0px',
      right: '50px',
    },
    legend: {
      top: 'center',
      right: '20px',
      orient: 'vertical',
      itemGap: 20,
      icon: 'circle',
      show: false,
    },
    series: [
      {
        type: 'pie',
        radius: ['60%', '95%'],
        center: ['50%', '50%'],
        label: {
          position: 'inside',
          show: true,
          formatter: '{d}%',
          color: '#fff',
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 0,
            name: '已完成运量',
            itemStyle: {
              color: '#5B8FF9',
            },
          },
          {
            value: 0,
            name: '未完成运量',
            itemStyle: {
              color: '#5AD8A6',
            },
          },
          {
            value: 0,
            name: '今日运量',
            itemStyle: {
              color: '#5D7092',
            },
          },
        ],
      },
    ],
  };

  return (
    <Row gutter={[20, 20]}>
      <Col span={16}>
        <VehicleInfo
          infoData={infoData}
          contractStatus={detail?.contractStatus}
          traning={detail?.traning}
          showCarImage={() => setCarImageShow(true)}
          deleteCarInfo={() => deleteCarInfo(carId)}
          editCarInfo={() => editCarInfo(carId)}
        />
      </Col>

      <Col span={8}>
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
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ marginLeft: '20px' }}>
              {itemList.map((value, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div style={{ fontSize: '16px', marginBottom: '12px' }} key={index}>
                  <span>{value.title + ': '}</span>
                  <span>{value.data}</span>
                </div>
              ))}
              <Button
                type="primary"
                onClick={() => {
                  history.push({
                    pathname: '/alarm-info/alarm-overview',
                    query: {
                      id: carId,
                    },
                  });
                }}
              >
                报警列表
              </Button>
            </div>
            <div style={{ marginRight: '20px' }}>
              <CircleCharts style={{ width: '200px', height: '181.72px' }} option={option} />
            </div>
          </div>
        </Card>
      </Col>
      {
        //正在运输中的数据
        detail?.nowTranData ? (
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
                  <div>
                    <span>运单号：</span>
                    <span>
                      <a>{detail?.nowTranData?.tranNum}</a>
                    </span>
                  </div>
                  <div>
                    <span>司机姓名：</span>
                    <span>
                      <a>{detail?.nowTranData?.driverName}</a>
                    </span>
                  </div>
                  <div>
                    <span>开始时间：</span>
                    <span>{detail?.nowTranData?.startTime}</span>
                  </div>
                  <div>
                    <Space>
                      <Button>查看运次详情</Button>
                      <Button>查看司机详情</Button>
                    </Space>
                  </div>
                </div>
                <BasicProgress progress={progress.data} current={progress.current} />
              </div>
            </Card>
          </Col>
        ) : (
          ''
        )
      }
      <Col span={24}>
        <BasicTable
          title="历史车证数据"
          columns={TransportationVehicleHistoryTransList}
          dataSource={detail?.historyList.map((item) => {
            return { ...item, operate: '查看详情' };
          })}
          rowKey={(record) => record?.tranId}
          isShowTitleButton={false}
        />
      </Col>

      <CarImageModal
        imageList={imageList}
        visible={carImageShow}
        onCancel={() => setCarImageShow(false)}
      />
      <VehicleModal
        visible={visible}
        resultData={detail}
        visibleHide={() => setVisible(false)}
        spinning={spinning}
        handleOk={async (data) => {
          setSpinning(true);
          const res = await updateVehicle(data);
          if (res.success) {
            message.success(res.result);
            setSpinning(false);
            setVisible(false);
          } else {
            message.error(res.msg);
            setSpinning(false);
          }
        }}
      />
    </Row>
  );
};

export default Index;
