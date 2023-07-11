import { LineLayer, AMapScene } from '@antv/l7-react';
import React, { useState, useEffect } from 'react';

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://gw.alipayobjects.com/os/basement_prod/32e1f3ab-8588-46cb-8a47-75afb692117d.json',
      );
      const raw = await response.json();
      setData(raw);
    };
    fetchData();
  }, []);

  return (
    <AMapScene
      map={{
        center: [116.389321, 39.908072],
        pitch: 0,
        style: 'dark',
        mapStyle: 'amap://styles/darkblue',
        zoom: 4,
      }}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      {data && (
        <LineLayer
          key={'2'}
          source={{
            data,
          }}
          size={{
            values: 1,
          }}
          color={{
            values: '#2aadf3',
          }}
          shape={{
            values: 'line',
          }}
          style={{
            opacity: 1,
          }}
        />
      )}
    </AMapScene>
  );
};

export default Index;
