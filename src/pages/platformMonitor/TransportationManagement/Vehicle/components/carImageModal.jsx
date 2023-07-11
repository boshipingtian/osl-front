import React, { useEffect, useState } from 'react';
import { Image, Modal } from 'antd';

const CarImageModal = ({ imageList, title, visible = true, onCancel }) => {
  const [carImg, setCarImg] = useState([]);

  useEffect(() => {
    setCarImg(imageList);
  }, [imageList]);

  return (
    <Modal title={title} visible={visible} footer={null} onCancel={() => onCancel()}>
      <div
        style={{
          display: 'grid',
          width: '460px',
          padding: '20px',
          gridTemplateColumns: 'repeat(2,1fr)',
          gridTemplateRows: 'repeat(2,1fr)',
          gap: '20px',
        }}
      >
        {carImg.map((item) => {
          return (
            <Image
              key={item}
              width="200px"
              height="100px"
              style={{ objectFit: 'cover' }}
              src={item}
            />
          );
        })}
      </div>
      {/*{*/}
      {/*  imageList.map()*/}
      {/*}*/}
    </Modal>
  );
};

export default CarImageModal;
