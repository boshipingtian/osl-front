import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Tag, Space, Modal, Spin, Form, Input, message } from 'antd';
import TradeInfo from '@/components/Info/TradeInfo';
import CardLineCharts from '@/components/Charts/CardLineCharts';
import CardLineBackGroundCharts from '@/components/Charts/CardLineBackGroundCharts';
import * as echarts from 'echarts';
import BasicTable from '@/components/Table/BasicTable';
import { useRequest } from 'umi';
import { logisticCarListColumns, logisticTranListColumns } from '@/services/TableColumes/platform';
import LogsticModel from '@/pages/platformMonitor/EnterpriseMonitor/LogisticsEnterprise/components/LogsticModel/LogsticModel';
import { PlusOutlined } from '@ant-design/icons';
import LogsticOrderModel from '@/pages/platformMonitor/EnterpriseMonitor/LogisticsEnterprise/components/LogsticOrderModel/LogsticOrderModel';
import { addVehicle } from '@/services/transportation/vehicle';
import VehicleModal from '@/pages/platformMonitor/TransportationManagement/Vehicle/components/vehicleModal';
import { updateLogistics } from '@/services/enterprise/logistics';

const Index = ({ location, history }) => {
  const [tranCurrentPage, setTranCurrentPage] = useState(1);
  const [tranPageSize, setTranPageSize] = useState(10);

  const [carCurrentPage, setCarCurrentPage] = useState(1);
  const [carPageSize, setCarPageSize] = useState(10);
  const [contractStatus, setContractStatus] = useState(1);

  const [logisticType, setLogisticType] = useState('日');
  const [warnType, setWarnType] = useState('日');

  const [isEditVisible, setIsEditVisible] = useState(false);
  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [isCarVisible, setIsCarVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const titleButton = (
    <Space>
      <Button type="primary" onClick={() => setIsCarVisible(true)}>
        添加车辆
      </Button>
      <div>
        <Button onClick={() => setContractStatus(1)}>已绑定运单</Button>
        <Button onClick={() => setContractStatus(2)}>绑定运单</Button>
      </div>
    </Space>
  );

  useEffect(() => {
    logisticTranData.run();
  }, [logisticType]);

  useEffect(() => {
    logisticWarnData.run();
  }, [warnType]);

  useEffect(() => {
    logisticTranList.run();
  }, [tranPageSize, tranCurrentPage]);

  useEffect(() => {
    logisticCarList.run();
  }, [carCurrentPage, carPageSize]);
  /**
   * 获取物流企业基本信息
   */
  const logisticDataInfo = useRequest({
    url: '/user/logistics/getOneInfo',
    method: 'POST',
    data: {
      id: location?.query?.id,
    },
    requestType: 'form',
  });

  /**
   * 获取物流企业运单数和车辆数
   */
  const logisticTranNum = useRequest({
    url: '/user/logistics/getTranNum',
    method: 'POST',
    data: {
      id: location?.query?.id,
    },
    requestType: 'form',
  });

  /**
   * 获取物流企业运单和车辆图表数据
   */
  const logisticTranData = useRequest({
    url: '/user/logistics/getTranData',
    method: 'POST',
    data: {
      id: location?.query?.id,
      type: logisticType,
    },
    requestType: 'form',
  });

  /**
   * 获取物流企业报警图表数据
   */
  const logisticWarnData = useRequest({
    url: '/orderException/logistics/exceptionByDate',
    method: 'POST',
    data: {
      id: location?.query?.id,
      type: warnType,
    },
    requestType: 'form',
  });

  /**
   * 获取物流企业运单列表
   */
  const logisticTranList = useRequest({
    url: '/tranContract/logistics/tranList',
    method: 'POST',
    data: {
      id: location?.query?.id,
      currentPage: 1,
      pageSize: 10,
    },
    requestType: 'form',
  });

  /**
   * 获取物流企业车辆列表
   */
  const logisticCarList = useRequest({
    url: '/car/getList/',
    method: 'POST',
    data: {
      logisticsId: location?.query?.id,
      contractStatus: contractStatus,
    },
    requestType: 'form',
  });

  /**
   * 处理数据符合表单需要的格式
   * @param data api返回的数据
   * @param which type
   * @returns {*[]}
   */
  const handleData = (data, which) => {
    let num = [];
    if (!data) return [];
    data.forEach((item) => {
      num.push(item[which]);
    });
    return num;
  };

  /**
   * 物流企业运单和车辆图表数据
   */
  let data_transportation = {
    grid: {
      top: '40px',
      left: '50px',
      bottom: '70px',
      right: '50px',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        animation: false,
        label: {
          backgroundColor: '#505765',
        },
      },
    },
    xAxis: [
      {
        type: 'category',
        data: handleData(logisticTranData?.data, 'time'),
      },
    ],
    yAxis: [
      {
        name: '运单数',
        type: 'value',
        nameTextStyle: {
          padding: [0, 50, 0, 0],
        },
      },
      {
        name: '车辆数',
        alignTicks: true,
        type: 'value',
        nameTextStyle: {
          padding: [0, 0, 0, 50],
        },
      },
    ],
    series: [
      {
        name: '运单数',
        type: 'line',
        yAxisIndex: 0,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          width: 2,
          color: '#3BA0FF',
        },
        emphasis: {
          focus: 'series',
        },
        itemStyle: {
          borderWidth: 2,
          borderColor: '#3BA0FF',
          color: '#FFFFFF',
        },
        data: handleData(logisticTranData?.data, 'tranNum'),
      },
      {
        name: '车辆数',
        type: 'line',
        yAxisIndex: 1,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          width: 2,
          color: '#36CBCB',
        },
        itemStyle: {
          borderWidth: 2,
          borderColor: '#36CBCB',
          color: '#FFFFFF',
        },
        emphasis: {
          focus: 'series',
        },
        data: handleData(logisticTranData?.data, 'carNum'),
      },
    ],
  };

  /**
   * 物流企业运单和车辆图表数据下方的渲染数据源
   */
  const descriptionDate = [
    {
      title: '企业运单总数',
      info: `${logisticTranNum?.data?.tranNum}个`,
    },
    {
      title: '企业车辆总数',
      info: `${logisticTranNum?.data?.carNum}个`,
    },
  ];

  /**
   *  物流企业报警图表数据
   */

  const Warning_transportation = {
    grid: {
      top: '40px',
      left: '50px',
      bottom: '70px',
      right: '50px',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        animation: false,
        label: {
          backgroundColor: '#505765',
        },
      },
    },
    legend: {
      data: ['总运次', '报警次数', '已处理'],
      itemGap: 100,
      bottom: '10px',
    },
    xAxis: [
      {
        type: 'category',
        data: handleData(logisticWarnData?.data, 'time'),
      },
    ],
    yAxis: [
      {
        name: '报警次数',
        type: 'value',
        nameTextStyle: {
          padding: [0, 50, 0, 0],
        },
      },
      {
        name: '已处理',
        alignTicks: true,
        type: 'value',
        nameTextStyle: {
          padding: [0, 0, 0, 50],
        },
      },
    ],
    series: [
      {
        name: '报警次数',
        type: 'line',
        yAxisIndex: 0,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          width: 2,
          color: '#5B8FF9',
        },
        emphasis: {
          focus: 'series',
        },
        areaStyle: {
          opacity: 0.25,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#5B8FF9',
            },
            {
              offset: 1,
              color: '#ffffff',
            },
          ]),
        },
        itemStyle: {
          borderWidth: 2,
          borderColor: '#5B8FF9',
          color: '#FFFFFF',
        },
        data: handleData(logisticWarnData?.data, 'exceptionNum'),
      },
      {
        name: '已处理',
        type: 'line',
        yAxisIndex: 1,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          width: 2,
          color: '#36CBCB',
        },
        emphasis: {
          focus: 'series',
        },
        areaStyle: {
          opacity: 0.25,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#36CBCB',
            },
            {
              offset: 1,
              color: '#ffffff',
            },
          ]),
        },
        itemStyle: {
          borderWidth: 2,
          borderColor: '#36CBCB',
          color: '#FFFFFF',
        },
        data: handleData(logisticWarnData?.data, 'exceptionNumSolved'),
      },
      {
        name: '总运次',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          width: 2,
          color: '#2ed573',
        },
        emphasis: {
          focus: 'series',
        },
        areaStyle: {
          opacity: 0.25,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#2ed573',
            },
            {
              offset: 1,
              color: '#ffffff',
            },
          ]),
        },
        itemStyle: {
          borderWidth: 2,
          borderColor: '#2ed573',
          color: '#FFFFFF',
        },
        data: handleData(logisticWarnData?.data, 'singleNum'),
      },
    ],
  };

  /**
   * 更新物流企业信息
   */
  const updateRes = async (data) => {
    let id = location?.query?.id;
    const res = await updateLogistics({ id, ...data });
    console.log(res);
    if (res.code === 200) {
      setLoading(false);
      setIsEditVisible(false);
      message.success(res.msg);
      logisticDataInfo.run();
    } else {
      setLoading(false);
      setIsEditVisible(false);
      message.error(res.msg);
    }
  };

  /**
   * 删除物流企业
   */
  const deleteRes = async (id) => {};

  return (
    <div>
      <Row gutter={20} style={{ marginBottom: '20px' }}>
        <Col span={24}>
          <TradeInfo
            name={logisticDataInfo?.data?.name}
            holder={logisticDataInfo?.data?.holder}
            id={logisticDataInfo?.data?.id}
            phone={logisticDataInfo?.data?.phone}
            creatTime={logisticDataInfo?.data?.creatTime}
            address={logisticDataInfo?.data?.address}
            license={logisticDataInfo?.data?.license}
            companyType={2}
            editEnterprise={() => setIsEditVisible(true)}
            deleteEnterprise={() => {
              message.error('开发中');
            }}
          />
        </Col>
      </Row>

      {/*业务数据统计*/}
      <Row>
        <Col span={24}>
          <CardLineCharts
            style={{ marginBottom: '20px' }}
            option={data_transportation}
            title="业务数据统计"
            descriptionDate={descriptionDate}
            radioOnChange={(dataOption) => setLogisticType(dataOption)}
            redirectUrl="/alarm-info/alarm-overview"
            id={location?.query?.id}
          />
        </Col>
      </Row>

      {/*报警统计*/}
      <Row>
        <Col span={24}>
          <CardLineBackGroundCharts
            style={{ marginBottom: '20px' }}
            option={Warning_transportation}
            title="报警统计"
            radioOnChange={(dataOption) => setWarnType(dataOption)}
          />
        </Col>
      </Row>

      {/* 企业运单列表 */}
      <Row>
        <Col span={24}>
          <div style={{ backgroundColor: '#fff', marginBottom: '20px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '24px',
                paddingBottom: '10px',
              }}
            >
              <div style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                企业运单列表
              </div>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <Space>
                  <div style={{ fontSize: '16px', marginRight: '30px' }}>历史运单总数：33</div>
                  <Button
                    type="primary"
                    onClick={() => {
                      history.push({
                        pathname: '/history-data/history-business/history-order',
                        query: {
                          id: location?.query?.id,
                        },
                      });
                    }}
                  >
                    查看历史运单
                  </Button>
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => setIsOrderVisible(true)}
                  >
                    添加
                  </Button>
                </Space>
              </div>
            </div>
            <BasicTable
              isShowTitleButton={false}
              columns={logisticTranListColumns}
              dataSource={logisticTranList?.data?.pageData?.map((item) => {
                return { ...item, operate: '查看详情' };
              })}
              footerMore={`进行中运单总数： ${
                logisticTranList?.data?.totalCount ? logisticTranList?.data?.totalCount : '0'
              }`}
              onPageChange={(page, pageSize) => {
                setTranPageSize(pageSize);
                setTranCurrentPage(page);
              }}
              rowKey={(record) => record.tranIdentification}
            />
          </div>
        </Col>
      </Row>

      {/* 车辆列表 */}
      <Row>
        <Col span={24}>
          <BasicTable
            title="车辆列表"
            columns={logisticCarListColumns}
            dataSource={logisticCarList?.data?.map((item) => {
              return {
                ...item,
                viewCarInfo: '查看详情',
                viewCarLicenseInfo: '查看详情',
                operate: '查看详情',
              };
            })}
            onPageChange={(page, pageSize) => {
              setCarPageSize(pageSize);
              setCarCurrentPage(page);
            }}
            titleButton={titleButton}
            isShowTitleButton={false}
          />
        </Col>
      </Row>

      <LogsticModel
        visible={isEditVisible}
        loading={loading}
        title="编辑信息"
        onCancel={() => setIsEditVisible(false)}
        onOK={async (param) => updateRes(param)}
      />

      <LogsticOrderModel
        visible={isOrderVisible}
        loading={loading}
        title="编辑信息"
        onCancel={() => setIsOrderVisible(false)}
        onOK={(param) => console.log(param)}
      />

      <VehicleModal
        visible={isCarVisible}
        visibleHide={() => setIsCarVisible(false)}
        spinning={loading}
        handleOk={async (data) => {
          setLoading(true);
          const res = await addVehicle(data);
          if (res.success) {
            message.success(res.result);
            setLoading(false);
            setIsCarVisible(false);
          } else {
            message.error(res.msg);
            setLoading(false);
          }
        }}
      />
    </div>
  );
};

export default Index;
