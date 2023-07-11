import React from 'react';
import ReactEcharts from 'echarts-for-react';

const Index = (props) => {
  const { style, option } = props;

  return (
    <div style={style}>
      <ReactEcharts option={option} />
    </div>
  );
};

export default Index;
