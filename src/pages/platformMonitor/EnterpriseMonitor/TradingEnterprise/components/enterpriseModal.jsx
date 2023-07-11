import React, { useEffect, useState } from 'react';
import { Button, Image, Input, message, Modal, Upload } from 'antd';
import { FileImageOutlined, UploadOutlined } from '@ant-design/icons';

const EnterpriseModal = (props) => {
  const { title, visible, handleOk, visibleHide, tableData, isShowCountry = true } = props;

  const [name, setName] = useState('');
  const [holder, setHolder] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [file, setFile] = useState(new File([], '', undefined));
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    handleClear();
  }, [visible]);
  //文件上传
  const fileOnChange = async (props) => {
    setFileList(props.fileList);
    if (props.fileList.length > 0) {
      await handlePreview(props.fileList[0]);
    } else {
      setImageUrl('');
    }
    setFile(props.file);
  };
  const handlePreview = async (file) => {
    const fileUrl = await getBase64(file.originFileObj);
    setImageUrl(fileUrl);
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  //清除表中内容
  const getFormData = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('holder', holder);
    formData.append('phone', phone);
    if (isShowCountry) {
      formData.append('country', country);
    }
    formData.append('address', address);
    formData.append('file', file);
    return formData;
  };
  const handleClear = () => {
    setName('');
    setCountry('');
    setAddress('');
    setHolder('');
    setPhone('');
    setFile(new File([], '', undefined));
    setImageUrl('');
    setFileList([]);
  };
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={() => {
        if (isShowCountry) {
          if (!name || !country || !address || !holder || !phone || !file.size) {
            message.error('请填写完整信息');
            return;
          }
        } else {
          if (!name || !address || !holder || !phone || !file.size) {
            message.error('请填写完整信息');
            return;
          }
        }
        const formData = getFormData();
        // console.log(formData);
        handleOk(formData);
      }}
      onCancel={() => {
        visibleHide();
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0px 0px' }}>
        {/*左边*/}
        <div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>企业名称</div>
            <Input
              placeholder="请输入企业名称"
              value={tableData?.name || name}
              onChange={(props) => setName(props.target.value)}
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>公司负责人</div>
            <Input
              placeholder="请输入公司负责人"
              value={tableData?.holder || holder}
              onChange={(props) => setHolder(props.target.value)}
            />
          </div>
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>负责人联系方式</div>
            <Input
              placeholder="请输入联系方式"
              value={tableData?.phone || phone}
              onChange={(props) => setPhone(props.target.value)}
            />
          </div>
          {isShowCountry ? (
            <div style={{ marginBottom: '25px' }}>
              <div style={{ marginBottom: '10px', fontSize: '14px' }}>国家</div>
              <Input
                placeholder="请输入国家"
                value={tableData?.country || country}
                onChange={(props) => setCountry(props.target.value)}
              />
            </div>
          ) : (
            ''
          )}
          <div style={{ marginBottom: '25px' }}>
            <div style={{ marginBottom: '10px', fontSize: '14px' }}>企业地址</div>
            <Input
              placeholder="请输入企业地址"
              value={tableData?.address || address}
              onChange={(props) => setAddress(props.target.value)}
            />
          </div>
        </div>
        {/*右边*/}
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
            {tableData?.imageUrl || imageUrl ? (
              <img src={imageUrl} style={{ objectFit: 'cover', width: '100%' }} />
            ) : (
              <FileImageOutlined style={{ fontSize: '50px', color: '#9d9d9d' }} />
            )}
          </div>
          <div style={{ marginTop: '20px' }}>
            <Upload
              onChange={fileOnChange}
              fileList={fileList}
              beforeUpload={() => false}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>上传文件</Button>
            </Upload>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EnterpriseModal;
