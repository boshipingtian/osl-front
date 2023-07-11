import React from 'react';
import { Button, Form, Input, Modal, Space, Spin } from 'antd';

const DeviceAddModal = ({ title, visible, loading, footer = null, onCancel, onFinish }) => {
  return (
    <Modal title={title} visible={visible} footer={footer} onCancel={onCancel}>
      <Spin spinning={loading}>
        <Form
          onFinish={onFinish}
          autoComplete="off"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
        >
          <Form.Item
            label="设备类型"
            name="deviceType"
            rules={[
              {
                required: true,
                message: '请输入设备类型',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="设备标识符"
            name="deviceIndentification"
            rules={[
              {
                required: true,
                message: '请输入设备标识符',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Space>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button htmlType="reset">重置</Button>
          </Space>
        </Form>
      </Spin>
    </Modal>
  );
};

export default DeviceAddModal;
