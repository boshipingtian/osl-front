import React, { useState } from 'react';
import { Button, Col, Form, message, Input, Modal, Row, Space, Spin } from 'antd';
import UploadImage from '@/components/uploadImage';
import { FileImageOutlined } from '@ant-design/icons';

const AuditModal = ({ title, visible, onCancel, footer = null, loading, onOK }) => {
  const [form] = Form.useForm();

  const [headImg, setHeadImg] = useState(new File([], '', undefined));
  const [headImage, setHeadImage] = useState('');

  const onFinish = (params) => {
    if (headImg.size <= 0) {
      message.error('请上传图片');
      return;
    }
    onOK({ ...params, headImg });
    form.resetFields();
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
                label="级别"
                name="rank"
                rules={[
                  {
                    required: true,
                    message: '请输入级别',
                  },
                ]}
              >
                <Input placeholder="请输入级别" />
              </Form.Item>

              <Form.Item
                label="管辖范围"
                name="jurisdiction"
                rules={[
                  {
                    required: true,
                    message: '请输入管辖范围',
                  },
                ]}
              >
                <Input placeholder="请输入管辖范围" />
              </Form.Item>

              <Form.Item
                label="管理员"
                name="holder"
                rules={[
                  {
                    required: true,
                    message: '请输入管理员',
                  },
                ]}
              >
                <Input placeholder="请输入管理员" />
              </Form.Item>

              <Form.Item
                label="联系方式"
                name="holderMobile"
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
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码',
                  },
                ]}
              >
                <Input.Password placeholder="请输入密码" />
              </Form.Item>

              <Form.Item
                label="性质"
                name="administration"
                rules={[
                  {
                    required: true,
                    message: '请输入性质',
                  },
                ]}
              >
                <Input placeholder="请输入性质" />
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
            </div>
          </Col>
        </Row>
        <div style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: '20px' }}>
          <Space>
            <Button type="primary" onClick={() => form.submit()}>
              添加
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

export default AuditModal;
