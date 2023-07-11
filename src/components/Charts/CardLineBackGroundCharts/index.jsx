import React from 'react';
import { Button, Card, Radio } from 'antd';
import ReactEcharts from 'echarts-for-react';

import './index.less';

const Index = (props) => {
  const {
    style,
    title,
    titleStyle,
    option,
    isShowMore = false,
    isShowButton = false,
    buttonText,
    radioOnChange,
  } = props;

  return (
    <Card style={style}>
      <div className="CardLineBackgroundChartsHeader">
        <span className="title" style={titleStyle}>
          {title}
        </span>
        <Radio.Group defaultValue="日" onChange={(e) => radioOnChange(e.target.value)}>
          <Radio.Button value="日">日</Radio.Button>
          <Radio.Button value="月">月</Radio.Button>
          <Radio.Button value="年">年</Radio.Button>
        </Radio.Group>
      </div>
      <ReactEcharts style={{ height: '400px' }} option={option} />
      <div className="CardLineBackgroundChartsFooter">
        {isShowMore ? <span className="description">more information</span> : <div />}
        {isShowButton ? (
          <Button type="primary" ghost>
            {buttonText}
          </Button>
        ) : (
          <div />
        )}
      </div>
    </Card>
  );
};

export default Index;
