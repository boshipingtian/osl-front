import React from 'react';

const Index = (props) => {
  const { title, info, style, titleStyle, infoStyle } = props;

  return (
    <div style={style}>
      <div style={{ fontSize: '14px', color: 'rgba(0, 0, 0, 0.45)', ...titleStyle }}>{title}</div>
      <div style={{ marginTop: '5px', fontSize: '24px', ...infoStyle }}>{info}</div>
    </div>
  );
};

export default Index;
