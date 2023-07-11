import React, { useEffect, useState } from 'react';
import TableSearch from '@/components/Table/TableSearch';
import BasicTable from '@/components/Table/BasicTable';
import {
  LogisticsEnterpriseColumns,
  LogisticsEnterpriseSelectOption,
} from '@/services/TableColumes/platform';
import { addLogistics, getLogisticsList } from '@/services/enterprise/logistics';
import { message } from 'antd';
import LogsticModel from '@/pages/platformMonitor/EnterpriseMonitor/LogisticsEnterprise/components/LogsticModel/LogsticModel';

const Index = () => {
  const [dataSource, setDataSource] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [classify, setClassify] = useState('');
  const [keywords, setKeywords] = useState('');
  const [loading, setLoading] = useState(false);

  const [isEditVisible, setIsEditVisible] = useState(false);

  useEffect(async () => {
    await LogisticList(page, pageSize, classify, keywords);
  }, [page, pageSize, classify, keywords]);

  /**
   * 获取企业列表
   */
  const LogisticList = async (page, pageSize, classify, keywords) => {
    setLoading(true);
    const res = await getLogisticsList({
      name: classify === 'name' ? keywords : '',
      phone: classify === 'phone' ? keywords : '',
      address: classify === 'address' ? keywords : '',
      holder: classify === 'holder' ? keywords : '',
      country: classify === 'country' ? keywords : '',
      pageSize,
      currentPage: page,
    });
    console.log(res);
    if (res?.pageData) {
      setDataSource(res?.pageData.map((item) => ({ ...item, operate: '查看详情' })));
      setTotal(res.totalCount);
      setLoading(false);
    } else {
      message.error('获取数据异常');
      setLoading(false);
    }
  };

  /**
   * 企业查询类别
   * @type {{地区: string, 国家: string, 企业名称: string, 负责人: string, 联系方式: string}}
   */
  const classifyList = {
    企业名称: 'name',
    国家: 'country',
    地区: 'address',
    负责人: 'holder',
    联系方式: 'phone',
  };

  /**
   * 添加企业
   */
  const AddLogistic = async ({ name, phone, address, holder, country, file }) => {
    setLoading(true);
    const res = await addLogistics({ name, phone, address, holder, country, file });
    if (res.code === 200) {
      message.success(res.msg);
      setLoading(false);
      setIsEditVisible(false);
      await LogisticList(page, pageSize, classify, keywords);
    } else {
      message.error(res.msg);
      setLoading(false);
    }
  };

  return (
    <div>
      <TableSearch
        style={{ marginBottom: '20px' }}
        confirm={(classify, keywords) => {
          setClassify(classifyList[classify]);
          setKeywords(keywords);
        }}
        refresh={() => {
          setKeywords('');
        }}
        selectOption={LogisticsEnterpriseSelectOption}
      />
      <BasicTable
        columns={LogisticsEnterpriseColumns}
        title="物流企业列表"
        loading={loading}
        rowKey={(record) => record.id}
        onPageChange={(page, pageSize) => {
          setPageSize(pageSize);
          setPage(page);
        }}
        dataSource={dataSource}
        total={total}
      />

      <LogsticModel
        visible={isEditVisible}
        loading={loading}
        title="添加企业"
        onCancel={() => setIsEditVisible(false)}
        onOK={(param) => AddLogistic(param)}
      />
    </div>
  );
};

export default Index;
