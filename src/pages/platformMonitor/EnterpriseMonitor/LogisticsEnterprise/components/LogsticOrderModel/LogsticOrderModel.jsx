import React from 'react';
import { Button, Form, Input, message, Modal, Space, Spin } from 'antd';

const LogsticOrderModel = ({ title, visible, onCancel, footer = null, loading, onOK }) => {
  const onFinish = (params) => {
    onOK(params);
  };

  return (
    <Modal title={title} visible={visible} onCancel={() => onCancel()} footer={footer}>
      <Spin spinning={loading}>
        <Form layout="vertical" onFinish={onFinish} autoComplete="off">
          <Form.Item
            label="订单号"
            name="orderId"
            rules={[
              {
                required: true,
                message: '请输入订单号',
              },
            ]}
          >
            <Input placeholder="请输入订单号" />
          </Form.Item>

          <Form.Item
            label="物流企业"
            name="company"
            rules={[
              {
                required: true,
                message: '请输入物流企业',
              },
            ]}
          >
            <Input placeholder="请输入物流企业" />
          </Form.Item>

          <Form.Item
            label="运量"
            name="weight"
            rules={[
              {
                required: true,
                message: '请输入运量',
              },
            ]}
          >
            <Input placeholder="请输入运量" />
          </Form.Item>

          <Form.Item
            label="价格"
            name="price"
            rules={[
              {
                required: true,
                message: '请输入价格',
              },
            ]}
          >
            <Input placeholder="请输入价格" />
          </Form.Item>

          <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Space>
              <Button type="primary" htmlType="submit">
                添加
              </Button>
              <Button htmlType="reset" onClick={() => onCancel()}>
                取消
              </Button>
            </Space>
          </div>
        </Form>
      </Spin>
    </Modal>
  );
};

export default LogsticOrderModel;
