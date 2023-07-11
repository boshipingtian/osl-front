import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Input, Space, Button, Tag, Image, message } from 'antd';
import BasicProgress from '@/components/Progress/BasicProgress';
import { getTransDetail } from '@/services/transportation/trans';
import { history } from 'umi';

const { Search } = Input;

const Index = ({ location }) => {
  const { transId } = location.query;
  const [transDetail, setTransDetail] = useState(undefined);

  console.log('transId：', transId);

  useEffect(async () => {
    await TransList(transId);
  }, [transId]);

  //获取车证详情
  const TransList = async (transId) => {
    const res = await getTransDetail({ transId });
    console.log(res);
    if (res.success) {
      setTransDetail(res.result);
    } else {
      message.error(res.description);
    }
  };
  /**
   * 运输进度
   */
  let progress = {
    current: transDetail?.nowStatus,
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
   * 过磅数据
   */
  let infoData = [
    {
      title: '皮重对比结果',
      data: transDetail?.noPoundPass === 1 ? '通过' : '未通过',
    },
    {
      title: '皮磅重比',
      data: transDetail?.noPoundCont,
    },
    {
      title: '毛重对比结果',
      data: transDetail?.allPoundPass === 1 ? '通过' : '未通过',
    },
    {
      title: '毛磅重比',
      data: transDetail?.allPoundCont,
    },
  ];
  let infoCardData = [
    {
      title: '初始皮重',
      data: transDetail?.beginNoPound,
    },
    {
      title: '初始毛重',
      data: transDetail?.beginAllPound,
    },
    {
      title: '最终毛重',
      data: transDetail?.endAllPound,
    },
    {
      title: '最终皮重',
      data: transDetail?.endNoPound,
    },
  ];

  return (
    <div>
      {/*header*/}
      <div
        style={{
          position: 'absolute',
          width: 'calc(100% + 48px)',
          top: '-24px',
          left: '-24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          height: '60px',
          marginBottom: '20px',
          backgroundColor: '#fff',
        }}
      >
        <Search style={{ width: '300px' }} />
        <div>
          <Space>
            <Button onClick={() => message.error('开发中')}>暂不处理</Button>
            <Button onClick={() => message.error('开发中')}>已处理</Button>
            <Button type="danger" onClick={() => message.error('开发中')}>
              删除
            </Button>
          </Space>
        </div>
      </div>

      <Row gutter={[20, 20]} style={{ marginTop: 'calc(36px + 20px)' }}>
        <Col span={17}>
          <Card>
            {/*  title*/}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                车证数据
              </span>
              <Space>
                <Tag color="blue">已完成</Tag>
              </Space>
            </div>

            {/*info*/}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '10px',
              }}
            >
              <Space>
                <span>车牌号：</span>
                <span>{transDetail?.license}</span>
                <a
                  onClick={() => {
                    history.push({
                      pathname: '/platform-monitor/transportation-management/vehicle/detail',
                      query: {
                        carId: 1,
                      },
                    });
                  }}
                >
                  查看
                </a>
              </Space>
              <Space>
                <span>绑定运单：</span>
                <span>{transDetail?.tranIdentification}</span>
                <a
                  onClick={() => {
                    history.push({
                      pathname: '/history-data/history-business/history-waybill/detail',
                      query: {
                        id: transDetail?.tranIdentification,
                      },
                    });
                  }}
                >
                  查看
                </a>
              </Space>
            </div>

            <div style={{ marginTop: '20px' }}>
              <BasicProgress progress={progress.data} current={progress.current} />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '20px',
              }}
            >
              <Space>
                <span>创建时间：</span>
                <span>{transDetail?.creatTime}</span>
              </Space>
              <Space>
                <span>更新时间：</span>
                <span>{transDetail?.updateTime}</span>
              </Space>
            </div>
          </Card>
        </Col>

        <Col span={7}>
          <Card>
            {/*  title*/}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                司机信息
              </span>
              <Space>
                <Tag color="red">未处理</Tag>
                <Tag color="red">已报警</Tag>
              </Space>
            </div>

            {/* info */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '137.14px',
              }}
            >
              <div>
                <div style={{ marginBottom: '10px' }}>
                  <span>姓名：</span>
                  <span>{transDetail?.driverName}</span>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <span>联系方式：</span>
                  <span>{transDetail?.driverPhone}</span>
                </div>
                <Button
                  style={{ flex: '1' }}
                  type="primary"
                  onClick={() => {
                    // /platform-monitor/transportation-management/driver/detail?driverId=10000
                    history.push({
                      pathname: '/platform-monitor/transportation-management/driver/detail',
                      query: {
                        driverId: transDetail?.driverId,
                      },
                    });
                  }}
                >
                  查看司机详情
                </Button>
              </div>

              <div style={{ width: '107px', height: '107px' }}>
                <img
                  style={{ width: 'inherit', height: 'inherit', borderRadius: '50%' }}
                  src="https://img2.woyaogexing.com/2017/04/25/8ead3e49a054fef4!400x400_big.jpg"
                  alt="头像"
                />
              </div>
            </div>
          </Card>
        </Col>

        <Col span={24}>
          <Card>
            {/*  title*/}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                过磅数据
              </span>
              <Space>
                {transDetail?.allPoundPass === 1 && transDetail?.noPoundPass === 1 ? (
                  <Tag color="blue">通过</Tag>
                ) : (
                  <Tag color="red">未通过</Tag>
                )}
              </Space>
            </div>

            {/*  info */}
            <div style={{ marginTop: '20px' }}>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                {infoData.map((value, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index}>
                    <span>{value.title + ': '}</span>
                    <span>{value.data}</span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  padding: '10px 10px',
                  boxShadow: '0 0 5px rgba(0,0,0,0.14)',
                  marginTop: '20px',
                }}
              >
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  {infoCardData.map((value, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={index}>
                      <div style={{ fontSize: '14px', color: '#8C8C8C' }}>{value.title}</div>
                      <div style={{ fontSize: '24px' }}>{value.data}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={24}>
          <Card>
            {/*  title*/}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                车纹数据
              </span>
              <Space>
                <div>
                  <span>车纹对比结果：</span>
                  <Tag color="blue">通过</Tag>
                </div>
              </Space>
            </div>

            {/*  info */}
            <div style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '16px' }}>
                <span>载货车纹比：</span>
                <span>{transDetail?.carLineCountB}</span>
              </div>
              {[
                {
                  num: 1,
                  valueA: transDetail?.beginCarLineA,
                  valueB: transDetail?.endCarLineA,
                },
                {
                  num: 2,
                  valueA: transDetail?.beginCarLineB,
                  valueB: transDetail?.endCarLineB,
                },
              ].map((value, index) => (
                <div
                  key={index}
                  style={{
                    padding: '10px 10px',
                    boxShadow: '0 0 5px rgba(0,0,0,0.14)',
                    marginTop: '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      fontFamily: 'sans-serif',
                      color: '#8c8c8c',
                    }}
                  >
                    {`场${value.num}车纹`}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ flex: 1, padding: '10px 20px 10px 0' }}>
                      <div>入口车纹</div>
                      <div style={{ marginTop: '5px' }}>
                        <Image
                          width="100%"
                          height="300px"
                          style={{ objectFit: 'cover' }}
                          src={value.valueA}
                        />
                      </div>
                    </div>
                    <div style={{ flex: 1, padding: '10px 0px 10px 20px' }}>
                      <div>出口车纹</div>
                      <div style={{ marginTop: '5px' }}>
                        <Image
                          width="100%"
                          height="300px"
                          style={{ objectFit: 'cover' }}
                          src={value.valueB}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>

        <Col span={24}>
          <Card>
            {/*  title*/}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '18px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>
                现场照片
              </span>
            </div>

            {/*  info */}
            <div style={{ marginTop: '20px' }}>
              {[
                {
                  num: 1,
                  valueA: transDetail?.p1InImg,
                  valueB: transDetail?.p1OutImg,
                },
                {
                  num: 2,
                  valueA: transDetail?.p2InImg,
                  valueB: transDetail?.p2OutImg,
                },
              ].map((value, index) => (
                <div
                  key={index}
                  style={{
                    padding: '10px 10px',
                    boxShadow: '0 0 5px rgba(0,0,0,0.14)',
                    marginTop: '20px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      fontFamily: 'sans-serif',
                      color: '#8c8c8c',
                    }}
                  >
                    {`场${value.num}照片`}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ flex: 1, padding: '10px 20px 10px 0' }}>
                      <div>入口照片</div>
                      <div style={{ marginTop: '5px' }}>
                        <Image
                          width="100%"
                          height="300px"
                          style={{ objectFit: 'cover' }}
                          src={value.valueA}
                        />
                      </div>
                    </div>
                    <div style={{ flex: 1, padding: '10px 0px 10px 20px' }}>
                      <div>出口照片</div>
                      <div style={{ marginTop: '5px' }}>
                        <Image
                          width="100%"
                          height="300px"
                          style={{ objectFit: 'cover' }}
                          src={value.valueB}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
