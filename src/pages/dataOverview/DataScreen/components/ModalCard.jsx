import React, { useState } from 'react';
import { Modal, Button, Card, Row, Col, Descriptions, Table, Space, List } from 'antd';
import { AMapScene, Marker } from '@antv/l7-react';
import ReactEcharts from 'echarts-for-react';
import { FullscreenExitOutlined, FullscreenOutlined, CloseCircleOutlined } from '@ant-design/icons';
import DeviceDataCard from './ModalDetial/DeviceDataCard';
import styles from '../index.less';

// 表格数据
const dataSource = [
  {
    index: '1',
    Transport_Company: '西湖区湖底公园1号',
    Order_Number: 'DD123123121',
    Transport_Counts: 12,
    Warning_Counts: 0,
  },
];
const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: '物流企业',
    dataIndex: 'Transport_Company',
    key: 'Transport_Company',
  },
  {
    title: '运单号',
    dataIndex: 'Order_Number',
    key: 'Order_Number',
  },
  {
    title: '绑定车辆数',
    dataIndex: 'Transport_Counts',
    key: 'Transport_Counts',
  },
  {
    title: '报警数',
    dataIndex: 'Warning_Counts',
    key: 'Warning_Counts',
  },
  {
    title: '详情',
    key: 'Action',
    render: () => <Button>查看详情</Button>,
  },
];
//图表数据
const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  grid: {
    top: '20px',
    left: '10px',
    right: '10px',
    bottom: '20px',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: '总运输次数',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      smooth: true,
      emphasis: {
        focus: 'series',
      },
      data: [10, 12, 11, 9, 10, 11, 10],
    },
    {
      name: '总报警次数',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      smooth: true,
      emphasis: {
        focus: 'series',
      },
      data: [0, 0, 1, 0, 1, 2, 3],
    },
    {
      name: '今日报警次数',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      smooth: true,
      emphasis: {
        focus: 'series',
      },
      data: [0, 0, 1, 0, 1, 1, 1],
    },
  ],
};
//警告排序数据
const CarWarningListData = [
  {
    sort: 1,
    title: 'Warning',
  },
  {
    sort: 2,
    title: 'Warning',
  },
  {
    sort: 3,
    title: 'Warning',
  },
];
//设备监测 - 设备实时数据
const DeviceListData = [
  {
    name: 'sell_in',
    status: 'normal',
    todayWorkCounts: 20,
    maintenanceTime: '2022/03/29 12:00:00',
  },
  {
    name: 'sell_out',
    status: 'abnormal',
    todayWorkCounts: 20,
    maintenanceTime: '2022/03/29 12:00:00',
  },
  {
    name: 'buy_in',
    status: 'suspend',
    todayWorkCounts: 20,
    maintenanceTime: '2022/03/29 12:00:00',
  },
  {
    name: 'buy_out',
    status: 'no_equipment',
    todayWorkCounts: 20,
    maintenanceTime: '2022/03/29 12:00:00',
  },
];
//全屏显示按钮
const fullButtons = [
  <FullscreenExitOutlined key={0} style={{ fontSize: '20px' }} />,
  <FullscreenOutlined key={1} style={{ fontSize: '20px' }} />,
];
const ModalCard = (props) => {
  const { open, changeOpen } = props;
  const [width, setWidth] = useState('90%');
  const [height, setHeight] = useState('90%');
  const [fullscreen, setFullscreen] = useState(false);
  //函数
  const fullscreenFun = () => {
    if (fullscreen === true) {
      setFullscreen(false);
      setWidth('90%');
      setHeight('90%');
    } else {
      setFullscreen(true);
      setWidth('100%');
      setHeight('100%');
    }
  };
  const closeButton = () => {
    changeOpen();
  };

  const setTitle = () => (
    <div className={styles.modalHeader}>
      <div className={styles.modalHeaderText}>设备详情</div>
      <div>
        <Space>
          <a onClick={() => fullscreenFun()}>{fullscreen ? fullButtons[0] : fullButtons[1]}</a>
          <a onClick={() => closeButton()}>
            <CloseCircleOutlined style={{ fontSize: '20px' }} />
          </a>
        </Space>
      </div>
    </div>
  );
  return (
    <>
      <Modal
        title={setTitle()}
        footer={null}
        centered
        closable={false}
        visible={open}
        onOk={() => changeOpen()}
        onCancel={() => changeOpen()}
        wrapClassName={'modalContent'}
        width={width}
        height={height}
        style={{ maxWidth: '100vw', maxHeight: '100vh' }}
      >
        <>
          <Row gutter={[16, 16]}>
            {/*域控信息*/}
            <Col span={12}>
              <Card hoverable={true} title={<b>域控信息</b>}>
                <Descriptions column={2} size="small">
                  <Descriptions.Item label="订单号">123456789</Descriptions.Item>
                  <Descriptions.Item label="公司名称">Zhou Momo</Descriptions.Item>
                  <Descriptions.Item label="卖方企业">Momo</Descriptions.Item>
                  <Descriptions.Item label="物流企业">Hangzhou</Descriptions.Item>
                  <Descriptions.Item label="绑定车辆数">999</Descriptions.Item>
                  <Descriptions.Item label="运输中车辆">999</Descriptions.Item>
                  <Descriptions.Item label="车辆报警数">999</Descriptions.Item>
                  <Descriptions.Item label="今日运输次数">999</Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>

            {/*域控地图*/}
            <Col span={12}>
              <Card hoverable={true} title={<b>域控地图</b>} bodyStyle={{ padding: '10px' }}>
                <div className={styles.MapContent}>
                  <AMapScene
                    map={{
                      center: [118.03, 36.82],
                      pitch: 0,
                      style: 'light',
                      zoom: 4,
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <Marker
                      option={{
                        color: 'red',
                      }}
                      lnglat={[118.03, 36.82]}
                    />
                  </AMapScene>
                </div>
              </Card>
            </Col>

            {/*设备监测 - 设备实时数据*/}
            <Col span={24}>
              <Card hoverable={true} title={<b>设备监测 - 设备实时数据</b>}>
                <Row gutter={64}>
                  {DeviceListData.map(({ name, status, todayWorkCounts, maintenanceTime }) => (
                    <Col key={name} span={6}>
                      <DeviceDataCard
                        name={name}
                        status={status}
                        todayWorkCounts={todayWorkCounts}
                        maintenanceTime={maintenanceTime}
                      />
                    </Col>
                  ))}
                </Row>
              </Card>
            </Col>

            {/*车辆信息*/}
            <Col span={16}>
              <Card hoverable={true} title={<b>车辆信息</b>} bodyStyle={{ padding: '0px 10px' }}>
                <Table rowKey="Car_Number" columns={columns} dataSource={dataSource} />
              </Card>
            </Col>

            {/*报警信息*/}
            <Col span={8}>
              <Card hoverable={true} title={<b>报警信息</b>}>
                <Descriptions column={2} size="small">
                  <Descriptions.Item label="总运输次数">10</Descriptions.Item>
                  <Descriptions.Item label="主要报警原因">Zhou Momo</Descriptions.Item>
                  <Descriptions.Item label="总报警次数">10</Descriptions.Item>
                  <Descriptions.Item label="次要报警原因">Hangzhou</Descriptions.Item>
                  <Descriptions.Item label="今日报警次数">10</Descriptions.Item>
                </Descriptions>
                <ReactEcharts option={option} style={{ height: '150px' }} />
                <Row gutter={24}>
                  <Col span={12}>
                    <List
                      size="small"
                      header={<b>车辆报警次数排序</b>}
                      dataSource={CarWarningListData}
                      renderItem={({ sort, title }) => {
                        return <List.Item key={sort}>{`${sort}. ${title}`}</List.Item>;
                      }}
                    />
                  </Col>
                  <Col span={12}>
                    <List
                      size="small"
                      header={<b>物流公司报警次数排序</b>}
                      dataSource={CarWarningListData}
                      renderItem={({ sort, title }) => {
                        return <List.Item key={sort}>{`${sort}. ${title}`}</List.Item>;
                      }}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </>
      </Modal>
    </>
  );
};

export default ModalCard;
