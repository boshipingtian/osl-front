import React from 'react';
import { Button, Card, Radio } from 'antd';
import ReactEcharts from 'echarts-for-react';
import CardItemNumber from '@/components/CardItemNumber';

import './index.less';
import { history } from 'umi';

const Index = ({ style, title, option, descriptionDate, radioOnChange, redirectUrl, id }) => {
  return (
    <Card style={style}>
      <div className="CardLineChartsHeader">
        <span className="title">{title}</span>
        <Radio.Group defaultValue="日" onChange={(e) => radioOnChange(e.target.value)}>
          <Radio.Button value="日">日</Radio.Button>
          <Radio.Button value="月">月</Radio.Button>
          <Radio.Button value="年">年</Radio.Button>
        </Radio.Group>
      </div>
      <ReactEcharts style={{ height: '400px' }} option={option} />
      <div className="CardLineChartsFooter">
        <div className="description">
          {descriptionDate?.map((value) => {
            return (
              <CardItemNumber
                key={value.title}
                style={{ margin: '0 20px' }}
                info={value.info}
                title={value.title}
              />
            );
          })}
        </div>
        <Button
          type="primary"
          ghost
          onClick={() => {
            history.push({
              pathname: redirectUrl,
              query: {
                id,
              },
            });
          }}
        >
          报警详情
        </Button>
      </div>
    </Card>
  );
};

export default Index;
