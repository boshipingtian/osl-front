import React from 'react';
import { Form, Modal, Input, Button, Space } from 'antd';

const OrderCommonModal = ({ title, visible, footer = null, onCancel, onFinish }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      title={title}
      visible={visible}
      footer={footer}
      onCancel={() => {
        onCancel();
        form.resetFields();
      }}
    >
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
      >
        <Form.Item
          label="买方公司"
          name="companyA"
          rules={[
            {
              required: true,
              message: '请输入买方公司',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="卖方公司"
          name="companyB"
          rules={[
            {
              required: true,
              message: '请输入卖方公司',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="订单模式"
          name="orderType"
          rules={[
            {
              required: true,
              message: '请输入订单模式',
            },
          ]}
        >
          <Input />
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
          <Input />
        </Form.Item>
        <Form.Item
          label="重量"
          name="weight"
          rules={[
            {
              required: true,
              message: '请输入重量',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="货物类型"
          name="cargoType"
          rules={[
            {
              required: true,
              message: '请输入货物类型',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          style={{ marginBottom: '0', display: 'flex', flexDirection: 'row-reverse' }}
          wrapperCol={{
            offset: 4,
            span: 20,
          }}
        >
          <Space>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
            <Button
              htmlType="button"
              onClick={() => {
                onCancel();
                form.resetFields();
              }}
            >
              取消
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default OrderCommonModal;
