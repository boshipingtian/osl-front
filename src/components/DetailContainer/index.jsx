import React from 'react';
import { Card, Row, Col, Image } from 'antd';
import { AMapScene, Marker } from '@antv/l7-react';
import ShowItem from '@/components/DetailContainer/ShowItem';
import BlockItem from '@/components/DetailContainer/BlockItem';
import BlockItemEcharts from '@/components/DetailContainer/BlockItemEcharts';
import styles from './index.less';

const Index = () => {
  return (
    <div>
      <Card>
        <Row gutter={[24, 16]}>
          <Col span={16}>
            <Row>
              <Col span={16}>
                <ShowItem title="企业名称" value="xxxxxx公司" fontSize="24px" />
              </Col>
              <Col span={8}>
                <ShowItem title="企业身份" value="卖方企业" fontSize="18px" />
              </Col>
            </Row>

            <Row>
              <div>
                <ShowItem title="注册时间" value="xxxx年xx月xxxxxx" fontSize="18px" />
              </div>
            </Row>
            <Row>
              <div className={styles.AMapContainer}>
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
            </Row>

            <Row>
              <Col span={8}>
                <ShowItem title="企业场控数" value="12个" fontSize="18px" />
              </Col>
              <Col span={8}>
                <ShowItem title="企业负责人" value="xxx" fontSize="18px" />
              </Col>
              <Col span={8}>
                <ShowItem title="联系方式" value="1xx xxxx xxxx" fontSize="18px" />
              </Col>
            </Row>
            <Row>
              <ShowItem title="企业订单数" value="32个" fontSize="24px" />
            </Row>
          </Col>

          <Col span={8}>
            <div className={styles.licensePhoto}>
              <Image
                width={'100%'}
                height={'100%'}
                preview={false}
                src="https://picsum.photos/300/200"
              />
            </div>
          </Col>
        </Row>
      </Card>

      <Card title="企业业务情况" headStyle={{ fontSize: '24px' }}>
        <Row>
          <Col span={12}>
            <Row>
              <div className={styles.BlockItemContainer}>
                <div>运输数据统计</div>
                <div className={styles.BlockItemContent}>
                  <BlockItem />
                  <BlockItemEcharts />
                </div>
              </div>
              {/*<div></div>*/}
            </Row>
            <Row>123</Row>
          </Col>
          <Col span={12}>
            <Row>123</Row>
            <Row>123</Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Index;
