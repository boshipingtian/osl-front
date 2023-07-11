//订单详情
import React, { useEffect, useState } from 'react';
import BusinessInfo from '@/components/Info/BusinessInfo';
import {
  Button,
  Card,
  Col,
  Descriptions,
  message,
  Radio,
  Row,
  Space,
  Modal,
  Spin,
  Input,
  Upload,
} from 'antd';
import BasicTable from '@/components/Table/BasicTable';
import { history } from 'umi';
import CircleCharts from '@/components/Charts/CircleCharts';
import LineBackgroundCharts from '@/components/Charts/LineBackgroundCharts';
import { CreateWeek, RandomData } from '@/utils/random';
import * as echarts from 'echarts';
import {
  getOrderDetail,
  getWaybillList,
  insertWaybill,
  updateOrderDetail,
} from '@/services/order/order';
import { FileImageOutlined, UploadOutlined } from '@ant-design/icons';
import { OrderDetailWaybillColumns } from '@/services/TableColumes/platform';

const infoData = [
  {
    title: '卖方企业',
    data: '啊吧啊吧公司',
  },
  {
    title: '买方企业',
    data: '啊吧啊吧公司',
  },
  {
    title: '企业负责人',
    data: '啊吧啊吧',
  },
  {
    title: '企业负责人',
    data: '啊吧啊吧',
  },
  {
    title: '联系方式',
    data: '12312312312',
  },
  {
    title: '联系方式',
    data: '12312312312',
  },
];

const lineOption = {
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
    data: ['报警', '运次'],
    itemGap: 100,
    bottom: '10px',
  },
  xAxis: [
    {
      type: 'category',
      data: CreateWeek(),
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
      name: '报警',
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
      data: RandomData(400, 500, 7),
    },
    {
      name: '运次',
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
      data: RandomData(300, 400, 7),
    },
  ],
};

const option = {
  title: {
    text: '1231吨',
    left: '22%',
    top: '49%',
    textStyle: {
      color: '#000',
      fontSize: 18,
      align: 'center',
    },
  },
  graphic: {
    type: 'text',
    left: '26%',
    top: '43%',
    style: {
      text: '总运量',
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
    show: true,
  },
  series: [
    {
      type: 'pie',
      radius: ['60%', '95%'],
      center: ['30%', '50%'],
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
          value: 1048,
          name: '已完成运量',
          itemStyle: {
            color: '#5B8FF9',
          },
        },
        {
          value: 1048,
          name: '未完成运量',
          itemStyle: {
            color: '#5AD8A6',
          },
        },
        {
          value: 1048,
          name: '今日运量',
          itemStyle: {
            color: '#5D7092',
          },
        },
      ],
    },
  ],
};

