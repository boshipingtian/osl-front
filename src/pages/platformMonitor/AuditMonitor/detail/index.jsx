import React, { useEffect, useState } from 'react';
import { Button, Card, Descriptions, Image, Space, Tag, message } from 'antd';
import { getAudit, updateAudit } from '@/services/user/audit';
import AduitModal from '@/pages/platformMonitor/AuditMonitor/components/AduitModal';

const Index = (props) => {
  const [userdata, setUserdata] = useState({});
  const [isAuditVisible, setIsAuditVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { location } = props;
  const { account } = location.query;

  useEffect(async () => {
    await getAuditInfo();
  }, []);

  const getAuditInfo = async () => {
    let formData = new FormData();
    formData.append('account', account);
    const res = await getAudit(formData);
    console.log(res);
    setUserdata(res.data);
  };

  const modifyAudit = async (data) => {
    setLoading(true);
    console.log({ account, ...data });
    const res = await updateAudit({ account, ...data });
    console.log(res);
    if (res.code === 200) {
      message.success(res.msg);
      setLoading(false);
      setIsAuditVisible(false);
      await getAuditInfo();
    } else {
      setLoading(false);
      setIsAuditVisible(false);
    }
  };

  return (
    <Card>
      <div style={{ display: 'flex', width: '100%' }}>
        {/* 头像 */}
        <div style={{ width: '106px', height: '106px', overflow: 'hidden', borderRadius: '50%' }}>
          <img style={{ width: '106px', height: '106px' }} src={userdata?.headPictrueUrl} />
        </div>
        {/* 详细信息 */}
        <div style={{ width: 'calc(100% - 126px)', marginLeft: '20px' }}>
          <div>
            {/* 头部信息 */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '20px', marginRight: '14px' }}>{userdata?.name}</span>
                <Tag color="blue">{userdata?.limits === 1 ? '管理员' : '审计员'}</Tag>
                <span style={{ marginLeft: '20px', fontSize: '14px' }}>{userdata?.account}</span>
              </div>
              {/*按钮*/}
              <div>
                <Space>
                  <Button type="primary" onClick={() => setIsAuditVisible(true)}>
                    修改
                  </Button>
                  <Button type="danger" onClick={() => message.error('缺少API')}>
                    删除
                  </Button>
                </Space>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Descriptions column={3} style={{ marginTop: '20px', width: '800px' }}>
              <Descriptions.Item label="管理员">{userdata?.holder}</Descriptions.Item>
              <Descriptions.Item label="级别">{userdata?.rank}</Descriptions.Item>
              <Descriptions.Item label="行政">{}</Descriptions.Item>
              <Descriptions.Item label="注册时间">{userdata?.createTime}</Descriptions.Item>
              <Descriptions.Item label="管辖范围">{userdata?.jurisdiction}</Descriptions.Item>
              <Descriptions.Item label="联系方式">{userdata?.holderMobile}</Descriptions.Item>
              <Descriptions.Item label="最后登陆时间">{userdata?.loginTime}</Descriptions.Item>
            </Descriptions>

            {/* 证件 */}
            <div style={{ margin: '20px' }}>
              <Image width={208} height={117} src={userdata?.auditCertificateUrl} />
            </div>
          </div>
        </div>
      </div>

      <AduitModal
        visible={isAuditVisible}
        loading={loading}
        title="修改审计"
        onOK={async (params) => modifyAudit(params)}
        onCancel={() => setIsAuditVisible(false)}
      />
    </Card>
  );
};

export default Index;
