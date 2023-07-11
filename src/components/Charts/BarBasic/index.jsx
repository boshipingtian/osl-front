import React from 'react';
import ReactEcharts from 'echarts-for-react';

const Index = (props) => {
  const { option, style } = props;
  return (
    <div>
      <ReactEcharts style={style} option={option} />
    </div>
  );
};

export default Index;
