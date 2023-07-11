import React from 'react';
import { Card, Col, Row } from 'antd';
import ShowItem from '@/components/DetailContainer/ShowItem';

const Index = () => {
  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={12}>
          <Card bodyStyle={{ padding: '20px' }} hoverable={true}>
            <ShowItem title="今日运量" value="12" fontSize="18px" />
          </Card>
        </Col>
        <Col span={12}>
          <Card bodyStyle={{ padding: '20px' }} hoverable={true}>
            <ShowItem title="今日运量" value="12" fontSize="18px" />
          </Card>
        </Col>
        <Col span={12}>
          <Card bodyStyle={{ padding: '20px' }} hoverable={true}>
            <ShowItem title="今日运量" value="12" fontSize="18px" />
          </Card>
        </Col>
        <Col span={12}>
          <Card bodyStyle={{ padding: '20px' }} hoverable={true}>
            <ShowItem title="今日运量" value="12" fontSize="18px" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
