import React from 'react';
import { Image, Modal } from 'antd';

const LicenseModal = ({ title = 'Title', visible, src = '', onCancel, footer = null }) => {
  return (
    <Modal title={title} onCancel={onCancel} footer={footer} visible={visible} width="700px">
      <div>
        <Image src={src} width="652px" height="400px" />
      </div>
    </Modal>
  );
};

export default LicenseModal;
