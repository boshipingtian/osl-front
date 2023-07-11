import React, { useEffect, useState } from 'react';
import { Input, message, Modal, Spin } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';
import UploadImage from '@/components/uploadImage.jsx';

const VehicleModal = ({ title, visible, handleOk, visibleHide, spinning, resultData }) => {
  const [license, setLicense] = useState('');
  const [carType, setCarType] = useState('');
  const [carLegalWeight, setCarLegalWeight] = useState('');
  const [carWeight, setCarWeight] = useState('');
  const [company, setCompany] = useState('');
  const [carDrivingImg, setCarDrivingImg] = useState(new File([], '', undefined));
  const [imageUrl, setImageUrl] = useState('');
  const [topLeftImage, setTopLeftImage] = useState(new File([], '', undefined));
  const [topRightImage, setTopRightImage] = useState(new File([], '', undefined));
  const [bottomLeftImage, setBottomLeftImage] = useState(new File([], '', undefined));
  const [bottomRightImage, setBottomRightImage] = useState(new File([], '', undefined));

  useEffect(() => {
    console.log('VehicleModal', resultData);
    if (resultData) {
      setLicense(resultData?.license);
      setCarType(resultData?.carType);
      setCarWeight(resultData?.carWeight);
      setCarLegalWeight(resultData?.carLegalWeight);
      setCompany(resultData?.company);
    }
  }, [resultData]);

  return (
    <Modal
      title={title}
      visible={visible}
      onOk={() => {
        if (
          !license ||
          !carType ||
          !carLegalWeight ||
          !carWeight ||
          !company ||
          !carDrivingImg.size ||
          !topLeftImage.size ||
          !topRightImage.size ||
          !bottomLeftImage.size ||
          !bottomRightImage.size
        ) {
          message.error('请填写完整信息');
          return;
        }
        handleOk({
          license,
          carType,
          carLegalWeight,
          carWeight,
          company,
          carDrivingImg,
          carImage1: topLeftImage,
          carImage2: topRightImage,
          carImage3: bottomLeftImage,
          carImage4: bottomRightImage,
        });
      }}
      onCancel={() => {
        visibleHide();
      }}
    >
      <Spin tip="Loading..." spinning={spinning}>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0px 0px' }}>
          {/*左边*/}
          <div>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ marginBottom: '10px', fontSize: '14px' }}>车牌号</div>
              <Input
                placeholder="请输入车牌号"
                value={license}
                onChange={(props) => setLicense(props.target.value)}
              />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ marginBottom: '10px', fontSize: '14px' }}>车辆型号</div>
              <Input
                placeholder="请输入车辆型号"
                value={carType}
                onChange={(props) => setCarType(props.target.value)}
              />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ marginBottom: '10px', fontSize: '14px' }}>荷载重量</div>
              <Input
                placeholder="请输入荷载重量"
                value={carLegalWeight}
                onChange={(props) => setCarLegalWeight(props.target.value)}
              />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ marginBottom: '10px', fontSize: '14px' }}>车辆自重</div>
              <Input
                placeholder="请输入车辆自重"
                value={carWeight}
                onChange={(props) => setCarWeight(props.target.value)}
              />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ marginBottom: '10px', fontSize: '14px' }}>所属物流企业</div>
              <Input
                placeholder="请输入所属物流企业"
                value={company}
                onChange={(props) => setCompany(props.target.value)}
              />
            </div>
          </div>

          {/*右边*/}
          {/*车辆行驶证*/}
          <div>
            <div style={{ marginBottom: '25px' }}>
              <div style={{ marginBottom: '10px', fontSize: '14px' }}>车辆行驶证</div>
            </div>
            <div style={{ overflow: 'hidden', width: '150px' }}>
              {/*上传*/}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '150px',
                  height: '150px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid #e8e8e8',
                }}
              >
                {imageUrl ? (
                  <img src={imageUrl} style={{ objectFit: 'cover', height: '100%' }} />
                ) : (
                  <FileImageOutlined style={{ fontSize: '50px', color: '#9d9d9d' }} />
                )}
              </div>
              <UploadImage
                title="车辆行驶证"
                getFile={(file) => setCarDrivingImg(file)}
                getImageUrl={(url) => setImageUrl(url)}
              />
            </div>

            {/*车辆四角照片*/}
            <div style={{ marginBottom: '10px', marginTop: '20px' }}>
              <div style={{ marginBottom: '10px', fontSize: '14px' }}>车辆四角照片</div>
            </div>

            <UploadImage
              title="左前照片"
              getFile={(file) => setTopLeftImage(file)}
              setImgFile={topLeftImage}
            />
            <UploadImage
              title="右前照片"
              getFile={(file) => setTopRightImage(file)}
              setImgFile={topRightImage}
            />
            <UploadImage
              title="左后照片"
              getFile={(file) => setBottomLeftImage(file)}
              setImgFile={bottomLeftImage}
            />
            <UploadImage
              title="右后照片"
              getFile={(file) => setBottomRightImage(file)}
              setImgFile={bottomRightImage}
            />
          </div>
        </div>
      </Spin>
    </Modal>
  );
};

export default VehicleModal;
