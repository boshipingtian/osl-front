import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Space, message } from 'antd';
import TradeInfo from '@/components/Info/TradeInfo';
import CardLineCharts from '@/components/Charts/CardLineCharts';
import CardLineBackGroundCharts from '@/components/Charts/CardLineBackGroundCharts';
import * as echarts from 'echarts';
import BasicTable from '@/components/Table/BasicTable';
import { useRequest } from 'umi';
import { TradingEnterpriseColumnDetail } from '@/services/TableColumes/platform';
import EnterpriseModal from '@/pages/platformMonitor/EnterpriseMonitor/TradingEnterprise/components/enterpriseModal';
import { deleteEnterprise, updateEnterprise } from '@/services/enterprise/enterprise';
import OrderCommonModal from '@/components/Modal/OrderCommonModal/OrderCommonModal';
import { addOrderDetail } from '@/services/order/order';

const Index = (props) => {
  const { location, history } = props;

  /**
   * 需要动态更新的方法
   */
  const [optionFirstData, setOptionFirstData] = useState('日');
  const [optionSecondData, setOptionSecondData] = useState('日');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [device, setDevice] = useState([]);
  /**
   * 显示修改弹框参数
   */
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isOrderCommonModalVisible, setIsOrderCommonModalVisible] = useState(false);
  useEffect(() => {
    enterpriseChartData.run();
  }, [optionFirstData]);

  useEffect(() => {
    enterpriseWaringChartData.run();
  }, [optionSecondData]);
  useEffect(() => {
    enterpriseOrderData.run();
  }, [currentPage, pageSize]);

  /**
   * 统一api请求位置
   */
  //获取企业基本信息
  const enterpriseInfo = useRequest(`/user/sale/getOne?companyId=${location?.query?.companyId}`, {
    onSuccess(res) {
      let run = new Array(enterpriseInfo?.data?.deviceNumRunning).fill(true);
      let offline = new Array(enterpriseInfo?.data?.deviceNumOffLine).fill(false);
      setDevice([...run, ...offline]);
    },
  });
  //获取业务数据下方的数据
  const enterpriseData = useRequest(`/order/sale/tranNumAll?id=${location?.query?.companyId}`);
  //获取报警信息下方的数据
  // const enterpriseWaringData = useRequest(`/orderException/sale/total?name=${location.query.name}`);
  //获取业务数据可视化数据
  const enterpriseChartData = useRequest({
    url: '/order/sale/tranData',
    method: 'POST',
    data: {
      id: location?.query?.companyId,
      type: optionFirstData,
    },
    requestType: 'form',
  });
  //获取报警信息可视化数据
  const enterpriseWaringChartData = useRequest({
    url: '/orderException/sale/exceptionByDate',
    method: 'POST',
    data: {
      id: location?.query?.companyId,
      type: optionSecondData,
    },
    requestType: 'form',
  });
  //获取企业订单基础数据
  const enterpriseOrderData = useRequest({
    url: '/order/sale/orderList',
    method: 'POST',
    data: {
      currentPage: currentPage,
      pageSize: pageSize,
      id: location?.query?.companyId,
    },
    requestType: 'form',
  });

  /**
   * 业务数据统计下方的渲染数据源
   */
  const descriptionDate = [
    {
      title: '企业订单总数',
      info: `${enterpriseData?.data?.orderNum || 0}个`,
    },
    {
      title: '企业运单总数',
      info: `${enterpriseData?.data?.tranNum || 0}个`,
    },
    {
      title: '运次总数',
      info: `${enterpriseData?.data?.singleNum || 0}个`,
    },
  ];
  //处理数据符合表单需要的格式
  const handleData = (data, which) => {
    let num = [];
    if (!data) return;
    data.forEach((item) => {
      num.push(item[which]);
    });
    return num;
  };
  //业务数据统计
  const data_transportation = {
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
        data: handleData(enterpriseChartData?.data, 'time'),
      },
    ],
    yAxis: [
      {
        name: '订单数',
        type: 'value',
        nameTextStyle: {
          padding: [0, 50, 0, 0],
        },
      },
      {
        name: '运单数',
        alignTicks: true,
        type: 'value',
        nameTextStyle: {
          padding: [0, 0, 0, 50],
        },
      },
    ],
    series: [
      {
        name: '订单数',
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
        data: handleData(enterpriseChartData?.data, 'orderNum'),
      },
      {
        name: '运单数',
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
        data: handleData(enterpriseChartData?.data, 'tranNum'),
      },
      {
        name: '运次',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
          width: 2,
          color: '#2ed573',
        },
        itemStyle: {
          borderWidth: 2,
          borderColor: '#2ed573',
          color: '#FFFFFF',
        },
        emphasis: {
          focus: 'series',
        },
        data: handleData(enterpriseChartData?.data, 'singleNum'),
      },
    ],
  };
  //报警统计
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
        data: handleData(enterpriseWaringChartData?.data, 'time'),
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
        data: handleData(enterpriseWaringChartData?.data, 'exceptionNum'),
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
        data: handleData(enterpriseWaringChartData?.data, 'exceptionNumSolved'),
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
        data: handleData(enterpriseWaringChartData?.data, 'time'),
      },
    ],
  };

  /**
   * 业务数据统计切换的按钮
   */
  function radioOnFirstChange(dataOption) {
    console.log('dataOption1: ', dataOption);
    setOptionFirstData(dataOption);
  }

  /**
   * 业务数据统计切换的按钮
   */
  function radioOnSecondChange(dataOption) {
    setOptionSecondData(dataOption);
  }

  /**
   * 编辑企业按钮
   */
  const editEnterprise = () => {
    setIsModalVisible(true);
  };

  /**
   * 删除企业
   * @returns {Promise<void>}
   * @private
   */
  const _deleteEnterprise = async () => {
    let query = [];
    query.push(parseInt(location.query.companyId));
    console.log(query);
    const data = await deleteEnterprise(query);
    console.log(data);
    if (data.code === 200) {
      message.success('删除成功');
      setIsModalVisible(false);
      history.push('/platform-monitor/enterprise-monitor/trading-enterprise/');
    } else {
      message.error(data.msg || '删除失败');
    }
    console.log('delete');
  };

  /**
   * 修改企业信息
   * @param addData
   * @returns {Promise<void>}
   */
  const handleOk = async (addData) => {
    addData.append('id', location.query.companyId);
    addData.append('companyName', addData.get('name'));
    addData.delete('name');
    const data = await updateEnterprise(addData);
    if (data.code === 200) {
      message.success('修改成功');
      setIsModalVisible(false);
      enterpriseInfo.refresh();
    } else {
      message.error(data.msg || '修改失败');
    }
  };

  return (
    <div>
      <Row gutter={20} style={{ marginBottom: '20px' }}>
        <Col span={16}>
          <TradeInfo
            name={enterpriseInfo?.data?.name}
            holder={enterpriseInfo?.data?.holder}
            id={enterpriseInfo?.data?.id}
            phone={enterpriseInfo?.data?.phone}
            creatTime={enterpriseInfo?.data?.creatTime}
            address={enterpriseInfo?.data?.address}
            license={enterpriseInfo?.data?.license}
            editEnterprise={editEnterprise}
            deleteEnterprise={_deleteEnterprise}
          />
        </Col>
        <Col span={8}>
          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '20px', fontWeight: '900', fontFamily: 'sans-serif' }}>
                设备信息
              </span>
              <span style={{ fontSize: '20px' }}>{`${enterpriseInfo?.data?.deviceNumAll}个`}</span>
            </div>
            <div
              style={{
                height: '147.58px',
                width: '100%',
                overflowY: 'scroll',
                overflowX: 'hidden',
                marginBottom: '10px',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', width: 'calc(100 % +20px)' }}>
                {device.map((value, index) => {
                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <div
                      key={index}
                      style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: value ? '#2ED573' : '#FF6348',
                        margin: '5px',
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <Button
                type="primary"
                onClick={() => {
                  history.push({
                    pathname: '/platform-monitor/enterprise-monitor/enterprise-device',
                    query: {
                      id: location?.query?.companyId,
                    },
                  });
                }}
              >
                设备详情
              </Button>
            </div>
          </Card>
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
            radioOnChange={(dataOption) => radioOnFirstChange(dataOption)}
            redirectUrl="/alarm-info/alarm-overview"
            id={location?.query?.companyId}
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
            radioOnChange={(dataOption) => radioOnSecondChange(dataOption)}
          />
        </Col>
      </Row>

      {/* 企业订单列表 */}
      <Row>
        <Col span={24}>
          <div style={{ backgroundColor: '#fff' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '24px',
                paddingBottom: '10px',
              }}
            >
              <div style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                企业订单列表
              </div>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <div style={{ fontSize: '16px', marginRight: '30px' }}>历史订单总数：33</div>
                <Space>
                  <Button type="primary" onClick={() => setIsOrderCommonModalVisible(true)}>
                    添加
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      history.push({
                        pathname: '/history-data/history-business/history-order',
                        query: {
                          id: location?.query?.companyId,
                        },
                      });
                    }}
                  >
                    查看历史订单
                  </Button>
                </Space>
              </div>
            </div>
            <BasicTable
              columns={TradingEnterpriseColumnDetail}
              isShowTitleButton={false}
              rowKey={(record) => record?.identification}
              dataSource={enterpriseOrderData?.data?.pageData.map((item) => {
                return { ...item, operate: '查看详情' };
              })}
              footerMore={`进行中订单总数： ${
                enterpriseOrderData?.data?.totalCount ? enterpriseOrderData?.data?.totalCount : '0'
              }`}
              onPageChange={(page, pageSize) => {
                setPageSize(pageSize);
                setCurrentPage(page);
              }}
            />
          </div>
        </Col>
      </Row>

      <EnterpriseModal
        visible={isModalVisible}
        isShowCountry={false}
        handleOk={(formData) => handleOk(formData)}
        visibleHide={() => setIsModalVisible(false)}
      />

      {/* 添加订单 */}
      <OrderCommonModal
        visible={isOrderCommonModalVisible}
        title="添加订单"
        onCancel={() => setIsOrderCommonModalVisible(false)}
        onFinish={async (params) => addOrderDetail({ ...params })}
      />
    </div>
  );
};

export default Index;
