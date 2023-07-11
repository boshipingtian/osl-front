import React from 'react';
import { Button, Card, Select, Space } from 'antd';
import './index.less';

const { Option } = Select;

const Index = (props) => {
  const { style, selectOption = [] } = props;

  return (
    <Card style={style}>
      <div className="CardSearchBar">
        <div className="SearchBarContainer">
          {selectOption.map(({ data, title } = value) => {
            return (
              <div key={title} className="SearchBarItem">
                <span style={{ marginRight: '10px' }}>{title}</span>
                <Select placeholder="请选择" style={{ width: 150 }}>
                  {data.map((value1) => (
                    <Option key={value1} value={value1}>
                      {value1}
                    </Option>
                  ))}
                </Select>
              </div>
            );
          })}
        </div>

        <div>
          <Space>
            <Button>重置</Button>
            <Button type="primary">查询</Button>
          </Space>
        </div>
      </div>
    </Card>
  );
};

export default Index;
