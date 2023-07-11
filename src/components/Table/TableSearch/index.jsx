import React, { useEffect, useState } from 'react';
import { Button, Card, Input, message, Select, Space } from 'antd';
import './index.less';

const { Option } = Select;

const Index = ({ style, selectOption = [], confirm, refresh }) => {
  const [classify, setClassify] = useState('');
  const [keywords, setKeywords] = useState('');

  function clearAll() {
    setKeywords('');
  }

  return (
    <Card style={style}>
      <div className="CardSearchBar">
        <div className="SearchBarContainer">
          <div className="SearchBarItem">
            <span>分类：</span>
            <Select
              placeholder="请选择"
              style={{ width: 150 }}
              onChange={(value) => setClassify(value)}
            >
              {selectOption.map((value) => {
                return (
                  <Option key={value} value={value}>
                    {value}
                  </Option>
                );
              })}
            </Select>
          </div>

          <div className="SearchBarItem">
            <span>关键词：</span>
            <Input
              placeholder="请输入"
              style={{ width: 150 }}
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Space>
            <Button
              onClick={() => {
                refresh();
                clearAll();
              }}
            >
              重置
            </Button>
            <Button
              type="primary"
              onClick={() => {
                console.log(classify, keywords);
                if (keywords && classify) {
                  confirm(classify, keywords);
                } else if (classify === '已绑定车辆' || classify === '未绑定车辆') {
                  confirm(classify, keywords);
                } else {
                  message.error('请填写完整');
                }
              }}
            >
              查询
            </Button>
          </Space>
        </div>
      </div>
    </Card>
  );
};

export default Index;
