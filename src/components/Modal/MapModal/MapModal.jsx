import React from 'react';
import { LineLayer, AMapScene } from '@antv/l7-react';
import { Modal } from 'antd';

const MapModal = ({ title, visible, footer = null, onCancel, width = '50vw' }) => {
  return (
    <Modal
      title={title}
      visible={visible}
      footer={footer}
      onCancel={onCancel}
      width={width}
      bodyStyle={{ padding: '0' }}
    >
      <div style={{ position: 'relative', height: '50vh' }}>
        <AMapScene
          map={{
            center: [110.19382669582967, 50.258134],
            pitch: 0,
            style: 'dark',
            zoom: 1,
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        ></AMapScene>
      </div>
    </Modal>
  );
};

export default MapModal;
