import React, { useEffect, useState } from 'react';
import TableSearch from '@/components/Table/TableSearch';
import BasicTable from '@/components/Table/BasicTable';
import { message } from 'antd';
import { addEnterprise, getEnterpriseList } from '@/services/enterprise/enterprise';
import {
  TradingEnterpriseColumn,
  TradingEnterpriseSelectOption,
} from '@/services/TableColumes/platform';
import EnterpriseModal from '@/pages/platformMonitor/EnterpriseMonitor/TradingEnterprise/components/enterpriseModal';
import OrderCommonModal from '@/components/Modal/OrderCommonModal/OrderCommonModal';

const Index = () => {
  /**
   * 表查询参数
   */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [holder, setHolder] = useState('');
  const [country, setCountry] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  /**
   * 列表数据
   */
  const [loading, setLoading] = useState(true);
  const [datasource, setDatasource] = useState([]);
  const [total, setTotal] = useState(0);
  /**
   * 添加企业弹窗控制
   */
  const [isModalVisible, setIsModalVisible] = useState(false);

  /**
   * 需要发送的数据
   * name 公司名
   * phone 联系方式
   * address 地址
   * holder 负责人
   * country 国家
   * currentPage 当前页码
   * pageSize 每页
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    // await getData();
  }, [name, phone, address, holder, country, currentPage, pageSize]);

  //获取企业列表
  const getData = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('holder', holder);
    formData.append('country', country);
    formData.append('currentPage', currentPage.toString());
    formData.append('pageSize', pageSize.toString());
    const list = await getEnterpriseList(formData);
    if (list?.pageData) {
      console.log(list);
      setDatasource(list?.pageData?.map((item) => ({ ...item, operate: '查看详情' })));
      setTotal(list?.totalCount);
      setLoading(false);
    }
  };

  //添加企业确定按钮
  const handleOk = async (addData) => {
    const data = await addEnterprise(addData);
    if (data.code === 200) {
      message.success('添加成功');
      setIsModalVisible(false);
      await getData();
    } else {
      message.error(data.msg || '添加失败');
    }
  };

  return (
    <div>
      <TableSearch
        style={{ marginBottom: '20px' }}
        selectOption={TradingEnterpriseSelectOption}
        refresh={async () => {
          setName('');
          setPhone('');
          setAddress('');
          setHolder('');
          setCountry('');
        }}
        confirm={(classify, keywords) => {
          setName('');
          setPhone('');
          setAddress('');
          setHolder('');
          setCountry('');
          switch (classify) {
            case '企业名称': {
              setName(keywords);
              break;
            }
            case '联系方式': {
              setPhone(keywords);
              break;
            }
            case '地区': {
              setAddress(keywords);
              break;
            }
            case '负责人': {
              setHolder(keywords);
              break;
            }
            case '国家': {
              setCountry(keywords);
              break;
            }
          }
        }}
      />
      <BasicTable
        loading={loading}
        columns={TradingEnterpriseColumn}
        title="买卖企业列表"
        dataSource={datasource}
        onAddHandler={(isModalVisible) => setIsModalVisible(isModalVisible)}
        rowKey={(record) => record.id}
        total={total}
        onPageChange={(page, pageSize) => {
          setCurrentPage(page);
          setPageSize(pageSize);
        }}
      />
      <EnterpriseModal
        visible={isModalVisible}
        handleOk={(formData) => handleOk(formData)}
        visibleHide={() => setIsModalVisible(false)}
      />

      <OrderCommonModal />
    </div>
  );
};
export default Index;
