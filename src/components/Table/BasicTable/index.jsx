import { Card, Table, Button, Pagination, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.less';
import { useState } from 'react';

const Index = ({
  title,
  columns,
  dataSource,
  titleButton,
  isShowTitleButton = true,
  footerMore,
  onPageChange,
  onAddHandler,
  rowKey,
  loading,
  total = 500,
}) => {
  return (
    <>
      <Card>
        <div className="FullAddTableHeader">
          <span className="title">{title}</span>
          <div>
            {isShowTitleButton ? (
              <Button type="primary" icon={<PlusOutlined />} onClick={() => onAddHandler(true)}>
                添加
              </Button>
            ) : (
              titleButton
            )}
          </div>
        </div>
        <Table
          loading={loading}
          rowKey={rowKey}
          columns={columns}
          pagination={false}
          dataSource={dataSource}
        />
        <div className="FullAddTableFooter">
          <span>{footerMore}</span>
          <Pagination
            showQuickJumper
            defaultCurrent={1}
            total={total}
            onChange={(page, pageSize) => onPageChange(page, pageSize)}
          />
        </div>
      </Card>
    </>
  );
};

export default Index;
