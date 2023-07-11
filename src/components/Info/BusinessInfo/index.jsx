import React from 'react';
import { Card, Descriptions } from 'antd';
import { history } from 'umi';

const Index = (props) => {
  const { title, isShowCreateDate = true, createDate, infoColumn, infoData = [], style } = props;

  return (
    <Card style={style}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: '18px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
          {title}
        </div>
        <div style={{ fontSize: '16px', fontFamily: 'sans-serif' }}>
          {isShowCreateDate ? '生成时间：' + createDate : createDate}
        </div>
      </div>
      <Descriptions column={infoColumn}>
        {infoData.map((value, index) => {
          if (['卖方企业', '买方企业', '物流企业'].includes(value.title)) {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Descriptions.Item key={index} label={value.title}>
                <a
                  onClick={() => {
                    history.push({
                      pathname: '/platform-monitor/enterprise-monitor/trading-enterprise/detail',
                      query: {
                        companyId: value.id,
                      },
                    });
                  }}
                >
                  {value.data}
                </a>
              </Descriptions.Item>
            );
          }
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Descriptions.Item key={index} label={value.title}>
              {value.data}
            </Descriptions.Item>
          );
        })}
      </Descriptions>
    </Card>
  );
};

export default Index;
