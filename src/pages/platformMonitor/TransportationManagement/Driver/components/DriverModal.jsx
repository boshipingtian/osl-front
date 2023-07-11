import React, { useState } from 'react';
import { Button, Col, Form, message, Input, Modal, Row, Space, Spin } from 'antd';
import UploadImage from '@/components/uploadImage';
import { FileImageOutlined } from '@ant-design/icons';

const DriverModel = ({ title, visible, onCancel, footer = null, loading, onOK }) => {
  const [form] = Form.useForm();

  const [headImg, setHeadImg] = useState(new File([], '', undefined));
  const [license, setLicense] = useState(new File([], '', undefined));
  const [headImage, setHeadImage] = useState('');
  const [licenseImage, setLicenseImage] = useState('');

  const onFinish = (params) => {
    if (license.size <= 0 || headImg.size <= 0) {
      message.error('请上传图片');
      return;
    }
    onOK({ ...params, headImg, license });
  };

  return (
    <Modal title={title} visible={visible} onCancel={() => onCancel()} footer={footer}>
      <Spin spinning={loading}>
        <Row>
          <Col span={12}>
            <Form layout="vertical" form={form} onFinish={onFinish} autoComplete="off">
              <Form.Item
                label="姓名"
                name="name"
                rules={[
                  {
                    required: true,
                    message: '请输入姓名',
                  },
                ]}
              >
                <Input placeholder="请输入姓名" />
              </Form.Item>

              <Form.Item
                label="联系方式"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: '请输入联系方式',
                  },
                ]}
              >
                <Input placeholder="请输入联系方式" />
              </Form.Item>

              <Form.Item
                label="昵称"
                name="nickName"
                rules={[
                  {
                    required: true,
                    message: '请输入昵称',
                  },
                ]}
              >
                <Input placeholder="请输入昵称" />
              </Form.Item>

              <Form.Item
                label="微信ID"
                name="wechatId"
                rules={[
                  {
                    required: true,
                    message: '请输入微信ID',
                  },
                ]}
              >
                <Input placeholder="请输入微信ID" />
              </Form.Item>

              <Form.Item
                label="驾驶证类型"
                name="cardType"
                rules={[
                  {
                    required: true,
                    message: '请输入驾驶证类型',
                  },
                ]}
              >
                <Input placeholder="请输入驾驶证类型" />
              </Form.Item>
            </Form>
          </Col>
          <Col span={12}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <div>
                <div style={{ fontSize: '14px', marginBottom: '5px' }}>头像</div>
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
                  {headImage ? (
                    <img
                      src={headImage}
                      style={{ objectFit: 'cover', height: '100%' }}
                      alt="image"
                    />
                  ) : (
                    <FileImageOutlined
                      style={{ fontSize: '40px', color: 'rgba(157,157,157,0.8)' }}
                    />
                  )}
                </div>
                <UploadImage
                  title="上传文件"
                  getFile={(file) => setHeadImg(file)}
                  getImageUrl={(url) => setHeadImage(url)}
                />
              </div>

              <div>
                <div style={{ fontSize: '14px', marginBottom: '5px' }}>驾驶证照片</div>
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
                  {licenseImage ? (
                    <img
                      src={licenseImage}
                      style={{ objectFit: 'cover', height: '100%' }}
                      alt="image"
                    />
                  ) : (
                    <FileImageOutlined
                      style={{ fontSize: '40px', color: 'rgba(157,157,157,0.8)' }}
                    />
                  )}
                </div>
                <UploadImage
                  title="上传文件"
                  getFile={(file) => setLicense(file)}
                  getImageUrl={(url) => setLicenseImage(url)}
                />
              </div>
            </div>
          </Col>
        </Row>
        <div style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: '20px' }}>
          <Space>
            <Button type="primary" onClick={() => form.submit()}>
              确定
            </Button>
            <Button htmlType="reset" onClick={() => onCancel()}>
              取消
            </Button>
          </Space>
        </div>
      </Spin>
    </Modal>
  );
};

export default DriverModel;
