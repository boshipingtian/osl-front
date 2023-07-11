import React, { useState } from 'react';
import { Button, Form, Input, message, Modal, Space, Spin } from 'antd';
import styles from '@/pages/platformMonitor/EnterpriseMonitor/LogisticsEnterprise/style.less';
import UploadImage from '@/components/uploadImage';

const LogsticModel = ({ title, visible, onCancel, footer = null, loading, onOK }) => {
  const [file, setFile] = useState(new File([], '', undefined));
  const [imgUrl, setImgUrl] = useState('');

  const onFinish = (params) => {
    if (file.size <= 0) {
      message.error('请上传证件');
      return;
    }
    onOK({ ...params, file });
  };

  return (
    <Modal title={title} visible={visible} onCancel={() => onCancel()} footer={footer}>
      <Spin spinning={loading}>
        <div>
          <div className={styles.license}>营业执照</div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <UploadImage
              maxCount={1}
              title="上传图片"
              getFile={(file) => setFile(file)}
              getImageUrl={(url) => setImgUrl(url)}
            />
            <img style={{ width: '180px', height: '180px' }} src={imgUrl} alt="" />
          </div>

          <Form layout="vertical" onFinish={onFinish} autoComplete="off">
            <Form.Item
              label="企业名称"
              name="name"
              rules={[
                {
                  required: true,
                  message: '请输入企业名称',
                },
              ]}
            >
              <Input placeholder="请输入企业名称" />
            </Form.Item>

            <Form.Item
              label="公司负责人"
              name="holder"
              rules={[
                {
                  required: true,
                  message: '请输入公司负责人',
                },
              ]}
            >
              <Input placeholder="请输入公司负责人" />
            </Form.Item>

            <Form.Item
              label="负责人联系方式"
              name="phone"
              rules={[
                {
                  required: true,
                  message: '请输入负责人联系方式',
                },
              ]}
            >
              <Input placeholder="请输入负责人联系方式" />
            </Form.Item>

            <Form.Item
              label="企业地址"
              name="address"
              rules={[
                {
                  required: true,
                  message: '请输入企业地址',
                },
              ]}
            >
              <Input placeholder="请输入企业地址" />
            </Form.Item>

            <Form.Item
              label="国家"
              name="country"
              rules={[
                {
                  required: true,
                  message: '请输入国家',
                },
              ]}
            >
              <Input placeholder="请输入国家" />
            </Form.Item>
            <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
              <Space>
                <Button type="primary" htmlType="submit">
                  确定
                </Button>
                <Button htmlType="reset" onClick={() => onCancel()}>
                  取消
                </Button>
              </Space>
            </div>
          </Form>
        </div>
      </Spin>
    </Modal>
  );
};

export default LogsticModel;