const Index = ({ location }) => {
  //订单号
  const { orderId } = location.query;
  //订单详情
  const [detail, setDetail] = useState({});
  //运单列表
  const [waybill, setWaybill] = useState([]);
  const [state, setState] = useState(0); //0 未完成 1 已完成
  //运单列表分页
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  //添加运单时提交的数据
  const [tranData, setTranData] = useState({});
  //控制更新订单的弹出框
  const [updateModal, setUpdateModal] = useState(false);
  //控制添加运单的弹出框
  const [addModal, setAddModal] = useState(false);
  //加载控制器
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    await orderDetail(orderId);
  }, [orderId]);

  useEffect(async () => {
    await waybillList(orderId, state, currentPage, pageSize);
  }, [orderId, state]);
  //获取订单详情
  const orderDetail = async (orderId) => {
    const res = await getOrderDetail({ orderId });
    if (res.success) {
      setDetail(res.result);
    } else {
      message.error(res.description);
    }
  };

  //获取运单列表
  const waybillList = async (orderId, state, currentPage, pageSize) => {
    const res = await getWaybillList({ orderId, state, num: currentPage, size: pageSize });
    if (res.success) {
      setWaybill(res.result);
    } else {
      message.error(res.description);
    }
  };

  /**
   * 修改信息弹出框
   */
  const UpdateModal = (detailData) => {
    return (
      <Modal title="修改订单" visible={updateModal} onOk={updateOk} onCancel={updateCancel}>
        <Spin spinning={loading}>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>订单类型</div>
            <Input
              placeholder="请输入订单类型"
              value={detailData?.orderType}
              onChange={(props) => setDetail({ ...detailData, orderType: props.target.value })}
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>订单金额</div>
            <Input
              placeholder="请输入订单金额"
              value={detailData?.price}
              onChange={(props) => setDetail({ ...detailData, price: props.target.value })}
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>订单重量</div>
            <Input
              placeholder="请输入订单重量"
              value={detailData?.weight}
              onChange={(props) => setDetail({ ...detailData, weight: props.target.value })}
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>运货种类</div>
            <Input
              placeholder="请输入运货种类"
              value={detailData?.cargoType}
              onChange={(props) => setDetail({ ...detailData, cargoType: props.target.value })}
            />
          </div>
        </Spin>
      </Modal>
    );
  };

  async function updateOk() {
    setLoading(true);
    const res = await updateOrderDetail({ ...detail, orderId });
    if (res.success) {
      await orderDetail(orderId);
      setLoading(false);
      setUpdateModal(false);
      message.success('修改成功');
    } else {
      setLoading(false);
      message.error(res.description);
    }
  }

  async function updateCancel() {
    setUpdateModal(false);
    await orderDetail(orderId);
  }

  /**
   * 添加运单
   */
  const titleButton = (
    <Space>
      <Button type="primary" onClick={() => setAddModal(true)}>
        添加运单
      </Button>
      <div>
        <Button onClick={() => setState(0)}>进行中运单</Button>
        <Button onClick={() => setState(1)}>已完成运单</Button>
      </div>
    </Space>
  );

  const AddModal = () => {
    return (
      <Modal title="绑定运单" visible={addModal} onOk={addOk} onCancel={addCancel}>
        <Spin spinning={loading}>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>订单号</div>
            <Input
              placeholder="请输入订单号"
              value={tranData?.orderId}
              onChange={(props) => setTranData({ ...tranData, orderId: props.target.value })}
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>订单金额</div>
            <Input
              placeholder="请输入运单金额"
              value={tranData?.price}
              onChange={(props) => setTranData({ ...tranData, price: props.target.value })}
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>订单重量</div>
            <Input
              placeholder="请输入运单重量"
              value={tranData?.weight}
              onChange={(props) => setTranData({ ...tranData, weight: props.target.value })}
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>物流公司</div>
            <Input
              placeholder="请输入物流公司编号"
              value={tranData?.company}
              onChange={(props) => setTranData({ ...tranData, company: props.target.value })}
            />
          </div>
        </Spin>
      </Modal>
    );
  };

  async function addOk() {
    setLoading(true);
    const res = await insertWaybill({ ...tranData });
    if (res.success) {
      await orderDetail(orderId);
      setLoading(false);
      setAddModal(false);
      message.success('添加成功');
    } else {
      setLoading(false);
      message.error(res.description);
    }
  }

  async function addCancel() {
    setAddModal(false);
    setTranData({});
    await orderDetail(orderId);
  }

  return (
    <Row gutter={20}>
      <Col span={15}>
        <BusinessInfo
          title="订单号：1234567890"
          createDate="2022年2月2日"
          infoColumn={2}
          infoData={infoData}
          style={{ marginBottom: '20px' }}
        />

        <BasicTable
          title="绑定运单"
          columns={OrderDetailWaybillColumns}
          dataSource={waybill}
          footerMore="绑定运单总数：12"
          isShowTitleButton={false}
          onPageChange={(page, pageSize) => {
            setPageSize(pageSize);
            setCurrentPage(page);
          }}
          titleButton={titleButton}
        />
      </Col>
      <Col span={9}>
        <Card style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span style={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
              订单详情
            </span>
            <Button type="primary" onClick={() => setUpdateModal(true)}>
              编辑
            </Button>
          </div>
          <Descriptions column={2}>
            <Descriptions.Item label="运货种类">
              <a>{detail?.cargoType}</a>
            </Descriptions.Item>
            <Descriptions.Item label="签订时间">{detail?.signTime}</Descriptions.Item>
            <Descriptions.Item label="订单金额">{detail?.price}</Descriptions.Item>
            <Descriptions.Item label="订单重量">{detail?.weight}</Descriptions.Item>
            <Descriptions.Item label="已完成运量">{detail?.nowWeight}</Descriptions.Item>
            <Descriptions.Item label="今日运量">{detail?.todayWeight}</Descriptions.Item>
          </Descriptions>
          <CircleCharts style={{ height: '250px' }} option={option} />
        </Card>

        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span style={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
              订单报警数据看板
            </span>
            <Radio.Group defaultValue="b">
              <Radio.Button value="a">今日</Radio.Button>
              <Radio.Button value="b">总</Radio.Button>
            </Radio.Group>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span>今日报警：123</span>
            <span>今日运次：123</span>
          </div>
          <LineBackgroundCharts option={lineOption} />
          <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Button>报警列表</Button>
          </div>
        </Card>
      </Col>
      {UpdateModal(detail)}
      {AddModal()}
    </Row>
  );
};

export default Index;
