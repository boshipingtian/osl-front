import React, { useEffect, useState } from 'react';
import TableSearch from '@/components/Table/TableSearch';
import BasicTable from '@/components/Table/BasicTable';
import { HistoryTransList } from '@/services/TableColumes/platform';
import { getTransList } from '@/services/transportation/trans';
import { message } from 'antd';

const selectOption = ['订单号', '企业', '负责人', '联系方式'];

const Index = ({ location }) => {
  const { transId } = location.query;
  const [historyTransList, setHistoryTransList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(async () => {
    await TransList(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const TransList = async (current, size) => {
    setLoading(true);
    const res = await getTransList({ current, size });
    console.log(res);
    if (res.success) {
      setHistoryTransList(res.result.pageData);
      setTotal(res.result.totalCount);
      setLoading(false);
    } else {
      setLoading(false);
      message.error(res.description);
    }
  };

  return (
    <div>
      <TableSearch
        style={{ marginBottom: '20px' }}
        confirm={() => message.error('开发中')}
        refresh={() => message.error('开发中')}
        selectOption={selectOption}
      />
      <BasicTable
        columns={HistoryTransList}
        title="历史运次列表"
        dataSource={historyTransList.map((item) => {
          return { ...item, operate: '查看详情' };
        })}
        rowKey={(record) => record.tranId}
        loading={loading}
        onPageChange={(page, pageSize) => {
          setPageSize(pageSize);
          setCurrentPage(page);
        }}
        total={total}
        isShowTitleButton={false}
      />
    </div>
  );
};

export default Index;
