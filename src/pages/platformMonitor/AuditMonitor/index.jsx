import React, { useEffect, useState } from 'react';
import BasicTable from '@/components/Table/BasicTable';
import TableSearchPro from '@/components/Table/TableSearchPro';
import { addAudit, getAuditList } from '@/services/user/audit';
import { message } from 'antd';
import { AuditDetailColumns, AuditListSelectOption } from '@/services/TableColumes/platform';
import AduitModal from '@/pages/platformMonitor/AuditMonitor/components/AduitModal';
import fakeData from '@/pages/platformMonitor/AuditMonitor/fake';

const Index = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dataSource, setDataSource] = useState([]);
  const [total, setTotal] = useState(0);

  const [isAuditVisible, setIsAuditVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    // await getAudit();
    await setDataSource(fakeData.map((item) => ({ ...item, operate: '查看详情' })));
  }, [pageSize, page]);

  //接收分页参数
  const onPageChange = (page, pageSize) => {
    console.log(page + '  ' + pageSize);
    setPage(page);
    setPageSize(pageSize);
  };

  const getAudit = async () => {
    //初始化查询数据
    let urlencoded = new URLSearchParams();
    urlencoded.append('currentPage', page.toString());
    urlencoded.append('pageSize', pageSize.toString());
    //获取数据
    const auditList = await getAuditList(urlencoded);
    if (auditList.pageData) {
      //设置数据
      auditList.pageData.map((item) => {
        item['operate'] = '查看详情';
      });
      setDataSource(auditList.pageData);
      setTotal(auditList.totalCount);
    } else {
      setDataSource([]);
      message.error('获取数据失败');
    }
  };

  const createAudit = async (data) => {
    setLoading(true);
    const res = await addAudit(data);
    //TODO API异常
    console.log(res);
    if (res.code === 200) {
      message.success(res.msg);
      setLoading(false);
      setIsAuditVisible(false);
      await getAudit();
    } else {
      setLoading(false);
      message.error(res.msg);
    }
  };

  return (
    <div>
      <TableSearchPro style={{ marginBottom: '20px' }} selectOption={AuditListSelectOption} />
      <BasicTable
        rowKey={(record) => record.account}
        columns={AuditDetailColumns}
        title="审计列表"
        dataSource={dataSource}
        onPageChange={(page, pageSize) => onPageChange(page, pageSize)}
        onAddHandler={() => setIsAuditVisible(true)}
        total={total}
      />

      <AduitModal
        visible={isAuditVisible}
        loading={loading}
        title="添加审计"
        onOK={(params) => createAudit(params)}
        onCancel={() => setIsAuditVisible(false)}
      />
    </div>
  );
};

export default Index;
