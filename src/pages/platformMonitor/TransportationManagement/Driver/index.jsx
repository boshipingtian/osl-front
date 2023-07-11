import React, { useEffect, useState } from 'react';
import TableSearch from '@/components/Table/TableSearch';
import BasicTable from '@/components/Table/BasicTable';
import {
  TransportationDriverColumn,
  TransportationDriverSelectOption,
} from '@/services/TableColumes/platform';
import { addDriver, getDriverList, searchDriverList } from '@/services/transportation/driver';
import { message } from 'antd';
import DriverModel from '@/pages/platformMonitor/TransportationManagement/Driver/components/DriverModal';

const Index = () => {
  const [driverList, setDriverList] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [classify, setClassify] = useState('');
  const [keywords, setKeywords] = useState('');

  const [visible, setVisible] = useState(false);

  useEffect(async () => {
    if (classify === '' && keywords === '') {
      await DriverList(page, pageSize);
    } else {
      await searchDriver();
    }
  }, [page, pageSize, classify, keywords]);

  //获取司机列表
  const DriverList = async (page, pageSize) => {
    setLoading(true);
    const res = await getDriverList({ current: page, size: pageSize });
    if (res.success) {
      const data = res.result.pageData;
      data.map((item) => {
        item['operate'] = '查看详情';
      });
      setDriverList(data);
      setTotal(res.result.totalCount);
      setLoading(false);
    } else {
      message.error(res.description);
      setLoading(false);
    }
  };
  //搜索司机列表
  const searchDriver = async () => {
    //['姓名', '已绑定车辆', '未绑定车辆', '驾驶证类型']
    const reqList = {
      姓名: -1,
      已绑定车辆: -2,
      未绑定车辆: -3,
      // 驾驶证类型: 4,
    };
    setLoading(true);
    const res = await searchDriverList({
      type: reqList[classify],
      name: keywords,
      current: page,
      size: pageSize,
    });
    if (res.success) {
      const data = res.result.pageData;
      data.map((item) => {
        item['operate'] = '查看详情';
      });
      setDriverList(data);
      setTotal(res.result.totalCount);
      setLoading(false);
    } else {
      message.error(res.description);
      setLoading(false);
    }
  };

  /**
   * 添加司机
   */
  const CreateDriver = async (data) => {
    setLoading(true);
    console.log({ ...data });
    const res = await addDriver({ ...data });
    if (res.code === 200) {
      setLoading(false);
      setVisible(false);
      await DriverList(page, pageSize);
      message.success(res.msg);
    } else {
      setLoading(false);
      setVisible(false);
      message.error(res.msg);
    }
  };

  return (
    <div>
      <TableSearch
        style={{ marginBottom: '20px' }}
        confirm={(classify, keywords) => {
          setClassify(classify);
          setKeywords(keywords);
        }}
        refresh={async () => {
          await DriverList(page, pageSize);
        }}
        selectOption={TransportationDriverSelectOption}
      />
      <BasicTable
        columns={TransportationDriverColumn}
        rowKey={(record) => record.driverId}
        onPageChange={(page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        }}
        loading={loading}
        title="司机列表"
        dataSource={driverList}
        total={total}
        onAddHandler={() => setVisible(true)}
      />

      <DriverModel
        visible={visible}
        loading={loading}
        title="添加司机"
        onOK={async (params) => CreateDriver(params)}
        onCancel={() => setVisible(false)}
      />
    </div>
  );
};

export default Index;
